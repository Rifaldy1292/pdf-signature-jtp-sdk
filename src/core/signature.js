/**
 * signature.js — Signature & E-Materai overlay layer for pdf-signature-sdk
 *
 * Manages an overlay canvas on top of the main PDF canvas.
 * Supports:
 *   - Click-to-capture coordinates
 *   - Draggable signature placeholder (native pointer events)
 *   - E-Materai stamp placement
 *   - Multi-page tracking (only shows signatures for current page)
 */

export class SignatureManager {
  /**
   * @param {import('./events').EventEmitter} eventBus
   * @param {import('../utils/config').SDKConfig} config
   */
  constructor(eventBus, config) {
    this._bus = eventBus;
    this._config = config;
    /** @type {Map<number, HTMLCanvasElement>} */
    this._overlayCanvases = new Map();
    /** @type {Map<number, CanvasRenderingContext2D>} */
    this._ctxs = new Map();
    /** @type {Map<number, object>} */
    this._handlers = new Map();
    
    /** @type {number} */
    this._currentPage = 1;
    /**
     * All placed items across all pages.
     * @type {Array<{id:string, type:'signature'|'estamp', x:number, y:number, page:number, width:number, height:number, label:string, image:string, imgElement:HTMLImageElement, isDragging:boolean}>}
     */
    this._items = [];
    /** @type {string|null} — ID of item being dragged */
    this._draggingId = null;
    this._dragOffset = { x: 0, y: 0 };
    /** @type {boolean} — throttle redraw to rAF during drag/resize */
    this._rafPending = false;
    /** @type {string|null} — ID of item being resized */
    this._resizingId = null;
    this._resizeStart = { w: 0, h: 0, px: 0, py: 0 };
    /** @type {Map<number, {w:number, h:number}>} — page canvas dimensions for coordinate rescaling */
    this._pageDimensions = new Map();
  }

  /** Pasang overlay canvas ke halaman tertentu dan daftarkan event handler pointer/touch. */
  attach(page, overlayCanvas) {
    this._overlayCanvases.set(page, overlayCanvas);
    this._ctxs.set(page, overlayCanvas.getContext('2d'));
    
    const onDown = (e) => this._onPointerDown(e, page);
    const onMove = (e) => this._onPointerMove(e, page);
    const onUp = (e) => this._onPointerUp(e, page);

    // Conditionally prevent native touch actions (scrolling) when touching a draggable item
    const onTouchStart = (e) => {
      if (e.touches.length !== 1) return;
      const { x, y } = this._getCanvasCoords(e.touches[0], page);
      if (this._hitTest(x, y, page)) {
        e.preventDefault();
      }
    };

    // Also prevent scroll during active drag (for some mobile browsers like Safari)
    const onTouchMove = (e) => {
      if (this._draggingId || this._resizingId) {
        e.preventDefault();
      }
    };
    
    this._handlers.set(page, { onDown, onMove, onUp, onTouchStart, onTouchMove });

    overlayCanvas.addEventListener('pointerdown', onDown);
    overlayCanvas.addEventListener('pointermove', onMove);
    overlayCanvas.addEventListener('pointerup', onUp);
    overlayCanvas.addEventListener('pointerleave', onUp);
    // BUG-02: handle OS-cancelled gestures (alt-tab, system dialogs, mobile browser interrupt)
    overlayCanvas.addEventListener('pointercancel', onUp);
    overlayCanvas.addEventListener('touchstart', onTouchStart, { passive: false });
    overlayCanvas.addEventListener('touchmove', onTouchMove, { passive: false });
  }

  /**
   * Sync overlay canvas dimensions with the main canvas for a specific page.
   * @param {number} page
   * @param {number} width
   * @param {number} height
   */
  syncSize(page, width, height) {
    const canvas = this._overlayCanvases.get(page);
    if (!canvas) return;

    const oldDim = this._pageDimensions.get(page);
    if (oldDim && oldDim.w > 0 && oldDim.h > 0) {
      const scaleX = width / oldDim.w;
      const scaleY = height / oldDim.h;
      
      if (scaleX !== 1 || scaleY !== 1) {
        const pageItems = this._items.filter((i) => i.page === page);
        for (const item of pageItems) {
          item.x *= scaleX;
          item.y *= scaleY;
          item.width *= scaleX;
          item.height *= scaleY;
        }
      }
    }

    this._pageDimensions.set(page, { w: width, h: height });
    canvas.width = width;
    canvas.height = height;
    this._redrawPage(page);
  }

