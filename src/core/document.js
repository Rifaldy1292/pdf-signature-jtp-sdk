/**
 * document.js — PDF.js wrapper for pdf-signature-sdk
 * Handles loading, page fetching, and canvas rendering.
 */

import * as pdfjs from 'pdfjs-dist';

// Use CDN worker URL keyed to the installed pdfjs-dist version.
// This is the most reliable approach in Vite dev mode.
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.mjs`;

export class DocumentManager {
  constructor(eventBus) {
    /** @type {import('pdfjs-dist').PDFDocumentProxy|null} */
    this._pdfDoc = null;
    /** @type {Map<number, import('pdfjs-dist').RenderTask>} */
    this._renderTasks = new Map();
    /** @type {import('../core/events').EventEmitter} */
    this._bus = eventBus;
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

    this._pdfDoc = await loadingTask.promise;

    const totalPages = this._pdfDoc.numPages;
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
      await this._renderTasks.get(pageNumber).cancel().catch(() => {});
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
    const page = await this.getPage(pageNumber);
    const viewport = page.getViewport({ scale: thumbScale });
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const task = page.render({ canvasContext: ctx, viewport });
    await task.promise.catch(() => {});
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
    for (const [page, task] of this._renderTasks.entries()) {
      await task.cancel().catch(() => {});
    }
    this._renderTasks.clear();

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
