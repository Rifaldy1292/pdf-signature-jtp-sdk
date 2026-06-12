/**
 * viewer.js — Main factory for pdf-signature-sdk
 * Orchestrates all core modules and the UI layer.
 */

import { EventEmitter } from './events.js';
import { DocumentManager } from './document.js';
import { PaginationManager } from './pagination.js';
import { SignatureManager } from './signature.js';
import { mergeConfig, deepMerge } from '../utils/config.js';
import { buildLayout, resolveContainer, buildSkeletonContent } from '../ui/layout.js';
import { buildTopbar } from '../ui/topbar.js';
import { buildSidebar } from '../ui/sidebar.js';
import { buildSignatureModal, buildPasswordModal } from '../ui/modal.js';

// Inject styles once
import '../ui/styles.css';

/**
 * Create a new PDF Viewer instance.
 *
 * @param {Partial<import('../utils/config').SDKConfig>} userConfig
 * @returns {ViewerInstance}
 */
export function createViewer(userConfig = {}) {
  const config = mergeConfig(userConfig);

  // ─── Resolve container ────────────────────────────────────────────────────
  const container = resolveContainer(config.container);
  if (!container) {
    throw new Error('[pdf-signature-sdk] createViewer: invalid container');
  }

  // ─── Core modules ─────────────────────────────────────────────────────────
  const bus = new EventEmitter();
  const docManager = new DocumentManager(bus);
  const pagination = new PaginationManager(bus);
  const sigManager = new SignatureManager(bus, config);

  // ─── Build UI ─────────────────────────────────────────────────────────────
  const nodes = buildLayout(container, config);
  let topbarController = null;
  let sidebarController = null;
  let modalController = null;

  // ─── Internal helpers ─────────────────────────────────────────────────────

  let observer = null;
  let isProgrammaticScroll = false;
  let scrollTimeout = null;
  let programmaticScrollListener = null;
  const visiblePages = new Map();
  /** @type {Map<number, HTMLCanvasElement>} */
  const pageMainCanvases = new Map();
  /** @type {Map<number, HTMLCanvasElement>} */
  const pageOverlayCanvases = new Map();

  // Buat semua elemen canvas (main + overlay) per halaman, lalu mulai observe untuk lazy render
  async function _buildPages(totalPages) {
    nodes.pagesContainer.innerHTML = '';
    pageMainCanvases.clear();
    pageOverlayCanvases.clear();

    if (observer) observer.disconnect();
    visiblePages.clear();

    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const page = parseInt(entry.target.dataset.page, 10);
        
        if (entry.isIntersecting) {
          visiblePages.set(page, entry);
          
          // Render if not already rendered
          if (!entry.target.dataset.rendered) {
            entry.target.dataset.rendered = 'true';
            const mainCanvas = pageMainCanvases.get(page);
            docManager.renderPage(page, mainCanvas, config.scale).then(() => {
              sigManager.syncSize(page, mainCanvas.width, mainCanvas.height);
              
              // Remove the fallback minimums so the wrapper perfectly hugs the actual canvas size
              const wrap = document.getElementById(`psdk-page-${page}`);
              if (wrap) {
                wrap.style.minWidth = `${mainCanvas.width}px`;
                wrap.style.minHeight = `${mainCanvas.height}px`;
              }
            });
          }
        } else {
          visiblePages.delete(page);
        }
      });

      // Determine the current page based on which is most visible or taking up the top part of the viewport
      if (visiblePages.size > 0) {
        let bestPage = pagination.currentPage;
        let maxVisibleArea = -1;
        
        for (const [page, entry] of visiblePages.entries()) {
          // Calculate visible pixel area to find the most prominent page
          const visibleArea = entry.intersectionRect.height;
          if (visibleArea > maxVisibleArea) {
            maxVisibleArea = visibleArea;
            bestPage = page;
          }
        }
        
        if (bestPage !== pagination.currentPage) {
          if (!isProgrammaticScroll) {
            pagination.goToPage(bestPage, 'scroll');
          }
        }
      }
    }, {
      root: nodes.canvasArea,
      rootMargin: '200px 0px',
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
    });

    // Assume standard A4 aspect ratio for initial wrapper sizes
    const fallbackWidth = Math.floor(595 * config.scale);
    const fallbackHeight = Math.floor(842 * config.scale);

    for (let i = 1; i <= totalPages; i++) {
      const wrap = document.createElement('div');
      wrap.className = 'psdk-canvas-wrap';
      wrap.dataset.page = i;
      wrap.id = `psdk-page-${i}`;
      wrap.style.minWidth = `${fallbackWidth}px`;
      wrap.style.minHeight = `${fallbackHeight}px`;

      const mainCanvas = document.createElement('canvas');
      mainCanvas.className = 'psdk-main-canvas';
      wrap.appendChild(mainCanvas);

      const overlayCanvas = document.createElement('canvas');
      overlayCanvas.className = 'psdk-overlay';
      wrap.appendChild(overlayCanvas);

      nodes.pagesContainer.appendChild(wrap);
      
      pageMainCanvases.set(i, mainCanvas);
      pageOverlayCanvases.set(i, overlayCanvas);
      
      sigManager.attach(i, overlayCanvas);
      observer.observe(wrap);
    }
  }

  // ─── Event wiring ─────────────────────────────────────────────────────────

  // Saat halaman berganti: scroll ke halaman tujuan (jika bukan dari scroll), update topbar & sidebar
  bus.on('pageChanged', ({ page, total, source }) => {
    // When page changes from sidebar or topbar, scroll to it
    if (source !== 'scroll') {
      isProgrammaticScroll = true;
      
      if (programmaticScrollListener) {
        nodes.canvasArea.removeEventListener('scroll', programmaticScrollListener);
      }
      
      const wrap = document.getElementById(`psdk-page-${page}`);
      if (wrap) {
        wrap.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      
      // Debounce scroll events to detect when programmatic scroll ends
      programmaticScrollListener = () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          isProgrammaticScroll = false;
          if (programmaticScrollListener) {
            nodes.canvasArea.removeEventListener('scroll', programmaticScrollListener);
            programmaticScrollListener = null;
          }
        }, 150); // 150ms after the last scroll event
      };
      
      nodes.canvasArea.addEventListener('scroll', programmaticScrollListener);
      programmaticScrollListener(); // trigger once immediately
    }
    
    topbarController?.updatePageIndicator(page, total);
    sidebarController?.setActivePage(page);

    bus.emit('_pageReady', { page });
  });

  // Saat dokumen selesai dimuat: tampilkan canvas, bangun halaman, dan perbarui UI
  bus.on('documentLoaded', async ({ totalPages }) => {
    // Hide empty state, show canvas container
    nodes.emptyState.style.display = 'none';
    nodes.pagesContainer.style.display = 'flex';

    pagination.setTotal(totalPages);
    sigManager.clearAll();
    await _buildPages(totalPages);
    topbarController?.updatePageIndicator(1, totalPages);
    topbarController?.updateSecureStatus(docManager.isPasswordProtected);
    await sidebarController?.rebuild(docManager, totalPages);
    bus.emit('_documentReady', { totalPages });
  });


  // ─── Public API ───────────────────────────────────────────────────────────

  /** @type {ViewerInstance} */
  const api = {
    /**
     * Load a new PDF document (File, Blob, URL, ArrayBuffer).
     * Resets page, signatures, sidebar.
     */
    async loadDocument(source) {
      container.classList.add('psdk-loading');
      try {
        await docManager.loadDocument(source);
      } catch (err) {
        // If loading fails or is cancelled, make sure the UI resets to empty state
        nodes.pagesContainer.innerHTML = '';
        nodes.pagesContainer.style.display = 'none';
        nodes.emptyState.style.display = 'flex';
        
        pagination.setTotal(0);
        sigManager.clearAll();
        if (sidebarController) {
          sidebarController.clearThumbnails();
        }
        if (topbarController) {
          topbarController.updatePageIndicator(1, 0);
          topbarController.updateSecureStatus(false);
        }
        
        throw err;
      } finally {
        container.classList.remove('psdk-loading');
      }
    },

    /** Navigate to the next page. */
    nextPage() {
      pagination.nextPage();
    },

    /** Navigate to the previous page. */
    prevPage() {
      pagination.prevPage();
    },

    /**
     * Navigate to a specific page (1-indexed).
     * @param {number} n
     * @returns {boolean} true if navigation happened
     */
    goToPage(n) {
      return pagination.goToPage(n);
    },

    /** @returns {number} */
    get currentPage() {
      return pagination.currentPage;
    },

    /** @returns {number} */
    get totalPages() {
      return pagination.totalPages;
    },

    /** @returns {boolean} */
    get isPasswordProtected() {
      return docManager.isPasswordProtected;
    },

    /**
     * Set the zoom scale and re-render the current page.
     * @param {number} scale  e.g. 1.0 = 100%, 1.5 = 150%
     */
    async setScale(scale) {
      config.scale = Math.min(4, Math.max(0.25, scale));
      if (docManager.isLoaded) {
        // Reset rendered state and re-render visible pages
        nodes.pagesContainer.querySelectorAll('.psdk-canvas-wrap').forEach(wrap => {
          wrap.dataset.rendered = '';
        });
        const current = pagination.currentPage;
        await _buildPages(pagination.totalPages);
        
        // BUG-07: wait one animation frame so browser has laid out the new canvas
        // sizes before we calculate scroll position
        await new Promise((r) => requestAnimationFrame(r));
        const wrap = document.getElementById(`psdk-page-${current}`);
        if (wrap) {
          isProgrammaticScroll = true;
          clearTimeout(scrollTimeout);
          // Instant scroll is better for zoom/resize to avoid visual jumping
          wrap.scrollIntoView({ behavior: 'auto', block: 'start' });
          scrollTimeout = setTimeout(() => {
            isProgrammaticScroll = false;
          }, 850);
        }
      }
    },

    /** @returns {number} */
    get currentScale() {
      return config.scale;
    },

    /** Calculate scale to fit page to screen and apply it */
    async fitToScreen() {
      if (!docManager.isLoaded) return config.scale;
      
      const page = await docManager.getPage(pagination.currentPage);
      const viewport = page.getViewport({ scale: 1.0 });
      
      const padding = 48; // Account for canvasArea padding
      const containerWidth = nodes.canvasArea.clientWidth - padding;
      const containerHeight = nodes.canvasArea.clientHeight - padding;
      
      const widthScale = containerWidth / viewport.width;
      const heightScale = containerHeight / viewport.height;
      
      // Calculate fit scale and clamp between 0.25 and 4.0
      let fitScale = Math.min(widthScale, heightScale);
      fitScale = Math.min(4, Math.max(0.25, fitScale));
      
      await api.setScale(fitScale);
      return fitScale;
    },

    /** Open the signature selection modal */
    openSignatureModal() {
      if (modalController) modalController.open('signature');
    },

    /** Open the e-materai selection modal */
    openEStampModal() {
      if (modalController) modalController.open('estamp');
    },

    /**
     * Programmatically place a signature.
     * @param {{x?:number, y?:number, page?:number, label?:string, image?:string}} opts
     */
    placeSignature(opts = {}) {
      const page = opts.page || pagination.currentPage;
      opts.page = page;
      if (opts.x === undefined || opts.y === undefined) {
        const canvas = pageMainCanvases.get(page);
        if (canvas) {
          const scale = config.scale || 1.0;
          const pdfWidth = canvas.width / scale;
          const pdfHeight = canvas.height / scale;
          opts.x = pdfWidth / 2 - 80; // assume 160 width in 1:1 points
          opts.y = pdfHeight / 2 - 24; // assume 48 height in 1:1 points
        }
      }
      return sigManager.placeSignature(opts);
    },

    /**
     * Programmatically place an e-materai stamp.
     * @param {{x?:number, y?:number, page?:number, image?:string}} opts
     */
    placeEStamp(opts = {}) {
      const page = opts.page || pagination.currentPage;
      opts.page = page;
      if (opts.x === undefined || opts.y === undefined) {
        const canvas = pageMainCanvases.get(page);
        if (canvas) {
          const scale = config.scale || 1.0;
          const pdfWidth = canvas.width / scale;
          const pdfHeight = canvas.height / scale;
          opts.x = pdfWidth / 2 - 40; // assume 80 width in 1:1 points
          opts.y = pdfHeight / 2 - 40; // assume 80 height in 1:1 points
        }
      }
      return sigManager.placeEStamp(opts);
    },

    /** Remove a specific signature/stamp by ID. */
    removeSignature(id) {
      sigManager.removeItem(id);
    },

    /** Clear all signatures and stamps. */
    clearSignatures() {
      sigManager.clearAll();
    },

    /** @returns {Array<object>} All placed items across all pages. */
    getSignatures() {
      return sigManager.getAll();
    },

    /**
     * Get signatures for a specific page.
     * @param {number} [page]
     */
    getSignaturesByPage(page) {
      return sigManager.getByPage(page);
    },

    /**
     * Register an event listener.
     * Events: documentLoaded, pageChanged, signaturePlaced, eStampPlaced,
     *         signatureMoved, signatureRemoved, signaturesCleared, passwordRequested
     */
    on(event, fn) {
      bus.on(event, fn);
      return api;
    },

    /** Remove an event listener. */
    off(event, fn) {
      bus.off(event, fn);
      return api;
    },

    /** Update UI config dynamically — shows/hides toolbar and sidebar elements. */
    updateConfig(partialConfig) {
      // Deep merge partialConfig into the shared config object in-place
      // so all closures referencing `config` stay in sync
      const merged = deepMerge(config, partialConfig);
      // Copy merged values back into the same object reference
      Object.keys(merged).forEach((k) => { config[k] = merged[k]; });

      topbarController?.applyConfig(config);
      sidebarController?.applyConfig(config);

      // Show/hide sidebar element directly (since it's created at build time)
      if (nodes.sidebar) {
        nodes.sidebar.style.display =
          config.ui?.sidebar?.thumbnails !== false ? '' : 'none';
      }

      // Handle disabled state
      if (config.disabled) {
        nodes.root.classList.add('psdk-disabled');
      } else {
        nodes.root.classList.remove('psdk-disabled');
      }

      // Handle theme
      if (config.theme === 'light') {
        nodes.root.classList.add('psdk-light');
      } else {
        nodes.root.classList.remove('psdk-light');
      }

      // Redraw overlay to reflect changes in disableDragging or scale
      sigManager.redraw();
    },


    /** Get the main PDF canvas element for current page. */
    getCanvas(page = pagination.currentPage) {
      return pageMainCanvases.get(page);
    },

    /** Get the overlay canvas element for current page. */
    getOverlayCanvas(page = pagination.currentPage) {
      return pageOverlayCanvases.get(page);
    },

    /** Disable/Enable page navigation */
    setPaginationLocked(locked) {
      pagination.setLocked(locked);
      topbarController?.setPaginationLocked(locked);
      sidebarController?.setPaginationLocked(locked);
    },
    
    /** @returns {boolean} */
    get isPaginationLocked() {
      return pagination.isLocked;
    },

    /** Destroy the viewer and clean up all resources. */
    async destroy() {
      // Clear any pending scroll timers & listeners to avoid zombie callbacks
      clearTimeout(scrollTimeout);
      if (programmaticScrollListener) {
        nodes.canvasArea.removeEventListener('scroll', programmaticScrollListener);
        programmaticScrollListener = null;
      }
      if (observer) observer.disconnect();
      sigManager.destroy();
      await docManager.destroy();
      pagination.reset();
      bus.removeAllListeners();
      container.innerHTML = '';
    },

    /**
     * Show or hide the full-view skeleton loader overlay.
     * @param {boolean} visible True to show the loader, false to hide it.
     * @param {string|HTMLElement|object} [options] Custom HTML/element, or options object (customHTML, opacity, blur).
     */
    showSkeleton(visible, options = null) {
      if (visible) {
        let customHTML = null;
        let opacity = null;
        let blur = null;

        if (options) {
          if (typeof options === 'string' || options instanceof HTMLElement) {
            customHTML = options;
          } else if (typeof options === 'object') {
            customHTML = options.customHTML;
            opacity = options.opacity;
            blur = options.blur;
          }
        }

        // Apply custom opacity
        if (opacity !== null && opacity !== undefined) {
          nodes.skeletonOverlay.style.setProperty('--psdk-skeleton-bg-opacity', opacity);
        } else {
          nodes.skeletonOverlay.style.removeProperty('--psdk-skeleton-bg-opacity');
        }

        // Apply custom blur
        if (blur !== null && blur !== undefined) {
          nodes.skeletonOverlay.style.setProperty('--psdk-skeleton-blur', blur);
        } else {
          nodes.skeletonOverlay.style.removeProperty('--psdk-skeleton-blur');
        }

        buildSkeletonContent(nodes.skeletonOverlay, customHTML);
        nodes.skeletonOverlay.style.display = 'flex';
        // Force reflow for opacity transition
        nodes.skeletonOverlay.offsetHeight;
        nodes.skeletonOverlay.classList.add('psdk-skeleton-overlay--active');
      } else {
        nodes.skeletonOverlay.classList.remove('psdk-skeleton-overlay--active');
        const onTransitionEnd = (e) => {
          if (e.propertyName === 'opacity' && !nodes.skeletonOverlay.classList.contains('psdk-skeleton-overlay--active')) {
            nodes.skeletonOverlay.style.display = 'none';
            nodes.skeletonOverlay.removeEventListener('transitionend', onTransitionEnd);
          }
        };
        nodes.skeletonOverlay.addEventListener('transitionend', onTransitionEnd);
        // Fallback
        setTimeout(() => {
          if (!nodes.skeletonOverlay.classList.contains('psdk-skeleton-overlay--active')) {
            nodes.skeletonOverlay.style.display = 'none';
          }
        }, 250);
      }
    },
  };

  if (nodes.topbar) {
    topbarController = buildTopbar(nodes.topbar, config, api);
  }

  if (nodes.sidebar) {
    sidebarController = buildSidebar(nodes.sidebar, config, api);
  }

  if (nodes.modalOverlay) {
    modalController = buildSignatureModal(nodes.modalOverlay, config, api);
  }

  let passwordModalController = null;
  if (nodes.root) {
    passwordModalController = buildPasswordModal(nodes.root, config, api);
  }



  // ─── Auto-load if file provided ───────────────────────────────────────────
  if (config.file) {
    api.loadDocument(config.file).catch((e) => {
      console.error('[pdf-signature-sdk] Auto-load failed:', e);
    });
  }

  return api;
}

/**
 * @typedef {object} ViewerInstance
 * @property {function} loadDocument
 * @property {function} nextPage
 * @property {function} prevPage
 * @property {function} goToPage
 * @property {number} currentPage
 * @property {number} totalPages
 * @property {function} placeSignature
 * @property {function} placeEStamp
 * @property {function} removeSignature
 * @property {function} clearSignatures
 * @property {function} getSignatures
 * @property {function} getSignaturesByPage
 * @property {function} on
 * @property {function} off
 * @property {function} updateConfig
 * @property {function} getCanvas
 * @property {function} getOverlayCanvas
 * @property {function} fitToScreen
 * @property {function} setPaginationLocked
 * @property {boolean} isPaginationLocked
 * @property {function} destroy
 * @property {function} showSkeleton
 */