  /** @param {number} page */
  setPage(page) {
    this._currentPage = page;
  }

  // ─── Mode Control ────────────────────────────────────────────────────────────
  // Modes are removed as items are placed directly and dragging is always active if items exist.

  // ─── Placement API ───────────────────────────────────────────────────────────

  /**
   * Programmatically place a signature at given coordinates (in 1:1 PDF points).
   * @param {{x:number, y:number, page?:number, label?:string, image?:string, width?:number, height?:number, disableDrag?:boolean, disableDragging?:boolean, disableResize?:boolean, locked?:boolean}} opts
   */
  placeSignature({ x, y, page = this._currentPage, label, image, width, height, disableDrag, disableDragging, disableResize, locked } = {}) {
    const scale = this._config?.scale || 1.0;
    const finalLabel = label || 'Signature';
    const canvasX = x !== undefined ? x * scale : 0;
    const canvasY = y !== undefined ? y * scale : 0;
    
    const item = this._createItem('signature', canvasX, canvasY, page, finalLabel, image, width, height, disableDrag, disableDragging, disableResize, locked);
    this._items.push(item);
    this._redrawPage(page);
    this._bus.emit('signaturePlaced', this._publicItem(item));
    return item.id;
  }

  /**
   * Programmatically place an e-materai stamp at given coordinates (in 1:1 PDF points).
   * @param {{x:number, y:number, page?:number, image?:string, width?:number, height?:number, disableDrag?:boolean, disableDragging?:boolean, disableResize?:boolean, locked?:boolean}} opts
   */
  placeEStamp({ x, y, page = this._currentPage, image, width, height, disableDrag, disableDragging, disableResize, locked } = {}) {
    const scale = this._config?.scale || 1.0;
    const canvasX = x !== undefined ? x * scale : 0;
    const canvasY = y !== undefined ? y * scale : 0;
    
    const item = this._createItem('estamp', canvasX, canvasY, page, 'E-Materai', image, width, height, disableDrag, disableDragging, disableResize, locked);
    this._items.push(item);
    this._redrawPage(page);
    this._bus.emit('eStampPlaced', this._publicItem(item));
    return item.id;
  }

  /**
   * Remove a specific item by ID.
   * @param {string} id
   */
  removeItem(id) {
    const item = this._items.find((i) => i.id === id);
    if (!item) return;
    this._items = this._items.filter((i) => i.id !== id);
    this._redrawPage(item.page);
    this._bus.emit('signatureRemoved', { id });
  }

  /** Clear all signatures and stamps. */
  clearAll() {
    this._items = [];
    this._redrawAll();
    // BUG-14: notify UI so counters stay in sync when called programmatically
    this._bus.emit('signaturesCleared');
  }

  /** Redraw all overlay canvases. */
  redraw() {
    this._redrawAll();
  }

  /**
   * Get all placed items (all pages).
   * @returns {Array<object>}
   */
  getAll() {
    return this._items.map((i) => this._publicItem(i));
  }

  /**
   * Get items for a specific page.
   * @param {number} [page]
   */
  getByPage(page = this._currentPage) {
    return this._items.filter((i) => i.page === page).map((i) => this._publicItem(i));
  }

  // ─── Internal ────────────────────────────────────────────────────────────────

