/**
 * document.js — PDF.js wrapper for pdf-signature-sdk
 * Handles loading, page fetching, and canvas rendering.
 */

import * as pdfjs from 'pdfjs-dist';

// Use CDN worker URL keyed to the installed pdfjs-dist version.
// This is the most reliable approach in Vite dev mode.
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.mjs`;

/**
 * Cancel a pdf.js RenderTask. In pdfjs-dist v4, RenderTask.cancel() returns
 * undefined (not a Promise), so it must not be chained with .catch().
 */
function cancelTask(task) {
  try {
    task?.cancel();
  } catch (e) {
    // ignore — task already finished or cancelled
  }
}

/**
 * @typedef {object} PageInfo
 * @property {number} width      visible page width in PDF points (rotation applied)
 * @property {number} height     visible page height in PDF points (rotation applied)
 * @property {number} docWidth   CropBox width as stored in the PDF file (rotation NOT applied)
 * @property {number} docHeight  CropBox height as stored in the PDF file (rotation NOT applied)
 * @property {number} rotate     page /Rotate from the PDF file: 0 | 90 | 180 | 270
 */

/** @returns {PageInfo} */
function pageInfoOf(page) {
  const vp = page.getViewport({ scale: 1 });
  // page.view = CropBox [x0, y0, x1, y1] (pdf.js already intersects it with the MediaBox)
  const [x0, y0, x1, y1] = page.view;
  return {
    width: vp.width,
    height: vp.height,
    docWidth: x1 - x0,
    docHeight: y1 - y0,
    rotate: ((page.rotate % 360) + 360) % 360,
  };
}

/** A4 portrait — only used if page info could not be read at all */
const FALLBACK_PAGE_INFO = { width: 595, height: 842, docWidth: 595, docHeight: 842, rotate: 0 };

export class DocumentManager {
  constructor(eventBus) {
    /** @type {import('pdfjs-dist').PDFDocumentProxy|null} */
    this._pdfDoc = null;
    /** @type {Map<number, import('pdfjs-dist').RenderTask>} */
    this._renderTasks = new Map();
    /** @type {Map<number, import('pdfjs-dist').RenderTask>} */
    this._thumbRenderTasks = new Map();
    /** @type {import('../core/events').EventEmitter} */
    this._bus = eventBus;
    this._isPasswordProtected = false;
    /** @type {Map<number, PageInfo>} info for every page, filled when the document loads */
    this._pageInfos = new Map();
  }

  /**
   * Page size, CropBox size and rotation for a page (PDF points, scale 1).
   * All pages are read when the document loads, so this is exact even for
   * pages that have not been rendered yet.
   * @param {number} pageNumber
   * @returns {PageInfo}
   */
  getPageInfo(pageNumber) {
    return this._pageInfos.get(pageNumber) || this._pageInfos.get(1) || FALLBACK_PAGE_INFO;
  }

  /**
   * Visible size of a page in PDF points (scale 1, rotation applied).
   * @param {number} pageNumber
   * @returns {{width:number, height:number}}
   */
  getPageSize(pageNumber) {
    const { width, height } = this.getPageInfo(pageNumber);
    return { width, height };
  }

  /**
   * Load a PDF from a File, Blob, URL string, or ArrayBuffer.
   * @param {File|Blob|string|ArrayBuffer|Uint8Array} source
   * @returns {Promise<{totalPages: number}>}
   */
  async loadDocument(source) {
    // Cleanup previous document
    await this._cleanup();

    let data;
    if (typeof source === 'string') {
      // URL string — let PDF.js fetch it
      data = source;
    } else if (source instanceof File || source instanceof Blob) {
      data = new Uint8Array(await source.arrayBuffer());
    } else {
      data = source;
    }

    const loadingTask = pdfjs.getDocument(
      typeof data === 'string' ? { url: data } : { data }
    );

    loadingTask.onPassword = (updatePassword, reason) => {
      this._isPasswordProtected = true;
      const isIncorrect = (reason === (pdfjs.PasswordResponses?.INCORRECT_PASSWORD ?? 2));
      this._bus.emit('passwordRequested', {
        updatePassword,
        isIncorrect,
        cancel: () => {
          loadingTask.destroy().catch(() => {});
        }
      });
    };

    this._pdfDoc = await loadingTask.promise;

    const totalPages = this._pdfDoc.numPages;

    // Read size, CropBox and rotation of every page up front. Coordinates are
    // converted to/from the PDF's bottom-left origin per page, so this must be
    // exact for all pages (mixed sizes / rotations), rendered or not.
    const pdfDoc = this._pdfDoc;
    const infos = await Promise.all(
      Array.from({ length: totalPages }, (_, i) =>
        pdfDoc.getPage(i + 1).then(pageInfoOf).catch(() => null)
      )
    );
    if (this._pdfDoc !== pdfDoc) {
      // A newer loadDocument() replaced this document while we were reading pages
      throw new Error('[pdf-signature-sdk] Document load was superseded by a newer load.');
    }
    infos.forEach((info, i) => {
      if (info) this._pageInfos.set(i + 1, info);
    });

    this._bus.emit('documentLoaded', { totalPages });

    return { totalPages };
  }

  /**
   * Get a specific page proxy.
   * @param {number} pageNumber 1-indexed
   * @returns {Promise<import('pdfjs-dist').PDFPageProxy>}
   */
  async getPage(pageNumber) {
    if (!this._pdfDoc) throw new Error('[pdf-signature-sdk] No document loaded.');
    return this._pdfDoc.getPage(pageNumber);
  }

  /**
   * Render a page to a canvas element.
   * @param {number} pageNumber
   * @param {HTMLCanvasElement} canvas
   * @param {number} scale
   * @returns {Promise<void>}
   */
  async renderPage(pageNumber, canvas, scale = 1.5) {
    if (!this._pdfDoc) return;

    // Cancel any in-flight render for this specific page
    if (this._renderTasks.has(pageNumber)) {
      cancelTask(this._renderTasks.get(pageNumber));
      this._renderTasks.delete(pageNumber);
    }

    const page = await this.getPage(pageNumber);
    const viewport = page.getViewport({ scale });

    canvas.width = viewport.width;
    canvas.height = viewport.height;

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const renderTask = page.render({
      canvasContext: ctx,
      viewport,
    });
    
    this._renderTasks.set(pageNumber, renderTask);

    try {
      await renderTask.promise;
    } catch (err) {
      if (err?.name !== 'RenderingCancelledException') {
        console.error('[pdf-signature-sdk] Render error:', err);
        throw err;
      }
    } finally {
      if (this._renderTasks.get(pageNumber) === renderTask) {
        this._renderTasks.delete(pageNumber);
      }
    }
  }

  /**
   * Render a page as a small thumbnail canvas.
   * @param {number} pageNumber
   * @param {HTMLCanvasElement} canvas
   * @param {number} [thumbScale=0.2]
   * @returns {Promise<void>}
   */
  async renderThumbnail(pageNumber, canvas, thumbScale = 0.2) {
    if (!this._pdfDoc) return;

    // BUG-06: cancel any in-flight thumbnail render for this page
    if (this._thumbRenderTasks.has(pageNumber)) {
      cancelTask(this._thumbRenderTasks.get(pageNumber));
      this._thumbRenderTasks.delete(pageNumber);
    }

    const page = await this.getPage(pageNumber);
    if (!this._pdfDoc) return; // document may have been destroyed while awaiting getPage

    const viewport = page.getViewport({ scale: thumbScale });
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const task = page.render({ canvasContext: ctx, viewport });
    this._thumbRenderTasks.set(pageNumber, task);

    try {
      await task.promise;
    } catch (err) {
      if (err?.name !== 'RenderingCancelledException') {
        // swallow cancellations silently; thumbnails failing is non-critical
      }
    } finally {
      if (this._thumbRenderTasks.get(pageNumber) === task) {
        this._thumbRenderTasks.delete(pageNumber);
      }
    }
  }

  /** @returns {boolean} */
  get isPasswordProtected() {
    return this._isPasswordProtected;
  }

  /** @returns {number} */
  get totalPages() {
    return this._pdfDoc ? this._pdfDoc.numPages : 0;
  }

  /** @returns {boolean} */
  get isLoaded() {
    return this._pdfDoc !== null;
  }

  /** Cancel any in-flight render and destroy the PDF document. */
  async _cleanup() {
    this._isPasswordProtected = false;
    for (const task of this._renderTasks.values()) {
      cancelTask(task);
    }
    this._renderTasks.clear();

    // BUG-06: also cancel in-flight thumbnail renders before destroying
    for (const task of this._thumbRenderTasks.values()) {
      cancelTask(task);
    }
    this._thumbRenderTasks.clear();
    this._pageInfos.clear();

    if (this._pdfDoc) {
      await this._pdfDoc.destroy().catch(() => {});
      this._pdfDoc = null;
    }
  }

  /** Full destroy. */
  async destroy() {
    await this._cleanup();
  }
}
