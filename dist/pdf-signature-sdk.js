(function(){"use strict";try{if(typeof document<"u"){var r=document.createElement("style");r.appendChild(document.createTextNode(':root,.psdk-root{--psdk-bg-base: #0f1117;--psdk-bg-surface: #1a1d27;--psdk-bg-elevated: #22263a;--psdk-bg-hover: #2a2f45;--psdk-border: rgba(255, 255, 255, .08);--psdk-border-strong: rgba(255, 255, 255, .14);--psdk-accent: #6366f1;--psdk-accent-hover: #4f52e0;--psdk-accent-glow: rgba(99, 102, 241, .35);--psdk-accent-subtle: rgba(99, 102, 241, .12);--psdk-danger: #ef4444;--psdk-danger-subtle: rgba(239, 68, 68, .12);--psdk-success: #22c55e;--psdk-warning: #f59e0b;--psdk-text-primary: #f1f5f9;--psdk-text-secondary: #8b92a5;--psdk-text-muted: #5a6070;--psdk-topbar-height: 56px;--psdk-sidebar-width: 190px;--psdk-sidebar-thumb-scale: .22;--psdk-radius-sm: 6px;--psdk-radius-md: 10px;--psdk-radius-lg: 14px;--psdk-shadow-sm: 0 2px 8px rgba(0, 0, 0, .35);--psdk-shadow-md: 0 4px 20px rgba(0, 0, 0, .5);--psdk-shadow-glow: 0 0 20px var(--psdk-accent-glow);--psdk-transition: .15s cubic-bezier(.4, 0, .2, 1);--psdk-font: "Inter", "Segoe UI", system-ui, -apple-system, sans-serif}.psdk-root.psdk-light{--psdk-bg-base: #f8fafc;--psdk-bg-surface: #ffffff;--psdk-bg-elevated: #f1f5f9;--psdk-bg-hover: #e2e8f0;--psdk-border: rgba(0, 0, 0, .08);--psdk-border-strong: rgba(0, 0, 0, .14);--psdk-text-primary: #0f172a;--psdk-text-secondary: #475569;--psdk-text-muted: #64748b;--psdk-shadow-sm: 0 2px 8px rgba(0, 0, 0, .05);--psdk-shadow-md: 0 4px 20px rgba(0, 0, 0, .08)}.psdk-root{font-family:var(--psdk-font);display:flex;flex-direction:column;width:100%;height:100%;min-height:400px;background:var(--psdk-bg-base);color:var(--psdk-text-primary);overflow:hidden;box-sizing:border-box;position:relative;border-radius:var(--psdk-radius-lg);box-shadow:var(--psdk-shadow-md)}.psdk-root *,.psdk-root *:before,.psdk-root *:after{box-sizing:border-box}.psdk-root.psdk-loading:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:#0f1117a6;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);z-index:1000;border-radius:inherit}.psdk-root.psdk-loading:before{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:40px;height:40px;border:3px solid var(--psdk-border);border-top-color:var(--psdk-accent);border-radius:50%;animation:psdk-spin .7s linear infinite;z-index:1001}@keyframes psdk-spin{to{transform:translate(-50%,-50%) rotate(360deg)}}.psdk-topbar{display:flex;align-items:center;flex-wrap:wrap;gap:6px;min-height:var(--psdk-topbar-height);padding:8px 16px;background:var(--psdk-bg-surface);border-bottom:1px solid var(--psdk-border);flex-shrink:0;z-index:10;position:relative}.psdk-topbar__brand{display:flex;align-items:center;gap:8px;margin-right:8px;padding-right:16px;border-right:1px solid var(--psdk-border)}.psdk-topbar__brand-icon{width:28px;height:28px;background:linear-gradient(135deg,var(--psdk-accent),#818cf8);border-radius:8px;display:flex;align-items:center;justify-content:center;box-shadow:var(--psdk-shadow-glow)}.psdk-topbar__brand-icon svg{width:16px;height:16px;fill:#fff}.psdk-topbar__brand-text{font-size:13px;font-weight:700;color:var(--psdk-text-primary);letter-spacing:-.3px}.psdk-topbar__divider{width:1px;height:24px;background:var(--psdk-border);margin:0 4px}.psdk-topbar__spacer{flex:1}.psdk-topbar__custom{display:flex;align-items:center;gap:8px}.psdk-btn{display:inline-flex;align-items:center;gap:6px;padding:7px 12px;border:1px solid var(--psdk-border);border-radius:var(--psdk-radius-sm);background:var(--psdk-bg-elevated);color:var(--psdk-text-primary);font-family:var(--psdk-font);font-size:12px;font-weight:500;cursor:pointer;transition:all var(--psdk-transition);white-space:nowrap;line-height:1;-webkit-user-select:none;user-select:none}@media (hover: hover) and (pointer: fine){.psdk-btn:hover{background:var(--psdk-bg-hover);border-color:var(--psdk-border-strong);transform:translateY(-1px);box-shadow:var(--psdk-shadow-sm)}}.psdk-btn:active{transform:translateY(0);box-shadow:none}.psdk-btn svg{width:14px;height:14px;flex-shrink:0;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.psdk-btn--accent{background:var(--psdk-accent);border-color:var(--psdk-accent);color:#fff;box-shadow:0 2px 12px var(--psdk-accent-glow)}@media (hover: hover) and (pointer: fine){.psdk-btn--accent:hover{background:var(--psdk-accent-hover);border-color:var(--psdk-accent-hover);box-shadow:0 4px 18px var(--psdk-accent-glow)}}.psdk-btn--accent.psdk-btn--active{background:#4338ca;border-color:#4338ca;box-shadow:0 0 0 3px #6366f14d;animation:psdk-pulse 2s infinite}@keyframes psdk-pulse{0%,to{box-shadow:0 0 0 3px #6366f14d}50%{box-shadow:0 0 0 6px #6366f11a}}.psdk-btn--danger{background:var(--psdk-danger-subtle);border-color:#ef44444d;color:var(--psdk-danger)}@media (hover: hover) and (pointer: fine){.psdk-btn--danger:hover{background:var(--psdk-danger);border-color:var(--psdk-danger);color:#fff}}.psdk-btn--ghost{background:transparent;border-color:transparent;color:var(--psdk-text-secondary)}@media (hover: hover) and (pointer: fine){.psdk-btn--ghost:hover{background:var(--psdk-bg-elevated);border-color:var(--psdk-border);color:var(--psdk-text-primary)}}.psdk-btn--icon{padding:7px}.psdk-btn:disabled{opacity:.35;cursor:not-allowed;pointer-events:none}.psdk-file-input{position:absolute;width:0;height:0;opacity:0;pointer-events:none}.psdk-root.psdk-disabled .psdk-btn,.psdk-root.psdk-disabled .psdk-sidebar__scroll,.psdk-root.psdk-disabled .psdk-overlay{opacity:.5;pointer-events:none;cursor:not-allowed}.psdk-pagination{display:flex;align-items:center;gap:6px}.psdk-pagination__indicator{display:flex;align-items:center;gap:4px;padding:6px 10px;background:var(--psdk-bg-base);border:1px solid var(--psdk-border);border-radius:var(--psdk-radius-sm);font-size:12px;font-weight:500;color:var(--psdk-text-secondary);min-width:80px;justify-content:center}.psdk-pagination__current{color:var(--psdk-text-primary);font-weight:700;font-size:13px}.psdk-pagination__current-input{width:36px;background:transparent;border:1px solid transparent;color:var(--psdk-text-primary);font-weight:700;font-size:13px;text-align:center;font-family:inherit;outline:none;border-radius:4px;transition:all .15s}.psdk-pagination__current-input:focus{background:#ffffff0d;border-color:var(--psdk-accent)}.psdk-pagination__current-input:disabled{opacity:.5;cursor:not-allowed}.psdk-pagination__current-input::-webkit-inner-spin-button,.psdk-pagination__current-input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.psdk-pagination__current-input[type=number]{-moz-appearance:textfield}.psdk-pagination__sep{color:var(--psdk-text-muted)}.psdk-zoom-badge{display:inline-flex;align-items:center;padding:5px 10px;background:var(--psdk-bg-base);border:1px solid var(--psdk-border);border-radius:var(--psdk-radius-sm);font-size:11px;font-weight:600;color:var(--psdk-text-secondary);min-width:52px;justify-content:center}.psdk-body{display:flex;flex:1;overflow:hidden;position:relative}.psdk-sidebar{width:var(--psdk-sidebar-width);flex-shrink:0;background:var(--psdk-bg-surface);border-right:1px solid var(--psdk-border);display:flex;flex-direction:column;overflow:hidden}.psdk-sidebar__header{display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border-bottom:1px solid var(--psdk-border);flex-shrink:0}.psdk-sidebar__title{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--psdk-text-muted)}.psdk-sidebar__count{font-size:10px;font-weight:600;color:var(--psdk-text-muted);background:var(--psdk-bg-elevated);border-radius:20px;padding:2px 7px}.psdk-sidebar__scroll{flex:1;overflow-y:auto;overflow-x:hidden;padding:8px;display:flex;flex-direction:column;gap:6px}.psdk-sidebar__scroll::-webkit-scrollbar{width:4px}.psdk-sidebar__scroll::-webkit-scrollbar-track{background:transparent}.psdk-sidebar__scroll::-webkit-scrollbar-thumb{background:var(--psdk-border);border-radius:4px}.psdk-sidebar__scroll::-webkit-scrollbar-thumb:hover{background:var(--psdk-border-strong)}.psdk-thumb{display:flex;flex-direction:column;align-items:center;gap:5px;padding:6px;border-radius:var(--psdk-radius-md);cursor:pointer;transition:all var(--psdk-transition);border:1px solid transparent;position:relative}@media (hover: hover) and (pointer: fine){.psdk-thumb:hover{background:var(--psdk-bg-elevated);border-color:var(--psdk-border);transform:translateY(-1px)}}.psdk-thumb--active{background:var(--psdk-accent-subtle)!important;border-color:var(--psdk-accent)!important;box-shadow:0 0 0 1px var(--psdk-accent)}.psdk-thumb__canvas-wrap{width:100%;display:flex;justify-content:center;align-items:center;background:#fff;border-radius:4px;overflow:hidden;box-shadow:var(--psdk-shadow-sm)}.psdk-thumb canvas{display:block;max-width:100%;height:auto}.psdk-thumb__label{font-size:9px;font-weight:600;color:var(--psdk-text-muted);letter-spacing:.04em}.psdk-thumb--active .psdk-thumb__label{color:var(--psdk-accent)}.psdk-thumb-skeleton{width:100%;height:120px;background:linear-gradient(90deg,var(--psdk-bg-elevated) 25%,var(--psdk-bg-hover) 50%,var(--psdk-bg-elevated) 75%);background-size:200% 100%;animation:psdk-shimmer 1.5s infinite;border-radius:var(--psdk-radius-sm)}@keyframes psdk-shimmer{0%{background-position:200% 0}to{background-position:-200% 0}}.psdk-viewer{flex:1;display:flex;flex-direction:column;overflow:hidden;background:var(--psdk-bg-base);position:relative}.psdk-viewer__canvas-area{flex:1;overflow:auto;display:flex;flex-direction:column;padding:24px;position:relative}.psdk-pages-container{display:flex;flex-direction:column;align-items:center;gap:24px;width:fit-content;min-width:100%;margin:auto}.psdk-viewer__canvas-area::-webkit-scrollbar{width:6px;height:6px}.psdk-viewer__canvas-area::-webkit-scrollbar-track{background:transparent}.psdk-viewer__canvas-area::-webkit-scrollbar-thumb{background:var(--psdk-border);border-radius:4px}.psdk-viewer__canvas-area::-webkit-scrollbar-thumb:hover{background:var(--psdk-border-strong)}.psdk-canvas-wrap{position:relative;display:inline-block;box-shadow:0 8px 40px #0009,0 0 0 1px #ffffff0f;border-radius:2px;background:#fff;transform-origin:top center;transition:transform .2s ease}.psdk-canvas-wrap canvas{display:block;border-radius:2px}.psdk-overlay{position:absolute;top:0;left:0;pointer-events:none;border-radius:2px}.psdk-overlay--active{pointer-events:all}.psdk-empty{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:var(--psdk-text-muted)}.psdk-empty__icon{width:72px;height:72px;opacity:.25}.psdk-empty__icon svg{width:100%;height:100%;stroke:var(--psdk-text-secondary);fill:none;stroke-width:1.5}.psdk-empty__title{font-size:16px;font-weight:600;color:var(--psdk-text-secondary)}.psdk-empty__sub{font-size:13px;color:var(--psdk-text-muted);text-align:center;max-width:260px;line-height:1.5}.psdk-empty__cta{margin-top:8px}.psdk-tooltip{position:relative}.psdk-tooltip:after{content:attr(data-tooltip);position:absolute;bottom:calc(100% + 8px);left:50%;transform:translate(-50%);background:#1e2030;color:var(--psdk-text-primary);font-size:11px;font-weight:500;padding:4px 8px;border-radius:5px;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity .15s;border:1px solid var(--psdk-border);box-shadow:var(--psdk-shadow-sm);z-index:100}@media (hover: hover) and (pointer: fine){.psdk-tooltip:hover:after{opacity:1}}.psdk-mode-banner{position:absolute;bottom:16px;left:50%;transform:translate(-50%);display:flex;align-items:center;gap:8px;padding:8px 16px;background:var(--psdk-accent);color:#fff;border-radius:20px;font-size:12px;font-weight:600;box-shadow:0 4px 20px var(--psdk-accent-glow);animation:psdk-slide-up .2s cubic-bezier(.34,1.56,.64,1);z-index:50;white-space:nowrap;letter-spacing:.02em}.psdk-mode-banner__dot{width:7px;height:7px;border-radius:50%;background:#ffffffb3;animation:psdk-blink 1s infinite}@keyframes psdk-blink{0%,to{opacity:1}50%{opacity:.3}}@keyframes psdk-slide-up{0%{opacity:0;transform:translate(-50%) translateY(12px)}to{opacity:1;transform:translate(-50%) translateY(0)}}.psdk-statusbar{display:flex;align-items:center;gap:12px;padding:6px 16px;background:var(--psdk-bg-surface);border-top:1px solid var(--psdk-border);font-size:11px;color:var(--psdk-text-muted);flex-shrink:0}.psdk-statusbar__item{display:flex;align-items:center;gap:5px}.psdk-statusbar__dot{width:5px;height:5px;border-radius:50%;background:var(--psdk-success)}.psdk-statusbar__dot--sig{background:var(--psdk-accent);animation:psdk-blink 1s infinite}.psdk-statusbar__spacer{flex:1}@media (max-width: 640px){.psdk-topbar{justify-content:center;padding:10px 12px;gap:8px}.psdk-topbar__spacer{display:none}.psdk-topbar__brand{width:100%;justify-content:center;border-right:none;margin-right:0;padding-right:0;margin-bottom:4px}.psdk-btn{padding:8px 10px}}.psdk-modal-overlay{position:absolute;top:0;right:0;bottom:0;left:0;background:#0f1117b3;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);z-index:2000;display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .2s ease;border-radius:inherit}.psdk-modal-overlay--active{opacity:1}.psdk-modal{background:var(--psdk-bg-surface);border:1px solid var(--psdk-border);border-radius:var(--psdk-radius-lg);box-shadow:var(--psdk-shadow-md);width:90%;max-width:360px;display:flex;flex-direction:column;transform:scale(.95) translateY(10px);opacity:0;transition:all .2s cubic-bezier(.34,1.56,.64,1);overflow:hidden}.psdk-modal--active{transform:scale(1) translateY(0);opacity:1}.psdk-modal__header{display:flex;align-items:center;justify-content:space-between;padding:16px 20px;border-bottom:1px solid var(--psdk-border);background:var(--psdk-bg-base)}.psdk-modal__title{font-size:14px;font-weight:700;color:var(--psdk-text-primary);margin:0}.psdk-modal__close{background:transparent;border:none;color:var(--psdk-text-muted);cursor:pointer;padding:4px;display:flex;align-items:center;justify-content:center;border-radius:var(--psdk-radius-sm);transition:all var(--psdk-transition)}.psdk-modal__close:hover{background:var(--psdk-bg-hover);color:var(--psdk-text-primary)}.psdk-modal__close svg{width:18px;height:18px}.psdk-modal__body{padding:20px;max-height:400px;overflow-y:auto}.psdk-modal__list{display:flex;flex-direction:column;gap:10px}.psdk-modal__item{display:flex;align-items:center;gap:12px;padding:12px 16px;background:var(--psdk-bg-elevated);border:1px solid var(--psdk-border);border-radius:var(--psdk-radius-md);cursor:pointer;transition:all var(--psdk-transition);text-align:left;color:var(--psdk-text-primary);font-family:var(--psdk-font);width:100%}.psdk-modal__item:hover{background:var(--psdk-bg-hover);border-color:var(--psdk-border-strong);transform:translateY(-1px)}.psdk-modal__item:active{transform:translateY(0)}.psdk-modal__item-icon{width:32px;height:32px;border-radius:8px;background:var(--psdk-accent-subtle);color:var(--psdk-accent);display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden}.psdk-modal__item-icon--image{background:#fff}.psdk-modal__item-icon img{width:100%;height:100%;object-fit:contain}.psdk-modal__item-icon svg{width:18px;height:18px}.psdk-modal__item-label{font-size:13px;font-weight:600}@media (max-width: 768px){.psdk-body{flex-direction:column}.psdk-viewer{min-height:0;order:1}.psdk-sidebar{order:2;width:100%;height:140px;flex:0 0 140px;border-right:none;border-top:1px solid var(--psdk-border)}.psdk-sidebar__header{padding:6px 12px}.psdk-sidebar__scroll{flex-direction:row;overflow-y:hidden;overflow-x:auto;padding:10px 12px;height:100px;flex:0 0 100px}.psdk-sidebar__scroll::-webkit-scrollbar{height:4px}.psdk-thumb{width:80px;min-height:90px;flex-shrink:0;justify-content:center}.psdk-thumb-skeleton{width:80px;height:90px;flex-shrink:0}}')),document.head.appendChild(r)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
var Jf = Object.defineProperty;
var Ld = (d) => {
  throw TypeError(d);
};
var tp = (d, t, e) => t in d ? Jf(d, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : d[t] = e;
var $ = (d, t, e) => tp(d, typeof t != "symbol" ? t + "" : t, e), Wh = (d, t, e) => t.has(d) || Ld("Cannot " + e);
var r = (d, t, e) => (Wh(d, t, "read from private field"), e ? e.call(d) : t.get(d)), m = (d, t, e) => t.has(d) ? Ld("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(d) : t.set(d, e), p = (d, t, e, s) => (Wh(d, t, "write to private field"), s ? s.call(d, e) : t.set(d, e), e), A = (d, t, e) => (Wh(d, t, "access private method"), e);
var ne = (d, t, e, s) => ({
  set _(i) {
    p(d, t, i, e);
  },
  get _() {
    return r(d, t, s);
  }
});
class ep {
  constructor() {
    this._listeners = /* @__PURE__ */ new Map();
  }
  /**
   * Register an event listener.
   * @param {string} event
   * @param {Function} fn
   * @returns {this}
   */
  on(t, e) {
    return this._listeners.has(t) || this._listeners.set(t, /* @__PURE__ */ new Set()), this._listeners.get(t).add(e), this;
  }
  /**
   * Register a one-time event listener.
   * @param {string} event
   * @param {Function} fn
   * @returns {this}
   */
  once(t, e) {
    const s = (...i) => {
      e(...i), this.off(t, s);
    };
    return this.on(t, s);
  }
  /**
   * Remove an event listener.
   * @param {string} event
   * @param {Function} fn
   * @returns {this}
   */
  off(t, e) {
    const s = this._listeners.get(t);
    return s && s.delete(e), this;
  }
  /**
   * Emit an event with optional arguments.
   * @param {string} event
   * @param {...any} args
   * @returns {this}
   */
  emit(t, ...e) {
    const s = this._listeners.get(t);
    return s && s.forEach((i) => {
      try {
        i(...e);
      } catch (n) {
        console.error(`[pdf-signature-sdk] Error in "${t}" listener:`, n);
      }
    }), this;
  }
  /**
   * Remove all listeners for a given event, or all events if none specified.
   * @param {string} [event]
   */
  removeAllListeners(t) {
    t ? this._listeners.delete(t) : this._listeners.clear();
  }
}
var Qa = {};
Qa.d = (d, t) => {
  for (var e in t)
    Qa.o(t, e) && !Qa.o(d, e) && Object.defineProperty(d, e, { enumerable: !0, get: t[e] });
};
Qa.o = (d, t) => Object.prototype.hasOwnProperty.call(d, t);
var V = globalThis.pdfjsLib = {};
Qa.d(V, {
  AbortException: () => (
    /* reexport */
    Yi
  ),
  AnnotationEditorLayer: () => (
    /* reexport */
    ld
  ),
  AnnotationEditorParamsType: () => (
    /* reexport */
    J
  ),
  AnnotationEditorType: () => (
    /* reexport */
    X
  ),
  AnnotationEditorUIManager: () => (
    /* reexport */
    cr
  ),
  AnnotationLayer: () => (
    /* reexport */
    Kg
  ),
  AnnotationMode: () => (
    /* reexport */
    bi
  ),
  ColorPicker: () => (
    /* reexport */
    mh
  ),
  DOMSVGFactory: () => (
    /* reexport */
    _d
  ),
  DrawLayer: () => (
    /* reexport */
    dd
  ),
  FeatureTest: () => (
    /* reexport */
    ce
  ),
  GlobalWorkerOptions: () => (
    /* reexport */
    di
  ),
  ImageKind: () => (
    /* reexport */
    Fl
  ),
  InvalidPDFException: () => (
    /* reexport */
    ec
  ),
  MissingPDFException: () => (
    /* reexport */
    Ja
  ),
  OPS: () => (
    /* reexport */
    Ke
  ),
  OutputScale: () => (
    /* reexport */
    ic
  ),
  PDFDataRangeTransport: () => (
    /* reexport */
    tf
  ),
  PDFDateString: () => (
    /* reexport */
    Ad
  ),
  PDFWorker: () => (
    /* reexport */
    Cr
  ),
  PasswordResponses: () => (
    /* reexport */
    rp
  ),
  PermissionFlag: () => (
    /* reexport */
    np
  ),
  PixelsPerInch: () => (
    /* reexport */
    Ki
  ),
  RenderingCancelledException: () => (
    /* reexport */
    md
  ),
  TextLayer: () => (
    /* reexport */
    to
  ),
  TouchManager: () => (
    /* reexport */
    ph
  ),
  UnexpectedResponseException: () => (
    /* reexport */
    dh
  ),
  Util: () => (
    /* reexport */
    H
  ),
  VerbosityLevel: () => (
    /* reexport */
    Bh
  ),
  XfaLayer: () => (
    /* reexport */
    sf
  ),
  build: () => (
    /* reexport */
    Mg
  ),
  createValidAbsoluteUrl: () => (
    /* reexport */
    hp
  ),
  fetchData: () => (
    /* reexport */
    Gh
  ),
  getDocument: () => (
    /* reexport */
    wg
  ),
  getFilenameFromUrl: () => (
    /* reexport */
    Ap
  ),
  getPdfFilenameFromUrl: () => (
    /* reexport */
    yp
  ),
  getXfaPageViewport: () => (
    /* reexport */
    vp
  ),
  isDataScheme: () => (
    /* reexport */
    Uh
  ),
  isPdfFile: () => (
    /* reexport */
    bd
  ),
  noContextMenu: () => (
    /* reexport */
    cs
  ),
  normalizeUnicode: () => (
    /* reexport */
    gp
  ),
  setLayerDimensions: () => (
    /* reexport */
    hr
  ),
  shadow: () => (
    /* reexport */
    Q
  ),
  stopEvent: () => (
    /* reexport */
    Ne
  ),
  version: () => (
    /* reexport */
    Pg
  )
});
const ie = typeof process == "object" && process + "" == "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser"), Jd = [1, 0, 0, 1, 0, 0], tc = [1e-3, 0, 0, 1e-3, 0, 0], sp = 1e7, Xh = 1.35, De = {
  ANY: 1,
  DISPLAY: 2,
  PRINT: 4,
  ANNOTATIONS_FORMS: 16,
  ANNOTATIONS_STORAGE: 32,
  ANNOTATIONS_DISABLE: 64,
  IS_EDITING: 128,
  OPLIST: 256
}, bi = {
  DISABLE: 0,
  ENABLE: 1,
  ENABLE_FORMS: 2,
  ENABLE_STORAGE: 3
}, ip = "pdfjs_internal_editor_", X = {
  DISABLE: -1,
  NONE: 0,
  FREETEXT: 3,
  HIGHLIGHT: 9,
  STAMP: 13,
  INK: 15
}, J = {
  RESIZE: 1,
  CREATE: 2,
  FREETEXT_SIZE: 11,
  FREETEXT_COLOR: 12,
  FREETEXT_OPACITY: 13,
  INK_COLOR: 21,
  INK_THICKNESS: 22,
  INK_OPACITY: 23,
  HIGHLIGHT_COLOR: 31,
  HIGHLIGHT_DEFAULT_COLOR: 32,
  HIGHLIGHT_THICKNESS: 33,
  HIGHLIGHT_FREE: 34,
  HIGHLIGHT_SHOW_ALL: 35,
  DRAW_STEP: 41
}, np = {
  PRINT: 4,
  MODIFY_CONTENTS: 8,
  COPY: 16,
  MODIFY_ANNOTATIONS: 32,
  FILL_INTERACTIVE_FORMS: 256,
  COPY_FOR_ACCESSIBILITY: 512,
  ASSEMBLE: 1024,
  PRINT_HIGH_QUALITY: 2048
}, Yt = {
  FILL: 0,
  STROKE: 1,
  FILL_STROKE: 2,
  INVISIBLE: 3,
  FILL_STROKE_MASK: 3,
  ADD_TO_PATH_FLAG: 4
}, Fl = {
  GRAYSCALE_1BPP: 1,
  RGB_24BPP: 2,
  RGBA_32BPP: 3
}, Pt = {
  TEXT: 1,
  LINK: 2,
  FREETEXT: 3,
  LINE: 4,
  SQUARE: 5,
  CIRCLE: 6,
  POLYGON: 7,
  POLYLINE: 8,
  HIGHLIGHT: 9,
  UNDERLINE: 10,
  SQUIGGLY: 11,
  STRIKEOUT: 12,
  STAMP: 13,
  CARET: 14,
  INK: 15,
  POPUP: 16,
  FILEATTACHMENT: 17,
  WIDGET: 20
}, Ra = {
  SOLID: 1,
  DASHED: 2,
  BEVELED: 3,
  INSET: 4,
  UNDERLINE: 5
}, Bh = {
  ERRORS: 0,
  WARNINGS: 1,
  INFOS: 5
}, Ke = {
  dependency: 1,
  setLineWidth: 2,
  setLineCap: 3,
  setLineJoin: 4,
  setMiterLimit: 5,
  setDash: 6,
  setRenderingIntent: 7,
  setFlatness: 8,
  setGState: 9,
  save: 10,
  restore: 11,
  transform: 12,
  moveTo: 13,
  lineTo: 14,
  curveTo: 15,
  curveTo2: 16,
  curveTo3: 17,
  closePath: 18,
  rectangle: 19,
  stroke: 20,
  closeStroke: 21,
  fill: 22,
  eoFill: 23,
  fillStroke: 24,
  eoFillStroke: 25,
  closeFillStroke: 26,
  closeEOFillStroke: 27,
  endPath: 28,
  clip: 29,
  eoClip: 30,
  beginText: 31,
  endText: 32,
  setCharSpacing: 33,
  setWordSpacing: 34,
  setHScale: 35,
  setLeading: 36,
  setFont: 37,
  setTextRenderingMode: 38,
  setTextRise: 39,
  moveText: 40,
  setLeadingMoveText: 41,
  setTextMatrix: 42,
  nextLine: 43,
  showText: 44,
  showSpacedText: 45,
  nextLineShowText: 46,
  nextLineSetSpacingShowText: 47,
  setCharWidth: 48,
  setCharWidthAndBounds: 49,
  setStrokeColorSpace: 50,
  setFillColorSpace: 51,
  setStrokeColor: 52,
  setStrokeColorN: 53,
  setFillColor: 54,
  setFillColorN: 55,
  setStrokeGray: 56,
  setFillGray: 57,
  setStrokeRGBColor: 58,
  setFillRGBColor: 59,
  setStrokeCMYKColor: 60,
  setFillCMYKColor: 61,
  shadingFill: 62,
  beginInlineImage: 63,
  beginImageData: 64,
  endInlineImage: 65,
  paintXObject: 66,
  markPoint: 67,
  markPointProps: 68,
  beginMarkedContent: 69,
  beginMarkedContentProps: 70,
  endMarkedContent: 71,
  beginCompat: 72,
  endCompat: 73,
  paintFormXObjectBegin: 74,
  paintFormXObjectEnd: 75,
  beginGroup: 76,
  endGroup: 77,
  beginAnnotation: 80,
  endAnnotation: 81,
  paintImageMaskXObject: 83,
  paintImageMaskXObjectGroup: 84,
  paintImageXObject: 85,
  paintInlineImageXObject: 86,
  paintInlineImageXObjectGroup: 87,
  paintImageXObjectRepeat: 88,
  paintImageMaskXObjectRepeat: 89,
  paintSolidColorImageMask: 90,
  constructPath: 91,
  setStrokeTransparent: 92,
  setFillTransparent: 93
}, rp = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
};
let Hh = Bh.WARNINGS;
function ap(d) {
  Number.isInteger(d) && (Hh = d);
}
function op() {
  return Hh;
}
function zh(d) {
  Hh >= Bh.INFOS && console.log(`Info: ${d}`);
}
function q(d) {
  Hh >= Bh.WARNINGS && console.log(`Warning: ${d}`);
}
function ct(d) {
  throw new Error(d);
}
function Tt(d, t) {
  d || ct(t);
}
function lp(d) {
  switch (d == null ? void 0 : d.protocol) {
    case "http:":
    case "https:":
    case "ftp:":
    case "mailto:":
    case "tel:":
      return !0;
    default:
      return !1;
  }
}
function hp(d, t = null, e = null) {
  if (!d)
    return null;
  try {
    if (e && typeof d == "string") {
      if (e.addDefaultProtocol && d.startsWith("www.")) {
        const i = d.match(/\./g);
        (i == null ? void 0 : i.length) >= 2 && (d = `http://${d}`);
      }
      if (e.tryConvertEncoding)
        try {
          d = pp(d);
        } catch {
        }
    }
    const s = t ? new URL(d, t) : new URL(d);
    if (lp(s))
      return s;
  } catch {
  }
  return null;
}
function Q(d, t, e, s = !1) {
  return Object.defineProperty(d, t, {
    value: e,
    enumerable: !s,
    configurable: !0,
    writable: !1
  }), e;
}
const Zi = function() {
  function t(e, s) {
    this.message = e, this.name = s;
  }
  return t.prototype = new Error(), t.constructor = t, t;
}();
class Id extends Zi {
  constructor(t, e) {
    super(t, "PasswordException"), this.code = e;
  }
}
class qh extends Zi {
  constructor(t, e) {
    super(t, "UnknownErrorException"), this.details = e;
  }
}
class ec extends Zi {
  constructor(t) {
    super(t, "InvalidPDFException");
  }
}
class Ja extends Zi {
  constructor(t) {
    super(t, "MissingPDFException");
  }
}
class dh extends Zi {
  constructor(t, e) {
    super(t, "UnexpectedResponseException"), this.status = e;
  }
}
class cp extends Zi {
  constructor(t) {
    super(t, "FormatError");
  }
}
class Yi extends Zi {
  constructor(t) {
    super(t, "AbortException");
  }
}
function tu(d) {
  (typeof d != "object" || (d == null ? void 0 : d.length) === void 0) && ct("Invalid argument for bytesToString");
  const t = d.length, e = 8192;
  if (t < e)
    return String.fromCharCode.apply(null, d);
  const s = [];
  for (let i = 0; i < t; i += e) {
    const n = Math.min(i + e, t), a = d.subarray(i, n);
    s.push(String.fromCharCode.apply(null, a));
  }
  return s.join("");
}
function $h(d) {
  typeof d != "string" && ct("Invalid argument for stringToBytes");
  const t = d.length, e = new Uint8Array(t);
  for (let s = 0; s < t; ++s)
    e[s] = d.charCodeAt(s) & 255;
  return e;
}
function dp(d) {
  return String.fromCharCode(d >> 24 & 255, d >> 16 & 255, d >> 8 & 255, d & 255);
}
function pd(d) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const [e, s] of d)
    t[e] = s;
  return t;
}
function up() {
  const d = new Uint8Array(4);
  return d[0] = 1, new Uint32Array(d.buffer, 0, 1)[0] === 1;
}
function fp() {
  try {
    return new Function(""), !0;
  } catch {
    return !1;
  }
}
class ce {
  static get isLittleEndian() {
    return Q(this, "isLittleEndian", up());
  }
  static get isEvalSupported() {
    return Q(this, "isEvalSupported", fp());
  }
  static get isOffscreenCanvasSupported() {
    return Q(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas < "u");
  }
  static get isImageDecoderSupported() {
    return Q(this, "isImageDecoderSupported", typeof ImageDecoder < "u");
  }
  static get platform() {
    return typeof navigator < "u" && typeof (navigator == null ? void 0 : navigator.platform) == "string" ? Q(this, "platform", {
      isMac: navigator.platform.includes("Mac"),
      isWindows: navigator.platform.includes("Win"),
      isFirefox: typeof (navigator == null ? void 0 : navigator.userAgent) == "string" && navigator.userAgent.includes("Firefox")
    }) : Q(this, "platform", {
      isMac: !1,
      isWindows: !1,
      isFirefox: !1
    });
  }
  static get isCSSRoundSupported() {
    var t, e;
    return Q(this, "isCSSRoundSupported", (e = (t = globalThis.CSS) == null ? void 0 : t.supports) == null ? void 0 : e.call(t, "width: round(1.5px, 1px)"));
  }
}
const Yh = Array.from(Array(256).keys(), (d) => d.toString(16).padStart(2, "0"));
var ui, Nl, sc;
class H {
  static makeHexColor(t, e, s) {
    return `#${Yh[t]}${Yh[e]}${Yh[s]}`;
  }
  static scaleMinMax(t, e) {
    let s;
    t[0] ? (t[0] < 0 && (s = e[0], e[0] = e[2], e[2] = s), e[0] *= t[0], e[2] *= t[0], t[3] < 0 && (s = e[1], e[1] = e[3], e[3] = s), e[1] *= t[3], e[3] *= t[3]) : (s = e[0], e[0] = e[1], e[1] = s, s = e[2], e[2] = e[3], e[3] = s, t[1] < 0 && (s = e[1], e[1] = e[3], e[3] = s), e[1] *= t[1], e[3] *= t[1], t[2] < 0 && (s = e[0], e[0] = e[2], e[2] = s), e[0] *= t[2], e[2] *= t[2]), e[0] += t[4], e[1] += t[5], e[2] += t[4], e[3] += t[5];
  }
  static transform(t, e) {
    return [t[0] * e[0] + t[2] * e[1], t[1] * e[0] + t[3] * e[1], t[0] * e[2] + t[2] * e[3], t[1] * e[2] + t[3] * e[3], t[0] * e[4] + t[2] * e[5] + t[4], t[1] * e[4] + t[3] * e[5] + t[5]];
  }
  static applyTransform(t, e) {
    const s = t[0] * e[0] + t[1] * e[2] + e[4], i = t[0] * e[1] + t[1] * e[3] + e[5];
    return [s, i];
  }
  static applyInverseTransform(t, e) {
    const s = e[0] * e[3] - e[1] * e[2], i = (t[0] * e[3] - t[1] * e[2] + e[2] * e[5] - e[4] * e[3]) / s, n = (-t[0] * e[1] + t[1] * e[0] + e[4] * e[1] - e[5] * e[0]) / s;
    return [i, n];
  }
  static getAxialAlignedBoundingBox(t, e) {
    const s = this.applyTransform(t, e), i = this.applyTransform(t.slice(2, 4), e), n = this.applyTransform([t[0], t[3]], e), a = this.applyTransform([t[2], t[1]], e);
    return [Math.min(s[0], i[0], n[0], a[0]), Math.min(s[1], i[1], n[1], a[1]), Math.max(s[0], i[0], n[0], a[0]), Math.max(s[1], i[1], n[1], a[1])];
  }
  static inverseTransform(t) {
    const e = t[0] * t[3] - t[1] * t[2];
    return [t[3] / e, -t[1] / e, -t[2] / e, t[0] / e, (t[2] * t[5] - t[4] * t[3]) / e, (t[4] * t[1] - t[5] * t[0]) / e];
  }
  static singularValueDecompose2dScale(t) {
    const e = [t[0], t[2], t[1], t[3]], s = t[0] * e[0] + t[1] * e[2], i = t[0] * e[1] + t[1] * e[3], n = t[2] * e[0] + t[3] * e[2], a = t[2] * e[1] + t[3] * e[3], o = (s + a) / 2, l = Math.sqrt((s + a) ** 2 - 4 * (s * a - n * i)) / 2, h = o + l || 1, c = o - l || 1;
    return [Math.sqrt(h), Math.sqrt(c)];
  }
  static normalizeRect(t) {
    const e = t.slice(0);
    return t[0] > t[2] && (e[0] = t[2], e[2] = t[0]), t[1] > t[3] && (e[1] = t[3], e[3] = t[1]), e;
  }
  static intersect(t, e) {
    const s = Math.max(Math.min(t[0], t[2]), Math.min(e[0], e[2])), i = Math.min(Math.max(t[0], t[2]), Math.max(e[0], e[2]));
    if (s > i)
      return null;
    const n = Math.max(Math.min(t[1], t[3]), Math.min(e[1], e[3])), a = Math.min(Math.max(t[1], t[3]), Math.max(e[1], e[3]));
    return n > a ? null : [s, n, i, a];
  }
  static bezierBoundingBox(t, e, s, i, n, a, o, l, h) {
    return h ? (h[0] = Math.min(h[0], t, o), h[1] = Math.min(h[1], e, l), h[2] = Math.max(h[2], t, o), h[3] = Math.max(h[3], e, l)) : h = [Math.min(t, o), Math.min(e, l), Math.max(t, o), Math.max(e, l)], A(this, ui, sc).call(this, t, s, n, o, e, i, a, l, 3 * (-t + 3 * (s - n) + o), 6 * (t - 2 * s + n), 3 * (s - t), h), A(this, ui, sc).call(this, t, s, n, o, e, i, a, l, 3 * (-e + 3 * (i - a) + l), 6 * (e - 2 * i + a), 3 * (i - e), h), h;
  }
}
ui = new WeakSet(), Nl = function(t, e, s, i, n, a, o, l, h, c) {
  if (h <= 0 || h >= 1)
    return;
  const u = 1 - h, f = h * h, g = f * h, b = u * (u * (u * t + 3 * h * e) + 3 * f * s) + g * i, y = u * (u * (u * n + 3 * h * a) + 3 * f * o) + g * l;
  c[0] = Math.min(c[0], b), c[1] = Math.min(c[1], y), c[2] = Math.max(c[2], b), c[3] = Math.max(c[3], y);
}, sc = function(t, e, s, i, n, a, o, l, h, c, u, f) {
  if (Math.abs(h) < 1e-12) {
    Math.abs(c) >= 1e-12 && A(this, ui, Nl).call(this, t, e, s, i, n, a, o, l, -u / c, f);
    return;
  }
  const g = c ** 2 - 4 * u * h;
  if (g < 0)
    return;
  const b = Math.sqrt(g), y = 2 * h;
  A(this, ui, Nl).call(this, t, e, s, i, n, a, o, l, (-c + b) / y, f), A(this, ui, Nl).call(this, t, e, s, i, n, a, o, l, (-c - b) / y, f);
}, m(H, ui);
function pp(d) {
  return decodeURIComponent(escape(d));
}
let Kh = null, Dd = null;
function gp(d) {
  return Kh || (Kh = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu, Dd = /* @__PURE__ */ new Map([["ﬅ", "ſt"]])), d.replaceAll(Kh, (t, e, s) => e ? e.normalize("NFKC") : Dd.get(s));
}
function mp() {
  if (typeof crypto.randomUUID == "function")
    return crypto.randomUUID();
  const d = new Uint8Array(32);
  return crypto.getRandomValues(d), tu(d);
}
const gd = "pdfjs_internal_id_";
function bp(d) {
  return Uint8Array.prototype.toBase64 ? d.toBase64() : btoa(tu(d));
}
typeof Promise.try != "function" && (Promise.try = function(d, ...t) {
  return new Promise((e) => {
    e(d(...t));
  });
});
const Fs = "http://www.w3.org/2000/svg", sn = class sn {
};
$(sn, "CSS", 96), $(sn, "PDF", 72), $(sn, "PDF_TO_CSS_UNITS", sn.CSS / sn.PDF);
let Ki = sn;
async function Gh(d, t = "text") {
  if (Fa(d, document.baseURI)) {
    const e = await fetch(d);
    if (!e.ok)
      throw new Error(e.statusText);
    switch (t) {
      case "arraybuffer":
        return e.arrayBuffer();
      case "blob":
        return e.blob();
      case "json":
        return e.json();
    }
    return e.text();
  }
  return new Promise((e, s) => {
    const i = new XMLHttpRequest();
    i.open("GET", d, !0), i.responseType = t, i.onreadystatechange = () => {
      if (i.readyState === XMLHttpRequest.DONE) {
        if (i.status === 200 || i.status === 0) {
          switch (t) {
            case "arraybuffer":
            case "blob":
            case "json":
              e(i.response);
              return;
          }
          e(i.responseText);
          return;
        }
        s(new Error(i.statusText));
      }
    }, i.send(null);
  });
}
class kl {
  constructor({
    viewBox: t,
    userUnit: e,
    scale: s,
    rotation: i,
    offsetX: n = 0,
    offsetY: a = 0,
    dontFlip: o = !1
  }) {
    this.viewBox = t, this.userUnit = e, this.scale = s, this.rotation = i, this.offsetX = n, this.offsetY = a, s *= e;
    const l = (t[2] + t[0]) / 2, h = (t[3] + t[1]) / 2;
    let c, u, f, g;
    switch (i %= 360, i < 0 && (i += 360), i) {
      case 180:
        c = -1, u = 0, f = 0, g = 1;
        break;
      case 90:
        c = 0, u = 1, f = 1, g = 0;
        break;
      case 270:
        c = 0, u = -1, f = -1, g = 0;
        break;
      case 0:
        c = 1, u = 0, f = 0, g = -1;
        break;
      default:
        throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
    }
    o && (f = -f, g = -g);
    let b, y, w, v;
    c === 0 ? (b = Math.abs(h - t[1]) * s + n, y = Math.abs(l - t[0]) * s + a, w = (t[3] - t[1]) * s, v = (t[2] - t[0]) * s) : (b = Math.abs(l - t[0]) * s + n, y = Math.abs(h - t[1]) * s + a, w = (t[2] - t[0]) * s, v = (t[3] - t[1]) * s), this.transform = [c * s, u * s, f * s, g * s, b - c * s * l - f * s * h, y - u * s * l - g * s * h], this.width = w, this.height = v;
  }
  get rawDims() {
    const {
      userUnit: t,
      viewBox: e
    } = this, s = e.map((i) => i * t);
    return Q(this, "rawDims", {
      pageWidth: s[2] - s[0],
      pageHeight: s[3] - s[1],
      pageX: s[0],
      pageY: s[1]
    });
  }
  clone({
    scale: t = this.scale,
    rotation: e = this.rotation,
    offsetX: s = this.offsetX,
    offsetY: i = this.offsetY,
    dontFlip: n = !1
  } = {}) {
    return new kl({
      viewBox: this.viewBox.slice(),
      userUnit: this.userUnit,
      scale: t,
      rotation: e,
      offsetX: s,
      offsetY: i,
      dontFlip: n
    });
  }
  convertToViewportPoint(t, e) {
    return H.applyTransform([t, e], this.transform);
  }
  convertToViewportRectangle(t) {
    const e = H.applyTransform([t[0], t[1]], this.transform), s = H.applyTransform([t[2], t[3]], this.transform);
    return [e[0], e[1], s[0], s[1]];
  }
  convertToPdfPoint(t, e) {
    return H.applyInverseTransform([t, e], this.transform);
  }
}
class md extends Zi {
  constructor(t, e = 0) {
    super(t, "RenderingCancelledException"), this.extraDelay = e;
  }
}
function Uh(d) {
  const t = d.length;
  let e = 0;
  for (; e < t && d[e].trim() === ""; )
    e++;
  return d.substring(e, e + 5).toLowerCase() === "data:";
}
function bd(d) {
  return typeof d == "string" && /\.pdf$/i.test(d);
}
function Ap(d) {
  return [d] = d.split(/[#?]/, 1), d.substring(d.lastIndexOf("/") + 1);
}
function yp(d, t = "document.pdf") {
  if (typeof d != "string")
    return t;
  if (Uh(d))
    return q('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), t;
  const e = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/, s = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i, i = e.exec(d);
  let n = s.exec(i[1]) || s.exec(i[2]) || s.exec(i[3]);
  if (n && (n = n[0], n.includes("%")))
    try {
      n = s.exec(decodeURIComponent(n))[0];
    } catch {
    }
  return n || t;
}
class Fd {
  constructor() {
    $(this, "started", /* @__PURE__ */ Object.create(null));
    $(this, "times", []);
  }
  time(t) {
    t in this.started && q(`Timer is already running for ${t}`), this.started[t] = Date.now();
  }
  timeEnd(t) {
    t in this.started || q(`Timer has not been started for ${t}`), this.times.push({
      name: t,
      start: this.started[t],
      end: Date.now()
    }), delete this.started[t];
  }
  toString() {
    const t = [];
    let e = 0;
    for (const {
      name: s
    } of this.times)
      e = Math.max(s.length, e);
    for (const {
      name: s,
      start: i,
      end: n
    } of this.times)
      t.push(`${s.padEnd(e)} ${n - i}ms
`);
    return t.join("");
  }
}
function Fa(d, t) {
  try {
    const {
      protocol: e
    } = t ? new URL(d, t) : new URL(d);
    return e === "http:" || e === "https:";
  } catch {
    return !1;
  }
}
function cs(d) {
  d.preventDefault();
}
function Ne(d) {
  d.preventDefault(), d.stopPropagation();
}
var so;
class Ad {
  static toDateObject(t) {
    if (!t || typeof t != "string")
      return null;
    r(this, so) || p(this, so, new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));
    const e = r(this, so).exec(t);
    if (!e)
      return null;
    const s = parseInt(e[1], 10);
    let i = parseInt(e[2], 10);
    i = i >= 1 && i <= 12 ? i - 1 : 0;
    let n = parseInt(e[3], 10);
    n = n >= 1 && n <= 31 ? n : 1;
    let a = parseInt(e[4], 10);
    a = a >= 0 && a <= 23 ? a : 0;
    let o = parseInt(e[5], 10);
    o = o >= 0 && o <= 59 ? o : 0;
    let l = parseInt(e[6], 10);
    l = l >= 0 && l <= 59 ? l : 0;
    const h = e[7] || "Z";
    let c = parseInt(e[8], 10);
    c = c >= 0 && c <= 23 ? c : 0;
    let u = parseInt(e[9], 10) || 0;
    return u = u >= 0 && u <= 59 ? u : 0, h === "-" ? (a += c, o += u) : h === "+" && (a -= c, o -= u), new Date(Date.UTC(s, i, n, a, o, l));
  }
}
so = new WeakMap(), m(Ad, so);
function vp(d, {
  scale: t = 1,
  rotation: e = 0
}) {
  const {
    width: s,
    height: i
  } = d.attributes.style, n = [0, 0, parseInt(s), parseInt(i)];
  return new kl({
    viewBox: n,
    userUnit: 1,
    scale: t,
    rotation: e
  });
}
function yd(d) {
  if (d.startsWith("#")) {
    const t = parseInt(d.slice(1), 16);
    return [(t & 16711680) >> 16, (t & 65280) >> 8, t & 255];
  }
  return d.startsWith("rgb(") ? d.slice(4, -1).split(",").map((t) => parseInt(t)) : d.startsWith("rgba(") ? d.slice(5, -1).split(",").map((t) => parseInt(t)).slice(0, 3) : (q(`Not a valid color format: "${d}"`), [0, 0, 0]);
}
function wp(d) {
  const t = document.createElement("span");
  t.style.visibility = "hidden", document.body.append(t);
  for (const e of d.keys()) {
    t.style.color = e;
    const s = window.getComputedStyle(t).color;
    d.set(e, yd(s));
  }
  t.remove();
}
function mt(d) {
  const {
    a: t,
    b: e,
    c: s,
    d: i,
    e: n,
    f: a
  } = d.getTransform();
  return [t, e, s, i, n, a];
}
function us(d) {
  const {
    a: t,
    b: e,
    c: s,
    d: i,
    e: n,
    f: a
  } = d.getTransform().invertSelf();
  return [t, e, s, i, n, a];
}
function hr(d, t, e = !1, s = !0) {
  if (t instanceof kl) {
    const {
      pageWidth: i,
      pageHeight: n
    } = t.rawDims, {
      style: a
    } = d, o = ce.isCSSRoundSupported, l = `var(--scale-factor) * ${i}px`, h = `var(--scale-factor) * ${n}px`, c = o ? `round(down, ${l}, var(--scale-round-x, 1px))` : `calc(${l})`, u = o ? `round(down, ${h}, var(--scale-round-y, 1px))` : `calc(${h})`;
    !e || t.rotation % 180 === 0 ? (a.width = c, a.height = u) : (a.width = u, a.height = c);
  }
  s && d.setAttribute("data-main-rotation", t.rotation);
}
class ic {
  constructor() {
    const t = window.devicePixelRatio || 1;
    this.sx = t, this.sy = t;
  }
  get scaled() {
    return this.sx !== 1 || this.sy !== 1;
  }
  get symmetric() {
    return this.sx === this.sy;
  }
}
var Ai, rn, Qe, an, io, no, yh, eu, de, su, iu, Ol, nu, rc;
const Bs = class Bs {
  constructor(t) {
    m(this, de);
    m(this, Ai, null);
    m(this, rn, null);
    m(this, Qe);
    m(this, an, null);
    m(this, io, null);
    p(this, Qe, t), r(Bs, no) || p(Bs, no, Object.freeze({
      freetext: "pdfjs-editor-remove-freetext-button",
      highlight: "pdfjs-editor-remove-highlight-button",
      ink: "pdfjs-editor-remove-ink-button",
      stamp: "pdfjs-editor-remove-stamp-button"
    }));
  }
  render() {
    const t = p(this, Ai, document.createElement("div"));
    t.classList.add("editToolbar", "hidden"), t.setAttribute("role", "toolbar");
    const e = r(this, Qe)._uiManager._signal;
    t.addEventListener("contextmenu", cs, {
      signal: e
    }), t.addEventListener("pointerdown", A(Bs, yh, eu), {
      signal: e
    });
    const s = p(this, an, document.createElement("div"));
    s.className = "buttons", t.append(s);
    const i = r(this, Qe).toolbarPosition;
    if (i) {
      const {
        style: n
      } = t, a = r(this, Qe)._uiManager.direction === "ltr" ? 1 - i[0] : i[0];
      n.insetInlineEnd = `${100 * a}%`, n.top = `calc(${100 * i[1]}% + var(--editor-toolbar-vert-offset))`;
    }
    return A(this, de, nu).call(this), t;
  }
  get div() {
    return r(this, Ai);
  }
  hide() {
    var t;
    r(this, Ai).classList.add("hidden"), (t = r(this, rn)) == null || t.hideDropdown();
  }
  show() {
    var t;
    r(this, Ai).classList.remove("hidden"), (t = r(this, io)) == null || t.shown();
  }
  async addAltText(t) {
    const e = await t.render();
    A(this, de, Ol).call(this, e), r(this, an).prepend(e, r(this, de, rc)), p(this, io, t);
  }
  addColorPicker(t) {
    p(this, rn, t);
    const e = t.renderButton();
    A(this, de, Ol).call(this, e), r(this, an).prepend(e, r(this, de, rc));
  }
  remove() {
    var t;
    r(this, Ai).remove(), (t = r(this, rn)) == null || t.destroy(), p(this, rn, null);
  }
};
Ai = new WeakMap(), rn = new WeakMap(), Qe = new WeakMap(), an = new WeakMap(), io = new WeakMap(), no = new WeakMap(), yh = new WeakSet(), eu = function(t) {
  t.stopPropagation();
}, de = new WeakSet(), su = function(t) {
  r(this, Qe)._focusEventsAllowed = !1, Ne(t);
}, iu = function(t) {
  r(this, Qe)._focusEventsAllowed = !0, Ne(t);
}, Ol = function(t) {
  const e = r(this, Qe)._uiManager._signal;
  t.addEventListener("focusin", A(this, de, su).bind(this), {
    capture: !0,
    signal: e
  }), t.addEventListener("focusout", A(this, de, iu).bind(this), {
    capture: !0,
    signal: e
  }), t.addEventListener("contextmenu", cs, {
    signal: e
  });
}, nu = function() {
  const {
    editorType: t,
    _uiManager: e
  } = r(this, Qe), s = document.createElement("button");
  s.className = "delete", s.tabIndex = 0, s.setAttribute("data-l10n-id", r(Bs, no)[t]), A(this, de, Ol).call(this, s), s.addEventListener("click", (i) => {
    e.delete();
  }, {
    signal: e._signal
  }), r(this, an).append(s);
}, rc = function() {
  const t = document.createElement("div");
  return t.className = "divider", t;
}, m(Bs, yh), m(Bs, no, null);
let nc = Bs;
var ro, on, ln, Qi, ru, au, ou;
class _p {
  constructor(t) {
    m(this, Qi);
    m(this, ro, null);
    m(this, on, null);
    m(this, ln);
    p(this, ln, t);
  }
  show(t, e, s) {
    const [i, n] = A(this, Qi, au).call(this, e, s), {
      style: a
    } = r(this, on) || p(this, on, A(this, Qi, ru).call(this));
    t.append(r(this, on)), a.insetInlineEnd = `${100 * i}%`, a.top = `calc(${100 * n}% + var(--editor-toolbar-vert-offset))`;
  }
  hide() {
    r(this, on).remove();
  }
}
ro = new WeakMap(), on = new WeakMap(), ln = new WeakMap(), Qi = new WeakSet(), ru = function() {
  const t = p(this, on, document.createElement("div"));
  t.className = "editToolbar", t.setAttribute("role", "toolbar"), t.addEventListener("contextmenu", cs, {
    signal: r(this, ln)._signal
  });
  const e = p(this, ro, document.createElement("div"));
  return e.className = "buttons", t.append(e), A(this, Qi, ou).call(this), t;
}, au = function(t, e) {
  let s = 0, i = 0;
  for (const n of t) {
    const a = n.y + n.height;
    if (a < s)
      continue;
    const o = n.x + (e ? n.width : 0);
    if (a > s) {
      i = o, s = a;
      continue;
    }
    e ? o > i && (i = o) : o < i && (i = o);
  }
  return [e ? 1 - i : i, s];
}, ou = function() {
  const t = document.createElement("button");
  t.className = "highlightButton", t.tabIndex = 0, t.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button1");
  const e = document.createElement("span");
  t.append(e), e.className = "visuallyHidden", e.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button-label");
  const s = r(this, ln)._signal;
  t.addEventListener("contextmenu", cs, {
    signal: s
  }), t.addEventListener("click", () => {
    r(this, ln).highlightSelection("floating_button");
  }, {
    signal: s
  }), r(this, ro).append(t);
};
function uh(d, t, e) {
  for (const s of e)
    t.addEventListener(s, d[s].bind(d));
}
var vh;
class Sp {
  constructor() {
    m(this, vh, 0);
  }
  get id() {
    return `${ip}${ne(this, vh)._++}`;
  }
}
vh = new WeakMap();
var xr, ao, Zt, Tr, Bl;
const Cd = class Cd {
  constructor() {
    m(this, Tr);
    m(this, xr, mp());
    m(this, ao, 0);
    m(this, Zt, null);
  }
  static get _isSVGFittingCanvas() {
    const t = 'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>', s = new OffscreenCanvas(1, 3).getContext("2d", {
      willReadFrequently: !0
    }), i = new Image();
    i.src = t;
    const n = i.decode().then(() => (s.drawImage(i, 0, 0, 1, 1, 0, 0, 1, 3), new Uint32Array(s.getImageData(0, 0, 1, 1).data.buffer)[0] === 0));
    return Q(this, "_isSVGFittingCanvas", n);
  }
  async getFromFile(t) {
    const {
      lastModified: e,
      name: s,
      size: i,
      type: n
    } = t;
    return A(this, Tr, Bl).call(this, `${e}_${s}_${i}_${n}`, t);
  }
  async getFromUrl(t) {
    return A(this, Tr, Bl).call(this, t, t);
  }
  async getFromBlob(t, e) {
    const s = await e;
    return A(this, Tr, Bl).call(this, t, s);
  }
  async getFromId(t) {
    r(this, Zt) || p(this, Zt, /* @__PURE__ */ new Map());
    const e = r(this, Zt).get(t);
    if (!e)
      return null;
    if (e.bitmap)
      return e.refCounter += 1, e;
    if (e.file)
      return this.getFromFile(e.file);
    if (e.blobPromise) {
      const {
        blobPromise: s
      } = e;
      return delete e.blobPromise, this.getFromBlob(e.id, s);
    }
    return this.getFromUrl(e.url);
  }
  getFromCanvas(t, e) {
    r(this, Zt) || p(this, Zt, /* @__PURE__ */ new Map());
    let s = r(this, Zt).get(t);
    if (s != null && s.bitmap)
      return s.refCounter += 1, s;
    const i = new OffscreenCanvas(e.width, e.height);
    return i.getContext("2d").drawImage(e, 0, 0), s = {
      bitmap: i.transferToImageBitmap(),
      id: `image_${r(this, xr)}_${ne(this, ao)._++}`,
      refCounter: 1,
      isSvg: !1
    }, r(this, Zt).set(t, s), r(this, Zt).set(s.id, s), s;
  }
  getSvgUrl(t) {
    const e = r(this, Zt).get(t);
    return e != null && e.isSvg ? e.svgUrl : null;
  }
  deleteId(t) {
    var i;
    r(this, Zt) || p(this, Zt, /* @__PURE__ */ new Map());
    const e = r(this, Zt).get(t);
    if (!e || (e.refCounter -= 1, e.refCounter !== 0))
      return;
    const {
      bitmap: s
    } = e;
    if (!e.url && !e.file) {
      const n = new OffscreenCanvas(s.width, s.height);
      n.getContext("bitmaprenderer").transferFromImageBitmap(s), e.blobPromise = n.convertToBlob();
    }
    (i = s.close) == null || i.call(s), e.bitmap = null;
  }
  isValidId(t) {
    return t.startsWith(`image_${r(this, xr)}_`);
  }
};
xr = new WeakMap(), ao = new WeakMap(), Zt = new WeakMap(), Tr = new WeakSet(), Bl = async function(t, e) {
  r(this, Zt) || p(this, Zt, /* @__PURE__ */ new Map());
  let s = r(this, Zt).get(t);
  if (s === null)
    return null;
  if (s != null && s.bitmap)
    return s.refCounter += 1, s;
  try {
    s || (s = {
      bitmap: null,
      id: `image_${r(this, xr)}_${ne(this, ao)._++}`,
      refCounter: 0,
      isSvg: !1
    });
    let i;
    if (typeof e == "string" ? (s.url = e, i = await Gh(e, "blob")) : e instanceof File ? i = s.file = e : e instanceof Blob && (i = e), i.type === "image/svg+xml") {
      const n = Cd._isSVGFittingCanvas, a = new FileReader(), o = new Image(), l = new Promise((h, c) => {
        o.onload = () => {
          s.bitmap = o, s.isSvg = !0, h();
        }, a.onload = async () => {
          const u = s.svgUrl = a.result;
          o.src = await n ? `${u}#svgView(preserveAspectRatio(none))` : u;
        }, o.onerror = a.onerror = c;
      });
      a.readAsDataURL(i), await l;
    } else
      s.bitmap = await createImageBitmap(i);
    s.refCounter = 1;
  } catch (i) {
    q(i), s = null;
  }
  return r(this, Zt).set(t, s), s && r(this, Zt).set(s.id, s), s;
};
let ac = Cd;
var St, yi, oo, At;
class Ep {
  constructor(t = 128) {
    m(this, St, []);
    m(this, yi, !1);
    m(this, oo);
    m(this, At, -1);
    p(this, oo, t);
  }
  add({
    cmd: t,
    undo: e,
    post: s,
    mustExec: i,
    type: n = NaN,
    overwriteIfSameType: a = !1,
    keepUndo: o = !1
  }) {
    if (i && t(), r(this, yi))
      return;
    const l = {
      cmd: t,
      undo: e,
      post: s,
      type: n
    };
    if (r(this, At) === -1) {
      r(this, St).length > 0 && (r(this, St).length = 0), p(this, At, 0), r(this, St).push(l);
      return;
    }
    if (a && r(this, St)[r(this, At)].type === n) {
      o && (l.undo = r(this, St)[r(this, At)].undo), r(this, St)[r(this, At)] = l;
      return;
    }
    const h = r(this, At) + 1;
    h === r(this, oo) ? r(this, St).splice(0, 1) : (p(this, At, h), h < r(this, St).length && r(this, St).splice(h)), r(this, St).push(l);
  }
  undo() {
    if (r(this, At) === -1)
      return;
    p(this, yi, !0);
    const {
      undo: t,
      post: e
    } = r(this, St)[r(this, At)];
    t(), e == null || e(), p(this, yi, !1), p(this, At, r(this, At) - 1);
  }
  redo() {
    if (r(this, At) < r(this, St).length - 1) {
      p(this, At, r(this, At) + 1), p(this, yi, !0);
      const {
        cmd: t,
        post: e
      } = r(this, St)[r(this, At)];
      t(), e == null || e(), p(this, yi, !1);
    }
  }
  hasSomethingToUndo() {
    return r(this, At) !== -1;
  }
  hasSomethingToRedo() {
    return r(this, At) < r(this, St).length - 1;
  }
  cleanType(t) {
    if (r(this, At) !== -1) {
      for (let e = r(this, At); e >= 0; e--)
        if (r(this, St)[e].type !== t) {
          r(this, St).splice(e + 1, r(this, At) - e), p(this, At, e);
          return;
        }
      r(this, St).length = 0, p(this, At, -1);
    }
  }
  destroy() {
    p(this, St, null);
  }
}
St = new WeakMap(), yi = new WeakMap(), oo = new WeakMap(), At = new WeakMap();
var wh, lu;
class Pl {
  constructor(t) {
    m(this, wh);
    this.buffer = [], this.callbacks = /* @__PURE__ */ new Map(), this.allKeys = /* @__PURE__ */ new Set();
    const {
      isMac: e
    } = ce.platform;
    for (const [s, i, n = {}] of t)
      for (const a of s) {
        const o = a.startsWith("mac+");
        e && o ? (this.callbacks.set(a.slice(4), {
          callback: i,
          options: n
        }), this.allKeys.add(a.split("+").at(-1))) : !e && !o && (this.callbacks.set(a, {
          callback: i,
          options: n
        }), this.allKeys.add(a.split("+").at(-1)));
      }
  }
  exec(t, e) {
    if (!this.allKeys.has(e.key))
      return;
    const s = this.callbacks.get(A(this, wh, lu).call(this, e));
    if (!s)
      return;
    const {
      callback: i,
      options: {
        bubbles: n = !1,
        args: a = [],
        checker: o = null
      }
    } = s;
    o && !o(t, e) || (i.bind(t, ...a, e)(), n || Ne(e));
  }
}
wh = new WeakSet(), lu = function(t) {
  t.altKey && this.buffer.push("alt"), t.ctrlKey && this.buffer.push("ctrl"), t.metaKey && this.buffer.push("meta"), t.shiftKey && this.buffer.push("shift"), this.buffer.push(t.key);
  const e = this.buffer.join("+");
  return this.buffer.length = 0, e;
};
const _h = class _h {
  get _colors() {
    const t = /* @__PURE__ */ new Map([["CanvasText", null], ["Canvas", null]]);
    return wp(t), Q(this, "_colors", t);
  }
  convert(t) {
    const e = yd(t);
    if (!window.matchMedia("(forced-colors: active)").matches)
      return e;
    for (const [s, i] of this._colors)
      if (i.every((n, a) => n === e[a]))
        return _h._colorsMapping.get(s);
    return e;
  }
  getHexCode(t) {
    const e = this._colors.get(t);
    return e ? H.makeHexColor(...e) : t;
  }
};
$(_h, "_colorsMapping", /* @__PURE__ */ new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]));
let oc = _h;
var kr, _e, Rt, Gt, Pr, zs, Mr, He, vi, hn, Rr, cn, ms, Ze, dn, lo, ho, Lr, co, bs, wi, Ir, _i, As, Sh, Si, uo, Ei, un, fo, po, Ft, at, $s, fn, go, mo, Ci, ys, Gs, bo, ze, P, Hl, lc, hu, cu, zl, du, uu, fu, hc, pu, cc, dc, gu, re, Ns, mu, bu, uc, Au, Na, fc;
const _r = class _r {
  constructor(t, e, s, i, n, a, o, l, h, c, u, f, g) {
    m(this, P);
    m(this, kr, new AbortController());
    m(this, _e, null);
    m(this, Rt, /* @__PURE__ */ new Map());
    m(this, Gt, /* @__PURE__ */ new Map());
    m(this, Pr, null);
    m(this, zs, null);
    m(this, Mr, null);
    m(this, He, new Ep());
    m(this, vi, null);
    m(this, hn, null);
    m(this, Rr, 0);
    m(this, cn, /* @__PURE__ */ new Set());
    m(this, ms, null);
    m(this, Ze, null);
    m(this, dn, /* @__PURE__ */ new Set());
    $(this, "_editorUndoBar", null);
    m(this, lo, !1);
    m(this, ho, !1);
    m(this, Lr, !1);
    m(this, co, null);
    m(this, bs, null);
    m(this, wi, null);
    m(this, Ir, null);
    m(this, _i, !1);
    m(this, As, null);
    m(this, Sh, new Sp());
    m(this, Si, !1);
    m(this, uo, !1);
    m(this, Ei, null);
    m(this, un, null);
    m(this, fo, null);
    m(this, po, null);
    m(this, Ft, X.NONE);
    m(this, at, /* @__PURE__ */ new Set());
    m(this, $s, null);
    m(this, fn, null);
    m(this, go, null);
    m(this, mo, {
      isEditing: !1,
      isEmpty: !0,
      hasSomethingToUndo: !1,
      hasSomethingToRedo: !1,
      hasSelectedEditor: !1,
      hasSelectedText: !1
    });
    m(this, Ci, [0, 0]);
    m(this, ys, null);
    m(this, Gs, null);
    m(this, bo, null);
    m(this, ze, null);
    const b = this._signal = r(this, kr).signal;
    p(this, Gs, t), p(this, bo, e), p(this, Pr, s), this._eventBus = i, i._on("editingaction", this.onEditingAction.bind(this), {
      signal: b
    }), i._on("pagechanging", this.onPageChanging.bind(this), {
      signal: b
    }), i._on("scalechanging", this.onScaleChanging.bind(this), {
      signal: b
    }), i._on("rotationchanging", this.onRotationChanging.bind(this), {
      signal: b
    }), i._on("setpreference", this.onSetPreference.bind(this), {
      signal: b
    }), i._on("switchannotationeditorparams", (y) => this.updateParams(y.type, y.value), {
      signal: b
    }), A(this, P, du).call(this), A(this, P, gu).call(this), A(this, P, hc).call(this), p(this, zs, n.annotationStorage), p(this, co, n.filterFactory), p(this, fn, a), p(this, Ir, o || null), p(this, lo, l), p(this, ho, h), p(this, Lr, c), p(this, po, u || null), this.viewParameters = {
      realScale: Ki.PDF_TO_CSS_UNITS,
      rotation: 0
    }, this.isShiftKeyDown = !1, this._editorUndoBar = f || null, this._supportsPinchToZoom = g !== !1;
  }
  static get _keyboardManager() {
    const t = _r.prototype, e = (a) => r(a, Gs).contains(document.activeElement) && document.activeElement.tagName !== "BUTTON" && a.hasSomethingToControl(), s = (a, {
      target: o
    }) => {
      if (o instanceof HTMLInputElement) {
        const {
          type: l
        } = o;
        return l !== "text" && l !== "number";
      }
      return !0;
    }, i = this.TRANSLATE_SMALL, n = this.TRANSLATE_BIG;
    return Q(this, "_keyboardManager", new Pl([[["ctrl+a", "mac+meta+a"], t.selectAll, {
      checker: s
    }], [["ctrl+z", "mac+meta+z"], t.undo, {
      checker: s
    }], [["ctrl+y", "ctrl+shift+z", "mac+meta+shift+z", "ctrl+shift+Z", "mac+meta+shift+Z"], t.redo, {
      checker: s
    }], [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete", "mac+Delete"], t.delete, {
      checker: s
    }], [["Enter", "mac+Enter"], t.addNewEditorFromKeyboard, {
      checker: (a, {
        target: o
      }) => !(o instanceof HTMLButtonElement) && r(a, Gs).contains(o) && !a.isEnterHandled
    }], [[" ", "mac+ "], t.addNewEditorFromKeyboard, {
      checker: (a, {
        target: o
      }) => !(o instanceof HTMLButtonElement) && r(a, Gs).contains(document.activeElement)
    }], [["Escape", "mac+Escape"], t.unselectAll], [["ArrowLeft", "mac+ArrowLeft"], t.translateSelectedEditors, {
      args: [-i, 0],
      checker: e
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t.translateSelectedEditors, {
      args: [-n, 0],
      checker: e
    }], [["ArrowRight", "mac+ArrowRight"], t.translateSelectedEditors, {
      args: [i, 0],
      checker: e
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t.translateSelectedEditors, {
      args: [n, 0],
      checker: e
    }], [["ArrowUp", "mac+ArrowUp"], t.translateSelectedEditors, {
      args: [0, -i],
      checker: e
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t.translateSelectedEditors, {
      args: [0, -n],
      checker: e
    }], [["ArrowDown", "mac+ArrowDown"], t.translateSelectedEditors, {
      args: [0, i],
      checker: e
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t.translateSelectedEditors, {
      args: [0, n],
      checker: e
    }]]));
  }
  destroy() {
    var t, e, s, i, n;
    (t = r(this, ze)) == null || t.resolve(), p(this, ze, null), (e = r(this, kr)) == null || e.abort(), p(this, kr, null), this._signal = null;
    for (const a of r(this, Gt).values())
      a.destroy();
    r(this, Gt).clear(), r(this, Rt).clear(), r(this, dn).clear(), p(this, _e, null), r(this, at).clear(), r(this, He).destroy(), (s = r(this, Pr)) == null || s.destroy(), (i = r(this, As)) == null || i.hide(), p(this, As, null), r(this, bs) && (clearTimeout(r(this, bs)), p(this, bs, null)), r(this, ys) && (clearTimeout(r(this, ys)), p(this, ys, null)), (n = this._editorUndoBar) == null || n.destroy();
  }
  combinedSignal(t) {
    return AbortSignal.any([this._signal, t.signal]);
  }
  get mlManager() {
    return r(this, po);
  }
  get useNewAltTextFlow() {
    return r(this, ho);
  }
  get useNewAltTextWhenAddingImage() {
    return r(this, Lr);
  }
  get hcmFilter() {
    return Q(this, "hcmFilter", r(this, fn) ? r(this, co).addHCMFilter(r(this, fn).foreground, r(this, fn).background) : "none");
  }
  get direction() {
    return Q(this, "direction", getComputedStyle(r(this, Gs)).direction);
  }
  get highlightColors() {
    return Q(this, "highlightColors", r(this, Ir) ? new Map(r(this, Ir).split(",").map((t) => t.split("=").map((e) => e.trim()))) : null);
  }
  get highlightColorNames() {
    return Q(this, "highlightColorNames", this.highlightColors ? new Map(Array.from(this.highlightColors, (t) => t.reverse())) : null);
  }
  setCurrentDrawingSession(t) {
    t ? (this.unselectAll(), this.disableUserSelect(!0)) : this.disableUserSelect(!1), p(this, hn, t);
  }
  setMainHighlightColorPicker(t) {
    p(this, fo, t);
  }
  editAltText(t, e = !1) {
    var s;
    (s = r(this, Pr)) == null || s.editAltText(this, t, e);
  }
  switchToMode(t, e) {
    this._eventBus.on("annotationeditormodechanged", e, {
      once: !0,
      signal: this._signal
    }), this._eventBus.dispatch("showannotationeditorui", {
      source: this,
      mode: t
    });
  }
  setPreference(t, e) {
    this._eventBus.dispatch("setpreference", {
      source: this,
      name: t,
      value: e
    });
  }
  onSetPreference({
    name: t,
    value: e
  }) {
    switch (t) {
      case "enableNewAltTextWhenAddingImage":
        p(this, Lr, e);
        break;
    }
  }
  onPageChanging({
    pageNumber: t
  }) {
    p(this, Rr, t - 1);
  }
  focusMainContainer() {
    r(this, Gs).focus();
  }
  findParent(t, e) {
    for (const s of r(this, Gt).values()) {
      const {
        x: i,
        y: n,
        width: a,
        height: o
      } = s.div.getBoundingClientRect();
      if (t >= i && t <= i + a && e >= n && e <= n + o)
        return s;
    }
    return null;
  }
  disableUserSelect(t = !1) {
    r(this, bo).classList.toggle("noUserSelect", t);
  }
  addShouldRescale(t) {
    r(this, dn).add(t);
  }
  removeShouldRescale(t) {
    r(this, dn).delete(t);
  }
  onScaleChanging({
    scale: t
  }) {
    var e;
    this.commitOrRemove(), this.viewParameters.realScale = t * Ki.PDF_TO_CSS_UNITS;
    for (const s of r(this, dn))
      s.onScaleChanging();
    (e = r(this, hn)) == null || e.onScaleChanging();
  }
  onRotationChanging({
    pagesRotation: t
  }) {
    this.commitOrRemove(), this.viewParameters.rotation = t;
  }
  highlightSelection(t = "") {
    const e = document.getSelection();
    if (!e || e.isCollapsed)
      return;
    const {
      anchorNode: s,
      anchorOffset: i,
      focusNode: n,
      focusOffset: a
    } = e, o = e.toString(), h = A(this, P, Hl).call(this, e).closest(".textLayer"), c = this.getSelectionBoxes(h);
    if (!c)
      return;
    e.empty();
    const u = A(this, P, lc).call(this, h), f = r(this, Ft) === X.NONE, g = () => {
      u == null || u.createAndAddNewEditor({
        x: 0,
        y: 0
      }, !1, {
        methodOfCreation: t,
        boxes: c,
        anchorNode: s,
        anchorOffset: i,
        focusNode: n,
        focusOffset: a,
        text: o
      }), f && this.showAllEditors("highlight", !0, !0);
    };
    if (f) {
      this.switchToMode(X.HIGHLIGHT, g);
      return;
    }
    g();
  }
  addToAnnotationStorage(t) {
    !t.isEmpty() && r(this, zs) && !r(this, zs).has(t.id) && r(this, zs).setValue(t.id, t);
  }
  blur() {
    if (this.isShiftKeyDown = !1, r(this, _i) && (p(this, _i, !1), A(this, P, zl).call(this, "main_toolbar")), !this.hasSelection)
      return;
    const {
      activeElement: t
    } = document;
    for (const e of r(this, at))
      if (e.div.contains(t)) {
        p(this, un, [e, t]), e._focusEventsAllowed = !1;
        break;
      }
  }
  focus() {
    if (!r(this, un))
      return;
    const [t, e] = r(this, un);
    p(this, un, null), e.addEventListener("focusin", () => {
      t._focusEventsAllowed = !0;
    }, {
      once: !0,
      signal: this._signal
    }), e.focus();
  }
  addEditListeners() {
    A(this, P, hc).call(this), A(this, P, cc).call(this);
  }
  removeEditListeners() {
    A(this, P, pu).call(this), A(this, P, dc).call(this);
  }
  dragOver(t) {
    for (const {
      type: e
    } of t.dataTransfer.items)
      for (const s of r(this, Ze))
        if (s.isHandlingMimeForPasting(e)) {
          t.dataTransfer.dropEffect = "copy", t.preventDefault();
          return;
        }
  }
  drop(t) {
    for (const e of t.dataTransfer.items)
      for (const s of r(this, Ze))
        if (s.isHandlingMimeForPasting(e.type)) {
          s.paste(e, this.currentLayer), t.preventDefault();
          return;
        }
  }
  copy(t) {
    var s;
    if (t.preventDefault(), (s = r(this, _e)) == null || s.commitOrRemove(), !this.hasSelection)
      return;
    const e = [];
    for (const i of r(this, at)) {
      const n = i.serialize(!0);
      n && e.push(n);
    }
    e.length !== 0 && t.clipboardData.setData("application/pdfjs", JSON.stringify(e));
  }
  cut(t) {
    this.copy(t), this.delete();
  }
  async paste(t) {
    t.preventDefault();
    const {
      clipboardData: e
    } = t;
    for (const n of e.items)
      for (const a of r(this, Ze))
        if (a.isHandlingMimeForPasting(n.type)) {
          a.paste(n, this.currentLayer);
          return;
        }
    let s = e.getData("application/pdfjs");
    if (!s)
      return;
    try {
      s = JSON.parse(s);
    } catch (n) {
      q(`paste: "${n.message}".`);
      return;
    }
    if (!Array.isArray(s))
      return;
    this.unselectAll();
    const i = this.currentLayer;
    try {
      const n = [];
      for (const l of s) {
        const h = await i.deserialize(l);
        if (!h)
          return;
        n.push(h);
      }
      const a = () => {
        for (const l of n)
          A(this, P, uc).call(this, l);
        A(this, P, fc).call(this, n);
      }, o = () => {
        for (const l of n)
          l.remove();
      };
      this.addCommands({
        cmd: a,
        undo: o,
        mustExec: !0
      });
    } catch (n) {
      q(`paste: "${n.message}".`);
    }
  }
  keydown(t) {
    !this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = !0), r(this, Ft) !== X.NONE && !this.isEditorHandlingKeyboard && _r._keyboardManager.exec(this, t);
  }
  keyup(t) {
    this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = !1, r(this, _i) && (p(this, _i, !1), A(this, P, zl).call(this, "main_toolbar")));
  }
  onEditingAction({
    name: t
  }) {
    switch (t) {
      case "undo":
      case "redo":
      case "delete":
      case "selectAll":
        this[t]();
        break;
      case "highlightSelection":
        this.highlightSelection("context_menu");
        break;
    }
  }
  setEditingState(t) {
    t ? (A(this, P, uu).call(this), A(this, P, cc).call(this), A(this, P, re).call(this, {
      isEditing: r(this, Ft) !== X.NONE,
      isEmpty: A(this, P, Na).call(this),
      hasSomethingToUndo: r(this, He).hasSomethingToUndo(),
      hasSomethingToRedo: r(this, He).hasSomethingToRedo(),
      hasSelectedEditor: !1
    })) : (A(this, P, fu).call(this), A(this, P, dc).call(this), A(this, P, re).call(this, {
      isEditing: !1
    }), this.disableUserSelect(!1));
  }
  registerEditorTypes(t) {
    if (!r(this, Ze)) {
      p(this, Ze, t);
      for (const e of r(this, Ze))
        A(this, P, Ns).call(this, e.defaultPropertiesToUpdate);
    }
  }
  getId() {
    return r(this, Sh).id;
  }
  get currentLayer() {
    return r(this, Gt).get(r(this, Rr));
  }
  getLayer(t) {
    return r(this, Gt).get(t);
  }
  get currentPageIndex() {
    return r(this, Rr);
  }
  addLayer(t) {
    r(this, Gt).set(t.pageIndex, t), r(this, Si) ? t.enable() : t.disable();
  }
  removeLayer(t) {
    r(this, Gt).delete(t.pageIndex);
  }
  async updateMode(t, e = null, s = !1) {
    var i;
    if (r(this, Ft) !== t && !(r(this, ze) && (await r(this, ze).promise, !r(this, ze)))) {
      if (p(this, ze, Promise.withResolvers()), p(this, Ft, t), t === X.NONE) {
        this.setEditingState(!1), A(this, P, bu).call(this), (i = this._editorUndoBar) == null || i.hide(), r(this, ze).resolve();
        return;
      }
      this.setEditingState(!0), await A(this, P, mu).call(this), this.unselectAll();
      for (const n of r(this, Gt).values())
        n.updateMode(t);
      if (!e) {
        s && this.addNewEditorFromKeyboard(), r(this, ze).resolve();
        return;
      }
      for (const n of r(this, Rt).values())
        n.annotationElementId === e ? (this.setSelected(n), n.enterInEditMode()) : n.unselect();
      r(this, ze).resolve();
    }
  }
  addNewEditorFromKeyboard() {
    this.currentLayer.canCreateNewEmptyEditor() && this.currentLayer.addNewEditor();
  }
  updateToolbar(t) {
    t !== r(this, Ft) && this._eventBus.dispatch("switchannotationeditormode", {
      source: this,
      mode: t
    });
  }
  updateParams(t, e) {
    var s;
    if (r(this, Ze)) {
      switch (t) {
        case J.CREATE:
          this.currentLayer.addNewEditor();
          return;
        case J.HIGHLIGHT_DEFAULT_COLOR:
          (s = r(this, fo)) == null || s.updateColor(e);
          break;
        case J.HIGHLIGHT_SHOW_ALL:
          this._eventBus.dispatch("reporttelemetry", {
            source: this,
            details: {
              type: "editing",
              data: {
                type: "highlight",
                action: "toggle_visibility"
              }
            }
          }), (r(this, go) || p(this, go, /* @__PURE__ */ new Map())).set(t, e), this.showAllEditors("highlight", e);
          break;
      }
      for (const i of r(this, at))
        i.updateParams(t, e);
      for (const i of r(this, Ze))
        i.updateDefaultParams(t, e);
    }
  }
  showAllEditors(t, e, s = !1) {
    var n;
    for (const a of r(this, Rt).values())
      a.editorType === t && a.show(e);
    (((n = r(this, go)) == null ? void 0 : n.get(J.HIGHLIGHT_SHOW_ALL)) ?? !0) !== e && A(this, P, Ns).call(this, [[J.HIGHLIGHT_SHOW_ALL, e]]);
  }
  enableWaiting(t = !1) {
    if (r(this, uo) !== t) {
      p(this, uo, t);
      for (const e of r(this, Gt).values())
        t ? e.disableClick() : e.enableClick(), e.div.classList.toggle("waiting", t);
    }
  }
  getEditors(t) {
    const e = [];
    for (const s of r(this, Rt).values())
      s.pageIndex === t && e.push(s);
    return e;
  }
  getEditor(t) {
    return r(this, Rt).get(t);
  }
  addEditor(t) {
    r(this, Rt).set(t.id, t);
  }
  removeEditor(t) {
    var e;
    t.div.contains(document.activeElement) && (r(this, bs) && clearTimeout(r(this, bs)), p(this, bs, setTimeout(() => {
      this.focusMainContainer(), p(this, bs, null);
    }, 0))), r(this, Rt).delete(t.id), this.unselect(t), (!t.annotationElementId || !r(this, cn).has(t.annotationElementId)) && ((e = r(this, zs)) == null || e.remove(t.id));
  }
  addDeletedAnnotationElement(t) {
    r(this, cn).add(t.annotationElementId), this.addChangedExistingAnnotation(t), t.deleted = !0;
  }
  isDeletedAnnotationElement(t) {
    return r(this, cn).has(t);
  }
  removeDeletedAnnotationElement(t) {
    r(this, cn).delete(t.annotationElementId), this.removeChangedExistingAnnotation(t), t.deleted = !1;
  }
  setActiveEditor(t) {
    r(this, _e) !== t && (p(this, _e, t), t && A(this, P, Ns).call(this, t.propertiesToUpdate));
  }
  updateUI(t) {
    r(this, P, Au) === t && A(this, P, Ns).call(this, t.propertiesToUpdate);
  }
  updateUIForDefaultProperties(t) {
    A(this, P, Ns).call(this, t.defaultPropertiesToUpdate);
  }
  toggleSelected(t) {
    if (r(this, at).has(t)) {
      r(this, at).delete(t), t.unselect(), A(this, P, re).call(this, {
        hasSelectedEditor: this.hasSelection
      });
      return;
    }
    r(this, at).add(t), t.select(), A(this, P, Ns).call(this, t.propertiesToUpdate), A(this, P, re).call(this, {
      hasSelectedEditor: !0
    });
  }
  setSelected(t) {
    var e;
    (e = r(this, hn)) == null || e.commitOrRemove();
    for (const s of r(this, at))
      s !== t && s.unselect();
    r(this, at).clear(), r(this, at).add(t), t.select(), A(this, P, Ns).call(this, t.propertiesToUpdate), A(this, P, re).call(this, {
      hasSelectedEditor: !0
    });
  }
  isSelected(t) {
    return r(this, at).has(t);
  }
  get firstSelectedEditor() {
    return r(this, at).values().next().value;
  }
  unselect(t) {
    t.unselect(), r(this, at).delete(t), A(this, P, re).call(this, {
      hasSelectedEditor: this.hasSelection
    });
  }
  get hasSelection() {
    return r(this, at).size !== 0;
  }
  get isEnterHandled() {
    return r(this, at).size === 1 && this.firstSelectedEditor.isEnterHandled;
  }
  undo() {
    var t;
    r(this, He).undo(), A(this, P, re).call(this, {
      hasSomethingToUndo: r(this, He).hasSomethingToUndo(),
      hasSomethingToRedo: !0,
      isEmpty: A(this, P, Na).call(this)
    }), (t = this._editorUndoBar) == null || t.hide();
  }
  redo() {
    r(this, He).redo(), A(this, P, re).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: r(this, He).hasSomethingToRedo(),
      isEmpty: A(this, P, Na).call(this)
    });
  }
  addCommands(t) {
    r(this, He).add(t), A(this, P, re).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: !1,
      isEmpty: A(this, P, Na).call(this)
    });
  }
  cleanUndoStack(t) {
    r(this, He).cleanType(t);
  }
  delete() {
    var n;
    this.commitOrRemove();
    const t = (n = this.currentLayer) == null ? void 0 : n.endDrawingSession(!0);
    if (!this.hasSelection && !t)
      return;
    const e = t ? [t] : [...r(this, at)], s = () => {
      var a;
      (a = this._editorUndoBar) == null || a.show(i, e.length === 1 ? e[0].editorType : e.length);
      for (const o of e)
        o.remove();
    }, i = () => {
      for (const a of e)
        A(this, P, uc).call(this, a);
    };
    this.addCommands({
      cmd: s,
      undo: i,
      mustExec: !0
    });
  }
  commitOrRemove() {
    var t;
    (t = r(this, _e)) == null || t.commitOrRemove();
  }
  hasSomethingToControl() {
    return r(this, _e) || this.hasSelection;
  }
  selectAll() {
    for (const t of r(this, at))
      t.commit();
    A(this, P, fc).call(this, r(this, Rt).values());
  }
  unselectAll() {
    var t;
    if (!(r(this, _e) && (r(this, _e).commitOrRemove(), r(this, Ft) !== X.NONE)) && !((t = r(this, hn)) != null && t.commitOrRemove()) && this.hasSelection) {
      for (const e of r(this, at))
        e.unselect();
      r(this, at).clear(), A(this, P, re).call(this, {
        hasSelectedEditor: !1
      });
    }
  }
  translateSelectedEditors(t, e, s = !1) {
    if (s || this.commitOrRemove(), !this.hasSelection)
      return;
    r(this, Ci)[0] += t, r(this, Ci)[1] += e;
    const [i, n] = r(this, Ci), a = [...r(this, at)], o = 1e3;
    r(this, ys) && clearTimeout(r(this, ys)), p(this, ys, setTimeout(() => {
      p(this, ys, null), r(this, Ci)[0] = r(this, Ci)[1] = 0, this.addCommands({
        cmd: () => {
          for (const l of a)
            r(this, Rt).has(l.id) && l.translateInPage(i, n);
        },
        undo: () => {
          for (const l of a)
            r(this, Rt).has(l.id) && l.translateInPage(-i, -n);
        },
        mustExec: !1
      });
    }, o));
    for (const l of a)
      l.translateInPage(t, e);
  }
  setUpDragSession() {
    if (this.hasSelection) {
      this.disableUserSelect(!0), p(this, ms, /* @__PURE__ */ new Map());
      for (const t of r(this, at))
        r(this, ms).set(t, {
          savedX: t.x,
          savedY: t.y,
          savedPageIndex: t.pageIndex,
          newX: 0,
          newY: 0,
          newPageIndex: -1
        });
    }
  }
  endDragSession() {
    if (!r(this, ms))
      return !1;
    this.disableUserSelect(!1);
    const t = r(this, ms);
    p(this, ms, null);
    let e = !1;
    for (const [{
      x: i,
      y: n,
      pageIndex: a
    }, o] of t)
      o.newX = i, o.newY = n, o.newPageIndex = a, e || (e = i !== o.savedX || n !== o.savedY || a !== o.savedPageIndex);
    if (!e)
      return !1;
    const s = (i, n, a, o) => {
      if (r(this, Rt).has(i.id)) {
        const l = r(this, Gt).get(o);
        l ? i._setParentAndPosition(l, n, a) : (i.pageIndex = o, i.x = n, i.y = a);
      }
    };
    return this.addCommands({
      cmd: () => {
        for (const [i, {
          newX: n,
          newY: a,
          newPageIndex: o
        }] of t)
          s(i, n, a, o);
      },
      undo: () => {
        for (const [i, {
          savedX: n,
          savedY: a,
          savedPageIndex: o
        }] of t)
          s(i, n, a, o);
      },
      mustExec: !0
    }), !0;
  }
  dragSelectedEditors(t, e) {
    if (r(this, ms))
      for (const s of r(this, ms).keys())
        s.drag(t, e);
  }
  rebuild(t) {
    if (t.parent === null) {
      const e = this.getLayer(t.pageIndex);
      e ? (e.changeParent(t), e.addOrRebuild(t)) : (this.addEditor(t), this.addToAnnotationStorage(t), t.rebuild());
    } else
      t.parent.addOrRebuild(t);
  }
  get isEditorHandlingKeyboard() {
    var t;
    return ((t = this.getActive()) == null ? void 0 : t.shouldGetKeyboardEvents()) || r(this, at).size === 1 && this.firstSelectedEditor.shouldGetKeyboardEvents();
  }
  isActive(t) {
    return r(this, _e) === t;
  }
  getActive() {
    return r(this, _e);
  }
  getMode() {
    return r(this, Ft);
  }
  get imageManager() {
    return Q(this, "imageManager", new ac());
  }
  getSelectionBoxes(t) {
    if (!t)
      return null;
    const e = document.getSelection();
    for (let h = 0, c = e.rangeCount; h < c; h++)
      if (!t.contains(e.getRangeAt(h).commonAncestorContainer))
        return null;
    const {
      x: s,
      y: i,
      width: n,
      height: a
    } = t.getBoundingClientRect();
    let o;
    switch (t.getAttribute("data-main-rotation")) {
      case "90":
        o = (h, c, u, f) => ({
          x: (c - i) / a,
          y: 1 - (h + u - s) / n,
          width: f / a,
          height: u / n
        });
        break;
      case "180":
        o = (h, c, u, f) => ({
          x: 1 - (h + u - s) / n,
          y: 1 - (c + f - i) / a,
          width: u / n,
          height: f / a
        });
        break;
      case "270":
        o = (h, c, u, f) => ({
          x: 1 - (c + f - i) / a,
          y: (h - s) / n,
          width: f / a,
          height: u / n
        });
        break;
      default:
        o = (h, c, u, f) => ({
          x: (h - s) / n,
          y: (c - i) / a,
          width: u / n,
          height: f / a
        });
        break;
    }
    const l = [];
    for (let h = 0, c = e.rangeCount; h < c; h++) {
      const u = e.getRangeAt(h);
      if (!u.collapsed)
        for (const {
          x: f,
          y: g,
          width: b,
          height: y
        } of u.getClientRects())
          b === 0 || y === 0 || l.push(o(f, g, b, y));
    }
    return l.length === 0 ? null : l;
  }
  addChangedExistingAnnotation({
    annotationElementId: t,
    id: e
  }) {
    (r(this, Mr) || p(this, Mr, /* @__PURE__ */ new Map())).set(t, e);
  }
  removeChangedExistingAnnotation({
    annotationElementId: t
  }) {
    var e;
    (e = r(this, Mr)) == null || e.delete(t);
  }
  renderAnnotationElement(t) {
    var i;
    const e = (i = r(this, Mr)) == null ? void 0 : i.get(t.data.id);
    if (!e)
      return;
    const s = r(this, zs).getRawValue(e);
    s && (r(this, Ft) === X.NONE && !s.hasBeenModified || s.renderAnnotationElement(t));
  }
};
kr = new WeakMap(), _e = new WeakMap(), Rt = new WeakMap(), Gt = new WeakMap(), Pr = new WeakMap(), zs = new WeakMap(), Mr = new WeakMap(), He = new WeakMap(), vi = new WeakMap(), hn = new WeakMap(), Rr = new WeakMap(), cn = new WeakMap(), ms = new WeakMap(), Ze = new WeakMap(), dn = new WeakMap(), lo = new WeakMap(), ho = new WeakMap(), Lr = new WeakMap(), co = new WeakMap(), bs = new WeakMap(), wi = new WeakMap(), Ir = new WeakMap(), _i = new WeakMap(), As = new WeakMap(), Sh = new WeakMap(), Si = new WeakMap(), uo = new WeakMap(), Ei = new WeakMap(), un = new WeakMap(), fo = new WeakMap(), po = new WeakMap(), Ft = new WeakMap(), at = new WeakMap(), $s = new WeakMap(), fn = new WeakMap(), go = new WeakMap(), mo = new WeakMap(), Ci = new WeakMap(), ys = new WeakMap(), Gs = new WeakMap(), bo = new WeakMap(), ze = new WeakMap(), P = new WeakSet(), Hl = function({
  anchorNode: t
}) {
  return t.nodeType === Node.TEXT_NODE ? t.parentElement : t;
}, lc = function(t) {
  const {
    currentLayer: e
  } = this;
  if (e.hasTextLayer(t))
    return e;
  for (const s of r(this, Gt).values())
    if (s.hasTextLayer(t))
      return s;
  return null;
}, hu = function() {
  const t = document.getSelection();
  if (!t || t.isCollapsed)
    return;
  const s = A(this, P, Hl).call(this, t).closest(".textLayer"), i = this.getSelectionBoxes(s);
  i && (r(this, As) || p(this, As, new _p(this)), r(this, As).show(s, i, this.direction === "ltr"));
}, cu = function() {
  var n, a, o;
  const t = document.getSelection();
  if (!t || t.isCollapsed) {
    r(this, $s) && ((n = r(this, As)) == null || n.hide(), p(this, $s, null), A(this, P, re).call(this, {
      hasSelectedText: !1
    }));
    return;
  }
  const {
    anchorNode: e
  } = t;
  if (e === r(this, $s))
    return;
  const i = A(this, P, Hl).call(this, t).closest(".textLayer");
  if (!i) {
    r(this, $s) && ((a = r(this, As)) == null || a.hide(), p(this, $s, null), A(this, P, re).call(this, {
      hasSelectedText: !1
    }));
    return;
  }
  if ((o = r(this, As)) == null || o.hide(), p(this, $s, e), A(this, P, re).call(this, {
    hasSelectedText: !0
  }), !(r(this, Ft) !== X.HIGHLIGHT && r(this, Ft) !== X.NONE) && (r(this, Ft) === X.HIGHLIGHT && this.showAllEditors("highlight", !0, !0), p(this, _i, this.isShiftKeyDown), !this.isShiftKeyDown)) {
    const l = r(this, Ft) === X.HIGHLIGHT ? A(this, P, lc).call(this, i) : null;
    l == null || l.toggleDrawing();
    const h = new AbortController(), c = this.combinedSignal(h), u = (f) => {
      f.type === "pointerup" && f.button !== 0 || (h.abort(), l == null || l.toggleDrawing(!0), f.type === "pointerup" && A(this, P, zl).call(this, "main_toolbar"));
    };
    window.addEventListener("pointerup", u, {
      signal: c
    }), window.addEventListener("blur", u, {
      signal: c
    });
  }
}, zl = function(t = "") {
  r(this, Ft) === X.HIGHLIGHT ? this.highlightSelection(t) : r(this, lo) && A(this, P, hu).call(this);
}, du = function() {
  document.addEventListener("selectionchange", A(this, P, cu).bind(this), {
    signal: this._signal
  });
}, uu = function() {
  if (r(this, wi))
    return;
  p(this, wi, new AbortController());
  const t = this.combinedSignal(r(this, wi));
  window.addEventListener("focus", this.focus.bind(this), {
    signal: t
  }), window.addEventListener("blur", this.blur.bind(this), {
    signal: t
  });
}, fu = function() {
  var t;
  (t = r(this, wi)) == null || t.abort(), p(this, wi, null);
}, hc = function() {
  if (r(this, Ei))
    return;
  p(this, Ei, new AbortController());
  const t = this.combinedSignal(r(this, Ei));
  window.addEventListener("keydown", this.keydown.bind(this), {
    signal: t
  }), window.addEventListener("keyup", this.keyup.bind(this), {
    signal: t
  });
}, pu = function() {
  var t;
  (t = r(this, Ei)) == null || t.abort(), p(this, Ei, null);
}, cc = function() {
  if (r(this, vi))
    return;
  p(this, vi, new AbortController());
  const t = this.combinedSignal(r(this, vi));
  document.addEventListener("copy", this.copy.bind(this), {
    signal: t
  }), document.addEventListener("cut", this.cut.bind(this), {
    signal: t
  }), document.addEventListener("paste", this.paste.bind(this), {
    signal: t
  });
}, dc = function() {
  var t;
  (t = r(this, vi)) == null || t.abort(), p(this, vi, null);
}, gu = function() {
  const t = this._signal;
  document.addEventListener("dragover", this.dragOver.bind(this), {
    signal: t
  }), document.addEventListener("drop", this.drop.bind(this), {
    signal: t
  });
}, re = function(t) {
  Object.entries(t).some(([s, i]) => r(this, mo)[s] !== i) && (this._eventBus.dispatch("annotationeditorstateschanged", {
    source: this,
    details: Object.assign(r(this, mo), t)
  }), r(this, Ft) === X.HIGHLIGHT && t.hasSelectedEditor === !1 && A(this, P, Ns).call(this, [[J.HIGHLIGHT_FREE, !0]]));
}, Ns = function(t) {
  this._eventBus.dispatch("annotationeditorparamschanged", {
    source: this,
    details: t
  });
}, mu = async function() {
  if (!r(this, Si)) {
    p(this, Si, !0);
    const t = [];
    for (const e of r(this, Gt).values())
      t.push(e.enable());
    await Promise.all(t);
    for (const e of r(this, Rt).values())
      e.enable();
  }
}, bu = function() {
  if (this.unselectAll(), r(this, Si)) {
    p(this, Si, !1);
    for (const t of r(this, Gt).values())
      t.disable();
    for (const t of r(this, Rt).values())
      t.disable();
  }
}, uc = function(t) {
  const e = r(this, Gt).get(t.pageIndex);
  e ? e.addOrRebuild(t) : (this.addEditor(t), this.addToAnnotationStorage(t));
}, Au = function() {
  let t = null;
  for (t of r(this, at))
    ;
  return t;
}, Na = function() {
  if (r(this, Rt).size === 0)
    return !0;
  if (r(this, Rt).size === 1)
    for (const t of r(this, Rt).values())
      return t.isEmpty();
  return !1;
}, fc = function(t) {
  for (const e of r(this, at))
    e.unselect();
  r(this, at).clear();
  for (const e of t)
    e.isEmpty() || (r(this, at).add(e), e.select());
  A(this, P, re).call(this, {
    hasSelectedEditor: this.hasSelection
  });
}, $(_r, "TRANSLATE_SMALL", 1), $(_r, "TRANSLATE_BIG", 10);
let cr = _r;
var Nt, vs, Je, Dr, ws, Se, Fr, _s, be, Us, pn, Ss, xi, hs, Oa, $l;
const ae = class ae {
  constructor(t) {
    m(this, hs);
    m(this, Nt, null);
    m(this, vs, !1);
    m(this, Je, null);
    m(this, Dr, null);
    m(this, ws, null);
    m(this, Se, null);
    m(this, Fr, !1);
    m(this, _s, null);
    m(this, be, null);
    m(this, Us, null);
    m(this, pn, null);
    m(this, Ss, !1);
    p(this, be, t), p(this, Ss, t._uiManager.useNewAltTextFlow), r(ae, xi) || p(ae, xi, Object.freeze({
      added: "pdfjs-editor-new-alt-text-added-button",
      "added-label": "pdfjs-editor-new-alt-text-added-button-label",
      missing: "pdfjs-editor-new-alt-text-missing-button",
      "missing-label": "pdfjs-editor-new-alt-text-missing-button-label",
      review: "pdfjs-editor-new-alt-text-to-review-button",
      "review-label": "pdfjs-editor-new-alt-text-to-review-button-label"
    }));
  }
  static initialize(t) {
    ae._l10n ?? (ae._l10n = t);
  }
  async render() {
    const t = p(this, Je, document.createElement("button"));
    t.className = "altText", t.tabIndex = "0";
    const e = p(this, Dr, document.createElement("span"));
    t.append(e), r(this, Ss) ? (t.classList.add("new"), t.setAttribute("data-l10n-id", r(ae, xi).missing), e.setAttribute("data-l10n-id", r(ae, xi)["missing-label"])) : (t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button"), e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button-label"));
    const s = r(this, be)._uiManager._signal;
    t.addEventListener("contextmenu", cs, {
      signal: s
    }), t.addEventListener("pointerdown", (n) => n.stopPropagation(), {
      signal: s
    });
    const i = (n) => {
      n.preventDefault(), r(this, be)._uiManager.editAltText(r(this, be)), r(this, Ss) && r(this, be)._reportTelemetry({
        action: "pdfjs.image.alt_text.image_status_label_clicked",
        data: {
          label: r(this, hs, Oa)
        }
      });
    };
    return t.addEventListener("click", i, {
      capture: !0,
      signal: s
    }), t.addEventListener("keydown", (n) => {
      n.target === t && n.key === "Enter" && (p(this, Fr, !0), i(n));
    }, {
      signal: s
    }), await A(this, hs, $l).call(this), t;
  }
  finish() {
    r(this, Je) && (r(this, Je).focus({
      focusVisible: r(this, Fr)
    }), p(this, Fr, !1));
  }
  isEmpty() {
    return r(this, Ss) ? r(this, Nt) === null : !r(this, Nt) && !r(this, vs);
  }
  hasData() {
    return r(this, Ss) ? r(this, Nt) !== null || !!r(this, Us) : this.isEmpty();
  }
  get guessedText() {
    return r(this, Us);
  }
  async setGuessedText(t) {
    r(this, Nt) === null && (p(this, Us, t), p(this, pn, await ae._l10n.get("pdfjs-editor-new-alt-text-generated-alt-text-with-disclaimer", {
      generatedAltText: t
    })), A(this, hs, $l).call(this));
  }
  toggleAltTextBadge(t = !1) {
    var e;
    if (!r(this, Ss) || r(this, Nt)) {
      (e = r(this, _s)) == null || e.remove(), p(this, _s, null);
      return;
    }
    if (!r(this, _s)) {
      const s = p(this, _s, document.createElement("div"));
      s.className = "noAltTextBadge", r(this, be).div.append(s);
    }
    r(this, _s).classList.toggle("hidden", !t);
  }
  serialize(t) {
    let e = r(this, Nt);
    return !t && r(this, Us) === e && (e = r(this, pn)), {
      altText: e,
      decorative: r(this, vs),
      guessedText: r(this, Us),
      textWithDisclaimer: r(this, pn)
    };
  }
  get data() {
    return {
      altText: r(this, Nt),
      decorative: r(this, vs)
    };
  }
  set data({
    altText: t,
    decorative: e,
    guessedText: s,
    textWithDisclaimer: i,
    cancel: n = !1
  }) {
    s && (p(this, Us, s), p(this, pn, i)), !(r(this, Nt) === t && r(this, vs) === e) && (n || (p(this, Nt, t), p(this, vs, e)), A(this, hs, $l).call(this));
  }
  toggle(t = !1) {
    r(this, Je) && (!t && r(this, Se) && (clearTimeout(r(this, Se)), p(this, Se, null)), r(this, Je).disabled = !t);
  }
  shown() {
    r(this, be)._reportTelemetry({
      action: "pdfjs.image.alt_text.image_status_label_displayed",
      data: {
        label: r(this, hs, Oa)
      }
    });
  }
  destroy() {
    var t, e;
    (t = r(this, Je)) == null || t.remove(), p(this, Je, null), p(this, Dr, null), p(this, ws, null), (e = r(this, _s)) == null || e.remove(), p(this, _s, null);
  }
};
Nt = new WeakMap(), vs = new WeakMap(), Je = new WeakMap(), Dr = new WeakMap(), ws = new WeakMap(), Se = new WeakMap(), Fr = new WeakMap(), _s = new WeakMap(), be = new WeakMap(), Us = new WeakMap(), pn = new WeakMap(), Ss = new WeakMap(), xi = new WeakMap(), hs = new WeakSet(), Oa = function() {
  return r(this, Nt) && "added" || r(this, Nt) === null && this.guessedText && "review" || "missing";
}, $l = async function() {
  var i, n, a;
  const t = r(this, Je);
  if (!t)
    return;
  if (r(this, Ss)) {
    if (t.classList.toggle("done", !!r(this, Nt)), t.setAttribute("data-l10n-id", r(ae, xi)[r(this, hs, Oa)]), (i = r(this, Dr)) == null || i.setAttribute("data-l10n-id", r(ae, xi)[`${r(this, hs, Oa)}-label`]), !r(this, Nt)) {
      (n = r(this, ws)) == null || n.remove();
      return;
    }
  } else {
    if (!r(this, Nt) && !r(this, vs)) {
      t.classList.remove("done"), (a = r(this, ws)) == null || a.remove();
      return;
    }
    t.classList.add("done"), t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-edit-button");
  }
  let e = r(this, ws);
  if (!e) {
    p(this, ws, e = document.createElement("span")), e.className = "tooltip", e.setAttribute("role", "tooltip"), e.id = `alt-text-tooltip-${r(this, be).id}`;
    const o = 100, l = r(this, be)._uiManager._signal;
    l.addEventListener("abort", () => {
      clearTimeout(r(this, Se)), p(this, Se, null);
    }, {
      once: !0
    }), t.addEventListener("mouseenter", () => {
      p(this, Se, setTimeout(() => {
        p(this, Se, null), r(this, ws).classList.add("show"), r(this, be)._reportTelemetry({
          action: "alt_text_tooltip"
        });
      }, o));
    }, {
      signal: l
    }), t.addEventListener("mouseleave", () => {
      var h;
      r(this, Se) && (clearTimeout(r(this, Se)), p(this, Se, null)), (h = r(this, ws)) == null || h.classList.remove("show");
    }, {
      signal: l
    });
  }
  r(this, vs) ? e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-decorative-tooltip") : (e.removeAttribute("data-l10n-id"), e.textContent = r(this, Nt)), e.parentNode || t.append(e);
  const s = r(this, be).getImageForAltText();
  s == null || s.setAttribute("aria-describedby", e.id);
}, m(ae, xi, null), $(ae, "_l10n", null);
let fh = ae;
var Ao, gn, yo, vo, wo, _o, So, Nr, Vs, mn, Ti, pi, yu, vu, pc;
const xd = class xd {
  constructor({
    container: t,
    isPinchingDisabled: e = null,
    isPinchingStopped: s = null,
    onPinchStart: i = null,
    onPinching: n = null,
    onPinchEnd: a = null,
    signal: o
  }) {
    m(this, pi);
    m(this, Ao);
    m(this, gn, !1);
    m(this, yo, null);
    m(this, vo);
    m(this, wo);
    m(this, _o);
    m(this, So);
    m(this, Nr);
    m(this, Vs, null);
    m(this, mn);
    m(this, Ti, null);
    p(this, Ao, t), p(this, yo, s), p(this, vo, e), p(this, wo, i), p(this, _o, n), p(this, So, a), p(this, mn, new AbortController()), p(this, Nr, AbortSignal.any([o, r(this, mn).signal])), t.addEventListener("touchstart", A(this, pi, yu).bind(this), {
      passive: !1,
      signal: r(this, Nr)
    });
  }
  get MIN_TOUCH_DISTANCE_TO_PINCH() {
    return Q(this, "MIN_TOUCH_DISTANCE_TO_PINCH", 35 / (window.devicePixelRatio || 1));
  }
  destroy() {
    var t;
    (t = r(this, mn)) == null || t.abort(), p(this, mn, null);
  }
};
Ao = new WeakMap(), gn = new WeakMap(), yo = new WeakMap(), vo = new WeakMap(), wo = new WeakMap(), _o = new WeakMap(), So = new WeakMap(), Nr = new WeakMap(), Vs = new WeakMap(), mn = new WeakMap(), Ti = new WeakMap(), pi = new WeakSet(), yu = function(t) {
  var i, n, a;
  if ((i = r(this, vo)) != null && i.call(this) || t.touches.length < 2)
    return;
  if (!r(this, Ti)) {
    p(this, Ti, new AbortController());
    const o = AbortSignal.any([r(this, Nr), r(this, Ti).signal]), l = r(this, Ao), h = {
      signal: o,
      passive: !1
    };
    l.addEventListener("touchmove", A(this, pi, vu).bind(this), h), l.addEventListener("touchend", A(this, pi, pc).bind(this), h), l.addEventListener("touchcancel", A(this, pi, pc).bind(this), h), (n = r(this, wo)) == null || n.call(this);
  }
  if (Ne(t), t.touches.length !== 2 || (a = r(this, yo)) != null && a.call(this)) {
    p(this, Vs, null);
    return;
  }
  let [e, s] = t.touches;
  e.identifier > s.identifier && ([e, s] = [s, e]), p(this, Vs, {
    touch0X: e.screenX,
    touch0Y: e.screenY,
    touch1X: s.screenX,
    touch1Y: s.screenY
  });
}, vu = function(t) {
  var _;
  if (!r(this, Vs) || t.touches.length !== 2)
    return;
  let [e, s] = t.touches;
  e.identifier > s.identifier && ([e, s] = [s, e]);
  const {
    screenX: i,
    screenY: n
  } = e, {
    screenX: a,
    screenY: o
  } = s, l = r(this, Vs), {
    touch0X: h,
    touch0Y: c,
    touch1X: u,
    touch1Y: f
  } = l, g = u - h, b = f - c, y = a - i, w = o - n, v = Math.hypot(y, w) || 1, S = Math.hypot(g, b) || 1;
  if (!r(this, gn) && Math.abs(S - v) <= xd.MIN_TOUCH_DISTANCE_TO_PINCH)
    return;
  if (l.touch0X = i, l.touch0Y = n, l.touch1X = a, l.touch1Y = o, t.preventDefault(), !r(this, gn)) {
    p(this, gn, !0);
    return;
  }
  const E = [(i + a) / 2, (n + o) / 2];
  (_ = r(this, _o)) == null || _.call(this, E, S, v);
}, pc = function(t) {
  var e;
  r(this, Ti).abort(), p(this, Ti, null), (e = r(this, So)) == null || e.call(this), r(this, Vs) && (t.preventDefault(), p(this, Vs, null), p(this, gn, !1));
};
let ph = xd;
var bn, ts, ut, Or, ki, Eo, An, Ut, yn, js, Pi, Co, vn, Ee, xo, wn, Ws, Es, Br, Hr, $e, _n, To, Eh, G, gc, ko, mc, Gl, wu, _u, bc, Ul, Ac, Su, Eu, Cu, yc, xu, vc, Tu, ku, Pu, wc, Ba;
const Y = class Y {
  constructor(t) {
    m(this, G);
    m(this, bn, null);
    m(this, ts, null);
    m(this, ut, null);
    m(this, Or, !1);
    m(this, ki, null);
    m(this, Eo, "");
    m(this, An, !1);
    m(this, Ut, null);
    m(this, yn, null);
    m(this, js, null);
    m(this, Pi, null);
    m(this, Co, "");
    m(this, vn, !1);
    m(this, Ee, null);
    m(this, xo, !1);
    m(this, wn, !1);
    m(this, Ws, !1);
    m(this, Es, null);
    m(this, Br, 0);
    m(this, Hr, 0);
    m(this, $e, null);
    m(this, _n, null);
    $(this, "_editToolbar", null);
    $(this, "_initialOptions", /* @__PURE__ */ Object.create(null));
    $(this, "_initialData", null);
    $(this, "_isVisible", !0);
    $(this, "_uiManager", null);
    $(this, "_focusEventsAllowed", !0);
    m(this, To, !1);
    m(this, Eh, Y._zIndex++);
    this.parent = t.parent, this.id = t.id, this.width = this.height = null, this.pageIndex = t.parent.pageIndex, this.name = t.name, this.div = null, this._uiManager = t.uiManager, this.annotationElementId = null, this._willKeepAspectRatio = !1, this._initialOptions.isCentered = t.isCentered, this._structTreeParentId = null;
    const {
      rotation: e,
      rawDims: {
        pageWidth: s,
        pageHeight: i,
        pageX: n,
        pageY: a
      }
    } = this.parent.viewport;
    this.rotation = e, this.pageRotation = (360 + e - this._uiManager.viewParameters.rotation) % 360, this.pageDimensions = [s, i], this.pageTranslation = [n, a];
    const [o, l] = this.parentDimensions;
    this.x = t.x / o, this.y = t.y / l, this.isAttachedToDOM = !1, this.deleted = !1;
  }
  static get _resizerKeyboardManager() {
    const t = Y.prototype._resizeWithKeyboard, e = cr.TRANSLATE_SMALL, s = cr.TRANSLATE_BIG;
    return Q(this, "_resizerKeyboardManager", new Pl([[["ArrowLeft", "mac+ArrowLeft"], t, {
      args: [-e, 0]
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t, {
      args: [-s, 0]
    }], [["ArrowRight", "mac+ArrowRight"], t, {
      args: [e, 0]
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t, {
      args: [s, 0]
    }], [["ArrowUp", "mac+ArrowUp"], t, {
      args: [0, -e]
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t, {
      args: [0, -s]
    }], [["ArrowDown", "mac+ArrowDown"], t, {
      args: [0, e]
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t, {
      args: [0, s]
    }], [["Escape", "mac+Escape"], Y.prototype._stopResizingWithKeyboard]]));
  }
  get editorType() {
    return Object.getPrototypeOf(this).constructor._type;
  }
  static get isDrawer() {
    return !1;
  }
  static get _defaultLineColor() {
    return Q(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
  }
  static deleteAnnotationElement(t) {
    const e = new Cp({
      id: t.parent.getNextId(),
      parent: t.parent,
      uiManager: t._uiManager
    });
    e.annotationElementId = t.annotationElementId, e.deleted = !0, e._uiManager.addToAnnotationStorage(e);
  }
  static initialize(t, e) {
    if (Y._l10n ?? (Y._l10n = t), Y._l10nResizer || (Y._l10nResizer = Object.freeze({
      topLeft: "pdfjs-editor-resizer-top-left",
      topMiddle: "pdfjs-editor-resizer-top-middle",
      topRight: "pdfjs-editor-resizer-top-right",
      middleRight: "pdfjs-editor-resizer-middle-right",
      bottomRight: "pdfjs-editor-resizer-bottom-right",
      bottomMiddle: "pdfjs-editor-resizer-bottom-middle",
      bottomLeft: "pdfjs-editor-resizer-bottom-left",
      middleLeft: "pdfjs-editor-resizer-middle-left"
    })), Y._borderLineWidth !== -1)
      return;
    const s = getComputedStyle(document.documentElement);
    Y._borderLineWidth = parseFloat(s.getPropertyValue("--outline-width")) || 0;
  }
  static updateDefaultParams(t, e) {
  }
  static get defaultPropertiesToUpdate() {
    return [];
  }
  static isHandlingMimeForPasting(t) {
    return !1;
  }
  static paste(t, e) {
    ct("Not implemented");
  }
  get propertiesToUpdate() {
    return [];
  }
  get _isDraggable() {
    return r(this, To);
  }
  set _isDraggable(t) {
    var e;
    p(this, To, t), (e = this.div) == null || e.classList.toggle("draggable", t);
  }
  get isEnterHandled() {
    return !0;
  }
  center() {
    const [t, e] = this.pageDimensions;
    switch (this.parentRotation) {
      case 90:
        this.x -= this.height * e / (t * 2), this.y += this.width * t / (e * 2);
        break;
      case 180:
        this.x += this.width / 2, this.y += this.height / 2;
        break;
      case 270:
        this.x += this.height * e / (t * 2), this.y -= this.width * t / (e * 2);
        break;
      default:
        this.x -= this.width / 2, this.y -= this.height / 2;
        break;
    }
    this.fixAndSetPosition();
  }
  addCommands(t) {
    this._uiManager.addCommands(t);
  }
  get currentLayer() {
    return this._uiManager.currentLayer;
  }
  setInBackground() {
    this.div.style.zIndex = 0;
  }
  setInForeground() {
    this.div.style.zIndex = r(this, Eh);
  }
  setParent(t) {
    t !== null ? (this.pageIndex = t.pageIndex, this.pageDimensions = t.pageDimensions) : A(this, G, Ba).call(this), this.parent = t;
  }
  focusin(t) {
    this._focusEventsAllowed && (r(this, vn) ? p(this, vn, !1) : this.parent.setSelected(this));
  }
  focusout(t) {
    var s;
    if (!this._focusEventsAllowed || !this.isAttachedToDOM)
      return;
    const e = t.relatedTarget;
    e != null && e.closest(`#${this.id}`) || (t.preventDefault(), (s = this.parent) != null && s.isMultipleSelection || this.commitOrRemove());
  }
  commitOrRemove() {
    this.isEmpty() ? this.remove() : this.commit();
  }
  commit() {
    this.addToAnnotationStorage();
  }
  addToAnnotationStorage() {
    this._uiManager.addToAnnotationStorage(this);
  }
  setAt(t, e, s, i) {
    const [n, a] = this.parentDimensions;
    [s, i] = this.screenToPageTranslation(s, i), this.x = (t + s) / n, this.y = (e + i) / a, this.fixAndSetPosition();
  }
  translate(t, e) {
    A(this, G, gc).call(this, this.parentDimensions, t, e);
  }
  translateInPage(t, e) {
    r(this, Ee) || p(this, Ee, [this.x, this.y, this.width, this.height]), A(this, G, gc).call(this, this.pageDimensions, t, e), this.div.scrollIntoView({
      block: "nearest"
    });
  }
  drag(t, e) {
    r(this, Ee) || p(this, Ee, [this.x, this.y, this.width, this.height]);
    const {
      div: s,
      parentDimensions: [i, n]
    } = this;
    if (this.x += t / i, this.y += e / n, this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
      const {
        x: u,
        y: f
      } = this.div.getBoundingClientRect();
      this.parent.findNewParent(this, u, f) && (this.x -= Math.floor(this.x), this.y -= Math.floor(this.y));
    }
    let {
      x: a,
      y: o
    } = this;
    const [l, h] = this.getBaseTranslation();
    a += l, o += h;
    const {
      style: c
    } = s;
    c.left = `${(100 * a).toFixed(2)}%`, c.top = `${(100 * o).toFixed(2)}%`, this._onTranslating(a, o), s.scrollIntoView({
      block: "nearest"
    });
  }
  _onTranslating(t, e) {
  }
  _onTranslated(t, e) {
  }
  get _hasBeenMoved() {
    return !!r(this, Ee) && (r(this, Ee)[0] !== this.x || r(this, Ee)[1] !== this.y);
  }
  get _hasBeenResized() {
    return !!r(this, Ee) && (r(this, Ee)[2] !== this.width || r(this, Ee)[3] !== this.height);
  }
  getBaseTranslation() {
    const [t, e] = this.parentDimensions, {
      _borderLineWidth: s
    } = Y, i = s / t, n = s / e;
    switch (this.rotation) {
      case 90:
        return [-i, n];
      case 180:
        return [i, n];
      case 270:
        return [i, -n];
      default:
        return [-i, -n];
    }
  }
  get _mustFixPosition() {
    return !0;
  }
  fixAndSetPosition(t = this.rotation) {
    const {
      div: {
        style: e
      },
      pageDimensions: [s, i]
    } = this;
    let {
      x: n,
      y: a,
      width: o,
      height: l
    } = this;
    if (o *= s, l *= i, n *= s, a *= i, this._mustFixPosition)
      switch (t) {
        case 0:
          n = Math.max(0, Math.min(s - o, n)), a = Math.max(0, Math.min(i - l, a));
          break;
        case 90:
          n = Math.max(0, Math.min(s - l, n)), a = Math.min(i, Math.max(o, a));
          break;
        case 180:
          n = Math.min(s, Math.max(o, n)), a = Math.min(i, Math.max(l, a));
          break;
        case 270:
          n = Math.min(s, Math.max(l, n)), a = Math.max(0, Math.min(i - o, a));
          break;
      }
    this.x = n /= s, this.y = a /= i;
    const [h, c] = this.getBaseTranslation();
    n += h, a += c, e.left = `${(100 * n).toFixed(2)}%`, e.top = `${(100 * a).toFixed(2)}%`, this.moveInDOM();
  }
  screenToPageTranslation(t, e) {
    var s;
    return A(s = Y, ko, mc).call(s, t, e, this.parentRotation);
  }
  pageTranslationToScreen(t, e) {
    var s;
    return A(s = Y, ko, mc).call(s, t, e, 360 - this.parentRotation);
  }
  get parentScale() {
    return this._uiManager.viewParameters.realScale;
  }
  get parentRotation() {
    return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
  }
  get parentDimensions() {
    const {
      parentScale: t,
      pageDimensions: [e, s]
    } = this;
    return [e * t, s * t];
  }
  setDims(t, e) {
    const [s, i] = this.parentDimensions, {
      style: n
    } = this.div;
    n.width = `${(100 * t / s).toFixed(2)}%`, r(this, An) || (n.height = `${(100 * e / i).toFixed(2)}%`);
  }
  fixDims() {
    const {
      style: t
    } = this.div, {
      height: e,
      width: s
    } = t, i = s.endsWith("%"), n = !r(this, An) && e.endsWith("%");
    if (i && n)
      return;
    const [a, o] = this.parentDimensions;
    i || (t.width = `${(100 * parseFloat(s) / a).toFixed(2)}%`), !r(this, An) && !n && (t.height = `${(100 * parseFloat(e) / o).toFixed(2)}%`);
  }
  getInitialTranslation() {
    return [0, 0];
  }
  _onResized() {
  }
  static _round(t) {
    return Math.round(t * 1e4) / 1e4;
  }
  _onResizing() {
  }
  altTextFinish() {
    var t;
    (t = r(this, ut)) == null || t.finish();
  }
  async addEditToolbar() {
    return this._editToolbar || r(this, wn) ? this._editToolbar : (this._editToolbar = new nc(this), this.div.append(this._editToolbar.render()), r(this, ut) && await this._editToolbar.addAltText(r(this, ut)), this._editToolbar);
  }
  removeEditToolbar() {
    var t;
    this._editToolbar && (this._editToolbar.remove(), this._editToolbar = null, (t = r(this, ut)) == null || t.destroy());
  }
  addContainer(t) {
    var s;
    const e = (s = this._editToolbar) == null ? void 0 : s.div;
    e ? e.before(t) : this.div.append(t);
  }
  getClientDimensions() {
    return this.div.getBoundingClientRect();
  }
  async addAltTextButton() {
    r(this, ut) || (fh.initialize(Y._l10n), p(this, ut, new fh(this)), r(this, bn) && (r(this, ut).data = r(this, bn), p(this, bn, null)), await this.addEditToolbar());
  }
  get altTextData() {
    var t;
    return (t = r(this, ut)) == null ? void 0 : t.data;
  }
  set altTextData(t) {
    r(this, ut) && (r(this, ut).data = t);
  }
  get guessedAltText() {
    var t;
    return (t = r(this, ut)) == null ? void 0 : t.guessedText;
  }
  async setGuessedAltText(t) {
    var e;
    await ((e = r(this, ut)) == null ? void 0 : e.setGuessedText(t));
  }
  serializeAltText(t) {
    var e;
    return (e = r(this, ut)) == null ? void 0 : e.serialize(t);
  }
  hasAltText() {
    return !!r(this, ut) && !r(this, ut).isEmpty();
  }
  hasAltTextData() {
    var t;
    return ((t = r(this, ut)) == null ? void 0 : t.hasData()) ?? !1;
  }
  render() {
    var n;
    this.div = document.createElement("div"), this.div.setAttribute("data-editor-rotation", (360 - this.rotation) % 360), this.div.className = this.name, this.div.setAttribute("id", this.id), this.div.tabIndex = r(this, Or) ? -1 : 0, this._isVisible || this.div.classList.add("hidden"), this.setInForeground(), A(this, G, vc).call(this);
    const [t, e] = this.parentDimensions;
    this.parentRotation % 180 !== 0 && (this.div.style.maxWidth = `${(100 * e / t).toFixed(2)}%`, this.div.style.maxHeight = `${(100 * t / e).toFixed(2)}%`);
    const [s, i] = this.getInitialTranslation();
    return this.translate(s, i), uh(this, this.div, ["pointerdown"]), this.isResizable && this._uiManager._supportsPinchToZoom && (r(this, _n) || p(this, _n, new ph({
      container: this.div,
      isPinchingDisabled: () => !this.isSelected,
      onPinchStart: A(this, G, Su).bind(this),
      onPinching: A(this, G, Eu).bind(this),
      onPinchEnd: A(this, G, Cu).bind(this),
      signal: this._uiManager._signal
    }))), (n = this._uiManager._editorUndoBar) == null || n.hide(), this.div;
  }
  pointerdown(t) {
    const {
      isMac: e
    } = ce.platform;
    if (t.button !== 0 || t.ctrlKey && e) {
      t.preventDefault();
      return;
    }
    if (p(this, vn, !0), this._isDraggable) {
      A(this, G, xu).call(this, t);
      return;
    }
    A(this, G, yc).call(this, t);
  }
  get isSelected() {
    return this._uiManager.isSelected(this);
  }
  _onStartDragging() {
  }
  _onStopDragging() {
  }
  moveInDOM() {
    r(this, Es) && clearTimeout(r(this, Es)), p(this, Es, setTimeout(() => {
      var t;
      p(this, Es, null), (t = this.parent) == null || t.moveEditorInDOM(this);
    }, 0));
  }
  _setParentAndPosition(t, e, s) {
    t.changeParent(this), this.x = e, this.y = s, this.fixAndSetPosition(), this._onTranslated();
  }
  getRect(t, e, s = this.rotation) {
    const i = this.parentScale, [n, a] = this.pageDimensions, [o, l] = this.pageTranslation, h = t / i, c = e / i, u = this.x * n, f = this.y * a, g = this.width * n, b = this.height * a;
    switch (s) {
      case 0:
        return [u + h + o, a - f - c - b + l, u + h + g + o, a - f - c + l];
      case 90:
        return [u + c + o, a - f + h + l, u + c + b + o, a - f + h + g + l];
      case 180:
        return [u - h - g + o, a - f + c + l, u - h + o, a - f + c + b + l];
      case 270:
        return [u - c - b + o, a - f - h - g + l, u - c + o, a - f - h + l];
      default:
        throw new Error("Invalid rotation");
    }
  }
  getRectInCurrentCoords(t, e) {
    const [s, i, n, a] = t, o = n - s, l = a - i;
    switch (this.rotation) {
      case 0:
        return [s, e - a, o, l];
      case 90:
        return [s, e - i, l, o];
      case 180:
        return [n, e - i, o, l];
      case 270:
        return [n, e - a, l, o];
      default:
        throw new Error("Invalid rotation");
    }
  }
  onceAdded(t) {
  }
  isEmpty() {
    return !1;
  }
  enableEditMode() {
    p(this, wn, !0);
  }
  disableEditMode() {
    p(this, wn, !1);
  }
  isInEditMode() {
    return r(this, wn);
  }
  shouldGetKeyboardEvents() {
    return r(this, Ws);
  }
  needsToBeRebuilt() {
    return this.div && !this.isAttachedToDOM;
  }
  get isOnScreen() {
    const {
      top: t,
      left: e,
      bottom: s,
      right: i
    } = this.getClientDimensions(), {
      innerHeight: n,
      innerWidth: a
    } = window;
    return e < a && i > 0 && t < n && s > 0;
  }
  rebuild() {
    A(this, G, vc).call(this);
  }
  rotate(t) {
  }
  resize() {
  }
  serializeDeleted() {
    var t;
    return {
      id: this.annotationElementId,
      deleted: !0,
      pageIndex: this.pageIndex,
      popupRef: ((t = this._initialData) == null ? void 0 : t.popupRef) || ""
    };
  }
  serialize(t = !1, e = null) {
    ct("An editor must be serializable");
  }
  static async deserialize(t, e, s) {
    const i = new this.prototype.constructor({
      parent: e,
      id: e.getNextId(),
      uiManager: s
    });
    i.rotation = t.rotation, p(i, bn, t.accessibilityData);
    const [n, a] = i.pageDimensions, [o, l, h, c] = i.getRectInCurrentCoords(t.rect, a);
    return i.x = o / n, i.y = l / a, i.width = h / n, i.height = c / a, i;
  }
  get hasBeenModified() {
    return !!this.annotationElementId && (this.deleted || this.serialize() !== null);
  }
  remove() {
    var t, e;
    if ((t = r(this, Pi)) == null || t.abort(), p(this, Pi, null), this.isEmpty() || this.commit(), this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this), r(this, Es) && (clearTimeout(r(this, Es)), p(this, Es, null)), A(this, G, Ba).call(this), this.removeEditToolbar(), r(this, $e)) {
      for (const s of r(this, $e).values())
        clearTimeout(s);
      p(this, $e, null);
    }
    this.parent = null, (e = r(this, _n)) == null || e.destroy(), p(this, _n, null);
  }
  get isResizable() {
    return !1;
  }
  makeResizable() {
    this.isResizable && (A(this, G, wu).call(this), r(this, Ut).classList.remove("hidden"), uh(this, this.div, ["keydown"]));
  }
  get toolbarPosition() {
    return null;
  }
  keydown(t) {
    if (!this.isResizable || t.target !== this.div || t.key !== "Enter")
      return;
    this._uiManager.setSelected(this), p(this, js, {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height
    });
    const e = r(this, Ut).children;
    if (!r(this, ts)) {
      p(this, ts, Array.from(e));
      const a = A(this, G, Tu).bind(this), o = A(this, G, ku).bind(this), l = this._uiManager._signal;
      for (const h of r(this, ts)) {
        const c = h.getAttribute("data-resizer-name");
        h.setAttribute("role", "spinbutton"), h.addEventListener("keydown", a, {
          signal: l
        }), h.addEventListener("blur", o, {
          signal: l
        }), h.addEventListener("focus", A(this, G, Pu).bind(this, c), {
          signal: l
        }), h.setAttribute("data-l10n-id", Y._l10nResizer[c]);
      }
    }
    const s = r(this, ts)[0];
    let i = 0;
    for (const a of e) {
      if (a === s)
        break;
      i++;
    }
    const n = (360 - this.rotation + this.parentRotation) % 360 / 90 * (r(this, ts).length / 4);
    if (n !== i) {
      if (n < i)
        for (let o = 0; o < i - n; o++)
          r(this, Ut).append(r(this, Ut).firstChild);
      else if (n > i)
        for (let o = 0; o < n - i; o++)
          r(this, Ut).firstChild.before(r(this, Ut).lastChild);
      let a = 0;
      for (const o of e) {
        const h = r(this, ts)[a++].getAttribute("data-resizer-name");
        o.setAttribute("data-l10n-id", Y._l10nResizer[h]);
      }
    }
    A(this, G, wc).call(this, 0), p(this, Ws, !0), r(this, Ut).firstChild.focus({
      focusVisible: !0
    }), t.preventDefault(), t.stopImmediatePropagation();
  }
  _resizeWithKeyboard(t, e) {
    r(this, Ws) && A(this, G, Ac).call(this, r(this, Co), {
      deltaX: t,
      deltaY: e,
      fromKeyboard: !0
    });
  }
  _stopResizingWithKeyboard() {
    A(this, G, Ba).call(this), this.div.focus();
  }
  select() {
    var t, e, s;
    if (this.makeResizable(), (t = this.div) == null || t.classList.add("selectedEditor"), !this._editToolbar) {
      this.addEditToolbar().then(() => {
        var i, n;
        (i = this.div) != null && i.classList.contains("selectedEditor") && ((n = this._editToolbar) == null || n.show());
      });
      return;
    }
    (e = this._editToolbar) == null || e.show(), (s = r(this, ut)) == null || s.toggleAltTextBadge(!1);
  }
  unselect() {
    var t, e, s, i, n;
    (t = r(this, Ut)) == null || t.classList.add("hidden"), (e = this.div) == null || e.classList.remove("selectedEditor"), (s = this.div) != null && s.contains(document.activeElement) && this._uiManager.currentLayer.div.focus({
      preventScroll: !0
    }), (i = this._editToolbar) == null || i.hide(), (n = r(this, ut)) == null || n.toggleAltTextBadge(!0);
  }
  updateParams(t, e) {
  }
  disableEditing() {
  }
  enableEditing() {
  }
  enterInEditMode() {
  }
  getImageForAltText() {
    return null;
  }
  get contentDiv() {
    return this.div;
  }
  get isEditing() {
    return r(this, xo);
  }
  set isEditing(t) {
    p(this, xo, t), this.parent && (t ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null));
  }
  setAspectRatio(t, e) {
    p(this, An, !0);
    const s = t / e, {
      style: i
    } = this.div;
    i.aspectRatio = s, i.height = "auto";
  }
  static get MIN_SIZE() {
    return 16;
  }
  static canCreateNewEmptyEditor() {
    return !0;
  }
  get telemetryInitialData() {
    return {
      action: "added"
    };
  }
  get telemetryFinalData() {
    return null;
  }
  _reportTelemetry(t, e = !1) {
    if (e) {
      r(this, $e) || p(this, $e, /* @__PURE__ */ new Map());
      const {
        action: s
      } = t;
      let i = r(this, $e).get(s);
      i && clearTimeout(i), i = setTimeout(() => {
        this._reportTelemetry(t), r(this, $e).delete(s), r(this, $e).size === 0 && p(this, $e, null);
      }, Y._telemetryTimeout), r(this, $e).set(s, i);
      return;
    }
    t.type || (t.type = this.editorType), this._uiManager._eventBus.dispatch("reporttelemetry", {
      source: this,
      details: {
        type: "editing",
        data: t
      }
    });
  }
  show(t = this._isVisible) {
    this.div.classList.toggle("hidden", !t), this._isVisible = t;
  }
  enable() {
    this.div && (this.div.tabIndex = 0), p(this, Or, !1);
  }
  disable() {
    this.div && (this.div.tabIndex = -1), p(this, Or, !0);
  }
  renderAnnotationElement(t) {
    let e = t.container.querySelector(".annotationContent");
    if (!e)
      e = document.createElement("div"), e.classList.add("annotationContent", this.editorType), t.container.prepend(e);
    else if (e.nodeName === "CANVAS") {
      const s = e;
      e = document.createElement("div"), e.classList.add("annotationContent", this.editorType), s.before(e);
    }
    return e;
  }
  resetAnnotationElement(t) {
    const {
      firstChild: e
    } = t.container;
    (e == null ? void 0 : e.nodeName) === "DIV" && e.classList.contains("annotationContent") && e.remove();
  }
};
bn = new WeakMap(), ts = new WeakMap(), ut = new WeakMap(), Or = new WeakMap(), ki = new WeakMap(), Eo = new WeakMap(), An = new WeakMap(), Ut = new WeakMap(), yn = new WeakMap(), js = new WeakMap(), Pi = new WeakMap(), Co = new WeakMap(), vn = new WeakMap(), Ee = new WeakMap(), xo = new WeakMap(), wn = new WeakMap(), Ws = new WeakMap(), Es = new WeakMap(), Br = new WeakMap(), Hr = new WeakMap(), $e = new WeakMap(), _n = new WeakMap(), To = new WeakMap(), Eh = new WeakMap(), G = new WeakSet(), gc = function([t, e], s, i) {
  [s, i] = this.screenToPageTranslation(s, i), this.x += s / t, this.y += i / e, this._onTranslating(this.x, this.y), this.fixAndSetPosition();
}, ko = new WeakSet(), mc = function(t, e, s) {
  switch (s) {
    case 90:
      return [e, -t];
    case 180:
      return [-t, -e];
    case 270:
      return [-e, t];
    default:
      return [t, e];
  }
}, Gl = function(t) {
  switch (t) {
    case 90: {
      const [e, s] = this.pageDimensions;
      return [0, -e / s, s / e, 0];
    }
    case 180:
      return [-1, 0, 0, -1];
    case 270: {
      const [e, s] = this.pageDimensions;
      return [0, e / s, -s / e, 0];
    }
    default:
      return [1, 0, 0, 1];
  }
}, wu = function() {
  if (r(this, Ut))
    return;
  p(this, Ut, document.createElement("div")), r(this, Ut).classList.add("resizers");
  const t = this._willKeepAspectRatio ? ["topLeft", "topRight", "bottomRight", "bottomLeft"] : ["topLeft", "topMiddle", "topRight", "middleRight", "bottomRight", "bottomMiddle", "bottomLeft", "middleLeft"], e = this._uiManager._signal;
  for (const s of t) {
    const i = document.createElement("div");
    r(this, Ut).append(i), i.classList.add("resizer", s), i.setAttribute("data-resizer-name", s), i.addEventListener("pointerdown", A(this, G, _u).bind(this, s), {
      signal: e
    }), i.addEventListener("contextmenu", cs, {
      signal: e
    }), i.tabIndex = -1;
  }
  this.div.prepend(r(this, Ut));
}, _u = function(t, e) {
  var c;
  e.preventDefault();
  const {
    isMac: s
  } = ce.platform;
  if (e.button !== 0 || e.ctrlKey && s)
    return;
  (c = r(this, ut)) == null || c.toggle(!1);
  const i = this._isDraggable;
  this._isDraggable = !1, p(this, yn, [e.screenX, e.screenY]);
  const n = new AbortController(), a = this._uiManager.combinedSignal(n);
  this.parent.togglePointerEvents(!1), window.addEventListener("pointermove", A(this, G, Ac).bind(this, t), {
    passive: !0,
    capture: !0,
    signal: a
  }), window.addEventListener("touchmove", Ne, {
    passive: !1,
    signal: a
  }), window.addEventListener("contextmenu", cs, {
    signal: a
  }), p(this, js, {
    savedX: this.x,
    savedY: this.y,
    savedWidth: this.width,
    savedHeight: this.height
  });
  const o = this.parent.div.style.cursor, l = this.div.style.cursor;
  this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(e.target).cursor;
  const h = () => {
    var u;
    n.abort(), this.parent.togglePointerEvents(!0), (u = r(this, ut)) == null || u.toggle(!0), this._isDraggable = i, this.parent.div.style.cursor = o, this.div.style.cursor = l, A(this, G, Ul).call(this);
  };
  window.addEventListener("pointerup", h, {
    signal: a
  }), window.addEventListener("blur", h, {
    signal: a
  });
}, bc = function(t, e, s, i) {
  this.width = s, this.height = i, this.x = t, this.y = e;
  const [n, a] = this.parentDimensions;
  this.setDims(n * s, a * i), this.fixAndSetPosition(), this._onResized();
}, Ul = function() {
  if (!r(this, js))
    return;
  const {
    savedX: t,
    savedY: e,
    savedWidth: s,
    savedHeight: i
  } = r(this, js);
  p(this, js, null);
  const n = this.x, a = this.y, o = this.width, l = this.height;
  n === t && a === e && o === s && l === i || this.addCommands({
    cmd: A(this, G, bc).bind(this, n, a, o, l),
    undo: A(this, G, bc).bind(this, t, e, s, i),
    mustExec: !0
  });
}, Ac = function(t, e) {
  const [s, i] = this.parentDimensions, n = this.x, a = this.y, o = this.width, l = this.height, h = Y.MIN_SIZE / s, c = Y.MIN_SIZE / i, u = A(this, G, Gl).call(this, this.rotation), f = (L, z) => [u[0] * L + u[2] * z, u[1] * L + u[3] * z], g = A(this, G, Gl).call(this, 360 - this.rotation), b = (L, z) => [g[0] * L + g[2] * z, g[1] * L + g[3] * z];
  let y, w, v = !1, S = !1;
  switch (t) {
    case "topLeft":
      v = !0, y = (L, z) => [0, 0], w = (L, z) => [L, z];
      break;
    case "topMiddle":
      y = (L, z) => [L / 2, 0], w = (L, z) => [L / 2, z];
      break;
    case "topRight":
      v = !0, y = (L, z) => [L, 0], w = (L, z) => [0, z];
      break;
    case "middleRight":
      S = !0, y = (L, z) => [L, z / 2], w = (L, z) => [0, z / 2];
      break;
    case "bottomRight":
      v = !0, y = (L, z) => [L, z], w = (L, z) => [0, 0];
      break;
    case "bottomMiddle":
      y = (L, z) => [L / 2, z], w = (L, z) => [L / 2, 0];
      break;
    case "bottomLeft":
      v = !0, y = (L, z) => [0, z], w = (L, z) => [L, 0];
      break;
    case "middleLeft":
      S = !0, y = (L, z) => [0, z / 2], w = (L, z) => [L, z / 2];
      break;
  }
  const E = y(o, l), _ = w(o, l);
  let C = f(..._);
  const x = Y._round(n + C[0]), T = Y._round(a + C[1]);
  let k = 1, M = 1, B, F;
  if (e.fromKeyboard)
    ({
      deltaX: B,
      deltaY: F
    } = e);
  else {
    const {
      screenX: L,
      screenY: z
    } = e, [qt, U] = r(this, yn);
    [B, F] = this.screenToPageTranslation(L - qt, z - U), r(this, yn)[0] = L, r(this, yn)[1] = z;
  }
  if ([B, F] = b(B / s, F / i), v) {
    const L = Math.hypot(o, l);
    k = M = Math.max(Math.min(Math.hypot(_[0] - E[0] - B, _[1] - E[1] - F) / L, 1 / o, 1 / l), h / o, c / l);
  } else S ? k = Math.max(h, Math.min(1, Math.abs(_[0] - E[0] - B))) / o : M = Math.max(c, Math.min(1, Math.abs(_[1] - E[1] - F))) / l;
  const rt = Y._round(o * k), tt = Y._round(l * M);
  C = f(...w(rt, tt));
  const et = x - C[0], Dt = T - C[1];
  r(this, Ee) || p(this, Ee, [this.x, this.y, this.width, this.height]), this.width = rt, this.height = tt, this.x = et, this.y = Dt, this.setDims(s * rt, i * tt), this.fixAndSetPosition(), this._onResizing();
}, Su = function() {
  var t;
  p(this, js, {
    savedX: this.x,
    savedY: this.y,
    savedWidth: this.width,
    savedHeight: this.height
  }), (t = r(this, ut)) == null || t.toggle(!1), this.parent.togglePointerEvents(!1);
}, Eu = function(t, e, s) {
  let n = 0.7 * (s / e) + 1 - 0.7;
  if (n === 1)
    return;
  const a = A(this, G, Gl).call(this, this.rotation), o = (x, T) => [a[0] * x + a[2] * T, a[1] * x + a[3] * T], [l, h] = this.parentDimensions, c = this.x, u = this.y, f = this.width, g = this.height, b = Y.MIN_SIZE / l, y = Y.MIN_SIZE / h;
  n = Math.max(Math.min(n, 1 / f, 1 / g), b / f, y / g);
  const w = Y._round(f * n), v = Y._round(g * n);
  if (w === f && v === g)
    return;
  r(this, Ee) || p(this, Ee, [c, u, f, g]);
  const S = o(f / 2, g / 2), E = Y._round(c + S[0]), _ = Y._round(u + S[1]), C = o(w / 2, v / 2);
  this.x = E - C[0], this.y = _ - C[1], this.width = w, this.height = v, this.setDims(l * w, h * v), this.fixAndSetPosition(), this._onResizing();
}, Cu = function() {
  var t;
  (t = r(this, ut)) == null || t.toggle(!0), this.parent.togglePointerEvents(!0), A(this, G, Ul).call(this);
}, yc = function(t) {
  const {
    isMac: e
  } = ce.platform;
  t.ctrlKey && !e || t.shiftKey || t.metaKey && e ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
}, xu = function(t) {
  const {
    isSelected: e
  } = this;
  this._uiManager.setUpDragSession();
  let s = !1;
  const i = new AbortController(), n = this._uiManager.combinedSignal(i), a = {
    capture: !0,
    passive: !1,
    signal: n
  }, o = (h) => {
    i.abort(), p(this, ki, null), p(this, vn, !1), this._uiManager.endDragSession() || A(this, G, yc).call(this, h), s && this._onStopDragging();
  };
  e && (p(this, Br, t.clientX), p(this, Hr, t.clientY), p(this, ki, t.pointerId), p(this, Eo, t.pointerType), window.addEventListener("pointermove", (h) => {
    s || (s = !0, this._onStartDragging());
    const {
      clientX: c,
      clientY: u,
      pointerId: f
    } = h;
    if (f !== r(this, ki)) {
      Ne(h);
      return;
    }
    const [g, b] = this.screenToPageTranslation(c - r(this, Br), u - r(this, Hr));
    p(this, Br, c), p(this, Hr, u), this._uiManager.dragSelectedEditors(g, b);
  }, a), window.addEventListener("touchmove", Ne, a), window.addEventListener("pointerdown", (h) => {
    h.pointerType === r(this, Eo) && (r(this, _n) || h.isPrimary) && o(h), Ne(h);
  }, a));
  const l = (h) => {
    if (!r(this, ki) || r(this, ki) === h.pointerId) {
      o(h);
      return;
    }
    Ne(h);
  };
  window.addEventListener("pointerup", l, {
    signal: n
  }), window.addEventListener("blur", l, {
    signal: n
  });
}, vc = function() {
  if (r(this, Pi) || !this.div)
    return;
  p(this, Pi, new AbortController());
  const t = this._uiManager.combinedSignal(r(this, Pi));
  this.div.addEventListener("focusin", this.focusin.bind(this), {
    signal: t
  }), this.div.addEventListener("focusout", this.focusout.bind(this), {
    signal: t
  });
}, Tu = function(t) {
  Y._resizerKeyboardManager.exec(this, t);
}, ku = function(t) {
  var e;
  r(this, Ws) && ((e = t.relatedTarget) == null ? void 0 : e.parentNode) !== r(this, Ut) && A(this, G, Ba).call(this);
}, Pu = function(t) {
  p(this, Co, r(this, Ws) ? t : "");
}, wc = function(t) {
  if (r(this, ts))
    for (const e of r(this, ts))
      e.tabIndex = t;
}, Ba = function() {
  p(this, Ws, !1), A(this, G, wc).call(this, -1), A(this, G, Ul).call(this);
}, m(Y, ko), $(Y, "_l10n", null), $(Y, "_l10nResizer", null), $(Y, "_borderLineWidth", -1), $(Y, "_colorManager", new oc()), $(Y, "_zIndex", 1), $(Y, "_telemetryTimeout", 1e3);
let vt = Y;
class Cp extends vt {
  constructor(t) {
    super(t), this.annotationElementId = t.annotationElementId, this.deleted = !0;
  }
  serialize() {
    return this.serializeDeleted();
  }
}
const Nd = 3285377520, Be = 4294901760, fs = 65535;
class Mu {
  constructor(t) {
    this.h1 = t ? t & 4294967295 : Nd, this.h2 = t ? t & 4294967295 : Nd;
  }
  update(t) {
    let e, s;
    if (typeof t == "string") {
      e = new Uint8Array(t.length * 2), s = 0;
      for (let y = 0, w = t.length; y < w; y++) {
        const v = t.charCodeAt(y);
        v <= 255 ? e[s++] = v : (e[s++] = v >>> 8, e[s++] = v & 255);
      }
    } else if (ArrayBuffer.isView(t))
      e = t.slice(), s = e.byteLength;
    else
      throw new Error("Invalid data format, must be a string or TypedArray.");
    const i = s >> 2, n = s - i * 4, a = new Uint32Array(e.buffer, 0, i);
    let o = 0, l = 0, h = this.h1, c = this.h2;
    const u = 3432918353, f = 461845907, g = u & fs, b = f & fs;
    for (let y = 0; y < i; y++)
      y & 1 ? (o = a[y], o = o * u & Be | o * g & fs, o = o << 15 | o >>> 17, o = o * f & Be | o * b & fs, h ^= o, h = h << 13 | h >>> 19, h = h * 5 + 3864292196) : (l = a[y], l = l * u & Be | l * g & fs, l = l << 15 | l >>> 17, l = l * f & Be | l * b & fs, c ^= l, c = c << 13 | c >>> 19, c = c * 5 + 3864292196);
    switch (o = 0, n) {
      case 3:
        o ^= e[i * 4 + 2] << 16;
      case 2:
        o ^= e[i * 4 + 1] << 8;
      case 1:
        o ^= e[i * 4], o = o * u & Be | o * g & fs, o = o << 15 | o >>> 17, o = o * f & Be | o * b & fs, i & 1 ? h ^= o : c ^= o;
    }
    this.h1 = h, this.h2 = c;
  }
  hexdigest() {
    let t = this.h1, e = this.h2;
    return t ^= e >>> 1, t = t * 3981806797 & Be | t * 36045 & fs, e = e * 4283543511 & Be | ((e << 16 | t >>> 16) * 2950163797 & Be) >>> 16, t ^= e >>> 1, t = t * 444984403 & Be | t * 60499 & fs, e = e * 3301882366 & Be | ((e << 16 | t >>> 16) * 3120437893 & Be) >>> 16, t ^= e >>> 1, (t >>> 0).toString(16).padStart(8, "0") + (e >>> 0).toString(16).padStart(8, "0");
  }
}
const _c = Object.freeze({
  map: null,
  hash: "",
  transfer: void 0
});
var Sn, En, Ot, Ch, Ru;
class vd {
  constructor() {
    m(this, Ch);
    m(this, Sn, !1);
    m(this, En, null);
    m(this, Ot, /* @__PURE__ */ new Map());
    this.onSetModified = null, this.onResetModified = null, this.onAnnotationEditor = null;
  }
  getValue(t, e) {
    const s = r(this, Ot).get(t);
    return s === void 0 ? e : Object.assign(e, s);
  }
  getRawValue(t) {
    return r(this, Ot).get(t);
  }
  remove(t) {
    if (r(this, Ot).delete(t), r(this, Ot).size === 0 && this.resetModified(), typeof this.onAnnotationEditor == "function") {
      for (const e of r(this, Ot).values())
        if (e instanceof vt)
          return;
      this.onAnnotationEditor(null);
    }
  }
  setValue(t, e) {
    const s = r(this, Ot).get(t);
    let i = !1;
    if (s !== void 0)
      for (const [n, a] of Object.entries(e))
        s[n] !== a && (i = !0, s[n] = a);
    else
      i = !0, r(this, Ot).set(t, e);
    i && A(this, Ch, Ru).call(this), e instanceof vt && typeof this.onAnnotationEditor == "function" && this.onAnnotationEditor(e.constructor._type);
  }
  has(t) {
    return r(this, Ot).has(t);
  }
  getAll() {
    return r(this, Ot).size > 0 ? pd(r(this, Ot)) : null;
  }
  setAll(t) {
    for (const [e, s] of Object.entries(t))
      this.setValue(e, s);
  }
  get size() {
    return r(this, Ot).size;
  }
  resetModified() {
    r(this, Sn) && (p(this, Sn, !1), typeof this.onResetModified == "function" && this.onResetModified());
  }
  get print() {
    return new Lu(this);
  }
  get serializable() {
    if (r(this, Ot).size === 0)
      return _c;
    const t = /* @__PURE__ */ new Map(), e = new Mu(), s = [], i = /* @__PURE__ */ Object.create(null);
    let n = !1;
    for (const [a, o] of r(this, Ot)) {
      const l = o instanceof vt ? o.serialize(!1, i) : o;
      l && (t.set(a, l), e.update(`${a}:${JSON.stringify(l)}`), n || (n = !!l.bitmap));
    }
    if (n)
      for (const a of t.values())
        a.bitmap && s.push(a.bitmap);
    return t.size > 0 ? {
      map: t,
      hash: e.hexdigest(),
      transfer: s
    } : _c;
  }
  get editorStats() {
    let t = null;
    const e = /* @__PURE__ */ new Map();
    for (const s of r(this, Ot).values()) {
      if (!(s instanceof vt))
        continue;
      const i = s.telemetryFinalData;
      if (!i)
        continue;
      const {
        type: n
      } = i;
      e.has(n) || e.set(n, Object.getPrototypeOf(s).constructor), t || (t = /* @__PURE__ */ Object.create(null));
      const a = t[n] || (t[n] = /* @__PURE__ */ new Map());
      for (const [o, l] of Object.entries(i)) {
        if (o === "type")
          continue;
        let h = a.get(o);
        h || (h = /* @__PURE__ */ new Map(), a.set(o, h));
        const c = h.get(l) ?? 0;
        h.set(l, c + 1);
      }
    }
    for (const [s, i] of e)
      t[s] = i.computeTelemetryFinalData(t[s]);
    return t;
  }
  resetModifiedIds() {
    p(this, En, null);
  }
  get modifiedIds() {
    if (r(this, En))
      return r(this, En);
    const t = [];
    for (const e of r(this, Ot).values())
      !(e instanceof vt) || !e.annotationElementId || !e.serialize() || t.push(e.annotationElementId);
    return p(this, En, {
      ids: new Set(t),
      hash: t.join(",")
    });
  }
}
Sn = new WeakMap(), En = new WeakMap(), Ot = new WeakMap(), Ch = new WeakSet(), Ru = function() {
  r(this, Sn) || (p(this, Sn, !0), typeof this.onSetModified == "function" && this.onSetModified());
};
var Po;
class Lu extends vd {
  constructor(e) {
    super();
    m(this, Po);
    const {
      map: s,
      hash: i,
      transfer: n
    } = e.serializable, a = structuredClone(s, n ? {
      transfer: n
    } : null);
    p(this, Po, {
      map: a,
      hash: i,
      transfer: n
    });
  }
  get print() {
    ct("Should not call PrintAnnotationStorage.print");
  }
  get serializable() {
    return r(this, Po);
  }
  get modifiedIds() {
    return Q(this, "modifiedIds", {
      ids: /* @__PURE__ */ new Set(),
      hash: ""
    });
  }
}
Po = new WeakMap();
var zr;
class xp {
  constructor({
    ownerDocument: t = globalThis.document,
    styleElement: e = null
  }) {
    m(this, zr, /* @__PURE__ */ new Set());
    this._document = t, this.nativeFontFaces = /* @__PURE__ */ new Set(), this.styleElement = null, this.loadingRequests = [], this.loadTestFontId = 0;
  }
  addNativeFontFace(t) {
    this.nativeFontFaces.add(t), this._document.fonts.add(t);
  }
  removeNativeFontFace(t) {
    this.nativeFontFaces.delete(t), this._document.fonts.delete(t);
  }
  insertRule(t) {
    this.styleElement || (this.styleElement = this._document.createElement("style"), this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement));
    const e = this.styleElement.sheet;
    e.insertRule(t, e.cssRules.length);
  }
  clear() {
    for (const t of this.nativeFontFaces)
      this._document.fonts.delete(t);
    this.nativeFontFaces.clear(), r(this, zr).clear(), this.styleElement && (this.styleElement.remove(), this.styleElement = null);
  }
  async loadSystemFont({
    systemFontInfo: t,
    _inspectFont: e
  }) {
    if (!(!t || r(this, zr).has(t.loadedName))) {
      if (Tt(!this.disableFontFace, "loadSystemFont shouldn't be called when `disableFontFace` is set."), this.isFontLoadingAPISupported) {
        const {
          loadedName: s,
          src: i,
          style: n
        } = t, a = new FontFace(s, i, n);
        this.addNativeFontFace(a);
        try {
          await a.load(), r(this, zr).add(s), e == null || e(t);
        } catch {
          q(`Cannot load system font: ${t.baseFontName}, installing it could help to improve PDF rendering.`), this.removeNativeFontFace(a);
        }
        return;
      }
      ct("Not implemented: loadSystemFont without the Font Loading API.");
    }
  }
  async bind(t) {
    if (t.attached || t.missingFile && !t.systemFontInfo)
      return;
    if (t.attached = !0, t.systemFontInfo) {
      await this.loadSystemFont(t);
      return;
    }
    if (this.isFontLoadingAPISupported) {
      const s = t.createNativeFontFace();
      if (s) {
        this.addNativeFontFace(s);
        try {
          await s.loaded;
        } catch (i) {
          throw q(`Failed to load font '${s.family}': '${i}'.`), t.disableFontFace = !0, i;
        }
      }
      return;
    }
    const e = t.createFontFaceRule();
    if (e) {
      if (this.insertRule(e), this.isSyncFontLoadingSupported)
        return;
      await new Promise((s) => {
        const i = this._queueLoadingCallback(s);
        this._prepareFontLoadEvent(t, i);
      });
    }
  }
  get isFontLoadingAPISupported() {
    var e;
    const t = !!((e = this._document) != null && e.fonts);
    return Q(this, "isFontLoadingAPISupported", t);
  }
  get isSyncFontLoadingSupported() {
    let t = !1;
    return (ie || typeof navigator < "u" && typeof (navigator == null ? void 0 : navigator.userAgent) == "string" && /Mozilla\/5.0.*?rv:\d+.*? Gecko/.test(navigator.userAgent)) && (t = !0), Q(this, "isSyncFontLoadingSupported", t);
  }
  _queueLoadingCallback(t) {
    function e() {
      for (Tt(!i.done, "completeRequest() cannot be called twice."), i.done = !0; s.length > 0 && s[0].done; ) {
        const n = s.shift();
        setTimeout(n.callback, 0);
      }
    }
    const {
      loadingRequests: s
    } = this, i = {
      done: !1,
      complete: e,
      callback: t
    };
    return s.push(i), i;
  }
  get _loadTestFont() {
    const t = atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
    return Q(this, "_loadTestFont", t);
  }
  _prepareFontLoadEvent(t, e) {
    function s(_, C) {
      return _.charCodeAt(C) << 24 | _.charCodeAt(C + 1) << 16 | _.charCodeAt(C + 2) << 8 | _.charCodeAt(C + 3) & 255;
    }
    function i(_, C, x, T) {
      const k = _.substring(0, C), M = _.substring(C + x);
      return k + T + M;
    }
    let n, a;
    const o = this._document.createElement("canvas");
    o.width = 1, o.height = 1;
    const l = o.getContext("2d");
    let h = 0;
    function c(_, C) {
      if (++h > 30) {
        q("Load test font never loaded."), C();
        return;
      }
      if (l.font = "30px " + _, l.fillText(".", 0, 20), l.getImageData(0, 0, 1, 1).data[3] > 0) {
        C();
        return;
      }
      setTimeout(c.bind(null, _, C));
    }
    const u = `lt${Date.now()}${this.loadTestFontId++}`;
    let f = this._loadTestFont;
    f = i(f, 976, u.length, u);
    const b = 16, y = 1482184792;
    let w = s(f, b);
    for (n = 0, a = u.length - 3; n < a; n += 4)
      w = w - y + s(u, n) | 0;
    n < u.length && (w = w - y + s(u + "XXX", n) | 0), f = i(f, b, 4, dp(w));
    const v = `url(data:font/opentype;base64,${btoa(f)});`, S = `@font-face {font-family:"${u}";src:${v}}`;
    this.insertRule(S);
    const E = this._document.createElement("div");
    E.style.visibility = "hidden", E.style.width = E.style.height = "10px", E.style.position = "absolute", E.style.top = E.style.left = "0px";
    for (const _ of [t.loadedName, u]) {
      const C = this._document.createElement("span");
      C.textContent = "Hi", C.style.fontFamily = _, E.append(C);
    }
    this._document.body.append(E), c(u, () => {
      E.remove(), e.complete();
    });
  }
}
zr = new WeakMap();
class Tp {
  constructor(t, {
    disableFontFace: e = !1,
    fontExtraProperties: s = !1,
    inspectFont: i = null
  }) {
    this.compiledGlyphs = /* @__PURE__ */ Object.create(null);
    for (const n in t)
      this[n] = t[n];
    this.disableFontFace = e === !0, this.fontExtraProperties = s === !0, this._inspectFont = i;
  }
  createNativeFontFace() {
    var e;
    if (!this.data || this.disableFontFace)
      return null;
    let t;
    if (!this.cssFontInfo)
      t = new FontFace(this.loadedName, this.data, {});
    else {
      const s = {
        weight: this.cssFontInfo.fontWeight
      };
      this.cssFontInfo.italicAngle && (s.style = `oblique ${this.cssFontInfo.italicAngle}deg`), t = new FontFace(this.cssFontInfo.fontFamily, this.data, s);
    }
    return (e = this._inspectFont) == null || e.call(this, this), t;
  }
  createFontFaceRule() {
    var s;
    if (!this.data || this.disableFontFace)
      return null;
    const t = `url(data:${this.mimetype};base64,${bp(this.data)});`;
    let e;
    if (!this.cssFontInfo)
      e = `@font-face {font-family:"${this.loadedName}";src:${t}}`;
    else {
      let i = `font-weight: ${this.cssFontInfo.fontWeight};`;
      this.cssFontInfo.italicAngle && (i += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`), e = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${i}src:${t}}`;
    }
    return (s = this._inspectFont) == null || s.call(this, this, t), e;
  }
  getPathGenerator(t, e) {
    if (this.compiledGlyphs[e] !== void 0)
      return this.compiledGlyphs[e];
    const s = this.loadedName + "_path_" + e;
    let i;
    try {
      i = t.get(s);
    } catch (a) {
      q(`getPathGenerator - ignoring character: "${a}".`);
    }
    const n = new Path2D(i || "");
    return this.fontExtraProperties || t.delete(s), this.compiledGlyphs[e] = n;
  }
}
const Rl = {
  DATA: 1,
  ERROR: 2
}, xt = {
  CANCEL: 1,
  CANCEL_COMPLETE: 2,
  CLOSE: 3,
  ENQUEUE: 4,
  ERROR: 5,
  PULL: 6,
  PULL_COMPLETE: 7,
  START_COMPLETE: 8
};
function Od() {
}
function ge(d) {
  if (d instanceof Yi || d instanceof ec || d instanceof Ja || d instanceof Id || d instanceof dh || d instanceof qh)
    return d;
  switch (d instanceof Error || typeof d == "object" && d !== null || ct('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), d.name) {
    case "AbortException":
      return new Yi(d.message);
    case "InvalidPDFException":
      return new ec(d.message);
    case "MissingPDFException":
      return new Ja(d.message);
    case "PasswordException":
      return new Id(d.message, d.code);
    case "UnexpectedResponseException":
      return new dh(d.message, d.status);
    case "UnknownErrorException":
      return new qh(d.message, d.details);
  }
  return new qh(d.message, d.toString());
}
var $r, qe, Iu, Du, Fu, Vl;
class Ha {
  constructor(t, e, s) {
    m(this, qe);
    m(this, $r, new AbortController());
    this.sourceName = t, this.targetName = e, this.comObj = s, this.callbackId = 1, this.streamId = 1, this.streamSinks = /* @__PURE__ */ Object.create(null), this.streamControllers = /* @__PURE__ */ Object.create(null), this.callbackCapabilities = /* @__PURE__ */ Object.create(null), this.actionHandler = /* @__PURE__ */ Object.create(null), s.addEventListener("message", A(this, qe, Iu).bind(this), {
      signal: r(this, $r).signal
    });
  }
  on(t, e) {
    const s = this.actionHandler;
    if (s[t])
      throw new Error(`There is already an actionName called "${t}"`);
    s[t] = e;
  }
  send(t, e, s) {
    this.comObj.postMessage({
      sourceName: this.sourceName,
      targetName: this.targetName,
      action: t,
      data: e
    }, s);
  }
  sendWithPromise(t, e, s) {
    const i = this.callbackId++, n = Promise.withResolvers();
    this.callbackCapabilities[i] = n;
    try {
      this.comObj.postMessage({
        sourceName: this.sourceName,
        targetName: this.targetName,
        action: t,
        callbackId: i,
        data: e
      }, s);
    } catch (a) {
      n.reject(a);
    }
    return n.promise;
  }
  sendWithStream(t, e, s, i) {
    const n = this.streamId++, a = this.sourceName, o = this.targetName, l = this.comObj;
    return new ReadableStream({
      start: (h) => {
        const c = Promise.withResolvers();
        return this.streamControllers[n] = {
          controller: h,
          startCall: c,
          pullCall: null,
          cancelCall: null,
          isClosed: !1
        }, l.postMessage({
          sourceName: a,
          targetName: o,
          action: t,
          streamId: n,
          data: e,
          desiredSize: h.desiredSize
        }, i), c.promise;
      },
      pull: (h) => {
        const c = Promise.withResolvers();
        return this.streamControllers[n].pullCall = c, l.postMessage({
          sourceName: a,
          targetName: o,
          stream: xt.PULL,
          streamId: n,
          desiredSize: h.desiredSize
        }), c.promise;
      },
      cancel: (h) => {
        Tt(h instanceof Error, "cancel must have a valid reason");
        const c = Promise.withResolvers();
        return this.streamControllers[n].cancelCall = c, this.streamControllers[n].isClosed = !0, l.postMessage({
          sourceName: a,
          targetName: o,
          stream: xt.CANCEL,
          streamId: n,
          reason: ge(h)
        }), c.promise;
      }
    }, s);
  }
  destroy() {
    var t;
    (t = r(this, $r)) == null || t.abort(), p(this, $r, null);
  }
}
$r = new WeakMap(), qe = new WeakSet(), Iu = function({
  data: t
}) {
  if (t.targetName !== this.sourceName)
    return;
  if (t.stream) {
    A(this, qe, Fu).call(this, t);
    return;
  }
  if (t.callback) {
    const s = t.callbackId, i = this.callbackCapabilities[s];
    if (!i)
      throw new Error(`Cannot resolve callback ${s}`);
    if (delete this.callbackCapabilities[s], t.callback === Rl.DATA)
      i.resolve(t.data);
    else if (t.callback === Rl.ERROR)
      i.reject(ge(t.reason));
    else
      throw new Error("Unexpected callback case");
    return;
  }
  const e = this.actionHandler[t.action];
  if (!e)
    throw new Error(`Unknown action from worker: ${t.action}`);
  if (t.callbackId) {
    const s = this.sourceName, i = t.sourceName, n = this.comObj;
    Promise.try(e, t.data).then(function(a) {
      n.postMessage({
        sourceName: s,
        targetName: i,
        callback: Rl.DATA,
        callbackId: t.callbackId,
        data: a
      });
    }, function(a) {
      n.postMessage({
        sourceName: s,
        targetName: i,
        callback: Rl.ERROR,
        callbackId: t.callbackId,
        reason: ge(a)
      });
    });
    return;
  }
  if (t.streamId) {
    A(this, qe, Du).call(this, t);
    return;
  }
  e(t.data);
}, Du = function(t) {
  const e = t.streamId, s = this.sourceName, i = t.sourceName, n = this.comObj, a = this, o = this.actionHandler[t.action], l = {
    enqueue(h, c = 1, u) {
      if (this.isCancelled)
        return;
      const f = this.desiredSize;
      this.desiredSize -= c, f > 0 && this.desiredSize <= 0 && (this.sinkCapability = Promise.withResolvers(), this.ready = this.sinkCapability.promise), n.postMessage({
        sourceName: s,
        targetName: i,
        stream: xt.ENQUEUE,
        streamId: e,
        chunk: h
      }, u);
    },
    close() {
      this.isCancelled || (this.isCancelled = !0, n.postMessage({
        sourceName: s,
        targetName: i,
        stream: xt.CLOSE,
        streamId: e
      }), delete a.streamSinks[e]);
    },
    error(h) {
      Tt(h instanceof Error, "error must have a valid reason"), !this.isCancelled && (this.isCancelled = !0, n.postMessage({
        sourceName: s,
        targetName: i,
        stream: xt.ERROR,
        streamId: e,
        reason: ge(h)
      }));
    },
    sinkCapability: Promise.withResolvers(),
    onPull: null,
    onCancel: null,
    isCancelled: !1,
    desiredSize: t.desiredSize,
    ready: null
  };
  l.sinkCapability.resolve(), l.ready = l.sinkCapability.promise, this.streamSinks[e] = l, Promise.try(o, t.data, l).then(function() {
    n.postMessage({
      sourceName: s,
      targetName: i,
      stream: xt.START_COMPLETE,
      streamId: e,
      success: !0
    });
  }, function(h) {
    n.postMessage({
      sourceName: s,
      targetName: i,
      stream: xt.START_COMPLETE,
      streamId: e,
      reason: ge(h)
    });
  });
}, Fu = function(t) {
  const e = t.streamId, s = this.sourceName, i = t.sourceName, n = this.comObj, a = this.streamControllers[e], o = this.streamSinks[e];
  switch (t.stream) {
    case xt.START_COMPLETE:
      t.success ? a.startCall.resolve() : a.startCall.reject(ge(t.reason));
      break;
    case xt.PULL_COMPLETE:
      t.success ? a.pullCall.resolve() : a.pullCall.reject(ge(t.reason));
      break;
    case xt.PULL:
      if (!o) {
        n.postMessage({
          sourceName: s,
          targetName: i,
          stream: xt.PULL_COMPLETE,
          streamId: e,
          success: !0
        });
        break;
      }
      o.desiredSize <= 0 && t.desiredSize > 0 && o.sinkCapability.resolve(), o.desiredSize = t.desiredSize, Promise.try(o.onPull || Od).then(function() {
        n.postMessage({
          sourceName: s,
          targetName: i,
          stream: xt.PULL_COMPLETE,
          streamId: e,
          success: !0
        });
      }, function(h) {
        n.postMessage({
          sourceName: s,
          targetName: i,
          stream: xt.PULL_COMPLETE,
          streamId: e,
          reason: ge(h)
        });
      });
      break;
    case xt.ENQUEUE:
      if (Tt(a, "enqueue should have stream controller"), a.isClosed)
        break;
      a.controller.enqueue(t.chunk);
      break;
    case xt.CLOSE:
      if (Tt(a, "close should have stream controller"), a.isClosed)
        break;
      a.isClosed = !0, a.controller.close(), A(this, qe, Vl).call(this, a, e);
      break;
    case xt.ERROR:
      Tt(a, "error should have stream controller"), a.controller.error(ge(t.reason)), A(this, qe, Vl).call(this, a, e);
      break;
    case xt.CANCEL_COMPLETE:
      t.success ? a.cancelCall.resolve() : a.cancelCall.reject(ge(t.reason)), A(this, qe, Vl).call(this, a, e);
      break;
    case xt.CANCEL:
      if (!o)
        break;
      const l = ge(t.reason);
      Promise.try(o.onCancel || Od, l).then(function() {
        n.postMessage({
          sourceName: s,
          targetName: i,
          stream: xt.CANCEL_COMPLETE,
          streamId: e,
          success: !0
        });
      }, function(h) {
        n.postMessage({
          sourceName: s,
          targetName: i,
          stream: xt.CANCEL_COMPLETE,
          streamId: e,
          reason: ge(h)
        });
      }), o.sinkCapability.reject(l), o.isCancelled = !0, delete this.streamSinks[e];
      break;
    default:
      throw new Error("Unexpected stream case");
  }
}, Vl = async function(t, e) {
  var s, i, n;
  await Promise.allSettled([(s = t.startCall) == null ? void 0 : s.promise, (i = t.pullCall) == null ? void 0 : i.promise, (n = t.cancelCall) == null ? void 0 : n.promise]), delete this.streamControllers[e];
};
var Mo;
class Nu {
  constructor({
    enableHWA: t = !1
  }) {
    m(this, Mo, !1);
    p(this, Mo, t);
  }
  create(t, e) {
    if (t <= 0 || e <= 0)
      throw new Error("Invalid canvas size");
    const s = this._createCanvas(t, e);
    return {
      canvas: s,
      context: s.getContext("2d", {
        willReadFrequently: !r(this, Mo)
      })
    };
  }
  reset(t, e, s) {
    if (!t.canvas)
      throw new Error("Canvas is not specified");
    if (e <= 0 || s <= 0)
      throw new Error("Invalid canvas size");
    t.canvas.width = e, t.canvas.height = s;
  }
  destroy(t) {
    if (!t.canvas)
      throw new Error("Canvas is not specified");
    t.canvas.width = 0, t.canvas.height = 0, t.canvas = null, t.context = null;
  }
  _createCanvas(t, e) {
    ct("Abstract method `_createCanvas` called.");
  }
}
Mo = new WeakMap();
class kp extends Nu {
  constructor({
    ownerDocument: t = globalThis.document,
    enableHWA: e = !1
  }) {
    super({
      enableHWA: e
    }), this._document = t;
  }
  _createCanvas(t, e) {
    const s = this._document.createElement("canvas");
    return s.width = t, s.height = e, s;
  }
}
class Ou {
  constructor({
    baseUrl: t = null,
    isCompressed: e = !0
  }) {
    this.baseUrl = t, this.isCompressed = e;
  }
  async fetch({
    name: t
  }) {
    if (!this.baseUrl)
      throw new Error("Ensure that the `cMapUrl` and `cMapPacked` API parameters are provided.");
    if (!t)
      throw new Error("CMap name must be specified.");
    const e = this.baseUrl + t + (this.isCompressed ? ".bcmap" : "");
    return this._fetch(e).then((s) => ({
      cMapData: s,
      isCompressed: this.isCompressed
    })).catch((s) => {
      throw new Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${e}`);
    });
  }
  async _fetch(t) {
    ct("Abstract method `_fetch` called.");
  }
}
class Bu extends Ou {
  async _fetch(t) {
    const e = await Gh(t, this.isCompressed ? "arraybuffer" : "text");
    return e instanceof ArrayBuffer ? new Uint8Array(e) : $h(e);
  }
}
class Hu {
  addFilter(t) {
    return "none";
  }
  addHCMFilter(t, e) {
    return "none";
  }
  addAlphaFilter(t) {
    return "none";
  }
  addLuminosityFilter(t) {
    return "none";
  }
  addHighlightHCMFilter(t, e, s, i, n) {
    return "none";
  }
  destroy(t = !1) {
  }
}
var Cn, Gr, Xs, qs, Jt, xn, Tn, R, Kt, za, gr, jl, mr, zu, Sc, br, $a, Ga, Ec, Ua;
class Pp extends Hu {
  constructor({
    docId: e,
    ownerDocument: s = globalThis.document
  }) {
    super();
    m(this, R);
    m(this, Cn);
    m(this, Gr);
    m(this, Xs);
    m(this, qs);
    m(this, Jt);
    m(this, xn);
    m(this, Tn, 0);
    p(this, qs, e), p(this, Jt, s);
  }
  addFilter(e) {
    if (!e)
      return "none";
    let s = r(this, R, Kt).get(e);
    if (s)
      return s;
    const [i, n, a] = A(this, R, jl).call(this, e), o = e.length === 1 ? i : `${i}${n}${a}`;
    if (s = r(this, R, Kt).get(o), s)
      return r(this, R, Kt).set(e, s), s;
    const l = `g_${r(this, qs)}_transfer_map_${ne(this, Tn)._++}`, h = A(this, R, mr).call(this, l);
    r(this, R, Kt).set(e, h), r(this, R, Kt).set(o, h);
    const c = A(this, R, br).call(this, l);
    return A(this, R, Ga).call(this, i, n, a, c), h;
  }
  addHCMFilter(e, s) {
    var b;
    const i = `${e}-${s}`, n = "base";
    let a = r(this, R, za).get(n);
    if ((a == null ? void 0 : a.key) === i || (a ? ((b = a.filter) == null || b.remove(), a.key = i, a.url = "none", a.filter = null) : (a = {
      key: i,
      url: "none",
      filter: null
    }, r(this, R, za).set(n, a)), !e || !s))
      return a.url;
    const o = A(this, R, Ua).call(this, e);
    e = H.makeHexColor(...o);
    const l = A(this, R, Ua).call(this, s);
    if (s = H.makeHexColor(...l), r(this, R, gr).style.color = "", e === "#000000" && s === "#ffffff" || e === s)
      return a.url;
    const h = new Array(256);
    for (let y = 0; y <= 255; y++) {
      const w = y / 255;
      h[y] = w <= 0.03928 ? w / 12.92 : ((w + 0.055) / 1.055) ** 2.4;
    }
    const c = h.join(","), u = `g_${r(this, qs)}_hcm_filter`, f = a.filter = A(this, R, br).call(this, u);
    A(this, R, Ga).call(this, c, c, c, f), A(this, R, Sc).call(this, f);
    const g = (y, w) => {
      const v = o[y] / 255, S = l[y] / 255, E = new Array(w + 1);
      for (let _ = 0; _ <= w; _++)
        E[_] = v + _ / w * (S - v);
      return E.join(",");
    };
    return A(this, R, Ga).call(this, g(0, 5), g(1, 5), g(2, 5), f), a.url = A(this, R, mr).call(this, u), a.url;
  }
  addAlphaFilter(e) {
    let s = r(this, R, Kt).get(e);
    if (s)
      return s;
    const [i] = A(this, R, jl).call(this, [e]), n = `alpha_${i}`;
    if (s = r(this, R, Kt).get(n), s)
      return r(this, R, Kt).set(e, s), s;
    const a = `g_${r(this, qs)}_alpha_map_${ne(this, Tn)._++}`, o = A(this, R, mr).call(this, a);
    r(this, R, Kt).set(e, o), r(this, R, Kt).set(n, o);
    const l = A(this, R, br).call(this, a);
    return A(this, R, Ec).call(this, i, l), o;
  }
  addLuminosityFilter(e) {
    let s = r(this, R, Kt).get(e || "luminosity");
    if (s)
      return s;
    let i, n;
    if (e ? ([i] = A(this, R, jl).call(this, [e]), n = `luminosity_${i}`) : n = "luminosity", s = r(this, R, Kt).get(n), s)
      return r(this, R, Kt).set(e, s), s;
    const a = `g_${r(this, qs)}_luminosity_map_${ne(this, Tn)._++}`, o = A(this, R, mr).call(this, a);
    r(this, R, Kt).set(e, o), r(this, R, Kt).set(n, o);
    const l = A(this, R, br).call(this, a);
    return A(this, R, zu).call(this, l), e && A(this, R, Ec).call(this, i, l), o;
  }
  addHighlightHCMFilter(e, s, i, n, a) {
    var S;
    const o = `${s}-${i}-${n}-${a}`;
    let l = r(this, R, za).get(e);
    if ((l == null ? void 0 : l.key) === o || (l ? ((S = l.filter) == null || S.remove(), l.key = o, l.url = "none", l.filter = null) : (l = {
      key: o,
      url: "none",
      filter: null
    }, r(this, R, za).set(e, l)), !s || !i))
      return l.url;
    const [h, c] = [s, i].map(A(this, R, Ua).bind(this));
    let u = Math.round(0.2126 * h[0] + 0.7152 * h[1] + 0.0722 * h[2]), f = Math.round(0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]), [g, b] = [n, a].map(A(this, R, Ua).bind(this));
    f < u && ([u, f, g, b] = [f, u, b, g]), r(this, R, gr).style.color = "";
    const y = (E, _, C) => {
      const x = new Array(256), T = (f - u) / C, k = E / 255, M = (_ - E) / (255 * C);
      let B = 0;
      for (let F = 0; F <= C; F++) {
        const rt = Math.round(u + F * T), tt = k + F * M;
        for (let et = B; et <= rt; et++)
          x[et] = tt;
        B = rt + 1;
      }
      for (let F = B; F < 256; F++)
        x[F] = x[B - 1];
      return x.join(",");
    }, w = `g_${r(this, qs)}_hcm_${e}_filter`, v = l.filter = A(this, R, br).call(this, w);
    return A(this, R, Sc).call(this, v), A(this, R, Ga).call(this, y(g[0], b[0], 5), y(g[1], b[1], 5), y(g[2], b[2], 5), v), l.url = A(this, R, mr).call(this, w), l.url;
  }
  destroy(e = !1) {
    var s, i, n, a;
    e && ((s = r(this, xn)) != null && s.size) || ((i = r(this, Xs)) == null || i.parentNode.parentNode.remove(), p(this, Xs, null), (n = r(this, Gr)) == null || n.clear(), p(this, Gr, null), (a = r(this, xn)) == null || a.clear(), p(this, xn, null), p(this, Tn, 0));
  }
}
Cn = new WeakMap(), Gr = new WeakMap(), Xs = new WeakMap(), qs = new WeakMap(), Jt = new WeakMap(), xn = new WeakMap(), Tn = new WeakMap(), R = new WeakSet(), Kt = function() {
  return r(this, Gr) || p(this, Gr, /* @__PURE__ */ new Map());
}, za = function() {
  return r(this, xn) || p(this, xn, /* @__PURE__ */ new Map());
}, gr = function() {
  if (!r(this, Xs)) {
    const e = r(this, Jt).createElement("div"), {
      style: s
    } = e;
    s.visibility = "hidden", s.contain = "strict", s.width = s.height = 0, s.position = "absolute", s.top = s.left = 0, s.zIndex = -1;
    const i = r(this, Jt).createElementNS(Fs, "svg");
    i.setAttribute("width", 0), i.setAttribute("height", 0), p(this, Xs, r(this, Jt).createElementNS(Fs, "defs")), e.append(i), i.append(r(this, Xs)), r(this, Jt).body.append(e);
  }
  return r(this, Xs);
}, jl = function(e) {
  if (e.length === 1) {
    const h = e[0], c = new Array(256);
    for (let f = 0; f < 256; f++)
      c[f] = h[f] / 255;
    const u = c.join(",");
    return [u, u, u];
  }
  const [s, i, n] = e, a = new Array(256), o = new Array(256), l = new Array(256);
  for (let h = 0; h < 256; h++)
    a[h] = s[h] / 255, o[h] = i[h] / 255, l[h] = n[h] / 255;
  return [a.join(","), o.join(","), l.join(",")];
}, mr = function(e) {
  if (r(this, Cn) === void 0) {
    p(this, Cn, "");
    const s = r(this, Jt).URL;
    s !== r(this, Jt).baseURI && (Uh(s) ? q('#createUrl: ignore "data:"-URL for performance reasons.') : p(this, Cn, s.split("#", 1)[0]));
  }
  return `url(${r(this, Cn)}#${e})`;
}, zu = function(e) {
  const s = r(this, Jt).createElementNS(Fs, "feColorMatrix");
  s.setAttribute("type", "matrix"), s.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0"), e.append(s);
}, Sc = function(e) {
  const s = r(this, Jt).createElementNS(Fs, "feColorMatrix");
  s.setAttribute("type", "matrix"), s.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"), e.append(s);
}, br = function(e) {
  const s = r(this, Jt).createElementNS(Fs, "filter");
  return s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("id", e), r(this, R, gr).append(s), s;
}, $a = function(e, s, i) {
  const n = r(this, Jt).createElementNS(Fs, s);
  n.setAttribute("type", "discrete"), n.setAttribute("tableValues", i), e.append(n);
}, Ga = function(e, s, i, n) {
  const a = r(this, Jt).createElementNS(Fs, "feComponentTransfer");
  n.append(a), A(this, R, $a).call(this, a, "feFuncR", e), A(this, R, $a).call(this, a, "feFuncG", s), A(this, R, $a).call(this, a, "feFuncB", i);
}, Ec = function(e, s) {
  const i = r(this, Jt).createElementNS(Fs, "feComponentTransfer");
  s.append(i), A(this, R, $a).call(this, i, "feFuncA", e);
}, Ua = function(e) {
  return r(this, R, gr).style.color = e, yd(getComputedStyle(r(this, R, gr)).getPropertyValue("color"));
};
class $u {
  constructor({
    baseUrl: t = null
  }) {
    this.baseUrl = t;
  }
  async fetch({
    filename: t
  }) {
    if (!this.baseUrl)
      throw new Error("Ensure that the `standardFontDataUrl` API parameter is provided.");
    if (!t)
      throw new Error("Font filename must be specified.");
    const e = `${this.baseUrl}${t}`;
    return this._fetch(e).catch((s) => {
      throw new Error(`Unable to load font data at: ${e}`);
    });
  }
  async _fetch(t) {
    ct("Abstract method `_fetch` called.");
  }
}
class Gu extends $u {
  async _fetch(t) {
    const e = await Gh(t, "arraybuffer");
    return new Uint8Array(e);
  }
}
ie && q("Please use the `legacy` build in Node.js environments.");
async function Uu(d) {
  const e = await process.getBuiltinModule("fs").promises.readFile(d);
  return new Uint8Array(e);
}
class Mp extends Hu {
}
class Rp extends Nu {
  _createCanvas(t, e) {
    return process.getBuiltinModule("module").createRequire(import.meta.url)("@napi-rs/canvas").createCanvas(t, e);
  }
}
class Lp extends Ou {
  async _fetch(t) {
    return Uu(t);
  }
}
class Ip extends $u {
  async _fetch(t) {
    return Uu(t);
  }
}
const se = {
  FILL: "Fill",
  STROKE: "Stroke",
  SHADING: "Shading"
};
function Cc(d, t) {
  if (!t)
    return;
  const e = t[2] - t[0], s = t[3] - t[1], i = new Path2D();
  i.rect(t[0], t[1], e, s), d.clip(i);
}
class wd {
  getPattern() {
    ct("Abstract method `getPattern` called.");
  }
}
class Dp extends wd {
  constructor(t) {
    super(), this._type = t[1], this._bbox = t[2], this._colorStops = t[3], this._p0 = t[4], this._p1 = t[5], this._r0 = t[6], this._r1 = t[7], this.matrix = null;
  }
  _createGradient(t) {
    let e;
    this._type === "axial" ? e = t.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]) : this._type === "radial" && (e = t.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1));
    for (const s of this._colorStops)
      e.addColorStop(s[0], s[1]);
    return e;
  }
  getPattern(t, e, s, i) {
    let n;
    if (i === se.STROKE || i === se.FILL) {
      const a = e.current.getClippedPathBoundingBox(i, mt(t)) || [0, 0, 0, 0], o = Math.ceil(a[2] - a[0]) || 1, l = Math.ceil(a[3] - a[1]) || 1, h = e.cachedCanvases.getCanvas("pattern", o, l), c = h.context;
      c.clearRect(0, 0, c.canvas.width, c.canvas.height), c.beginPath(), c.rect(0, 0, c.canvas.width, c.canvas.height), c.translate(-a[0], -a[1]), s = H.transform(s, [1, 0, 0, 1, a[0], a[1]]), c.transform(...e.baseTransform), this.matrix && c.transform(...this.matrix), Cc(c, this._bbox), c.fillStyle = this._createGradient(c), c.fill(), n = t.createPattern(h.canvas, "no-repeat");
      const u = new DOMMatrix(s);
      n.setTransform(u);
    } else
      Cc(t, this._bbox), n = this._createGradient(t);
    return n;
  }
}
function Qh(d, t, e, s, i, n, a, o) {
  const l = t.coords, h = t.colors, c = d.data, u = d.width * 4;
  let f;
  l[e + 1] > l[s + 1] && (f = e, e = s, s = f, f = n, n = a, a = f), l[s + 1] > l[i + 1] && (f = s, s = i, i = f, f = a, a = o, o = f), l[e + 1] > l[s + 1] && (f = e, e = s, s = f, f = n, n = a, a = f);
  const g = (l[e] + t.offsetX) * t.scaleX, b = (l[e + 1] + t.offsetY) * t.scaleY, y = (l[s] + t.offsetX) * t.scaleX, w = (l[s + 1] + t.offsetY) * t.scaleY, v = (l[i] + t.offsetX) * t.scaleX, S = (l[i + 1] + t.offsetY) * t.scaleY;
  if (b >= S)
    return;
  const E = h[n], _ = h[n + 1], C = h[n + 2], x = h[a], T = h[a + 1], k = h[a + 2], M = h[o], B = h[o + 1], F = h[o + 2], rt = Math.round(b), tt = Math.round(S);
  let et, Dt, L, z, qt, U, N, Z;
  for (let ft = rt; ft <= tt; ft++) {
    if (ft < w) {
      const pt = ft < b ? 0 : (b - ft) / (b - w);
      et = g - (g - y) * pt, Dt = E - (E - x) * pt, L = _ - (_ - T) * pt, z = C - (C - k) * pt;
    } else {
      let pt;
      ft > S ? pt = 1 : w === S ? pt = 0 : pt = (w - ft) / (w - S), et = y - (y - v) * pt, Dt = x - (x - M) * pt, L = T - (T - B) * pt, z = k - (k - F) * pt;
    }
    let wt;
    ft < b ? wt = 0 : ft > S ? wt = 1 : wt = (b - ft) / (b - S), qt = g - (g - v) * wt, U = E - (E - M) * wt, N = _ - (_ - B) * wt, Z = C - (C - F) * wt;
    const Ds = Math.round(Math.min(et, qt)), $t = Math.round(Math.max(et, qt));
    let fe = u * ft + Ds * 4;
    for (let pt = Ds; pt <= $t; pt++)
      wt = (et - pt) / (et - qt), wt < 0 ? wt = 0 : wt > 1 && (wt = 1), c[fe++] = Dt - (Dt - U) * wt | 0, c[fe++] = L - (L - N) * wt | 0, c[fe++] = z - (z - Z) * wt | 0, c[fe++] = 255;
  }
}
function Fp(d, t, e) {
  const s = t.coords, i = t.colors;
  let n, a;
  switch (t.type) {
    case "lattice":
      const o = t.verticesPerRow, l = Math.floor(s.length / o) - 1, h = o - 1;
      for (n = 0; n < l; n++) {
        let c = n * o;
        for (let u = 0; u < h; u++, c++)
          Qh(d, e, s[c], s[c + 1], s[c + o], i[c], i[c + 1], i[c + o]), Qh(d, e, s[c + o + 1], s[c + 1], s[c + o], i[c + o + 1], i[c + 1], i[c + o]);
      }
      break;
    case "triangles":
      for (n = 0, a = s.length; n < a; n += 3)
        Qh(d, e, s[n], s[n + 1], s[n + 2], i[n], i[n + 1], i[n + 2]);
      break;
    default:
      throw new Error("illegal figure");
  }
}
class Np extends wd {
  constructor(t) {
    super(), this._coords = t[2], this._colors = t[3], this._figures = t[4], this._bounds = t[5], this._bbox = t[7], this._background = t[8], this.matrix = null;
  }
  _createMeshCanvas(t, e, s) {
    const o = Math.floor(this._bounds[0]), l = Math.floor(this._bounds[1]), h = Math.ceil(this._bounds[2]) - o, c = Math.ceil(this._bounds[3]) - l, u = Math.min(Math.ceil(Math.abs(h * t[0] * 1.1)), 3e3), f = Math.min(Math.ceil(Math.abs(c * t[1] * 1.1)), 3e3), g = h / u, b = c / f, y = {
      coords: this._coords,
      colors: this._colors,
      offsetX: -o,
      offsetY: -l,
      scaleX: 1 / g,
      scaleY: 1 / b
    }, w = u + 2 * 2, v = f + 2 * 2, S = s.getCanvas("mesh", w, v), E = S.context, _ = E.createImageData(u, f);
    if (e) {
      const x = _.data;
      for (let T = 0, k = x.length; T < k; T += 4)
        x[T] = e[0], x[T + 1] = e[1], x[T + 2] = e[2], x[T + 3] = 255;
    }
    for (const x of this._figures)
      Fp(_, x, y);
    return E.putImageData(_, 2, 2), {
      canvas: S.canvas,
      offsetX: o - 2 * g,
      offsetY: l - 2 * b,
      scaleX: g,
      scaleY: b
    };
  }
  getPattern(t, e, s, i) {
    Cc(t, this._bbox);
    let n;
    if (i === se.SHADING)
      n = H.singularValueDecompose2dScale(mt(t));
    else if (n = H.singularValueDecompose2dScale(e.baseTransform), this.matrix) {
      const o = H.singularValueDecompose2dScale(this.matrix);
      n = [n[0] * o[0], n[1] * o[1]];
    }
    const a = this._createMeshCanvas(n, i === se.SHADING ? null : this._background, e.cachedCanvases);
    return i !== se.SHADING && (t.setTransform(...e.baseTransform), this.matrix && t.transform(...this.matrix)), t.translate(a.offsetX, a.offsetY), t.scale(a.scaleX, a.scaleY), t.createPattern(a.canvas, "no-repeat");
  }
}
class Op extends wd {
  getPattern() {
    return "hotpink";
  }
}
function Bp(d) {
  switch (d[0]) {
    case "RadialAxial":
      return new Dp(d);
    case "Mesh":
      return new Np(d);
    case "Dummy":
      return new Op();
  }
  throw new Error(`Unknown IR type: ${d[0]}`);
}
const Bd = {
  COLORED: 1,
  UNCOLORED: 2
}, xh = class xh {
  constructor(t, e, s, i, n) {
    this.operatorList = t[2], this.matrix = t[3], this.bbox = t[4], this.xstep = t[5], this.ystep = t[6], this.paintType = t[7], this.tilingType = t[8], this.color = e, this.ctx = s, this.canvasGraphicsFactory = i, this.baseTransform = n;
  }
  createPatternCanvas(t) {
    const {
      bbox: e,
      operatorList: s,
      paintType: i,
      tilingType: n,
      color: a,
      canvasGraphicsFactory: o
    } = this;
    let {
      xstep: l,
      ystep: h
    } = this;
    l = Math.abs(l), h = Math.abs(h), zh("TilingType: " + n);
    const c = e[0], u = e[1], f = e[2], g = e[3], b = f - c, y = g - u, w = H.singularValueDecompose2dScale(this.matrix), v = H.singularValueDecompose2dScale(this.baseTransform), S = w[0] * v[0], E = w[1] * v[1];
    let _ = b, C = y, x = !1, T = !1;
    const k = Math.ceil(l * S), M = Math.ceil(h * E), B = Math.ceil(b * S), F = Math.ceil(y * E);
    k >= B ? _ = l : x = !0, M >= F ? C = h : T = !0;
    const rt = this.getSizeAndScale(_, this.ctx.canvas.width, S), tt = this.getSizeAndScale(C, this.ctx.canvas.height, E), et = t.cachedCanvases.getCanvas("pattern", rt.size, tt.size), Dt = et.context, L = o.createCanvasGraphics(Dt);
    if (L.groupLevel = t.groupLevel, this.setFillAndStrokeStyleToContext(L, i, a), Dt.translate(-rt.scale * c, -tt.scale * u), L.transform(rt.scale, 0, 0, tt.scale, 0, 0), Dt.save(), this.clipBbox(L, c, u, f, g), L.baseTransform = mt(L.ctx), L.executeOperatorList(s), L.endDrawing(), Dt.restore(), x || T) {
      const z = et.canvas;
      x && (_ = l), T && (C = h);
      const qt = this.getSizeAndScale(_, this.ctx.canvas.width, S), U = this.getSizeAndScale(C, this.ctx.canvas.height, E), N = qt.size, Z = U.size, ft = t.cachedCanvases.getCanvas("pattern-workaround", N, Z), wt = ft.context, Ds = x ? Math.floor(b / l) : 0, $t = T ? Math.floor(y / h) : 0;
      for (let fe = 0; fe <= Ds; fe++)
        for (let pt = 0; pt <= $t; pt++)
          wt.drawImage(z, N * fe, Z * pt, N, Z, 0, 0, N, Z);
      return {
        canvas: ft.canvas,
        scaleX: qt.scale,
        scaleY: U.scale,
        offsetX: c,
        offsetY: u
      };
    }
    return {
      canvas: et.canvas,
      scaleX: rt.scale,
      scaleY: tt.scale,
      offsetX: c,
      offsetY: u
    };
  }
  getSizeAndScale(t, e, s) {
    const i = Math.max(xh.MAX_PATTERN_SIZE, e);
    let n = Math.ceil(t * s);
    return n >= i ? n = i : s = n / t, {
      scale: s,
      size: n
    };
  }
  clipBbox(t, e, s, i, n) {
    const a = i - e, o = n - s;
    t.ctx.rect(e, s, a, o), t.current.updateRectMinMax(mt(t.ctx), [e, s, i, n]), t.clip(), t.endPath();
  }
  setFillAndStrokeStyleToContext(t, e, s) {
    const i = t.ctx, n = t.current;
    switch (e) {
      case Bd.COLORED:
        const a = this.ctx;
        i.fillStyle = a.fillStyle, i.strokeStyle = a.strokeStyle, n.fillColor = a.fillStyle, n.strokeColor = a.strokeStyle;
        break;
      case Bd.UNCOLORED:
        const o = H.makeHexColor(s[0], s[1], s[2]);
        i.fillStyle = o, i.strokeStyle = o, n.fillColor = o, n.strokeColor = o;
        break;
      default:
        throw new cp(`Unsupported paint type: ${e}`);
    }
  }
  getPattern(t, e, s, i) {
    let n = s;
    i !== se.SHADING && (n = H.transform(n, e.baseTransform), this.matrix && (n = H.transform(n, this.matrix)));
    const a = this.createPatternCanvas(e);
    let o = new DOMMatrix(n);
    o = o.translate(a.offsetX, a.offsetY), o = o.scale(1 / a.scaleX, 1 / a.scaleY);
    const l = t.createPattern(a.canvas, "repeat");
    return l.setTransform(o), l;
  }
};
$(xh, "MAX_PATTERN_SIZE", 3e3);
let xc = xh;
function Hp({
  src: d,
  srcPos: t = 0,
  dest: e,
  width: s,
  height: i,
  nonBlackColor: n = 4294967295,
  inverseDecode: a = !1
}) {
  const o = ce.isLittleEndian ? 4278190080 : 255, [l, h] = a ? [n, o] : [o, n], c = s >> 3, u = s & 7, f = d.length;
  e = new Uint32Array(e.buffer);
  let g = 0;
  for (let b = 0; b < i; b++) {
    for (const w = t + c; t < w; t++) {
      const v = t < f ? d[t] : 255;
      e[g++] = v & 128 ? h : l, e[g++] = v & 64 ? h : l, e[g++] = v & 32 ? h : l, e[g++] = v & 16 ? h : l, e[g++] = v & 8 ? h : l, e[g++] = v & 4 ? h : l, e[g++] = v & 2 ? h : l, e[g++] = v & 1 ? h : l;
    }
    if (u === 0)
      continue;
    const y = t < f ? d[t++] : 255;
    for (let w = 0; w < u; w++)
      e[g++] = y & 1 << 7 - w ? h : l;
  }
  return {
    srcPos: t,
    destPos: g
  };
}
const Hd = 16, zd = 100, zp = 15, $d = 10, Gd = 1e3, ve = 16;
function $p(d, t) {
  if (d._removeMirroring)
    throw new Error("Context is already forwarding operations.");
  d.__originalSave = d.save, d.__originalRestore = d.restore, d.__originalRotate = d.rotate, d.__originalScale = d.scale, d.__originalTranslate = d.translate, d.__originalTransform = d.transform, d.__originalSetTransform = d.setTransform, d.__originalResetTransform = d.resetTransform, d.__originalClip = d.clip, d.__originalMoveTo = d.moveTo, d.__originalLineTo = d.lineTo, d.__originalBezierCurveTo = d.bezierCurveTo, d.__originalRect = d.rect, d.__originalClosePath = d.closePath, d.__originalBeginPath = d.beginPath, d._removeMirroring = () => {
    d.save = d.__originalSave, d.restore = d.__originalRestore, d.rotate = d.__originalRotate, d.scale = d.__originalScale, d.translate = d.__originalTranslate, d.transform = d.__originalTransform, d.setTransform = d.__originalSetTransform, d.resetTransform = d.__originalResetTransform, d.clip = d.__originalClip, d.moveTo = d.__originalMoveTo, d.lineTo = d.__originalLineTo, d.bezierCurveTo = d.__originalBezierCurveTo, d.rect = d.__originalRect, d.closePath = d.__originalClosePath, d.beginPath = d.__originalBeginPath, delete d._removeMirroring;
  }, d.save = function() {
    t.save(), this.__originalSave();
  }, d.restore = function() {
    t.restore(), this.__originalRestore();
  }, d.translate = function(s, i) {
    t.translate(s, i), this.__originalTranslate(s, i);
  }, d.scale = function(s, i) {
    t.scale(s, i), this.__originalScale(s, i);
  }, d.transform = function(s, i, n, a, o, l) {
    t.transform(s, i, n, a, o, l), this.__originalTransform(s, i, n, a, o, l);
  }, d.setTransform = function(s, i, n, a, o, l) {
    t.setTransform(s, i, n, a, o, l), this.__originalSetTransform(s, i, n, a, o, l);
  }, d.resetTransform = function() {
    t.resetTransform(), this.__originalResetTransform();
  }, d.rotate = function(s) {
    t.rotate(s), this.__originalRotate(s);
  }, d.clip = function(s) {
    t.clip(s), this.__originalClip(s);
  }, d.moveTo = function(e, s) {
    t.moveTo(e, s), this.__originalMoveTo(e, s);
  }, d.lineTo = function(e, s) {
    t.lineTo(e, s), this.__originalLineTo(e, s);
  }, d.bezierCurveTo = function(e, s, i, n, a, o) {
    t.bezierCurveTo(e, s, i, n, a, o), this.__originalBezierCurveTo(e, s, i, n, a, o);
  }, d.rect = function(e, s, i, n) {
    t.rect(e, s, i, n), this.__originalRect(e, s, i, n);
  }, d.closePath = function() {
    t.closePath(), this.__originalClosePath();
  }, d.beginPath = function() {
    t.beginPath(), this.__originalBeginPath();
  };
}
class Gp {
  constructor(t) {
    this.canvasFactory = t, this.cache = /* @__PURE__ */ Object.create(null);
  }
  getCanvas(t, e, s) {
    let i;
    return this.cache[t] !== void 0 ? (i = this.cache[t], this.canvasFactory.reset(i, e, s)) : (i = this.canvasFactory.create(e, s), this.cache[t] = i), i;
  }
  delete(t) {
    delete this.cache[t];
  }
  clear() {
    for (const t in this.cache) {
      const e = this.cache[t];
      this.canvasFactory.destroy(e), delete this.cache[t];
    }
  }
}
function Ll(d, t, e, s, i, n, a, o, l, h) {
  const [c, u, f, g, b, y] = mt(d);
  if (u === 0 && f === 0) {
    const S = a * c + b, E = Math.round(S), _ = o * g + y, C = Math.round(_), x = (a + l) * c + b, T = Math.abs(Math.round(x) - E) || 1, k = (o + h) * g + y, M = Math.abs(Math.round(k) - C) || 1;
    return d.setTransform(Math.sign(c), 0, 0, Math.sign(g), E, C), d.drawImage(t, e, s, i, n, 0, 0, T, M), d.setTransform(c, u, f, g, b, y), [T, M];
  }
  if (c === 0 && g === 0) {
    const S = o * f + b, E = Math.round(S), _ = a * u + y, C = Math.round(_), x = (o + h) * f + b, T = Math.abs(Math.round(x) - E) || 1, k = (a + l) * u + y, M = Math.abs(Math.round(k) - C) || 1;
    return d.setTransform(0, Math.sign(u), Math.sign(f), 0, E, C), d.drawImage(t, e, s, i, n, 0, 0, M, T), d.setTransform(c, u, f, g, b, y), [M, T];
  }
  d.drawImage(t, e, s, i, n, a, o, l, h);
  const w = Math.hypot(c, u), v = Math.hypot(f, g);
  return [w * l, v * h];
}
function Up(d) {
  const {
    width: t,
    height: e
  } = d;
  if (t > Gd || e > Gd)
    return null;
  const s = 1e3, i = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]), n = t + 1;
  let a = new Uint8Array(n * (e + 1)), o, l, h;
  const c = t + 7 & -8;
  let u = new Uint8Array(c * e), f = 0;
  for (const v of d.data) {
    let S = 128;
    for (; S > 0; )
      u[f++] = v & S ? 0 : 255, S >>= 1;
  }
  let g = 0;
  for (f = 0, u[f] !== 0 && (a[0] = 1, ++g), l = 1; l < t; l++)
    u[f] !== u[f + 1] && (a[l] = u[f] ? 2 : 1, ++g), f++;
  for (u[f] !== 0 && (a[l] = 2, ++g), o = 1; o < e; o++) {
    f = o * c, h = o * n, u[f - c] !== u[f] && (a[h] = u[f] ? 1 : 8, ++g);
    let v = (u[f] ? 4 : 0) + (u[f - c] ? 8 : 0);
    for (l = 1; l < t; l++)
      v = (v >> 2) + (u[f + 1] ? 4 : 0) + (u[f - c + 1] ? 8 : 0), i[v] && (a[h + l] = i[v], ++g), f++;
    if (u[f - c] !== u[f] && (a[h + l] = u[f] ? 2 : 4, ++g), g > s)
      return null;
  }
  for (f = c * (e - 1), h = o * n, u[f] !== 0 && (a[h] = 8, ++g), l = 1; l < t; l++)
    u[f] !== u[f + 1] && (a[h + l] = u[f] ? 4 : 8, ++g), f++;
  if (u[f] !== 0 && (a[h + l] = 4, ++g), g > s)
    return null;
  const b = new Int32Array([0, n, -1, 0, -n, 0, 0, 0, 1]), y = new Path2D();
  for (o = 0; g && o <= e; o++) {
    let v = o * n;
    const S = v + t;
    for (; v < S && !a[v]; )
      v++;
    if (v === S)
      continue;
    y.moveTo(v % n, o);
    const E = v;
    let _ = a[v];
    do {
      const C = b[_];
      do
        v += C;
      while (!a[v]);
      const x = a[v];
      x !== 5 && x !== 10 ? (_ = x, a[v] = 0) : (_ = x & 51 * _ >> 4, a[v] &= _ >> 2 | _ << 2), y.lineTo(v % n, v / n | 0), a[v] || --g;
    } while (E !== v);
    --o;
  }
  return u = null, a = null, function(v) {
    v.save(), v.scale(1 / t, -1 / e), v.translate(0, -e), v.fill(y), v.beginPath(), v.restore();
  };
}
class Ud {
  constructor(t, e) {
    this.alphaIsShape = !1, this.fontSize = 0, this.fontSizeScale = 1, this.textMatrix = Jd, this.textMatrixScale = 1, this.fontMatrix = tc, this.leading = 0, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRenderingMode = Yt.FILL, this.textRise = 0, this.fillColor = "#000000", this.strokeColor = "#000000", this.patternFill = !1, this.patternStroke = !1, this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.activeSMask = null, this.transferMaps = "none", this.startNewPathAndClipBox([0, 0, t, e]);
  }
  clone() {
    const t = Object.create(this);
    return t.clipBox = this.clipBox.slice(), t;
  }
  setCurrentPoint(t, e) {
    this.x = t, this.y = e;
  }
  updatePathMinMax(t, e, s) {
    [e, s] = H.applyTransform([e, s], t), this.minX = Math.min(this.minX, e), this.minY = Math.min(this.minY, s), this.maxX = Math.max(this.maxX, e), this.maxY = Math.max(this.maxY, s);
  }
  updateRectMinMax(t, e) {
    const s = H.applyTransform(e, t), i = H.applyTransform(e.slice(2), t), n = H.applyTransform([e[0], e[3]], t), a = H.applyTransform([e[2], e[1]], t);
    this.minX = Math.min(this.minX, s[0], i[0], n[0], a[0]), this.minY = Math.min(this.minY, s[1], i[1], n[1], a[1]), this.maxX = Math.max(this.maxX, s[0], i[0], n[0], a[0]), this.maxY = Math.max(this.maxY, s[1], i[1], n[1], a[1]);
  }
  updateScalingPathMinMax(t, e) {
    H.scaleMinMax(t, e), this.minX = Math.min(this.minX, e[0]), this.minY = Math.min(this.minY, e[1]), this.maxX = Math.max(this.maxX, e[2]), this.maxY = Math.max(this.maxY, e[3]);
  }
  updateCurvePathMinMax(t, e, s, i, n, a, o, l, h, c) {
    const u = H.bezierBoundingBox(e, s, i, n, a, o, l, h, c);
    c || this.updateRectMinMax(t, u);
  }
  getPathBoundingBox(t = se.FILL, e = null) {
    const s = [this.minX, this.minY, this.maxX, this.maxY];
    if (t === se.STROKE) {
      e || ct("Stroke bounding box must include transform.");
      const i = H.singularValueDecompose2dScale(e), n = i[0] * this.lineWidth / 2, a = i[1] * this.lineWidth / 2;
      s[0] -= n, s[1] -= a, s[2] += n, s[3] += a;
    }
    return s;
  }
  updateClipFromPath() {
    const t = H.intersect(this.clipBox, this.getPathBoundingBox());
    this.startNewPathAndClipBox(t || [0, 0, 0, 0]);
  }
  isEmptyClip() {
    return this.minX === 1 / 0;
  }
  startNewPathAndClipBox(t) {
    this.clipBox = t, this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = 0, this.maxY = 0;
  }
  getClippedPathBoundingBox(t = se.FILL, e = null) {
    return H.intersect(this.clipBox, this.getPathBoundingBox(t, e));
  }
}
function Vd(d, t) {
  if (t instanceof ImageData) {
    d.putImageData(t, 0, 0);
    return;
  }
  const e = t.height, s = t.width, i = e % ve, n = (e - i) / ve, a = i === 0 ? n : n + 1, o = d.createImageData(s, ve);
  let l = 0, h;
  const c = t.data, u = o.data;
  let f, g, b, y;
  if (t.kind === Fl.GRAYSCALE_1BPP) {
    const w = c.byteLength, v = new Uint32Array(u.buffer, 0, u.byteLength >> 2), S = v.length, E = s + 7 >> 3, _ = 4294967295, C = ce.isLittleEndian ? 4278190080 : 255;
    for (f = 0; f < a; f++) {
      for (b = f < n ? ve : i, h = 0, g = 0; g < b; g++) {
        const x = w - l;
        let T = 0;
        const k = x > E ? s : x * 8 - 7, M = k & -8;
        let B = 0, F = 0;
        for (; T < M; T += 8)
          F = c[l++], v[h++] = F & 128 ? _ : C, v[h++] = F & 64 ? _ : C, v[h++] = F & 32 ? _ : C, v[h++] = F & 16 ? _ : C, v[h++] = F & 8 ? _ : C, v[h++] = F & 4 ? _ : C, v[h++] = F & 2 ? _ : C, v[h++] = F & 1 ? _ : C;
        for (; T < k; T++)
          B === 0 && (F = c[l++], B = 128), v[h++] = F & B ? _ : C, B >>= 1;
      }
      for (; h < S; )
        v[h++] = 0;
      d.putImageData(o, 0, f * ve);
    }
  } else if (t.kind === Fl.RGBA_32BPP) {
    for (g = 0, y = s * ve * 4, f = 0; f < n; f++)
      u.set(c.subarray(l, l + y)), l += y, d.putImageData(o, 0, g), g += ve;
    f < a && (y = s * i * 4, u.set(c.subarray(l, l + y)), d.putImageData(o, 0, g));
  } else if (t.kind === Fl.RGB_24BPP)
    for (b = ve, y = s * b, f = 0; f < a; f++) {
      for (f >= n && (b = i, y = s * b), h = 0, g = y; g--; )
        u[h++] = c[l++], u[h++] = c[l++], u[h++] = c[l++], u[h++] = 255;
      d.putImageData(o, 0, f * ve);
    }
  else
    throw new Error(`bad image kind: ${t.kind}`);
}
function jd(d, t) {
  if (t.bitmap) {
    d.drawImage(t.bitmap, 0, 0);
    return;
  }
  const e = t.height, s = t.width, i = e % ve, n = (e - i) / ve, a = i === 0 ? n : n + 1, o = d.createImageData(s, ve);
  let l = 0;
  const h = t.data, c = o.data;
  for (let u = 0; u < a; u++) {
    const f = u < n ? ve : i;
    ({
      srcPos: l
    } = Hp({
      src: h,
      srcPos: l,
      dest: c,
      width: s,
      height: f,
      nonBlackColor: 0
    })), d.putImageData(o, 0, u * ve);
  }
}
function La(d, t) {
  const e = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
  for (const s of e)
    d[s] !== void 0 && (t[s] = d[s]);
  d.setLineDash !== void 0 && (t.setLineDash(d.getLineDash()), t.lineDashOffset = d.lineDashOffset);
}
function Il(d) {
  if (d.strokeStyle = d.fillStyle = "#000000", d.fillRule = "nonzero", d.globalAlpha = 1, d.lineWidth = 1, d.lineCap = "butt", d.lineJoin = "miter", d.miterLimit = 10, d.globalCompositeOperation = "source-over", d.font = "10px sans-serif", d.setLineDash !== void 0 && (d.setLineDash([]), d.lineDashOffset = 0), !ie) {
    const {
      filter: t
    } = d;
    t !== "none" && t !== "" && (d.filter = "none");
  }
}
function Wd(d, t) {
  if (t)
    return !0;
  const e = H.singularValueDecompose2dScale(d);
  e[0] = Math.fround(e[0]), e[1] = Math.fround(e[1]);
  const s = Math.fround((globalThis.devicePixelRatio || 1) * Ki.PDF_TO_CSS_UNITS);
  return e[0] <= s && e[1] <= s;
}
const Vp = ["butt", "round", "square"], jp = ["miter", "round", "bevel"], Wp = {}, Xd = {};
var ds, Tc, kc, Pc;
const Td = class Td {
  constructor(t, e, s, i, n, {
    optionalContentConfig: a,
    markedContentStack: o = null
  }, l, h) {
    m(this, ds);
    this.ctx = t, this.current = new Ud(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = !1, this.res = null, this.xobjs = null, this.commonObjs = e, this.objs = s, this.canvasFactory = i, this.filterFactory = n, this.groupStack = [], this.processingType3 = null, this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.suspendedCtx = null, this.contentVisible = !0, this.markedContentStack = o || [], this.optionalContentConfig = a, this.cachedCanvases = new Gp(this.canvasFactory), this.cachedPatterns = /* @__PURE__ */ new Map(), this.annotationCanvasMap = l, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.pageColors = h, this._cachedScaleForStroking = [-1, 0], this._cachedGetSinglePixelWidth = null, this._cachedBitmapsMap = /* @__PURE__ */ new Map();
  }
  getObject(t, e = null) {
    return typeof t == "string" ? t.startsWith("g_") ? this.commonObjs.get(t) : this.objs.get(t) : e;
  }
  beginDrawing({
    transform: t,
    viewport: e,
    transparency: s = !1,
    background: i = null
  }) {
    const n = this.ctx.canvas.width, a = this.ctx.canvas.height, o = this.ctx.fillStyle;
    if (this.ctx.fillStyle = i || "#ffffff", this.ctx.fillRect(0, 0, n, a), this.ctx.fillStyle = o, s) {
      const l = this.cachedCanvases.getCanvas("transparent", n, a);
      this.compositeCtx = this.ctx, this.transparentCanvas = l.canvas, this.ctx = l.context, this.ctx.save(), this.ctx.transform(...mt(this.compositeCtx));
    }
    this.ctx.save(), Il(this.ctx), t && (this.ctx.transform(...t), this.outputScaleX = t[0], this.outputScaleY = t[0]), this.ctx.transform(...e.transform), this.viewportScale = e.scale, this.baseTransform = mt(this.ctx);
  }
  executeOperatorList(t, e, s, i) {
    const n = t.argsArray, a = t.fnArray;
    let o = e || 0;
    const l = n.length;
    if (l === o)
      return o;
    const h = l - o > $d && typeof s == "function", c = h ? Date.now() + zp : 0;
    let u = 0;
    const f = this.commonObjs, g = this.objs;
    let b;
    for (; ; ) {
      if (i !== void 0 && o === i.nextBreakPoint)
        return i.breakIt(o, s), o;
      if (b = a[o], b !== Ke.dependency)
        this[b].apply(this, n[o]);
      else
        for (const y of n[o]) {
          const w = y.startsWith("g_") ? f : g;
          if (!w.has(y))
            return w.get(y, s), o;
        }
      if (o++, o === l)
        return o;
      if (h && ++u > $d) {
        if (Date.now() > c)
          return s(), o;
        u = 0;
      }
    }
  }
  endDrawing() {
    A(this, ds, Tc).call(this), this.cachedCanvases.clear(), this.cachedPatterns.clear();
    for (const t of this._cachedBitmapsMap.values()) {
      for (const e of t.values())
        typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement && (e.width = e.height = 0);
      t.clear();
    }
    this._cachedBitmapsMap.clear(), A(this, ds, kc).call(this);
  }
  _scaleImage(t, e) {
    const s = t.width ?? t.displayWidth, i = t.height ?? t.displayHeight;
    let n = Math.max(Math.hypot(e[0], e[1]), 1), a = Math.max(Math.hypot(e[2], e[3]), 1), o = s, l = i, h = "prescale1", c, u;
    for (; n > 2 && o > 1 || a > 2 && l > 1; ) {
      let f = o, g = l;
      n > 2 && o > 1 && (f = o >= 16384 ? Math.floor(o / 2) - 1 || 1 : Math.ceil(o / 2), n /= o / f), a > 2 && l > 1 && (g = l >= 16384 ? Math.floor(l / 2) - 1 || 1 : Math.ceil(l) / 2, a /= l / g), c = this.cachedCanvases.getCanvas(h, f, g), u = c.context, u.clearRect(0, 0, f, g), u.drawImage(t, 0, 0, o, l, 0, 0, f, g), t = c.canvas, o = f, l = g, h = h === "prescale1" ? "prescale2" : "prescale1";
    }
    return {
      img: t,
      paintWidth: o,
      paintHeight: l
    };
  }
  _createMaskCanvas(t) {
    const e = this.ctx, {
      width: s,
      height: i
    } = t, n = this.current.fillColor, a = this.current.patternFill, o = mt(e);
    let l, h, c, u;
    if ((t.bitmap || t.data) && t.count > 1) {
      const k = t.bitmap || t.data.buffer;
      h = JSON.stringify(a ? o : [o.slice(0, 4), n]), l = this._cachedBitmapsMap.get(k), l || (l = /* @__PURE__ */ new Map(), this._cachedBitmapsMap.set(k, l));
      const M = l.get(h);
      if (M && !a) {
        const B = Math.round(Math.min(o[0], o[2]) + o[4]), F = Math.round(Math.min(o[1], o[3]) + o[5]);
        return {
          canvas: M,
          offsetX: B,
          offsetY: F
        };
      }
      c = M;
    }
    c || (u = this.cachedCanvases.getCanvas("maskCanvas", s, i), jd(u.context, t));
    let f = H.transform(o, [1 / s, 0, 0, -1 / i, 0, 0]);
    f = H.transform(f, [1, 0, 0, 1, 0, -i]);
    const [g, b, y, w] = H.getAxialAlignedBoundingBox([0, 0, s, i], f), v = Math.round(y - g) || 1, S = Math.round(w - b) || 1, E = this.cachedCanvases.getCanvas("fillCanvas", v, S), _ = E.context, C = g, x = b;
    _.translate(-C, -x), _.transform(...f), c || (c = this._scaleImage(u.canvas, us(_)), c = c.img, l && a && l.set(h, c)), _.imageSmoothingEnabled = Wd(mt(_), t.interpolate), Ll(_, c, 0, 0, c.width, c.height, 0, 0, s, i), _.globalCompositeOperation = "source-in";
    const T = H.transform(us(_), [1, 0, 0, 1, -C, -x]);
    return _.fillStyle = a ? n.getPattern(e, this, T, se.FILL) : n, _.fillRect(0, 0, s, i), l && !a && (this.cachedCanvases.delete("fillCanvas"), l.set(h, E.canvas)), {
      canvas: E.canvas,
      offsetX: Math.round(C),
      offsetY: Math.round(x)
    };
  }
  setLineWidth(t) {
    t !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1), this.current.lineWidth = t, this.ctx.lineWidth = t;
  }
  setLineCap(t) {
    this.ctx.lineCap = Vp[t];
  }
  setLineJoin(t) {
    this.ctx.lineJoin = jp[t];
  }
  setMiterLimit(t) {
    this.ctx.miterLimit = t;
  }
  setDash(t, e) {
    const s = this.ctx;
    s.setLineDash !== void 0 && (s.setLineDash(t), s.lineDashOffset = e);
  }
  setRenderingIntent(t) {
  }
  setFlatness(t) {
  }
  setGState(t) {
    for (const [e, s] of t)
      switch (e) {
        case "LW":
          this.setLineWidth(s);
          break;
        case "LC":
          this.setLineCap(s);
          break;
        case "LJ":
          this.setLineJoin(s);
          break;
        case "ML":
          this.setMiterLimit(s);
          break;
        case "D":
          this.setDash(s[0], s[1]);
          break;
        case "RI":
          this.setRenderingIntent(s);
          break;
        case "FL":
          this.setFlatness(s);
          break;
        case "Font":
          this.setFont(s[0], s[1]);
          break;
        case "CA":
          this.current.strokeAlpha = s;
          break;
        case "ca":
          this.current.fillAlpha = s, this.ctx.globalAlpha = s;
          break;
        case "BM":
          this.ctx.globalCompositeOperation = s;
          break;
        case "SMask":
          this.current.activeSMask = s ? this.tempSMask : null, this.tempSMask = null, this.checkSMaskState();
          break;
        case "TR":
          this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(s);
          break;
      }
  }
  get inSMaskMode() {
    return !!this.suspendedCtx;
  }
  checkSMaskState() {
    const t = this.inSMaskMode;
    this.current.activeSMask && !t ? this.beginSMaskMode() : !this.current.activeSMask && t && this.endSMaskMode();
  }
  beginSMaskMode() {
    if (this.inSMaskMode)
      throw new Error("beginSMaskMode called while already in smask mode");
    const t = this.ctx.canvas.width, e = this.ctx.canvas.height, s = "smaskGroupAt" + this.groupLevel, i = this.cachedCanvases.getCanvas(s, t, e);
    this.suspendedCtx = this.ctx, this.ctx = i.context;
    const n = this.ctx;
    n.setTransform(...mt(this.suspendedCtx)), La(this.suspendedCtx, n), $p(n, this.suspendedCtx), this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
  }
  endSMaskMode() {
    if (!this.inSMaskMode)
      throw new Error("endSMaskMode called while not in smask mode");
    this.ctx._removeMirroring(), La(this.ctx, this.suspendedCtx), this.ctx = this.suspendedCtx, this.suspendedCtx = null;
  }
  compose(t) {
    if (!this.current.activeSMask)
      return;
    t ? (t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.ceil(t[2]), t[3] = Math.ceil(t[3])) : t = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
    const e = this.current.activeSMask, s = this.suspendedCtx;
    this.composeSMask(s, e, this.ctx, t), this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height), this.ctx.restore();
  }
  composeSMask(t, e, s, i) {
    const n = i[0], a = i[1], o = i[2] - n, l = i[3] - a;
    o === 0 || l === 0 || (this.genericComposeSMask(e.context, s, o, l, e.subtype, e.backdrop, e.transferMap, n, a, e.offsetX, e.offsetY), t.save(), t.globalAlpha = 1, t.globalCompositeOperation = "source-over", t.setTransform(1, 0, 0, 1, 0, 0), t.drawImage(s.canvas, 0, 0), t.restore());
  }
  genericComposeSMask(t, e, s, i, n, a, o, l, h, c, u) {
    let f = t.canvas, g = l - c, b = h - u;
    if (a) {
      const w = H.makeHexColor(...a);
      if (g < 0 || b < 0 || g + s > f.width || b + i > f.height) {
        const v = this.cachedCanvases.getCanvas("maskExtension", s, i), S = v.context;
        S.drawImage(f, -g, -b), S.globalCompositeOperation = "destination-atop", S.fillStyle = w, S.fillRect(0, 0, s, i), S.globalCompositeOperation = "source-over", f = v.canvas, g = b = 0;
      } else {
        t.save(), t.globalAlpha = 1, t.setTransform(1, 0, 0, 1, 0, 0);
        const v = new Path2D();
        v.rect(g, b, s, i), t.clip(v), t.globalCompositeOperation = "destination-atop", t.fillStyle = w, t.fillRect(g, b, s, i), t.restore();
      }
    }
    e.save(), e.globalAlpha = 1, e.setTransform(1, 0, 0, 1, 0, 0), n === "Alpha" && o ? e.filter = this.filterFactory.addAlphaFilter(o) : n === "Luminosity" && (e.filter = this.filterFactory.addLuminosityFilter(o));
    const y = new Path2D();
    y.rect(l, h, s, i), e.clip(y), e.globalCompositeOperation = "destination-in", e.drawImage(f, g, b, s, i, l, h, s, i), e.restore();
  }
  save() {
    this.inSMaskMode ? (La(this.ctx, this.suspendedCtx), this.suspendedCtx.save()) : this.ctx.save();
    const t = this.current;
    this.stateStack.push(t), this.current = t.clone();
  }
  restore() {
    this.stateStack.length === 0 && this.inSMaskMode && this.endSMaskMode(), this.stateStack.length !== 0 && (this.current = this.stateStack.pop(), this.inSMaskMode ? (this.suspendedCtx.restore(), La(this.suspendedCtx, this.ctx)) : this.ctx.restore(), this.checkSMaskState(), this.pendingClip = null, this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null);
  }
  transform(t, e, s, i, n, a) {
    this.ctx.transform(t, e, s, i, n, a), this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
  }
  constructPath(t, e, s) {
    const i = this.ctx, n = this.current;
    let a = n.x, o = n.y, l, h;
    const c = mt(i), u = c[0] === 0 && c[3] === 0 || c[1] === 0 && c[2] === 0, f = u ? s.slice(0) : null;
    for (let g = 0, b = 0, y = t.length; g < y; g++)
      switch (t[g] | 0) {
        case Ke.rectangle:
          a = e[b++], o = e[b++];
          const w = e[b++], v = e[b++], S = a + w, E = o + v;
          i.moveTo(a, o), w === 0 || v === 0 ? i.lineTo(S, E) : (i.lineTo(S, o), i.lineTo(S, E), i.lineTo(a, E)), u || n.updateRectMinMax(c, [a, o, S, E]), i.closePath();
          break;
        case Ke.moveTo:
          a = e[b++], o = e[b++], i.moveTo(a, o), u || n.updatePathMinMax(c, a, o);
          break;
        case Ke.lineTo:
          a = e[b++], o = e[b++], i.lineTo(a, o), u || n.updatePathMinMax(c, a, o);
          break;
        case Ke.curveTo:
          l = a, h = o, a = e[b + 4], o = e[b + 5], i.bezierCurveTo(e[b], e[b + 1], e[b + 2], e[b + 3], a, o), n.updateCurvePathMinMax(c, l, h, e[b], e[b + 1], e[b + 2], e[b + 3], a, o, f), b += 6;
          break;
        case Ke.curveTo2:
          l = a, h = o, i.bezierCurveTo(a, o, e[b], e[b + 1], e[b + 2], e[b + 3]), n.updateCurvePathMinMax(c, l, h, a, o, e[b], e[b + 1], e[b + 2], e[b + 3], f), a = e[b + 2], o = e[b + 3], b += 4;
          break;
        case Ke.curveTo3:
          l = a, h = o, a = e[b + 2], o = e[b + 3], i.bezierCurveTo(e[b], e[b + 1], a, o, a, o), n.updateCurvePathMinMax(c, l, h, e[b], e[b + 1], a, o, a, o, f), b += 4;
          break;
        case Ke.closePath:
          i.closePath();
          break;
      }
    u && n.updateScalingPathMinMax(c, f), n.setCurrentPoint(a, o);
  }
  closePath() {
    this.ctx.closePath();
  }
  stroke(t = !0) {
    const e = this.ctx, s = this.current.strokeColor;
    e.globalAlpha = this.current.strokeAlpha, this.contentVisible && (typeof s == "object" && (s != null && s.getPattern) ? (e.save(), e.strokeStyle = s.getPattern(e, this, us(e), se.STROKE), this.rescaleAndStroke(!1), e.restore()) : this.rescaleAndStroke(!0)), t && this.consumePath(this.current.getClippedPathBoundingBox()), e.globalAlpha = this.current.fillAlpha;
  }
  closeStroke() {
    this.closePath(), this.stroke();
  }
  fill(t = !0) {
    const e = this.ctx, s = this.current.fillColor, i = this.current.patternFill;
    let n = !1;
    i && (e.save(), e.fillStyle = s.getPattern(e, this, us(e), se.FILL), n = !0);
    const a = this.current.getClippedPathBoundingBox();
    this.contentVisible && a !== null && (this.pendingEOFill ? (e.fill("evenodd"), this.pendingEOFill = !1) : e.fill()), n && e.restore(), t && this.consumePath(a);
  }
  eoFill() {
    this.pendingEOFill = !0, this.fill();
  }
  fillStroke() {
    this.fill(!1), this.stroke(!1), this.consumePath();
  }
  eoFillStroke() {
    this.pendingEOFill = !0, this.fillStroke();
  }
  closeFillStroke() {
    this.closePath(), this.fillStroke();
  }
  closeEOFillStroke() {
    this.pendingEOFill = !0, this.closePath(), this.fillStroke();
  }
  endPath() {
    this.consumePath();
  }
  clip() {
    this.pendingClip = Wp;
  }
  eoClip() {
    this.pendingClip = Xd;
  }
  beginText() {
    this.current.textMatrix = Jd, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
  }
  endText() {
    const t = this.pendingTextPaths, e = this.ctx;
    if (t === void 0) {
      e.beginPath();
      return;
    }
    const s = new Path2D(), i = e.getTransform().invertSelf();
    for (const {
      transform: n,
      x: a,
      y: o,
      fontSize: l,
      path: h
    } of t)
      s.addPath(h, new DOMMatrix(n).preMultiplySelf(i).translate(a, o).scale(l, -l));
    e.clip(s), e.beginPath(), delete this.pendingTextPaths;
  }
  setCharSpacing(t) {
    this.current.charSpacing = t;
  }
  setWordSpacing(t) {
    this.current.wordSpacing = t;
  }
  setHScale(t) {
    this.current.textHScale = t / 100;
  }
  setLeading(t) {
    this.current.leading = -t;
  }
  setFont(t, e) {
    var c;
    const s = this.commonObjs.get(t), i = this.current;
    if (!s)
      throw new Error(`Can't find font for ${t}`);
    if (i.fontMatrix = s.fontMatrix || tc, (i.fontMatrix[0] === 0 || i.fontMatrix[3] === 0) && q("Invalid font matrix for font " + t), e < 0 ? (e = -e, i.fontDirection = -1) : i.fontDirection = 1, this.current.font = s, this.current.fontSize = e, s.isType3Font)
      return;
    const n = s.loadedName || "sans-serif", a = ((c = s.systemFontInfo) == null ? void 0 : c.css) || `"${n}", ${s.fallbackName}`;
    let o = "normal";
    s.black ? o = "900" : s.bold && (o = "bold");
    const l = s.italic ? "italic" : "normal";
    let h = e;
    e < Hd ? h = Hd : e > zd && (h = zd), this.current.fontSizeScale = e / h, this.ctx.font = `${l} ${o} ${h}px ${a}`;
  }
  setTextRenderingMode(t) {
    this.current.textRenderingMode = t;
  }
  setTextRise(t) {
    this.current.textRise = t;
  }
  moveText(t, e) {
    this.current.x = this.current.lineX += t, this.current.y = this.current.lineY += e;
  }
  setLeadingMoveText(t, e) {
    this.setLeading(-e), this.moveText(t, e);
  }
  setTextMatrix(t, e, s, i, n, a) {
    this.current.textMatrix = [t, e, s, i, n, a], this.current.textMatrixScale = Math.hypot(t, e), this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
  }
  nextLine() {
    this.moveText(0, this.current.leading);
  }
  paintChar(t, e, s, i, n) {
    const a = this.ctx, o = this.current, l = o.font, h = o.textRenderingMode, c = o.fontSize / o.fontSizeScale, u = h & Yt.FILL_STROKE_MASK, f = !!(h & Yt.ADD_TO_PATH_FLAG), g = o.patternFill && !l.missingFile, b = o.patternStroke && !l.missingFile;
    let y;
    if ((l.disableFontFace || f || g || b) && (y = l.getPathGenerator(this.commonObjs, t)), l.disableFontFace || g || b) {
      if (a.save(), a.translate(e, s), a.scale(c, -c), u === Yt.FILL || u === Yt.FILL_STROKE)
        if (i) {
          const w = a.getTransform();
          a.setTransform(...i), a.fill(A(this, ds, Pc).call(this, y, w, i));
        } else
          a.fill(y);
      if (u === Yt.STROKE || u === Yt.FILL_STROKE)
        if (n) {
          const w = a.getTransform();
          a.setTransform(...n), a.stroke(A(this, ds, Pc).call(this, y, w, n));
        } else
          a.lineWidth /= c, a.stroke(y);
      a.restore();
    } else
      (u === Yt.FILL || u === Yt.FILL_STROKE) && a.fillText(t, e, s), (u === Yt.STROKE || u === Yt.FILL_STROKE) && a.strokeText(t, e, s);
    f && (this.pendingTextPaths || (this.pendingTextPaths = [])).push({
      transform: mt(a),
      x: e,
      y: s,
      fontSize: c,
      path: y
    });
  }
  get isFontSubpixelAAEnabled() {
    const {
      context: t
    } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
    t.scale(1.5, 1), t.fillText("I", 0, 10);
    const e = t.getImageData(0, 0, 10, 10).data;
    let s = !1;
    for (let i = 3; i < e.length; i += 4)
      if (e[i] > 0 && e[i] < 255) {
        s = !0;
        break;
      }
    return Q(this, "isFontSubpixelAAEnabled", s);
  }
  showText(t) {
    const e = this.current, s = e.font;
    if (s.isType3Font)
      return this.showType3Text(t);
    const i = e.fontSize;
    if (i === 0)
      return;
    const n = this.ctx, a = e.fontSizeScale, o = e.charSpacing, l = e.wordSpacing, h = e.fontDirection, c = e.textHScale * h, u = t.length, f = s.vertical, g = f ? 1 : -1, b = s.defaultVMetrics, y = i * e.fontMatrix[0], w = e.textRenderingMode === Yt.FILL && !s.disableFontFace && !e.patternFill;
    n.save(), n.transform(...e.textMatrix), n.translate(e.x, e.y + e.textRise), h > 0 ? n.scale(c, -1) : n.scale(c, 1);
    let v, S;
    if (e.patternFill) {
      n.save();
      const T = e.fillColor.getPattern(n, this, us(n), se.FILL);
      v = mt(n), n.restore(), n.fillStyle = T;
    }
    if (e.patternStroke) {
      n.save();
      const T = e.strokeColor.getPattern(n, this, us(n), se.STROKE);
      S = mt(n), n.restore(), n.strokeStyle = T;
    }
    let E = e.lineWidth;
    const _ = e.textMatrixScale;
    if (_ === 0 || E === 0) {
      const T = e.textRenderingMode & Yt.FILL_STROKE_MASK;
      (T === Yt.STROKE || T === Yt.FILL_STROKE) && (E = this.getSinglePixelWidth());
    } else
      E /= _;
    if (a !== 1 && (n.scale(a, a), E /= a), n.lineWidth = E, s.isInvalidPDFjsFont) {
      const T = [];
      let k = 0;
      for (const M of t)
        T.push(M.unicode), k += M.width;
      n.fillText(T.join(""), 0, 0), e.x += k * y * c, n.restore(), this.compose();
      return;
    }
    let C = 0, x;
    for (x = 0; x < u; ++x) {
      const T = t[x];
      if (typeof T == "number") {
        C += g * T * i / 1e3;
        continue;
      }
      let k = !1;
      const M = (T.isSpace ? l : 0) + o, B = T.fontChar, F = T.accent;
      let rt, tt, et = T.width;
      if (f) {
        const L = T.vmetric || b, z = -(T.vmetric ? L[1] : et * 0.5) * y, qt = L[2] * y;
        et = L ? -L[0] : et, rt = z / a, tt = (C + qt) / a;
      } else
        rt = C / a, tt = 0;
      if (s.remeasure && et > 0) {
        const L = n.measureText(B).width * 1e3 / i * a;
        if (et < L && this.isFontSubpixelAAEnabled) {
          const z = et / L;
          k = !0, n.save(), n.scale(z, 1), rt /= z;
        } else et !== L && (rt += (et - L) / 2e3 * i / a);
      }
      if (this.contentVisible && (T.isInFont || s.missingFile)) {
        if (w && !F)
          n.fillText(B, rt, tt);
        else if (this.paintChar(B, rt, tt, v, S), F) {
          const L = rt + i * F.offset.x / a, z = tt - i * F.offset.y / a;
          this.paintChar(F.fontChar, L, z, v, S);
        }
      }
      const Dt = f ? et * y - M * h : et * y + M * h;
      C += Dt, k && n.restore();
    }
    f ? e.y -= C : e.x += C * c, n.restore(), this.compose();
  }
  showType3Text(t) {
    const e = this.ctx, s = this.current, i = s.font, n = s.fontSize, a = s.fontDirection, o = i.vertical ? 1 : -1, l = s.charSpacing, h = s.wordSpacing, c = s.textHScale * a, u = s.fontMatrix || tc, f = t.length, g = s.textRenderingMode === Yt.INVISIBLE;
    let b, y, w, v;
    if (!(g || n === 0)) {
      for (this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null, e.save(), e.transform(...s.textMatrix), e.translate(s.x, s.y), e.scale(c, a), b = 0; b < f; ++b) {
        if (y = t[b], typeof y == "number") {
          v = o * y * n / 1e3, this.ctx.translate(v, 0), s.x += v * c;
          continue;
        }
        const S = (y.isSpace ? h : 0) + l, E = i.charProcOperatorList[y.operatorListId];
        if (!E) {
          q(`Type3 character "${y.operatorListId}" is not available.`);
          continue;
        }
        this.contentVisible && (this.processingType3 = y, this.save(), e.scale(n, n), e.transform(...u), this.executeOperatorList(E), this.restore()), w = H.applyTransform([y.width, 0], u)[0] * n + S, e.translate(w, 0), s.x += w * c;
      }
      e.restore(), this.processingType3 = null;
    }
  }
  setCharWidth(t, e) {
  }
  setCharWidthAndBounds(t, e, s, i, n, a) {
    this.ctx.rect(s, i, n - s, a - i), this.ctx.clip(), this.endPath();
  }
  getColorN_Pattern(t) {
    let e;
    if (t[0] === "TilingPattern") {
      const s = t[1], i = this.baseTransform || mt(this.ctx), n = {
        createCanvasGraphics: (a) => new Td(a, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
          optionalContentConfig: this.optionalContentConfig,
          markedContentStack: this.markedContentStack
        })
      };
      e = new xc(t, s, this.ctx, n, i);
    } else
      e = this._getPattern(t[1], t[2]);
    return e;
  }
  setStrokeColorN() {
    this.current.strokeColor = this.getColorN_Pattern(arguments), this.current.patternStroke = !0;
  }
  setFillColorN() {
    this.current.fillColor = this.getColorN_Pattern(arguments), this.current.patternFill = !0;
  }
  setStrokeRGBColor(t, e, s) {
    this.ctx.strokeStyle = this.current.strokeColor = H.makeHexColor(t, e, s), this.current.patternStroke = !1;
  }
  setStrokeTransparent() {
    this.ctx.strokeStyle = this.current.strokeColor = "transparent", this.current.patternStroke = !1;
  }
  setFillRGBColor(t, e, s) {
    this.ctx.fillStyle = this.current.fillColor = H.makeHexColor(t, e, s), this.current.patternFill = !1;
  }
  setFillTransparent() {
    this.ctx.fillStyle = this.current.fillColor = "transparent", this.current.patternFill = !1;
  }
  _getPattern(t, e = null) {
    let s;
    return this.cachedPatterns.has(t) ? s = this.cachedPatterns.get(t) : (s = Bp(this.getObject(t)), this.cachedPatterns.set(t, s)), e && (s.matrix = e), s;
  }
  shadingFill(t) {
    if (!this.contentVisible)
      return;
    const e = this.ctx;
    this.save();
    const s = this._getPattern(t);
    e.fillStyle = s.getPattern(e, this, us(e), se.SHADING);
    const i = us(e);
    if (i) {
      const {
        width: n,
        height: a
      } = e.canvas, [o, l, h, c] = H.getAxialAlignedBoundingBox([0, 0, n, a], i);
      this.ctx.fillRect(o, l, h - o, c - l);
    } else
      this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
    this.compose(this.current.getClippedPathBoundingBox()), this.restore();
  }
  beginInlineImage() {
    ct("Should not call beginInlineImage");
  }
  beginImageData() {
    ct("Should not call beginImageData");
  }
  paintFormXObjectBegin(t, e) {
    if (this.contentVisible && (this.save(), this.baseTransformStack.push(this.baseTransform), t && this.transform(...t), this.baseTransform = mt(this.ctx), e)) {
      const s = e[2] - e[0], i = e[3] - e[1];
      this.ctx.rect(e[0], e[1], s, i), this.current.updateRectMinMax(mt(this.ctx), e), this.clip(), this.endPath();
    }
  }
  paintFormXObjectEnd() {
    this.contentVisible && (this.restore(), this.baseTransform = this.baseTransformStack.pop());
  }
  beginGroup(t) {
    if (!this.contentVisible)
      return;
    this.save(), this.inSMaskMode && (this.endSMaskMode(), this.current.activeSMask = null);
    const e = this.ctx;
    t.isolated || zh("TODO: Support non-isolated groups."), t.knockout && q("Knockout groups not supported.");
    const s = mt(e);
    if (t.matrix && e.transform(...t.matrix), !t.bbox)
      throw new Error("Bounding box is required.");
    let i = H.getAxialAlignedBoundingBox(t.bbox, mt(e));
    const n = [0, 0, e.canvas.width, e.canvas.height];
    i = H.intersect(i, n) || [0, 0, 0, 0];
    const a = Math.floor(i[0]), o = Math.floor(i[1]), l = Math.max(Math.ceil(i[2]) - a, 1), h = Math.max(Math.ceil(i[3]) - o, 1);
    this.current.startNewPathAndClipBox([0, 0, l, h]);
    let c = "groupAt" + this.groupLevel;
    t.smask && (c += "_smask_" + this.smaskCounter++ % 2);
    const u = this.cachedCanvases.getCanvas(c, l, h), f = u.context;
    f.translate(-a, -o), f.transform(...s), t.smask ? this.smaskStack.push({
      canvas: u.canvas,
      context: f,
      offsetX: a,
      offsetY: o,
      subtype: t.smask.subtype,
      backdrop: t.smask.backdrop,
      transferMap: t.smask.transferMap || null,
      startTransformInverse: null
    }) : (e.setTransform(1, 0, 0, 1, 0, 0), e.translate(a, o), e.save()), La(e, f), this.ctx = f, this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]), this.groupStack.push(e), this.groupLevel++;
  }
  endGroup(t) {
    if (!this.contentVisible)
      return;
    this.groupLevel--;
    const e = this.ctx, s = this.groupStack.pop();
    if (this.ctx = s, this.ctx.imageSmoothingEnabled = !1, t.smask)
      this.tempSMask = this.smaskStack.pop(), this.restore();
    else {
      this.ctx.restore();
      const i = mt(this.ctx);
      this.restore(), this.ctx.save(), this.ctx.setTransform(...i);
      const n = H.getAxialAlignedBoundingBox([0, 0, e.canvas.width, e.canvas.height], i);
      this.ctx.drawImage(e.canvas, 0, 0), this.ctx.restore(), this.compose(n);
    }
  }
  beginAnnotation(t, e, s, i, n) {
    if (A(this, ds, Tc).call(this), Il(this.ctx), this.ctx.save(), this.save(), this.baseTransform && this.ctx.setTransform(...this.baseTransform), e) {
      const a = e[2] - e[0], o = e[3] - e[1];
      if (n && this.annotationCanvasMap) {
        s = s.slice(), s[4] -= e[0], s[5] -= e[1], e = e.slice(), e[0] = e[1] = 0, e[2] = a, e[3] = o;
        const [l, h] = H.singularValueDecompose2dScale(mt(this.ctx)), {
          viewportScale: c
        } = this, u = Math.ceil(a * this.outputScaleX * c), f = Math.ceil(o * this.outputScaleY * c);
        this.annotationCanvas = this.canvasFactory.create(u, f);
        const {
          canvas: g,
          context: b
        } = this.annotationCanvas;
        this.annotationCanvasMap.set(t, g), this.annotationCanvas.savedCtx = this.ctx, this.ctx = b, this.ctx.save(), this.ctx.setTransform(l, 0, 0, -h, 0, o * h), Il(this.ctx);
      } else
        Il(this.ctx), this.endPath(), this.ctx.rect(e[0], e[1], a, o), this.ctx.clip(), this.ctx.beginPath();
    }
    this.current = new Ud(this.ctx.canvas.width, this.ctx.canvas.height), this.transform(...s), this.transform(...i);
  }
  endAnnotation() {
    this.annotationCanvas && (this.ctx.restore(), A(this, ds, kc).call(this), this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas);
  }
  paintImageMaskXObject(t) {
    if (!this.contentVisible)
      return;
    const e = t.count;
    t = this.getObject(t.data, t), t.count = e;
    const s = this.ctx, i = this.processingType3;
    if (i && (i.compiled === void 0 && (i.compiled = Up(t)), i.compiled)) {
      i.compiled(s);
      return;
    }
    const n = this._createMaskCanvas(t), a = n.canvas;
    s.save(), s.setTransform(1, 0, 0, 1, 0, 0), s.drawImage(a, n.offsetX, n.offsetY), s.restore(), this.compose();
  }
  paintImageMaskXObjectRepeat(t, e, s = 0, i = 0, n, a) {
    if (!this.contentVisible)
      return;
    t = this.getObject(t.data, t);
    const o = this.ctx;
    o.save();
    const l = mt(o);
    o.transform(e, s, i, n, 0, 0);
    const h = this._createMaskCanvas(t);
    o.setTransform(1, 0, 0, 1, h.offsetX - l[4], h.offsetY - l[5]);
    for (let c = 0, u = a.length; c < u; c += 2) {
      const f = H.transform(l, [e, s, i, n, a[c], a[c + 1]]), [g, b] = H.applyTransform([0, 0], f);
      o.drawImage(h.canvas, g, b);
    }
    o.restore(), this.compose();
  }
  paintImageMaskXObjectGroup(t) {
    if (!this.contentVisible)
      return;
    const e = this.ctx, s = this.current.fillColor, i = this.current.patternFill;
    for (const n of t) {
      const {
        data: a,
        width: o,
        height: l,
        transform: h
      } = n, c = this.cachedCanvases.getCanvas("maskCanvas", o, l), u = c.context;
      u.save();
      const f = this.getObject(a, n);
      jd(u, f), u.globalCompositeOperation = "source-in", u.fillStyle = i ? s.getPattern(u, this, us(e), se.FILL) : s, u.fillRect(0, 0, o, l), u.restore(), e.save(), e.transform(...h), e.scale(1, -1), Ll(e, c.canvas, 0, 0, o, l, 0, -1, 1, 1), e.restore();
    }
    this.compose();
  }
  paintImageXObject(t) {
    if (!this.contentVisible)
      return;
    const e = this.getObject(t);
    if (!e) {
      q("Dependent image isn't ready yet");
      return;
    }
    this.paintInlineImageXObject(e);
  }
  paintImageXObjectRepeat(t, e, s, i) {
    if (!this.contentVisible)
      return;
    const n = this.getObject(t);
    if (!n) {
      q("Dependent image isn't ready yet");
      return;
    }
    const a = n.width, o = n.height, l = [];
    for (let h = 0, c = i.length; h < c; h += 2)
      l.push({
        transform: [e, 0, 0, s, i[h], i[h + 1]],
        x: 0,
        y: 0,
        w: a,
        h: o
      });
    this.paintInlineImageXObjectGroup(n, l);
  }
  applyTransferMapsToCanvas(t) {
    return this.current.transferMaps !== "none" && (t.filter = this.current.transferMaps, t.drawImage(t.canvas, 0, 0), t.filter = "none"), t.canvas;
  }
  applyTransferMapsToBitmap(t) {
    if (this.current.transferMaps === "none")
      return t.bitmap;
    const {
      bitmap: e,
      width: s,
      height: i
    } = t, n = this.cachedCanvases.getCanvas("inlineImage", s, i), a = n.context;
    return a.filter = this.current.transferMaps, a.drawImage(e, 0, 0), a.filter = "none", n.canvas;
  }
  paintInlineImageXObject(t) {
    if (!this.contentVisible)
      return;
    const e = t.width, s = t.height, i = this.ctx;
    if (this.save(), !ie) {
      const {
        filter: o
      } = i;
      o !== "none" && o !== "" && (i.filter = "none");
    }
    i.scale(1 / e, -1 / s);
    let n;
    if (t.bitmap)
      n = this.applyTransferMapsToBitmap(t);
    else if (typeof HTMLElement == "function" && t instanceof HTMLElement || !t.data)
      n = t;
    else {
      const l = this.cachedCanvases.getCanvas("inlineImage", e, s).context;
      Vd(l, t), n = this.applyTransferMapsToCanvas(l);
    }
    const a = this._scaleImage(n, us(i));
    i.imageSmoothingEnabled = Wd(mt(i), t.interpolate), Ll(i, a.img, 0, 0, a.paintWidth, a.paintHeight, 0, -s, e, s), this.compose(), this.restore();
  }
  paintInlineImageXObjectGroup(t, e) {
    if (!this.contentVisible)
      return;
    const s = this.ctx;
    let i;
    if (t.bitmap)
      i = t.bitmap;
    else {
      const n = t.width, a = t.height, l = this.cachedCanvases.getCanvas("inlineImage", n, a).context;
      Vd(l, t), i = this.applyTransferMapsToCanvas(l);
    }
    for (const n of e)
      s.save(), s.transform(...n.transform), s.scale(1, -1), Ll(s, i, n.x, n.y, n.w, n.h, 0, -1, 1, 1), s.restore();
    this.compose();
  }
  paintSolidColorImageMask() {
    this.contentVisible && (this.ctx.fillRect(0, 0, 1, 1), this.compose());
  }
  markPoint(t) {
  }
  markPointProps(t, e) {
  }
  beginMarkedContent(t) {
    this.markedContentStack.push({
      visible: !0
    });
  }
  beginMarkedContentProps(t, e) {
    t === "OC" ? this.markedContentStack.push({
      visible: this.optionalContentConfig.isVisible(e)
    }) : this.markedContentStack.push({
      visible: !0
    }), this.contentVisible = this.isContentVisible();
  }
  endMarkedContent() {
    this.markedContentStack.pop(), this.contentVisible = this.isContentVisible();
  }
  beginCompat() {
  }
  endCompat() {
  }
  consumePath(t) {
    const e = this.current.isEmptyClip();
    this.pendingClip && this.current.updateClipFromPath(), this.pendingClip || this.compose(t);
    const s = this.ctx;
    this.pendingClip && (e || (this.pendingClip === Xd ? s.clip("evenodd") : s.clip()), this.pendingClip = null), this.current.startNewPathAndClipBox(this.current.clipBox), s.beginPath();
  }
  getSinglePixelWidth() {
    if (!this._cachedGetSinglePixelWidth) {
      const t = mt(this.ctx);
      if (t[1] === 0 && t[2] === 0)
        this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(t[0]), Math.abs(t[3]));
      else {
        const e = Math.abs(t[0] * t[3] - t[2] * t[1]), s = Math.hypot(t[0], t[2]), i = Math.hypot(t[1], t[3]);
        this._cachedGetSinglePixelWidth = Math.max(s, i) / e;
      }
    }
    return this._cachedGetSinglePixelWidth;
  }
  getScaleForStroking() {
    if (this._cachedScaleForStroking[0] === -1) {
      const {
        lineWidth: t
      } = this.current, {
        a: e,
        b: s,
        c: i,
        d: n
      } = this.ctx.getTransform();
      let a, o;
      if (s === 0 && i === 0) {
        const l = Math.abs(e), h = Math.abs(n);
        if (l === h)
          if (t === 0)
            a = o = 1 / l;
          else {
            const c = l * t;
            a = o = c < 1 ? 1 / c : 1;
          }
        else if (t === 0)
          a = 1 / l, o = 1 / h;
        else {
          const c = l * t, u = h * t;
          a = c < 1 ? 1 / c : 1, o = u < 1 ? 1 / u : 1;
        }
      } else {
        const l = Math.abs(e * n - s * i), h = Math.hypot(e, s), c = Math.hypot(i, n);
        if (t === 0)
          a = c / l, o = h / l;
        else {
          const u = t * l;
          a = c > u ? c / u : 1, o = h > u ? h / u : 1;
        }
      }
      this._cachedScaleForStroking[0] = a, this._cachedScaleForStroking[1] = o;
    }
    return this._cachedScaleForStroking;
  }
  rescaleAndStroke(t) {
    const {
      ctx: e
    } = this, {
      lineWidth: s
    } = this.current, [i, n] = this.getScaleForStroking();
    if (e.lineWidth = s || 1, i === 1 && n === 1) {
      e.stroke();
      return;
    }
    const a = e.getLineDash();
    if (t && e.save(), e.scale(i, n), a.length > 0) {
      const o = Math.max(i, n);
      e.setLineDash(a.map((l) => l / o)), e.lineDashOffset /= o;
    }
    e.stroke(), t && e.restore();
  }
  isContentVisible() {
    for (let t = this.markedContentStack.length - 1; t >= 0; t--)
      if (!this.markedContentStack[t].visible)
        return !1;
    return !0;
  }
};
ds = new WeakSet(), Tc = function() {
  for (; this.stateStack.length || this.inSMaskMode; )
    this.restore();
  this.current.activeSMask = null, this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.transparentCanvas = null);
}, kc = function() {
  if (this.pageColors) {
    const t = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
    if (t !== "none") {
      const e = this.ctx.filter;
      this.ctx.filter = t, this.ctx.drawImage(this.ctx.canvas, 0, 0), this.ctx.filter = e;
    }
  }
}, Pc = function(t, e, s) {
  const i = new Path2D();
  return i.addPath(t, new DOMMatrix(s).invertSelf().multiplySelf(e)), i;
};
let Er = Td;
for (const d in Ke)
  Er.prototype[d] !== void 0 && (Er.prototype[Ke[d]] = Er.prototype[d]);
var Ro, Lo;
class di {
  static get workerPort() {
    return r(this, Ro);
  }
  static set workerPort(t) {
    if (!(typeof Worker < "u" && t instanceof Worker) && t !== null)
      throw new Error("Invalid `workerPort` type.");
    p(this, Ro, t);
  }
  static get workerSrc() {
    return r(this, Lo);
  }
  static set workerSrc(t) {
    if (typeof t != "string")
      throw new Error("Invalid `workerSrc` type.");
    p(this, Lo, t);
  }
}
Ro = new WeakMap(), Lo = new WeakMap(), m(di, Ro, null), m(di, Lo, "");
var kn, Io;
class Xp {
  constructor({
    parsedData: t,
    rawData: e
  }) {
    m(this, kn);
    m(this, Io);
    p(this, kn, t), p(this, Io, e);
  }
  getRaw() {
    return r(this, Io);
  }
  get(t) {
    return r(this, kn).get(t) ?? null;
  }
  getAll() {
    return pd(r(this, kn));
  }
  has(t) {
    return r(this, kn).has(t);
  }
}
kn = new WeakMap(), Io = new WeakMap();
const Ar = Symbol("INTERNAL");
var Do, Fo, No, Ur;
class qp {
  constructor(t, {
    name: e,
    intent: s,
    usage: i,
    rbGroups: n
  }) {
    m(this, Do, !1);
    m(this, Fo, !1);
    m(this, No, !1);
    m(this, Ur, !0);
    p(this, Do, !!(t & De.DISPLAY)), p(this, Fo, !!(t & De.PRINT)), this.name = e, this.intent = s, this.usage = i, this.rbGroups = n;
  }
  get visible() {
    if (r(this, No))
      return r(this, Ur);
    if (!r(this, Ur))
      return !1;
    const {
      print: t,
      view: e
    } = this.usage;
    return r(this, Do) ? (e == null ? void 0 : e.viewState) !== "OFF" : r(this, Fo) ? (t == null ? void 0 : t.printState) !== "OFF" : !0;
  }
  _setVisible(t, e, s = !1) {
    t !== Ar && ct("Internal method `_setVisible` called."), p(this, No, s), p(this, Ur, e);
  }
}
Do = new WeakMap(), Fo = new WeakMap(), No = new WeakMap(), Ur = new WeakMap();
var Mi, ot, Vr, jr, Oo, Mc;
class Yp {
  constructor(t, e = De.DISPLAY) {
    m(this, Oo);
    m(this, Mi, null);
    m(this, ot, /* @__PURE__ */ new Map());
    m(this, Vr, null);
    m(this, jr, null);
    if (this.renderingIntent = e, this.name = null, this.creator = null, t !== null) {
      this.name = t.name, this.creator = t.creator, p(this, jr, t.order);
      for (const s of t.groups)
        r(this, ot).set(s.id, new qp(e, s));
      if (t.baseState === "OFF")
        for (const s of r(this, ot).values())
          s._setVisible(Ar, !1);
      for (const s of t.on)
        r(this, ot).get(s)._setVisible(Ar, !0);
      for (const s of t.off)
        r(this, ot).get(s)._setVisible(Ar, !1);
      p(this, Vr, this.getHash());
    }
  }
  isVisible(t) {
    if (r(this, ot).size === 0)
      return !0;
    if (!t)
      return zh("Optional content group not defined."), !0;
    if (t.type === "OCG")
      return r(this, ot).has(t.id) ? r(this, ot).get(t.id).visible : (q(`Optional content group not found: ${t.id}`), !0);
    if (t.type === "OCMD") {
      if (t.expression)
        return A(this, Oo, Mc).call(this, t.expression);
      if (!t.policy || t.policy === "AnyOn") {
        for (const e of t.ids) {
          if (!r(this, ot).has(e))
            return q(`Optional content group not found: ${e}`), !0;
          if (r(this, ot).get(e).visible)
            return !0;
        }
        return !1;
      } else if (t.policy === "AllOn") {
        for (const e of t.ids) {
          if (!r(this, ot).has(e))
            return q(`Optional content group not found: ${e}`), !0;
          if (!r(this, ot).get(e).visible)
            return !1;
        }
        return !0;
      } else if (t.policy === "AnyOff") {
        for (const e of t.ids) {
          if (!r(this, ot).has(e))
            return q(`Optional content group not found: ${e}`), !0;
          if (!r(this, ot).get(e).visible)
            return !0;
        }
        return !1;
      } else if (t.policy === "AllOff") {
        for (const e of t.ids) {
          if (!r(this, ot).has(e))
            return q(`Optional content group not found: ${e}`), !0;
          if (r(this, ot).get(e).visible)
            return !1;
        }
        return !0;
      }
      return q(`Unknown optional content policy ${t.policy}.`), !0;
    }
    return q(`Unknown group type ${t.type}.`), !0;
  }
  setVisibility(t, e = !0, s = !0) {
    var n;
    const i = r(this, ot).get(t);
    if (!i) {
      q(`Optional content group not found: ${t}`);
      return;
    }
    if (s && e && i.rbGroups.length)
      for (const a of i.rbGroups)
        for (const o of a)
          o !== t && ((n = r(this, ot).get(o)) == null || n._setVisible(Ar, !1, !0));
    i._setVisible(Ar, !!e, !0), p(this, Mi, null);
  }
  setOCGState({
    state: t,
    preserveRB: e
  }) {
    let s;
    for (const i of t) {
      switch (i) {
        case "ON":
        case "OFF":
        case "Toggle":
          s = i;
          continue;
      }
      const n = r(this, ot).get(i);
      if (n)
        switch (s) {
          case "ON":
            this.setVisibility(i, !0, e);
            break;
          case "OFF":
            this.setVisibility(i, !1, e);
            break;
          case "Toggle":
            this.setVisibility(i, !n.visible, e);
            break;
        }
    }
    p(this, Mi, null);
  }
  get hasInitialVisibility() {
    return r(this, Vr) === null || this.getHash() === r(this, Vr);
  }
  getOrder() {
    return r(this, ot).size ? r(this, jr) ? r(this, jr).slice() : [...r(this, ot).keys()] : null;
  }
  getGroups() {
    return r(this, ot).size > 0 ? pd(r(this, ot)) : null;
  }
  getGroup(t) {
    return r(this, ot).get(t) || null;
  }
  getHash() {
    if (r(this, Mi) !== null)
      return r(this, Mi);
    const t = new Mu();
    for (const [e, s] of r(this, ot))
      t.update(`${e}:${s.visible}`);
    return p(this, Mi, t.hexdigest());
  }
}
Mi = new WeakMap(), ot = new WeakMap(), Vr = new WeakMap(), jr = new WeakMap(), Oo = new WeakSet(), Mc = function(t) {
  const e = t.length;
  if (e < 2)
    return !0;
  const s = t[0];
  for (let i = 1; i < e; i++) {
    const n = t[i];
    let a;
    if (Array.isArray(n))
      a = A(this, Oo, Mc).call(this, n);
    else if (r(this, ot).has(n))
      a = r(this, ot).get(n).visible;
    else
      return q(`Optional content group not found: ${n}`), !0;
    switch (s) {
      case "And":
        if (!a)
          return !1;
        break;
      case "Or":
        if (a)
          return !0;
        break;
      case "Not":
        return !a;
      default:
        return !0;
    }
  }
  return s === "And";
};
class Kp {
  constructor(t, {
    disableRange: e = !1,
    disableStream: s = !1
  }) {
    Tt(t, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');
    const {
      length: i,
      initialData: n,
      progressiveDone: a,
      contentDispositionFilename: o
    } = t;
    if (this._queuedChunks = [], this._progressiveDone = a, this._contentDispositionFilename = o, (n == null ? void 0 : n.length) > 0) {
      const l = n instanceof Uint8Array && n.byteLength === n.buffer.byteLength ? n.buffer : new Uint8Array(n).buffer;
      this._queuedChunks.push(l);
    }
    this._pdfDataRangeTransport = t, this._isStreamingSupported = !s, this._isRangeSupported = !e, this._contentLength = i, this._fullRequestReader = null, this._rangeReaders = [], t.addRangeListener((l, h) => {
      this._onReceiveData({
        begin: l,
        chunk: h
      });
    }), t.addProgressListener((l, h) => {
      this._onProgress({
        loaded: l,
        total: h
      });
    }), t.addProgressiveReadListener((l) => {
      this._onReceiveData({
        chunk: l
      });
    }), t.addProgressiveDoneListener(() => {
      this._onProgressiveDone();
    }), t.transportReady();
  }
  _onReceiveData({
    begin: t,
    chunk: e
  }) {
    const s = e instanceof Uint8Array && e.byteLength === e.buffer.byteLength ? e.buffer : new Uint8Array(e).buffer;
    if (t === void 0)
      this._fullRequestReader ? this._fullRequestReader._enqueue(s) : this._queuedChunks.push(s);
    else {
      const i = this._rangeReaders.some(function(n) {
        return n._begin !== t ? !1 : (n._enqueue(s), !0);
      });
      Tt(i, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
    }
  }
  get _progressiveDataLength() {
    var t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }
  _onProgress(t) {
    var e, s, i, n;
    t.total === void 0 ? (s = (e = this._rangeReaders[0]) == null ? void 0 : e.onProgress) == null || s.call(e, {
      loaded: t.loaded
    }) : (n = (i = this._fullRequestReader) == null ? void 0 : i.onProgress) == null || n.call(i, {
      loaded: t.loaded,
      total: t.total
    });
  }
  _onProgressiveDone() {
    var t;
    (t = this._fullRequestReader) == null || t.progressiveDone(), this._progressiveDone = !0;
  }
  _removeRangeReader(t) {
    const e = this._rangeReaders.indexOf(t);
    e >= 0 && this._rangeReaders.splice(e, 1);
  }
  getFullReader() {
    Tt(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
    const t = this._queuedChunks;
    return this._queuedChunks = null, new Qp(this, t, this._progressiveDone, this._contentDispositionFilename);
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const s = new Zp(this, t, e);
    return this._pdfDataRangeTransport.requestDataRange(t, e), this._rangeReaders.push(s), s;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const s of this._rangeReaders.slice(0))
      s.cancel(t);
    this._pdfDataRangeTransport.abort();
  }
}
class Qp {
  constructor(t, e, s = !1, i = null) {
    this._stream = t, this._done = s || !1, this._filename = bd(i) ? i : null, this._queuedChunks = e || [], this._loaded = 0;
    for (const n of this._queuedChunks)
      this._loaded += n.byteLength;
    this._requests = [], this._headersReady = Promise.resolve(), t._fullRequestReader = this, this.onProgress = null;
  }
  _enqueue(t) {
    this._done || (this._requests.length > 0 ? this._requests.shift().resolve({
      value: t,
      done: !1
    }) : this._queuedChunks.push(t), this._loaded += t.byteLength);
  }
  get headersReady() {
    return this._headersReady;
  }
  get filename() {
    return this._filename;
  }
  get isRangeSupported() {
    return this._stream._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._stream._isStreamingSupported;
  }
  get contentLength() {
    return this._stream._contentLength;
  }
  async read() {
    if (this._queuedChunks.length > 0)
      return {
        value: this._queuedChunks.shift(),
        done: !1
      };
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0;
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0;
  }
  progressiveDone() {
    this._done || (this._done = !0);
  }
}
class Zp {
  constructor(t, e, s) {
    this._stream = t, this._begin = e, this._end = s, this._queuedChunk = null, this._requests = [], this._done = !1, this.onProgress = null;
  }
  _enqueue(t) {
    if (!this._done) {
      if (this._requests.length === 0)
        this._queuedChunk = t;
      else {
        this._requests.shift().resolve({
          value: t,
          done: !1
        });
        for (const s of this._requests)
          s.resolve({
            value: void 0,
            done: !0
          });
        this._requests.length = 0;
      }
      this._done = !0, this._stream._removeRangeReader(this);
    }
  }
  get isStreamingSupported() {
    return !1;
  }
  async read() {
    if (this._queuedChunk) {
      const e = this._queuedChunk;
      return this._queuedChunk = null, {
        value: e,
        done: !1
      };
    }
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0;
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._stream._removeRangeReader(this);
  }
}
function Jp(d) {
  let t = !0, e = s("filename\\*", "i").exec(d);
  if (e) {
    e = e[1];
    let c = o(e);
    return c = unescape(c), c = l(c), c = h(c), n(c);
  }
  if (e = a(d), e) {
    const c = h(e);
    return n(c);
  }
  if (e = s("filename", "i").exec(d), e) {
    e = e[1];
    let c = o(e);
    return c = h(c), n(c);
  }
  function s(c, u) {
    return new RegExp("(?:^|;)\\s*" + c + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', u);
  }
  function i(c, u) {
    if (c) {
      if (!/^[\x00-\xFF]+$/.test(u))
        return u;
      try {
        const f = new TextDecoder(c, {
          fatal: !0
        }), g = $h(u);
        u = f.decode(g), t = !1;
      } catch {
      }
    }
    return u;
  }
  function n(c) {
    return t && /[\x80-\xff]/.test(c) && (c = i("utf-8", c), t && (c = i("iso-8859-1", c))), c;
  }
  function a(c) {
    const u = [];
    let f;
    const g = s("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
    for (; (f = g.exec(c)) !== null; ) {
      let [, y, w, v] = f;
      if (y = parseInt(y, 10), y in u) {
        if (y === 0)
          break;
        continue;
      }
      u[y] = [w, v];
    }
    const b = [];
    for (let y = 0; y < u.length && y in u; ++y) {
      let [w, v] = u[y];
      v = o(v), w && (v = unescape(v), y === 0 && (v = l(v))), b.push(v);
    }
    return b.join("");
  }
  function o(c) {
    if (c.startsWith('"')) {
      const u = c.slice(1).split('\\"');
      for (let f = 0; f < u.length; ++f) {
        const g = u[f].indexOf('"');
        g !== -1 && (u[f] = u[f].slice(0, g), u.length = f + 1), u[f] = u[f].replaceAll(/\\(.)/g, "$1");
      }
      c = u.join('"');
    }
    return c;
  }
  function l(c) {
    const u = c.indexOf("'");
    if (u === -1)
      return c;
    const f = c.slice(0, u), b = c.slice(u + 1).replace(/^[^']*'/, "");
    return i(f, b);
  }
  function h(c) {
    return !c.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(c) ? c : c.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(u, f, g, b) {
      if (g === "q" || g === "Q")
        return b = b.replaceAll("_", " "), b = b.replaceAll(/=([0-9a-fA-F]{2})/g, function(y, w) {
          return String.fromCharCode(parseInt(w, 16));
        }), i(f, b);
      try {
        b = atob(b);
      } catch {
      }
      return i(f, b);
    });
  }
  return "";
}
function Vu(d, t) {
  const e = new Headers();
  if (!d || !t || typeof t != "object")
    return e;
  for (const s in t) {
    const i = t[s];
    i !== void 0 && e.append(s, i);
  }
  return e;
}
function Vh(d) {
  try {
    return new URL(d).origin;
  } catch {
  }
  return null;
}
function ju({
  responseHeaders: d,
  isHttp: t,
  rangeChunkSize: e,
  disableRange: s
}) {
  const i = {
    allowRangeRequests: !1,
    suggestedLength: void 0
  }, n = parseInt(d.get("Content-Length"), 10);
  return !Number.isInteger(n) || (i.suggestedLength = n, n <= 2 * e) || s || !t || d.get("Accept-Ranges") !== "bytes" || (d.get("Content-Encoding") || "identity") !== "identity" || (i.allowRangeRequests = !0), i;
}
function Wu(d) {
  const t = d.get("Content-Disposition");
  if (t) {
    let e = Jp(t);
    if (e.includes("%"))
      try {
        e = decodeURIComponent(e);
      } catch {
      }
    if (bd(e))
      return e;
  }
  return null;
}
function jh(d, t) {
  return d === 404 || d === 0 && t.startsWith("file:") ? new Ja('Missing PDF "' + t + '".') : new dh(`Unexpected server response (${d}) while retrieving PDF "${t}".`, d);
}
function Xu(d) {
  return d === 200 || d === 206;
}
function qu(d, t, e) {
  return {
    method: "GET",
    headers: d,
    signal: e.signal,
    mode: "cors",
    credentials: t ? "include" : "same-origin",
    redirect: "follow"
  };
}
function Yu(d) {
  return d instanceof Uint8Array ? d.buffer : d instanceof ArrayBuffer ? d : (q(`getArrayBuffer - unexpected data format: ${d}`), new Uint8Array(d).buffer);
}
class qd {
  constructor(t) {
    $(this, "_responseOrigin", null);
    this.source = t, this.isHttp = /^https?:/i.test(t.url), this.headers = Vu(this.isHttp, t.httpHeaders), this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    var t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }
  getFullReader() {
    return Tt(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once."), this._fullRequestReader = new tg(this), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const s = new eg(this, t, e);
    return this._rangeRequestReaders.push(s), s;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const s of this._rangeRequestReaders.slice(0))
      s.cancel(t);
  }
}
class tg {
  constructor(t) {
    this._stream = t, this._reader = null, this._loaded = 0, this._filename = null;
    const e = t.source;
    this._withCredentials = e.withCredentials || !1, this._contentLength = e.length, this._headersCapability = Promise.withResolvers(), this._disableRange = e.disableRange || !1, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._abortController = new AbortController(), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange;
    const s = new Headers(t.headers), i = e.url;
    fetch(i, qu(s, this._withCredentials, this._abortController)).then((n) => {
      if (t._responseOrigin = Vh(n.url), !Xu(n.status))
        throw jh(n.status, i);
      this._reader = n.body.getReader(), this._headersCapability.resolve();
      const a = n.headers, {
        allowRangeRequests: o,
        suggestedLength: l
      } = ju({
        responseHeaders: a,
        isHttp: t.isHttp,
        rangeChunkSize: this._rangeChunkSize,
        disableRange: this._disableRange
      });
      this._isRangeSupported = o, this._contentLength = l || this._contentLength, this._filename = Wu(a), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new Yi("Streaming is disabled."));
    }).catch(this._headersCapability.reject), this.onProgress = null;
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  get filename() {
    return this._filename;
  }
  get contentLength() {
    return this._contentLength;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var s;
    await this._headersCapability.promise;
    const {
      value: t,
      done: e
    } = await this._reader.read();
    return e ? {
      value: t,
      done: e
    } : (this._loaded += t.byteLength, (s = this.onProgress) == null || s.call(this, {
      loaded: this._loaded,
      total: this._contentLength
    }), {
      value: Yu(t),
      done: !1
    });
  }
  cancel(t) {
    var e;
    (e = this._reader) == null || e.cancel(t), this._abortController.abort();
  }
}
class eg {
  constructor(t, e, s) {
    this._stream = t, this._reader = null, this._loaded = 0;
    const i = t.source;
    this._withCredentials = i.withCredentials || !1, this._readCapability = Promise.withResolvers(), this._isStreamingSupported = !i.disableStream, this._abortController = new AbortController();
    const n = new Headers(t.headers);
    n.append("Range", `bytes=${e}-${s - 1}`);
    const a = i.url;
    fetch(a, qu(n, this._withCredentials, this._abortController)).then((o) => {
      const l = Vh(o.url);
      if (l !== t._responseOrigin)
        throw new Error(`Expected range response-origin "${l}" to match "${t._responseOrigin}".`);
      if (!Xu(o.status))
        throw jh(o.status, a);
      this._readCapability.resolve(), this._reader = o.body.getReader();
    }).catch(this._readCapability.reject), this.onProgress = null;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var s;
    await this._readCapability.promise;
    const {
      value: t,
      done: e
    } = await this._reader.read();
    return e ? {
      value: t,
      done: e
    } : (this._loaded += t.byteLength, (s = this.onProgress) == null || s.call(this, {
      loaded: this._loaded
    }), {
      value: Yu(t),
      done: !1
    });
  }
  cancel(t) {
    var e;
    (e = this._reader) == null || e.cancel(t), this._abortController.abort();
  }
}
const Zh = 200, Jh = 206;
function sg(d) {
  const t = d.response;
  return typeof t != "string" ? t : $h(t).buffer;
}
class ig {
  constructor({
    url: t,
    httpHeaders: e,
    withCredentials: s
  }) {
    $(this, "_responseOrigin", null);
    this.url = t, this.isHttp = /^https?:/i.test(t), this.headers = Vu(this.isHttp, e), this.withCredentials = s || !1, this.currXhrId = 0, this.pendingRequests = /* @__PURE__ */ Object.create(null);
  }
  request(t) {
    const e = new XMLHttpRequest(), s = this.currXhrId++, i = this.pendingRequests[s] = {
      xhr: e
    };
    e.open("GET", this.url), e.withCredentials = this.withCredentials;
    for (const [n, a] of this.headers)
      e.setRequestHeader(n, a);
    return this.isHttp && "begin" in t && "end" in t ? (e.setRequestHeader("Range", `bytes=${t.begin}-${t.end - 1}`), i.expectedStatus = Jh) : i.expectedStatus = Zh, e.responseType = "arraybuffer", Tt(t.onError, "Expected `onError` callback to be provided."), e.onerror = () => {
      t.onError(e.status);
    }, e.onreadystatechange = this.onStateChange.bind(this, s), e.onprogress = this.onProgress.bind(this, s), i.onHeadersReceived = t.onHeadersReceived, i.onDone = t.onDone, i.onError = t.onError, i.onProgress = t.onProgress, e.send(null), s;
  }
  onProgress(t, e) {
    var i;
    const s = this.pendingRequests[t];
    s && ((i = s.onProgress) == null || i.call(s, e));
  }
  onStateChange(t, e) {
    const s = this.pendingRequests[t];
    if (!s)
      return;
    const i = s.xhr;
    if (i.readyState >= 2 && s.onHeadersReceived && (s.onHeadersReceived(), delete s.onHeadersReceived), i.readyState !== 4 || !(t in this.pendingRequests))
      return;
    if (delete this.pendingRequests[t], i.status === 0 && this.isHttp) {
      s.onError(i.status);
      return;
    }
    const n = i.status || Zh;
    if (!(n === Zh && s.expectedStatus === Jh) && n !== s.expectedStatus) {
      s.onError(i.status);
      return;
    }
    const o = sg(i);
    if (n === Jh) {
      const l = i.getResponseHeader("Content-Range"), h = /bytes (\d+)-(\d+)\/(\d+)/.exec(l);
      h ? s.onDone({
        begin: parseInt(h[1], 10),
        chunk: o
      }) : (q('Missing or invalid "Content-Range" header.'), s.onError(0));
    } else o ? s.onDone({
      begin: 0,
      chunk: o
    }) : s.onError(i.status);
  }
  getRequestXhr(t) {
    return this.pendingRequests[t].xhr;
  }
  isPendingRequest(t) {
    return t in this.pendingRequests;
  }
  abortRequest(t) {
    const e = this.pendingRequests[t].xhr;
    delete this.pendingRequests[t], e.abort();
  }
}
class ng {
  constructor(t) {
    this._source = t, this._manager = new ig(t), this._rangeChunkSize = t.rangeChunkSize, this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  _onRangeRequestReaderClosed(t) {
    const e = this._rangeRequestReaders.indexOf(t);
    e >= 0 && this._rangeRequestReaders.splice(e, 1);
  }
  getFullReader() {
    return Tt(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once."), this._fullRequestReader = new rg(this._manager, this._source), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    const s = new ag(this._manager, t, e);
    return s.onClosed = this._onRangeRequestReaderClosed.bind(this), this._rangeRequestReaders.push(s), s;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const s of this._rangeRequestReaders.slice(0))
      s.cancel(t);
  }
}
class rg {
  constructor(t, e) {
    this._manager = t, this._url = e.url, this._fullRequestId = t.request({
      onHeadersReceived: this._onHeadersReceived.bind(this),
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this)
    }), this._headersCapability = Promise.withResolvers(), this._disableRange = e.disableRange || !1, this._contentLength = e.length, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !1, this._isRangeSupported = !1, this._cachedChunks = [], this._requests = [], this._done = !1, this._storedError = void 0, this._filename = null, this.onProgress = null;
  }
  _onHeadersReceived() {
    const t = this._fullRequestId, e = this._manager.getRequestXhr(t);
    this._manager._responseOrigin = Vh(e.responseURL);
    const s = e.getAllResponseHeaders(), i = new Headers(s ? s.trimStart().replace(/[^\S ]+$/, "").split(/[\r\n]+/).map((o) => {
      const [l, ...h] = o.split(": ");
      return [l, h.join(": ")];
    }) : []), {
      allowRangeRequests: n,
      suggestedLength: a
    } = ju({
      responseHeaders: i,
      isHttp: this._manager.isHttp,
      rangeChunkSize: this._rangeChunkSize,
      disableRange: this._disableRange
    });
    n && (this._isRangeSupported = !0), this._contentLength = a || this._contentLength, this._filename = Wu(i), this._isRangeSupported && this._manager.abortRequest(t), this._headersCapability.resolve();
  }
  _onDone(t) {
    if (t && (this._requests.length > 0 ? this._requests.shift().resolve({
      value: t.chunk,
      done: !1
    }) : this._cachedChunks.push(t.chunk)), this._done = !0, !(this._cachedChunks.length > 0)) {
      for (const e of this._requests)
        e.resolve({
          value: void 0,
          done: !0
        });
      this._requests.length = 0;
    }
  }
  _onError(t) {
    this._storedError = jh(t, this._url), this._headersCapability.reject(this._storedError);
    for (const e of this._requests)
      e.reject(this._storedError);
    this._requests.length = 0, this._cachedChunks.length = 0;
  }
  _onProgress(t) {
    var e;
    (e = this.onProgress) == null || e.call(this, {
      loaded: t.loaded,
      total: t.lengthComputable ? t.total : this._contentLength
    });
  }
  get filename() {
    return this._filename;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  get contentLength() {
    return this._contentLength;
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  async read() {
    if (await this._headersCapability.promise, this._storedError)
      throw this._storedError;
    if (this._cachedChunks.length > 0)
      return {
        value: this._cachedChunks.shift(),
        done: !1
      };
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0, this._headersCapability.reject(t);
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._manager.isPendingRequest(this._fullRequestId) && this._manager.abortRequest(this._fullRequestId), this._fullRequestReader = null;
  }
}
class ag {
  constructor(t, e, s) {
    this._manager = t, this._url = t.url, this._requestId = t.request({
      begin: e,
      end: s,
      onHeadersReceived: this._onHeadersReceived.bind(this),
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this)
    }), this._requests = [], this._queuedChunk = null, this._done = !1, this._storedError = void 0, this.onProgress = null, this.onClosed = null;
  }
  _onHeadersReceived() {
    var e;
    const t = Vh((e = this._manager.getRequestXhr(this._requestId)) == null ? void 0 : e.responseURL);
    t !== this._manager._responseOrigin && (this._storedError = new Error(`Expected range response-origin "${t}" to match "${this._manager._responseOrigin}".`), this._onError(0));
  }
  _close() {
    var t;
    (t = this.onClosed) == null || t.call(this, this);
  }
  _onDone(t) {
    const e = t.chunk;
    this._requests.length > 0 ? this._requests.shift().resolve({
      value: e,
      done: !1
    }) : this._queuedChunk = e, this._done = !0;
    for (const s of this._requests)
      s.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._close();
  }
  _onError(t) {
    this._storedError ?? (this._storedError = jh(t, this._url));
    for (const e of this._requests)
      e.reject(this._storedError);
    this._requests.length = 0, this._queuedChunk = null;
  }
  _onProgress(t) {
    var e;
    this.isStreamingSupported || (e = this.onProgress) == null || e.call(this, {
      loaded: t.loaded
    });
  }
  get isStreamingSupported() {
    return !1;
  }
  async read() {
    if (this._storedError)
      throw this._storedError;
    if (this._queuedChunk !== null) {
      const e = this._queuedChunk;
      return this._queuedChunk = null, {
        value: e,
        done: !1
      };
    }
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0;
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._manager.isPendingRequest(this._requestId) && this._manager.abortRequest(this._requestId), this._close();
  }
}
const og = /^[a-z][a-z0-9\-+.]+:/i;
function lg(d) {
  if (og.test(d))
    return new URL(d);
  const t = process.getBuiltinModule("url");
  return new URL(t.pathToFileURL(d));
}
class hg {
  constructor(t) {
    this.source = t, this.url = lg(t.url), Tt(this.url.protocol === "file:", "PDFNodeStream only supports file:// URLs."), this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    var t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }
  getFullReader() {
    return Tt(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once."), this._fullRequestReader = new cg(this), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const s = new dg(this, t, e);
    return this._rangeRequestReaders.push(s), s;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const s of this._rangeRequestReaders.slice(0))
      s.cancel(t);
  }
}
class cg {
  constructor(t) {
    this._url = t.url, this._done = !1, this._storedError = null, this.onProgress = null;
    const e = t.source;
    this._contentLength = e.length, this._loaded = 0, this._filename = null, this._disableRange = e.disableRange || !1, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange, this._readableStream = null, this._readCapability = Promise.withResolvers(), this._headersCapability = Promise.withResolvers();
    const s = process.getBuiltinModule("fs");
    s.promises.lstat(this._url).then((i) => {
      this._contentLength = i.size, this._setReadableStream(s.createReadStream(this._url)), this._headersCapability.resolve();
    }, (i) => {
      i.code === "ENOENT" && (i = new Ja(`Missing PDF "${this._url}".`)), this._storedError = i, this._headersCapability.reject(i);
    });
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  get filename() {
    return this._filename;
  }
  get contentLength() {
    return this._contentLength;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var s;
    if (await this._readCapability.promise, this._done)
      return {
        value: void 0,
        done: !0
      };
    if (this._storedError)
      throw this._storedError;
    const t = this._readableStream.read();
    return t === null ? (this._readCapability = Promise.withResolvers(), this.read()) : (this._loaded += t.length, (s = this.onProgress) == null || s.call(this, {
      loaded: this._loaded,
      total: this._contentLength
    }), {
      value: new Uint8Array(t).buffer,
      done: !1
    });
  }
  cancel(t) {
    if (!this._readableStream) {
      this._error(t);
      return;
    }
    this._readableStream.destroy(t);
  }
  _error(t) {
    this._storedError = t, this._readCapability.resolve();
  }
  _setReadableStream(t) {
    this._readableStream = t, t.on("readable", () => {
      this._readCapability.resolve();
    }), t.on("end", () => {
      t.destroy(), this._done = !0, this._readCapability.resolve();
    }), t.on("error", (e) => {
      this._error(e);
    }), !this._isStreamingSupported && this._isRangeSupported && this._error(new Yi("streaming is disabled")), this._storedError && this._readableStream.destroy(this._storedError);
  }
}
class dg {
  constructor(t, e, s) {
    this._url = t.url, this._done = !1, this._storedError = null, this.onProgress = null, this._loaded = 0, this._readableStream = null, this._readCapability = Promise.withResolvers();
    const i = t.source;
    this._isStreamingSupported = !i.disableStream;
    const n = process.getBuiltinModule("fs");
    this._setReadableStream(n.createReadStream(this._url, {
      start: e,
      end: s - 1
    }));
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var s;
    if (await this._readCapability.promise, this._done)
      return {
        value: void 0,
        done: !0
      };
    if (this._storedError)
      throw this._storedError;
    const t = this._readableStream.read();
    return t === null ? (this._readCapability = Promise.withResolvers(), this.read()) : (this._loaded += t.length, (s = this.onProgress) == null || s.call(this, {
      loaded: this._loaded
    }), {
      value: new Uint8Array(t).buffer,
      done: !1
    });
  }
  cancel(t) {
    if (!this._readableStream) {
      this._error(t);
      return;
    }
    this._readableStream.destroy(t);
  }
  _error(t) {
    this._storedError = t, this._readCapability.resolve();
  }
  _setReadableStream(t) {
    this._readableStream = t, t.on("readable", () => {
      this._readCapability.resolve();
    }), t.on("end", () => {
      t.destroy(), this._done = !0, this._readCapability.resolve();
    }), t.on("error", (e) => {
      this._error(e);
    }), this._storedError && this._readableStream.destroy(this._storedError);
  }
}
const ug = 1e5, pe = 30, fg = 0.8;
var Zd, Ri, Ae, Bo, Ho, Pn, Ys, zo, $o, Mn, Wr, Xr, Li, qr, Go, Yr, Rn, Uo, Vo, Ln, In, jo, Ii, Kr, gi, Ku, Qu, Rc, Oe, Wl, Lc, Zu, Ju;
const Mt = class Mt {
  constructor({
    textContentSource: t,
    container: e,
    viewport: s
  }) {
    m(this, gi);
    m(this, Ri, Promise.withResolvers());
    m(this, Ae, null);
    m(this, Bo, !1);
    m(this, Ho, !!((Zd = globalThis.FontInspector) != null && Zd.enabled));
    m(this, Pn, null);
    m(this, Ys, null);
    m(this, zo, 0);
    m(this, $o, 0);
    m(this, Mn, null);
    m(this, Wr, null);
    m(this, Xr, 0);
    m(this, Li, 0);
    m(this, qr, /* @__PURE__ */ Object.create(null));
    m(this, Go, []);
    m(this, Yr, null);
    m(this, Rn, []);
    m(this, Uo, /* @__PURE__ */ new WeakMap());
    m(this, Vo, null);
    var l;
    if (t instanceof ReadableStream)
      p(this, Yr, t);
    else if (typeof t == "object")
      p(this, Yr, new ReadableStream({
        start(h) {
          h.enqueue(t), h.close();
        }
      }));
    else
      throw new Error('No "textContentSource" parameter specified.');
    p(this, Ae, p(this, Wr, e)), p(this, Li, s.scale * (globalThis.devicePixelRatio || 1)), p(this, Xr, s.rotation), p(this, Ys, {
      div: null,
      properties: null,
      ctx: null
    });
    const {
      pageWidth: i,
      pageHeight: n,
      pageX: a,
      pageY: o
    } = s.rawDims;
    p(this, Vo, [1, 0, 0, -1, -a, o + n]), p(this, $o, i), p(this, zo, n), A(l = Mt, Oe, Zu).call(l), hr(e, s), r(this, Ri).promise.finally(() => {
      r(Mt, Kr).delete(this), p(this, Ys, null), p(this, qr, null);
    }).catch(() => {
    });
  }
  static get fontFamilyMap() {
    const {
      isWindows: t,
      isFirefox: e
    } = ce.platform;
    return Q(this, "fontFamilyMap", /* @__PURE__ */ new Map([["sans-serif", `${t && e ? "Calibri, " : ""}sans-serif`], ["monospace", `${t && e ? "Lucida Console, " : ""}monospace`]]));
  }
  render() {
    const t = () => {
      r(this, Mn).read().then(({
        value: e,
        done: s
      }) => {
        if (s) {
          r(this, Ri).resolve();
          return;
        }
        r(this, Pn) ?? p(this, Pn, e.lang), Object.assign(r(this, qr), e.styles), A(this, gi, Ku).call(this, e.items), t();
      }, r(this, Ri).reject);
    };
    return p(this, Mn, r(this, Yr).getReader()), r(Mt, Kr).add(this), t(), r(this, Ri).promise;
  }
  update({
    viewport: t,
    onBefore: e = null
  }) {
    var n;
    const s = t.scale * (globalThis.devicePixelRatio || 1), i = t.rotation;
    if (i !== r(this, Xr) && (e == null || e(), p(this, Xr, i), hr(r(this, Wr), {
      rotation: i
    })), s !== r(this, Li)) {
      e == null || e(), p(this, Li, s);
      const a = {
        div: null,
        properties: null,
        ctx: A(n = Mt, Oe, Wl).call(n, r(this, Pn))
      };
      for (const o of r(this, Rn))
        a.properties = r(this, Uo).get(o), a.div = o, A(this, gi, Rc).call(this, a);
    }
  }
  cancel() {
    var e;
    const t = new Yi("TextLayer task cancelled.");
    (e = r(this, Mn)) == null || e.cancel(t).catch(() => {
    }), p(this, Mn, null), r(this, Ri).reject(t);
  }
  get textDivs() {
    return r(this, Rn);
  }
  get textContentItemsStr() {
    return r(this, Go);
  }
  static cleanup() {
    if (!(r(this, Kr).size > 0)) {
      r(this, Ln).clear();
      for (const {
        canvas: t
      } of r(this, In).values())
        t.remove();
      r(this, In).clear();
    }
  }
};
Ri = new WeakMap(), Ae = new WeakMap(), Bo = new WeakMap(), Ho = new WeakMap(), Pn = new WeakMap(), Ys = new WeakMap(), zo = new WeakMap(), $o = new WeakMap(), Mn = new WeakMap(), Wr = new WeakMap(), Xr = new WeakMap(), Li = new WeakMap(), qr = new WeakMap(), Go = new WeakMap(), Yr = new WeakMap(), Rn = new WeakMap(), Uo = new WeakMap(), Vo = new WeakMap(), Ln = new WeakMap(), In = new WeakMap(), jo = new WeakMap(), Ii = new WeakMap(), Kr = new WeakMap(), gi = new WeakSet(), Ku = function(t) {
  var i, n;
  if (r(this, Bo))
    return;
  (n = r(this, Ys)).ctx ?? (n.ctx = A(i = Mt, Oe, Wl).call(i, r(this, Pn)));
  const e = r(this, Rn), s = r(this, Go);
  for (const a of t) {
    if (e.length > ug) {
      q("Ignoring additional textDivs for performance reasons."), p(this, Bo, !0);
      return;
    }
    if (a.str === void 0) {
      if (a.type === "beginMarkedContentProps" || a.type === "beginMarkedContent") {
        const o = r(this, Ae);
        p(this, Ae, document.createElement("span")), r(this, Ae).classList.add("markedContent"), a.id !== null && r(this, Ae).setAttribute("id", `${a.id}`), o.append(r(this, Ae));
      } else a.type === "endMarkedContent" && p(this, Ae, r(this, Ae).parentNode);
      continue;
    }
    s.push(a.str), A(this, gi, Qu).call(this, a);
  }
}, Qu = function(t) {
  var y;
  const e = document.createElement("span"), s = {
    angle: 0,
    canvasWidth: 0,
    hasText: t.str !== "",
    hasEOL: t.hasEOL,
    fontSize: 0
  };
  r(this, Rn).push(e);
  const i = H.transform(r(this, Vo), t.transform);
  let n = Math.atan2(i[1], i[0]);
  const a = r(this, qr)[t.fontName];
  a.vertical && (n += Math.PI / 2);
  let o = r(this, Ho) && a.fontSubstitution || a.fontFamily;
  o = Mt.fontFamilyMap.get(o) || o;
  const l = Math.hypot(i[2], i[3]), h = l * A(y = Mt, Oe, Ju).call(y, o, r(this, Pn));
  let c, u;
  n === 0 ? (c = i[4], u = i[5] - h) : (c = i[4] + h * Math.sin(n), u = i[5] - h * Math.cos(n));
  const f = "calc(var(--scale-factor)*", g = e.style;
  r(this, Ae) === r(this, Wr) ? (g.left = `${(100 * c / r(this, $o)).toFixed(2)}%`, g.top = `${(100 * u / r(this, zo)).toFixed(2)}%`) : (g.left = `${f}${c.toFixed(2)}px)`, g.top = `${f}${u.toFixed(2)}px)`), g.fontSize = `${f}${(r(Mt, Ii) * l).toFixed(2)}px)`, g.fontFamily = o, s.fontSize = l, e.setAttribute("role", "presentation"), e.textContent = t.str, e.dir = t.dir, r(this, Ho) && (e.dataset.fontName = a.fontSubstitutionLoadedName || t.fontName), n !== 0 && (s.angle = n * (180 / Math.PI));
  let b = !1;
  if (t.str.length > 1)
    b = !0;
  else if (t.str !== " " && t.transform[0] !== t.transform[3]) {
    const w = Math.abs(t.transform[0]), v = Math.abs(t.transform[3]);
    w !== v && Math.max(w, v) / Math.min(w, v) > 1.5 && (b = !0);
  }
  if (b && (s.canvasWidth = a.vertical ? t.height : t.width), r(this, Uo).set(e, s), r(this, Ys).div = e, r(this, Ys).properties = s, A(this, gi, Rc).call(this, r(this, Ys)), s.hasText && r(this, Ae).append(e), s.hasEOL) {
    const w = document.createElement("br");
    w.setAttribute("role", "presentation"), r(this, Ae).append(w);
  }
}, Rc = function(t) {
  var o;
  const {
    div: e,
    properties: s,
    ctx: i
  } = t, {
    style: n
  } = e;
  let a = "";
  if (r(Mt, Ii) > 1 && (a = `scale(${1 / r(Mt, Ii)})`), s.canvasWidth !== 0 && s.hasText) {
    const {
      fontFamily: l
    } = n, {
      canvasWidth: h,
      fontSize: c
    } = s;
    A(o = Mt, Oe, Lc).call(o, i, c * r(this, Li), l);
    const {
      width: u
    } = i.measureText(e.textContent);
    u > 0 && (a = `scaleX(${h * r(this, Li) / u}) ${a}`);
  }
  s.angle !== 0 && (a = `rotate(${s.angle}deg) ${a}`), a.length > 0 && (n.transform = a);
}, Oe = new WeakSet(), Wl = function(t = null) {
  let e = r(this, In).get(t || (t = ""));
  if (!e) {
    const s = document.createElement("canvas");
    s.className = "hiddenCanvasElement", s.lang = t, document.body.append(s), e = s.getContext("2d", {
      alpha: !1,
      willReadFrequently: !0
    }), r(this, In).set(t, e), r(this, jo).set(e, {
      size: 0,
      family: ""
    });
  }
  return e;
}, Lc = function(t, e, s) {
  const i = r(this, jo).get(t);
  e === i.size && s === i.family || (t.font = `${e}px ${s}`, i.size = e, i.family = s);
}, Zu = function() {
  if (r(this, Ii) !== null)
    return;
  const t = document.createElement("div");
  t.style.opacity = 0, t.style.lineHeight = 1, t.style.fontSize = "1px", t.style.position = "absolute", t.textContent = "X", document.body.append(t), p(this, Ii, t.getBoundingClientRect().height), t.remove();
}, Ju = function(t, e) {
  const s = r(this, Ln).get(t);
  if (s)
    return s;
  const i = A(this, Oe, Wl).call(this, e);
  i.canvas.width = i.canvas.height = pe, A(this, Oe, Lc).call(this, i, pe, t);
  const n = i.measureText("");
  let a = n.fontBoundingBoxAscent, o = Math.abs(n.fontBoundingBoxDescent);
  if (a) {
    const c = a / (a + o);
    return r(this, Ln).set(t, c), i.canvas.width = i.canvas.height = 0, c;
  }
  i.strokeStyle = "red", i.clearRect(0, 0, pe, pe), i.strokeText("g", 0, 0);
  let l = i.getImageData(0, 0, pe, pe).data;
  o = 0;
  for (let c = l.length - 1 - 3; c >= 0; c -= 4)
    if (l[c] > 0) {
      o = Math.ceil(c / 4 / pe);
      break;
    }
  i.clearRect(0, 0, pe, pe), i.strokeText("A", 0, pe), l = i.getImageData(0, 0, pe, pe).data, a = 0;
  for (let c = 0, u = l.length; c < u; c += 4)
    if (l[c] > 0) {
      a = pe - Math.floor(c / 4 / pe);
      break;
    }
  i.canvas.width = i.canvas.height = 0;
  const h = a ? a / (a + o) : fg;
  return r(this, Ln).set(t, h), h;
}, m(Mt, Oe), m(Mt, Ln, /* @__PURE__ */ new Map()), m(Mt, In, /* @__PURE__ */ new Map()), m(Mt, jo, /* @__PURE__ */ new WeakMap()), m(Mt, Ii, null), m(Mt, Kr, /* @__PURE__ */ new Set());
let to = Mt;
class eo {
  static textContent(t) {
    const e = [], s = {
      items: e,
      styles: /* @__PURE__ */ Object.create(null)
    };
    function i(n) {
      var l;
      if (!n)
        return;
      let a = null;
      const o = n.name;
      if (o === "#text")
        a = n.value;
      else if (eo.shouldBuildText(o))
        (l = n == null ? void 0 : n.attributes) != null && l.textContent ? a = n.attributes.textContent : n.value && (a = n.value);
      else return;
      if (a !== null && e.push({
        str: a
      }), !!n.children)
        for (const h of n.children)
          i(h);
    }
    return i(t), s;
  }
  static shouldBuildText(t) {
    return !(t === "textarea" || t === "input" || t === "option" || t === "select");
  }
}
const pg = 65536, gg = 100, mg = 5e3, bg = ie ? Rp : kp, Ag = ie ? Lp : Bu, yg = ie ? Mp : Pp, vg = ie ? Ip : Gu;
function wg(d = {}) {
  typeof d == "string" || d instanceof URL ? d = {
    url: d
  } : (d instanceof ArrayBuffer || ArrayBuffer.isView(d)) && (d = {
    data: d
  });
  const t = new Ic(), {
    docId: e
  } = t, s = d.url ? _g(d.url) : null, i = d.data ? Sg(d.data) : null, n = d.httpHeaders || null, a = d.withCredentials === !0, o = d.password ?? null, l = d.range instanceof tf ? d.range : null, h = Number.isInteger(d.rangeChunkSize) && d.rangeChunkSize > 0 ? d.rangeChunkSize : pg;
  let c = d.worker instanceof Cr ? d.worker : null;
  const u = d.verbosity, f = typeof d.docBaseUrl == "string" && !Uh(d.docBaseUrl) ? d.docBaseUrl : null, g = typeof d.cMapUrl == "string" ? d.cMapUrl : null, b = d.cMapPacked !== !1, y = d.CMapReaderFactory || Ag, w = typeof d.standardFontDataUrl == "string" ? d.standardFontDataUrl : null, v = d.StandardFontDataFactory || vg, S = d.stopAtErrors !== !0, E = Number.isInteger(d.maxImageSize) && d.maxImageSize > -1 ? d.maxImageSize : -1, _ = d.isEvalSupported !== !1, C = typeof d.isOffscreenCanvasSupported == "boolean" ? d.isOffscreenCanvasSupported : !ie, x = typeof d.isImageDecoderSupported == "boolean" ? d.isImageDecoderSupported : !ie && (ce.platform.isFirefox || !globalThis.chrome), T = Number.isInteger(d.canvasMaxAreaInBytes) ? d.canvasMaxAreaInBytes : -1, k = typeof d.disableFontFace == "boolean" ? d.disableFontFace : ie, M = d.fontExtraProperties === !0, B = d.enableXfa === !0, F = d.ownerDocument || globalThis.document, rt = d.disableRange === !0, tt = d.disableStream === !0, et = d.disableAutoFetch === !0, Dt = d.pdfBug === !0, L = d.CanvasFactory || bg, z = d.FilterFactory || yg, qt = d.enableHWA === !0, U = l ? l.length : d.length ?? NaN, N = typeof d.useSystemFonts == "boolean" ? d.useSystemFonts : !ie && !k, Z = typeof d.useWorkerFetch == "boolean" ? d.useWorkerFetch : y === Bu && v === Gu && g && w && Fa(g, document.baseURI) && Fa(w, document.baseURI), ft = null;
  ap(u);
  const wt = {
    canvasFactory: new L({
      ownerDocument: F,
      enableHWA: qt
    }),
    filterFactory: new z({
      docId: e,
      ownerDocument: F
    }),
    cMapReaderFactory: Z ? null : new y({
      baseUrl: g,
      isCompressed: b
    }),
    standardFontDataFactory: Z ? null : new v({
      baseUrl: w
    })
  };
  if (!c) {
    const fe = {
      verbosity: u,
      port: di.workerPort
    };
    c = fe.port ? Cr.fromPort(fe) : new Cr(fe), t._worker = c;
  }
  const Ds = {
    docId: e,
    apiVersion: "4.10.38",
    data: i,
    password: o,
    disableAutoFetch: et,
    rangeChunkSize: h,
    length: U,
    docBaseUrl: f,
    enableXfa: B,
    evaluatorOptions: {
      maxImageSize: E,
      disableFontFace: k,
      ignoreErrors: S,
      isEvalSupported: _,
      isOffscreenCanvasSupported: C,
      isImageDecoderSupported: x,
      canvasMaxAreaInBytes: T,
      fontExtraProperties: M,
      useSystemFonts: N,
      cMapUrl: Z ? g : null,
      standardFontDataUrl: Z ? w : null
    }
  }, $t = {
    disableFontFace: k,
    fontExtraProperties: M,
    ownerDocument: F,
    pdfBug: Dt,
    styleElement: ft,
    loadingParams: {
      disableAutoFetch: et,
      enableXfa: B
    }
  };
  return c.promise.then(function() {
    if (t.destroyed)
      throw new Error("Loading aborted");
    if (c.destroyed)
      throw new Error("Worker was destroyed");
    const fe = c.messageHandler.sendWithPromise("GetDocRequest", Ds, i ? [i.buffer] : null);
    let pt;
    if (l)
      pt = new Kp(l, {
        disableRange: rt,
        disableStream: tt
      });
    else if (!i) {
      if (!s)
        throw new Error("getDocument - no `url` parameter provided.");
      let pr;
      if (ie)
        if (Fa(s)) {
          if (typeof fetch > "u" || typeof Response > "u" || !("body" in Response.prototype))
            throw new Error("getDocument - the Fetch API was disabled in Node.js, see `--no-experimental-fetch`.");
          pr = qd;
        } else
          pr = hg;
      else
        pr = Fa(s) ? qd : ng;
      pt = new pr({
        url: s,
        length: U,
        httpHeaders: n,
        withCredentials: a,
        rangeChunkSize: h,
        disableRange: rt,
        disableStream: tt
      });
    }
    return fe.then((pr) => {
      if (t.destroyed)
        throw new Error("Loading aborted");
      if (c.destroyed)
        throw new Error("Worker was destroyed");
      const Rd = new Ha(e, pr, c.port), Zf = new Tg(Rd, t, pt, $t, wt);
      t._transport = Zf, Rd.send("Ready", null);
    });
  }).catch(t._capability.reject), t;
}
function _g(d) {
  if (d instanceof URL)
    return d.href;
  try {
    return new URL(d, window.location).href;
  } catch {
    if (ie && typeof d == "string")
      return d;
  }
  throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
}
function Sg(d) {
  if (ie && typeof Buffer < "u" && d instanceof Buffer)
    throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
  if (d instanceof Uint8Array && d.byteLength === d.buffer.byteLength)
    return d;
  if (typeof d == "string")
    return $h(d);
  if (d instanceof ArrayBuffer || ArrayBuffer.isView(d) || typeof d == "object" && !isNaN(d == null ? void 0 : d.length))
    return new Uint8Array(d);
  throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
}
function Yd(d) {
  return typeof d == "object" && Number.isInteger(d == null ? void 0 : d.num) && d.num >= 0 && Number.isInteger(d == null ? void 0 : d.gen) && d.gen >= 0;
}
var Th;
const kh = class kh {
  constructor() {
    this._capability = Promise.withResolvers(), this._transport = null, this._worker = null, this.docId = `d${ne(kh, Th)._++}`, this.destroyed = !1, this.onPassword = null, this.onProgress = null;
  }
  get promise() {
    return this._capability.promise;
  }
  async destroy() {
    var t, e, s, i;
    this.destroyed = !0;
    try {
      (t = this._worker) != null && t.port && (this._worker._pendingDestroy = !0), await ((e = this._transport) == null ? void 0 : e.destroy());
    } catch (n) {
      throw (s = this._worker) != null && s.port && delete this._worker._pendingDestroy, n;
    }
    this._transport = null, (i = this._worker) == null || i.destroy(), this._worker = null;
  }
};
Th = new WeakMap(), m(kh, Th, 0);
let Ic = kh;
class tf {
  constructor(t, e, s = !1, i = null) {
    this.length = t, this.initialData = e, this.progressiveDone = s, this.contentDispositionFilename = i, this._rangeListeners = [], this._progressListeners = [], this._progressiveReadListeners = [], this._progressiveDoneListeners = [], this._readyCapability = Promise.withResolvers();
  }
  addRangeListener(t) {
    this._rangeListeners.push(t);
  }
  addProgressListener(t) {
    this._progressListeners.push(t);
  }
  addProgressiveReadListener(t) {
    this._progressiveReadListeners.push(t);
  }
  addProgressiveDoneListener(t) {
    this._progressiveDoneListeners.push(t);
  }
  onDataRange(t, e) {
    for (const s of this._rangeListeners)
      s(t, e);
  }
  onDataProgress(t, e) {
    this._readyCapability.promise.then(() => {
      for (const s of this._progressListeners)
        s(t, e);
    });
  }
  onDataProgressiveRead(t) {
    this._readyCapability.promise.then(() => {
      for (const e of this._progressiveReadListeners)
        e(t);
    });
  }
  onDataProgressiveDone() {
    this._readyCapability.promise.then(() => {
      for (const t of this._progressiveDoneListeners)
        t();
    });
  }
  transportReady() {
    this._readyCapability.resolve();
  }
  requestDataRange(t, e) {
    ct("Abstract method PDFDataRangeTransport.requestDataRange");
  }
  abort() {
  }
}
class Eg {
  constructor(t, e) {
    this._pdfInfo = t, this._transport = e;
  }
  get annotationStorage() {
    return this._transport.annotationStorage;
  }
  get canvasFactory() {
    return this._transport.canvasFactory;
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get numPages() {
    return this._pdfInfo.numPages;
  }
  get fingerprints() {
    return this._pdfInfo.fingerprints;
  }
  get isPureXfa() {
    return Q(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  get allXfaHtml() {
    return this._transport._htmlForXfa;
  }
  getPage(t) {
    return this._transport.getPage(t);
  }
  getPageIndex(t) {
    return this._transport.getPageIndex(t);
  }
  getDestinations() {
    return this._transport.getDestinations();
  }
  getDestination(t) {
    return this._transport.getDestination(t);
  }
  getPageLabels() {
    return this._transport.getPageLabels();
  }
  getPageLayout() {
    return this._transport.getPageLayout();
  }
  getPageMode() {
    return this._transport.getPageMode();
  }
  getViewerPreferences() {
    return this._transport.getViewerPreferences();
  }
  getOpenAction() {
    return this._transport.getOpenAction();
  }
  getAttachments() {
    return this._transport.getAttachments();
  }
  getJSActions() {
    return this._transport.getDocJSActions();
  }
  getOutline() {
    return this._transport.getOutline();
  }
  getOptionalContentConfig({
    intent: t = "display"
  } = {}) {
    const {
      renderingIntent: e
    } = this._transport.getRenderingIntent(t);
    return this._transport.getOptionalContentConfig(e);
  }
  getPermissions() {
    return this._transport.getPermissions();
  }
  getMetadata() {
    return this._transport.getMetadata();
  }
  getMarkInfo() {
    return this._transport.getMarkInfo();
  }
  getData() {
    return this._transport.getData();
  }
  saveDocument() {
    return this._transport.saveDocument();
  }
  getDownloadInfo() {
    return this._transport.downloadInfoCapability.promise;
  }
  cleanup(t = !1) {
    return this._transport.startCleanup(t || this.isPureXfa);
  }
  destroy() {
    return this.loadingTask.destroy();
  }
  cachedPageNumber(t) {
    return this._transport.cachedPageNumber(t);
  }
  get loadingParams() {
    return this._transport.loadingParams;
  }
  get loadingTask() {
    return this._transport.loadingTask;
  }
  getFieldObjects() {
    return this._transport.getFieldObjects();
  }
  hasJSActions() {
    return this._transport.hasJSActions();
  }
  getCalculationOrderIds() {
    return this._transport.getCalculationOrderIds();
  }
}
var Di, Ks, We, yr, Xl;
class Cg {
  constructor(t, e, s, i = !1) {
    m(this, We);
    m(this, Di, null);
    m(this, Ks, !1);
    this._pageIndex = t, this._pageInfo = e, this._transport = s, this._stats = i ? new Fd() : null, this._pdfBug = i, this.commonObjs = s.commonObjs, this.objs = new ef(), this._maybeCleanupAfterRender = !1, this._intentStates = /* @__PURE__ */ new Map(), this.destroyed = !1;
  }
  get pageNumber() {
    return this._pageIndex + 1;
  }
  get rotate() {
    return this._pageInfo.rotate;
  }
  get ref() {
    return this._pageInfo.ref;
  }
  get userUnit() {
    return this._pageInfo.userUnit;
  }
  get view() {
    return this._pageInfo.view;
  }
  getViewport({
    scale: t,
    rotation: e = this.rotate,
    offsetX: s = 0,
    offsetY: i = 0,
    dontFlip: n = !1
  } = {}) {
    return new kl({
      viewBox: this.view,
      userUnit: this.userUnit,
      scale: t,
      rotation: e,
      offsetX: s,
      offsetY: i,
      dontFlip: n
    });
  }
  getAnnotations({
    intent: t = "display"
  } = {}) {
    const {
      renderingIntent: e
    } = this._transport.getRenderingIntent(t);
    return this._transport.getAnnotations(this._pageIndex, e);
  }
  getJSActions() {
    return this._transport.getPageJSActions(this._pageIndex);
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get isPureXfa() {
    return Q(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  async getXfa() {
    var t;
    return ((t = this._transport._htmlForXfa) == null ? void 0 : t.children[this._pageIndex]) || null;
  }
  render({
    canvasContext: t,
    viewport: e,
    intent: s = "display",
    annotationMode: i = bi.ENABLE,
    transform: n = null,
    background: a = null,
    optionalContentConfigPromise: o = null,
    annotationCanvasMap: l = null,
    pageColors: h = null,
    printAnnotationStorage: c = null,
    isEditing: u = !1
  }) {
    var _, C;
    (_ = this._stats) == null || _.time("Overall");
    const f = this._transport.getRenderingIntent(s, i, c, u), {
      renderingIntent: g,
      cacheKey: b
    } = f;
    p(this, Ks, !1), A(this, We, Xl).call(this), o || (o = this._transport.getOptionalContentConfig(g));
    let y = this._intentStates.get(b);
    y || (y = /* @__PURE__ */ Object.create(null), this._intentStates.set(b, y)), y.streamReaderCancelTimeout && (clearTimeout(y.streamReaderCancelTimeout), y.streamReaderCancelTimeout = null);
    const w = !!(g & De.PRINT);
    y.displayReadyCapability || (y.displayReadyCapability = Promise.withResolvers(), y.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null
    }, (C = this._stats) == null || C.time("Page Request"), this._pumpOperatorList(f));
    const v = (x) => {
      var T;
      y.renderTasks.delete(S), (this._maybeCleanupAfterRender || w) && p(this, Ks, !0), A(this, We, yr).call(this, !w), x ? (S.capability.reject(x), this._abortOperatorList({
        intentState: y,
        reason: x instanceof Error ? x : new Error(x)
      })) : S.capability.resolve(), this._stats && (this._stats.timeEnd("Rendering"), this._stats.timeEnd("Overall"), (T = globalThis.Stats) != null && T.enabled && globalThis.Stats.add(this.pageNumber, this._stats));
    }, S = new Fc({
      callback: v,
      params: {
        canvasContext: t,
        viewport: e,
        transform: n,
        background: a
      },
      objs: this.objs,
      commonObjs: this.commonObjs,
      annotationCanvasMap: l,
      operatorList: y.operatorList,
      pageIndex: this._pageIndex,
      canvasFactory: this._transport.canvasFactory,
      filterFactory: this._transport.filterFactory,
      useRequestAnimationFrame: !w,
      pdfBug: this._pdfBug,
      pageColors: h
    });
    (y.renderTasks || (y.renderTasks = /* @__PURE__ */ new Set())).add(S);
    const E = S.task;
    return Promise.all([y.displayReadyCapability.promise, o]).then(([x, T]) => {
      var k;
      if (this.destroyed) {
        v();
        return;
      }
      if ((k = this._stats) == null || k.time("Rendering"), !(T.renderingIntent & g))
        throw new Error("Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.");
      S.initializeGraphics({
        transparency: x,
        optionalContentConfig: T
      }), S.operatorListChanged();
    }).catch(v), E;
  }
  getOperatorList({
    intent: t = "display",
    annotationMode: e = bi.ENABLE,
    printAnnotationStorage: s = null,
    isEditing: i = !1
  } = {}) {
    var h;
    function n() {
      o.operatorList.lastChunk && (o.opListReadCapability.resolve(o.operatorList), o.renderTasks.delete(l));
    }
    const a = this._transport.getRenderingIntent(t, e, s, i, !0);
    let o = this._intentStates.get(a.cacheKey);
    o || (o = /* @__PURE__ */ Object.create(null), this._intentStates.set(a.cacheKey, o));
    let l;
    return o.opListReadCapability || (l = /* @__PURE__ */ Object.create(null), l.operatorListChanged = n, o.opListReadCapability = Promise.withResolvers(), (o.renderTasks || (o.renderTasks = /* @__PURE__ */ new Set())).add(l), o.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null
    }, (h = this._stats) == null || h.time("Page Request"), this._pumpOperatorList(a)), o.opListReadCapability.promise;
  }
  streamTextContent({
    includeMarkedContent: t = !1,
    disableNormalization: e = !1
  } = {}) {
    return this._transport.messageHandler.sendWithStream("GetTextContent", {
      pageIndex: this._pageIndex,
      includeMarkedContent: t === !0,
      disableNormalization: e === !0
    }, {
      highWaterMark: 100,
      size(i) {
        return i.items.length;
      }
    });
  }
  getTextContent(t = {}) {
    if (this._transport._htmlForXfa)
      return this.getXfa().then((s) => eo.textContent(s));
    const e = this.streamTextContent(t);
    return new Promise(function(s, i) {
      function n() {
        a.read().then(function({
          value: l,
          done: h
        }) {
          if (h) {
            s(o);
            return;
          }
          o.lang ?? (o.lang = l.lang), Object.assign(o.styles, l.styles), o.items.push(...l.items), n();
        }, i);
      }
      const a = e.getReader(), o = {
        items: [],
        styles: /* @__PURE__ */ Object.create(null),
        lang: null
      };
      n();
    });
  }
  getStructTree() {
    return this._transport.getStructTree(this._pageIndex);
  }
  _destroy() {
    this.destroyed = !0;
    const t = [];
    for (const e of this._intentStates.values())
      if (this._abortOperatorList({
        intentState: e,
        reason: new Error("Page was destroyed."),
        force: !0
      }), !e.opListReadCapability)
        for (const s of e.renderTasks)
          t.push(s.completed), s.cancel();
    return this.objs.clear(), p(this, Ks, !1), A(this, We, Xl).call(this), Promise.all(t);
  }
  cleanup(t = !1) {
    p(this, Ks, !0);
    const e = A(this, We, yr).call(this, !1);
    return t && e && this._stats && (this._stats = new Fd()), e;
  }
  _startRenderPage(t, e) {
    var i, n;
    const s = this._intentStates.get(e);
    s && ((i = this._stats) == null || i.timeEnd("Page Request"), (n = s.displayReadyCapability) == null || n.resolve(t));
  }
  _renderPageChunk(t, e) {
    for (let s = 0, i = t.length; s < i; s++)
      e.operatorList.fnArray.push(t.fnArray[s]), e.operatorList.argsArray.push(t.argsArray[s]);
    e.operatorList.lastChunk = t.lastChunk, e.operatorList.separateAnnots = t.separateAnnots;
    for (const s of e.renderTasks)
      s.operatorListChanged();
    t.lastChunk && A(this, We, yr).call(this, !0);
  }
  _pumpOperatorList({
    renderingIntent: t,
    cacheKey: e,
    annotationStorageSerializable: s,
    modifiedIds: i
  }) {
    const {
      map: n,
      transfer: a
    } = s, l = this._transport.messageHandler.sendWithStream("GetOperatorList", {
      pageIndex: this._pageIndex,
      intent: t,
      cacheKey: e,
      annotationStorage: n,
      modifiedIds: i
    }, a).getReader(), h = this._intentStates.get(e);
    h.streamReader = l;
    const c = () => {
      l.read().then(({
        value: u,
        done: f
      }) => {
        if (f) {
          h.streamReader = null;
          return;
        }
        this._transport.destroyed || (this._renderPageChunk(u, h), c());
      }, (u) => {
        if (h.streamReader = null, !this._transport.destroyed) {
          if (h.operatorList) {
            h.operatorList.lastChunk = !0;
            for (const f of h.renderTasks)
              f.operatorListChanged();
            A(this, We, yr).call(this, !0);
          }
          if (h.displayReadyCapability)
            h.displayReadyCapability.reject(u);
          else if (h.opListReadCapability)
            h.opListReadCapability.reject(u);
          else
            throw u;
        }
      });
    };
    c();
  }
  _abortOperatorList({
    intentState: t,
    reason: e,
    force: s = !1
  }) {
    if (t.streamReader) {
      if (t.streamReaderCancelTimeout && (clearTimeout(t.streamReaderCancelTimeout), t.streamReaderCancelTimeout = null), !s) {
        if (t.renderTasks.size > 0)
          return;
        if (e instanceof md) {
          let i = gg;
          e.extraDelay > 0 && e.extraDelay < 1e3 && (i += e.extraDelay), t.streamReaderCancelTimeout = setTimeout(() => {
            t.streamReaderCancelTimeout = null, this._abortOperatorList({
              intentState: t,
              reason: e,
              force: !0
            });
          }, i);
          return;
        }
      }
      if (t.streamReader.cancel(new Yi(e.message)).catch(() => {
      }), t.streamReader = null, !this._transport.destroyed) {
        for (const [i, n] of this._intentStates)
          if (n === t) {
            this._intentStates.delete(i);
            break;
          }
        this.cleanup();
      }
    }
  }
  get stats() {
    return this._stats;
  }
}
Di = new WeakMap(), Ks = new WeakMap(), We = new WeakSet(), yr = function(t = !1) {
  if (A(this, We, Xl).call(this), !r(this, Ks) || this.destroyed)
    return !1;
  if (t)
    return p(this, Di, setTimeout(() => {
      p(this, Di, null), A(this, We, yr).call(this, !1);
    }, mg)), !1;
  for (const {
    renderTasks: e,
    operatorList: s
  } of this._intentStates.values())
    if (e.size > 0 || !s.lastChunk)
      return !1;
  return this._intentStates.clear(), this.objs.clear(), p(this, Ks, !1), !0;
}, Xl = function() {
  r(this, Di) && (clearTimeout(r(this, Di)), p(this, Di, null));
};
var Qs, Ph;
class xg {
  constructor() {
    m(this, Qs, /* @__PURE__ */ new Map());
    m(this, Ph, Promise.resolve());
  }
  postMessage(t, e) {
    const s = {
      data: structuredClone(t, e ? {
        transfer: e
      } : null)
    };
    r(this, Ph).then(() => {
      for (const [i] of r(this, Qs))
        i.call(this, s);
    });
  }
  addEventListener(t, e, s = null) {
    let i = null;
    if ((s == null ? void 0 : s.signal) instanceof AbortSignal) {
      const {
        signal: n
      } = s;
      if (n.aborted) {
        q("LoopbackPort - cannot use an `aborted` signal.");
        return;
      }
      const a = () => this.removeEventListener(t, e);
      i = () => n.removeEventListener("abort", a), n.addEventListener("abort", a);
    }
    r(this, Qs).set(e, i);
  }
  removeEventListener(t, e) {
    const s = r(this, Qs).get(e);
    s == null || s(), r(this, Qs).delete(e);
  }
  terminate() {
    for (const [, t] of r(this, Qs))
      t == null || t();
    r(this, Qs).clear();
  }
}
Qs = new WeakMap(), Ph = new WeakMap();
var Mh, Dn, Fn, Qr, ql, Zr, Yl;
const gt = class gt {
  constructor({
    name: t = null,
    port: e = null,
    verbosity: s = op()
  } = {}) {
    m(this, Qr);
    var i;
    if (this.name = t, this.destroyed = !1, this.verbosity = s, this._readyCapability = Promise.withResolvers(), this._port = null, this._webWorker = null, this._messageHandler = null, e) {
      if ((i = r(gt, Fn)) != null && i.has(e))
        throw new Error("Cannot use more than one PDFWorker per port.");
      (r(gt, Fn) || p(gt, Fn, /* @__PURE__ */ new WeakMap())).set(e, this), this._initializeFromPort(e);
      return;
    }
    this._initialize();
  }
  get promise() {
    return this._readyCapability.promise;
  }
  get port() {
    return this._port;
  }
  get messageHandler() {
    return this._messageHandler;
  }
  _initializeFromPort(t) {
    this._port = t, this._messageHandler = new Ha("main", "worker", t), this._messageHandler.on("ready", function() {
    }), A(this, Qr, ql).call(this);
  }
  _initialize() {
    if (r(gt, Dn) || r(gt, Zr, Yl)) {
      this._setupFakeWorker();
      return;
    }
    let {
      workerSrc: t
    } = gt;
    try {
      gt._isSameOrigin(window.location.href, t) || (t = gt._createCDNWrapper(new URL(t, window.location).href));
      const e = new Worker(t, {
        type: "module"
      }), s = new Ha("main", "worker", e), i = () => {
        n.abort(), s.destroy(), e.terminate(), this.destroyed ? this._readyCapability.reject(new Error("Worker was destroyed")) : this._setupFakeWorker();
      }, n = new AbortController();
      e.addEventListener("error", () => {
        this._webWorker || i();
      }, {
        signal: n.signal
      }), s.on("test", (o) => {
        if (n.abort(), this.destroyed || !o) {
          i();
          return;
        }
        this._messageHandler = s, this._port = e, this._webWorker = e, A(this, Qr, ql).call(this);
      }), s.on("ready", (o) => {
        if (n.abort(), this.destroyed) {
          i();
          return;
        }
        try {
          a();
        } catch {
          this._setupFakeWorker();
        }
      });
      const a = () => {
        const o = new Uint8Array();
        s.send("test", o, [o.buffer]);
      };
      a();
      return;
    } catch {
      zh("The worker has been disabled.");
    }
    this._setupFakeWorker();
  }
  _setupFakeWorker() {
    r(gt, Dn) || (q("Setting up fake worker."), p(gt, Dn, !0)), gt._setupFakeWorkerGlobal.then((t) => {
      if (this.destroyed) {
        this._readyCapability.reject(new Error("Worker was destroyed"));
        return;
      }
      const e = new xg();
      this._port = e;
      const s = `fake${ne(gt, Mh)._++}`, i = new Ha(s + "_worker", s, e);
      t.setup(i, e), this._messageHandler = new Ha(s, s + "_worker", e), A(this, Qr, ql).call(this);
    }).catch((t) => {
      this._readyCapability.reject(new Error(`Setting up fake worker failed: "${t.message}".`));
    });
  }
  destroy() {
    var t, e, s;
    this.destroyed = !0, (t = this._webWorker) == null || t.terminate(), this._webWorker = null, (e = r(gt, Fn)) == null || e.delete(this._port), this._port = null, (s = this._messageHandler) == null || s.destroy(), this._messageHandler = null;
  }
  static fromPort(t) {
    var s;
    if (!(t != null && t.port))
      throw new Error("PDFWorker.fromPort - invalid method signature.");
    const e = (s = r(this, Fn)) == null ? void 0 : s.get(t.port);
    if (e) {
      if (e._pendingDestroy)
        throw new Error("PDFWorker.fromPort - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
      return e;
    }
    return new gt(t);
  }
  static get workerSrc() {
    if (di.workerSrc)
      return di.workerSrc;
    throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
  }
  static get _setupFakeWorkerGlobal() {
    return Q(this, "_setupFakeWorkerGlobal", (async () => r(this, Zr, Yl) ? r(this, Zr, Yl) : (await import(
      /*webpackIgnore: true*/
      this.workerSrc
    )).WorkerMessageHandler)());
  }
};
Mh = new WeakMap(), Dn = new WeakMap(), Fn = new WeakMap(), Qr = new WeakSet(), ql = function() {
  this._readyCapability.resolve(), this._messageHandler.send("configure", {
    verbosity: this.verbosity
  });
}, Zr = new WeakSet(), Yl = function() {
  var t;
  try {
    return ((t = globalThis.pdfjsWorker) == null ? void 0 : t.WorkerMessageHandler) || null;
  } catch {
    return null;
  }
}, m(gt, Zr), m(gt, Mh, 0), m(gt, Dn, !1), m(gt, Fn), ie && (p(gt, Dn, !0), di.workerSrc || (di.workerSrc = "./pdf.worker.mjs")), gt._isSameOrigin = (t, e) => {
  let s;
  try {
    if (s = new URL(t), !s.origin || s.origin === "null")
      return !1;
  } catch {
    return !1;
  }
  const i = new URL(e, s);
  return s.origin === i.origin;
}, gt._createCDNWrapper = (t) => {
  const e = `await import("${t}");`;
  return URL.createObjectURL(new Blob([e], {
    type: "text/javascript"
  }));
};
let Cr = gt;
var Zs, Cs, Jr, ta, Js, Nn, Va;
class Tg {
  constructor(t, e, s, i, n) {
    m(this, Nn);
    m(this, Zs, /* @__PURE__ */ new Map());
    m(this, Cs, /* @__PURE__ */ new Map());
    m(this, Jr, /* @__PURE__ */ new Map());
    m(this, ta, /* @__PURE__ */ new Map());
    m(this, Js, null);
    this.messageHandler = t, this.loadingTask = e, this.commonObjs = new ef(), this.fontLoader = new xp({
      ownerDocument: i.ownerDocument,
      styleElement: i.styleElement
    }), this.loadingParams = i.loadingParams, this._params = i, this.canvasFactory = n.canvasFactory, this.filterFactory = n.filterFactory, this.cMapReaderFactory = n.cMapReaderFactory, this.standardFontDataFactory = n.standardFontDataFactory, this.destroyed = !1, this.destroyCapability = null, this._networkStream = s, this._fullReader = null, this._lastProgress = null, this.downloadInfoCapability = Promise.withResolvers(), this.setupMessageHandler();
  }
  get annotationStorage() {
    return Q(this, "annotationStorage", new vd());
  }
  getRenderingIntent(t, e = bi.ENABLE, s = null, i = !1, n = !1) {
    let a = De.DISPLAY, o = _c;
    switch (t) {
      case "any":
        a = De.ANY;
        break;
      case "display":
        break;
      case "print":
        a = De.PRINT;
        break;
      default:
        q(`getRenderingIntent - invalid intent: ${t}`);
    }
    const l = a & De.PRINT && s instanceof Lu ? s : this.annotationStorage;
    switch (e) {
      case bi.DISABLE:
        a += De.ANNOTATIONS_DISABLE;
        break;
      case bi.ENABLE:
        break;
      case bi.ENABLE_FORMS:
        a += De.ANNOTATIONS_FORMS;
        break;
      case bi.ENABLE_STORAGE:
        a += De.ANNOTATIONS_STORAGE, o = l.serializable;
        break;
      default:
        q(`getRenderingIntent - invalid annotationMode: ${e}`);
    }
    i && (a += De.IS_EDITING), n && (a += De.OPLIST);
    const {
      ids: h,
      hash: c
    } = l.modifiedIds, u = [a, o.hash, c];
    return {
      renderingIntent: a,
      cacheKey: u.join("_"),
      annotationStorageSerializable: o,
      modifiedIds: h
    };
  }
  destroy() {
    var s;
    if (this.destroyCapability)
      return this.destroyCapability.promise;
    this.destroyed = !0, this.destroyCapability = Promise.withResolvers(), (s = r(this, Js)) == null || s.reject(new Error("Worker was destroyed during onPassword callback"));
    const t = [];
    for (const i of r(this, Cs).values())
      t.push(i._destroy());
    r(this, Cs).clear(), r(this, Jr).clear(), r(this, ta).clear(), this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
    const e = this.messageHandler.sendWithPromise("Terminate", null);
    return t.push(e), Promise.all(t).then(() => {
      var i, n;
      this.commonObjs.clear(), this.fontLoader.clear(), r(this, Zs).clear(), this.filterFactory.destroy(), to.cleanup(), (i = this._networkStream) == null || i.cancelAllRequests(new Yi("Worker was terminated.")), (n = this.messageHandler) == null || n.destroy(), this.messageHandler = null, this.destroyCapability.resolve();
    }, this.destroyCapability.reject), this.destroyCapability.promise;
  }
  setupMessageHandler() {
    const {
      messageHandler: t,
      loadingTask: e
    } = this;
    t.on("GetReader", (s, i) => {
      Tt(this._networkStream, "GetReader - no `IPDFStream` instance available."), this._fullReader = this._networkStream.getFullReader(), this._fullReader.onProgress = (n) => {
        this._lastProgress = {
          loaded: n.loaded,
          total: n.total
        };
      }, i.onPull = () => {
        this._fullReader.read().then(function({
          value: n,
          done: a
        }) {
          if (a) {
            i.close();
            return;
          }
          Tt(n instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer."), i.enqueue(new Uint8Array(n), 1, [n]);
        }).catch((n) => {
          i.error(n);
        });
      }, i.onCancel = (n) => {
        this._fullReader.cancel(n), i.ready.catch((a) => {
          if (!this.destroyed)
            throw a;
        });
      };
    }), t.on("ReaderHeadersReady", async (s) => {
      var o;
      await this._fullReader.headersReady;
      const {
        isStreamingSupported: i,
        isRangeSupported: n,
        contentLength: a
      } = this._fullReader;
      return (!i || !n) && (this._lastProgress && ((o = e.onProgress) == null || o.call(e, this._lastProgress)), this._fullReader.onProgress = (l) => {
        var h;
        (h = e.onProgress) == null || h.call(e, {
          loaded: l.loaded,
          total: l.total
        });
      }), {
        isStreamingSupported: i,
        isRangeSupported: n,
        contentLength: a
      };
    }), t.on("GetRangeReader", (s, i) => {
      Tt(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
      const n = this._networkStream.getRangeReader(s.begin, s.end);
      if (!n) {
        i.close();
        return;
      }
      i.onPull = () => {
        n.read().then(function({
          value: a,
          done: o
        }) {
          if (o) {
            i.close();
            return;
          }
          Tt(a instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer."), i.enqueue(new Uint8Array(a), 1, [a]);
        }).catch((a) => {
          i.error(a);
        });
      }, i.onCancel = (a) => {
        n.cancel(a), i.ready.catch((o) => {
          if (!this.destroyed)
            throw o;
        });
      };
    }), t.on("GetDoc", ({
      pdfInfo: s
    }) => {
      this._numPages = s.numPages, this._htmlForXfa = s.htmlForXfa, delete s.htmlForXfa, e._capability.resolve(new Eg(s, this));
    }), t.on("DocException", (s) => {
      e._capability.reject(ge(s));
    }), t.on("PasswordRequest", (s) => {
      p(this, Js, Promise.withResolvers());
      try {
        if (!e.onPassword)
          throw ge(s);
        const i = (n) => {
          n instanceof Error ? r(this, Js).reject(n) : r(this, Js).resolve({
            password: n
          });
        };
        e.onPassword(i, s.code);
      } catch (i) {
        r(this, Js).reject(i);
      }
      return r(this, Js).promise;
    }), t.on("DataLoaded", (s) => {
      var i;
      (i = e.onProgress) == null || i.call(e, {
        loaded: s.length,
        total: s.length
      }), this.downloadInfoCapability.resolve(s);
    }), t.on("StartRenderPage", (s) => {
      if (this.destroyed)
        return;
      r(this, Cs).get(s.pageIndex)._startRenderPage(s.transparency, s.cacheKey);
    }), t.on("commonobj", ([s, i, n]) => {
      var a;
      if (this.destroyed || this.commonObjs.has(s))
        return null;
      switch (i) {
        case "Font":
          const {
            disableFontFace: o,
            fontExtraProperties: l,
            pdfBug: h
          } = this._params;
          if ("error" in n) {
            const g = n.error;
            q(`Error during font loading: ${g}`), this.commonObjs.resolve(s, g);
            break;
          }
          const c = h && ((a = globalThis.FontInspector) != null && a.enabled) ? (g, b) => globalThis.FontInspector.fontAdded(g, b) : null, u = new Tp(n, {
            disableFontFace: o,
            fontExtraProperties: l,
            inspectFont: c
          });
          this.fontLoader.bind(u).catch(() => t.sendWithPromise("FontFallback", {
            id: s
          })).finally(() => {
            !l && u.data && (u.data = null), this.commonObjs.resolve(s, u);
          });
          break;
        case "CopyLocalImage":
          const {
            imageRef: f
          } = n;
          Tt(f, "The imageRef must be defined.");
          for (const g of r(this, Cs).values())
            for (const [, b] of g.objs)
              if ((b == null ? void 0 : b.ref) === f)
                return b.dataLen ? (this.commonObjs.resolve(s, structuredClone(b)), b.dataLen) : null;
          break;
        case "FontPath":
        case "Image":
        case "Pattern":
          this.commonObjs.resolve(s, n);
          break;
        default:
          throw new Error(`Got unknown common object type ${i}`);
      }
      return null;
    }), t.on("obj", ([s, i, n, a]) => {
      var l;
      if (this.destroyed)
        return;
      const o = r(this, Cs).get(i);
      if (!o.objs.has(s)) {
        if (o._intentStates.size === 0) {
          (l = a == null ? void 0 : a.bitmap) == null || l.close();
          return;
        }
        switch (n) {
          case "Image":
            o.objs.resolve(s, a), (a == null ? void 0 : a.dataLen) > sp && (o._maybeCleanupAfterRender = !0);
            break;
          case "Pattern":
            o.objs.resolve(s, a);
            break;
          default:
            throw new Error(`Got unknown object type ${n}`);
        }
      }
    }), t.on("DocProgress", (s) => {
      var i;
      this.destroyed || (i = e.onProgress) == null || i.call(e, {
        loaded: s.loaded,
        total: s.total
      });
    }), t.on("FetchBuiltInCMap", async (s) => {
      if (this.destroyed)
        throw new Error("Worker was destroyed.");
      if (!this.cMapReaderFactory)
        throw new Error("CMapReaderFactory not initialized, see the `useWorkerFetch` parameter.");
      return this.cMapReaderFactory.fetch(s);
    }), t.on("FetchStandardFontData", async (s) => {
      if (this.destroyed)
        throw new Error("Worker was destroyed.");
      if (!this.standardFontDataFactory)
        throw new Error("StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter.");
      return this.standardFontDataFactory.fetch(s);
    });
  }
  getData() {
    return this.messageHandler.sendWithPromise("GetData", null);
  }
  saveDocument() {
    var s;
    this.annotationStorage.size <= 0 && q("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
    const {
      map: t,
      transfer: e
    } = this.annotationStorage.serializable;
    return this.messageHandler.sendWithPromise("SaveDocument", {
      isPureXfa: !!this._htmlForXfa,
      numPages: this._numPages,
      annotationStorage: t,
      filename: ((s = this._fullReader) == null ? void 0 : s.filename) ?? null
    }, e).finally(() => {
      this.annotationStorage.resetModified();
    });
  }
  getPage(t) {
    if (!Number.isInteger(t) || t <= 0 || t > this._numPages)
      return Promise.reject(new Error("Invalid page request."));
    const e = t - 1, s = r(this, Jr).get(e);
    if (s)
      return s;
    const i = this.messageHandler.sendWithPromise("GetPage", {
      pageIndex: e
    }).then((n) => {
      if (this.destroyed)
        throw new Error("Transport destroyed");
      n.refStr && r(this, ta).set(n.refStr, t);
      const a = new Cg(e, n, this, this._params.pdfBug);
      return r(this, Cs).set(e, a), a;
    });
    return r(this, Jr).set(e, i), i;
  }
  getPageIndex(t) {
    return Yd(t) ? this.messageHandler.sendWithPromise("GetPageIndex", {
      num: t.num,
      gen: t.gen
    }) : Promise.reject(new Error("Invalid pageIndex request."));
  }
  getAnnotations(t, e) {
    return this.messageHandler.sendWithPromise("GetAnnotations", {
      pageIndex: t,
      intent: e
    });
  }
  getFieldObjects() {
    return A(this, Nn, Va).call(this, "GetFieldObjects");
  }
  hasJSActions() {
    return A(this, Nn, Va).call(this, "HasJSActions");
  }
  getCalculationOrderIds() {
    return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
  }
  getDestinations() {
    return this.messageHandler.sendWithPromise("GetDestinations", null);
  }
  getDestination(t) {
    return typeof t != "string" ? Promise.reject(new Error("Invalid destination request.")) : this.messageHandler.sendWithPromise("GetDestination", {
      id: t
    });
  }
  getPageLabels() {
    return this.messageHandler.sendWithPromise("GetPageLabels", null);
  }
  getPageLayout() {
    return this.messageHandler.sendWithPromise("GetPageLayout", null);
  }
  getPageMode() {
    return this.messageHandler.sendWithPromise("GetPageMode", null);
  }
  getViewerPreferences() {
    return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
  }
  getOpenAction() {
    return this.messageHandler.sendWithPromise("GetOpenAction", null);
  }
  getAttachments() {
    return this.messageHandler.sendWithPromise("GetAttachments", null);
  }
  getDocJSActions() {
    return A(this, Nn, Va).call(this, "GetDocJSActions");
  }
  getPageJSActions(t) {
    return this.messageHandler.sendWithPromise("GetPageJSActions", {
      pageIndex: t
    });
  }
  getStructTree(t) {
    return this.messageHandler.sendWithPromise("GetStructTree", {
      pageIndex: t
    });
  }
  getOutline() {
    return this.messageHandler.sendWithPromise("GetOutline", null);
  }
  getOptionalContentConfig(t) {
    return A(this, Nn, Va).call(this, "GetOptionalContentConfig").then((e) => new Yp(e, t));
  }
  getPermissions() {
    return this.messageHandler.sendWithPromise("GetPermissions", null);
  }
  getMetadata() {
    const t = "GetMetadata", e = r(this, Zs).get(t);
    if (e)
      return e;
    const s = this.messageHandler.sendWithPromise(t, null).then((i) => {
      var n, a;
      return {
        info: i[0],
        metadata: i[1] ? new Xp(i[1]) : null,
        contentDispositionFilename: ((n = this._fullReader) == null ? void 0 : n.filename) ?? null,
        contentLength: ((a = this._fullReader) == null ? void 0 : a.contentLength) ?? null
      };
    });
    return r(this, Zs).set(t, s), s;
  }
  getMarkInfo() {
    return this.messageHandler.sendWithPromise("GetMarkInfo", null);
  }
  async startCleanup(t = !1) {
    if (!this.destroyed) {
      await this.messageHandler.sendWithPromise("Cleanup", null);
      for (const e of r(this, Cs).values())
        if (!e.cleanup())
          throw new Error(`startCleanup: Page ${e.pageNumber} is currently rendering.`);
      this.commonObjs.clear(), t || this.fontLoader.clear(), r(this, Zs).clear(), this.filterFactory.destroy(!0), to.cleanup();
    }
  }
  cachedPageNumber(t) {
    if (!Yd(t))
      return null;
    const e = t.gen === 0 ? `${t.num}R` : `${t.num}R${t.gen}`;
    return r(this, ta).get(e) ?? null;
  }
}
Zs = new WeakMap(), Cs = new WeakMap(), Jr = new WeakMap(), ta = new WeakMap(), Js = new WeakMap(), Nn = new WeakSet(), Va = function(t, e = null) {
  const s = r(this, Zs).get(t);
  if (s)
    return s;
  const i = this.messageHandler.sendWithPromise(t, e);
  return r(this, Zs).set(t, i), i;
};
const Ia = Symbol("INITIAL_DATA");
var Ce, Wo, Dc;
class ef {
  constructor() {
    m(this, Wo);
    m(this, Ce, /* @__PURE__ */ Object.create(null));
  }
  get(t, e = null) {
    if (e) {
      const i = A(this, Wo, Dc).call(this, t);
      return i.promise.then(() => e(i.data)), null;
    }
    const s = r(this, Ce)[t];
    if (!s || s.data === Ia)
      throw new Error(`Requesting object that isn't resolved yet ${t}.`);
    return s.data;
  }
  has(t) {
    const e = r(this, Ce)[t];
    return !!e && e.data !== Ia;
  }
  delete(t) {
    const e = r(this, Ce)[t];
    return !e || e.data === Ia ? !1 : (delete r(this, Ce)[t], !0);
  }
  resolve(t, e = null) {
    const s = A(this, Wo, Dc).call(this, t);
    s.data = e, s.resolve();
  }
  clear() {
    var t;
    for (const e in r(this, Ce)) {
      const {
        data: s
      } = r(this, Ce)[e];
      (t = s == null ? void 0 : s.bitmap) == null || t.close();
    }
    p(this, Ce, /* @__PURE__ */ Object.create(null));
  }
  *[Symbol.iterator]() {
    for (const t in r(this, Ce)) {
      const {
        data: e
      } = r(this, Ce)[t];
      e !== Ia && (yield [t, e]);
    }
  }
}
Ce = new WeakMap(), Wo = new WeakSet(), Dc = function(t) {
  var e;
  return (e = r(this, Ce))[t] || (e[t] = {
    ...Promise.withResolvers(),
    data: Ia
  });
};
var Fi;
class kg {
  constructor(t) {
    m(this, Fi, null);
    p(this, Fi, t), this.onContinue = null;
  }
  get promise() {
    return r(this, Fi).capability.promise;
  }
  cancel(t = 0) {
    r(this, Fi).cancel(null, t);
  }
  get separateAnnots() {
    const {
      separateAnnots: t
    } = r(this, Fi).operatorList;
    if (!t)
      return !1;
    const {
      annotationCanvasMap: e
    } = r(this, Fi);
    return t.form || t.canvas && (e == null ? void 0 : e.size) > 0;
  }
}
Fi = new WeakMap();
var Ni, On;
const nn = class nn {
  constructor({
    callback: t,
    params: e,
    objs: s,
    commonObjs: i,
    annotationCanvasMap: n,
    operatorList: a,
    pageIndex: o,
    canvasFactory: l,
    filterFactory: h,
    useRequestAnimationFrame: c = !1,
    pdfBug: u = !1,
    pageColors: f = null
  }) {
    m(this, Ni, null);
    this.callback = t, this.params = e, this.objs = s, this.commonObjs = i, this.annotationCanvasMap = n, this.operatorListIdx = null, this.operatorList = a, this._pageIndex = o, this.canvasFactory = l, this.filterFactory = h, this._pdfBug = u, this.pageColors = f, this.running = !1, this.graphicsReadyCallback = null, this.graphicsReady = !1, this._useRequestAnimationFrame = c === !0 && typeof window < "u", this.cancelled = !1, this.capability = Promise.withResolvers(), this.task = new kg(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = e.canvasContext.canvas;
  }
  get completed() {
    return this.capability.promise.catch(function() {
    });
  }
  initializeGraphics({
    transparency: t = !1,
    optionalContentConfig: e
  }) {
    var o, l;
    if (this.cancelled)
      return;
    if (this._canvas) {
      if (r(nn, On).has(this._canvas))
        throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
      r(nn, On).add(this._canvas);
    }
    this._pdfBug && ((o = globalThis.StepperManager) != null && o.enabled) && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
    const {
      canvasContext: s,
      viewport: i,
      transform: n,
      background: a
    } = this.params;
    this.gfx = new Er(s, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
      optionalContentConfig: e
    }, this.annotationCanvasMap, this.pageColors), this.gfx.beginDrawing({
      transform: n,
      viewport: i,
      transparency: t,
      background: a
    }), this.operatorListIdx = 0, this.graphicsReady = !0, (l = this.graphicsReadyCallback) == null || l.call(this);
  }
  cancel(t = null, e = 0) {
    var s;
    this.running = !1, this.cancelled = !0, (s = this.gfx) == null || s.endDrawing(), r(this, Ni) && (window.cancelAnimationFrame(r(this, Ni)), p(this, Ni, null)), r(nn, On).delete(this._canvas), this.callback(t || new md(`Rendering cancelled, page ${this._pageIndex + 1}`, e));
  }
  operatorListChanged() {
    var t;
    if (!this.graphicsReady) {
      this.graphicsReadyCallback || (this.graphicsReadyCallback = this._continueBound);
      return;
    }
    (t = this.stepper) == null || t.updateOperatorList(this.operatorList), !this.running && this._continue();
  }
  _continue() {
    this.running = !0, !this.cancelled && (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext());
  }
  _scheduleNext() {
    this._useRequestAnimationFrame ? p(this, Ni, window.requestAnimationFrame(() => {
      p(this, Ni, null), this._nextBound().catch(this._cancelBound);
    })) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
  }
  async _next() {
    this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1, this.operatorList.lastChunk && (this.gfx.endDrawing(), r(nn, On).delete(this._canvas), this.callback())));
  }
};
Ni = new WeakMap(), On = new WeakMap(), m(nn, On, /* @__PURE__ */ new WeakSet());
let Fc = nn;
const Pg = "4.10.38", Mg = "f9bea397f";
function Kd(d) {
  return Math.floor(Math.max(0, Math.min(1, d)) * 255).toString(16).padStart(2, "0");
}
function Da(d) {
  return Math.max(0, Math.min(255, 255 * d));
}
class Qd {
  static CMYK_G([t, e, s, i]) {
    return ["G", 1 - Math.min(1, 0.3 * t + 0.59 * s + 0.11 * e + i)];
  }
  static G_CMYK([t]) {
    return ["CMYK", 0, 0, 0, 1 - t];
  }
  static G_RGB([t]) {
    return ["RGB", t, t, t];
  }
  static G_rgb([t]) {
    return t = Da(t), [t, t, t];
  }
  static G_HTML([t]) {
    const e = Kd(t);
    return `#${e}${e}${e}`;
  }
  static RGB_G([t, e, s]) {
    return ["G", 0.3 * t + 0.59 * e + 0.11 * s];
  }
  static RGB_rgb(t) {
    return t.map(Da);
  }
  static RGB_HTML(t) {
    return `#${t.map(Kd).join("")}`;
  }
  static T_HTML() {
    return "#00000000";
  }
  static T_rgb() {
    return [null];
  }
  static CMYK_RGB([t, e, s, i]) {
    return ["RGB", 1 - Math.min(1, t + i), 1 - Math.min(1, s + i), 1 - Math.min(1, e + i)];
  }
  static CMYK_rgb([t, e, s, i]) {
    return [Da(1 - Math.min(1, t + i)), Da(1 - Math.min(1, s + i)), Da(1 - Math.min(1, e + i))];
  }
  static CMYK_HTML(t) {
    const e = this.CMYK_RGB(t).slice(1);
    return this.RGB_HTML(e);
  }
  static RGB_CMYK([t, e, s]) {
    const i = 1 - t, n = 1 - e, a = 1 - s, o = Math.min(i, n, a);
    return ["CMYK", i, n, a, o];
  }
}
class Rg {
  create(t, e, s = !1) {
    if (t <= 0 || e <= 0)
      throw new Error("Invalid SVG dimensions");
    const i = this._createSVG("svg:svg");
    return i.setAttribute("version", "1.1"), s || (i.setAttribute("width", `${t}px`), i.setAttribute("height", `${e}px`)), i.setAttribute("preserveAspectRatio", "none"), i.setAttribute("viewBox", `0 0 ${t} ${e}`), i;
  }
  createElement(t) {
    if (typeof t != "string")
      throw new Error("Invalid SVG element type");
    return this._createSVG(t);
  }
  _createSVG(t) {
    ct("Abstract method `_createSVG` called.");
  }
}
class _d extends Rg {
  _createSVG(t) {
    return document.createElementNS(Fs, t);
  }
}
class sf {
  static setupStorage(t, e, s, i, n) {
    const a = i.getValue(e, {
      value: null
    });
    switch (s.name) {
      case "textarea":
        if (a.value !== null && (t.textContent = a.value), n === "print")
          break;
        t.addEventListener("input", (o) => {
          i.setValue(e, {
            value: o.target.value
          });
        });
        break;
      case "input":
        if (s.attributes.type === "radio" || s.attributes.type === "checkbox") {
          if (a.value === s.attributes.xfaOn ? t.setAttribute("checked", !0) : a.value === s.attributes.xfaOff && t.removeAttribute("checked"), n === "print")
            break;
          t.addEventListener("change", (o) => {
            i.setValue(e, {
              value: o.target.checked ? o.target.getAttribute("xfaOn") : o.target.getAttribute("xfaOff")
            });
          });
        } else {
          if (a.value !== null && t.setAttribute("value", a.value), n === "print")
            break;
          t.addEventListener("input", (o) => {
            i.setValue(e, {
              value: o.target.value
            });
          });
        }
        break;
      case "select":
        if (a.value !== null) {
          t.setAttribute("value", a.value);
          for (const o of s.children)
            o.attributes.value === a.value ? o.attributes.selected = !0 : o.attributes.hasOwnProperty("selected") && delete o.attributes.selected;
        }
        t.addEventListener("input", (o) => {
          const l = o.target.options, h = l.selectedIndex === -1 ? "" : l[l.selectedIndex].value;
          i.setValue(e, {
            value: h
          });
        });
        break;
    }
  }
  static setAttributes({
    html: t,
    element: e,
    storage: s = null,
    intent: i,
    linkService: n
  }) {
    const {
      attributes: a
    } = e, o = t instanceof HTMLAnchorElement;
    a.type === "radio" && (a.name = `${a.name}-${i}`);
    for (const [l, h] of Object.entries(a))
      if (h != null)
        switch (l) {
          case "class":
            h.length && t.setAttribute(l, h.join(" "));
            break;
          case "dataId":
            break;
          case "id":
            t.setAttribute("data-element-id", h);
            break;
          case "style":
            Object.assign(t.style, h);
            break;
          case "textContent":
            t.textContent = h;
            break;
          default:
            (!o || l !== "href" && l !== "newWindow") && t.setAttribute(l, h);
        }
    o && n.addLinkAttributes(t, a.href, a.newWindow), s && a.dataId && this.setupStorage(t, a.dataId, e, s);
  }
  static render(t) {
    var u, f;
    const e = t.annotationStorage, s = t.linkService, i = t.xfaHtml, n = t.intent || "display", a = document.createElement(i.name);
    i.attributes && this.setAttributes({
      html: a,
      element: i,
      intent: n,
      linkService: s
    });
    const o = n !== "richText", l = t.div;
    if (l.append(a), t.viewport) {
      const g = `matrix(${t.viewport.transform.join(",")})`;
      l.style.transform = g;
    }
    o && l.setAttribute("class", "xfaLayer xfaFont");
    const h = [];
    if (i.children.length === 0) {
      if (i.value) {
        const g = document.createTextNode(i.value);
        a.append(g), o && eo.shouldBuildText(i.name) && h.push(g);
      }
      return {
        textDivs: h
      };
    }
    const c = [[i, -1, a]];
    for (; c.length > 0; ) {
      const [g, b, y] = c.at(-1);
      if (b + 1 === g.children.length) {
        c.pop();
        continue;
      }
      const w = g.children[++c.at(-1)[1]];
      if (w === null)
        continue;
      const {
        name: v
      } = w;
      if (v === "#text") {
        const E = document.createTextNode(w.value);
        h.push(E), y.append(E);
        continue;
      }
      const S = (u = w == null ? void 0 : w.attributes) != null && u.xmlns ? document.createElementNS(w.attributes.xmlns, v) : document.createElement(v);
      if (y.append(S), w.attributes && this.setAttributes({
        html: S,
        element: w,
        storage: e,
        intent: n,
        linkService: s
      }), ((f = w.children) == null ? void 0 : f.length) > 0)
        c.push([w, -1, S]);
      else if (w.value) {
        const E = document.createTextNode(w.value);
        o && eo.shouldBuildText(v) && h.push(E), S.append(E);
      }
    }
    for (const g of l.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea"))
      g.setAttribute("readOnly", !0);
    return {
      textDivs: h
    };
  }
  static update(t) {
    const e = `matrix(${t.viewport.transform.join(",")})`;
    t.div.style.transform = e, t.div.hidden = !1;
  }
}
const Ml = 1e3, Lg = 9, dr = /* @__PURE__ */ new WeakSet();
function qi(d) {
  return {
    width: d[2] - d[0],
    height: d[3] - d[1]
  };
}
class Ig {
  static create(t) {
    switch (t.data.annotationType) {
      case Pt.LINK:
        return new nf(t);
      case Pt.TEXT:
        return new Dg(t);
      case Pt.WIDGET:
        switch (t.data.fieldType) {
          case "Tx":
            return new Fg(t);
          case "Btn":
            return t.data.radioButton ? new of(t) : t.data.checkBox ? new Og(t) : new Bg(t);
          case "Ch":
            return new Hg(t);
          case "Sig":
            return new Ng(t);
        }
        return new fr(t);
      case Pt.POPUP:
        return new Oc(t);
      case Pt.FREETEXT:
        return new uf(t);
      case Pt.LINE:
        return new $g(t);
      case Pt.SQUARE:
        return new Gg(t);
      case Pt.CIRCLE:
        return new Ug(t);
      case Pt.POLYLINE:
        return new ff(t);
      case Pt.CARET:
        return new jg(t);
      case Pt.INK:
        return new Sd(t);
      case Pt.POLYGON:
        return new Vg(t);
      case Pt.HIGHLIGHT:
        return new pf(t);
      case Pt.UNDERLINE:
        return new Wg(t);
      case Pt.SQUIGGLY:
        return new Xg(t);
      case Pt.STRIKEOUT:
        return new qg(t);
      case Pt.STAMP:
        return new gf(t);
      case Pt.FILEATTACHMENT:
        return new Yg(t);
      default:
        return new Ct(t);
    }
  }
}
var Bn, ea, sa, Xo, Nc;
const kd = class kd {
  constructor(t, {
    isRenderable: e = !1,
    ignoreBorder: s = !1,
    createQuadrilaterals: i = !1
  } = {}) {
    m(this, Xo);
    m(this, Bn, null);
    m(this, ea, !1);
    m(this, sa, null);
    this.isRenderable = e, this.data = t.data, this.layer = t.layer, this.linkService = t.linkService, this.downloadManager = t.downloadManager, this.imageResourcesPath = t.imageResourcesPath, this.renderForms = t.renderForms, this.svgFactory = t.svgFactory, this.annotationStorage = t.annotationStorage, this.enableScripting = t.enableScripting, this.hasJSActions = t.hasJSActions, this._fieldObjects = t.fieldObjects, this.parent = t.parent, e && (this.container = this._createContainer(s)), i && this._createQuadrilaterals();
  }
  static _hasPopupData({
    titleObj: t,
    contentsObj: e,
    richText: s
  }) {
    return !!(t != null && t.str || e != null && e.str || s != null && s.str);
  }
  get _isEditable() {
    return this.data.isEditable;
  }
  get hasPopupData() {
    return kd._hasPopupData(this.data);
  }
  updateEdited(t) {
    var s;
    if (!this.container)
      return;
    r(this, Bn) || p(this, Bn, {
      rect: this.data.rect.slice(0)
    });
    const {
      rect: e
    } = t;
    e && A(this, Xo, Nc).call(this, e), (s = r(this, sa)) == null || s.popup.updateEdited(t);
  }
  resetEdited() {
    var t;
    r(this, Bn) && (A(this, Xo, Nc).call(this, r(this, Bn).rect), (t = r(this, sa)) == null || t.popup.resetEdited(), p(this, Bn, null));
  }
  _createContainer(t) {
    const {
      data: e,
      parent: {
        page: s,
        viewport: i
      }
    } = this, n = document.createElement("section");
    n.setAttribute("data-annotation-id", e.id), this instanceof fr || (n.tabIndex = Ml);
    const {
      style: a
    } = n;
    if (a.zIndex = this.parent.zIndex++, e.alternativeText && (n.title = e.alternativeText), e.noRotate && n.classList.add("norotate"), !e.rect || this instanceof Oc) {
      const {
        rotation: y
      } = e;
      return !e.hasOwnCanvas && y !== 0 && this.setRotation(y, n), n;
    }
    const {
      width: o,
      height: l
    } = qi(e.rect);
    if (!t && e.borderStyle.width > 0) {
      a.borderWidth = `${e.borderStyle.width}px`;
      const y = e.borderStyle.horizontalCornerRadius, w = e.borderStyle.verticalCornerRadius;
      if (y > 0 || w > 0) {
        const S = `calc(${y}px * var(--scale-factor)) / calc(${w}px * var(--scale-factor))`;
        a.borderRadius = S;
      } else if (this instanceof of) {
        const S = `calc(${o}px * var(--scale-factor)) / calc(${l}px * var(--scale-factor))`;
        a.borderRadius = S;
      }
      switch (e.borderStyle.style) {
        case Ra.SOLID:
          a.borderStyle = "solid";
          break;
        case Ra.DASHED:
          a.borderStyle = "dashed";
          break;
        case Ra.BEVELED:
          q("Unimplemented border style: beveled");
          break;
        case Ra.INSET:
          q("Unimplemented border style: inset");
          break;
        case Ra.UNDERLINE:
          a.borderBottomStyle = "solid";
          break;
      }
      const v = e.borderColor || null;
      v ? (p(this, ea, !0), a.borderColor = H.makeHexColor(v[0] | 0, v[1] | 0, v[2] | 0)) : a.borderWidth = 0;
    }
    const h = H.normalizeRect([e.rect[0], s.view[3] - e.rect[1] + s.view[1], e.rect[2], s.view[3] - e.rect[3] + s.view[1]]), {
      pageWidth: c,
      pageHeight: u,
      pageX: f,
      pageY: g
    } = i.rawDims;
    a.left = `${100 * (h[0] - f) / c}%`, a.top = `${100 * (h[1] - g) / u}%`;
    const {
      rotation: b
    } = e;
    return e.hasOwnCanvas || b === 0 ? (a.width = `${100 * o / c}%`, a.height = `${100 * l / u}%`) : this.setRotation(b, n), n;
  }
  setRotation(t, e = this.container) {
    if (!this.data.rect)
      return;
    const {
      pageWidth: s,
      pageHeight: i
    } = this.parent.viewport.rawDims, {
      width: n,
      height: a
    } = qi(this.data.rect);
    let o, l;
    t % 180 === 0 ? (o = 100 * n / s, l = 100 * a / i) : (o = 100 * a / s, l = 100 * n / i), e.style.width = `${o}%`, e.style.height = `${l}%`, e.setAttribute("data-main-rotation", (360 - t) % 360);
  }
  get _commonActions() {
    const t = (e, s, i) => {
      const n = i.detail[e], a = n[0], o = n.slice(1);
      i.target.style[s] = Qd[`${a}_HTML`](o), this.annotationStorage.setValue(this.data.id, {
        [s]: Qd[`${a}_rgb`](o)
      });
    };
    return Q(this, "_commonActions", {
      display: (e) => {
        const {
          display: s
        } = e.detail, i = s % 2 === 1;
        this.container.style.visibility = i ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
          noView: i,
          noPrint: s === 1 || s === 2
        });
      },
      print: (e) => {
        this.annotationStorage.setValue(this.data.id, {
          noPrint: !e.detail.print
        });
      },
      hidden: (e) => {
        const {
          hidden: s
        } = e.detail;
        this.container.style.visibility = s ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
          noPrint: s,
          noView: s
        });
      },
      focus: (e) => {
        setTimeout(() => e.target.focus({
          preventScroll: !1
        }), 0);
      },
      userName: (e) => {
        e.target.title = e.detail.userName;
      },
      readonly: (e) => {
        e.target.disabled = e.detail.readonly;
      },
      required: (e) => {
        this._setRequired(e.target, e.detail.required);
      },
      bgColor: (e) => {
        t("bgColor", "backgroundColor", e);
      },
      fillColor: (e) => {
        t("fillColor", "backgroundColor", e);
      },
      fgColor: (e) => {
        t("fgColor", "color", e);
      },
      textColor: (e) => {
        t("textColor", "color", e);
      },
      borderColor: (e) => {
        t("borderColor", "borderColor", e);
      },
      strokeColor: (e) => {
        t("strokeColor", "borderColor", e);
      },
      rotation: (e) => {
        const s = e.detail.rotation;
        this.setRotation(s), this.annotationStorage.setValue(this.data.id, {
          rotation: s
        });
      }
    });
  }
  _dispatchEventFromSandbox(t, e) {
    const s = this._commonActions;
    for (const i of Object.keys(e.detail)) {
      const n = t[i] || s[i];
      n == null || n(e);
    }
  }
  _setDefaultPropertiesFromJS(t) {
    if (!this.enableScripting)
      return;
    const e = this.annotationStorage.getRawValue(this.data.id);
    if (!e)
      return;
    const s = this._commonActions;
    for (const [i, n] of Object.entries(e)) {
      const a = s[i];
      if (a) {
        const o = {
          detail: {
            [i]: n
          },
          target: t
        };
        a(o), delete e[i];
      }
    }
  }
  _createQuadrilaterals() {
    if (!this.container)
      return;
    const {
      quadPoints: t
    } = this.data;
    if (!t)
      return;
    const [e, s, i, n] = this.data.rect.map((y) => Math.fround(y));
    if (t.length === 8) {
      const [y, w, v, S] = t.subarray(2, 6);
      if (i === y && n === w && e === v && s === S)
        return;
    }
    const {
      style: a
    } = this.container;
    let o;
    if (r(this, ea)) {
      const {
        borderColor: y,
        borderWidth: w
      } = a;
      a.borderWidth = 0, o = ["url('data:image/svg+xml;utf8,", '<svg xmlns="http://www.w3.org/2000/svg"', ' preserveAspectRatio="none" viewBox="0 0 1 1">', `<g fill="transparent" stroke="${y}" stroke-width="${w}">`], this.container.classList.add("hasBorder");
    }
    const l = i - e, h = n - s, {
      svgFactory: c
    } = this, u = c.createElement("svg");
    u.classList.add("quadrilateralsContainer"), u.setAttribute("width", 0), u.setAttribute("height", 0);
    const f = c.createElement("defs");
    u.append(f);
    const g = c.createElement("clipPath"), b = `clippath_${this.data.id}`;
    g.setAttribute("id", b), g.setAttribute("clipPathUnits", "objectBoundingBox"), f.append(g);
    for (let y = 2, w = t.length; y < w; y += 8) {
      const v = t[y], S = t[y + 1], E = t[y + 2], _ = t[y + 3], C = c.createElement("rect"), x = (E - e) / l, T = (n - S) / h, k = (v - E) / l, M = (S - _) / h;
      C.setAttribute("x", x), C.setAttribute("y", T), C.setAttribute("width", k), C.setAttribute("height", M), g.append(C), o == null || o.push(`<rect vector-effect="non-scaling-stroke" x="${x}" y="${T}" width="${k}" height="${M}"/>`);
    }
    r(this, ea) && (o.push("</g></svg>')"), a.backgroundImage = o.join("")), this.container.append(u), this.container.style.clipPath = `url(#${b})`;
  }
  _createPopup() {
    const {
      data: t
    } = this, e = p(this, sa, new Oc({
      data: {
        color: t.color,
        titleObj: t.titleObj,
        modificationDate: t.modificationDate,
        contentsObj: t.contentsObj,
        richText: t.richText,
        parentRect: t.rect,
        borderStyle: 0,
        id: `popup_${t.id}`,
        rotation: t.rotation
      },
      parent: this.parent,
      elements: [this]
    }));
    this.parent.div.append(e.render());
  }
  render() {
    ct("Abstract method `AnnotationElement.render` called");
  }
  _getElementsByName(t, e = null) {
    const s = [];
    if (this._fieldObjects) {
      const i = this._fieldObjects[t];
      if (i)
        for (const {
          page: n,
          id: a,
          exportValues: o
        } of i) {
          if (n === -1 || a === e)
            continue;
          const l = typeof o == "string" ? o : null, h = document.querySelector(`[data-element-id="${a}"]`);
          if (h && !dr.has(h)) {
            q(`_getElementsByName - element not allowed: ${a}`);
            continue;
          }
          s.push({
            id: a,
            exportValue: l,
            domElement: h
          });
        }
      return s;
    }
    for (const i of document.getElementsByName(t)) {
      const {
        exportValue: n
      } = i, a = i.getAttribute("data-element-id");
      a !== e && dr.has(i) && s.push({
        id: a,
        exportValue: n,
        domElement: i
      });
    }
    return s;
  }
  show() {
    var t;
    this.container && (this.container.hidden = !1), (t = this.popup) == null || t.maybeShow();
  }
  hide() {
    var t;
    this.container && (this.container.hidden = !0), (t = this.popup) == null || t.forceHide();
  }
  getElementsToTriggerPopup() {
    return this.container;
  }
  addHighlightArea() {
    const t = this.getElementsToTriggerPopup();
    if (Array.isArray(t))
      for (const e of t)
        e.classList.add("highlightArea");
    else
      t.classList.add("highlightArea");
  }
  _editOnDoubleClick() {
    if (!this._isEditable)
      return;
    const {
      annotationEditorType: t,
      data: {
        id: e
      }
    } = this;
    this.container.addEventListener("dblclick", () => {
      var s;
      (s = this.linkService.eventBus) == null || s.dispatch("switchannotationeditormode", {
        source: this,
        mode: t,
        editId: e
      });
    });
  }
};
Bn = new WeakMap(), ea = new WeakMap(), sa = new WeakMap(), Xo = new WeakSet(), Nc = function(t) {
  const {
    container: {
      style: e
    },
    data: {
      rect: s,
      rotation: i
    },
    parent: {
      viewport: {
        rawDims: {
          pageWidth: n,
          pageHeight: a,
          pageX: o,
          pageY: l
        }
      }
    }
  } = this;
  s == null || s.splice(0, 4, ...t);
  const {
    width: h,
    height: c
  } = qi(t);
  e.left = `${100 * (t[0] - o) / n}%`, e.top = `${100 * (a - t[3] + l) / a}%`, i === 0 ? (e.width = `${100 * h / n}%`, e.height = `${100 * c / a}%`) : this.setRotation(i);
};
let Ct = kd;
var Fe, Ji, rf, af;
class nf extends Ct {
  constructor(e, s = null) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !!(s != null && s.ignoreBorder),
      createQuadrilaterals: !0
    });
    m(this, Fe);
    this.isTooltipOnly = e.data.isTooltipOnly;
  }
  render() {
    const {
      data: e,
      linkService: s
    } = this, i = document.createElement("a");
    i.setAttribute("data-element-id", e.id);
    let n = !1;
    return e.url ? (s.addLinkAttributes(i, e.url, e.newWindow), n = !0) : e.action ? (this._bindNamedAction(i, e.action), n = !0) : e.attachment ? (A(this, Fe, rf).call(this, i, e.attachment, e.attachmentDest), n = !0) : e.setOCGState ? (A(this, Fe, af).call(this, i, e.setOCGState), n = !0) : e.dest ? (this._bindLink(i, e.dest), n = !0) : (e.actions && (e.actions.Action || e.actions["Mouse Up"] || e.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions && (this._bindJSAction(i, e), n = !0), e.resetForm ? (this._bindResetFormAction(i, e.resetForm), n = !0) : this.isTooltipOnly && !n && (this._bindLink(i, ""), n = !0)), this.container.classList.add("linkAnnotation"), n && this.container.append(i), this.container;
  }
  _bindLink(e, s) {
    e.href = this.linkService.getDestinationHash(s), e.onclick = () => (s && this.linkService.goToDestination(s), !1), (s || s === "") && A(this, Fe, Ji).call(this);
  }
  _bindNamedAction(e, s) {
    e.href = this.linkService.getAnchorUrl(""), e.onclick = () => (this.linkService.executeNamedAction(s), !1), A(this, Fe, Ji).call(this);
  }
  _bindJSAction(e, s) {
    e.href = this.linkService.getAnchorUrl("");
    const i = /* @__PURE__ */ new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
    for (const n of Object.keys(s.actions)) {
      const a = i.get(n);
      a && (e[a] = () => {
        var o;
        return (o = this.linkService.eventBus) == null || o.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: s.id,
            name: n
          }
        }), !1;
      });
    }
    e.onclick || (e.onclick = () => !1), A(this, Fe, Ji).call(this);
  }
  _bindResetFormAction(e, s) {
    const i = e.onclick;
    if (i || (e.href = this.linkService.getAnchorUrl("")), A(this, Fe, Ji).call(this), !this._fieldObjects) {
      q('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), i || (e.onclick = () => !1);
      return;
    }
    e.onclick = () => {
      var u;
      i == null || i();
      const {
        fields: n,
        refs: a,
        include: o
      } = s, l = [];
      if (n.length !== 0 || a.length !== 0) {
        const f = new Set(a);
        for (const g of n) {
          const b = this._fieldObjects[g] || [];
          for (const {
            id: y
          } of b)
            f.add(y);
        }
        for (const g of Object.values(this._fieldObjects))
          for (const b of g)
            f.has(b.id) === o && l.push(b);
      } else
        for (const f of Object.values(this._fieldObjects))
          l.push(...f);
      const h = this.annotationStorage, c = [];
      for (const f of l) {
        const {
          id: g
        } = f;
        switch (c.push(g), f.type) {
          case "text": {
            const y = f.defaultValue || "";
            h.setValue(g, {
              value: y
            });
            break;
          }
          case "checkbox":
          case "radiobutton": {
            const y = f.defaultValue === f.exportValues;
            h.setValue(g, {
              value: y
            });
            break;
          }
          case "combobox":
          case "listbox": {
            const y = f.defaultValue || "";
            h.setValue(g, {
              value: y
            });
            break;
          }
          default:
            continue;
        }
        const b = document.querySelector(`[data-element-id="${g}"]`);
        if (b) {
          if (!dr.has(b)) {
            q(`_bindResetFormAction - element not allowed: ${g}`);
            continue;
          }
        } else continue;
        b.dispatchEvent(new Event("resetform"));
      }
      return this.enableScripting && ((u = this.linkService.eventBus) == null || u.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: "app",
          ids: c,
          name: "ResetForm"
        }
      })), !1;
    };
  }
}
Fe = new WeakSet(), Ji = function() {
  this.container.setAttribute("data-internal-link", "");
}, rf = function(e, s, i = null) {
  e.href = this.linkService.getAnchorUrl(""), s.description && (e.title = s.description), e.onclick = () => {
    var n;
    return (n = this.downloadManager) == null || n.openOrDownloadData(s.content, s.filename, i), !1;
  }, A(this, Fe, Ji).call(this);
}, af = function(e, s) {
  e.href = this.linkService.getAnchorUrl(""), e.onclick = () => (this.linkService.executeSetOCGState(s), !1), A(this, Fe, Ji).call(this);
};
class Dg extends Ct {
  constructor(t) {
    super(t, {
      isRenderable: !0
    });
  }
  render() {
    this.container.classList.add("textAnnotation");
    const t = document.createElement("img");
    return t.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg", t.setAttribute("data-l10n-id", "pdfjs-text-annotation-type"), t.setAttribute("data-l10n-args", JSON.stringify({
      type: this.data.name
    })), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.append(t), this.container;
  }
}
class fr extends Ct {
  render() {
    return this.container;
  }
  showElementAndHideCanvas(t) {
    var e;
    this.data.hasOwnCanvas && (((e = t.previousSibling) == null ? void 0 : e.nodeName) === "CANVAS" && (t.previousSibling.hidden = !0), t.hidden = !1);
  }
  _getKeyModifier(t) {
    return ce.platform.isMac ? t.metaKey : t.ctrlKey;
  }
  _setEventListener(t, e, s, i, n) {
    s.includes("mouse") ? t.addEventListener(s, (a) => {
      var o;
      (o = this.linkService.eventBus) == null || o.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: this.data.id,
          name: i,
          value: n(a),
          shift: a.shiftKey,
          modifier: this._getKeyModifier(a)
        }
      });
    }) : t.addEventListener(s, (a) => {
      var o;
      if (s === "blur") {
        if (!e.focused || !a.relatedTarget)
          return;
        e.focused = !1;
      } else if (s === "focus") {
        if (e.focused)
          return;
        e.focused = !0;
      }
      n && ((o = this.linkService.eventBus) == null || o.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: this.data.id,
          name: i,
          value: n(a)
        }
      }));
    });
  }
  _setEventListeners(t, e, s, i) {
    var n, a, o;
    for (const [l, h] of s)
      (h === "Action" || (n = this.data.actions) != null && n[h]) && ((h === "Focus" || h === "Blur") && (e || (e = {
        focused: !1
      })), this._setEventListener(t, e, l, h, i), h === "Focus" && !((a = this.data.actions) != null && a.Blur) ? this._setEventListener(t, e, "blur", "Blur", null) : h === "Blur" && !((o = this.data.actions) != null && o.Focus) && this._setEventListener(t, e, "focus", "Focus", null));
  }
  _setBackgroundColor(t) {
    const e = this.data.backgroundColor || null;
    t.style.backgroundColor = e === null ? "transparent" : H.makeHexColor(e[0], e[1], e[2]);
  }
  _setTextStyle(t) {
    const e = ["left", "center", "right"], {
      fontColor: s
    } = this.data.defaultAppearanceData, i = this.data.defaultAppearanceData.fontSize || Lg, n = t.style;
    let a;
    const o = 2, l = (h) => Math.round(10 * h) / 10;
    if (this.data.multiLine) {
      const h = Math.abs(this.data.rect[3] - this.data.rect[1] - o), c = Math.round(h / (Xh * i)) || 1, u = h / c;
      a = Math.min(i, l(u / Xh));
    } else {
      const h = Math.abs(this.data.rect[3] - this.data.rect[1] - o);
      a = Math.min(i, l(h / Xh));
    }
    n.fontSize = `calc(${a}px * var(--scale-factor))`, n.color = H.makeHexColor(s[0], s[1], s[2]), this.data.textAlignment !== null && (n.textAlign = e[this.data.textAlignment]);
  }
  _setRequired(t, e) {
    e ? t.setAttribute("required", !0) : t.removeAttribute("required"), t.setAttribute("aria-required", e);
  }
}
class Fg extends fr {
  constructor(t) {
    const e = t.renderForms || t.data.hasOwnCanvas || !t.data.hasAppearance && !!t.data.fieldValue;
    super(t, {
      isRenderable: e
    });
  }
  setPropertyOnSiblings(t, e, s, i) {
    const n = this.annotationStorage;
    for (const a of this._getElementsByName(t.name, t.id))
      a.domElement && (a.domElement[e] = s), n.setValue(a.id, {
        [i]: s
      });
  }
  render() {
    var i, n;
    const t = this.annotationStorage, e = this.data.id;
    this.container.classList.add("textWidgetAnnotation");
    let s = null;
    if (this.renderForms) {
      const a = t.getValue(e, {
        value: this.data.fieldValue
      });
      let o = a.value || "";
      const l = t.getValue(e, {
        charLimit: this.data.maxLen
      }).charLimit;
      l && o.length > l && (o = o.slice(0, l));
      let h = a.formattedValue || ((i = this.data.textContent) == null ? void 0 : i.join(`
`)) || null;
      h && this.data.comb && (h = h.replaceAll(/\s+/g, ""));
      const c = {
        userValue: o,
        formattedValue: h,
        lastCommittedValue: null,
        commitKey: 1,
        focused: !1
      };
      this.data.multiLine ? (s = document.createElement("textarea"), s.textContent = h ?? o, this.data.doNotScroll && (s.style.overflowY = "hidden")) : (s = document.createElement("input"), s.type = "text", s.setAttribute("value", h ?? o), this.data.doNotScroll && (s.style.overflowX = "hidden")), this.data.hasOwnCanvas && (s.hidden = !0), dr.add(s), s.setAttribute("data-element-id", e), s.disabled = this.data.readOnly, s.name = this.data.fieldName, s.tabIndex = Ml, this._setRequired(s, this.data.required), l && (s.maxLength = l), s.addEventListener("input", (f) => {
        t.setValue(e, {
          value: f.target.value
        }), this.setPropertyOnSiblings(s, "value", f.target.value, "value"), c.formattedValue = null;
      }), s.addEventListener("resetform", (f) => {
        const g = this.data.defaultFieldValue ?? "";
        s.value = c.userValue = g, c.formattedValue = null;
      });
      let u = (f) => {
        const {
          formattedValue: g
        } = c;
        g != null && (f.target.value = g), f.target.scrollLeft = 0;
      };
      if (this.enableScripting && this.hasJSActions) {
        s.addEventListener("focus", (g) => {
          var y;
          if (c.focused)
            return;
          const {
            target: b
          } = g;
          c.userValue && (b.value = c.userValue), c.lastCommittedValue = b.value, c.commitKey = 1, (y = this.data.actions) != null && y.Focus || (c.focused = !0);
        }), s.addEventListener("updatefromsandbox", (g) => {
          this.showElementAndHideCanvas(g.target);
          const b = {
            value(y) {
              c.userValue = y.detail.value ?? "", t.setValue(e, {
                value: c.userValue.toString()
              }), y.target.value = c.userValue;
            },
            formattedValue(y) {
              const {
                formattedValue: w
              } = y.detail;
              c.formattedValue = w, w != null && y.target !== document.activeElement && (y.target.value = w), t.setValue(e, {
                formattedValue: w
              });
            },
            selRange(y) {
              y.target.setSelectionRange(...y.detail.selRange);
            },
            charLimit: (y) => {
              var E;
              const {
                charLimit: w
              } = y.detail, {
                target: v
              } = y;
              if (w === 0) {
                v.removeAttribute("maxLength");
                return;
              }
              v.setAttribute("maxLength", w);
              let S = c.userValue;
              !S || S.length <= w || (S = S.slice(0, w), v.value = c.userValue = S, t.setValue(e, {
                value: S
              }), (E = this.linkService.eventBus) == null || E.dispatch("dispatcheventinsandbox", {
                source: this,
                detail: {
                  id: e,
                  name: "Keystroke",
                  value: S,
                  willCommit: !0,
                  commitKey: 1,
                  selStart: v.selectionStart,
                  selEnd: v.selectionEnd
                }
              }));
            }
          };
          this._dispatchEventFromSandbox(b, g);
        }), s.addEventListener("keydown", (g) => {
          var w;
          c.commitKey = 1;
          let b = -1;
          if (g.key === "Escape" ? b = 0 : g.key === "Enter" && !this.data.multiLine ? b = 2 : g.key === "Tab" && (c.commitKey = 3), b === -1)
            return;
          const {
            value: y
          } = g.target;
          c.lastCommittedValue !== y && (c.lastCommittedValue = y, c.userValue = y, (w = this.linkService.eventBus) == null || w.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: y,
              willCommit: !0,
              commitKey: b,
              selStart: g.target.selectionStart,
              selEnd: g.target.selectionEnd
            }
          }));
        });
        const f = u;
        u = null, s.addEventListener("blur", (g) => {
          var y, w;
          if (!c.focused || !g.relatedTarget)
            return;
          (y = this.data.actions) != null && y.Blur || (c.focused = !1);
          const {
            value: b
          } = g.target;
          c.userValue = b, c.lastCommittedValue !== b && ((w = this.linkService.eventBus) == null || w.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: b,
              willCommit: !0,
              commitKey: c.commitKey,
              selStart: g.target.selectionStart,
              selEnd: g.target.selectionEnd
            }
          })), f(g);
        }), (n = this.data.actions) != null && n.Keystroke && s.addEventListener("beforeinput", (g) => {
          var C;
          c.lastCommittedValue = null;
          const {
            data: b,
            target: y
          } = g, {
            value: w,
            selectionStart: v,
            selectionEnd: S
          } = y;
          let E = v, _ = S;
          switch (g.inputType) {
            case "deleteWordBackward": {
              const x = w.substring(0, v).match(/\w*[^\w]*$/);
              x && (E -= x[0].length);
              break;
            }
            case "deleteWordForward": {
              const x = w.substring(v).match(/^[^\w]*\w*/);
              x && (_ += x[0].length);
              break;
            }
            case "deleteContentBackward":
              v === S && (E -= 1);
              break;
            case "deleteContentForward":
              v === S && (_ += 1);
              break;
          }
          g.preventDefault(), (C = this.linkService.eventBus) == null || C.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: w,
              change: b || "",
              willCommit: !1,
              selStart: E,
              selEnd: _
            }
          });
        }), this._setEventListeners(s, c, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (g) => g.target.value);
      }
      if (u && s.addEventListener("blur", u), this.data.comb) {
        const g = (this.data.rect[2] - this.data.rect[0]) / l;
        s.classList.add("comb"), s.style.letterSpacing = `calc(${g}px * var(--scale-factor) - 1ch)`;
      }
    } else
      s = document.createElement("div"), s.textContent = this.data.fieldValue, s.style.verticalAlign = "middle", s.style.display = "table-cell", this.data.hasOwnCanvas && (s.hidden = !0);
    return this._setTextStyle(s), this._setBackgroundColor(s), this._setDefaultPropertiesFromJS(s), this.container.append(s), this.container;
  }
}
class Ng extends fr {
  constructor(t) {
    super(t, {
      isRenderable: !!t.data.hasOwnCanvas
    });
  }
}
class Og extends fr {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms
    });
  }
  render() {
    const t = this.annotationStorage, e = this.data, s = e.id;
    let i = t.getValue(s, {
      value: e.exportValue === e.fieldValue
    }).value;
    typeof i == "string" && (i = i !== "Off", t.setValue(s, {
      value: i
    })), this.container.classList.add("buttonWidgetAnnotation", "checkBox");
    const n = document.createElement("input");
    return dr.add(n), n.setAttribute("data-element-id", s), n.disabled = e.readOnly, this._setRequired(n, this.data.required), n.type = "checkbox", n.name = e.fieldName, i && n.setAttribute("checked", !0), n.setAttribute("exportValue", e.exportValue), n.tabIndex = Ml, n.addEventListener("change", (a) => {
      const {
        name: o,
        checked: l
      } = a.target;
      for (const h of this._getElementsByName(o, s)) {
        const c = l && h.exportValue === e.exportValue;
        h.domElement && (h.domElement.checked = c), t.setValue(h.id, {
          value: c
        });
      }
      t.setValue(s, {
        value: l
      });
    }), n.addEventListener("resetform", (a) => {
      const o = e.defaultFieldValue || "Off";
      a.target.checked = o === e.exportValue;
    }), this.enableScripting && this.hasJSActions && (n.addEventListener("updatefromsandbox", (a) => {
      const o = {
        value(l) {
          l.target.checked = l.detail.value !== "Off", t.setValue(s, {
            value: l.target.checked
          });
        }
      };
      this._dispatchEventFromSandbox(o, a);
    }), this._setEventListeners(n, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (a) => a.target.checked)), this._setBackgroundColor(n), this._setDefaultPropertiesFromJS(n), this.container.append(n), this.container;
  }
}
class of extends fr {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms
    });
  }
  render() {
    this.container.classList.add("buttonWidgetAnnotation", "radioButton");
    const t = this.annotationStorage, e = this.data, s = e.id;
    let i = t.getValue(s, {
      value: e.fieldValue === e.buttonValue
    }).value;
    if (typeof i == "string" && (i = i !== e.buttonValue, t.setValue(s, {
      value: i
    })), i)
      for (const a of this._getElementsByName(e.fieldName, s))
        t.setValue(a.id, {
          value: !1
        });
    const n = document.createElement("input");
    if (dr.add(n), n.setAttribute("data-element-id", s), n.disabled = e.readOnly, this._setRequired(n, this.data.required), n.type = "radio", n.name = e.fieldName, i && n.setAttribute("checked", !0), n.tabIndex = Ml, n.addEventListener("change", (a) => {
      const {
        name: o,
        checked: l
      } = a.target;
      for (const h of this._getElementsByName(o, s))
        t.setValue(h.id, {
          value: !1
        });
      t.setValue(s, {
        value: l
      });
    }), n.addEventListener("resetform", (a) => {
      const o = e.defaultFieldValue;
      a.target.checked = o != null && o === e.buttonValue;
    }), this.enableScripting && this.hasJSActions) {
      const a = e.buttonValue;
      n.addEventListener("updatefromsandbox", (o) => {
        const l = {
          value: (h) => {
            const c = a === h.detail.value;
            for (const u of this._getElementsByName(h.target.name)) {
              const f = c && u.id === s;
              u.domElement && (u.domElement.checked = f), t.setValue(u.id, {
                value: f
              });
            }
          }
        };
        this._dispatchEventFromSandbox(l, o);
      }), this._setEventListeners(n, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (o) => o.target.checked);
    }
    return this._setBackgroundColor(n), this._setDefaultPropertiesFromJS(n), this.container.append(n), this.container;
  }
}
class Bg extends nf {
  constructor(t) {
    super(t, {
      ignoreBorder: t.data.hasAppearance
    });
  }
  render() {
    const t = super.render();
    t.classList.add("buttonWidgetAnnotation", "pushButton");
    const e = t.lastChild;
    return this.enableScripting && this.hasJSActions && e && (this._setDefaultPropertiesFromJS(e), e.addEventListener("updatefromsandbox", (s) => {
      this._dispatchEventFromSandbox({}, s);
    })), t;
  }
}
class Hg extends fr {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms
    });
  }
  render() {
    this.container.classList.add("choiceWidgetAnnotation");
    const t = this.annotationStorage, e = this.data.id, s = t.getValue(e, {
      value: this.data.fieldValue
    }), i = document.createElement("select");
    dr.add(i), i.setAttribute("data-element-id", e), i.disabled = this.data.readOnly, this._setRequired(i, this.data.required), i.name = this.data.fieldName, i.tabIndex = Ml;
    let n = this.data.combo && this.data.options.length > 0;
    this.data.combo || (i.size = this.data.options.length, this.data.multiSelect && (i.multiple = !0)), i.addEventListener("resetform", (c) => {
      const u = this.data.defaultFieldValue;
      for (const f of i.options)
        f.selected = f.value === u;
    });
    for (const c of this.data.options) {
      const u = document.createElement("option");
      u.textContent = c.displayValue, u.value = c.exportValue, s.value.includes(c.exportValue) && (u.setAttribute("selected", !0), n = !1), i.append(u);
    }
    let a = null;
    if (n) {
      const c = document.createElement("option");
      c.value = " ", c.setAttribute("hidden", !0), c.setAttribute("selected", !0), i.prepend(c), a = () => {
        c.remove(), i.removeEventListener("input", a), a = null;
      }, i.addEventListener("input", a);
    }
    const o = (c) => {
      const u = c ? "value" : "textContent", {
        options: f,
        multiple: g
      } = i;
      return g ? Array.prototype.filter.call(f, (b) => b.selected).map((b) => b[u]) : f.selectedIndex === -1 ? null : f[f.selectedIndex][u];
    };
    let l = o(!1);
    const h = (c) => {
      const u = c.target.options;
      return Array.prototype.map.call(u, (f) => ({
        displayValue: f.textContent,
        exportValue: f.value
      }));
    };
    return this.enableScripting && this.hasJSActions ? (i.addEventListener("updatefromsandbox", (c) => {
      const u = {
        value(f) {
          a == null || a();
          const g = f.detail.value, b = new Set(Array.isArray(g) ? g : [g]);
          for (const y of i.options)
            y.selected = b.has(y.value);
          t.setValue(e, {
            value: o(!0)
          }), l = o(!1);
        },
        multipleSelection(f) {
          i.multiple = !0;
        },
        remove(f) {
          const g = i.options, b = f.detail.remove;
          g[b].selected = !1, i.remove(b), g.length > 0 && Array.prototype.findIndex.call(g, (w) => w.selected) === -1 && (g[0].selected = !0), t.setValue(e, {
            value: o(!0),
            items: h(f)
          }), l = o(!1);
        },
        clear(f) {
          for (; i.length !== 0; )
            i.remove(0);
          t.setValue(e, {
            value: null,
            items: []
          }), l = o(!1);
        },
        insert(f) {
          const {
            index: g,
            displayValue: b,
            exportValue: y
          } = f.detail.insert, w = i.children[g], v = document.createElement("option");
          v.textContent = b, v.value = y, w ? w.before(v) : i.append(v), t.setValue(e, {
            value: o(!0),
            items: h(f)
          }), l = o(!1);
        },
        items(f) {
          const {
            items: g
          } = f.detail;
          for (; i.length !== 0; )
            i.remove(0);
          for (const b of g) {
            const {
              displayValue: y,
              exportValue: w
            } = b, v = document.createElement("option");
            v.textContent = y, v.value = w, i.append(v);
          }
          i.options.length > 0 && (i.options[0].selected = !0), t.setValue(e, {
            value: o(!0),
            items: h(f)
          }), l = o(!1);
        },
        indices(f) {
          const g = new Set(f.detail.indices);
          for (const b of f.target.options)
            b.selected = g.has(b.index);
          t.setValue(e, {
            value: o(!0)
          }), l = o(!1);
        },
        editable(f) {
          f.target.disabled = !f.detail.editable;
        }
      };
      this._dispatchEventFromSandbox(u, c);
    }), i.addEventListener("input", (c) => {
      var g;
      const u = o(!0), f = o(!1);
      t.setValue(e, {
        value: u
      }), c.preventDefault(), (g = this.linkService.eventBus) == null || g.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: e,
          name: "Keystroke",
          value: l,
          change: f,
          changeEx: u,
          willCommit: !1,
          commitKey: 1,
          keyDown: !1
        }
      });
    }), this._setEventListeners(i, null, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"], ["input", "Validate"]], (c) => c.target.value)) : i.addEventListener("input", function(c) {
      t.setValue(e, {
        value: o(!0)
      });
    }), this.data.combo && this._setTextStyle(i), this._setBackgroundColor(i), this._setDefaultPropertiesFromJS(i), this.container.append(i), this.container;
  }
}
class Oc extends Ct {
  constructor(t) {
    const {
      data: e,
      elements: s
    } = t;
    super(t, {
      isRenderable: Ct._hasPopupData(e)
    }), this.elements = s, this.popup = null;
  }
  render() {
    this.container.classList.add("popupAnnotation");
    const t = this.popup = new zg({
      container: this.container,
      color: this.data.color,
      titleObj: this.data.titleObj,
      modificationDate: this.data.modificationDate,
      contentsObj: this.data.contentsObj,
      richText: this.data.richText,
      rect: this.data.rect,
      parentRect: this.data.parentRect || null,
      parent: this.parent,
      elements: this.elements,
      open: this.data.open
    }), e = [];
    for (const s of this.elements)
      s.popup = t, s.container.ariaHasPopup = "dialog", e.push(s.data.id), s.addHighlightArea();
    return this.container.setAttribute("aria-controls", e.map((s) => `${gd}${s}`).join(",")), this.container;
  }
}
var ia, Rh, Lh, na, Hn, _t, ti, ra, qo, Yo, aa, ei, es, si, Ko, ii, Qo, zn, $n, ht, Kl, Bc, lf, hf, cf, df, Ql, Zl, Hc;
class zg {
  constructor({
    container: t,
    color: e,
    elements: s,
    titleObj: i,
    modificationDate: n,
    contentsObj: a,
    richText: o,
    parent: l,
    rect: h,
    parentRect: c,
    open: u
  }) {
    m(this, ht);
    m(this, ia, A(this, ht, cf).bind(this));
    m(this, Rh, A(this, ht, Hc).bind(this));
    m(this, Lh, A(this, ht, Zl).bind(this));
    m(this, na, A(this, ht, Ql).bind(this));
    m(this, Hn, null);
    m(this, _t, null);
    m(this, ti, null);
    m(this, ra, null);
    m(this, qo, null);
    m(this, Yo, null);
    m(this, aa, null);
    m(this, ei, !1);
    m(this, es, null);
    m(this, si, null);
    m(this, Ko, null);
    m(this, ii, null);
    m(this, Qo, null);
    m(this, zn, null);
    m(this, $n, !1);
    var f;
    p(this, _t, t), p(this, Qo, i), p(this, ti, a), p(this, ii, o), p(this, Yo, l), p(this, Hn, e), p(this, Ko, h), p(this, aa, c), p(this, qo, s), p(this, ra, Ad.toDateObject(n)), this.trigger = s.flatMap((g) => g.getElementsToTriggerPopup());
    for (const g of this.trigger)
      g.addEventListener("click", r(this, na)), g.addEventListener("mouseenter", r(this, Lh)), g.addEventListener("mouseleave", r(this, Rh)), g.classList.add("popupTriggerArea");
    for (const g of s)
      (f = g.container) == null || f.addEventListener("keydown", r(this, ia));
    r(this, _t).hidden = !0, u && A(this, ht, Ql).call(this);
  }
  render() {
    if (r(this, es))
      return;
    const t = p(this, es, document.createElement("div"));
    if (t.className = "popup", r(this, Hn)) {
      const n = t.style.outlineColor = H.makeHexColor(...r(this, Hn));
      CSS.supports("background-color", "color-mix(in srgb, red 30%, white)") ? t.style.backgroundColor = `color-mix(in srgb, ${n} 30%, white)` : t.style.backgroundColor = H.makeHexColor(...r(this, Hn).map((o) => Math.floor(0.7 * (255 - o) + o)));
    }
    const e = document.createElement("span");
    e.className = "header";
    const s = document.createElement("h1");
    if (e.append(s), {
      dir: s.dir,
      str: s.textContent
    } = r(this, Qo), t.append(e), r(this, ra)) {
      const n = document.createElement("span");
      n.classList.add("popupDate"), n.setAttribute("data-l10n-id", "pdfjs-annotation-date-time-string"), n.setAttribute("data-l10n-args", JSON.stringify({
        dateObj: r(this, ra).valueOf()
      })), e.append(n);
    }
    const i = r(this, ht, Kl);
    if (i)
      sf.render({
        xfaHtml: i,
        intent: "richText",
        div: t
      }), t.lastChild.classList.add("richText", "popupContent");
    else {
      const n = this._formatContents(r(this, ti));
      t.append(n);
    }
    r(this, _t).append(t);
  }
  _formatContents({
    str: t,
    dir: e
  }) {
    const s = document.createElement("p");
    s.classList.add("popupContent"), s.dir = e;
    const i = t.split(/(?:\r\n?|\n)/);
    for (let n = 0, a = i.length; n < a; ++n) {
      const o = i[n];
      s.append(document.createTextNode(o)), n < a - 1 && s.append(document.createElement("br"));
    }
    return s;
  }
  updateEdited({
    rect: t,
    popupContent: e
  }) {
    var s;
    r(this, zn) || p(this, zn, {
      contentsObj: r(this, ti),
      richText: r(this, ii)
    }), t && p(this, si, null), e && (p(this, ii, A(this, ht, hf).call(this, e)), p(this, ti, null)), (s = r(this, es)) == null || s.remove(), p(this, es, null);
  }
  resetEdited() {
    var t;
    r(this, zn) && ({
      contentsObj: ne(this, ti)._,
      richText: ne(this, ii)._
    } = r(this, zn), p(this, zn, null), (t = r(this, es)) == null || t.remove(), p(this, es, null), p(this, si, null));
  }
  forceHide() {
    p(this, $n, this.isVisible), r(this, $n) && (r(this, _t).hidden = !0);
  }
  maybeShow() {
    r(this, $n) && (r(this, es) || A(this, ht, Zl).call(this), p(this, $n, !1), r(this, _t).hidden = !1);
  }
  get isVisible() {
    return r(this, _t).hidden === !1;
  }
}
ia = new WeakMap(), Rh = new WeakMap(), Lh = new WeakMap(), na = new WeakMap(), Hn = new WeakMap(), _t = new WeakMap(), ti = new WeakMap(), ra = new WeakMap(), qo = new WeakMap(), Yo = new WeakMap(), aa = new WeakMap(), ei = new WeakMap(), es = new WeakMap(), si = new WeakMap(), Ko = new WeakMap(), ii = new WeakMap(), Qo = new WeakMap(), zn = new WeakMap(), $n = new WeakMap(), ht = new WeakSet(), Kl = function() {
  const t = r(this, ii), e = r(this, ti);
  return t != null && t.str && (!(e != null && e.str) || e.str === t.str) && r(this, ii).html || null;
}, Bc = function() {
  var t, e, s;
  return ((s = (e = (t = r(this, ht, Kl)) == null ? void 0 : t.attributes) == null ? void 0 : e.style) == null ? void 0 : s.fontSize) || 0;
}, lf = function() {
  var t, e, s;
  return ((s = (e = (t = r(this, ht, Kl)) == null ? void 0 : t.attributes) == null ? void 0 : e.style) == null ? void 0 : s.color) || null;
}, hf = function(t) {
  const e = [], s = {
    str: t,
    html: {
      name: "div",
      attributes: {
        dir: "auto"
      },
      children: [{
        name: "p",
        children: e
      }]
    }
  }, i = {
    style: {
      color: r(this, ht, lf),
      fontSize: r(this, ht, Bc) ? `calc(${r(this, ht, Bc)}px * var(--scale-factor))` : ""
    }
  };
  for (const n of t.split(`
`))
    e.push({
      name: "span",
      value: n,
      attributes: i
    });
  return s;
}, cf = function(t) {
  t.altKey || t.shiftKey || t.ctrlKey || t.metaKey || (t.key === "Enter" || t.key === "Escape" && r(this, ei)) && A(this, ht, Ql).call(this);
}, df = function() {
  if (r(this, si) !== null)
    return;
  const {
    page: {
      view: t
    },
    viewport: {
      rawDims: {
        pageWidth: e,
        pageHeight: s,
        pageX: i,
        pageY: n
      }
    }
  } = r(this, Yo);
  let a = !!r(this, aa), o = a ? r(this, aa) : r(this, Ko);
  for (const b of r(this, qo))
    if (!o || H.intersect(b.data.rect, o) !== null) {
      o = b.data.rect, a = !0;
      break;
    }
  const l = H.normalizeRect([o[0], t[3] - o[1] + t[1], o[2], t[3] - o[3] + t[1]]), c = a ? o[2] - o[0] + 5 : 0, u = l[0] + c, f = l[1];
  p(this, si, [100 * (u - i) / e, 100 * (f - n) / s]);
  const {
    style: g
  } = r(this, _t);
  g.left = `${r(this, si)[0]}%`, g.top = `${r(this, si)[1]}%`;
}, Ql = function() {
  p(this, ei, !r(this, ei)), r(this, ei) ? (A(this, ht, Zl).call(this), r(this, _t).addEventListener("click", r(this, na)), r(this, _t).addEventListener("keydown", r(this, ia))) : (A(this, ht, Hc).call(this), r(this, _t).removeEventListener("click", r(this, na)), r(this, _t).removeEventListener("keydown", r(this, ia)));
}, Zl = function() {
  r(this, es) || this.render(), this.isVisible ? r(this, ei) && r(this, _t).classList.add("focused") : (A(this, ht, df).call(this), r(this, _t).hidden = !1, r(this, _t).style.zIndex = parseInt(r(this, _t).style.zIndex) + 1e3);
}, Hc = function() {
  r(this, _t).classList.remove("focused"), !(r(this, ei) || !this.isVisible) && (r(this, _t).hidden = !0, r(this, _t).style.zIndex = parseInt(r(this, _t).style.zIndex) - 1e3);
};
class uf extends Ct {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    }), this.textContent = t.data.textContent, this.textPosition = t.data.textPosition, this.annotationEditorType = X.FREETEXT;
  }
  render() {
    if (this.container.classList.add("freeTextAnnotation"), this.textContent) {
      const t = document.createElement("div");
      t.classList.add("annotationTextContent"), t.setAttribute("role", "comment");
      for (const e of this.textContent) {
        const s = document.createElement("span");
        s.textContent = e, t.append(s);
      }
      this.container.append(t);
    }
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container;
  }
}
var Zo;
class $g extends Ct {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    m(this, Zo, null);
  }
  render() {
    this.container.classList.add("lineAnnotation");
    const e = this.data, {
      width: s,
      height: i
    } = qi(e.rect), n = this.svgFactory.create(s, i, !0), a = p(this, Zo, this.svgFactory.createElement("svg:line"));
    return a.setAttribute("x1", e.rect[2] - e.lineCoordinates[0]), a.setAttribute("y1", e.rect[3] - e.lineCoordinates[1]), a.setAttribute("x2", e.rect[2] - e.lineCoordinates[2]), a.setAttribute("y2", e.rect[3] - e.lineCoordinates[3]), a.setAttribute("stroke-width", e.borderStyle.width || 1), a.setAttribute("stroke", "transparent"), a.setAttribute("fill", "transparent"), n.append(a), this.container.append(n), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return r(this, Zo);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
Zo = new WeakMap();
var Jo;
class Gg extends Ct {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    m(this, Jo, null);
  }
  render() {
    this.container.classList.add("squareAnnotation");
    const e = this.data, {
      width: s,
      height: i
    } = qi(e.rect), n = this.svgFactory.create(s, i, !0), a = e.borderStyle.width, o = p(this, Jo, this.svgFactory.createElement("svg:rect"));
    return o.setAttribute("x", a / 2), o.setAttribute("y", a / 2), o.setAttribute("width", s - a), o.setAttribute("height", i - a), o.setAttribute("stroke-width", a || 1), o.setAttribute("stroke", "transparent"), o.setAttribute("fill", "transparent"), n.append(o), this.container.append(n), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return r(this, Jo);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
Jo = new WeakMap();
var tl;
class Ug extends Ct {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    m(this, tl, null);
  }
  render() {
    this.container.classList.add("circleAnnotation");
    const e = this.data, {
      width: s,
      height: i
    } = qi(e.rect), n = this.svgFactory.create(s, i, !0), a = e.borderStyle.width, o = p(this, tl, this.svgFactory.createElement("svg:ellipse"));
    return o.setAttribute("cx", s / 2), o.setAttribute("cy", i / 2), o.setAttribute("rx", s / 2 - a / 2), o.setAttribute("ry", i / 2 - a / 2), o.setAttribute("stroke-width", a || 1), o.setAttribute("stroke", "transparent"), o.setAttribute("fill", "transparent"), n.append(o), this.container.append(n), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return r(this, tl);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
tl = new WeakMap();
var el;
class ff extends Ct {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    m(this, el, null);
    this.containerClassName = "polylineAnnotation", this.svgElementName = "svg:polyline";
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const {
      data: {
        rect: e,
        vertices: s,
        borderStyle: i,
        popupRef: n
      }
    } = this;
    if (!s)
      return this.container;
    const {
      width: a,
      height: o
    } = qi(e), l = this.svgFactory.create(a, o, !0);
    let h = [];
    for (let u = 0, f = s.length; u < f; u += 2) {
      const g = s[u] - e[0], b = e[3] - s[u + 1];
      h.push(`${g},${b}`);
    }
    h = h.join(" ");
    const c = p(this, el, this.svgFactory.createElement(this.svgElementName));
    return c.setAttribute("points", h), c.setAttribute("stroke-width", i.width || 1), c.setAttribute("stroke", "transparent"), c.setAttribute("fill", "transparent"), l.append(c), this.container.append(l), !n && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return r(this, el);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
el = new WeakMap();
class Vg extends ff {
  constructor(t) {
    super(t), this.containerClassName = "polygonAnnotation", this.svgElementName = "svg:polygon";
  }
}
class jg extends Ct {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    });
  }
  render() {
    return this.container.classList.add("caretAnnotation"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
}
var sl, Gn, il, zc;
class Sd extends Ct {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    m(this, il);
    m(this, sl, null);
    m(this, Gn, []);
    this.containerClassName = "inkAnnotation", this.svgElementName = "svg:polyline", this.annotationEditorType = this.data.it === "InkHighlight" ? X.HIGHLIGHT : X.INK;
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const {
      data: {
        rect: e,
        rotation: s,
        inkLists: i,
        borderStyle: n,
        popupRef: a
      }
    } = this, {
      transform: o,
      width: l,
      height: h
    } = A(this, il, zc).call(this, s, e), c = this.svgFactory.create(l, h, !0), u = p(this, sl, this.svgFactory.createElement("svg:g"));
    c.append(u), u.setAttribute("stroke-width", n.width || 1), u.setAttribute("stroke-linecap", "round"), u.setAttribute("stroke-linejoin", "round"), u.setAttribute("stroke-miterlimit", 10), u.setAttribute("stroke", "transparent"), u.setAttribute("fill", "transparent"), u.setAttribute("transform", o);
    for (let f = 0, g = i.length; f < g; f++) {
      const b = this.svgFactory.createElement(this.svgElementName);
      r(this, Gn).push(b), b.setAttribute("points", i[f].join(",")), u.append(b);
    }
    return !a && this.hasPopupData && this._createPopup(), this.container.append(c), this._editOnDoubleClick(), this.container;
  }
  updateEdited(e) {
    super.updateEdited(e);
    const {
      thickness: s,
      points: i,
      rect: n
    } = e, a = r(this, sl);
    if (s >= 0 && a.setAttribute("stroke-width", s || 1), i)
      for (let o = 0, l = r(this, Gn).length; o < l; o++)
        r(this, Gn)[o].setAttribute("points", i[o].join(","));
    if (n) {
      const {
        transform: o,
        width: l,
        height: h
      } = A(this, il, zc).call(this, this.data.rotation, n);
      a.parentElement.setAttribute("viewBox", `0 0 ${l} ${h}`), a.setAttribute("transform", o);
    }
  }
  getElementsToTriggerPopup() {
    return r(this, Gn);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
sl = new WeakMap(), Gn = new WeakMap(), il = new WeakSet(), zc = function(e, s) {
  switch (e) {
    case 90:
      return {
        transform: `rotate(90) translate(${-s[0]},${s[1]}) scale(1,-1)`,
        width: s[3] - s[1],
        height: s[2] - s[0]
      };
    case 180:
      return {
        transform: `rotate(180) translate(${-s[2]},${s[1]}) scale(1,-1)`,
        width: s[2] - s[0],
        height: s[3] - s[1]
      };
    case 270:
      return {
        transform: `rotate(270) translate(${-s[2]},${s[3]}) scale(1,-1)`,
        width: s[3] - s[1],
        height: s[2] - s[0]
      };
    default:
      return {
        transform: `translate(${-s[0]},${s[3]}) scale(1,-1)`,
        width: s[2] - s[0],
        height: s[3] - s[1]
      };
  }
};
class pf extends Ct {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    }), this.annotationEditorType = X.HIGHLIGHT;
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("highlightAnnotation"), this._editOnDoubleClick(), this.container;
  }
}
class Wg extends Ct {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("underlineAnnotation"), this.container;
  }
}
class Xg extends Ct {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("squigglyAnnotation"), this.container;
  }
}
class qg extends Ct {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("strikeoutAnnotation"), this.container;
  }
}
class gf extends Ct {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    }), this.annotationEditorType = X.STAMP;
  }
  render() {
    return this.container.classList.add("stampAnnotation"), this.container.setAttribute("role", "img"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container;
  }
}
var nl, rl, $c;
class Yg extends Ct {
  constructor(e) {
    var i;
    super(e, {
      isRenderable: !0
    });
    m(this, rl);
    m(this, nl, null);
    const {
      file: s
    } = this.data;
    this.filename = s.filename, this.content = s.content, (i = this.linkService.eventBus) == null || i.dispatch("fileattachmentannotation", {
      source: this,
      ...s
    });
  }
  render() {
    this.container.classList.add("fileAttachmentAnnotation");
    const {
      container: e,
      data: s
    } = this;
    let i;
    s.hasAppearance || s.fillAlpha === 0 ? i = document.createElement("div") : (i = document.createElement("img"), i.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(s.name) ? "paperclip" : "pushpin"}.svg`, s.fillAlpha && s.fillAlpha < 1 && (i.style = `filter: opacity(${Math.round(s.fillAlpha * 100)}%);`)), i.addEventListener("dblclick", A(this, rl, $c).bind(this)), p(this, nl, i);
    const {
      isMac: n
    } = ce.platform;
    return e.addEventListener("keydown", (a) => {
      a.key === "Enter" && (n ? a.metaKey : a.ctrlKey) && A(this, rl, $c).call(this);
    }), !s.popupRef && this.hasPopupData ? this._createPopup() : i.classList.add("popupTriggerArea"), e.append(i), e;
  }
  getElementsToTriggerPopup() {
    return r(this, nl);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
nl = new WeakMap(), rl = new WeakSet(), $c = function() {
  var e;
  (e = this.downloadManager) == null || e.openOrDownloadData(this.content, this.filename);
};
var al, Un, Vn, ol, ur, mf, Gc;
class Kg {
  constructor({
    div: t,
    accessibilityManager: e,
    annotationCanvasMap: s,
    annotationEditorUIManager: i,
    page: n,
    viewport: a,
    structTreeLayer: o
  }) {
    m(this, ur);
    m(this, al, null);
    m(this, Un, null);
    m(this, Vn, /* @__PURE__ */ new Map());
    m(this, ol, null);
    this.div = t, p(this, al, e), p(this, Un, s), p(this, ol, o || null), this.page = n, this.viewport = a, this.zIndex = 0, this._annotationEditorUIManager = i;
  }
  hasEditableAnnotations() {
    return r(this, Vn).size > 0;
  }
  async render(t) {
    var a;
    const {
      annotations: e
    } = t, s = this.div;
    hr(s, this.viewport);
    const i = /* @__PURE__ */ new Map(), n = {
      data: null,
      layer: s,
      linkService: t.linkService,
      downloadManager: t.downloadManager,
      imageResourcesPath: t.imageResourcesPath || "",
      renderForms: t.renderForms !== !1,
      svgFactory: new _d(),
      annotationStorage: t.annotationStorage || new vd(),
      enableScripting: t.enableScripting === !0,
      hasJSActions: t.hasJSActions,
      fieldObjects: t.fieldObjects,
      parent: this,
      elements: null
    };
    for (const o of e) {
      if (o.noHTML)
        continue;
      const l = o.annotationType === Pt.POPUP;
      if (l) {
        const u = i.get(o.id);
        if (!u)
          continue;
        n.elements = u;
      } else {
        const {
          width: u,
          height: f
        } = qi(o.rect);
        if (u <= 0 || f <= 0)
          continue;
      }
      n.data = o;
      const h = Ig.create(n);
      if (!h.isRenderable)
        continue;
      if (!l && o.popupRef) {
        const u = i.get(o.popupRef);
        u ? u.push(h) : i.set(o.popupRef, [h]);
      }
      const c = h.render();
      o.hidden && (c.style.visibility = "hidden"), await A(this, ur, mf).call(this, c, o.id), h._isEditable && (r(this, Vn).set(h.data.id, h), (a = this._annotationEditorUIManager) == null || a.renderAnnotationElement(h));
    }
    A(this, ur, Gc).call(this);
  }
  update({
    viewport: t
  }) {
    const e = this.div;
    this.viewport = t, hr(e, {
      rotation: t.rotation
    }), A(this, ur, Gc).call(this), e.hidden = !1;
  }
  getEditableAnnotations() {
    return Array.from(r(this, Vn).values());
  }
  getEditableAnnotation(t) {
    return r(this, Vn).get(t);
  }
}
al = new WeakMap(), Un = new WeakMap(), Vn = new WeakMap(), ol = new WeakMap(), ur = new WeakSet(), mf = async function(t, e) {
  var a, o;
  const s = t.firstChild || t, i = s.id = `${gd}${e}`, n = await ((a = r(this, ol)) == null ? void 0 : a.getAriaAttributes(i));
  if (n)
    for (const [l, h] of n)
      s.setAttribute(l, h);
  this.div.append(t), (o = r(this, al)) == null || o.moveElementInDOM(this.div, t, s, !1);
}, Gc = function() {
  if (!r(this, Un))
    return;
  const t = this.div;
  for (const [e, s] of r(this, Un)) {
    const i = t.querySelector(`[data-annotation-id="${e}"]`);
    if (!i)
      continue;
    s.className = "annotationContent";
    const {
      firstChild: n
    } = i;
    n ? n.nodeName === "CANVAS" ? n.replaceWith(s) : n.classList.contains("annotationContent") ? n.after(s) : n.before(s) : i.append(s);
  }
  r(this, Un).clear();
};
const Dl = /\r\n?|\n/g;
var ss, xe, ll, jn, Te, kt, bf, Af, yf, Jl, fi, th, eh, vf, Vc, wf;
const dt = class dt extends vt {
  constructor(e) {
    super({
      ...e,
      name: "freeTextEditor"
    });
    m(this, kt);
    m(this, ss);
    m(this, xe, "");
    m(this, ll, `${this.id}-editor`);
    m(this, jn, null);
    m(this, Te);
    p(this, ss, e.color || dt._defaultColor || vt._defaultLineColor), p(this, Te, e.fontSize || dt._defaultFontSize);
  }
  static get _keyboardManager() {
    const e = dt.prototype, s = (a) => a.isEmpty(), i = cr.TRANSLATE_SMALL, n = cr.TRANSLATE_BIG;
    return Q(this, "_keyboardManager", new Pl([[["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], e.commitOrRemove, {
      bubbles: !0
    }], [["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"], e.commitOrRemove], [["ArrowLeft", "mac+ArrowLeft"], e._translateEmpty, {
      args: [-i, 0],
      checker: s
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], e._translateEmpty, {
      args: [-n, 0],
      checker: s
    }], [["ArrowRight", "mac+ArrowRight"], e._translateEmpty, {
      args: [i, 0],
      checker: s
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], e._translateEmpty, {
      args: [n, 0],
      checker: s
    }], [["ArrowUp", "mac+ArrowUp"], e._translateEmpty, {
      args: [0, -i],
      checker: s
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], e._translateEmpty, {
      args: [0, -n],
      checker: s
    }], [["ArrowDown", "mac+ArrowDown"], e._translateEmpty, {
      args: [0, i],
      checker: s
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], e._translateEmpty, {
      args: [0, n],
      checker: s
    }]]));
  }
  static initialize(e, s) {
    vt.initialize(e, s);
    const i = getComputedStyle(document.documentElement);
    this._internalPadding = parseFloat(i.getPropertyValue("--freetext-padding"));
  }
  static updateDefaultParams(e, s) {
    switch (e) {
      case J.FREETEXT_SIZE:
        dt._defaultFontSize = s;
        break;
      case J.FREETEXT_COLOR:
        dt._defaultColor = s;
        break;
    }
  }
  updateParams(e, s) {
    switch (e) {
      case J.FREETEXT_SIZE:
        A(this, kt, bf).call(this, s);
        break;
      case J.FREETEXT_COLOR:
        A(this, kt, Af).call(this, s);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[J.FREETEXT_SIZE, dt._defaultFontSize], [J.FREETEXT_COLOR, dt._defaultColor || vt._defaultLineColor]];
  }
  get propertiesToUpdate() {
    return [[J.FREETEXT_SIZE, r(this, Te)], [J.FREETEXT_COLOR, r(this, ss)]];
  }
  _translateEmpty(e, s) {
    this._uiManager.translateSelectedEditors(e, s, !0);
  }
  getInitialTranslation() {
    const e = this.parentScale;
    return [-dt._internalPadding * e, -(dt._internalPadding + r(this, Te)) * e];
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (this.isAttachedToDOM || this.parent.add(this)));
  }
  enableEditMode() {
    if (this.isInEditMode())
      return;
    this.parent.setEditingState(!1), this.parent.updateToolbar(X.FREETEXT), super.enableEditMode(), this.overlayDiv.classList.remove("enabled"), this.editorDiv.contentEditable = !0, this._isDraggable = !1, this.div.removeAttribute("aria-activedescendant"), p(this, jn, new AbortController());
    const e = this._uiManager.combinedSignal(r(this, jn));
    this.editorDiv.addEventListener("keydown", this.editorDivKeydown.bind(this), {
      signal: e
    }), this.editorDiv.addEventListener("focus", this.editorDivFocus.bind(this), {
      signal: e
    }), this.editorDiv.addEventListener("blur", this.editorDivBlur.bind(this), {
      signal: e
    }), this.editorDiv.addEventListener("input", this.editorDivInput.bind(this), {
      signal: e
    }), this.editorDiv.addEventListener("paste", this.editorDivPaste.bind(this), {
      signal: e
    });
  }
  disableEditMode() {
    var e;
    this.isInEditMode() && (this.parent.setEditingState(!0), super.disableEditMode(), this.overlayDiv.classList.add("enabled"), this.editorDiv.contentEditable = !1, this.div.setAttribute("aria-activedescendant", r(this, ll)), this._isDraggable = !0, (e = r(this, jn)) == null || e.abort(), p(this, jn, null), this.div.focus({
      preventScroll: !0
    }), this.isEditing = !1, this.parent.div.classList.add("freetextEditing"));
  }
  focusin(e) {
    this._focusEventsAllowed && (super.focusin(e), e.target !== this.editorDiv && this.editorDiv.focus());
  }
  onceAdded(e) {
    var s;
    this.width || (this.enableEditMode(), e && this.editorDiv.focus(), (s = this._initialOptions) != null && s.isCentered && this.center(), this._initialOptions = null);
  }
  isEmpty() {
    return !this.editorDiv || this.editorDiv.innerText.trim() === "";
  }
  remove() {
    this.isEditing = !1, this.parent && (this.parent.setEditingState(!0), this.parent.div.classList.add("freetextEditing")), super.remove();
  }
  commit() {
    if (!this.isInEditMode())
      return;
    super.commit(), this.disableEditMode();
    const e = r(this, xe), s = p(this, xe, A(this, kt, yf).call(this).trimEnd());
    if (e === s)
      return;
    const i = (n) => {
      if (p(this, xe, n), !n) {
        this.remove();
        return;
      }
      A(this, kt, eh).call(this), this._uiManager.rebuild(this), A(this, kt, Jl).call(this);
    };
    this.addCommands({
      cmd: () => {
        i(s);
      },
      undo: () => {
        i(e);
      },
      mustExec: !1
    }), A(this, kt, Jl).call(this);
  }
  shouldGetKeyboardEvents() {
    return this.isInEditMode();
  }
  enterInEditMode() {
    this.enableEditMode(), this.editorDiv.focus();
  }
  dblclick(e) {
    this.enterInEditMode();
  }
  keydown(e) {
    e.target === this.div && e.key === "Enter" && (this.enterInEditMode(), e.preventDefault());
  }
  editorDivKeydown(e) {
    dt._keyboardManager.exec(this, e);
  }
  editorDivFocus(e) {
    this.isEditing = !0;
  }
  editorDivBlur(e) {
    this.isEditing = !1;
  }
  editorDivInput(e) {
    this.parent.div.classList.toggle("freetextEditing", this.isEmpty());
  }
  disableEditing() {
    this.editorDiv.setAttribute("role", "comment"), this.editorDiv.removeAttribute("aria-multiline");
  }
  enableEditing() {
    this.editorDiv.setAttribute("role", "textbox"), this.editorDiv.setAttribute("aria-multiline", !0);
  }
  render() {
    if (this.div)
      return this.div;
    let e, s;
    this.width && (e = this.x, s = this.y), super.render(), this.editorDiv = document.createElement("div"), this.editorDiv.className = "internal", this.editorDiv.setAttribute("id", r(this, ll)), this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text2"), this.editorDiv.setAttribute("data-l10n-attrs", "default-content"), this.enableEditing(), this.editorDiv.contentEditable = !0;
    const {
      style: i
    } = this.editorDiv;
    if (i.fontSize = `calc(${r(this, Te)}px * var(--scale-factor))`, i.color = r(this, ss), this.div.append(this.editorDiv), this.overlayDiv = document.createElement("div"), this.overlayDiv.classList.add("overlay", "enabled"), this.div.append(this.overlayDiv), uh(this, this.div, ["dblclick", "keydown"]), this.width) {
      const [n, a] = this.parentDimensions;
      if (this.annotationElementId) {
        const {
          position: o
        } = this._initialData;
        let [l, h] = this.getInitialTranslation();
        [l, h] = this.pageTranslationToScreen(l, h);
        const [c, u] = this.pageDimensions, [f, g] = this.pageTranslation;
        let b, y;
        switch (this.rotation) {
          case 0:
            b = e + (o[0] - f) / c, y = s + this.height - (o[1] - g) / u;
            break;
          case 90:
            b = e + (o[0] - f) / c, y = s - (o[1] - g) / u, [l, h] = [h, -l];
            break;
          case 180:
            b = e - this.width + (o[0] - f) / c, y = s - (o[1] - g) / u, [l, h] = [-l, -h];
            break;
          case 270:
            b = e + (o[0] - f - this.height * u) / c, y = s + (o[1] - g - this.width * c) / u, [l, h] = [-h, l];
            break;
        }
        this.setAt(b * n, y * a, l, h);
      } else
        this.setAt(e * n, s * a, this.width * n, this.height * a);
      A(this, kt, eh).call(this), this._isDraggable = !0, this.editorDiv.contentEditable = !1;
    } else
      this._isDraggable = !1, this.editorDiv.contentEditable = !0;
    return this.div;
  }
  editorDivPaste(e) {
    var b, y, w;
    const s = e.clipboardData || window.clipboardData, {
      types: i
    } = s;
    if (i.length === 1 && i[0] === "text/plain")
      return;
    e.preventDefault();
    const n = A(b = dt, fi, Vc).call(b, s.getData("text") || "").replaceAll(Dl, `
`);
    if (!n)
      return;
    const a = window.getSelection();
    if (!a.rangeCount)
      return;
    this.editorDiv.normalize(), a.deleteFromDocument();
    const o = a.getRangeAt(0);
    if (!n.includes(`
`)) {
      o.insertNode(document.createTextNode(n)), this.editorDiv.normalize(), a.collapseToStart();
      return;
    }
    const {
      startContainer: l,
      startOffset: h
    } = o, c = [], u = [];
    if (l.nodeType === Node.TEXT_NODE) {
      const v = l.parentElement;
      if (u.push(l.nodeValue.slice(h).replaceAll(Dl, "")), v !== this.editorDiv) {
        let S = c;
        for (const E of this.editorDiv.childNodes) {
          if (E === v) {
            S = u;
            continue;
          }
          S.push(A(y = dt, fi, th).call(y, E));
        }
      }
      c.push(l.nodeValue.slice(0, h).replaceAll(Dl, ""));
    } else if (l === this.editorDiv) {
      let v = c, S = 0;
      for (const E of this.editorDiv.childNodes)
        S++ === h && (v = u), v.push(A(w = dt, fi, th).call(w, E));
    }
    p(this, xe, `${c.join(`
`)}${n}${u.join(`
`)}`), A(this, kt, eh).call(this);
    const f = new Range();
    let g = c.reduce((v, S) => v + S.length, 0);
    for (const {
      firstChild: v
    } of this.editorDiv.childNodes)
      if (v.nodeType === Node.TEXT_NODE) {
        const S = v.nodeValue.length;
        if (g <= S) {
          f.setStart(v, g), f.setEnd(v, g);
          break;
        }
        g -= S;
      }
    a.removeAllRanges(), a.addRange(f);
  }
  get contentDiv() {
    return this.editorDiv;
  }
  static async deserialize(e, s, i) {
    var o;
    let n = null;
    if (e instanceof uf) {
      const {
        data: {
          defaultAppearanceData: {
            fontSize: l,
            fontColor: h
          },
          rect: c,
          rotation: u,
          id: f,
          popupRef: g
        },
        textContent: b,
        textPosition: y,
        parent: {
          page: {
            pageNumber: w
          }
        }
      } = e;
      if (!b || b.length === 0)
        return null;
      n = e = {
        annotationType: X.FREETEXT,
        color: Array.from(h),
        fontSize: l,
        value: b.join(`
`),
        position: y,
        pageIndex: w - 1,
        rect: c.slice(0),
        rotation: u,
        id: f,
        deleted: !1,
        popupRef: g
      };
    }
    const a = await super.deserialize(e, s, i);
    return p(a, Te, e.fontSize), p(a, ss, H.makeHexColor(...e.color)), p(a, xe, A(o = dt, fi, Vc).call(o, e.value)), a.annotationElementId = e.id || null, a._initialData = n, a;
  }
  serialize(e = !1) {
    if (this.isEmpty())
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const s = dt._internalPadding * this.parentScale, i = this.getRect(s, s), n = vt._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : r(this, ss)), a = {
      annotationType: X.FREETEXT,
      color: n,
      fontSize: r(this, Te),
      value: A(this, kt, vf).call(this),
      pageIndex: this.pageIndex,
      rect: i,
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId
    };
    return e ? a : this.annotationElementId && !A(this, kt, wf).call(this, a) ? null : (a.id = this.annotationElementId, a);
  }
  renderAnnotationElement(e) {
    const s = super.renderAnnotationElement(e);
    if (this.deleted)
      return s;
    const {
      style: i
    } = s;
    i.fontSize = `calc(${r(this, Te)}px * var(--scale-factor))`, i.color = r(this, ss), s.replaceChildren();
    for (const a of r(this, xe).split(`
`)) {
      const o = document.createElement("div");
      o.append(a ? document.createTextNode(a) : document.createElement("br")), s.append(o);
    }
    const n = dt._internalPadding * this.parentScale;
    return e.updateEdited({
      rect: this.getRect(n, n),
      popupContent: r(this, xe)
    }), s;
  }
  resetAnnotationElement(e) {
    super.resetAnnotationElement(e), e.resetEdited();
  }
};
ss = new WeakMap(), xe = new WeakMap(), ll = new WeakMap(), jn = new WeakMap(), Te = new WeakMap(), kt = new WeakSet(), bf = function(e) {
  const s = (n) => {
    this.editorDiv.style.fontSize = `calc(${n}px * var(--scale-factor))`, this.translate(0, -(n - r(this, Te)) * this.parentScale), p(this, Te, n), A(this, kt, Jl).call(this);
  }, i = r(this, Te);
  this.addCommands({
    cmd: s.bind(this, e),
    undo: s.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: J.FREETEXT_SIZE,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, Af = function(e) {
  const s = (n) => {
    p(this, ss, this.editorDiv.style.color = n);
  }, i = r(this, ss);
  this.addCommands({
    cmd: s.bind(this, e),
    undo: s.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: J.FREETEXT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, yf = function() {
  var i;
  const e = [];
  this.editorDiv.normalize();
  let s = null;
  for (const n of this.editorDiv.childNodes)
    (s == null ? void 0 : s.nodeType) === Node.TEXT_NODE && n.nodeName === "BR" || (e.push(A(i = dt, fi, th).call(i, n)), s = n);
  return e.join(`
`);
}, Jl = function() {
  const [e, s] = this.parentDimensions;
  let i;
  if (this.isAttachedToDOM)
    i = this.div.getBoundingClientRect();
  else {
    const {
      currentLayer: n,
      div: a
    } = this, o = a.style.display, l = a.classList.contains("hidden");
    a.classList.remove("hidden"), a.style.display = "hidden", n.div.append(this.div), i = a.getBoundingClientRect(), a.remove(), a.style.display = o, a.classList.toggle("hidden", l);
  }
  this.rotation % 180 === this.parentRotation % 180 ? (this.width = i.width / e, this.height = i.height / s) : (this.width = i.height / e, this.height = i.width / s), this.fixAndSetPosition();
}, fi = new WeakSet(), th = function(e) {
  return (e.nodeType === Node.TEXT_NODE ? e.nodeValue : e.innerText).replaceAll(Dl, "");
}, eh = function() {
  if (this.editorDiv.replaceChildren(), !!r(this, xe))
    for (const e of r(this, xe).split(`
`)) {
      const s = document.createElement("div");
      s.append(e ? document.createTextNode(e) : document.createElement("br")), this.editorDiv.append(s);
    }
}, vf = function() {
  return r(this, xe).replaceAll(" ", " ");
}, Vc = function(e) {
  return e.replaceAll(" ", " ");
}, wf = function(e) {
  const {
    value: s,
    fontSize: i,
    color: n,
    pageIndex: a
  } = this._initialData;
  return this._hasBeenMoved || e.value !== s || e.fontSize !== i || e.color.some((o, l) => o !== n[l]) || e.pageIndex !== a;
}, m(dt, fi), $(dt, "_freeTextDefaultContent", ""), $(dt, "_internalPadding", 0), $(dt, "_defaultColor", null), $(dt, "_defaultFontSize", 10), $(dt, "_type", "freetext"), $(dt, "_editorType", X.FREETEXT);
let Uc = dt;
class I {
  toSVGPath() {
    ct("Abstract method `toSVGPath` must be implemented.");
  }
  get box() {
    ct("Abstract getter `box` must be implemented.");
  }
  serialize(t, e) {
    ct("Abstract method `serialize` must be implemented.");
  }
  static _rescale(t, e, s, i, n, a) {
    a || (a = new Float32Array(t.length));
    for (let o = 0, l = t.length; o < l; o += 2)
      a[o] = e + t[o] * i, a[o + 1] = s + t[o + 1] * n;
    return a;
  }
  static _rescaleAndSwap(t, e, s, i, n, a) {
    a || (a = new Float32Array(t.length));
    for (let o = 0, l = t.length; o < l; o += 2)
      a[o] = e + t[o + 1] * i, a[o + 1] = s + t[o] * n;
    return a;
  }
  static _translate(t, e, s, i) {
    i || (i = new Float32Array(t.length));
    for (let n = 0, a = t.length; n < a; n += 2)
      i[n] = e + t[n], i[n + 1] = s + t[n + 1];
    return i;
  }
  static svgRound(t) {
    return Math.round(t * 1e4);
  }
  static _normalizePoint(t, e, s, i, n) {
    switch (n) {
      case 90:
        return [1 - e / s, t / i];
      case 180:
        return [1 - t / s, 1 - e / i];
      case 270:
        return [e / s, 1 - t / i];
      default:
        return [t / s, e / i];
    }
  }
  static _normalizePagePoint(t, e, s) {
    switch (s) {
      case 90:
        return [1 - e, t];
      case 180:
        return [1 - t, 1 - e];
      case 270:
        return [e, 1 - t];
      default:
        return [t, e];
    }
  }
  static createBezierPoints(t, e, s, i, n, a) {
    return [(t + 5 * s) / 6, (e + 5 * i) / 6, (5 * s + n) / 6, (5 * i + a) / 6, (s + n) / 2, (i + a) / 2];
  }
}
$(I, "PRECISION", 1e-4);
var ke, is, oa, la, xs, K, Wn, Xn, hl, cl, ha, ca, Oi, dl, Ih, Dh, It, ja, _f, Sf, Ef, Cf, xf, Tf;
const Hs = class Hs {
  constructor({
    x: t,
    y: e
  }, s, i, n, a, o = 0) {
    m(this, It);
    m(this, ke);
    m(this, is, []);
    m(this, oa);
    m(this, la);
    m(this, xs, []);
    m(this, K, new Float32Array(18));
    m(this, Wn);
    m(this, Xn);
    m(this, hl);
    m(this, cl);
    m(this, ha);
    m(this, ca);
    m(this, Oi, []);
    p(this, ke, s), p(this, ca, n * i), p(this, la, a), r(this, K).set([NaN, NaN, NaN, NaN, t, e], 6), p(this, oa, o), p(this, cl, r(Hs, dl) * i), p(this, hl, r(Hs, Dh) * i), p(this, ha, i), r(this, Oi).push(t, e);
  }
  isEmpty() {
    return isNaN(r(this, K)[8]);
  }
  add({
    x: t,
    y: e
  }) {
    var M;
    p(this, Wn, t), p(this, Xn, e);
    const [s, i, n, a] = r(this, ke);
    let [o, l, h, c] = r(this, K).subarray(8, 12);
    const u = t - h, f = e - c, g = Math.hypot(u, f);
    if (g < r(this, hl))
      return !1;
    const b = g - r(this, cl), y = b / g, w = y * u, v = y * f;
    let S = o, E = l;
    o = h, l = c, h += w, c += v, (M = r(this, Oi)) == null || M.push(t, e);
    const _ = -v / b, C = w / b, x = _ * r(this, ca), T = C * r(this, ca);
    return r(this, K).set(r(this, K).subarray(2, 8), 0), r(this, K).set([h + x, c + T], 4), r(this, K).set(r(this, K).subarray(14, 18), 12), r(this, K).set([h - x, c - T], 16), isNaN(r(this, K)[6]) ? (r(this, xs).length === 0 && (r(this, K).set([o + x, l + T], 2), r(this, xs).push(NaN, NaN, NaN, NaN, (o + x - s) / n, (l + T - i) / a), r(this, K).set([o - x, l - T], 14), r(this, is).push(NaN, NaN, NaN, NaN, (o - x - s) / n, (l - T - i) / a)), r(this, K).set([S, E, o, l, h, c], 6), !this.isEmpty()) : (r(this, K).set([S, E, o, l, h, c], 6), Math.abs(Math.atan2(E - l, S - o) - Math.atan2(v, w)) < Math.PI / 2 ? ([o, l, h, c] = r(this, K).subarray(2, 6), r(this, xs).push(NaN, NaN, NaN, NaN, ((o + h) / 2 - s) / n, ((l + c) / 2 - i) / a), [o, l, S, E] = r(this, K).subarray(14, 18), r(this, is).push(NaN, NaN, NaN, NaN, ((S + o) / 2 - s) / n, ((E + l) / 2 - i) / a), !0) : ([S, E, o, l, h, c] = r(this, K).subarray(0, 6), r(this, xs).push(((S + 5 * o) / 6 - s) / n, ((E + 5 * l) / 6 - i) / a, ((5 * o + h) / 6 - s) / n, ((5 * l + c) / 6 - i) / a, ((o + h) / 2 - s) / n, ((l + c) / 2 - i) / a), [h, c, o, l, S, E] = r(this, K).subarray(12, 18), r(this, is).push(((S + 5 * o) / 6 - s) / n, ((E + 5 * l) / 6 - i) / a, ((5 * o + h) / 6 - s) / n, ((5 * l + c) / 6 - i) / a, ((o + h) / 2 - s) / n, ((l + c) / 2 - i) / a), !0));
  }
  toSVGPath() {
    if (this.isEmpty())
      return "";
    const t = r(this, xs), e = r(this, is);
    if (isNaN(r(this, K)[6]) && !this.isEmpty())
      return A(this, It, _f).call(this);
    const s = [];
    s.push(`M${t[4]} ${t[5]}`);
    for (let i = 6; i < t.length; i += 6)
      isNaN(t[i]) ? s.push(`L${t[i + 4]} ${t[i + 5]}`) : s.push(`C${t[i]} ${t[i + 1]} ${t[i + 2]} ${t[i + 3]} ${t[i + 4]} ${t[i + 5]}`);
    A(this, It, Ef).call(this, s);
    for (let i = e.length - 6; i >= 6; i -= 6)
      isNaN(e[i]) ? s.push(`L${e[i + 4]} ${e[i + 5]}`) : s.push(`C${e[i]} ${e[i + 1]} ${e[i + 2]} ${e[i + 3]} ${e[i + 4]} ${e[i + 5]}`);
    return A(this, It, Sf).call(this, s), s.join(" ");
  }
  newFreeDrawOutline(t, e, s, i, n, a) {
    return new kf(t, e, s, i, n, a);
  }
  getOutlines() {
    var u;
    const t = r(this, xs), e = r(this, is), s = r(this, K), [i, n, a, o] = r(this, ke), l = new Float32Array((((u = r(this, Oi)) == null ? void 0 : u.length) ?? 0) + 2);
    for (let f = 0, g = l.length - 2; f < g; f += 2)
      l[f] = (r(this, Oi)[f] - i) / a, l[f + 1] = (r(this, Oi)[f + 1] - n) / o;
    if (l[l.length - 2] = (r(this, Wn) - i) / a, l[l.length - 1] = (r(this, Xn) - n) / o, isNaN(s[6]) && !this.isEmpty())
      return A(this, It, Cf).call(this, l);
    const h = new Float32Array(r(this, xs).length + 24 + r(this, is).length);
    let c = t.length;
    for (let f = 0; f < c; f += 2) {
      if (isNaN(t[f])) {
        h[f] = h[f + 1] = NaN;
        continue;
      }
      h[f] = t[f], h[f + 1] = t[f + 1];
    }
    c = A(this, It, Tf).call(this, h, c);
    for (let f = e.length - 6; f >= 6; f -= 6)
      for (let g = 0; g < 6; g += 2) {
        if (isNaN(e[f + g])) {
          h[c] = h[c + 1] = NaN, c += 2;
          continue;
        }
        h[c] = e[f + g], h[c + 1] = e[f + g + 1], c += 2;
      }
    return A(this, It, xf).call(this, h, c), this.newFreeDrawOutline(h, l, r(this, ke), r(this, ha), r(this, oa), r(this, la));
  }
};
ke = new WeakMap(), is = new WeakMap(), oa = new WeakMap(), la = new WeakMap(), xs = new WeakMap(), K = new WeakMap(), Wn = new WeakMap(), Xn = new WeakMap(), hl = new WeakMap(), cl = new WeakMap(), ha = new WeakMap(), ca = new WeakMap(), Oi = new WeakMap(), dl = new WeakMap(), Ih = new WeakMap(), Dh = new WeakMap(), It = new WeakSet(), ja = function() {
  const t = r(this, K).subarray(4, 6), e = r(this, K).subarray(16, 18), [s, i, n, a] = r(this, ke);
  return [(r(this, Wn) + (t[0] - e[0]) / 2 - s) / n, (r(this, Xn) + (t[1] - e[1]) / 2 - i) / a, (r(this, Wn) + (e[0] - t[0]) / 2 - s) / n, (r(this, Xn) + (e[1] - t[1]) / 2 - i) / a];
}, _f = function() {
  const [t, e, s, i] = r(this, ke), [n, a, o, l] = A(this, It, ja).call(this);
  return `M${(r(this, K)[2] - t) / s} ${(r(this, K)[3] - e) / i} L${(r(this, K)[4] - t) / s} ${(r(this, K)[5] - e) / i} L${n} ${a} L${o} ${l} L${(r(this, K)[16] - t) / s} ${(r(this, K)[17] - e) / i} L${(r(this, K)[14] - t) / s} ${(r(this, K)[15] - e) / i} Z`;
}, Sf = function(t) {
  const e = r(this, is);
  t.push(`L${e[4]} ${e[5]} Z`);
}, Ef = function(t) {
  const [e, s, i, n] = r(this, ke), a = r(this, K).subarray(4, 6), o = r(this, K).subarray(16, 18), [l, h, c, u] = A(this, It, ja).call(this);
  t.push(`L${(a[0] - e) / i} ${(a[1] - s) / n} L${l} ${h} L${c} ${u} L${(o[0] - e) / i} ${(o[1] - s) / n}`);
}, Cf = function(t) {
  const e = r(this, K), [s, i, n, a] = r(this, ke), [o, l, h, c] = A(this, It, ja).call(this), u = new Float32Array(36);
  return u.set([NaN, NaN, NaN, NaN, (e[2] - s) / n, (e[3] - i) / a, NaN, NaN, NaN, NaN, (e[4] - s) / n, (e[5] - i) / a, NaN, NaN, NaN, NaN, o, l, NaN, NaN, NaN, NaN, h, c, NaN, NaN, NaN, NaN, (e[16] - s) / n, (e[17] - i) / a, NaN, NaN, NaN, NaN, (e[14] - s) / n, (e[15] - i) / a], 0), this.newFreeDrawOutline(u, t, r(this, ke), r(this, ha), r(this, oa), r(this, la));
}, xf = function(t, e) {
  const s = r(this, is);
  return t.set([NaN, NaN, NaN, NaN, s[4], s[5]], e), e += 6;
}, Tf = function(t, e) {
  const s = r(this, K).subarray(4, 6), i = r(this, K).subarray(16, 18), [n, a, o, l] = r(this, ke), [h, c, u, f] = A(this, It, ja).call(this);
  return t.set([NaN, NaN, NaN, NaN, (s[0] - n) / o, (s[1] - a) / l, NaN, NaN, NaN, NaN, h, c, NaN, NaN, NaN, NaN, u, f, NaN, NaN, NaN, NaN, (i[0] - n) / o, (i[1] - a) / l], e), e += 24;
}, m(Hs, dl, 8), m(Hs, Ih, 2), m(Hs, Dh, r(Hs, dl) + r(Hs, Ih));
let gh = Hs;
var da, qn, ni, ul, Pe, fl, Et, Fh, Pf;
class kf extends I {
  constructor(e, s, i, n, a, o) {
    super();
    m(this, Fh);
    m(this, da);
    m(this, qn, new Float32Array(4));
    m(this, ni);
    m(this, ul);
    m(this, Pe);
    m(this, fl);
    m(this, Et);
    p(this, Et, e), p(this, Pe, s), p(this, da, i), p(this, fl, n), p(this, ni, a), p(this, ul, o), this.lastPoint = [NaN, NaN], A(this, Fh, Pf).call(this, o);
    const [l, h, c, u] = r(this, qn);
    for (let f = 0, g = e.length; f < g; f += 2)
      e[f] = (e[f] - l) / c, e[f + 1] = (e[f + 1] - h) / u;
    for (let f = 0, g = s.length; f < g; f += 2)
      s[f] = (s[f] - l) / c, s[f + 1] = (s[f + 1] - h) / u;
  }
  toSVGPath() {
    const e = [`M${r(this, Et)[4]} ${r(this, Et)[5]}`];
    for (let s = 6, i = r(this, Et).length; s < i; s += 6) {
      if (isNaN(r(this, Et)[s])) {
        e.push(`L${r(this, Et)[s + 4]} ${r(this, Et)[s + 5]}`);
        continue;
      }
      e.push(`C${r(this, Et)[s]} ${r(this, Et)[s + 1]} ${r(this, Et)[s + 2]} ${r(this, Et)[s + 3]} ${r(this, Et)[s + 4]} ${r(this, Et)[s + 5]}`);
    }
    return e.push("Z"), e.join(" ");
  }
  serialize([e, s, i, n], a) {
    const o = i - e, l = n - s;
    let h, c;
    switch (a) {
      case 0:
        h = I._rescale(r(this, Et), e, n, o, -l), c = I._rescale(r(this, Pe), e, n, o, -l);
        break;
      case 90:
        h = I._rescaleAndSwap(r(this, Et), e, s, o, l), c = I._rescaleAndSwap(r(this, Pe), e, s, o, l);
        break;
      case 180:
        h = I._rescale(r(this, Et), i, s, -o, l), c = I._rescale(r(this, Pe), i, s, -o, l);
        break;
      case 270:
        h = I._rescaleAndSwap(r(this, Et), i, n, -o, -l), c = I._rescaleAndSwap(r(this, Pe), i, n, -o, -l);
        break;
    }
    return {
      outline: Array.from(h),
      points: [Array.from(c)]
    };
  }
  get box() {
    return r(this, qn);
  }
  newOutliner(e, s, i, n, a, o = 0) {
    return new gh(e, s, i, n, a, o);
  }
  getNewOutline(e, s) {
    const [i, n, a, o] = r(this, qn), [l, h, c, u] = r(this, da), f = a * c, g = o * u, b = i * c + l, y = n * u + h, w = this.newOutliner({
      x: r(this, Pe)[0] * f + b,
      y: r(this, Pe)[1] * g + y
    }, r(this, da), r(this, fl), e, r(this, ul), s ?? r(this, ni));
    for (let v = 2; v < r(this, Pe).length; v += 2)
      w.add({
        x: r(this, Pe)[v] * f + b,
        y: r(this, Pe)[v + 1] * g + y
      });
    return w.getOutlines();
  }
}
da = new WeakMap(), qn = new WeakMap(), ni = new WeakMap(), ul = new WeakMap(), Pe = new WeakMap(), fl = new WeakMap(), Et = new WeakMap(), Fh = new WeakSet(), Pf = function(e) {
  const s = r(this, Et);
  let i = s[4], n = s[5], a = i, o = n, l = i, h = n, c = i, u = n;
  const f = e ? Math.max : Math.min;
  for (let b = 6, y = s.length; b < y; b += 6) {
    if (isNaN(s[b]))
      a = Math.min(a, s[b + 4]), o = Math.min(o, s[b + 5]), l = Math.max(l, s[b + 4]), h = Math.max(h, s[b + 5]), u < s[b + 5] ? (c = s[b + 4], u = s[b + 5]) : u === s[b + 5] && (c = f(c, s[b + 4]));
    else {
      const w = H.bezierBoundingBox(i, n, ...s.slice(b, b + 6));
      a = Math.min(a, w[0]), o = Math.min(o, w[1]), l = Math.max(l, w[2]), h = Math.max(h, w[3]), u < w[3] ? (c = w[2], u = w[3]) : u === w[3] && (c = f(c, w[2]));
    }
    i = s[b + 4], n = s[b + 5];
  }
  const g = r(this, qn);
  g[0] = a - r(this, ni), g[1] = o - r(this, ni), g[2] = l - a + 2 * r(this, ni), g[3] = h - o + 2 * r(this, ni), this.lastPoint = [c, u];
};
var pl, gl, Bi, ns, ue, Mf, sh, Rf, Lf, Wc;
class jc {
  constructor(t, e = 0, s = 0, i = !0) {
    m(this, ue);
    m(this, pl);
    m(this, gl);
    m(this, Bi, []);
    m(this, ns, []);
    let n = 1 / 0, a = -1 / 0, o = 1 / 0, l = -1 / 0;
    const h = 10 ** -4;
    for (const {
      x: w,
      y: v,
      width: S,
      height: E
    } of t) {
      const _ = Math.floor((w - e) / h) * h, C = Math.ceil((w + S + e) / h) * h, x = Math.floor((v - e) / h) * h, T = Math.ceil((v + E + e) / h) * h, k = [_, x, T, !0], M = [C, x, T, !1];
      r(this, Bi).push(k, M), n = Math.min(n, _), a = Math.max(a, C), o = Math.min(o, x), l = Math.max(l, T);
    }
    const c = a - n + 2 * s, u = l - o + 2 * s, f = n - s, g = o - s, b = r(this, Bi).at(i ? -1 : -2), y = [b[0], b[2]];
    for (const w of r(this, Bi)) {
      const [v, S, E] = w;
      w[0] = (v - f) / c, w[1] = (S - g) / u, w[2] = (E - g) / u;
    }
    p(this, pl, new Float32Array([f, g, c, u])), p(this, gl, y);
  }
  getOutlines() {
    r(this, Bi).sort((e, s) => e[0] - s[0] || e[1] - s[1] || e[2] - s[2]);
    const t = [];
    for (const e of r(this, Bi))
      e[3] ? (t.push(...A(this, ue, Wc).call(this, e)), A(this, ue, Rf).call(this, e)) : (A(this, ue, Lf).call(this, e), t.push(...A(this, ue, Wc).call(this, e)));
    return A(this, ue, Mf).call(this, t);
  }
}
pl = new WeakMap(), gl = new WeakMap(), Bi = new WeakMap(), ns = new WeakMap(), ue = new WeakSet(), Mf = function(t) {
  const e = [], s = /* @__PURE__ */ new Set();
  for (const a of t) {
    const [o, l, h] = a;
    e.push([o, l, a], [o, h, a]);
  }
  e.sort((a, o) => a[1] - o[1] || a[0] - o[0]);
  for (let a = 0, o = e.length; a < o; a += 2) {
    const l = e[a][2], h = e[a + 1][2];
    l.push(h), h.push(l), s.add(l), s.add(h);
  }
  const i = [];
  let n;
  for (; s.size > 0; ) {
    const a = s.values().next().value;
    let [o, l, h, c, u] = a;
    s.delete(a);
    let f = o, g = l;
    for (n = [o, h], i.push(n); ; ) {
      let b;
      if (s.has(c))
        b = c;
      else if (s.has(u))
        b = u;
      else
        break;
      s.delete(b), [o, l, h, c, u] = b, f !== o && (n.push(f, g, o, g === l ? l : h), f = o), g = g === l ? h : l;
    }
    n.push(f, g);
  }
  return new Qg(i, r(this, pl), r(this, gl));
}, sh = function(t) {
  const e = r(this, ns);
  let s = 0, i = e.length - 1;
  for (; s <= i; ) {
    const n = s + i >> 1, a = e[n][0];
    if (a === t)
      return n;
    a < t ? s = n + 1 : i = n - 1;
  }
  return i + 1;
}, Rf = function([, t, e]) {
  const s = A(this, ue, sh).call(this, t);
  r(this, ns).splice(s, 0, [t, e]);
}, Lf = function([, t, e]) {
  const s = A(this, ue, sh).call(this, t);
  for (let i = s; i < r(this, ns).length; i++) {
    const [n, a] = r(this, ns)[i];
    if (n !== t)
      break;
    if (n === t && a === e) {
      r(this, ns).splice(i, 1);
      return;
    }
  }
  for (let i = s - 1; i >= 0; i--) {
    const [n, a] = r(this, ns)[i];
    if (n !== t)
      break;
    if (n === t && a === e) {
      r(this, ns).splice(i, 1);
      return;
    }
  }
}, Wc = function(t) {
  const [e, s, i] = t, n = [[e, s, i]], a = A(this, ue, sh).call(this, i);
  for (let o = 0; o < a; o++) {
    const [l, h] = r(this, ns)[o];
    for (let c = 0, u = n.length; c < u; c++) {
      const [, f, g] = n[c];
      if (!(h <= f || g <= l)) {
        if (f >= l) {
          if (g > h)
            n[c][1] = h;
          else {
            if (u === 1)
              return [];
            n.splice(c, 1), c--, u--;
          }
          continue;
        }
        n[c][2] = l, g > h && n.push([e, h, g]);
      }
    }
  }
  return n;
};
var ml, ua;
class Qg extends I {
  constructor(e, s, i) {
    super();
    m(this, ml);
    m(this, ua);
    p(this, ua, e), p(this, ml, s), this.lastPoint = i;
  }
  toSVGPath() {
    const e = [];
    for (const s of r(this, ua)) {
      let [i, n] = s;
      e.push(`M${i} ${n}`);
      for (let a = 2; a < s.length; a += 2) {
        const o = s[a], l = s[a + 1];
        o === i ? (e.push(`V${l}`), n = l) : l === n && (e.push(`H${o}`), i = o);
      }
      e.push("Z");
    }
    return e.join(" ");
  }
  serialize([e, s, i, n], a) {
    const o = [], l = i - e, h = n - s;
    for (const c of r(this, ua)) {
      const u = new Array(c.length);
      for (let f = 0; f < c.length; f += 2)
        u[f] = e + c[f] * l, u[f + 1] = n - c[f + 1] * h;
      o.push(u);
    }
    return o;
  }
  get box() {
    return r(this, ml);
  }
  get classNamesForOutlining() {
    return ["highlightOutline"];
  }
}
ml = new WeakMap(), ua = new WeakMap();
class Xc extends gh {
  newFreeDrawOutline(t, e, s, i, n, a) {
    return new Zg(t, e, s, i, n, a);
  }
}
class Zg extends kf {
  newOutliner(t, e, s, i, n, a = 0) {
    return new Xc(t, e, s, i, n, a);
  }
}
var rs, Yn, fa, Lt, bl, pa, Al, yl, Hi, as, ga, vl, lt, qc, Yc, Kc, tn, If, mi;
const me = class me {
  constructor({
    editor: t = null,
    uiManager: e = null
  }) {
    m(this, lt);
    m(this, rs, null);
    m(this, Yn, null);
    m(this, fa);
    m(this, Lt, null);
    m(this, bl, !1);
    m(this, pa, !1);
    m(this, Al, null);
    m(this, yl);
    m(this, Hi, null);
    m(this, as, null);
    m(this, ga);
    var s;
    t ? (p(this, pa, !1), p(this, ga, J.HIGHLIGHT_COLOR), p(this, Al, t)) : (p(this, pa, !0), p(this, ga, J.HIGHLIGHT_DEFAULT_COLOR)), p(this, as, (t == null ? void 0 : t._uiManager) || e), p(this, yl, r(this, as)._eventBus), p(this, fa, (t == null ? void 0 : t.color) || ((s = r(this, as)) == null ? void 0 : s.highlightColors.values().next().value) || "#FFFF98"), r(me, vl) || p(me, vl, Object.freeze({
      blue: "pdfjs-editor-colorpicker-blue",
      green: "pdfjs-editor-colorpicker-green",
      pink: "pdfjs-editor-colorpicker-pink",
      red: "pdfjs-editor-colorpicker-red",
      yellow: "pdfjs-editor-colorpicker-yellow"
    }));
  }
  static get _keyboardManager() {
    return Q(this, "_keyboardManager", new Pl([[["Escape", "mac+Escape"], me.prototype._hideDropdownFromKeyboard], [[" ", "mac+ "], me.prototype._colorSelectFromKeyboard], [["ArrowDown", "ArrowRight", "mac+ArrowDown", "mac+ArrowRight"], me.prototype._moveToNext], [["ArrowUp", "ArrowLeft", "mac+ArrowUp", "mac+ArrowLeft"], me.prototype._moveToPrevious], [["Home", "mac+Home"], me.prototype._moveToBeginning], [["End", "mac+End"], me.prototype._moveToEnd]]));
  }
  renderButton() {
    const t = p(this, rs, document.createElement("button"));
    t.className = "colorPicker", t.tabIndex = "0", t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button"), t.setAttribute("aria-haspopup", !0);
    const e = r(this, as)._signal;
    t.addEventListener("click", A(this, lt, tn).bind(this), {
      signal: e
    }), t.addEventListener("keydown", A(this, lt, Kc).bind(this), {
      signal: e
    });
    const s = p(this, Yn, document.createElement("span"));
    return s.className = "swatch", s.setAttribute("aria-hidden", !0), s.style.backgroundColor = r(this, fa), t.append(s), t;
  }
  renderMainDropdown() {
    const t = p(this, Lt, A(this, lt, qc).call(this));
    return t.setAttribute("aria-orientation", "horizontal"), t.setAttribute("aria-labelledby", "highlightColorPickerLabel"), t;
  }
  _colorSelectFromKeyboard(t) {
    if (t.target === r(this, rs)) {
      A(this, lt, tn).call(this, t);
      return;
    }
    const e = t.target.getAttribute("data-color");
    e && A(this, lt, Yc).call(this, e, t);
  }
  _moveToNext(t) {
    var e, s;
    if (!r(this, lt, mi)) {
      A(this, lt, tn).call(this, t);
      return;
    }
    if (t.target === r(this, rs)) {
      (e = r(this, Lt).firstChild) == null || e.focus();
      return;
    }
    (s = t.target.nextSibling) == null || s.focus();
  }
  _moveToPrevious(t) {
    var e, s;
    if (t.target === ((e = r(this, Lt)) == null ? void 0 : e.firstChild) || t.target === r(this, rs)) {
      r(this, lt, mi) && this._hideDropdownFromKeyboard();
      return;
    }
    r(this, lt, mi) || A(this, lt, tn).call(this, t), (s = t.target.previousSibling) == null || s.focus();
  }
  _moveToBeginning(t) {
    var e;
    if (!r(this, lt, mi)) {
      A(this, lt, tn).call(this, t);
      return;
    }
    (e = r(this, Lt).firstChild) == null || e.focus();
  }
  _moveToEnd(t) {
    var e;
    if (!r(this, lt, mi)) {
      A(this, lt, tn).call(this, t);
      return;
    }
    (e = r(this, Lt).lastChild) == null || e.focus();
  }
  hideDropdown() {
    var t, e;
    (t = r(this, Lt)) == null || t.classList.add("hidden"), (e = r(this, Hi)) == null || e.abort(), p(this, Hi, null);
  }
  _hideDropdownFromKeyboard() {
    var t;
    if (!r(this, pa)) {
      if (!r(this, lt, mi)) {
        (t = r(this, Al)) == null || t.unselect();
        return;
      }
      this.hideDropdown(), r(this, rs).focus({
        preventScroll: !0,
        focusVisible: r(this, bl)
      });
    }
  }
  updateColor(t) {
    if (r(this, Yn) && (r(this, Yn).style.backgroundColor = t), !r(this, Lt))
      return;
    const e = r(this, as).highlightColors.values();
    for (const s of r(this, Lt).children)
      s.setAttribute("aria-selected", e.next().value === t);
  }
  destroy() {
    var t, e;
    (t = r(this, rs)) == null || t.remove(), p(this, rs, null), p(this, Yn, null), (e = r(this, Lt)) == null || e.remove(), p(this, Lt, null);
  }
};
rs = new WeakMap(), Yn = new WeakMap(), fa = new WeakMap(), Lt = new WeakMap(), bl = new WeakMap(), pa = new WeakMap(), Al = new WeakMap(), yl = new WeakMap(), Hi = new WeakMap(), as = new WeakMap(), ga = new WeakMap(), vl = new WeakMap(), lt = new WeakSet(), qc = function() {
  const t = document.createElement("div"), e = r(this, as)._signal;
  t.addEventListener("contextmenu", cs, {
    signal: e
  }), t.className = "dropdown", t.role = "listbox", t.setAttribute("aria-multiselectable", !1), t.setAttribute("aria-orientation", "vertical"), t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown");
  for (const [s, i] of r(this, as).highlightColors) {
    const n = document.createElement("button");
    n.tabIndex = "0", n.role = "option", n.setAttribute("data-color", i), n.title = s, n.setAttribute("data-l10n-id", r(me, vl)[s]);
    const a = document.createElement("span");
    n.append(a), a.className = "swatch", a.style.backgroundColor = i, n.setAttribute("aria-selected", i === r(this, fa)), n.addEventListener("click", A(this, lt, Yc).bind(this, i), {
      signal: e
    }), t.append(n);
  }
  return t.addEventListener("keydown", A(this, lt, Kc).bind(this), {
    signal: e
  }), t;
}, Yc = function(t, e) {
  e.stopPropagation(), r(this, yl).dispatch("switchannotationeditorparams", {
    source: this,
    type: r(this, ga),
    value: t
  });
}, Kc = function(t) {
  me._keyboardManager.exec(this, t);
}, tn = function(t) {
  if (r(this, lt, mi)) {
    this.hideDropdown();
    return;
  }
  if (p(this, bl, t.detail === 0), r(this, Hi) || (p(this, Hi, new AbortController()), window.addEventListener("pointerdown", A(this, lt, If).bind(this), {
    signal: r(this, as).combinedSignal(r(this, Hi))
  })), r(this, Lt)) {
    r(this, Lt).classList.remove("hidden");
    return;
  }
  const e = p(this, Lt, A(this, lt, qc).call(this));
  r(this, rs).append(e);
}, If = function(t) {
  var e;
  (e = r(this, Lt)) != null && e.contains(t.target) || this.hideDropdown();
}, mi = function() {
  return r(this, Lt) && !r(this, Lt).classList.contains("hidden");
}, m(me, vl, null);
let mh = me;
var ma, wl, ri, Kn, ba, ye, _l, Sl, Qn, Ge, Me, Vt, Aa, ai, te, ya, Ue, El, W, Qc, ih, Df, Ff, Nf, Zc, en, Xe, vr, Of, nh, Wa, Bf, Hf, zf, $f, Gf;
const nt = class nt extends vt {
  constructor(e) {
    super({
      ...e,
      name: "highlightEditor"
    });
    m(this, W);
    m(this, ma, null);
    m(this, wl, 0);
    m(this, ri);
    m(this, Kn, null);
    m(this, ba, null);
    m(this, ye, null);
    m(this, _l, null);
    m(this, Sl, 0);
    m(this, Qn, null);
    m(this, Ge, null);
    m(this, Me, null);
    m(this, Vt, !1);
    m(this, Aa, null);
    m(this, ai);
    m(this, te, null);
    m(this, ya, "");
    m(this, Ue);
    m(this, El, "");
    this.color = e.color || nt._defaultColor, p(this, Ue, e.thickness || nt._defaultThickness), p(this, ai, e.opacity || nt._defaultOpacity), p(this, ri, e.boxes || null), p(this, El, e.methodOfCreation || ""), p(this, ya, e.text || ""), this._isDraggable = !1, e.highlightId > -1 ? (p(this, Vt, !0), A(this, W, ih).call(this, e), A(this, W, en).call(this)) : r(this, ri) && (p(this, ma, e.anchorNode), p(this, wl, e.anchorOffset), p(this, _l, e.focusNode), p(this, Sl, e.focusOffset), A(this, W, Qc).call(this), A(this, W, en).call(this), this.rotate(this.rotation));
  }
  static get _keyboardManager() {
    const e = nt.prototype;
    return Q(this, "_keyboardManager", new Pl([[["ArrowLeft", "mac+ArrowLeft"], e._moveCaret, {
      args: [0]
    }], [["ArrowRight", "mac+ArrowRight"], e._moveCaret, {
      args: [1]
    }], [["ArrowUp", "mac+ArrowUp"], e._moveCaret, {
      args: [2]
    }], [["ArrowDown", "mac+ArrowDown"], e._moveCaret, {
      args: [3]
    }]]));
  }
  get telemetryInitialData() {
    return {
      action: "added",
      type: r(this, Vt) ? "free_highlight" : "highlight",
      color: this._uiManager.highlightColorNames.get(this.color),
      thickness: r(this, Ue),
      methodOfCreation: r(this, El)
    };
  }
  get telemetryFinalData() {
    return {
      type: "highlight",
      color: this._uiManager.highlightColorNames.get(this.color)
    };
  }
  static computeTelemetryFinalData(e) {
    return {
      numberOfColors: e.get("color").size
    };
  }
  static initialize(e, s) {
    var i;
    vt.initialize(e, s), nt._defaultColor || (nt._defaultColor = ((i = s.highlightColors) == null ? void 0 : i.values().next().value) || "#fff066");
  }
  static updateDefaultParams(e, s) {
    switch (e) {
      case J.HIGHLIGHT_DEFAULT_COLOR:
        nt._defaultColor = s;
        break;
      case J.HIGHLIGHT_THICKNESS:
        nt._defaultThickness = s;
        break;
    }
  }
  translateInPage(e, s) {
  }
  get toolbarPosition() {
    return r(this, Aa);
  }
  updateParams(e, s) {
    switch (e) {
      case J.HIGHLIGHT_COLOR:
        A(this, W, Df).call(this, s);
        break;
      case J.HIGHLIGHT_THICKNESS:
        A(this, W, Ff).call(this, s);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[J.HIGHLIGHT_DEFAULT_COLOR, nt._defaultColor], [J.HIGHLIGHT_THICKNESS, nt._defaultThickness]];
  }
  get propertiesToUpdate() {
    return [[J.HIGHLIGHT_COLOR, this.color || nt._defaultColor], [J.HIGHLIGHT_THICKNESS, r(this, Ue) || nt._defaultThickness], [J.HIGHLIGHT_FREE, r(this, Vt)]];
  }
  async addEditToolbar() {
    const e = await super.addEditToolbar();
    return e ? (this._uiManager.highlightColors && (p(this, ba, new mh({
      editor: this
    })), e.addColorPicker(r(this, ba))), e) : null;
  }
  disableEditing() {
    super.disableEditing(), this.div.classList.toggle("disabled", !0);
  }
  enableEditing() {
    super.enableEditing(), this.div.classList.toggle("disabled", !1);
  }
  fixAndSetPosition() {
    return super.fixAndSetPosition(A(this, W, Wa).call(this));
  }
  getBaseTranslation() {
    return [0, 0];
  }
  getRect(e, s) {
    return super.getRect(e, s, A(this, W, Wa).call(this));
  }
  onceAdded(e) {
    this.annotationElementId || this.parent.addUndoableEditor(this), e && this.div.focus();
  }
  remove() {
    A(this, W, Zc).call(this), this._reportTelemetry({
      action: "deleted"
    }), super.remove();
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (A(this, W, en).call(this), this.isAttachedToDOM || this.parent.add(this)));
  }
  setParent(e) {
    var i;
    let s = !1;
    this.parent && !e ? A(this, W, Zc).call(this) : e && (A(this, W, en).call(this, e), s = !this.parent && ((i = this.div) == null ? void 0 : i.classList.contains("selectedEditor"))), super.setParent(e), this.show(this._isVisible), s && this.select();
  }
  rotate(e) {
    var n, a, o;
    const {
      drawLayer: s
    } = this.parent;
    let i;
    r(this, Vt) ? (e = (e - this.rotation + 360) % 360, i = A(n = nt, Xe, vr).call(n, r(this, Ge).box, e)) : i = A(a = nt, Xe, vr).call(a, [this.x, this.y, this.width, this.height], e), s.updateProperties(r(this, Me), {
      bbox: i,
      root: {
        "data-main-rotation": e
      }
    }), s.updateProperties(r(this, te), {
      bbox: A(o = nt, Xe, vr).call(o, r(this, ye).box, e),
      root: {
        "data-main-rotation": e
      }
    });
  }
  render() {
    if (this.div)
      return this.div;
    const e = super.render();
    r(this, ya) && (e.setAttribute("aria-label", r(this, ya)), e.setAttribute("role", "mark")), r(this, Vt) ? e.classList.add("free") : this.div.addEventListener("keydown", A(this, W, Of).bind(this), {
      signal: this._uiManager._signal
    });
    const s = p(this, Qn, document.createElement("div"));
    e.append(s), s.setAttribute("aria-hidden", "true"), s.className = "internal", s.style.clipPath = r(this, Kn);
    const [i, n] = this.parentDimensions;
    return this.setDims(this.width * i, this.height * n), uh(this, r(this, Qn), ["pointerover", "pointerleave"]), this.enableEditing(), e;
  }
  pointerover() {
    var e;
    this.isSelected || (e = this.parent) == null || e.drawLayer.updateProperties(r(this, te), {
      rootClass: {
        hovered: !0
      }
    });
  }
  pointerleave() {
    var e;
    this.isSelected || (e = this.parent) == null || e.drawLayer.updateProperties(r(this, te), {
      rootClass: {
        hovered: !1
      }
    });
  }
  _moveCaret(e) {
    switch (this.parent.unselect(this), e) {
      case 0:
      case 2:
        A(this, W, nh).call(this, !0);
        break;
      case 1:
      case 3:
        A(this, W, nh).call(this, !1);
        break;
    }
  }
  select() {
    var e;
    super.select(), r(this, te) && ((e = this.parent) == null || e.drawLayer.updateProperties(r(this, te), {
      rootClass: {
        hovered: !1,
        selected: !0
      }
    }));
  }
  unselect() {
    var e;
    super.unselect(), r(this, te) && ((e = this.parent) == null || e.drawLayer.updateProperties(r(this, te), {
      rootClass: {
        selected: !1
      }
    }), r(this, Vt) || A(this, W, nh).call(this, !1));
  }
  get _mustFixPosition() {
    return !r(this, Vt);
  }
  show(e = this._isVisible) {
    super.show(e), this.parent && (this.parent.drawLayer.updateProperties(r(this, Me), {
      rootClass: {
        hidden: !e
      }
    }), this.parent.drawLayer.updateProperties(r(this, te), {
      rootClass: {
        hidden: !e
      }
    }));
  }
  static startHighlighting(e, s, {
    target: i,
    x: n,
    y: a
  }) {
    const {
      x: o,
      y: l,
      width: h,
      height: c
    } = i.getBoundingClientRect(), u = new AbortController(), f = e.combinedSignal(u), g = (b) => {
      u.abort(), A(this, Xe, $f).call(this, e, b);
    };
    window.addEventListener("blur", g, {
      signal: f
    }), window.addEventListener("pointerup", g, {
      signal: f
    }), window.addEventListener("pointerdown", Ne, {
      capture: !0,
      passive: !1,
      signal: f
    }), window.addEventListener("contextmenu", cs, {
      signal: f
    }), i.addEventListener("pointermove", A(this, Xe, zf).bind(this, e), {
      signal: f
    }), this._freeHighlight = new Xc({
      x: n,
      y: a
    }, [o, l, h, c], e.scale, this._defaultThickness / 2, s, 1e-3), {
      id: this._freeHighlightId,
      clipPathId: this._freeHighlightClipId
    } = e.drawLayer.draw({
      bbox: [0, 0, 1, 1],
      root: {
        viewBox: "0 0 1 1",
        fill: this._defaultColor,
        "fill-opacity": this._defaultOpacity
      },
      rootClass: {
        highlight: !0,
        free: !0
      },
      path: {
        d: this._freeHighlight.toSVGPath()
      }
    }, !0, !0);
  }
  static async deserialize(e, s, i) {
    var y, w, v, S;
    let n = null;
    if (e instanceof pf) {
      const {
        data: {
          quadPoints: E,
          rect: _,
          rotation: C,
          id: x,
          color: T,
          opacity: k,
          popupRef: M
        },
        parent: {
          page: {
            pageNumber: B
          }
        }
      } = e;
      n = e = {
        annotationType: X.HIGHLIGHT,
        color: Array.from(T),
        opacity: k,
        quadPoints: E,
        boxes: null,
        pageIndex: B - 1,
        rect: _.slice(0),
        rotation: C,
        id: x,
        deleted: !1,
        popupRef: M
      };
    } else if (e instanceof Sd) {
      const {
        data: {
          inkLists: E,
          rect: _,
          rotation: C,
          id: x,
          color: T,
          borderStyle: {
            rawWidth: k
          },
          popupRef: M
        },
        parent: {
          page: {
            pageNumber: B
          }
        }
      } = e;
      n = e = {
        annotationType: X.HIGHLIGHT,
        color: Array.from(T),
        thickness: k,
        inkLists: E,
        boxes: null,
        pageIndex: B - 1,
        rect: _.slice(0),
        rotation: C,
        id: x,
        deleted: !1,
        popupRef: M
      };
    }
    const {
      color: a,
      quadPoints: o,
      inkLists: l,
      opacity: h
    } = e, c = await super.deserialize(e, s, i);
    c.color = H.makeHexColor(...a), p(c, ai, h || 1), l && p(c, Ue, e.thickness), c.annotationElementId = e.id || null, c._initialData = n;
    const [u, f] = c.pageDimensions, [g, b] = c.pageTranslation;
    if (o) {
      const E = p(c, ri, []);
      for (let _ = 0; _ < o.length; _ += 8)
        E.push({
          x: (o[_] - g) / u,
          y: 1 - (o[_ + 1] - b) / f,
          width: (o[_ + 2] - o[_]) / u,
          height: (o[_ + 1] - o[_ + 5]) / f
        });
      A(y = c, W, Qc).call(y), A(w = c, W, en).call(w), c.rotate(c.rotation);
    } else if (l) {
      p(c, Vt, !0);
      const E = l[0], _ = {
        x: E[0] - g,
        y: f - (E[1] - b)
      }, C = new Xc(_, [0, 0, u, f], 1, r(c, Ue) / 2, !0, 1e-3);
      for (let k = 0, M = E.length; k < M; k += 2)
        _.x = E[k] - g, _.y = f - (E[k + 1] - b), C.add(_);
      const {
        id: x,
        clipPathId: T
      } = s.drawLayer.draw({
        bbox: [0, 0, 1, 1],
        root: {
          viewBox: "0 0 1 1",
          fill: c.color,
          "fill-opacity": c._defaultOpacity
        },
        rootClass: {
          highlight: !0,
          free: !0
        },
        path: {
          d: C.toSVGPath()
        }
      }, !0, !0);
      A(v = c, W, ih).call(v, {
        highlightOutlines: C.getOutlines(),
        highlightId: x,
        clipPathId: T
      }), A(S = c, W, en).call(S);
    }
    return c;
  }
  serialize(e = !1) {
    if (this.isEmpty() || e)
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const s = this.getRect(0, 0), i = vt._colorManager.convert(this.color), n = {
      annotationType: X.HIGHLIGHT,
      color: i,
      opacity: r(this, ai),
      thickness: r(this, Ue),
      quadPoints: A(this, W, Bf).call(this),
      outlines: A(this, W, Hf).call(this, s),
      pageIndex: this.pageIndex,
      rect: s,
      rotation: A(this, W, Wa).call(this),
      structTreeParentId: this._structTreeParentId
    };
    return this.annotationElementId && !A(this, W, Gf).call(this, n) ? null : (n.id = this.annotationElementId, n);
  }
  renderAnnotationElement(e) {
    return e.updateEdited({
      rect: this.getRect(0, 0)
    }), null;
  }
  static canCreateNewEmptyEditor() {
    return !1;
  }
};
ma = new WeakMap(), wl = new WeakMap(), ri = new WeakMap(), Kn = new WeakMap(), ba = new WeakMap(), ye = new WeakMap(), _l = new WeakMap(), Sl = new WeakMap(), Qn = new WeakMap(), Ge = new WeakMap(), Me = new WeakMap(), Vt = new WeakMap(), Aa = new WeakMap(), ai = new WeakMap(), te = new WeakMap(), ya = new WeakMap(), Ue = new WeakMap(), El = new WeakMap(), W = new WeakSet(), Qc = function() {
  const e = new jc(r(this, ri), 1e-3);
  p(this, Ge, e.getOutlines()), [this.x, this.y, this.width, this.height] = r(this, Ge).box;
  const s = new jc(r(this, ri), 25e-4, 1e-3, this._uiManager.direction === "ltr");
  p(this, ye, s.getOutlines());
  const {
    lastPoint: i
  } = r(this, ye);
  p(this, Aa, [(i[0] - this.x) / this.width, (i[1] - this.y) / this.height]);
}, ih = function({
  highlightOutlines: e,
  highlightId: s,
  clipPathId: i
}) {
  var u, f;
  if (p(this, Ge, e), p(this, ye, e.getNewOutline(r(this, Ue) / 2 + 1.5, 25e-4)), s >= 0)
    p(this, Me, s), p(this, Kn, i), this.parent.drawLayer.finalizeDraw(s, {
      bbox: e.box,
      path: {
        d: e.toSVGPath()
      }
    }), p(this, te, this.parent.drawLayer.drawOutline({
      rootClass: {
        highlightOutline: !0,
        free: !0
      },
      bbox: r(this, ye).box,
      path: {
        d: r(this, ye).toSVGPath()
      }
    }, !0));
  else if (this.parent) {
    const g = this.parent.viewport.rotation;
    this.parent.drawLayer.updateProperties(r(this, Me), {
      bbox: A(u = nt, Xe, vr).call(u, r(this, Ge).box, (g - this.rotation + 360) % 360),
      path: {
        d: e.toSVGPath()
      }
    }), this.parent.drawLayer.updateProperties(r(this, te), {
      bbox: A(f = nt, Xe, vr).call(f, r(this, ye).box, g),
      path: {
        d: r(this, ye).toSVGPath()
      }
    });
  }
  const [a, o, l, h] = e.box;
  switch (this.rotation) {
    case 0:
      this.x = a, this.y = o, this.width = l, this.height = h;
      break;
    case 90: {
      const [g, b] = this.parentDimensions;
      this.x = o, this.y = 1 - a, this.width = l * b / g, this.height = h * g / b;
      break;
    }
    case 180:
      this.x = 1 - a, this.y = 1 - o, this.width = l, this.height = h;
      break;
    case 270: {
      const [g, b] = this.parentDimensions;
      this.x = 1 - o, this.y = a, this.width = l * b / g, this.height = h * g / b;
      break;
    }
  }
  const {
    lastPoint: c
  } = r(this, ye);
  p(this, Aa, [(c[0] - a) / l, (c[1] - o) / h]);
}, Df = function(e) {
  const s = (a, o) => {
    var l, h;
    this.color = a, p(this, ai, o), (l = this.parent) == null || l.drawLayer.updateProperties(r(this, Me), {
      root: {
        fill: a,
        "fill-opacity": o
      }
    }), (h = r(this, ba)) == null || h.updateColor(a);
  }, i = this.color, n = r(this, ai);
  this.addCommands({
    cmd: s.bind(this, e, nt._defaultOpacity),
    undo: s.bind(this, i, n),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: J.HIGHLIGHT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  }), this._reportTelemetry({
    action: "color_changed",
    color: this._uiManager.highlightColorNames.get(e)
  }, !0);
}, Ff = function(e) {
  const s = r(this, Ue), i = (n) => {
    p(this, Ue, n), A(this, W, Nf).call(this, n);
  };
  this.addCommands({
    cmd: i.bind(this, e),
    undo: i.bind(this, s),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: J.INK_THICKNESS,
    overwriteIfSameType: !0,
    keepUndo: !0
  }), this._reportTelemetry({
    action: "thickness_changed",
    thickness: e
  }, !0);
}, Nf = function(e) {
  if (!r(this, Vt))
    return;
  A(this, W, ih).call(this, {
    highlightOutlines: r(this, Ge).getNewOutline(e / 2)
  }), this.fixAndSetPosition();
  const [s, i] = this.parentDimensions;
  this.setDims(this.width * s, this.height * i);
}, Zc = function() {
  r(this, Me) === null || !this.parent || (this.parent.drawLayer.remove(r(this, Me)), p(this, Me, null), this.parent.drawLayer.remove(r(this, te)), p(this, te, null));
}, en = function(e = this.parent) {
  r(this, Me) === null && ({
    id: ne(this, Me)._,
    clipPathId: ne(this, Kn)._
  } = e.drawLayer.draw({
    bbox: r(this, Ge).box,
    root: {
      viewBox: "0 0 1 1",
      fill: this.color,
      "fill-opacity": r(this, ai)
    },
    rootClass: {
      highlight: !0,
      free: r(this, Vt)
    },
    path: {
      d: r(this, Ge).toSVGPath()
    }
  }, !1, !0), p(this, te, e.drawLayer.drawOutline({
    rootClass: {
      highlightOutline: !0,
      free: r(this, Vt)
    },
    bbox: r(this, ye).box,
    path: {
      d: r(this, ye).toSVGPath()
    }
  }, r(this, Vt))), r(this, Qn) && (r(this, Qn).style.clipPath = r(this, Kn)));
}, Xe = new WeakSet(), vr = function([e, s, i, n], a) {
  switch (a) {
    case 90:
      return [1 - s - n, e, n, i];
    case 180:
      return [1 - e - i, 1 - s - n, i, n];
    case 270:
      return [s, 1 - e - i, n, i];
  }
  return [e, s, i, n];
}, Of = function(e) {
  nt._keyboardManager.exec(this, e);
}, nh = function(e) {
  if (!r(this, ma))
    return;
  const s = window.getSelection();
  e ? s.setPosition(r(this, ma), r(this, wl)) : s.setPosition(r(this, _l), r(this, Sl));
}, Wa = function() {
  return r(this, Vt) ? this.rotation : 0;
}, Bf = function() {
  if (r(this, Vt))
    return null;
  const [e, s] = this.pageDimensions, [i, n] = this.pageTranslation, a = r(this, ri), o = new Float32Array(a.length * 8);
  let l = 0;
  for (const {
    x: h,
    y: c,
    width: u,
    height: f
  } of a) {
    const g = h * e + i, b = (1 - c) * s + n;
    o[l] = o[l + 4] = g, o[l + 1] = o[l + 3] = b, o[l + 2] = o[l + 6] = g + u * e, o[l + 5] = o[l + 7] = b - f * s, l += 8;
  }
  return o;
}, Hf = function(e) {
  return r(this, Ge).serialize(e, A(this, W, Wa).call(this));
}, zf = function(e, s) {
  this._freeHighlight.add(s) && e.drawLayer.updateProperties(this._freeHighlightId, {
    path: {
      d: this._freeHighlight.toSVGPath()
    }
  });
}, $f = function(e, s) {
  this._freeHighlight.isEmpty() ? e.drawLayer.remove(this._freeHighlightId) : e.createAndAddNewEditor(s, !1, {
    highlightId: this._freeHighlightId,
    highlightOutlines: this._freeHighlight.getOutlines(),
    clipPathId: this._freeHighlightClipId,
    methodOfCreation: "main_toolbar"
  }), this._freeHighlightId = -1, this._freeHighlight = null, this._freeHighlightClipId = "";
}, Gf = function(e) {
  const {
    color: s
  } = this._initialData;
  return e.color.some((i, n) => i !== s[n]);
}, m(nt, Xe), $(nt, "_defaultColor", null), $(nt, "_defaultOpacity", 1), $(nt, "_defaultThickness", 12), $(nt, "_type", "highlight"), $(nt, "_editorType", X.HIGHLIGHT), $(nt, "_freeHighlightId", -1), $(nt, "_freeHighlight", null), $(nt, "_freeHighlightClipId", "");
let bh = nt;
var Zn;
class Jg {
  constructor() {
    m(this, Zn, /* @__PURE__ */ Object.create(null));
  }
  updateProperty(t, e) {
    this[t] = e, this.updateSVGProperty(t, e);
  }
  updateProperties(t) {
    if (t)
      for (const [e, s] of Object.entries(t))
        this.updateProperty(e, s);
  }
  updateSVGProperty(t, e) {
    r(this, Zn)[t] = e;
  }
  toSVGProperties() {
    const t = r(this, Zn);
    return p(this, Zn, /* @__PURE__ */ Object.create(null)), {
      root: t
    };
  }
  reset() {
    p(this, Zn, /* @__PURE__ */ Object.create(null));
  }
  updateAll(t = this) {
    this.updateProperties(t);
  }
  clone() {
    ct("Not implemented");
  }
}
Zn = new WeakMap();
var Re, va, Bt, Jn, tr, zi, $i, Gi, er, st, td, ed, sd, Xa, Uf, rh, qa, wr;
const D = class D extends vt {
  constructor(e) {
    super(e);
    m(this, st);
    m(this, Re, null);
    m(this, va);
    $(this, "_drawId", null);
    p(this, va, e.mustBeCommitted || !1), e.drawOutlines && (A(this, st, td).call(this, e), A(this, st, Xa).call(this));
  }
  static _mergeSVGProperties(e, s) {
    const i = new Set(Object.keys(e));
    for (const [n, a] of Object.entries(s))
      i.has(n) ? Object.assign(e[n], a) : e[n] = a;
    return e;
  }
  static getDefaultDrawingOptions(e) {
    ct("Not implemented");
  }
  static get typesMap() {
    ct("Not implemented");
  }
  static get isDrawer() {
    return !0;
  }
  static get supportMultipleDrawings() {
    return !1;
  }
  static updateDefaultParams(e, s) {
    const i = this.typesMap.get(e);
    i && this._defaultDrawingOptions.updateProperty(i, s), this._currentParent && (r(D, Bt).updateProperty(i, s), this._currentParent.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties()));
  }
  updateParams(e, s) {
    const i = this.constructor.typesMap.get(e);
    i && this._updateProperty(e, i, s);
  }
  static get defaultPropertiesToUpdate() {
    const e = [], s = this._defaultDrawingOptions;
    for (const [i, n] of this.typesMap)
      e.push([i, s[n]]);
    return e;
  }
  get propertiesToUpdate() {
    const e = [], {
      _drawingOptions: s
    } = this;
    for (const [i, n] of this.constructor.typesMap)
      e.push([i, s[n]]);
    return e;
  }
  _updateProperty(e, s, i) {
    const n = this._drawingOptions, a = n[s], o = (l) => {
      var c;
      n.updateProperty(s, l);
      const h = r(this, Re).updateProperty(s, l);
      h && A(this, st, qa).call(this, h), (c = this.parent) == null || c.drawLayer.updateProperties(this._drawId, n.toSVGProperties());
    };
    this.addCommands({
      cmd: o.bind(this, i),
      undo: o.bind(this, a),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: !0,
      type: e,
      overwriteIfSameType: !0,
      keepUndo: !0
    });
  }
  _onResizing() {
    var e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, D._mergeSVGProperties(r(this, Re).getPathResizingSVGProperties(A(this, st, rh).call(this)), {
      bbox: A(this, st, wr).call(this)
    }));
  }
  _onResized() {
    var e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, D._mergeSVGProperties(r(this, Re).getPathResizedSVGProperties(A(this, st, rh).call(this)), {
      bbox: A(this, st, wr).call(this)
    }));
  }
  _onTranslating(e, s) {
    var i;
    (i = this.parent) == null || i.drawLayer.updateProperties(this._drawId, {
      bbox: A(this, st, wr).call(this, e, s)
    });
  }
  _onTranslated() {
    var e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, D._mergeSVGProperties(r(this, Re).getPathTranslatedSVGProperties(A(this, st, rh).call(this), this.parentDimensions), {
      bbox: A(this, st, wr).call(this)
    }));
  }
  _onStartDragging() {
    var e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, {
      rootClass: {
        moving: !0
      }
    });
  }
  _onStopDragging() {
    var e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, {
      rootClass: {
        moving: !1
      }
    });
  }
  commit() {
    super.commit(), this.disableEditMode(), this.disableEditing();
  }
  disableEditing() {
    super.disableEditing(), this.div.classList.toggle("disabled", !0);
  }
  enableEditing() {
    super.enableEditing(), this.div.classList.toggle("disabled", !1);
  }
  getBaseTranslation() {
    return [0, 0];
  }
  get isResizable() {
    return !0;
  }
  onceAdded(e) {
    this.annotationElementId || this.parent.addUndoableEditor(this), this._isDraggable = !0, r(this, va) && (p(this, va, !1), this.commit(), this.parent.setSelected(this), e && this.isOnScreen && this.div.focus());
  }
  remove() {
    A(this, st, sd).call(this), super.remove();
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (A(this, st, Xa).call(this), A(this, st, qa).call(this, r(this, Re).box), this.isAttachedToDOM || this.parent.add(this)));
  }
  setParent(e) {
    var i;
    let s = !1;
    this.parent && !e ? (this._uiManager.removeShouldRescale(this), A(this, st, sd).call(this)) : e && (this._uiManager.addShouldRescale(this), A(this, st, Xa).call(this, e), s = !this.parent && ((i = this.div) == null ? void 0 : i.classList.contains("selectedEditor"))), super.setParent(e), s && this.select();
  }
  rotate() {
    this.parent && this.parent.drawLayer.updateProperties(this._drawId, D._mergeSVGProperties({
      bbox: A(this, st, wr).call(this)
    }, r(this, Re).updateRotation((this.parentRotation - this.rotation + 360) % 360)));
  }
  onScaleChanging() {
    this.parent && A(this, st, qa).call(this, r(this, Re).updateParentDimensions(this.parentDimensions, this.parent.scale));
  }
  static onScaleChangingWhenDrawing() {
  }
  render() {
    if (this.div)
      return this.div;
    const e = super.render();
    e.classList.add("draw");
    const s = document.createElement("div");
    e.append(s), s.setAttribute("aria-hidden", "true"), s.className = "internal";
    const [i, n] = this.parentDimensions;
    return this.setDims(this.width * i, this.height * n), this._uiManager.addShouldRescale(this), this.disableEditing(), e;
  }
  static createDrawerInstance(e, s, i, n, a) {
    ct("Not implemented");
  }
  static startDrawing(e, s, i, n) {
    var w;
    const {
      target: a,
      offsetX: o,
      offsetY: l,
      pointerId: h,
      pointerType: c
    } = n;
    if (r(D, $i) && r(D, $i) !== c)
      return;
    const {
      viewport: {
        rotation: u
      }
    } = e, {
      width: f,
      height: g
    } = a.getBoundingClientRect(), b = p(D, Jn, new AbortController()), y = e.combinedSignal(b);
    if (r(D, zi) || p(D, zi, h), r(D, $i) ?? p(D, $i, c), window.addEventListener("pointerup", (v) => {
      var S;
      r(D, zi) === v.pointerId ? this._endDraw(v) : (S = r(D, Gi)) == null || S.delete(v.pointerId);
    }, {
      signal: y
    }), window.addEventListener("pointercancel", (v) => {
      var S;
      r(D, zi) === v.pointerId ? this._currentParent.endDrawingSession() : (S = r(D, Gi)) == null || S.delete(v.pointerId);
    }, {
      signal: y
    }), window.addEventListener("pointerdown", (v) => {
      r(D, $i) === v.pointerType && ((r(D, Gi) || p(D, Gi, /* @__PURE__ */ new Set())).add(v.pointerId), r(D, Bt).isCancellable() && (r(D, Bt).removeLastElement(), r(D, Bt).isEmpty() ? this._currentParent.endDrawingSession(!0) : this._endDraw(null)));
    }, {
      capture: !0,
      passive: !1,
      signal: y
    }), window.addEventListener("contextmenu", cs, {
      signal: y
    }), a.addEventListener("pointermove", this._drawMove.bind(this), {
      signal: y
    }), a.addEventListener("touchmove", (v) => {
      v.timeStamp === r(D, er) && Ne(v);
    }, {
      signal: y
    }), e.toggleDrawing(), (w = s._editorUndoBar) == null || w.hide(), r(D, Bt)) {
      e.drawLayer.updateProperties(this._currentDrawId, r(D, Bt).startNew(o, l, f, g, u));
      return;
    }
    s.updateUIForDefaultProperties(this), p(D, Bt, this.createDrawerInstance(o, l, f, g, u)), p(D, tr, this.getDefaultDrawingOptions()), this._currentParent = e, {
      id: this._currentDrawId
    } = e.drawLayer.draw(this._mergeSVGProperties(r(D, tr).toSVGProperties(), r(D, Bt).defaultSVGProperties), !0, !1);
  }
  static _drawMove(e) {
    var a;
    if (p(D, er, -1), !r(D, Bt))
      return;
    const {
      offsetX: s,
      offsetY: i,
      pointerId: n
    } = e;
    if (r(D, zi) === n) {
      if (((a = r(D, Gi)) == null ? void 0 : a.size) >= 1) {
        this._endDraw(e);
        return;
      }
      this._currentParent.drawLayer.updateProperties(this._currentDrawId, r(D, Bt).add(s, i)), p(D, er, e.timeStamp), Ne(e);
    }
  }
  static _cleanup(e) {
    e && (this._currentDrawId = -1, this._currentParent = null, p(D, Bt, null), p(D, tr, null), p(D, $i, null), p(D, er, NaN)), r(D, Jn) && (r(D, Jn).abort(), p(D, Jn, null), p(D, zi, NaN), p(D, Gi, null));
  }
  static _endDraw(e) {
    const s = this._currentParent;
    if (s) {
      if (s.toggleDrawing(!0), this._cleanup(!1), e && s.drawLayer.updateProperties(this._currentDrawId, r(D, Bt).end(e.offsetX, e.offsetY)), this.supportMultipleDrawings) {
        const i = r(D, Bt), n = this._currentDrawId, a = i.getLastElement();
        s.addCommands({
          cmd: () => {
            s.drawLayer.updateProperties(n, i.setLastElement(a));
          },
          undo: () => {
            s.drawLayer.updateProperties(n, i.removeLastElement());
          },
          mustExec: !1,
          type: J.DRAW_STEP
        });
        return;
      }
      this.endDrawing(!1);
    }
  }
  static endDrawing(e) {
    const s = this._currentParent;
    if (!s)
      return null;
    if (s.toggleDrawing(!0), s.cleanUndoStack(J.DRAW_STEP), !r(D, Bt).isEmpty()) {
      const {
        pageDimensions: [i, n],
        scale: a
      } = s, o = s.createAndAddNewEditor({
        offsetX: 0,
        offsetY: 0
      }, !1, {
        drawId: this._currentDrawId,
        drawOutlines: r(D, Bt).getOutlines(i * a, n * a, a, this._INNER_MARGIN),
        drawingOptions: r(D, tr),
        mustBeCommitted: !e
      });
      return this._cleanup(!0), o;
    }
    return s.drawLayer.remove(this._currentDrawId), this._cleanup(!0), null;
  }
  createDrawingOptions(e) {
  }
  static deserializeDraw(e, s, i, n, a, o) {
    ct("Not implemented");
  }
  static async deserialize(e, s, i) {
    var u, f;
    const {
      rawDims: {
        pageWidth: n,
        pageHeight: a,
        pageX: o,
        pageY: l
      }
    } = s.viewport, h = this.deserializeDraw(o, l, n, a, this._INNER_MARGIN, e), c = await super.deserialize(e, s, i);
    return c.createDrawingOptions(e), A(u = c, st, td).call(u, {
      drawOutlines: h
    }), A(f = c, st, Xa).call(f), c.onScaleChanging(), c.rotate(), c;
  }
  serializeDraw(e) {
    const [s, i] = this.pageTranslation, [n, a] = this.pageDimensions;
    return r(this, Re).serialize([s, i, n, a], e);
  }
  renderAnnotationElement(e) {
    return e.updateEdited({
      rect: this.getRect(0, 0)
    }), null;
  }
  static canCreateNewEmptyEditor() {
    return !1;
  }
};
Re = new WeakMap(), va = new WeakMap(), Bt = new WeakMap(), Jn = new WeakMap(), tr = new WeakMap(), zi = new WeakMap(), $i = new WeakMap(), Gi = new WeakMap(), er = new WeakMap(), st = new WeakSet(), td = function({
  drawOutlines: e,
  drawId: s,
  drawingOptions: i
}) {
  p(this, Re, e), this._drawingOptions || (this._drawingOptions = i), s >= 0 ? (this._drawId = s, this.parent.drawLayer.finalizeDraw(s, e.defaultProperties)) : this._drawId = A(this, st, ed).call(this, e, this.parent), A(this, st, qa).call(this, e.box);
}, ed = function(e, s) {
  const {
    id: i
  } = s.drawLayer.draw(D._mergeSVGProperties(this._drawingOptions.toSVGProperties(), e.defaultSVGProperties), !1, !1);
  return i;
}, sd = function() {
  this._drawId === null || !this.parent || (this.parent.drawLayer.remove(this._drawId), this._drawId = null, this._drawingOptions.reset());
}, Xa = function(e = this.parent) {
  if (!(this._drawId !== null && this.parent === e)) {
    if (this._drawId !== null) {
      this.parent.drawLayer.updateParent(this._drawId, e.drawLayer);
      return;
    }
    this._drawingOptions.updateAll(), this._drawId = A(this, st, ed).call(this, r(this, Re), e);
  }
}, Uf = function([e, s, i, n]) {
  const {
    parentDimensions: [a, o],
    rotation: l
  } = this;
  switch (l) {
    case 90:
      return [s, 1 - e, i * (o / a), n * (a / o)];
    case 180:
      return [1 - e, 1 - s, i, n];
    case 270:
      return [1 - s, e, i * (o / a), n * (a / o)];
    default:
      return [e, s, i, n];
  }
}, rh = function() {
  const {
    x: e,
    y: s,
    width: i,
    height: n,
    parentDimensions: [a, o],
    rotation: l
  } = this;
  switch (l) {
    case 90:
      return [1 - s, e, i * (a / o), n * (o / a)];
    case 180:
      return [1 - e, 1 - s, i, n];
    case 270:
      return [s, 1 - e, i * (a / o), n * (o / a)];
    default:
      return [e, s, i, n];
  }
}, qa = function(e) {
  if ([this.x, this.y, this.width, this.height] = A(this, st, Uf).call(this, e), this.div) {
    this.fixAndSetPosition();
    const [s, i] = this.parentDimensions;
    this.setDims(this.width * s, this.height * i);
  }
  this._onResized();
}, wr = function() {
  const {
    x: e,
    y: s,
    width: i,
    height: n,
    rotation: a,
    parentRotation: o,
    parentDimensions: [l, h]
  } = this;
  switch ((a * 4 + o) / 90) {
    case 1:
      return [1 - s - n, e, n, i];
    case 2:
      return [1 - e - i, 1 - s - n, i, n];
    case 3:
      return [s, 1 - e - i, n, i];
    case 4:
      return [e, s - i * (l / h), n * (h / l), i * (l / h)];
    case 5:
      return [1 - s, e, i * (l / h), n * (h / l)];
    case 6:
      return [1 - e - n * (h / l), 1 - s, n * (h / l), i * (l / h)];
    case 7:
      return [s - i * (l / h), 1 - e - n * (h / l), i * (l / h), n * (h / l)];
    case 8:
      return [e - i, s - n, i, n];
    case 9:
      return [1 - s, e - i, n, i];
    case 10:
      return [1 - e, 1 - s, i, n];
    case 11:
      return [s - n, 1 - e, n, i];
    case 12:
      return [e - n * (h / l), s, n * (h / l), i * (l / h)];
    case 13:
      return [1 - s - i * (l / h), e - n * (h / l), i * (l / h), n * (h / l)];
    case 14:
      return [1 - e, 1 - s - i * (l / h), n * (h / l), i * (l / h)];
    case 15:
      return [s, 1 - e, i * (l / h), n * (h / l)];
    default:
      return [e, s, i, n];
  }
}, $(D, "_currentDrawId", -1), $(D, "_currentParent", null), m(D, Bt, null), m(D, Jn, null), m(D, tr, null), m(D, zi, NaN), m(D, $i, null), m(D, Gi, null), m(D, er, NaN), $(D, "_INNER_MARGIN", 3);
let Jc = D;
var Ts, Ht, zt, sr, wa, oe, jt, Ve, ir, nr, rr, _a, ah;
class tm {
  constructor(t, e, s, i, n, a) {
    m(this, _a);
    m(this, Ts, new Float64Array(6));
    m(this, Ht);
    m(this, zt);
    m(this, sr);
    m(this, wa);
    m(this, oe);
    m(this, jt, "");
    m(this, Ve, 0);
    m(this, ir, new Ah());
    m(this, nr);
    m(this, rr);
    p(this, nr, s), p(this, rr, i), p(this, sr, n), p(this, wa, a), [t, e] = A(this, _a, ah).call(this, t, e);
    const o = p(this, Ht, [NaN, NaN, NaN, NaN, t, e]);
    p(this, oe, [t, e]), p(this, zt, [{
      line: o,
      points: r(this, oe)
    }]), r(this, Ts).set(o, 0);
  }
  updateProperty(t, e) {
    t === "stroke-width" && p(this, wa, e);
  }
  isEmpty() {
    return !r(this, zt) || r(this, zt).length === 0;
  }
  isCancellable() {
    return r(this, oe).length <= 10;
  }
  add(t, e) {
    [t, e] = A(this, _a, ah).call(this, t, e);
    const [s, i, n, a] = r(this, Ts).subarray(2, 6), o = t - n, l = e - a;
    return Math.hypot(r(this, nr) * o, r(this, rr) * l) <= 2 ? null : (r(this, oe).push(t, e), isNaN(s) ? (r(this, Ts).set([n, a, t, e], 2), r(this, Ht).push(NaN, NaN, NaN, NaN, t, e), {
      path: {
        d: this.toSVGPath()
      }
    }) : (isNaN(r(this, Ts)[0]) && r(this, Ht).splice(6, 6), r(this, Ts).set([s, i, n, a, t, e], 0), r(this, Ht).push(...I.createBezierPoints(s, i, n, a, t, e)), {
      path: {
        d: this.toSVGPath()
      }
    }));
  }
  end(t, e) {
    const s = this.add(t, e);
    return s || (r(this, oe).length === 2 ? {
      path: {
        d: this.toSVGPath()
      }
    } : null);
  }
  startNew(t, e, s, i, n) {
    p(this, nr, s), p(this, rr, i), p(this, sr, n), [t, e] = A(this, _a, ah).call(this, t, e);
    const a = p(this, Ht, [NaN, NaN, NaN, NaN, t, e]);
    p(this, oe, [t, e]);
    const o = r(this, zt).at(-1);
    return o && (o.line = new Float32Array(o.line), o.points = new Float32Array(o.points)), r(this, zt).push({
      line: a,
      points: r(this, oe)
    }), r(this, Ts).set(a, 0), p(this, Ve, 0), this.toSVGPath(), null;
  }
  getLastElement() {
    return r(this, zt).at(-1);
  }
  setLastElement(t) {
    return r(this, zt) ? (r(this, zt).push(t), p(this, Ht, t.line), p(this, oe, t.points), p(this, Ve, 0), {
      path: {
        d: this.toSVGPath()
      }
    }) : r(this, ir).setLastElement(t);
  }
  removeLastElement() {
    if (!r(this, zt))
      return r(this, ir).removeLastElement();
    r(this, zt).pop(), p(this, jt, "");
    for (let t = 0, e = r(this, zt).length; t < e; t++) {
      const {
        line: s,
        points: i
      } = r(this, zt)[t];
      p(this, Ht, s), p(this, oe, i), p(this, Ve, 0), this.toSVGPath();
    }
    return {
      path: {
        d: r(this, jt)
      }
    };
  }
  toSVGPath() {
    const t = I.svgRound(r(this, Ht)[4]), e = I.svgRound(r(this, Ht)[5]);
    if (r(this, oe).length === 2)
      return p(this, jt, `${r(this, jt)} M ${t} ${e} Z`), r(this, jt);
    if (r(this, oe).length <= 6) {
      const i = r(this, jt).lastIndexOf("M");
      p(this, jt, `${r(this, jt).slice(0, i)} M ${t} ${e}`), p(this, Ve, 6);
    }
    if (r(this, oe).length === 4) {
      const i = I.svgRound(r(this, Ht)[10]), n = I.svgRound(r(this, Ht)[11]);
      return p(this, jt, `${r(this, jt)} L ${i} ${n}`), p(this, Ve, 12), r(this, jt);
    }
    const s = [];
    r(this, Ve) === 0 && (s.push(`M ${t} ${e}`), p(this, Ve, 6));
    for (let i = r(this, Ve), n = r(this, Ht).length; i < n; i += 6) {
      const [a, o, l, h, c, u] = r(this, Ht).slice(i, i + 6).map(I.svgRound);
      s.push(`C${a} ${o} ${l} ${h} ${c} ${u}`);
    }
    return p(this, jt, r(this, jt) + s.join(" ")), p(this, Ve, r(this, Ht).length), r(this, jt);
  }
  getOutlines(t, e, s, i) {
    const n = r(this, zt).at(-1);
    return n.line = new Float32Array(n.line), n.points = new Float32Array(n.points), r(this, ir).build(r(this, zt), t, e, s, r(this, sr), r(this, wa), i), p(this, Ts, null), p(this, Ht, null), p(this, zt, null), p(this, jt, null), r(this, ir);
  }
  get defaultSVGProperties() {
    return {
      root: {
        viewBox: "0 0 10000 10000"
      },
      rootClass: {
        draw: !0
      },
      bbox: [0, 0, 1, 1]
    };
  }
}
Ts = new WeakMap(), Ht = new WeakMap(), zt = new WeakMap(), sr = new WeakMap(), wa = new WeakMap(), oe = new WeakMap(), jt = new WeakMap(), Ve = new WeakMap(), ir = new WeakMap(), nr = new WeakMap(), rr = new WeakMap(), _a = new WeakSet(), ah = function(t, e) {
  return I._normalizePoint(t, e, r(this, nr), r(this, rr), r(this, sr));
};
var le, Cl, xl, Le, ks, Ps, Sa, Ea, Ca, Xt, Os, Vf, jf, Wf;
const Pd = class Pd extends I {
  constructor() {
    super(...arguments);
    m(this, Xt);
    m(this, le);
    m(this, Cl, 0);
    m(this, xl);
    m(this, Le);
    m(this, ks);
    m(this, Ps);
    m(this, Sa);
    m(this, Ea);
    m(this, Ca);
  }
  build(e, s, i, n, a, o, l) {
    p(this, ks, s), p(this, Ps, i), p(this, Sa, n), p(this, Ea, a), p(this, Ca, o), p(this, xl, l ?? 0), p(this, Le, e), A(this, Xt, jf).call(this);
  }
  setLastElement(e) {
    return r(this, Le).push(e), {
      path: {
        d: this.toSVGPath()
      }
    };
  }
  removeLastElement() {
    return r(this, Le).pop(), {
      path: {
        d: this.toSVGPath()
      }
    };
  }
  toSVGPath() {
    const e = [];
    for (const {
      line: s
    } of r(this, Le)) {
      if (e.push(`M${I.svgRound(s[4])} ${I.svgRound(s[5])}`), s.length === 6) {
        e.push("Z");
        continue;
      }
      if (s.length === 12) {
        e.push(`L${I.svgRound(s[10])} ${I.svgRound(s[11])}`);
        continue;
      }
      for (let i = 6, n = s.length; i < n; i += 6) {
        const [a, o, l, h, c, u] = s.subarray(i, i + 6).map(I.svgRound);
        e.push(`C${a} ${o} ${l} ${h} ${c} ${u}`);
      }
    }
    return e.join("");
  }
  serialize([e, s, i, n], a) {
    const o = [], l = [], [h, c, u, f] = A(this, Xt, Vf).call(this);
    let g, b, y, w, v, S, E, _, C;
    switch (r(this, Ea)) {
      case 0:
        C = I._rescale, g = e, b = s + n, y = i, w = -n, v = e + h * i, S = s + (1 - c - f) * n, E = e + (h + u) * i, _ = s + (1 - c) * n;
        break;
      case 90:
        C = I._rescaleAndSwap, g = e, b = s, y = i, w = n, v = e + c * i, S = s + h * n, E = e + (c + f) * i, _ = s + (h + u) * n;
        break;
      case 180:
        C = I._rescale, g = e + i, b = s, y = -i, w = n, v = e + (1 - h - u) * i, S = s + c * n, E = e + (1 - h) * i, _ = s + (c + f) * n;
        break;
      case 270:
        C = I._rescaleAndSwap, g = e + i, b = s + n, y = -i, w = -n, v = e + (1 - c - f) * i, S = s + (1 - h - u) * n, E = e + (1 - c) * i, _ = s + (1 - h) * n;
        break;
    }
    for (const {
      line: x,
      points: T
    } of r(this, Le))
      o.push(C(x, g, b, y, w, a ? new Array(x.length) : null)), l.push(C(T, g, b, y, w, a ? new Array(T.length) : null));
    return {
      lines: o,
      points: l,
      rect: [v, S, E, _]
    };
  }
  static deserialize(e, s, i, n, a, {
    paths: {
      lines: o,
      points: l
    },
    rotation: h,
    thickness: c
  }) {
    const u = [];
    let f, g, b, y, w;
    switch (h) {
      case 0:
        w = I._rescale, f = -e / i, g = s / n + 1, b = 1 / i, y = -1 / n;
        break;
      case 90:
        w = I._rescaleAndSwap, f = -s / n, g = -e / i, b = 1 / n, y = 1 / i;
        break;
      case 180:
        w = I._rescale, f = e / i + 1, g = -s / n, b = -1 / i, y = 1 / n;
        break;
      case 270:
        w = I._rescaleAndSwap, f = s / n + 1, g = e / i + 1, b = -1 / n, y = -1 / i;
        break;
    }
    if (!o) {
      o = [];
      for (const S of l) {
        const E = S.length;
        if (E === 2) {
          o.push(new Float32Array([NaN, NaN, NaN, NaN, S[0], S[1]]));
          continue;
        }
        if (E === 4) {
          o.push(new Float32Array([NaN, NaN, NaN, NaN, S[0], S[1], NaN, NaN, NaN, NaN, S[2], S[3]]));
          continue;
        }
        const _ = new Float32Array(3 * (E - 2));
        o.push(_);
        let [C, x, T, k] = S.subarray(0, 4);
        _.set([NaN, NaN, NaN, NaN, C, x], 0);
        for (let M = 4; M < E; M += 2) {
          const B = S[M], F = S[M + 1];
          _.set(I.createBezierPoints(C, x, T, k, B, F), (M - 2) * 3), [C, x, T, k] = [T, k, B, F];
        }
      }
    }
    for (let S = 0, E = o.length; S < E; S++)
      u.push({
        line: w(o[S].map((_) => _ ?? NaN), f, g, b, y),
        points: w(l[S].map((_) => _ ?? NaN), f, g, b, y)
      });
    const v = new Pd();
    return v.build(u, i, n, 1, h, c, a), v;
  }
  get box() {
    return r(this, le);
  }
  updateProperty(e, s) {
    return e === "stroke-width" ? A(this, Xt, Wf).call(this, s) : null;
  }
  updateParentDimensions([e, s], i) {
    const [n, a] = A(this, Xt, Os).call(this);
    p(this, ks, e), p(this, Ps, s), p(this, Sa, i);
    const [o, l] = A(this, Xt, Os).call(this), h = o - n, c = l - a, u = r(this, le);
    return u[0] -= h, u[1] -= c, u[2] += 2 * h, u[3] += 2 * c, u;
  }
  updateRotation(e) {
    return p(this, Cl, e), {
      path: {
        transform: this.rotationTransform
      }
    };
  }
  get viewBox() {
    return r(this, le).map(I.svgRound).join(" ");
  }
  get defaultProperties() {
    const [e, s] = r(this, le);
    return {
      root: {
        viewBox: this.viewBox
      },
      path: {
        "transform-origin": `${I.svgRound(e)} ${I.svgRound(s)}`
      }
    };
  }
  get rotationTransform() {
    const [, , e, s] = r(this, le);
    let i = 0, n = 0, a = 0, o = 0, l = 0, h = 0;
    switch (r(this, Cl)) {
      case 90:
        n = s / e, a = -e / s, l = e;
        break;
      case 180:
        i = -1, o = -1, l = e, h = s;
        break;
      case 270:
        n = -s / e, a = e / s, h = s;
        break;
      default:
        return "";
    }
    return `matrix(${i} ${n} ${a} ${o} ${I.svgRound(l)} ${I.svgRound(h)})`;
  }
  getPathResizingSVGProperties([e, s, i, n]) {
    const [a, o] = A(this, Xt, Os).call(this), [l, h, c, u] = r(this, le);
    if (Math.abs(c - a) <= I.PRECISION || Math.abs(u - o) <= I.PRECISION) {
      const w = e + i / 2 - (l + c / 2), v = s + n / 2 - (h + u / 2);
      return {
        path: {
          "transform-origin": `${I.svgRound(e)} ${I.svgRound(s)}`,
          transform: `${this.rotationTransform} translate(${w} ${v})`
        }
      };
    }
    const f = (i - 2 * a) / (c - 2 * a), g = (n - 2 * o) / (u - 2 * o), b = c / i, y = u / n;
    return {
      path: {
        "transform-origin": `${I.svgRound(l)} ${I.svgRound(h)}`,
        transform: `${this.rotationTransform} scale(${b} ${y}) translate(${I.svgRound(a)} ${I.svgRound(o)}) scale(${f} ${g}) translate(${I.svgRound(-a)} ${I.svgRound(-o)})`
      }
    };
  }
  getPathResizedSVGProperties([e, s, i, n]) {
    const [a, o] = A(this, Xt, Os).call(this), l = r(this, le), [h, c, u, f] = l;
    if (l[0] = e, l[1] = s, l[2] = i, l[3] = n, Math.abs(u - a) <= I.PRECISION || Math.abs(f - o) <= I.PRECISION) {
      const v = e + i / 2 - (h + u / 2), S = s + n / 2 - (c + f / 2);
      for (const {
        line: E,
        points: _
      } of r(this, Le))
        I._translate(E, v, S, E), I._translate(_, v, S, _);
      return {
        root: {
          viewBox: this.viewBox
        },
        path: {
          "transform-origin": `${I.svgRound(e)} ${I.svgRound(s)}`,
          transform: this.rotationTransform || null,
          d: this.toSVGPath()
        }
      };
    }
    const g = (i - 2 * a) / (u - 2 * a), b = (n - 2 * o) / (f - 2 * o), y = -g * (h + a) + e + a, w = -b * (c + o) + s + o;
    if (g !== 1 || b !== 1 || y !== 0 || w !== 0)
      for (const {
        line: v,
        points: S
      } of r(this, Le))
        I._rescale(v, y, w, g, b, v), I._rescale(S, y, w, g, b, S);
    return {
      root: {
        viewBox: this.viewBox
      },
      path: {
        "transform-origin": `${I.svgRound(e)} ${I.svgRound(s)}`,
        transform: this.rotationTransform || null,
        d: this.toSVGPath()
      }
    };
  }
  getPathTranslatedSVGProperties([e, s], i) {
    const [n, a] = i, o = r(this, le), l = e - o[0], h = s - o[1];
    if (r(this, ks) === n && r(this, Ps) === a)
      for (const {
        line: c,
        points: u
      } of r(this, Le))
        I._translate(c, l, h, c), I._translate(u, l, h, u);
    else {
      const c = r(this, ks) / n, u = r(this, Ps) / a;
      p(this, ks, n), p(this, Ps, a);
      for (const {
        line: f,
        points: g
      } of r(this, Le))
        I._rescale(f, l, h, c, u, f), I._rescale(g, l, h, c, u, g);
      o[2] *= c, o[3] *= u;
    }
    return o[0] = e, o[1] = s, {
      root: {
        viewBox: this.viewBox
      },
      path: {
        d: this.toSVGPath(),
        "transform-origin": `${I.svgRound(e)} ${I.svgRound(s)}`
      }
    };
  }
  get defaultSVGProperties() {
    const e = r(this, le);
    return {
      root: {
        viewBox: this.viewBox
      },
      rootClass: {
        draw: !0
      },
      path: {
        d: this.toSVGPath(),
        "transform-origin": `${I.svgRound(e[0])} ${I.svgRound(e[1])}`,
        transform: this.rotationTransform || null
      },
      bbox: e
    };
  }
};
le = new WeakMap(), Cl = new WeakMap(), xl = new WeakMap(), Le = new WeakMap(), ks = new WeakMap(), Ps = new WeakMap(), Sa = new WeakMap(), Ea = new WeakMap(), Ca = new WeakMap(), Xt = new WeakSet(), Os = function(e = r(this, Ca)) {
  const s = r(this, xl) + e / 2 * r(this, Sa);
  return r(this, Ea) % 180 === 0 ? [s / r(this, ks), s / r(this, Ps)] : [s / r(this, Ps), s / r(this, ks)];
}, Vf = function() {
  const [e, s, i, n] = r(this, le), [a, o] = A(this, Xt, Os).call(this, 0);
  return [e + a, s + o, i - 2 * a, n - 2 * o];
}, jf = function() {
  const e = p(this, le, new Float32Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]));
  for (const {
    line: n
  } of r(this, Le)) {
    if (n.length <= 12) {
      for (let l = 4, h = n.length; l < h; l += 6) {
        const [c, u] = n.subarray(l, l + 2);
        e[0] = Math.min(e[0], c), e[1] = Math.min(e[1], u), e[2] = Math.max(e[2], c), e[3] = Math.max(e[3], u);
      }
      continue;
    }
    let a = n[4], o = n[5];
    for (let l = 6, h = n.length; l < h; l += 6) {
      const [c, u, f, g, b, y] = n.subarray(l, l + 6);
      H.bezierBoundingBox(a, o, c, u, f, g, b, y, e), a = b, o = y;
    }
  }
  const [s, i] = A(this, Xt, Os).call(this);
  e[0] = Math.min(1, Math.max(0, e[0] - s)), e[1] = Math.min(1, Math.max(0, e[1] - i)), e[2] = Math.min(1, Math.max(0, e[2] + s)), e[3] = Math.min(1, Math.max(0, e[3] + i)), e[2] -= e[0], e[3] -= e[1];
}, Wf = function(e) {
  const [s, i] = A(this, Xt, Os).call(this);
  p(this, Ca, e);
  const [n, a] = A(this, Xt, Os).call(this), [o, l] = [n - s, a - i], h = r(this, le);
  return h[0] -= o, h[1] -= l, h[2] += 2 * o, h[3] += 2 * l, h;
};
let Ah = Pd;
var xa;
const Md = class Md extends Jg {
  constructor(e) {
    super();
    m(this, xa);
    p(this, xa, e), super.updateProperties({
      fill: "none",
      stroke: vt._defaultLineColor,
      "stroke-opacity": 1,
      "stroke-width": 1,
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-miterlimit": 10
    });
  }
  updateSVGProperty(e, s) {
    e === "stroke-width" && (s ?? (s = this["stroke-width"]), s *= r(this, xa).realScale), super.updateSVGProperty(e, s);
  }
  clone() {
    const e = new Md(r(this, xa));
    return e.updateAll(this), e;
  }
};
xa = new WeakMap();
let id = Md;
var Nh, Xf;
const Sr = class Sr extends Jc {
  constructor(e) {
    super({
      ...e,
      name: "inkEditor"
    });
    m(this, Nh);
    this._willKeepAspectRatio = !0;
  }
  static initialize(e, s) {
    vt.initialize(e, s), this._defaultDrawingOptions = new id(s.viewParameters);
  }
  static getDefaultDrawingOptions(e) {
    const s = this._defaultDrawingOptions.clone();
    return s.updateProperties(e), s;
  }
  static get supportMultipleDrawings() {
    return !0;
  }
  static get typesMap() {
    return Q(this, "typesMap", /* @__PURE__ */ new Map([[J.INK_THICKNESS, "stroke-width"], [J.INK_COLOR, "stroke"], [J.INK_OPACITY, "stroke-opacity"]]));
  }
  static createDrawerInstance(e, s, i, n, a) {
    return new tm(e, s, i, n, a, this._defaultDrawingOptions["stroke-width"]);
  }
  static deserializeDraw(e, s, i, n, a, o) {
    return Ah.deserialize(e, s, i, n, a, o);
  }
  static async deserialize(e, s, i) {
    let n = null;
    if (e instanceof Sd) {
      const {
        data: {
          inkLists: o,
          rect: l,
          rotation: h,
          id: c,
          color: u,
          opacity: f,
          borderStyle: {
            rawWidth: g
          },
          popupRef: b
        },
        parent: {
          page: {
            pageNumber: y
          }
        }
      } = e;
      n = e = {
        annotationType: X.INK,
        color: Array.from(u),
        thickness: g,
        opacity: f,
        paths: {
          points: o
        },
        boxes: null,
        pageIndex: y - 1,
        rect: l.slice(0),
        rotation: h,
        id: c,
        deleted: !1,
        popupRef: b
      };
    }
    const a = await super.deserialize(e, s, i);
    return a.annotationElementId = e.id || null, a._initialData = n, a;
  }
  onScaleChanging() {
    if (!this.parent)
      return;
    super.onScaleChanging();
    const {
      _drawId: e,
      _drawingOptions: s,
      parent: i
    } = this;
    s.updateSVGProperty("stroke-width"), i.drawLayer.updateProperties(e, s.toSVGProperties());
  }
  static onScaleChangingWhenDrawing() {
    const e = this._currentParent;
    e && (super.onScaleChangingWhenDrawing(), this._defaultDrawingOptions.updateSVGProperty("stroke-width"), e.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties()));
  }
  createDrawingOptions({
    color: e,
    thickness: s,
    opacity: i
  }) {
    this._drawingOptions = Sr.getDefaultDrawingOptions({
      stroke: H.makeHexColor(...e),
      "stroke-width": s,
      "stroke-opacity": i
    });
  }
  serialize(e = !1) {
    if (this.isEmpty())
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const {
      lines: s,
      points: i,
      rect: n
    } = this.serializeDraw(e), {
      _drawingOptions: {
        stroke: a,
        "stroke-opacity": o,
        "stroke-width": l
      }
    } = this, h = {
      annotationType: X.INK,
      color: vt._colorManager.convert(a),
      opacity: o,
      thickness: l,
      paths: {
        lines: s,
        points: i
      },
      pageIndex: this.pageIndex,
      rect: n,
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId
    };
    return e ? h : this.annotationElementId && !A(this, Nh, Xf).call(this, h) ? null : (h.id = this.annotationElementId, h);
  }
  renderAnnotationElement(e) {
    const {
      points: s,
      rect: i
    } = this.serializeDraw(!1);
    return e.updateEdited({
      rect: i,
      thickness: this._drawingOptions["stroke-width"],
      points: s
    }), null;
  }
};
Nh = new WeakSet(), Xf = function(e) {
  const {
    color: s,
    thickness: i,
    opacity: n,
    pageIndex: a
  } = this._initialData;
  return this._hasBeenMoved || this._hasBeenResized || e.color.some((o, l) => o !== s[l]) || e.thickness !== i || e.opacity !== n || e.pageIndex !== a;
}, $(Sr, "_type", "ink"), $(Sr, "_editorType", X.INK), $(Sr, "_defaultDrawingOptions", null);
let nd = Sr;
var yt, Wt, Ui, oi, Vi, Ta, Ms, Rs, Ie, ka, it, Ya, Ka, oh, ad, lh, od, hh, qf;
const Za = class Za extends vt {
  constructor(e) {
    super({
      ...e,
      name: "stampEditor"
    });
    m(this, it);
    m(this, yt, null);
    m(this, Wt, null);
    m(this, Ui, null);
    m(this, oi, null);
    m(this, Vi, null);
    m(this, Ta, "");
    m(this, Ms, null);
    m(this, Rs, null);
    m(this, Ie, !1);
    m(this, ka, !1);
    p(this, oi, e.bitmapUrl), p(this, Vi, e.bitmapFile);
  }
  static initialize(e, s) {
    vt.initialize(e, s);
  }
  static get supportedTypes() {
    return Q(this, "supportedTypes", ["apng", "avif", "bmp", "gif", "jpeg", "png", "svg+xml", "webp", "x-icon"].map((s) => `image/${s}`));
  }
  static get supportedTypesStr() {
    return Q(this, "supportedTypesStr", this.supportedTypes.join(","));
  }
  static isHandlingMimeForPasting(e) {
    return this.supportedTypes.includes(e);
  }
  static paste(e, s) {
    s.pasteEditor(X.STAMP, {
      bitmapFile: e.getAsFile()
    });
  }
  altTextFinish() {
    this._uiManager.useNewAltTextFlow && (this.div.hidden = !1), super.altTextFinish();
  }
  get telemetryFinalData() {
    var e;
    return {
      type: "stamp",
      hasAltText: !!((e = this.altTextData) != null && e.altText)
    };
  }
  static computeTelemetryFinalData(e) {
    const s = e.get("hasAltText");
    return {
      hasAltText: s.get(!0) ?? 0,
      hasNoAltText: s.get(!1) ?? 0
    };
  }
  async mlGuessAltText(e = null, s = !0) {
    if (this.hasAltTextData())
      return null;
    const {
      mlManager: i
    } = this._uiManager;
    if (!i)
      throw new Error("No ML.");
    if (!await i.isEnabledFor("altText"))
      throw new Error("ML isn't enabled for alt text.");
    const {
      data: n,
      width: a,
      height: o
    } = e || this.copyCanvas(null, null, !0).imageData, l = await i.guess({
      name: "altText",
      request: {
        data: n,
        width: a,
        height: o,
        channels: n.length / (a * o)
      }
    });
    if (!l)
      throw new Error("No response from the AI service.");
    if (l.error)
      throw new Error("Error from the AI service.");
    if (l.cancel)
      return null;
    if (!l.output)
      throw new Error("No valid response from the AI service.");
    const h = l.output;
    return await this.setGuessedAltText(h), s && !this.hasAltTextData() && (this.altTextData = {
      alt: h,
      decorative: !1
    }), h;
  }
  remove() {
    var e;
    r(this, Wt) && (p(this, yt, null), this._uiManager.imageManager.deleteId(r(this, Wt)), (e = r(this, Ms)) == null || e.remove(), p(this, Ms, null), r(this, Rs) && (clearTimeout(r(this, Rs)), p(this, Rs, null))), super.remove();
  }
  rebuild() {
    if (!this.parent) {
      r(this, Wt) && A(this, it, oh).call(this);
      return;
    }
    super.rebuild(), this.div !== null && (r(this, Wt) && r(this, Ms) === null && A(this, it, oh).call(this), this.isAttachedToDOM || this.parent.add(this));
  }
  onceAdded(e) {
    this._isDraggable = !0, e && this.div.focus();
  }
  isEmpty() {
    return !(r(this, Ui) || r(this, yt) || r(this, oi) || r(this, Vi) || r(this, Wt));
  }
  get isResizable() {
    return !0;
  }
  render() {
    if (this.div)
      return this.div;
    let e, s;
    if (this.width && (e = this.x, s = this.y), super.render(), this.div.hidden = !0, this.div.setAttribute("role", "figure"), this.addAltTextButton(), r(this, yt) ? A(this, it, ad).call(this) : A(this, it, oh).call(this), this.width && !this.annotationElementId) {
      const [i, n] = this.parentDimensions;
      this.setAt(e * i, s * n, this.width * i, this.height * n);
    }
    return this._uiManager.addShouldRescale(this), this.div;
  }
  _onResized() {
    this.onScaleChanging();
  }
  onScaleChanging() {
    if (!this.parent)
      return;
    r(this, Rs) !== null && clearTimeout(r(this, Rs)), p(this, Rs, setTimeout(() => {
      p(this, Rs, null), A(this, it, od).call(this);
    }, 200));
  }
  copyCanvas(e, s, i = !1) {
    var g;
    e || (e = 224);
    const {
      width: n,
      height: a
    } = r(this, yt), o = new ic();
    let l = r(this, yt), h = n, c = a, u = null;
    if (s) {
      if (n > s || a > s) {
        const k = Math.min(s / n, s / a);
        h = Math.floor(n * k), c = Math.floor(a * k);
      }
      u = document.createElement("canvas");
      const b = u.width = Math.ceil(h * o.sx), y = u.height = Math.ceil(c * o.sy);
      r(this, Ie) || (l = A(this, it, lh).call(this, b, y));
      const w = u.getContext("2d");
      w.filter = this._uiManager.hcmFilter;
      let v = "white", S = "#cfcfd8";
      this._uiManager.hcmFilter !== "none" ? S = "black" : (g = window.matchMedia) != null && g.call(window, "(prefers-color-scheme: dark)").matches && (v = "#8f8f9d", S = "#42414d");
      const E = 15, _ = E * o.sx, C = E * o.sy, x = new OffscreenCanvas(_ * 2, C * 2), T = x.getContext("2d");
      T.fillStyle = v, T.fillRect(0, 0, _ * 2, C * 2), T.fillStyle = S, T.fillRect(0, 0, _, C), T.fillRect(_, C, _, C), w.fillStyle = w.createPattern(x, "repeat"), w.fillRect(0, 0, b, y), w.drawImage(l, 0, 0, l.width, l.height, 0, 0, b, y);
    }
    let f = null;
    if (i) {
      let b, y;
      if (o.symmetric && l.width < e && l.height < e)
        b = l.width, y = l.height;
      else if (l = r(this, yt), n > e || a > e) {
        const S = Math.min(e / n, e / a);
        b = Math.floor(n * S), y = Math.floor(a * S), r(this, Ie) || (l = A(this, it, lh).call(this, b, y));
      }
      const v = new OffscreenCanvas(b, y).getContext("2d", {
        willReadFrequently: !0
      });
      v.drawImage(l, 0, 0, l.width, l.height, 0, 0, b, y), f = {
        width: b,
        height: y,
        data: v.getImageData(0, 0, b, y).data
      };
    }
    return {
      canvas: u,
      width: h,
      height: c,
      imageData: f
    };
  }
  getImageForAltText() {
    return r(this, Ms);
  }
  static async deserialize(e, s, i) {
    var y;
    let n = null;
    if (e instanceof gf) {
      const {
        data: {
          rect: w,
          rotation: v,
          id: S,
          structParent: E,
          popupRef: _
        },
        container: C,
        parent: {
          page: {
            pageNumber: x
          }
        }
      } = e, T = C.querySelector("canvas"), k = i.imageManager.getFromCanvas(C.id, T);
      T.remove();
      const M = ((y = await s._structTree.getAriaAttributes(`${gd}${S}`)) == null ? void 0 : y.get("aria-label")) || "";
      n = e = {
        annotationType: X.STAMP,
        bitmapId: k.id,
        bitmap: k.bitmap,
        pageIndex: x - 1,
        rect: w.slice(0),
        rotation: v,
        id: S,
        deleted: !1,
        accessibilityData: {
          decorative: !1,
          altText: M
        },
        isSvg: !1,
        structParent: E,
        popupRef: _
      };
    }
    const a = await super.deserialize(e, s, i), {
      rect: o,
      bitmap: l,
      bitmapUrl: h,
      bitmapId: c,
      isSvg: u,
      accessibilityData: f
    } = e;
    c && i.imageManager.isValidId(c) ? (p(a, Wt, c), l && p(a, yt, l)) : p(a, oi, h), p(a, Ie, u);
    const [g, b] = a.pageDimensions;
    return a.width = (o[2] - o[0]) / g, a.height = (o[3] - o[1]) / b, a.annotationElementId = e.id || null, f && (a.altTextData = f), a._initialData = n, p(a, ka, !!n), a;
  }
  serialize(e = !1, s = null) {
    if (this.isEmpty())
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const i = {
      annotationType: X.STAMP,
      bitmapId: r(this, Wt),
      pageIndex: this.pageIndex,
      rect: this.getRect(0, 0),
      rotation: this.rotation,
      isSvg: r(this, Ie),
      structTreeParentId: this._structTreeParentId
    };
    if (e)
      return i.bitmapUrl = A(this, it, hh).call(this, !0), i.accessibilityData = this.serializeAltText(!0), i;
    const {
      decorative: n,
      altText: a
    } = this.serializeAltText(!1);
    if (!n && a && (i.accessibilityData = {
      type: "Figure",
      alt: a
    }), this.annotationElementId) {
      const l = A(this, it, qf).call(this, i);
      if (l.isSame)
        return null;
      l.isSameAltText ? delete i.accessibilityData : i.accessibilityData.structParent = this._initialData.structParent ?? -1;
    }
    if (i.id = this.annotationElementId, s === null)
      return i;
    s.stamps || (s.stamps = /* @__PURE__ */ new Map());
    const o = r(this, Ie) ? (i.rect[2] - i.rect[0]) * (i.rect[3] - i.rect[1]) : null;
    if (!s.stamps.has(r(this, Wt)))
      s.stamps.set(r(this, Wt), {
        area: o,
        serialized: i
      }), i.bitmap = A(this, it, hh).call(this, !1);
    else if (r(this, Ie)) {
      const l = s.stamps.get(r(this, Wt));
      o > l.area && (l.area = o, l.serialized.bitmap.close(), l.serialized.bitmap = A(this, it, hh).call(this, !1));
    }
    return i;
  }
  renderAnnotationElement(e) {
    return e.updateEdited({
      rect: this.getRect(0, 0)
    }), null;
  }
};
yt = new WeakMap(), Wt = new WeakMap(), Ui = new WeakMap(), oi = new WeakMap(), Vi = new WeakMap(), Ta = new WeakMap(), Ms = new WeakMap(), Rs = new WeakMap(), Ie = new WeakMap(), ka = new WeakMap(), it = new WeakSet(), Ya = function(e, s = !1) {
  if (!e) {
    this.remove();
    return;
  }
  p(this, yt, e.bitmap), s || (p(this, Wt, e.id), p(this, Ie, e.isSvg)), e.file && p(this, Ta, e.file.name), A(this, it, ad).call(this);
}, Ka = function() {
  if (p(this, Ui, null), this._uiManager.enableWaiting(!1), !!r(this, Ms)) {
    if (this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && r(this, yt)) {
      this._editToolbar.hide(), this._uiManager.editAltText(this, !0);
      return;
    }
    if (!this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && r(this, yt)) {
      this._reportTelemetry({
        action: "pdfjs.image.image_added",
        data: {
          alt_text_modal: !1,
          alt_text_type: "empty"
        }
      });
      try {
        this.mlGuessAltText();
      } catch {
      }
    }
    this.div.focus();
  }
}, oh = function() {
  if (r(this, Wt)) {
    this._uiManager.enableWaiting(!0), this._uiManager.imageManager.getFromId(r(this, Wt)).then((i) => A(this, it, Ya).call(this, i, !0)).finally(() => A(this, it, Ka).call(this));
    return;
  }
  if (r(this, oi)) {
    const i = r(this, oi);
    p(this, oi, null), this._uiManager.enableWaiting(!0), p(this, Ui, this._uiManager.imageManager.getFromUrl(i).then((n) => A(this, it, Ya).call(this, n)).finally(() => A(this, it, Ka).call(this)));
    return;
  }
  if (r(this, Vi)) {
    const i = r(this, Vi);
    p(this, Vi, null), this._uiManager.enableWaiting(!0), p(this, Ui, this._uiManager.imageManager.getFromFile(i).then((n) => A(this, it, Ya).call(this, n)).finally(() => A(this, it, Ka).call(this)));
    return;
  }
  const e = document.createElement("input");
  e.type = "file", e.accept = Za.supportedTypesStr;
  const s = this._uiManager._signal;
  p(this, Ui, new Promise((i) => {
    e.addEventListener("change", async () => {
      if (!e.files || e.files.length === 0)
        this.remove();
      else {
        this._uiManager.enableWaiting(!0);
        const n = await this._uiManager.imageManager.getFromFile(e.files[0]);
        this._reportTelemetry({
          action: "pdfjs.image.image_selected",
          data: {
            alt_text_modal: this._uiManager.useNewAltTextFlow
          }
        }), A(this, it, Ya).call(this, n);
      }
      i();
    }, {
      signal: s
    }), e.addEventListener("cancel", () => {
      this.remove(), i();
    }, {
      signal: s
    });
  }).finally(() => A(this, it, Ka).call(this))), e.click();
}, ad = function() {
  var u;
  const {
    div: e
  } = this;
  let {
    width: s,
    height: i
  } = r(this, yt);
  const [n, a] = this.pageDimensions, o = 0.75;
  if (this.width)
    s = this.width * n, i = this.height * a;
  else if (s > o * n || i > o * a) {
    const f = Math.min(o * n / s, o * a / i);
    s *= f, i *= f;
  }
  const [l, h] = this.parentDimensions;
  this.setDims(s * l / n, i * h / a), this._uiManager.enableWaiting(!1);
  const c = p(this, Ms, document.createElement("canvas"));
  c.setAttribute("role", "img"), this.addContainer(c), this.width = s / n, this.height = i / a, (u = this._initialOptions) != null && u.isCentered ? this.center() : this.fixAndSetPosition(), this._initialOptions = null, (!this._uiManager.useNewAltTextWhenAddingImage || !this._uiManager.useNewAltTextFlow || this.annotationElementId) && (e.hidden = !1), A(this, it, od).call(this), r(this, ka) || (this.parent.addUndoableEditor(this), p(this, ka, !0)), this._reportTelemetry({
    action: "inserted_image"
  }), r(this, Ta) && c.setAttribute("aria-label", r(this, Ta));
}, lh = function(e, s) {
  const {
    width: i,
    height: n
  } = r(this, yt);
  let a = i, o = n, l = r(this, yt);
  for (; a > 2 * e || o > 2 * s; ) {
    const h = a, c = o;
    a > 2 * e && (a = a >= 16384 ? Math.floor(a / 2) - 1 : Math.ceil(a / 2)), o > 2 * s && (o = o >= 16384 ? Math.floor(o / 2) - 1 : Math.ceil(o / 2));
    const u = new OffscreenCanvas(a, o);
    u.getContext("2d").drawImage(l, 0, 0, h, c, 0, 0, a, o), l = u.transferToImageBitmap();
  }
  return l;
}, od = function() {
  const [e, s] = this.parentDimensions, {
    width: i,
    height: n
  } = this, a = new ic(), o = Math.ceil(i * e * a.sx), l = Math.ceil(n * s * a.sy), h = r(this, Ms);
  if (!h || h.width === o && h.height === l)
    return;
  h.width = o, h.height = l;
  const c = r(this, Ie) ? r(this, yt) : A(this, it, lh).call(this, o, l), u = h.getContext("2d");
  u.filter = this._uiManager.hcmFilter, u.drawImage(c, 0, 0, c.width, c.height, 0, 0, o, l);
}, hh = function(e) {
  if (e) {
    if (r(this, Ie)) {
      const n = this._uiManager.imageManager.getSvgUrl(r(this, Wt));
      if (n)
        return n;
    }
    const s = document.createElement("canvas");
    return {
      width: s.width,
      height: s.height
    } = r(this, yt), s.getContext("2d").drawImage(r(this, yt), 0, 0), s.toDataURL();
  }
  if (r(this, Ie)) {
    const [s, i] = this.pageDimensions, n = Math.round(this.width * s * Ki.PDF_TO_CSS_UNITS), a = Math.round(this.height * i * Ki.PDF_TO_CSS_UNITS), o = new OffscreenCanvas(n, a);
    return o.getContext("2d").drawImage(r(this, yt), 0, 0, r(this, yt).width, r(this, yt).height, 0, 0, n, a), o.transferToImageBitmap();
  }
  return structuredClone(r(this, yt));
}, qf = function(e) {
  var o;
  const {
    pageIndex: s,
    accessibilityData: {
      altText: i
    }
  } = this._initialData, n = e.pageIndex === s, a = (((o = e.accessibilityData) == null ? void 0 : o.alt) || "") === i;
  return {
    isSame: !this._hasBeenMoved && !this._hasBeenResized && n && a,
    isSameAltText: a
  };
}, $(Za, "_type", "stamp"), $(Za, "_editorType", X.STAMP);
let rd = Za;
var ar, Pa, Ls, ji, li, je, Wi, Ma, or, os, hi, ee, ci, O, Xi, bt, Yf, gs, hd, cd, ch;
const Ye = class Ye {
  constructor({
    uiManager: t,
    pageIndex: e,
    div: s,
    structTreeLayer: i,
    accessibilityManager: n,
    annotationLayer: a,
    drawLayer: o,
    textLayer: l,
    viewport: h,
    l10n: c
  }) {
    m(this, bt);
    m(this, ar);
    m(this, Pa, !1);
    m(this, Ls, null);
    m(this, ji, null);
    m(this, li, null);
    m(this, je, /* @__PURE__ */ new Map());
    m(this, Wi, !1);
    m(this, Ma, !1);
    m(this, or, !1);
    m(this, os, null);
    m(this, hi, null);
    m(this, ee, null);
    m(this, ci, null);
    m(this, O);
    const u = [...r(Ye, Xi).values()];
    if (!Ye._initialized) {
      Ye._initialized = !0;
      for (const f of u)
        f.initialize(c, t);
    }
    t.registerEditorTypes(u), p(this, O, t), this.pageIndex = e, this.div = s, p(this, ar, n), p(this, Ls, a), this.viewport = h, p(this, ee, l), this.drawLayer = o, this._structTree = i, r(this, O).addLayer(this);
  }
  get isEmpty() {
    return r(this, je).size === 0;
  }
  get isInvisible() {
    return this.isEmpty && r(this, O).getMode() === X.NONE;
  }
  updateToolbar(t) {
    r(this, O).updateToolbar(t);
  }
  updateMode(t = r(this, O).getMode()) {
    switch (A(this, bt, ch).call(this), t) {
      case X.NONE:
        this.disableTextSelection(), this.togglePointerEvents(!1), this.toggleAnnotationLayerPointerEvents(!0), this.disableClick();
        return;
      case X.INK:
        this.disableTextSelection(), this.togglePointerEvents(!0), this.enableClick();
        break;
      case X.HIGHLIGHT:
        this.enableTextSelection(), this.togglePointerEvents(!1), this.disableClick();
        break;
      default:
        this.disableTextSelection(), this.togglePointerEvents(!0), this.enableClick();
    }
    this.toggleAnnotationLayerPointerEvents(!1);
    const {
      classList: e
    } = this.div;
    for (const s of r(Ye, Xi).values())
      e.toggle(`${s._type}Editing`, t === s._editorType);
    this.div.hidden = !1;
  }
  hasTextLayer(t) {
    var e;
    return t === ((e = r(this, ee)) == null ? void 0 : e.div);
  }
  setEditingState(t) {
    r(this, O).setEditingState(t);
  }
  addCommands(t) {
    r(this, O).addCommands(t);
  }
  cleanUndoStack(t) {
    r(this, O).cleanUndoStack(t);
  }
  toggleDrawing(t = !1) {
    this.div.classList.toggle("drawing", !t);
  }
  togglePointerEvents(t = !1) {
    this.div.classList.toggle("disabled", !t);
  }
  toggleAnnotationLayerPointerEvents(t = !1) {
    var e;
    (e = r(this, Ls)) == null || e.div.classList.toggle("disabled", !t);
  }
  async enable() {
    p(this, or, !0), this.div.tabIndex = 0, this.togglePointerEvents(!0);
    const t = /* @__PURE__ */ new Set();
    for (const s of r(this, je).values())
      s.enableEditing(), s.show(!0), s.annotationElementId && (r(this, O).removeChangedExistingAnnotation(s), t.add(s.annotationElementId));
    if (!r(this, Ls)) {
      p(this, or, !1);
      return;
    }
    const e = r(this, Ls).getEditableAnnotations();
    for (const s of e) {
      if (s.hide(), r(this, O).isDeletedAnnotationElement(s.data.id) || t.has(s.data.id))
        continue;
      const i = await this.deserialize(s);
      i && (this.addOrRebuild(i), i.enableEditing());
    }
    p(this, or, !1);
  }
  disable() {
    var i;
    p(this, Ma, !0), this.div.tabIndex = -1, this.togglePointerEvents(!1);
    const t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map();
    for (const n of r(this, je).values())
      if (n.disableEditing(), !!n.annotationElementId) {
        if (n.serialize() !== null) {
          t.set(n.annotationElementId, n);
          continue;
        } else
          e.set(n.annotationElementId, n);
        (i = this.getEditableAnnotation(n.annotationElementId)) == null || i.show(), n.remove();
      }
    if (r(this, Ls)) {
      const n = r(this, Ls).getEditableAnnotations();
      for (const a of n) {
        const {
          id: o
        } = a.data;
        if (r(this, O).isDeletedAnnotationElement(o))
          continue;
        let l = e.get(o);
        if (l) {
          l.resetAnnotationElement(a), l.show(!1), a.show();
          continue;
        }
        l = t.get(o), l && (r(this, O).addChangedExistingAnnotation(l), l.renderAnnotationElement(a) && l.show(!1)), a.show();
      }
    }
    A(this, bt, ch).call(this), this.isEmpty && (this.div.hidden = !0);
    const {
      classList: s
    } = this.div;
    for (const n of r(Ye, Xi).values())
      s.remove(`${n._type}Editing`);
    this.disableTextSelection(), this.toggleAnnotationLayerPointerEvents(!0), p(this, Ma, !1);
  }
  getEditableAnnotation(t) {
    var e;
    return ((e = r(this, Ls)) == null ? void 0 : e.getEditableAnnotation(t)) || null;
  }
  setActiveEditor(t) {
    r(this, O).getActive() !== t && r(this, O).setActiveEditor(t);
  }
  enableTextSelection() {
    var t;
    if (this.div.tabIndex = -1, (t = r(this, ee)) != null && t.div && !r(this, ci)) {
      p(this, ci, new AbortController());
      const e = r(this, O).combinedSignal(r(this, ci));
      r(this, ee).div.addEventListener("pointerdown", A(this, bt, Yf).bind(this), {
        signal: e
      }), r(this, ee).div.classList.add("highlighting");
    }
  }
  disableTextSelection() {
    var t;
    this.div.tabIndex = 0, (t = r(this, ee)) != null && t.div && r(this, ci) && (r(this, ci).abort(), p(this, ci, null), r(this, ee).div.classList.remove("highlighting"));
  }
  enableClick() {
    if (r(this, ji))
      return;
    p(this, ji, new AbortController());
    const t = r(this, O).combinedSignal(r(this, ji));
    this.div.addEventListener("pointerdown", this.pointerdown.bind(this), {
      signal: t
    });
    const e = this.pointerup.bind(this);
    this.div.addEventListener("pointerup", e, {
      signal: t
    }), this.div.addEventListener("pointercancel", e, {
      signal: t
    });
  }
  disableClick() {
    var t;
    (t = r(this, ji)) == null || t.abort(), p(this, ji, null);
  }
  attach(t) {
    r(this, je).set(t.id, t);
    const {
      annotationElementId: e
    } = t;
    e && r(this, O).isDeletedAnnotationElement(e) && r(this, O).removeDeletedAnnotationElement(t);
  }
  detach(t) {
    var e;
    r(this, je).delete(t.id), (e = r(this, ar)) == null || e.removePointerInTextLayer(t.contentDiv), !r(this, Ma) && t.annotationElementId && r(this, O).addDeletedAnnotationElement(t);
  }
  remove(t) {
    this.detach(t), r(this, O).removeEditor(t), t.div.remove(), t.isAttachedToDOM = !1;
  }
  changeParent(t) {
    var e;
    t.parent !== this && (t.parent && t.annotationElementId && (r(this, O).addDeletedAnnotationElement(t.annotationElementId), vt.deleteAnnotationElement(t), t.annotationElementId = null), this.attach(t), (e = t.parent) == null || e.detach(t), t.setParent(this), t.div && t.isAttachedToDOM && (t.div.remove(), this.div.append(t.div)));
  }
  add(t) {
    if (!(t.parent === this && t.isAttachedToDOM)) {
      if (this.changeParent(t), r(this, O).addEditor(t), this.attach(t), !t.isAttachedToDOM) {
        const e = t.render();
        this.div.append(e), t.isAttachedToDOM = !0;
      }
      t.fixAndSetPosition(), t.onceAdded(!r(this, or)), r(this, O).addToAnnotationStorage(t), t._reportTelemetry(t.telemetryInitialData);
    }
  }
  moveEditorInDOM(t) {
    var s;
    if (!t.isAttachedToDOM)
      return;
    const {
      activeElement: e
    } = document;
    t.div.contains(e) && !r(this, li) && (t._focusEventsAllowed = !1, p(this, li, setTimeout(() => {
      p(this, li, null), t.div.contains(document.activeElement) ? t._focusEventsAllowed = !0 : (t.div.addEventListener("focusin", () => {
        t._focusEventsAllowed = !0;
      }, {
        once: !0,
        signal: r(this, O)._signal
      }), e.focus());
    }, 0))), t._structTreeParentId = (s = r(this, ar)) == null ? void 0 : s.moveElementInDOM(this.div, t.div, t.contentDiv, !0);
  }
  addOrRebuild(t) {
    t.needsToBeRebuilt() ? (t.parent || (t.parent = this), t.rebuild(), t.show()) : this.add(t);
  }
  addUndoableEditor(t) {
    const e = () => t._uiManager.rebuild(t), s = () => {
      t.remove();
    };
    this.addCommands({
      cmd: e,
      undo: s,
      mustExec: !1
    });
  }
  getNextId() {
    return r(this, O).getId();
  }
  combinedSignal(t) {
    return r(this, O).combinedSignal(t);
  }
  canCreateNewEmptyEditor() {
    var t;
    return (t = r(this, bt, gs)) == null ? void 0 : t.canCreateNewEmptyEditor();
  }
  pasteEditor(t, e) {
    r(this, O).updateToolbar(t), r(this, O).updateMode(t);
    const {
      offsetX: s,
      offsetY: i
    } = A(this, bt, cd).call(this), n = this.getNextId(), a = A(this, bt, hd).call(this, {
      parent: this,
      id: n,
      x: s,
      y: i,
      uiManager: r(this, O),
      isCentered: !0,
      ...e
    });
    a && this.add(a);
  }
  async deserialize(t) {
    var e;
    return await ((e = r(Ye, Xi).get(t.annotationType ?? t.annotationEditorType)) == null ? void 0 : e.deserialize(t, this, r(this, O))) || null;
  }
  createAndAddNewEditor(t, e, s = {}) {
    const i = this.getNextId(), n = A(this, bt, hd).call(this, {
      parent: this,
      id: i,
      x: t.offsetX,
      y: t.offsetY,
      uiManager: r(this, O),
      isCentered: e,
      ...s
    });
    return n && this.add(n), n;
  }
  addNewEditor() {
    this.createAndAddNewEditor(A(this, bt, cd).call(this), !0);
  }
  setSelected(t) {
    r(this, O).setSelected(t);
  }
  toggleSelected(t) {
    r(this, O).toggleSelected(t);
  }
  unselect(t) {
    r(this, O).unselect(t);
  }
  pointerup(t) {
    var s;
    const {
      isMac: e
    } = ce.platform;
    if (!(t.button !== 0 || t.ctrlKey && e) && t.target === this.div && r(this, Wi) && (p(this, Wi, !1), !((s = r(this, bt, gs)) != null && s.isDrawer && r(this, bt, gs).supportMultipleDrawings))) {
      if (!r(this, Pa)) {
        p(this, Pa, !0);
        return;
      }
      if (r(this, O).getMode() === X.STAMP) {
        r(this, O).unselectAll();
        return;
      }
      this.createAndAddNewEditor(t, !1);
    }
  }
  pointerdown(t) {
    var i;
    if (r(this, O).getMode() === X.HIGHLIGHT && this.enableTextSelection(), r(this, Wi)) {
      p(this, Wi, !1);
      return;
    }
    const {
      isMac: e
    } = ce.platform;
    if (t.button !== 0 || t.ctrlKey && e || t.target !== this.div)
      return;
    if (p(this, Wi, !0), (i = r(this, bt, gs)) != null && i.isDrawer) {
      this.startDrawingSession(t);
      return;
    }
    const s = r(this, O).getActive();
    p(this, Pa, !s || s.isEmpty());
  }
  startDrawingSession(t) {
    if (this.div.focus(), r(this, os)) {
      r(this, bt, gs).startDrawing(this, r(this, O), !1, t);
      return;
    }
    r(this, O).setCurrentDrawingSession(this), p(this, os, new AbortController());
    const e = r(this, O).combinedSignal(r(this, os));
    this.div.addEventListener("blur", ({
      relatedTarget: s
    }) => {
      s && !this.div.contains(s) && (p(this, hi, null), this.commitOrRemove());
    }, {
      signal: e
    }), r(this, bt, gs).startDrawing(this, r(this, O), !1, t);
  }
  pause(t) {
    if (t) {
      const {
        activeElement: e
      } = document;
      this.div.contains(e) && p(this, hi, e);
      return;
    }
    r(this, hi) && setTimeout(() => {
      var e;
      (e = r(this, hi)) == null || e.focus(), p(this, hi, null);
    }, 0);
  }
  endDrawingSession(t = !1) {
    return r(this, os) ? (r(this, O).setCurrentDrawingSession(null), r(this, os).abort(), p(this, os, null), p(this, hi, null), r(this, bt, gs).endDrawing(t)) : null;
  }
  findNewParent(t, e, s) {
    const i = r(this, O).findParent(e, s);
    return i === null || i === this ? !1 : (i.changeParent(t), !0);
  }
  commitOrRemove() {
    return r(this, os) ? (this.endDrawingSession(), !0) : !1;
  }
  onScaleChanging() {
    r(this, os) && r(this, bt, gs).onScaleChangingWhenDrawing(this);
  }
  destroy() {
    var t, e;
    this.commitOrRemove(), ((t = r(this, O).getActive()) == null ? void 0 : t.parent) === this && (r(this, O).commitOrRemove(), r(this, O).setActiveEditor(null)), r(this, li) && (clearTimeout(r(this, li)), p(this, li, null));
    for (const s of r(this, je).values())
      (e = r(this, ar)) == null || e.removePointerInTextLayer(s.contentDiv), s.setParent(null), s.isAttachedToDOM = !1, s.div.remove();
    this.div = null, r(this, je).clear(), r(this, O).removeLayer(this);
  }
  render({
    viewport: t
  }) {
    this.viewport = t, hr(this.div, t);
    for (const e of r(this, O).getEditors(this.pageIndex))
      this.add(e), e.rebuild();
    this.updateMode();
  }
  update({
    viewport: t
  }) {
    r(this, O).commitOrRemove(), A(this, bt, ch).call(this);
    const e = this.viewport.rotation, s = t.rotation;
    if (this.viewport = t, hr(this.div, {
      rotation: s
    }), e !== s)
      for (const i of r(this, je).values())
        i.rotate(s);
  }
  get pageDimensions() {
    const {
      pageWidth: t,
      pageHeight: e
    } = this.viewport.rawDims;
    return [t, e];
  }
  get scale() {
    return r(this, O).viewParameters.realScale;
  }
};
ar = new WeakMap(), Pa = new WeakMap(), Ls = new WeakMap(), ji = new WeakMap(), li = new WeakMap(), je = new WeakMap(), Wi = new WeakMap(), Ma = new WeakMap(), or = new WeakMap(), os = new WeakMap(), hi = new WeakMap(), ee = new WeakMap(), ci = new WeakMap(), O = new WeakMap(), Xi = new WeakMap(), bt = new WeakSet(), Yf = function(t) {
  r(this, O).unselectAll();
  const {
    target: e
  } = t;
  if (e === r(this, ee).div || (e.getAttribute("role") === "img" || e.classList.contains("endOfContent")) && r(this, ee).div.contains(e)) {
    const {
      isMac: s
    } = ce.platform;
    if (t.button !== 0 || t.ctrlKey && s)
      return;
    r(this, O).showAllEditors("highlight", !0, !0), r(this, ee).div.classList.add("free"), this.toggleDrawing(), bh.startHighlighting(this, r(this, O).direction === "ltr", {
      target: r(this, ee).div,
      x: t.x,
      y: t.y
    }), r(this, ee).div.addEventListener("pointerup", () => {
      r(this, ee).div.classList.remove("free"), this.toggleDrawing(!0);
    }, {
      once: !0,
      signal: r(this, O)._signal
    }), t.preventDefault();
  }
}, gs = function() {
  return r(Ye, Xi).get(r(this, O).getMode());
}, hd = function(t) {
  const e = r(this, bt, gs);
  return e ? new e.prototype.constructor(t) : null;
}, cd = function() {
  const {
    x: t,
    y: e,
    width: s,
    height: i
  } = this.div.getBoundingClientRect(), n = Math.max(0, t), a = Math.max(0, e), o = Math.min(window.innerWidth, t + s), l = Math.min(window.innerHeight, e + i), h = (n + o) / 2 - t, c = (a + l) / 2 - e, [u, f] = this.viewport.rotation % 180 === 0 ? [h, c] : [c, h];
  return {
    offsetX: u,
    offsetY: f
  };
}, ch = function() {
  for (const t of r(this, je).values())
    t.isEmpty() && t.remove();
}, $(Ye, "_initialized", !1), m(Ye, Xi, new Map([Uc, nd, rd, bh].map((t) => [t._editorType, t])));
let ld = Ye;
var ls, Tl, he, lr, Oh, Kf, Is, ud, Qf, fd;
const Qt = class Qt {
  constructor({
    pageIndex: t
  }) {
    m(this, Is);
    m(this, ls, null);
    m(this, Tl, 0);
    m(this, he, /* @__PURE__ */ new Map());
    m(this, lr, /* @__PURE__ */ new Map());
    this.pageIndex = t;
  }
  setParent(t) {
    if (!r(this, ls)) {
      p(this, ls, t);
      return;
    }
    if (r(this, ls) !== t) {
      if (r(this, he).size > 0)
        for (const e of r(this, he).values())
          e.remove(), t.append(e);
      p(this, ls, t);
    }
  }
  static get _svgFactory() {
    return Q(this, "_svgFactory", new _d());
  }
  draw(t, e = !1, s = !1) {
    const i = ne(this, Tl)._++, n = A(this, Is, ud).call(this), a = Qt._svgFactory.createElement("defs");
    n.append(a);
    const o = Qt._svgFactory.createElement("path");
    a.append(o);
    const l = `path_p${this.pageIndex}_${i}`;
    o.setAttribute("id", l), o.setAttribute("vector-effect", "non-scaling-stroke"), e && r(this, lr).set(i, o);
    const h = s ? A(this, Is, Qf).call(this, a, l) : null, c = Qt._svgFactory.createElement("use");
    return n.append(c), c.setAttribute("href", `#${l}`), this.updateProperties(n, t), r(this, he).set(i, n), {
      id: i,
      clipPathId: `url(#${h})`
    };
  }
  drawOutline(t, e) {
    const s = ne(this, Tl)._++, i = A(this, Is, ud).call(this), n = Qt._svgFactory.createElement("defs");
    i.append(n);
    const a = Qt._svgFactory.createElement("path");
    n.append(a);
    const o = `path_p${this.pageIndex}_${s}`;
    a.setAttribute("id", o), a.setAttribute("vector-effect", "non-scaling-stroke");
    let l;
    if (e) {
      const u = Qt._svgFactory.createElement("mask");
      n.append(u), l = `mask_p${this.pageIndex}_${s}`, u.setAttribute("id", l), u.setAttribute("maskUnits", "objectBoundingBox");
      const f = Qt._svgFactory.createElement("rect");
      u.append(f), f.setAttribute("width", "1"), f.setAttribute("height", "1"), f.setAttribute("fill", "white");
      const g = Qt._svgFactory.createElement("use");
      u.append(g), g.setAttribute("href", `#${o}`), g.setAttribute("stroke", "none"), g.setAttribute("fill", "black"), g.setAttribute("fill-rule", "nonzero"), g.classList.add("mask");
    }
    const h = Qt._svgFactory.createElement("use");
    i.append(h), h.setAttribute("href", `#${o}`), l && h.setAttribute("mask", `url(#${l})`);
    const c = h.cloneNode();
    return i.append(c), h.classList.add("mainOutline"), c.classList.add("secondaryOutline"), this.updateProperties(i, t), r(this, he).set(s, i), s;
  }
  finalizeDraw(t, e) {
    r(this, lr).delete(t), this.updateProperties(t, e);
  }
  updateProperties(t, e) {
    var l;
    if (!e)
      return;
    const {
      root: s,
      bbox: i,
      rootClass: n,
      path: a
    } = e, o = typeof t == "number" ? r(this, he).get(t) : t;
    if (o) {
      if (s && A(this, Is, fd).call(this, o, s), i && A(l = Qt, Oh, Kf).call(l, o, i), n) {
        const {
          classList: h
        } = o;
        for (const [c, u] of Object.entries(n))
          h.toggle(c, u);
      }
      if (a) {
        const c = o.firstChild.firstChild;
        A(this, Is, fd).call(this, c, a);
      }
    }
  }
  updateParent(t, e) {
    if (e === this)
      return;
    const s = r(this, he).get(t);
    s && (r(e, ls).append(s), r(this, he).delete(t), r(e, he).set(t, s));
  }
  remove(t) {
    r(this, lr).delete(t), r(this, ls) !== null && (r(this, he).get(t).remove(), r(this, he).delete(t));
  }
  destroy() {
    p(this, ls, null);
    for (const t of r(this, he).values())
      t.remove();
    r(this, he).clear(), r(this, lr).clear();
  }
};
ls = new WeakMap(), Tl = new WeakMap(), he = new WeakMap(), lr = new WeakMap(), Oh = new WeakSet(), Kf = function(t, [e, s, i, n]) {
  const {
    style: a
  } = t;
  a.top = `${100 * s}%`, a.left = `${100 * e}%`, a.width = `${100 * i}%`, a.height = `${100 * n}%`;
}, Is = new WeakSet(), ud = function() {
  const t = Qt._svgFactory.create(1, 1, !0);
  return r(this, ls).append(t), t.setAttribute("aria-hidden", !0), t;
}, Qf = function(t, e) {
  const s = Qt._svgFactory.createElement("clipPath");
  t.append(s);
  const i = `clip_${e}`;
  s.setAttribute("id", i), s.setAttribute("clipPathUnits", "objectBoundingBox");
  const n = Qt._svgFactory.createElement("use");
  return s.append(n), n.setAttribute("href", `#${e}`), n.classList.add("clip"), i;
}, fd = function(t, e) {
  for (const [s, i] of Object.entries(e))
    i === null ? t.removeAttribute(s) : t.setAttribute(s, i);
}, m(Qt, Oh);
let dd = Qt;
globalThis.pdfjsTestingUtils = {
  HighlightOutliner: jc
};
V.AbortException;
V.AnnotationEditorLayer;
V.AnnotationEditorParamsType;
V.AnnotationEditorType;
V.AnnotationEditorUIManager;
V.AnnotationLayer;
V.AnnotationMode;
V.ColorPicker;
V.DOMSVGFactory;
V.DrawLayer;
V.FeatureTest;
var em = V.GlobalWorkerOptions;
V.ImageKind;
V.InvalidPDFException;
V.MissingPDFException;
V.OPS;
V.OutputScale;
V.PDFDataRangeTransport;
V.PDFDateString;
V.PDFWorker;
V.PasswordResponses;
V.PermissionFlag;
V.PixelsPerInch;
V.RenderingCancelledException;
V.TextLayer;
V.TouchManager;
V.UnexpectedResponseException;
V.Util;
V.VerbosityLevel;
V.XfaLayer;
V.build;
V.createValidAbsoluteUrl;
V.fetchData;
var sm = V.getDocument;
V.getFilenameFromUrl;
V.getPdfFilenameFromUrl;
V.getXfaPageViewport;
V.isDataScheme;
V.isPdfFile;
V.noContextMenu;
V.normalizeUnicode;
V.setLayerDimensions;
V.shadow;
V.stopEvent;
var im = V.version;
em.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${im}/pdf.worker.mjs`;
class nm {
  constructor(t) {
    this._pdfDoc = null, this._renderTasks = /* @__PURE__ */ new Map(), this._bus = t;
  }
  /**
   * Load a PDF from a File, Blob, URL string, or ArrayBuffer.
   * @param {File|Blob|string|ArrayBuffer|Uint8Array} source
   * @returns {Promise<{totalPages: number}>}
   */
  async loadDocument(t) {
    await this._cleanup();
    let e;
    typeof t == "string" ? e = t : t instanceof File || t instanceof Blob ? e = new Uint8Array(await t.arrayBuffer()) : e = t;
    const s = sm(
      typeof e == "string" ? { url: e } : { data: e }
    );
    this._pdfDoc = await s.promise;
    const i = this._pdfDoc.numPages;
    return this._bus.emit("documentLoaded", { totalPages: i }), { totalPages: i };
  }
  /**
   * Get a specific page proxy.
   * @param {number} pageNumber 1-indexed
   * @returns {Promise<import('pdfjs-dist').PDFPageProxy>}
   */
  async getPage(t) {
    if (!this._pdfDoc) throw new Error("[pdf-signature-sdk] No document loaded.");
    return this._pdfDoc.getPage(t);
  }
  /**
   * Render a page to a canvas element.
   * @param {number} pageNumber
   * @param {HTMLCanvasElement} canvas
   * @param {number} scale
   * @returns {Promise<void>}
   */
  async renderPage(t, e, s = 1.5) {
    if (!this._pdfDoc) return;
    this._renderTasks.has(t) && (await this._renderTasks.get(t).cancel().catch(() => {
    }), this._renderTasks.delete(t));
    const i = await this.getPage(t), n = i.getViewport({ scale: s });
    e.width = n.width, e.height = n.height;
    const a = e.getContext("2d");
    a.clearRect(0, 0, e.width, e.height);
    const o = i.render({
      canvasContext: a,
      viewport: n
    });
    this._renderTasks.set(t, o);
    try {
      await o.promise;
    } catch (l) {
      if ((l == null ? void 0 : l.name) !== "RenderingCancelledException")
        throw console.error("[pdf-signature-sdk] Render error:", l), l;
    } finally {
      this._renderTasks.get(t) === o && this._renderTasks.delete(t);
    }
  }
  /**
   * Render a page as a small thumbnail canvas.
   * @param {number} pageNumber
   * @param {HTMLCanvasElement} canvas
   * @param {number} [thumbScale=0.2]
   * @returns {Promise<void>}
   */
  async renderThumbnail(t, e, s = 0.2) {
    if (!this._pdfDoc) return;
    const i = await this.getPage(t), n = i.getViewport({ scale: s });
    e.width = n.width, e.height = n.height;
    const a = e.getContext("2d");
    a.clearRect(0, 0, e.width, e.height), await i.render({ canvasContext: a, viewport: n }).promise.catch(() => {
    });
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
    for (const [t, e] of this._renderTasks.entries())
      await e.cancel().catch(() => {
      });
    this._renderTasks.clear(), this._pdfDoc && (await this._pdfDoc.destroy().catch(() => {
    }), this._pdfDoc = null);
  }
  /** Full destroy. */
  async destroy() {
    await this._cleanup();
  }
}
class rm {
  /**
   * @param {import('./events').EventEmitter} eventBus
   */
  constructor(t) {
    this._bus = t, this._currentPage = 1, this._totalPages = 0, this._locked = !1;
  }
  /** Kunci/buka navigasi halaman. */
  setLocked(t) {
    this._locked = t;
  }
  get isLocked() {
    return this._locked;
  }
  /** @param {number} total */
  setTotal(t) {
    this._totalPages = t, this._currentPage = 1;
  }
  /** @returns {number} */
  get currentPage() {
    return this._currentPage;
  }
  /** @returns {number} */
  get totalPages() {
    return this._totalPages;
  }
  /**
   * Navigate to a specific page.
   * @param {number} n
   * @param {string} source - Origin of navigation ('api' or 'scroll')
   * @returns {boolean} true if navigation happened
   */
  goToPage(t, e = "api") {
    return this._locked || t < 1 || t > this._totalPages || t === this._currentPage ? !1 : (this._currentPage = t, this._bus.emit("pageChanged", { page: t, total: this._totalPages, source: e }), !0);
  }
  /** @returns {boolean} */
  nextPage() {
    return this.goToPage(this._currentPage + 1);
  }
  /** @returns {boolean} */
  prevPage() {
    return this.goToPage(this._currentPage - 1);
  }
  /** @returns {boolean} */
  get canGoNext() {
    return this._currentPage < this._totalPages;
  }
  /** @returns {boolean} */
  get canGoPrev() {
    return this._currentPage > 1;
  }
  /** Reset state ke kondisi awal (dipakai saat destroy). */
  reset() {
    this._currentPage = 1, this._totalPages = 0;
  }
}
class am {
  /**
   * @param {import('./events').EventEmitter} eventBus
   */
  constructor(t) {
    this._bus = t, this._overlayCanvases = /* @__PURE__ */ new Map(), this._ctxs = /* @__PURE__ */ new Map(), this._handlers = /* @__PURE__ */ new Map(), this._currentPage = 1, this._items = [], this._draggingId = null, this._dragOffset = { x: 0, y: 0 }, this._resizingId = null, this._resizeStart = { w: 0, h: 0, px: 0, py: 0 };
  }
  /** Pasang overlay canvas ke halaman tertentu dan daftarkan event handler pointer/touch. */
  attach(t, e) {
    this._overlayCanvases.set(t, e), this._ctxs.set(t, e.getContext("2d"));
    const s = (l) => this._onPointerDown(l, t), i = (l) => this._onPointerMove(l, t), n = (l) => this._onPointerUp(l, t), a = (l) => {
      if (l.touches.length !== 1) return;
      const { x: h, y: c } = this._getCanvasCoords(l.touches[0], t);
      this._hitTest(h, c, t) && l.preventDefault();
    }, o = (l) => {
      (this._draggingId || this._resizingId) && l.preventDefault();
    };
    this._handlers.set(t, { onDown: s, onMove: i, onUp: n, onTouchStart: a, onTouchMove: o }), e.addEventListener("pointerdown", s), e.addEventListener("pointermove", i), e.addEventListener("pointerup", n), e.addEventListener("pointerleave", n), e.addEventListener("touchstart", a, { passive: !1 }), e.addEventListener("touchmove", o, { passive: !1 });
  }
  /**
   * Sync overlay canvas dimensions with the main canvas for a specific page.
   * @param {number} page
   * @param {number} width
   * @param {number} height
   */
  syncSize(t, e, s) {
    const i = this._overlayCanvases.get(t);
    if (!i) return;
    this._pageDimensions || (this._pageDimensions = /* @__PURE__ */ new Map());
    const n = this._pageDimensions.get(t);
    if (n && n.w > 0 && n.h > 0) {
      const a = e / n.w, o = s / n.h;
      if (a !== 1 || o !== 1) {
        const l = this._items.filter((h) => h.page === t);
        for (const h of l)
          h.x *= a, h.y *= o, h.width *= a, h.height *= o;
      }
    }
    this._pageDimensions.set(t, { w: e, h: s }), i.width = e, i.height = s, this._redrawPage(t);
  }
  /** @param {number} page */
  setPage(t) {
    this._currentPage = t;
  }
  // ─── Mode Control ────────────────────────────────────────────────────────────
  // Modes are removed as items are placed directly and dragging is always active if items exist.
  // ─── Placement API ───────────────────────────────────────────────────────────
  /**
   * Programmatically place a signature at given canvas coords.
   * @param {{x:number, y:number, page?:number, label?:string, image?:string}} opts
   */
  placeSignature({ x: t, y: e, page: s = this._currentPage, label: i, image: n } = {}) {
    const a = i || "Signature", o = this._createItem("signature", t, e, s, a, n);
    return this._items.push(o), this._redrawPage(s), this._bus.emit("signaturePlaced", this._publicItem(o)), o.id;
  }
  /**
   * Programmatically place an e-materai stamp at given canvas coords.
   * @param {{x:number, y:number, page?:number, image?:string}} opts
   */
  placeEStamp({ x: t, y: e, page: s = this._currentPage, image: i } = {}) {
    const n = this._createItem("estamp", t, e, s, "E-Materai", i);
    return this._items.push(n), this._redrawPage(s), this._bus.emit("eStampPlaced", this._publicItem(n)), n.id;
  }
  /**
   * Remove a specific item by ID.
   * @param {string} id
   */
  removeItem(t) {
    const e = this._items.find((s) => s.id === t);
    e && (this._items = this._items.filter((s) => s.id !== t), this._redrawPage(e.page), this._bus.emit("signatureRemoved", { id: t }));
  }
  /** Clear all signatures and stamps. */
  clearAll() {
    this._items = [], this._redrawAll();
  }
  /**
   * Get all placed items (all pages).
   * @returns {Array<object>}
   */
  getAll() {
    return this._items.map((t) => this._publicItem(t));
  }
  /**
   * Get items for a specific page.
   * @param {number} [page]
   */
  getByPage(t = this._currentPage) {
    return this._items.filter((e) => e.page === t).map((e) => this._publicItem(e));
  }
  // ─── Internal ────────────────────────────────────────────────────────────────
  /** @private */
  _createItem(t, e, s, i, n, a) {
    const o = {
      id: `${t}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      type: t,
      x: e,
      y: s,
      page: i,
      label: n,
      image: a,
      imgElement: null,
      width: t === "estamp" ? 80 : 160,
      height: t === "estamp" ? 80 : 48,
      isDragging: !1
    };
    if (a) {
      const l = new Image();
      l.src = a, l.onload = () => {
        o.imgElement = l, this._redrawPage(i);
      };
    }
    return o;
  }
  /** @private */
  _publicItem(t) {
    return {
      id: t.id,
      type: t.type,
      x: t.x,
      y: t.y,
      page: t.page,
      label: t.label,
      width: t.width,
      height: t.height
    };
  }
  /** @private */
  _getCanvasCoords(t, e) {
    const s = this._overlayCanvases.get(e);
    if (!s) return { x: 0, y: 0 };
    const i = s.getBoundingClientRect(), n = s.width / i.width, a = s.height / i.height;
    return {
      x: (t.clientX - i.left) * n,
      y: (t.clientY - i.top) * a
    };
  }
  /** @private — hit testing for components: 'delete', 'resize', 'body' */
  _hitTest(t, e, s) {
    const i = this._items.filter((n) => n.page === s);
    for (let n = i.length - 1; n >= 0; n--) {
      const a = i[n], o = a.x + a.width, l = a.y;
      if (Math.hypot(t - o, e - l) <= 24)
        return { item: a, part: "delete" };
      const h = a.x + a.width, c = a.y + a.height;
      if (t >= h - 15 && t <= h + 10 && e >= c - 15 && e <= c + 10)
        return { item: a, part: "resize" };
      if (t >= a.x && t <= a.x + a.width && e >= a.y && e <= a.y + a.height)
        return { item: a, part: "body" };
    }
    return null;
  }
  /** @private */
  _onPointerDown(t, e) {
    if (t.button !== 0) return;
    const { x: s, y: i } = this._getCanvasCoords(t, e), n = this._hitTest(s, i, e), a = this._overlayCanvases.get(e);
    if (n && a) {
      if (n.part === "delete") {
        this.removeItem(n.item.id);
        return;
      }
      if (n.part === "resize") {
        this._resizingId = n.item.id, this._resizeStart = {
          w: n.item.width,
          h: n.item.height,
          px: s,
          py: i
        }, a.setPointerCapture(t.pointerId);
        return;
      }
      this._draggingId = n.item.id, this._dragOffset = { x: s - n.item.x, y: i - n.item.y }, a.setPointerCapture(t.pointerId), a.style.cursor = "grabbing";
    }
  }
  /** @private */
  _onPointerMove(t, e) {
    const { x: s, y: i } = this._getCanvasCoords(t, e), n = this._overlayCanvases.get(e);
    if (n) {
      if (!this._draggingId && !this._resizingId) {
        const a = this._hitTest(s, i, e);
        a ? a.part === "delete" ? n.style.cursor = "pointer" : a.part === "resize" ? n.style.cursor = "nwse-resize" : n.style.cursor = "grab" : n.style.cursor = "default";
        return;
      }
      if (this._resizingId) {
        const a = this._items.find((o) => o.id === this._resizingId);
        if (a && a.page === e) {
          const o = s - this._resizeStart.px, l = i - this._resizeStart.py;
          a.width = Math.min(n.width - a.x, Math.max(30, this._resizeStart.w + o)), a.height = Math.min(n.height - a.y, Math.max(30, this._resizeStart.h + l)), this._redrawPage(e);
        }
        return;
      }
      if (this._draggingId) {
        const a = this._items.find((o) => o.id === this._draggingId);
        a && a.page === e && (a.x = Math.max(0, Math.min(n.width - a.width, s - this._dragOffset.x)), a.y = Math.max(0, Math.min(n.height - a.height, i - this._dragOffset.y)), this._redrawPage(e));
      }
    }
  }
  /** @private */
  _onPointerUp(t, e) {
    const s = this._overlayCanvases.get(e);
    if (this._draggingId || this._resizingId) {
      const i = this._draggingId || this._resizingId, n = this._items.find((a) => a.id === i);
      n && this._bus.emit("signatureMoved", this._publicItem(n));
    }
    this._draggingId = null, this._resizingId = null, s && (s.style.cursor = "default");
  }
  /** @private — Redraw all items for all pages */
  _redrawAll() {
    for (const t of this._overlayCanvases.keys())
      this._redrawPage(t);
  }
  /** @private — Redraw items for a specific page */
  _redrawPage(t) {
    const e = this._ctxs.get(t), s = this._overlayCanvases.get(t);
    if (!e || !s) return;
    e.clearRect(0, 0, s.width, s.height);
    const i = this._items.filter((n) => n.page === t);
    i.length > 0 ? s.classList.add("psdk-overlay--active") : s.classList.remove("psdk-overlay--active");
    for (const n of i)
      n.type === "estamp" ? this._drawEStamp(e, n) : this._drawSignature(e, n);
  }
  /** @private */
  _drawSignature(t, e) {
    const { x: s, y: i, width: n, height: a, label: o, imgElement: l } = e, h = 6;
    l && l.complete ? t.drawImage(l, s, i, n, a) : (t.shadowColor = "rgba(99,102,241,0.4)", t.shadowBlur = 12, t.fillStyle = "rgba(99, 102, 241, 0.12)", this._roundRect(t, s, i, n, a, h), t.fill(), t.shadowBlur = 0, t.strokeStyle = "rgba(99, 102, 241, 0.9)", t.lineWidth = 1.5, t.setLineDash([5, 3]), this._roundRect(t, s, i, n, a, h), t.stroke(), t.setLineDash([]), t.fillStyle = "rgba(99, 102, 241, 1)", t.font = '600 11px "Inter", system-ui, sans-serif', t.textBaseline = "middle", t.fillText(o, s + 10, i + a / 2)), t.strokeStyle = "rgba(255,255,255,0.4)", t.lineWidth = 1, this._roundRect(t, s, i, n, a, h), t.stroke(), this._drawDeleteHandle(t, s + n, i), this._drawResizeHandle(t, s + n, i + a);
  }
  /** @private */
  _drawEStamp(t, e) {
    const { x: s, y: i, width: n, height: a, label: o, imgElement: l } = e;
    if (l && l.complete)
      t.drawImage(l, s, i, n, a);
    else {
      const h = s + n / 2, c = i + a / 2, u = Math.min(n, a) / 2 - 4;
      t.shadowColor = "rgba(239,68,68,0.4)", t.shadowBlur = 12, t.beginPath(), t.arc(h, c, u, 0, Math.PI * 2), t.strokeStyle = "rgba(239,68,68,0.9)", t.lineWidth = 2, t.stroke(), t.fillStyle = "rgba(239,68,68,0.08)", t.fill(), t.shadowBlur = 0, t.fillStyle = "rgba(239,68,68,0.9)", t.font = 'bold 8px "Inter", system-ui, sans-serif', t.textBaseline = "middle", t.textAlign = "center", t.fillText("E-MATERAI", h, c), t.textAlign = "left";
    }
    t.strokeStyle = "rgba(255,255,255,0.4)", t.lineWidth = 1, t.strokeRect(s, i, n, a), this._drawDeleteHandle(t, s + n, i), this._drawResizeHandle(t, s + n, i + a);
  }
  /** @private */
  _drawResizeHandle(t, e, s) {
    t.fillStyle = "#fff", t.strokeStyle = "#666", t.lineWidth = 1, t.beginPath(), t.arc(e, s, 5, 0, Math.PI * 2), t.fill(), t.stroke(), t.strokeStyle = "#333", t.beginPath(), t.moveTo(e - 2, s + 2), t.lineTo(e + 2, s - 2), t.stroke();
  }
  /** @private */
  _drawDeleteHandle(t, e, s) {
    t.fillStyle = "rgba(239,68,68,0.8)", t.beginPath(), t.arc(e, s, 7, 0, Math.PI * 2), t.fill(), t.strokeStyle = "#fff", t.lineWidth = 1.5, t.beginPath(), t.moveTo(e - 3, s - 3), t.lineTo(e + 3, s + 3), t.moveTo(e + 3, s - 3), t.lineTo(e - 3, s + 3), t.stroke();
  }
  /** @private — helper for rounded rect path */
  _roundRect(t, e, s, i, n, a) {
    t.beginPath(), t.moveTo(e + a, s), t.lineTo(e + i - a, s), t.quadraticCurveTo(e + i, s, e + i, s + a), t.lineTo(e + i, s + n - a), t.quadraticCurveTo(e + i, s + n, e + i - a, s + n), t.lineTo(e + a, s + n), t.quadraticCurveTo(e, s + n, e, s + n - a), t.lineTo(e, s + a), t.quadraticCurveTo(e, s, e + a, s), t.closePath();
  }
  /** Clean up all event listeners and state. */
  destroy() {
    this._items = [], this._pageDimensions && this._pageDimensions.clear();
    for (const [t, e] of this._overlayCanvases.entries()) {
      const s = this._handlers.get(t);
      s && (e.removeEventListener("pointerdown", s.onDown), e.removeEventListener("pointermove", s.onMove), e.removeEventListener("pointerup", s.onUp), e.removeEventListener("pointerleave", s.onUp), e.removeEventListener("touchstart", s.onTouchStart), e.removeEventListener("touchmove", s.onTouchMove));
    }
    this._overlayCanvases.clear(), this._ctxs.clear(), this._handlers.clear();
  }
}
const om = {
  container: null,
  file: null,
  scale: 1.5,
  theme: "light",
  // 'light' or 'dark'
  disabled: !1,
  // global interactive disable
  signatureOptions: [],
  estampOptions: [],
  labels: {
    uploadBtn: "Open PDF",
    signatureBtn: "Add Signature",
    estampBtn: "E-Materai",
    clearBtn: "Clear All",
    signatureModalTitle: "Select Signature Role",
    estampModalTitle: "Select E-Materai"
  },
  ui: {
    topbar: {
      upload: !0,
      signature: !0,
      eStamp: !0,
      pagination: !0,
      paginationInput: !0,
      zoom: !0,
      themeToggle: !0,
      customComponent: null
      // string or HTMLElement
    },
    sidebar: {
      thumbnails: !0
    },
    viewer: {
      zoom: !0
    }
  }
};
function Ed(d, t) {
  if (!t || typeof t != "object") return d;
  const e = Object.assign({}, d);
  for (const s of Object.keys(t))
    t[s] !== null && typeof t[s] == "object" && !Array.isArray(t[s]) ? e[s] = Ed(d[s] || {}, t[s]) : e[s] = t[s];
  return e;
}
function lm(d = {}) {
  return Ed(om, d);
}
function hm(d) {
  return d ? typeof d == "string" ? document.querySelector(d) : d instanceof HTMLElement ? d : null : null;
}
function j(d, t = [], e = {}) {
  const s = document.createElement(d);
  t.length && s.classList.add(...t);
  for (const [i, n] of Object.entries(e))
    s.setAttribute(i, n);
  return s;
}
function cm(d, t) {
  var y, w, v;
  d.innerHTML = "";
  const e = j("div", ["psdk-root"]);
  t.theme === "light" && e.classList.add("psdk-light"), t.disabled && e.classList.add("psdk-disabled"), d.appendChild(e);
  let s = null;
  const i = ((y = t.ui) == null ? void 0 : y.topbar) || {};
  Object.values(i).some(Boolean) && (s = j("div", ["psdk-topbar"], { role: "toolbar", "aria-label": "PDF Viewer Toolbar" }), e.appendChild(s));
  const a = j("div", ["psdk-body"]);
  e.appendChild(a);
  let o = null;
  ((v = (w = t.ui) == null ? void 0 : w.sidebar) == null ? void 0 : v.thumbnails) !== !1 && (o = j("div", ["psdk-sidebar"], { role: "navigation", "aria-label": "Page Thumbnails" }), a.appendChild(o));
  const l = j("div", ["psdk-viewer"], { role: "main" });
  a.appendChild(l);
  const h = j("div", ["psdk-viewer__canvas-area"]);
  l.appendChild(h);
  const c = j("div", ["psdk-pages-container"]);
  c.style.display = "none", h.appendChild(c);
  const u = dm();
  h.appendChild(u);
  const f = um();
  f.style.display = "none", h.appendChild(f);
  const g = fm();
  l.appendChild(g);
  const b = j("div", ["psdk-modal-overlay"]);
  return b.style.display = "none", e.appendChild(b), {
    root: e,
    topbar: s,
    sidebar: o,
    viewer: l,
    canvasArea: h,
    pagesContainer: c,
    emptyState: u,
    modeBanner: f,
    statusbar: g,
    modalOverlay: b
  };
}
function dm() {
  const d = j("div", ["psdk-empty"]);
  return d.innerHTML = `
    <div class="psdk-empty__icon">
      <svg viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="12" y1="18" x2="12" y2="12"/>
        <line x1="9" y1="15" x2="15" y2="15"/>
      </svg>
    </div>
    <div class="psdk-empty__title">No Document Loaded</div>
    <div class="psdk-empty__sub">Upload a PDF file to get started. You can also add signatures and e-materai stamps.</div>
  `, d;
}
function um() {
  const d = j("div", ["psdk-mode-banner"]);
  return d.id = "psdk-mode-banner", d.innerHTML = `
    <div class="psdk-mode-banner__dot"></div>
    <span>Signature Mode — Click anywhere to place</span>
  `, d;
}
function fm() {
  const d = j("div", ["psdk-statusbar"]);
  return d.innerHTML = `
    <div class="psdk-statusbar__item">
      <div class="psdk-statusbar__dot" id="psdk-status-dot"></div>
      <span id="psdk-status-text">Ready</span>
    </div>
    <div class="psdk-statusbar__spacer"></div>
    <div class="psdk-statusbar__item" id="psdk-sig-count-wrap" style="display:none">
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
      <span id="psdk-sig-count">0 signatures</span>
    </div>
    <div class="psdk-statusbar__item">
      <span id="psdk-zoom-status">150%</span>
    </div>
  `, d;
}
const we = {
  upload: '<svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',
  signature: '<svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/><line x1="12" y1="14" x2="12" y2="21"/></svg>',
  estamp: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>',
  prevPage: '<svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>',
  nextPage: '<svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>',
  zoomIn: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>',
  zoomOut: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>',
  fit: '<svg viewBox="0 0 24 24"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>',
  clear: '<svg viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg>',
  sun: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
  moon: '<svg viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>'
};
function pm(d, t, e) {
  var et, Dt, L, z, qt;
  const s = ((et = t.ui) == null ? void 0 : et.topbar) || {}, i = j("div", ["psdk-topbar__brand"]);
  i.innerHTML = `
    <div class="psdk-topbar__brand-icon">
      <svg viewBox="0 0 24 24" fill="white">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/>
        <path d="M14 2v6h6" opacity=".5"/>
      </svg>
    </div>
    <span class="psdk-topbar__brand-text">PDF Viewer</span>
  `, d.appendChild(i);
  const n = (
    /** @type {HTMLInputElement} */
    j("input", ["psdk-file-input"], {
      type: "file",
      accept: ".pdf,application/pdf",
      id: "psdk-file-input",
      "aria-hidden": "true"
    })
  );
  document.body.appendChild(n);
  let a = null, o = null, l = null, h = null, c = null, u = null, f = null, g = null, b = null, y = null, w = null, v = null, S = null, E = null, _ = null, C = null, x = t.scale || 1.5;
  s.upload !== !1 && (a = ps("psdk-btn-upload", we.upload, ((Dt = t.labels) == null ? void 0 : Dt.uploadBtn) || "Open PDF", ["psdk-btn", "psdk-tooltip"], "Open PDF file"), a.addEventListener("click", () => n.click()), n.addEventListener("change", (U) => {
    var Z;
    const N = (
      /** @type {HTMLInputElement} */
      (Z = U.target.files) == null ? void 0 : Z[0]
    );
    N && (e.loadDocument(N), n.value = "");
  }), d.appendChild(a)), o = j("div", ["psdk-topbar__divider"]), d.appendChild(o), s.signature !== !1 && (l = ps("psdk-btn-signature", we.signature, ((L = t.labels) == null ? void 0 : L.signatureBtn) || "Add Signature", ["psdk-btn", "psdk-btn--accent", "psdk-tooltip"], "Add a signature"), l.addEventListener("click", () => {
    e.openSignatureModal();
  }), d.appendChild(l)), s.eStamp !== !1 && (h = ps("psdk-btn-estamp", we.estamp, ((z = t.labels) == null ? void 0 : z.estampBtn) || "E-Materai", ["psdk-btn", "psdk-btn--danger", "psdk-tooltip"], "Add E-Materai stamp"), h.addEventListener("click", () => {
    e.openEStampModal();
  }), d.appendChild(h));
  const T = ps("psdk-btn-clear", we.clear, ((qt = t.labels) == null ? void 0 : qt.clearBtn) || "Clear All", ["psdk-btn", "psdk-btn--ghost", "psdk-tooltip"], "Clear all signatures");
  if (T.style.display = "none", T.addEventListener("click", () => {
    e.clearSignatures(), F(0);
  }), d.appendChild(T), d.appendChild(j("div", ["psdk-topbar__spacer"])), _ = j("div", ["psdk-topbar__custom"]), s.customComponent && (typeof s.customComponent == "string" ? _.innerHTML = s.customComponent : s.customComponent instanceof HTMLElement && _.appendChild(s.customComponent)), d.appendChild(_), C = j("div", ["psdk-topbar__divider"]), d.appendChild(C), s.themeToggle !== !1) {
    const U = t.theme === "light";
    S = ps("psdk-btn-theme", U ? we.moon : we.sun, "", ["psdk-btn", "psdk-btn--ghost", "psdk-btn--icon", "psdk-tooltip"], "Toggle Theme"), S.addEventListener("click", () => {
      const N = d.closest(".psdk-root");
      if (!N) return;
      N.classList.contains("psdk-light") ? (N.classList.remove("psdk-light"), S.innerHTML = we.sun, t.theme = "dark") : (N.classList.add("psdk-light"), S.innerHTML = we.moon, t.theme = "light");
    }), d.appendChild(S);
  }
  if (E = j("div", ["psdk-topbar__divider"]), d.appendChild(E), s.zoom !== !1) {
    c = j("div", ["psdk-pagination"]);
    const U = ps("psdk-btn-zoom-out", we.zoomOut, "", ["psdk-btn", "psdk-btn--ghost", "psdk-btn--icon", "psdk-tooltip"], "Zoom out");
    g = j("span", ["psdk-zoom-badge"]), g.id = "psdk-zoom-badge";
    const N = ps("psdk-btn-zoom-in", we.zoomIn, "", ["psdk-btn", "psdk-btn--ghost", "psdk-btn--icon", "psdk-tooltip"], "Zoom in"), Z = ps("psdk-btn-fit", we.fit, "", ["psdk-btn", "psdk-btn--ghost", "psdk-btn--icon", "psdk-tooltip"], "Fit to screen");
    B(x), U.addEventListener("click", async () => {
      x <= 0.25 || (x = Math.max(0.25, +(x - 0.25).toFixed(2)), B(x), await e.setScale(x));
    }), N.addEventListener("click", async () => {
      x >= 4 || (x = Math.min(4, +(x + 0.25).toFixed(2)), B(x), await e.setScale(x));
    }), Z.addEventListener("click", async () => {
      x = await e.fitToScreen(), B(x);
    }), c.appendChild(U), c.appendChild(g), c.appendChild(N), c.appendChild(Z), d.appendChild(c), u = j("div", ["psdk-topbar__divider"]), d.appendChild(u);
  }
  if (s.pagination !== !1) {
    f = j("div", ["psdk-pagination"]), w = /** @type {HTMLButtonElement} */
    ps("psdk-btn-prev", we.prevPage, "", ["psdk-btn", "psdk-btn--ghost", "psdk-btn--icon", "psdk-tooltip"], "Previous page"), w.id = "psdk-btn-prev";
    const U = j("div", ["psdk-pagination__indicator"]);
    b = j("input", ["psdk-pagination__current-input"], {
      type: "number",
      min: "1",
      id: "psdk-page-current",
      "aria-label": "Current page"
    }), b.value = "1", b.addEventListener("change", (Z) => {
      const ft = parseInt(Z.target.value, 10);
      isNaN(ft) ? Z.target.value = e.currentPage : e.goToPage(ft) || (Z.target.value = e.currentPage);
    });
    const N = j("span", ["psdk-pagination__sep"]);
    N.textContent = "/", y = j("span", []), y.id = "psdk-page-total", y.textContent = "—", U.appendChild(b), U.appendChild(N), U.appendChild(y), v = /** @type {HTMLButtonElement} */
    ps("psdk-btn-next", we.nextPage, "", ["psdk-btn", "psdk-btn--ghost", "psdk-btn--icon", "psdk-tooltip"], "Next page"), v.id = "psdk-btn-next", w.addEventListener("click", () => e.prevPage()), v.addEventListener("click", () => e.nextPage()), w.disabled = !0, v.disabled = !0, f.appendChild(w), f.appendChild(U), f.appendChild(v), d.appendChild(f);
  }
  e.on("signaturePlaced", () => F(e.getSignatures().length)), e.on("eStampPlaced", () => F(e.getSignatures().length)), e.on("signatureRemoved", () => F(e.getSignatures().length));
  function k(U, N) {
    b && (b.tagName === "INPUT" ? b.value = U || "" : b.textContent = U || "—"), y && (y.textContent = N || "—"), w && (w.disabled = U <= 1 || e.isPaginationLocked), v && (v.disabled = U >= N || e.isPaginationLocked);
  }
  function M(U) {
    var Z, ft;
    const N = ((ft = (Z = t.ui) == null ? void 0 : Z.topbar) == null ? void 0 : ft.paginationInput) === !1;
    b && (b.disabled = U || N), w && (w.disabled = U || e.currentPage <= 1), v && (v.disabled = U || e.currentPage >= e.totalPages);
  }
  function B(U) {
    const N = Math.round(U * 100) + "%";
    g && (g.textContent = N);
    const Z = document.getElementById("psdk-zoom-status");
    Z && (Z.textContent = N);
  }
  function F(U) {
    const N = document.getElementById("psdk-sig-count-wrap"), Z = document.getElementById("psdk-sig-count");
    N && (N.style.display = U > 0 ? "flex" : "none"), Z && (Z.textContent = `${U} signature${U !== 1 ? "s" : ""}`), T.style.display = U > 0 ? "inline-flex" : "none";
  }
  function rt(U) {
    var Ds;
    const N = ((Ds = U.ui) == null ? void 0 : Ds.topbar) || {};
    if (tt(a, N.upload !== !1), tt(l, N.signature !== !1), tt(h, N.eStamp !== !1), tt(c, N.zoom !== !1), tt(u, N.zoom !== !1), tt(f, N.pagination !== !1), tt(S, N.themeToggle !== !1), b && (b.disabled = N.paginationInput === !1 || e.isPaginationLocked), U.labels) {
      if (a) {
        const $t = a.querySelector("span");
        $t && ($t.textContent = U.labels.uploadBtn || "Open PDF");
      }
      if (l) {
        const $t = l.querySelector("span");
        $t && ($t.textContent = U.labels.signatureBtn || "Add Signature");
      }
      if (h) {
        const $t = h.querySelector("span");
        $t && ($t.textContent = U.labels.estampBtn || "E-Materai");
      }
      if (T) {
        const $t = T.querySelector("span");
        $t && ($t.textContent = U.labels.clearBtn || "Clear All");
      }
    }
    let Z = !1;
    N.customComponent !== void 0 ? (_.innerHTML = "", typeof N.customComponent == "string" && N.customComponent.trim() ? (_.innerHTML = N.customComponent, Z = !0) : N.customComponent instanceof HTMLElement && (_.appendChild(N.customComponent), Z = !0)) : Z = _.childNodes.length > 0, tt(C, Z && (N.themeToggle !== !1 || N.zoom !== !1 || N.pagination !== !1)), tt(E, N.themeToggle !== !1 && (N.zoom !== !1 || N.pagination !== !1)), tt(u, N.zoom !== !1 && N.pagination !== !1);
    const ft = N.upload !== !1, wt = N.signature !== !1 || N.eStamp !== !1;
    tt(o, ft && wt);
  }
  function tt(U, N) {
    U && (U.style.display = N ? "" : "none");
  }
  return { updatePageIndicator: k, updateZoomBadge: B, applyConfig: rt, setPaginationLocked: M };
}
function ps(d, t, e, s, i) {
  const n = j("button", s, { id: d, type: "button" });
  if (i && n.setAttribute("data-tooltip", i), n.innerHTML = t, e) {
    const a = document.createElement("span");
    a.textContent = e, n.appendChild(a);
  }
  return n;
}
function gm(d, t, e) {
  const s = j("div", ["psdk-sidebar__header"]), i = j("div", ["psdk-sidebar__title"]);
  i.textContent = "Pages";
  const n = j("div", ["psdk-sidebar__count"]);
  n.id = "psdk-page-count-badge", n.textContent = "0", s.appendChild(i), s.appendChild(n), d.appendChild(s);
  const a = j("div", ["psdk-sidebar__scroll"]);
  a.id = "psdk-sidebar-scroll", d.appendChild(a);
  let o = [], l = 1;
  function h() {
    a.innerHTML = "", o = [];
  }
  function c(y) {
    for (let w = 0; w < Math.min(y, 20); w++) {
      const v = j("div", ["psdk-thumb"]), S = j("div", ["psdk-thumb-skeleton"]);
      v.appendChild(S), a.appendChild(v);
    }
  }
  async function u(y, w) {
    h(), n.textContent = w, c(w), h();
    for (let v = 1; v <= w; v++) {
      const S = j("div", ["psdk-thumb"]);
      S.id = `psdk-thumb-${v}`, S.setAttribute("role", "button"), S.setAttribute("tabindex", "0"), S.setAttribute("aria-label", `Page ${v}`);
      const E = j("div", ["psdk-thumb__canvas-wrap"]), _ = (
        /** @type {HTMLCanvasElement} */
        document.createElement("canvas")
      );
      _.setAttribute("aria-hidden", "true"), E.appendChild(_);
      const C = j("div", ["psdk-thumb__label"]);
      C.textContent = `Page ${v}`, S.appendChild(E), S.appendChild(C), a.appendChild(S), o.push(S);
      const x = v;
      S.addEventListener("click", () => e.goToPage(x)), S.addEventListener("keydown", (T) => {
        (T.key === "Enter" || T.key === " ") && (T.preventDefault(), e.goToPage(x));
      }), await y.renderThumbnail(v, _, 0.22).catch(() => {
      });
    }
    f(l);
  }
  function f(y) {
    l = y, o.forEach((v, S) => {
      const E = S + 1 === y;
      v.classList.toggle("psdk-thumb--active", E);
    });
    const w = document.getElementById(`psdk-thumb-${y}`);
    w && w.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
  function g(y) {
    var w, v;
    d.style.display = ((v = (w = y.ui) == null ? void 0 : w.sidebar) == null ? void 0 : v.thumbnails) !== !1 ? "" : "none";
  }
  function b(y) {
    a.style.pointerEvents = y ? "none" : "auto", a.style.opacity = y ? "0.5" : "1";
  }
  return { rebuild: u, setActivePage: f, clearThumbnails: h, applyConfig: g, setPaginationLocked: b };
}
function mm(d, t, e) {
  const s = j("div", ["psdk-modal"]), i = j("div", ["psdk-modal__header"]), n = j("h3", ["psdk-modal__title"]);
  n.textContent = "Select Signature Role";
  const a = j("button", ["psdk-modal__close"]);
  a.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>', i.appendChild(n), i.appendChild(a);
  const o = j("div", ["psdk-modal__body"]), l = j("div", ["psdk-modal__list"]);
  o.appendChild(l), s.appendChild(i), s.appendChild(o), d.appendChild(s);
  function h(u = "signature") {
    var b, y;
    const f = u === "signature", g = f ? t.signatureOptions || [] : t.estampOptions || [];
    if (n.textContent = f ? ((b = t.labels) == null ? void 0 : b.signatureModalTitle) || "Select Signature Role" : ((y = t.labels) == null ? void 0 : y.estampModalTitle) || "Select E-Materai", !g || g.length === 0) {
      f ? e.placeSignature() : e.placeEStamp();
      return;
    }
    l.innerHTML = "", g.forEach((w) => {
      const v = j("button", ["psdk-modal__item"]), S = j("div", ["psdk-modal__item-icon"]);
      w.image ? (S.classList.add("psdk-modal__item-icon--image"), S.innerHTML = `<img src="${w.image}" alt="preview" />`) : S.innerHTML = f ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>' : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>';
      const E = j("div", ["psdk-modal__item-label"]);
      E.textContent = w.label || (f ? "Signature" : "E-Materai"), v.appendChild(S), v.appendChild(E), v.addEventListener("click", () => {
        c(), f ? e.placeSignature({ ...w }) : e.placeEStamp({ ...w });
      }), l.appendChild(v);
    }), d.style.display = "flex", setTimeout(() => {
      d.classList.add("psdk-modal-overlay--active"), s.classList.add("psdk-modal--active");
    }, 10);
  }
  function c() {
    d.classList.remove("psdk-modal-overlay--active"), s.classList.remove("psdk-modal--active"), setTimeout(() => {
      d.style.display = "none";
    }, 200);
  }
  return a.addEventListener("click", c), d.addEventListener("click", (u) => {
    u.target === d && c();
  }), { open: h, close: c };
}
function Am(d = {}) {
  const t = lm(d), e = hm(t.container);
  if (!e)
    throw new Error("[pdf-signature-sdk] createViewer: invalid container");
  const s = new ep(), i = new nm(s), n = new rm(s), a = new am(s), o = cm(e, t);
  let l = null, h = null, c = null, u = null, f = !1, g = null, b = null;
  const y = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map();
  async function S(_) {
    o.pagesContainer.innerHTML = "", w.clear(), v.clear(), u && u.disconnect(), y.clear(), u = new IntersectionObserver((T) => {
      if (T.forEach((k) => {
        const M = parseInt(k.target.dataset.page, 10);
        if (k.isIntersecting) {
          if (y.set(M, k), !k.target.dataset.rendered) {
            k.target.dataset.rendered = "true";
            const B = w.get(M);
            i.renderPage(M, B, t.scale).then(() => {
              a.syncSize(M, B.width, B.height);
              const F = document.getElementById(`psdk-page-${M}`);
              F && (F.style.minWidth = `${B.width}px`, F.style.minHeight = `${B.height}px`);
            });
          }
        } else
          y.delete(M);
      }), y.size > 0) {
        let k = n.currentPage, M = -1;
        for (const [B, F] of y.entries()) {
          const rt = F.intersectionRect.height;
          rt > M && (M = rt, k = B);
        }
        k !== n.currentPage && (f || n.goToPage(k, "scroll"));
      }
    }, {
      root: o.canvasArea,
      rootMargin: "200px 0px",
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
    });
    const C = Math.floor(595 * t.scale), x = Math.floor(842 * t.scale);
    for (let T = 1; T <= _; T++) {
      const k = document.createElement("div");
      k.className = "psdk-canvas-wrap", k.dataset.page = T, k.id = `psdk-page-${T}`, k.style.minWidth = `${C}px`, k.style.minHeight = `${x}px`;
      const M = document.createElement("canvas");
      M.className = "psdk-main-canvas", k.appendChild(M);
      const B = document.createElement("canvas");
      B.className = "psdk-overlay", k.appendChild(B), o.pagesContainer.appendChild(k), w.set(T, M), v.set(T, B), a.attach(T, B), u.observe(k);
    }
  }
  s.on("pageChanged", ({ page: _, total: C, source: x }) => {
    if (x !== "scroll") {
      f = !0, b && o.canvasArea.removeEventListener("scroll", b);
      const T = document.getElementById(`psdk-page-${_}`);
      T && T.scrollIntoView({ behavior: "smooth", block: "start" }), b = () => {
        clearTimeout(g), g = setTimeout(() => {
          f = !1, b && (o.canvasArea.removeEventListener("scroll", b), b = null);
        }, 150);
      }, o.canvasArea.addEventListener("scroll", b), b();
    }
    l == null || l.updatePageIndicator(_, C), h == null || h.setActivePage(_), s.emit("_pageReady", { page: _ });
  }), s.on("documentLoaded", async ({ totalPages: _ }) => {
    o.emptyState.style.display = "none", o.pagesContainer.style.display = "flex", n.setTotal(_), a.clearAll(), await S(_), l == null || l.updatePageIndicator(1, _), await (h == null ? void 0 : h.rebuild(i, _)), s.emit("_documentReady", { totalPages: _ });
  });
  const E = {
    /**
     * Load a new PDF document (File, Blob, URL, ArrayBuffer).
     * Resets page, signatures, sidebar.
     */
    async loadDocument(_) {
      e.classList.add("psdk-loading");
      try {
        await i.loadDocument(_);
      } finally {
        e.classList.remove("psdk-loading");
      }
    },
    /** Navigate to the next page. */
    nextPage() {
      n.nextPage();
    },
    /** Navigate to the previous page. */
    prevPage() {
      n.prevPage();
    },
    /**
     * Navigate to a specific page (1-indexed).
     * @param {number} n
     * @returns {boolean} true if navigation happened
     */
    goToPage(_) {
      return n.goToPage(_);
    },
    /** @returns {number} */
    get currentPage() {
      return n.currentPage;
    },
    /** @returns {number} */
    get totalPages() {
      return n.totalPages;
    },
    /**
     * Set the zoom scale and re-render the current page.
     * @param {number} scale  e.g. 1.0 = 100%, 1.5 = 150%
     */
    async setScale(_) {
      if (t.scale = Math.min(4, Math.max(0.25, _)), i.isLoaded) {
        o.pagesContainer.querySelectorAll(".psdk-canvas-wrap").forEach((T) => {
          T.dataset.rendered = "";
        });
        const C = n.currentPage;
        await S(n.totalPages);
        const x = document.getElementById(`psdk-page-${C}`);
        x && (f = !0, clearTimeout(g), x.scrollIntoView({ behavior: "auto", block: "start" }), g = setTimeout(() => {
          f = !1;
        }, 850));
      }
    },
    /** @returns {number} */
    get currentScale() {
      return t.scale;
    },
    /** Calculate scale to fit page to screen and apply it */
    async fitToScreen() {
      if (!i.isLoaded) return t.scale;
      const C = (await i.getPage(n.currentPage)).getViewport({ scale: 1 }), x = 48, T = o.canvasArea.clientWidth - x, k = o.canvasArea.clientHeight - x, M = T / C.width, B = k / C.height;
      let F = Math.min(M, B);
      return F = Math.min(4, Math.max(0.25, F)), await E.setScale(F), F;
    },
    /** Open the signature selection modal */
    openSignatureModal() {
      c && c.open("signature");
    },
    /** Open the e-materai selection modal */
    openEStampModal() {
      c && c.open("estamp");
    },
    /**
     * Programmatically place a signature.
     * @param {{x?:number, y?:number, page?:number, label?:string, image?:string}} opts
     */
    placeSignature(_ = {}) {
      const C = _.page || n.currentPage;
      if (_.page = C, _.x === void 0 || _.y === void 0) {
        const x = w.get(C);
        x && (_.x = x.width / 2 - 75, _.y = x.height / 2 - 25);
      }
      return a.placeSignature(_);
    },
    /**
     * Programmatically place an e-materai stamp.
     * @param {{x?:number, y?:number, page?:number, image?:string}} opts
     */
    placeEStamp(_ = {}) {
      const C = _.page || n.currentPage;
      if (_.page = C, _.x === void 0 || _.y === void 0) {
        const x = w.get(C);
        x && (_.x = x.width / 2 - 40, _.y = x.height / 2 - 40);
      }
      return a.placeEStamp(_);
    },
    /** Remove a specific signature/stamp by ID. */
    removeSignature(_) {
      a.removeItem(_);
    },
    /** Clear all signatures and stamps. */
    clearSignatures() {
      a.clearAll();
    },
    /** @returns {Array<object>} All placed items across all pages. */
    getSignatures() {
      return a.getAll();
    },
    /**
     * Get signatures for a specific page.
     * @param {number} [page]
     */
    getSignaturesByPage(_) {
      return a.getByPage(_);
    },
    /**
     * Register an event listener.
     * Events: documentLoaded, pageChanged, signaturePlaced, eStampPlaced,
     *         signatureMoved, signatureModeChanged, coordinateCapture
     */
    on(_, C) {
      return s.on(_, C), E;
    },
    /** Remove an event listener. */
    off(_, C) {
      return s.off(_, C), E;
    },
    /** Update UI config dynamically — shows/hides toolbar and sidebar elements. */
    updateConfig(_) {
      var x, T;
      const C = Ed(t, _);
      Object.keys(C).forEach((k) => {
        t[k] = C[k];
      }), l == null || l.applyConfig(t), h == null || h.applyConfig(t), o.sidebar && (o.sidebar.style.display = ((T = (x = t.ui) == null ? void 0 : x.sidebar) == null ? void 0 : T.thumbnails) !== !1 ? "" : "none"), t.disabled ? o.root.classList.add("psdk-disabled") : o.root.classList.remove("psdk-disabled"), t.theme === "light" ? o.root.classList.add("psdk-light") : o.root.classList.remove("psdk-light");
    },
    /** Get the main PDF canvas element for current page. */
    getCanvas(_ = n.currentPage) {
      return w.get(_);
    },
    /** Get the overlay canvas element for current page. */
    getOverlayCanvas(_ = n.currentPage) {
      return v.get(_);
    },
    /** Disable/Enable page navigation */
    setPaginationLocked(_) {
      n.setLocked(_), l == null || l.setPaginationLocked(_), h == null || h.setPaginationLocked(_);
    },
    /** @returns {boolean} */
    get isPaginationLocked() {
      return n.isLocked;
    },
    /** Destroy the viewer and clean up all resources. */
    async destroy() {
      u && u.disconnect(), a.destroy(), await i.destroy(), n.reset(), s.removeAllListeners(), e.innerHTML = "";
    }
  };
  return o.topbar && (l = pm(o.topbar, t, E)), o.sidebar && (h = gm(o.sidebar, t, E)), o.modalOverlay && (c = mm(o.modalOverlay, t, E)), t.file && E.loadDocument(t.file).catch((_) => {
    console.error("[pdf-signature-sdk] Auto-load failed:", _);
  }), E;
}
export {
  om as DEFAULT_CONFIG,
  nm as DocumentManager,
  ep as EventEmitter,
  rm as PaginationManager,
  am as SignatureManager,
  Am as createViewer,
  lm as mergeConfig
};
