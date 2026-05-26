(function(){"use strict";try{if(typeof document<"u"){var r=document.createElement("style");r.appendChild(document.createTextNode(':root,.psdk-root{--psdk-bg-base: #0f1117;--psdk-bg-surface: #1a1d27;--psdk-bg-elevated: #22263a;--psdk-bg-hover: #2a2f45;--psdk-border: rgba(255, 255, 255, .08);--psdk-border-strong: rgba(255, 255, 255, .14);--psdk-accent: #6366f1;--psdk-accent-hover: #4f52e0;--psdk-accent-glow: rgba(99, 102, 241, .35);--psdk-accent-subtle: rgba(99, 102, 241, .12);--psdk-danger: #ef4444;--psdk-danger-subtle: rgba(239, 68, 68, .12);--psdk-success: #22c55e;--psdk-warning: #f59e0b;--psdk-text-primary: #f1f5f9;--psdk-text-secondary: #8b92a5;--psdk-text-muted: #5a6070;--psdk-topbar-height: 56px;--psdk-sidebar-width: 190px;--psdk-sidebar-thumb-scale: .22;--psdk-radius-sm: 6px;--psdk-radius-md: 10px;--psdk-radius-lg: 14px;--psdk-shadow-sm: 0 2px 8px rgba(0, 0, 0, .35);--psdk-shadow-md: 0 4px 20px rgba(0, 0, 0, .5);--psdk-shadow-glow: 0 0 20px var(--psdk-accent-glow);--psdk-transition: .15s cubic-bezier(.4, 0, .2, 1);--psdk-font: "Inter", "Segoe UI", system-ui, -apple-system, sans-serif}.psdk-root.psdk-light{--psdk-bg-base: #f8fafc;--psdk-bg-surface: #ffffff;--psdk-bg-elevated: #f1f5f9;--psdk-bg-hover: #e2e8f0;--psdk-border: rgba(0, 0, 0, .08);--psdk-border-strong: rgba(0, 0, 0, .14);--psdk-text-primary: #0f172a;--psdk-text-secondary: #475569;--psdk-text-muted: #64748b;--psdk-shadow-sm: 0 2px 8px rgba(0, 0, 0, .05);--psdk-shadow-md: 0 4px 20px rgba(0, 0, 0, .08)}.psdk-root{font-family:var(--psdk-font);display:flex;flex-direction:column;width:100%;height:100%;min-height:400px;background:var(--psdk-bg-base);color:var(--psdk-text-primary);overflow:hidden;box-sizing:border-box;position:relative;border-radius:var(--psdk-radius-lg);box-shadow:var(--psdk-shadow-md)}.psdk-root *,.psdk-root *:before,.psdk-root *:after{box-sizing:border-box}.psdk-root.psdk-loading:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:#0f1117a6;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);z-index:1000;border-radius:inherit}.psdk-root.psdk-loading:before{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:40px;height:40px;border:3px solid var(--psdk-border);border-top-color:var(--psdk-accent);border-radius:50%;animation:psdk-spin .7s linear infinite;z-index:1001}@keyframes psdk-spin{to{transform:translate(-50%,-50%) rotate(360deg)}}.psdk-topbar{display:flex;align-items:center;flex-wrap:wrap;gap:6px;min-height:var(--psdk-topbar-height);padding:8px 16px;background:var(--psdk-bg-surface);border-bottom:1px solid var(--psdk-border);flex-shrink:0;z-index:10;position:relative}.psdk-topbar__brand{display:flex;align-items:center;gap:8px;margin-right:8px;padding-right:16px;border-right:1px solid var(--psdk-border)}.psdk-topbar__brand-icon{width:28px;height:28px;background:linear-gradient(135deg,var(--psdk-accent),#818cf8);border-radius:8px;display:flex;align-items:center;justify-content:center;box-shadow:var(--psdk-shadow-glow)}.psdk-topbar__brand-icon svg{width:16px;height:16px;fill:#fff}.psdk-topbar__brand-text{font-size:13px;font-weight:700;color:var(--psdk-text-primary);letter-spacing:-.3px}.psdk-topbar__divider{width:1px;height:24px;background:var(--psdk-border);margin:0 4px}.psdk-topbar__spacer{flex:1}.psdk-topbar__custom{display:flex;align-items:center;gap:8px}.psdk-btn{display:inline-flex;align-items:center;gap:6px;padding:7px 12px;border:1px solid var(--psdk-border);border-radius:var(--psdk-radius-sm);background:var(--psdk-bg-elevated);color:var(--psdk-text-primary);font-family:var(--psdk-font);font-size:12px;font-weight:500;cursor:pointer;transition:all var(--psdk-transition);white-space:nowrap;line-height:1;-webkit-user-select:none;user-select:none}@media (hover: hover) and (pointer: fine){.psdk-btn:hover{background:var(--psdk-bg-hover);border-color:var(--psdk-border-strong);transform:translateY(-1px);box-shadow:var(--psdk-shadow-sm)}}.psdk-btn:active{transform:translateY(0);box-shadow:none}.psdk-btn svg{width:14px;height:14px;flex-shrink:0;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.psdk-btn--accent{background:var(--psdk-accent);border-color:var(--psdk-accent);color:#fff;box-shadow:0 2px 12px var(--psdk-accent-glow)}@media (hover: hover) and (pointer: fine){.psdk-btn--accent:hover{background:var(--psdk-accent-hover);border-color:var(--psdk-accent-hover);box-shadow:0 4px 18px var(--psdk-accent-glow)}}.psdk-btn--accent.psdk-btn--active{background:#4338ca;border-color:#4338ca;box-shadow:0 0 0 3px #6366f14d;animation:psdk-pulse 2s infinite}@keyframes psdk-pulse{0%,to{box-shadow:0 0 0 3px #6366f14d}50%{box-shadow:0 0 0 6px #6366f11a}}.psdk-btn--danger{background:var(--psdk-danger-subtle);border-color:#ef44444d;color:var(--psdk-danger)}@media (hover: hover) and (pointer: fine){.psdk-btn--danger:hover{background:var(--psdk-danger);border-color:var(--psdk-danger);color:#fff}}.psdk-btn--ghost{background:transparent;border-color:transparent;color:var(--psdk-text-secondary)}@media (hover: hover) and (pointer: fine){.psdk-btn--ghost:hover{background:var(--psdk-bg-elevated);border-color:var(--psdk-border);color:var(--psdk-text-primary)}}.psdk-btn--icon{padding:7px}.psdk-btn:disabled{opacity:.35;cursor:not-allowed;pointer-events:none}.psdk-file-input{position:absolute;width:0;height:0;opacity:0;pointer-events:none}.psdk-root.psdk-disabled .psdk-btn,.psdk-root.psdk-disabled .psdk-sidebar__scroll,.psdk-root.psdk-disabled .psdk-overlay{opacity:.5;pointer-events:none;cursor:not-allowed}.psdk-pagination{display:flex;align-items:center;gap:6px}.psdk-pagination__indicator{display:flex;align-items:center;gap:4px;padding:6px 10px;background:var(--psdk-bg-base);border:1px solid var(--psdk-border);border-radius:var(--psdk-radius-sm);font-size:12px;font-weight:500;color:var(--psdk-text-secondary);min-width:80px;justify-content:center}.psdk-pagination__current{color:var(--psdk-text-primary);font-weight:700;font-size:13px}.psdk-pagination__current-input{width:36px;background:transparent;border:1px solid transparent;color:var(--psdk-text-primary);font-weight:700;font-size:13px;text-align:center;font-family:inherit;outline:none;border-radius:4px;transition:all .15s}.psdk-pagination__current-input:focus{background:#ffffff0d;border-color:var(--psdk-accent)}.psdk-pagination__current-input:disabled{opacity:.5;cursor:not-allowed}.psdk-pagination__current-input::-webkit-inner-spin-button,.psdk-pagination__current-input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.psdk-pagination__current-input[type=number]{-moz-appearance:textfield}.psdk-pagination__sep{color:var(--psdk-text-muted)}.psdk-zoom-badge{display:inline-flex;align-items:center;padding:5px 10px;background:var(--psdk-bg-base);border:1px solid var(--psdk-border);border-radius:var(--psdk-radius-sm);font-size:11px;font-weight:600;color:var(--psdk-text-secondary);min-width:52px;justify-content:center}.psdk-body{display:flex;flex:1;overflow:hidden;position:relative}.psdk-sidebar{width:var(--psdk-sidebar-width);flex-shrink:0;background:var(--psdk-bg-surface);border-right:1px solid var(--psdk-border);display:flex;flex-direction:column;overflow:hidden}.psdk-sidebar__header{display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border-bottom:1px solid var(--psdk-border);flex-shrink:0}.psdk-sidebar__title{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--psdk-text-muted)}.psdk-sidebar__count{font-size:10px;font-weight:600;color:var(--psdk-text-muted);background:var(--psdk-bg-elevated);border-radius:20px;padding:2px 7px}.psdk-sidebar__scroll{flex:1;overflow-y:auto;overflow-x:hidden;padding:8px;display:flex;flex-direction:column;gap:6px}.psdk-sidebar__scroll::-webkit-scrollbar{width:4px}.psdk-sidebar__scroll::-webkit-scrollbar-track{background:transparent}.psdk-sidebar__scroll::-webkit-scrollbar-thumb{background:var(--psdk-border);border-radius:4px}.psdk-sidebar__scroll::-webkit-scrollbar-thumb:hover{background:var(--psdk-border-strong)}.psdk-thumb{display:flex;flex-direction:column;align-items:center;gap:5px;padding:6px;border-radius:var(--psdk-radius-md);cursor:pointer;transition:all var(--psdk-transition);border:1px solid transparent;position:relative}@media (hover: hover) and (pointer: fine){.psdk-thumb:hover{background:var(--psdk-bg-elevated);border-color:var(--psdk-border);transform:translateY(-1px)}}.psdk-thumb--active{background:var(--psdk-accent-subtle)!important;border-color:var(--psdk-accent)!important;box-shadow:0 0 0 1px var(--psdk-accent)}.psdk-thumb__canvas-wrap{width:100%;display:flex;justify-content:center;align-items:center;background:#fff;border-radius:4px;overflow:hidden;box-shadow:var(--psdk-shadow-sm)}.psdk-thumb canvas{display:block;max-width:100%;height:auto}.psdk-thumb__label{font-size:9px;font-weight:600;color:var(--psdk-text-muted);letter-spacing:.04em}.psdk-thumb--active .psdk-thumb__label{color:var(--psdk-accent)}.psdk-thumb-skeleton{width:100%;height:120px;background:linear-gradient(90deg,var(--psdk-bg-elevated) 25%,var(--psdk-bg-hover) 50%,var(--psdk-bg-elevated) 75%);background-size:200% 100%;animation:psdk-shimmer 1.5s infinite;border-radius:var(--psdk-radius-sm)}@keyframes psdk-shimmer{0%{background-position:200% 0}to{background-position:-200% 0}}.psdk-viewer{flex:1;display:flex;flex-direction:column;overflow:hidden;background:var(--psdk-bg-base);position:relative}.psdk-viewer__canvas-area{flex:1;overflow:auto;display:flex;flex-direction:column;padding:24px;position:relative}.psdk-pages-container{display:flex;flex-direction:column;align-items:center;gap:24px;width:fit-content;min-width:100%;margin:auto}.psdk-viewer__canvas-area::-webkit-scrollbar{width:6px;height:6px}.psdk-viewer__canvas-area::-webkit-scrollbar-track{background:transparent}.psdk-viewer__canvas-area::-webkit-scrollbar-thumb{background:var(--psdk-border);border-radius:4px}.psdk-viewer__canvas-area::-webkit-scrollbar-thumb:hover{background:var(--psdk-border-strong)}.psdk-canvas-wrap{position:relative;display:inline-block;box-shadow:0 8px 40px #0009,0 0 0 1px #ffffff0f;border-radius:2px;background:#fff;transform-origin:top center;transition:transform .2s ease}.psdk-canvas-wrap canvas{display:block;border-radius:2px}.psdk-overlay{position:absolute;top:0;left:0;pointer-events:none;border-radius:2px}.psdk-overlay--active{pointer-events:all}.psdk-empty{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:var(--psdk-text-muted)}.psdk-empty__icon{width:72px;height:72px;opacity:.25}.psdk-empty__icon svg{width:100%;height:100%;stroke:var(--psdk-text-secondary);fill:none;stroke-width:1.5}.psdk-empty__title{font-size:16px;font-weight:600;color:var(--psdk-text-secondary)}.psdk-empty__sub{font-size:13px;color:var(--psdk-text-muted);text-align:center;max-width:260px;line-height:1.5}.psdk-empty__cta{margin-top:8px}.psdk-tooltip{position:relative}.psdk-tooltip:after{content:attr(data-tooltip);position:absolute;bottom:calc(100% + 8px);left:50%;transform:translate(-50%);background:#1e2030;color:var(--psdk-text-primary);font-size:11px;font-weight:500;padding:4px 8px;border-radius:5px;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity .15s;border:1px solid var(--psdk-border);box-shadow:var(--psdk-shadow-sm);z-index:100}@media (hover: hover) and (pointer: fine){.psdk-tooltip:hover:after{opacity:1}}.psdk-mode-banner{position:absolute;bottom:16px;left:50%;transform:translate(-50%);display:flex;align-items:center;gap:8px;padding:8px 16px;background:var(--psdk-accent);color:#fff;border-radius:20px;font-size:12px;font-weight:600;box-shadow:0 4px 20px var(--psdk-accent-glow);animation:psdk-slide-up .2s cubic-bezier(.34,1.56,.64,1);z-index:50;white-space:nowrap;letter-spacing:.02em}.psdk-mode-banner__dot{width:7px;height:7px;border-radius:50%;background:#ffffffb3;animation:psdk-blink 1s infinite}@keyframes psdk-blink{0%,to{opacity:1}50%{opacity:.3}}@keyframes psdk-slide-up{0%{opacity:0;transform:translate(-50%) translateY(12px)}to{opacity:1;transform:translate(-50%) translateY(0)}}.psdk-statusbar{display:flex;align-items:center;gap:12px;padding:6px 16px;background:var(--psdk-bg-surface);border-top:1px solid var(--psdk-border);font-size:11px;color:var(--psdk-text-muted);flex-shrink:0}.psdk-statusbar__item{display:flex;align-items:center;gap:5px}.psdk-statusbar__dot{width:5px;height:5px;border-radius:50%;background:var(--psdk-success)}.psdk-statusbar__dot--sig{background:var(--psdk-accent);animation:psdk-blink 1s infinite}.psdk-statusbar__spacer{flex:1}@media (max-width: 640px){.psdk-topbar{justify-content:center;padding:10px 12px;gap:8px}.psdk-topbar__spacer{display:none}.psdk-topbar__brand{width:100%;justify-content:center;border-right:none;margin-right:0;padding-right:0;margin-bottom:4px}.psdk-btn{padding:8px 10px}}.psdk-modal-overlay{position:absolute;top:0;right:0;bottom:0;left:0;background:#0f1117b3;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);z-index:2000;display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .2s ease;border-radius:inherit}.psdk-modal-overlay--active{opacity:1}.psdk-modal{background:var(--psdk-bg-surface);border:1px solid var(--psdk-border);border-radius:var(--psdk-radius-lg);box-shadow:var(--psdk-shadow-md);width:90%;max-width:360px;display:flex;flex-direction:column;transform:scale(.95) translateY(10px);opacity:0;transition:all .2s cubic-bezier(.34,1.56,.64,1);overflow:hidden}.psdk-modal--active{transform:scale(1) translateY(0);opacity:1}.psdk-modal__header{display:flex;align-items:center;justify-content:space-between;padding:16px 20px;border-bottom:1px solid var(--psdk-border);background:var(--psdk-bg-base)}.psdk-modal__title{font-size:14px;font-weight:700;color:var(--psdk-text-primary);margin:0}.psdk-modal__close{background:transparent;border:none;color:var(--psdk-text-muted);cursor:pointer;padding:4px;display:flex;align-items:center;justify-content:center;border-radius:var(--psdk-radius-sm);transition:all var(--psdk-transition)}.psdk-modal__close:hover{background:var(--psdk-bg-hover);color:var(--psdk-text-primary)}.psdk-modal__close svg{width:18px;height:18px}.psdk-modal__body{padding:20px;max-height:400px;overflow-y:auto}.psdk-modal__list{display:flex;flex-direction:column;gap:10px}.psdk-modal__item{display:flex;align-items:center;gap:12px;padding:12px 16px;background:var(--psdk-bg-elevated);border:1px solid var(--psdk-border);border-radius:var(--psdk-radius-md);cursor:pointer;transition:all var(--psdk-transition);text-align:left;color:var(--psdk-text-primary);font-family:var(--psdk-font);width:100%}.psdk-modal__item:hover{background:var(--psdk-bg-hover);border-color:var(--psdk-border-strong);transform:translateY(-1px)}.psdk-modal__item:active{transform:translateY(0)}.psdk-modal__item-icon{width:32px;height:32px;border-radius:8px;background:var(--psdk-accent-subtle);color:var(--psdk-accent);display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden}.psdk-modal__item-icon--image{background:#fff}.psdk-modal__item-icon img{width:100%;height:100%;object-fit:contain}.psdk-modal__item-icon svg{width:18px;height:18px}.psdk-modal__item-label{font-size:13px;font-weight:600}@media (max-width: 768px){.psdk-body{flex-direction:column}.psdk-viewer{min-height:0;order:1}.psdk-sidebar{order:2;width:100%;height:140px;flex:0 0 140px;border-right:none;border-top:1px solid var(--psdk-border)}.psdk-sidebar__header{padding:6px 12px}.psdk-sidebar__scroll{flex-direction:row;overflow-y:hidden;overflow-x:auto;padding:10px 12px;height:100px;flex:0 0 100px}.psdk-sidebar__scroll::-webkit-scrollbar{height:4px}.psdk-thumb{width:80px;min-height:90px;flex-shrink:0;justify-content:center}.psdk-thumb-skeleton{width:80px;height:90px;flex-shrink:0}}.psdk-modal__input-wrapper{position:relative;display:flex;align-items:center;width:100%}.psdk-modal__input{width:100%;padding:10px 40px 10px 14px;background:var(--psdk-bg-base);border:1px solid var(--psdk-border);border-radius:var(--psdk-radius-md);color:var(--psdk-text-primary);font-family:var(--psdk-font);font-size:13px;outline:none;transition:all var(--psdk-transition)}.psdk-modal__input:focus{border-color:var(--psdk-accent);box-shadow:0 0 0 3px var(--psdk-accent-subtle)}.psdk-root.psdk-light .psdk-modal__input{background:var(--psdk-bg-elevated)}.psdk-modal__input-toggle{position:absolute;right:12px;background:transparent;border:none;color:var(--psdk-text-muted);cursor:pointer;padding:4px;display:flex;align-items:center;justify-content:center;border-radius:var(--psdk-radius-sm);transition:all var(--psdk-transition)}.psdk-modal__input-toggle:hover{color:var(--psdk-text-primary)}.psdk-modal__input-toggle svg{width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.psdk-modal__error{color:var(--psdk-danger);font-size:12px;margin-top:8px;display:flex;align-items:center;gap:6px;font-weight:500}.psdk-modal__error svg{width:14px;height:14px;flex-shrink:0;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.psdk-modal__buttons{display:flex;justify-content:flex-end;gap:8px;margin-top:20px}.psdk-modal__input::-ms-reveal,.psdk-modal__input::-ms-clear{display:none!important}.psdk-topbar__secure-badge{display:inline-flex;align-items:center;justify-content:center;padding:4px;background:#22c55e26;color:var(--psdk-success);border-radius:50%;transition:all var(--psdk-transition);box-shadow:0 0 8px #22c55e33}.psdk-root.psdk-light .psdk-topbar__secure-badge{background:#22c55e1a}.psdk-topbar__secure-badge svg{width:12px;height:12px;stroke:currentColor}')),document.head.appendChild(r)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
var tf = Object.defineProperty;
var Dd = (d) => {
  throw TypeError(d);
};
var ef = (d, t, e) => t in d ? tf(d, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : d[t] = e;
var U = (d, t, e) => ef(d, typeof t != "symbol" ? t + "" : t, e), Xh = (d, t, e) => t.has(d) || Dd("Cannot " + e);
var r = (d, t, e) => (Xh(d, t, "read from private field"), e ? e.call(d) : t.get(d)), b = (d, t, e) => t.has(d) ? Dd("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(d) : t.set(d, e), f = (d, t, e, s) => (Xh(d, t, "write to private field"), s ? s.call(d, e) : t.set(d, e), e), y = (d, t, e) => (Xh(d, t, "access private method"), e);
var ie = (d, t, e, s) => ({
  set _(i) {
    f(d, t, i, e);
  },
  get _() {
    return r(d, t, s);
  }
});
class sf {
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
var Za = {};
Za.d = (d, t) => {
  for (var e in t)
    Za.o(t, e) && !Za.o(d, e) && Object.defineProperty(d, e, { enumerable: !0, get: t[e] });
};
Za.o = (d, t) => Object.prototype.hasOwnProperty.call(d, t);
var V = globalThis.pdfjsLib = {};
Za.d(V, {
  AbortException: () => (
    /* reexport */
    Ki
  ),
  AnnotationEditorLayer: () => (
    /* reexport */
    cd
  ),
  AnnotationEditorParamsType: () => (
    /* reexport */
    st
  ),
  AnnotationEditorType: () => (
    /* reexport */
    Y
  ),
  AnnotationEditorUIManager: () => (
    /* reexport */
    dr
  ),
  AnnotationLayer: () => (
    /* reexport */
    Zg
  ),
  AnnotationMode: () => (
    /* reexport */
    yi
  ),
  ColorPicker: () => (
    /* reexport */
    bh
  ),
  DOMSVGFactory: () => (
    /* reexport */
    Ed
  ),
  DrawLayer: () => (
    /* reexport */
    pd
  ),
  FeatureTest: () => (
    /* reexport */
    he
  ),
  GlobalWorkerOptions: () => (
    /* reexport */
    di
  ),
  ImageKind: () => (
    /* reexport */
    Nl
  ),
  InvalidPDFException: () => (
    /* reexport */
    ic
  ),
  MissingPDFException: () => (
    /* reexport */
    to
  ),
  OPS: () => (
    /* reexport */
    Qe
  ),
  OutputScale: () => (
    /* reexport */
    rc
  ),
  PDFDataRangeTransport: () => (
    /* reexport */
    sp
  ),
  PDFDateString: () => (
    /* reexport */
    vd
  ),
  PDFWorker: () => (
    /* reexport */
    xr
  ),
  PasswordResponses: () => (
    /* reexport */
    of
  ),
  PermissionFlag: () => (
    /* reexport */
    af
  ),
  PixelsPerInch: () => (
    /* reexport */
    Qi
  ),
  RenderingCancelledException: () => (
    /* reexport */
    yd
  ),
  TextLayer: () => (
    /* reexport */
    eo
  ),
  TouchManager: () => (
    /* reexport */
    gh
  ),
  UnexpectedResponseException: () => (
    /* reexport */
    uh
  ),
  Util: () => (
    /* reexport */
    H
  ),
  VerbosityLevel: () => (
    /* reexport */
    Hh
  ),
  XfaLayer: () => (
    /* reexport */
    np
  ),
  build: () => (
    /* reexport */
    Rg
  ),
  createValidAbsoluteUrl: () => (
    /* reexport */
    df
  ),
  fetchData: () => (
    /* reexport */
    Uh
  ),
  getDocument: () => (
    /* reexport */
    Sg
  ),
  getFilenameFromUrl: () => (
    /* reexport */
    vf
  ),
  getPdfFilenameFromUrl: () => (
    /* reexport */
    _f
  ),
  getXfaPageViewport: () => (
    /* reexport */
    wf
  ),
  isDataScheme: () => (
    /* reexport */
    jh
  ),
  isPdfFile: () => (
    /* reexport */
    Ad
  ),
  noContextMenu: () => (
    /* reexport */
    ds
  ),
  normalizeUnicode: () => (
    /* reexport */
    bf
  ),
  setLayerDimensions: () => (
    /* reexport */
    cr
  ),
  shadow: () => (
    /* reexport */
    J
  ),
  stopEvent: () => (
    /* reexport */
    Ne
  ),
  version: () => (
    /* reexport */
    Lg
  )
});
const se = typeof process == "object" && process + "" == "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser"), eu = [1, 0, 0, 1, 0, 0], sc = [1e-3, 0, 0, 1e-3, 0, 0], nf = 1e7, qh = 1.35, De = {
  ANY: 1,
  DISPLAY: 2,
  PRINT: 4,
  ANNOTATIONS_FORMS: 16,
  ANNOTATIONS_STORAGE: 32,
  ANNOTATIONS_DISABLE: 64,
  IS_EDITING: 128,
  OPLIST: 256
}, yi = {
  DISABLE: 0,
  ENABLE: 1,
  ENABLE_FORMS: 2,
  ENABLE_STORAGE: 3
}, rf = "pdfjs_internal_editor_", Y = {
  DISABLE: -1,
  NONE: 0,
  FREETEXT: 3,
  HIGHLIGHT: 9,
  STAMP: 13,
  INK: 15
}, st = {
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
}, af = {
  PRINT: 4,
  MODIFY_CONTENTS: 8,
  COPY: 16,
  MODIFY_ANNOTATIONS: 32,
  FILL_INTERACTIVE_FORMS: 256,
  COPY_FOR_ACCESSIBILITY: 512,
  ASSEMBLE: 1024,
  PRINT_HIGH_QUALITY: 2048
}, qt = {
  FILL: 0,
  STROKE: 1,
  FILL_STROKE: 2,
  INVISIBLE: 3,
  FILL_STROKE_MASK: 3,
  ADD_TO_PATH_FLAG: 4
}, Nl = {
  GRAYSCALE_1BPP: 1,
  RGB_24BPP: 2,
  RGBA_32BPP: 3
}, Mt = {
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
}, Hh = {
  ERRORS: 0,
  WARNINGS: 1,
  INFOS: 5
}, Qe = {
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
}, of = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
};
let zh = Hh.WARNINGS;
function lf(d) {
  Number.isInteger(d) && (zh = d);
}
function hf() {
  return zh;
}
function $h(d) {
  zh >= Hh.INFOS && console.log(`Info: ${d}`);
}
function K(d) {
  zh >= Hh.WARNINGS && console.log(`Warning: ${d}`);
}
function ct(d) {
  throw new Error(d);
}
function kt(d, t) {
  d || ct(t);
}
function cf(d) {
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
function df(d, t = null, e = null) {
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
          d = mf(d);
        } catch {
        }
    }
    const s = t ? new URL(d, t) : new URL(d);
    if (cf(s))
      return s;
  } catch {
  }
  return null;
}
function J(d, t, e, s = !1) {
  return Object.defineProperty(d, t, {
    value: e,
    enumerable: !s,
    configurable: !0,
    writable: !1
  }), e;
}
const Ji = function() {
  function t(e, s) {
    this.message = e, this.name = s;
  }
  return t.prototype = new Error(), t.constructor = t, t;
}();
class Fd extends Ji {
  constructor(t, e) {
    super(t, "PasswordException"), this.code = e;
  }
}
class Yh extends Ji {
  constructor(t, e) {
    super(t, "UnknownErrorException"), this.details = e;
  }
}
class ic extends Ji {
  constructor(t) {
    super(t, "InvalidPDFException");
  }
}
class to extends Ji {
  constructor(t) {
    super(t, "MissingPDFException");
  }
}
class uh extends Ji {
  constructor(t, e) {
    super(t, "UnexpectedResponseException"), this.status = e;
  }
}
class uf extends Ji {
  constructor(t) {
    super(t, "FormatError");
  }
}
class Ki extends Ji {
  constructor(t) {
    super(t, "AbortException");
  }
}
function su(d) {
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
function Gh(d) {
  typeof d != "string" && ct("Invalid argument for stringToBytes");
  const t = d.length, e = new Uint8Array(t);
  for (let s = 0; s < t; ++s)
    e[s] = d.charCodeAt(s) & 255;
  return e;
}
function pf(d) {
  return String.fromCharCode(d >> 24 & 255, d >> 16 & 255, d >> 8 & 255, d & 255);
}
function md(d) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const [e, s] of d)
    t[e] = s;
  return t;
}
function ff() {
  const d = new Uint8Array(4);
  return d[0] = 1, new Uint32Array(d.buffer, 0, 1)[0] === 1;
}
function gf() {
  try {
    return new Function(""), !0;
  } catch {
    return !1;
  }
}
class he {
  static get isLittleEndian() {
    return J(this, "isLittleEndian", ff());
  }
  static get isEvalSupported() {
    return J(this, "isEvalSupported", gf());
  }
  static get isOffscreenCanvasSupported() {
    return J(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas < "u");
  }
  static get isImageDecoderSupported() {
    return J(this, "isImageDecoderSupported", typeof ImageDecoder < "u");
  }
  static get platform() {
    return typeof navigator < "u" && typeof (navigator == null ? void 0 : navigator.platform) == "string" ? J(this, "platform", {
      isMac: navigator.platform.includes("Mac"),
      isWindows: navigator.platform.includes("Win"),
      isFirefox: typeof (navigator == null ? void 0 : navigator.userAgent) == "string" && navigator.userAgent.includes("Firefox")
    }) : J(this, "platform", {
      isMac: !1,
      isWindows: !1,
      isFirefox: !1
    });
  }
  static get isCSSRoundSupported() {
    var t, e;
    return J(this, "isCSSRoundSupported", (e = (t = globalThis.CSS) == null ? void 0 : t.supports) == null ? void 0 : e.call(t, "width: round(1.5px, 1px)"));
  }
}
const Kh = Array.from(Array(256).keys(), (d) => d.toString(16).padStart(2, "0"));
var ui, Ol, nc;
class H {
  static makeHexColor(t, e, s) {
    return `#${Kh[t]}${Kh[e]}${Kh[s]}`;
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
    return h ? (h[0] = Math.min(h[0], t, o), h[1] = Math.min(h[1], e, l), h[2] = Math.max(h[2], t, o), h[3] = Math.max(h[3], e, l)) : h = [Math.min(t, o), Math.min(e, l), Math.max(t, o), Math.max(e, l)], y(this, ui, nc).call(this, t, s, n, o, e, i, a, l, 3 * (-t + 3 * (s - n) + o), 6 * (t - 2 * s + n), 3 * (s - t), h), y(this, ui, nc).call(this, t, s, n, o, e, i, a, l, 3 * (-e + 3 * (i - a) + l), 6 * (e - 2 * i + a), 3 * (i - e), h), h;
  }
}
ui = new WeakSet(), Ol = function(t, e, s, i, n, a, o, l, h, c) {
  if (h <= 0 || h >= 1)
    return;
  const u = 1 - h, p = h * h, g = p * h, m = u * (u * (u * t + 3 * h * e) + 3 * p * s) + g * i, A = u * (u * (u * n + 3 * h * a) + 3 * p * o) + g * l;
  c[0] = Math.min(c[0], m), c[1] = Math.min(c[1], A), c[2] = Math.max(c[2], m), c[3] = Math.max(c[3], A);
}, nc = function(t, e, s, i, n, a, o, l, h, c, u, p) {
  if (Math.abs(h) < 1e-12) {
    Math.abs(c) >= 1e-12 && y(this, ui, Ol).call(this, t, e, s, i, n, a, o, l, -u / c, p);
    return;
  }
  const g = c ** 2 - 4 * u * h;
  if (g < 0)
    return;
  const m = Math.sqrt(g), A = 2 * h;
  y(this, ui, Ol).call(this, t, e, s, i, n, a, o, l, (-c + m) / A, p), y(this, ui, Ol).call(this, t, e, s, i, n, a, o, l, (-c - m) / A, p);
}, b(H, ui);
function mf(d) {
  return decodeURIComponent(escape(d));
}
let Qh = null, Nd = null;
function bf(d) {
  return Qh || (Qh = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu, Nd = /* @__PURE__ */ new Map([["ﬅ", "ſt"]])), d.replaceAll(Qh, (t, e, s) => e ? e.normalize("NFKC") : Nd.get(s));
}
function yf() {
  if (typeof crypto.randomUUID == "function")
    return crypto.randomUUID();
  const d = new Uint8Array(32);
  return crypto.getRandomValues(d), su(d);
}
const bd = "pdfjs_internal_id_";
function Af(d) {
  return Uint8Array.prototype.toBase64 ? d.toBase64() : btoa(su(d));
}
typeof Promise.try != "function" && (Promise.try = function(d, ...t) {
  return new Promise((e) => {
    e(d(...t));
  });
});
const Fs = "http://www.w3.org/2000/svg", nn = class nn {
};
U(nn, "CSS", 96), U(nn, "PDF", 72), U(nn, "PDF_TO_CSS_UNITS", nn.CSS / nn.PDF);
let Qi = nn;
async function Uh(d, t = "text") {
  if (Na(d, document.baseURI)) {
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
class Pl {
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
    let c, u, p, g;
    switch (i %= 360, i < 0 && (i += 360), i) {
      case 180:
        c = -1, u = 0, p = 0, g = 1;
        break;
      case 90:
        c = 0, u = 1, p = 1, g = 0;
        break;
      case 270:
        c = 0, u = -1, p = -1, g = 0;
        break;
      case 0:
        c = 1, u = 0, p = 0, g = -1;
        break;
      default:
        throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
    }
    o && (p = -p, g = -g);
    let m, A, _, v;
    c === 0 ? (m = Math.abs(h - t[1]) * s + n, A = Math.abs(l - t[0]) * s + a, _ = (t[3] - t[1]) * s, v = (t[2] - t[0]) * s) : (m = Math.abs(l - t[0]) * s + n, A = Math.abs(h - t[1]) * s + a, _ = (t[2] - t[0]) * s, v = (t[3] - t[1]) * s), this.transform = [c * s, u * s, p * s, g * s, m - c * s * l - p * s * h, A - u * s * l - g * s * h], this.width = _, this.height = v;
  }
  get rawDims() {
    const {
      userUnit: t,
      viewBox: e
    } = this, s = e.map((i) => i * t);
    return J(this, "rawDims", {
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
    return new Pl({
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
class yd extends Ji {
  constructor(t, e = 0) {
    super(t, "RenderingCancelledException"), this.extraDelay = e;
  }
}
function jh(d) {
  const t = d.length;
  let e = 0;
  for (; e < t && d[e].trim() === ""; )
    e++;
  return d.substring(e, e + 5).toLowerCase() === "data:";
}
function Ad(d) {
  return typeof d == "string" && /\.pdf$/i.test(d);
}
function vf(d) {
  return [d] = d.split(/[#?]/, 1), d.substring(d.lastIndexOf("/") + 1);
}
function _f(d, t = "document.pdf") {
  if (typeof d != "string")
    return t;
  if (jh(d))
    return K('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), t;
  const e = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/, s = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i, i = e.exec(d);
  let n = s.exec(i[1]) || s.exec(i[2]) || s.exec(i[3]);
  if (n && (n = n[0], n.includes("%")))
    try {
      n = s.exec(decodeURIComponent(n))[0];
    } catch {
    }
  return n || t;
}
class Od {
  constructor() {
    U(this, "started", /* @__PURE__ */ Object.create(null));
    U(this, "times", []);
  }
  time(t) {
    t in this.started && K(`Timer is already running for ${t}`), this.started[t] = Date.now();
  }
  timeEnd(t) {
    t in this.started || K(`Timer has not been started for ${t}`), this.times.push({
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
function Na(d, t) {
  try {
    const {
      protocol: e
    } = t ? new URL(d, t) : new URL(d);
    return e === "http:" || e === "https:";
  } catch {
    return !1;
  }
}
function ds(d) {
  d.preventDefault();
}
function Ne(d) {
  d.preventDefault(), d.stopPropagation();
}
var io;
class vd {
  static toDateObject(t) {
    if (!t || typeof t != "string")
      return null;
    r(this, io) || f(this, io, new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));
    const e = r(this, io).exec(t);
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
io = new WeakMap(), b(vd, io);
function wf(d, {
  scale: t = 1,
  rotation: e = 0
}) {
  const {
    width: s,
    height: i
  } = d.attributes.style, n = [0, 0, parseInt(s), parseInt(i)];
  return new Pl({
    viewBox: n,
    userUnit: 1,
    scale: t,
    rotation: e
  });
}
function _d(d) {
  if (d.startsWith("#")) {
    const t = parseInt(d.slice(1), 16);
    return [(t & 16711680) >> 16, (t & 65280) >> 8, t & 255];
  }
  return d.startsWith("rgb(") ? d.slice(4, -1).split(",").map((t) => parseInt(t)) : d.startsWith("rgba(") ? d.slice(5, -1).split(",").map((t) => parseInt(t)).slice(0, 3) : (K(`Not a valid color format: "${d}"`), [0, 0, 0]);
}
function Sf(d) {
  const t = document.createElement("span");
  t.style.visibility = "hidden", document.body.append(t);
  for (const e of d.keys()) {
    t.style.color = e;
    const s = window.getComputedStyle(t).color;
    d.set(e, _d(s));
  }
  t.remove();
}
function bt(d) {
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
function ps(d) {
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
function cr(d, t, e = !1, s = !0) {
  if (t instanceof Pl) {
    const {
      pageWidth: i,
      pageHeight: n
    } = t.rawDims, {
      style: a
    } = d, o = he.isCSSRoundSupported, l = `var(--scale-factor) * ${i}px`, h = `var(--scale-factor) * ${n}px`, c = o ? `round(down, ${l}, var(--scale-round-x, 1px))` : `calc(${l})`, u = o ? `round(down, ${h}, var(--scale-round-y, 1px))` : `calc(${h})`;
    !e || t.rotation % 180 === 0 ? (a.width = c, a.height = u) : (a.width = u, a.height = c);
  }
  s && d.setAttribute("data-main-rotation", t.rotation);
}
class rc {
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
var Ai, an, Ze, on, no, ro, vh, iu, ce, nu, ru, Bl, au, oc;
const Bs = class Bs {
  constructor(t) {
    b(this, ce);
    b(this, Ai, null);
    b(this, an, null);
    b(this, Ze);
    b(this, on, null);
    b(this, no, null);
    f(this, Ze, t), r(Bs, ro) || f(Bs, ro, Object.freeze({
      freetext: "pdfjs-editor-remove-freetext-button",
      highlight: "pdfjs-editor-remove-highlight-button",
      ink: "pdfjs-editor-remove-ink-button",
      stamp: "pdfjs-editor-remove-stamp-button"
    }));
  }
  render() {
    const t = f(this, Ai, document.createElement("div"));
    t.classList.add("editToolbar", "hidden"), t.setAttribute("role", "toolbar");
    const e = r(this, Ze)._uiManager._signal;
    t.addEventListener("contextmenu", ds, {
      signal: e
    }), t.addEventListener("pointerdown", y(Bs, vh, iu), {
      signal: e
    });
    const s = f(this, on, document.createElement("div"));
    s.className = "buttons", t.append(s);
    const i = r(this, Ze).toolbarPosition;
    if (i) {
      const {
        style: n
      } = t, a = r(this, Ze)._uiManager.direction === "ltr" ? 1 - i[0] : i[0];
      n.insetInlineEnd = `${100 * a}%`, n.top = `calc(${100 * i[1]}% + var(--editor-toolbar-vert-offset))`;
    }
    return y(this, ce, au).call(this), t;
  }
  get div() {
    return r(this, Ai);
  }
  hide() {
    var t;
    r(this, Ai).classList.add("hidden"), (t = r(this, an)) == null || t.hideDropdown();
  }
  show() {
    var t;
    r(this, Ai).classList.remove("hidden"), (t = r(this, no)) == null || t.shown();
  }
  async addAltText(t) {
    const e = await t.render();
    y(this, ce, Bl).call(this, e), r(this, on).prepend(e, r(this, ce, oc)), f(this, no, t);
  }
  addColorPicker(t) {
    f(this, an, t);
    const e = t.renderButton();
    y(this, ce, Bl).call(this, e), r(this, on).prepend(e, r(this, ce, oc));
  }
  remove() {
    var t;
    r(this, Ai).remove(), (t = r(this, an)) == null || t.destroy(), f(this, an, null);
  }
};
Ai = new WeakMap(), an = new WeakMap(), Ze = new WeakMap(), on = new WeakMap(), no = new WeakMap(), ro = new WeakMap(), vh = new WeakSet(), iu = function(t) {
  t.stopPropagation();
}, ce = new WeakSet(), nu = function(t) {
  r(this, Ze)._focusEventsAllowed = !1, Ne(t);
}, ru = function(t) {
  r(this, Ze)._focusEventsAllowed = !0, Ne(t);
}, Bl = function(t) {
  const e = r(this, Ze)._uiManager._signal;
  t.addEventListener("focusin", y(this, ce, nu).bind(this), {
    capture: !0,
    signal: e
  }), t.addEventListener("focusout", y(this, ce, ru).bind(this), {
    capture: !0,
    signal: e
  }), t.addEventListener("contextmenu", ds, {
    signal: e
  });
}, au = function() {
  const {
    editorType: t,
    _uiManager: e
  } = r(this, Ze), s = document.createElement("button");
  s.className = "delete", s.tabIndex = 0, s.setAttribute("data-l10n-id", r(Bs, ro)[t]), y(this, ce, Bl).call(this, s), s.addEventListener("click", (i) => {
    e.delete();
  }, {
    signal: e._signal
  }), r(this, on).append(s);
}, oc = function() {
  const t = document.createElement("div");
  return t.className = "divider", t;
}, b(Bs, vh), b(Bs, ro, null);
let ac = Bs;
var ao, ln, hn, Zi, ou, lu, hu;
class Ef {
  constructor(t) {
    b(this, Zi);
    b(this, ao, null);
    b(this, ln, null);
    b(this, hn);
    f(this, hn, t);
  }
  show(t, e, s) {
    const [i, n] = y(this, Zi, lu).call(this, e, s), {
      style: a
    } = r(this, ln) || f(this, ln, y(this, Zi, ou).call(this));
    t.append(r(this, ln)), a.insetInlineEnd = `${100 * i}%`, a.top = `calc(${100 * n}% + var(--editor-toolbar-vert-offset))`;
  }
  hide() {
    r(this, ln).remove();
  }
}
ao = new WeakMap(), ln = new WeakMap(), hn = new WeakMap(), Zi = new WeakSet(), ou = function() {
  const t = f(this, ln, document.createElement("div"));
  t.className = "editToolbar", t.setAttribute("role", "toolbar"), t.addEventListener("contextmenu", ds, {
    signal: r(this, hn)._signal
  });
  const e = f(this, ao, document.createElement("div"));
  return e.className = "buttons", t.append(e), y(this, Zi, hu).call(this), t;
}, lu = function(t, e) {
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
}, hu = function() {
  const t = document.createElement("button");
  t.className = "highlightButton", t.tabIndex = 0, t.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button1");
  const e = document.createElement("span");
  t.append(e), e.className = "visuallyHidden", e.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button-label");
  const s = r(this, hn)._signal;
  t.addEventListener("contextmenu", ds, {
    signal: s
  }), t.addEventListener("click", () => {
    r(this, hn).highlightSelection("floating_button");
  }, {
    signal: s
  }), r(this, ao).append(t);
};
function ph(d, t, e) {
  for (const s of e)
    t.addEventListener(s, d[s].bind(d));
}
var _h;
class Cf {
  constructor() {
    b(this, _h, 0);
  }
  get id() {
    return `${rf}${ie(this, _h)._++}`;
  }
}
_h = new WeakMap();
var kr, oo, Qt, Tr, Hl;
const kd = class kd {
  constructor() {
    b(this, Tr);
    b(this, kr, yf());
    b(this, oo, 0);
    b(this, Qt, null);
  }
  static get _isSVGFittingCanvas() {
    const t = 'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>', s = new OffscreenCanvas(1, 3).getContext("2d", {
      willReadFrequently: !0
    }), i = new Image();
    i.src = t;
    const n = i.decode().then(() => (s.drawImage(i, 0, 0, 1, 1, 0, 0, 1, 3), new Uint32Array(s.getImageData(0, 0, 1, 1).data.buffer)[0] === 0));
    return J(this, "_isSVGFittingCanvas", n);
  }
  async getFromFile(t) {
    const {
      lastModified: e,
      name: s,
      size: i,
      type: n
    } = t;
    return y(this, Tr, Hl).call(this, `${e}_${s}_${i}_${n}`, t);
  }
  async getFromUrl(t) {
    return y(this, Tr, Hl).call(this, t, t);
  }
  async getFromBlob(t, e) {
    const s = await e;
    return y(this, Tr, Hl).call(this, t, s);
  }
  async getFromId(t) {
    r(this, Qt) || f(this, Qt, /* @__PURE__ */ new Map());
    const e = r(this, Qt).get(t);
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
    r(this, Qt) || f(this, Qt, /* @__PURE__ */ new Map());
    let s = r(this, Qt).get(t);
    if (s != null && s.bitmap)
      return s.refCounter += 1, s;
    const i = new OffscreenCanvas(e.width, e.height);
    return i.getContext("2d").drawImage(e, 0, 0), s = {
      bitmap: i.transferToImageBitmap(),
      id: `image_${r(this, kr)}_${ie(this, oo)._++}`,
      refCounter: 1,
      isSvg: !1
    }, r(this, Qt).set(t, s), r(this, Qt).set(s.id, s), s;
  }
  getSvgUrl(t) {
    const e = r(this, Qt).get(t);
    return e != null && e.isSvg ? e.svgUrl : null;
  }
  deleteId(t) {
    var i;
    r(this, Qt) || f(this, Qt, /* @__PURE__ */ new Map());
    const e = r(this, Qt).get(t);
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
    return t.startsWith(`image_${r(this, kr)}_`);
  }
};
kr = new WeakMap(), oo = new WeakMap(), Qt = new WeakMap(), Tr = new WeakSet(), Hl = async function(t, e) {
  r(this, Qt) || f(this, Qt, /* @__PURE__ */ new Map());
  let s = r(this, Qt).get(t);
  if (s === null)
    return null;
  if (s != null && s.bitmap)
    return s.refCounter += 1, s;
  try {
    s || (s = {
      bitmap: null,
      id: `image_${r(this, kr)}_${ie(this, oo)._++}`,
      refCounter: 0,
      isSvg: !1
    });
    let i;
    if (typeof e == "string" ? (s.url = e, i = await Uh(e, "blob")) : e instanceof File ? i = s.file = e : e instanceof Blob && (i = e), i.type === "image/svg+xml") {
      const n = kd._isSVGFittingCanvas, a = new FileReader(), o = new Image(), l = new Promise((h, c) => {
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
    K(i), s = null;
  }
  return r(this, Qt).set(t, s), s && r(this, Qt).set(s.id, s), s;
};
let lc = kd;
var St, vi, lo, At;
class xf {
  constructor(t = 128) {
    b(this, St, []);
    b(this, vi, !1);
    b(this, lo);
    b(this, At, -1);
    f(this, lo, t);
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
    if (i && t(), r(this, vi))
      return;
    const l = {
      cmd: t,
      undo: e,
      post: s,
      type: n
    };
    if (r(this, At) === -1) {
      r(this, St).length > 0 && (r(this, St).length = 0), f(this, At, 0), r(this, St).push(l);
      return;
    }
    if (a && r(this, St)[r(this, At)].type === n) {
      o && (l.undo = r(this, St)[r(this, At)].undo), r(this, St)[r(this, At)] = l;
      return;
    }
    const h = r(this, At) + 1;
    h === r(this, lo) ? r(this, St).splice(0, 1) : (f(this, At, h), h < r(this, St).length && r(this, St).splice(h)), r(this, St).push(l);
  }
  undo() {
    if (r(this, At) === -1)
      return;
    f(this, vi, !0);
    const {
      undo: t,
      post: e
    } = r(this, St)[r(this, At)];
    t(), e == null || e(), f(this, vi, !1), f(this, At, r(this, At) - 1);
  }
  redo() {
    if (r(this, At) < r(this, St).length - 1) {
      f(this, At, r(this, At) + 1), f(this, vi, !0);
      const {
        cmd: t,
        post: e
      } = r(this, St)[r(this, At)];
      t(), e == null || e(), f(this, vi, !1);
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
          r(this, St).splice(e + 1, r(this, At) - e), f(this, At, e);
          return;
        }
      r(this, St).length = 0, f(this, At, -1);
    }
  }
  destroy() {
    f(this, St, null);
  }
}
St = new WeakMap(), vi = new WeakMap(), lo = new WeakMap(), At = new WeakMap();
var wh, cu;
class Ml {
  constructor(t) {
    b(this, wh);
    this.buffer = [], this.callbacks = /* @__PURE__ */ new Map(), this.allKeys = /* @__PURE__ */ new Set();
    const {
      isMac: e
    } = he.platform;
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
    const s = this.callbacks.get(y(this, wh, cu).call(this, e));
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
wh = new WeakSet(), cu = function(t) {
  t.altKey && this.buffer.push("alt"), t.ctrlKey && this.buffer.push("ctrl"), t.metaKey && this.buffer.push("meta"), t.shiftKey && this.buffer.push("shift"), this.buffer.push(t.key);
  const e = this.buffer.join("+");
  return this.buffer.length = 0, e;
};
const Sh = class Sh {
  get _colors() {
    const t = /* @__PURE__ */ new Map([["CanvasText", null], ["Canvas", null]]);
    return Sf(t), J(this, "_colors", t);
  }
  convert(t) {
    const e = _d(t);
    if (!window.matchMedia("(forced-colors: active)").matches)
      return e;
    for (const [s, i] of this._colors)
      if (i.every((n, a) => n === e[a]))
        return Sh._colorsMapping.get(s);
    return e;
  }
  getHexCode(t) {
    const e = this._colors.get(t);
    return e ? H.makeHexColor(...e) : t;
  }
};
U(Sh, "_colorsMapping", /* @__PURE__ */ new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]));
let hc = Sh;
var Pr, we, Rt, Gt, Mr, zs, Lr, ze, _i, cn, Rr, dn, bs, Je, un, ho, co, Ir, uo, ys, wi, Dr, Si, As, Eh, Ei, po, Ci, pn, fo, go, Ft, at, $s, fn, mo, bo, xi, vs, Gs, yo, $e, P, zl, cc, du, uu, $l, pu, fu, gu, dc, mu, uc, pc, bu, ne, Ns, yu, Au, fc, vu, Oa, gc;
const Sr = class Sr {
  constructor(t, e, s, i, n, a, o, l, h, c, u, p, g) {
    b(this, P);
    b(this, Pr, new AbortController());
    b(this, we, null);
    b(this, Rt, /* @__PURE__ */ new Map());
    b(this, Gt, /* @__PURE__ */ new Map());
    b(this, Mr, null);
    b(this, zs, null);
    b(this, Lr, null);
    b(this, ze, new xf());
    b(this, _i, null);
    b(this, cn, null);
    b(this, Rr, 0);
    b(this, dn, /* @__PURE__ */ new Set());
    b(this, bs, null);
    b(this, Je, null);
    b(this, un, /* @__PURE__ */ new Set());
    U(this, "_editorUndoBar", null);
    b(this, ho, !1);
    b(this, co, !1);
    b(this, Ir, !1);
    b(this, uo, null);
    b(this, ys, null);
    b(this, wi, null);
    b(this, Dr, null);
    b(this, Si, !1);
    b(this, As, null);
    b(this, Eh, new Cf());
    b(this, Ei, !1);
    b(this, po, !1);
    b(this, Ci, null);
    b(this, pn, null);
    b(this, fo, null);
    b(this, go, null);
    b(this, Ft, Y.NONE);
    b(this, at, /* @__PURE__ */ new Set());
    b(this, $s, null);
    b(this, fn, null);
    b(this, mo, null);
    b(this, bo, {
      isEditing: !1,
      isEmpty: !0,
      hasSomethingToUndo: !1,
      hasSomethingToRedo: !1,
      hasSelectedEditor: !1,
      hasSelectedText: !1
    });
    b(this, xi, [0, 0]);
    b(this, vs, null);
    b(this, Gs, null);
    b(this, yo, null);
    b(this, $e, null);
    const m = this._signal = r(this, Pr).signal;
    f(this, Gs, t), f(this, yo, e), f(this, Mr, s), this._eventBus = i, i._on("editingaction", this.onEditingAction.bind(this), {
      signal: m
    }), i._on("pagechanging", this.onPageChanging.bind(this), {
      signal: m
    }), i._on("scalechanging", this.onScaleChanging.bind(this), {
      signal: m
    }), i._on("rotationchanging", this.onRotationChanging.bind(this), {
      signal: m
    }), i._on("setpreference", this.onSetPreference.bind(this), {
      signal: m
    }), i._on("switchannotationeditorparams", (A) => this.updateParams(A.type, A.value), {
      signal: m
    }), y(this, P, pu).call(this), y(this, P, bu).call(this), y(this, P, dc).call(this), f(this, zs, n.annotationStorage), f(this, uo, n.filterFactory), f(this, fn, a), f(this, Dr, o || null), f(this, ho, l), f(this, co, h), f(this, Ir, c), f(this, go, u || null), this.viewParameters = {
      realScale: Qi.PDF_TO_CSS_UNITS,
      rotation: 0
    }, this.isShiftKeyDown = !1, this._editorUndoBar = p || null, this._supportsPinchToZoom = g !== !1;
  }
  static get _keyboardManager() {
    const t = Sr.prototype, e = (a) => r(a, Gs).contains(document.activeElement) && document.activeElement.tagName !== "BUTTON" && a.hasSomethingToControl(), s = (a, {
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
    return J(this, "_keyboardManager", new Ml([[["ctrl+a", "mac+meta+a"], t.selectAll, {
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
    (t = r(this, $e)) == null || t.resolve(), f(this, $e, null), (e = r(this, Pr)) == null || e.abort(), f(this, Pr, null), this._signal = null;
    for (const a of r(this, Gt).values())
      a.destroy();
    r(this, Gt).clear(), r(this, Rt).clear(), r(this, un).clear(), f(this, we, null), r(this, at).clear(), r(this, ze).destroy(), (s = r(this, Mr)) == null || s.destroy(), (i = r(this, As)) == null || i.hide(), f(this, As, null), r(this, ys) && (clearTimeout(r(this, ys)), f(this, ys, null)), r(this, vs) && (clearTimeout(r(this, vs)), f(this, vs, null)), (n = this._editorUndoBar) == null || n.destroy();
  }
  combinedSignal(t) {
    return AbortSignal.any([this._signal, t.signal]);
  }
  get mlManager() {
    return r(this, go);
  }
  get useNewAltTextFlow() {
    return r(this, co);
  }
  get useNewAltTextWhenAddingImage() {
    return r(this, Ir);
  }
  get hcmFilter() {
    return J(this, "hcmFilter", r(this, fn) ? r(this, uo).addHCMFilter(r(this, fn).foreground, r(this, fn).background) : "none");
  }
  get direction() {
    return J(this, "direction", getComputedStyle(r(this, Gs)).direction);
  }
  get highlightColors() {
    return J(this, "highlightColors", r(this, Dr) ? new Map(r(this, Dr).split(",").map((t) => t.split("=").map((e) => e.trim()))) : null);
  }
  get highlightColorNames() {
    return J(this, "highlightColorNames", this.highlightColors ? new Map(Array.from(this.highlightColors, (t) => t.reverse())) : null);
  }
  setCurrentDrawingSession(t) {
    t ? (this.unselectAll(), this.disableUserSelect(!0)) : this.disableUserSelect(!1), f(this, cn, t);
  }
  setMainHighlightColorPicker(t) {
    f(this, fo, t);
  }
  editAltText(t, e = !1) {
    var s;
    (s = r(this, Mr)) == null || s.editAltText(this, t, e);
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
        f(this, Ir, e);
        break;
    }
  }
  onPageChanging({
    pageNumber: t
  }) {
    f(this, Rr, t - 1);
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
    r(this, yo).classList.toggle("noUserSelect", t);
  }
  addShouldRescale(t) {
    r(this, un).add(t);
  }
  removeShouldRescale(t) {
    r(this, un).delete(t);
  }
  onScaleChanging({
    scale: t
  }) {
    var e;
    this.commitOrRemove(), this.viewParameters.realScale = t * Qi.PDF_TO_CSS_UNITS;
    for (const s of r(this, un))
      s.onScaleChanging();
    (e = r(this, cn)) == null || e.onScaleChanging();
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
    } = e, o = e.toString(), h = y(this, P, zl).call(this, e).closest(".textLayer"), c = this.getSelectionBoxes(h);
    if (!c)
      return;
    e.empty();
    const u = y(this, P, cc).call(this, h), p = r(this, Ft) === Y.NONE, g = () => {
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
      }), p && this.showAllEditors("highlight", !0, !0);
    };
    if (p) {
      this.switchToMode(Y.HIGHLIGHT, g);
      return;
    }
    g();
  }
  addToAnnotationStorage(t) {
    !t.isEmpty() && r(this, zs) && !r(this, zs).has(t.id) && r(this, zs).setValue(t.id, t);
  }
  blur() {
    if (this.isShiftKeyDown = !1, r(this, Si) && (f(this, Si, !1), y(this, P, $l).call(this, "main_toolbar")), !this.hasSelection)
      return;
    const {
      activeElement: t
    } = document;
    for (const e of r(this, at))
      if (e.div.contains(t)) {
        f(this, pn, [e, t]), e._focusEventsAllowed = !1;
        break;
      }
  }
  focus() {
    if (!r(this, pn))
      return;
    const [t, e] = r(this, pn);
    f(this, pn, null), e.addEventListener("focusin", () => {
      t._focusEventsAllowed = !0;
    }, {
      once: !0,
      signal: this._signal
    }), e.focus();
  }
  addEditListeners() {
    y(this, P, dc).call(this), y(this, P, uc).call(this);
  }
  removeEditListeners() {
    y(this, P, mu).call(this), y(this, P, pc).call(this);
  }
  dragOver(t) {
    for (const {
      type: e
    } of t.dataTransfer.items)
      for (const s of r(this, Je))
        if (s.isHandlingMimeForPasting(e)) {
          t.dataTransfer.dropEffect = "copy", t.preventDefault();
          return;
        }
  }
  drop(t) {
    for (const e of t.dataTransfer.items)
      for (const s of r(this, Je))
        if (s.isHandlingMimeForPasting(e.type)) {
          s.paste(e, this.currentLayer), t.preventDefault();
          return;
        }
  }
  copy(t) {
    var s;
    if (t.preventDefault(), (s = r(this, we)) == null || s.commitOrRemove(), !this.hasSelection)
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
      for (const a of r(this, Je))
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
      K(`paste: "${n.message}".`);
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
          y(this, P, fc).call(this, l);
        y(this, P, gc).call(this, n);
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
      K(`paste: "${n.message}".`);
    }
  }
  keydown(t) {
    !this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = !0), r(this, Ft) !== Y.NONE && !this.isEditorHandlingKeyboard && Sr._keyboardManager.exec(this, t);
  }
  keyup(t) {
    this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = !1, r(this, Si) && (f(this, Si, !1), y(this, P, $l).call(this, "main_toolbar")));
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
    t ? (y(this, P, fu).call(this), y(this, P, uc).call(this), y(this, P, ne).call(this, {
      isEditing: r(this, Ft) !== Y.NONE,
      isEmpty: y(this, P, Oa).call(this),
      hasSomethingToUndo: r(this, ze).hasSomethingToUndo(),
      hasSomethingToRedo: r(this, ze).hasSomethingToRedo(),
      hasSelectedEditor: !1
    })) : (y(this, P, gu).call(this), y(this, P, pc).call(this), y(this, P, ne).call(this, {
      isEditing: !1
    }), this.disableUserSelect(!1));
  }
  registerEditorTypes(t) {
    if (!r(this, Je)) {
      f(this, Je, t);
      for (const e of r(this, Je))
        y(this, P, Ns).call(this, e.defaultPropertiesToUpdate);
    }
  }
  getId() {
    return r(this, Eh).id;
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
    r(this, Gt).set(t.pageIndex, t), r(this, Ei) ? t.enable() : t.disable();
  }
  removeLayer(t) {
    r(this, Gt).delete(t.pageIndex);
  }
  async updateMode(t, e = null, s = !1) {
    var i;
    if (r(this, Ft) !== t && !(r(this, $e) && (await r(this, $e).promise, !r(this, $e)))) {
      if (f(this, $e, Promise.withResolvers()), f(this, Ft, t), t === Y.NONE) {
        this.setEditingState(!1), y(this, P, Au).call(this), (i = this._editorUndoBar) == null || i.hide(), r(this, $e).resolve();
        return;
      }
      this.setEditingState(!0), await y(this, P, yu).call(this), this.unselectAll();
      for (const n of r(this, Gt).values())
        n.updateMode(t);
      if (!e) {
        s && this.addNewEditorFromKeyboard(), r(this, $e).resolve();
        return;
      }
      for (const n of r(this, Rt).values())
        n.annotationElementId === e ? (this.setSelected(n), n.enterInEditMode()) : n.unselect();
      r(this, $e).resolve();
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
    if (r(this, Je)) {
      switch (t) {
        case st.CREATE:
          this.currentLayer.addNewEditor();
          return;
        case st.HIGHLIGHT_DEFAULT_COLOR:
          (s = r(this, fo)) == null || s.updateColor(e);
          break;
        case st.HIGHLIGHT_SHOW_ALL:
          this._eventBus.dispatch("reporttelemetry", {
            source: this,
            details: {
              type: "editing",
              data: {
                type: "highlight",
                action: "toggle_visibility"
              }
            }
          }), (r(this, mo) || f(this, mo, /* @__PURE__ */ new Map())).set(t, e), this.showAllEditors("highlight", e);
          break;
      }
      for (const i of r(this, at))
        i.updateParams(t, e);
      for (const i of r(this, Je))
        i.updateDefaultParams(t, e);
    }
  }
  showAllEditors(t, e, s = !1) {
    var n;
    for (const a of r(this, Rt).values())
      a.editorType === t && a.show(e);
    (((n = r(this, mo)) == null ? void 0 : n.get(st.HIGHLIGHT_SHOW_ALL)) ?? !0) !== e && y(this, P, Ns).call(this, [[st.HIGHLIGHT_SHOW_ALL, e]]);
  }
  enableWaiting(t = !1) {
    if (r(this, po) !== t) {
      f(this, po, t);
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
    t.div.contains(document.activeElement) && (r(this, ys) && clearTimeout(r(this, ys)), f(this, ys, setTimeout(() => {
      this.focusMainContainer(), f(this, ys, null);
    }, 0))), r(this, Rt).delete(t.id), this.unselect(t), (!t.annotationElementId || !r(this, dn).has(t.annotationElementId)) && ((e = r(this, zs)) == null || e.remove(t.id));
  }
  addDeletedAnnotationElement(t) {
    r(this, dn).add(t.annotationElementId), this.addChangedExistingAnnotation(t), t.deleted = !0;
  }
  isDeletedAnnotationElement(t) {
    return r(this, dn).has(t);
  }
  removeDeletedAnnotationElement(t) {
    r(this, dn).delete(t.annotationElementId), this.removeChangedExistingAnnotation(t), t.deleted = !1;
  }
  setActiveEditor(t) {
    r(this, we) !== t && (f(this, we, t), t && y(this, P, Ns).call(this, t.propertiesToUpdate));
  }
  updateUI(t) {
    r(this, P, vu) === t && y(this, P, Ns).call(this, t.propertiesToUpdate);
  }
  updateUIForDefaultProperties(t) {
    y(this, P, Ns).call(this, t.defaultPropertiesToUpdate);
  }
  toggleSelected(t) {
    if (r(this, at).has(t)) {
      r(this, at).delete(t), t.unselect(), y(this, P, ne).call(this, {
        hasSelectedEditor: this.hasSelection
      });
      return;
    }
    r(this, at).add(t), t.select(), y(this, P, Ns).call(this, t.propertiesToUpdate), y(this, P, ne).call(this, {
      hasSelectedEditor: !0
    });
  }
  setSelected(t) {
    var e;
    (e = r(this, cn)) == null || e.commitOrRemove();
    for (const s of r(this, at))
      s !== t && s.unselect();
    r(this, at).clear(), r(this, at).add(t), t.select(), y(this, P, Ns).call(this, t.propertiesToUpdate), y(this, P, ne).call(this, {
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
    t.unselect(), r(this, at).delete(t), y(this, P, ne).call(this, {
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
    r(this, ze).undo(), y(this, P, ne).call(this, {
      hasSomethingToUndo: r(this, ze).hasSomethingToUndo(),
      hasSomethingToRedo: !0,
      isEmpty: y(this, P, Oa).call(this)
    }), (t = this._editorUndoBar) == null || t.hide();
  }
  redo() {
    r(this, ze).redo(), y(this, P, ne).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: r(this, ze).hasSomethingToRedo(),
      isEmpty: y(this, P, Oa).call(this)
    });
  }
  addCommands(t) {
    r(this, ze).add(t), y(this, P, ne).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: !1,
      isEmpty: y(this, P, Oa).call(this)
    });
  }
  cleanUndoStack(t) {
    r(this, ze).cleanType(t);
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
        y(this, P, fc).call(this, a);
    };
    this.addCommands({
      cmd: s,
      undo: i,
      mustExec: !0
    });
  }
  commitOrRemove() {
    var t;
    (t = r(this, we)) == null || t.commitOrRemove();
  }
  hasSomethingToControl() {
    return r(this, we) || this.hasSelection;
  }
  selectAll() {
    for (const t of r(this, at))
      t.commit();
    y(this, P, gc).call(this, r(this, Rt).values());
  }
  unselectAll() {
    var t;
    if (!(r(this, we) && (r(this, we).commitOrRemove(), r(this, Ft) !== Y.NONE)) && !((t = r(this, cn)) != null && t.commitOrRemove()) && this.hasSelection) {
      for (const e of r(this, at))
        e.unselect();
      r(this, at).clear(), y(this, P, ne).call(this, {
        hasSelectedEditor: !1
      });
    }
  }
  translateSelectedEditors(t, e, s = !1) {
    if (s || this.commitOrRemove(), !this.hasSelection)
      return;
    r(this, xi)[0] += t, r(this, xi)[1] += e;
    const [i, n] = r(this, xi), a = [...r(this, at)], o = 1e3;
    r(this, vs) && clearTimeout(r(this, vs)), f(this, vs, setTimeout(() => {
      f(this, vs, null), r(this, xi)[0] = r(this, xi)[1] = 0, this.addCommands({
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
      this.disableUserSelect(!0), f(this, bs, /* @__PURE__ */ new Map());
      for (const t of r(this, at))
        r(this, bs).set(t, {
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
    if (!r(this, bs))
      return !1;
    this.disableUserSelect(!1);
    const t = r(this, bs);
    f(this, bs, null);
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
    if (r(this, bs))
      for (const s of r(this, bs).keys())
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
    return r(this, we) === t;
  }
  getActive() {
    return r(this, we);
  }
  getMode() {
    return r(this, Ft);
  }
  get imageManager() {
    return J(this, "imageManager", new lc());
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
        o = (h, c, u, p) => ({
          x: (c - i) / a,
          y: 1 - (h + u - s) / n,
          width: p / a,
          height: u / n
        });
        break;
      case "180":
        o = (h, c, u, p) => ({
          x: 1 - (h + u - s) / n,
          y: 1 - (c + p - i) / a,
          width: u / n,
          height: p / a
        });
        break;
      case "270":
        o = (h, c, u, p) => ({
          x: 1 - (c + p - i) / a,
          y: (h - s) / n,
          width: p / a,
          height: u / n
        });
        break;
      default:
        o = (h, c, u, p) => ({
          x: (h - s) / n,
          y: (c - i) / a,
          width: u / n,
          height: p / a
        });
        break;
    }
    const l = [];
    for (let h = 0, c = e.rangeCount; h < c; h++) {
      const u = e.getRangeAt(h);
      if (!u.collapsed)
        for (const {
          x: p,
          y: g,
          width: m,
          height: A
        } of u.getClientRects())
          m === 0 || A === 0 || l.push(o(p, g, m, A));
    }
    return l.length === 0 ? null : l;
  }
  addChangedExistingAnnotation({
    annotationElementId: t,
    id: e
  }) {
    (r(this, Lr) || f(this, Lr, /* @__PURE__ */ new Map())).set(t, e);
  }
  removeChangedExistingAnnotation({
    annotationElementId: t
  }) {
    var e;
    (e = r(this, Lr)) == null || e.delete(t);
  }
  renderAnnotationElement(t) {
    var i;
    const e = (i = r(this, Lr)) == null ? void 0 : i.get(t.data.id);
    if (!e)
      return;
    const s = r(this, zs).getRawValue(e);
    s && (r(this, Ft) === Y.NONE && !s.hasBeenModified || s.renderAnnotationElement(t));
  }
};
Pr = new WeakMap(), we = new WeakMap(), Rt = new WeakMap(), Gt = new WeakMap(), Mr = new WeakMap(), zs = new WeakMap(), Lr = new WeakMap(), ze = new WeakMap(), _i = new WeakMap(), cn = new WeakMap(), Rr = new WeakMap(), dn = new WeakMap(), bs = new WeakMap(), Je = new WeakMap(), un = new WeakMap(), ho = new WeakMap(), co = new WeakMap(), Ir = new WeakMap(), uo = new WeakMap(), ys = new WeakMap(), wi = new WeakMap(), Dr = new WeakMap(), Si = new WeakMap(), As = new WeakMap(), Eh = new WeakMap(), Ei = new WeakMap(), po = new WeakMap(), Ci = new WeakMap(), pn = new WeakMap(), fo = new WeakMap(), go = new WeakMap(), Ft = new WeakMap(), at = new WeakMap(), $s = new WeakMap(), fn = new WeakMap(), mo = new WeakMap(), bo = new WeakMap(), xi = new WeakMap(), vs = new WeakMap(), Gs = new WeakMap(), yo = new WeakMap(), $e = new WeakMap(), P = new WeakSet(), zl = function({
  anchorNode: t
}) {
  return t.nodeType === Node.TEXT_NODE ? t.parentElement : t;
}, cc = function(t) {
  const {
    currentLayer: e
  } = this;
  if (e.hasTextLayer(t))
    return e;
  for (const s of r(this, Gt).values())
    if (s.hasTextLayer(t))
      return s;
  return null;
}, du = function() {
  const t = document.getSelection();
  if (!t || t.isCollapsed)
    return;
  const s = y(this, P, zl).call(this, t).closest(".textLayer"), i = this.getSelectionBoxes(s);
  i && (r(this, As) || f(this, As, new Ef(this)), r(this, As).show(s, i, this.direction === "ltr"));
}, uu = function() {
  var n, a, o;
  const t = document.getSelection();
  if (!t || t.isCollapsed) {
    r(this, $s) && ((n = r(this, As)) == null || n.hide(), f(this, $s, null), y(this, P, ne).call(this, {
      hasSelectedText: !1
    }));
    return;
  }
  const {
    anchorNode: e
  } = t;
  if (e === r(this, $s))
    return;
  const i = y(this, P, zl).call(this, t).closest(".textLayer");
  if (!i) {
    r(this, $s) && ((a = r(this, As)) == null || a.hide(), f(this, $s, null), y(this, P, ne).call(this, {
      hasSelectedText: !1
    }));
    return;
  }
  if ((o = r(this, As)) == null || o.hide(), f(this, $s, e), y(this, P, ne).call(this, {
    hasSelectedText: !0
  }), !(r(this, Ft) !== Y.HIGHLIGHT && r(this, Ft) !== Y.NONE) && (r(this, Ft) === Y.HIGHLIGHT && this.showAllEditors("highlight", !0, !0), f(this, Si, this.isShiftKeyDown), !this.isShiftKeyDown)) {
    const l = r(this, Ft) === Y.HIGHLIGHT ? y(this, P, cc).call(this, i) : null;
    l == null || l.toggleDrawing();
    const h = new AbortController(), c = this.combinedSignal(h), u = (p) => {
      p.type === "pointerup" && p.button !== 0 || (h.abort(), l == null || l.toggleDrawing(!0), p.type === "pointerup" && y(this, P, $l).call(this, "main_toolbar"));
    };
    window.addEventListener("pointerup", u, {
      signal: c
    }), window.addEventListener("blur", u, {
      signal: c
    });
  }
}, $l = function(t = "") {
  r(this, Ft) === Y.HIGHLIGHT ? this.highlightSelection(t) : r(this, ho) && y(this, P, du).call(this);
}, pu = function() {
  document.addEventListener("selectionchange", y(this, P, uu).bind(this), {
    signal: this._signal
  });
}, fu = function() {
  if (r(this, wi))
    return;
  f(this, wi, new AbortController());
  const t = this.combinedSignal(r(this, wi));
  window.addEventListener("focus", this.focus.bind(this), {
    signal: t
  }), window.addEventListener("blur", this.blur.bind(this), {
    signal: t
  });
}, gu = function() {
  var t;
  (t = r(this, wi)) == null || t.abort(), f(this, wi, null);
}, dc = function() {
  if (r(this, Ci))
    return;
  f(this, Ci, new AbortController());
  const t = this.combinedSignal(r(this, Ci));
  window.addEventListener("keydown", this.keydown.bind(this), {
    signal: t
  }), window.addEventListener("keyup", this.keyup.bind(this), {
    signal: t
  });
}, mu = function() {
  var t;
  (t = r(this, Ci)) == null || t.abort(), f(this, Ci, null);
}, uc = function() {
  if (r(this, _i))
    return;
  f(this, _i, new AbortController());
  const t = this.combinedSignal(r(this, _i));
  document.addEventListener("copy", this.copy.bind(this), {
    signal: t
  }), document.addEventListener("cut", this.cut.bind(this), {
    signal: t
  }), document.addEventListener("paste", this.paste.bind(this), {
    signal: t
  });
}, pc = function() {
  var t;
  (t = r(this, _i)) == null || t.abort(), f(this, _i, null);
}, bu = function() {
  const t = this._signal;
  document.addEventListener("dragover", this.dragOver.bind(this), {
    signal: t
  }), document.addEventListener("drop", this.drop.bind(this), {
    signal: t
  });
}, ne = function(t) {
  Object.entries(t).some(([s, i]) => r(this, bo)[s] !== i) && (this._eventBus.dispatch("annotationeditorstateschanged", {
    source: this,
    details: Object.assign(r(this, bo), t)
  }), r(this, Ft) === Y.HIGHLIGHT && t.hasSelectedEditor === !1 && y(this, P, Ns).call(this, [[st.HIGHLIGHT_FREE, !0]]));
}, Ns = function(t) {
  this._eventBus.dispatch("annotationeditorparamschanged", {
    source: this,
    details: t
  });
}, yu = async function() {
  if (!r(this, Ei)) {
    f(this, Ei, !0);
    const t = [];
    for (const e of r(this, Gt).values())
      t.push(e.enable());
    await Promise.all(t);
    for (const e of r(this, Rt).values())
      e.enable();
  }
}, Au = function() {
  if (this.unselectAll(), r(this, Ei)) {
    f(this, Ei, !1);
    for (const t of r(this, Gt).values())
      t.disable();
    for (const t of r(this, Rt).values())
      t.disable();
  }
}, fc = function(t) {
  const e = r(this, Gt).get(t.pageIndex);
  e ? e.addOrRebuild(t) : (this.addEditor(t), this.addToAnnotationStorage(t));
}, vu = function() {
  let t = null;
  for (t of r(this, at))
    ;
  return t;
}, Oa = function() {
  if (r(this, Rt).size === 0)
    return !0;
  if (r(this, Rt).size === 1)
    for (const t of r(this, Rt).values())
      return t.isEmpty();
  return !1;
}, gc = function(t) {
  for (const e of r(this, at))
    e.unselect();
  r(this, at).clear();
  for (const e of t)
    e.isEmpty() || (r(this, at).add(e), e.select());
  y(this, P, ne).call(this, {
    hasSelectedEditor: this.hasSelection
  });
}, U(Sr, "TRANSLATE_SMALL", 1), U(Sr, "TRANSLATE_BIG", 10);
let dr = Sr;
var Nt, _s, ts, Fr, ws, Se, Nr, Ss, me, Us, gn, Es, ki, cs, Ba, Gl;
const re = class re {
  constructor(t) {
    b(this, cs);
    b(this, Nt, null);
    b(this, _s, !1);
    b(this, ts, null);
    b(this, Fr, null);
    b(this, ws, null);
    b(this, Se, null);
    b(this, Nr, !1);
    b(this, Ss, null);
    b(this, me, null);
    b(this, Us, null);
    b(this, gn, null);
    b(this, Es, !1);
    f(this, me, t), f(this, Es, t._uiManager.useNewAltTextFlow), r(re, ki) || f(re, ki, Object.freeze({
      added: "pdfjs-editor-new-alt-text-added-button",
      "added-label": "pdfjs-editor-new-alt-text-added-button-label",
      missing: "pdfjs-editor-new-alt-text-missing-button",
      "missing-label": "pdfjs-editor-new-alt-text-missing-button-label",
      review: "pdfjs-editor-new-alt-text-to-review-button",
      "review-label": "pdfjs-editor-new-alt-text-to-review-button-label"
    }));
  }
  static initialize(t) {
    re._l10n ?? (re._l10n = t);
  }
  async render() {
    const t = f(this, ts, document.createElement("button"));
    t.className = "altText", t.tabIndex = "0";
    const e = f(this, Fr, document.createElement("span"));
    t.append(e), r(this, Es) ? (t.classList.add("new"), t.setAttribute("data-l10n-id", r(re, ki).missing), e.setAttribute("data-l10n-id", r(re, ki)["missing-label"])) : (t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button"), e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button-label"));
    const s = r(this, me)._uiManager._signal;
    t.addEventListener("contextmenu", ds, {
      signal: s
    }), t.addEventListener("pointerdown", (n) => n.stopPropagation(), {
      signal: s
    });
    const i = (n) => {
      n.preventDefault(), r(this, me)._uiManager.editAltText(r(this, me)), r(this, Es) && r(this, me)._reportTelemetry({
        action: "pdfjs.image.alt_text.image_status_label_clicked",
        data: {
          label: r(this, cs, Ba)
        }
      });
    };
    return t.addEventListener("click", i, {
      capture: !0,
      signal: s
    }), t.addEventListener("keydown", (n) => {
      n.target === t && n.key === "Enter" && (f(this, Nr, !0), i(n));
    }, {
      signal: s
    }), await y(this, cs, Gl).call(this), t;
  }
  finish() {
    r(this, ts) && (r(this, ts).focus({
      focusVisible: r(this, Nr)
    }), f(this, Nr, !1));
  }
  isEmpty() {
    return r(this, Es) ? r(this, Nt) === null : !r(this, Nt) && !r(this, _s);
  }
  hasData() {
    return r(this, Es) ? r(this, Nt) !== null || !!r(this, Us) : this.isEmpty();
  }
  get guessedText() {
    return r(this, Us);
  }
  async setGuessedText(t) {
    r(this, Nt) === null && (f(this, Us, t), f(this, gn, await re._l10n.get("pdfjs-editor-new-alt-text-generated-alt-text-with-disclaimer", {
      generatedAltText: t
    })), y(this, cs, Gl).call(this));
  }
  toggleAltTextBadge(t = !1) {
    var e;
    if (!r(this, Es) || r(this, Nt)) {
      (e = r(this, Ss)) == null || e.remove(), f(this, Ss, null);
      return;
    }
    if (!r(this, Ss)) {
      const s = f(this, Ss, document.createElement("div"));
      s.className = "noAltTextBadge", r(this, me).div.append(s);
    }
    r(this, Ss).classList.toggle("hidden", !t);
  }
  serialize(t) {
    let e = r(this, Nt);
    return !t && r(this, Us) === e && (e = r(this, gn)), {
      altText: e,
      decorative: r(this, _s),
      guessedText: r(this, Us),
      textWithDisclaimer: r(this, gn)
    };
  }
  get data() {
    return {
      altText: r(this, Nt),
      decorative: r(this, _s)
    };
  }
  set data({
    altText: t,
    decorative: e,
    guessedText: s,
    textWithDisclaimer: i,
    cancel: n = !1
  }) {
    s && (f(this, Us, s), f(this, gn, i)), !(r(this, Nt) === t && r(this, _s) === e) && (n || (f(this, Nt, t), f(this, _s, e)), y(this, cs, Gl).call(this));
  }
  toggle(t = !1) {
    r(this, ts) && (!t && r(this, Se) && (clearTimeout(r(this, Se)), f(this, Se, null)), r(this, ts).disabled = !t);
  }
  shown() {
    r(this, me)._reportTelemetry({
      action: "pdfjs.image.alt_text.image_status_label_displayed",
      data: {
        label: r(this, cs, Ba)
      }
    });
  }
  destroy() {
    var t, e;
    (t = r(this, ts)) == null || t.remove(), f(this, ts, null), f(this, Fr, null), f(this, ws, null), (e = r(this, Ss)) == null || e.remove(), f(this, Ss, null);
  }
};
Nt = new WeakMap(), _s = new WeakMap(), ts = new WeakMap(), Fr = new WeakMap(), ws = new WeakMap(), Se = new WeakMap(), Nr = new WeakMap(), Ss = new WeakMap(), me = new WeakMap(), Us = new WeakMap(), gn = new WeakMap(), Es = new WeakMap(), ki = new WeakMap(), cs = new WeakSet(), Ba = function() {
  return r(this, Nt) && "added" || r(this, Nt) === null && this.guessedText && "review" || "missing";
}, Gl = async function() {
  var i, n, a;
  const t = r(this, ts);
  if (!t)
    return;
  if (r(this, Es)) {
    if (t.classList.toggle("done", !!r(this, Nt)), t.setAttribute("data-l10n-id", r(re, ki)[r(this, cs, Ba)]), (i = r(this, Fr)) == null || i.setAttribute("data-l10n-id", r(re, ki)[`${r(this, cs, Ba)}-label`]), !r(this, Nt)) {
      (n = r(this, ws)) == null || n.remove();
      return;
    }
  } else {
    if (!r(this, Nt) && !r(this, _s)) {
      t.classList.remove("done"), (a = r(this, ws)) == null || a.remove();
      return;
    }
    t.classList.add("done"), t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-edit-button");
  }
  let e = r(this, ws);
  if (!e) {
    f(this, ws, e = document.createElement("span")), e.className = "tooltip", e.setAttribute("role", "tooltip"), e.id = `alt-text-tooltip-${r(this, me).id}`;
    const o = 100, l = r(this, me)._uiManager._signal;
    l.addEventListener("abort", () => {
      clearTimeout(r(this, Se)), f(this, Se, null);
    }, {
      once: !0
    }), t.addEventListener("mouseenter", () => {
      f(this, Se, setTimeout(() => {
        f(this, Se, null), r(this, ws).classList.add("show"), r(this, me)._reportTelemetry({
          action: "alt_text_tooltip"
        });
      }, o));
    }, {
      signal: l
    }), t.addEventListener("mouseleave", () => {
      var h;
      r(this, Se) && (clearTimeout(r(this, Se)), f(this, Se, null)), (h = r(this, ws)) == null || h.classList.remove("show");
    }, {
      signal: l
    });
  }
  r(this, _s) ? e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-decorative-tooltip") : (e.removeAttribute("data-l10n-id"), e.textContent = r(this, Nt)), e.parentNode || t.append(e);
  const s = r(this, me).getImageForAltText();
  s == null || s.setAttribute("aria-describedby", e.id);
}, b(re, ki, null), U(re, "_l10n", null);
let fh = re;
var Ao, mn, vo, _o, wo, So, Eo, Or, js, bn, Ti, fi, _u, wu, mc;
const Td = class Td {
  constructor({
    container: t,
    isPinchingDisabled: e = null,
    isPinchingStopped: s = null,
    onPinchStart: i = null,
    onPinching: n = null,
    onPinchEnd: a = null,
    signal: o
  }) {
    b(this, fi);
    b(this, Ao);
    b(this, mn, !1);
    b(this, vo, null);
    b(this, _o);
    b(this, wo);
    b(this, So);
    b(this, Eo);
    b(this, Or);
    b(this, js, null);
    b(this, bn);
    b(this, Ti, null);
    f(this, Ao, t), f(this, vo, s), f(this, _o, e), f(this, wo, i), f(this, So, n), f(this, Eo, a), f(this, bn, new AbortController()), f(this, Or, AbortSignal.any([o, r(this, bn).signal])), t.addEventListener("touchstart", y(this, fi, _u).bind(this), {
      passive: !1,
      signal: r(this, Or)
    });
  }
  get MIN_TOUCH_DISTANCE_TO_PINCH() {
    return J(this, "MIN_TOUCH_DISTANCE_TO_PINCH", 35 / (window.devicePixelRatio || 1));
  }
  destroy() {
    var t;
    (t = r(this, bn)) == null || t.abort(), f(this, bn, null);
  }
};
Ao = new WeakMap(), mn = new WeakMap(), vo = new WeakMap(), _o = new WeakMap(), wo = new WeakMap(), So = new WeakMap(), Eo = new WeakMap(), Or = new WeakMap(), js = new WeakMap(), bn = new WeakMap(), Ti = new WeakMap(), fi = new WeakSet(), _u = function(t) {
  var i, n, a;
  if ((i = r(this, _o)) != null && i.call(this) || t.touches.length < 2)
    return;
  if (!r(this, Ti)) {
    f(this, Ti, new AbortController());
    const o = AbortSignal.any([r(this, Or), r(this, Ti).signal]), l = r(this, Ao), h = {
      signal: o,
      passive: !1
    };
    l.addEventListener("touchmove", y(this, fi, wu).bind(this), h), l.addEventListener("touchend", y(this, fi, mc).bind(this), h), l.addEventListener("touchcancel", y(this, fi, mc).bind(this), h), (n = r(this, wo)) == null || n.call(this);
  }
  if (Ne(t), t.touches.length !== 2 || (a = r(this, vo)) != null && a.call(this)) {
    f(this, js, null);
    return;
  }
  let [e, s] = t.touches;
  e.identifier > s.identifier && ([e, s] = [s, e]), f(this, js, {
    touch0X: e.screenX,
    touch0Y: e.screenY,
    touch1X: s.screenX,
    touch1Y: s.screenY
  });
}, wu = function(t) {
  var S;
  if (!r(this, js) || t.touches.length !== 2)
    return;
  let [e, s] = t.touches;
  e.identifier > s.identifier && ([e, s] = [s, e]);
  const {
    screenX: i,
    screenY: n
  } = e, {
    screenX: a,
    screenY: o
  } = s, l = r(this, js), {
    touch0X: h,
    touch0Y: c,
    touch1X: u,
    touch1Y: p
  } = l, g = u - h, m = p - c, A = a - i, _ = o - n, v = Math.hypot(A, _) || 1, w = Math.hypot(g, m) || 1;
  if (!r(this, mn) && Math.abs(w - v) <= Td.MIN_TOUCH_DISTANCE_TO_PINCH)
    return;
  if (l.touch0X = i, l.touch0Y = n, l.touch1X = a, l.touch1Y = o, t.preventDefault(), !r(this, mn)) {
    f(this, mn, !0);
    return;
  }
  const E = [(i + a) / 2, (n + o) / 2];
  (S = r(this, So)) == null || S.call(this, E, w, v);
}, mc = function(t) {
  var e;
  r(this, Ti).abort(), f(this, Ti, null), (e = r(this, Eo)) == null || e.call(this), r(this, js) && (t.preventDefault(), f(this, js, null), f(this, mn, !1));
};
let gh = Td;
var yn, es, ft, Br, Pi, Co, An, Ut, vn, Vs, Mi, xo, _n, Ee, ko, wn, Ws, Cs, Hr, zr, Ge, Sn, To, Ch, j, bc, Po, yc, Ul, Su, Eu, Ac, jl, vc, Cu, xu, ku, _c, Tu, wc, Pu, Mu, Lu, Sc, Ha;
const Q = class Q {
  constructor(t) {
    b(this, j);
    b(this, yn, null);
    b(this, es, null);
    b(this, ft, null);
    b(this, Br, !1);
    b(this, Pi, null);
    b(this, Co, "");
    b(this, An, !1);
    b(this, Ut, null);
    b(this, vn, null);
    b(this, Vs, null);
    b(this, Mi, null);
    b(this, xo, "");
    b(this, _n, !1);
    b(this, Ee, null);
    b(this, ko, !1);
    b(this, wn, !1);
    b(this, Ws, !1);
    b(this, Cs, null);
    b(this, Hr, 0);
    b(this, zr, 0);
    b(this, Ge, null);
    b(this, Sn, null);
    U(this, "_editToolbar", null);
    U(this, "_initialOptions", /* @__PURE__ */ Object.create(null));
    U(this, "_initialData", null);
    U(this, "_isVisible", !0);
    U(this, "_uiManager", null);
    U(this, "_focusEventsAllowed", !0);
    b(this, To, !1);
    b(this, Ch, Q._zIndex++);
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
    const t = Q.prototype._resizeWithKeyboard, e = dr.TRANSLATE_SMALL, s = dr.TRANSLATE_BIG;
    return J(this, "_resizerKeyboardManager", new Ml([[["ArrowLeft", "mac+ArrowLeft"], t, {
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
    }], [["Escape", "mac+Escape"], Q.prototype._stopResizingWithKeyboard]]));
  }
  get editorType() {
    return Object.getPrototypeOf(this).constructor._type;
  }
  static get isDrawer() {
    return !1;
  }
  static get _defaultLineColor() {
    return J(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
  }
  static deleteAnnotationElement(t) {
    const e = new kf({
      id: t.parent.getNextId(),
      parent: t.parent,
      uiManager: t._uiManager
    });
    e.annotationElementId = t.annotationElementId, e.deleted = !0, e._uiManager.addToAnnotationStorage(e);
  }
  static initialize(t, e) {
    if (Q._l10n ?? (Q._l10n = t), Q._l10nResizer || (Q._l10nResizer = Object.freeze({
      topLeft: "pdfjs-editor-resizer-top-left",
      topMiddle: "pdfjs-editor-resizer-top-middle",
      topRight: "pdfjs-editor-resizer-top-right",
      middleRight: "pdfjs-editor-resizer-middle-right",
      bottomRight: "pdfjs-editor-resizer-bottom-right",
      bottomMiddle: "pdfjs-editor-resizer-bottom-middle",
      bottomLeft: "pdfjs-editor-resizer-bottom-left",
      middleLeft: "pdfjs-editor-resizer-middle-left"
    })), Q._borderLineWidth !== -1)
      return;
    const s = getComputedStyle(document.documentElement);
    Q._borderLineWidth = parseFloat(s.getPropertyValue("--outline-width")) || 0;
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
    f(this, To, t), (e = this.div) == null || e.classList.toggle("draggable", t);
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
    this.div.style.zIndex = r(this, Ch);
  }
  setParent(t) {
    t !== null ? (this.pageIndex = t.pageIndex, this.pageDimensions = t.pageDimensions) : y(this, j, Ha).call(this), this.parent = t;
  }
  focusin(t) {
    this._focusEventsAllowed && (r(this, _n) ? f(this, _n, !1) : this.parent.setSelected(this));
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
    y(this, j, bc).call(this, this.parentDimensions, t, e);
  }
  translateInPage(t, e) {
    r(this, Ee) || f(this, Ee, [this.x, this.y, this.width, this.height]), y(this, j, bc).call(this, this.pageDimensions, t, e), this.div.scrollIntoView({
      block: "nearest"
    });
  }
  drag(t, e) {
    r(this, Ee) || f(this, Ee, [this.x, this.y, this.width, this.height]);
    const {
      div: s,
      parentDimensions: [i, n]
    } = this;
    if (this.x += t / i, this.y += e / n, this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
      const {
        x: u,
        y: p
      } = this.div.getBoundingClientRect();
      this.parent.findNewParent(this, u, p) && (this.x -= Math.floor(this.x), this.y -= Math.floor(this.y));
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
    } = Q, i = s / t, n = s / e;
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
    return y(s = Q, Po, yc).call(s, t, e, this.parentRotation);
  }
  pageTranslationToScreen(t, e) {
    var s;
    return y(s = Q, Po, yc).call(s, t, e, 360 - this.parentRotation);
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
    (t = r(this, ft)) == null || t.finish();
  }
  async addEditToolbar() {
    return this._editToolbar || r(this, wn) ? this._editToolbar : (this._editToolbar = new ac(this), this.div.append(this._editToolbar.render()), r(this, ft) && await this._editToolbar.addAltText(r(this, ft)), this._editToolbar);
  }
  removeEditToolbar() {
    var t;
    this._editToolbar && (this._editToolbar.remove(), this._editToolbar = null, (t = r(this, ft)) == null || t.destroy());
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
    r(this, ft) || (fh.initialize(Q._l10n), f(this, ft, new fh(this)), r(this, yn) && (r(this, ft).data = r(this, yn), f(this, yn, null)), await this.addEditToolbar());
  }
  get altTextData() {
    var t;
    return (t = r(this, ft)) == null ? void 0 : t.data;
  }
  set altTextData(t) {
    r(this, ft) && (r(this, ft).data = t);
  }
  get guessedAltText() {
    var t;
    return (t = r(this, ft)) == null ? void 0 : t.guessedText;
  }
  async setGuessedAltText(t) {
    var e;
    await ((e = r(this, ft)) == null ? void 0 : e.setGuessedText(t));
  }
  serializeAltText(t) {
    var e;
    return (e = r(this, ft)) == null ? void 0 : e.serialize(t);
  }
  hasAltText() {
    return !!r(this, ft) && !r(this, ft).isEmpty();
  }
  hasAltTextData() {
    var t;
    return ((t = r(this, ft)) == null ? void 0 : t.hasData()) ?? !1;
  }
  render() {
    var n;
    this.div = document.createElement("div"), this.div.setAttribute("data-editor-rotation", (360 - this.rotation) % 360), this.div.className = this.name, this.div.setAttribute("id", this.id), this.div.tabIndex = r(this, Br) ? -1 : 0, this._isVisible || this.div.classList.add("hidden"), this.setInForeground(), y(this, j, wc).call(this);
    const [t, e] = this.parentDimensions;
    this.parentRotation % 180 !== 0 && (this.div.style.maxWidth = `${(100 * e / t).toFixed(2)}%`, this.div.style.maxHeight = `${(100 * t / e).toFixed(2)}%`);
    const [s, i] = this.getInitialTranslation();
    return this.translate(s, i), ph(this, this.div, ["pointerdown"]), this.isResizable && this._uiManager._supportsPinchToZoom && (r(this, Sn) || f(this, Sn, new gh({
      container: this.div,
      isPinchingDisabled: () => !this.isSelected,
      onPinchStart: y(this, j, Cu).bind(this),
      onPinching: y(this, j, xu).bind(this),
      onPinchEnd: y(this, j, ku).bind(this),
      signal: this._uiManager._signal
    }))), (n = this._uiManager._editorUndoBar) == null || n.hide(), this.div;
  }
  pointerdown(t) {
    const {
      isMac: e
    } = he.platform;
    if (t.button !== 0 || t.ctrlKey && e) {
      t.preventDefault();
      return;
    }
    if (f(this, _n, !0), this._isDraggable) {
      y(this, j, Tu).call(this, t);
      return;
    }
    y(this, j, _c).call(this, t);
  }
  get isSelected() {
    return this._uiManager.isSelected(this);
  }
  _onStartDragging() {
  }
  _onStopDragging() {
  }
  moveInDOM() {
    r(this, Cs) && clearTimeout(r(this, Cs)), f(this, Cs, setTimeout(() => {
      var t;
      f(this, Cs, null), (t = this.parent) == null || t.moveEditorInDOM(this);
    }, 0));
  }
  _setParentAndPosition(t, e, s) {
    t.changeParent(this), this.x = e, this.y = s, this.fixAndSetPosition(), this._onTranslated();
  }
  getRect(t, e, s = this.rotation) {
    const i = this.parentScale, [n, a] = this.pageDimensions, [o, l] = this.pageTranslation, h = t / i, c = e / i, u = this.x * n, p = this.y * a, g = this.width * n, m = this.height * a;
    switch (s) {
      case 0:
        return [u + h + o, a - p - c - m + l, u + h + g + o, a - p - c + l];
      case 90:
        return [u + c + o, a - p + h + l, u + c + m + o, a - p + h + g + l];
      case 180:
        return [u - h - g + o, a - p + c + l, u - h + o, a - p + c + m + l];
      case 270:
        return [u - c - m + o, a - p - h - g + l, u - c + o, a - p - h + l];
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
    f(this, wn, !0);
  }
  disableEditMode() {
    f(this, wn, !1);
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
    y(this, j, wc).call(this);
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
    i.rotation = t.rotation, f(i, yn, t.accessibilityData);
    const [n, a] = i.pageDimensions, [o, l, h, c] = i.getRectInCurrentCoords(t.rect, a);
    return i.x = o / n, i.y = l / a, i.width = h / n, i.height = c / a, i;
  }
  get hasBeenModified() {
    return !!this.annotationElementId && (this.deleted || this.serialize() !== null);
  }
  remove() {
    var t, e;
    if ((t = r(this, Mi)) == null || t.abort(), f(this, Mi, null), this.isEmpty() || this.commit(), this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this), r(this, Cs) && (clearTimeout(r(this, Cs)), f(this, Cs, null)), y(this, j, Ha).call(this), this.removeEditToolbar(), r(this, Ge)) {
      for (const s of r(this, Ge).values())
        clearTimeout(s);
      f(this, Ge, null);
    }
    this.parent = null, (e = r(this, Sn)) == null || e.destroy(), f(this, Sn, null);
  }
  get isResizable() {
    return !1;
  }
  makeResizable() {
    this.isResizable && (y(this, j, Su).call(this), r(this, Ut).classList.remove("hidden"), ph(this, this.div, ["keydown"]));
  }
  get toolbarPosition() {
    return null;
  }
  keydown(t) {
    if (!this.isResizable || t.target !== this.div || t.key !== "Enter")
      return;
    this._uiManager.setSelected(this), f(this, Vs, {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height
    });
    const e = r(this, Ut).children;
    if (!r(this, es)) {
      f(this, es, Array.from(e));
      const a = y(this, j, Pu).bind(this), o = y(this, j, Mu).bind(this), l = this._uiManager._signal;
      for (const h of r(this, es)) {
        const c = h.getAttribute("data-resizer-name");
        h.setAttribute("role", "spinbutton"), h.addEventListener("keydown", a, {
          signal: l
        }), h.addEventListener("blur", o, {
          signal: l
        }), h.addEventListener("focus", y(this, j, Lu).bind(this, c), {
          signal: l
        }), h.setAttribute("data-l10n-id", Q._l10nResizer[c]);
      }
    }
    const s = r(this, es)[0];
    let i = 0;
    for (const a of e) {
      if (a === s)
        break;
      i++;
    }
    const n = (360 - this.rotation + this.parentRotation) % 360 / 90 * (r(this, es).length / 4);
    if (n !== i) {
      if (n < i)
        for (let o = 0; o < i - n; o++)
          r(this, Ut).append(r(this, Ut).firstChild);
      else if (n > i)
        for (let o = 0; o < n - i; o++)
          r(this, Ut).firstChild.before(r(this, Ut).lastChild);
      let a = 0;
      for (const o of e) {
        const h = r(this, es)[a++].getAttribute("data-resizer-name");
        o.setAttribute("data-l10n-id", Q._l10nResizer[h]);
      }
    }
    y(this, j, Sc).call(this, 0), f(this, Ws, !0), r(this, Ut).firstChild.focus({
      focusVisible: !0
    }), t.preventDefault(), t.stopImmediatePropagation();
  }
  _resizeWithKeyboard(t, e) {
    r(this, Ws) && y(this, j, vc).call(this, r(this, xo), {
      deltaX: t,
      deltaY: e,
      fromKeyboard: !0
    });
  }
  _stopResizingWithKeyboard() {
    y(this, j, Ha).call(this), this.div.focus();
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
    (e = this._editToolbar) == null || e.show(), (s = r(this, ft)) == null || s.toggleAltTextBadge(!1);
  }
  unselect() {
    var t, e, s, i, n;
    (t = r(this, Ut)) == null || t.classList.add("hidden"), (e = this.div) == null || e.classList.remove("selectedEditor"), (s = this.div) != null && s.contains(document.activeElement) && this._uiManager.currentLayer.div.focus({
      preventScroll: !0
    }), (i = this._editToolbar) == null || i.hide(), (n = r(this, ft)) == null || n.toggleAltTextBadge(!0);
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
    return r(this, ko);
  }
  set isEditing(t) {
    f(this, ko, t), this.parent && (t ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null));
  }
  setAspectRatio(t, e) {
    f(this, An, !0);
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
      r(this, Ge) || f(this, Ge, /* @__PURE__ */ new Map());
      const {
        action: s
      } = t;
      let i = r(this, Ge).get(s);
      i && clearTimeout(i), i = setTimeout(() => {
        this._reportTelemetry(t), r(this, Ge).delete(s), r(this, Ge).size === 0 && f(this, Ge, null);
      }, Q._telemetryTimeout), r(this, Ge).set(s, i);
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
    this.div && (this.div.tabIndex = 0), f(this, Br, !1);
  }
  disable() {
    this.div && (this.div.tabIndex = -1), f(this, Br, !0);
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
yn = new WeakMap(), es = new WeakMap(), ft = new WeakMap(), Br = new WeakMap(), Pi = new WeakMap(), Co = new WeakMap(), An = new WeakMap(), Ut = new WeakMap(), vn = new WeakMap(), Vs = new WeakMap(), Mi = new WeakMap(), xo = new WeakMap(), _n = new WeakMap(), Ee = new WeakMap(), ko = new WeakMap(), wn = new WeakMap(), Ws = new WeakMap(), Cs = new WeakMap(), Hr = new WeakMap(), zr = new WeakMap(), Ge = new WeakMap(), Sn = new WeakMap(), To = new WeakMap(), Ch = new WeakMap(), j = new WeakSet(), bc = function([t, e], s, i) {
  [s, i] = this.screenToPageTranslation(s, i), this.x += s / t, this.y += i / e, this._onTranslating(this.x, this.y), this.fixAndSetPosition();
}, Po = new WeakSet(), yc = function(t, e, s) {
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
}, Ul = function(t) {
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
}, Su = function() {
  if (r(this, Ut))
    return;
  f(this, Ut, document.createElement("div")), r(this, Ut).classList.add("resizers");
  const t = this._willKeepAspectRatio ? ["topLeft", "topRight", "bottomRight", "bottomLeft"] : ["topLeft", "topMiddle", "topRight", "middleRight", "bottomRight", "bottomMiddle", "bottomLeft", "middleLeft"], e = this._uiManager._signal;
  for (const s of t) {
    const i = document.createElement("div");
    r(this, Ut).append(i), i.classList.add("resizer", s), i.setAttribute("data-resizer-name", s), i.addEventListener("pointerdown", y(this, j, Eu).bind(this, s), {
      signal: e
    }), i.addEventListener("contextmenu", ds, {
      signal: e
    }), i.tabIndex = -1;
  }
  this.div.prepend(r(this, Ut));
}, Eu = function(t, e) {
  var c;
  e.preventDefault();
  const {
    isMac: s
  } = he.platform;
  if (e.button !== 0 || e.ctrlKey && s)
    return;
  (c = r(this, ft)) == null || c.toggle(!1);
  const i = this._isDraggable;
  this._isDraggable = !1, f(this, vn, [e.screenX, e.screenY]);
  const n = new AbortController(), a = this._uiManager.combinedSignal(n);
  this.parent.togglePointerEvents(!1), window.addEventListener("pointermove", y(this, j, vc).bind(this, t), {
    passive: !0,
    capture: !0,
    signal: a
  }), window.addEventListener("touchmove", Ne, {
    passive: !1,
    signal: a
  }), window.addEventListener("contextmenu", ds, {
    signal: a
  }), f(this, Vs, {
    savedX: this.x,
    savedY: this.y,
    savedWidth: this.width,
    savedHeight: this.height
  });
  const o = this.parent.div.style.cursor, l = this.div.style.cursor;
  this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(e.target).cursor;
  const h = () => {
    var u;
    n.abort(), this.parent.togglePointerEvents(!0), (u = r(this, ft)) == null || u.toggle(!0), this._isDraggable = i, this.parent.div.style.cursor = o, this.div.style.cursor = l, y(this, j, jl).call(this);
  };
  window.addEventListener("pointerup", h, {
    signal: a
  }), window.addEventListener("blur", h, {
    signal: a
  });
}, Ac = function(t, e, s, i) {
  this.width = s, this.height = i, this.x = t, this.y = e;
  const [n, a] = this.parentDimensions;
  this.setDims(n * s, a * i), this.fixAndSetPosition(), this._onResized();
}, jl = function() {
  if (!r(this, Vs))
    return;
  const {
    savedX: t,
    savedY: e,
    savedWidth: s,
    savedHeight: i
  } = r(this, Vs);
  f(this, Vs, null);
  const n = this.x, a = this.y, o = this.width, l = this.height;
  n === t && a === e && o === s && l === i || this.addCommands({
    cmd: y(this, j, Ac).bind(this, n, a, o, l),
    undo: y(this, j, Ac).bind(this, t, e, s, i),
    mustExec: !0
  });
}, vc = function(t, e) {
  const [s, i] = this.parentDimensions, n = this.x, a = this.y, o = this.width, l = this.height, h = Q.MIN_SIZE / s, c = Q.MIN_SIZE / i, u = y(this, j, Ul).call(this, this.rotation), p = (L, $) => [u[0] * L + u[2] * $, u[1] * L + u[3] * $], g = y(this, j, Ul).call(this, 360 - this.rotation), m = (L, $) => [g[0] * L + g[2] * $, g[1] * L + g[3] * $];
  let A, _, v = !1, w = !1;
  switch (t) {
    case "topLeft":
      v = !0, A = (L, $) => [0, 0], _ = (L, $) => [L, $];
      break;
    case "topMiddle":
      A = (L, $) => [L / 2, 0], _ = (L, $) => [L / 2, $];
      break;
    case "topRight":
      v = !0, A = (L, $) => [L, 0], _ = (L, $) => [0, $];
      break;
    case "middleRight":
      w = !0, A = (L, $) => [L, $ / 2], _ = (L, $) => [0, $ / 2];
      break;
    case "bottomRight":
      v = !0, A = (L, $) => [L, $], _ = (L, $) => [0, 0];
      break;
    case "bottomMiddle":
      A = (L, $) => [L / 2, $], _ = (L, $) => [L / 2, 0];
      break;
    case "bottomLeft":
      v = !0, A = (L, $) => [0, $], _ = (L, $) => [L, 0];
      break;
    case "middleLeft":
      w = !0, A = (L, $) => [0, $ / 2], _ = (L, $) => [L, $ / 2];
      break;
  }
  const E = A(o, l), S = _(o, l);
  let C = p(...S);
  const k = Q._round(n + C[0]), x = Q._round(a + C[1]);
  let T = 1, M = 1, z, D;
  if (e.fromKeyboard)
    ({
      deltaX: z,
      deltaY: D
    } = e);
  else {
    const {
      screenX: L,
      screenY: $
    } = e, [Pt, ve] = r(this, vn);
    [z, D] = this.screenToPageTranslation(L - Pt, $ - ve), r(this, vn)[0] = L, r(this, vn)[1] = $;
  }
  if ([z, D] = m(z / s, D / i), v) {
    const L = Math.hypot(o, l);
    T = M = Math.max(Math.min(Math.hypot(S[0] - E[0] - z, S[1] - E[1] - D) / L, 1 / o, 1 / l), h / o, c / l);
  } else w ? T = Math.max(h, Math.min(1, Math.abs(S[0] - E[0] - z))) / o : M = Math.max(c, Math.min(1, Math.abs(S[1] - E[1] - D))) / l;
  const et = Q._round(o * T), dt = Q._round(l * M);
  C = p(..._(et, dt));
  const W = k - C[0], pt = x - C[1];
  r(this, Ee) || f(this, Ee, [this.x, this.y, this.width, this.height]), this.width = et, this.height = dt, this.x = W, this.y = pt, this.setDims(s * et, i * dt), this.fixAndSetPosition(), this._onResizing();
}, Cu = function() {
  var t;
  f(this, Vs, {
    savedX: this.x,
    savedY: this.y,
    savedWidth: this.width,
    savedHeight: this.height
  }), (t = r(this, ft)) == null || t.toggle(!1), this.parent.togglePointerEvents(!1);
}, xu = function(t, e, s) {
  let n = 0.7 * (s / e) + 1 - 0.7;
  if (n === 1)
    return;
  const a = y(this, j, Ul).call(this, this.rotation), o = (k, x) => [a[0] * k + a[2] * x, a[1] * k + a[3] * x], [l, h] = this.parentDimensions, c = this.x, u = this.y, p = this.width, g = this.height, m = Q.MIN_SIZE / l, A = Q.MIN_SIZE / h;
  n = Math.max(Math.min(n, 1 / p, 1 / g), m / p, A / g);
  const _ = Q._round(p * n), v = Q._round(g * n);
  if (_ === p && v === g)
    return;
  r(this, Ee) || f(this, Ee, [c, u, p, g]);
  const w = o(p / 2, g / 2), E = Q._round(c + w[0]), S = Q._round(u + w[1]), C = o(_ / 2, v / 2);
  this.x = E - C[0], this.y = S - C[1], this.width = _, this.height = v, this.setDims(l * _, h * v), this.fixAndSetPosition(), this._onResizing();
}, ku = function() {
  var t;
  (t = r(this, ft)) == null || t.toggle(!0), this.parent.togglePointerEvents(!0), y(this, j, jl).call(this);
}, _c = function(t) {
  const {
    isMac: e
  } = he.platform;
  t.ctrlKey && !e || t.shiftKey || t.metaKey && e ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
}, Tu = function(t) {
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
    i.abort(), f(this, Pi, null), f(this, _n, !1), this._uiManager.endDragSession() || y(this, j, _c).call(this, h), s && this._onStopDragging();
  };
  e && (f(this, Hr, t.clientX), f(this, zr, t.clientY), f(this, Pi, t.pointerId), f(this, Co, t.pointerType), window.addEventListener("pointermove", (h) => {
    s || (s = !0, this._onStartDragging());
    const {
      clientX: c,
      clientY: u,
      pointerId: p
    } = h;
    if (p !== r(this, Pi)) {
      Ne(h);
      return;
    }
    const [g, m] = this.screenToPageTranslation(c - r(this, Hr), u - r(this, zr));
    f(this, Hr, c), f(this, zr, u), this._uiManager.dragSelectedEditors(g, m);
  }, a), window.addEventListener("touchmove", Ne, a), window.addEventListener("pointerdown", (h) => {
    h.pointerType === r(this, Co) && (r(this, Sn) || h.isPrimary) && o(h), Ne(h);
  }, a));
  const l = (h) => {
    if (!r(this, Pi) || r(this, Pi) === h.pointerId) {
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
}, wc = function() {
  if (r(this, Mi) || !this.div)
    return;
  f(this, Mi, new AbortController());
  const t = this._uiManager.combinedSignal(r(this, Mi));
  this.div.addEventListener("focusin", this.focusin.bind(this), {
    signal: t
  }), this.div.addEventListener("focusout", this.focusout.bind(this), {
    signal: t
  });
}, Pu = function(t) {
  Q._resizerKeyboardManager.exec(this, t);
}, Mu = function(t) {
  var e;
  r(this, Ws) && ((e = t.relatedTarget) == null ? void 0 : e.parentNode) !== r(this, Ut) && y(this, j, Ha).call(this);
}, Lu = function(t) {
  f(this, xo, r(this, Ws) ? t : "");
}, Sc = function(t) {
  if (r(this, es))
    for (const e of r(this, es))
      e.tabIndex = t;
}, Ha = function() {
  f(this, Ws, !1), y(this, j, Sc).call(this, -1), y(this, j, jl).call(this);
}, b(Q, Po), U(Q, "_l10n", null), U(Q, "_l10nResizer", null), U(Q, "_borderLineWidth", -1), U(Q, "_colorManager", new hc()), U(Q, "_zIndex", 1), U(Q, "_telemetryTimeout", 1e3);
let _t = Q;
class kf extends _t {
  constructor(t) {
    super(t), this.annotationElementId = t.annotationElementId, this.deleted = !0;
  }
  serialize() {
    return this.serializeDeleted();
  }
}
const Bd = 3285377520, He = 4294901760, fs = 65535;
class Ru {
  constructor(t) {
    this.h1 = t ? t & 4294967295 : Bd, this.h2 = t ? t & 4294967295 : Bd;
  }
  update(t) {
    let e, s;
    if (typeof t == "string") {
      e = new Uint8Array(t.length * 2), s = 0;
      for (let A = 0, _ = t.length; A < _; A++) {
        const v = t.charCodeAt(A);
        v <= 255 ? e[s++] = v : (e[s++] = v >>> 8, e[s++] = v & 255);
      }
    } else if (ArrayBuffer.isView(t))
      e = t.slice(), s = e.byteLength;
    else
      throw new Error("Invalid data format, must be a string or TypedArray.");
    const i = s >> 2, n = s - i * 4, a = new Uint32Array(e.buffer, 0, i);
    let o = 0, l = 0, h = this.h1, c = this.h2;
    const u = 3432918353, p = 461845907, g = u & fs, m = p & fs;
    for (let A = 0; A < i; A++)
      A & 1 ? (o = a[A], o = o * u & He | o * g & fs, o = o << 15 | o >>> 17, o = o * p & He | o * m & fs, h ^= o, h = h << 13 | h >>> 19, h = h * 5 + 3864292196) : (l = a[A], l = l * u & He | l * g & fs, l = l << 15 | l >>> 17, l = l * p & He | l * m & fs, c ^= l, c = c << 13 | c >>> 19, c = c * 5 + 3864292196);
    switch (o = 0, n) {
      case 3:
        o ^= e[i * 4 + 2] << 16;
      case 2:
        o ^= e[i * 4 + 1] << 8;
      case 1:
        o ^= e[i * 4], o = o * u & He | o * g & fs, o = o << 15 | o >>> 17, o = o * p & He | o * m & fs, i & 1 ? h ^= o : c ^= o;
    }
    this.h1 = h, this.h2 = c;
  }
  hexdigest() {
    let t = this.h1, e = this.h2;
    return t ^= e >>> 1, t = t * 3981806797 & He | t * 36045 & fs, e = e * 4283543511 & He | ((e << 16 | t >>> 16) * 2950163797 & He) >>> 16, t ^= e >>> 1, t = t * 444984403 & He | t * 60499 & fs, e = e * 3301882366 & He | ((e << 16 | t >>> 16) * 3120437893 & He) >>> 16, t ^= e >>> 1, (t >>> 0).toString(16).padStart(8, "0") + (e >>> 0).toString(16).padStart(8, "0");
  }
}
const Ec = Object.freeze({
  map: null,
  hash: "",
  transfer: void 0
});
var En, Cn, Ot, xh, Iu;
class wd {
  constructor() {
    b(this, xh);
    b(this, En, !1);
    b(this, Cn, null);
    b(this, Ot, /* @__PURE__ */ new Map());
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
        if (e instanceof _t)
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
    i && y(this, xh, Iu).call(this), e instanceof _t && typeof this.onAnnotationEditor == "function" && this.onAnnotationEditor(e.constructor._type);
  }
  has(t) {
    return r(this, Ot).has(t);
  }
  getAll() {
    return r(this, Ot).size > 0 ? md(r(this, Ot)) : null;
  }
  setAll(t) {
    for (const [e, s] of Object.entries(t))
      this.setValue(e, s);
  }
  get size() {
    return r(this, Ot).size;
  }
  resetModified() {
    r(this, En) && (f(this, En, !1), typeof this.onResetModified == "function" && this.onResetModified());
  }
  get print() {
    return new Du(this);
  }
  get serializable() {
    if (r(this, Ot).size === 0)
      return Ec;
    const t = /* @__PURE__ */ new Map(), e = new Ru(), s = [], i = /* @__PURE__ */ Object.create(null);
    let n = !1;
    for (const [a, o] of r(this, Ot)) {
      const l = o instanceof _t ? o.serialize(!1, i) : o;
      l && (t.set(a, l), e.update(`${a}:${JSON.stringify(l)}`), n || (n = !!l.bitmap));
    }
    if (n)
      for (const a of t.values())
        a.bitmap && s.push(a.bitmap);
    return t.size > 0 ? {
      map: t,
      hash: e.hexdigest(),
      transfer: s
    } : Ec;
  }
  get editorStats() {
    let t = null;
    const e = /* @__PURE__ */ new Map();
    for (const s of r(this, Ot).values()) {
      if (!(s instanceof _t))
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
    f(this, Cn, null);
  }
  get modifiedIds() {
    if (r(this, Cn))
      return r(this, Cn);
    const t = [];
    for (const e of r(this, Ot).values())
      !(e instanceof _t) || !e.annotationElementId || !e.serialize() || t.push(e.annotationElementId);
    return f(this, Cn, {
      ids: new Set(t),
      hash: t.join(",")
    });
  }
}
En = new WeakMap(), Cn = new WeakMap(), Ot = new WeakMap(), xh = new WeakSet(), Iu = function() {
  r(this, En) || (f(this, En, !0), typeof this.onSetModified == "function" && this.onSetModified());
};
var Mo;
class Du extends wd {
  constructor(e) {
    super();
    b(this, Mo);
    const {
      map: s,
      hash: i,
      transfer: n
    } = e.serializable, a = structuredClone(s, n ? {
      transfer: n
    } : null);
    f(this, Mo, {
      map: a,
      hash: i,
      transfer: n
    });
  }
  get print() {
    ct("Should not call PrintAnnotationStorage.print");
  }
  get serializable() {
    return r(this, Mo);
  }
  get modifiedIds() {
    return J(this, "modifiedIds", {
      ids: /* @__PURE__ */ new Set(),
      hash: ""
    });
  }
}
Mo = new WeakMap();
var $r;
class Tf {
  constructor({
    ownerDocument: t = globalThis.document,
    styleElement: e = null
  }) {
    b(this, $r, /* @__PURE__ */ new Set());
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
    this.nativeFontFaces.clear(), r(this, $r).clear(), this.styleElement && (this.styleElement.remove(), this.styleElement = null);
  }
  async loadSystemFont({
    systemFontInfo: t,
    _inspectFont: e
  }) {
    if (!(!t || r(this, $r).has(t.loadedName))) {
      if (kt(!this.disableFontFace, "loadSystemFont shouldn't be called when `disableFontFace` is set."), this.isFontLoadingAPISupported) {
        const {
          loadedName: s,
          src: i,
          style: n
        } = t, a = new FontFace(s, i, n);
        this.addNativeFontFace(a);
        try {
          await a.load(), r(this, $r).add(s), e == null || e(t);
        } catch {
          K(`Cannot load system font: ${t.baseFontName}, installing it could help to improve PDF rendering.`), this.removeNativeFontFace(a);
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
          throw K(`Failed to load font '${s.family}': '${i}'.`), t.disableFontFace = !0, i;
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
    return J(this, "isFontLoadingAPISupported", t);
  }
  get isSyncFontLoadingSupported() {
    let t = !1;
    return (se || typeof navigator < "u" && typeof (navigator == null ? void 0 : navigator.userAgent) == "string" && /Mozilla\/5.0.*?rv:\d+.*? Gecko/.test(navigator.userAgent)) && (t = !0), J(this, "isSyncFontLoadingSupported", t);
  }
  _queueLoadingCallback(t) {
    function e() {
      for (kt(!i.done, "completeRequest() cannot be called twice."), i.done = !0; s.length > 0 && s[0].done; ) {
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
    return J(this, "_loadTestFont", t);
  }
  _prepareFontLoadEvent(t, e) {
    function s(S, C) {
      return S.charCodeAt(C) << 24 | S.charCodeAt(C + 1) << 16 | S.charCodeAt(C + 2) << 8 | S.charCodeAt(C + 3) & 255;
    }
    function i(S, C, k, x) {
      const T = S.substring(0, C), M = S.substring(C + k);
      return T + x + M;
    }
    let n, a;
    const o = this._document.createElement("canvas");
    o.width = 1, o.height = 1;
    const l = o.getContext("2d");
    let h = 0;
    function c(S, C) {
      if (++h > 30) {
        K("Load test font never loaded."), C();
        return;
      }
      if (l.font = "30px " + S, l.fillText(".", 0, 20), l.getImageData(0, 0, 1, 1).data[3] > 0) {
        C();
        return;
      }
      setTimeout(c.bind(null, S, C));
    }
    const u = `lt${Date.now()}${this.loadTestFontId++}`;
    let p = this._loadTestFont;
    p = i(p, 976, u.length, u);
    const m = 16, A = 1482184792;
    let _ = s(p, m);
    for (n = 0, a = u.length - 3; n < a; n += 4)
      _ = _ - A + s(u, n) | 0;
    n < u.length && (_ = _ - A + s(u + "XXX", n) | 0), p = i(p, m, 4, pf(_));
    const v = `url(data:font/opentype;base64,${btoa(p)});`, w = `@font-face {font-family:"${u}";src:${v}}`;
    this.insertRule(w);
    const E = this._document.createElement("div");
    E.style.visibility = "hidden", E.style.width = E.style.height = "10px", E.style.position = "absolute", E.style.top = E.style.left = "0px";
    for (const S of [t.loadedName, u]) {
      const C = this._document.createElement("span");
      C.textContent = "Hi", C.style.fontFamily = S, E.append(C);
    }
    this._document.body.append(E), c(u, () => {
      E.remove(), e.complete();
    });
  }
}
$r = new WeakMap();
class Pf {
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
    const t = `url(data:${this.mimetype};base64,${Af(this.data)});`;
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
      K(`getPathGenerator - ignoring character: "${a}".`);
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
function Hd() {
}
function fe(d) {
  if (d instanceof Ki || d instanceof ic || d instanceof to || d instanceof Fd || d instanceof uh || d instanceof Yh)
    return d;
  switch (d instanceof Error || typeof d == "object" && d !== null || ct('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), d.name) {
    case "AbortException":
      return new Ki(d.message);
    case "InvalidPDFException":
      return new ic(d.message);
    case "MissingPDFException":
      return new to(d.message);
    case "PasswordException":
      return new Fd(d.message, d.code);
    case "UnexpectedResponseException":
      return new uh(d.message, d.status);
    case "UnknownErrorException":
      return new Yh(d.message, d.details);
  }
  return new Yh(d.message, d.toString());
}
var Gr, Ye, Fu, Nu, Ou, Vl;
class za {
  constructor(t, e, s) {
    b(this, Ye);
    b(this, Gr, new AbortController());
    this.sourceName = t, this.targetName = e, this.comObj = s, this.callbackId = 1, this.streamId = 1, this.streamSinks = /* @__PURE__ */ Object.create(null), this.streamControllers = /* @__PURE__ */ Object.create(null), this.callbackCapabilities = /* @__PURE__ */ Object.create(null), this.actionHandler = /* @__PURE__ */ Object.create(null), s.addEventListener("message", y(this, Ye, Fu).bind(this), {
      signal: r(this, Gr).signal
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
        kt(h instanceof Error, "cancel must have a valid reason");
        const c = Promise.withResolvers();
        return this.streamControllers[n].cancelCall = c, this.streamControllers[n].isClosed = !0, l.postMessage({
          sourceName: a,
          targetName: o,
          stream: xt.CANCEL,
          streamId: n,
          reason: fe(h)
        }), c.promise;
      }
    }, s);
  }
  destroy() {
    var t;
    (t = r(this, Gr)) == null || t.abort(), f(this, Gr, null);
  }
}
Gr = new WeakMap(), Ye = new WeakSet(), Fu = function({
  data: t
}) {
  if (t.targetName !== this.sourceName)
    return;
  if (t.stream) {
    y(this, Ye, Ou).call(this, t);
    return;
  }
  if (t.callback) {
    const s = t.callbackId, i = this.callbackCapabilities[s];
    if (!i)
      throw new Error(`Cannot resolve callback ${s}`);
    if (delete this.callbackCapabilities[s], t.callback === Rl.DATA)
      i.resolve(t.data);
    else if (t.callback === Rl.ERROR)
      i.reject(fe(t.reason));
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
        reason: fe(a)
      });
    });
    return;
  }
  if (t.streamId) {
    y(this, Ye, Nu).call(this, t);
    return;
  }
  e(t.data);
}, Nu = function(t) {
  const e = t.streamId, s = this.sourceName, i = t.sourceName, n = this.comObj, a = this, o = this.actionHandler[t.action], l = {
    enqueue(h, c = 1, u) {
      if (this.isCancelled)
        return;
      const p = this.desiredSize;
      this.desiredSize -= c, p > 0 && this.desiredSize <= 0 && (this.sinkCapability = Promise.withResolvers(), this.ready = this.sinkCapability.promise), n.postMessage({
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
      kt(h instanceof Error, "error must have a valid reason"), !this.isCancelled && (this.isCancelled = !0, n.postMessage({
        sourceName: s,
        targetName: i,
        stream: xt.ERROR,
        streamId: e,
        reason: fe(h)
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
      reason: fe(h)
    });
  });
}, Ou = function(t) {
  const e = t.streamId, s = this.sourceName, i = t.sourceName, n = this.comObj, a = this.streamControllers[e], o = this.streamSinks[e];
  switch (t.stream) {
    case xt.START_COMPLETE:
      t.success ? a.startCall.resolve() : a.startCall.reject(fe(t.reason));
      break;
    case xt.PULL_COMPLETE:
      t.success ? a.pullCall.resolve() : a.pullCall.reject(fe(t.reason));
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
      o.desiredSize <= 0 && t.desiredSize > 0 && o.sinkCapability.resolve(), o.desiredSize = t.desiredSize, Promise.try(o.onPull || Hd).then(function() {
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
          reason: fe(h)
        });
      });
      break;
    case xt.ENQUEUE:
      if (kt(a, "enqueue should have stream controller"), a.isClosed)
        break;
      a.controller.enqueue(t.chunk);
      break;
    case xt.CLOSE:
      if (kt(a, "close should have stream controller"), a.isClosed)
        break;
      a.isClosed = !0, a.controller.close(), y(this, Ye, Vl).call(this, a, e);
      break;
    case xt.ERROR:
      kt(a, "error should have stream controller"), a.controller.error(fe(t.reason)), y(this, Ye, Vl).call(this, a, e);
      break;
    case xt.CANCEL_COMPLETE:
      t.success ? a.cancelCall.resolve() : a.cancelCall.reject(fe(t.reason)), y(this, Ye, Vl).call(this, a, e);
      break;
    case xt.CANCEL:
      if (!o)
        break;
      const l = fe(t.reason);
      Promise.try(o.onCancel || Hd, l).then(function() {
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
          reason: fe(h)
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
var Lo;
class Bu {
  constructor({
    enableHWA: t = !1
  }) {
    b(this, Lo, !1);
    f(this, Lo, t);
  }
  create(t, e) {
    if (t <= 0 || e <= 0)
      throw new Error("Invalid canvas size");
    const s = this._createCanvas(t, e);
    return {
      canvas: s,
      context: s.getContext("2d", {
        willReadFrequently: !r(this, Lo)
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
Lo = new WeakMap();
class Mf extends Bu {
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
class Hu {
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
class zu extends Hu {
  async _fetch(t) {
    const e = await Uh(t, this.isCompressed ? "arraybuffer" : "text");
    return e instanceof ArrayBuffer ? new Uint8Array(e) : Gh(e);
  }
}
class $u {
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
var xn, Ur, Xs, qs, Zt, kn, Tn, I, Yt, $a, mr, Wl, br, Gu, Cc, yr, Ga, Ua, xc, ja;
class Lf extends $u {
  constructor({
    docId: e,
    ownerDocument: s = globalThis.document
  }) {
    super();
    b(this, I);
    b(this, xn);
    b(this, Ur);
    b(this, Xs);
    b(this, qs);
    b(this, Zt);
    b(this, kn);
    b(this, Tn, 0);
    f(this, qs, e), f(this, Zt, s);
  }
  addFilter(e) {
    if (!e)
      return "none";
    let s = r(this, I, Yt).get(e);
    if (s)
      return s;
    const [i, n, a] = y(this, I, Wl).call(this, e), o = e.length === 1 ? i : `${i}${n}${a}`;
    if (s = r(this, I, Yt).get(o), s)
      return r(this, I, Yt).set(e, s), s;
    const l = `g_${r(this, qs)}_transfer_map_${ie(this, Tn)._++}`, h = y(this, I, br).call(this, l);
    r(this, I, Yt).set(e, h), r(this, I, Yt).set(o, h);
    const c = y(this, I, yr).call(this, l);
    return y(this, I, Ua).call(this, i, n, a, c), h;
  }
  addHCMFilter(e, s) {
    var m;
    const i = `${e}-${s}`, n = "base";
    let a = r(this, I, $a).get(n);
    if ((a == null ? void 0 : a.key) === i || (a ? ((m = a.filter) == null || m.remove(), a.key = i, a.url = "none", a.filter = null) : (a = {
      key: i,
      url: "none",
      filter: null
    }, r(this, I, $a).set(n, a)), !e || !s))
      return a.url;
    const o = y(this, I, ja).call(this, e);
    e = H.makeHexColor(...o);
    const l = y(this, I, ja).call(this, s);
    if (s = H.makeHexColor(...l), r(this, I, mr).style.color = "", e === "#000000" && s === "#ffffff" || e === s)
      return a.url;
    const h = new Array(256);
    for (let A = 0; A <= 255; A++) {
      const _ = A / 255;
      h[A] = _ <= 0.03928 ? _ / 12.92 : ((_ + 0.055) / 1.055) ** 2.4;
    }
    const c = h.join(","), u = `g_${r(this, qs)}_hcm_filter`, p = a.filter = y(this, I, yr).call(this, u);
    y(this, I, Ua).call(this, c, c, c, p), y(this, I, Cc).call(this, p);
    const g = (A, _) => {
      const v = o[A] / 255, w = l[A] / 255, E = new Array(_ + 1);
      for (let S = 0; S <= _; S++)
        E[S] = v + S / _ * (w - v);
      return E.join(",");
    };
    return y(this, I, Ua).call(this, g(0, 5), g(1, 5), g(2, 5), p), a.url = y(this, I, br).call(this, u), a.url;
  }
  addAlphaFilter(e) {
    let s = r(this, I, Yt).get(e);
    if (s)
      return s;
    const [i] = y(this, I, Wl).call(this, [e]), n = `alpha_${i}`;
    if (s = r(this, I, Yt).get(n), s)
      return r(this, I, Yt).set(e, s), s;
    const a = `g_${r(this, qs)}_alpha_map_${ie(this, Tn)._++}`, o = y(this, I, br).call(this, a);
    r(this, I, Yt).set(e, o), r(this, I, Yt).set(n, o);
    const l = y(this, I, yr).call(this, a);
    return y(this, I, xc).call(this, i, l), o;
  }
  addLuminosityFilter(e) {
    let s = r(this, I, Yt).get(e || "luminosity");
    if (s)
      return s;
    let i, n;
    if (e ? ([i] = y(this, I, Wl).call(this, [e]), n = `luminosity_${i}`) : n = "luminosity", s = r(this, I, Yt).get(n), s)
      return r(this, I, Yt).set(e, s), s;
    const a = `g_${r(this, qs)}_luminosity_map_${ie(this, Tn)._++}`, o = y(this, I, br).call(this, a);
    r(this, I, Yt).set(e, o), r(this, I, Yt).set(n, o);
    const l = y(this, I, yr).call(this, a);
    return y(this, I, Gu).call(this, l), e && y(this, I, xc).call(this, i, l), o;
  }
  addHighlightHCMFilter(e, s, i, n, a) {
    var w;
    const o = `${s}-${i}-${n}-${a}`;
    let l = r(this, I, $a).get(e);
    if ((l == null ? void 0 : l.key) === o || (l ? ((w = l.filter) == null || w.remove(), l.key = o, l.url = "none", l.filter = null) : (l = {
      key: o,
      url: "none",
      filter: null
    }, r(this, I, $a).set(e, l)), !s || !i))
      return l.url;
    const [h, c] = [s, i].map(y(this, I, ja).bind(this));
    let u = Math.round(0.2126 * h[0] + 0.7152 * h[1] + 0.0722 * h[2]), p = Math.round(0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]), [g, m] = [n, a].map(y(this, I, ja).bind(this));
    p < u && ([u, p, g, m] = [p, u, m, g]), r(this, I, mr).style.color = "";
    const A = (E, S, C) => {
      const k = new Array(256), x = (p - u) / C, T = E / 255, M = (S - E) / (255 * C);
      let z = 0;
      for (let D = 0; D <= C; D++) {
        const et = Math.round(u + D * x), dt = T + D * M;
        for (let W = z; W <= et; W++)
          k[W] = dt;
        z = et + 1;
      }
      for (let D = z; D < 256; D++)
        k[D] = k[z - 1];
      return k.join(",");
    }, _ = `g_${r(this, qs)}_hcm_${e}_filter`, v = l.filter = y(this, I, yr).call(this, _);
    return y(this, I, Cc).call(this, v), y(this, I, Ua).call(this, A(g[0], m[0], 5), A(g[1], m[1], 5), A(g[2], m[2], 5), v), l.url = y(this, I, br).call(this, _), l.url;
  }
  destroy(e = !1) {
    var s, i, n, a;
    e && ((s = r(this, kn)) != null && s.size) || ((i = r(this, Xs)) == null || i.parentNode.parentNode.remove(), f(this, Xs, null), (n = r(this, Ur)) == null || n.clear(), f(this, Ur, null), (a = r(this, kn)) == null || a.clear(), f(this, kn, null), f(this, Tn, 0));
  }
}
xn = new WeakMap(), Ur = new WeakMap(), Xs = new WeakMap(), qs = new WeakMap(), Zt = new WeakMap(), kn = new WeakMap(), Tn = new WeakMap(), I = new WeakSet(), Yt = function() {
  return r(this, Ur) || f(this, Ur, /* @__PURE__ */ new Map());
}, $a = function() {
  return r(this, kn) || f(this, kn, /* @__PURE__ */ new Map());
}, mr = function() {
  if (!r(this, Xs)) {
    const e = r(this, Zt).createElement("div"), {
      style: s
    } = e;
    s.visibility = "hidden", s.contain = "strict", s.width = s.height = 0, s.position = "absolute", s.top = s.left = 0, s.zIndex = -1;
    const i = r(this, Zt).createElementNS(Fs, "svg");
    i.setAttribute("width", 0), i.setAttribute("height", 0), f(this, Xs, r(this, Zt).createElementNS(Fs, "defs")), e.append(i), i.append(r(this, Xs)), r(this, Zt).body.append(e);
  }
  return r(this, Xs);
}, Wl = function(e) {
  if (e.length === 1) {
    const h = e[0], c = new Array(256);
    for (let p = 0; p < 256; p++)
      c[p] = h[p] / 255;
    const u = c.join(",");
    return [u, u, u];
  }
  const [s, i, n] = e, a = new Array(256), o = new Array(256), l = new Array(256);
  for (let h = 0; h < 256; h++)
    a[h] = s[h] / 255, o[h] = i[h] / 255, l[h] = n[h] / 255;
  return [a.join(","), o.join(","), l.join(",")];
}, br = function(e) {
  if (r(this, xn) === void 0) {
    f(this, xn, "");
    const s = r(this, Zt).URL;
    s !== r(this, Zt).baseURI && (jh(s) ? K('#createUrl: ignore "data:"-URL for performance reasons.') : f(this, xn, s.split("#", 1)[0]));
  }
  return `url(${r(this, xn)}#${e})`;
}, Gu = function(e) {
  const s = r(this, Zt).createElementNS(Fs, "feColorMatrix");
  s.setAttribute("type", "matrix"), s.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0"), e.append(s);
}, Cc = function(e) {
  const s = r(this, Zt).createElementNS(Fs, "feColorMatrix");
  s.setAttribute("type", "matrix"), s.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"), e.append(s);
}, yr = function(e) {
  const s = r(this, Zt).createElementNS(Fs, "filter");
  return s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("id", e), r(this, I, mr).append(s), s;
}, Ga = function(e, s, i) {
  const n = r(this, Zt).createElementNS(Fs, s);
  n.setAttribute("type", "discrete"), n.setAttribute("tableValues", i), e.append(n);
}, Ua = function(e, s, i, n) {
  const a = r(this, Zt).createElementNS(Fs, "feComponentTransfer");
  n.append(a), y(this, I, Ga).call(this, a, "feFuncR", e), y(this, I, Ga).call(this, a, "feFuncG", s), y(this, I, Ga).call(this, a, "feFuncB", i);
}, xc = function(e, s) {
  const i = r(this, Zt).createElementNS(Fs, "feComponentTransfer");
  s.append(i), y(this, I, Ga).call(this, i, "feFuncA", e);
}, ja = function(e) {
  return r(this, I, mr).style.color = e, _d(getComputedStyle(r(this, I, mr)).getPropertyValue("color"));
};
class Uu {
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
class ju extends Uu {
  async _fetch(t) {
    const e = await Uh(t, "arraybuffer");
    return new Uint8Array(e);
  }
}
se && K("Please use the `legacy` build in Node.js environments.");
async function Vu(d) {
  const e = await process.getBuiltinModule("fs").promises.readFile(d);
  return new Uint8Array(e);
}
class Rf extends $u {
}
class If extends Bu {
  _createCanvas(t, e) {
    return process.getBuiltinModule("module").createRequire(import.meta.url)("@napi-rs/canvas").createCanvas(t, e);
  }
}
class Df extends Hu {
  async _fetch(t) {
    return Vu(t);
  }
}
class Ff extends Uu {
  async _fetch(t) {
    return Vu(t);
  }
}
const ee = {
  FILL: "Fill",
  STROKE: "Stroke",
  SHADING: "Shading"
};
function kc(d, t) {
  if (!t)
    return;
  const e = t[2] - t[0], s = t[3] - t[1], i = new Path2D();
  i.rect(t[0], t[1], e, s), d.clip(i);
}
class Sd {
  getPattern() {
    ct("Abstract method `getPattern` called.");
  }
}
class Nf extends Sd {
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
    if (i === ee.STROKE || i === ee.FILL) {
      const a = e.current.getClippedPathBoundingBox(i, bt(t)) || [0, 0, 0, 0], o = Math.ceil(a[2] - a[0]) || 1, l = Math.ceil(a[3] - a[1]) || 1, h = e.cachedCanvases.getCanvas("pattern", o, l), c = h.context;
      c.clearRect(0, 0, c.canvas.width, c.canvas.height), c.beginPath(), c.rect(0, 0, c.canvas.width, c.canvas.height), c.translate(-a[0], -a[1]), s = H.transform(s, [1, 0, 0, 1, a[0], a[1]]), c.transform(...e.baseTransform), this.matrix && c.transform(...this.matrix), kc(c, this._bbox), c.fillStyle = this._createGradient(c), c.fill(), n = t.createPattern(h.canvas, "no-repeat");
      const u = new DOMMatrix(s);
      n.setTransform(u);
    } else
      kc(t, this._bbox), n = this._createGradient(t);
    return n;
  }
}
function Zh(d, t, e, s, i, n, a, o) {
  const l = t.coords, h = t.colors, c = d.data, u = d.width * 4;
  let p;
  l[e + 1] > l[s + 1] && (p = e, e = s, s = p, p = n, n = a, a = p), l[s + 1] > l[i + 1] && (p = s, s = i, i = p, p = a, a = o, o = p), l[e + 1] > l[s + 1] && (p = e, e = s, s = p, p = n, n = a, a = p);
  const g = (l[e] + t.offsetX) * t.scaleX, m = (l[e + 1] + t.offsetY) * t.scaleY, A = (l[s] + t.offsetX) * t.scaleX, _ = (l[s + 1] + t.offsetY) * t.scaleY, v = (l[i] + t.offsetX) * t.scaleX, w = (l[i + 1] + t.offsetY) * t.scaleY;
  if (m >= w)
    return;
  const E = h[n], S = h[n + 1], C = h[n + 2], k = h[a], x = h[a + 1], T = h[a + 2], M = h[o], z = h[o + 1], D = h[o + 2], et = Math.round(m), dt = Math.round(w);
  let W, pt, L, $, Pt, ve, Be, G;
  for (let R = et; R <= dt; R++) {
    if (R < _) {
      const tt = R < m ? 0 : (m - R) / (m - _);
      W = g - (g - A) * tt, pt = E - (E - k) * tt, L = S - (S - x) * tt, $ = C - (C - T) * tt;
    } else {
      let tt;
      R > w ? tt = 1 : _ === w ? tt = 0 : tt = (_ - R) / (_ - w), W = A - (A - v) * tt, pt = k - (k - M) * tt, L = x - (x - z) * tt, $ = T - (T - D) * tt;
    }
    let X;
    R < m ? X = 0 : R > w ? X = 1 : X = (m - R) / (m - w), Pt = g - (g - v) * X, ve = E - (E - M) * X, Be = S - (S - z) * X, G = C - (C - D) * X;
    const ue = Math.round(Math.min(W, Pt)), mi = Math.round(Math.max(W, Pt));
    let $t = u * R + ue * 4;
    for (let tt = ue; tt <= mi; tt++)
      X = (W - tt) / (W - Pt), X < 0 ? X = 0 : X > 1 && (X = 1), c[$t++] = pt - (pt - ve) * X | 0, c[$t++] = L - (L - Be) * X | 0, c[$t++] = $ - ($ - G) * X | 0, c[$t++] = 255;
  }
}
function Of(d, t, e) {
  const s = t.coords, i = t.colors;
  let n, a;
  switch (t.type) {
    case "lattice":
      const o = t.verticesPerRow, l = Math.floor(s.length / o) - 1, h = o - 1;
      for (n = 0; n < l; n++) {
        let c = n * o;
        for (let u = 0; u < h; u++, c++)
          Zh(d, e, s[c], s[c + 1], s[c + o], i[c], i[c + 1], i[c + o]), Zh(d, e, s[c + o + 1], s[c + 1], s[c + o], i[c + o + 1], i[c + 1], i[c + o]);
      }
      break;
    case "triangles":
      for (n = 0, a = s.length; n < a; n += 3)
        Zh(d, e, s[n], s[n + 1], s[n + 2], i[n], i[n + 1], i[n + 2]);
      break;
    default:
      throw new Error("illegal figure");
  }
}
class Bf extends Sd {
  constructor(t) {
    super(), this._coords = t[2], this._colors = t[3], this._figures = t[4], this._bounds = t[5], this._bbox = t[7], this._background = t[8], this.matrix = null;
  }
  _createMeshCanvas(t, e, s) {
    const o = Math.floor(this._bounds[0]), l = Math.floor(this._bounds[1]), h = Math.ceil(this._bounds[2]) - o, c = Math.ceil(this._bounds[3]) - l, u = Math.min(Math.ceil(Math.abs(h * t[0] * 1.1)), 3e3), p = Math.min(Math.ceil(Math.abs(c * t[1] * 1.1)), 3e3), g = h / u, m = c / p, A = {
      coords: this._coords,
      colors: this._colors,
      offsetX: -o,
      offsetY: -l,
      scaleX: 1 / g,
      scaleY: 1 / m
    }, _ = u + 2 * 2, v = p + 2 * 2, w = s.getCanvas("mesh", _, v), E = w.context, S = E.createImageData(u, p);
    if (e) {
      const k = S.data;
      for (let x = 0, T = k.length; x < T; x += 4)
        k[x] = e[0], k[x + 1] = e[1], k[x + 2] = e[2], k[x + 3] = 255;
    }
    for (const k of this._figures)
      Of(S, k, A);
    return E.putImageData(S, 2, 2), {
      canvas: w.canvas,
      offsetX: o - 2 * g,
      offsetY: l - 2 * m,
      scaleX: g,
      scaleY: m
    };
  }
  getPattern(t, e, s, i) {
    kc(t, this._bbox);
    let n;
    if (i === ee.SHADING)
      n = H.singularValueDecompose2dScale(bt(t));
    else if (n = H.singularValueDecompose2dScale(e.baseTransform), this.matrix) {
      const o = H.singularValueDecompose2dScale(this.matrix);
      n = [n[0] * o[0], n[1] * o[1]];
    }
    const a = this._createMeshCanvas(n, i === ee.SHADING ? null : this._background, e.cachedCanvases);
    return i !== ee.SHADING && (t.setTransform(...e.baseTransform), this.matrix && t.transform(...this.matrix)), t.translate(a.offsetX, a.offsetY), t.scale(a.scaleX, a.scaleY), t.createPattern(a.canvas, "no-repeat");
  }
}
class Hf extends Sd {
  getPattern() {
    return "hotpink";
  }
}
function zf(d) {
  switch (d[0]) {
    case "RadialAxial":
      return new Nf(d);
    case "Mesh":
      return new Bf(d);
    case "Dummy":
      return new Hf();
  }
  throw new Error(`Unknown IR type: ${d[0]}`);
}
const zd = {
  COLORED: 1,
  UNCOLORED: 2
}, kh = class kh {
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
    l = Math.abs(l), h = Math.abs(h), $h("TilingType: " + n);
    const c = e[0], u = e[1], p = e[2], g = e[3], m = p - c, A = g - u, _ = H.singularValueDecompose2dScale(this.matrix), v = H.singularValueDecompose2dScale(this.baseTransform), w = _[0] * v[0], E = _[1] * v[1];
    let S = m, C = A, k = !1, x = !1;
    const T = Math.ceil(l * w), M = Math.ceil(h * E), z = Math.ceil(m * w), D = Math.ceil(A * E);
    T >= z ? S = l : k = !0, M >= D ? C = h : x = !0;
    const et = this.getSizeAndScale(S, this.ctx.canvas.width, w), dt = this.getSizeAndScale(C, this.ctx.canvas.height, E), W = t.cachedCanvases.getCanvas("pattern", et.size, dt.size), pt = W.context, L = o.createCanvasGraphics(pt);
    if (L.groupLevel = t.groupLevel, this.setFillAndStrokeStyleToContext(L, i, a), pt.translate(-et.scale * c, -dt.scale * u), L.transform(et.scale, 0, 0, dt.scale, 0, 0), pt.save(), this.clipBbox(L, c, u, p, g), L.baseTransform = bt(L.ctx), L.executeOperatorList(s), L.endDrawing(), pt.restore(), k || x) {
      const $ = W.canvas;
      k && (S = l), x && (C = h);
      const Pt = this.getSizeAndScale(S, this.ctx.canvas.width, w), ve = this.getSizeAndScale(C, this.ctx.canvas.height, E), Be = Pt.size, G = ve.size, R = t.cachedCanvases.getCanvas("pattern-workaround", Be, G), X = R.context, ue = k ? Math.floor(m / l) : 0, mi = x ? Math.floor(A / h) : 0;
      for (let $t = 0; $t <= ue; $t++)
        for (let tt = 0; tt <= mi; tt++)
          X.drawImage($, Be * $t, G * tt, Be, G, 0, 0, Be, G);
      return {
        canvas: R.canvas,
        scaleX: Pt.scale,
        scaleY: ve.scale,
        offsetX: c,
        offsetY: u
      };
    }
    return {
      canvas: W.canvas,
      scaleX: et.scale,
      scaleY: dt.scale,
      offsetX: c,
      offsetY: u
    };
  }
  getSizeAndScale(t, e, s) {
    const i = Math.max(kh.MAX_PATTERN_SIZE, e);
    let n = Math.ceil(t * s);
    return n >= i ? n = i : s = n / t, {
      scale: s,
      size: n
    };
  }
  clipBbox(t, e, s, i, n) {
    const a = i - e, o = n - s;
    t.ctx.rect(e, s, a, o), t.current.updateRectMinMax(bt(t.ctx), [e, s, i, n]), t.clip(), t.endPath();
  }
  setFillAndStrokeStyleToContext(t, e, s) {
    const i = t.ctx, n = t.current;
    switch (e) {
      case zd.COLORED:
        const a = this.ctx;
        i.fillStyle = a.fillStyle, i.strokeStyle = a.strokeStyle, n.fillColor = a.fillStyle, n.strokeColor = a.strokeStyle;
        break;
      case zd.UNCOLORED:
        const o = H.makeHexColor(s[0], s[1], s[2]);
        i.fillStyle = o, i.strokeStyle = o, n.fillColor = o, n.strokeColor = o;
        break;
      default:
        throw new uf(`Unsupported paint type: ${e}`);
    }
  }
  getPattern(t, e, s, i) {
    let n = s;
    i !== ee.SHADING && (n = H.transform(n, e.baseTransform), this.matrix && (n = H.transform(n, this.matrix)));
    const a = this.createPatternCanvas(e);
    let o = new DOMMatrix(n);
    o = o.translate(a.offsetX, a.offsetY), o = o.scale(1 / a.scaleX, 1 / a.scaleY);
    const l = t.createPattern(a.canvas, "repeat");
    return l.setTransform(o), l;
  }
};
U(kh, "MAX_PATTERN_SIZE", 3e3);
let Tc = kh;
function $f({
  src: d,
  srcPos: t = 0,
  dest: e,
  width: s,
  height: i,
  nonBlackColor: n = 4294967295,
  inverseDecode: a = !1
}) {
  const o = he.isLittleEndian ? 4278190080 : 255, [l, h] = a ? [n, o] : [o, n], c = s >> 3, u = s & 7, p = d.length;
  e = new Uint32Array(e.buffer);
  let g = 0;
  for (let m = 0; m < i; m++) {
    for (const _ = t + c; t < _; t++) {
      const v = t < p ? d[t] : 255;
      e[g++] = v & 128 ? h : l, e[g++] = v & 64 ? h : l, e[g++] = v & 32 ? h : l, e[g++] = v & 16 ? h : l, e[g++] = v & 8 ? h : l, e[g++] = v & 4 ? h : l, e[g++] = v & 2 ? h : l, e[g++] = v & 1 ? h : l;
    }
    if (u === 0)
      continue;
    const A = t < p ? d[t++] : 255;
    for (let _ = 0; _ < u; _++)
      e[g++] = A & 1 << 7 - _ ? h : l;
  }
  return {
    srcPos: t,
    destPos: g
  };
}
const $d = 16, Gd = 100, Gf = 15, Ud = 10, jd = 1e3, Ae = 16;
function Uf(d, t) {
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
class jf {
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
function Il(d, t, e, s, i, n, a, o, l, h) {
  const [c, u, p, g, m, A] = bt(d);
  if (u === 0 && p === 0) {
    const w = a * c + m, E = Math.round(w), S = o * g + A, C = Math.round(S), k = (a + l) * c + m, x = Math.abs(Math.round(k) - E) || 1, T = (o + h) * g + A, M = Math.abs(Math.round(T) - C) || 1;
    return d.setTransform(Math.sign(c), 0, 0, Math.sign(g), E, C), d.drawImage(t, e, s, i, n, 0, 0, x, M), d.setTransform(c, u, p, g, m, A), [x, M];
  }
  if (c === 0 && g === 0) {
    const w = o * p + m, E = Math.round(w), S = a * u + A, C = Math.round(S), k = (o + h) * p + m, x = Math.abs(Math.round(k) - E) || 1, T = (a + l) * u + A, M = Math.abs(Math.round(T) - C) || 1;
    return d.setTransform(0, Math.sign(u), Math.sign(p), 0, E, C), d.drawImage(t, e, s, i, n, 0, 0, M, x), d.setTransform(c, u, p, g, m, A), [M, x];
  }
  d.drawImage(t, e, s, i, n, a, o, l, h);
  const _ = Math.hypot(c, u), v = Math.hypot(p, g);
  return [_ * l, v * h];
}
function Vf(d) {
  const {
    width: t,
    height: e
  } = d;
  if (t > jd || e > jd)
    return null;
  const s = 1e3, i = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]), n = t + 1;
  let a = new Uint8Array(n * (e + 1)), o, l, h;
  const c = t + 7 & -8;
  let u = new Uint8Array(c * e), p = 0;
  for (const v of d.data) {
    let w = 128;
    for (; w > 0; )
      u[p++] = v & w ? 0 : 255, w >>= 1;
  }
  let g = 0;
  for (p = 0, u[p] !== 0 && (a[0] = 1, ++g), l = 1; l < t; l++)
    u[p] !== u[p + 1] && (a[l] = u[p] ? 2 : 1, ++g), p++;
  for (u[p] !== 0 && (a[l] = 2, ++g), o = 1; o < e; o++) {
    p = o * c, h = o * n, u[p - c] !== u[p] && (a[h] = u[p] ? 1 : 8, ++g);
    let v = (u[p] ? 4 : 0) + (u[p - c] ? 8 : 0);
    for (l = 1; l < t; l++)
      v = (v >> 2) + (u[p + 1] ? 4 : 0) + (u[p - c + 1] ? 8 : 0), i[v] && (a[h + l] = i[v], ++g), p++;
    if (u[p - c] !== u[p] && (a[h + l] = u[p] ? 2 : 4, ++g), g > s)
      return null;
  }
  for (p = c * (e - 1), h = o * n, u[p] !== 0 && (a[h] = 8, ++g), l = 1; l < t; l++)
    u[p] !== u[p + 1] && (a[h + l] = u[p] ? 4 : 8, ++g), p++;
  if (u[p] !== 0 && (a[h + l] = 4, ++g), g > s)
    return null;
  const m = new Int32Array([0, n, -1, 0, -n, 0, 0, 0, 1]), A = new Path2D();
  for (o = 0; g && o <= e; o++) {
    let v = o * n;
    const w = v + t;
    for (; v < w && !a[v]; )
      v++;
    if (v === w)
      continue;
    A.moveTo(v % n, o);
    const E = v;
    let S = a[v];
    do {
      const C = m[S];
      do
        v += C;
      while (!a[v]);
      const k = a[v];
      k !== 5 && k !== 10 ? (S = k, a[v] = 0) : (S = k & 51 * S >> 4, a[v] &= S >> 2 | S << 2), A.lineTo(v % n, v / n | 0), a[v] || --g;
    } while (E !== v);
    --o;
  }
  return u = null, a = null, function(v) {
    v.save(), v.scale(1 / t, -1 / e), v.translate(0, -e), v.fill(A), v.beginPath(), v.restore();
  };
}
class Vd {
  constructor(t, e) {
    this.alphaIsShape = !1, this.fontSize = 0, this.fontSizeScale = 1, this.textMatrix = eu, this.textMatrixScale = 1, this.fontMatrix = sc, this.leading = 0, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRenderingMode = qt.FILL, this.textRise = 0, this.fillColor = "#000000", this.strokeColor = "#000000", this.patternFill = !1, this.patternStroke = !1, this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.activeSMask = null, this.transferMaps = "none", this.startNewPathAndClipBox([0, 0, t, e]);
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
  getPathBoundingBox(t = ee.FILL, e = null) {
    const s = [this.minX, this.minY, this.maxX, this.maxY];
    if (t === ee.STROKE) {
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
  getClippedPathBoundingBox(t = ee.FILL, e = null) {
    return H.intersect(this.clipBox, this.getPathBoundingBox(t, e));
  }
}
function Wd(d, t) {
  if (t instanceof ImageData) {
    d.putImageData(t, 0, 0);
    return;
  }
  const e = t.height, s = t.width, i = e % Ae, n = (e - i) / Ae, a = i === 0 ? n : n + 1, o = d.createImageData(s, Ae);
  let l = 0, h;
  const c = t.data, u = o.data;
  let p, g, m, A;
  if (t.kind === Nl.GRAYSCALE_1BPP) {
    const _ = c.byteLength, v = new Uint32Array(u.buffer, 0, u.byteLength >> 2), w = v.length, E = s + 7 >> 3, S = 4294967295, C = he.isLittleEndian ? 4278190080 : 255;
    for (p = 0; p < a; p++) {
      for (m = p < n ? Ae : i, h = 0, g = 0; g < m; g++) {
        const k = _ - l;
        let x = 0;
        const T = k > E ? s : k * 8 - 7, M = T & -8;
        let z = 0, D = 0;
        for (; x < M; x += 8)
          D = c[l++], v[h++] = D & 128 ? S : C, v[h++] = D & 64 ? S : C, v[h++] = D & 32 ? S : C, v[h++] = D & 16 ? S : C, v[h++] = D & 8 ? S : C, v[h++] = D & 4 ? S : C, v[h++] = D & 2 ? S : C, v[h++] = D & 1 ? S : C;
        for (; x < T; x++)
          z === 0 && (D = c[l++], z = 128), v[h++] = D & z ? S : C, z >>= 1;
      }
      for (; h < w; )
        v[h++] = 0;
      d.putImageData(o, 0, p * Ae);
    }
  } else if (t.kind === Nl.RGBA_32BPP) {
    for (g = 0, A = s * Ae * 4, p = 0; p < n; p++)
      u.set(c.subarray(l, l + A)), l += A, d.putImageData(o, 0, g), g += Ae;
    p < a && (A = s * i * 4, u.set(c.subarray(l, l + A)), d.putImageData(o, 0, g));
  } else if (t.kind === Nl.RGB_24BPP)
    for (m = Ae, A = s * m, p = 0; p < a; p++) {
      for (p >= n && (m = i, A = s * m), h = 0, g = A; g--; )
        u[h++] = c[l++], u[h++] = c[l++], u[h++] = c[l++], u[h++] = 255;
      d.putImageData(o, 0, p * Ae);
    }
  else
    throw new Error(`bad image kind: ${t.kind}`);
}
function Xd(d, t) {
  if (t.bitmap) {
    d.drawImage(t.bitmap, 0, 0);
    return;
  }
  const e = t.height, s = t.width, i = e % Ae, n = (e - i) / Ae, a = i === 0 ? n : n + 1, o = d.createImageData(s, Ae);
  let l = 0;
  const h = t.data, c = o.data;
  for (let u = 0; u < a; u++) {
    const p = u < n ? Ae : i;
    ({
      srcPos: l
    } = $f({
      src: h,
      srcPos: l,
      dest: c,
      width: s,
      height: p,
      nonBlackColor: 0
    })), d.putImageData(o, 0, u * Ae);
  }
}
function Ia(d, t) {
  const e = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
  for (const s of e)
    d[s] !== void 0 && (t[s] = d[s]);
  d.setLineDash !== void 0 && (t.setLineDash(d.getLineDash()), t.lineDashOffset = d.lineDashOffset);
}
function Dl(d) {
  if (d.strokeStyle = d.fillStyle = "#000000", d.fillRule = "nonzero", d.globalAlpha = 1, d.lineWidth = 1, d.lineCap = "butt", d.lineJoin = "miter", d.miterLimit = 10, d.globalCompositeOperation = "source-over", d.font = "10px sans-serif", d.setLineDash !== void 0 && (d.setLineDash([]), d.lineDashOffset = 0), !se) {
    const {
      filter: t
    } = d;
    t !== "none" && t !== "" && (d.filter = "none");
  }
}
function qd(d, t) {
  if (t)
    return !0;
  const e = H.singularValueDecompose2dScale(d);
  e[0] = Math.fround(e[0]), e[1] = Math.fround(e[1]);
  const s = Math.fround((globalThis.devicePixelRatio || 1) * Qi.PDF_TO_CSS_UNITS);
  return e[0] <= s && e[1] <= s;
}
const Wf = ["butt", "round", "square"], Xf = ["miter", "round", "bevel"], qf = {}, Yd = {};
var us, Pc, Mc, Lc;
const Pd = class Pd {
  constructor(t, e, s, i, n, {
    optionalContentConfig: a,
    markedContentStack: o = null
  }, l, h) {
    b(this, us);
    this.ctx = t, this.current = new Vd(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = !1, this.res = null, this.xobjs = null, this.commonObjs = e, this.objs = s, this.canvasFactory = i, this.filterFactory = n, this.groupStack = [], this.processingType3 = null, this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.suspendedCtx = null, this.contentVisible = !0, this.markedContentStack = o || [], this.optionalContentConfig = a, this.cachedCanvases = new jf(this.canvasFactory), this.cachedPatterns = /* @__PURE__ */ new Map(), this.annotationCanvasMap = l, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.pageColors = h, this._cachedScaleForStroking = [-1, 0], this._cachedGetSinglePixelWidth = null, this._cachedBitmapsMap = /* @__PURE__ */ new Map();
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
      this.compositeCtx = this.ctx, this.transparentCanvas = l.canvas, this.ctx = l.context, this.ctx.save(), this.ctx.transform(...bt(this.compositeCtx));
    }
    this.ctx.save(), Dl(this.ctx), t && (this.ctx.transform(...t), this.outputScaleX = t[0], this.outputScaleY = t[0]), this.ctx.transform(...e.transform), this.viewportScale = e.scale, this.baseTransform = bt(this.ctx);
  }
  executeOperatorList(t, e, s, i) {
    const n = t.argsArray, a = t.fnArray;
    let o = e || 0;
    const l = n.length;
    if (l === o)
      return o;
    const h = l - o > Ud && typeof s == "function", c = h ? Date.now() + Gf : 0;
    let u = 0;
    const p = this.commonObjs, g = this.objs;
    let m;
    for (; ; ) {
      if (i !== void 0 && o === i.nextBreakPoint)
        return i.breakIt(o, s), o;
      if (m = a[o], m !== Qe.dependency)
        this[m].apply(this, n[o]);
      else
        for (const A of n[o]) {
          const _ = A.startsWith("g_") ? p : g;
          if (!_.has(A))
            return _.get(A, s), o;
        }
      if (o++, o === l)
        return o;
      if (h && ++u > Ud) {
        if (Date.now() > c)
          return s(), o;
        u = 0;
      }
    }
  }
  endDrawing() {
    y(this, us, Pc).call(this), this.cachedCanvases.clear(), this.cachedPatterns.clear();
    for (const t of this._cachedBitmapsMap.values()) {
      for (const e of t.values())
        typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement && (e.width = e.height = 0);
      t.clear();
    }
    this._cachedBitmapsMap.clear(), y(this, us, Mc).call(this);
  }
  _scaleImage(t, e) {
    const s = t.width ?? t.displayWidth, i = t.height ?? t.displayHeight;
    let n = Math.max(Math.hypot(e[0], e[1]), 1), a = Math.max(Math.hypot(e[2], e[3]), 1), o = s, l = i, h = "prescale1", c, u;
    for (; n > 2 && o > 1 || a > 2 && l > 1; ) {
      let p = o, g = l;
      n > 2 && o > 1 && (p = o >= 16384 ? Math.floor(o / 2) - 1 || 1 : Math.ceil(o / 2), n /= o / p), a > 2 && l > 1 && (g = l >= 16384 ? Math.floor(l / 2) - 1 || 1 : Math.ceil(l) / 2, a /= l / g), c = this.cachedCanvases.getCanvas(h, p, g), u = c.context, u.clearRect(0, 0, p, g), u.drawImage(t, 0, 0, o, l, 0, 0, p, g), t = c.canvas, o = p, l = g, h = h === "prescale1" ? "prescale2" : "prescale1";
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
    } = t, n = this.current.fillColor, a = this.current.patternFill, o = bt(e);
    let l, h, c, u;
    if ((t.bitmap || t.data) && t.count > 1) {
      const T = t.bitmap || t.data.buffer;
      h = JSON.stringify(a ? o : [o.slice(0, 4), n]), l = this._cachedBitmapsMap.get(T), l || (l = /* @__PURE__ */ new Map(), this._cachedBitmapsMap.set(T, l));
      const M = l.get(h);
      if (M && !a) {
        const z = Math.round(Math.min(o[0], o[2]) + o[4]), D = Math.round(Math.min(o[1], o[3]) + o[5]);
        return {
          canvas: M,
          offsetX: z,
          offsetY: D
        };
      }
      c = M;
    }
    c || (u = this.cachedCanvases.getCanvas("maskCanvas", s, i), Xd(u.context, t));
    let p = H.transform(o, [1 / s, 0, 0, -1 / i, 0, 0]);
    p = H.transform(p, [1, 0, 0, 1, 0, -i]);
    const [g, m, A, _] = H.getAxialAlignedBoundingBox([0, 0, s, i], p), v = Math.round(A - g) || 1, w = Math.round(_ - m) || 1, E = this.cachedCanvases.getCanvas("fillCanvas", v, w), S = E.context, C = g, k = m;
    S.translate(-C, -k), S.transform(...p), c || (c = this._scaleImage(u.canvas, ps(S)), c = c.img, l && a && l.set(h, c)), S.imageSmoothingEnabled = qd(bt(S), t.interpolate), Il(S, c, 0, 0, c.width, c.height, 0, 0, s, i), S.globalCompositeOperation = "source-in";
    const x = H.transform(ps(S), [1, 0, 0, 1, -C, -k]);
    return S.fillStyle = a ? n.getPattern(e, this, x, ee.FILL) : n, S.fillRect(0, 0, s, i), l && !a && (this.cachedCanvases.delete("fillCanvas"), l.set(h, E.canvas)), {
      canvas: E.canvas,
      offsetX: Math.round(C),
      offsetY: Math.round(k)
    };
  }
  setLineWidth(t) {
    t !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1), this.current.lineWidth = t, this.ctx.lineWidth = t;
  }
  setLineCap(t) {
    this.ctx.lineCap = Wf[t];
  }
  setLineJoin(t) {
    this.ctx.lineJoin = Xf[t];
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
    n.setTransform(...bt(this.suspendedCtx)), Ia(this.suspendedCtx, n), Uf(n, this.suspendedCtx), this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
  }
  endSMaskMode() {
    if (!this.inSMaskMode)
      throw new Error("endSMaskMode called while not in smask mode");
    this.ctx._removeMirroring(), Ia(this.ctx, this.suspendedCtx), this.ctx = this.suspendedCtx, this.suspendedCtx = null;
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
    let p = t.canvas, g = l - c, m = h - u;
    if (a) {
      const _ = H.makeHexColor(...a);
      if (g < 0 || m < 0 || g + s > p.width || m + i > p.height) {
        const v = this.cachedCanvases.getCanvas("maskExtension", s, i), w = v.context;
        w.drawImage(p, -g, -m), w.globalCompositeOperation = "destination-atop", w.fillStyle = _, w.fillRect(0, 0, s, i), w.globalCompositeOperation = "source-over", p = v.canvas, g = m = 0;
      } else {
        t.save(), t.globalAlpha = 1, t.setTransform(1, 0, 0, 1, 0, 0);
        const v = new Path2D();
        v.rect(g, m, s, i), t.clip(v), t.globalCompositeOperation = "destination-atop", t.fillStyle = _, t.fillRect(g, m, s, i), t.restore();
      }
    }
    e.save(), e.globalAlpha = 1, e.setTransform(1, 0, 0, 1, 0, 0), n === "Alpha" && o ? e.filter = this.filterFactory.addAlphaFilter(o) : n === "Luminosity" && (e.filter = this.filterFactory.addLuminosityFilter(o));
    const A = new Path2D();
    A.rect(l, h, s, i), e.clip(A), e.globalCompositeOperation = "destination-in", e.drawImage(p, g, m, s, i, l, h, s, i), e.restore();
  }
  save() {
    this.inSMaskMode ? (Ia(this.ctx, this.suspendedCtx), this.suspendedCtx.save()) : this.ctx.save();
    const t = this.current;
    this.stateStack.push(t), this.current = t.clone();
  }
  restore() {
    this.stateStack.length === 0 && this.inSMaskMode && this.endSMaskMode(), this.stateStack.length !== 0 && (this.current = this.stateStack.pop(), this.inSMaskMode ? (this.suspendedCtx.restore(), Ia(this.suspendedCtx, this.ctx)) : this.ctx.restore(), this.checkSMaskState(), this.pendingClip = null, this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null);
  }
  transform(t, e, s, i, n, a) {
    this.ctx.transform(t, e, s, i, n, a), this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
  }
  constructPath(t, e, s) {
    const i = this.ctx, n = this.current;
    let a = n.x, o = n.y, l, h;
    const c = bt(i), u = c[0] === 0 && c[3] === 0 || c[1] === 0 && c[2] === 0, p = u ? s.slice(0) : null;
    for (let g = 0, m = 0, A = t.length; g < A; g++)
      switch (t[g] | 0) {
        case Qe.rectangle:
          a = e[m++], o = e[m++];
          const _ = e[m++], v = e[m++], w = a + _, E = o + v;
          i.moveTo(a, o), _ === 0 || v === 0 ? i.lineTo(w, E) : (i.lineTo(w, o), i.lineTo(w, E), i.lineTo(a, E)), u || n.updateRectMinMax(c, [a, o, w, E]), i.closePath();
          break;
        case Qe.moveTo:
          a = e[m++], o = e[m++], i.moveTo(a, o), u || n.updatePathMinMax(c, a, o);
          break;
        case Qe.lineTo:
          a = e[m++], o = e[m++], i.lineTo(a, o), u || n.updatePathMinMax(c, a, o);
          break;
        case Qe.curveTo:
          l = a, h = o, a = e[m + 4], o = e[m + 5], i.bezierCurveTo(e[m], e[m + 1], e[m + 2], e[m + 3], a, o), n.updateCurvePathMinMax(c, l, h, e[m], e[m + 1], e[m + 2], e[m + 3], a, o, p), m += 6;
          break;
        case Qe.curveTo2:
          l = a, h = o, i.bezierCurveTo(a, o, e[m], e[m + 1], e[m + 2], e[m + 3]), n.updateCurvePathMinMax(c, l, h, a, o, e[m], e[m + 1], e[m + 2], e[m + 3], p), a = e[m + 2], o = e[m + 3], m += 4;
          break;
        case Qe.curveTo3:
          l = a, h = o, a = e[m + 2], o = e[m + 3], i.bezierCurveTo(e[m], e[m + 1], a, o, a, o), n.updateCurvePathMinMax(c, l, h, e[m], e[m + 1], a, o, a, o, p), m += 4;
          break;
        case Qe.closePath:
          i.closePath();
          break;
      }
    u && n.updateScalingPathMinMax(c, p), n.setCurrentPoint(a, o);
  }
  closePath() {
    this.ctx.closePath();
  }
  stroke(t = !0) {
    const e = this.ctx, s = this.current.strokeColor;
    e.globalAlpha = this.current.strokeAlpha, this.contentVisible && (typeof s == "object" && (s != null && s.getPattern) ? (e.save(), e.strokeStyle = s.getPattern(e, this, ps(e), ee.STROKE), this.rescaleAndStroke(!1), e.restore()) : this.rescaleAndStroke(!0)), t && this.consumePath(this.current.getClippedPathBoundingBox()), e.globalAlpha = this.current.fillAlpha;
  }
  closeStroke() {
    this.closePath(), this.stroke();
  }
  fill(t = !0) {
    const e = this.ctx, s = this.current.fillColor, i = this.current.patternFill;
    let n = !1;
    i && (e.save(), e.fillStyle = s.getPattern(e, this, ps(e), ee.FILL), n = !0);
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
    this.pendingClip = qf;
  }
  eoClip() {
    this.pendingClip = Yd;
  }
  beginText() {
    this.current.textMatrix = eu, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
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
    if (i.fontMatrix = s.fontMatrix || sc, (i.fontMatrix[0] === 0 || i.fontMatrix[3] === 0) && K("Invalid font matrix for font " + t), e < 0 ? (e = -e, i.fontDirection = -1) : i.fontDirection = 1, this.current.font = s, this.current.fontSize = e, s.isType3Font)
      return;
    const n = s.loadedName || "sans-serif", a = ((c = s.systemFontInfo) == null ? void 0 : c.css) || `"${n}", ${s.fallbackName}`;
    let o = "normal";
    s.black ? o = "900" : s.bold && (o = "bold");
    const l = s.italic ? "italic" : "normal";
    let h = e;
    e < $d ? h = $d : e > Gd && (h = Gd), this.current.fontSizeScale = e / h, this.ctx.font = `${l} ${o} ${h}px ${a}`;
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
    const a = this.ctx, o = this.current, l = o.font, h = o.textRenderingMode, c = o.fontSize / o.fontSizeScale, u = h & qt.FILL_STROKE_MASK, p = !!(h & qt.ADD_TO_PATH_FLAG), g = o.patternFill && !l.missingFile, m = o.patternStroke && !l.missingFile;
    let A;
    if ((l.disableFontFace || p || g || m) && (A = l.getPathGenerator(this.commonObjs, t)), l.disableFontFace || g || m) {
      if (a.save(), a.translate(e, s), a.scale(c, -c), u === qt.FILL || u === qt.FILL_STROKE)
        if (i) {
          const _ = a.getTransform();
          a.setTransform(...i), a.fill(y(this, us, Lc).call(this, A, _, i));
        } else
          a.fill(A);
      if (u === qt.STROKE || u === qt.FILL_STROKE)
        if (n) {
          const _ = a.getTransform();
          a.setTransform(...n), a.stroke(y(this, us, Lc).call(this, A, _, n));
        } else
          a.lineWidth /= c, a.stroke(A);
      a.restore();
    } else
      (u === qt.FILL || u === qt.FILL_STROKE) && a.fillText(t, e, s), (u === qt.STROKE || u === qt.FILL_STROKE) && a.strokeText(t, e, s);
    p && (this.pendingTextPaths || (this.pendingTextPaths = [])).push({
      transform: bt(a),
      x: e,
      y: s,
      fontSize: c,
      path: A
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
    return J(this, "isFontSubpixelAAEnabled", s);
  }
  showText(t) {
    const e = this.current, s = e.font;
    if (s.isType3Font)
      return this.showType3Text(t);
    const i = e.fontSize;
    if (i === 0)
      return;
    const n = this.ctx, a = e.fontSizeScale, o = e.charSpacing, l = e.wordSpacing, h = e.fontDirection, c = e.textHScale * h, u = t.length, p = s.vertical, g = p ? 1 : -1, m = s.defaultVMetrics, A = i * e.fontMatrix[0], _ = e.textRenderingMode === qt.FILL && !s.disableFontFace && !e.patternFill;
    n.save(), n.transform(...e.textMatrix), n.translate(e.x, e.y + e.textRise), h > 0 ? n.scale(c, -1) : n.scale(c, 1);
    let v, w;
    if (e.patternFill) {
      n.save();
      const x = e.fillColor.getPattern(n, this, ps(n), ee.FILL);
      v = bt(n), n.restore(), n.fillStyle = x;
    }
    if (e.patternStroke) {
      n.save();
      const x = e.strokeColor.getPattern(n, this, ps(n), ee.STROKE);
      w = bt(n), n.restore(), n.strokeStyle = x;
    }
    let E = e.lineWidth;
    const S = e.textMatrixScale;
    if (S === 0 || E === 0) {
      const x = e.textRenderingMode & qt.FILL_STROKE_MASK;
      (x === qt.STROKE || x === qt.FILL_STROKE) && (E = this.getSinglePixelWidth());
    } else
      E /= S;
    if (a !== 1 && (n.scale(a, a), E /= a), n.lineWidth = E, s.isInvalidPDFjsFont) {
      const x = [];
      let T = 0;
      for (const M of t)
        x.push(M.unicode), T += M.width;
      n.fillText(x.join(""), 0, 0), e.x += T * A * c, n.restore(), this.compose();
      return;
    }
    let C = 0, k;
    for (k = 0; k < u; ++k) {
      const x = t[k];
      if (typeof x == "number") {
        C += g * x * i / 1e3;
        continue;
      }
      let T = !1;
      const M = (x.isSpace ? l : 0) + o, z = x.fontChar, D = x.accent;
      let et, dt, W = x.width;
      if (p) {
        const L = x.vmetric || m, $ = -(x.vmetric ? L[1] : W * 0.5) * A, Pt = L[2] * A;
        W = L ? -L[0] : W, et = $ / a, dt = (C + Pt) / a;
      } else
        et = C / a, dt = 0;
      if (s.remeasure && W > 0) {
        const L = n.measureText(z).width * 1e3 / i * a;
        if (W < L && this.isFontSubpixelAAEnabled) {
          const $ = W / L;
          T = !0, n.save(), n.scale($, 1), et /= $;
        } else W !== L && (et += (W - L) / 2e3 * i / a);
      }
      if (this.contentVisible && (x.isInFont || s.missingFile)) {
        if (_ && !D)
          n.fillText(z, et, dt);
        else if (this.paintChar(z, et, dt, v, w), D) {
          const L = et + i * D.offset.x / a, $ = dt - i * D.offset.y / a;
          this.paintChar(D.fontChar, L, $, v, w);
        }
      }
      const pt = p ? W * A - M * h : W * A + M * h;
      C += pt, T && n.restore();
    }
    p ? e.y -= C : e.x += C * c, n.restore(), this.compose();
  }
  showType3Text(t) {
    const e = this.ctx, s = this.current, i = s.font, n = s.fontSize, a = s.fontDirection, o = i.vertical ? 1 : -1, l = s.charSpacing, h = s.wordSpacing, c = s.textHScale * a, u = s.fontMatrix || sc, p = t.length, g = s.textRenderingMode === qt.INVISIBLE;
    let m, A, _, v;
    if (!(g || n === 0)) {
      for (this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null, e.save(), e.transform(...s.textMatrix), e.translate(s.x, s.y), e.scale(c, a), m = 0; m < p; ++m) {
        if (A = t[m], typeof A == "number") {
          v = o * A * n / 1e3, this.ctx.translate(v, 0), s.x += v * c;
          continue;
        }
        const w = (A.isSpace ? h : 0) + l, E = i.charProcOperatorList[A.operatorListId];
        if (!E) {
          K(`Type3 character "${A.operatorListId}" is not available.`);
          continue;
        }
        this.contentVisible && (this.processingType3 = A, this.save(), e.scale(n, n), e.transform(...u), this.executeOperatorList(E), this.restore()), _ = H.applyTransform([A.width, 0], u)[0] * n + w, e.translate(_, 0), s.x += _ * c;
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
      const s = t[1], i = this.baseTransform || bt(this.ctx), n = {
        createCanvasGraphics: (a) => new Pd(a, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
          optionalContentConfig: this.optionalContentConfig,
          markedContentStack: this.markedContentStack
        })
      };
      e = new Tc(t, s, this.ctx, n, i);
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
    return this.cachedPatterns.has(t) ? s = this.cachedPatterns.get(t) : (s = zf(this.getObject(t)), this.cachedPatterns.set(t, s)), e && (s.matrix = e), s;
  }
  shadingFill(t) {
    if (!this.contentVisible)
      return;
    const e = this.ctx;
    this.save();
    const s = this._getPattern(t);
    e.fillStyle = s.getPattern(e, this, ps(e), ee.SHADING);
    const i = ps(e);
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
    if (this.contentVisible && (this.save(), this.baseTransformStack.push(this.baseTransform), t && this.transform(...t), this.baseTransform = bt(this.ctx), e)) {
      const s = e[2] - e[0], i = e[3] - e[1];
      this.ctx.rect(e[0], e[1], s, i), this.current.updateRectMinMax(bt(this.ctx), e), this.clip(), this.endPath();
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
    t.isolated || $h("TODO: Support non-isolated groups."), t.knockout && K("Knockout groups not supported.");
    const s = bt(e);
    if (t.matrix && e.transform(...t.matrix), !t.bbox)
      throw new Error("Bounding box is required.");
    let i = H.getAxialAlignedBoundingBox(t.bbox, bt(e));
    const n = [0, 0, e.canvas.width, e.canvas.height];
    i = H.intersect(i, n) || [0, 0, 0, 0];
    const a = Math.floor(i[0]), o = Math.floor(i[1]), l = Math.max(Math.ceil(i[2]) - a, 1), h = Math.max(Math.ceil(i[3]) - o, 1);
    this.current.startNewPathAndClipBox([0, 0, l, h]);
    let c = "groupAt" + this.groupLevel;
    t.smask && (c += "_smask_" + this.smaskCounter++ % 2);
    const u = this.cachedCanvases.getCanvas(c, l, h), p = u.context;
    p.translate(-a, -o), p.transform(...s), t.smask ? this.smaskStack.push({
      canvas: u.canvas,
      context: p,
      offsetX: a,
      offsetY: o,
      subtype: t.smask.subtype,
      backdrop: t.smask.backdrop,
      transferMap: t.smask.transferMap || null,
      startTransformInverse: null
    }) : (e.setTransform(1, 0, 0, 1, 0, 0), e.translate(a, o), e.save()), Ia(e, p), this.ctx = p, this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]), this.groupStack.push(e), this.groupLevel++;
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
      const i = bt(this.ctx);
      this.restore(), this.ctx.save(), this.ctx.setTransform(...i);
      const n = H.getAxialAlignedBoundingBox([0, 0, e.canvas.width, e.canvas.height], i);
      this.ctx.drawImage(e.canvas, 0, 0), this.ctx.restore(), this.compose(n);
    }
  }
  beginAnnotation(t, e, s, i, n) {
    if (y(this, us, Pc).call(this), Dl(this.ctx), this.ctx.save(), this.save(), this.baseTransform && this.ctx.setTransform(...this.baseTransform), e) {
      const a = e[2] - e[0], o = e[3] - e[1];
      if (n && this.annotationCanvasMap) {
        s = s.slice(), s[4] -= e[0], s[5] -= e[1], e = e.slice(), e[0] = e[1] = 0, e[2] = a, e[3] = o;
        const [l, h] = H.singularValueDecompose2dScale(bt(this.ctx)), {
          viewportScale: c
        } = this, u = Math.ceil(a * this.outputScaleX * c), p = Math.ceil(o * this.outputScaleY * c);
        this.annotationCanvas = this.canvasFactory.create(u, p);
        const {
          canvas: g,
          context: m
        } = this.annotationCanvas;
        this.annotationCanvasMap.set(t, g), this.annotationCanvas.savedCtx = this.ctx, this.ctx = m, this.ctx.save(), this.ctx.setTransform(l, 0, 0, -h, 0, o * h), Dl(this.ctx);
      } else
        Dl(this.ctx), this.endPath(), this.ctx.rect(e[0], e[1], a, o), this.ctx.clip(), this.ctx.beginPath();
    }
    this.current = new Vd(this.ctx.canvas.width, this.ctx.canvas.height), this.transform(...s), this.transform(...i);
  }
  endAnnotation() {
    this.annotationCanvas && (this.ctx.restore(), y(this, us, Mc).call(this), this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas);
  }
  paintImageMaskXObject(t) {
    if (!this.contentVisible)
      return;
    const e = t.count;
    t = this.getObject(t.data, t), t.count = e;
    const s = this.ctx, i = this.processingType3;
    if (i && (i.compiled === void 0 && (i.compiled = Vf(t)), i.compiled)) {
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
    const l = bt(o);
    o.transform(e, s, i, n, 0, 0);
    const h = this._createMaskCanvas(t);
    o.setTransform(1, 0, 0, 1, h.offsetX - l[4], h.offsetY - l[5]);
    for (let c = 0, u = a.length; c < u; c += 2) {
      const p = H.transform(l, [e, s, i, n, a[c], a[c + 1]]), [g, m] = H.applyTransform([0, 0], p);
      o.drawImage(h.canvas, g, m);
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
      const p = this.getObject(a, n);
      Xd(u, p), u.globalCompositeOperation = "source-in", u.fillStyle = i ? s.getPattern(u, this, ps(e), ee.FILL) : s, u.fillRect(0, 0, o, l), u.restore(), e.save(), e.transform(...h), e.scale(1, -1), Il(e, c.canvas, 0, 0, o, l, 0, -1, 1, 1), e.restore();
    }
    this.compose();
  }
  paintImageXObject(t) {
    if (!this.contentVisible)
      return;
    const e = this.getObject(t);
    if (!e) {
      K("Dependent image isn't ready yet");
      return;
    }
    this.paintInlineImageXObject(e);
  }
  paintImageXObjectRepeat(t, e, s, i) {
    if (!this.contentVisible)
      return;
    const n = this.getObject(t);
    if (!n) {
      K("Dependent image isn't ready yet");
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
    if (this.save(), !se) {
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
      Wd(l, t), n = this.applyTransferMapsToCanvas(l);
    }
    const a = this._scaleImage(n, ps(i));
    i.imageSmoothingEnabled = qd(bt(i), t.interpolate), Il(i, a.img, 0, 0, a.paintWidth, a.paintHeight, 0, -s, e, s), this.compose(), this.restore();
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
      Wd(l, t), i = this.applyTransferMapsToCanvas(l);
    }
    for (const n of e)
      s.save(), s.transform(...n.transform), s.scale(1, -1), Il(s, i, n.x, n.y, n.w, n.h, 0, -1, 1, 1), s.restore();
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
    this.pendingClip && (e || (this.pendingClip === Yd ? s.clip("evenodd") : s.clip()), this.pendingClip = null), this.current.startNewPathAndClipBox(this.current.clipBox), s.beginPath();
  }
  getSinglePixelWidth() {
    if (!this._cachedGetSinglePixelWidth) {
      const t = bt(this.ctx);
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
us = new WeakSet(), Pc = function() {
  for (; this.stateStack.length || this.inSMaskMode; )
    this.restore();
  this.current.activeSMask = null, this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.transparentCanvas = null);
}, Mc = function() {
  if (this.pageColors) {
    const t = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
    if (t !== "none") {
      const e = this.ctx.filter;
      this.ctx.filter = t, this.ctx.drawImage(this.ctx.canvas, 0, 0), this.ctx.filter = e;
    }
  }
}, Lc = function(t, e, s) {
  const i = new Path2D();
  return i.addPath(t, new DOMMatrix(s).invertSelf().multiplySelf(e)), i;
};
let Cr = Pd;
for (const d in Qe)
  Cr.prototype[d] !== void 0 && (Cr.prototype[Qe[d]] = Cr.prototype[d]);
var Ro, Io;
class di {
  static get workerPort() {
    return r(this, Ro);
  }
  static set workerPort(t) {
    if (!(typeof Worker < "u" && t instanceof Worker) && t !== null)
      throw new Error("Invalid `workerPort` type.");
    f(this, Ro, t);
  }
  static get workerSrc() {
    return r(this, Io);
  }
  static set workerSrc(t) {
    if (typeof t != "string")
      throw new Error("Invalid `workerSrc` type.");
    f(this, Io, t);
  }
}
Ro = new WeakMap(), Io = new WeakMap(), b(di, Ro, null), b(di, Io, "");
var Pn, Do;
class Yf {
  constructor({
    parsedData: t,
    rawData: e
  }) {
    b(this, Pn);
    b(this, Do);
    f(this, Pn, t), f(this, Do, e);
  }
  getRaw() {
    return r(this, Do);
  }
  get(t) {
    return r(this, Pn).get(t) ?? null;
  }
  getAll() {
    return md(r(this, Pn));
  }
  has(t) {
    return r(this, Pn).has(t);
  }
}
Pn = new WeakMap(), Do = new WeakMap();
const Ar = Symbol("INTERNAL");
var Fo, No, Oo, jr;
class Kf {
  constructor(t, {
    name: e,
    intent: s,
    usage: i,
    rbGroups: n
  }) {
    b(this, Fo, !1);
    b(this, No, !1);
    b(this, Oo, !1);
    b(this, jr, !0);
    f(this, Fo, !!(t & De.DISPLAY)), f(this, No, !!(t & De.PRINT)), this.name = e, this.intent = s, this.usage = i, this.rbGroups = n;
  }
  get visible() {
    if (r(this, Oo))
      return r(this, jr);
    if (!r(this, jr))
      return !1;
    const {
      print: t,
      view: e
    } = this.usage;
    return r(this, Fo) ? (e == null ? void 0 : e.viewState) !== "OFF" : r(this, No) ? (t == null ? void 0 : t.printState) !== "OFF" : !0;
  }
  _setVisible(t, e, s = !1) {
    t !== Ar && ct("Internal method `_setVisible` called."), f(this, Oo, s), f(this, jr, e);
  }
}
Fo = new WeakMap(), No = new WeakMap(), Oo = new WeakMap(), jr = new WeakMap();
var Li, ot, Vr, Wr, Bo, Rc;
class Qf {
  constructor(t, e = De.DISPLAY) {
    b(this, Bo);
    b(this, Li, null);
    b(this, ot, /* @__PURE__ */ new Map());
    b(this, Vr, null);
    b(this, Wr, null);
    if (this.renderingIntent = e, this.name = null, this.creator = null, t !== null) {
      this.name = t.name, this.creator = t.creator, f(this, Wr, t.order);
      for (const s of t.groups)
        r(this, ot).set(s.id, new Kf(e, s));
      if (t.baseState === "OFF")
        for (const s of r(this, ot).values())
          s._setVisible(Ar, !1);
      for (const s of t.on)
        r(this, ot).get(s)._setVisible(Ar, !0);
      for (const s of t.off)
        r(this, ot).get(s)._setVisible(Ar, !1);
      f(this, Vr, this.getHash());
    }
  }
  isVisible(t) {
    if (r(this, ot).size === 0)
      return !0;
    if (!t)
      return $h("Optional content group not defined."), !0;
    if (t.type === "OCG")
      return r(this, ot).has(t.id) ? r(this, ot).get(t.id).visible : (K(`Optional content group not found: ${t.id}`), !0);
    if (t.type === "OCMD") {
      if (t.expression)
        return y(this, Bo, Rc).call(this, t.expression);
      if (!t.policy || t.policy === "AnyOn") {
        for (const e of t.ids) {
          if (!r(this, ot).has(e))
            return K(`Optional content group not found: ${e}`), !0;
          if (r(this, ot).get(e).visible)
            return !0;
        }
        return !1;
      } else if (t.policy === "AllOn") {
        for (const e of t.ids) {
          if (!r(this, ot).has(e))
            return K(`Optional content group not found: ${e}`), !0;
          if (!r(this, ot).get(e).visible)
            return !1;
        }
        return !0;
      } else if (t.policy === "AnyOff") {
        for (const e of t.ids) {
          if (!r(this, ot).has(e))
            return K(`Optional content group not found: ${e}`), !0;
          if (!r(this, ot).get(e).visible)
            return !0;
        }
        return !1;
      } else if (t.policy === "AllOff") {
        for (const e of t.ids) {
          if (!r(this, ot).has(e))
            return K(`Optional content group not found: ${e}`), !0;
          if (r(this, ot).get(e).visible)
            return !1;
        }
        return !0;
      }
      return K(`Unknown optional content policy ${t.policy}.`), !0;
    }
    return K(`Unknown group type ${t.type}.`), !0;
  }
  setVisibility(t, e = !0, s = !0) {
    var n;
    const i = r(this, ot).get(t);
    if (!i) {
      K(`Optional content group not found: ${t}`);
      return;
    }
    if (s && e && i.rbGroups.length)
      for (const a of i.rbGroups)
        for (const o of a)
          o !== t && ((n = r(this, ot).get(o)) == null || n._setVisible(Ar, !1, !0));
    i._setVisible(Ar, !!e, !0), f(this, Li, null);
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
    f(this, Li, null);
  }
  get hasInitialVisibility() {
    return r(this, Vr) === null || this.getHash() === r(this, Vr);
  }
  getOrder() {
    return r(this, ot).size ? r(this, Wr) ? r(this, Wr).slice() : [...r(this, ot).keys()] : null;
  }
  getGroups() {
    return r(this, ot).size > 0 ? md(r(this, ot)) : null;
  }
  getGroup(t) {
    return r(this, ot).get(t) || null;
  }
  getHash() {
    if (r(this, Li) !== null)
      return r(this, Li);
    const t = new Ru();
    for (const [e, s] of r(this, ot))
      t.update(`${e}:${s.visible}`);
    return f(this, Li, t.hexdigest());
  }
}
Li = new WeakMap(), ot = new WeakMap(), Vr = new WeakMap(), Wr = new WeakMap(), Bo = new WeakSet(), Rc = function(t) {
  const e = t.length;
  if (e < 2)
    return !0;
  const s = t[0];
  for (let i = 1; i < e; i++) {
    const n = t[i];
    let a;
    if (Array.isArray(n))
      a = y(this, Bo, Rc).call(this, n);
    else if (r(this, ot).has(n))
      a = r(this, ot).get(n).visible;
    else
      return K(`Optional content group not found: ${n}`), !0;
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
class Zf {
  constructor(t, {
    disableRange: e = !1,
    disableStream: s = !1
  }) {
    kt(t, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');
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
      kt(i, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
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
    kt(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
    const t = this._queuedChunks;
    return this._queuedChunks = null, new Jf(this, t, this._progressiveDone, this._contentDispositionFilename);
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const s = new tg(this, t, e);
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
class Jf {
  constructor(t, e, s = !1, i = null) {
    this._stream = t, this._done = s || !1, this._filename = Ad(i) ? i : null, this._queuedChunks = e || [], this._loaded = 0;
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
class tg {
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
function eg(d) {
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
        const p = new TextDecoder(c, {
          fatal: !0
        }), g = Gh(u);
        u = p.decode(g), t = !1;
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
    let p;
    const g = s("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
    for (; (p = g.exec(c)) !== null; ) {
      let [, A, _, v] = p;
      if (A = parseInt(A, 10), A in u) {
        if (A === 0)
          break;
        continue;
      }
      u[A] = [_, v];
    }
    const m = [];
    for (let A = 0; A < u.length && A in u; ++A) {
      let [_, v] = u[A];
      v = o(v), _ && (v = unescape(v), A === 0 && (v = l(v))), m.push(v);
    }
    return m.join("");
  }
  function o(c) {
    if (c.startsWith('"')) {
      const u = c.slice(1).split('\\"');
      for (let p = 0; p < u.length; ++p) {
        const g = u[p].indexOf('"');
        g !== -1 && (u[p] = u[p].slice(0, g), u.length = p + 1), u[p] = u[p].replaceAll(/\\(.)/g, "$1");
      }
      c = u.join('"');
    }
    return c;
  }
  function l(c) {
    const u = c.indexOf("'");
    if (u === -1)
      return c;
    const p = c.slice(0, u), m = c.slice(u + 1).replace(/^[^']*'/, "");
    return i(p, m);
  }
  function h(c) {
    return !c.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(c) ? c : c.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(u, p, g, m) {
      if (g === "q" || g === "Q")
        return m = m.replaceAll("_", " "), m = m.replaceAll(/=([0-9a-fA-F]{2})/g, function(A, _) {
          return String.fromCharCode(parseInt(_, 16));
        }), i(p, m);
      try {
        m = atob(m);
      } catch {
      }
      return i(p, m);
    });
  }
  return "";
}
function Wu(d, t) {
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
function Xu({
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
function qu(d) {
  const t = d.get("Content-Disposition");
  if (t) {
    let e = eg(t);
    if (e.includes("%"))
      try {
        e = decodeURIComponent(e);
      } catch {
      }
    if (Ad(e))
      return e;
  }
  return null;
}
function Wh(d, t) {
  return d === 404 || d === 0 && t.startsWith("file:") ? new to('Missing PDF "' + t + '".') : new uh(`Unexpected server response (${d}) while retrieving PDF "${t}".`, d);
}
function Yu(d) {
  return d === 200 || d === 206;
}
function Ku(d, t, e) {
  return {
    method: "GET",
    headers: d,
    signal: e.signal,
    mode: "cors",
    credentials: t ? "include" : "same-origin",
    redirect: "follow"
  };
}
function Qu(d) {
  return d instanceof Uint8Array ? d.buffer : d instanceof ArrayBuffer ? d : (K(`getArrayBuffer - unexpected data format: ${d}`), new Uint8Array(d).buffer);
}
class Kd {
  constructor(t) {
    U(this, "_responseOrigin", null);
    this.source = t, this.isHttp = /^https?:/i.test(t.url), this.headers = Wu(this.isHttp, t.httpHeaders), this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    var t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }
  getFullReader() {
    return kt(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once."), this._fullRequestReader = new sg(this), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const s = new ig(this, t, e);
    return this._rangeRequestReaders.push(s), s;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const s of this._rangeRequestReaders.slice(0))
      s.cancel(t);
  }
}
class sg {
  constructor(t) {
    this._stream = t, this._reader = null, this._loaded = 0, this._filename = null;
    const e = t.source;
    this._withCredentials = e.withCredentials || !1, this._contentLength = e.length, this._headersCapability = Promise.withResolvers(), this._disableRange = e.disableRange || !1, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._abortController = new AbortController(), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange;
    const s = new Headers(t.headers), i = e.url;
    fetch(i, Ku(s, this._withCredentials, this._abortController)).then((n) => {
      if (t._responseOrigin = Vh(n.url), !Yu(n.status))
        throw Wh(n.status, i);
      this._reader = n.body.getReader(), this._headersCapability.resolve();
      const a = n.headers, {
        allowRangeRequests: o,
        suggestedLength: l
      } = Xu({
        responseHeaders: a,
        isHttp: t.isHttp,
        rangeChunkSize: this._rangeChunkSize,
        disableRange: this._disableRange
      });
      this._isRangeSupported = o, this._contentLength = l || this._contentLength, this._filename = qu(a), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new Ki("Streaming is disabled."));
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
      value: Qu(t),
      done: !1
    });
  }
  cancel(t) {
    var e;
    (e = this._reader) == null || e.cancel(t), this._abortController.abort();
  }
}
class ig {
  constructor(t, e, s) {
    this._stream = t, this._reader = null, this._loaded = 0;
    const i = t.source;
    this._withCredentials = i.withCredentials || !1, this._readCapability = Promise.withResolvers(), this._isStreamingSupported = !i.disableStream, this._abortController = new AbortController();
    const n = new Headers(t.headers);
    n.append("Range", `bytes=${e}-${s - 1}`);
    const a = i.url;
    fetch(a, Ku(n, this._withCredentials, this._abortController)).then((o) => {
      const l = Vh(o.url);
      if (l !== t._responseOrigin)
        throw new Error(`Expected range response-origin "${l}" to match "${t._responseOrigin}".`);
      if (!Yu(o.status))
        throw Wh(o.status, a);
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
      value: Qu(t),
      done: !1
    });
  }
  cancel(t) {
    var e;
    (e = this._reader) == null || e.cancel(t), this._abortController.abort();
  }
}
const Jh = 200, tc = 206;
function ng(d) {
  const t = d.response;
  return typeof t != "string" ? t : Gh(t).buffer;
}
class rg {
  constructor({
    url: t,
    httpHeaders: e,
    withCredentials: s
  }) {
    U(this, "_responseOrigin", null);
    this.url = t, this.isHttp = /^https?:/i.test(t), this.headers = Wu(this.isHttp, e), this.withCredentials = s || !1, this.currXhrId = 0, this.pendingRequests = /* @__PURE__ */ Object.create(null);
  }
  request(t) {
    const e = new XMLHttpRequest(), s = this.currXhrId++, i = this.pendingRequests[s] = {
      xhr: e
    };
    e.open("GET", this.url), e.withCredentials = this.withCredentials;
    for (const [n, a] of this.headers)
      e.setRequestHeader(n, a);
    return this.isHttp && "begin" in t && "end" in t ? (e.setRequestHeader("Range", `bytes=${t.begin}-${t.end - 1}`), i.expectedStatus = tc) : i.expectedStatus = Jh, e.responseType = "arraybuffer", kt(t.onError, "Expected `onError` callback to be provided."), e.onerror = () => {
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
    const n = i.status || Jh;
    if (!(n === Jh && s.expectedStatus === tc) && n !== s.expectedStatus) {
      s.onError(i.status);
      return;
    }
    const o = ng(i);
    if (n === tc) {
      const l = i.getResponseHeader("Content-Range"), h = /bytes (\d+)-(\d+)\/(\d+)/.exec(l);
      h ? s.onDone({
        begin: parseInt(h[1], 10),
        chunk: o
      }) : (K('Missing or invalid "Content-Range" header.'), s.onError(0));
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
class ag {
  constructor(t) {
    this._source = t, this._manager = new rg(t), this._rangeChunkSize = t.rangeChunkSize, this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  _onRangeRequestReaderClosed(t) {
    const e = this._rangeRequestReaders.indexOf(t);
    e >= 0 && this._rangeRequestReaders.splice(e, 1);
  }
  getFullReader() {
    return kt(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once."), this._fullRequestReader = new og(this._manager, this._source), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    const s = new lg(this._manager, t, e);
    return s.onClosed = this._onRangeRequestReaderClosed.bind(this), this._rangeRequestReaders.push(s), s;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const s of this._rangeRequestReaders.slice(0))
      s.cancel(t);
  }
}
class og {
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
    } = Xu({
      responseHeaders: i,
      isHttp: this._manager.isHttp,
      rangeChunkSize: this._rangeChunkSize,
      disableRange: this._disableRange
    });
    n && (this._isRangeSupported = !0), this._contentLength = a || this._contentLength, this._filename = qu(i), this._isRangeSupported && this._manager.abortRequest(t), this._headersCapability.resolve();
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
    this._storedError = Wh(t, this._url), this._headersCapability.reject(this._storedError);
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
class lg {
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
    this._storedError ?? (this._storedError = Wh(t, this._url));
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
const hg = /^[a-z][a-z0-9\-+.]+:/i;
function cg(d) {
  if (hg.test(d))
    return new URL(d);
  const t = process.getBuiltinModule("url");
  return new URL(t.pathToFileURL(d));
}
class dg {
  constructor(t) {
    this.source = t, this.url = cg(t.url), kt(this.url.protocol === "file:", "PDFNodeStream only supports file:// URLs."), this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    var t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }
  getFullReader() {
    return kt(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once."), this._fullRequestReader = new ug(this), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const s = new pg(this, t, e);
    return this._rangeRequestReaders.push(s), s;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const s of this._rangeRequestReaders.slice(0))
      s.cancel(t);
  }
}
class ug {
  constructor(t) {
    this._url = t.url, this._done = !1, this._storedError = null, this.onProgress = null;
    const e = t.source;
    this._contentLength = e.length, this._loaded = 0, this._filename = null, this._disableRange = e.disableRange || !1, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange, this._readableStream = null, this._readCapability = Promise.withResolvers(), this._headersCapability = Promise.withResolvers();
    const s = process.getBuiltinModule("fs");
    s.promises.lstat(this._url).then((i) => {
      this._contentLength = i.size, this._setReadableStream(s.createReadStream(this._url)), this._headersCapability.resolve();
    }, (i) => {
      i.code === "ENOENT" && (i = new to(`Missing PDF "${this._url}".`)), this._storedError = i, this._headersCapability.reject(i);
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
    }), !this._isStreamingSupported && this._isRangeSupported && this._error(new Ki("streaming is disabled")), this._storedError && this._readableStream.destroy(this._storedError);
  }
}
class pg {
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
const fg = 1e5, pe = 30, gg = 0.8;
var tu, Ri, be, Ho, zo, Mn, Ys, $o, Go, Ln, Xr, qr, Ii, Yr, Uo, Kr, Rn, jo, Vo, In, Dn, Wo, Di, Qr, gi, Zu, Ju, Ic, Oe, Xl, Dc, tp, ep;
const Lt = class Lt {
  constructor({
    textContentSource: t,
    container: e,
    viewport: s
  }) {
    b(this, gi);
    b(this, Ri, Promise.withResolvers());
    b(this, be, null);
    b(this, Ho, !1);
    b(this, zo, !!((tu = globalThis.FontInspector) != null && tu.enabled));
    b(this, Mn, null);
    b(this, Ys, null);
    b(this, $o, 0);
    b(this, Go, 0);
    b(this, Ln, null);
    b(this, Xr, null);
    b(this, qr, 0);
    b(this, Ii, 0);
    b(this, Yr, /* @__PURE__ */ Object.create(null));
    b(this, Uo, []);
    b(this, Kr, null);
    b(this, Rn, []);
    b(this, jo, /* @__PURE__ */ new WeakMap());
    b(this, Vo, null);
    var l;
    if (t instanceof ReadableStream)
      f(this, Kr, t);
    else if (typeof t == "object")
      f(this, Kr, new ReadableStream({
        start(h) {
          h.enqueue(t), h.close();
        }
      }));
    else
      throw new Error('No "textContentSource" parameter specified.');
    f(this, be, f(this, Xr, e)), f(this, Ii, s.scale * (globalThis.devicePixelRatio || 1)), f(this, qr, s.rotation), f(this, Ys, {
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
    f(this, Vo, [1, 0, 0, -1, -a, o + n]), f(this, Go, i), f(this, $o, n), y(l = Lt, Oe, tp).call(l), cr(e, s), r(this, Ri).promise.finally(() => {
      r(Lt, Qr).delete(this), f(this, Ys, null), f(this, Yr, null);
    }).catch(() => {
    });
  }
  static get fontFamilyMap() {
    const {
      isWindows: t,
      isFirefox: e
    } = he.platform;
    return J(this, "fontFamilyMap", /* @__PURE__ */ new Map([["sans-serif", `${t && e ? "Calibri, " : ""}sans-serif`], ["monospace", `${t && e ? "Lucida Console, " : ""}monospace`]]));
  }
  render() {
    const t = () => {
      r(this, Ln).read().then(({
        value: e,
        done: s
      }) => {
        if (s) {
          r(this, Ri).resolve();
          return;
        }
        r(this, Mn) ?? f(this, Mn, e.lang), Object.assign(r(this, Yr), e.styles), y(this, gi, Zu).call(this, e.items), t();
      }, r(this, Ri).reject);
    };
    return f(this, Ln, r(this, Kr).getReader()), r(Lt, Qr).add(this), t(), r(this, Ri).promise;
  }
  update({
    viewport: t,
    onBefore: e = null
  }) {
    var n;
    const s = t.scale * (globalThis.devicePixelRatio || 1), i = t.rotation;
    if (i !== r(this, qr) && (e == null || e(), f(this, qr, i), cr(r(this, Xr), {
      rotation: i
    })), s !== r(this, Ii)) {
      e == null || e(), f(this, Ii, s);
      const a = {
        div: null,
        properties: null,
        ctx: y(n = Lt, Oe, Xl).call(n, r(this, Mn))
      };
      for (const o of r(this, Rn))
        a.properties = r(this, jo).get(o), a.div = o, y(this, gi, Ic).call(this, a);
    }
  }
  cancel() {
    var e;
    const t = new Ki("TextLayer task cancelled.");
    (e = r(this, Ln)) == null || e.cancel(t).catch(() => {
    }), f(this, Ln, null), r(this, Ri).reject(t);
  }
  get textDivs() {
    return r(this, Rn);
  }
  get textContentItemsStr() {
    return r(this, Uo);
  }
  static cleanup() {
    if (!(r(this, Qr).size > 0)) {
      r(this, In).clear();
      for (const {
        canvas: t
      } of r(this, Dn).values())
        t.remove();
      r(this, Dn).clear();
    }
  }
};
Ri = new WeakMap(), be = new WeakMap(), Ho = new WeakMap(), zo = new WeakMap(), Mn = new WeakMap(), Ys = new WeakMap(), $o = new WeakMap(), Go = new WeakMap(), Ln = new WeakMap(), Xr = new WeakMap(), qr = new WeakMap(), Ii = new WeakMap(), Yr = new WeakMap(), Uo = new WeakMap(), Kr = new WeakMap(), Rn = new WeakMap(), jo = new WeakMap(), Vo = new WeakMap(), In = new WeakMap(), Dn = new WeakMap(), Wo = new WeakMap(), Di = new WeakMap(), Qr = new WeakMap(), gi = new WeakSet(), Zu = function(t) {
  var i, n;
  if (r(this, Ho))
    return;
  (n = r(this, Ys)).ctx ?? (n.ctx = y(i = Lt, Oe, Xl).call(i, r(this, Mn)));
  const e = r(this, Rn), s = r(this, Uo);
  for (const a of t) {
    if (e.length > fg) {
      K("Ignoring additional textDivs for performance reasons."), f(this, Ho, !0);
      return;
    }
    if (a.str === void 0) {
      if (a.type === "beginMarkedContentProps" || a.type === "beginMarkedContent") {
        const o = r(this, be);
        f(this, be, document.createElement("span")), r(this, be).classList.add("markedContent"), a.id !== null && r(this, be).setAttribute("id", `${a.id}`), o.append(r(this, be));
      } else a.type === "endMarkedContent" && f(this, be, r(this, be).parentNode);
      continue;
    }
    s.push(a.str), y(this, gi, Ju).call(this, a);
  }
}, Ju = function(t) {
  var A;
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
  const a = r(this, Yr)[t.fontName];
  a.vertical && (n += Math.PI / 2);
  let o = r(this, zo) && a.fontSubstitution || a.fontFamily;
  o = Lt.fontFamilyMap.get(o) || o;
  const l = Math.hypot(i[2], i[3]), h = l * y(A = Lt, Oe, ep).call(A, o, r(this, Mn));
  let c, u;
  n === 0 ? (c = i[4], u = i[5] - h) : (c = i[4] + h * Math.sin(n), u = i[5] - h * Math.cos(n));
  const p = "calc(var(--scale-factor)*", g = e.style;
  r(this, be) === r(this, Xr) ? (g.left = `${(100 * c / r(this, Go)).toFixed(2)}%`, g.top = `${(100 * u / r(this, $o)).toFixed(2)}%`) : (g.left = `${p}${c.toFixed(2)}px)`, g.top = `${p}${u.toFixed(2)}px)`), g.fontSize = `${p}${(r(Lt, Di) * l).toFixed(2)}px)`, g.fontFamily = o, s.fontSize = l, e.setAttribute("role", "presentation"), e.textContent = t.str, e.dir = t.dir, r(this, zo) && (e.dataset.fontName = a.fontSubstitutionLoadedName || t.fontName), n !== 0 && (s.angle = n * (180 / Math.PI));
  let m = !1;
  if (t.str.length > 1)
    m = !0;
  else if (t.str !== " " && t.transform[0] !== t.transform[3]) {
    const _ = Math.abs(t.transform[0]), v = Math.abs(t.transform[3]);
    _ !== v && Math.max(_, v) / Math.min(_, v) > 1.5 && (m = !0);
  }
  if (m && (s.canvasWidth = a.vertical ? t.height : t.width), r(this, jo).set(e, s), r(this, Ys).div = e, r(this, Ys).properties = s, y(this, gi, Ic).call(this, r(this, Ys)), s.hasText && r(this, be).append(e), s.hasEOL) {
    const _ = document.createElement("br");
    _.setAttribute("role", "presentation"), r(this, be).append(_);
  }
}, Ic = function(t) {
  var o;
  const {
    div: e,
    properties: s,
    ctx: i
  } = t, {
    style: n
  } = e;
  let a = "";
  if (r(Lt, Di) > 1 && (a = `scale(${1 / r(Lt, Di)})`), s.canvasWidth !== 0 && s.hasText) {
    const {
      fontFamily: l
    } = n, {
      canvasWidth: h,
      fontSize: c
    } = s;
    y(o = Lt, Oe, Dc).call(o, i, c * r(this, Ii), l);
    const {
      width: u
    } = i.measureText(e.textContent);
    u > 0 && (a = `scaleX(${h * r(this, Ii) / u}) ${a}`);
  }
  s.angle !== 0 && (a = `rotate(${s.angle}deg) ${a}`), a.length > 0 && (n.transform = a);
}, Oe = new WeakSet(), Xl = function(t = null) {
  let e = r(this, Dn).get(t || (t = ""));
  if (!e) {
    const s = document.createElement("canvas");
    s.className = "hiddenCanvasElement", s.lang = t, document.body.append(s), e = s.getContext("2d", {
      alpha: !1,
      willReadFrequently: !0
    }), r(this, Dn).set(t, e), r(this, Wo).set(e, {
      size: 0,
      family: ""
    });
  }
  return e;
}, Dc = function(t, e, s) {
  const i = r(this, Wo).get(t);
  e === i.size && s === i.family || (t.font = `${e}px ${s}`, i.size = e, i.family = s);
}, tp = function() {
  if (r(this, Di) !== null)
    return;
  const t = document.createElement("div");
  t.style.opacity = 0, t.style.lineHeight = 1, t.style.fontSize = "1px", t.style.position = "absolute", t.textContent = "X", document.body.append(t), f(this, Di, t.getBoundingClientRect().height), t.remove();
}, ep = function(t, e) {
  const s = r(this, In).get(t);
  if (s)
    return s;
  const i = y(this, Oe, Xl).call(this, e);
  i.canvas.width = i.canvas.height = pe, y(this, Oe, Dc).call(this, i, pe, t);
  const n = i.measureText("");
  let a = n.fontBoundingBoxAscent, o = Math.abs(n.fontBoundingBoxDescent);
  if (a) {
    const c = a / (a + o);
    return r(this, In).set(t, c), i.canvas.width = i.canvas.height = 0, c;
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
  const h = a ? a / (a + o) : gg;
  return r(this, In).set(t, h), h;
}, b(Lt, Oe), b(Lt, In, /* @__PURE__ */ new Map()), b(Lt, Dn, /* @__PURE__ */ new Map()), b(Lt, Wo, /* @__PURE__ */ new WeakMap()), b(Lt, Di, null), b(Lt, Qr, /* @__PURE__ */ new Set());
let eo = Lt;
class so {
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
      else if (so.shouldBuildText(o))
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
const mg = 65536, bg = 100, yg = 5e3, Ag = se ? If : Mf, vg = se ? Df : zu, _g = se ? Rf : Lf, wg = se ? Ff : ju;
function Sg(d = {}) {
  typeof d == "string" || d instanceof URL ? d = {
    url: d
  } : (d instanceof ArrayBuffer || ArrayBuffer.isView(d)) && (d = {
    data: d
  });
  const t = new Fc(), {
    docId: e
  } = t, s = d.url ? Eg(d.url) : null, i = d.data ? Cg(d.data) : null, n = d.httpHeaders || null, a = d.withCredentials === !0, o = d.password ?? null, l = d.range instanceof sp ? d.range : null, h = Number.isInteger(d.rangeChunkSize) && d.rangeChunkSize > 0 ? d.rangeChunkSize : mg;
  let c = d.worker instanceof xr ? d.worker : null;
  const u = d.verbosity, p = typeof d.docBaseUrl == "string" && !jh(d.docBaseUrl) ? d.docBaseUrl : null, g = typeof d.cMapUrl == "string" ? d.cMapUrl : null, m = d.cMapPacked !== !1, A = d.CMapReaderFactory || vg, _ = typeof d.standardFontDataUrl == "string" ? d.standardFontDataUrl : null, v = d.StandardFontDataFactory || wg, w = d.stopAtErrors !== !0, E = Number.isInteger(d.maxImageSize) && d.maxImageSize > -1 ? d.maxImageSize : -1, S = d.isEvalSupported !== !1, C = typeof d.isOffscreenCanvasSupported == "boolean" ? d.isOffscreenCanvasSupported : !se, k = typeof d.isImageDecoderSupported == "boolean" ? d.isImageDecoderSupported : !se && (he.platform.isFirefox || !globalThis.chrome), x = Number.isInteger(d.canvasMaxAreaInBytes) ? d.canvasMaxAreaInBytes : -1, T = typeof d.disableFontFace == "boolean" ? d.disableFontFace : se, M = d.fontExtraProperties === !0, z = d.enableXfa === !0, D = d.ownerDocument || globalThis.document, et = d.disableRange === !0, dt = d.disableStream === !0, W = d.disableAutoFetch === !0, pt = d.pdfBug === !0, L = d.CanvasFactory || Ag, $ = d.FilterFactory || _g, Pt = d.enableHWA === !0, ve = l ? l.length : d.length ?? NaN, Be = typeof d.useSystemFonts == "boolean" ? d.useSystemFonts : !se && !T, G = typeof d.useWorkerFetch == "boolean" ? d.useWorkerFetch : A === zu && v === ju && g && _ && Na(g, document.baseURI) && Na(_, document.baseURI), R = null;
  lf(u);
  const X = {
    canvasFactory: new L({
      ownerDocument: D,
      enableHWA: Pt
    }),
    filterFactory: new $({
      docId: e,
      ownerDocument: D
    }),
    cMapReaderFactory: G ? null : new A({
      baseUrl: g,
      isCompressed: m
    }),
    standardFontDataFactory: G ? null : new v({
      baseUrl: _
    })
  };
  if (!c) {
    const $t = {
      verbosity: u,
      port: di.workerPort
    };
    c = $t.port ? xr.fromPort($t) : new xr($t), t._worker = c;
  }
  const ue = {
    docId: e,
    apiVersion: "4.10.38",
    data: i,
    password: o,
    disableAutoFetch: W,
    rangeChunkSize: h,
    length: ve,
    docBaseUrl: p,
    enableXfa: z,
    evaluatorOptions: {
      maxImageSize: E,
      disableFontFace: T,
      ignoreErrors: w,
      isEvalSupported: S,
      isOffscreenCanvasSupported: C,
      isImageDecoderSupported: k,
      canvasMaxAreaInBytes: x,
      fontExtraProperties: M,
      useSystemFonts: Be,
      cMapUrl: G ? g : null,
      standardFontDataUrl: G ? _ : null
    }
  }, mi = {
    disableFontFace: T,
    fontExtraProperties: M,
    ownerDocument: D,
    pdfBug: pt,
    styleElement: R,
    loadingParams: {
      disableAutoFetch: W,
      enableXfa: z
    }
  };
  return c.promise.then(function() {
    if (t.destroyed)
      throw new Error("Loading aborted");
    if (c.destroyed)
      throw new Error("Worker was destroyed");
    const $t = c.messageHandler.sendWithPromise("GetDocRequest", ue, i ? [i.buffer] : null);
    let tt;
    if (l)
      tt = new Zf(l, {
        disableRange: et,
        disableStream: dt
      });
    else if (!i) {
      if (!s)
        throw new Error("getDocument - no `url` parameter provided.");
      let gr;
      if (se)
        if (Na(s)) {
          if (typeof fetch > "u" || typeof Response > "u" || !("body" in Response.prototype))
            throw new Error("getDocument - the Fetch API was disabled in Node.js, see `--no-experimental-fetch`.");
          gr = Kd;
        } else
          gr = dg;
      else
        gr = Na(s) ? Kd : ag;
      tt = new gr({
        url: s,
        length: ve,
        httpHeaders: n,
        withCredentials: a,
        rangeChunkSize: h,
        disableRange: et,
        disableStream: dt
      });
    }
    return $t.then((gr) => {
      if (t.destroyed)
        throw new Error("Loading aborted");
      if (c.destroyed)
        throw new Error("Worker was destroyed");
      const Id = new za(e, gr, c.port), Jp = new Pg(Id, t, tt, mi, X);
      t._transport = Jp, Id.send("Ready", null);
    });
  }).catch(t._capability.reject), t;
}
function Eg(d) {
  if (d instanceof URL)
    return d.href;
  try {
    return new URL(d, window.location).href;
  } catch {
    if (se && typeof d == "string")
      return d;
  }
  throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
}
function Cg(d) {
  if (se && typeof Buffer < "u" && d instanceof Buffer)
    throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
  if (d instanceof Uint8Array && d.byteLength === d.buffer.byteLength)
    return d;
  if (typeof d == "string")
    return Gh(d);
  if (d instanceof ArrayBuffer || ArrayBuffer.isView(d) || typeof d == "object" && !isNaN(d == null ? void 0 : d.length))
    return new Uint8Array(d);
  throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
}
function Qd(d) {
  return typeof d == "object" && Number.isInteger(d == null ? void 0 : d.num) && d.num >= 0 && Number.isInteger(d == null ? void 0 : d.gen) && d.gen >= 0;
}
var Th;
const Ph = class Ph {
  constructor() {
    this._capability = Promise.withResolvers(), this._transport = null, this._worker = null, this.docId = `d${ie(Ph, Th)._++}`, this.destroyed = !1, this.onPassword = null, this.onProgress = null;
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
Th = new WeakMap(), b(Ph, Th, 0);
let Fc = Ph;
class sp {
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
class xg {
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
    return J(this, "isPureXfa", !!this._transport._htmlForXfa);
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
var Fi, Ks, Xe, vr, ql;
class kg {
  constructor(t, e, s, i = !1) {
    b(this, Xe);
    b(this, Fi, null);
    b(this, Ks, !1);
    this._pageIndex = t, this._pageInfo = e, this._transport = s, this._stats = i ? new Od() : null, this._pdfBug = i, this.commonObjs = s.commonObjs, this.objs = new ip(), this._maybeCleanupAfterRender = !1, this._intentStates = /* @__PURE__ */ new Map(), this.destroyed = !1;
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
    return new Pl({
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
    return J(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  async getXfa() {
    var t;
    return ((t = this._transport._htmlForXfa) == null ? void 0 : t.children[this._pageIndex]) || null;
  }
  render({
    canvasContext: t,
    viewport: e,
    intent: s = "display",
    annotationMode: i = yi.ENABLE,
    transform: n = null,
    background: a = null,
    optionalContentConfigPromise: o = null,
    annotationCanvasMap: l = null,
    pageColors: h = null,
    printAnnotationStorage: c = null,
    isEditing: u = !1
  }) {
    var S, C;
    (S = this._stats) == null || S.time("Overall");
    const p = this._transport.getRenderingIntent(s, i, c, u), {
      renderingIntent: g,
      cacheKey: m
    } = p;
    f(this, Ks, !1), y(this, Xe, ql).call(this), o || (o = this._transport.getOptionalContentConfig(g));
    let A = this._intentStates.get(m);
    A || (A = /* @__PURE__ */ Object.create(null), this._intentStates.set(m, A)), A.streamReaderCancelTimeout && (clearTimeout(A.streamReaderCancelTimeout), A.streamReaderCancelTimeout = null);
    const _ = !!(g & De.PRINT);
    A.displayReadyCapability || (A.displayReadyCapability = Promise.withResolvers(), A.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null
    }, (C = this._stats) == null || C.time("Page Request"), this._pumpOperatorList(p));
    const v = (k) => {
      var x;
      A.renderTasks.delete(w), (this._maybeCleanupAfterRender || _) && f(this, Ks, !0), y(this, Xe, vr).call(this, !_), k ? (w.capability.reject(k), this._abortOperatorList({
        intentState: A,
        reason: k instanceof Error ? k : new Error(k)
      })) : w.capability.resolve(), this._stats && (this._stats.timeEnd("Rendering"), this._stats.timeEnd("Overall"), (x = globalThis.Stats) != null && x.enabled && globalThis.Stats.add(this.pageNumber, this._stats));
    }, w = new Oc({
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
      operatorList: A.operatorList,
      pageIndex: this._pageIndex,
      canvasFactory: this._transport.canvasFactory,
      filterFactory: this._transport.filterFactory,
      useRequestAnimationFrame: !_,
      pdfBug: this._pdfBug,
      pageColors: h
    });
    (A.renderTasks || (A.renderTasks = /* @__PURE__ */ new Set())).add(w);
    const E = w.task;
    return Promise.all([A.displayReadyCapability.promise, o]).then(([k, x]) => {
      var T;
      if (this.destroyed) {
        v();
        return;
      }
      if ((T = this._stats) == null || T.time("Rendering"), !(x.renderingIntent & g))
        throw new Error("Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.");
      w.initializeGraphics({
        transparency: k,
        optionalContentConfig: x
      }), w.operatorListChanged();
    }).catch(v), E;
  }
  getOperatorList({
    intent: t = "display",
    annotationMode: e = yi.ENABLE,
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
      return this.getXfa().then((s) => so.textContent(s));
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
    return this.objs.clear(), f(this, Ks, !1), y(this, Xe, ql).call(this), Promise.all(t);
  }
  cleanup(t = !1) {
    f(this, Ks, !0);
    const e = y(this, Xe, vr).call(this, !1);
    return t && e && this._stats && (this._stats = new Od()), e;
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
    t.lastChunk && y(this, Xe, vr).call(this, !0);
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
        done: p
      }) => {
        if (p) {
          h.streamReader = null;
          return;
        }
        this._transport.destroyed || (this._renderPageChunk(u, h), c());
      }, (u) => {
        if (h.streamReader = null, !this._transport.destroyed) {
          if (h.operatorList) {
            h.operatorList.lastChunk = !0;
            for (const p of h.renderTasks)
              p.operatorListChanged();
            y(this, Xe, vr).call(this, !0);
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
        if (e instanceof yd) {
          let i = bg;
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
      if (t.streamReader.cancel(new Ki(e.message)).catch(() => {
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
Fi = new WeakMap(), Ks = new WeakMap(), Xe = new WeakSet(), vr = function(t = !1) {
  if (y(this, Xe, ql).call(this), !r(this, Ks) || this.destroyed)
    return !1;
  if (t)
    return f(this, Fi, setTimeout(() => {
      f(this, Fi, null), y(this, Xe, vr).call(this, !1);
    }, yg)), !1;
  for (const {
    renderTasks: e,
    operatorList: s
  } of this._intentStates.values())
    if (e.size > 0 || !s.lastChunk)
      return !1;
  return this._intentStates.clear(), this.objs.clear(), f(this, Ks, !1), !0;
}, ql = function() {
  r(this, Fi) && (clearTimeout(r(this, Fi)), f(this, Fi, null));
};
var Qs, Mh;
class Tg {
  constructor() {
    b(this, Qs, /* @__PURE__ */ new Map());
    b(this, Mh, Promise.resolve());
  }
  postMessage(t, e) {
    const s = {
      data: structuredClone(t, e ? {
        transfer: e
      } : null)
    };
    r(this, Mh).then(() => {
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
        K("LoopbackPort - cannot use an `aborted` signal.");
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
Qs = new WeakMap(), Mh = new WeakMap();
var Lh, Fn, Nn, Zr, Yl, Jr, Kl;
const mt = class mt {
  constructor({
    name: t = null,
    port: e = null,
    verbosity: s = hf()
  } = {}) {
    b(this, Zr);
    var i;
    if (this.name = t, this.destroyed = !1, this.verbosity = s, this._readyCapability = Promise.withResolvers(), this._port = null, this._webWorker = null, this._messageHandler = null, e) {
      if ((i = r(mt, Nn)) != null && i.has(e))
        throw new Error("Cannot use more than one PDFWorker per port.");
      (r(mt, Nn) || f(mt, Nn, /* @__PURE__ */ new WeakMap())).set(e, this), this._initializeFromPort(e);
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
    this._port = t, this._messageHandler = new za("main", "worker", t), this._messageHandler.on("ready", function() {
    }), y(this, Zr, Yl).call(this);
  }
  _initialize() {
    if (r(mt, Fn) || r(mt, Jr, Kl)) {
      this._setupFakeWorker();
      return;
    }
    let {
      workerSrc: t
    } = mt;
    try {
      mt._isSameOrigin(window.location.href, t) || (t = mt._createCDNWrapper(new URL(t, window.location).href));
      const e = new Worker(t, {
        type: "module"
      }), s = new za("main", "worker", e), i = () => {
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
        this._messageHandler = s, this._port = e, this._webWorker = e, y(this, Zr, Yl).call(this);
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
      $h("The worker has been disabled.");
    }
    this._setupFakeWorker();
  }
  _setupFakeWorker() {
    r(mt, Fn) || (K("Setting up fake worker."), f(mt, Fn, !0)), mt._setupFakeWorkerGlobal.then((t) => {
      if (this.destroyed) {
        this._readyCapability.reject(new Error("Worker was destroyed"));
        return;
      }
      const e = new Tg();
      this._port = e;
      const s = `fake${ie(mt, Lh)._++}`, i = new za(s + "_worker", s, e);
      t.setup(i, e), this._messageHandler = new za(s, s + "_worker", e), y(this, Zr, Yl).call(this);
    }).catch((t) => {
      this._readyCapability.reject(new Error(`Setting up fake worker failed: "${t.message}".`));
    });
  }
  destroy() {
    var t, e, s;
    this.destroyed = !0, (t = this._webWorker) == null || t.terminate(), this._webWorker = null, (e = r(mt, Nn)) == null || e.delete(this._port), this._port = null, (s = this._messageHandler) == null || s.destroy(), this._messageHandler = null;
  }
  static fromPort(t) {
    var s;
    if (!(t != null && t.port))
      throw new Error("PDFWorker.fromPort - invalid method signature.");
    const e = (s = r(this, Nn)) == null ? void 0 : s.get(t.port);
    if (e) {
      if (e._pendingDestroy)
        throw new Error("PDFWorker.fromPort - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
      return e;
    }
    return new mt(t);
  }
  static get workerSrc() {
    if (di.workerSrc)
      return di.workerSrc;
    throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
  }
  static get _setupFakeWorkerGlobal() {
    return J(this, "_setupFakeWorkerGlobal", (async () => r(this, Jr, Kl) ? r(this, Jr, Kl) : (await import(
      /*webpackIgnore: true*/
      this.workerSrc
    )).WorkerMessageHandler)());
  }
};
Lh = new WeakMap(), Fn = new WeakMap(), Nn = new WeakMap(), Zr = new WeakSet(), Yl = function() {
  this._readyCapability.resolve(), this._messageHandler.send("configure", {
    verbosity: this.verbosity
  });
}, Jr = new WeakSet(), Kl = function() {
  var t;
  try {
    return ((t = globalThis.pdfjsWorker) == null ? void 0 : t.WorkerMessageHandler) || null;
  } catch {
    return null;
  }
}, b(mt, Jr), b(mt, Lh, 0), b(mt, Fn, !1), b(mt, Nn), se && (f(mt, Fn, !0), di.workerSrc || (di.workerSrc = "./pdf.worker.mjs")), mt._isSameOrigin = (t, e) => {
  let s;
  try {
    if (s = new URL(t), !s.origin || s.origin === "null")
      return !1;
  } catch {
    return !1;
  }
  const i = new URL(e, s);
  return s.origin === i.origin;
}, mt._createCDNWrapper = (t) => {
  const e = `await import("${t}");`;
  return URL.createObjectURL(new Blob([e], {
    type: "text/javascript"
  }));
};
let xr = mt;
var Zs, xs, ta, ea, Js, On, Va;
class Pg {
  constructor(t, e, s, i, n) {
    b(this, On);
    b(this, Zs, /* @__PURE__ */ new Map());
    b(this, xs, /* @__PURE__ */ new Map());
    b(this, ta, /* @__PURE__ */ new Map());
    b(this, ea, /* @__PURE__ */ new Map());
    b(this, Js, null);
    this.messageHandler = t, this.loadingTask = e, this.commonObjs = new ip(), this.fontLoader = new Tf({
      ownerDocument: i.ownerDocument,
      styleElement: i.styleElement
    }), this.loadingParams = i.loadingParams, this._params = i, this.canvasFactory = n.canvasFactory, this.filterFactory = n.filterFactory, this.cMapReaderFactory = n.cMapReaderFactory, this.standardFontDataFactory = n.standardFontDataFactory, this.destroyed = !1, this.destroyCapability = null, this._networkStream = s, this._fullReader = null, this._lastProgress = null, this.downloadInfoCapability = Promise.withResolvers(), this.setupMessageHandler();
  }
  get annotationStorage() {
    return J(this, "annotationStorage", new wd());
  }
  getRenderingIntent(t, e = yi.ENABLE, s = null, i = !1, n = !1) {
    let a = De.DISPLAY, o = Ec;
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
        K(`getRenderingIntent - invalid intent: ${t}`);
    }
    const l = a & De.PRINT && s instanceof Du ? s : this.annotationStorage;
    switch (e) {
      case yi.DISABLE:
        a += De.ANNOTATIONS_DISABLE;
        break;
      case yi.ENABLE:
        break;
      case yi.ENABLE_FORMS:
        a += De.ANNOTATIONS_FORMS;
        break;
      case yi.ENABLE_STORAGE:
        a += De.ANNOTATIONS_STORAGE, o = l.serializable;
        break;
      default:
        K(`getRenderingIntent - invalid annotationMode: ${e}`);
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
    for (const i of r(this, xs).values())
      t.push(i._destroy());
    r(this, xs).clear(), r(this, ta).clear(), r(this, ea).clear(), this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
    const e = this.messageHandler.sendWithPromise("Terminate", null);
    return t.push(e), Promise.all(t).then(() => {
      var i, n;
      this.commonObjs.clear(), this.fontLoader.clear(), r(this, Zs).clear(), this.filterFactory.destroy(), eo.cleanup(), (i = this._networkStream) == null || i.cancelAllRequests(new Ki("Worker was terminated.")), (n = this.messageHandler) == null || n.destroy(), this.messageHandler = null, this.destroyCapability.resolve();
    }, this.destroyCapability.reject), this.destroyCapability.promise;
  }
  setupMessageHandler() {
    const {
      messageHandler: t,
      loadingTask: e
    } = this;
    t.on("GetReader", (s, i) => {
      kt(this._networkStream, "GetReader - no `IPDFStream` instance available."), this._fullReader = this._networkStream.getFullReader(), this._fullReader.onProgress = (n) => {
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
          kt(n instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer."), i.enqueue(new Uint8Array(n), 1, [n]);
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
      kt(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
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
          kt(a instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer."), i.enqueue(new Uint8Array(a), 1, [a]);
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
      this._numPages = s.numPages, this._htmlForXfa = s.htmlForXfa, delete s.htmlForXfa, e._capability.resolve(new xg(s, this));
    }), t.on("DocException", (s) => {
      e._capability.reject(fe(s));
    }), t.on("PasswordRequest", (s) => {
      f(this, Js, Promise.withResolvers());
      try {
        if (!e.onPassword)
          throw fe(s);
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
      r(this, xs).get(s.pageIndex)._startRenderPage(s.transparency, s.cacheKey);
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
            K(`Error during font loading: ${g}`), this.commonObjs.resolve(s, g);
            break;
          }
          const c = h && ((a = globalThis.FontInspector) != null && a.enabled) ? (g, m) => globalThis.FontInspector.fontAdded(g, m) : null, u = new Pf(n, {
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
            imageRef: p
          } = n;
          kt(p, "The imageRef must be defined.");
          for (const g of r(this, xs).values())
            for (const [, m] of g.objs)
              if ((m == null ? void 0 : m.ref) === p)
                return m.dataLen ? (this.commonObjs.resolve(s, structuredClone(m)), m.dataLen) : null;
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
      const o = r(this, xs).get(i);
      if (!o.objs.has(s)) {
        if (o._intentStates.size === 0) {
          (l = a == null ? void 0 : a.bitmap) == null || l.close();
          return;
        }
        switch (n) {
          case "Image":
            o.objs.resolve(s, a), (a == null ? void 0 : a.dataLen) > nf && (o._maybeCleanupAfterRender = !0);
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
    this.annotationStorage.size <= 0 && K("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
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
    const e = t - 1, s = r(this, ta).get(e);
    if (s)
      return s;
    const i = this.messageHandler.sendWithPromise("GetPage", {
      pageIndex: e
    }).then((n) => {
      if (this.destroyed)
        throw new Error("Transport destroyed");
      n.refStr && r(this, ea).set(n.refStr, t);
      const a = new kg(e, n, this, this._params.pdfBug);
      return r(this, xs).set(e, a), a;
    });
    return r(this, ta).set(e, i), i;
  }
  getPageIndex(t) {
    return Qd(t) ? this.messageHandler.sendWithPromise("GetPageIndex", {
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
    return y(this, On, Va).call(this, "GetFieldObjects");
  }
  hasJSActions() {
    return y(this, On, Va).call(this, "HasJSActions");
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
    return y(this, On, Va).call(this, "GetDocJSActions");
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
    return y(this, On, Va).call(this, "GetOptionalContentConfig").then((e) => new Qf(e, t));
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
        metadata: i[1] ? new Yf(i[1]) : null,
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
      for (const e of r(this, xs).values())
        if (!e.cleanup())
          throw new Error(`startCleanup: Page ${e.pageNumber} is currently rendering.`);
      this.commonObjs.clear(), t || this.fontLoader.clear(), r(this, Zs).clear(), this.filterFactory.destroy(!0), eo.cleanup();
    }
  }
  cachedPageNumber(t) {
    if (!Qd(t))
      return null;
    const e = t.gen === 0 ? `${t.num}R` : `${t.num}R${t.gen}`;
    return r(this, ea).get(e) ?? null;
  }
}
Zs = new WeakMap(), xs = new WeakMap(), ta = new WeakMap(), ea = new WeakMap(), Js = new WeakMap(), On = new WeakSet(), Va = function(t, e = null) {
  const s = r(this, Zs).get(t);
  if (s)
    return s;
  const i = this.messageHandler.sendWithPromise(t, e);
  return r(this, Zs).set(t, i), i;
};
const Da = Symbol("INITIAL_DATA");
var Ce, Xo, Nc;
class ip {
  constructor() {
    b(this, Xo);
    b(this, Ce, /* @__PURE__ */ Object.create(null));
  }
  get(t, e = null) {
    if (e) {
      const i = y(this, Xo, Nc).call(this, t);
      return i.promise.then(() => e(i.data)), null;
    }
    const s = r(this, Ce)[t];
    if (!s || s.data === Da)
      throw new Error(`Requesting object that isn't resolved yet ${t}.`);
    return s.data;
  }
  has(t) {
    const e = r(this, Ce)[t];
    return !!e && e.data !== Da;
  }
  delete(t) {
    const e = r(this, Ce)[t];
    return !e || e.data === Da ? !1 : (delete r(this, Ce)[t], !0);
  }
  resolve(t, e = null) {
    const s = y(this, Xo, Nc).call(this, t);
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
    f(this, Ce, /* @__PURE__ */ Object.create(null));
  }
  *[Symbol.iterator]() {
    for (const t in r(this, Ce)) {
      const {
        data: e
      } = r(this, Ce)[t];
      e !== Da && (yield [t, e]);
    }
  }
}
Ce = new WeakMap(), Xo = new WeakSet(), Nc = function(t) {
  var e;
  return (e = r(this, Ce))[t] || (e[t] = {
    ...Promise.withResolvers(),
    data: Da
  });
};
var Ni;
class Mg {
  constructor(t) {
    b(this, Ni, null);
    f(this, Ni, t), this.onContinue = null;
  }
  get promise() {
    return r(this, Ni).capability.promise;
  }
  cancel(t = 0) {
    r(this, Ni).cancel(null, t);
  }
  get separateAnnots() {
    const {
      separateAnnots: t
    } = r(this, Ni).operatorList;
    if (!t)
      return !1;
    const {
      annotationCanvasMap: e
    } = r(this, Ni);
    return t.form || t.canvas && (e == null ? void 0 : e.size) > 0;
  }
}
Ni = new WeakMap();
var Oi, Bn;
const rn = class rn {
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
    pageColors: p = null
  }) {
    b(this, Oi, null);
    this.callback = t, this.params = e, this.objs = s, this.commonObjs = i, this.annotationCanvasMap = n, this.operatorListIdx = null, this.operatorList = a, this._pageIndex = o, this.canvasFactory = l, this.filterFactory = h, this._pdfBug = u, this.pageColors = p, this.running = !1, this.graphicsReadyCallback = null, this.graphicsReady = !1, this._useRequestAnimationFrame = c === !0 && typeof window < "u", this.cancelled = !1, this.capability = Promise.withResolvers(), this.task = new Mg(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = e.canvasContext.canvas;
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
      if (r(rn, Bn).has(this._canvas))
        throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
      r(rn, Bn).add(this._canvas);
    }
    this._pdfBug && ((o = globalThis.StepperManager) != null && o.enabled) && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
    const {
      canvasContext: s,
      viewport: i,
      transform: n,
      background: a
    } = this.params;
    this.gfx = new Cr(s, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
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
    this.running = !1, this.cancelled = !0, (s = this.gfx) == null || s.endDrawing(), r(this, Oi) && (window.cancelAnimationFrame(r(this, Oi)), f(this, Oi, null)), r(rn, Bn).delete(this._canvas), this.callback(t || new yd(`Rendering cancelled, page ${this._pageIndex + 1}`, e));
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
    this._useRequestAnimationFrame ? f(this, Oi, window.requestAnimationFrame(() => {
      f(this, Oi, null), this._nextBound().catch(this._cancelBound);
    })) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
  }
  async _next() {
    this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1, this.operatorList.lastChunk && (this.gfx.endDrawing(), r(rn, Bn).delete(this._canvas), this.callback())));
  }
};
Oi = new WeakMap(), Bn = new WeakMap(), b(rn, Bn, /* @__PURE__ */ new WeakSet());
let Oc = rn;
const Lg = "4.10.38", Rg = "f9bea397f";
function Zd(d) {
  return Math.floor(Math.max(0, Math.min(1, d)) * 255).toString(16).padStart(2, "0");
}
function Fa(d) {
  return Math.max(0, Math.min(255, 255 * d));
}
class Jd {
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
    return t = Fa(t), [t, t, t];
  }
  static G_HTML([t]) {
    const e = Zd(t);
    return `#${e}${e}${e}`;
  }
  static RGB_G([t, e, s]) {
    return ["G", 0.3 * t + 0.59 * e + 0.11 * s];
  }
  static RGB_rgb(t) {
    return t.map(Fa);
  }
  static RGB_HTML(t) {
    return `#${t.map(Zd).join("")}`;
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
    return [Fa(1 - Math.min(1, t + i)), Fa(1 - Math.min(1, s + i)), Fa(1 - Math.min(1, e + i))];
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
class Ig {
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
class Ed extends Ig {
  _createSVG(t) {
    return document.createElementNS(Fs, t);
  }
}
class np {
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
    var u, p;
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
        a.append(g), o && so.shouldBuildText(i.name) && h.push(g);
      }
      return {
        textDivs: h
      };
    }
    const c = [[i, -1, a]];
    for (; c.length > 0; ) {
      const [g, m, A] = c.at(-1);
      if (m + 1 === g.children.length) {
        c.pop();
        continue;
      }
      const _ = g.children[++c.at(-1)[1]];
      if (_ === null)
        continue;
      const {
        name: v
      } = _;
      if (v === "#text") {
        const E = document.createTextNode(_.value);
        h.push(E), A.append(E);
        continue;
      }
      const w = (u = _ == null ? void 0 : _.attributes) != null && u.xmlns ? document.createElementNS(_.attributes.xmlns, v) : document.createElement(v);
      if (A.append(w), _.attributes && this.setAttributes({
        html: w,
        element: _,
        storage: e,
        intent: n,
        linkService: s
      }), ((p = _.children) == null ? void 0 : p.length) > 0)
        c.push([_, -1, w]);
      else if (_.value) {
        const E = document.createTextNode(_.value);
        o && so.shouldBuildText(v) && h.push(E), w.append(E);
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
const Ll = 1e3, Dg = 9, ur = /* @__PURE__ */ new WeakSet();
function Yi(d) {
  return {
    width: d[2] - d[0],
    height: d[3] - d[1]
  };
}
class Fg {
  static create(t) {
    switch (t.data.annotationType) {
      case Mt.LINK:
        return new rp(t);
      case Mt.TEXT:
        return new Ng(t);
      case Mt.WIDGET:
        switch (t.data.fieldType) {
          case "Tx":
            return new Og(t);
          case "Btn":
            return t.data.radioButton ? new lp(t) : t.data.checkBox ? new Hg(t) : new zg(t);
          case "Ch":
            return new $g(t);
          case "Sig":
            return new Bg(t);
        }
        return new fr(t);
      case Mt.POPUP:
        return new Hc(t);
      case Mt.FREETEXT:
        return new pp(t);
      case Mt.LINE:
        return new Ug(t);
      case Mt.SQUARE:
        return new jg(t);
      case Mt.CIRCLE:
        return new Vg(t);
      case Mt.POLYLINE:
        return new fp(t);
      case Mt.CARET:
        return new Xg(t);
      case Mt.INK:
        return new Cd(t);
      case Mt.POLYGON:
        return new Wg(t);
      case Mt.HIGHLIGHT:
        return new gp(t);
      case Mt.UNDERLINE:
        return new qg(t);
      case Mt.SQUIGGLY:
        return new Yg(t);
      case Mt.STRIKEOUT:
        return new Kg(t);
      case Mt.STAMP:
        return new mp(t);
      case Mt.FILEATTACHMENT:
        return new Qg(t);
      default:
        return new Ct(t);
    }
  }
}
var Hn, sa, ia, qo, Bc;
const Md = class Md {
  constructor(t, {
    isRenderable: e = !1,
    ignoreBorder: s = !1,
    createQuadrilaterals: i = !1
  } = {}) {
    b(this, qo);
    b(this, Hn, null);
    b(this, sa, !1);
    b(this, ia, null);
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
    return Md._hasPopupData(this.data);
  }
  updateEdited(t) {
    var s;
    if (!this.container)
      return;
    r(this, Hn) || f(this, Hn, {
      rect: this.data.rect.slice(0)
    });
    const {
      rect: e
    } = t;
    e && y(this, qo, Bc).call(this, e), (s = r(this, ia)) == null || s.popup.updateEdited(t);
  }
  resetEdited() {
    var t;
    r(this, Hn) && (y(this, qo, Bc).call(this, r(this, Hn).rect), (t = r(this, ia)) == null || t.popup.resetEdited(), f(this, Hn, null));
  }
  _createContainer(t) {
    const {
      data: e,
      parent: {
        page: s,
        viewport: i
      }
    } = this, n = document.createElement("section");
    n.setAttribute("data-annotation-id", e.id), this instanceof fr || (n.tabIndex = Ll);
    const {
      style: a
    } = n;
    if (a.zIndex = this.parent.zIndex++, e.alternativeText && (n.title = e.alternativeText), e.noRotate && n.classList.add("norotate"), !e.rect || this instanceof Hc) {
      const {
        rotation: A
      } = e;
      return !e.hasOwnCanvas && A !== 0 && this.setRotation(A, n), n;
    }
    const {
      width: o,
      height: l
    } = Yi(e.rect);
    if (!t && e.borderStyle.width > 0) {
      a.borderWidth = `${e.borderStyle.width}px`;
      const A = e.borderStyle.horizontalCornerRadius, _ = e.borderStyle.verticalCornerRadius;
      if (A > 0 || _ > 0) {
        const w = `calc(${A}px * var(--scale-factor)) / calc(${_}px * var(--scale-factor))`;
        a.borderRadius = w;
      } else if (this instanceof lp) {
        const w = `calc(${o}px * var(--scale-factor)) / calc(${l}px * var(--scale-factor))`;
        a.borderRadius = w;
      }
      switch (e.borderStyle.style) {
        case Ra.SOLID:
          a.borderStyle = "solid";
          break;
        case Ra.DASHED:
          a.borderStyle = "dashed";
          break;
        case Ra.BEVELED:
          K("Unimplemented border style: beveled");
          break;
        case Ra.INSET:
          K("Unimplemented border style: inset");
          break;
        case Ra.UNDERLINE:
          a.borderBottomStyle = "solid";
          break;
      }
      const v = e.borderColor || null;
      v ? (f(this, sa, !0), a.borderColor = H.makeHexColor(v[0] | 0, v[1] | 0, v[2] | 0)) : a.borderWidth = 0;
    }
    const h = H.normalizeRect([e.rect[0], s.view[3] - e.rect[1] + s.view[1], e.rect[2], s.view[3] - e.rect[3] + s.view[1]]), {
      pageWidth: c,
      pageHeight: u,
      pageX: p,
      pageY: g
    } = i.rawDims;
    a.left = `${100 * (h[0] - p) / c}%`, a.top = `${100 * (h[1] - g) / u}%`;
    const {
      rotation: m
    } = e;
    return e.hasOwnCanvas || m === 0 ? (a.width = `${100 * o / c}%`, a.height = `${100 * l / u}%`) : this.setRotation(m, n), n;
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
    } = Yi(this.data.rect);
    let o, l;
    t % 180 === 0 ? (o = 100 * n / s, l = 100 * a / i) : (o = 100 * a / s, l = 100 * n / i), e.style.width = `${o}%`, e.style.height = `${l}%`, e.setAttribute("data-main-rotation", (360 - t) % 360);
  }
  get _commonActions() {
    const t = (e, s, i) => {
      const n = i.detail[e], a = n[0], o = n.slice(1);
      i.target.style[s] = Jd[`${a}_HTML`](o), this.annotationStorage.setValue(this.data.id, {
        [s]: Jd[`${a}_rgb`](o)
      });
    };
    return J(this, "_commonActions", {
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
    const [e, s, i, n] = this.data.rect.map((A) => Math.fround(A));
    if (t.length === 8) {
      const [A, _, v, w] = t.subarray(2, 6);
      if (i === A && n === _ && e === v && s === w)
        return;
    }
    const {
      style: a
    } = this.container;
    let o;
    if (r(this, sa)) {
      const {
        borderColor: A,
        borderWidth: _
      } = a;
      a.borderWidth = 0, o = ["url('data:image/svg+xml;utf8,", '<svg xmlns="http://www.w3.org/2000/svg"', ' preserveAspectRatio="none" viewBox="0 0 1 1">', `<g fill="transparent" stroke="${A}" stroke-width="${_}">`], this.container.classList.add("hasBorder");
    }
    const l = i - e, h = n - s, {
      svgFactory: c
    } = this, u = c.createElement("svg");
    u.classList.add("quadrilateralsContainer"), u.setAttribute("width", 0), u.setAttribute("height", 0);
    const p = c.createElement("defs");
    u.append(p);
    const g = c.createElement("clipPath"), m = `clippath_${this.data.id}`;
    g.setAttribute("id", m), g.setAttribute("clipPathUnits", "objectBoundingBox"), p.append(g);
    for (let A = 2, _ = t.length; A < _; A += 8) {
      const v = t[A], w = t[A + 1], E = t[A + 2], S = t[A + 3], C = c.createElement("rect"), k = (E - e) / l, x = (n - w) / h, T = (v - E) / l, M = (w - S) / h;
      C.setAttribute("x", k), C.setAttribute("y", x), C.setAttribute("width", T), C.setAttribute("height", M), g.append(C), o == null || o.push(`<rect vector-effect="non-scaling-stroke" x="${k}" y="${x}" width="${T}" height="${M}"/>`);
    }
    r(this, sa) && (o.push("</g></svg>')"), a.backgroundImage = o.join("")), this.container.append(u), this.container.style.clipPath = `url(#${m})`;
  }
  _createPopup() {
    const {
      data: t
    } = this, e = f(this, ia, new Hc({
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
          if (h && !ur.has(h)) {
            K(`_getElementsByName - element not allowed: ${a}`);
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
      a !== e && ur.has(i) && s.push({
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
Hn = new WeakMap(), sa = new WeakMap(), ia = new WeakMap(), qo = new WeakSet(), Bc = function(t) {
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
  } = Yi(t);
  e.left = `${100 * (t[0] - o) / n}%`, e.top = `${100 * (a - t[3] + l) / a}%`, i === 0 ? (e.width = `${100 * h / n}%`, e.height = `${100 * c / a}%`) : this.setRotation(i);
};
let Ct = Md;
var Fe, tn, ap, op;
class rp extends Ct {
  constructor(e, s = null) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !!(s != null && s.ignoreBorder),
      createQuadrilaterals: !0
    });
    b(this, Fe);
    this.isTooltipOnly = e.data.isTooltipOnly;
  }
  render() {
    const {
      data: e,
      linkService: s
    } = this, i = document.createElement("a");
    i.setAttribute("data-element-id", e.id);
    let n = !1;
    return e.url ? (s.addLinkAttributes(i, e.url, e.newWindow), n = !0) : e.action ? (this._bindNamedAction(i, e.action), n = !0) : e.attachment ? (y(this, Fe, ap).call(this, i, e.attachment, e.attachmentDest), n = !0) : e.setOCGState ? (y(this, Fe, op).call(this, i, e.setOCGState), n = !0) : e.dest ? (this._bindLink(i, e.dest), n = !0) : (e.actions && (e.actions.Action || e.actions["Mouse Up"] || e.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions && (this._bindJSAction(i, e), n = !0), e.resetForm ? (this._bindResetFormAction(i, e.resetForm), n = !0) : this.isTooltipOnly && !n && (this._bindLink(i, ""), n = !0)), this.container.classList.add("linkAnnotation"), n && this.container.append(i), this.container;
  }
  _bindLink(e, s) {
    e.href = this.linkService.getDestinationHash(s), e.onclick = () => (s && this.linkService.goToDestination(s), !1), (s || s === "") && y(this, Fe, tn).call(this);
  }
  _bindNamedAction(e, s) {
    e.href = this.linkService.getAnchorUrl(""), e.onclick = () => (this.linkService.executeNamedAction(s), !1), y(this, Fe, tn).call(this);
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
    e.onclick || (e.onclick = () => !1), y(this, Fe, tn).call(this);
  }
  _bindResetFormAction(e, s) {
    const i = e.onclick;
    if (i || (e.href = this.linkService.getAnchorUrl("")), y(this, Fe, tn).call(this), !this._fieldObjects) {
      K('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), i || (e.onclick = () => !1);
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
        const p = new Set(a);
        for (const g of n) {
          const m = this._fieldObjects[g] || [];
          for (const {
            id: A
          } of m)
            p.add(A);
        }
        for (const g of Object.values(this._fieldObjects))
          for (const m of g)
            p.has(m.id) === o && l.push(m);
      } else
        for (const p of Object.values(this._fieldObjects))
          l.push(...p);
      const h = this.annotationStorage, c = [];
      for (const p of l) {
        const {
          id: g
        } = p;
        switch (c.push(g), p.type) {
          case "text": {
            const A = p.defaultValue || "";
            h.setValue(g, {
              value: A
            });
            break;
          }
          case "checkbox":
          case "radiobutton": {
            const A = p.defaultValue === p.exportValues;
            h.setValue(g, {
              value: A
            });
            break;
          }
          case "combobox":
          case "listbox": {
            const A = p.defaultValue || "";
            h.setValue(g, {
              value: A
            });
            break;
          }
          default:
            continue;
        }
        const m = document.querySelector(`[data-element-id="${g}"]`);
        if (m) {
          if (!ur.has(m)) {
            K(`_bindResetFormAction - element not allowed: ${g}`);
            continue;
          }
        } else continue;
        m.dispatchEvent(new Event("resetform"));
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
Fe = new WeakSet(), tn = function() {
  this.container.setAttribute("data-internal-link", "");
}, ap = function(e, s, i = null) {
  e.href = this.linkService.getAnchorUrl(""), s.description && (e.title = s.description), e.onclick = () => {
    var n;
    return (n = this.downloadManager) == null || n.openOrDownloadData(s.content, s.filename, i), !1;
  }, y(this, Fe, tn).call(this);
}, op = function(e, s) {
  e.href = this.linkService.getAnchorUrl(""), e.onclick = () => (this.linkService.executeSetOCGState(s), !1), y(this, Fe, tn).call(this);
};
class Ng extends Ct {
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
    return he.platform.isMac ? t.metaKey : t.ctrlKey;
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
    } = this.data.defaultAppearanceData, i = this.data.defaultAppearanceData.fontSize || Dg, n = t.style;
    let a;
    const o = 2, l = (h) => Math.round(10 * h) / 10;
    if (this.data.multiLine) {
      const h = Math.abs(this.data.rect[3] - this.data.rect[1] - o), c = Math.round(h / (qh * i)) || 1, u = h / c;
      a = Math.min(i, l(u / qh));
    } else {
      const h = Math.abs(this.data.rect[3] - this.data.rect[1] - o);
      a = Math.min(i, l(h / qh));
    }
    n.fontSize = `calc(${a}px * var(--scale-factor))`, n.color = H.makeHexColor(s[0], s[1], s[2]), this.data.textAlignment !== null && (n.textAlign = e[this.data.textAlignment]);
  }
  _setRequired(t, e) {
    e ? t.setAttribute("required", !0) : t.removeAttribute("required"), t.setAttribute("aria-required", e);
  }
}
class Og extends fr {
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
      this.data.multiLine ? (s = document.createElement("textarea"), s.textContent = h ?? o, this.data.doNotScroll && (s.style.overflowY = "hidden")) : (s = document.createElement("input"), s.type = "text", s.setAttribute("value", h ?? o), this.data.doNotScroll && (s.style.overflowX = "hidden")), this.data.hasOwnCanvas && (s.hidden = !0), ur.add(s), s.setAttribute("data-element-id", e), s.disabled = this.data.readOnly, s.name = this.data.fieldName, s.tabIndex = Ll, this._setRequired(s, this.data.required), l && (s.maxLength = l), s.addEventListener("input", (p) => {
        t.setValue(e, {
          value: p.target.value
        }), this.setPropertyOnSiblings(s, "value", p.target.value, "value"), c.formattedValue = null;
      }), s.addEventListener("resetform", (p) => {
        const g = this.data.defaultFieldValue ?? "";
        s.value = c.userValue = g, c.formattedValue = null;
      });
      let u = (p) => {
        const {
          formattedValue: g
        } = c;
        g != null && (p.target.value = g), p.target.scrollLeft = 0;
      };
      if (this.enableScripting && this.hasJSActions) {
        s.addEventListener("focus", (g) => {
          var A;
          if (c.focused)
            return;
          const {
            target: m
          } = g;
          c.userValue && (m.value = c.userValue), c.lastCommittedValue = m.value, c.commitKey = 1, (A = this.data.actions) != null && A.Focus || (c.focused = !0);
        }), s.addEventListener("updatefromsandbox", (g) => {
          this.showElementAndHideCanvas(g.target);
          const m = {
            value(A) {
              c.userValue = A.detail.value ?? "", t.setValue(e, {
                value: c.userValue.toString()
              }), A.target.value = c.userValue;
            },
            formattedValue(A) {
              const {
                formattedValue: _
              } = A.detail;
              c.formattedValue = _, _ != null && A.target !== document.activeElement && (A.target.value = _), t.setValue(e, {
                formattedValue: _
              });
            },
            selRange(A) {
              A.target.setSelectionRange(...A.detail.selRange);
            },
            charLimit: (A) => {
              var E;
              const {
                charLimit: _
              } = A.detail, {
                target: v
              } = A;
              if (_ === 0) {
                v.removeAttribute("maxLength");
                return;
              }
              v.setAttribute("maxLength", _);
              let w = c.userValue;
              !w || w.length <= _ || (w = w.slice(0, _), v.value = c.userValue = w, t.setValue(e, {
                value: w
              }), (E = this.linkService.eventBus) == null || E.dispatch("dispatcheventinsandbox", {
                source: this,
                detail: {
                  id: e,
                  name: "Keystroke",
                  value: w,
                  willCommit: !0,
                  commitKey: 1,
                  selStart: v.selectionStart,
                  selEnd: v.selectionEnd
                }
              }));
            }
          };
          this._dispatchEventFromSandbox(m, g);
        }), s.addEventListener("keydown", (g) => {
          var _;
          c.commitKey = 1;
          let m = -1;
          if (g.key === "Escape" ? m = 0 : g.key === "Enter" && !this.data.multiLine ? m = 2 : g.key === "Tab" && (c.commitKey = 3), m === -1)
            return;
          const {
            value: A
          } = g.target;
          c.lastCommittedValue !== A && (c.lastCommittedValue = A, c.userValue = A, (_ = this.linkService.eventBus) == null || _.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: A,
              willCommit: !0,
              commitKey: m,
              selStart: g.target.selectionStart,
              selEnd: g.target.selectionEnd
            }
          }));
        });
        const p = u;
        u = null, s.addEventListener("blur", (g) => {
          var A, _;
          if (!c.focused || !g.relatedTarget)
            return;
          (A = this.data.actions) != null && A.Blur || (c.focused = !1);
          const {
            value: m
          } = g.target;
          c.userValue = m, c.lastCommittedValue !== m && ((_ = this.linkService.eventBus) == null || _.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: m,
              willCommit: !0,
              commitKey: c.commitKey,
              selStart: g.target.selectionStart,
              selEnd: g.target.selectionEnd
            }
          })), p(g);
        }), (n = this.data.actions) != null && n.Keystroke && s.addEventListener("beforeinput", (g) => {
          var C;
          c.lastCommittedValue = null;
          const {
            data: m,
            target: A
          } = g, {
            value: _,
            selectionStart: v,
            selectionEnd: w
          } = A;
          let E = v, S = w;
          switch (g.inputType) {
            case "deleteWordBackward": {
              const k = _.substring(0, v).match(/\w*[^\w]*$/);
              k && (E -= k[0].length);
              break;
            }
            case "deleteWordForward": {
              const k = _.substring(v).match(/^[^\w]*\w*/);
              k && (S += k[0].length);
              break;
            }
            case "deleteContentBackward":
              v === w && (E -= 1);
              break;
            case "deleteContentForward":
              v === w && (S += 1);
              break;
          }
          g.preventDefault(), (C = this.linkService.eventBus) == null || C.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: _,
              change: m || "",
              willCommit: !1,
              selStart: E,
              selEnd: S
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
class Bg extends fr {
  constructor(t) {
    super(t, {
      isRenderable: !!t.data.hasOwnCanvas
    });
  }
}
class Hg extends fr {
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
    return ur.add(n), n.setAttribute("data-element-id", s), n.disabled = e.readOnly, this._setRequired(n, this.data.required), n.type = "checkbox", n.name = e.fieldName, i && n.setAttribute("checked", !0), n.setAttribute("exportValue", e.exportValue), n.tabIndex = Ll, n.addEventListener("change", (a) => {
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
class lp extends fr {
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
    if (ur.add(n), n.setAttribute("data-element-id", s), n.disabled = e.readOnly, this._setRequired(n, this.data.required), n.type = "radio", n.name = e.fieldName, i && n.setAttribute("checked", !0), n.tabIndex = Ll, n.addEventListener("change", (a) => {
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
              const p = c && u.id === s;
              u.domElement && (u.domElement.checked = p), t.setValue(u.id, {
                value: p
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
class zg extends rp {
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
class $g extends fr {
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
    ur.add(i), i.setAttribute("data-element-id", e), i.disabled = this.data.readOnly, this._setRequired(i, this.data.required), i.name = this.data.fieldName, i.tabIndex = Ll;
    let n = this.data.combo && this.data.options.length > 0;
    this.data.combo || (i.size = this.data.options.length, this.data.multiSelect && (i.multiple = !0)), i.addEventListener("resetform", (c) => {
      const u = this.data.defaultFieldValue;
      for (const p of i.options)
        p.selected = p.value === u;
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
        options: p,
        multiple: g
      } = i;
      return g ? Array.prototype.filter.call(p, (m) => m.selected).map((m) => m[u]) : p.selectedIndex === -1 ? null : p[p.selectedIndex][u];
    };
    let l = o(!1);
    const h = (c) => {
      const u = c.target.options;
      return Array.prototype.map.call(u, (p) => ({
        displayValue: p.textContent,
        exportValue: p.value
      }));
    };
    return this.enableScripting && this.hasJSActions ? (i.addEventListener("updatefromsandbox", (c) => {
      const u = {
        value(p) {
          a == null || a();
          const g = p.detail.value, m = new Set(Array.isArray(g) ? g : [g]);
          for (const A of i.options)
            A.selected = m.has(A.value);
          t.setValue(e, {
            value: o(!0)
          }), l = o(!1);
        },
        multipleSelection(p) {
          i.multiple = !0;
        },
        remove(p) {
          const g = i.options, m = p.detail.remove;
          g[m].selected = !1, i.remove(m), g.length > 0 && Array.prototype.findIndex.call(g, (_) => _.selected) === -1 && (g[0].selected = !0), t.setValue(e, {
            value: o(!0),
            items: h(p)
          }), l = o(!1);
        },
        clear(p) {
          for (; i.length !== 0; )
            i.remove(0);
          t.setValue(e, {
            value: null,
            items: []
          }), l = o(!1);
        },
        insert(p) {
          const {
            index: g,
            displayValue: m,
            exportValue: A
          } = p.detail.insert, _ = i.children[g], v = document.createElement("option");
          v.textContent = m, v.value = A, _ ? _.before(v) : i.append(v), t.setValue(e, {
            value: o(!0),
            items: h(p)
          }), l = o(!1);
        },
        items(p) {
          const {
            items: g
          } = p.detail;
          for (; i.length !== 0; )
            i.remove(0);
          for (const m of g) {
            const {
              displayValue: A,
              exportValue: _
            } = m, v = document.createElement("option");
            v.textContent = A, v.value = _, i.append(v);
          }
          i.options.length > 0 && (i.options[0].selected = !0), t.setValue(e, {
            value: o(!0),
            items: h(p)
          }), l = o(!1);
        },
        indices(p) {
          const g = new Set(p.detail.indices);
          for (const m of p.target.options)
            m.selected = g.has(m.index);
          t.setValue(e, {
            value: o(!0)
          }), l = o(!1);
        },
        editable(p) {
          p.target.disabled = !p.detail.editable;
        }
      };
      this._dispatchEventFromSandbox(u, c);
    }), i.addEventListener("input", (c) => {
      var g;
      const u = o(!0), p = o(!1);
      t.setValue(e, {
        value: u
      }), c.preventDefault(), (g = this.linkService.eventBus) == null || g.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: e,
          name: "Keystroke",
          value: l,
          change: p,
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
class Hc extends Ct {
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
    const t = this.popup = new Gg({
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
    return this.container.setAttribute("aria-controls", e.map((s) => `${bd}${s}`).join(",")), this.container;
  }
}
var na, Rh, Ih, ra, zn, wt, ti, aa, Yo, Ko, oa, ei, ss, si, Qo, ii, Zo, $n, Gn, ht, Ql, zc, hp, cp, dp, up, Zl, Jl, $c;
class Gg {
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
    b(this, ht);
    b(this, na, y(this, ht, dp).bind(this));
    b(this, Rh, y(this, ht, $c).bind(this));
    b(this, Ih, y(this, ht, Jl).bind(this));
    b(this, ra, y(this, ht, Zl).bind(this));
    b(this, zn, null);
    b(this, wt, null);
    b(this, ti, null);
    b(this, aa, null);
    b(this, Yo, null);
    b(this, Ko, null);
    b(this, oa, null);
    b(this, ei, !1);
    b(this, ss, null);
    b(this, si, null);
    b(this, Qo, null);
    b(this, ii, null);
    b(this, Zo, null);
    b(this, $n, null);
    b(this, Gn, !1);
    var p;
    f(this, wt, t), f(this, Zo, i), f(this, ti, a), f(this, ii, o), f(this, Ko, l), f(this, zn, e), f(this, Qo, h), f(this, oa, c), f(this, Yo, s), f(this, aa, vd.toDateObject(n)), this.trigger = s.flatMap((g) => g.getElementsToTriggerPopup());
    for (const g of this.trigger)
      g.addEventListener("click", r(this, ra)), g.addEventListener("mouseenter", r(this, Ih)), g.addEventListener("mouseleave", r(this, Rh)), g.classList.add("popupTriggerArea");
    for (const g of s)
      (p = g.container) == null || p.addEventListener("keydown", r(this, na));
    r(this, wt).hidden = !0, u && y(this, ht, Zl).call(this);
  }
  render() {
    if (r(this, ss))
      return;
    const t = f(this, ss, document.createElement("div"));
    if (t.className = "popup", r(this, zn)) {
      const n = t.style.outlineColor = H.makeHexColor(...r(this, zn));
      CSS.supports("background-color", "color-mix(in srgb, red 30%, white)") ? t.style.backgroundColor = `color-mix(in srgb, ${n} 30%, white)` : t.style.backgroundColor = H.makeHexColor(...r(this, zn).map((o) => Math.floor(0.7 * (255 - o) + o)));
    }
    const e = document.createElement("span");
    e.className = "header";
    const s = document.createElement("h1");
    if (e.append(s), {
      dir: s.dir,
      str: s.textContent
    } = r(this, Zo), t.append(e), r(this, aa)) {
      const n = document.createElement("span");
      n.classList.add("popupDate"), n.setAttribute("data-l10n-id", "pdfjs-annotation-date-time-string"), n.setAttribute("data-l10n-args", JSON.stringify({
        dateObj: r(this, aa).valueOf()
      })), e.append(n);
    }
    const i = r(this, ht, Ql);
    if (i)
      np.render({
        xfaHtml: i,
        intent: "richText",
        div: t
      }), t.lastChild.classList.add("richText", "popupContent");
    else {
      const n = this._formatContents(r(this, ti));
      t.append(n);
    }
    r(this, wt).append(t);
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
    r(this, $n) || f(this, $n, {
      contentsObj: r(this, ti),
      richText: r(this, ii)
    }), t && f(this, si, null), e && (f(this, ii, y(this, ht, cp).call(this, e)), f(this, ti, null)), (s = r(this, ss)) == null || s.remove(), f(this, ss, null);
  }
  resetEdited() {
    var t;
    r(this, $n) && ({
      contentsObj: ie(this, ti)._,
      richText: ie(this, ii)._
    } = r(this, $n), f(this, $n, null), (t = r(this, ss)) == null || t.remove(), f(this, ss, null), f(this, si, null));
  }
  forceHide() {
    f(this, Gn, this.isVisible), r(this, Gn) && (r(this, wt).hidden = !0);
  }
  maybeShow() {
    r(this, Gn) && (r(this, ss) || y(this, ht, Jl).call(this), f(this, Gn, !1), r(this, wt).hidden = !1);
  }
  get isVisible() {
    return r(this, wt).hidden === !1;
  }
}
na = new WeakMap(), Rh = new WeakMap(), Ih = new WeakMap(), ra = new WeakMap(), zn = new WeakMap(), wt = new WeakMap(), ti = new WeakMap(), aa = new WeakMap(), Yo = new WeakMap(), Ko = new WeakMap(), oa = new WeakMap(), ei = new WeakMap(), ss = new WeakMap(), si = new WeakMap(), Qo = new WeakMap(), ii = new WeakMap(), Zo = new WeakMap(), $n = new WeakMap(), Gn = new WeakMap(), ht = new WeakSet(), Ql = function() {
  const t = r(this, ii), e = r(this, ti);
  return t != null && t.str && (!(e != null && e.str) || e.str === t.str) && r(this, ii).html || null;
}, zc = function() {
  var t, e, s;
  return ((s = (e = (t = r(this, ht, Ql)) == null ? void 0 : t.attributes) == null ? void 0 : e.style) == null ? void 0 : s.fontSize) || 0;
}, hp = function() {
  var t, e, s;
  return ((s = (e = (t = r(this, ht, Ql)) == null ? void 0 : t.attributes) == null ? void 0 : e.style) == null ? void 0 : s.color) || null;
}, cp = function(t) {
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
      color: r(this, ht, hp),
      fontSize: r(this, ht, zc) ? `calc(${r(this, ht, zc)}px * var(--scale-factor))` : ""
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
}, dp = function(t) {
  t.altKey || t.shiftKey || t.ctrlKey || t.metaKey || (t.key === "Enter" || t.key === "Escape" && r(this, ei)) && y(this, ht, Zl).call(this);
}, up = function() {
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
  } = r(this, Ko);
  let a = !!r(this, oa), o = a ? r(this, oa) : r(this, Qo);
  for (const m of r(this, Yo))
    if (!o || H.intersect(m.data.rect, o) !== null) {
      o = m.data.rect, a = !0;
      break;
    }
  const l = H.normalizeRect([o[0], t[3] - o[1] + t[1], o[2], t[3] - o[3] + t[1]]), c = a ? o[2] - o[0] + 5 : 0, u = l[0] + c, p = l[1];
  f(this, si, [100 * (u - i) / e, 100 * (p - n) / s]);
  const {
    style: g
  } = r(this, wt);
  g.left = `${r(this, si)[0]}%`, g.top = `${r(this, si)[1]}%`;
}, Zl = function() {
  f(this, ei, !r(this, ei)), r(this, ei) ? (y(this, ht, Jl).call(this), r(this, wt).addEventListener("click", r(this, ra)), r(this, wt).addEventListener("keydown", r(this, na))) : (y(this, ht, $c).call(this), r(this, wt).removeEventListener("click", r(this, ra)), r(this, wt).removeEventListener("keydown", r(this, na)));
}, Jl = function() {
  r(this, ss) || this.render(), this.isVisible ? r(this, ei) && r(this, wt).classList.add("focused") : (y(this, ht, up).call(this), r(this, wt).hidden = !1, r(this, wt).style.zIndex = parseInt(r(this, wt).style.zIndex) + 1e3);
}, $c = function() {
  r(this, wt).classList.remove("focused"), !(r(this, ei) || !this.isVisible) && (r(this, wt).hidden = !0, r(this, wt).style.zIndex = parseInt(r(this, wt).style.zIndex) - 1e3);
};
class pp extends Ct {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    }), this.textContent = t.data.textContent, this.textPosition = t.data.textPosition, this.annotationEditorType = Y.FREETEXT;
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
var Jo;
class Ug extends Ct {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    b(this, Jo, null);
  }
  render() {
    this.container.classList.add("lineAnnotation");
    const e = this.data, {
      width: s,
      height: i
    } = Yi(e.rect), n = this.svgFactory.create(s, i, !0), a = f(this, Jo, this.svgFactory.createElement("svg:line"));
    return a.setAttribute("x1", e.rect[2] - e.lineCoordinates[0]), a.setAttribute("y1", e.rect[3] - e.lineCoordinates[1]), a.setAttribute("x2", e.rect[2] - e.lineCoordinates[2]), a.setAttribute("y2", e.rect[3] - e.lineCoordinates[3]), a.setAttribute("stroke-width", e.borderStyle.width || 1), a.setAttribute("stroke", "transparent"), a.setAttribute("fill", "transparent"), n.append(a), this.container.append(n), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
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
class jg extends Ct {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    b(this, tl, null);
  }
  render() {
    this.container.classList.add("squareAnnotation");
    const e = this.data, {
      width: s,
      height: i
    } = Yi(e.rect), n = this.svgFactory.create(s, i, !0), a = e.borderStyle.width, o = f(this, tl, this.svgFactory.createElement("svg:rect"));
    return o.setAttribute("x", a / 2), o.setAttribute("y", a / 2), o.setAttribute("width", s - a), o.setAttribute("height", i - a), o.setAttribute("stroke-width", a || 1), o.setAttribute("stroke", "transparent"), o.setAttribute("fill", "transparent"), n.append(o), this.container.append(n), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
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
class Vg extends Ct {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    b(this, el, null);
  }
  render() {
    this.container.classList.add("circleAnnotation");
    const e = this.data, {
      width: s,
      height: i
    } = Yi(e.rect), n = this.svgFactory.create(s, i, !0), a = e.borderStyle.width, o = f(this, el, this.svgFactory.createElement("svg:ellipse"));
    return o.setAttribute("cx", s / 2), o.setAttribute("cy", i / 2), o.setAttribute("rx", s / 2 - a / 2), o.setAttribute("ry", i / 2 - a / 2), o.setAttribute("stroke-width", a || 1), o.setAttribute("stroke", "transparent"), o.setAttribute("fill", "transparent"), n.append(o), this.container.append(n), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return r(this, el);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
el = new WeakMap();
var sl;
class fp extends Ct {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    b(this, sl, null);
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
    } = Yi(e), l = this.svgFactory.create(a, o, !0);
    let h = [];
    for (let u = 0, p = s.length; u < p; u += 2) {
      const g = s[u] - e[0], m = e[3] - s[u + 1];
      h.push(`${g},${m}`);
    }
    h = h.join(" ");
    const c = f(this, sl, this.svgFactory.createElement(this.svgElementName));
    return c.setAttribute("points", h), c.setAttribute("stroke-width", i.width || 1), c.setAttribute("stroke", "transparent"), c.setAttribute("fill", "transparent"), l.append(c), this.container.append(l), !n && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return r(this, sl);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
sl = new WeakMap();
class Wg extends fp {
  constructor(t) {
    super(t), this.containerClassName = "polygonAnnotation", this.svgElementName = "svg:polygon";
  }
}
class Xg extends Ct {
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
var il, Un, nl, Gc;
class Cd extends Ct {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    b(this, nl);
    b(this, il, null);
    b(this, Un, []);
    this.containerClassName = "inkAnnotation", this.svgElementName = "svg:polyline", this.annotationEditorType = this.data.it === "InkHighlight" ? Y.HIGHLIGHT : Y.INK;
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
    } = y(this, nl, Gc).call(this, s, e), c = this.svgFactory.create(l, h, !0), u = f(this, il, this.svgFactory.createElement("svg:g"));
    c.append(u), u.setAttribute("stroke-width", n.width || 1), u.setAttribute("stroke-linecap", "round"), u.setAttribute("stroke-linejoin", "round"), u.setAttribute("stroke-miterlimit", 10), u.setAttribute("stroke", "transparent"), u.setAttribute("fill", "transparent"), u.setAttribute("transform", o);
    for (let p = 0, g = i.length; p < g; p++) {
      const m = this.svgFactory.createElement(this.svgElementName);
      r(this, Un).push(m), m.setAttribute("points", i[p].join(",")), u.append(m);
    }
    return !a && this.hasPopupData && this._createPopup(), this.container.append(c), this._editOnDoubleClick(), this.container;
  }
  updateEdited(e) {
    super.updateEdited(e);
    const {
      thickness: s,
      points: i,
      rect: n
    } = e, a = r(this, il);
    if (s >= 0 && a.setAttribute("stroke-width", s || 1), i)
      for (let o = 0, l = r(this, Un).length; o < l; o++)
        r(this, Un)[o].setAttribute("points", i[o].join(","));
    if (n) {
      const {
        transform: o,
        width: l,
        height: h
      } = y(this, nl, Gc).call(this, this.data.rotation, n);
      a.parentElement.setAttribute("viewBox", `0 0 ${l} ${h}`), a.setAttribute("transform", o);
    }
  }
  getElementsToTriggerPopup() {
    return r(this, Un);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
il = new WeakMap(), Un = new WeakMap(), nl = new WeakSet(), Gc = function(e, s) {
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
class gp extends Ct {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    }), this.annotationEditorType = Y.HIGHLIGHT;
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("highlightAnnotation"), this._editOnDoubleClick(), this.container;
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
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("underlineAnnotation"), this.container;
  }
}
class Yg extends Ct {
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
class Kg extends Ct {
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
class mp extends Ct {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    }), this.annotationEditorType = Y.STAMP;
  }
  render() {
    return this.container.classList.add("stampAnnotation"), this.container.setAttribute("role", "img"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container;
  }
}
var rl, al, Uc;
class Qg extends Ct {
  constructor(e) {
    var i;
    super(e, {
      isRenderable: !0
    });
    b(this, al);
    b(this, rl, null);
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
    s.hasAppearance || s.fillAlpha === 0 ? i = document.createElement("div") : (i = document.createElement("img"), i.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(s.name) ? "paperclip" : "pushpin"}.svg`, s.fillAlpha && s.fillAlpha < 1 && (i.style = `filter: opacity(${Math.round(s.fillAlpha * 100)}%);`)), i.addEventListener("dblclick", y(this, al, Uc).bind(this)), f(this, rl, i);
    const {
      isMac: n
    } = he.platform;
    return e.addEventListener("keydown", (a) => {
      a.key === "Enter" && (n ? a.metaKey : a.ctrlKey) && y(this, al, Uc).call(this);
    }), !s.popupRef && this.hasPopupData ? this._createPopup() : i.classList.add("popupTriggerArea"), e.append(i), e;
  }
  getElementsToTriggerPopup() {
    return r(this, rl);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
rl = new WeakMap(), al = new WeakSet(), Uc = function() {
  var e;
  (e = this.downloadManager) == null || e.openOrDownloadData(this.content, this.filename);
};
var ol, jn, Vn, ll, pr, bp, jc;
class Zg {
  constructor({
    div: t,
    accessibilityManager: e,
    annotationCanvasMap: s,
    annotationEditorUIManager: i,
    page: n,
    viewport: a,
    structTreeLayer: o
  }) {
    b(this, pr);
    b(this, ol, null);
    b(this, jn, null);
    b(this, Vn, /* @__PURE__ */ new Map());
    b(this, ll, null);
    this.div = t, f(this, ol, e), f(this, jn, s), f(this, ll, o || null), this.page = n, this.viewport = a, this.zIndex = 0, this._annotationEditorUIManager = i;
  }
  hasEditableAnnotations() {
    return r(this, Vn).size > 0;
  }
  async render(t) {
    var a;
    const {
      annotations: e
    } = t, s = this.div;
    cr(s, this.viewport);
    const i = /* @__PURE__ */ new Map(), n = {
      data: null,
      layer: s,
      linkService: t.linkService,
      downloadManager: t.downloadManager,
      imageResourcesPath: t.imageResourcesPath || "",
      renderForms: t.renderForms !== !1,
      svgFactory: new Ed(),
      annotationStorage: t.annotationStorage || new wd(),
      enableScripting: t.enableScripting === !0,
      hasJSActions: t.hasJSActions,
      fieldObjects: t.fieldObjects,
      parent: this,
      elements: null
    };
    for (const o of e) {
      if (o.noHTML)
        continue;
      const l = o.annotationType === Mt.POPUP;
      if (l) {
        const u = i.get(o.id);
        if (!u)
          continue;
        n.elements = u;
      } else {
        const {
          width: u,
          height: p
        } = Yi(o.rect);
        if (u <= 0 || p <= 0)
          continue;
      }
      n.data = o;
      const h = Fg.create(n);
      if (!h.isRenderable)
        continue;
      if (!l && o.popupRef) {
        const u = i.get(o.popupRef);
        u ? u.push(h) : i.set(o.popupRef, [h]);
      }
      const c = h.render();
      o.hidden && (c.style.visibility = "hidden"), await y(this, pr, bp).call(this, c, o.id), h._isEditable && (r(this, Vn).set(h.data.id, h), (a = this._annotationEditorUIManager) == null || a.renderAnnotationElement(h));
    }
    y(this, pr, jc).call(this);
  }
  update({
    viewport: t
  }) {
    const e = this.div;
    this.viewport = t, cr(e, {
      rotation: t.rotation
    }), y(this, pr, jc).call(this), e.hidden = !1;
  }
  getEditableAnnotations() {
    return Array.from(r(this, Vn).values());
  }
  getEditableAnnotation(t) {
    return r(this, Vn).get(t);
  }
}
ol = new WeakMap(), jn = new WeakMap(), Vn = new WeakMap(), ll = new WeakMap(), pr = new WeakSet(), bp = async function(t, e) {
  var a, o;
  const s = t.firstChild || t, i = s.id = `${bd}${e}`, n = await ((a = r(this, ll)) == null ? void 0 : a.getAriaAttributes(i));
  if (n)
    for (const [l, h] of n)
      s.setAttribute(l, h);
  this.div.append(t), (o = r(this, ol)) == null || o.moveElementInDOM(this.div, t, s, !1);
}, jc = function() {
  if (!r(this, jn))
    return;
  const t = this.div;
  for (const [e, s] of r(this, jn)) {
    const i = t.querySelector(`[data-annotation-id="${e}"]`);
    if (!i)
      continue;
    s.className = "annotationContent";
    const {
      firstChild: n
    } = i;
    n ? n.nodeName === "CANVAS" ? n.replaceWith(s) : n.classList.contains("annotationContent") ? n.after(s) : n.before(s) : i.append(s);
  }
  r(this, jn).clear();
};
const Fl = /\r\n?|\n/g;
var is, xe, hl, Wn, ke, Tt, yp, Ap, vp, th, pi, eh, sh, _p, Wc, wp;
const ut = class ut extends _t {
  constructor(e) {
    super({
      ...e,
      name: "freeTextEditor"
    });
    b(this, Tt);
    b(this, is);
    b(this, xe, "");
    b(this, hl, `${this.id}-editor`);
    b(this, Wn, null);
    b(this, ke);
    f(this, is, e.color || ut._defaultColor || _t._defaultLineColor), f(this, ke, e.fontSize || ut._defaultFontSize);
  }
  static get _keyboardManager() {
    const e = ut.prototype, s = (a) => a.isEmpty(), i = dr.TRANSLATE_SMALL, n = dr.TRANSLATE_BIG;
    return J(this, "_keyboardManager", new Ml([[["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], e.commitOrRemove, {
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
    _t.initialize(e, s);
    const i = getComputedStyle(document.documentElement);
    this._internalPadding = parseFloat(i.getPropertyValue("--freetext-padding"));
  }
  static updateDefaultParams(e, s) {
    switch (e) {
      case st.FREETEXT_SIZE:
        ut._defaultFontSize = s;
        break;
      case st.FREETEXT_COLOR:
        ut._defaultColor = s;
        break;
    }
  }
  updateParams(e, s) {
    switch (e) {
      case st.FREETEXT_SIZE:
        y(this, Tt, yp).call(this, s);
        break;
      case st.FREETEXT_COLOR:
        y(this, Tt, Ap).call(this, s);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[st.FREETEXT_SIZE, ut._defaultFontSize], [st.FREETEXT_COLOR, ut._defaultColor || _t._defaultLineColor]];
  }
  get propertiesToUpdate() {
    return [[st.FREETEXT_SIZE, r(this, ke)], [st.FREETEXT_COLOR, r(this, is)]];
  }
  _translateEmpty(e, s) {
    this._uiManager.translateSelectedEditors(e, s, !0);
  }
  getInitialTranslation() {
    const e = this.parentScale;
    return [-ut._internalPadding * e, -(ut._internalPadding + r(this, ke)) * e];
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (this.isAttachedToDOM || this.parent.add(this)));
  }
  enableEditMode() {
    if (this.isInEditMode())
      return;
    this.parent.setEditingState(!1), this.parent.updateToolbar(Y.FREETEXT), super.enableEditMode(), this.overlayDiv.classList.remove("enabled"), this.editorDiv.contentEditable = !0, this._isDraggable = !1, this.div.removeAttribute("aria-activedescendant"), f(this, Wn, new AbortController());
    const e = this._uiManager.combinedSignal(r(this, Wn));
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
    this.isInEditMode() && (this.parent.setEditingState(!0), super.disableEditMode(), this.overlayDiv.classList.add("enabled"), this.editorDiv.contentEditable = !1, this.div.setAttribute("aria-activedescendant", r(this, hl)), this._isDraggable = !0, (e = r(this, Wn)) == null || e.abort(), f(this, Wn, null), this.div.focus({
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
    const e = r(this, xe), s = f(this, xe, y(this, Tt, vp).call(this).trimEnd());
    if (e === s)
      return;
    const i = (n) => {
      if (f(this, xe, n), !n) {
        this.remove();
        return;
      }
      y(this, Tt, sh).call(this), this._uiManager.rebuild(this), y(this, Tt, th).call(this);
    };
    this.addCommands({
      cmd: () => {
        i(s);
      },
      undo: () => {
        i(e);
      },
      mustExec: !1
    }), y(this, Tt, th).call(this);
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
    ut._keyboardManager.exec(this, e);
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
    this.width && (e = this.x, s = this.y), super.render(), this.editorDiv = document.createElement("div"), this.editorDiv.className = "internal", this.editorDiv.setAttribute("id", r(this, hl)), this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text2"), this.editorDiv.setAttribute("data-l10n-attrs", "default-content"), this.enableEditing(), this.editorDiv.contentEditable = !0;
    const {
      style: i
    } = this.editorDiv;
    if (i.fontSize = `calc(${r(this, ke)}px * var(--scale-factor))`, i.color = r(this, is), this.div.append(this.editorDiv), this.overlayDiv = document.createElement("div"), this.overlayDiv.classList.add("overlay", "enabled"), this.div.append(this.overlayDiv), ph(this, this.div, ["dblclick", "keydown"]), this.width) {
      const [n, a] = this.parentDimensions;
      if (this.annotationElementId) {
        const {
          position: o
        } = this._initialData;
        let [l, h] = this.getInitialTranslation();
        [l, h] = this.pageTranslationToScreen(l, h);
        const [c, u] = this.pageDimensions, [p, g] = this.pageTranslation;
        let m, A;
        switch (this.rotation) {
          case 0:
            m = e + (o[0] - p) / c, A = s + this.height - (o[1] - g) / u;
            break;
          case 90:
            m = e + (o[0] - p) / c, A = s - (o[1] - g) / u, [l, h] = [h, -l];
            break;
          case 180:
            m = e - this.width + (o[0] - p) / c, A = s - (o[1] - g) / u, [l, h] = [-l, -h];
            break;
          case 270:
            m = e + (o[0] - p - this.height * u) / c, A = s + (o[1] - g - this.width * c) / u, [l, h] = [-h, l];
            break;
        }
        this.setAt(m * n, A * a, l, h);
      } else
        this.setAt(e * n, s * a, this.width * n, this.height * a);
      y(this, Tt, sh).call(this), this._isDraggable = !0, this.editorDiv.contentEditable = !1;
    } else
      this._isDraggable = !1, this.editorDiv.contentEditable = !0;
    return this.div;
  }
  editorDivPaste(e) {
    var m, A, _;
    const s = e.clipboardData || window.clipboardData, {
      types: i
    } = s;
    if (i.length === 1 && i[0] === "text/plain")
      return;
    e.preventDefault();
    const n = y(m = ut, pi, Wc).call(m, s.getData("text") || "").replaceAll(Fl, `
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
      if (u.push(l.nodeValue.slice(h).replaceAll(Fl, "")), v !== this.editorDiv) {
        let w = c;
        for (const E of this.editorDiv.childNodes) {
          if (E === v) {
            w = u;
            continue;
          }
          w.push(y(A = ut, pi, eh).call(A, E));
        }
      }
      c.push(l.nodeValue.slice(0, h).replaceAll(Fl, ""));
    } else if (l === this.editorDiv) {
      let v = c, w = 0;
      for (const E of this.editorDiv.childNodes)
        w++ === h && (v = u), v.push(y(_ = ut, pi, eh).call(_, E));
    }
    f(this, xe, `${c.join(`
`)}${n}${u.join(`
`)}`), y(this, Tt, sh).call(this);
    const p = new Range();
    let g = c.reduce((v, w) => v + w.length, 0);
    for (const {
      firstChild: v
    } of this.editorDiv.childNodes)
      if (v.nodeType === Node.TEXT_NODE) {
        const w = v.nodeValue.length;
        if (g <= w) {
          p.setStart(v, g), p.setEnd(v, g);
          break;
        }
        g -= w;
      }
    a.removeAllRanges(), a.addRange(p);
  }
  get contentDiv() {
    return this.editorDiv;
  }
  static async deserialize(e, s, i) {
    var o;
    let n = null;
    if (e instanceof pp) {
      const {
        data: {
          defaultAppearanceData: {
            fontSize: l,
            fontColor: h
          },
          rect: c,
          rotation: u,
          id: p,
          popupRef: g
        },
        textContent: m,
        textPosition: A,
        parent: {
          page: {
            pageNumber: _
          }
        }
      } = e;
      if (!m || m.length === 0)
        return null;
      n = e = {
        annotationType: Y.FREETEXT,
        color: Array.from(h),
        fontSize: l,
        value: m.join(`
`),
        position: A,
        pageIndex: _ - 1,
        rect: c.slice(0),
        rotation: u,
        id: p,
        deleted: !1,
        popupRef: g
      };
    }
    const a = await super.deserialize(e, s, i);
    return f(a, ke, e.fontSize), f(a, is, H.makeHexColor(...e.color)), f(a, xe, y(o = ut, pi, Wc).call(o, e.value)), a.annotationElementId = e.id || null, a._initialData = n, a;
  }
  serialize(e = !1) {
    if (this.isEmpty())
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const s = ut._internalPadding * this.parentScale, i = this.getRect(s, s), n = _t._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : r(this, is)), a = {
      annotationType: Y.FREETEXT,
      color: n,
      fontSize: r(this, ke),
      value: y(this, Tt, _p).call(this),
      pageIndex: this.pageIndex,
      rect: i,
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId
    };
    return e ? a : this.annotationElementId && !y(this, Tt, wp).call(this, a) ? null : (a.id = this.annotationElementId, a);
  }
  renderAnnotationElement(e) {
    const s = super.renderAnnotationElement(e);
    if (this.deleted)
      return s;
    const {
      style: i
    } = s;
    i.fontSize = `calc(${r(this, ke)}px * var(--scale-factor))`, i.color = r(this, is), s.replaceChildren();
    for (const a of r(this, xe).split(`
`)) {
      const o = document.createElement("div");
      o.append(a ? document.createTextNode(a) : document.createElement("br")), s.append(o);
    }
    const n = ut._internalPadding * this.parentScale;
    return e.updateEdited({
      rect: this.getRect(n, n),
      popupContent: r(this, xe)
    }), s;
  }
  resetAnnotationElement(e) {
    super.resetAnnotationElement(e), e.resetEdited();
  }
};
is = new WeakMap(), xe = new WeakMap(), hl = new WeakMap(), Wn = new WeakMap(), ke = new WeakMap(), Tt = new WeakSet(), yp = function(e) {
  const s = (n) => {
    this.editorDiv.style.fontSize = `calc(${n}px * var(--scale-factor))`, this.translate(0, -(n - r(this, ke)) * this.parentScale), f(this, ke, n), y(this, Tt, th).call(this);
  }, i = r(this, ke);
  this.addCommands({
    cmd: s.bind(this, e),
    undo: s.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: st.FREETEXT_SIZE,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, Ap = function(e) {
  const s = (n) => {
    f(this, is, this.editorDiv.style.color = n);
  }, i = r(this, is);
  this.addCommands({
    cmd: s.bind(this, e),
    undo: s.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: st.FREETEXT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, vp = function() {
  var i;
  const e = [];
  this.editorDiv.normalize();
  let s = null;
  for (const n of this.editorDiv.childNodes)
    (s == null ? void 0 : s.nodeType) === Node.TEXT_NODE && n.nodeName === "BR" || (e.push(y(i = ut, pi, eh).call(i, n)), s = n);
  return e.join(`
`);
}, th = function() {
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
}, pi = new WeakSet(), eh = function(e) {
  return (e.nodeType === Node.TEXT_NODE ? e.nodeValue : e.innerText).replaceAll(Fl, "");
}, sh = function() {
  if (this.editorDiv.replaceChildren(), !!r(this, xe))
    for (const e of r(this, xe).split(`
`)) {
      const s = document.createElement("div");
      s.append(e ? document.createTextNode(e) : document.createElement("br")), this.editorDiv.append(s);
    }
}, _p = function() {
  return r(this, xe).replaceAll(" ", " ");
}, Wc = function(e) {
  return e.replaceAll(" ", " ");
}, wp = function(e) {
  const {
    value: s,
    fontSize: i,
    color: n,
    pageIndex: a
  } = this._initialData;
  return this._hasBeenMoved || e.value !== s || e.fontSize !== i || e.color.some((o, l) => o !== n[l]) || e.pageIndex !== a;
}, b(ut, pi), U(ut, "_freeTextDefaultContent", ""), U(ut, "_internalPadding", 0), U(ut, "_defaultColor", null), U(ut, "_defaultFontSize", 10), U(ut, "_type", "freetext"), U(ut, "_editorType", Y.FREETEXT);
let Vc = ut;
class F {
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
U(F, "PRECISION", 1e-4);
var Te, ns, la, ha, ks, Z, Xn, qn, cl, dl, ca, da, Bi, ul, Dh, Fh, Dt, Wa, Sp, Ep, Cp, xp, kp, Tp;
const Hs = class Hs {
  constructor({
    x: t,
    y: e
  }, s, i, n, a, o = 0) {
    b(this, Dt);
    b(this, Te);
    b(this, ns, []);
    b(this, la);
    b(this, ha);
    b(this, ks, []);
    b(this, Z, new Float32Array(18));
    b(this, Xn);
    b(this, qn);
    b(this, cl);
    b(this, dl);
    b(this, ca);
    b(this, da);
    b(this, Bi, []);
    f(this, Te, s), f(this, da, n * i), f(this, ha, a), r(this, Z).set([NaN, NaN, NaN, NaN, t, e], 6), f(this, la, o), f(this, dl, r(Hs, ul) * i), f(this, cl, r(Hs, Fh) * i), f(this, ca, i), r(this, Bi).push(t, e);
  }
  isEmpty() {
    return isNaN(r(this, Z)[8]);
  }
  add({
    x: t,
    y: e
  }) {
    var M;
    f(this, Xn, t), f(this, qn, e);
    const [s, i, n, a] = r(this, Te);
    let [o, l, h, c] = r(this, Z).subarray(8, 12);
    const u = t - h, p = e - c, g = Math.hypot(u, p);
    if (g < r(this, cl))
      return !1;
    const m = g - r(this, dl), A = m / g, _ = A * u, v = A * p;
    let w = o, E = l;
    o = h, l = c, h += _, c += v, (M = r(this, Bi)) == null || M.push(t, e);
    const S = -v / m, C = _ / m, k = S * r(this, da), x = C * r(this, da);
    return r(this, Z).set(r(this, Z).subarray(2, 8), 0), r(this, Z).set([h + k, c + x], 4), r(this, Z).set(r(this, Z).subarray(14, 18), 12), r(this, Z).set([h - k, c - x], 16), isNaN(r(this, Z)[6]) ? (r(this, ks).length === 0 && (r(this, Z).set([o + k, l + x], 2), r(this, ks).push(NaN, NaN, NaN, NaN, (o + k - s) / n, (l + x - i) / a), r(this, Z).set([o - k, l - x], 14), r(this, ns).push(NaN, NaN, NaN, NaN, (o - k - s) / n, (l - x - i) / a)), r(this, Z).set([w, E, o, l, h, c], 6), !this.isEmpty()) : (r(this, Z).set([w, E, o, l, h, c], 6), Math.abs(Math.atan2(E - l, w - o) - Math.atan2(v, _)) < Math.PI / 2 ? ([o, l, h, c] = r(this, Z).subarray(2, 6), r(this, ks).push(NaN, NaN, NaN, NaN, ((o + h) / 2 - s) / n, ((l + c) / 2 - i) / a), [o, l, w, E] = r(this, Z).subarray(14, 18), r(this, ns).push(NaN, NaN, NaN, NaN, ((w + o) / 2 - s) / n, ((E + l) / 2 - i) / a), !0) : ([w, E, o, l, h, c] = r(this, Z).subarray(0, 6), r(this, ks).push(((w + 5 * o) / 6 - s) / n, ((E + 5 * l) / 6 - i) / a, ((5 * o + h) / 6 - s) / n, ((5 * l + c) / 6 - i) / a, ((o + h) / 2 - s) / n, ((l + c) / 2 - i) / a), [h, c, o, l, w, E] = r(this, Z).subarray(12, 18), r(this, ns).push(((w + 5 * o) / 6 - s) / n, ((E + 5 * l) / 6 - i) / a, ((5 * o + h) / 6 - s) / n, ((5 * l + c) / 6 - i) / a, ((o + h) / 2 - s) / n, ((l + c) / 2 - i) / a), !0));
  }
  toSVGPath() {
    if (this.isEmpty())
      return "";
    const t = r(this, ks), e = r(this, ns);
    if (isNaN(r(this, Z)[6]) && !this.isEmpty())
      return y(this, Dt, Sp).call(this);
    const s = [];
    s.push(`M${t[4]} ${t[5]}`);
    for (let i = 6; i < t.length; i += 6)
      isNaN(t[i]) ? s.push(`L${t[i + 4]} ${t[i + 5]}`) : s.push(`C${t[i]} ${t[i + 1]} ${t[i + 2]} ${t[i + 3]} ${t[i + 4]} ${t[i + 5]}`);
    y(this, Dt, Cp).call(this, s);
    for (let i = e.length - 6; i >= 6; i -= 6)
      isNaN(e[i]) ? s.push(`L${e[i + 4]} ${e[i + 5]}`) : s.push(`C${e[i]} ${e[i + 1]} ${e[i + 2]} ${e[i + 3]} ${e[i + 4]} ${e[i + 5]}`);
    return y(this, Dt, Ep).call(this, s), s.join(" ");
  }
  newFreeDrawOutline(t, e, s, i, n, a) {
    return new Pp(t, e, s, i, n, a);
  }
  getOutlines() {
    var u;
    const t = r(this, ks), e = r(this, ns), s = r(this, Z), [i, n, a, o] = r(this, Te), l = new Float32Array((((u = r(this, Bi)) == null ? void 0 : u.length) ?? 0) + 2);
    for (let p = 0, g = l.length - 2; p < g; p += 2)
      l[p] = (r(this, Bi)[p] - i) / a, l[p + 1] = (r(this, Bi)[p + 1] - n) / o;
    if (l[l.length - 2] = (r(this, Xn) - i) / a, l[l.length - 1] = (r(this, qn) - n) / o, isNaN(s[6]) && !this.isEmpty())
      return y(this, Dt, xp).call(this, l);
    const h = new Float32Array(r(this, ks).length + 24 + r(this, ns).length);
    let c = t.length;
    for (let p = 0; p < c; p += 2) {
      if (isNaN(t[p])) {
        h[p] = h[p + 1] = NaN;
        continue;
      }
      h[p] = t[p], h[p + 1] = t[p + 1];
    }
    c = y(this, Dt, Tp).call(this, h, c);
    for (let p = e.length - 6; p >= 6; p -= 6)
      for (let g = 0; g < 6; g += 2) {
        if (isNaN(e[p + g])) {
          h[c] = h[c + 1] = NaN, c += 2;
          continue;
        }
        h[c] = e[p + g], h[c + 1] = e[p + g + 1], c += 2;
      }
    return y(this, Dt, kp).call(this, h, c), this.newFreeDrawOutline(h, l, r(this, Te), r(this, ca), r(this, la), r(this, ha));
  }
};
Te = new WeakMap(), ns = new WeakMap(), la = new WeakMap(), ha = new WeakMap(), ks = new WeakMap(), Z = new WeakMap(), Xn = new WeakMap(), qn = new WeakMap(), cl = new WeakMap(), dl = new WeakMap(), ca = new WeakMap(), da = new WeakMap(), Bi = new WeakMap(), ul = new WeakMap(), Dh = new WeakMap(), Fh = new WeakMap(), Dt = new WeakSet(), Wa = function() {
  const t = r(this, Z).subarray(4, 6), e = r(this, Z).subarray(16, 18), [s, i, n, a] = r(this, Te);
  return [(r(this, Xn) + (t[0] - e[0]) / 2 - s) / n, (r(this, qn) + (t[1] - e[1]) / 2 - i) / a, (r(this, Xn) + (e[0] - t[0]) / 2 - s) / n, (r(this, qn) + (e[1] - t[1]) / 2 - i) / a];
}, Sp = function() {
  const [t, e, s, i] = r(this, Te), [n, a, o, l] = y(this, Dt, Wa).call(this);
  return `M${(r(this, Z)[2] - t) / s} ${(r(this, Z)[3] - e) / i} L${(r(this, Z)[4] - t) / s} ${(r(this, Z)[5] - e) / i} L${n} ${a} L${o} ${l} L${(r(this, Z)[16] - t) / s} ${(r(this, Z)[17] - e) / i} L${(r(this, Z)[14] - t) / s} ${(r(this, Z)[15] - e) / i} Z`;
}, Ep = function(t) {
  const e = r(this, ns);
  t.push(`L${e[4]} ${e[5]} Z`);
}, Cp = function(t) {
  const [e, s, i, n] = r(this, Te), a = r(this, Z).subarray(4, 6), o = r(this, Z).subarray(16, 18), [l, h, c, u] = y(this, Dt, Wa).call(this);
  t.push(`L${(a[0] - e) / i} ${(a[1] - s) / n} L${l} ${h} L${c} ${u} L${(o[0] - e) / i} ${(o[1] - s) / n}`);
}, xp = function(t) {
  const e = r(this, Z), [s, i, n, a] = r(this, Te), [o, l, h, c] = y(this, Dt, Wa).call(this), u = new Float32Array(36);
  return u.set([NaN, NaN, NaN, NaN, (e[2] - s) / n, (e[3] - i) / a, NaN, NaN, NaN, NaN, (e[4] - s) / n, (e[5] - i) / a, NaN, NaN, NaN, NaN, o, l, NaN, NaN, NaN, NaN, h, c, NaN, NaN, NaN, NaN, (e[16] - s) / n, (e[17] - i) / a, NaN, NaN, NaN, NaN, (e[14] - s) / n, (e[15] - i) / a], 0), this.newFreeDrawOutline(u, t, r(this, Te), r(this, ca), r(this, la), r(this, ha));
}, kp = function(t, e) {
  const s = r(this, ns);
  return t.set([NaN, NaN, NaN, NaN, s[4], s[5]], e), e += 6;
}, Tp = function(t, e) {
  const s = r(this, Z).subarray(4, 6), i = r(this, Z).subarray(16, 18), [n, a, o, l] = r(this, Te), [h, c, u, p] = y(this, Dt, Wa).call(this);
  return t.set([NaN, NaN, NaN, NaN, (s[0] - n) / o, (s[1] - a) / l, NaN, NaN, NaN, NaN, h, c, NaN, NaN, NaN, NaN, u, p, NaN, NaN, NaN, NaN, (i[0] - n) / o, (i[1] - a) / l], e), e += 24;
}, b(Hs, ul, 8), b(Hs, Dh, 2), b(Hs, Fh, r(Hs, ul) + r(Hs, Dh));
let mh = Hs;
var ua, Yn, ni, pl, Pe, fl, Et, Nh, Mp;
class Pp extends F {
  constructor(e, s, i, n, a, o) {
    super();
    b(this, Nh);
    b(this, ua);
    b(this, Yn, new Float32Array(4));
    b(this, ni);
    b(this, pl);
    b(this, Pe);
    b(this, fl);
    b(this, Et);
    f(this, Et, e), f(this, Pe, s), f(this, ua, i), f(this, fl, n), f(this, ni, a), f(this, pl, o), this.lastPoint = [NaN, NaN], y(this, Nh, Mp).call(this, o);
    const [l, h, c, u] = r(this, Yn);
    for (let p = 0, g = e.length; p < g; p += 2)
      e[p] = (e[p] - l) / c, e[p + 1] = (e[p + 1] - h) / u;
    for (let p = 0, g = s.length; p < g; p += 2)
      s[p] = (s[p] - l) / c, s[p + 1] = (s[p + 1] - h) / u;
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
        h = F._rescale(r(this, Et), e, n, o, -l), c = F._rescale(r(this, Pe), e, n, o, -l);
        break;
      case 90:
        h = F._rescaleAndSwap(r(this, Et), e, s, o, l), c = F._rescaleAndSwap(r(this, Pe), e, s, o, l);
        break;
      case 180:
        h = F._rescale(r(this, Et), i, s, -o, l), c = F._rescale(r(this, Pe), i, s, -o, l);
        break;
      case 270:
        h = F._rescaleAndSwap(r(this, Et), i, n, -o, -l), c = F._rescaleAndSwap(r(this, Pe), i, n, -o, -l);
        break;
    }
    return {
      outline: Array.from(h),
      points: [Array.from(c)]
    };
  }
  get box() {
    return r(this, Yn);
  }
  newOutliner(e, s, i, n, a, o = 0) {
    return new mh(e, s, i, n, a, o);
  }
  getNewOutline(e, s) {
    const [i, n, a, o] = r(this, Yn), [l, h, c, u] = r(this, ua), p = a * c, g = o * u, m = i * c + l, A = n * u + h, _ = this.newOutliner({
      x: r(this, Pe)[0] * p + m,
      y: r(this, Pe)[1] * g + A
    }, r(this, ua), r(this, fl), e, r(this, pl), s ?? r(this, ni));
    for (let v = 2; v < r(this, Pe).length; v += 2)
      _.add({
        x: r(this, Pe)[v] * p + m,
        y: r(this, Pe)[v + 1] * g + A
      });
    return _.getOutlines();
  }
}
ua = new WeakMap(), Yn = new WeakMap(), ni = new WeakMap(), pl = new WeakMap(), Pe = new WeakMap(), fl = new WeakMap(), Et = new WeakMap(), Nh = new WeakSet(), Mp = function(e) {
  const s = r(this, Et);
  let i = s[4], n = s[5], a = i, o = n, l = i, h = n, c = i, u = n;
  const p = e ? Math.max : Math.min;
  for (let m = 6, A = s.length; m < A; m += 6) {
    if (isNaN(s[m]))
      a = Math.min(a, s[m + 4]), o = Math.min(o, s[m + 5]), l = Math.max(l, s[m + 4]), h = Math.max(h, s[m + 5]), u < s[m + 5] ? (c = s[m + 4], u = s[m + 5]) : u === s[m + 5] && (c = p(c, s[m + 4]));
    else {
      const _ = H.bezierBoundingBox(i, n, ...s.slice(m, m + 6));
      a = Math.min(a, _[0]), o = Math.min(o, _[1]), l = Math.max(l, _[2]), h = Math.max(h, _[3]), u < _[3] ? (c = _[2], u = _[3]) : u === _[3] && (c = p(c, _[2]));
    }
    i = s[m + 4], n = s[m + 5];
  }
  const g = r(this, Yn);
  g[0] = a - r(this, ni), g[1] = o - r(this, ni), g[2] = l - a + 2 * r(this, ni), g[3] = h - o + 2 * r(this, ni), this.lastPoint = [c, u];
};
var gl, ml, Hi, rs, de, Lp, ih, Rp, Ip, qc;
class Xc {
  constructor(t, e = 0, s = 0, i = !0) {
    b(this, de);
    b(this, gl);
    b(this, ml);
    b(this, Hi, []);
    b(this, rs, []);
    let n = 1 / 0, a = -1 / 0, o = 1 / 0, l = -1 / 0;
    const h = 10 ** -4;
    for (const {
      x: _,
      y: v,
      width: w,
      height: E
    } of t) {
      const S = Math.floor((_ - e) / h) * h, C = Math.ceil((_ + w + e) / h) * h, k = Math.floor((v - e) / h) * h, x = Math.ceil((v + E + e) / h) * h, T = [S, k, x, !0], M = [C, k, x, !1];
      r(this, Hi).push(T, M), n = Math.min(n, S), a = Math.max(a, C), o = Math.min(o, k), l = Math.max(l, x);
    }
    const c = a - n + 2 * s, u = l - o + 2 * s, p = n - s, g = o - s, m = r(this, Hi).at(i ? -1 : -2), A = [m[0], m[2]];
    for (const _ of r(this, Hi)) {
      const [v, w, E] = _;
      _[0] = (v - p) / c, _[1] = (w - g) / u, _[2] = (E - g) / u;
    }
    f(this, gl, new Float32Array([p, g, c, u])), f(this, ml, A);
  }
  getOutlines() {
    r(this, Hi).sort((e, s) => e[0] - s[0] || e[1] - s[1] || e[2] - s[2]);
    const t = [];
    for (const e of r(this, Hi))
      e[3] ? (t.push(...y(this, de, qc).call(this, e)), y(this, de, Rp).call(this, e)) : (y(this, de, Ip).call(this, e), t.push(...y(this, de, qc).call(this, e)));
    return y(this, de, Lp).call(this, t);
  }
}
gl = new WeakMap(), ml = new WeakMap(), Hi = new WeakMap(), rs = new WeakMap(), de = new WeakSet(), Lp = function(t) {
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
    let p = o, g = l;
    for (n = [o, h], i.push(n); ; ) {
      let m;
      if (s.has(c))
        m = c;
      else if (s.has(u))
        m = u;
      else
        break;
      s.delete(m), [o, l, h, c, u] = m, p !== o && (n.push(p, g, o, g === l ? l : h), p = o), g = g === l ? h : l;
    }
    n.push(p, g);
  }
  return new Jg(i, r(this, gl), r(this, ml));
}, ih = function(t) {
  const e = r(this, rs);
  let s = 0, i = e.length - 1;
  for (; s <= i; ) {
    const n = s + i >> 1, a = e[n][0];
    if (a === t)
      return n;
    a < t ? s = n + 1 : i = n - 1;
  }
  return i + 1;
}, Rp = function([, t, e]) {
  const s = y(this, de, ih).call(this, t);
  r(this, rs).splice(s, 0, [t, e]);
}, Ip = function([, t, e]) {
  const s = y(this, de, ih).call(this, t);
  for (let i = s; i < r(this, rs).length; i++) {
    const [n, a] = r(this, rs)[i];
    if (n !== t)
      break;
    if (n === t && a === e) {
      r(this, rs).splice(i, 1);
      return;
    }
  }
  for (let i = s - 1; i >= 0; i--) {
    const [n, a] = r(this, rs)[i];
    if (n !== t)
      break;
    if (n === t && a === e) {
      r(this, rs).splice(i, 1);
      return;
    }
  }
}, qc = function(t) {
  const [e, s, i] = t, n = [[e, s, i]], a = y(this, de, ih).call(this, i);
  for (let o = 0; o < a; o++) {
    const [l, h] = r(this, rs)[o];
    for (let c = 0, u = n.length; c < u; c++) {
      const [, p, g] = n[c];
      if (!(h <= p || g <= l)) {
        if (p >= l) {
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
var bl, pa;
class Jg extends F {
  constructor(e, s, i) {
    super();
    b(this, bl);
    b(this, pa);
    f(this, pa, e), f(this, bl, s), this.lastPoint = i;
  }
  toSVGPath() {
    const e = [];
    for (const s of r(this, pa)) {
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
    for (const c of r(this, pa)) {
      const u = new Array(c.length);
      for (let p = 0; p < c.length; p += 2)
        u[p] = e + c[p] * l, u[p + 1] = n - c[p + 1] * h;
      o.push(u);
    }
    return o;
  }
  get box() {
    return r(this, bl);
  }
  get classNamesForOutlining() {
    return ["highlightOutline"];
  }
}
bl = new WeakMap(), pa = new WeakMap();
class Yc extends mh {
  newFreeDrawOutline(t, e, s, i, n, a) {
    return new tm(t, e, s, i, n, a);
  }
}
class tm extends Pp {
  newOutliner(t, e, s, i, n, a = 0) {
    return new Yc(t, e, s, i, n, a);
  }
}
var as, Kn, fa, It, yl, ga, Al, vl, zi, os, ma, _l, lt, Kc, Qc, Zc, en, Dp, bi;
const ge = class ge {
  constructor({
    editor: t = null,
    uiManager: e = null
  }) {
    b(this, lt);
    b(this, as, null);
    b(this, Kn, null);
    b(this, fa);
    b(this, It, null);
    b(this, yl, !1);
    b(this, ga, !1);
    b(this, Al, null);
    b(this, vl);
    b(this, zi, null);
    b(this, os, null);
    b(this, ma);
    var s;
    t ? (f(this, ga, !1), f(this, ma, st.HIGHLIGHT_COLOR), f(this, Al, t)) : (f(this, ga, !0), f(this, ma, st.HIGHLIGHT_DEFAULT_COLOR)), f(this, os, (t == null ? void 0 : t._uiManager) || e), f(this, vl, r(this, os)._eventBus), f(this, fa, (t == null ? void 0 : t.color) || ((s = r(this, os)) == null ? void 0 : s.highlightColors.values().next().value) || "#FFFF98"), r(ge, _l) || f(ge, _l, Object.freeze({
      blue: "pdfjs-editor-colorpicker-blue",
      green: "pdfjs-editor-colorpicker-green",
      pink: "pdfjs-editor-colorpicker-pink",
      red: "pdfjs-editor-colorpicker-red",
      yellow: "pdfjs-editor-colorpicker-yellow"
    }));
  }
  static get _keyboardManager() {
    return J(this, "_keyboardManager", new Ml([[["Escape", "mac+Escape"], ge.prototype._hideDropdownFromKeyboard], [[" ", "mac+ "], ge.prototype._colorSelectFromKeyboard], [["ArrowDown", "ArrowRight", "mac+ArrowDown", "mac+ArrowRight"], ge.prototype._moveToNext], [["ArrowUp", "ArrowLeft", "mac+ArrowUp", "mac+ArrowLeft"], ge.prototype._moveToPrevious], [["Home", "mac+Home"], ge.prototype._moveToBeginning], [["End", "mac+End"], ge.prototype._moveToEnd]]));
  }
  renderButton() {
    const t = f(this, as, document.createElement("button"));
    t.className = "colorPicker", t.tabIndex = "0", t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button"), t.setAttribute("aria-haspopup", !0);
    const e = r(this, os)._signal;
    t.addEventListener("click", y(this, lt, en).bind(this), {
      signal: e
    }), t.addEventListener("keydown", y(this, lt, Zc).bind(this), {
      signal: e
    });
    const s = f(this, Kn, document.createElement("span"));
    return s.className = "swatch", s.setAttribute("aria-hidden", !0), s.style.backgroundColor = r(this, fa), t.append(s), t;
  }
  renderMainDropdown() {
    const t = f(this, It, y(this, lt, Kc).call(this));
    return t.setAttribute("aria-orientation", "horizontal"), t.setAttribute("aria-labelledby", "highlightColorPickerLabel"), t;
  }
  _colorSelectFromKeyboard(t) {
    if (t.target === r(this, as)) {
      y(this, lt, en).call(this, t);
      return;
    }
    const e = t.target.getAttribute("data-color");
    e && y(this, lt, Qc).call(this, e, t);
  }
  _moveToNext(t) {
    var e, s;
    if (!r(this, lt, bi)) {
      y(this, lt, en).call(this, t);
      return;
    }
    if (t.target === r(this, as)) {
      (e = r(this, It).firstChild) == null || e.focus();
      return;
    }
    (s = t.target.nextSibling) == null || s.focus();
  }
  _moveToPrevious(t) {
    var e, s;
    if (t.target === ((e = r(this, It)) == null ? void 0 : e.firstChild) || t.target === r(this, as)) {
      r(this, lt, bi) && this._hideDropdownFromKeyboard();
      return;
    }
    r(this, lt, bi) || y(this, lt, en).call(this, t), (s = t.target.previousSibling) == null || s.focus();
  }
  _moveToBeginning(t) {
    var e;
    if (!r(this, lt, bi)) {
      y(this, lt, en).call(this, t);
      return;
    }
    (e = r(this, It).firstChild) == null || e.focus();
  }
  _moveToEnd(t) {
    var e;
    if (!r(this, lt, bi)) {
      y(this, lt, en).call(this, t);
      return;
    }
    (e = r(this, It).lastChild) == null || e.focus();
  }
  hideDropdown() {
    var t, e;
    (t = r(this, It)) == null || t.classList.add("hidden"), (e = r(this, zi)) == null || e.abort(), f(this, zi, null);
  }
  _hideDropdownFromKeyboard() {
    var t;
    if (!r(this, ga)) {
      if (!r(this, lt, bi)) {
        (t = r(this, Al)) == null || t.unselect();
        return;
      }
      this.hideDropdown(), r(this, as).focus({
        preventScroll: !0,
        focusVisible: r(this, yl)
      });
    }
  }
  updateColor(t) {
    if (r(this, Kn) && (r(this, Kn).style.backgroundColor = t), !r(this, It))
      return;
    const e = r(this, os).highlightColors.values();
    for (const s of r(this, It).children)
      s.setAttribute("aria-selected", e.next().value === t);
  }
  destroy() {
    var t, e;
    (t = r(this, as)) == null || t.remove(), f(this, as, null), f(this, Kn, null), (e = r(this, It)) == null || e.remove(), f(this, It, null);
  }
};
as = new WeakMap(), Kn = new WeakMap(), fa = new WeakMap(), It = new WeakMap(), yl = new WeakMap(), ga = new WeakMap(), Al = new WeakMap(), vl = new WeakMap(), zi = new WeakMap(), os = new WeakMap(), ma = new WeakMap(), _l = new WeakMap(), lt = new WeakSet(), Kc = function() {
  const t = document.createElement("div"), e = r(this, os)._signal;
  t.addEventListener("contextmenu", ds, {
    signal: e
  }), t.className = "dropdown", t.role = "listbox", t.setAttribute("aria-multiselectable", !1), t.setAttribute("aria-orientation", "vertical"), t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown");
  for (const [s, i] of r(this, os).highlightColors) {
    const n = document.createElement("button");
    n.tabIndex = "0", n.role = "option", n.setAttribute("data-color", i), n.title = s, n.setAttribute("data-l10n-id", r(ge, _l)[s]);
    const a = document.createElement("span");
    n.append(a), a.className = "swatch", a.style.backgroundColor = i, n.setAttribute("aria-selected", i === r(this, fa)), n.addEventListener("click", y(this, lt, Qc).bind(this, i), {
      signal: e
    }), t.append(n);
  }
  return t.addEventListener("keydown", y(this, lt, Zc).bind(this), {
    signal: e
  }), t;
}, Qc = function(t, e) {
  e.stopPropagation(), r(this, vl).dispatch("switchannotationeditorparams", {
    source: this,
    type: r(this, ma),
    value: t
  });
}, Zc = function(t) {
  ge._keyboardManager.exec(this, t);
}, en = function(t) {
  if (r(this, lt, bi)) {
    this.hideDropdown();
    return;
  }
  if (f(this, yl, t.detail === 0), r(this, zi) || (f(this, zi, new AbortController()), window.addEventListener("pointerdown", y(this, lt, Dp).bind(this), {
    signal: r(this, os).combinedSignal(r(this, zi))
  })), r(this, It)) {
    r(this, It).classList.remove("hidden");
    return;
  }
  const e = f(this, It, y(this, lt, Kc).call(this));
  r(this, as).append(e);
}, Dp = function(t) {
  var e;
  (e = r(this, It)) != null && e.contains(t.target) || this.hideDropdown();
}, bi = function() {
  return r(this, It) && !r(this, It).classList.contains("hidden");
}, b(ge, _l, null);
let bh = ge;
var ba, wl, ri, Qn, ya, ye, Sl, El, Zn, Ue, Me, jt, Aa, ai, Jt, va, je, Cl, q, Jc, nh, Fp, Np, Op, td, sn, qe, _r, Bp, rh, Xa, Hp, zp, $p, Gp, Up;
const rt = class rt extends _t {
  constructor(e) {
    super({
      ...e,
      name: "highlightEditor"
    });
    b(this, q);
    b(this, ba, null);
    b(this, wl, 0);
    b(this, ri);
    b(this, Qn, null);
    b(this, ya, null);
    b(this, ye, null);
    b(this, Sl, null);
    b(this, El, 0);
    b(this, Zn, null);
    b(this, Ue, null);
    b(this, Me, null);
    b(this, jt, !1);
    b(this, Aa, null);
    b(this, ai);
    b(this, Jt, null);
    b(this, va, "");
    b(this, je);
    b(this, Cl, "");
    this.color = e.color || rt._defaultColor, f(this, je, e.thickness || rt._defaultThickness), f(this, ai, e.opacity || rt._defaultOpacity), f(this, ri, e.boxes || null), f(this, Cl, e.methodOfCreation || ""), f(this, va, e.text || ""), this._isDraggable = !1, e.highlightId > -1 ? (f(this, jt, !0), y(this, q, nh).call(this, e), y(this, q, sn).call(this)) : r(this, ri) && (f(this, ba, e.anchorNode), f(this, wl, e.anchorOffset), f(this, Sl, e.focusNode), f(this, El, e.focusOffset), y(this, q, Jc).call(this), y(this, q, sn).call(this), this.rotate(this.rotation));
  }
  static get _keyboardManager() {
    const e = rt.prototype;
    return J(this, "_keyboardManager", new Ml([[["ArrowLeft", "mac+ArrowLeft"], e._moveCaret, {
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
      type: r(this, jt) ? "free_highlight" : "highlight",
      color: this._uiManager.highlightColorNames.get(this.color),
      thickness: r(this, je),
      methodOfCreation: r(this, Cl)
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
    _t.initialize(e, s), rt._defaultColor || (rt._defaultColor = ((i = s.highlightColors) == null ? void 0 : i.values().next().value) || "#fff066");
  }
  static updateDefaultParams(e, s) {
    switch (e) {
      case st.HIGHLIGHT_DEFAULT_COLOR:
        rt._defaultColor = s;
        break;
      case st.HIGHLIGHT_THICKNESS:
        rt._defaultThickness = s;
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
      case st.HIGHLIGHT_COLOR:
        y(this, q, Fp).call(this, s);
        break;
      case st.HIGHLIGHT_THICKNESS:
        y(this, q, Np).call(this, s);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[st.HIGHLIGHT_DEFAULT_COLOR, rt._defaultColor], [st.HIGHLIGHT_THICKNESS, rt._defaultThickness]];
  }
  get propertiesToUpdate() {
    return [[st.HIGHLIGHT_COLOR, this.color || rt._defaultColor], [st.HIGHLIGHT_THICKNESS, r(this, je) || rt._defaultThickness], [st.HIGHLIGHT_FREE, r(this, jt)]];
  }
  async addEditToolbar() {
    const e = await super.addEditToolbar();
    return e ? (this._uiManager.highlightColors && (f(this, ya, new bh({
      editor: this
    })), e.addColorPicker(r(this, ya))), e) : null;
  }
  disableEditing() {
    super.disableEditing(), this.div.classList.toggle("disabled", !0);
  }
  enableEditing() {
    super.enableEditing(), this.div.classList.toggle("disabled", !1);
  }
  fixAndSetPosition() {
    return super.fixAndSetPosition(y(this, q, Xa).call(this));
  }
  getBaseTranslation() {
    return [0, 0];
  }
  getRect(e, s) {
    return super.getRect(e, s, y(this, q, Xa).call(this));
  }
  onceAdded(e) {
    this.annotationElementId || this.parent.addUndoableEditor(this), e && this.div.focus();
  }
  remove() {
    y(this, q, td).call(this), this._reportTelemetry({
      action: "deleted"
    }), super.remove();
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (y(this, q, sn).call(this), this.isAttachedToDOM || this.parent.add(this)));
  }
  setParent(e) {
    var i;
    let s = !1;
    this.parent && !e ? y(this, q, td).call(this) : e && (y(this, q, sn).call(this, e), s = !this.parent && ((i = this.div) == null ? void 0 : i.classList.contains("selectedEditor"))), super.setParent(e), this.show(this._isVisible), s && this.select();
  }
  rotate(e) {
    var n, a, o;
    const {
      drawLayer: s
    } = this.parent;
    let i;
    r(this, jt) ? (e = (e - this.rotation + 360) % 360, i = y(n = rt, qe, _r).call(n, r(this, Ue).box, e)) : i = y(a = rt, qe, _r).call(a, [this.x, this.y, this.width, this.height], e), s.updateProperties(r(this, Me), {
      bbox: i,
      root: {
        "data-main-rotation": e
      }
    }), s.updateProperties(r(this, Jt), {
      bbox: y(o = rt, qe, _r).call(o, r(this, ye).box, e),
      root: {
        "data-main-rotation": e
      }
    });
  }
  render() {
    if (this.div)
      return this.div;
    const e = super.render();
    r(this, va) && (e.setAttribute("aria-label", r(this, va)), e.setAttribute("role", "mark")), r(this, jt) ? e.classList.add("free") : this.div.addEventListener("keydown", y(this, q, Bp).bind(this), {
      signal: this._uiManager._signal
    });
    const s = f(this, Zn, document.createElement("div"));
    e.append(s), s.setAttribute("aria-hidden", "true"), s.className = "internal", s.style.clipPath = r(this, Qn);
    const [i, n] = this.parentDimensions;
    return this.setDims(this.width * i, this.height * n), ph(this, r(this, Zn), ["pointerover", "pointerleave"]), this.enableEditing(), e;
  }
  pointerover() {
    var e;
    this.isSelected || (e = this.parent) == null || e.drawLayer.updateProperties(r(this, Jt), {
      rootClass: {
        hovered: !0
      }
    });
  }
  pointerleave() {
    var e;
    this.isSelected || (e = this.parent) == null || e.drawLayer.updateProperties(r(this, Jt), {
      rootClass: {
        hovered: !1
      }
    });
  }
  _moveCaret(e) {
    switch (this.parent.unselect(this), e) {
      case 0:
      case 2:
        y(this, q, rh).call(this, !0);
        break;
      case 1:
      case 3:
        y(this, q, rh).call(this, !1);
        break;
    }
  }
  select() {
    var e;
    super.select(), r(this, Jt) && ((e = this.parent) == null || e.drawLayer.updateProperties(r(this, Jt), {
      rootClass: {
        hovered: !1,
        selected: !0
      }
    }));
  }
  unselect() {
    var e;
    super.unselect(), r(this, Jt) && ((e = this.parent) == null || e.drawLayer.updateProperties(r(this, Jt), {
      rootClass: {
        selected: !1
      }
    }), r(this, jt) || y(this, q, rh).call(this, !1));
  }
  get _mustFixPosition() {
    return !r(this, jt);
  }
  show(e = this._isVisible) {
    super.show(e), this.parent && (this.parent.drawLayer.updateProperties(r(this, Me), {
      rootClass: {
        hidden: !e
      }
    }), this.parent.drawLayer.updateProperties(r(this, Jt), {
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
    } = i.getBoundingClientRect(), u = new AbortController(), p = e.combinedSignal(u), g = (m) => {
      u.abort(), y(this, qe, Gp).call(this, e, m);
    };
    window.addEventListener("blur", g, {
      signal: p
    }), window.addEventListener("pointerup", g, {
      signal: p
    }), window.addEventListener("pointerdown", Ne, {
      capture: !0,
      passive: !1,
      signal: p
    }), window.addEventListener("contextmenu", ds, {
      signal: p
    }), i.addEventListener("pointermove", y(this, qe, $p).bind(this, e), {
      signal: p
    }), this._freeHighlight = new Yc({
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
    var A, _, v, w;
    let n = null;
    if (e instanceof gp) {
      const {
        data: {
          quadPoints: E,
          rect: S,
          rotation: C,
          id: k,
          color: x,
          opacity: T,
          popupRef: M
        },
        parent: {
          page: {
            pageNumber: z
          }
        }
      } = e;
      n = e = {
        annotationType: Y.HIGHLIGHT,
        color: Array.from(x),
        opacity: T,
        quadPoints: E,
        boxes: null,
        pageIndex: z - 1,
        rect: S.slice(0),
        rotation: C,
        id: k,
        deleted: !1,
        popupRef: M
      };
    } else if (e instanceof Cd) {
      const {
        data: {
          inkLists: E,
          rect: S,
          rotation: C,
          id: k,
          color: x,
          borderStyle: {
            rawWidth: T
          },
          popupRef: M
        },
        parent: {
          page: {
            pageNumber: z
          }
        }
      } = e;
      n = e = {
        annotationType: Y.HIGHLIGHT,
        color: Array.from(x),
        thickness: T,
        inkLists: E,
        boxes: null,
        pageIndex: z - 1,
        rect: S.slice(0),
        rotation: C,
        id: k,
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
    c.color = H.makeHexColor(...a), f(c, ai, h || 1), l && f(c, je, e.thickness), c.annotationElementId = e.id || null, c._initialData = n;
    const [u, p] = c.pageDimensions, [g, m] = c.pageTranslation;
    if (o) {
      const E = f(c, ri, []);
      for (let S = 0; S < o.length; S += 8)
        E.push({
          x: (o[S] - g) / u,
          y: 1 - (o[S + 1] - m) / p,
          width: (o[S + 2] - o[S]) / u,
          height: (o[S + 1] - o[S + 5]) / p
        });
      y(A = c, q, Jc).call(A), y(_ = c, q, sn).call(_), c.rotate(c.rotation);
    } else if (l) {
      f(c, jt, !0);
      const E = l[0], S = {
        x: E[0] - g,
        y: p - (E[1] - m)
      }, C = new Yc(S, [0, 0, u, p], 1, r(c, je) / 2, !0, 1e-3);
      for (let T = 0, M = E.length; T < M; T += 2)
        S.x = E[T] - g, S.y = p - (E[T + 1] - m), C.add(S);
      const {
        id: k,
        clipPathId: x
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
      y(v = c, q, nh).call(v, {
        highlightOutlines: C.getOutlines(),
        highlightId: k,
        clipPathId: x
      }), y(w = c, q, sn).call(w);
    }
    return c;
  }
  serialize(e = !1) {
    if (this.isEmpty() || e)
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const s = this.getRect(0, 0), i = _t._colorManager.convert(this.color), n = {
      annotationType: Y.HIGHLIGHT,
      color: i,
      opacity: r(this, ai),
      thickness: r(this, je),
      quadPoints: y(this, q, Hp).call(this),
      outlines: y(this, q, zp).call(this, s),
      pageIndex: this.pageIndex,
      rect: s,
      rotation: y(this, q, Xa).call(this),
      structTreeParentId: this._structTreeParentId
    };
    return this.annotationElementId && !y(this, q, Up).call(this, n) ? null : (n.id = this.annotationElementId, n);
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
ba = new WeakMap(), wl = new WeakMap(), ri = new WeakMap(), Qn = new WeakMap(), ya = new WeakMap(), ye = new WeakMap(), Sl = new WeakMap(), El = new WeakMap(), Zn = new WeakMap(), Ue = new WeakMap(), Me = new WeakMap(), jt = new WeakMap(), Aa = new WeakMap(), ai = new WeakMap(), Jt = new WeakMap(), va = new WeakMap(), je = new WeakMap(), Cl = new WeakMap(), q = new WeakSet(), Jc = function() {
  const e = new Xc(r(this, ri), 1e-3);
  f(this, Ue, e.getOutlines()), [this.x, this.y, this.width, this.height] = r(this, Ue).box;
  const s = new Xc(r(this, ri), 25e-4, 1e-3, this._uiManager.direction === "ltr");
  f(this, ye, s.getOutlines());
  const {
    lastPoint: i
  } = r(this, ye);
  f(this, Aa, [(i[0] - this.x) / this.width, (i[1] - this.y) / this.height]);
}, nh = function({
  highlightOutlines: e,
  highlightId: s,
  clipPathId: i
}) {
  var u, p;
  if (f(this, Ue, e), f(this, ye, e.getNewOutline(r(this, je) / 2 + 1.5, 25e-4)), s >= 0)
    f(this, Me, s), f(this, Qn, i), this.parent.drawLayer.finalizeDraw(s, {
      bbox: e.box,
      path: {
        d: e.toSVGPath()
      }
    }), f(this, Jt, this.parent.drawLayer.drawOutline({
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
      bbox: y(u = rt, qe, _r).call(u, r(this, Ue).box, (g - this.rotation + 360) % 360),
      path: {
        d: e.toSVGPath()
      }
    }), this.parent.drawLayer.updateProperties(r(this, Jt), {
      bbox: y(p = rt, qe, _r).call(p, r(this, ye).box, g),
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
      const [g, m] = this.parentDimensions;
      this.x = o, this.y = 1 - a, this.width = l * m / g, this.height = h * g / m;
      break;
    }
    case 180:
      this.x = 1 - a, this.y = 1 - o, this.width = l, this.height = h;
      break;
    case 270: {
      const [g, m] = this.parentDimensions;
      this.x = 1 - o, this.y = a, this.width = l * m / g, this.height = h * g / m;
      break;
    }
  }
  const {
    lastPoint: c
  } = r(this, ye);
  f(this, Aa, [(c[0] - a) / l, (c[1] - o) / h]);
}, Fp = function(e) {
  const s = (a, o) => {
    var l, h;
    this.color = a, f(this, ai, o), (l = this.parent) == null || l.drawLayer.updateProperties(r(this, Me), {
      root: {
        fill: a,
        "fill-opacity": o
      }
    }), (h = r(this, ya)) == null || h.updateColor(a);
  }, i = this.color, n = r(this, ai);
  this.addCommands({
    cmd: s.bind(this, e, rt._defaultOpacity),
    undo: s.bind(this, i, n),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: st.HIGHLIGHT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  }), this._reportTelemetry({
    action: "color_changed",
    color: this._uiManager.highlightColorNames.get(e)
  }, !0);
}, Np = function(e) {
  const s = r(this, je), i = (n) => {
    f(this, je, n), y(this, q, Op).call(this, n);
  };
  this.addCommands({
    cmd: i.bind(this, e),
    undo: i.bind(this, s),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: st.INK_THICKNESS,
    overwriteIfSameType: !0,
    keepUndo: !0
  }), this._reportTelemetry({
    action: "thickness_changed",
    thickness: e
  }, !0);
}, Op = function(e) {
  if (!r(this, jt))
    return;
  y(this, q, nh).call(this, {
    highlightOutlines: r(this, Ue).getNewOutline(e / 2)
  }), this.fixAndSetPosition();
  const [s, i] = this.parentDimensions;
  this.setDims(this.width * s, this.height * i);
}, td = function() {
  r(this, Me) === null || !this.parent || (this.parent.drawLayer.remove(r(this, Me)), f(this, Me, null), this.parent.drawLayer.remove(r(this, Jt)), f(this, Jt, null));
}, sn = function(e = this.parent) {
  r(this, Me) === null && ({
    id: ie(this, Me)._,
    clipPathId: ie(this, Qn)._
  } = e.drawLayer.draw({
    bbox: r(this, Ue).box,
    root: {
      viewBox: "0 0 1 1",
      fill: this.color,
      "fill-opacity": r(this, ai)
    },
    rootClass: {
      highlight: !0,
      free: r(this, jt)
    },
    path: {
      d: r(this, Ue).toSVGPath()
    }
  }, !1, !0), f(this, Jt, e.drawLayer.drawOutline({
    rootClass: {
      highlightOutline: !0,
      free: r(this, jt)
    },
    bbox: r(this, ye).box,
    path: {
      d: r(this, ye).toSVGPath()
    }
  }, r(this, jt))), r(this, Zn) && (r(this, Zn).style.clipPath = r(this, Qn)));
}, qe = new WeakSet(), _r = function([e, s, i, n], a) {
  switch (a) {
    case 90:
      return [1 - s - n, e, n, i];
    case 180:
      return [1 - e - i, 1 - s - n, i, n];
    case 270:
      return [s, 1 - e - i, n, i];
  }
  return [e, s, i, n];
}, Bp = function(e) {
  rt._keyboardManager.exec(this, e);
}, rh = function(e) {
  if (!r(this, ba))
    return;
  const s = window.getSelection();
  e ? s.setPosition(r(this, ba), r(this, wl)) : s.setPosition(r(this, Sl), r(this, El));
}, Xa = function() {
  return r(this, jt) ? this.rotation : 0;
}, Hp = function() {
  if (r(this, jt))
    return null;
  const [e, s] = this.pageDimensions, [i, n] = this.pageTranslation, a = r(this, ri), o = new Float32Array(a.length * 8);
  let l = 0;
  for (const {
    x: h,
    y: c,
    width: u,
    height: p
  } of a) {
    const g = h * e + i, m = (1 - c) * s + n;
    o[l] = o[l + 4] = g, o[l + 1] = o[l + 3] = m, o[l + 2] = o[l + 6] = g + u * e, o[l + 5] = o[l + 7] = m - p * s, l += 8;
  }
  return o;
}, zp = function(e) {
  return r(this, Ue).serialize(e, y(this, q, Xa).call(this));
}, $p = function(e, s) {
  this._freeHighlight.add(s) && e.drawLayer.updateProperties(this._freeHighlightId, {
    path: {
      d: this._freeHighlight.toSVGPath()
    }
  });
}, Gp = function(e, s) {
  this._freeHighlight.isEmpty() ? e.drawLayer.remove(this._freeHighlightId) : e.createAndAddNewEditor(s, !1, {
    highlightId: this._freeHighlightId,
    highlightOutlines: this._freeHighlight.getOutlines(),
    clipPathId: this._freeHighlightClipId,
    methodOfCreation: "main_toolbar"
  }), this._freeHighlightId = -1, this._freeHighlight = null, this._freeHighlightClipId = "";
}, Up = function(e) {
  const {
    color: s
  } = this._initialData;
  return e.color.some((i, n) => i !== s[n]);
}, b(rt, qe), U(rt, "_defaultColor", null), U(rt, "_defaultOpacity", 1), U(rt, "_defaultThickness", 12), U(rt, "_type", "highlight"), U(rt, "_editorType", Y.HIGHLIGHT), U(rt, "_freeHighlightId", -1), U(rt, "_freeHighlight", null), U(rt, "_freeHighlightClipId", "");
let yh = rt;
var Jn;
class em {
  constructor() {
    b(this, Jn, /* @__PURE__ */ Object.create(null));
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
    r(this, Jn)[t] = e;
  }
  toSVGProperties() {
    const t = r(this, Jn);
    return f(this, Jn, /* @__PURE__ */ Object.create(null)), {
      root: t
    };
  }
  reset() {
    f(this, Jn, /* @__PURE__ */ Object.create(null));
  }
  updateAll(t = this) {
    this.updateProperties(t);
  }
  clone() {
    ct("Not implemented");
  }
}
Jn = new WeakMap();
var Le, _a, Bt, tr, er, $i, Gi, Ui, sr, it, sd, id, nd, qa, jp, ah, Ya, wr;
const N = class N extends _t {
  constructor(e) {
    super(e);
    b(this, it);
    b(this, Le, null);
    b(this, _a);
    U(this, "_drawId", null);
    f(this, _a, e.mustBeCommitted || !1), e.drawOutlines && (y(this, it, sd).call(this, e), y(this, it, qa).call(this));
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
    i && this._defaultDrawingOptions.updateProperty(i, s), this._currentParent && (r(N, Bt).updateProperty(i, s), this._currentParent.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties()));
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
      const h = r(this, Le).updateProperty(s, l);
      h && y(this, it, Ya).call(this, h), (c = this.parent) == null || c.drawLayer.updateProperties(this._drawId, n.toSVGProperties());
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
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, N._mergeSVGProperties(r(this, Le).getPathResizingSVGProperties(y(this, it, ah).call(this)), {
      bbox: y(this, it, wr).call(this)
    }));
  }
  _onResized() {
    var e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, N._mergeSVGProperties(r(this, Le).getPathResizedSVGProperties(y(this, it, ah).call(this)), {
      bbox: y(this, it, wr).call(this)
    }));
  }
  _onTranslating(e, s) {
    var i;
    (i = this.parent) == null || i.drawLayer.updateProperties(this._drawId, {
      bbox: y(this, it, wr).call(this, e, s)
    });
  }
  _onTranslated() {
    var e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, N._mergeSVGProperties(r(this, Le).getPathTranslatedSVGProperties(y(this, it, ah).call(this), this.parentDimensions), {
      bbox: y(this, it, wr).call(this)
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
    this.annotationElementId || this.parent.addUndoableEditor(this), this._isDraggable = !0, r(this, _a) && (f(this, _a, !1), this.commit(), this.parent.setSelected(this), e && this.isOnScreen && this.div.focus());
  }
  remove() {
    y(this, it, nd).call(this), super.remove();
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (y(this, it, qa).call(this), y(this, it, Ya).call(this, r(this, Le).box), this.isAttachedToDOM || this.parent.add(this)));
  }
  setParent(e) {
    var i;
    let s = !1;
    this.parent && !e ? (this._uiManager.removeShouldRescale(this), y(this, it, nd).call(this)) : e && (this._uiManager.addShouldRescale(this), y(this, it, qa).call(this, e), s = !this.parent && ((i = this.div) == null ? void 0 : i.classList.contains("selectedEditor"))), super.setParent(e), s && this.select();
  }
  rotate() {
    this.parent && this.parent.drawLayer.updateProperties(this._drawId, N._mergeSVGProperties({
      bbox: y(this, it, wr).call(this)
    }, r(this, Le).updateRotation((this.parentRotation - this.rotation + 360) % 360)));
  }
  onScaleChanging() {
    this.parent && y(this, it, Ya).call(this, r(this, Le).updateParentDimensions(this.parentDimensions, this.parent.scale));
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
    var _;
    const {
      target: a,
      offsetX: o,
      offsetY: l,
      pointerId: h,
      pointerType: c
    } = n;
    if (r(N, Gi) && r(N, Gi) !== c)
      return;
    const {
      viewport: {
        rotation: u
      }
    } = e, {
      width: p,
      height: g
    } = a.getBoundingClientRect(), m = f(N, tr, new AbortController()), A = e.combinedSignal(m);
    if (r(N, $i) || f(N, $i, h), r(N, Gi) ?? f(N, Gi, c), window.addEventListener("pointerup", (v) => {
      var w;
      r(N, $i) === v.pointerId ? this._endDraw(v) : (w = r(N, Ui)) == null || w.delete(v.pointerId);
    }, {
      signal: A
    }), window.addEventListener("pointercancel", (v) => {
      var w;
      r(N, $i) === v.pointerId ? this._currentParent.endDrawingSession() : (w = r(N, Ui)) == null || w.delete(v.pointerId);
    }, {
      signal: A
    }), window.addEventListener("pointerdown", (v) => {
      r(N, Gi) === v.pointerType && ((r(N, Ui) || f(N, Ui, /* @__PURE__ */ new Set())).add(v.pointerId), r(N, Bt).isCancellable() && (r(N, Bt).removeLastElement(), r(N, Bt).isEmpty() ? this._currentParent.endDrawingSession(!0) : this._endDraw(null)));
    }, {
      capture: !0,
      passive: !1,
      signal: A
    }), window.addEventListener("contextmenu", ds, {
      signal: A
    }), a.addEventListener("pointermove", this._drawMove.bind(this), {
      signal: A
    }), a.addEventListener("touchmove", (v) => {
      v.timeStamp === r(N, sr) && Ne(v);
    }, {
      signal: A
    }), e.toggleDrawing(), (_ = s._editorUndoBar) == null || _.hide(), r(N, Bt)) {
      e.drawLayer.updateProperties(this._currentDrawId, r(N, Bt).startNew(o, l, p, g, u));
      return;
    }
    s.updateUIForDefaultProperties(this), f(N, Bt, this.createDrawerInstance(o, l, p, g, u)), f(N, er, this.getDefaultDrawingOptions()), this._currentParent = e, {
      id: this._currentDrawId
    } = e.drawLayer.draw(this._mergeSVGProperties(r(N, er).toSVGProperties(), r(N, Bt).defaultSVGProperties), !0, !1);
  }
  static _drawMove(e) {
    var a;
    if (f(N, sr, -1), !r(N, Bt))
      return;
    const {
      offsetX: s,
      offsetY: i,
      pointerId: n
    } = e;
    if (r(N, $i) === n) {
      if (((a = r(N, Ui)) == null ? void 0 : a.size) >= 1) {
        this._endDraw(e);
        return;
      }
      this._currentParent.drawLayer.updateProperties(this._currentDrawId, r(N, Bt).add(s, i)), f(N, sr, e.timeStamp), Ne(e);
    }
  }
  static _cleanup(e) {
    e && (this._currentDrawId = -1, this._currentParent = null, f(N, Bt, null), f(N, er, null), f(N, Gi, null), f(N, sr, NaN)), r(N, tr) && (r(N, tr).abort(), f(N, tr, null), f(N, $i, NaN), f(N, Ui, null));
  }
  static _endDraw(e) {
    const s = this._currentParent;
    if (s) {
      if (s.toggleDrawing(!0), this._cleanup(!1), e && s.drawLayer.updateProperties(this._currentDrawId, r(N, Bt).end(e.offsetX, e.offsetY)), this.supportMultipleDrawings) {
        const i = r(N, Bt), n = this._currentDrawId, a = i.getLastElement();
        s.addCommands({
          cmd: () => {
            s.drawLayer.updateProperties(n, i.setLastElement(a));
          },
          undo: () => {
            s.drawLayer.updateProperties(n, i.removeLastElement());
          },
          mustExec: !1,
          type: st.DRAW_STEP
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
    if (s.toggleDrawing(!0), s.cleanUndoStack(st.DRAW_STEP), !r(N, Bt).isEmpty()) {
      const {
        pageDimensions: [i, n],
        scale: a
      } = s, o = s.createAndAddNewEditor({
        offsetX: 0,
        offsetY: 0
      }, !1, {
        drawId: this._currentDrawId,
        drawOutlines: r(N, Bt).getOutlines(i * a, n * a, a, this._INNER_MARGIN),
        drawingOptions: r(N, er),
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
    var u, p;
    const {
      rawDims: {
        pageWidth: n,
        pageHeight: a,
        pageX: o,
        pageY: l
      }
    } = s.viewport, h = this.deserializeDraw(o, l, n, a, this._INNER_MARGIN, e), c = await super.deserialize(e, s, i);
    return c.createDrawingOptions(e), y(u = c, it, sd).call(u, {
      drawOutlines: h
    }), y(p = c, it, qa).call(p), c.onScaleChanging(), c.rotate(), c;
  }
  serializeDraw(e) {
    const [s, i] = this.pageTranslation, [n, a] = this.pageDimensions;
    return r(this, Le).serialize([s, i, n, a], e);
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
Le = new WeakMap(), _a = new WeakMap(), Bt = new WeakMap(), tr = new WeakMap(), er = new WeakMap(), $i = new WeakMap(), Gi = new WeakMap(), Ui = new WeakMap(), sr = new WeakMap(), it = new WeakSet(), sd = function({
  drawOutlines: e,
  drawId: s,
  drawingOptions: i
}) {
  f(this, Le, e), this._drawingOptions || (this._drawingOptions = i), s >= 0 ? (this._drawId = s, this.parent.drawLayer.finalizeDraw(s, e.defaultProperties)) : this._drawId = y(this, it, id).call(this, e, this.parent), y(this, it, Ya).call(this, e.box);
}, id = function(e, s) {
  const {
    id: i
  } = s.drawLayer.draw(N._mergeSVGProperties(this._drawingOptions.toSVGProperties(), e.defaultSVGProperties), !1, !1);
  return i;
}, nd = function() {
  this._drawId === null || !this.parent || (this.parent.drawLayer.remove(this._drawId), this._drawId = null, this._drawingOptions.reset());
}, qa = function(e = this.parent) {
  if (!(this._drawId !== null && this.parent === e)) {
    if (this._drawId !== null) {
      this.parent.drawLayer.updateParent(this._drawId, e.drawLayer);
      return;
    }
    this._drawingOptions.updateAll(), this._drawId = y(this, it, id).call(this, r(this, Le), e);
  }
}, jp = function([e, s, i, n]) {
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
}, ah = function() {
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
}, Ya = function(e) {
  if ([this.x, this.y, this.width, this.height] = y(this, it, jp).call(this, e), this.div) {
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
}, U(N, "_currentDrawId", -1), U(N, "_currentParent", null), b(N, Bt, null), b(N, tr, null), b(N, er, null), b(N, $i, NaN), b(N, Gi, null), b(N, Ui, null), b(N, sr, NaN), U(N, "_INNER_MARGIN", 3);
let ed = N;
var Ts, Ht, zt, ir, wa, ae, Vt, Ve, nr, rr, ar, Sa, oh;
class sm {
  constructor(t, e, s, i, n, a) {
    b(this, Sa);
    b(this, Ts, new Float64Array(6));
    b(this, Ht);
    b(this, zt);
    b(this, ir);
    b(this, wa);
    b(this, ae);
    b(this, Vt, "");
    b(this, Ve, 0);
    b(this, nr, new Ah());
    b(this, rr);
    b(this, ar);
    f(this, rr, s), f(this, ar, i), f(this, ir, n), f(this, wa, a), [t, e] = y(this, Sa, oh).call(this, t, e);
    const o = f(this, Ht, [NaN, NaN, NaN, NaN, t, e]);
    f(this, ae, [t, e]), f(this, zt, [{
      line: o,
      points: r(this, ae)
    }]), r(this, Ts).set(o, 0);
  }
  updateProperty(t, e) {
    t === "stroke-width" && f(this, wa, e);
  }
  isEmpty() {
    return !r(this, zt) || r(this, zt).length === 0;
  }
  isCancellable() {
    return r(this, ae).length <= 10;
  }
  add(t, e) {
    [t, e] = y(this, Sa, oh).call(this, t, e);
    const [s, i, n, a] = r(this, Ts).subarray(2, 6), o = t - n, l = e - a;
    return Math.hypot(r(this, rr) * o, r(this, ar) * l) <= 2 ? null : (r(this, ae).push(t, e), isNaN(s) ? (r(this, Ts).set([n, a, t, e], 2), r(this, Ht).push(NaN, NaN, NaN, NaN, t, e), {
      path: {
        d: this.toSVGPath()
      }
    }) : (isNaN(r(this, Ts)[0]) && r(this, Ht).splice(6, 6), r(this, Ts).set([s, i, n, a, t, e], 0), r(this, Ht).push(...F.createBezierPoints(s, i, n, a, t, e)), {
      path: {
        d: this.toSVGPath()
      }
    }));
  }
  end(t, e) {
    const s = this.add(t, e);
    return s || (r(this, ae).length === 2 ? {
      path: {
        d: this.toSVGPath()
      }
    } : null);
  }
  startNew(t, e, s, i, n) {
    f(this, rr, s), f(this, ar, i), f(this, ir, n), [t, e] = y(this, Sa, oh).call(this, t, e);
    const a = f(this, Ht, [NaN, NaN, NaN, NaN, t, e]);
    f(this, ae, [t, e]);
    const o = r(this, zt).at(-1);
    return o && (o.line = new Float32Array(o.line), o.points = new Float32Array(o.points)), r(this, zt).push({
      line: a,
      points: r(this, ae)
    }), r(this, Ts).set(a, 0), f(this, Ve, 0), this.toSVGPath(), null;
  }
  getLastElement() {
    return r(this, zt).at(-1);
  }
  setLastElement(t) {
    return r(this, zt) ? (r(this, zt).push(t), f(this, Ht, t.line), f(this, ae, t.points), f(this, Ve, 0), {
      path: {
        d: this.toSVGPath()
      }
    }) : r(this, nr).setLastElement(t);
  }
  removeLastElement() {
    if (!r(this, zt))
      return r(this, nr).removeLastElement();
    r(this, zt).pop(), f(this, Vt, "");
    for (let t = 0, e = r(this, zt).length; t < e; t++) {
      const {
        line: s,
        points: i
      } = r(this, zt)[t];
      f(this, Ht, s), f(this, ae, i), f(this, Ve, 0), this.toSVGPath();
    }
    return {
      path: {
        d: r(this, Vt)
      }
    };
  }
  toSVGPath() {
    const t = F.svgRound(r(this, Ht)[4]), e = F.svgRound(r(this, Ht)[5]);
    if (r(this, ae).length === 2)
      return f(this, Vt, `${r(this, Vt)} M ${t} ${e} Z`), r(this, Vt);
    if (r(this, ae).length <= 6) {
      const i = r(this, Vt).lastIndexOf("M");
      f(this, Vt, `${r(this, Vt).slice(0, i)} M ${t} ${e}`), f(this, Ve, 6);
    }
    if (r(this, ae).length === 4) {
      const i = F.svgRound(r(this, Ht)[10]), n = F.svgRound(r(this, Ht)[11]);
      return f(this, Vt, `${r(this, Vt)} L ${i} ${n}`), f(this, Ve, 12), r(this, Vt);
    }
    const s = [];
    r(this, Ve) === 0 && (s.push(`M ${t} ${e}`), f(this, Ve, 6));
    for (let i = r(this, Ve), n = r(this, Ht).length; i < n; i += 6) {
      const [a, o, l, h, c, u] = r(this, Ht).slice(i, i + 6).map(F.svgRound);
      s.push(`C${a} ${o} ${l} ${h} ${c} ${u}`);
    }
    return f(this, Vt, r(this, Vt) + s.join(" ")), f(this, Ve, r(this, Ht).length), r(this, Vt);
  }
  getOutlines(t, e, s, i) {
    const n = r(this, zt).at(-1);
    return n.line = new Float32Array(n.line), n.points = new Float32Array(n.points), r(this, nr).build(r(this, zt), t, e, s, r(this, ir), r(this, wa), i), f(this, Ts, null), f(this, Ht, null), f(this, zt, null), f(this, Vt, null), r(this, nr);
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
Ts = new WeakMap(), Ht = new WeakMap(), zt = new WeakMap(), ir = new WeakMap(), wa = new WeakMap(), ae = new WeakMap(), Vt = new WeakMap(), Ve = new WeakMap(), nr = new WeakMap(), rr = new WeakMap(), ar = new WeakMap(), Sa = new WeakSet(), oh = function(t, e) {
  return F._normalizePoint(t, e, r(this, rr), r(this, ar), r(this, ir));
};
var oe, xl, kl, Re, Ps, Ms, Ea, Ca, xa, Xt, Os, Vp, Wp, Xp;
const Ld = class Ld extends F {
  constructor() {
    super(...arguments);
    b(this, Xt);
    b(this, oe);
    b(this, xl, 0);
    b(this, kl);
    b(this, Re);
    b(this, Ps);
    b(this, Ms);
    b(this, Ea);
    b(this, Ca);
    b(this, xa);
  }
  build(e, s, i, n, a, o, l) {
    f(this, Ps, s), f(this, Ms, i), f(this, Ea, n), f(this, Ca, a), f(this, xa, o), f(this, kl, l ?? 0), f(this, Re, e), y(this, Xt, Wp).call(this);
  }
  setLastElement(e) {
    return r(this, Re).push(e), {
      path: {
        d: this.toSVGPath()
      }
    };
  }
  removeLastElement() {
    return r(this, Re).pop(), {
      path: {
        d: this.toSVGPath()
      }
    };
  }
  toSVGPath() {
    const e = [];
    for (const {
      line: s
    } of r(this, Re)) {
      if (e.push(`M${F.svgRound(s[4])} ${F.svgRound(s[5])}`), s.length === 6) {
        e.push("Z");
        continue;
      }
      if (s.length === 12) {
        e.push(`L${F.svgRound(s[10])} ${F.svgRound(s[11])}`);
        continue;
      }
      for (let i = 6, n = s.length; i < n; i += 6) {
        const [a, o, l, h, c, u] = s.subarray(i, i + 6).map(F.svgRound);
        e.push(`C${a} ${o} ${l} ${h} ${c} ${u}`);
      }
    }
    return e.join("");
  }
  serialize([e, s, i, n], a) {
    const o = [], l = [], [h, c, u, p] = y(this, Xt, Vp).call(this);
    let g, m, A, _, v, w, E, S, C;
    switch (r(this, Ca)) {
      case 0:
        C = F._rescale, g = e, m = s + n, A = i, _ = -n, v = e + h * i, w = s + (1 - c - p) * n, E = e + (h + u) * i, S = s + (1 - c) * n;
        break;
      case 90:
        C = F._rescaleAndSwap, g = e, m = s, A = i, _ = n, v = e + c * i, w = s + h * n, E = e + (c + p) * i, S = s + (h + u) * n;
        break;
      case 180:
        C = F._rescale, g = e + i, m = s, A = -i, _ = n, v = e + (1 - h - u) * i, w = s + c * n, E = e + (1 - h) * i, S = s + (c + p) * n;
        break;
      case 270:
        C = F._rescaleAndSwap, g = e + i, m = s + n, A = -i, _ = -n, v = e + (1 - c - p) * i, w = s + (1 - h - u) * n, E = e + (1 - c) * i, S = s + (1 - h) * n;
        break;
    }
    for (const {
      line: k,
      points: x
    } of r(this, Re))
      o.push(C(k, g, m, A, _, a ? new Array(k.length) : null)), l.push(C(x, g, m, A, _, a ? new Array(x.length) : null));
    return {
      lines: o,
      points: l,
      rect: [v, w, E, S]
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
    let p, g, m, A, _;
    switch (h) {
      case 0:
        _ = F._rescale, p = -e / i, g = s / n + 1, m = 1 / i, A = -1 / n;
        break;
      case 90:
        _ = F._rescaleAndSwap, p = -s / n, g = -e / i, m = 1 / n, A = 1 / i;
        break;
      case 180:
        _ = F._rescale, p = e / i + 1, g = -s / n, m = -1 / i, A = 1 / n;
        break;
      case 270:
        _ = F._rescaleAndSwap, p = s / n + 1, g = e / i + 1, m = -1 / n, A = -1 / i;
        break;
    }
    if (!o) {
      o = [];
      for (const w of l) {
        const E = w.length;
        if (E === 2) {
          o.push(new Float32Array([NaN, NaN, NaN, NaN, w[0], w[1]]));
          continue;
        }
        if (E === 4) {
          o.push(new Float32Array([NaN, NaN, NaN, NaN, w[0], w[1], NaN, NaN, NaN, NaN, w[2], w[3]]));
          continue;
        }
        const S = new Float32Array(3 * (E - 2));
        o.push(S);
        let [C, k, x, T] = w.subarray(0, 4);
        S.set([NaN, NaN, NaN, NaN, C, k], 0);
        for (let M = 4; M < E; M += 2) {
          const z = w[M], D = w[M + 1];
          S.set(F.createBezierPoints(C, k, x, T, z, D), (M - 2) * 3), [C, k, x, T] = [x, T, z, D];
        }
      }
    }
    for (let w = 0, E = o.length; w < E; w++)
      u.push({
        line: _(o[w].map((S) => S ?? NaN), p, g, m, A),
        points: _(l[w].map((S) => S ?? NaN), p, g, m, A)
      });
    const v = new Ld();
    return v.build(u, i, n, 1, h, c, a), v;
  }
  get box() {
    return r(this, oe);
  }
  updateProperty(e, s) {
    return e === "stroke-width" ? y(this, Xt, Xp).call(this, s) : null;
  }
  updateParentDimensions([e, s], i) {
    const [n, a] = y(this, Xt, Os).call(this);
    f(this, Ps, e), f(this, Ms, s), f(this, Ea, i);
    const [o, l] = y(this, Xt, Os).call(this), h = o - n, c = l - a, u = r(this, oe);
    return u[0] -= h, u[1] -= c, u[2] += 2 * h, u[3] += 2 * c, u;
  }
  updateRotation(e) {
    return f(this, xl, e), {
      path: {
        transform: this.rotationTransform
      }
    };
  }
  get viewBox() {
    return r(this, oe).map(F.svgRound).join(" ");
  }
  get defaultProperties() {
    const [e, s] = r(this, oe);
    return {
      root: {
        viewBox: this.viewBox
      },
      path: {
        "transform-origin": `${F.svgRound(e)} ${F.svgRound(s)}`
      }
    };
  }
  get rotationTransform() {
    const [, , e, s] = r(this, oe);
    let i = 0, n = 0, a = 0, o = 0, l = 0, h = 0;
    switch (r(this, xl)) {
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
    return `matrix(${i} ${n} ${a} ${o} ${F.svgRound(l)} ${F.svgRound(h)})`;
  }
  getPathResizingSVGProperties([e, s, i, n]) {
    const [a, o] = y(this, Xt, Os).call(this), [l, h, c, u] = r(this, oe);
    if (Math.abs(c - a) <= F.PRECISION || Math.abs(u - o) <= F.PRECISION) {
      const _ = e + i / 2 - (l + c / 2), v = s + n / 2 - (h + u / 2);
      return {
        path: {
          "transform-origin": `${F.svgRound(e)} ${F.svgRound(s)}`,
          transform: `${this.rotationTransform} translate(${_} ${v})`
        }
      };
    }
    const p = (i - 2 * a) / (c - 2 * a), g = (n - 2 * o) / (u - 2 * o), m = c / i, A = u / n;
    return {
      path: {
        "transform-origin": `${F.svgRound(l)} ${F.svgRound(h)}`,
        transform: `${this.rotationTransform} scale(${m} ${A}) translate(${F.svgRound(a)} ${F.svgRound(o)}) scale(${p} ${g}) translate(${F.svgRound(-a)} ${F.svgRound(-o)})`
      }
    };
  }
  getPathResizedSVGProperties([e, s, i, n]) {
    const [a, o] = y(this, Xt, Os).call(this), l = r(this, oe), [h, c, u, p] = l;
    if (l[0] = e, l[1] = s, l[2] = i, l[3] = n, Math.abs(u - a) <= F.PRECISION || Math.abs(p - o) <= F.PRECISION) {
      const v = e + i / 2 - (h + u / 2), w = s + n / 2 - (c + p / 2);
      for (const {
        line: E,
        points: S
      } of r(this, Re))
        F._translate(E, v, w, E), F._translate(S, v, w, S);
      return {
        root: {
          viewBox: this.viewBox
        },
        path: {
          "transform-origin": `${F.svgRound(e)} ${F.svgRound(s)}`,
          transform: this.rotationTransform || null,
          d: this.toSVGPath()
        }
      };
    }
    const g = (i - 2 * a) / (u - 2 * a), m = (n - 2 * o) / (p - 2 * o), A = -g * (h + a) + e + a, _ = -m * (c + o) + s + o;
    if (g !== 1 || m !== 1 || A !== 0 || _ !== 0)
      for (const {
        line: v,
        points: w
      } of r(this, Re))
        F._rescale(v, A, _, g, m, v), F._rescale(w, A, _, g, m, w);
    return {
      root: {
        viewBox: this.viewBox
      },
      path: {
        "transform-origin": `${F.svgRound(e)} ${F.svgRound(s)}`,
        transform: this.rotationTransform || null,
        d: this.toSVGPath()
      }
    };
  }
  getPathTranslatedSVGProperties([e, s], i) {
    const [n, a] = i, o = r(this, oe), l = e - o[0], h = s - o[1];
    if (r(this, Ps) === n && r(this, Ms) === a)
      for (const {
        line: c,
        points: u
      } of r(this, Re))
        F._translate(c, l, h, c), F._translate(u, l, h, u);
    else {
      const c = r(this, Ps) / n, u = r(this, Ms) / a;
      f(this, Ps, n), f(this, Ms, a);
      for (const {
        line: p,
        points: g
      } of r(this, Re))
        F._rescale(p, l, h, c, u, p), F._rescale(g, l, h, c, u, g);
      o[2] *= c, o[3] *= u;
    }
    return o[0] = e, o[1] = s, {
      root: {
        viewBox: this.viewBox
      },
      path: {
        d: this.toSVGPath(),
        "transform-origin": `${F.svgRound(e)} ${F.svgRound(s)}`
      }
    };
  }
  get defaultSVGProperties() {
    const e = r(this, oe);
    return {
      root: {
        viewBox: this.viewBox
      },
      rootClass: {
        draw: !0
      },
      path: {
        d: this.toSVGPath(),
        "transform-origin": `${F.svgRound(e[0])} ${F.svgRound(e[1])}`,
        transform: this.rotationTransform || null
      },
      bbox: e
    };
  }
};
oe = new WeakMap(), xl = new WeakMap(), kl = new WeakMap(), Re = new WeakMap(), Ps = new WeakMap(), Ms = new WeakMap(), Ea = new WeakMap(), Ca = new WeakMap(), xa = new WeakMap(), Xt = new WeakSet(), Os = function(e = r(this, xa)) {
  const s = r(this, kl) + e / 2 * r(this, Ea);
  return r(this, Ca) % 180 === 0 ? [s / r(this, Ps), s / r(this, Ms)] : [s / r(this, Ms), s / r(this, Ps)];
}, Vp = function() {
  const [e, s, i, n] = r(this, oe), [a, o] = y(this, Xt, Os).call(this, 0);
  return [e + a, s + o, i - 2 * a, n - 2 * o];
}, Wp = function() {
  const e = f(this, oe, new Float32Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]));
  for (const {
    line: n
  } of r(this, Re)) {
    if (n.length <= 12) {
      for (let l = 4, h = n.length; l < h; l += 6) {
        const [c, u] = n.subarray(l, l + 2);
        e[0] = Math.min(e[0], c), e[1] = Math.min(e[1], u), e[2] = Math.max(e[2], c), e[3] = Math.max(e[3], u);
      }
      continue;
    }
    let a = n[4], o = n[5];
    for (let l = 6, h = n.length; l < h; l += 6) {
      const [c, u, p, g, m, A] = n.subarray(l, l + 6);
      H.bezierBoundingBox(a, o, c, u, p, g, m, A, e), a = m, o = A;
    }
  }
  const [s, i] = y(this, Xt, Os).call(this);
  e[0] = Math.min(1, Math.max(0, e[0] - s)), e[1] = Math.min(1, Math.max(0, e[1] - i)), e[2] = Math.min(1, Math.max(0, e[2] + s)), e[3] = Math.min(1, Math.max(0, e[3] + i)), e[2] -= e[0], e[3] -= e[1];
}, Xp = function(e) {
  const [s, i] = y(this, Xt, Os).call(this);
  f(this, xa, e);
  const [n, a] = y(this, Xt, Os).call(this), [o, l] = [n - s, a - i], h = r(this, oe);
  return h[0] -= o, h[1] -= l, h[2] += 2 * o, h[3] += 2 * l, h;
};
let Ah = Ld;
var ka;
const Rd = class Rd extends em {
  constructor(e) {
    super();
    b(this, ka);
    f(this, ka, e), super.updateProperties({
      fill: "none",
      stroke: _t._defaultLineColor,
      "stroke-opacity": 1,
      "stroke-width": 1,
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-miterlimit": 10
    });
  }
  updateSVGProperty(e, s) {
    e === "stroke-width" && (s ?? (s = this["stroke-width"]), s *= r(this, ka).realScale), super.updateSVGProperty(e, s);
  }
  clone() {
    const e = new Rd(r(this, ka));
    return e.updateAll(this), e;
  }
};
ka = new WeakMap();
let rd = Rd;
var Oh, qp;
const Er = class Er extends ed {
  constructor(e) {
    super({
      ...e,
      name: "inkEditor"
    });
    b(this, Oh);
    this._willKeepAspectRatio = !0;
  }
  static initialize(e, s) {
    _t.initialize(e, s), this._defaultDrawingOptions = new rd(s.viewParameters);
  }
  static getDefaultDrawingOptions(e) {
    const s = this._defaultDrawingOptions.clone();
    return s.updateProperties(e), s;
  }
  static get supportMultipleDrawings() {
    return !0;
  }
  static get typesMap() {
    return J(this, "typesMap", /* @__PURE__ */ new Map([[st.INK_THICKNESS, "stroke-width"], [st.INK_COLOR, "stroke"], [st.INK_OPACITY, "stroke-opacity"]]));
  }
  static createDrawerInstance(e, s, i, n, a) {
    return new sm(e, s, i, n, a, this._defaultDrawingOptions["stroke-width"]);
  }
  static deserializeDraw(e, s, i, n, a, o) {
    return Ah.deserialize(e, s, i, n, a, o);
  }
  static async deserialize(e, s, i) {
    let n = null;
    if (e instanceof Cd) {
      const {
        data: {
          inkLists: o,
          rect: l,
          rotation: h,
          id: c,
          color: u,
          opacity: p,
          borderStyle: {
            rawWidth: g
          },
          popupRef: m
        },
        parent: {
          page: {
            pageNumber: A
          }
        }
      } = e;
      n = e = {
        annotationType: Y.INK,
        color: Array.from(u),
        thickness: g,
        opacity: p,
        paths: {
          points: o
        },
        boxes: null,
        pageIndex: A - 1,
        rect: l.slice(0),
        rotation: h,
        id: c,
        deleted: !1,
        popupRef: m
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
    this._drawingOptions = Er.getDefaultDrawingOptions({
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
      annotationType: Y.INK,
      color: _t._colorManager.convert(a),
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
    return e ? h : this.annotationElementId && !y(this, Oh, qp).call(this, h) ? null : (h.id = this.annotationElementId, h);
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
Oh = new WeakSet(), qp = function(e) {
  const {
    color: s,
    thickness: i,
    opacity: n,
    pageIndex: a
  } = this._initialData;
  return this._hasBeenMoved || this._hasBeenResized || e.color.some((o, l) => o !== s[l]) || e.thickness !== i || e.opacity !== n || e.pageIndex !== a;
}, U(Er, "_type", "ink"), U(Er, "_editorType", Y.INK), U(Er, "_defaultDrawingOptions", null);
let ad = Er;
var vt, Wt, ji, oi, Vi, Ta, Ls, Rs, Ie, Pa, nt, Ka, Qa, lh, ld, hh, hd, ch, Yp;
const Ja = class Ja extends _t {
  constructor(e) {
    super({
      ...e,
      name: "stampEditor"
    });
    b(this, nt);
    b(this, vt, null);
    b(this, Wt, null);
    b(this, ji, null);
    b(this, oi, null);
    b(this, Vi, null);
    b(this, Ta, "");
    b(this, Ls, null);
    b(this, Rs, null);
    b(this, Ie, !1);
    b(this, Pa, !1);
    f(this, oi, e.bitmapUrl), f(this, Vi, e.bitmapFile);
  }
  static initialize(e, s) {
    _t.initialize(e, s);
  }
  static get supportedTypes() {
    return J(this, "supportedTypes", ["apng", "avif", "bmp", "gif", "jpeg", "png", "svg+xml", "webp", "x-icon"].map((s) => `image/${s}`));
  }
  static get supportedTypesStr() {
    return J(this, "supportedTypesStr", this.supportedTypes.join(","));
  }
  static isHandlingMimeForPasting(e) {
    return this.supportedTypes.includes(e);
  }
  static paste(e, s) {
    s.pasteEditor(Y.STAMP, {
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
    r(this, Wt) && (f(this, vt, null), this._uiManager.imageManager.deleteId(r(this, Wt)), (e = r(this, Ls)) == null || e.remove(), f(this, Ls, null), r(this, Rs) && (clearTimeout(r(this, Rs)), f(this, Rs, null))), super.remove();
  }
  rebuild() {
    if (!this.parent) {
      r(this, Wt) && y(this, nt, lh).call(this);
      return;
    }
    super.rebuild(), this.div !== null && (r(this, Wt) && r(this, Ls) === null && y(this, nt, lh).call(this), this.isAttachedToDOM || this.parent.add(this));
  }
  onceAdded(e) {
    this._isDraggable = !0, e && this.div.focus();
  }
  isEmpty() {
    return !(r(this, ji) || r(this, vt) || r(this, oi) || r(this, Vi) || r(this, Wt));
  }
  get isResizable() {
    return !0;
  }
  render() {
    if (this.div)
      return this.div;
    let e, s;
    if (this.width && (e = this.x, s = this.y), super.render(), this.div.hidden = !0, this.div.setAttribute("role", "figure"), this.addAltTextButton(), r(this, vt) ? y(this, nt, ld).call(this) : y(this, nt, lh).call(this), this.width && !this.annotationElementId) {
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
    r(this, Rs) !== null && clearTimeout(r(this, Rs)), f(this, Rs, setTimeout(() => {
      f(this, Rs, null), y(this, nt, hd).call(this);
    }, 200));
  }
  copyCanvas(e, s, i = !1) {
    var g;
    e || (e = 224);
    const {
      width: n,
      height: a
    } = r(this, vt), o = new rc();
    let l = r(this, vt), h = n, c = a, u = null;
    if (s) {
      if (n > s || a > s) {
        const T = Math.min(s / n, s / a);
        h = Math.floor(n * T), c = Math.floor(a * T);
      }
      u = document.createElement("canvas");
      const m = u.width = Math.ceil(h * o.sx), A = u.height = Math.ceil(c * o.sy);
      r(this, Ie) || (l = y(this, nt, hh).call(this, m, A));
      const _ = u.getContext("2d");
      _.filter = this._uiManager.hcmFilter;
      let v = "white", w = "#cfcfd8";
      this._uiManager.hcmFilter !== "none" ? w = "black" : (g = window.matchMedia) != null && g.call(window, "(prefers-color-scheme: dark)").matches && (v = "#8f8f9d", w = "#42414d");
      const E = 15, S = E * o.sx, C = E * o.sy, k = new OffscreenCanvas(S * 2, C * 2), x = k.getContext("2d");
      x.fillStyle = v, x.fillRect(0, 0, S * 2, C * 2), x.fillStyle = w, x.fillRect(0, 0, S, C), x.fillRect(S, C, S, C), _.fillStyle = _.createPattern(k, "repeat"), _.fillRect(0, 0, m, A), _.drawImage(l, 0, 0, l.width, l.height, 0, 0, m, A);
    }
    let p = null;
    if (i) {
      let m, A;
      if (o.symmetric && l.width < e && l.height < e)
        m = l.width, A = l.height;
      else if (l = r(this, vt), n > e || a > e) {
        const w = Math.min(e / n, e / a);
        m = Math.floor(n * w), A = Math.floor(a * w), r(this, Ie) || (l = y(this, nt, hh).call(this, m, A));
      }
      const v = new OffscreenCanvas(m, A).getContext("2d", {
        willReadFrequently: !0
      });
      v.drawImage(l, 0, 0, l.width, l.height, 0, 0, m, A), p = {
        width: m,
        height: A,
        data: v.getImageData(0, 0, m, A).data
      };
    }
    return {
      canvas: u,
      width: h,
      height: c,
      imageData: p
    };
  }
  getImageForAltText() {
    return r(this, Ls);
  }
  static async deserialize(e, s, i) {
    var A;
    let n = null;
    if (e instanceof mp) {
      const {
        data: {
          rect: _,
          rotation: v,
          id: w,
          structParent: E,
          popupRef: S
        },
        container: C,
        parent: {
          page: {
            pageNumber: k
          }
        }
      } = e, x = C.querySelector("canvas"), T = i.imageManager.getFromCanvas(C.id, x);
      x.remove();
      const M = ((A = await s._structTree.getAriaAttributes(`${bd}${w}`)) == null ? void 0 : A.get("aria-label")) || "";
      n = e = {
        annotationType: Y.STAMP,
        bitmapId: T.id,
        bitmap: T.bitmap,
        pageIndex: k - 1,
        rect: _.slice(0),
        rotation: v,
        id: w,
        deleted: !1,
        accessibilityData: {
          decorative: !1,
          altText: M
        },
        isSvg: !1,
        structParent: E,
        popupRef: S
      };
    }
    const a = await super.deserialize(e, s, i), {
      rect: o,
      bitmap: l,
      bitmapUrl: h,
      bitmapId: c,
      isSvg: u,
      accessibilityData: p
    } = e;
    c && i.imageManager.isValidId(c) ? (f(a, Wt, c), l && f(a, vt, l)) : f(a, oi, h), f(a, Ie, u);
    const [g, m] = a.pageDimensions;
    return a.width = (o[2] - o[0]) / g, a.height = (o[3] - o[1]) / m, a.annotationElementId = e.id || null, p && (a.altTextData = p), a._initialData = n, f(a, Pa, !!n), a;
  }
  serialize(e = !1, s = null) {
    if (this.isEmpty())
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const i = {
      annotationType: Y.STAMP,
      bitmapId: r(this, Wt),
      pageIndex: this.pageIndex,
      rect: this.getRect(0, 0),
      rotation: this.rotation,
      isSvg: r(this, Ie),
      structTreeParentId: this._structTreeParentId
    };
    if (e)
      return i.bitmapUrl = y(this, nt, ch).call(this, !0), i.accessibilityData = this.serializeAltText(!0), i;
    const {
      decorative: n,
      altText: a
    } = this.serializeAltText(!1);
    if (!n && a && (i.accessibilityData = {
      type: "Figure",
      alt: a
    }), this.annotationElementId) {
      const l = y(this, nt, Yp).call(this, i);
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
      }), i.bitmap = y(this, nt, ch).call(this, !1);
    else if (r(this, Ie)) {
      const l = s.stamps.get(r(this, Wt));
      o > l.area && (l.area = o, l.serialized.bitmap.close(), l.serialized.bitmap = y(this, nt, ch).call(this, !1));
    }
    return i;
  }
  renderAnnotationElement(e) {
    return e.updateEdited({
      rect: this.getRect(0, 0)
    }), null;
  }
};
vt = new WeakMap(), Wt = new WeakMap(), ji = new WeakMap(), oi = new WeakMap(), Vi = new WeakMap(), Ta = new WeakMap(), Ls = new WeakMap(), Rs = new WeakMap(), Ie = new WeakMap(), Pa = new WeakMap(), nt = new WeakSet(), Ka = function(e, s = !1) {
  if (!e) {
    this.remove();
    return;
  }
  f(this, vt, e.bitmap), s || (f(this, Wt, e.id), f(this, Ie, e.isSvg)), e.file && f(this, Ta, e.file.name), y(this, nt, ld).call(this);
}, Qa = function() {
  if (f(this, ji, null), this._uiManager.enableWaiting(!1), !!r(this, Ls)) {
    if (this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && r(this, vt)) {
      this._editToolbar.hide(), this._uiManager.editAltText(this, !0);
      return;
    }
    if (!this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && r(this, vt)) {
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
}, lh = function() {
  if (r(this, Wt)) {
    this._uiManager.enableWaiting(!0), this._uiManager.imageManager.getFromId(r(this, Wt)).then((i) => y(this, nt, Ka).call(this, i, !0)).finally(() => y(this, nt, Qa).call(this));
    return;
  }
  if (r(this, oi)) {
    const i = r(this, oi);
    f(this, oi, null), this._uiManager.enableWaiting(!0), f(this, ji, this._uiManager.imageManager.getFromUrl(i).then((n) => y(this, nt, Ka).call(this, n)).finally(() => y(this, nt, Qa).call(this)));
    return;
  }
  if (r(this, Vi)) {
    const i = r(this, Vi);
    f(this, Vi, null), this._uiManager.enableWaiting(!0), f(this, ji, this._uiManager.imageManager.getFromFile(i).then((n) => y(this, nt, Ka).call(this, n)).finally(() => y(this, nt, Qa).call(this)));
    return;
  }
  const e = document.createElement("input");
  e.type = "file", e.accept = Ja.supportedTypesStr;
  const s = this._uiManager._signal;
  f(this, ji, new Promise((i) => {
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
        }), y(this, nt, Ka).call(this, n);
      }
      i();
    }, {
      signal: s
    }), e.addEventListener("cancel", () => {
      this.remove(), i();
    }, {
      signal: s
    });
  }).finally(() => y(this, nt, Qa).call(this))), e.click();
}, ld = function() {
  var u;
  const {
    div: e
  } = this;
  let {
    width: s,
    height: i
  } = r(this, vt);
  const [n, a] = this.pageDimensions, o = 0.75;
  if (this.width)
    s = this.width * n, i = this.height * a;
  else if (s > o * n || i > o * a) {
    const p = Math.min(o * n / s, o * a / i);
    s *= p, i *= p;
  }
  const [l, h] = this.parentDimensions;
  this.setDims(s * l / n, i * h / a), this._uiManager.enableWaiting(!1);
  const c = f(this, Ls, document.createElement("canvas"));
  c.setAttribute("role", "img"), this.addContainer(c), this.width = s / n, this.height = i / a, (u = this._initialOptions) != null && u.isCentered ? this.center() : this.fixAndSetPosition(), this._initialOptions = null, (!this._uiManager.useNewAltTextWhenAddingImage || !this._uiManager.useNewAltTextFlow || this.annotationElementId) && (e.hidden = !1), y(this, nt, hd).call(this), r(this, Pa) || (this.parent.addUndoableEditor(this), f(this, Pa, !0)), this._reportTelemetry({
    action: "inserted_image"
  }), r(this, Ta) && c.setAttribute("aria-label", r(this, Ta));
}, hh = function(e, s) {
  const {
    width: i,
    height: n
  } = r(this, vt);
  let a = i, o = n, l = r(this, vt);
  for (; a > 2 * e || o > 2 * s; ) {
    const h = a, c = o;
    a > 2 * e && (a = a >= 16384 ? Math.floor(a / 2) - 1 : Math.ceil(a / 2)), o > 2 * s && (o = o >= 16384 ? Math.floor(o / 2) - 1 : Math.ceil(o / 2));
    const u = new OffscreenCanvas(a, o);
    u.getContext("2d").drawImage(l, 0, 0, h, c, 0, 0, a, o), l = u.transferToImageBitmap();
  }
  return l;
}, hd = function() {
  const [e, s] = this.parentDimensions, {
    width: i,
    height: n
  } = this, a = new rc(), o = Math.ceil(i * e * a.sx), l = Math.ceil(n * s * a.sy), h = r(this, Ls);
  if (!h || h.width === o && h.height === l)
    return;
  h.width = o, h.height = l;
  const c = r(this, Ie) ? r(this, vt) : y(this, nt, hh).call(this, o, l), u = h.getContext("2d");
  u.filter = this._uiManager.hcmFilter, u.drawImage(c, 0, 0, c.width, c.height, 0, 0, o, l);
}, ch = function(e) {
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
    } = r(this, vt), s.getContext("2d").drawImage(r(this, vt), 0, 0), s.toDataURL();
  }
  if (r(this, Ie)) {
    const [s, i] = this.pageDimensions, n = Math.round(this.width * s * Qi.PDF_TO_CSS_UNITS), a = Math.round(this.height * i * Qi.PDF_TO_CSS_UNITS), o = new OffscreenCanvas(n, a);
    return o.getContext("2d").drawImage(r(this, vt), 0, 0, r(this, vt).width, r(this, vt).height, 0, 0, n, a), o.transferToImageBitmap();
  }
  return structuredClone(r(this, vt));
}, Yp = function(e) {
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
}, U(Ja, "_type", "stamp"), U(Ja, "_editorType", Y.STAMP);
let od = Ja;
var or, Ma, Is, Wi, li, We, Xi, La, lr, ls, hi, te, ci, B, qi, yt, Kp, ms, dd, ud, dh;
const Ke = class Ke {
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
    b(this, yt);
    b(this, or);
    b(this, Ma, !1);
    b(this, Is, null);
    b(this, Wi, null);
    b(this, li, null);
    b(this, We, /* @__PURE__ */ new Map());
    b(this, Xi, !1);
    b(this, La, !1);
    b(this, lr, !1);
    b(this, ls, null);
    b(this, hi, null);
    b(this, te, null);
    b(this, ci, null);
    b(this, B);
    const u = [...r(Ke, qi).values()];
    if (!Ke._initialized) {
      Ke._initialized = !0;
      for (const p of u)
        p.initialize(c, t);
    }
    t.registerEditorTypes(u), f(this, B, t), this.pageIndex = e, this.div = s, f(this, or, n), f(this, Is, a), this.viewport = h, f(this, te, l), this.drawLayer = o, this._structTree = i, r(this, B).addLayer(this);
  }
  get isEmpty() {
    return r(this, We).size === 0;
  }
  get isInvisible() {
    return this.isEmpty && r(this, B).getMode() === Y.NONE;
  }
  updateToolbar(t) {
    r(this, B).updateToolbar(t);
  }
  updateMode(t = r(this, B).getMode()) {
    switch (y(this, yt, dh).call(this), t) {
      case Y.NONE:
        this.disableTextSelection(), this.togglePointerEvents(!1), this.toggleAnnotationLayerPointerEvents(!0), this.disableClick();
        return;
      case Y.INK:
        this.disableTextSelection(), this.togglePointerEvents(!0), this.enableClick();
        break;
      case Y.HIGHLIGHT:
        this.enableTextSelection(), this.togglePointerEvents(!1), this.disableClick();
        break;
      default:
        this.disableTextSelection(), this.togglePointerEvents(!0), this.enableClick();
    }
    this.toggleAnnotationLayerPointerEvents(!1);
    const {
      classList: e
    } = this.div;
    for (const s of r(Ke, qi).values())
      e.toggle(`${s._type}Editing`, t === s._editorType);
    this.div.hidden = !1;
  }
  hasTextLayer(t) {
    var e;
    return t === ((e = r(this, te)) == null ? void 0 : e.div);
  }
  setEditingState(t) {
    r(this, B).setEditingState(t);
  }
  addCommands(t) {
    r(this, B).addCommands(t);
  }
  cleanUndoStack(t) {
    r(this, B).cleanUndoStack(t);
  }
  toggleDrawing(t = !1) {
    this.div.classList.toggle("drawing", !t);
  }
  togglePointerEvents(t = !1) {
    this.div.classList.toggle("disabled", !t);
  }
  toggleAnnotationLayerPointerEvents(t = !1) {
    var e;
    (e = r(this, Is)) == null || e.div.classList.toggle("disabled", !t);
  }
  async enable() {
    f(this, lr, !0), this.div.tabIndex = 0, this.togglePointerEvents(!0);
    const t = /* @__PURE__ */ new Set();
    for (const s of r(this, We).values())
      s.enableEditing(), s.show(!0), s.annotationElementId && (r(this, B).removeChangedExistingAnnotation(s), t.add(s.annotationElementId));
    if (!r(this, Is)) {
      f(this, lr, !1);
      return;
    }
    const e = r(this, Is).getEditableAnnotations();
    for (const s of e) {
      if (s.hide(), r(this, B).isDeletedAnnotationElement(s.data.id) || t.has(s.data.id))
        continue;
      const i = await this.deserialize(s);
      i && (this.addOrRebuild(i), i.enableEditing());
    }
    f(this, lr, !1);
  }
  disable() {
    var i;
    f(this, La, !0), this.div.tabIndex = -1, this.togglePointerEvents(!1);
    const t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map();
    for (const n of r(this, We).values())
      if (n.disableEditing(), !!n.annotationElementId) {
        if (n.serialize() !== null) {
          t.set(n.annotationElementId, n);
          continue;
        } else
          e.set(n.annotationElementId, n);
        (i = this.getEditableAnnotation(n.annotationElementId)) == null || i.show(), n.remove();
      }
    if (r(this, Is)) {
      const n = r(this, Is).getEditableAnnotations();
      for (const a of n) {
        const {
          id: o
        } = a.data;
        if (r(this, B).isDeletedAnnotationElement(o))
          continue;
        let l = e.get(o);
        if (l) {
          l.resetAnnotationElement(a), l.show(!1), a.show();
          continue;
        }
        l = t.get(o), l && (r(this, B).addChangedExistingAnnotation(l), l.renderAnnotationElement(a) && l.show(!1)), a.show();
      }
    }
    y(this, yt, dh).call(this), this.isEmpty && (this.div.hidden = !0);
    const {
      classList: s
    } = this.div;
    for (const n of r(Ke, qi).values())
      s.remove(`${n._type}Editing`);
    this.disableTextSelection(), this.toggleAnnotationLayerPointerEvents(!0), f(this, La, !1);
  }
  getEditableAnnotation(t) {
    var e;
    return ((e = r(this, Is)) == null ? void 0 : e.getEditableAnnotation(t)) || null;
  }
  setActiveEditor(t) {
    r(this, B).getActive() !== t && r(this, B).setActiveEditor(t);
  }
  enableTextSelection() {
    var t;
    if (this.div.tabIndex = -1, (t = r(this, te)) != null && t.div && !r(this, ci)) {
      f(this, ci, new AbortController());
      const e = r(this, B).combinedSignal(r(this, ci));
      r(this, te).div.addEventListener("pointerdown", y(this, yt, Kp).bind(this), {
        signal: e
      }), r(this, te).div.classList.add("highlighting");
    }
  }
  disableTextSelection() {
    var t;
    this.div.tabIndex = 0, (t = r(this, te)) != null && t.div && r(this, ci) && (r(this, ci).abort(), f(this, ci, null), r(this, te).div.classList.remove("highlighting"));
  }
  enableClick() {
    if (r(this, Wi))
      return;
    f(this, Wi, new AbortController());
    const t = r(this, B).combinedSignal(r(this, Wi));
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
    (t = r(this, Wi)) == null || t.abort(), f(this, Wi, null);
  }
  attach(t) {
    r(this, We).set(t.id, t);
    const {
      annotationElementId: e
    } = t;
    e && r(this, B).isDeletedAnnotationElement(e) && r(this, B).removeDeletedAnnotationElement(t);
  }
  detach(t) {
    var e;
    r(this, We).delete(t.id), (e = r(this, or)) == null || e.removePointerInTextLayer(t.contentDiv), !r(this, La) && t.annotationElementId && r(this, B).addDeletedAnnotationElement(t);
  }
  remove(t) {
    this.detach(t), r(this, B).removeEditor(t), t.div.remove(), t.isAttachedToDOM = !1;
  }
  changeParent(t) {
    var e;
    t.parent !== this && (t.parent && t.annotationElementId && (r(this, B).addDeletedAnnotationElement(t.annotationElementId), _t.deleteAnnotationElement(t), t.annotationElementId = null), this.attach(t), (e = t.parent) == null || e.detach(t), t.setParent(this), t.div && t.isAttachedToDOM && (t.div.remove(), this.div.append(t.div)));
  }
  add(t) {
    if (!(t.parent === this && t.isAttachedToDOM)) {
      if (this.changeParent(t), r(this, B).addEditor(t), this.attach(t), !t.isAttachedToDOM) {
        const e = t.render();
        this.div.append(e), t.isAttachedToDOM = !0;
      }
      t.fixAndSetPosition(), t.onceAdded(!r(this, lr)), r(this, B).addToAnnotationStorage(t), t._reportTelemetry(t.telemetryInitialData);
    }
  }
  moveEditorInDOM(t) {
    var s;
    if (!t.isAttachedToDOM)
      return;
    const {
      activeElement: e
    } = document;
    t.div.contains(e) && !r(this, li) && (t._focusEventsAllowed = !1, f(this, li, setTimeout(() => {
      f(this, li, null), t.div.contains(document.activeElement) ? t._focusEventsAllowed = !0 : (t.div.addEventListener("focusin", () => {
        t._focusEventsAllowed = !0;
      }, {
        once: !0,
        signal: r(this, B)._signal
      }), e.focus());
    }, 0))), t._structTreeParentId = (s = r(this, or)) == null ? void 0 : s.moveElementInDOM(this.div, t.div, t.contentDiv, !0);
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
    return r(this, B).getId();
  }
  combinedSignal(t) {
    return r(this, B).combinedSignal(t);
  }
  canCreateNewEmptyEditor() {
    var t;
    return (t = r(this, yt, ms)) == null ? void 0 : t.canCreateNewEmptyEditor();
  }
  pasteEditor(t, e) {
    r(this, B).updateToolbar(t), r(this, B).updateMode(t);
    const {
      offsetX: s,
      offsetY: i
    } = y(this, yt, ud).call(this), n = this.getNextId(), a = y(this, yt, dd).call(this, {
      parent: this,
      id: n,
      x: s,
      y: i,
      uiManager: r(this, B),
      isCentered: !0,
      ...e
    });
    a && this.add(a);
  }
  async deserialize(t) {
    var e;
    return await ((e = r(Ke, qi).get(t.annotationType ?? t.annotationEditorType)) == null ? void 0 : e.deserialize(t, this, r(this, B))) || null;
  }
  createAndAddNewEditor(t, e, s = {}) {
    const i = this.getNextId(), n = y(this, yt, dd).call(this, {
      parent: this,
      id: i,
      x: t.offsetX,
      y: t.offsetY,
      uiManager: r(this, B),
      isCentered: e,
      ...s
    });
    return n && this.add(n), n;
  }
  addNewEditor() {
    this.createAndAddNewEditor(y(this, yt, ud).call(this), !0);
  }
  setSelected(t) {
    r(this, B).setSelected(t);
  }
  toggleSelected(t) {
    r(this, B).toggleSelected(t);
  }
  unselect(t) {
    r(this, B).unselect(t);
  }
  pointerup(t) {
    var s;
    const {
      isMac: e
    } = he.platform;
    if (!(t.button !== 0 || t.ctrlKey && e) && t.target === this.div && r(this, Xi) && (f(this, Xi, !1), !((s = r(this, yt, ms)) != null && s.isDrawer && r(this, yt, ms).supportMultipleDrawings))) {
      if (!r(this, Ma)) {
        f(this, Ma, !0);
        return;
      }
      if (r(this, B).getMode() === Y.STAMP) {
        r(this, B).unselectAll();
        return;
      }
      this.createAndAddNewEditor(t, !1);
    }
  }
  pointerdown(t) {
    var i;
    if (r(this, B).getMode() === Y.HIGHLIGHT && this.enableTextSelection(), r(this, Xi)) {
      f(this, Xi, !1);
      return;
    }
    const {
      isMac: e
    } = he.platform;
    if (t.button !== 0 || t.ctrlKey && e || t.target !== this.div)
      return;
    if (f(this, Xi, !0), (i = r(this, yt, ms)) != null && i.isDrawer) {
      this.startDrawingSession(t);
      return;
    }
    const s = r(this, B).getActive();
    f(this, Ma, !s || s.isEmpty());
  }
  startDrawingSession(t) {
    if (this.div.focus(), r(this, ls)) {
      r(this, yt, ms).startDrawing(this, r(this, B), !1, t);
      return;
    }
    r(this, B).setCurrentDrawingSession(this), f(this, ls, new AbortController());
    const e = r(this, B).combinedSignal(r(this, ls));
    this.div.addEventListener("blur", ({
      relatedTarget: s
    }) => {
      s && !this.div.contains(s) && (f(this, hi, null), this.commitOrRemove());
    }, {
      signal: e
    }), r(this, yt, ms).startDrawing(this, r(this, B), !1, t);
  }
  pause(t) {
    if (t) {
      const {
        activeElement: e
      } = document;
      this.div.contains(e) && f(this, hi, e);
      return;
    }
    r(this, hi) && setTimeout(() => {
      var e;
      (e = r(this, hi)) == null || e.focus(), f(this, hi, null);
    }, 0);
  }
  endDrawingSession(t = !1) {
    return r(this, ls) ? (r(this, B).setCurrentDrawingSession(null), r(this, ls).abort(), f(this, ls, null), f(this, hi, null), r(this, yt, ms).endDrawing(t)) : null;
  }
  findNewParent(t, e, s) {
    const i = r(this, B).findParent(e, s);
    return i === null || i === this ? !1 : (i.changeParent(t), !0);
  }
  commitOrRemove() {
    return r(this, ls) ? (this.endDrawingSession(), !0) : !1;
  }
  onScaleChanging() {
    r(this, ls) && r(this, yt, ms).onScaleChangingWhenDrawing(this);
  }
  destroy() {
    var t, e;
    this.commitOrRemove(), ((t = r(this, B).getActive()) == null ? void 0 : t.parent) === this && (r(this, B).commitOrRemove(), r(this, B).setActiveEditor(null)), r(this, li) && (clearTimeout(r(this, li)), f(this, li, null));
    for (const s of r(this, We).values())
      (e = r(this, or)) == null || e.removePointerInTextLayer(s.contentDiv), s.setParent(null), s.isAttachedToDOM = !1, s.div.remove();
    this.div = null, r(this, We).clear(), r(this, B).removeLayer(this);
  }
  render({
    viewport: t
  }) {
    this.viewport = t, cr(this.div, t);
    for (const e of r(this, B).getEditors(this.pageIndex))
      this.add(e), e.rebuild();
    this.updateMode();
  }
  update({
    viewport: t
  }) {
    r(this, B).commitOrRemove(), y(this, yt, dh).call(this);
    const e = this.viewport.rotation, s = t.rotation;
    if (this.viewport = t, cr(this.div, {
      rotation: s
    }), e !== s)
      for (const i of r(this, We).values())
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
    return r(this, B).viewParameters.realScale;
  }
};
or = new WeakMap(), Ma = new WeakMap(), Is = new WeakMap(), Wi = new WeakMap(), li = new WeakMap(), We = new WeakMap(), Xi = new WeakMap(), La = new WeakMap(), lr = new WeakMap(), ls = new WeakMap(), hi = new WeakMap(), te = new WeakMap(), ci = new WeakMap(), B = new WeakMap(), qi = new WeakMap(), yt = new WeakSet(), Kp = function(t) {
  r(this, B).unselectAll();
  const {
    target: e
  } = t;
  if (e === r(this, te).div || (e.getAttribute("role") === "img" || e.classList.contains("endOfContent")) && r(this, te).div.contains(e)) {
    const {
      isMac: s
    } = he.platform;
    if (t.button !== 0 || t.ctrlKey && s)
      return;
    r(this, B).showAllEditors("highlight", !0, !0), r(this, te).div.classList.add("free"), this.toggleDrawing(), yh.startHighlighting(this, r(this, B).direction === "ltr", {
      target: r(this, te).div,
      x: t.x,
      y: t.y
    }), r(this, te).div.addEventListener("pointerup", () => {
      r(this, te).div.classList.remove("free"), this.toggleDrawing(!0);
    }, {
      once: !0,
      signal: r(this, B)._signal
    }), t.preventDefault();
  }
}, ms = function() {
  return r(Ke, qi).get(r(this, B).getMode());
}, dd = function(t) {
  const e = r(this, yt, ms);
  return e ? new e.prototype.constructor(t) : null;
}, ud = function() {
  const {
    x: t,
    y: e,
    width: s,
    height: i
  } = this.div.getBoundingClientRect(), n = Math.max(0, t), a = Math.max(0, e), o = Math.min(window.innerWidth, t + s), l = Math.min(window.innerHeight, e + i), h = (n + o) / 2 - t, c = (a + l) / 2 - e, [u, p] = this.viewport.rotation % 180 === 0 ? [h, c] : [c, h];
  return {
    offsetX: u,
    offsetY: p
  };
}, dh = function() {
  for (const t of r(this, We).values())
    t.isEmpty() && t.remove();
}, U(Ke, "_initialized", !1), b(Ke, qi, new Map([Vc, ad, od, yh].map((t) => [t._editorType, t])));
let cd = Ke;
var hs, Tl, le, hr, Bh, Qp, Ds, fd, Zp, gd;
const Kt = class Kt {
  constructor({
    pageIndex: t
  }) {
    b(this, Ds);
    b(this, hs, null);
    b(this, Tl, 0);
    b(this, le, /* @__PURE__ */ new Map());
    b(this, hr, /* @__PURE__ */ new Map());
    this.pageIndex = t;
  }
  setParent(t) {
    if (!r(this, hs)) {
      f(this, hs, t);
      return;
    }
    if (r(this, hs) !== t) {
      if (r(this, le).size > 0)
        for (const e of r(this, le).values())
          e.remove(), t.append(e);
      f(this, hs, t);
    }
  }
  static get _svgFactory() {
    return J(this, "_svgFactory", new Ed());
  }
  draw(t, e = !1, s = !1) {
    const i = ie(this, Tl)._++, n = y(this, Ds, fd).call(this), a = Kt._svgFactory.createElement("defs");
    n.append(a);
    const o = Kt._svgFactory.createElement("path");
    a.append(o);
    const l = `path_p${this.pageIndex}_${i}`;
    o.setAttribute("id", l), o.setAttribute("vector-effect", "non-scaling-stroke"), e && r(this, hr).set(i, o);
    const h = s ? y(this, Ds, Zp).call(this, a, l) : null, c = Kt._svgFactory.createElement("use");
    return n.append(c), c.setAttribute("href", `#${l}`), this.updateProperties(n, t), r(this, le).set(i, n), {
      id: i,
      clipPathId: `url(#${h})`
    };
  }
  drawOutline(t, e) {
    const s = ie(this, Tl)._++, i = y(this, Ds, fd).call(this), n = Kt._svgFactory.createElement("defs");
    i.append(n);
    const a = Kt._svgFactory.createElement("path");
    n.append(a);
    const o = `path_p${this.pageIndex}_${s}`;
    a.setAttribute("id", o), a.setAttribute("vector-effect", "non-scaling-stroke");
    let l;
    if (e) {
      const u = Kt._svgFactory.createElement("mask");
      n.append(u), l = `mask_p${this.pageIndex}_${s}`, u.setAttribute("id", l), u.setAttribute("maskUnits", "objectBoundingBox");
      const p = Kt._svgFactory.createElement("rect");
      u.append(p), p.setAttribute("width", "1"), p.setAttribute("height", "1"), p.setAttribute("fill", "white");
      const g = Kt._svgFactory.createElement("use");
      u.append(g), g.setAttribute("href", `#${o}`), g.setAttribute("stroke", "none"), g.setAttribute("fill", "black"), g.setAttribute("fill-rule", "nonzero"), g.classList.add("mask");
    }
    const h = Kt._svgFactory.createElement("use");
    i.append(h), h.setAttribute("href", `#${o}`), l && h.setAttribute("mask", `url(#${l})`);
    const c = h.cloneNode();
    return i.append(c), h.classList.add("mainOutline"), c.classList.add("secondaryOutline"), this.updateProperties(i, t), r(this, le).set(s, i), s;
  }
  finalizeDraw(t, e) {
    r(this, hr).delete(t), this.updateProperties(t, e);
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
    } = e, o = typeof t == "number" ? r(this, le).get(t) : t;
    if (o) {
      if (s && y(this, Ds, gd).call(this, o, s), i && y(l = Kt, Bh, Qp).call(l, o, i), n) {
        const {
          classList: h
        } = o;
        for (const [c, u] of Object.entries(n))
          h.toggle(c, u);
      }
      if (a) {
        const c = o.firstChild.firstChild;
        y(this, Ds, gd).call(this, c, a);
      }
    }
  }
  updateParent(t, e) {
    if (e === this)
      return;
    const s = r(this, le).get(t);
    s && (r(e, hs).append(s), r(this, le).delete(t), r(e, le).set(t, s));
  }
  remove(t) {
    r(this, hr).delete(t), r(this, hs) !== null && (r(this, le).get(t).remove(), r(this, le).delete(t));
  }
  destroy() {
    f(this, hs, null);
    for (const t of r(this, le).values())
      t.remove();
    r(this, le).clear(), r(this, hr).clear();
  }
};
hs = new WeakMap(), Tl = new WeakMap(), le = new WeakMap(), hr = new WeakMap(), Bh = new WeakSet(), Qp = function(t, [e, s, i, n]) {
  const {
    style: a
  } = t;
  a.top = `${100 * s}%`, a.left = `${100 * e}%`, a.width = `${100 * i}%`, a.height = `${100 * n}%`;
}, Ds = new WeakSet(), fd = function() {
  const t = Kt._svgFactory.create(1, 1, !0);
  return r(this, hs).append(t), t.setAttribute("aria-hidden", !0), t;
}, Zp = function(t, e) {
  const s = Kt._svgFactory.createElement("clipPath");
  t.append(s);
  const i = `clip_${e}`;
  s.setAttribute("id", i), s.setAttribute("clipPathUnits", "objectBoundingBox");
  const n = Kt._svgFactory.createElement("use");
  return s.append(n), n.setAttribute("href", `#${e}`), n.classList.add("clip"), i;
}, gd = function(t, e) {
  for (const [s, i] of Object.entries(e))
    i === null ? t.removeAttribute(s) : t.setAttribute(s, i);
}, b(Kt, Bh);
let pd = Kt;
globalThis.pdfjsTestingUtils = {
  HighlightOutliner: Xc
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
var im = V.GlobalWorkerOptions;
V.ImageKind;
V.InvalidPDFException;
V.MissingPDFException;
V.OPS;
V.OutputScale;
V.PDFDataRangeTransport;
V.PDFDateString;
V.PDFWorker;
var ec = V.PasswordResponses;
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
var nm = V.getDocument;
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
var rm = V.version;
im.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${rm}/pdf.worker.mjs`;
class am {
  constructor(t) {
    this._pdfDoc = null, this._renderTasks = /* @__PURE__ */ new Map(), this._bus = t, this._isPasswordProtected = !1;
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
    const s = nm(
      typeof e == "string" ? { url: e } : { data: e }
    );
    s.onPassword = (n, a) => {
      this._isPasswordProtected = !0;
      const o = a === ((ec == null ? void 0 : ec.INCORRECT_PASSWORD) ?? 2);
      this._bus.emit("passwordRequested", {
        updatePassword: n,
        isIncorrect: o,
        cancel: () => {
          s.destroy().catch(() => {
          });
        }
      });
    }, this._pdfDoc = await s.promise;
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
    this._isPasswordProtected = !1;
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
class om {
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
class lm {
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
const hm = {
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
function xd(d, t) {
  if (!t || typeof t != "object") return d;
  const e = Object.assign({}, d);
  for (const s of Object.keys(t))
    t[s] !== null && typeof t[s] == "object" && !Array.isArray(t[s]) ? e[s] = xd(d[s] || {}, t[s]) : e[s] = t[s];
  return e;
}
function cm(d = {}) {
  return xd(hm, d);
}
function dm(d) {
  return d ? typeof d == "string" ? document.querySelector(d) : d instanceof HTMLElement ? d : null : null;
}
function O(d, t = [], e = {}) {
  const s = document.createElement(d);
  t.length && s.classList.add(...t);
  for (const [i, n] of Object.entries(e))
    s.setAttribute(i, n);
  return s;
}
function um(d, t) {
  var A, _, v;
  d.innerHTML = "";
  const e = O("div", ["psdk-root"]);
  t.theme === "light" && e.classList.add("psdk-light"), t.disabled && e.classList.add("psdk-disabled"), d.appendChild(e);
  let s = null;
  const i = ((A = t.ui) == null ? void 0 : A.topbar) || {};
  Object.values(i).some(Boolean) && (s = O("div", ["psdk-topbar"], { role: "toolbar", "aria-label": "PDF Viewer Toolbar" }), e.appendChild(s));
  const a = O("div", ["psdk-body"]);
  e.appendChild(a);
  let o = null;
  ((v = (_ = t.ui) == null ? void 0 : _.sidebar) == null ? void 0 : v.thumbnails) !== !1 && (o = O("div", ["psdk-sidebar"], { role: "navigation", "aria-label": "Page Thumbnails" }), a.appendChild(o));
  const l = O("div", ["psdk-viewer"], { role: "main" });
  a.appendChild(l);
  const h = O("div", ["psdk-viewer__canvas-area"]);
  l.appendChild(h);
  const c = O("div", ["psdk-pages-container"]);
  c.style.display = "none", h.appendChild(c);
  const u = pm();
  h.appendChild(u);
  const p = fm();
  p.style.display = "none", h.appendChild(p);
  const g = gm();
  l.appendChild(g);
  const m = O("div", ["psdk-modal-overlay"]);
  return m.style.display = "none", e.appendChild(m), {
    root: e,
    topbar: s,
    sidebar: o,
    viewer: l,
    canvasArea: h,
    pagesContainer: c,
    emptyState: u,
    modeBanner: p,
    statusbar: g,
    modalOverlay: m
  };
}
function pm() {
  const d = O("div", ["psdk-empty"]);
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
function fm() {
  const d = O("div", ["psdk-mode-banner"]);
  return d.id = "psdk-mode-banner", d.innerHTML = `
    <div class="psdk-mode-banner__dot"></div>
    <span>Signature Mode — Click anywhere to place</span>
  `, d;
}
function gm() {
  const d = O("div", ["psdk-statusbar"]);
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
const _e = {
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
function mm(d, t, e) {
  var L, $, Pt, ve, Be;
  const s = ((L = t.ui) == null ? void 0 : L.topbar) || {}, i = O("div", ["psdk-topbar__brand"]);
  i.innerHTML = `
    <div class="psdk-topbar__brand-icon">
      <svg viewBox="0 0 24 24" fill="white">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/>
        <path d="M14 2v6h6" opacity=".5"/>
      </svg>
    </div>
    <span class="psdk-topbar__brand-text">PDF Viewer</span>
  `, d.appendChild(i);
  const n = O("div", ["psdk-topbar__secure-badge", "psdk-tooltip"]);
  n.setAttribute("data-tooltip", "Password Protected (Encrypted)"), n.style.display = "none", n.style.marginLeft = "8px", n.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  `, i.appendChild(n);
  const a = (
    /** @type {HTMLInputElement} */
    O("input", ["psdk-file-input"], {
      type: "file",
      accept: ".pdf,application/pdf",
      id: "psdk-file-input",
      "aria-hidden": "true"
    })
  );
  document.body.appendChild(a);
  let o = null, l = null, h = null, c = null, u = null, p = null, g = null, m = null, A = null, _ = null, v = null, w = null, E = null, S = null, C = null, k = null, x = t.scale || 1.5;
  s.upload !== !1 && (o = gs("psdk-btn-upload", _e.upload, (($ = t.labels) == null ? void 0 : $.uploadBtn) || "Open PDF", ["psdk-btn", "psdk-tooltip"], "Open PDF file"), o.addEventListener("click", () => a.click()), a.addEventListener("change", (G) => {
    var X;
    const R = (
      /** @type {HTMLInputElement} */
      (X = G.target.files) == null ? void 0 : X[0]
    );
    R && (e.loadDocument(R), a.value = "");
  }), d.appendChild(o)), l = O("div", ["psdk-topbar__divider"]), d.appendChild(l), s.signature !== !1 && (h = gs("psdk-btn-signature", _e.signature, ((Pt = t.labels) == null ? void 0 : Pt.signatureBtn) || "Add Signature", ["psdk-btn", "psdk-btn--accent", "psdk-tooltip"], "Add a signature"), h.addEventListener("click", () => {
    e.openSignatureModal();
  }), d.appendChild(h)), s.eStamp !== !1 && (c = gs("psdk-btn-estamp", _e.estamp, ((ve = t.labels) == null ? void 0 : ve.estampBtn) || "E-Materai", ["psdk-btn", "psdk-btn--danger", "psdk-tooltip"], "Add E-Materai stamp"), c.addEventListener("click", () => {
    e.openEStampModal();
  }), d.appendChild(c));
  const T = gs("psdk-btn-clear", _e.clear, ((Be = t.labels) == null ? void 0 : Be.clearBtn) || "Clear All", ["psdk-btn", "psdk-btn--ghost", "psdk-tooltip"], "Clear all signatures");
  if (T.style.display = "none", T.addEventListener("click", () => {
    e.clearSignatures(), et(0);
  }), d.appendChild(T), d.appendChild(O("div", ["psdk-topbar__spacer"])), C = O("div", ["psdk-topbar__custom"]), s.customComponent && (typeof s.customComponent == "string" ? C.innerHTML = s.customComponent : s.customComponent instanceof HTMLElement && C.appendChild(s.customComponent)), d.appendChild(C), k = O("div", ["psdk-topbar__divider"]), d.appendChild(k), s.themeToggle !== !1) {
    const G = t.theme === "light";
    E = gs("psdk-btn-theme", G ? _e.moon : _e.sun, "", ["psdk-btn", "psdk-btn--ghost", "psdk-btn--icon", "psdk-tooltip"], "Toggle Theme"), E.addEventListener("click", () => {
      const R = d.closest(".psdk-root");
      if (!R) return;
      R.classList.contains("psdk-light") ? (R.classList.remove("psdk-light"), E.innerHTML = _e.sun, t.theme = "dark") : (R.classList.add("psdk-light"), E.innerHTML = _e.moon, t.theme = "light");
    }), d.appendChild(E);
  }
  if (S = O("div", ["psdk-topbar__divider"]), d.appendChild(S), s.zoom !== !1) {
    u = O("div", ["psdk-pagination"]);
    const G = gs("psdk-btn-zoom-out", _e.zoomOut, "", ["psdk-btn", "psdk-btn--ghost", "psdk-btn--icon", "psdk-tooltip"], "Zoom out");
    m = O("span", ["psdk-zoom-badge"]), m.id = "psdk-zoom-badge";
    const R = gs("psdk-btn-zoom-in", _e.zoomIn, "", ["psdk-btn", "psdk-btn--ghost", "psdk-btn--icon", "psdk-tooltip"], "Zoom in"), X = gs("psdk-btn-fit", _e.fit, "", ["psdk-btn", "psdk-btn--ghost", "psdk-btn--icon", "psdk-tooltip"], "Fit to screen");
    D(x), G.addEventListener("click", async () => {
      x <= 0.25 || (x = Math.max(0.25, +(x - 0.25).toFixed(2)), D(x), await e.setScale(x));
    }), R.addEventListener("click", async () => {
      x >= 4 || (x = Math.min(4, +(x + 0.25).toFixed(2)), D(x), await e.setScale(x));
    }), X.addEventListener("click", async () => {
      x = await e.fitToScreen(), D(x);
    }), u.appendChild(G), u.appendChild(m), u.appendChild(R), u.appendChild(X), d.appendChild(u), p = O("div", ["psdk-topbar__divider"]), d.appendChild(p);
  }
  if (s.pagination !== !1) {
    g = O("div", ["psdk-pagination"]), v = /** @type {HTMLButtonElement} */
    gs("psdk-btn-prev", _e.prevPage, "", ["psdk-btn", "psdk-btn--ghost", "psdk-btn--icon", "psdk-tooltip"], "Previous page"), v.id = "psdk-btn-prev";
    const G = O("div", ["psdk-pagination__indicator"]);
    A = O("input", ["psdk-pagination__current-input"], {
      type: "number",
      min: "1",
      id: "psdk-page-current",
      "aria-label": "Current page"
    }), A.value = "1", A.addEventListener("change", (X) => {
      const ue = parseInt(X.target.value, 10);
      isNaN(ue) ? X.target.value = e.currentPage : e.goToPage(ue) || (X.target.value = e.currentPage);
    });
    const R = O("span", ["psdk-pagination__sep"]);
    R.textContent = "/", _ = O("span", []), _.id = "psdk-page-total", _.textContent = "—", G.appendChild(A), G.appendChild(R), G.appendChild(_), w = /** @type {HTMLButtonElement} */
    gs("psdk-btn-next", _e.nextPage, "", ["psdk-btn", "psdk-btn--ghost", "psdk-btn--icon", "psdk-tooltip"], "Next page"), w.id = "psdk-btn-next", v.addEventListener("click", () => e.prevPage()), w.addEventListener("click", () => e.nextPage()), v.disabled = !0, w.disabled = !0, g.appendChild(v), g.appendChild(G), g.appendChild(w), d.appendChild(g);
  }
  e.on("signaturePlaced", () => et(e.getSignatures().length)), e.on("eStampPlaced", () => et(e.getSignatures().length)), e.on("signatureRemoved", () => et(e.getSignatures().length));
  function M(G, R) {
    A && (A.tagName === "INPUT" ? A.value = G || "" : A.textContent = G || "—"), _ && (_.textContent = R || "—"), v && (v.disabled = G <= 1 || e.isPaginationLocked), w && (w.disabled = G >= R || e.isPaginationLocked);
  }
  function z(G) {
    var X, ue;
    const R = ((ue = (X = t.ui) == null ? void 0 : X.topbar) == null ? void 0 : ue.paginationInput) === !1;
    A && (A.disabled = G || R), v && (v.disabled = G || e.currentPage <= 1), w && (w.disabled = G || e.currentPage >= e.totalPages);
  }
  function D(G) {
    const R = Math.round(G * 100) + "%";
    m && (m.textContent = R);
    const X = document.getElementById("psdk-zoom-status");
    X && (X.textContent = R);
  }
  function et(G) {
    const R = document.getElementById("psdk-sig-count-wrap"), X = document.getElementById("psdk-sig-count");
    R && (R.style.display = G > 0 ? "flex" : "none"), X && (X.textContent = `${G} signature${G !== 1 ? "s" : ""}`), T.style.display = G > 0 ? "inline-flex" : "none";
  }
  function dt(G) {
    var $t;
    const R = (($t = G.ui) == null ? void 0 : $t.topbar) || {};
    if (W(o, R.upload !== !1), W(h, R.signature !== !1), W(c, R.eStamp !== !1), W(u, R.zoom !== !1), W(p, R.zoom !== !1), W(g, R.pagination !== !1), W(E, R.themeToggle !== !1), A && (A.disabled = R.paginationInput === !1 || e.isPaginationLocked), G.labels) {
      if (o) {
        const tt = o.querySelector("span");
        tt && (tt.textContent = G.labels.uploadBtn || "Open PDF");
      }
      if (h) {
        const tt = h.querySelector("span");
        tt && (tt.textContent = G.labels.signatureBtn || "Add Signature");
      }
      if (c) {
        const tt = c.querySelector("span");
        tt && (tt.textContent = G.labels.estampBtn || "E-Materai");
      }
      if (T) {
        const tt = T.querySelector("span");
        tt && (tt.textContent = G.labels.clearBtn || "Clear All");
      }
    }
    let X = !1;
    R.customComponent !== void 0 ? (C.innerHTML = "", typeof R.customComponent == "string" && R.customComponent.trim() ? (C.innerHTML = R.customComponent, X = !0) : R.customComponent instanceof HTMLElement && (C.appendChild(R.customComponent), X = !0)) : X = C.childNodes.length > 0, W(k, X && (R.themeToggle !== !1 || R.zoom !== !1 || R.pagination !== !1)), W(S, R.themeToggle !== !1 && (R.zoom !== !1 || R.pagination !== !1)), W(p, R.zoom !== !1 && R.pagination !== !1);
    const ue = R.upload !== !1, mi = R.signature !== !1 || R.eStamp !== !1;
    W(l, ue && mi);
  }
  function W(G, R) {
    G && (G.style.display = R ? "" : "none");
  }
  function pt(G) {
    n.style.display = G ? "inline-flex" : "none";
  }
  return { updatePageIndicator: M, updateZoomBadge: D, applyConfig: dt, setPaginationLocked: z, updateSecureStatus: pt };
}
function gs(d, t, e, s, i) {
  const n = O("button", s, { id: d, type: "button" });
  if (i && n.setAttribute("data-tooltip", i), n.innerHTML = t, e) {
    const a = document.createElement("span");
    a.textContent = e, n.appendChild(a);
  }
  return n;
}
function bm(d, t, e) {
  const s = O("div", ["psdk-sidebar__header"]), i = O("div", ["psdk-sidebar__title"]);
  i.textContent = "Pages";
  const n = O("div", ["psdk-sidebar__count"]);
  n.id = "psdk-page-count-badge", n.textContent = "0", s.appendChild(i), s.appendChild(n), d.appendChild(s);
  const a = O("div", ["psdk-sidebar__scroll"]);
  a.id = "psdk-sidebar-scroll", d.appendChild(a);
  let o = [], l = 1;
  function h() {
    a.innerHTML = "", o = [];
  }
  function c(A) {
    for (let _ = 0; _ < Math.min(A, 20); _++) {
      const v = O("div", ["psdk-thumb"]), w = O("div", ["psdk-thumb-skeleton"]);
      v.appendChild(w), a.appendChild(v);
    }
  }
  async function u(A, _) {
    h(), n.textContent = _, c(_), h();
    for (let v = 1; v <= _; v++) {
      const w = O("div", ["psdk-thumb"]);
      w.id = `psdk-thumb-${v}`, w.setAttribute("role", "button"), w.setAttribute("tabindex", "0"), w.setAttribute("aria-label", `Page ${v}`);
      const E = O("div", ["psdk-thumb__canvas-wrap"]), S = (
        /** @type {HTMLCanvasElement} */
        document.createElement("canvas")
      );
      S.setAttribute("aria-hidden", "true"), E.appendChild(S);
      const C = O("div", ["psdk-thumb__label"]);
      C.textContent = `Page ${v}`, w.appendChild(E), w.appendChild(C), a.appendChild(w), o.push(w);
      const k = v;
      w.addEventListener("click", () => e.goToPage(k)), w.addEventListener("keydown", (x) => {
        (x.key === "Enter" || x.key === " ") && (x.preventDefault(), e.goToPage(k));
      }), await A.renderThumbnail(v, S, 0.22).catch(() => {
      });
    }
    p(l);
  }
  function p(A) {
    l = A, o.forEach((v, w) => {
      const E = w + 1 === A;
      v.classList.toggle("psdk-thumb--active", E);
    });
    const _ = document.getElementById(`psdk-thumb-${A}`);
    _ && _.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
  function g(A) {
    var _, v;
    d.style.display = ((v = (_ = A.ui) == null ? void 0 : _.sidebar) == null ? void 0 : v.thumbnails) !== !1 ? "" : "none";
  }
  function m(A) {
    a.style.pointerEvents = A ? "none" : "auto", a.style.opacity = A ? "0.5" : "1";
  }
  return { rebuild: u, setActivePage: p, clearThumbnails: h, applyConfig: g, setPaginationLocked: m };
}
function ym(d, t, e) {
  const s = O("div", ["psdk-modal"]), i = O("div", ["psdk-modal__header"]), n = O("h3", ["psdk-modal__title"]);
  n.textContent = "Select Signature Role";
  const a = O("button", ["psdk-modal__close"]);
  a.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>', i.appendChild(n), i.appendChild(a);
  const o = O("div", ["psdk-modal__body"]), l = O("div", ["psdk-modal__list"]);
  o.appendChild(l), s.appendChild(i), s.appendChild(o), d.appendChild(s);
  function h(u = "signature") {
    var m, A;
    const p = u === "signature", g = p ? t.signatureOptions || [] : t.estampOptions || [];
    if (n.textContent = p ? ((m = t.labels) == null ? void 0 : m.signatureModalTitle) || "Select Signature Role" : ((A = t.labels) == null ? void 0 : A.estampModalTitle) || "Select E-Materai", !g || g.length === 0) {
      p ? e.placeSignature() : e.placeEStamp();
      return;
    }
    l.innerHTML = "", g.forEach((_) => {
      const v = O("button", ["psdk-modal__item"]), w = O("div", ["psdk-modal__item-icon"]);
      _.image ? (w.classList.add("psdk-modal__item-icon--image"), w.innerHTML = `<img src="${_.image}" alt="preview" />`) : w.innerHTML = p ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>' : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>';
      const E = O("div", ["psdk-modal__item-label"]);
      E.textContent = _.label || (p ? "Signature" : "E-Materai"), v.appendChild(w), v.appendChild(E), v.addEventListener("click", () => {
        c(), p ? e.placeSignature({ ..._ }) : e.placeEStamp({ ..._ });
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
function Am(d, t, e) {
  var M, z, D, et, dt, W;
  const s = O("div", ["psdk-modal-overlay", "psdk-password-overlay"]);
  s.style.display = "none";
  const i = O("div", ["psdk-modal", "psdk-password-modal"]), n = O("div", ["psdk-modal__header"]), a = O("h3", ["psdk-modal__title"]);
  a.textContent = ((M = t.labels) == null ? void 0 : M.passwordModalTitle) || "Password Protected";
  const o = O("button", ["psdk-modal__close"]);
  o.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>', n.appendChild(a), n.appendChild(o);
  const l = O("div", ["psdk-modal__body"]), h = O("div", ["psdk-password-modal__desc-wrap"]);
  h.style.display = "flex", h.style.flexDirection = "column", h.style.alignItems = "center", h.style.textAlign = "center", h.style.marginBottom = "20px";
  const c = O("div", ["psdk-password-modal__icon"]);
  c.style.width = "48px", c.style.height = "48px", c.style.borderRadius = "50%", c.style.background = "var(--psdk-danger-subtle)", c.style.color = "var(--psdk-danger)", c.style.display = "flex", c.style.alignItems = "center", c.style.justifyContent = "center", c.style.marginBottom = "12px", c.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>';
  const u = O("p", ["psdk-password-modal__text"]);
  u.style.margin = "0", u.style.fontSize = "13px", u.style.color = "var(--psdk-text-secondary)", u.textContent = ((z = t.labels) == null ? void 0 : z.passwordModalDesc) || "This document is encrypted. Please enter the password to view it.", h.appendChild(c), h.appendChild(u), l.appendChild(h);
  const p = O("form", ["psdk-password-modal__form"]), g = O("div", ["psdk-modal__input-wrapper"]), m = O("input", ["psdk-modal__input"], {
    type: "password",
    placeholder: ((D = t.labels) == null ? void 0 : D.passwordPlaceholder) || "Enter document password",
    required: "true",
    autocomplete: "current-password"
  }), A = O("button", ["psdk-modal__input-toggle"], { type: "button" });
  A.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>', g.appendChild(m), g.appendChild(A), p.appendChild(g);
  const _ = O("div", ["psdk-modal__error"]);
  _.style.display = "none", _.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg><span>${((et = t.labels) == null ? void 0 : et.passwordIncorrect) || "Incorrect password. Please try again."}</span>`, p.appendChild(_);
  const v = O("div", ["psdk-modal__buttons"]), w = O("button", ["psdk-btn", "psdk-btn--ghost"], { type: "button" });
  w.textContent = ((dt = t.labels) == null ? void 0 : dt.cancelBtn) || "Cancel";
  const E = O("button", ["psdk-btn", "psdk-btn--accent"], { type: "submit" });
  E.textContent = ((W = t.labels) == null ? void 0 : W.unlockBtn) || "Unlock", v.appendChild(w), v.appendChild(E), p.appendChild(v), l.appendChild(p), i.appendChild(n), i.appendChild(l), s.appendChild(i), d.appendChild(s);
  let S = null, C = null;
  A.addEventListener("click", () => {
    m.type === "password" ? (m.type = "text", A.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>') : (m.type = "password", A.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>');
  });
  function k(pt, L, $) {
    var Pt;
    S = pt, C = $, m.disabled = !1, E.disabled = !1, w.disabled = !1, o.disabled = !1, E.textContent = ((Pt = t.labels) == null ? void 0 : Pt.unlockBtn) || "Unlock", L ? (_.style.display = "flex", m.value = "", m.focus()) : (_.style.display = "none", m.value = "", m.type = "password", A.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>', s.style.display = "flex", setTimeout(() => {
      s.classList.add("psdk-modal-overlay--active"), i.classList.add("psdk-modal--active"), m.focus();
    }, 10));
  }
  function x() {
    s.classList.remove("psdk-modal-overlay--active"), i.classList.remove("psdk-modal--active"), setTimeout(() => {
      s.style.display = "none", _.style.display = "none", m.value = "";
    }, 200);
  }
  function T() {
    C && C(), x();
  }
  return p.addEventListener("submit", (pt) => {
    var L;
    pt.preventDefault(), m.value && S && (m.disabled = !0, E.disabled = !0, w.disabled = !0, o.disabled = !0, E.textContent = ((L = t.labels) == null ? void 0 : L.unlockingBtn) || "Unlocking...", S(m.value));
  }), w.addEventListener("click", T), o.addEventListener("click", T), s.addEventListener("click", (pt) => {
    pt.target === s && T();
  }), e.on("passwordRequested", ({ updatePassword: pt, isIncorrect: L, cancel: $ }) => {
    k(pt, L, $);
  }), e.on("documentLoaded", () => {
    x();
  }), { open: k, close: x };
}
function _m(d = {}) {
  const t = cm(d), e = dm(t.container);
  if (!e)
    throw new Error("[pdf-signature-sdk] createViewer: invalid container");
  const s = new sf(), i = new am(s), n = new om(s), a = new lm(s), o = um(e, t);
  let l = null, h = null, c = null, u = null, p = !1, g = null, m = null;
  const A = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map();
  async function w(S) {
    o.pagesContainer.innerHTML = "", _.clear(), v.clear(), u && u.disconnect(), A.clear(), u = new IntersectionObserver((x) => {
      if (x.forEach((T) => {
        const M = parseInt(T.target.dataset.page, 10);
        if (T.isIntersecting) {
          if (A.set(M, T), !T.target.dataset.rendered) {
            T.target.dataset.rendered = "true";
            const z = _.get(M);
            i.renderPage(M, z, t.scale).then(() => {
              a.syncSize(M, z.width, z.height);
              const D = document.getElementById(`psdk-page-${M}`);
              D && (D.style.minWidth = `${z.width}px`, D.style.minHeight = `${z.height}px`);
            });
          }
        } else
          A.delete(M);
      }), A.size > 0) {
        let T = n.currentPage, M = -1;
        for (const [z, D] of A.entries()) {
          const et = D.intersectionRect.height;
          et > M && (M = et, T = z);
        }
        T !== n.currentPage && (p || n.goToPage(T, "scroll"));
      }
    }, {
      root: o.canvasArea,
      rootMargin: "200px 0px",
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
    });
    const C = Math.floor(595 * t.scale), k = Math.floor(842 * t.scale);
    for (let x = 1; x <= S; x++) {
      const T = document.createElement("div");
      T.className = "psdk-canvas-wrap", T.dataset.page = x, T.id = `psdk-page-${x}`, T.style.minWidth = `${C}px`, T.style.minHeight = `${k}px`;
      const M = document.createElement("canvas");
      M.className = "psdk-main-canvas", T.appendChild(M);
      const z = document.createElement("canvas");
      z.className = "psdk-overlay", T.appendChild(z), o.pagesContainer.appendChild(T), _.set(x, M), v.set(x, z), a.attach(x, z), u.observe(T);
    }
  }
  s.on("pageChanged", ({ page: S, total: C, source: k }) => {
    if (k !== "scroll") {
      p = !0, m && o.canvasArea.removeEventListener("scroll", m);
      const x = document.getElementById(`psdk-page-${S}`);
      x && x.scrollIntoView({ behavior: "smooth", block: "start" }), m = () => {
        clearTimeout(g), g = setTimeout(() => {
          p = !1, m && (o.canvasArea.removeEventListener("scroll", m), m = null);
        }, 150);
      }, o.canvasArea.addEventListener("scroll", m), m();
    }
    l == null || l.updatePageIndicator(S, C), h == null || h.setActivePage(S), s.emit("_pageReady", { page: S });
  }), s.on("documentLoaded", async ({ totalPages: S }) => {
    o.emptyState.style.display = "none", o.pagesContainer.style.display = "flex", n.setTotal(S), a.clearAll(), await w(S), l == null || l.updatePageIndicator(1, S), l == null || l.updateSecureStatus(i.isPasswordProtected), await (h == null ? void 0 : h.rebuild(i, S)), s.emit("_documentReady", { totalPages: S });
  });
  const E = {
    /**
     * Load a new PDF document (File, Blob, URL, ArrayBuffer).
     * Resets page, signatures, sidebar.
     */
    async loadDocument(S) {
      e.classList.add("psdk-loading");
      try {
        await i.loadDocument(S);
      } catch (C) {
        throw o.pagesContainer.innerHTML = "", o.pagesContainer.style.display = "none", o.emptyState.style.display = "flex", n.setTotal(0), a.clearAll(), h && h.clearThumbnails(), l && (l.updatePageIndicator(1, 0), l.updateSecureStatus(!1)), C;
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
    goToPage(S) {
      return n.goToPage(S);
    },
    /** @returns {number} */
    get currentPage() {
      return n.currentPage;
    },
    /** @returns {number} */
    get totalPages() {
      return n.totalPages;
    },
    /** @returns {boolean} */
    get isPasswordProtected() {
      return i.isPasswordProtected;
    },
    /**
     * Set the zoom scale and re-render the current page.
     * @param {number} scale  e.g. 1.0 = 100%, 1.5 = 150%
     */
    async setScale(S) {
      if (t.scale = Math.min(4, Math.max(0.25, S)), i.isLoaded) {
        o.pagesContainer.querySelectorAll(".psdk-canvas-wrap").forEach((x) => {
          x.dataset.rendered = "";
        });
        const C = n.currentPage;
        await w(n.totalPages);
        const k = document.getElementById(`psdk-page-${C}`);
        k && (p = !0, clearTimeout(g), k.scrollIntoView({ behavior: "auto", block: "start" }), g = setTimeout(() => {
          p = !1;
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
      const C = (await i.getPage(n.currentPage)).getViewport({ scale: 1 }), k = 48, x = o.canvasArea.clientWidth - k, T = o.canvasArea.clientHeight - k, M = x / C.width, z = T / C.height;
      let D = Math.min(M, z);
      return D = Math.min(4, Math.max(0.25, D)), await E.setScale(D), D;
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
    placeSignature(S = {}) {
      const C = S.page || n.currentPage;
      if (S.page = C, S.x === void 0 || S.y === void 0) {
        const k = _.get(C);
        k && (S.x = k.width / 2 - 75, S.y = k.height / 2 - 25);
      }
      return a.placeSignature(S);
    },
    /**
     * Programmatically place an e-materai stamp.
     * @param {{x?:number, y?:number, page?:number, image?:string}} opts
     */
    placeEStamp(S = {}) {
      const C = S.page || n.currentPage;
      if (S.page = C, S.x === void 0 || S.y === void 0) {
        const k = _.get(C);
        k && (S.x = k.width / 2 - 40, S.y = k.height / 2 - 40);
      }
      return a.placeEStamp(S);
    },
    /** Remove a specific signature/stamp by ID. */
    removeSignature(S) {
      a.removeItem(S);
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
    getSignaturesByPage(S) {
      return a.getByPage(S);
    },
    /**
     * Register an event listener.
     * Events: documentLoaded, pageChanged, signaturePlaced, eStampPlaced,
     *         signatureMoved, signatureModeChanged, coordinateCapture
     */
    on(S, C) {
      return s.on(S, C), E;
    },
    /** Remove an event listener. */
    off(S, C) {
      return s.off(S, C), E;
    },
    /** Update UI config dynamically — shows/hides toolbar and sidebar elements. */
    updateConfig(S) {
      var k, x;
      const C = xd(t, S);
      Object.keys(C).forEach((T) => {
        t[T] = C[T];
      }), l == null || l.applyConfig(t), h == null || h.applyConfig(t), o.sidebar && (o.sidebar.style.display = ((x = (k = t.ui) == null ? void 0 : k.sidebar) == null ? void 0 : x.thumbnails) !== !1 ? "" : "none"), t.disabled ? o.root.classList.add("psdk-disabled") : o.root.classList.remove("psdk-disabled"), t.theme === "light" ? o.root.classList.add("psdk-light") : o.root.classList.remove("psdk-light");
    },
    /** Get the main PDF canvas element for current page. */
    getCanvas(S = n.currentPage) {
      return _.get(S);
    },
    /** Get the overlay canvas element for current page. */
    getOverlayCanvas(S = n.currentPage) {
      return v.get(S);
    },
    /** Disable/Enable page navigation */
    setPaginationLocked(S) {
      n.setLocked(S), l == null || l.setPaginationLocked(S), h == null || h.setPaginationLocked(S);
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
  return o.topbar && (l = mm(o.topbar, t, E)), o.sidebar && (h = bm(o.sidebar, t, E)), o.modalOverlay && (c = ym(o.modalOverlay, t, E)), o.root && Am(o.root, t, E), t.file && E.loadDocument(t.file).catch((S) => {
    console.error("[pdf-signature-sdk] Auto-load failed:", S);
  }), E;
}
const wm = {
  /**
   * Root wrapper — added to the container element.
   * Theme modifiers are added here.
   */
  root: {
    /** Main root element. All SDK styles are scoped inside this. */
    base: "psdk-root",
    /** Added when theme === 'light' */
    light: "psdk-light",
    /** Added when config.disabled === true */
    disabled: "psdk-disabled",
    /** Added while a document is being loaded */
    loading: "psdk-loading"
  },
  /** Top toolbar bar */
  topbar: {
    base: "psdk-topbar",
    brand: "psdk-topbar__brand",
    brandIcon: "psdk-topbar__brand-icon",
    brandText: "psdk-topbar__brand-text",
    divider: "psdk-topbar__divider",
    spacer: "psdk-topbar__spacer",
    /** Slot for customComponent HTML */
    custom: "psdk-topbar__custom"
  },
  /** Buttons — combine base + modifier */
  button: {
    /** Base class — applies to all buttons */
    base: "psdk-btn",
    /** Primary / CTA button (indigo by default) */
    accent: "psdk-btn--accent",
    /** Destructive / remove button */
    danger: "psdk-btn--danger",
    /** Transparent ghost button */
    ghost: "psdk-btn--ghost",
    /** Square icon-only button */
    icon: "psdk-btn--icon",
    /** Active / pressed state (e.g. signature mode active) */
    active: "psdk-btn--active"
  },
  /** Pagination controls in the topbar */
  pagination: {
    base: "psdk-pagination",
    indicator: "psdk-pagination__indicator",
    current: "psdk-pagination__current",
    currentInput: "psdk-pagination__current-input",
    sep: "psdk-pagination__sep"
  },
  /** Zoom badge in the topbar */
  zoom: {
    badge: "psdk-zoom-badge"
  },
  /** Left sidebar (thumbnail strip) */
  sidebar: {
    base: "psdk-sidebar",
    header: "psdk-sidebar__header",
    title: "psdk-sidebar__title",
    count: "psdk-sidebar__count",
    scroll: "psdk-sidebar__scroll",
    /** Individual thumbnail item */
    thumb: "psdk-thumb",
    /** Active (current page) thumbnail */
    thumbActive: "psdk-thumb--active",
    thumbCanvasWrap: "psdk-thumb__canvas-wrap",
    thumbLabel: "psdk-thumb__label",
    /** Loading skeleton shown before thumbnails render */
    thumbSkeleton: "psdk-thumb-skeleton"
  },
  /** Main PDF viewer area */
  viewer: {
    base: "psdk-viewer",
    /** Scrollable canvas area */
    canvasArea: "psdk-viewer__canvas-area",
    /** Pages stacking container */
    pagesContainer: "psdk-pages-container",
    /** Per-page canvas wrapper (shadow + background) */
    canvasWrap: "psdk-canvas-wrap",
    /** SVG/canvas overlay for signature interaction */
    overlay: "psdk-overlay",
    /** Overlay when placement mode is active */
    overlayActive: "psdk-overlay--active"
  },
  /** Empty state shown before a document is loaded */
  empty: {
    base: "psdk-empty",
    icon: "psdk-empty__icon",
    title: "psdk-empty__title",
    sub: "psdk-empty__sub"
  },
  /** Floating banner shown during signature placement mode */
  modeBanner: {
    base: "psdk-mode-banner",
    dot: "psdk-mode-banner__dot"
  },
  /** Bottom status bar */
  statusbar: {
    base: "psdk-statusbar",
    item: "psdk-statusbar__item",
    dot: "psdk-statusbar__dot",
    spacer: "psdk-statusbar__spacer"
  },
  /** Signature / e-materai selection modal */
  modal: {
    overlay: "psdk-modal-overlay",
    overlayActive: "psdk-modal-overlay--active",
    base: "psdk-modal",
    active: "psdk-modal--active",
    header: "psdk-modal__header",
    title: "psdk-modal__title",
    close: "psdk-modal__close",
    body: "psdk-modal__body",
    list: "psdk-modal__list",
    item: "psdk-modal__item",
    itemIcon: "psdk-modal__item-icon",
    itemLabel: "psdk-modal__item-label"
  },
  /** Tooltip (via data-tooltip attribute) */
  tooltip: {
    base: "psdk-tooltip"
  }
}, gt = {
  // ── Background layers ──────────────────────────────
  /** Page / outermost background */
  bgBase: "--psdk-bg-base",
  /** Card / panel surface background */
  bgSurface: "--psdk-bg-surface",
  /** Elevated element background (buttons, badges) */
  bgElevated: "--psdk-bg-elevated",
  /** Hover state background */
  bgHover: "--psdk-bg-hover",
  // ── Borders ────────────────────────────────────────
  /** Default subtle border */
  border: "--psdk-border",
  /** Stronger border (hover, active) */
  borderStrong: "--psdk-border-strong",
  // ── Accent (primary brand color) ───────────────────
  /** Primary accent color — affects buttons, active states, etc. */
  accent: "--psdk-accent",
  /** Accent on hover */
  accentHover: "--psdk-accent-hover",
  /** Accent glow / shadow color */
  accentGlow: "--psdk-accent-glow",
  /** Subtle accent background tint */
  accentSubtle: "--psdk-accent-subtle",
  // ── Semantic colors ────────────────────────────────
  /** Danger / destructive color */
  danger: "--psdk-danger",
  /** Subtle danger background tint */
  dangerSubtle: "--psdk-danger-subtle",
  /** Success indicator color */
  success: "--psdk-success",
  /** Warning color */
  warning: "--psdk-warning",
  // ── Typography ─────────────────────────────────────
  /** Primary text color */
  textPrimary: "--psdk-text-primary",
  /** Secondary / label text color */
  textSecondary: "--psdk-text-secondary",
  /** Muted / placeholder text color */
  textMuted: "--psdk-text-muted",
  /** Font family stack */
  font: "--psdk-font",
  // ── Layout dimensions ──────────────────────────────
  /** Height of the top toolbar */
  topbarHeight: "--psdk-topbar-height",
  /** Width of the left sidebar */
  sidebarWidth: "--psdk-sidebar-width",
  // ── Border radius ──────────────────────────────────
  radiusSm: "--psdk-radius-sm",
  radiusMd: "--psdk-radius-md",
  radiusLg: "--psdk-radius-lg",
  // ── Shadows ────────────────────────────────────────
  shadowSm: "--psdk-shadow-sm",
  shadowMd: "--psdk-shadow-md",
  shadowGlow: "--psdk-shadow-glow",
  // ── Animation ──────────────────────────────────────
  /** Default transition timing */
  transition: "--psdk-transition"
}, Sm = {
  [gt.bgBase]: "#0f1117",
  [gt.bgSurface]: "#1a1d27",
  [gt.bgElevated]: "#22263a",
  [gt.bgHover]: "#2a2f45",
  [gt.border]: "rgba(255,255,255,0.08)",
  [gt.borderStrong]: "rgba(255,255,255,0.14)",
  [gt.accent]: "#6366f1",
  [gt.accentHover]: "#4f52e0",
  [gt.accentGlow]: "rgba(99,102,241,0.35)",
  [gt.accentSubtle]: "rgba(99,102,241,0.12)",
  [gt.danger]: "#ef4444",
  [gt.dangerSubtle]: "rgba(239,68,68,0.12)",
  [gt.success]: "#22c55e",
  [gt.warning]: "#f59e0b",
  [gt.textPrimary]: "#f1f5f9",
  [gt.textSecondary]: "#8b92a5",
  [gt.textMuted]: "#5a6070",
  [gt.font]: '"Inter","Segoe UI",system-ui,-apple-system,sans-serif',
  [gt.topbarHeight]: "56px",
  [gt.sidebarWidth]: "190px",
  [gt.radiusSm]: "6px",
  [gt.radiusMd]: "10px",
  [gt.radiusLg]: "14px",
  [gt.transition]: "150ms cubic-bezier(0.4,0,0.2,1)"
};
export {
  hm as DEFAULT_CONFIG,
  am as DocumentManager,
  sf as EventEmitter,
  om as PaginationManager,
  wm as SDK_CLASSES,
  gt as SDK_VARIABLES,
  Sm as SDK_VARIABLE_DEFAULTS,
  lm as SignatureManager,
  _m as createViewer,
  cm as mergeConfig
};