  /** @private */
  _createItem(type, x, y, page, label, imageUrl, customWidth, customHeight, disableDrag, disableDragging, disableResize, locked) {
    const scale = this._config?.scale || 1.0;
    const baseWidth = customWidth !== undefined ? customWidth : (type === 'estamp' ? 80 : 160);
    const baseHeight = customHeight !== undefined ? customHeight : (type === 'estamp' ? 80 : 48);

    const item = {
      id: `${type}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      type,
      x,
      y,
      page,
      label,
      image: imageUrl,
      imgElement: null,
      width: baseWidth * scale,
      height: baseHeight * scale,
      isDragging: false,
      disableDrag: !!disableDrag,
      disableDragging: !!disableDragging,
      disableResize: !!disableResize,
      locked: !!locked,
    };
    
    if (imageUrl) {
      const img = new Image();
      img.src = imageUrl;
      img.onload = () => {
        item.imgElement = img;
        
        // If height was not custom-defined, calculate it proportionally based on original aspect ratio
        if (customHeight === undefined) {
          const aspect = img.naturalHeight / img.naturalWidth;
          item.height = item.width * aspect;
          
          // Emit signatureMoved to notify the parent app of the finalized size
          this._bus.emit('signatureMoved', this._publicItem(item));
        }

        this._redrawPage(page); // re-draw when image is loaded
      };
    }
    
    return item;
  }

  /** @private */
  _publicItem(item) {
    const scale = this._config?.scale || 1.0;
    return {
      id: item.id,
      type: item.type,
      x: item.x / scale,
      y: item.y / scale,
      page: item.page,
      label: item.label,
      width: item.width / scale,
      height: item.height / scale,
      disableDrag: item.disableDrag,
      disableDragging: item.disableDragging,
      disableResize: item.disableResize,
      locked: item.locked,
    };
  }

  /** @private */
  _getCanvasCoords(e, page) {
    const canvas = this._overlayCanvases.get(page);
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };
  }

  /** @private — hit testing for components: 'delete', 'resize', 'body' */
  _hitTest(x, y, page) {
    const pageItems = this._items.filter((i) => i.page === page);
    // Iterate in reverse so topmost items are hit first
    for (let i = pageItems.length - 1; i >= 0; i--) {
      const item = pageItems[i];
      
      // Delete handle bounds (top right) — ALWAYS checked and clickable!
      const dx = item.x + item.width;
      const dy = item.y;
      if (Math.hypot(x - dx, y - dy) <= 24) { // 24px radius for hit area
        return { item, part: 'delete' };
      }
      
      const isDragDisabled = this._config.disableDragging || this._config.disableDrag || item.disableDragging || item.disableDrag || item.locked;
      const isResizeDisabled = this._config.disableResize || item.disableResize || this._config.disableDragging || item.disableDragging || item.locked;

      // Resize handle bounds (bottom right)
      if (!isResizeDisabled) {
        const rx = item.x + item.width;
        const ry = item.y + item.height;
        if (x >= rx - 15 && x <= rx + 10 && y >= ry - 15 && y <= ry + 10) {
          return { item, part: 'resize' };
        }
      }
      
      // Body bounds
      if (!isDragDisabled) {
        if (
          x >= item.x &&
          x <= item.x + item.width &&
          y >= item.y &&
          y <= item.y + item.height
        ) {
          return { item, part: 'body' };
        }
      }
    }
    return null;
  }

  /** @private */
  _onPointerDown(e, page) {
    if (e.button !== 0) return;
    const { x, y } = this._getCanvasCoords(e, page);
    const hit = this._hitTest(x, y, page);
    const canvas = this._overlayCanvases.get(page);

    if (hit && canvas) {
      if (hit.part === 'delete') {
        this.removeItem(hit.item.id);
        return;
      }
      
      if (hit.part === 'resize') {
        this._resizingId = hit.item.id;
        this._resizeStart = {
          w: hit.item.width,
          h: hit.item.height,
          px: x,
          py: y
        };
        canvas.setPointerCapture(e.pointerId);
        return;
      }
      
      // Begin drag on existing item
      this._draggingId = hit.item.id;
      this._dragOffset = { x: x - hit.item.x, y: y - hit.item.y };
      canvas.setPointerCapture(e.pointerId);
      canvas.style.cursor = 'grabbing';
    }
  }

  /** @private */
  _onPointerMove(e, page) {
    const { x, y } = this._getCanvasCoords(e, page);
    const canvas = this._overlayCanvases.get(page);
    if (!canvas) return;
    
    // Update cursor based on hover
    if (!this._draggingId && !this._resizingId) {
      const hit = this._hitTest(x, y, page);
      if (hit) {
        if (hit.part === 'delete') canvas.style.cursor = 'pointer';
        else if (hit.part === 'resize') canvas.style.cursor = 'nwse-resize';
        else canvas.style.cursor = 'grab';
      } else {
        canvas.style.cursor = 'default';
      }
      return;
    }

    if (this._resizingId) {
      const item = this._items.find((i) => i.id === this._resizingId);
      if (item && item.page === page) {
        const dx = x - this._resizeStart.px;
        const dy = y - this._resizeStart.py;
        item.width = Math.min(canvas.width - item.x, Math.max(30, this._resizeStart.w + dx));
        item.height = Math.min(canvas.height - item.y, Math.max(30, this._resizeStart.h + dy));
        this._redrawPage(page);
      }
      return;
    }

    if (this._draggingId) {
      const item = this._items.find((i) => i.id === this._draggingId);
      if (item && item.page === page) {
        // Constrain to canvas boundaries
        item.x = Math.max(0, Math.min(canvas.width - item.width, x - this._dragOffset.x));
        item.y = Math.max(0, Math.min(canvas.height - item.height, y - this._dragOffset.y));
        this._redrawPage(page);
      }
    }
  }

  /** @private */
  _onPointerUp(e, page) {
    const canvas = this._overlayCanvases.get(page);
    if (this._draggingId || this._resizingId) {
      const id = this._draggingId || this._resizingId;
      const item = this._items.find((i) => i.id === id);
      if (item) {
        this._bus.emit('signatureMoved', this._publicItem(item));
      }
    }
    this._draggingId = null;
    this._resizingId = null;
    // BUG-05: canvas may have been removed from DOM before pointerup/pointercancel fires
    if (canvas && canvas.isConnected) canvas.style.cursor = 'default';
  }


  /** @private — Redraw all items for all pages */
  _redrawAll() {
    for (const page of this._overlayCanvases.keys()) {
      this._redrawPage(page);
    }
  }

  /** @private — Redraw items for a specific page */
  _redrawPage(page) {
    const ctx = this._ctxs.get(page);
    const canvas = this._overlayCanvases.get(page);
    if (!ctx || !canvas) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const pageItems = this._items.filter((i) => i.page === page);
    
    if (pageItems.length > 0) {
      canvas.classList.add('psdk-overlay--active');
    } else {
      canvas.classList.remove('psdk-overlay--active');
    }

    for (const item of pageItems) {
      if (item.type === 'estamp') {
        this._drawEStamp(ctx, item);
      } else {
        this._drawSignature(ctx, item);
      }
    }
  }

  /** @private */
  _drawSignature(ctx, item) {
    const { x, y, width, height, label, imgElement } = item;
    const radius = 6;

    // Draw Image if loaded
    if (imgElement && imgElement.complete) {
      ctx.drawImage(imgElement, x, y, width, height);
    } else {
      // Fallback — skip shadowBlur during drag/resize (expensive, causes lag)
      const isActive = !!(this._draggingId || this._resizingId);
      if (!isActive) {
        ctx.shadowColor = 'rgba(99,102,241,0.4)';
        ctx.shadowBlur = 12;
      }
      ctx.fillStyle = 'rgba(99, 102, 241, 0.12)';
      this._roundRect(ctx, x, y, width, height, radius);
      ctx.fill();
      ctx.shadowBlur = 0;
      
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.9)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([5, 3]);
      this._roundRect(ctx, x, y, width, height, radius);
      ctx.stroke();
      ctx.setLineDash([]);
      
      // Label
      ctx.fillStyle = 'rgba(99, 102, 241, 1)';
      ctx.font = '600 11px "Inter", system-ui, sans-serif';
      ctx.textBaseline = 'middle';
      ctx.fillText(label, x + 10, y + height / 2);
    }

    const isDragDisabled = this._config.disableDragging || this._config.disableDrag || item.disableDragging || item.disableDrag || item.locked;
    const isResizeDisabled = this._config.disableResize || item.disableResize || this._config.disableDragging || item.disableDragging || item.locked;

    // Always draw delete handle
    this._drawDeleteHandle(ctx, x + width, y);

    if (!isDragDisabled || !isResizeDisabled) {
      // Always draw border to indicate interactivity if not fully locked
      ctx.strokeStyle = 'rgba(255,255,255,0.4)';
      ctx.lineWidth = 1;
      this._roundRect(ctx, x, y, width, height, radius);
      ctx.stroke();
    }

    if (!isResizeDisabled) {
      this._drawResizeHandle(ctx, x + width, y + height);
    }
  }

  /** @private */
  _drawEStamp(ctx, item) {
    const { x, y, width, height, label, imgElement } = item;
    
    if (imgElement && imgElement.complete) {
      ctx.drawImage(imgElement, x, y, width, height);
    } else {
      const cx = x + width / 2;
      const cy = y + height / 2;
      const r = Math.min(width, height) / 2 - 4;

      // Skip shadowBlur during drag/resize (expensive, causes lag)
      const isActive = !!(this._draggingId || this._resizingId);
      if (!isActive) {
        ctx.shadowColor = 'rgba(239,68,68,0.4)';
        ctx.shadowBlur = 12;
      }
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(239,68,68,0.9)';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.fillStyle = 'rgba(239,68,68,0.08)';
      ctx.fill();
      ctx.shadowBlur = 0;
      
      ctx.fillStyle = 'rgba(239,68,68,0.9)';
      ctx.font = 'bold 8px "Inter", system-ui, sans-serif';
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'center';
      ctx.fillText('E-MATERAI', cx, cy);
      ctx.textAlign = 'left';
    }

    const isDragDisabled = this._config.disableDragging || this._config.disableDrag || item.disableDragging || item.disableDrag || item.locked;
    const isResizeDisabled = this._config.disableResize || item.disableResize || this._config.disableDragging || item.disableDragging || item.locked;

    // Always draw delete handle
    this._drawDeleteHandle(ctx, x + width, y);

    if (!isDragDisabled || !isResizeDisabled) {
      // Border
      ctx.strokeStyle = 'rgba(255,255,255,0.4)';
      ctx.lineWidth = 1;
      ctx.strokeRect(x, y, width, height);
    }

    if (!isResizeDisabled) {
      this._drawResizeHandle(ctx, x + width, y + height);
    }
  }

  /** @private */
  _drawResizeHandle(ctx, x, y) {
    ctx.fillStyle = '#fff';
    ctx.strokeStyle = '#666';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Draw tiny arrows
    ctx.strokeStyle = '#333';
    ctx.beginPath();
    ctx.moveTo(x - 2, y + 2);
    ctx.lineTo(x + 2, y - 2);
    ctx.stroke();
  }

  /** @private */
  _drawDeleteHandle(ctx, x, y) {
    ctx.fillStyle = 'rgba(239,68,68,0.8)';
    ctx.beginPath();
    ctx.arc(x, y, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(x - 3, y - 3);
    ctx.lineTo(x + 3, y + 3);
    ctx.moveTo(x + 3, y - 3);
    ctx.lineTo(x - 3, y + 3);
    ctx.stroke();
  }

  /** @private — helper for rounded rect path */
  _roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
  }

  /** Clean up all event listeners and state. */
  destroy() {
    this._items = [];
    if (this._pageDimensions) {
      this._pageDimensions.clear();
    }
    for (const [page, canvas] of this._overlayCanvases.entries()) {
      const handlers = this._handlers.get(page);
      if (handlers) {
        canvas.removeEventListener('pointerdown', handlers.onDown);
        canvas.removeEventListener('pointermove', handlers.onMove);
        canvas.removeEventListener('pointerup', handlers.onUp);
        canvas.removeEventListener('pointerleave', handlers.onUp);
        canvas.removeEventListener('pointercancel', handlers.onUp);
        canvas.removeEventListener('touchstart', handlers.onTouchStart);
        canvas.removeEventListener('touchmove', handlers.onTouchMove);
      }
    }
    this._overlayCanvases.clear();
    this._ctxs.clear();
    this._handlers.clear();
  }
}
