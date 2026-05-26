(function(){"use strict";try{if(typeof document<"u"){var r=document.createElement("style");r.appendChild(document.createTextNode(':root,.psdk-root{--psdk-bg-base: #0f1117;--psdk-bg-surface: #1a1d27;--psdk-bg-elevated: #22263a;--psdk-bg-hover: #2a2f45;--psdk-border: rgba(255, 255, 255, .08);--psdk-border-strong: rgba(255, 255, 255, .14);--psdk-accent: #6366f1;--psdk-accent-hover: #4f52e0;--psdk-accent-glow: rgba(99, 102, 241, .35);--psdk-accent-subtle: rgba(99, 102, 241, .12);--psdk-danger: #ef4444;--psdk-danger-subtle: rgba(239, 68, 68, .12);--psdk-success: #22c55e;--psdk-warning: #f59e0b;--psdk-text-primary: #f1f5f9;--psdk-text-secondary: #8b92a5;--psdk-text-muted: #5a6070;--psdk-topbar-height: 56px;--psdk-sidebar-width: 190px;--psdk-sidebar-thumb-scale: .22;--psdk-radius-sm: 6px;--psdk-radius-md: 10px;--psdk-radius-lg: 14px;--psdk-shadow-sm: 0 2px 8px rgba(0, 0, 0, .35);--psdk-shadow-md: 0 4px 20px rgba(0, 0, 0, .5);--psdk-shadow-glow: 0 0 20px var(--psdk-accent-glow);--psdk-transition: .15s cubic-bezier(.4, 0, .2, 1);--psdk-font: "Inter", "Segoe UI", system-ui, -apple-system, sans-serif}.psdk-root.psdk-light{--psdk-bg-base: #f8fafc;--psdk-bg-surface: #ffffff;--psdk-bg-elevated: #f1f5f9;--psdk-bg-hover: #e2e8f0;--psdk-border: rgba(0, 0, 0, .08);--psdk-border-strong: rgba(0, 0, 0, .14);--psdk-text-primary: #0f172a;--psdk-text-secondary: #475569;--psdk-text-muted: #64748b;--psdk-shadow-sm: 0 2px 8px rgba(0, 0, 0, .05);--psdk-shadow-md: 0 4px 20px rgba(0, 0, 0, .08)}.psdk-root{font-family:var(--psdk-font);display:flex;flex-direction:column;width:100%;height:100%;min-height:400px;background:var(--psdk-bg-base);color:var(--psdk-text-primary);overflow:hidden;box-sizing:border-box;position:relative;border-radius:var(--psdk-radius-lg);box-shadow:var(--psdk-shadow-md)}.psdk-root *,.psdk-root *:before,.psdk-root *:after{box-sizing:border-box}.psdk-root.psdk-loading:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:#0f1117a6;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);z-index:1000;border-radius:inherit}.psdk-root.psdk-loading:before{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:40px;height:40px;border:3px solid var(--psdk-border);border-top-color:var(--psdk-accent);border-radius:50%;animation:psdk-spin .7s linear infinite;z-index:1001}@keyframes psdk-spin{to{transform:translate(-50%,-50%) rotate(360deg)}}.psdk-topbar{display:flex;align-items:center;flex-wrap:wrap;gap:6px;min-height:var(--psdk-topbar-height);padding:8px 16px;background:var(--psdk-bg-surface);border-bottom:1px solid var(--psdk-border);flex-shrink:0;z-index:10;position:relative}.psdk-topbar__brand{display:flex;align-items:center;gap:8px;margin-right:8px;padding-right:16px;border-right:1px solid var(--psdk-border)}.psdk-topbar__brand-icon{width:28px;height:28px;background:linear-gradient(135deg,var(--psdk-accent),#818cf8);border-radius:8px;display:flex;align-items:center;justify-content:center;box-shadow:var(--psdk-shadow-glow)}.psdk-topbar__brand-icon--custom{background:transparent!important;box-shadow:none!important;border-radius:0!important;width:auto!important;height:auto!important}.psdk-topbar__brand-icon svg{width:16px;height:16px;fill:#fff}.psdk-topbar__brand-text{font-size:13px;font-weight:700;color:var(--psdk-text-primary);letter-spacing:-.3px}.psdk-topbar__divider{width:1px;height:24px;background:var(--psdk-border);margin:0 4px}.psdk-topbar__spacer{flex:1}.psdk-topbar__custom{display:flex;align-items:center;gap:8px}.psdk-btn{display:inline-flex;align-items:center;gap:6px;padding:7px 12px;border:1px solid var(--psdk-border);border-radius:var(--psdk-radius-sm);background:var(--psdk-bg-elevated);color:var(--psdk-text-primary);font-family:var(--psdk-font);font-size:12px;font-weight:500;cursor:pointer;transition:all var(--psdk-transition);white-space:nowrap;line-height:1;-webkit-user-select:none;user-select:none}@media (hover: hover) and (pointer: fine){.psdk-btn:hover{background:var(--psdk-bg-hover);border-color:var(--psdk-border-strong);transform:translateY(-1px);box-shadow:var(--psdk-shadow-sm)}}.psdk-btn:active{transform:translateY(0);box-shadow:none}.psdk-btn svg{width:14px;height:14px;flex-shrink:0;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.psdk-btn--accent{background:var(--psdk-accent);border-color:var(--psdk-accent);color:#fff;box-shadow:0 2px 12px var(--psdk-accent-glow)}@media (hover: hover) and (pointer: fine){.psdk-btn--accent:hover{background:var(--psdk-accent-hover);border-color:var(--psdk-accent-hover);box-shadow:0 4px 18px var(--psdk-accent-glow)}}.psdk-btn--accent.psdk-btn--active{background:#4338ca;border-color:#4338ca;box-shadow:0 0 0 3px #6366f14d;animation:psdk-pulse 2s infinite}@keyframes psdk-pulse{0%,to{box-shadow:0 0 0 3px #6366f14d}50%{box-shadow:0 0 0 6px #6366f11a}}.psdk-btn--danger{background:var(--psdk-danger-subtle);border-color:#ef44444d;color:var(--psdk-danger)}@media (hover: hover) and (pointer: fine){.psdk-btn--danger:hover{background:var(--psdk-danger);border-color:var(--psdk-danger);color:#fff}}.psdk-btn--ghost{background:transparent;border-color:transparent;color:var(--psdk-text-secondary)}@media (hover: hover) and (pointer: fine){.psdk-btn--ghost:hover{background:var(--psdk-bg-elevated);border-color:var(--psdk-border);color:var(--psdk-text-primary)}}.psdk-btn--icon{padding:7px}.psdk-btn:disabled{opacity:.35;cursor:not-allowed;pointer-events:none}.psdk-file-input{position:absolute;width:0;height:0;opacity:0;pointer-events:none}.psdk-root.psdk-disabled .psdk-btn,.psdk-root.psdk-disabled .psdk-sidebar__scroll,.psdk-root.psdk-disabled .psdk-overlay{opacity:.5;pointer-events:none;cursor:not-allowed}.psdk-pagination{display:flex;align-items:center;gap:6px}.psdk-pagination__indicator{display:flex;align-items:center;gap:4px;padding:6px 10px;background:var(--psdk-bg-base);border:1px solid var(--psdk-border);border-radius:var(--psdk-radius-sm);font-size:12px;font-weight:500;color:var(--psdk-text-secondary);min-width:80px;justify-content:center}.psdk-pagination__current{color:var(--psdk-text-primary);font-weight:700;font-size:13px}.psdk-pagination__current-input{width:36px;background:transparent;border:1px solid transparent;color:var(--psdk-text-primary);font-weight:700;font-size:13px;text-align:center;font-family:inherit;outline:none;border-radius:4px;transition:all .15s}.psdk-pagination__current-input:focus{background:#ffffff0d;border-color:var(--psdk-accent)}.psdk-pagination__current-input:disabled{opacity:.5;cursor:not-allowed}.psdk-pagination__current-input::-webkit-inner-spin-button,.psdk-pagination__current-input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.psdk-pagination__current-input[type=number]{-moz-appearance:textfield}.psdk-pagination__sep{color:var(--psdk-text-muted)}.psdk-zoom-badge{display:inline-flex;align-items:center;padding:5px 10px;background:var(--psdk-bg-base);border:1px solid var(--psdk-border);border-radius:var(--psdk-radius-sm);font-size:11px;font-weight:600;color:var(--psdk-text-secondary);min-width:52px;justify-content:center}.psdk-body{display:flex;flex:1;overflow:hidden;position:relative}.psdk-sidebar{width:var(--psdk-sidebar-width);flex-shrink:0;background:var(--psdk-bg-surface);border-right:1px solid var(--psdk-border);display:flex;flex-direction:column;overflow:hidden}.psdk-sidebar__header{display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border-bottom:1px solid var(--psdk-border);flex-shrink:0}.psdk-sidebar__title{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--psdk-text-muted)}.psdk-sidebar__count{font-size:10px;font-weight:600;color:var(--psdk-text-muted);background:var(--psdk-bg-elevated);border-radius:20px;padding:2px 7px}.psdk-sidebar__scroll{flex:1;overflow-y:auto;overflow-x:hidden;padding:8px;display:flex;flex-direction:column;gap:6px}.psdk-sidebar__scroll::-webkit-scrollbar{width:4px}.psdk-sidebar__scroll::-webkit-scrollbar-track{background:transparent}.psdk-sidebar__scroll::-webkit-scrollbar-thumb{background:var(--psdk-border);border-radius:4px}.psdk-sidebar__scroll::-webkit-scrollbar-thumb:hover{background:var(--psdk-border-strong)}.psdk-thumb{display:flex;flex-direction:column;align-items:center;gap:5px;padding:6px;border-radius:var(--psdk-radius-md);cursor:pointer;transition:all var(--psdk-transition);border:1px solid transparent;position:relative}@media (hover: hover) and (pointer: fine){.psdk-thumb:hover{background:var(--psdk-bg-elevated);border-color:var(--psdk-border);transform:translateY(-1px)}}.psdk-thumb--active{background:var(--psdk-accent-subtle)!important;border-color:var(--psdk-accent)!important;box-shadow:0 0 0 1px var(--psdk-accent)}.psdk-thumb__canvas-wrap{width:100%;display:flex;justify-content:center;align-items:center;background:#fff;border-radius:4px;overflow:hidden;box-shadow:var(--psdk-shadow-sm)}.psdk-thumb canvas{display:block;max-width:100%;height:auto}.psdk-thumb__label{font-size:9px;font-weight:600;color:var(--psdk-text-muted);letter-spacing:.04em}.psdk-thumb--active .psdk-thumb__label{color:var(--psdk-accent)}.psdk-thumb-skeleton{width:100%;height:120px;background:linear-gradient(90deg,var(--psdk-bg-elevated) 25%,var(--psdk-bg-hover) 50%,var(--psdk-bg-elevated) 75%);background-size:200% 100%;animation:psdk-shimmer 1.5s infinite;border-radius:var(--psdk-radius-sm)}@keyframes psdk-shimmer{0%{background-position:200% 0}to{background-position:-200% 0}}.psdk-viewer{flex:1;display:flex;flex-direction:column;overflow:hidden;background:var(--psdk-bg-base);position:relative}.psdk-viewer__canvas-area{flex:1;overflow:auto;display:flex;flex-direction:column;padding:24px;position:relative}.psdk-pages-container{display:flex;flex-direction:column;align-items:center;gap:24px;width:fit-content;min-width:100%;margin:auto}.psdk-viewer__canvas-area::-webkit-scrollbar{width:6px;height:6px}.psdk-viewer__canvas-area::-webkit-scrollbar-track{background:transparent}.psdk-viewer__canvas-area::-webkit-scrollbar-thumb{background:var(--psdk-border);border-radius:4px}.psdk-viewer__canvas-area::-webkit-scrollbar-thumb:hover{background:var(--psdk-border-strong)}.psdk-canvas-wrap{position:relative;display:inline-block;box-shadow:0 8px 40px #0009,0 0 0 1px #ffffff0f;border-radius:2px;background:#fff;transform-origin:top center;transition:transform .2s ease}.psdk-canvas-wrap canvas{display:block;border-radius:2px}.psdk-overlay{position:absolute;top:0;left:0;pointer-events:none;border-radius:2px}.psdk-overlay--active{pointer-events:all}.psdk-empty{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:var(--psdk-text-muted)}.psdk-empty__icon{width:72px;height:72px;opacity:.25}.psdk-empty__icon svg{width:100%;height:100%;stroke:var(--psdk-text-secondary);fill:none;stroke-width:1.5}.psdk-empty__title{font-size:16px;font-weight:600;color:var(--psdk-text-secondary)}.psdk-empty__sub{font-size:13px;color:var(--psdk-text-muted);text-align:center;max-width:260px;line-height:1.5}.psdk-empty__cta{margin-top:8px}.psdk-tooltip{position:relative}.psdk-tooltip:after{content:attr(data-tooltip);position:absolute;bottom:calc(100% + 8px);left:50%;transform:translate(-50%);background:#1e2030;color:var(--psdk-text-primary);font-size:11px;font-weight:500;padding:4px 8px;border-radius:5px;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity .15s;border:1px solid var(--psdk-border);box-shadow:var(--psdk-shadow-sm);z-index:100}@media (hover: hover) and (pointer: fine){.psdk-tooltip:hover:after{opacity:1}}.psdk-mode-banner{position:absolute;bottom:16px;left:50%;transform:translate(-50%);display:flex;align-items:center;gap:8px;padding:8px 16px;background:var(--psdk-accent);color:#fff;border-radius:20px;font-size:12px;font-weight:600;box-shadow:0 4px 20px var(--psdk-accent-glow);animation:psdk-slide-up .2s cubic-bezier(.34,1.56,.64,1);z-index:50;white-space:nowrap;letter-spacing:.02em}.psdk-mode-banner__dot{width:7px;height:7px;border-radius:50%;background:#ffffffb3;animation:psdk-blink 1s infinite}@keyframes psdk-blink{0%,to{opacity:1}50%{opacity:.3}}@keyframes psdk-slide-up{0%{opacity:0;transform:translate(-50%) translateY(12px)}to{opacity:1;transform:translate(-50%) translateY(0)}}.psdk-statusbar{display:flex;align-items:center;gap:12px;padding:6px 16px;background:var(--psdk-bg-surface);border-top:1px solid var(--psdk-border);font-size:11px;color:var(--psdk-text-muted);flex-shrink:0}.psdk-statusbar__item{display:flex;align-items:center;gap:5px}.psdk-statusbar__dot{width:5px;height:5px;border-radius:50%;background:var(--psdk-success)}.psdk-statusbar__dot--sig{background:var(--psdk-accent);animation:psdk-blink 1s infinite}.psdk-statusbar__spacer{flex:1}@media (max-width: 640px){.psdk-topbar{justify-content:center;padding:10px 12px;gap:8px}.psdk-topbar__spacer{display:none}.psdk-topbar__brand{width:100%;justify-content:center;border-right:none;margin-right:0;padding-right:0;margin-bottom:4px}.psdk-btn{padding:8px 10px}}.psdk-modal-overlay{position:absolute;top:0;right:0;bottom:0;left:0;background:#0f1117b3;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);z-index:2000;display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .2s ease;border-radius:inherit}.psdk-modal-overlay--active{opacity:1}.psdk-modal{background:var(--psdk-bg-surface);border:1px solid var(--psdk-border);border-radius:var(--psdk-radius-lg);box-shadow:var(--psdk-shadow-md);width:90%;max-width:360px;display:flex;flex-direction:column;transform:scale(.95) translateY(10px);opacity:0;transition:all .2s cubic-bezier(.34,1.56,.64,1);overflow:hidden}.psdk-modal--active{transform:scale(1) translateY(0);opacity:1}.psdk-modal__header{display:flex;align-items:center;justify-content:space-between;padding:16px 20px;border-bottom:1px solid var(--psdk-border);background:var(--psdk-bg-base)}.psdk-modal__title{font-size:14px;font-weight:700;color:var(--psdk-text-primary);margin:0}.psdk-modal__close{background:transparent;border:none;color:var(--psdk-text-muted);cursor:pointer;padding:4px;display:flex;align-items:center;justify-content:center;border-radius:var(--psdk-radius-sm);transition:all var(--psdk-transition)}.psdk-modal__close:hover{background:var(--psdk-bg-hover);color:var(--psdk-text-primary)}.psdk-modal__close svg{width:18px;height:18px}.psdk-modal__body{padding:20px;max-height:400px;overflow-y:auto}.psdk-modal__list{display:flex;flex-direction:column;gap:10px}.psdk-modal__item{display:flex;align-items:center;gap:12px;padding:12px 16px;background:var(--psdk-bg-elevated);border:1px solid var(--psdk-border);border-radius:var(--psdk-radius-md);cursor:pointer;transition:all var(--psdk-transition);text-align:left;color:var(--psdk-text-primary);font-family:var(--psdk-font);width:100%}.psdk-modal__item:hover{background:var(--psdk-bg-hover);border-color:var(--psdk-border-strong);transform:translateY(-1px)}.psdk-modal__item:active{transform:translateY(0)}.psdk-modal__item-icon{width:32px;height:32px;border-radius:8px;background:var(--psdk-accent-subtle);color:var(--psdk-accent);display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden}.psdk-modal__item-icon--image{background:#fff}.psdk-modal__item-icon img{width:100%;height:100%;object-fit:contain}.psdk-modal__item-icon svg{width:18px;height:18px}.psdk-modal__item-label{font-size:13px;font-weight:600}@media (max-width: 768px){.psdk-body{flex-direction:column}.psdk-viewer{min-height:0;order:1}.psdk-sidebar{order:2;width:100%;height:140px;flex:0 0 140px;border-right:none;border-top:1px solid var(--psdk-border)}.psdk-sidebar__header{padding:6px 12px}.psdk-sidebar__scroll{flex-direction:row;overflow-y:hidden;overflow-x:auto;padding:10px 12px;height:100px;flex:0 0 100px}.psdk-sidebar__scroll::-webkit-scrollbar{height:4px}.psdk-thumb{width:80px;min-height:90px;flex-shrink:0;justify-content:center}.psdk-thumb-skeleton{width:80px;height:90px;flex-shrink:0}}.psdk-modal__input-wrapper{position:relative;display:flex;align-items:center;width:100%}.psdk-modal__input{width:100%;padding:10px 40px 10px 14px;background:var(--psdk-bg-base);border:1px solid var(--psdk-border);border-radius:var(--psdk-radius-md);color:var(--psdk-text-primary);font-family:var(--psdk-font);font-size:13px;outline:none;transition:all var(--psdk-transition)}.psdk-modal__input:focus{border-color:var(--psdk-accent);box-shadow:0 0 0 3px var(--psdk-accent-subtle)}.psdk-root.psdk-light .psdk-modal__input{background:var(--psdk-bg-elevated)}.psdk-modal__input-toggle{position:absolute;right:12px;background:transparent;border:none;color:var(--psdk-text-muted);cursor:pointer;padding:4px;display:flex;align-items:center;justify-content:center;border-radius:var(--psdk-radius-sm);transition:all var(--psdk-transition)}.psdk-modal__input-toggle:hover{color:var(--psdk-text-primary)}.psdk-modal__input-toggle svg{width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.psdk-modal__error{color:var(--psdk-danger);font-size:12px;margin-top:8px;display:flex;align-items:center;gap:6px;font-weight:500}.psdk-modal__error svg{width:14px;height:14px;flex-shrink:0;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.psdk-modal__buttons{display:flex;justify-content:flex-end;gap:8px;margin-top:20px}.psdk-modal__input::-ms-reveal,.psdk-modal__input::-ms-clear{display:none!important}.psdk-topbar__secure-badge{display:inline-flex;align-items:center;justify-content:center;padding:4px;background:#22c55e26;color:var(--psdk-success);border-radius:50%;transition:all var(--psdk-transition);box-shadow:0 0 8px #22c55e33}.psdk-root.psdk-light .psdk-topbar__secure-badge{background:#22c55e1a}.psdk-topbar__secure-badge svg{width:12px;height:12px;stroke:currentColor}')),document.head.appendChild(r)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
var nf = Object.defineProperty;
var Bd = (d) => {
  throw TypeError(d);
};
var rf = (d, t, e) => t in d ? nf(d, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : d[t] = e;
var U = (d, t, e) => rf(d, typeof t != "symbol" ? t + "" : t, e), Kh = (d, t, e) => t.has(d) || Bd("Cannot " + e);
var r = (d, t, e) => (Kh(d, t, "read from private field"), e ? e.call(d) : t.get(d)), b = (d, t, e) => t.has(d) ? Bd("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(d) : t.set(d, e), f = (d, t, e, s) => (Kh(d, t, "write to private field"), s ? s.call(d, e) : t.set(d, e), e), y = (d, t, e) => (Kh(d, t, "access private method"), e);
var re = (d, t, e, s) => ({
  set _(i) {
    f(d, t, i, e);
  },
  get _() {
    return r(d, t, s);
  }
});
class af {
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
var eo = {};
eo.d = (d, t) => {
  for (var e in t)
    eo.o(t, e) && !eo.o(d, e) && Object.defineProperty(d, e, { enumerable: !0, get: t[e] });
};
eo.o = (d, t) => Object.prototype.hasOwnProperty.call(d, t);
var V = globalThis.pdfjsLib = {};
eo.d(V, {
  AbortException: () => (
    /* reexport */
    tn
  ),
  AnnotationEditorLayer: () => (
    /* reexport */
    pd
  ),
  AnnotationEditorParamsType: () => (
    /* reexport */
    tt
  ),
  AnnotationEditorType: () => (
    /* reexport */
    X
  ),
  AnnotationEditorUIManager: () => (
    /* reexport */
    gr
  ),
  AnnotationLayer: () => (
    /* reexport */
    em
  ),
  AnnotationMode: () => (
    /* reexport */
    wi
  ),
  ColorPicker: () => (
    /* reexport */
    vh
  ),
  DOMSVGFactory: () => (
    /* reexport */
    kd
  ),
  DrawLayer: () => (
    /* reexport */
    md
  ),
  FeatureTest: () => (
    /* reexport */
    de
  ),
  GlobalWorkerOptions: () => (
    /* reexport */
    gi
  ),
  ImageKind: () => (
    /* reexport */
    Hl
  ),
  InvalidPDFException: () => (
    /* reexport */
    ac
  ),
  MissingPDFException: () => (
    /* reexport */
    io
  ),
  OPS: () => (
    /* reexport */
    Je
  ),
  OutputScale: () => (
    /* reexport */
    lc
  ),
  PDFDataRangeTransport: () => (
    /* reexport */
    ap
  ),
  PDFDateString: () => (
    /* reexport */
    Sd
  ),
  PDFWorker: () => (
    /* reexport */
    Pr
  ),
  PasswordResponses: () => (
    /* reexport */
    cf
  ),
  PermissionFlag: () => (
    /* reexport */
    hf
  ),
  PixelsPerInch: () => (
    /* reexport */
    en
  ),
  RenderingCancelledException: () => (
    /* reexport */
    _d
  ),
  TextLayer: () => (
    /* reexport */
    no
  ),
  TouchManager: () => (
    /* reexport */
    yh
  ),
  UnexpectedResponseException: () => (
    /* reexport */
    gh
  ),
  Util: () => (
    /* reexport */
    G
  ),
  VerbosityLevel: () => (
    /* reexport */
    Gh
  ),
  XfaLayer: () => (
    /* reexport */
    lp
  ),
  build: () => (
    /* reexport */
    Fg
  ),
  createValidAbsoluteUrl: () => (
    /* reexport */
    ff
  ),
  fetchData: () => (
    /* reexport */
    Wh
  ),
  getDocument: () => (
    /* reexport */
    xg
  ),
  getFilenameFromUrl: () => (
    /* reexport */
    Sf
  ),
  getPdfFilenameFromUrl: () => (
    /* reexport */
    Ef
  ),
  getXfaPageViewport: () => (
    /* reexport */
    Cf
  ),
  isDataScheme: () => (
    /* reexport */
    Xh
  ),
  isPdfFile: () => (
    /* reexport */
    wd
  ),
  noContextMenu: () => (
    /* reexport */
    ps
  ),
  normalizeUnicode: () => (
    /* reexport */
    vf
  ),
  setLayerDimensions: () => (
    /* reexport */
    fr
  ),
  shadow: () => (
    /* reexport */
    J
  ),
  stopEvent: () => (
    /* reexport */
    Oe
  ),
  version: () => (
    /* reexport */
    Dg
  )
});
const ne = typeof process == "object" && process + "" == "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser"), ru = [1, 0, 0, 1, 0, 0], rc = [1e-3, 0, 0, 1e-3, 0, 0], of = 1e7, Qh = 1.35, Fe = {
  ANY: 1,
  DISPLAY: 2,
  PRINT: 4,
  ANNOTATIONS_FORMS: 16,
  ANNOTATIONS_STORAGE: 32,
  ANNOTATIONS_DISABLE: 64,
  IS_EDITING: 128,
  OPLIST: 256
}, wi = {
  DISABLE: 0,
  ENABLE: 1,
  ENABLE_FORMS: 2,
  ENABLE_STORAGE: 3
}, lf = "pdfjs_internal_editor_", X = {
  DISABLE: -1,
  NONE: 0,
  FREETEXT: 3,
  HIGHLIGHT: 9,
  STAMP: 13,
  INK: 15
}, tt = {
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
}, hf = {
  PRINT: 4,
  MODIFY_CONTENTS: 8,
  COPY: 16,
  MODIFY_ANNOTATIONS: 32,
  FILL_INTERACTIVE_FORMS: 256,
  COPY_FOR_ACCESSIBILITY: 512,
  ASSEMBLE: 1024,
  PRINT_HIGH_QUALITY: 2048
}, Kt = {
  FILL: 0,
  STROKE: 1,
  FILL_STROKE: 2,
  INVISIBLE: 3,
  FILL_STROKE_MASK: 3,
  ADD_TO_PATH_FLAG: 4
}, Hl = {
  GRAYSCALE_1BPP: 1,
  RGB_24BPP: 2,
  RGBA_32BPP: 3
}, Rt = {
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
}, Fa = {
  SOLID: 1,
  DASHED: 2,
  BEVELED: 3,
  INSET: 4,
  UNDERLINE: 5
}, Gh = {
  ERRORS: 0,
  WARNINGS: 1,
  INFOS: 5
}, Je = {
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
}, cf = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
};
let Uh = Gh.WARNINGS;
function df(d) {
  Number.isInteger(d) && (Uh = d);
}
function uf() {
  return Uh;
}
function jh(d) {
  Uh >= Gh.INFOS && console.log(`Info: ${d}`);
}
function q(d) {
  Uh >= Gh.WARNINGS && console.log(`Warning: ${d}`);
}
function ct(d) {
  throw new Error(d);
}
function Pt(d, t) {
  d || ct(t);
}
function pf(d) {
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
function ff(d, t = null, e = null) {
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
          d = Af(d);
        } catch {
        }
    }
    const s = t ? new URL(d, t) : new URL(d);
    if (pf(s))
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
const nn = function() {
  function t(e, s) {
    this.message = e, this.name = s;
  }
  return t.prototype = new Error(), t.constructor = t, t;
}();
class Hd extends nn {
  constructor(t, e) {
    super(t, "PasswordException"), this.code = e;
  }
}
class Zh extends nn {
  constructor(t, e) {
    super(t, "UnknownErrorException"), this.details = e;
  }
}
class ac extends nn {
  constructor(t) {
    super(t, "InvalidPDFException");
  }
}
class io extends nn {
  constructor(t) {
    super(t, "MissingPDFException");
  }
}
class gh extends nn {
  constructor(t, e) {
    super(t, "UnexpectedResponseException"), this.status = e;
  }
}
class gf extends nn {
  constructor(t) {
    super(t, "FormatError");
  }
}
class tn extends nn {
  constructor(t) {
    super(t, "AbortException");
  }
}
function au(d) {
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
function Vh(d) {
  typeof d != "string" && ct("Invalid argument for stringToBytes");
  const t = d.length, e = new Uint8Array(t);
  for (let s = 0; s < t; ++s)
    e[s] = d.charCodeAt(s) & 255;
  return e;
}
function mf(d) {
  return String.fromCharCode(d >> 24 & 255, d >> 16 & 255, d >> 8 & 255, d & 255);
}
function Ad(d) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const [e, s] of d)
    t[e] = s;
  return t;
}
function bf() {
  const d = new Uint8Array(4);
  return d[0] = 1, new Uint32Array(d.buffer, 0, 1)[0] === 1;
}
function yf() {
  try {
    return new Function(""), !0;
  } catch {
    return !1;
  }
}
class de {
  static get isLittleEndian() {
    return J(this, "isLittleEndian", bf());
  }
  static get isEvalSupported() {
    return J(this, "isEvalSupported", yf());
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
const Jh = Array.from(Array(256).keys(), (d) => d.toString(16).padStart(2, "0"));
var mi, zl, oc;
class G {
  static makeHexColor(t, e, s) {
    return `#${Jh[t]}${Jh[e]}${Jh[s]}`;
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
    return h ? (h[0] = Math.min(h[0], t, o), h[1] = Math.min(h[1], e, l), h[2] = Math.max(h[2], t, o), h[3] = Math.max(h[3], e, l)) : h = [Math.min(t, o), Math.min(e, l), Math.max(t, o), Math.max(e, l)], y(this, mi, oc).call(this, t, s, n, o, e, i, a, l, 3 * (-t + 3 * (s - n) + o), 6 * (t - 2 * s + n), 3 * (s - t), h), y(this, mi, oc).call(this, t, s, n, o, e, i, a, l, 3 * (-e + 3 * (i - a) + l), 6 * (e - 2 * i + a), 3 * (i - e), h), h;
  }
}
mi = new WeakSet(), zl = function(t, e, s, i, n, a, o, l, h, c) {
  if (h <= 0 || h >= 1)
    return;
  const u = 1 - h, p = h * h, g = p * h, m = u * (u * (u * t + 3 * h * e) + 3 * p * s) + g * i, A = u * (u * (u * n + 3 * h * a) + 3 * p * o) + g * l;
  c[0] = Math.min(c[0], m), c[1] = Math.min(c[1], A), c[2] = Math.max(c[2], m), c[3] = Math.max(c[3], A);
}, oc = function(t, e, s, i, n, a, o, l, h, c, u, p) {
  if (Math.abs(h) < 1e-12) {
    Math.abs(c) >= 1e-12 && y(this, mi, zl).call(this, t, e, s, i, n, a, o, l, -u / c, p);
    return;
  }
  const g = c ** 2 - 4 * u * h;
  if (g < 0)
    return;
  const m = Math.sqrt(g), A = 2 * h;
  y(this, mi, zl).call(this, t, e, s, i, n, a, o, l, (-c + m) / A, p), y(this, mi, zl).call(this, t, e, s, i, n, a, o, l, (-c - m) / A, p);
}, b(G, mi);
function Af(d) {
  return decodeURIComponent(escape(d));
}
let tc = null, zd = null;
function vf(d) {
  return tc || (tc = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu, zd = /* @__PURE__ */ new Map([["ﬅ", "ſt"]])), d.replaceAll(tc, (t, e, s) => e ? e.normalize("NFKC") : zd.get(s));
}
function _f() {
  if (typeof crypto.randomUUID == "function")
    return crypto.randomUUID();
  const d = new Uint8Array(32);
  return crypto.getRandomValues(d), au(d);
}
const vd = "pdfjs_internal_id_";
function wf(d) {
  return Uint8Array.prototype.toBase64 ? d.toBase64() : btoa(au(d));
}
typeof Promise.try != "function" && (Promise.try = function(d, ...t) {
  return new Promise((e) => {
    e(d(...t));
  });
});
const Hs = "http://www.w3.org/2000/svg", ln = class ln {
};
U(ln, "CSS", 96), U(ln, "PDF", 72), U(ln, "PDF_TO_CSS_UNITS", ln.CSS / ln.PDF);
let en = ln;
async function Wh(d, t = "text") {
  if (Ha(d, document.baseURI)) {
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
class Rl {
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
    return new Rl({
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
    return G.applyTransform([t, e], this.transform);
  }
  convertToViewportRectangle(t) {
    const e = G.applyTransform([t[0], t[1]], this.transform), s = G.applyTransform([t[2], t[3]], this.transform);
    return [e[0], e[1], s[0], s[1]];
  }
  convertToPdfPoint(t, e) {
    return G.applyInverseTransform([t, e], this.transform);
  }
}
class _d extends nn {
  constructor(t, e = 0) {
    super(t, "RenderingCancelledException"), this.extraDelay = e;
  }
}
function Xh(d) {
  const t = d.length;
  let e = 0;
  for (; e < t && d[e].trim() === ""; )
    e++;
  return d.substring(e, e + 5).toLowerCase() === "data:";
}
function wd(d) {
  return typeof d == "string" && /\.pdf$/i.test(d);
}
function Sf(d) {
  return [d] = d.split(/[#?]/, 1), d.substring(d.lastIndexOf("/") + 1);
}
function Ef(d, t = "document.pdf") {
  if (typeof d != "string")
    return t;
  if (Xh(d))
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
class $d {
  constructor() {
    U(this, "started", /* @__PURE__ */ Object.create(null));
    U(this, "times", []);
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
function Ha(d, t) {
  try {
    const {
      protocol: e
    } = t ? new URL(d, t) : new URL(d);
    return e === "http:" || e === "https:";
  } catch {
    return !1;
  }
}
function ps(d) {
  d.preventDefault();
}
function Oe(d) {
  d.preventDefault(), d.stopPropagation();
}
var ao;
class Sd {
  static toDateObject(t) {
    if (!t || typeof t != "string")
      return null;
    r(this, ao) || f(this, ao, new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));
    const e = r(this, ao).exec(t);
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
ao = new WeakMap(), b(Sd, ao);
function Cf(d, {
  scale: t = 1,
  rotation: e = 0
}) {
  const {
    width: s,
    height: i
  } = d.attributes.style, n = [0, 0, parseInt(s), parseInt(i)];
  return new Rl({
    viewBox: n,
    userUnit: 1,
    scale: t,
    rotation: e
  });
}
function Ed(d) {
  if (d.startsWith("#")) {
    const t = parseInt(d.slice(1), 16);
    return [(t & 16711680) >> 16, (t & 65280) >> 8, t & 255];
  }
  return d.startsWith("rgb(") ? d.slice(4, -1).split(",").map((t) => parseInt(t)) : d.startsWith("rgba(") ? d.slice(5, -1).split(",").map((t) => parseInt(t)).slice(0, 3) : (q(`Not a valid color format: "${d}"`), [0, 0, 0]);
}
function xf(d) {
  const t = document.createElement("span");
  t.style.visibility = "hidden", document.body.append(t);
  for (const e of d.keys()) {
    t.style.color = e;
    const s = window.getComputedStyle(t).color;
    d.set(e, Ed(s));
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
function gs(d) {
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
function fr(d, t, e = !1, s = !0) {
  if (t instanceof Rl) {
    const {
      pageWidth: i,
      pageHeight: n
    } = t.rawDims, {
      style: a
    } = d, o = de.isCSSRoundSupported, l = `var(--scale-factor) * ${i}px`, h = `var(--scale-factor) * ${n}px`, c = o ? `round(down, ${l}, var(--scale-round-x, 1px))` : `calc(${l})`, u = o ? `round(down, ${h}, var(--scale-round-y, 1px))` : `calc(${h})`;
    !e || t.rotation % 180 === 0 ? (a.width = c, a.height = u) : (a.width = u, a.height = c);
  }
  s && d.setAttribute("data-main-rotation", t.rotation);
}
class lc {
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
var Si, cn, ts, dn, oo, lo, Sh, ou, ue, lu, hu, $l, cu, cc;
const Gs = class Gs {
  constructor(t) {
    b(this, ue);
    b(this, Si, null);
    b(this, cn, null);
    b(this, ts);
    b(this, dn, null);
    b(this, oo, null);
    f(this, ts, t), r(Gs, lo) || f(Gs, lo, Object.freeze({
      freetext: "pdfjs-editor-remove-freetext-button",
      highlight: "pdfjs-editor-remove-highlight-button",
      ink: "pdfjs-editor-remove-ink-button",
      stamp: "pdfjs-editor-remove-stamp-button"
    }));
  }
  render() {
    const t = f(this, Si, document.createElement("div"));
    t.classList.add("editToolbar", "hidden"), t.setAttribute("role", "toolbar");
    const e = r(this, ts)._uiManager._signal;
    t.addEventListener("contextmenu", ps, {
      signal: e
    }), t.addEventListener("pointerdown", y(Gs, Sh, ou), {
      signal: e
    });
    const s = f(this, dn, document.createElement("div"));
    s.className = "buttons", t.append(s);
    const i = r(this, ts).toolbarPosition;
    if (i) {
      const {
        style: n
      } = t, a = r(this, ts)._uiManager.direction === "ltr" ? 1 - i[0] : i[0];
      n.insetInlineEnd = `${100 * a}%`, n.top = `calc(${100 * i[1]}% + var(--editor-toolbar-vert-offset))`;
    }
    return y(this, ue, cu).call(this), t;
  }
  get div() {
    return r(this, Si);
  }
  hide() {
    var t;
    r(this, Si).classList.add("hidden"), (t = r(this, cn)) == null || t.hideDropdown();
  }
  show() {
    var t;
    r(this, Si).classList.remove("hidden"), (t = r(this, oo)) == null || t.shown();
  }
  async addAltText(t) {
    const e = await t.render();
    y(this, ue, $l).call(this, e), r(this, dn).prepend(e, r(this, ue, cc)), f(this, oo, t);
  }
  addColorPicker(t) {
    f(this, cn, t);
    const e = t.renderButton();
    y(this, ue, $l).call(this, e), r(this, dn).prepend(e, r(this, ue, cc));
  }
  remove() {
    var t;
    r(this, Si).remove(), (t = r(this, cn)) == null || t.destroy(), f(this, cn, null);
  }
};
Si = new WeakMap(), cn = new WeakMap(), ts = new WeakMap(), dn = new WeakMap(), oo = new WeakMap(), lo = new WeakMap(), Sh = new WeakSet(), ou = function(t) {
  t.stopPropagation();
}, ue = new WeakSet(), lu = function(t) {
  r(this, ts)._focusEventsAllowed = !1, Oe(t);
}, hu = function(t) {
  r(this, ts)._focusEventsAllowed = !0, Oe(t);
}, $l = function(t) {
  const e = r(this, ts)._uiManager._signal;
  t.addEventListener("focusin", y(this, ue, lu).bind(this), {
    capture: !0,
    signal: e
  }), t.addEventListener("focusout", y(this, ue, hu).bind(this), {
    capture: !0,
    signal: e
  }), t.addEventListener("contextmenu", ps, {
    signal: e
  });
}, cu = function() {
  const {
    editorType: t,
    _uiManager: e
  } = r(this, ts), s = document.createElement("button");
  s.className = "delete", s.tabIndex = 0, s.setAttribute("data-l10n-id", r(Gs, lo)[t]), y(this, ue, $l).call(this, s), s.addEventListener("click", (i) => {
    e.delete();
  }, {
    signal: e._signal
  }), r(this, dn).append(s);
}, cc = function() {
  const t = document.createElement("div");
  return t.className = "divider", t;
}, b(Gs, Sh), b(Gs, lo, null);
let hc = Gs;
var ho, un, pn, sn, du, uu, pu;
class kf {
  constructor(t) {
    b(this, sn);
    b(this, ho, null);
    b(this, un, null);
    b(this, pn);
    f(this, pn, t);
  }
  show(t, e, s) {
    const [i, n] = y(this, sn, uu).call(this, e, s), {
      style: a
    } = r(this, un) || f(this, un, y(this, sn, du).call(this));
    t.append(r(this, un)), a.insetInlineEnd = `${100 * i}%`, a.top = `calc(${100 * n}% + var(--editor-toolbar-vert-offset))`;
  }
  hide() {
    r(this, un).remove();
  }
}
ho = new WeakMap(), un = new WeakMap(), pn = new WeakMap(), sn = new WeakSet(), du = function() {
  const t = f(this, un, document.createElement("div"));
  t.className = "editToolbar", t.setAttribute("role", "toolbar"), t.addEventListener("contextmenu", ps, {
    signal: r(this, pn)._signal
  });
  const e = f(this, ho, document.createElement("div"));
  return e.className = "buttons", t.append(e), y(this, sn, pu).call(this), t;
}, uu = function(t, e) {
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
}, pu = function() {
  const t = document.createElement("button");
  t.className = "highlightButton", t.tabIndex = 0, t.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button1");
  const e = document.createElement("span");
  t.append(e), e.className = "visuallyHidden", e.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button-label");
  const s = r(this, pn)._signal;
  t.addEventListener("contextmenu", ps, {
    signal: s
  }), t.addEventListener("click", () => {
    r(this, pn).highlightSelection("floating_button");
  }, {
    signal: s
  }), r(this, ho).append(t);
};
function mh(d, t, e) {
  for (const s of e)
    t.addEventListener(s, d[s].bind(d));
}
var Eh;
class Tf {
  constructor() {
    b(this, Eh, 0);
  }
  get id() {
    return `${lf}${re(this, Eh)._++}`;
  }
}
Eh = new WeakMap();
var Mr, co, Jt, Lr, Gl;
const Md = class Md {
  constructor() {
    b(this, Lr);
    b(this, Mr, _f());
    b(this, co, 0);
    b(this, Jt, null);
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
    return y(this, Lr, Gl).call(this, `${e}_${s}_${i}_${n}`, t);
  }
  async getFromUrl(t) {
    return y(this, Lr, Gl).call(this, t, t);
  }
  async getFromBlob(t, e) {
    const s = await e;
    return y(this, Lr, Gl).call(this, t, s);
  }
  async getFromId(t) {
    r(this, Jt) || f(this, Jt, /* @__PURE__ */ new Map());
    const e = r(this, Jt).get(t);
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
    r(this, Jt) || f(this, Jt, /* @__PURE__ */ new Map());
    let s = r(this, Jt).get(t);
    if (s != null && s.bitmap)
      return s.refCounter += 1, s;
    const i = new OffscreenCanvas(e.width, e.height);
    return i.getContext("2d").drawImage(e, 0, 0), s = {
      bitmap: i.transferToImageBitmap(),
      id: `image_${r(this, Mr)}_${re(this, co)._++}`,
      refCounter: 1,
      isSvg: !1
    }, r(this, Jt).set(t, s), r(this, Jt).set(s.id, s), s;
  }
  getSvgUrl(t) {
    const e = r(this, Jt).get(t);
    return e != null && e.isSvg ? e.svgUrl : null;
  }
  deleteId(t) {
    var i;
    r(this, Jt) || f(this, Jt, /* @__PURE__ */ new Map());
    const e = r(this, Jt).get(t);
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
    return t.startsWith(`image_${r(this, Mr)}_`);
  }
};
Mr = new WeakMap(), co = new WeakMap(), Jt = new WeakMap(), Lr = new WeakSet(), Gl = async function(t, e) {
  r(this, Jt) || f(this, Jt, /* @__PURE__ */ new Map());
  let s = r(this, Jt).get(t);
  if (s === null)
    return null;
  if (s != null && s.bitmap)
    return s.refCounter += 1, s;
  try {
    s || (s = {
      bitmap: null,
      id: `image_${r(this, Mr)}_${re(this, co)._++}`,
      refCounter: 0,
      isSvg: !1
    });
    let i;
    if (typeof e == "string" ? (s.url = e, i = await Wh(e, "blob")) : e instanceof File ? i = s.file = e : e instanceof Blob && (i = e), i.type === "image/svg+xml") {
      const n = Md._isSVGFittingCanvas, a = new FileReader(), o = new Image(), l = new Promise((h, c) => {
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
  return r(this, Jt).set(t, s), s && r(this, Jt).set(s.id, s), s;
};
let dc = Md;
var Ct, Ei, uo, yt;
class Pf {
  constructor(t = 128) {
    b(this, Ct, []);
    b(this, Ei, !1);
    b(this, uo);
    b(this, yt, -1);
    f(this, uo, t);
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
    if (i && t(), r(this, Ei))
      return;
    const l = {
      cmd: t,
      undo: e,
      post: s,
      type: n
    };
    if (r(this, yt) === -1) {
      r(this, Ct).length > 0 && (r(this, Ct).length = 0), f(this, yt, 0), r(this, Ct).push(l);
      return;
    }
    if (a && r(this, Ct)[r(this, yt)].type === n) {
      o && (l.undo = r(this, Ct)[r(this, yt)].undo), r(this, Ct)[r(this, yt)] = l;
      return;
    }
    const h = r(this, yt) + 1;
    h === r(this, uo) ? r(this, Ct).splice(0, 1) : (f(this, yt, h), h < r(this, Ct).length && r(this, Ct).splice(h)), r(this, Ct).push(l);
  }
  undo() {
    if (r(this, yt) === -1)
      return;
    f(this, Ei, !0);
    const {
      undo: t,
      post: e
    } = r(this, Ct)[r(this, yt)];
    t(), e == null || e(), f(this, Ei, !1), f(this, yt, r(this, yt) - 1);
  }
  redo() {
    if (r(this, yt) < r(this, Ct).length - 1) {
      f(this, yt, r(this, yt) + 1), f(this, Ei, !0);
      const {
        cmd: t,
        post: e
      } = r(this, Ct)[r(this, yt)];
      t(), e == null || e(), f(this, Ei, !1);
    }
  }
  hasSomethingToUndo() {
    return r(this, yt) !== -1;
  }
  hasSomethingToRedo() {
    return r(this, yt) < r(this, Ct).length - 1;
  }
  cleanType(t) {
    if (r(this, yt) !== -1) {
      for (let e = r(this, yt); e >= 0; e--)
        if (r(this, Ct)[e].type !== t) {
          r(this, Ct).splice(e + 1, r(this, yt) - e), f(this, yt, e);
          return;
        }
      r(this, Ct).length = 0, f(this, yt, -1);
    }
  }
  destroy() {
    f(this, Ct, null);
  }
}
Ct = new WeakMap(), Ei = new WeakMap(), uo = new WeakMap(), yt = new WeakMap();
var Ch, fu;
class Il {
  constructor(t) {
    b(this, Ch);
    this.buffer = [], this.callbacks = /* @__PURE__ */ new Map(), this.allKeys = /* @__PURE__ */ new Set();
    const {
      isMac: e
    } = de.platform;
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
    const s = this.callbacks.get(y(this, Ch, fu).call(this, e));
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
    o && !o(t, e) || (i.bind(t, ...a, e)(), n || Oe(e));
  }
}
Ch = new WeakSet(), fu = function(t) {
  t.altKey && this.buffer.push("alt"), t.ctrlKey && this.buffer.push("ctrl"), t.metaKey && this.buffer.push("meta"), t.shiftKey && this.buffer.push("shift"), this.buffer.push(t.key);
  const e = this.buffer.join("+");
  return this.buffer.length = 0, e;
};
const xh = class xh {
  get _colors() {
    const t = /* @__PURE__ */ new Map([["CanvasText", null], ["Canvas", null]]);
    return xf(t), J(this, "_colors", t);
  }
  convert(t) {
    const e = Ed(t);
    if (!window.matchMedia("(forced-colors: active)").matches)
      return e;
    for (const [s, i] of this._colors)
      if (i.every((n, a) => n === e[a]))
        return xh._colorsMapping.get(s);
    return e;
  }
  getHexCode(t) {
    const e = this._colors.get(t);
    return e ? G.makeHexColor(...e) : t;
  }
};
U(xh, "_colorsMapping", /* @__PURE__ */ new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]));
let uc = xh;
var Rr, Se, Dt, jt, Ir, js, Dr, $e, Ci, fn, Fr, gn, As, es, mn, po, fo, Nr, go, vs, xi, Or, ki, _s, kh, Ti, mo, Pi, bn, bo, yo, Ot, at, Vs, yn, Ao, vo, Mi, ws, Ws, _o, Ge, L, Ul, pc, gu, mu, jl, bu, yu, Au, fc, vu, gc, mc, _u, ae, zs, wu, Su, bc, Eu, za, yc;
const xr = class xr {
  constructor(t, e, s, i, n, a, o, l, h, c, u, p, g) {
    b(this, L);
    b(this, Rr, new AbortController());
    b(this, Se, null);
    b(this, Dt, /* @__PURE__ */ new Map());
    b(this, jt, /* @__PURE__ */ new Map());
    b(this, Ir, null);
    b(this, js, null);
    b(this, Dr, null);
    b(this, $e, new Pf());
    b(this, Ci, null);
    b(this, fn, null);
    b(this, Fr, 0);
    b(this, gn, /* @__PURE__ */ new Set());
    b(this, As, null);
    b(this, es, null);
    b(this, mn, /* @__PURE__ */ new Set());
    U(this, "_editorUndoBar", null);
    b(this, po, !1);
    b(this, fo, !1);
    b(this, Nr, !1);
    b(this, go, null);
    b(this, vs, null);
    b(this, xi, null);
    b(this, Or, null);
    b(this, ki, !1);
    b(this, _s, null);
    b(this, kh, new Tf());
    b(this, Ti, !1);
    b(this, mo, !1);
    b(this, Pi, null);
    b(this, bn, null);
    b(this, bo, null);
    b(this, yo, null);
    b(this, Ot, X.NONE);
    b(this, at, /* @__PURE__ */ new Set());
    b(this, Vs, null);
    b(this, yn, null);
    b(this, Ao, null);
    b(this, vo, {
      isEditing: !1,
      isEmpty: !0,
      hasSomethingToUndo: !1,
      hasSomethingToRedo: !1,
      hasSelectedEditor: !1,
      hasSelectedText: !1
    });
    b(this, Mi, [0, 0]);
    b(this, ws, null);
    b(this, Ws, null);
    b(this, _o, null);
    b(this, Ge, null);
    const m = this._signal = r(this, Rr).signal;
    f(this, Ws, t), f(this, _o, e), f(this, Ir, s), this._eventBus = i, i._on("editingaction", this.onEditingAction.bind(this), {
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
    }), y(this, L, bu).call(this), y(this, L, _u).call(this), y(this, L, fc).call(this), f(this, js, n.annotationStorage), f(this, go, n.filterFactory), f(this, yn, a), f(this, Or, o || null), f(this, po, l), f(this, fo, h), f(this, Nr, c), f(this, yo, u || null), this.viewParameters = {
      realScale: en.PDF_TO_CSS_UNITS,
      rotation: 0
    }, this.isShiftKeyDown = !1, this._editorUndoBar = p || null, this._supportsPinchToZoom = g !== !1;
  }
  static get _keyboardManager() {
    const t = xr.prototype, e = (a) => r(a, Ws).contains(document.activeElement) && document.activeElement.tagName !== "BUTTON" && a.hasSomethingToControl(), s = (a, {
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
    return J(this, "_keyboardManager", new Il([[["ctrl+a", "mac+meta+a"], t.selectAll, {
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
      }) => !(o instanceof HTMLButtonElement) && r(a, Ws).contains(o) && !a.isEnterHandled
    }], [[" ", "mac+ "], t.addNewEditorFromKeyboard, {
      checker: (a, {
        target: o
      }) => !(o instanceof HTMLButtonElement) && r(a, Ws).contains(document.activeElement)
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
    (t = r(this, Ge)) == null || t.resolve(), f(this, Ge, null), (e = r(this, Rr)) == null || e.abort(), f(this, Rr, null), this._signal = null;
    for (const a of r(this, jt).values())
      a.destroy();
    r(this, jt).clear(), r(this, Dt).clear(), r(this, mn).clear(), f(this, Se, null), r(this, at).clear(), r(this, $e).destroy(), (s = r(this, Ir)) == null || s.destroy(), (i = r(this, _s)) == null || i.hide(), f(this, _s, null), r(this, vs) && (clearTimeout(r(this, vs)), f(this, vs, null)), r(this, ws) && (clearTimeout(r(this, ws)), f(this, ws, null)), (n = this._editorUndoBar) == null || n.destroy();
  }
  combinedSignal(t) {
    return AbortSignal.any([this._signal, t.signal]);
  }
  get mlManager() {
    return r(this, yo);
  }
  get useNewAltTextFlow() {
    return r(this, fo);
  }
  get useNewAltTextWhenAddingImage() {
    return r(this, Nr);
  }
  get hcmFilter() {
    return J(this, "hcmFilter", r(this, yn) ? r(this, go).addHCMFilter(r(this, yn).foreground, r(this, yn).background) : "none");
  }
  get direction() {
    return J(this, "direction", getComputedStyle(r(this, Ws)).direction);
  }
  get highlightColors() {
    return J(this, "highlightColors", r(this, Or) ? new Map(r(this, Or).split(",").map((t) => t.split("=").map((e) => e.trim()))) : null);
  }
  get highlightColorNames() {
    return J(this, "highlightColorNames", this.highlightColors ? new Map(Array.from(this.highlightColors, (t) => t.reverse())) : null);
  }
  setCurrentDrawingSession(t) {
    t ? (this.unselectAll(), this.disableUserSelect(!0)) : this.disableUserSelect(!1), f(this, fn, t);
  }
  setMainHighlightColorPicker(t) {
    f(this, bo, t);
  }
  editAltText(t, e = !1) {
    var s;
    (s = r(this, Ir)) == null || s.editAltText(this, t, e);
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
        f(this, Nr, e);
        break;
    }
  }
  onPageChanging({
    pageNumber: t
  }) {
    f(this, Fr, t - 1);
  }
  focusMainContainer() {
    r(this, Ws).focus();
  }
  findParent(t, e) {
    for (const s of r(this, jt).values()) {
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
    r(this, _o).classList.toggle("noUserSelect", t);
  }
  addShouldRescale(t) {
    r(this, mn).add(t);
  }
  removeShouldRescale(t) {
    r(this, mn).delete(t);
  }
  onScaleChanging({
    scale: t
  }) {
    var e;
    this.commitOrRemove(), this.viewParameters.realScale = t * en.PDF_TO_CSS_UNITS;
    for (const s of r(this, mn))
      s.onScaleChanging();
    (e = r(this, fn)) == null || e.onScaleChanging();
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
    } = e, o = e.toString(), h = y(this, L, Ul).call(this, e).closest(".textLayer"), c = this.getSelectionBoxes(h);
    if (!c)
      return;
    e.empty();
    const u = y(this, L, pc).call(this, h), p = r(this, Ot) === X.NONE, g = () => {
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
      this.switchToMode(X.HIGHLIGHT, g);
      return;
    }
    g();
  }
  addToAnnotationStorage(t) {
    !t.isEmpty() && r(this, js) && !r(this, js).has(t.id) && r(this, js).setValue(t.id, t);
  }
  blur() {
    if (this.isShiftKeyDown = !1, r(this, ki) && (f(this, ki, !1), y(this, L, jl).call(this, "main_toolbar")), !this.hasSelection)
      return;
    const {
      activeElement: t
    } = document;
    for (const e of r(this, at))
      if (e.div.contains(t)) {
        f(this, bn, [e, t]), e._focusEventsAllowed = !1;
        break;
      }
  }
  focus() {
    if (!r(this, bn))
      return;
    const [t, e] = r(this, bn);
    f(this, bn, null), e.addEventListener("focusin", () => {
      t._focusEventsAllowed = !0;
    }, {
      once: !0,
      signal: this._signal
    }), e.focus();
  }
  addEditListeners() {
    y(this, L, fc).call(this), y(this, L, gc).call(this);
  }
  removeEditListeners() {
    y(this, L, vu).call(this), y(this, L, mc).call(this);
  }
  dragOver(t) {
    for (const {
      type: e
    } of t.dataTransfer.items)
      for (const s of r(this, es))
        if (s.isHandlingMimeForPasting(e)) {
          t.dataTransfer.dropEffect = "copy", t.preventDefault();
          return;
        }
  }
  drop(t) {
    for (const e of t.dataTransfer.items)
      for (const s of r(this, es))
        if (s.isHandlingMimeForPasting(e.type)) {
          s.paste(e, this.currentLayer), t.preventDefault();
          return;
        }
  }
  copy(t) {
    var s;
    if (t.preventDefault(), (s = r(this, Se)) == null || s.commitOrRemove(), !this.hasSelection)
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
      for (const a of r(this, es))
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
          y(this, L, bc).call(this, l);
        y(this, L, yc).call(this, n);
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
    !this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = !0), r(this, Ot) !== X.NONE && !this.isEditorHandlingKeyboard && xr._keyboardManager.exec(this, t);
  }
  keyup(t) {
    this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = !1, r(this, ki) && (f(this, ki, !1), y(this, L, jl).call(this, "main_toolbar")));
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
    t ? (y(this, L, yu).call(this), y(this, L, gc).call(this), y(this, L, ae).call(this, {
      isEditing: r(this, Ot) !== X.NONE,
      isEmpty: y(this, L, za).call(this),
      hasSomethingToUndo: r(this, $e).hasSomethingToUndo(),
      hasSomethingToRedo: r(this, $e).hasSomethingToRedo(),
      hasSelectedEditor: !1
    })) : (y(this, L, Au).call(this), y(this, L, mc).call(this), y(this, L, ae).call(this, {
      isEditing: !1
    }), this.disableUserSelect(!1));
  }
  registerEditorTypes(t) {
    if (!r(this, es)) {
      f(this, es, t);
      for (const e of r(this, es))
        y(this, L, zs).call(this, e.defaultPropertiesToUpdate);
    }
  }
  getId() {
    return r(this, kh).id;
  }
  get currentLayer() {
    return r(this, jt).get(r(this, Fr));
  }
  getLayer(t) {
    return r(this, jt).get(t);
  }
  get currentPageIndex() {
    return r(this, Fr);
  }
  addLayer(t) {
    r(this, jt).set(t.pageIndex, t), r(this, Ti) ? t.enable() : t.disable();
  }
  removeLayer(t) {
    r(this, jt).delete(t.pageIndex);
  }
  async updateMode(t, e = null, s = !1) {
    var i;
    if (r(this, Ot) !== t && !(r(this, Ge) && (await r(this, Ge).promise, !r(this, Ge)))) {
      if (f(this, Ge, Promise.withResolvers()), f(this, Ot, t), t === X.NONE) {
        this.setEditingState(!1), y(this, L, Su).call(this), (i = this._editorUndoBar) == null || i.hide(), r(this, Ge).resolve();
        return;
      }
      this.setEditingState(!0), await y(this, L, wu).call(this), this.unselectAll();
      for (const n of r(this, jt).values())
        n.updateMode(t);
      if (!e) {
        s && this.addNewEditorFromKeyboard(), r(this, Ge).resolve();
        return;
      }
      for (const n of r(this, Dt).values())
        n.annotationElementId === e ? (this.setSelected(n), n.enterInEditMode()) : n.unselect();
      r(this, Ge).resolve();
    }
  }
  addNewEditorFromKeyboard() {
    this.currentLayer.canCreateNewEmptyEditor() && this.currentLayer.addNewEditor();
  }
  updateToolbar(t) {
    t !== r(this, Ot) && this._eventBus.dispatch("switchannotationeditormode", {
      source: this,
      mode: t
    });
  }
  updateParams(t, e) {
    var s;
    if (r(this, es)) {
      switch (t) {
        case tt.CREATE:
          this.currentLayer.addNewEditor();
          return;
        case tt.HIGHLIGHT_DEFAULT_COLOR:
          (s = r(this, bo)) == null || s.updateColor(e);
          break;
        case tt.HIGHLIGHT_SHOW_ALL:
          this._eventBus.dispatch("reporttelemetry", {
            source: this,
            details: {
              type: "editing",
              data: {
                type: "highlight",
                action: "toggle_visibility"
              }
            }
          }), (r(this, Ao) || f(this, Ao, /* @__PURE__ */ new Map())).set(t, e), this.showAllEditors("highlight", e);
          break;
      }
      for (const i of r(this, at))
        i.updateParams(t, e);
      for (const i of r(this, es))
        i.updateDefaultParams(t, e);
    }
  }
  showAllEditors(t, e, s = !1) {
    var n;
    for (const a of r(this, Dt).values())
      a.editorType === t && a.show(e);
    (((n = r(this, Ao)) == null ? void 0 : n.get(tt.HIGHLIGHT_SHOW_ALL)) ?? !0) !== e && y(this, L, zs).call(this, [[tt.HIGHLIGHT_SHOW_ALL, e]]);
  }
  enableWaiting(t = !1) {
    if (r(this, mo) !== t) {
      f(this, mo, t);
      for (const e of r(this, jt).values())
        t ? e.disableClick() : e.enableClick(), e.div.classList.toggle("waiting", t);
    }
  }
  getEditors(t) {
    const e = [];
    for (const s of r(this, Dt).values())
      s.pageIndex === t && e.push(s);
    return e;
  }
  getEditor(t) {
    return r(this, Dt).get(t);
  }
  addEditor(t) {
    r(this, Dt).set(t.id, t);
  }
  removeEditor(t) {
    var e;
    t.div.contains(document.activeElement) && (r(this, vs) && clearTimeout(r(this, vs)), f(this, vs, setTimeout(() => {
      this.focusMainContainer(), f(this, vs, null);
    }, 0))), r(this, Dt).delete(t.id), this.unselect(t), (!t.annotationElementId || !r(this, gn).has(t.annotationElementId)) && ((e = r(this, js)) == null || e.remove(t.id));
  }
  addDeletedAnnotationElement(t) {
    r(this, gn).add(t.annotationElementId), this.addChangedExistingAnnotation(t), t.deleted = !0;
  }
  isDeletedAnnotationElement(t) {
    return r(this, gn).has(t);
  }
  removeDeletedAnnotationElement(t) {
    r(this, gn).delete(t.annotationElementId), this.removeChangedExistingAnnotation(t), t.deleted = !1;
  }
  setActiveEditor(t) {
    r(this, Se) !== t && (f(this, Se, t), t && y(this, L, zs).call(this, t.propertiesToUpdate));
  }
  updateUI(t) {
    r(this, L, Eu) === t && y(this, L, zs).call(this, t.propertiesToUpdate);
  }
  updateUIForDefaultProperties(t) {
    y(this, L, zs).call(this, t.defaultPropertiesToUpdate);
  }
  toggleSelected(t) {
    if (r(this, at).has(t)) {
      r(this, at).delete(t), t.unselect(), y(this, L, ae).call(this, {
        hasSelectedEditor: this.hasSelection
      });
      return;
    }
    r(this, at).add(t), t.select(), y(this, L, zs).call(this, t.propertiesToUpdate), y(this, L, ae).call(this, {
      hasSelectedEditor: !0
    });
  }
  setSelected(t) {
    var e;
    (e = r(this, fn)) == null || e.commitOrRemove();
    for (const s of r(this, at))
      s !== t && s.unselect();
    r(this, at).clear(), r(this, at).add(t), t.select(), y(this, L, zs).call(this, t.propertiesToUpdate), y(this, L, ae).call(this, {
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
    t.unselect(), r(this, at).delete(t), y(this, L, ae).call(this, {
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
    r(this, $e).undo(), y(this, L, ae).call(this, {
      hasSomethingToUndo: r(this, $e).hasSomethingToUndo(),
      hasSomethingToRedo: !0,
      isEmpty: y(this, L, za).call(this)
    }), (t = this._editorUndoBar) == null || t.hide();
  }
  redo() {
    r(this, $e).redo(), y(this, L, ae).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: r(this, $e).hasSomethingToRedo(),
      isEmpty: y(this, L, za).call(this)
    });
  }
  addCommands(t) {
    r(this, $e).add(t), y(this, L, ae).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: !1,
      isEmpty: y(this, L, za).call(this)
    });
  }
  cleanUndoStack(t) {
    r(this, $e).cleanType(t);
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
        y(this, L, bc).call(this, a);
    };
    this.addCommands({
      cmd: s,
      undo: i,
      mustExec: !0
    });
  }
  commitOrRemove() {
    var t;
    (t = r(this, Se)) == null || t.commitOrRemove();
  }
  hasSomethingToControl() {
    return r(this, Se) || this.hasSelection;
  }
  selectAll() {
    for (const t of r(this, at))
      t.commit();
    y(this, L, yc).call(this, r(this, Dt).values());
  }
  unselectAll() {
    var t;
    if (!(r(this, Se) && (r(this, Se).commitOrRemove(), r(this, Ot) !== X.NONE)) && !((t = r(this, fn)) != null && t.commitOrRemove()) && this.hasSelection) {
      for (const e of r(this, at))
        e.unselect();
      r(this, at).clear(), y(this, L, ae).call(this, {
        hasSelectedEditor: !1
      });
    }
  }
  translateSelectedEditors(t, e, s = !1) {
    if (s || this.commitOrRemove(), !this.hasSelection)
      return;
    r(this, Mi)[0] += t, r(this, Mi)[1] += e;
    const [i, n] = r(this, Mi), a = [...r(this, at)], o = 1e3;
    r(this, ws) && clearTimeout(r(this, ws)), f(this, ws, setTimeout(() => {
      f(this, ws, null), r(this, Mi)[0] = r(this, Mi)[1] = 0, this.addCommands({
        cmd: () => {
          for (const l of a)
            r(this, Dt).has(l.id) && l.translateInPage(i, n);
        },
        undo: () => {
          for (const l of a)
            r(this, Dt).has(l.id) && l.translateInPage(-i, -n);
        },
        mustExec: !1
      });
    }, o));
    for (const l of a)
      l.translateInPage(t, e);
  }
  setUpDragSession() {
    if (this.hasSelection) {
      this.disableUserSelect(!0), f(this, As, /* @__PURE__ */ new Map());
      for (const t of r(this, at))
        r(this, As).set(t, {
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
    if (!r(this, As))
      return !1;
    this.disableUserSelect(!1);
    const t = r(this, As);
    f(this, As, null);
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
      if (r(this, Dt).has(i.id)) {
        const l = r(this, jt).get(o);
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
    if (r(this, As))
      for (const s of r(this, As).keys())
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
    return r(this, Se) === t;
  }
  getActive() {
    return r(this, Se);
  }
  getMode() {
    return r(this, Ot);
  }
  get imageManager() {
    return J(this, "imageManager", new dc());
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
    (r(this, Dr) || f(this, Dr, /* @__PURE__ */ new Map())).set(t, e);
  }
  removeChangedExistingAnnotation({
    annotationElementId: t
  }) {
    var e;
    (e = r(this, Dr)) == null || e.delete(t);
  }
  renderAnnotationElement(t) {
    var i;
    const e = (i = r(this, Dr)) == null ? void 0 : i.get(t.data.id);
    if (!e)
      return;
    const s = r(this, js).getRawValue(e);
    s && (r(this, Ot) === X.NONE && !s.hasBeenModified || s.renderAnnotationElement(t));
  }
};
Rr = new WeakMap(), Se = new WeakMap(), Dt = new WeakMap(), jt = new WeakMap(), Ir = new WeakMap(), js = new WeakMap(), Dr = new WeakMap(), $e = new WeakMap(), Ci = new WeakMap(), fn = new WeakMap(), Fr = new WeakMap(), gn = new WeakMap(), As = new WeakMap(), es = new WeakMap(), mn = new WeakMap(), po = new WeakMap(), fo = new WeakMap(), Nr = new WeakMap(), go = new WeakMap(), vs = new WeakMap(), xi = new WeakMap(), Or = new WeakMap(), ki = new WeakMap(), _s = new WeakMap(), kh = new WeakMap(), Ti = new WeakMap(), mo = new WeakMap(), Pi = new WeakMap(), bn = new WeakMap(), bo = new WeakMap(), yo = new WeakMap(), Ot = new WeakMap(), at = new WeakMap(), Vs = new WeakMap(), yn = new WeakMap(), Ao = new WeakMap(), vo = new WeakMap(), Mi = new WeakMap(), ws = new WeakMap(), Ws = new WeakMap(), _o = new WeakMap(), Ge = new WeakMap(), L = new WeakSet(), Ul = function({
  anchorNode: t
}) {
  return t.nodeType === Node.TEXT_NODE ? t.parentElement : t;
}, pc = function(t) {
  const {
    currentLayer: e
  } = this;
  if (e.hasTextLayer(t))
    return e;
  for (const s of r(this, jt).values())
    if (s.hasTextLayer(t))
      return s;
  return null;
}, gu = function() {
  const t = document.getSelection();
  if (!t || t.isCollapsed)
    return;
  const s = y(this, L, Ul).call(this, t).closest(".textLayer"), i = this.getSelectionBoxes(s);
  i && (r(this, _s) || f(this, _s, new kf(this)), r(this, _s).show(s, i, this.direction === "ltr"));
}, mu = function() {
  var n, a, o;
  const t = document.getSelection();
  if (!t || t.isCollapsed) {
    r(this, Vs) && ((n = r(this, _s)) == null || n.hide(), f(this, Vs, null), y(this, L, ae).call(this, {
      hasSelectedText: !1
    }));
    return;
  }
  const {
    anchorNode: e
  } = t;
  if (e === r(this, Vs))
    return;
  const i = y(this, L, Ul).call(this, t).closest(".textLayer");
  if (!i) {
    r(this, Vs) && ((a = r(this, _s)) == null || a.hide(), f(this, Vs, null), y(this, L, ae).call(this, {
      hasSelectedText: !1
    }));
    return;
  }
  if ((o = r(this, _s)) == null || o.hide(), f(this, Vs, e), y(this, L, ae).call(this, {
    hasSelectedText: !0
  }), !(r(this, Ot) !== X.HIGHLIGHT && r(this, Ot) !== X.NONE) && (r(this, Ot) === X.HIGHLIGHT && this.showAllEditors("highlight", !0, !0), f(this, ki, this.isShiftKeyDown), !this.isShiftKeyDown)) {
    const l = r(this, Ot) === X.HIGHLIGHT ? y(this, L, pc).call(this, i) : null;
    l == null || l.toggleDrawing();
    const h = new AbortController(), c = this.combinedSignal(h), u = (p) => {
      p.type === "pointerup" && p.button !== 0 || (h.abort(), l == null || l.toggleDrawing(!0), p.type === "pointerup" && y(this, L, jl).call(this, "main_toolbar"));
    };
    window.addEventListener("pointerup", u, {
      signal: c
    }), window.addEventListener("blur", u, {
      signal: c
    });
  }
}, jl = function(t = "") {
  r(this, Ot) === X.HIGHLIGHT ? this.highlightSelection(t) : r(this, po) && y(this, L, gu).call(this);
}, bu = function() {
  document.addEventListener("selectionchange", y(this, L, mu).bind(this), {
    signal: this._signal
  });
}, yu = function() {
  if (r(this, xi))
    return;
  f(this, xi, new AbortController());
  const t = this.combinedSignal(r(this, xi));
  window.addEventListener("focus", this.focus.bind(this), {
    signal: t
  }), window.addEventListener("blur", this.blur.bind(this), {
    signal: t
  });
}, Au = function() {
  var t;
  (t = r(this, xi)) == null || t.abort(), f(this, xi, null);
}, fc = function() {
  if (r(this, Pi))
    return;
  f(this, Pi, new AbortController());
  const t = this.combinedSignal(r(this, Pi));
  window.addEventListener("keydown", this.keydown.bind(this), {
    signal: t
  }), window.addEventListener("keyup", this.keyup.bind(this), {
    signal: t
  });
}, vu = function() {
  var t;
  (t = r(this, Pi)) == null || t.abort(), f(this, Pi, null);
}, gc = function() {
  if (r(this, Ci))
    return;
  f(this, Ci, new AbortController());
  const t = this.combinedSignal(r(this, Ci));
  document.addEventListener("copy", this.copy.bind(this), {
    signal: t
  }), document.addEventListener("cut", this.cut.bind(this), {
    signal: t
  }), document.addEventListener("paste", this.paste.bind(this), {
    signal: t
  });
}, mc = function() {
  var t;
  (t = r(this, Ci)) == null || t.abort(), f(this, Ci, null);
}, _u = function() {
  const t = this._signal;
  document.addEventListener("dragover", this.dragOver.bind(this), {
    signal: t
  }), document.addEventListener("drop", this.drop.bind(this), {
    signal: t
  });
}, ae = function(t) {
  Object.entries(t).some(([s, i]) => r(this, vo)[s] !== i) && (this._eventBus.dispatch("annotationeditorstateschanged", {
    source: this,
    details: Object.assign(r(this, vo), t)
  }), r(this, Ot) === X.HIGHLIGHT && t.hasSelectedEditor === !1 && y(this, L, zs).call(this, [[tt.HIGHLIGHT_FREE, !0]]));
}, zs = function(t) {
  this._eventBus.dispatch("annotationeditorparamschanged", {
    source: this,
    details: t
  });
}, wu = async function() {
  if (!r(this, Ti)) {
    f(this, Ti, !0);
    const t = [];
    for (const e of r(this, jt).values())
      t.push(e.enable());
    await Promise.all(t);
    for (const e of r(this, Dt).values())
      e.enable();
  }
}, Su = function() {
  if (this.unselectAll(), r(this, Ti)) {
    f(this, Ti, !1);
    for (const t of r(this, jt).values())
      t.disable();
    for (const t of r(this, Dt).values())
      t.disable();
  }
}, bc = function(t) {
  const e = r(this, jt).get(t.pageIndex);
  e ? e.addOrRebuild(t) : (this.addEditor(t), this.addToAnnotationStorage(t));
}, Eu = function() {
  let t = null;
  for (t of r(this, at))
    ;
  return t;
}, za = function() {
  if (r(this, Dt).size === 0)
    return !0;
  if (r(this, Dt).size === 1)
    for (const t of r(this, Dt).values())
      return t.isEmpty();
  return !1;
}, yc = function(t) {
  for (const e of r(this, at))
    e.unselect();
  r(this, at).clear();
  for (const e of t)
    e.isEmpty() || (r(this, at).add(e), e.select());
  y(this, L, ae).call(this, {
    hasSelectedEditor: this.hasSelection
  });
}, U(xr, "TRANSLATE_SMALL", 1), U(xr, "TRANSLATE_BIG", 10);
let gr = xr;
var Bt, Ss, ss, Br, Es, Ee, Hr, Cs, ye, Xs, An, xs, Li, us, $a, Vl;
const oe = class oe {
  constructor(t) {
    b(this, us);
    b(this, Bt, null);
    b(this, Ss, !1);
    b(this, ss, null);
    b(this, Br, null);
    b(this, Es, null);
    b(this, Ee, null);
    b(this, Hr, !1);
    b(this, Cs, null);
    b(this, ye, null);
    b(this, Xs, null);
    b(this, An, null);
    b(this, xs, !1);
    f(this, ye, t), f(this, xs, t._uiManager.useNewAltTextFlow), r(oe, Li) || f(oe, Li, Object.freeze({
      added: "pdfjs-editor-new-alt-text-added-button",
      "added-label": "pdfjs-editor-new-alt-text-added-button-label",
      missing: "pdfjs-editor-new-alt-text-missing-button",
      "missing-label": "pdfjs-editor-new-alt-text-missing-button-label",
      review: "pdfjs-editor-new-alt-text-to-review-button",
      "review-label": "pdfjs-editor-new-alt-text-to-review-button-label"
    }));
  }
  static initialize(t) {
    oe._l10n ?? (oe._l10n = t);
  }
  async render() {
    const t = f(this, ss, document.createElement("button"));
    t.className = "altText", t.tabIndex = "0";
    const e = f(this, Br, document.createElement("span"));
    t.append(e), r(this, xs) ? (t.classList.add("new"), t.setAttribute("data-l10n-id", r(oe, Li).missing), e.setAttribute("data-l10n-id", r(oe, Li)["missing-label"])) : (t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button"), e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button-label"));
    const s = r(this, ye)._uiManager._signal;
    t.addEventListener("contextmenu", ps, {
      signal: s
    }), t.addEventListener("pointerdown", (n) => n.stopPropagation(), {
      signal: s
    });
    const i = (n) => {
      n.preventDefault(), r(this, ye)._uiManager.editAltText(r(this, ye)), r(this, xs) && r(this, ye)._reportTelemetry({
        action: "pdfjs.image.alt_text.image_status_label_clicked",
        data: {
          label: r(this, us, $a)
        }
      });
    };
    return t.addEventListener("click", i, {
      capture: !0,
      signal: s
    }), t.addEventListener("keydown", (n) => {
      n.target === t && n.key === "Enter" && (f(this, Hr, !0), i(n));
    }, {
      signal: s
    }), await y(this, us, Vl).call(this), t;
  }
  finish() {
    r(this, ss) && (r(this, ss).focus({
      focusVisible: r(this, Hr)
    }), f(this, Hr, !1));
  }
  isEmpty() {
    return r(this, xs) ? r(this, Bt) === null : !r(this, Bt) && !r(this, Ss);
  }
  hasData() {
    return r(this, xs) ? r(this, Bt) !== null || !!r(this, Xs) : this.isEmpty();
  }
  get guessedText() {
    return r(this, Xs);
  }
  async setGuessedText(t) {
    r(this, Bt) === null && (f(this, Xs, t), f(this, An, await oe._l10n.get("pdfjs-editor-new-alt-text-generated-alt-text-with-disclaimer", {
      generatedAltText: t
    })), y(this, us, Vl).call(this));
  }
  toggleAltTextBadge(t = !1) {
    var e;
    if (!r(this, xs) || r(this, Bt)) {
      (e = r(this, Cs)) == null || e.remove(), f(this, Cs, null);
      return;
    }
    if (!r(this, Cs)) {
      const s = f(this, Cs, document.createElement("div"));
      s.className = "noAltTextBadge", r(this, ye).div.append(s);
    }
    r(this, Cs).classList.toggle("hidden", !t);
  }
  serialize(t) {
    let e = r(this, Bt);
    return !t && r(this, Xs) === e && (e = r(this, An)), {
      altText: e,
      decorative: r(this, Ss),
      guessedText: r(this, Xs),
      textWithDisclaimer: r(this, An)
    };
  }
  get data() {
    return {
      altText: r(this, Bt),
      decorative: r(this, Ss)
    };
  }
  set data({
    altText: t,
    decorative: e,
    guessedText: s,
    textWithDisclaimer: i,
    cancel: n = !1
  }) {
    s && (f(this, Xs, s), f(this, An, i)), !(r(this, Bt) === t && r(this, Ss) === e) && (n || (f(this, Bt, t), f(this, Ss, e)), y(this, us, Vl).call(this));
  }
  toggle(t = !1) {
    r(this, ss) && (!t && r(this, Ee) && (clearTimeout(r(this, Ee)), f(this, Ee, null)), r(this, ss).disabled = !t);
  }
  shown() {
    r(this, ye)._reportTelemetry({
      action: "pdfjs.image.alt_text.image_status_label_displayed",
      data: {
        label: r(this, us, $a)
      }
    });
  }
  destroy() {
    var t, e;
    (t = r(this, ss)) == null || t.remove(), f(this, ss, null), f(this, Br, null), f(this, Es, null), (e = r(this, Cs)) == null || e.remove(), f(this, Cs, null);
  }
};
Bt = new WeakMap(), Ss = new WeakMap(), ss = new WeakMap(), Br = new WeakMap(), Es = new WeakMap(), Ee = new WeakMap(), Hr = new WeakMap(), Cs = new WeakMap(), ye = new WeakMap(), Xs = new WeakMap(), An = new WeakMap(), xs = new WeakMap(), Li = new WeakMap(), us = new WeakSet(), $a = function() {
  return r(this, Bt) && "added" || r(this, Bt) === null && this.guessedText && "review" || "missing";
}, Vl = async function() {
  var i, n, a;
  const t = r(this, ss);
  if (!t)
    return;
  if (r(this, xs)) {
    if (t.classList.toggle("done", !!r(this, Bt)), t.setAttribute("data-l10n-id", r(oe, Li)[r(this, us, $a)]), (i = r(this, Br)) == null || i.setAttribute("data-l10n-id", r(oe, Li)[`${r(this, us, $a)}-label`]), !r(this, Bt)) {
      (n = r(this, Es)) == null || n.remove();
      return;
    }
  } else {
    if (!r(this, Bt) && !r(this, Ss)) {
      t.classList.remove("done"), (a = r(this, Es)) == null || a.remove();
      return;
    }
    t.classList.add("done"), t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-edit-button");
  }
  let e = r(this, Es);
  if (!e) {
    f(this, Es, e = document.createElement("span")), e.className = "tooltip", e.setAttribute("role", "tooltip"), e.id = `alt-text-tooltip-${r(this, ye).id}`;
    const o = 100, l = r(this, ye)._uiManager._signal;
    l.addEventListener("abort", () => {
      clearTimeout(r(this, Ee)), f(this, Ee, null);
    }, {
      once: !0
    }), t.addEventListener("mouseenter", () => {
      f(this, Ee, setTimeout(() => {
        f(this, Ee, null), r(this, Es).classList.add("show"), r(this, ye)._reportTelemetry({
          action: "alt_text_tooltip"
        });
      }, o));
    }, {
      signal: l
    }), t.addEventListener("mouseleave", () => {
      var h;
      r(this, Ee) && (clearTimeout(r(this, Ee)), f(this, Ee, null)), (h = r(this, Es)) == null || h.classList.remove("show");
    }, {
      signal: l
    });
  }
  r(this, Ss) ? e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-decorative-tooltip") : (e.removeAttribute("data-l10n-id"), e.textContent = r(this, Bt)), e.parentNode || t.append(e);
  const s = r(this, ye).getImageForAltText();
  s == null || s.setAttribute("aria-describedby", e.id);
}, b(oe, Li, null), U(oe, "_l10n", null);
let bh = oe;
var wo, vn, So, Eo, Co, xo, ko, zr, qs, _n, Ri, yi, Cu, xu, Ac;
const Ld = class Ld {
  constructor({
    container: t,
    isPinchingDisabled: e = null,
    isPinchingStopped: s = null,
    onPinchStart: i = null,
    onPinching: n = null,
    onPinchEnd: a = null,
    signal: o
  }) {
    b(this, yi);
    b(this, wo);
    b(this, vn, !1);
    b(this, So, null);
    b(this, Eo);
    b(this, Co);
    b(this, xo);
    b(this, ko);
    b(this, zr);
    b(this, qs, null);
    b(this, _n);
    b(this, Ri, null);
    f(this, wo, t), f(this, So, s), f(this, Eo, e), f(this, Co, i), f(this, xo, n), f(this, ko, a), f(this, _n, new AbortController()), f(this, zr, AbortSignal.any([o, r(this, _n).signal])), t.addEventListener("touchstart", y(this, yi, Cu).bind(this), {
      passive: !1,
      signal: r(this, zr)
    });
  }
  get MIN_TOUCH_DISTANCE_TO_PINCH() {
    return J(this, "MIN_TOUCH_DISTANCE_TO_PINCH", 35 / (window.devicePixelRatio || 1));
  }
  destroy() {
    var t;
    (t = r(this, _n)) == null || t.abort(), f(this, _n, null);
  }
};
wo = new WeakMap(), vn = new WeakMap(), So = new WeakMap(), Eo = new WeakMap(), Co = new WeakMap(), xo = new WeakMap(), ko = new WeakMap(), zr = new WeakMap(), qs = new WeakMap(), _n = new WeakMap(), Ri = new WeakMap(), yi = new WeakSet(), Cu = function(t) {
  var i, n, a;
  if ((i = r(this, Eo)) != null && i.call(this) || t.touches.length < 2)
    return;
  if (!r(this, Ri)) {
    f(this, Ri, new AbortController());
    const o = AbortSignal.any([r(this, zr), r(this, Ri).signal]), l = r(this, wo), h = {
      signal: o,
      passive: !1
    };
    l.addEventListener("touchmove", y(this, yi, xu).bind(this), h), l.addEventListener("touchend", y(this, yi, Ac).bind(this), h), l.addEventListener("touchcancel", y(this, yi, Ac).bind(this), h), (n = r(this, Co)) == null || n.call(this);
  }
  if (Oe(t), t.touches.length !== 2 || (a = r(this, So)) != null && a.call(this)) {
    f(this, qs, null);
    return;
  }
  let [e, s] = t.touches;
  e.identifier > s.identifier && ([e, s] = [s, e]), f(this, qs, {
    touch0X: e.screenX,
    touch0Y: e.screenY,
    touch1X: s.screenX,
    touch1Y: s.screenY
  });
}, xu = function(t) {
  var w;
  if (!r(this, qs) || t.touches.length !== 2)
    return;
  let [e, s] = t.touches;
  e.identifier > s.identifier && ([e, s] = [s, e]);
  const {
    screenX: i,
    screenY: n
  } = e, {
    screenX: a,
    screenY: o
  } = s, l = r(this, qs), {
    touch0X: h,
    touch0Y: c,
    touch1X: u,
    touch1Y: p
  } = l, g = u - h, m = p - c, A = a - i, _ = o - n, v = Math.hypot(A, _) || 1, S = Math.hypot(g, m) || 1;
  if (!r(this, vn) && Math.abs(S - v) <= Ld.MIN_TOUCH_DISTANCE_TO_PINCH)
    return;
  if (l.touch0X = i, l.touch0Y = n, l.touch1X = a, l.touch1Y = o, t.preventDefault(), !r(this, vn)) {
    f(this, vn, !0);
    return;
  }
  const E = [(i + a) / 2, (n + o) / 2];
  (w = r(this, xo)) == null || w.call(this, E, S, v);
}, Ac = function(t) {
  var e;
  r(this, Ri).abort(), f(this, Ri, null), (e = r(this, ko)) == null || e.call(this), r(this, qs) && (t.preventDefault(), f(this, qs, null), f(this, vn, !1));
};
let yh = Ld;
var wn, is, pt, $r, Ii, To, Sn, Vt, En, Ys, Di, Po, Cn, Ce, Mo, xn, Ks, ks, Gr, Ur, Ue, kn, Lo, Th, j, vc, Ro, _c, Wl, ku, Tu, wc, Xl, Sc, Pu, Mu, Lu, Ec, Ru, Cc, Iu, Du, Fu, xc, Ga;
const K = class K {
  constructor(t) {
    b(this, j);
    b(this, wn, null);
    b(this, is, null);
    b(this, pt, null);
    b(this, $r, !1);
    b(this, Ii, null);
    b(this, To, "");
    b(this, Sn, !1);
    b(this, Vt, null);
    b(this, En, null);
    b(this, Ys, null);
    b(this, Di, null);
    b(this, Po, "");
    b(this, Cn, !1);
    b(this, Ce, null);
    b(this, Mo, !1);
    b(this, xn, !1);
    b(this, Ks, !1);
    b(this, ks, null);
    b(this, Gr, 0);
    b(this, Ur, 0);
    b(this, Ue, null);
    b(this, kn, null);
    U(this, "_editToolbar", null);
    U(this, "_initialOptions", /* @__PURE__ */ Object.create(null));
    U(this, "_initialData", null);
    U(this, "_isVisible", !0);
    U(this, "_uiManager", null);
    U(this, "_focusEventsAllowed", !0);
    b(this, Lo, !1);
    b(this, Th, K._zIndex++);
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
    const t = K.prototype._resizeWithKeyboard, e = gr.TRANSLATE_SMALL, s = gr.TRANSLATE_BIG;
    return J(this, "_resizerKeyboardManager", new Il([[["ArrowLeft", "mac+ArrowLeft"], t, {
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
    }], [["Escape", "mac+Escape"], K.prototype._stopResizingWithKeyboard]]));
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
    const e = new Mf({
      id: t.parent.getNextId(),
      parent: t.parent,
      uiManager: t._uiManager
    });
    e.annotationElementId = t.annotationElementId, e.deleted = !0, e._uiManager.addToAnnotationStorage(e);
  }
  static initialize(t, e) {
    if (K._l10n ?? (K._l10n = t), K._l10nResizer || (K._l10nResizer = Object.freeze({
      topLeft: "pdfjs-editor-resizer-top-left",
      topMiddle: "pdfjs-editor-resizer-top-middle",
      topRight: "pdfjs-editor-resizer-top-right",
      middleRight: "pdfjs-editor-resizer-middle-right",
      bottomRight: "pdfjs-editor-resizer-bottom-right",
      bottomMiddle: "pdfjs-editor-resizer-bottom-middle",
      bottomLeft: "pdfjs-editor-resizer-bottom-left",
      middleLeft: "pdfjs-editor-resizer-middle-left"
    })), K._borderLineWidth !== -1)
      return;
    const s = getComputedStyle(document.documentElement);
    K._borderLineWidth = parseFloat(s.getPropertyValue("--outline-width")) || 0;
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
    return r(this, Lo);
  }
  set _isDraggable(t) {
    var e;
    f(this, Lo, t), (e = this.div) == null || e.classList.toggle("draggable", t);
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
    this.div.style.zIndex = r(this, Th);
  }
  setParent(t) {
    t !== null ? (this.pageIndex = t.pageIndex, this.pageDimensions = t.pageDimensions) : y(this, j, Ga).call(this), this.parent = t;
  }
  focusin(t) {
    this._focusEventsAllowed && (r(this, Cn) ? f(this, Cn, !1) : this.parent.setSelected(this));
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
    y(this, j, vc).call(this, this.parentDimensions, t, e);
  }
  translateInPage(t, e) {
    r(this, Ce) || f(this, Ce, [this.x, this.y, this.width, this.height]), y(this, j, vc).call(this, this.pageDimensions, t, e), this.div.scrollIntoView({
      block: "nearest"
    });
  }
  drag(t, e) {
    r(this, Ce) || f(this, Ce, [this.x, this.y, this.width, this.height]);
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
    return !!r(this, Ce) && (r(this, Ce)[0] !== this.x || r(this, Ce)[1] !== this.y);
  }
  get _hasBeenResized() {
    return !!r(this, Ce) && (r(this, Ce)[2] !== this.width || r(this, Ce)[3] !== this.height);
  }
  getBaseTranslation() {
    const [t, e] = this.parentDimensions, {
      _borderLineWidth: s
    } = K, i = s / t, n = s / e;
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
    return y(s = K, Ro, _c).call(s, t, e, this.parentRotation);
  }
  pageTranslationToScreen(t, e) {
    var s;
    return y(s = K, Ro, _c).call(s, t, e, 360 - this.parentRotation);
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
    n.width = `${(100 * t / s).toFixed(2)}%`, r(this, Sn) || (n.height = `${(100 * e / i).toFixed(2)}%`);
  }
  fixDims() {
    const {
      style: t
    } = this.div, {
      height: e,
      width: s
    } = t, i = s.endsWith("%"), n = !r(this, Sn) && e.endsWith("%");
    if (i && n)
      return;
    const [a, o] = this.parentDimensions;
    i || (t.width = `${(100 * parseFloat(s) / a).toFixed(2)}%`), !r(this, Sn) && !n && (t.height = `${(100 * parseFloat(e) / o).toFixed(2)}%`);
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
    (t = r(this, pt)) == null || t.finish();
  }
  async addEditToolbar() {
    return this._editToolbar || r(this, xn) ? this._editToolbar : (this._editToolbar = new hc(this), this.div.append(this._editToolbar.render()), r(this, pt) && await this._editToolbar.addAltText(r(this, pt)), this._editToolbar);
  }
  removeEditToolbar() {
    var t;
    this._editToolbar && (this._editToolbar.remove(), this._editToolbar = null, (t = r(this, pt)) == null || t.destroy());
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
    r(this, pt) || (bh.initialize(K._l10n), f(this, pt, new bh(this)), r(this, wn) && (r(this, pt).data = r(this, wn), f(this, wn, null)), await this.addEditToolbar());
  }
  get altTextData() {
    var t;
    return (t = r(this, pt)) == null ? void 0 : t.data;
  }
  set altTextData(t) {
    r(this, pt) && (r(this, pt).data = t);
  }
  get guessedAltText() {
    var t;
    return (t = r(this, pt)) == null ? void 0 : t.guessedText;
  }
  async setGuessedAltText(t) {
    var e;
    await ((e = r(this, pt)) == null ? void 0 : e.setGuessedText(t));
  }
  serializeAltText(t) {
    var e;
    return (e = r(this, pt)) == null ? void 0 : e.serialize(t);
  }
  hasAltText() {
    return !!r(this, pt) && !r(this, pt).isEmpty();
  }
  hasAltTextData() {
    var t;
    return ((t = r(this, pt)) == null ? void 0 : t.hasData()) ?? !1;
  }
  render() {
    var n;
    this.div = document.createElement("div"), this.div.setAttribute("data-editor-rotation", (360 - this.rotation) % 360), this.div.className = this.name, this.div.setAttribute("id", this.id), this.div.tabIndex = r(this, $r) ? -1 : 0, this._isVisible || this.div.classList.add("hidden"), this.setInForeground(), y(this, j, Cc).call(this);
    const [t, e] = this.parentDimensions;
    this.parentRotation % 180 !== 0 && (this.div.style.maxWidth = `${(100 * e / t).toFixed(2)}%`, this.div.style.maxHeight = `${(100 * t / e).toFixed(2)}%`);
    const [s, i] = this.getInitialTranslation();
    return this.translate(s, i), mh(this, this.div, ["pointerdown"]), this.isResizable && this._uiManager._supportsPinchToZoom && (r(this, kn) || f(this, kn, new yh({
      container: this.div,
      isPinchingDisabled: () => !this.isSelected,
      onPinchStart: y(this, j, Pu).bind(this),
      onPinching: y(this, j, Mu).bind(this),
      onPinchEnd: y(this, j, Lu).bind(this),
      signal: this._uiManager._signal
    }))), (n = this._uiManager._editorUndoBar) == null || n.hide(), this.div;
  }
  pointerdown(t) {
    const {
      isMac: e
    } = de.platform;
    if (t.button !== 0 || t.ctrlKey && e) {
      t.preventDefault();
      return;
    }
    if (f(this, Cn, !0), this._isDraggable) {
      y(this, j, Ru).call(this, t);
      return;
    }
    y(this, j, Ec).call(this, t);
  }
  get isSelected() {
    return this._uiManager.isSelected(this);
  }
  _onStartDragging() {
  }
  _onStopDragging() {
  }
  moveInDOM() {
    r(this, ks) && clearTimeout(r(this, ks)), f(this, ks, setTimeout(() => {
      var t;
      f(this, ks, null), (t = this.parent) == null || t.moveEditorInDOM(this);
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
    f(this, xn, !0);
  }
  disableEditMode() {
    f(this, xn, !1);
  }
  isInEditMode() {
    return r(this, xn);
  }
  shouldGetKeyboardEvents() {
    return r(this, Ks);
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
    y(this, j, Cc).call(this);
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
    i.rotation = t.rotation, f(i, wn, t.accessibilityData);
    const [n, a] = i.pageDimensions, [o, l, h, c] = i.getRectInCurrentCoords(t.rect, a);
    return i.x = o / n, i.y = l / a, i.width = h / n, i.height = c / a, i;
  }
  get hasBeenModified() {
    return !!this.annotationElementId && (this.deleted || this.serialize() !== null);
  }
  remove() {
    var t, e;
    if ((t = r(this, Di)) == null || t.abort(), f(this, Di, null), this.isEmpty() || this.commit(), this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this), r(this, ks) && (clearTimeout(r(this, ks)), f(this, ks, null)), y(this, j, Ga).call(this), this.removeEditToolbar(), r(this, Ue)) {
      for (const s of r(this, Ue).values())
        clearTimeout(s);
      f(this, Ue, null);
    }
    this.parent = null, (e = r(this, kn)) == null || e.destroy(), f(this, kn, null);
  }
  get isResizable() {
    return !1;
  }
  makeResizable() {
    this.isResizable && (y(this, j, ku).call(this), r(this, Vt).classList.remove("hidden"), mh(this, this.div, ["keydown"]));
  }
  get toolbarPosition() {
    return null;
  }
  keydown(t) {
    if (!this.isResizable || t.target !== this.div || t.key !== "Enter")
      return;
    this._uiManager.setSelected(this), f(this, Ys, {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height
    });
    const e = r(this, Vt).children;
    if (!r(this, is)) {
      f(this, is, Array.from(e));
      const a = y(this, j, Iu).bind(this), o = y(this, j, Du).bind(this), l = this._uiManager._signal;
      for (const h of r(this, is)) {
        const c = h.getAttribute("data-resizer-name");
        h.setAttribute("role", "spinbutton"), h.addEventListener("keydown", a, {
          signal: l
        }), h.addEventListener("blur", o, {
          signal: l
        }), h.addEventListener("focus", y(this, j, Fu).bind(this, c), {
          signal: l
        }), h.setAttribute("data-l10n-id", K._l10nResizer[c]);
      }
    }
    const s = r(this, is)[0];
    let i = 0;
    for (const a of e) {
      if (a === s)
        break;
      i++;
    }
    const n = (360 - this.rotation + this.parentRotation) % 360 / 90 * (r(this, is).length / 4);
    if (n !== i) {
      if (n < i)
        for (let o = 0; o < i - n; o++)
          r(this, Vt).append(r(this, Vt).firstChild);
      else if (n > i)
        for (let o = 0; o < n - i; o++)
          r(this, Vt).firstChild.before(r(this, Vt).lastChild);
      let a = 0;
      for (const o of e) {
        const h = r(this, is)[a++].getAttribute("data-resizer-name");
        o.setAttribute("data-l10n-id", K._l10nResizer[h]);
      }
    }
    y(this, j, xc).call(this, 0), f(this, Ks, !0), r(this, Vt).firstChild.focus({
      focusVisible: !0
    }), t.preventDefault(), t.stopImmediatePropagation();
  }
  _resizeWithKeyboard(t, e) {
    r(this, Ks) && y(this, j, Sc).call(this, r(this, Po), {
      deltaX: t,
      deltaY: e,
      fromKeyboard: !0
    });
  }
  _stopResizingWithKeyboard() {
    y(this, j, Ga).call(this), this.div.focus();
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
    (e = this._editToolbar) == null || e.show(), (s = r(this, pt)) == null || s.toggleAltTextBadge(!1);
  }
  unselect() {
    var t, e, s, i, n;
    (t = r(this, Vt)) == null || t.classList.add("hidden"), (e = this.div) == null || e.classList.remove("selectedEditor"), (s = this.div) != null && s.contains(document.activeElement) && this._uiManager.currentLayer.div.focus({
      preventScroll: !0
    }), (i = this._editToolbar) == null || i.hide(), (n = r(this, pt)) == null || n.toggleAltTextBadge(!0);
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
    return r(this, Mo);
  }
  set isEditing(t) {
    f(this, Mo, t), this.parent && (t ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null));
  }
  setAspectRatio(t, e) {
    f(this, Sn, !0);
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
      r(this, Ue) || f(this, Ue, /* @__PURE__ */ new Map());
      const {
        action: s
      } = t;
      let i = r(this, Ue).get(s);
      i && clearTimeout(i), i = setTimeout(() => {
        this._reportTelemetry(t), r(this, Ue).delete(s), r(this, Ue).size === 0 && f(this, Ue, null);
      }, K._telemetryTimeout), r(this, Ue).set(s, i);
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
    this.div && (this.div.tabIndex = 0), f(this, $r, !1);
  }
  disable() {
    this.div && (this.div.tabIndex = -1), f(this, $r, !0);
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
wn = new WeakMap(), is = new WeakMap(), pt = new WeakMap(), $r = new WeakMap(), Ii = new WeakMap(), To = new WeakMap(), Sn = new WeakMap(), Vt = new WeakMap(), En = new WeakMap(), Ys = new WeakMap(), Di = new WeakMap(), Po = new WeakMap(), Cn = new WeakMap(), Ce = new WeakMap(), Mo = new WeakMap(), xn = new WeakMap(), Ks = new WeakMap(), ks = new WeakMap(), Gr = new WeakMap(), Ur = new WeakMap(), Ue = new WeakMap(), kn = new WeakMap(), Lo = new WeakMap(), Th = new WeakMap(), j = new WeakSet(), vc = function([t, e], s, i) {
  [s, i] = this.screenToPageTranslation(s, i), this.x += s / t, this.y += i / e, this._onTranslating(this.x, this.y), this.fixAndSetPosition();
}, Ro = new WeakSet(), _c = function(t, e, s) {
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
}, Wl = function(t) {
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
}, ku = function() {
  if (r(this, Vt))
    return;
  f(this, Vt, document.createElement("div")), r(this, Vt).classList.add("resizers");
  const t = this._willKeepAspectRatio ? ["topLeft", "topRight", "bottomRight", "bottomLeft"] : ["topLeft", "topMiddle", "topRight", "middleRight", "bottomRight", "bottomMiddle", "bottomLeft", "middleLeft"], e = this._uiManager._signal;
  for (const s of t) {
    const i = document.createElement("div");
    r(this, Vt).append(i), i.classList.add("resizer", s), i.setAttribute("data-resizer-name", s), i.addEventListener("pointerdown", y(this, j, Tu).bind(this, s), {
      signal: e
    }), i.addEventListener("contextmenu", ps, {
      signal: e
    }), i.tabIndex = -1;
  }
  this.div.prepend(r(this, Vt));
}, Tu = function(t, e) {
  var c;
  e.preventDefault();
  const {
    isMac: s
  } = de.platform;
  if (e.button !== 0 || e.ctrlKey && s)
    return;
  (c = r(this, pt)) == null || c.toggle(!1);
  const i = this._isDraggable;
  this._isDraggable = !1, f(this, En, [e.screenX, e.screenY]);
  const n = new AbortController(), a = this._uiManager.combinedSignal(n);
  this.parent.togglePointerEvents(!1), window.addEventListener("pointermove", y(this, j, Sc).bind(this, t), {
    passive: !0,
    capture: !0,
    signal: a
  }), window.addEventListener("touchmove", Oe, {
    passive: !1,
    signal: a
  }), window.addEventListener("contextmenu", ps, {
    signal: a
  }), f(this, Ys, {
    savedX: this.x,
    savedY: this.y,
    savedWidth: this.width,
    savedHeight: this.height
  });
  const o = this.parent.div.style.cursor, l = this.div.style.cursor;
  this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(e.target).cursor;
  const h = () => {
    var u;
    n.abort(), this.parent.togglePointerEvents(!0), (u = r(this, pt)) == null || u.toggle(!0), this._isDraggable = i, this.parent.div.style.cursor = o, this.div.style.cursor = l, y(this, j, Xl).call(this);
  };
  window.addEventListener("pointerup", h, {
    signal: a
  }), window.addEventListener("blur", h, {
    signal: a
  });
}, wc = function(t, e, s, i) {
  this.width = s, this.height = i, this.x = t, this.y = e;
  const [n, a] = this.parentDimensions;
  this.setDims(n * s, a * i), this.fixAndSetPosition(), this._onResized();
}, Xl = function() {
  if (!r(this, Ys))
    return;
  const {
    savedX: t,
    savedY: e,
    savedWidth: s,
    savedHeight: i
  } = r(this, Ys);
  f(this, Ys, null);
  const n = this.x, a = this.y, o = this.width, l = this.height;
  n === t && a === e && o === s && l === i || this.addCommands({
    cmd: y(this, j, wc).bind(this, n, a, o, l),
    undo: y(this, j, wc).bind(this, t, e, s, i),
    mustExec: !0
  });
}, Sc = function(t, e) {
  const [s, i] = this.parentDimensions, n = this.x, a = this.y, o = this.width, l = this.height, h = K.MIN_SIZE / s, c = K.MIN_SIZE / i, u = y(this, j, Wl).call(this, this.rotation), p = (R, H) => [u[0] * R + u[2] * H, u[1] * R + u[3] * H], g = y(this, j, Wl).call(this, 360 - this.rotation), m = (R, H) => [g[0] * R + g[2] * H, g[1] * R + g[3] * H];
  let A, _, v = !1, S = !1;
  switch (t) {
    case "topLeft":
      v = !0, A = (R, H) => [0, 0], _ = (R, H) => [R, H];
      break;
    case "topMiddle":
      A = (R, H) => [R / 2, 0], _ = (R, H) => [R / 2, H];
      break;
    case "topRight":
      v = !0, A = (R, H) => [R, 0], _ = (R, H) => [0, H];
      break;
    case "middleRight":
      S = !0, A = (R, H) => [R, H / 2], _ = (R, H) => [0, H / 2];
      break;
    case "bottomRight":
      v = !0, A = (R, H) => [R, H], _ = (R, H) => [0, 0];
      break;
    case "bottomMiddle":
      A = (R, H) => [R / 2, H], _ = (R, H) => [R / 2, 0];
      break;
    case "bottomLeft":
      v = !0, A = (R, H) => [0, H], _ = (R, H) => [R, 0];
      break;
    case "middleLeft":
      S = !0, A = (R, H) => [0, H / 2], _ = (R, H) => [R, H / 2];
      break;
  }
  const E = A(o, l), w = _(o, l);
  let C = p(...w);
  const k = K._round(n + C[0]), x = K._round(a + C[1]);
  let T = 1, P = 1, z, D;
  if (e.fromKeyboard)
    ({
      deltaX: z,
      deltaY: D
    } = e);
  else {
    const {
      screenX: R,
      screenY: H
    } = e, [St, He] = r(this, En);
    [z, D] = this.screenToPageTranslation(R - St, H - He), r(this, En)[0] = R, r(this, En)[1] = H;
  }
  if ([z, D] = m(z / s, D / i), v) {
    const R = Math.hypot(o, l);
    T = P = Math.max(Math.min(Math.hypot(w[0] - E[0] - z, w[1] - E[1] - D) / R, 1 / o, 1 / l), h / o, c / l);
  } else S ? T = Math.max(h, Math.min(1, Math.abs(w[0] - E[0] - z))) / o : P = Math.max(c, Math.min(1, Math.abs(w[1] - E[1] - D))) / l;
  const et = K._round(o * T), Q = K._round(l * P);
  C = p(..._(et, Q));
  const Y = k - C[0], ut = x - C[1];
  r(this, Ce) || f(this, Ce, [this.x, this.y, this.width, this.height]), this.width = et, this.height = Q, this.x = Y, this.y = ut, this.setDims(s * et, i * Q), this.fixAndSetPosition(), this._onResizing();
}, Pu = function() {
  var t;
  f(this, Ys, {
    savedX: this.x,
    savedY: this.y,
    savedWidth: this.width,
    savedHeight: this.height
  }), (t = r(this, pt)) == null || t.toggle(!1), this.parent.togglePointerEvents(!1);
}, Mu = function(t, e, s) {
  let n = 0.7 * (s / e) + 1 - 0.7;
  if (n === 1)
    return;
  const a = y(this, j, Wl).call(this, this.rotation), o = (k, x) => [a[0] * k + a[2] * x, a[1] * k + a[3] * x], [l, h] = this.parentDimensions, c = this.x, u = this.y, p = this.width, g = this.height, m = K.MIN_SIZE / l, A = K.MIN_SIZE / h;
  n = Math.max(Math.min(n, 1 / p, 1 / g), m / p, A / g);
  const _ = K._round(p * n), v = K._round(g * n);
  if (_ === p && v === g)
    return;
  r(this, Ce) || f(this, Ce, [c, u, p, g]);
  const S = o(p / 2, g / 2), E = K._round(c + S[0]), w = K._round(u + S[1]), C = o(_ / 2, v / 2);
  this.x = E - C[0], this.y = w - C[1], this.width = _, this.height = v, this.setDims(l * _, h * v), this.fixAndSetPosition(), this._onResizing();
}, Lu = function() {
  var t;
  (t = r(this, pt)) == null || t.toggle(!0), this.parent.togglePointerEvents(!0), y(this, j, Xl).call(this);
}, Ec = function(t) {
  const {
    isMac: e
  } = de.platform;
  t.ctrlKey && !e || t.shiftKey || t.metaKey && e ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
}, Ru = function(t) {
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
    i.abort(), f(this, Ii, null), f(this, Cn, !1), this._uiManager.endDragSession() || y(this, j, Ec).call(this, h), s && this._onStopDragging();
  };
  e && (f(this, Gr, t.clientX), f(this, Ur, t.clientY), f(this, Ii, t.pointerId), f(this, To, t.pointerType), window.addEventListener("pointermove", (h) => {
    s || (s = !0, this._onStartDragging());
    const {
      clientX: c,
      clientY: u,
      pointerId: p
    } = h;
    if (p !== r(this, Ii)) {
      Oe(h);
      return;
    }
    const [g, m] = this.screenToPageTranslation(c - r(this, Gr), u - r(this, Ur));
    f(this, Gr, c), f(this, Ur, u), this._uiManager.dragSelectedEditors(g, m);
  }, a), window.addEventListener("touchmove", Oe, a), window.addEventListener("pointerdown", (h) => {
    h.pointerType === r(this, To) && (r(this, kn) || h.isPrimary) && o(h), Oe(h);
  }, a));
  const l = (h) => {
    if (!r(this, Ii) || r(this, Ii) === h.pointerId) {
      o(h);
      return;
    }
    Oe(h);
  };
  window.addEventListener("pointerup", l, {
    signal: n
  }), window.addEventListener("blur", l, {
    signal: n
  });
}, Cc = function() {
  if (r(this, Di) || !this.div)
    return;
  f(this, Di, new AbortController());
  const t = this._uiManager.combinedSignal(r(this, Di));
  this.div.addEventListener("focusin", this.focusin.bind(this), {
    signal: t
  }), this.div.addEventListener("focusout", this.focusout.bind(this), {
    signal: t
  });
}, Iu = function(t) {
  K._resizerKeyboardManager.exec(this, t);
}, Du = function(t) {
  var e;
  r(this, Ks) && ((e = t.relatedTarget) == null ? void 0 : e.parentNode) !== r(this, Vt) && y(this, j, Ga).call(this);
}, Fu = function(t) {
  f(this, Po, r(this, Ks) ? t : "");
}, xc = function(t) {
  if (r(this, is))
    for (const e of r(this, is))
      e.tabIndex = t;
}, Ga = function() {
  f(this, Ks, !1), y(this, j, xc).call(this, -1), y(this, j, Xl).call(this);
}, b(K, Ro), U(K, "_l10n", null), U(K, "_l10nResizer", null), U(K, "_borderLineWidth", -1), U(K, "_colorManager", new uc()), U(K, "_zIndex", 1), U(K, "_telemetryTimeout", 1e3);
let vt = K;
class Mf extends vt {
  constructor(t) {
    super(t), this.annotationElementId = t.annotationElementId, this.deleted = !0;
  }
  serialize() {
    return this.serializeDeleted();
  }
}
const Gd = 3285377520, ze = 4294901760, ms = 65535;
class Nu {
  constructor(t) {
    this.h1 = t ? t & 4294967295 : Gd, this.h2 = t ? t & 4294967295 : Gd;
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
    const u = 3432918353, p = 461845907, g = u & ms, m = p & ms;
    for (let A = 0; A < i; A++)
      A & 1 ? (o = a[A], o = o * u & ze | o * g & ms, o = o << 15 | o >>> 17, o = o * p & ze | o * m & ms, h ^= o, h = h << 13 | h >>> 19, h = h * 5 + 3864292196) : (l = a[A], l = l * u & ze | l * g & ms, l = l << 15 | l >>> 17, l = l * p & ze | l * m & ms, c ^= l, c = c << 13 | c >>> 19, c = c * 5 + 3864292196);
    switch (o = 0, n) {
      case 3:
        o ^= e[i * 4 + 2] << 16;
      case 2:
        o ^= e[i * 4 + 1] << 8;
      case 1:
        o ^= e[i * 4], o = o * u & ze | o * g & ms, o = o << 15 | o >>> 17, o = o * p & ze | o * m & ms, i & 1 ? h ^= o : c ^= o;
    }
    this.h1 = h, this.h2 = c;
  }
  hexdigest() {
    let t = this.h1, e = this.h2;
    return t ^= e >>> 1, t = t * 3981806797 & ze | t * 36045 & ms, e = e * 4283543511 & ze | ((e << 16 | t >>> 16) * 2950163797 & ze) >>> 16, t ^= e >>> 1, t = t * 444984403 & ze | t * 60499 & ms, e = e * 3301882366 & ze | ((e << 16 | t >>> 16) * 3120437893 & ze) >>> 16, t ^= e >>> 1, (t >>> 0).toString(16).padStart(8, "0") + (e >>> 0).toString(16).padStart(8, "0");
  }
}
const kc = Object.freeze({
  map: null,
  hash: "",
  transfer: void 0
});
var Tn, Pn, Ht, Ph, Ou;
class Cd {
  constructor() {
    b(this, Ph);
    b(this, Tn, !1);
    b(this, Pn, null);
    b(this, Ht, /* @__PURE__ */ new Map());
    this.onSetModified = null, this.onResetModified = null, this.onAnnotationEditor = null;
  }
  getValue(t, e) {
    const s = r(this, Ht).get(t);
    return s === void 0 ? e : Object.assign(e, s);
  }
  getRawValue(t) {
    return r(this, Ht).get(t);
  }
  remove(t) {
    if (r(this, Ht).delete(t), r(this, Ht).size === 0 && this.resetModified(), typeof this.onAnnotationEditor == "function") {
      for (const e of r(this, Ht).values())
        if (e instanceof vt)
          return;
      this.onAnnotationEditor(null);
    }
  }
  setValue(t, e) {
    const s = r(this, Ht).get(t);
    let i = !1;
    if (s !== void 0)
      for (const [n, a] of Object.entries(e))
        s[n] !== a && (i = !0, s[n] = a);
    else
      i = !0, r(this, Ht).set(t, e);
    i && y(this, Ph, Ou).call(this), e instanceof vt && typeof this.onAnnotationEditor == "function" && this.onAnnotationEditor(e.constructor._type);
  }
  has(t) {
    return r(this, Ht).has(t);
  }
  getAll() {
    return r(this, Ht).size > 0 ? Ad(r(this, Ht)) : null;
  }
  setAll(t) {
    for (const [e, s] of Object.entries(t))
      this.setValue(e, s);
  }
  get size() {
    return r(this, Ht).size;
  }
  resetModified() {
    r(this, Tn) && (f(this, Tn, !1), typeof this.onResetModified == "function" && this.onResetModified());
  }
  get print() {
    return new Bu(this);
  }
  get serializable() {
    if (r(this, Ht).size === 0)
      return kc;
    const t = /* @__PURE__ */ new Map(), e = new Nu(), s = [], i = /* @__PURE__ */ Object.create(null);
    let n = !1;
    for (const [a, o] of r(this, Ht)) {
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
    } : kc;
  }
  get editorStats() {
    let t = null;
    const e = /* @__PURE__ */ new Map();
    for (const s of r(this, Ht).values()) {
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
    f(this, Pn, null);
  }
  get modifiedIds() {
    if (r(this, Pn))
      return r(this, Pn);
    const t = [];
    for (const e of r(this, Ht).values())
      !(e instanceof vt) || !e.annotationElementId || !e.serialize() || t.push(e.annotationElementId);
    return f(this, Pn, {
      ids: new Set(t),
      hash: t.join(",")
    });
  }
}
Tn = new WeakMap(), Pn = new WeakMap(), Ht = new WeakMap(), Ph = new WeakSet(), Ou = function() {
  r(this, Tn) || (f(this, Tn, !0), typeof this.onSetModified == "function" && this.onSetModified());
};
var Io;
class Bu extends Cd {
  constructor(e) {
    super();
    b(this, Io);
    const {
      map: s,
      hash: i,
      transfer: n
    } = e.serializable, a = structuredClone(s, n ? {
      transfer: n
    } : null);
    f(this, Io, {
      map: a,
      hash: i,
      transfer: n
    });
  }
  get print() {
    ct("Should not call PrintAnnotationStorage.print");
  }
  get serializable() {
    return r(this, Io);
  }
  get modifiedIds() {
    return J(this, "modifiedIds", {
      ids: /* @__PURE__ */ new Set(),
      hash: ""
    });
  }
}
Io = new WeakMap();
var jr;
class Lf {
  constructor({
    ownerDocument: t = globalThis.document,
    styleElement: e = null
  }) {
    b(this, jr, /* @__PURE__ */ new Set());
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
    this.nativeFontFaces.clear(), r(this, jr).clear(), this.styleElement && (this.styleElement.remove(), this.styleElement = null);
  }
  async loadSystemFont({
    systemFontInfo: t,
    _inspectFont: e
  }) {
    if (!(!t || r(this, jr).has(t.loadedName))) {
      if (Pt(!this.disableFontFace, "loadSystemFont shouldn't be called when `disableFontFace` is set."), this.isFontLoadingAPISupported) {
        const {
          loadedName: s,
          src: i,
          style: n
        } = t, a = new FontFace(s, i, n);
        this.addNativeFontFace(a);
        try {
          await a.load(), r(this, jr).add(s), e == null || e(t);
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
    return J(this, "isFontLoadingAPISupported", t);
  }
  get isSyncFontLoadingSupported() {
    let t = !1;
    return (ne || typeof navigator < "u" && typeof (navigator == null ? void 0 : navigator.userAgent) == "string" && /Mozilla\/5.0.*?rv:\d+.*? Gecko/.test(navigator.userAgent)) && (t = !0), J(this, "isSyncFontLoadingSupported", t);
  }
  _queueLoadingCallback(t) {
    function e() {
      for (Pt(!i.done, "completeRequest() cannot be called twice."), i.done = !0; s.length > 0 && s[0].done; ) {
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
    function s(w, C) {
      return w.charCodeAt(C) << 24 | w.charCodeAt(C + 1) << 16 | w.charCodeAt(C + 2) << 8 | w.charCodeAt(C + 3) & 255;
    }
    function i(w, C, k, x) {
      const T = w.substring(0, C), P = w.substring(C + k);
      return T + x + P;
    }
    let n, a;
    const o = this._document.createElement("canvas");
    o.width = 1, o.height = 1;
    const l = o.getContext("2d");
    let h = 0;
    function c(w, C) {
      if (++h > 30) {
        q("Load test font never loaded."), C();
        return;
      }
      if (l.font = "30px " + w, l.fillText(".", 0, 20), l.getImageData(0, 0, 1, 1).data[3] > 0) {
        C();
        return;
      }
      setTimeout(c.bind(null, w, C));
    }
    const u = `lt${Date.now()}${this.loadTestFontId++}`;
    let p = this._loadTestFont;
    p = i(p, 976, u.length, u);
    const m = 16, A = 1482184792;
    let _ = s(p, m);
    for (n = 0, a = u.length - 3; n < a; n += 4)
      _ = _ - A + s(u, n) | 0;
    n < u.length && (_ = _ - A + s(u + "XXX", n) | 0), p = i(p, m, 4, mf(_));
    const v = `url(data:font/opentype;base64,${btoa(p)});`, S = `@font-face {font-family:"${u}";src:${v}}`;
    this.insertRule(S);
    const E = this._document.createElement("div");
    E.style.visibility = "hidden", E.style.width = E.style.height = "10px", E.style.position = "absolute", E.style.top = E.style.left = "0px";
    for (const w of [t.loadedName, u]) {
      const C = this._document.createElement("span");
      C.textContent = "Hi", C.style.fontFamily = w, E.append(C);
    }
    this._document.body.append(E), c(u, () => {
      E.remove(), e.complete();
    });
  }
}
jr = new WeakMap();
class Rf {
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
    const t = `url(data:${this.mimetype};base64,${wf(this.data)});`;
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
const Fl = {
  DATA: 1,
  ERROR: 2
}, Tt = {
  CANCEL: 1,
  CANCEL_COMPLETE: 2,
  CLOSE: 3,
  ENQUEUE: 4,
  ERROR: 5,
  PULL: 6,
  PULL_COMPLETE: 7,
  START_COMPLETE: 8
};
function Ud() {
}
function me(d) {
  if (d instanceof tn || d instanceof ac || d instanceof io || d instanceof Hd || d instanceof gh || d instanceof Zh)
    return d;
  switch (d instanceof Error || typeof d == "object" && d !== null || ct('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), d.name) {
    case "AbortException":
      return new tn(d.message);
    case "InvalidPDFException":
      return new ac(d.message);
    case "MissingPDFException":
      return new io(d.message);
    case "PasswordException":
      return new Hd(d.message, d.code);
    case "UnexpectedResponseException":
      return new gh(d.message, d.status);
    case "UnknownErrorException":
      return new Zh(d.message, d.details);
  }
  return new Zh(d.message, d.toString());
}
var Vr, Ke, Hu, zu, $u, ql;
class Ua {
  constructor(t, e, s) {
    b(this, Ke);
    b(this, Vr, new AbortController());
    this.sourceName = t, this.targetName = e, this.comObj = s, this.callbackId = 1, this.streamId = 1, this.streamSinks = /* @__PURE__ */ Object.create(null), this.streamControllers = /* @__PURE__ */ Object.create(null), this.callbackCapabilities = /* @__PURE__ */ Object.create(null), this.actionHandler = /* @__PURE__ */ Object.create(null), s.addEventListener("message", y(this, Ke, Hu).bind(this), {
      signal: r(this, Vr).signal
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
          stream: Tt.PULL,
          streamId: n,
          desiredSize: h.desiredSize
        }), c.promise;
      },
      cancel: (h) => {
        Pt(h instanceof Error, "cancel must have a valid reason");
        const c = Promise.withResolvers();
        return this.streamControllers[n].cancelCall = c, this.streamControllers[n].isClosed = !0, l.postMessage({
          sourceName: a,
          targetName: o,
          stream: Tt.CANCEL,
          streamId: n,
          reason: me(h)
        }), c.promise;
      }
    }, s);
  }
  destroy() {
    var t;
    (t = r(this, Vr)) == null || t.abort(), f(this, Vr, null);
  }
}
Vr = new WeakMap(), Ke = new WeakSet(), Hu = function({
  data: t
}) {
  if (t.targetName !== this.sourceName)
    return;
  if (t.stream) {
    y(this, Ke, $u).call(this, t);
    return;
  }
  if (t.callback) {
    const s = t.callbackId, i = this.callbackCapabilities[s];
    if (!i)
      throw new Error(`Cannot resolve callback ${s}`);
    if (delete this.callbackCapabilities[s], t.callback === Fl.DATA)
      i.resolve(t.data);
    else if (t.callback === Fl.ERROR)
      i.reject(me(t.reason));
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
        callback: Fl.DATA,
        callbackId: t.callbackId,
        data: a
      });
    }, function(a) {
      n.postMessage({
        sourceName: s,
        targetName: i,
        callback: Fl.ERROR,
        callbackId: t.callbackId,
        reason: me(a)
      });
    });
    return;
  }
  if (t.streamId) {
    y(this, Ke, zu).call(this, t);
    return;
  }
  e(t.data);
}, zu = function(t) {
  const e = t.streamId, s = this.sourceName, i = t.sourceName, n = this.comObj, a = this, o = this.actionHandler[t.action], l = {
    enqueue(h, c = 1, u) {
      if (this.isCancelled)
        return;
      const p = this.desiredSize;
      this.desiredSize -= c, p > 0 && this.desiredSize <= 0 && (this.sinkCapability = Promise.withResolvers(), this.ready = this.sinkCapability.promise), n.postMessage({
        sourceName: s,
        targetName: i,
        stream: Tt.ENQUEUE,
        streamId: e,
        chunk: h
      }, u);
    },
    close() {
      this.isCancelled || (this.isCancelled = !0, n.postMessage({
        sourceName: s,
        targetName: i,
        stream: Tt.CLOSE,
        streamId: e
      }), delete a.streamSinks[e]);
    },
    error(h) {
      Pt(h instanceof Error, "error must have a valid reason"), !this.isCancelled && (this.isCancelled = !0, n.postMessage({
        sourceName: s,
        targetName: i,
        stream: Tt.ERROR,
        streamId: e,
        reason: me(h)
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
      stream: Tt.START_COMPLETE,
      streamId: e,
      success: !0
    });
  }, function(h) {
    n.postMessage({
      sourceName: s,
      targetName: i,
      stream: Tt.START_COMPLETE,
      streamId: e,
      reason: me(h)
    });
  });
}, $u = function(t) {
  const e = t.streamId, s = this.sourceName, i = t.sourceName, n = this.comObj, a = this.streamControllers[e], o = this.streamSinks[e];
  switch (t.stream) {
    case Tt.START_COMPLETE:
      t.success ? a.startCall.resolve() : a.startCall.reject(me(t.reason));
      break;
    case Tt.PULL_COMPLETE:
      t.success ? a.pullCall.resolve() : a.pullCall.reject(me(t.reason));
      break;
    case Tt.PULL:
      if (!o) {
        n.postMessage({
          sourceName: s,
          targetName: i,
          stream: Tt.PULL_COMPLETE,
          streamId: e,
          success: !0
        });
        break;
      }
      o.desiredSize <= 0 && t.desiredSize > 0 && o.sinkCapability.resolve(), o.desiredSize = t.desiredSize, Promise.try(o.onPull || Ud).then(function() {
        n.postMessage({
          sourceName: s,
          targetName: i,
          stream: Tt.PULL_COMPLETE,
          streamId: e,
          success: !0
        });
      }, function(h) {
        n.postMessage({
          sourceName: s,
          targetName: i,
          stream: Tt.PULL_COMPLETE,
          streamId: e,
          reason: me(h)
        });
      });
      break;
    case Tt.ENQUEUE:
      if (Pt(a, "enqueue should have stream controller"), a.isClosed)
        break;
      a.controller.enqueue(t.chunk);
      break;
    case Tt.CLOSE:
      if (Pt(a, "close should have stream controller"), a.isClosed)
        break;
      a.isClosed = !0, a.controller.close(), y(this, Ke, ql).call(this, a, e);
      break;
    case Tt.ERROR:
      Pt(a, "error should have stream controller"), a.controller.error(me(t.reason)), y(this, Ke, ql).call(this, a, e);
      break;
    case Tt.CANCEL_COMPLETE:
      t.success ? a.cancelCall.resolve() : a.cancelCall.reject(me(t.reason)), y(this, Ke, ql).call(this, a, e);
      break;
    case Tt.CANCEL:
      if (!o)
        break;
      const l = me(t.reason);
      Promise.try(o.onCancel || Ud, l).then(function() {
        n.postMessage({
          sourceName: s,
          targetName: i,
          stream: Tt.CANCEL_COMPLETE,
          streamId: e,
          success: !0
        });
      }, function(h) {
        n.postMessage({
          sourceName: s,
          targetName: i,
          stream: Tt.CANCEL_COMPLETE,
          streamId: e,
          reason: me(h)
        });
      }), o.sinkCapability.reject(l), o.isCancelled = !0, delete this.streamSinks[e];
      break;
    default:
      throw new Error("Unexpected stream case");
  }
}, ql = async function(t, e) {
  var s, i, n;
  await Promise.allSettled([(s = t.startCall) == null ? void 0 : s.promise, (i = t.pullCall) == null ? void 0 : i.promise, (n = t.cancelCall) == null ? void 0 : n.promise]), delete this.streamControllers[e];
};
var Do;
class Gu {
  constructor({
    enableHWA: t = !1
  }) {
    b(this, Do, !1);
    f(this, Do, t);
  }
  create(t, e) {
    if (t <= 0 || e <= 0)
      throw new Error("Invalid canvas size");
    const s = this._createCanvas(t, e);
    return {
      canvas: s,
      context: s.getContext("2d", {
        willReadFrequently: !r(this, Do)
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
Do = new WeakMap();
class If extends Gu {
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
class Uu {
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
class ju extends Uu {
  async _fetch(t) {
    const e = await Wh(t, this.isCompressed ? "arraybuffer" : "text");
    return e instanceof ArrayBuffer ? new Uint8Array(e) : Vh(e);
  }
}
class Vu {
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
var Mn, Wr, Qs, Zs, te, Ln, Rn, F, Qt, ja, Ar, Yl, vr, Wu, Tc, _r, Va, Wa, Pc, Xa;
class Df extends Vu {
  constructor({
    docId: e,
    ownerDocument: s = globalThis.document
  }) {
    super();
    b(this, F);
    b(this, Mn);
    b(this, Wr);
    b(this, Qs);
    b(this, Zs);
    b(this, te);
    b(this, Ln);
    b(this, Rn, 0);
    f(this, Zs, e), f(this, te, s);
  }
  addFilter(e) {
    if (!e)
      return "none";
    let s = r(this, F, Qt).get(e);
    if (s)
      return s;
    const [i, n, a] = y(this, F, Yl).call(this, e), o = e.length === 1 ? i : `${i}${n}${a}`;
    if (s = r(this, F, Qt).get(o), s)
      return r(this, F, Qt).set(e, s), s;
    const l = `g_${r(this, Zs)}_transfer_map_${re(this, Rn)._++}`, h = y(this, F, vr).call(this, l);
    r(this, F, Qt).set(e, h), r(this, F, Qt).set(o, h);
    const c = y(this, F, _r).call(this, l);
    return y(this, F, Wa).call(this, i, n, a, c), h;
  }
  addHCMFilter(e, s) {
    var m;
    const i = `${e}-${s}`, n = "base";
    let a = r(this, F, ja).get(n);
    if ((a == null ? void 0 : a.key) === i || (a ? ((m = a.filter) == null || m.remove(), a.key = i, a.url = "none", a.filter = null) : (a = {
      key: i,
      url: "none",
      filter: null
    }, r(this, F, ja).set(n, a)), !e || !s))
      return a.url;
    const o = y(this, F, Xa).call(this, e);
    e = G.makeHexColor(...o);
    const l = y(this, F, Xa).call(this, s);
    if (s = G.makeHexColor(...l), r(this, F, Ar).style.color = "", e === "#000000" && s === "#ffffff" || e === s)
      return a.url;
    const h = new Array(256);
    for (let A = 0; A <= 255; A++) {
      const _ = A / 255;
      h[A] = _ <= 0.03928 ? _ / 12.92 : ((_ + 0.055) / 1.055) ** 2.4;
    }
    const c = h.join(","), u = `g_${r(this, Zs)}_hcm_filter`, p = a.filter = y(this, F, _r).call(this, u);
    y(this, F, Wa).call(this, c, c, c, p), y(this, F, Tc).call(this, p);
    const g = (A, _) => {
      const v = o[A] / 255, S = l[A] / 255, E = new Array(_ + 1);
      for (let w = 0; w <= _; w++)
        E[w] = v + w / _ * (S - v);
      return E.join(",");
    };
    return y(this, F, Wa).call(this, g(0, 5), g(1, 5), g(2, 5), p), a.url = y(this, F, vr).call(this, u), a.url;
  }
  addAlphaFilter(e) {
    let s = r(this, F, Qt).get(e);
    if (s)
      return s;
    const [i] = y(this, F, Yl).call(this, [e]), n = `alpha_${i}`;
    if (s = r(this, F, Qt).get(n), s)
      return r(this, F, Qt).set(e, s), s;
    const a = `g_${r(this, Zs)}_alpha_map_${re(this, Rn)._++}`, o = y(this, F, vr).call(this, a);
    r(this, F, Qt).set(e, o), r(this, F, Qt).set(n, o);
    const l = y(this, F, _r).call(this, a);
    return y(this, F, Pc).call(this, i, l), o;
  }
  addLuminosityFilter(e) {
    let s = r(this, F, Qt).get(e || "luminosity");
    if (s)
      return s;
    let i, n;
    if (e ? ([i] = y(this, F, Yl).call(this, [e]), n = `luminosity_${i}`) : n = "luminosity", s = r(this, F, Qt).get(n), s)
      return r(this, F, Qt).set(e, s), s;
    const a = `g_${r(this, Zs)}_luminosity_map_${re(this, Rn)._++}`, o = y(this, F, vr).call(this, a);
    r(this, F, Qt).set(e, o), r(this, F, Qt).set(n, o);
    const l = y(this, F, _r).call(this, a);
    return y(this, F, Wu).call(this, l), e && y(this, F, Pc).call(this, i, l), o;
  }
  addHighlightHCMFilter(e, s, i, n, a) {
    var S;
    const o = `${s}-${i}-${n}-${a}`;
    let l = r(this, F, ja).get(e);
    if ((l == null ? void 0 : l.key) === o || (l ? ((S = l.filter) == null || S.remove(), l.key = o, l.url = "none", l.filter = null) : (l = {
      key: o,
      url: "none",
      filter: null
    }, r(this, F, ja).set(e, l)), !s || !i))
      return l.url;
    const [h, c] = [s, i].map(y(this, F, Xa).bind(this));
    let u = Math.round(0.2126 * h[0] + 0.7152 * h[1] + 0.0722 * h[2]), p = Math.round(0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]), [g, m] = [n, a].map(y(this, F, Xa).bind(this));
    p < u && ([u, p, g, m] = [p, u, m, g]), r(this, F, Ar).style.color = "";
    const A = (E, w, C) => {
      const k = new Array(256), x = (p - u) / C, T = E / 255, P = (w - E) / (255 * C);
      let z = 0;
      for (let D = 0; D <= C; D++) {
        const et = Math.round(u + D * x), Q = T + D * P;
        for (let Y = z; Y <= et; Y++)
          k[Y] = Q;
        z = et + 1;
      }
      for (let D = z; D < 256; D++)
        k[D] = k[z - 1];
      return k.join(",");
    }, _ = `g_${r(this, Zs)}_hcm_${e}_filter`, v = l.filter = y(this, F, _r).call(this, _);
    return y(this, F, Tc).call(this, v), y(this, F, Wa).call(this, A(g[0], m[0], 5), A(g[1], m[1], 5), A(g[2], m[2], 5), v), l.url = y(this, F, vr).call(this, _), l.url;
  }
  destroy(e = !1) {
    var s, i, n, a;
    e && ((s = r(this, Ln)) != null && s.size) || ((i = r(this, Qs)) == null || i.parentNode.parentNode.remove(), f(this, Qs, null), (n = r(this, Wr)) == null || n.clear(), f(this, Wr, null), (a = r(this, Ln)) == null || a.clear(), f(this, Ln, null), f(this, Rn, 0));
  }
}
Mn = new WeakMap(), Wr = new WeakMap(), Qs = new WeakMap(), Zs = new WeakMap(), te = new WeakMap(), Ln = new WeakMap(), Rn = new WeakMap(), F = new WeakSet(), Qt = function() {
  return r(this, Wr) || f(this, Wr, /* @__PURE__ */ new Map());
}, ja = function() {
  return r(this, Ln) || f(this, Ln, /* @__PURE__ */ new Map());
}, Ar = function() {
  if (!r(this, Qs)) {
    const e = r(this, te).createElement("div"), {
      style: s
    } = e;
    s.visibility = "hidden", s.contain = "strict", s.width = s.height = 0, s.position = "absolute", s.top = s.left = 0, s.zIndex = -1;
    const i = r(this, te).createElementNS(Hs, "svg");
    i.setAttribute("width", 0), i.setAttribute("height", 0), f(this, Qs, r(this, te).createElementNS(Hs, "defs")), e.append(i), i.append(r(this, Qs)), r(this, te).body.append(e);
  }
  return r(this, Qs);
}, Yl = function(e) {
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
}, vr = function(e) {
  if (r(this, Mn) === void 0) {
    f(this, Mn, "");
    const s = r(this, te).URL;
    s !== r(this, te).baseURI && (Xh(s) ? q('#createUrl: ignore "data:"-URL for performance reasons.') : f(this, Mn, s.split("#", 1)[0]));
  }
  return `url(${r(this, Mn)}#${e})`;
}, Wu = function(e) {
  const s = r(this, te).createElementNS(Hs, "feColorMatrix");
  s.setAttribute("type", "matrix"), s.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0"), e.append(s);
}, Tc = function(e) {
  const s = r(this, te).createElementNS(Hs, "feColorMatrix");
  s.setAttribute("type", "matrix"), s.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"), e.append(s);
}, _r = function(e) {
  const s = r(this, te).createElementNS(Hs, "filter");
  return s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("id", e), r(this, F, Ar).append(s), s;
}, Va = function(e, s, i) {
  const n = r(this, te).createElementNS(Hs, s);
  n.setAttribute("type", "discrete"), n.setAttribute("tableValues", i), e.append(n);
}, Wa = function(e, s, i, n) {
  const a = r(this, te).createElementNS(Hs, "feComponentTransfer");
  n.append(a), y(this, F, Va).call(this, a, "feFuncR", e), y(this, F, Va).call(this, a, "feFuncG", s), y(this, F, Va).call(this, a, "feFuncB", i);
}, Pc = function(e, s) {
  const i = r(this, te).createElementNS(Hs, "feComponentTransfer");
  s.append(i), y(this, F, Va).call(this, i, "feFuncA", e);
}, Xa = function(e) {
  return r(this, F, Ar).style.color = e, Ed(getComputedStyle(r(this, F, Ar)).getPropertyValue("color"));
};
class Xu {
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
class qu extends Xu {
  async _fetch(t) {
    const e = await Wh(t, "arraybuffer");
    return new Uint8Array(e);
  }
}
ne && q("Please use the `legacy` build in Node.js environments.");
async function Yu(d) {
  const e = await process.getBuiltinModule("fs").promises.readFile(d);
  return new Uint8Array(e);
}
class Ff extends Vu {
}
class Nf extends Gu {
  _createCanvas(t, e) {
    return process.getBuiltinModule("module").createRequire(import.meta.url)("@napi-rs/canvas").createCanvas(t, e);
  }
}
class Of extends Uu {
  async _fetch(t) {
    return Yu(t);
  }
}
class Bf extends Xu {
  async _fetch(t) {
    return Yu(t);
  }
}
const ie = {
  FILL: "Fill",
  STROKE: "Stroke",
  SHADING: "Shading"
};
function Mc(d, t) {
  if (!t)
    return;
  const e = t[2] - t[0], s = t[3] - t[1], i = new Path2D();
  i.rect(t[0], t[1], e, s), d.clip(i);
}
class xd {
  getPattern() {
    ct("Abstract method `getPattern` called.");
  }
}
class Hf extends xd {
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
    if (i === ie.STROKE || i === ie.FILL) {
      const a = e.current.getClippedPathBoundingBox(i, mt(t)) || [0, 0, 0, 0], o = Math.ceil(a[2] - a[0]) || 1, l = Math.ceil(a[3] - a[1]) || 1, h = e.cachedCanvases.getCanvas("pattern", o, l), c = h.context;
      c.clearRect(0, 0, c.canvas.width, c.canvas.height), c.beginPath(), c.rect(0, 0, c.canvas.width, c.canvas.height), c.translate(-a[0], -a[1]), s = G.transform(s, [1, 0, 0, 1, a[0], a[1]]), c.transform(...e.baseTransform), this.matrix && c.transform(...this.matrix), Mc(c, this._bbox), c.fillStyle = this._createGradient(c), c.fill(), n = t.createPattern(h.canvas, "no-repeat");
      const u = new DOMMatrix(s);
      n.setTransform(u);
    } else
      Mc(t, this._bbox), n = this._createGradient(t);
    return n;
  }
}
function ec(d, t, e, s, i, n, a, o) {
  const l = t.coords, h = t.colors, c = d.data, u = d.width * 4;
  let p;
  l[e + 1] > l[s + 1] && (p = e, e = s, s = p, p = n, n = a, a = p), l[s + 1] > l[i + 1] && (p = s, s = i, i = p, p = a, a = o, o = p), l[e + 1] > l[s + 1] && (p = e, e = s, s = p, p = n, n = a, a = p);
  const g = (l[e] + t.offsetX) * t.scaleX, m = (l[e + 1] + t.offsetY) * t.scaleY, A = (l[s] + t.offsetX) * t.scaleX, _ = (l[s + 1] + t.offsetY) * t.scaleY, v = (l[i] + t.offsetX) * t.scaleX, S = (l[i + 1] + t.offsetY) * t.scaleY;
  if (m >= S)
    return;
  const E = h[n], w = h[n + 1], C = h[n + 2], k = h[a], x = h[a + 1], T = h[a + 2], P = h[o], z = h[o + 1], D = h[o + 2], et = Math.round(m), Q = Math.round(S);
  let Y, ut, R, H, St, He, Et, fe;
  for (let Lt = et; Lt <= Q; Lt++) {
    if (Lt < _) {
      const M = Lt < m ? 0 : (m - Lt) / (m - _);
      Y = g - (g - A) * M, ut = E - (E - k) * M, R = w - (w - x) * M, H = C - (C - T) * M;
    } else {
      let M;
      Lt > S ? M = 1 : _ === S ? M = 0 : M = (_ - Lt) / (_ - S), Y = A - (A - v) * M, ut = k - (k - P) * M, R = x - (x - z) * M, H = T - (T - D) * M;
    }
    let _t;
    Lt < m ? _t = 0 : Lt > S ? _t = 1 : _t = (m - Lt) / (m - S), St = g - (g - v) * _t, He = E - (E - P) * _t, Et = w - (w - z) * _t, fe = C - (C - D) * _t;
    const Os = Math.round(Math.min(Y, St)), vi = Math.round(Math.max(Y, St));
    let Ut = u * Lt + Os * 4;
    for (let M = Os; M <= vi; M++)
      _t = (Y - M) / (Y - St), _t < 0 ? _t = 0 : _t > 1 && (_t = 1), c[Ut++] = ut - (ut - He) * _t | 0, c[Ut++] = R - (R - Et) * _t | 0, c[Ut++] = H - (H - fe) * _t | 0, c[Ut++] = 255;
  }
}
function zf(d, t, e) {
  const s = t.coords, i = t.colors;
  let n, a;
  switch (t.type) {
    case "lattice":
      const o = t.verticesPerRow, l = Math.floor(s.length / o) - 1, h = o - 1;
      for (n = 0; n < l; n++) {
        let c = n * o;
        for (let u = 0; u < h; u++, c++)
          ec(d, e, s[c], s[c + 1], s[c + o], i[c], i[c + 1], i[c + o]), ec(d, e, s[c + o + 1], s[c + 1], s[c + o], i[c + o + 1], i[c + 1], i[c + o]);
      }
      break;
    case "triangles":
      for (n = 0, a = s.length; n < a; n += 3)
        ec(d, e, s[n], s[n + 1], s[n + 2], i[n], i[n + 1], i[n + 2]);
      break;
    default:
      throw new Error("illegal figure");
  }
}
class $f extends xd {
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
    }, _ = u + 2 * 2, v = p + 2 * 2, S = s.getCanvas("mesh", _, v), E = S.context, w = E.createImageData(u, p);
    if (e) {
      const k = w.data;
      for (let x = 0, T = k.length; x < T; x += 4)
        k[x] = e[0], k[x + 1] = e[1], k[x + 2] = e[2], k[x + 3] = 255;
    }
    for (const k of this._figures)
      zf(w, k, A);
    return E.putImageData(w, 2, 2), {
      canvas: S.canvas,
      offsetX: o - 2 * g,
      offsetY: l - 2 * m,
      scaleX: g,
      scaleY: m
    };
  }
  getPattern(t, e, s, i) {
    Mc(t, this._bbox);
    let n;
    if (i === ie.SHADING)
      n = G.singularValueDecompose2dScale(mt(t));
    else if (n = G.singularValueDecompose2dScale(e.baseTransform), this.matrix) {
      const o = G.singularValueDecompose2dScale(this.matrix);
      n = [n[0] * o[0], n[1] * o[1]];
    }
    const a = this._createMeshCanvas(n, i === ie.SHADING ? null : this._background, e.cachedCanvases);
    return i !== ie.SHADING && (t.setTransform(...e.baseTransform), this.matrix && t.transform(...this.matrix)), t.translate(a.offsetX, a.offsetY), t.scale(a.scaleX, a.scaleY), t.createPattern(a.canvas, "no-repeat");
  }
}
class Gf extends xd {
  getPattern() {
    return "hotpink";
  }
}
function Uf(d) {
  switch (d[0]) {
    case "RadialAxial":
      return new Hf(d);
    case "Mesh":
      return new $f(d);
    case "Dummy":
      return new Gf();
  }
  throw new Error(`Unknown IR type: ${d[0]}`);
}
const jd = {
  COLORED: 1,
  UNCOLORED: 2
}, Mh = class Mh {
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
    l = Math.abs(l), h = Math.abs(h), jh("TilingType: " + n);
    const c = e[0], u = e[1], p = e[2], g = e[3], m = p - c, A = g - u, _ = G.singularValueDecompose2dScale(this.matrix), v = G.singularValueDecompose2dScale(this.baseTransform), S = _[0] * v[0], E = _[1] * v[1];
    let w = m, C = A, k = !1, x = !1;
    const T = Math.ceil(l * S), P = Math.ceil(h * E), z = Math.ceil(m * S), D = Math.ceil(A * E);
    T >= z ? w = l : k = !0, P >= D ? C = h : x = !0;
    const et = this.getSizeAndScale(w, this.ctx.canvas.width, S), Q = this.getSizeAndScale(C, this.ctx.canvas.height, E), Y = t.cachedCanvases.getCanvas("pattern", et.size, Q.size), ut = Y.context, R = o.createCanvasGraphics(ut);
    if (R.groupLevel = t.groupLevel, this.setFillAndStrokeStyleToContext(R, i, a), ut.translate(-et.scale * c, -Q.scale * u), R.transform(et.scale, 0, 0, Q.scale, 0, 0), ut.save(), this.clipBbox(R, c, u, p, g), R.baseTransform = mt(R.ctx), R.executeOperatorList(s), R.endDrawing(), ut.restore(), k || x) {
      const H = Y.canvas;
      k && (w = l), x && (C = h);
      const St = this.getSizeAndScale(w, this.ctx.canvas.width, S), He = this.getSizeAndScale(C, this.ctx.canvas.height, E), Et = St.size, fe = He.size, Lt = t.cachedCanvases.getCanvas("pattern-workaround", Et, fe), _t = Lt.context, Os = k ? Math.floor(m / l) : 0, vi = x ? Math.floor(A / h) : 0;
      for (let Ut = 0; Ut <= Os; Ut++)
        for (let M = 0; M <= vi; M++)
          _t.drawImage(H, Et * Ut, fe * M, Et, fe, 0, 0, Et, fe);
      return {
        canvas: Lt.canvas,
        scaleX: St.scale,
        scaleY: He.scale,
        offsetX: c,
        offsetY: u
      };
    }
    return {
      canvas: Y.canvas,
      scaleX: et.scale,
      scaleY: Q.scale,
      offsetX: c,
      offsetY: u
    };
  }
  getSizeAndScale(t, e, s) {
    const i = Math.max(Mh.MAX_PATTERN_SIZE, e);
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
      case jd.COLORED:
        const a = this.ctx;
        i.fillStyle = a.fillStyle, i.strokeStyle = a.strokeStyle, n.fillColor = a.fillStyle, n.strokeColor = a.strokeStyle;
        break;
      case jd.UNCOLORED:
        const o = G.makeHexColor(s[0], s[1], s[2]);
        i.fillStyle = o, i.strokeStyle = o, n.fillColor = o, n.strokeColor = o;
        break;
      default:
        throw new gf(`Unsupported paint type: ${e}`);
    }
  }
  getPattern(t, e, s, i) {
    let n = s;
    i !== ie.SHADING && (n = G.transform(n, e.baseTransform), this.matrix && (n = G.transform(n, this.matrix)));
    const a = this.createPatternCanvas(e);
    let o = new DOMMatrix(n);
    o = o.translate(a.offsetX, a.offsetY), o = o.scale(1 / a.scaleX, 1 / a.scaleY);
    const l = t.createPattern(a.canvas, "repeat");
    return l.setTransform(o), l;
  }
};
U(Mh, "MAX_PATTERN_SIZE", 3e3);
let Lc = Mh;
function jf({
  src: d,
  srcPos: t = 0,
  dest: e,
  width: s,
  height: i,
  nonBlackColor: n = 4294967295,
  inverseDecode: a = !1
}) {
  const o = de.isLittleEndian ? 4278190080 : 255, [l, h] = a ? [n, o] : [o, n], c = s >> 3, u = s & 7, p = d.length;
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
const Vd = 16, Wd = 100, Vf = 15, Xd = 10, qd = 1e3, _e = 16;
function Wf(d, t) {
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
class Xf {
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
function Nl(d, t, e, s, i, n, a, o, l, h) {
  const [c, u, p, g, m, A] = mt(d);
  if (u === 0 && p === 0) {
    const S = a * c + m, E = Math.round(S), w = o * g + A, C = Math.round(w), k = (a + l) * c + m, x = Math.abs(Math.round(k) - E) || 1, T = (o + h) * g + A, P = Math.abs(Math.round(T) - C) || 1;
    return d.setTransform(Math.sign(c), 0, 0, Math.sign(g), E, C), d.drawImage(t, e, s, i, n, 0, 0, x, P), d.setTransform(c, u, p, g, m, A), [x, P];
  }
  if (c === 0 && g === 0) {
    const S = o * p + m, E = Math.round(S), w = a * u + A, C = Math.round(w), k = (o + h) * p + m, x = Math.abs(Math.round(k) - E) || 1, T = (a + l) * u + A, P = Math.abs(Math.round(T) - C) || 1;
    return d.setTransform(0, Math.sign(u), Math.sign(p), 0, E, C), d.drawImage(t, e, s, i, n, 0, 0, P, x), d.setTransform(c, u, p, g, m, A), [P, x];
  }
  d.drawImage(t, e, s, i, n, a, o, l, h);
  const _ = Math.hypot(c, u), v = Math.hypot(p, g);
  return [_ * l, v * h];
}
function qf(d) {
  const {
    width: t,
    height: e
  } = d;
  if (t > qd || e > qd)
    return null;
  const s = 1e3, i = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]), n = t + 1;
  let a = new Uint8Array(n * (e + 1)), o, l, h;
  const c = t + 7 & -8;
  let u = new Uint8Array(c * e), p = 0;
  for (const v of d.data) {
    let S = 128;
    for (; S > 0; )
      u[p++] = v & S ? 0 : 255, S >>= 1;
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
    const S = v + t;
    for (; v < S && !a[v]; )
      v++;
    if (v === S)
      continue;
    A.moveTo(v % n, o);
    const E = v;
    let w = a[v];
    do {
      const C = m[w];
      do
        v += C;
      while (!a[v]);
      const k = a[v];
      k !== 5 && k !== 10 ? (w = k, a[v] = 0) : (w = k & 51 * w >> 4, a[v] &= w >> 2 | w << 2), A.lineTo(v % n, v / n | 0), a[v] || --g;
    } while (E !== v);
    --o;
  }
  return u = null, a = null, function(v) {
    v.save(), v.scale(1 / t, -1 / e), v.translate(0, -e), v.fill(A), v.beginPath(), v.restore();
  };
}
class Yd {
  constructor(t, e) {
    this.alphaIsShape = !1, this.fontSize = 0, this.fontSizeScale = 1, this.textMatrix = ru, this.textMatrixScale = 1, this.fontMatrix = rc, this.leading = 0, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRenderingMode = Kt.FILL, this.textRise = 0, this.fillColor = "#000000", this.strokeColor = "#000000", this.patternFill = !1, this.patternStroke = !1, this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.activeSMask = null, this.transferMaps = "none", this.startNewPathAndClipBox([0, 0, t, e]);
  }
  clone() {
    const t = Object.create(this);
    return t.clipBox = this.clipBox.slice(), t;
  }
  setCurrentPoint(t, e) {
    this.x = t, this.y = e;
  }
  updatePathMinMax(t, e, s) {
    [e, s] = G.applyTransform([e, s], t), this.minX = Math.min(this.minX, e), this.minY = Math.min(this.minY, s), this.maxX = Math.max(this.maxX, e), this.maxY = Math.max(this.maxY, s);
  }
  updateRectMinMax(t, e) {
    const s = G.applyTransform(e, t), i = G.applyTransform(e.slice(2), t), n = G.applyTransform([e[0], e[3]], t), a = G.applyTransform([e[2], e[1]], t);
    this.minX = Math.min(this.minX, s[0], i[0], n[0], a[0]), this.minY = Math.min(this.minY, s[1], i[1], n[1], a[1]), this.maxX = Math.max(this.maxX, s[0], i[0], n[0], a[0]), this.maxY = Math.max(this.maxY, s[1], i[1], n[1], a[1]);
  }
  updateScalingPathMinMax(t, e) {
    G.scaleMinMax(t, e), this.minX = Math.min(this.minX, e[0]), this.minY = Math.min(this.minY, e[1]), this.maxX = Math.max(this.maxX, e[2]), this.maxY = Math.max(this.maxY, e[3]);
  }
  updateCurvePathMinMax(t, e, s, i, n, a, o, l, h, c) {
    const u = G.bezierBoundingBox(e, s, i, n, a, o, l, h, c);
    c || this.updateRectMinMax(t, u);
  }
  getPathBoundingBox(t = ie.FILL, e = null) {
    const s = [this.minX, this.minY, this.maxX, this.maxY];
    if (t === ie.STROKE) {
      e || ct("Stroke bounding box must include transform.");
      const i = G.singularValueDecompose2dScale(e), n = i[0] * this.lineWidth / 2, a = i[1] * this.lineWidth / 2;
      s[0] -= n, s[1] -= a, s[2] += n, s[3] += a;
    }
    return s;
  }
  updateClipFromPath() {
    const t = G.intersect(this.clipBox, this.getPathBoundingBox());
    this.startNewPathAndClipBox(t || [0, 0, 0, 0]);
  }
  isEmptyClip() {
    return this.minX === 1 / 0;
  }
  startNewPathAndClipBox(t) {
    this.clipBox = t, this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = 0, this.maxY = 0;
  }
  getClippedPathBoundingBox(t = ie.FILL, e = null) {
    return G.intersect(this.clipBox, this.getPathBoundingBox(t, e));
  }
}
function Kd(d, t) {
  if (t instanceof ImageData) {
    d.putImageData(t, 0, 0);
    return;
  }
  const e = t.height, s = t.width, i = e % _e, n = (e - i) / _e, a = i === 0 ? n : n + 1, o = d.createImageData(s, _e);
  let l = 0, h;
  const c = t.data, u = o.data;
  let p, g, m, A;
  if (t.kind === Hl.GRAYSCALE_1BPP) {
    const _ = c.byteLength, v = new Uint32Array(u.buffer, 0, u.byteLength >> 2), S = v.length, E = s + 7 >> 3, w = 4294967295, C = de.isLittleEndian ? 4278190080 : 255;
    for (p = 0; p < a; p++) {
      for (m = p < n ? _e : i, h = 0, g = 0; g < m; g++) {
        const k = _ - l;
        let x = 0;
        const T = k > E ? s : k * 8 - 7, P = T & -8;
        let z = 0, D = 0;
        for (; x < P; x += 8)
          D = c[l++], v[h++] = D & 128 ? w : C, v[h++] = D & 64 ? w : C, v[h++] = D & 32 ? w : C, v[h++] = D & 16 ? w : C, v[h++] = D & 8 ? w : C, v[h++] = D & 4 ? w : C, v[h++] = D & 2 ? w : C, v[h++] = D & 1 ? w : C;
        for (; x < T; x++)
          z === 0 && (D = c[l++], z = 128), v[h++] = D & z ? w : C, z >>= 1;
      }
      for (; h < S; )
        v[h++] = 0;
      d.putImageData(o, 0, p * _e);
    }
  } else if (t.kind === Hl.RGBA_32BPP) {
    for (g = 0, A = s * _e * 4, p = 0; p < n; p++)
      u.set(c.subarray(l, l + A)), l += A, d.putImageData(o, 0, g), g += _e;
    p < a && (A = s * i * 4, u.set(c.subarray(l, l + A)), d.putImageData(o, 0, g));
  } else if (t.kind === Hl.RGB_24BPP)
    for (m = _e, A = s * m, p = 0; p < a; p++) {
      for (p >= n && (m = i, A = s * m), h = 0, g = A; g--; )
        u[h++] = c[l++], u[h++] = c[l++], u[h++] = c[l++], u[h++] = 255;
      d.putImageData(o, 0, p * _e);
    }
  else
    throw new Error(`bad image kind: ${t.kind}`);
}
function Qd(d, t) {
  if (t.bitmap) {
    d.drawImage(t.bitmap, 0, 0);
    return;
  }
  const e = t.height, s = t.width, i = e % _e, n = (e - i) / _e, a = i === 0 ? n : n + 1, o = d.createImageData(s, _e);
  let l = 0;
  const h = t.data, c = o.data;
  for (let u = 0; u < a; u++) {
    const p = u < n ? _e : i;
    ({
      srcPos: l
    } = jf({
      src: h,
      srcPos: l,
      dest: c,
      width: s,
      height: p,
      nonBlackColor: 0
    })), d.putImageData(o, 0, u * _e);
  }
}
function Na(d, t) {
  const e = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
  for (const s of e)
    d[s] !== void 0 && (t[s] = d[s]);
  d.setLineDash !== void 0 && (t.setLineDash(d.getLineDash()), t.lineDashOffset = d.lineDashOffset);
}
function Ol(d) {
  if (d.strokeStyle = d.fillStyle = "#000000", d.fillRule = "nonzero", d.globalAlpha = 1, d.lineWidth = 1, d.lineCap = "butt", d.lineJoin = "miter", d.miterLimit = 10, d.globalCompositeOperation = "source-over", d.font = "10px sans-serif", d.setLineDash !== void 0 && (d.setLineDash([]), d.lineDashOffset = 0), !ne) {
    const {
      filter: t
    } = d;
    t !== "none" && t !== "" && (d.filter = "none");
  }
}
function Zd(d, t) {
  if (t)
    return !0;
  const e = G.singularValueDecompose2dScale(d);
  e[0] = Math.fround(e[0]), e[1] = Math.fround(e[1]);
  const s = Math.fround((globalThis.devicePixelRatio || 1) * en.PDF_TO_CSS_UNITS);
  return e[0] <= s && e[1] <= s;
}
const Yf = ["butt", "round", "square"], Kf = ["miter", "round", "bevel"], Qf = {}, Jd = {};
var fs, Rc, Ic, Dc;
const Rd = class Rd {
  constructor(t, e, s, i, n, {
    optionalContentConfig: a,
    markedContentStack: o = null
  }, l, h) {
    b(this, fs);
    this.ctx = t, this.current = new Yd(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = !1, this.res = null, this.xobjs = null, this.commonObjs = e, this.objs = s, this.canvasFactory = i, this.filterFactory = n, this.groupStack = [], this.processingType3 = null, this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.suspendedCtx = null, this.contentVisible = !0, this.markedContentStack = o || [], this.optionalContentConfig = a, this.cachedCanvases = new Xf(this.canvasFactory), this.cachedPatterns = /* @__PURE__ */ new Map(), this.annotationCanvasMap = l, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.pageColors = h, this._cachedScaleForStroking = [-1, 0], this._cachedGetSinglePixelWidth = null, this._cachedBitmapsMap = /* @__PURE__ */ new Map();
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
    this.ctx.save(), Ol(this.ctx), t && (this.ctx.transform(...t), this.outputScaleX = t[0], this.outputScaleY = t[0]), this.ctx.transform(...e.transform), this.viewportScale = e.scale, this.baseTransform = mt(this.ctx);
  }
  executeOperatorList(t, e, s, i) {
    const n = t.argsArray, a = t.fnArray;
    let o = e || 0;
    const l = n.length;
    if (l === o)
      return o;
    const h = l - o > Xd && typeof s == "function", c = h ? Date.now() + Vf : 0;
    let u = 0;
    const p = this.commonObjs, g = this.objs;
    let m;
    for (; ; ) {
      if (i !== void 0 && o === i.nextBreakPoint)
        return i.breakIt(o, s), o;
      if (m = a[o], m !== Je.dependency)
        this[m].apply(this, n[o]);
      else
        for (const A of n[o]) {
          const _ = A.startsWith("g_") ? p : g;
          if (!_.has(A))
            return _.get(A, s), o;
        }
      if (o++, o === l)
        return o;
      if (h && ++u > Xd) {
        if (Date.now() > c)
          return s(), o;
        u = 0;
      }
    }
  }
  endDrawing() {
    y(this, fs, Rc).call(this), this.cachedCanvases.clear(), this.cachedPatterns.clear();
    for (const t of this._cachedBitmapsMap.values()) {
      for (const e of t.values())
        typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement && (e.width = e.height = 0);
      t.clear();
    }
    this._cachedBitmapsMap.clear(), y(this, fs, Ic).call(this);
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
    } = t, n = this.current.fillColor, a = this.current.patternFill, o = mt(e);
    let l, h, c, u;
    if ((t.bitmap || t.data) && t.count > 1) {
      const T = t.bitmap || t.data.buffer;
      h = JSON.stringify(a ? o : [o.slice(0, 4), n]), l = this._cachedBitmapsMap.get(T), l || (l = /* @__PURE__ */ new Map(), this._cachedBitmapsMap.set(T, l));
      const P = l.get(h);
      if (P && !a) {
        const z = Math.round(Math.min(o[0], o[2]) + o[4]), D = Math.round(Math.min(o[1], o[3]) + o[5]);
        return {
          canvas: P,
          offsetX: z,
          offsetY: D
        };
      }
      c = P;
    }
    c || (u = this.cachedCanvases.getCanvas("maskCanvas", s, i), Qd(u.context, t));
    let p = G.transform(o, [1 / s, 0, 0, -1 / i, 0, 0]);
    p = G.transform(p, [1, 0, 0, 1, 0, -i]);
    const [g, m, A, _] = G.getAxialAlignedBoundingBox([0, 0, s, i], p), v = Math.round(A - g) || 1, S = Math.round(_ - m) || 1, E = this.cachedCanvases.getCanvas("fillCanvas", v, S), w = E.context, C = g, k = m;
    w.translate(-C, -k), w.transform(...p), c || (c = this._scaleImage(u.canvas, gs(w)), c = c.img, l && a && l.set(h, c)), w.imageSmoothingEnabled = Zd(mt(w), t.interpolate), Nl(w, c, 0, 0, c.width, c.height, 0, 0, s, i), w.globalCompositeOperation = "source-in";
    const x = G.transform(gs(w), [1, 0, 0, 1, -C, -k]);
    return w.fillStyle = a ? n.getPattern(e, this, x, ie.FILL) : n, w.fillRect(0, 0, s, i), l && !a && (this.cachedCanvases.delete("fillCanvas"), l.set(h, E.canvas)), {
      canvas: E.canvas,
      offsetX: Math.round(C),
      offsetY: Math.round(k)
    };
  }
  setLineWidth(t) {
    t !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1), this.current.lineWidth = t, this.ctx.lineWidth = t;
  }
  setLineCap(t) {
    this.ctx.lineCap = Yf[t];
  }
  setLineJoin(t) {
    this.ctx.lineJoin = Kf[t];
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
    n.setTransform(...mt(this.suspendedCtx)), Na(this.suspendedCtx, n), Wf(n, this.suspendedCtx), this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
  }
  endSMaskMode() {
    if (!this.inSMaskMode)
      throw new Error("endSMaskMode called while not in smask mode");
    this.ctx._removeMirroring(), Na(this.ctx, this.suspendedCtx), this.ctx = this.suspendedCtx, this.suspendedCtx = null;
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
      const _ = G.makeHexColor(...a);
      if (g < 0 || m < 0 || g + s > p.width || m + i > p.height) {
        const v = this.cachedCanvases.getCanvas("maskExtension", s, i), S = v.context;
        S.drawImage(p, -g, -m), S.globalCompositeOperation = "destination-atop", S.fillStyle = _, S.fillRect(0, 0, s, i), S.globalCompositeOperation = "source-over", p = v.canvas, g = m = 0;
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
    this.inSMaskMode ? (Na(this.ctx, this.suspendedCtx), this.suspendedCtx.save()) : this.ctx.save();
    const t = this.current;
    this.stateStack.push(t), this.current = t.clone();
  }
  restore() {
    this.stateStack.length === 0 && this.inSMaskMode && this.endSMaskMode(), this.stateStack.length !== 0 && (this.current = this.stateStack.pop(), this.inSMaskMode ? (this.suspendedCtx.restore(), Na(this.suspendedCtx, this.ctx)) : this.ctx.restore(), this.checkSMaskState(), this.pendingClip = null, this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null);
  }
  transform(t, e, s, i, n, a) {
    this.ctx.transform(t, e, s, i, n, a), this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
  }
  constructPath(t, e, s) {
    const i = this.ctx, n = this.current;
    let a = n.x, o = n.y, l, h;
    const c = mt(i), u = c[0] === 0 && c[3] === 0 || c[1] === 0 && c[2] === 0, p = u ? s.slice(0) : null;
    for (let g = 0, m = 0, A = t.length; g < A; g++)
      switch (t[g] | 0) {
        case Je.rectangle:
          a = e[m++], o = e[m++];
          const _ = e[m++], v = e[m++], S = a + _, E = o + v;
          i.moveTo(a, o), _ === 0 || v === 0 ? i.lineTo(S, E) : (i.lineTo(S, o), i.lineTo(S, E), i.lineTo(a, E)), u || n.updateRectMinMax(c, [a, o, S, E]), i.closePath();
          break;
        case Je.moveTo:
          a = e[m++], o = e[m++], i.moveTo(a, o), u || n.updatePathMinMax(c, a, o);
          break;
        case Je.lineTo:
          a = e[m++], o = e[m++], i.lineTo(a, o), u || n.updatePathMinMax(c, a, o);
          break;
        case Je.curveTo:
          l = a, h = o, a = e[m + 4], o = e[m + 5], i.bezierCurveTo(e[m], e[m + 1], e[m + 2], e[m + 3], a, o), n.updateCurvePathMinMax(c, l, h, e[m], e[m + 1], e[m + 2], e[m + 3], a, o, p), m += 6;
          break;
        case Je.curveTo2:
          l = a, h = o, i.bezierCurveTo(a, o, e[m], e[m + 1], e[m + 2], e[m + 3]), n.updateCurvePathMinMax(c, l, h, a, o, e[m], e[m + 1], e[m + 2], e[m + 3], p), a = e[m + 2], o = e[m + 3], m += 4;
          break;
        case Je.curveTo3:
          l = a, h = o, a = e[m + 2], o = e[m + 3], i.bezierCurveTo(e[m], e[m + 1], a, o, a, o), n.updateCurvePathMinMax(c, l, h, e[m], e[m + 1], a, o, a, o, p), m += 4;
          break;
        case Je.closePath:
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
    e.globalAlpha = this.current.strokeAlpha, this.contentVisible && (typeof s == "object" && (s != null && s.getPattern) ? (e.save(), e.strokeStyle = s.getPattern(e, this, gs(e), ie.STROKE), this.rescaleAndStroke(!1), e.restore()) : this.rescaleAndStroke(!0)), t && this.consumePath(this.current.getClippedPathBoundingBox()), e.globalAlpha = this.current.fillAlpha;
  }
  closeStroke() {
    this.closePath(), this.stroke();
  }
  fill(t = !0) {
    const e = this.ctx, s = this.current.fillColor, i = this.current.patternFill;
    let n = !1;
    i && (e.save(), e.fillStyle = s.getPattern(e, this, gs(e), ie.FILL), n = !0);
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
    this.pendingClip = Qf;
  }
  eoClip() {
    this.pendingClip = Jd;
  }
  beginText() {
    this.current.textMatrix = ru, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
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
    if (i.fontMatrix = s.fontMatrix || rc, (i.fontMatrix[0] === 0 || i.fontMatrix[3] === 0) && q("Invalid font matrix for font " + t), e < 0 ? (e = -e, i.fontDirection = -1) : i.fontDirection = 1, this.current.font = s, this.current.fontSize = e, s.isType3Font)
      return;
    const n = s.loadedName || "sans-serif", a = ((c = s.systemFontInfo) == null ? void 0 : c.css) || `"${n}", ${s.fallbackName}`;
    let o = "normal";
    s.black ? o = "900" : s.bold && (o = "bold");
    const l = s.italic ? "italic" : "normal";
    let h = e;
    e < Vd ? h = Vd : e > Wd && (h = Wd), this.current.fontSizeScale = e / h, this.ctx.font = `${l} ${o} ${h}px ${a}`;
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
    const a = this.ctx, o = this.current, l = o.font, h = o.textRenderingMode, c = o.fontSize / o.fontSizeScale, u = h & Kt.FILL_STROKE_MASK, p = !!(h & Kt.ADD_TO_PATH_FLAG), g = o.patternFill && !l.missingFile, m = o.patternStroke && !l.missingFile;
    let A;
    if ((l.disableFontFace || p || g || m) && (A = l.getPathGenerator(this.commonObjs, t)), l.disableFontFace || g || m) {
      if (a.save(), a.translate(e, s), a.scale(c, -c), u === Kt.FILL || u === Kt.FILL_STROKE)
        if (i) {
          const _ = a.getTransform();
          a.setTransform(...i), a.fill(y(this, fs, Dc).call(this, A, _, i));
        } else
          a.fill(A);
      if (u === Kt.STROKE || u === Kt.FILL_STROKE)
        if (n) {
          const _ = a.getTransform();
          a.setTransform(...n), a.stroke(y(this, fs, Dc).call(this, A, _, n));
        } else
          a.lineWidth /= c, a.stroke(A);
      a.restore();
    } else
      (u === Kt.FILL || u === Kt.FILL_STROKE) && a.fillText(t, e, s), (u === Kt.STROKE || u === Kt.FILL_STROKE) && a.strokeText(t, e, s);
    p && (this.pendingTextPaths || (this.pendingTextPaths = [])).push({
      transform: mt(a),
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
    const n = this.ctx, a = e.fontSizeScale, o = e.charSpacing, l = e.wordSpacing, h = e.fontDirection, c = e.textHScale * h, u = t.length, p = s.vertical, g = p ? 1 : -1, m = s.defaultVMetrics, A = i * e.fontMatrix[0], _ = e.textRenderingMode === Kt.FILL && !s.disableFontFace && !e.patternFill;
    n.save(), n.transform(...e.textMatrix), n.translate(e.x, e.y + e.textRise), h > 0 ? n.scale(c, -1) : n.scale(c, 1);
    let v, S;
    if (e.patternFill) {
      n.save();
      const x = e.fillColor.getPattern(n, this, gs(n), ie.FILL);
      v = mt(n), n.restore(), n.fillStyle = x;
    }
    if (e.patternStroke) {
      n.save();
      const x = e.strokeColor.getPattern(n, this, gs(n), ie.STROKE);
      S = mt(n), n.restore(), n.strokeStyle = x;
    }
    let E = e.lineWidth;
    const w = e.textMatrixScale;
    if (w === 0 || E === 0) {
      const x = e.textRenderingMode & Kt.FILL_STROKE_MASK;
      (x === Kt.STROKE || x === Kt.FILL_STROKE) && (E = this.getSinglePixelWidth());
    } else
      E /= w;
    if (a !== 1 && (n.scale(a, a), E /= a), n.lineWidth = E, s.isInvalidPDFjsFont) {
      const x = [];
      let T = 0;
      for (const P of t)
        x.push(P.unicode), T += P.width;
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
      const P = (x.isSpace ? l : 0) + o, z = x.fontChar, D = x.accent;
      let et, Q, Y = x.width;
      if (p) {
        const R = x.vmetric || m, H = -(x.vmetric ? R[1] : Y * 0.5) * A, St = R[2] * A;
        Y = R ? -R[0] : Y, et = H / a, Q = (C + St) / a;
      } else
        et = C / a, Q = 0;
      if (s.remeasure && Y > 0) {
        const R = n.measureText(z).width * 1e3 / i * a;
        if (Y < R && this.isFontSubpixelAAEnabled) {
          const H = Y / R;
          T = !0, n.save(), n.scale(H, 1), et /= H;
        } else Y !== R && (et += (Y - R) / 2e3 * i / a);
      }
      if (this.contentVisible && (x.isInFont || s.missingFile)) {
        if (_ && !D)
          n.fillText(z, et, Q);
        else if (this.paintChar(z, et, Q, v, S), D) {
          const R = et + i * D.offset.x / a, H = Q - i * D.offset.y / a;
          this.paintChar(D.fontChar, R, H, v, S);
        }
      }
      const ut = p ? Y * A - P * h : Y * A + P * h;
      C += ut, T && n.restore();
    }
    p ? e.y -= C : e.x += C * c, n.restore(), this.compose();
  }
  showType3Text(t) {
    const e = this.ctx, s = this.current, i = s.font, n = s.fontSize, a = s.fontDirection, o = i.vertical ? 1 : -1, l = s.charSpacing, h = s.wordSpacing, c = s.textHScale * a, u = s.fontMatrix || rc, p = t.length, g = s.textRenderingMode === Kt.INVISIBLE;
    let m, A, _, v;
    if (!(g || n === 0)) {
      for (this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null, e.save(), e.transform(...s.textMatrix), e.translate(s.x, s.y), e.scale(c, a), m = 0; m < p; ++m) {
        if (A = t[m], typeof A == "number") {
          v = o * A * n / 1e3, this.ctx.translate(v, 0), s.x += v * c;
          continue;
        }
        const S = (A.isSpace ? h : 0) + l, E = i.charProcOperatorList[A.operatorListId];
        if (!E) {
          q(`Type3 character "${A.operatorListId}" is not available.`);
          continue;
        }
        this.contentVisible && (this.processingType3 = A, this.save(), e.scale(n, n), e.transform(...u), this.executeOperatorList(E), this.restore()), _ = G.applyTransform([A.width, 0], u)[0] * n + S, e.translate(_, 0), s.x += _ * c;
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
        createCanvasGraphics: (a) => new Rd(a, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
          optionalContentConfig: this.optionalContentConfig,
          markedContentStack: this.markedContentStack
        })
      };
      e = new Lc(t, s, this.ctx, n, i);
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
    this.ctx.strokeStyle = this.current.strokeColor = G.makeHexColor(t, e, s), this.current.patternStroke = !1;
  }
  setStrokeTransparent() {
    this.ctx.strokeStyle = this.current.strokeColor = "transparent", this.current.patternStroke = !1;
  }
  setFillRGBColor(t, e, s) {
    this.ctx.fillStyle = this.current.fillColor = G.makeHexColor(t, e, s), this.current.patternFill = !1;
  }
  setFillTransparent() {
    this.ctx.fillStyle = this.current.fillColor = "transparent", this.current.patternFill = !1;
  }
  _getPattern(t, e = null) {
    let s;
    return this.cachedPatterns.has(t) ? s = this.cachedPatterns.get(t) : (s = Uf(this.getObject(t)), this.cachedPatterns.set(t, s)), e && (s.matrix = e), s;
  }
  shadingFill(t) {
    if (!this.contentVisible)
      return;
    const e = this.ctx;
    this.save();
    const s = this._getPattern(t);
    e.fillStyle = s.getPattern(e, this, gs(e), ie.SHADING);
    const i = gs(e);
    if (i) {
      const {
        width: n,
        height: a
      } = e.canvas, [o, l, h, c] = G.getAxialAlignedBoundingBox([0, 0, n, a], i);
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
    t.isolated || jh("TODO: Support non-isolated groups."), t.knockout && q("Knockout groups not supported.");
    const s = mt(e);
    if (t.matrix && e.transform(...t.matrix), !t.bbox)
      throw new Error("Bounding box is required.");
    let i = G.getAxialAlignedBoundingBox(t.bbox, mt(e));
    const n = [0, 0, e.canvas.width, e.canvas.height];
    i = G.intersect(i, n) || [0, 0, 0, 0];
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
    }) : (e.setTransform(1, 0, 0, 1, 0, 0), e.translate(a, o), e.save()), Na(e, p), this.ctx = p, this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]), this.groupStack.push(e), this.groupLevel++;
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
      const n = G.getAxialAlignedBoundingBox([0, 0, e.canvas.width, e.canvas.height], i);
      this.ctx.drawImage(e.canvas, 0, 0), this.ctx.restore(), this.compose(n);
    }
  }
  beginAnnotation(t, e, s, i, n) {
    if (y(this, fs, Rc).call(this), Ol(this.ctx), this.ctx.save(), this.save(), this.baseTransform && this.ctx.setTransform(...this.baseTransform), e) {
      const a = e[2] - e[0], o = e[3] - e[1];
      if (n && this.annotationCanvasMap) {
        s = s.slice(), s[4] -= e[0], s[5] -= e[1], e = e.slice(), e[0] = e[1] = 0, e[2] = a, e[3] = o;
        const [l, h] = G.singularValueDecompose2dScale(mt(this.ctx)), {
          viewportScale: c
        } = this, u = Math.ceil(a * this.outputScaleX * c), p = Math.ceil(o * this.outputScaleY * c);
        this.annotationCanvas = this.canvasFactory.create(u, p);
        const {
          canvas: g,
          context: m
        } = this.annotationCanvas;
        this.annotationCanvasMap.set(t, g), this.annotationCanvas.savedCtx = this.ctx, this.ctx = m, this.ctx.save(), this.ctx.setTransform(l, 0, 0, -h, 0, o * h), Ol(this.ctx);
      } else
        Ol(this.ctx), this.endPath(), this.ctx.rect(e[0], e[1], a, o), this.ctx.clip(), this.ctx.beginPath();
    }
    this.current = new Yd(this.ctx.canvas.width, this.ctx.canvas.height), this.transform(...s), this.transform(...i);
  }
  endAnnotation() {
    this.annotationCanvas && (this.ctx.restore(), y(this, fs, Ic).call(this), this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas);
  }
  paintImageMaskXObject(t) {
    if (!this.contentVisible)
      return;
    const e = t.count;
    t = this.getObject(t.data, t), t.count = e;
    const s = this.ctx, i = this.processingType3;
    if (i && (i.compiled === void 0 && (i.compiled = qf(t)), i.compiled)) {
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
      const p = G.transform(l, [e, s, i, n, a[c], a[c + 1]]), [g, m] = G.applyTransform([0, 0], p);
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
      Qd(u, p), u.globalCompositeOperation = "source-in", u.fillStyle = i ? s.getPattern(u, this, gs(e), ie.FILL) : s, u.fillRect(0, 0, o, l), u.restore(), e.save(), e.transform(...h), e.scale(1, -1), Nl(e, c.canvas, 0, 0, o, l, 0, -1, 1, 1), e.restore();
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
    if (this.save(), !ne) {
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
      Kd(l, t), n = this.applyTransferMapsToCanvas(l);
    }
    const a = this._scaleImage(n, gs(i));
    i.imageSmoothingEnabled = Zd(mt(i), t.interpolate), Nl(i, a.img, 0, 0, a.paintWidth, a.paintHeight, 0, -s, e, s), this.compose(), this.restore();
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
      Kd(l, t), i = this.applyTransferMapsToCanvas(l);
    }
    for (const n of e)
      s.save(), s.transform(...n.transform), s.scale(1, -1), Nl(s, i, n.x, n.y, n.w, n.h, 0, -1, 1, 1), s.restore();
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
    this.pendingClip && (e || (this.pendingClip === Jd ? s.clip("evenodd") : s.clip()), this.pendingClip = null), this.current.startNewPathAndClipBox(this.current.clipBox), s.beginPath();
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
fs = new WeakSet(), Rc = function() {
  for (; this.stateStack.length || this.inSMaskMode; )
    this.restore();
  this.current.activeSMask = null, this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.transparentCanvas = null);
}, Ic = function() {
  if (this.pageColors) {
    const t = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
    if (t !== "none") {
      const e = this.ctx.filter;
      this.ctx.filter = t, this.ctx.drawImage(this.ctx.canvas, 0, 0), this.ctx.filter = e;
    }
  }
}, Dc = function(t, e, s) {
  const i = new Path2D();
  return i.addPath(t, new DOMMatrix(s).invertSelf().multiplySelf(e)), i;
};
let Tr = Rd;
for (const d in Je)
  Tr.prototype[d] !== void 0 && (Tr.prototype[Je[d]] = Tr.prototype[d]);
var Fo, No;
class gi {
  static get workerPort() {
    return r(this, Fo);
  }
  static set workerPort(t) {
    if (!(typeof Worker < "u" && t instanceof Worker) && t !== null)
      throw new Error("Invalid `workerPort` type.");
    f(this, Fo, t);
  }
  static get workerSrc() {
    return r(this, No);
  }
  static set workerSrc(t) {
    if (typeof t != "string")
      throw new Error("Invalid `workerSrc` type.");
    f(this, No, t);
  }
}
Fo = new WeakMap(), No = new WeakMap(), b(gi, Fo, null), b(gi, No, "");
var In, Oo;
class Zf {
  constructor({
    parsedData: t,
    rawData: e
  }) {
    b(this, In);
    b(this, Oo);
    f(this, In, t), f(this, Oo, e);
  }
  getRaw() {
    return r(this, Oo);
  }
  get(t) {
    return r(this, In).get(t) ?? null;
  }
  getAll() {
    return Ad(r(this, In));
  }
  has(t) {
    return r(this, In).has(t);
  }
}
In = new WeakMap(), Oo = new WeakMap();
const wr = Symbol("INTERNAL");
var Bo, Ho, zo, Xr;
class Jf {
  constructor(t, {
    name: e,
    intent: s,
    usage: i,
    rbGroups: n
  }) {
    b(this, Bo, !1);
    b(this, Ho, !1);
    b(this, zo, !1);
    b(this, Xr, !0);
    f(this, Bo, !!(t & Fe.DISPLAY)), f(this, Ho, !!(t & Fe.PRINT)), this.name = e, this.intent = s, this.usage = i, this.rbGroups = n;
  }
  get visible() {
    if (r(this, zo))
      return r(this, Xr);
    if (!r(this, Xr))
      return !1;
    const {
      print: t,
      view: e
    } = this.usage;
    return r(this, Bo) ? (e == null ? void 0 : e.viewState) !== "OFF" : r(this, Ho) ? (t == null ? void 0 : t.printState) !== "OFF" : !0;
  }
  _setVisible(t, e, s = !1) {
    t !== wr && ct("Internal method `_setVisible` called."), f(this, zo, s), f(this, Xr, e);
  }
}
Bo = new WeakMap(), Ho = new WeakMap(), zo = new WeakMap(), Xr = new WeakMap();
var Fi, ot, qr, Yr, $o, Fc;
class tg {
  constructor(t, e = Fe.DISPLAY) {
    b(this, $o);
    b(this, Fi, null);
    b(this, ot, /* @__PURE__ */ new Map());
    b(this, qr, null);
    b(this, Yr, null);
    if (this.renderingIntent = e, this.name = null, this.creator = null, t !== null) {
      this.name = t.name, this.creator = t.creator, f(this, Yr, t.order);
      for (const s of t.groups)
        r(this, ot).set(s.id, new Jf(e, s));
      if (t.baseState === "OFF")
        for (const s of r(this, ot).values())
          s._setVisible(wr, !1);
      for (const s of t.on)
        r(this, ot).get(s)._setVisible(wr, !0);
      for (const s of t.off)
        r(this, ot).get(s)._setVisible(wr, !1);
      f(this, qr, this.getHash());
    }
  }
  isVisible(t) {
    if (r(this, ot).size === 0)
      return !0;
    if (!t)
      return jh("Optional content group not defined."), !0;
    if (t.type === "OCG")
      return r(this, ot).has(t.id) ? r(this, ot).get(t.id).visible : (q(`Optional content group not found: ${t.id}`), !0);
    if (t.type === "OCMD") {
      if (t.expression)
        return y(this, $o, Fc).call(this, t.expression);
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
          o !== t && ((n = r(this, ot).get(o)) == null || n._setVisible(wr, !1, !0));
    i._setVisible(wr, !!e, !0), f(this, Fi, null);
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
    f(this, Fi, null);
  }
  get hasInitialVisibility() {
    return r(this, qr) === null || this.getHash() === r(this, qr);
  }
  getOrder() {
    return r(this, ot).size ? r(this, Yr) ? r(this, Yr).slice() : [...r(this, ot).keys()] : null;
  }
  getGroups() {
    return r(this, ot).size > 0 ? Ad(r(this, ot)) : null;
  }
  getGroup(t) {
    return r(this, ot).get(t) || null;
  }
  getHash() {
    if (r(this, Fi) !== null)
      return r(this, Fi);
    const t = new Nu();
    for (const [e, s] of r(this, ot))
      t.update(`${e}:${s.visible}`);
    return f(this, Fi, t.hexdigest());
  }
}
Fi = new WeakMap(), ot = new WeakMap(), qr = new WeakMap(), Yr = new WeakMap(), $o = new WeakSet(), Fc = function(t) {
  const e = t.length;
  if (e < 2)
    return !0;
  const s = t[0];
  for (let i = 1; i < e; i++) {
    const n = t[i];
    let a;
    if (Array.isArray(n))
      a = y(this, $o, Fc).call(this, n);
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
class eg {
  constructor(t, {
    disableRange: e = !1,
    disableStream: s = !1
  }) {
    Pt(t, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');
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
      Pt(i, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
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
    Pt(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
    const t = this._queuedChunks;
    return this._queuedChunks = null, new sg(this, t, this._progressiveDone, this._contentDispositionFilename);
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const s = new ig(this, t, e);
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
class sg {
  constructor(t, e, s = !1, i = null) {
    this._stream = t, this._done = s || !1, this._filename = wd(i) ? i : null, this._queuedChunks = e || [], this._loaded = 0;
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
class ig {
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
function ng(d) {
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
        }), g = Vh(u);
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
function Ku(d, t) {
  const e = new Headers();
  if (!d || !t || typeof t != "object")
    return e;
  for (const s in t) {
    const i = t[s];
    i !== void 0 && e.append(s, i);
  }
  return e;
}
function qh(d) {
  try {
    return new URL(d).origin;
  } catch {
  }
  return null;
}
function Qu({
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
function Zu(d) {
  const t = d.get("Content-Disposition");
  if (t) {
    let e = ng(t);
    if (e.includes("%"))
      try {
        e = decodeURIComponent(e);
      } catch {
      }
    if (wd(e))
      return e;
  }
  return null;
}
function Yh(d, t) {
  return d === 404 || d === 0 && t.startsWith("file:") ? new io('Missing PDF "' + t + '".') : new gh(`Unexpected server response (${d}) while retrieving PDF "${t}".`, d);
}
function Ju(d) {
  return d === 200 || d === 206;
}
function tp(d, t, e) {
  return {
    method: "GET",
    headers: d,
    signal: e.signal,
    mode: "cors",
    credentials: t ? "include" : "same-origin",
    redirect: "follow"
  };
}
function ep(d) {
  return d instanceof Uint8Array ? d.buffer : d instanceof ArrayBuffer ? d : (q(`getArrayBuffer - unexpected data format: ${d}`), new Uint8Array(d).buffer);
}
class tu {
  constructor(t) {
    U(this, "_responseOrigin", null);
    this.source = t, this.isHttp = /^https?:/i.test(t.url), this.headers = Ku(this.isHttp, t.httpHeaders), this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    var t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }
  getFullReader() {
    return Pt(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once."), this._fullRequestReader = new rg(this), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const s = new ag(this, t, e);
    return this._rangeRequestReaders.push(s), s;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const s of this._rangeRequestReaders.slice(0))
      s.cancel(t);
  }
}
class rg {
  constructor(t) {
    this._stream = t, this._reader = null, this._loaded = 0, this._filename = null;
    const e = t.source;
    this._withCredentials = e.withCredentials || !1, this._contentLength = e.length, this._headersCapability = Promise.withResolvers(), this._disableRange = e.disableRange || !1, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._abortController = new AbortController(), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange;
    const s = new Headers(t.headers), i = e.url;
    fetch(i, tp(s, this._withCredentials, this._abortController)).then((n) => {
      if (t._responseOrigin = qh(n.url), !Ju(n.status))
        throw Yh(n.status, i);
      this._reader = n.body.getReader(), this._headersCapability.resolve();
      const a = n.headers, {
        allowRangeRequests: o,
        suggestedLength: l
      } = Qu({
        responseHeaders: a,
        isHttp: t.isHttp,
        rangeChunkSize: this._rangeChunkSize,
        disableRange: this._disableRange
      });
      this._isRangeSupported = o, this._contentLength = l || this._contentLength, this._filename = Zu(a), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new tn("Streaming is disabled."));
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
      value: ep(t),
      done: !1
    });
  }
  cancel(t) {
    var e;
    (e = this._reader) == null || e.cancel(t), this._abortController.abort();
  }
}
class ag {
  constructor(t, e, s) {
    this._stream = t, this._reader = null, this._loaded = 0;
    const i = t.source;
    this._withCredentials = i.withCredentials || !1, this._readCapability = Promise.withResolvers(), this._isStreamingSupported = !i.disableStream, this._abortController = new AbortController();
    const n = new Headers(t.headers);
    n.append("Range", `bytes=${e}-${s - 1}`);
    const a = i.url;
    fetch(a, tp(n, this._withCredentials, this._abortController)).then((o) => {
      const l = qh(o.url);
      if (l !== t._responseOrigin)
        throw new Error(`Expected range response-origin "${l}" to match "${t._responseOrigin}".`);
      if (!Ju(o.status))
        throw Yh(o.status, a);
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
      value: ep(t),
      done: !1
    });
  }
  cancel(t) {
    var e;
    (e = this._reader) == null || e.cancel(t), this._abortController.abort();
  }
}
const sc = 200, ic = 206;
function og(d) {
  const t = d.response;
  return typeof t != "string" ? t : Vh(t).buffer;
}
class lg {
  constructor({
    url: t,
    httpHeaders: e,
    withCredentials: s
  }) {
    U(this, "_responseOrigin", null);
    this.url = t, this.isHttp = /^https?:/i.test(t), this.headers = Ku(this.isHttp, e), this.withCredentials = s || !1, this.currXhrId = 0, this.pendingRequests = /* @__PURE__ */ Object.create(null);
  }
  request(t) {
    const e = new XMLHttpRequest(), s = this.currXhrId++, i = this.pendingRequests[s] = {
      xhr: e
    };
    e.open("GET", this.url), e.withCredentials = this.withCredentials;
    for (const [n, a] of this.headers)
      e.setRequestHeader(n, a);
    return this.isHttp && "begin" in t && "end" in t ? (e.setRequestHeader("Range", `bytes=${t.begin}-${t.end - 1}`), i.expectedStatus = ic) : i.expectedStatus = sc, e.responseType = "arraybuffer", Pt(t.onError, "Expected `onError` callback to be provided."), e.onerror = () => {
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
    const n = i.status || sc;
    if (!(n === sc && s.expectedStatus === ic) && n !== s.expectedStatus) {
      s.onError(i.status);
      return;
    }
    const o = og(i);
    if (n === ic) {
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
class hg {
  constructor(t) {
    this._source = t, this._manager = new lg(t), this._rangeChunkSize = t.rangeChunkSize, this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  _onRangeRequestReaderClosed(t) {
    const e = this._rangeRequestReaders.indexOf(t);
    e >= 0 && this._rangeRequestReaders.splice(e, 1);
  }
  getFullReader() {
    return Pt(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once."), this._fullRequestReader = new cg(this._manager, this._source), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    const s = new dg(this._manager, t, e);
    return s.onClosed = this._onRangeRequestReaderClosed.bind(this), this._rangeRequestReaders.push(s), s;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const s of this._rangeRequestReaders.slice(0))
      s.cancel(t);
  }
}
class cg {
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
    this._manager._responseOrigin = qh(e.responseURL);
    const s = e.getAllResponseHeaders(), i = new Headers(s ? s.trimStart().replace(/[^\S ]+$/, "").split(/[\r\n]+/).map((o) => {
      const [l, ...h] = o.split(": ");
      return [l, h.join(": ")];
    }) : []), {
      allowRangeRequests: n,
      suggestedLength: a
    } = Qu({
      responseHeaders: i,
      isHttp: this._manager.isHttp,
      rangeChunkSize: this._rangeChunkSize,
      disableRange: this._disableRange
    });
    n && (this._isRangeSupported = !0), this._contentLength = a || this._contentLength, this._filename = Zu(i), this._isRangeSupported && this._manager.abortRequest(t), this._headersCapability.resolve();
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
    this._storedError = Yh(t, this._url), this._headersCapability.reject(this._storedError);
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
class dg {
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
    const t = qh((e = this._manager.getRequestXhr(this._requestId)) == null ? void 0 : e.responseURL);
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
    this._storedError ?? (this._storedError = Yh(t, this._url));
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
const ug = /^[a-z][a-z0-9\-+.]+:/i;
function pg(d) {
  if (ug.test(d))
    return new URL(d);
  const t = process.getBuiltinModule("url");
  return new URL(t.pathToFileURL(d));
}
class fg {
  constructor(t) {
    this.source = t, this.url = pg(t.url), Pt(this.url.protocol === "file:", "PDFNodeStream only supports file:// URLs."), this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    var t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }
  getFullReader() {
    return Pt(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once."), this._fullRequestReader = new gg(this), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const s = new mg(this, t, e);
    return this._rangeRequestReaders.push(s), s;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const s of this._rangeRequestReaders.slice(0))
      s.cancel(t);
  }
}
class gg {
  constructor(t) {
    this._url = t.url, this._done = !1, this._storedError = null, this.onProgress = null;
    const e = t.source;
    this._contentLength = e.length, this._loaded = 0, this._filename = null, this._disableRange = e.disableRange || !1, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange, this._readableStream = null, this._readCapability = Promise.withResolvers(), this._headersCapability = Promise.withResolvers();
    const s = process.getBuiltinModule("fs");
    s.promises.lstat(this._url).then((i) => {
      this._contentLength = i.size, this._setReadableStream(s.createReadStream(this._url)), this._headersCapability.resolve();
    }, (i) => {
      i.code === "ENOENT" && (i = new io(`Missing PDF "${this._url}".`)), this._storedError = i, this._headersCapability.reject(i);
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
    }), !this._isStreamingSupported && this._isRangeSupported && this._error(new tn("streaming is disabled")), this._storedError && this._readableStream.destroy(this._storedError);
  }
}
class mg {
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
const bg = 1e5, ge = 30, yg = 0.8;
var nu, Ni, Ae, Go, Uo, Dn, Js, jo, Vo, Fn, Kr, Qr, Oi, Zr, Wo, Jr, Nn, Xo, qo, On, Bn, Yo, Bi, ta, Ai, sp, ip, Nc, Be, Kl, Oc, np, rp;
const It = class It {
  constructor({
    textContentSource: t,
    container: e,
    viewport: s
  }) {
    b(this, Ai);
    b(this, Ni, Promise.withResolvers());
    b(this, Ae, null);
    b(this, Go, !1);
    b(this, Uo, !!((nu = globalThis.FontInspector) != null && nu.enabled));
    b(this, Dn, null);
    b(this, Js, null);
    b(this, jo, 0);
    b(this, Vo, 0);
    b(this, Fn, null);
    b(this, Kr, null);
    b(this, Qr, 0);
    b(this, Oi, 0);
    b(this, Zr, /* @__PURE__ */ Object.create(null));
    b(this, Wo, []);
    b(this, Jr, null);
    b(this, Nn, []);
    b(this, Xo, /* @__PURE__ */ new WeakMap());
    b(this, qo, null);
    var l;
    if (t instanceof ReadableStream)
      f(this, Jr, t);
    else if (typeof t == "object")
      f(this, Jr, new ReadableStream({
        start(h) {
          h.enqueue(t), h.close();
        }
      }));
    else
      throw new Error('No "textContentSource" parameter specified.');
    f(this, Ae, f(this, Kr, e)), f(this, Oi, s.scale * (globalThis.devicePixelRatio || 1)), f(this, Qr, s.rotation), f(this, Js, {
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
    f(this, qo, [1, 0, 0, -1, -a, o + n]), f(this, Vo, i), f(this, jo, n), y(l = It, Be, np).call(l), fr(e, s), r(this, Ni).promise.finally(() => {
      r(It, ta).delete(this), f(this, Js, null), f(this, Zr, null);
    }).catch(() => {
    });
  }
  static get fontFamilyMap() {
    const {
      isWindows: t,
      isFirefox: e
    } = de.platform;
    return J(this, "fontFamilyMap", /* @__PURE__ */ new Map([["sans-serif", `${t && e ? "Calibri, " : ""}sans-serif`], ["monospace", `${t && e ? "Lucida Console, " : ""}monospace`]]));
  }
  render() {
    const t = () => {
      r(this, Fn).read().then(({
        value: e,
        done: s
      }) => {
        if (s) {
          r(this, Ni).resolve();
          return;
        }
        r(this, Dn) ?? f(this, Dn, e.lang), Object.assign(r(this, Zr), e.styles), y(this, Ai, sp).call(this, e.items), t();
      }, r(this, Ni).reject);
    };
    return f(this, Fn, r(this, Jr).getReader()), r(It, ta).add(this), t(), r(this, Ni).promise;
  }
  update({
    viewport: t,
    onBefore: e = null
  }) {
    var n;
    const s = t.scale * (globalThis.devicePixelRatio || 1), i = t.rotation;
    if (i !== r(this, Qr) && (e == null || e(), f(this, Qr, i), fr(r(this, Kr), {
      rotation: i
    })), s !== r(this, Oi)) {
      e == null || e(), f(this, Oi, s);
      const a = {
        div: null,
        properties: null,
        ctx: y(n = It, Be, Kl).call(n, r(this, Dn))
      };
      for (const o of r(this, Nn))
        a.properties = r(this, Xo).get(o), a.div = o, y(this, Ai, Nc).call(this, a);
    }
  }
  cancel() {
    var e;
    const t = new tn("TextLayer task cancelled.");
    (e = r(this, Fn)) == null || e.cancel(t).catch(() => {
    }), f(this, Fn, null), r(this, Ni).reject(t);
  }
  get textDivs() {
    return r(this, Nn);
  }
  get textContentItemsStr() {
    return r(this, Wo);
  }
  static cleanup() {
    if (!(r(this, ta).size > 0)) {
      r(this, On).clear();
      for (const {
        canvas: t
      } of r(this, Bn).values())
        t.remove();
      r(this, Bn).clear();
    }
  }
};
Ni = new WeakMap(), Ae = new WeakMap(), Go = new WeakMap(), Uo = new WeakMap(), Dn = new WeakMap(), Js = new WeakMap(), jo = new WeakMap(), Vo = new WeakMap(), Fn = new WeakMap(), Kr = new WeakMap(), Qr = new WeakMap(), Oi = new WeakMap(), Zr = new WeakMap(), Wo = new WeakMap(), Jr = new WeakMap(), Nn = new WeakMap(), Xo = new WeakMap(), qo = new WeakMap(), On = new WeakMap(), Bn = new WeakMap(), Yo = new WeakMap(), Bi = new WeakMap(), ta = new WeakMap(), Ai = new WeakSet(), sp = function(t) {
  var i, n;
  if (r(this, Go))
    return;
  (n = r(this, Js)).ctx ?? (n.ctx = y(i = It, Be, Kl).call(i, r(this, Dn)));
  const e = r(this, Nn), s = r(this, Wo);
  for (const a of t) {
    if (e.length > bg) {
      q("Ignoring additional textDivs for performance reasons."), f(this, Go, !0);
      return;
    }
    if (a.str === void 0) {
      if (a.type === "beginMarkedContentProps" || a.type === "beginMarkedContent") {
        const o = r(this, Ae);
        f(this, Ae, document.createElement("span")), r(this, Ae).classList.add("markedContent"), a.id !== null && r(this, Ae).setAttribute("id", `${a.id}`), o.append(r(this, Ae));
      } else a.type === "endMarkedContent" && f(this, Ae, r(this, Ae).parentNode);
      continue;
    }
    s.push(a.str), y(this, Ai, ip).call(this, a);
  }
}, ip = function(t) {
  var A;
  const e = document.createElement("span"), s = {
    angle: 0,
    canvasWidth: 0,
    hasText: t.str !== "",
    hasEOL: t.hasEOL,
    fontSize: 0
  };
  r(this, Nn).push(e);
  const i = G.transform(r(this, qo), t.transform);
  let n = Math.atan2(i[1], i[0]);
  const a = r(this, Zr)[t.fontName];
  a.vertical && (n += Math.PI / 2);
  let o = r(this, Uo) && a.fontSubstitution || a.fontFamily;
  o = It.fontFamilyMap.get(o) || o;
  const l = Math.hypot(i[2], i[3]), h = l * y(A = It, Be, rp).call(A, o, r(this, Dn));
  let c, u;
  n === 0 ? (c = i[4], u = i[5] - h) : (c = i[4] + h * Math.sin(n), u = i[5] - h * Math.cos(n));
  const p = "calc(var(--scale-factor)*", g = e.style;
  r(this, Ae) === r(this, Kr) ? (g.left = `${(100 * c / r(this, Vo)).toFixed(2)}%`, g.top = `${(100 * u / r(this, jo)).toFixed(2)}%`) : (g.left = `${p}${c.toFixed(2)}px)`, g.top = `${p}${u.toFixed(2)}px)`), g.fontSize = `${p}${(r(It, Bi) * l).toFixed(2)}px)`, g.fontFamily = o, s.fontSize = l, e.setAttribute("role", "presentation"), e.textContent = t.str, e.dir = t.dir, r(this, Uo) && (e.dataset.fontName = a.fontSubstitutionLoadedName || t.fontName), n !== 0 && (s.angle = n * (180 / Math.PI));
  let m = !1;
  if (t.str.length > 1)
    m = !0;
  else if (t.str !== " " && t.transform[0] !== t.transform[3]) {
    const _ = Math.abs(t.transform[0]), v = Math.abs(t.transform[3]);
    _ !== v && Math.max(_, v) / Math.min(_, v) > 1.5 && (m = !0);
  }
  if (m && (s.canvasWidth = a.vertical ? t.height : t.width), r(this, Xo).set(e, s), r(this, Js).div = e, r(this, Js).properties = s, y(this, Ai, Nc).call(this, r(this, Js)), s.hasText && r(this, Ae).append(e), s.hasEOL) {
    const _ = document.createElement("br");
    _.setAttribute("role", "presentation"), r(this, Ae).append(_);
  }
}, Nc = function(t) {
  var o;
  const {
    div: e,
    properties: s,
    ctx: i
  } = t, {
    style: n
  } = e;
  let a = "";
  if (r(It, Bi) > 1 && (a = `scale(${1 / r(It, Bi)})`), s.canvasWidth !== 0 && s.hasText) {
    const {
      fontFamily: l
    } = n, {
      canvasWidth: h,
      fontSize: c
    } = s;
    y(o = It, Be, Oc).call(o, i, c * r(this, Oi), l);
    const {
      width: u
    } = i.measureText(e.textContent);
    u > 0 && (a = `scaleX(${h * r(this, Oi) / u}) ${a}`);
  }
  s.angle !== 0 && (a = `rotate(${s.angle}deg) ${a}`), a.length > 0 && (n.transform = a);
}, Be = new WeakSet(), Kl = function(t = null) {
  let e = r(this, Bn).get(t || (t = ""));
  if (!e) {
    const s = document.createElement("canvas");
    s.className = "hiddenCanvasElement", s.lang = t, document.body.append(s), e = s.getContext("2d", {
      alpha: !1,
      willReadFrequently: !0
    }), r(this, Bn).set(t, e), r(this, Yo).set(e, {
      size: 0,
      family: ""
    });
  }
  return e;
}, Oc = function(t, e, s) {
  const i = r(this, Yo).get(t);
  e === i.size && s === i.family || (t.font = `${e}px ${s}`, i.size = e, i.family = s);
}, np = function() {
  if (r(this, Bi) !== null)
    return;
  const t = document.createElement("div");
  t.style.opacity = 0, t.style.lineHeight = 1, t.style.fontSize = "1px", t.style.position = "absolute", t.textContent = "X", document.body.append(t), f(this, Bi, t.getBoundingClientRect().height), t.remove();
}, rp = function(t, e) {
  const s = r(this, On).get(t);
  if (s)
    return s;
  const i = y(this, Be, Kl).call(this, e);
  i.canvas.width = i.canvas.height = ge, y(this, Be, Oc).call(this, i, ge, t);
  const n = i.measureText("");
  let a = n.fontBoundingBoxAscent, o = Math.abs(n.fontBoundingBoxDescent);
  if (a) {
    const c = a / (a + o);
    return r(this, On).set(t, c), i.canvas.width = i.canvas.height = 0, c;
  }
  i.strokeStyle = "red", i.clearRect(0, 0, ge, ge), i.strokeText("g", 0, 0);
  let l = i.getImageData(0, 0, ge, ge).data;
  o = 0;
  for (let c = l.length - 1 - 3; c >= 0; c -= 4)
    if (l[c] > 0) {
      o = Math.ceil(c / 4 / ge);
      break;
    }
  i.clearRect(0, 0, ge, ge), i.strokeText("A", 0, ge), l = i.getImageData(0, 0, ge, ge).data, a = 0;
  for (let c = 0, u = l.length; c < u; c += 4)
    if (l[c] > 0) {
      a = ge - Math.floor(c / 4 / ge);
      break;
    }
  i.canvas.width = i.canvas.height = 0;
  const h = a ? a / (a + o) : yg;
  return r(this, On).set(t, h), h;
}, b(It, Be), b(It, On, /* @__PURE__ */ new Map()), b(It, Bn, /* @__PURE__ */ new Map()), b(It, Yo, /* @__PURE__ */ new WeakMap()), b(It, Bi, null), b(It, ta, /* @__PURE__ */ new Set());
let no = It;
class ro {
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
      else if (ro.shouldBuildText(o))
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
const Ag = 65536, vg = 100, _g = 5e3, wg = ne ? Nf : If, Sg = ne ? Of : ju, Eg = ne ? Ff : Df, Cg = ne ? Bf : qu;
function xg(d = {}) {
  typeof d == "string" || d instanceof URL ? d = {
    url: d
  } : (d instanceof ArrayBuffer || ArrayBuffer.isView(d)) && (d = {
    data: d
  });
  const t = new Bc(), {
    docId: e
  } = t, s = d.url ? kg(d.url) : null, i = d.data ? Tg(d.data) : null, n = d.httpHeaders || null, a = d.withCredentials === !0, o = d.password ?? null, l = d.range instanceof ap ? d.range : null, h = Number.isInteger(d.rangeChunkSize) && d.rangeChunkSize > 0 ? d.rangeChunkSize : Ag;
  let c = d.worker instanceof Pr ? d.worker : null;
  const u = d.verbosity, p = typeof d.docBaseUrl == "string" && !Xh(d.docBaseUrl) ? d.docBaseUrl : null, g = typeof d.cMapUrl == "string" ? d.cMapUrl : null, m = d.cMapPacked !== !1, A = d.CMapReaderFactory || Sg, _ = typeof d.standardFontDataUrl == "string" ? d.standardFontDataUrl : null, v = d.StandardFontDataFactory || Cg, S = d.stopAtErrors !== !0, E = Number.isInteger(d.maxImageSize) && d.maxImageSize > -1 ? d.maxImageSize : -1, w = d.isEvalSupported !== !1, C = typeof d.isOffscreenCanvasSupported == "boolean" ? d.isOffscreenCanvasSupported : !ne, k = typeof d.isImageDecoderSupported == "boolean" ? d.isImageDecoderSupported : !ne && (de.platform.isFirefox || !globalThis.chrome), x = Number.isInteger(d.canvasMaxAreaInBytes) ? d.canvasMaxAreaInBytes : -1, T = typeof d.disableFontFace == "boolean" ? d.disableFontFace : ne, P = d.fontExtraProperties === !0, z = d.enableXfa === !0, D = d.ownerDocument || globalThis.document, et = d.disableRange === !0, Q = d.disableStream === !0, Y = d.disableAutoFetch === !0, ut = d.pdfBug === !0, R = d.CanvasFactory || wg, H = d.FilterFactory || Eg, St = d.enableHWA === !0, He = l ? l.length : d.length ?? NaN, Et = typeof d.useSystemFonts == "boolean" ? d.useSystemFonts : !ne && !T, fe = typeof d.useWorkerFetch == "boolean" ? d.useWorkerFetch : A === ju && v === qu && g && _ && Ha(g, document.baseURI) && Ha(_, document.baseURI), Lt = null;
  df(u);
  const _t = {
    canvasFactory: new R({
      ownerDocument: D,
      enableHWA: St
    }),
    filterFactory: new H({
      docId: e,
      ownerDocument: D
    }),
    cMapReaderFactory: fe ? null : new A({
      baseUrl: g,
      isCompressed: m
    }),
    standardFontDataFactory: fe ? null : new v({
      baseUrl: _
    })
  };
  if (!c) {
    const Ut = {
      verbosity: u,
      port: gi.workerPort
    };
    c = Ut.port ? Pr.fromPort(Ut) : new Pr(Ut), t._worker = c;
  }
  const Os = {
    docId: e,
    apiVersion: "4.10.38",
    data: i,
    password: o,
    disableAutoFetch: Y,
    rangeChunkSize: h,
    length: He,
    docBaseUrl: p,
    enableXfa: z,
    evaluatorOptions: {
      maxImageSize: E,
      disableFontFace: T,
      ignoreErrors: S,
      isEvalSupported: w,
      isOffscreenCanvasSupported: C,
      isImageDecoderSupported: k,
      canvasMaxAreaInBytes: x,
      fontExtraProperties: P,
      useSystemFonts: Et,
      cMapUrl: fe ? g : null,
      standardFontDataUrl: fe ? _ : null
    }
  }, vi = {
    disableFontFace: T,
    fontExtraProperties: P,
    ownerDocument: D,
    pdfBug: ut,
    styleElement: Lt,
    loadingParams: {
      disableAutoFetch: Y,
      enableXfa: z
    }
  };
  return c.promise.then(function() {
    if (t.destroyed)
      throw new Error("Loading aborted");
    if (c.destroyed)
      throw new Error("Worker was destroyed");
    const Ut = c.messageHandler.sendWithPromise("GetDocRequest", Os, i ? [i.buffer] : null);
    let M;
    if (l)
      M = new eg(l, {
        disableRange: et,
        disableStream: Q
      });
    else if (!i) {
      if (!s)
        throw new Error("getDocument - no `url` parameter provided.");
      let I;
      if (ne)
        if (Ha(s)) {
          if (typeof fetch > "u" || typeof Response > "u" || !("body" in Response.prototype))
            throw new Error("getDocument - the Fetch API was disabled in Node.js, see `--no-experimental-fetch`.");
          I = tu;
        } else
          I = fg;
      else
        I = Ha(s) ? tu : hg;
      M = new I({
        url: s,
        length: He,
        httpHeaders: n,
        withCredentials: a,
        rangeChunkSize: h,
        disableRange: et,
        disableStream: Q
      });
    }
    return Ut.then((I) => {
      if (t.destroyed)
        throw new Error("Loading aborted");
      if (c.destroyed)
        throw new Error("Worker was destroyed");
      const nt = new Ua(e, I, c.port), Bs = new Rg(nt, t, M, vi, _t);
      t._transport = Bs, nt.send("Ready", null);
    });
  }).catch(t._capability.reject), t;
}
function kg(d) {
  if (d instanceof URL)
    return d.href;
  try {
    return new URL(d, window.location).href;
  } catch {
    if (ne && typeof d == "string")
      return d;
  }
  throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
}
function Tg(d) {
  if (ne && typeof Buffer < "u" && d instanceof Buffer)
    throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
  if (d instanceof Uint8Array && d.byteLength === d.buffer.byteLength)
    return d;
  if (typeof d == "string")
    return Vh(d);
  if (d instanceof ArrayBuffer || ArrayBuffer.isView(d) || typeof d == "object" && !isNaN(d == null ? void 0 : d.length))
    return new Uint8Array(d);
  throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
}
function eu(d) {
  return typeof d == "object" && Number.isInteger(d == null ? void 0 : d.num) && d.num >= 0 && Number.isInteger(d == null ? void 0 : d.gen) && d.gen >= 0;
}
var Lh;
const Rh = class Rh {
  constructor() {
    this._capability = Promise.withResolvers(), this._transport = null, this._worker = null, this.docId = `d${re(Rh, Lh)._++}`, this.destroyed = !1, this.onPassword = null, this.onProgress = null;
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
Lh = new WeakMap(), b(Rh, Lh, 0);
let Bc = Rh;
class ap {
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
class Pg {
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
var Hi, ti, qe, Sr, Ql;
class Mg {
  constructor(t, e, s, i = !1) {
    b(this, qe);
    b(this, Hi, null);
    b(this, ti, !1);
    this._pageIndex = t, this._pageInfo = e, this._transport = s, this._stats = i ? new $d() : null, this._pdfBug = i, this.commonObjs = s.commonObjs, this.objs = new op(), this._maybeCleanupAfterRender = !1, this._intentStates = /* @__PURE__ */ new Map(), this.destroyed = !1;
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
    return new Rl({
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
    annotationMode: i = wi.ENABLE,
    transform: n = null,
    background: a = null,
    optionalContentConfigPromise: o = null,
    annotationCanvasMap: l = null,
    pageColors: h = null,
    printAnnotationStorage: c = null,
    isEditing: u = !1
  }) {
    var w, C;
    (w = this._stats) == null || w.time("Overall");
    const p = this._transport.getRenderingIntent(s, i, c, u), {
      renderingIntent: g,
      cacheKey: m
    } = p;
    f(this, ti, !1), y(this, qe, Ql).call(this), o || (o = this._transport.getOptionalContentConfig(g));
    let A = this._intentStates.get(m);
    A || (A = /* @__PURE__ */ Object.create(null), this._intentStates.set(m, A)), A.streamReaderCancelTimeout && (clearTimeout(A.streamReaderCancelTimeout), A.streamReaderCancelTimeout = null);
    const _ = !!(g & Fe.PRINT);
    A.displayReadyCapability || (A.displayReadyCapability = Promise.withResolvers(), A.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null
    }, (C = this._stats) == null || C.time("Page Request"), this._pumpOperatorList(p));
    const v = (k) => {
      var x;
      A.renderTasks.delete(S), (this._maybeCleanupAfterRender || _) && f(this, ti, !0), y(this, qe, Sr).call(this, !_), k ? (S.capability.reject(k), this._abortOperatorList({
        intentState: A,
        reason: k instanceof Error ? k : new Error(k)
      })) : S.capability.resolve(), this._stats && (this._stats.timeEnd("Rendering"), this._stats.timeEnd("Overall"), (x = globalThis.Stats) != null && x.enabled && globalThis.Stats.add(this.pageNumber, this._stats));
    }, S = new zc({
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
    (A.renderTasks || (A.renderTasks = /* @__PURE__ */ new Set())).add(S);
    const E = S.task;
    return Promise.all([A.displayReadyCapability.promise, o]).then(([k, x]) => {
      var T;
      if (this.destroyed) {
        v();
        return;
      }
      if ((T = this._stats) == null || T.time("Rendering"), !(x.renderingIntent & g))
        throw new Error("Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.");
      S.initializeGraphics({
        transparency: k,
        optionalContentConfig: x
      }), S.operatorListChanged();
    }).catch(v), E;
  }
  getOperatorList({
    intent: t = "display",
    annotationMode: e = wi.ENABLE,
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
      return this.getXfa().then((s) => ro.textContent(s));
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
    return this.objs.clear(), f(this, ti, !1), y(this, qe, Ql).call(this), Promise.all(t);
  }
  cleanup(t = !1) {
    f(this, ti, !0);
    const e = y(this, qe, Sr).call(this, !1);
    return t && e && this._stats && (this._stats = new $d()), e;
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
    t.lastChunk && y(this, qe, Sr).call(this, !0);
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
            y(this, qe, Sr).call(this, !0);
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
        if (e instanceof _d) {
          let i = vg;
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
      if (t.streamReader.cancel(new tn(e.message)).catch(() => {
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
Hi = new WeakMap(), ti = new WeakMap(), qe = new WeakSet(), Sr = function(t = !1) {
  if (y(this, qe, Ql).call(this), !r(this, ti) || this.destroyed)
    return !1;
  if (t)
    return f(this, Hi, setTimeout(() => {
      f(this, Hi, null), y(this, qe, Sr).call(this, !1);
    }, _g)), !1;
  for (const {
    renderTasks: e,
    operatorList: s
  } of this._intentStates.values())
    if (e.size > 0 || !s.lastChunk)
      return !1;
  return this._intentStates.clear(), this.objs.clear(), f(this, ti, !1), !0;
}, Ql = function() {
  r(this, Hi) && (clearTimeout(r(this, Hi)), f(this, Hi, null));
};
var ei, Ih;
class Lg {
  constructor() {
    b(this, ei, /* @__PURE__ */ new Map());
    b(this, Ih, Promise.resolve());
  }
  postMessage(t, e) {
    const s = {
      data: structuredClone(t, e ? {
        transfer: e
      } : null)
    };
    r(this, Ih).then(() => {
      for (const [i] of r(this, ei))
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
    r(this, ei).set(e, i);
  }
  removeEventListener(t, e) {
    const s = r(this, ei).get(e);
    s == null || s(), r(this, ei).delete(e);
  }
  terminate() {
    for (const [, t] of r(this, ei))
      t == null || t();
    r(this, ei).clear();
  }
}
ei = new WeakMap(), Ih = new WeakMap();
var Dh, Hn, zn, ea, Zl, sa, Jl;
const gt = class gt {
  constructor({
    name: t = null,
    port: e = null,
    verbosity: s = uf()
  } = {}) {
    b(this, ea);
    var i;
    if (this.name = t, this.destroyed = !1, this.verbosity = s, this._readyCapability = Promise.withResolvers(), this._port = null, this._webWorker = null, this._messageHandler = null, e) {
      if ((i = r(gt, zn)) != null && i.has(e))
        throw new Error("Cannot use more than one PDFWorker per port.");
      (r(gt, zn) || f(gt, zn, /* @__PURE__ */ new WeakMap())).set(e, this), this._initializeFromPort(e);
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
    this._port = t, this._messageHandler = new Ua("main", "worker", t), this._messageHandler.on("ready", function() {
    }), y(this, ea, Zl).call(this);
  }
  _initialize() {
    if (r(gt, Hn) || r(gt, sa, Jl)) {
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
      }), s = new Ua("main", "worker", e), i = () => {
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
        this._messageHandler = s, this._port = e, this._webWorker = e, y(this, ea, Zl).call(this);
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
      jh("The worker has been disabled.");
    }
    this._setupFakeWorker();
  }
  _setupFakeWorker() {
    r(gt, Hn) || (q("Setting up fake worker."), f(gt, Hn, !0)), gt._setupFakeWorkerGlobal.then((t) => {
      if (this.destroyed) {
        this._readyCapability.reject(new Error("Worker was destroyed"));
        return;
      }
      const e = new Lg();
      this._port = e;
      const s = `fake${re(gt, Dh)._++}`, i = new Ua(s + "_worker", s, e);
      t.setup(i, e), this._messageHandler = new Ua(s, s + "_worker", e), y(this, ea, Zl).call(this);
    }).catch((t) => {
      this._readyCapability.reject(new Error(`Setting up fake worker failed: "${t.message}".`));
    });
  }
  destroy() {
    var t, e, s;
    this.destroyed = !0, (t = this._webWorker) == null || t.terminate(), this._webWorker = null, (e = r(gt, zn)) == null || e.delete(this._port), this._port = null, (s = this._messageHandler) == null || s.destroy(), this._messageHandler = null;
  }
  static fromPort(t) {
    var s;
    if (!(t != null && t.port))
      throw new Error("PDFWorker.fromPort - invalid method signature.");
    const e = (s = r(this, zn)) == null ? void 0 : s.get(t.port);
    if (e) {
      if (e._pendingDestroy)
        throw new Error("PDFWorker.fromPort - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
      return e;
    }
    return new gt(t);
  }
  static get workerSrc() {
    if (gi.workerSrc)
      return gi.workerSrc;
    throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
  }
  static get _setupFakeWorkerGlobal() {
    return J(this, "_setupFakeWorkerGlobal", (async () => r(this, sa, Jl) ? r(this, sa, Jl) : (await import(
      /*webpackIgnore: true*/
      this.workerSrc
    )).WorkerMessageHandler)());
  }
};
Dh = new WeakMap(), Hn = new WeakMap(), zn = new WeakMap(), ea = new WeakSet(), Zl = function() {
  this._readyCapability.resolve(), this._messageHandler.send("configure", {
    verbosity: this.verbosity
  });
}, sa = new WeakSet(), Jl = function() {
  var t;
  try {
    return ((t = globalThis.pdfjsWorker) == null ? void 0 : t.WorkerMessageHandler) || null;
  } catch {
    return null;
  }
}, b(gt, sa), b(gt, Dh, 0), b(gt, Hn, !1), b(gt, zn), ne && (f(gt, Hn, !0), gi.workerSrc || (gi.workerSrc = "./pdf.worker.mjs")), gt._isSameOrigin = (t, e) => {
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
let Pr = gt;
var si, Ts, ia, na, ii, $n, qa;
class Rg {
  constructor(t, e, s, i, n) {
    b(this, $n);
    b(this, si, /* @__PURE__ */ new Map());
    b(this, Ts, /* @__PURE__ */ new Map());
    b(this, ia, /* @__PURE__ */ new Map());
    b(this, na, /* @__PURE__ */ new Map());
    b(this, ii, null);
    this.messageHandler = t, this.loadingTask = e, this.commonObjs = new op(), this.fontLoader = new Lf({
      ownerDocument: i.ownerDocument,
      styleElement: i.styleElement
    }), this.loadingParams = i.loadingParams, this._params = i, this.canvasFactory = n.canvasFactory, this.filterFactory = n.filterFactory, this.cMapReaderFactory = n.cMapReaderFactory, this.standardFontDataFactory = n.standardFontDataFactory, this.destroyed = !1, this.destroyCapability = null, this._networkStream = s, this._fullReader = null, this._lastProgress = null, this.downloadInfoCapability = Promise.withResolvers(), this.setupMessageHandler();
  }
  get annotationStorage() {
    return J(this, "annotationStorage", new Cd());
  }
  getRenderingIntent(t, e = wi.ENABLE, s = null, i = !1, n = !1) {
    let a = Fe.DISPLAY, o = kc;
    switch (t) {
      case "any":
        a = Fe.ANY;
        break;
      case "display":
        break;
      case "print":
        a = Fe.PRINT;
        break;
      default:
        q(`getRenderingIntent - invalid intent: ${t}`);
    }
    const l = a & Fe.PRINT && s instanceof Bu ? s : this.annotationStorage;
    switch (e) {
      case wi.DISABLE:
        a += Fe.ANNOTATIONS_DISABLE;
        break;
      case wi.ENABLE:
        break;
      case wi.ENABLE_FORMS:
        a += Fe.ANNOTATIONS_FORMS;
        break;
      case wi.ENABLE_STORAGE:
        a += Fe.ANNOTATIONS_STORAGE, o = l.serializable;
        break;
      default:
        q(`getRenderingIntent - invalid annotationMode: ${e}`);
    }
    i && (a += Fe.IS_EDITING), n && (a += Fe.OPLIST);
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
    this.destroyed = !0, this.destroyCapability = Promise.withResolvers(), (s = r(this, ii)) == null || s.reject(new Error("Worker was destroyed during onPassword callback"));
    const t = [];
    for (const i of r(this, Ts).values())
      t.push(i._destroy());
    r(this, Ts).clear(), r(this, ia).clear(), r(this, na).clear(), this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
    const e = this.messageHandler.sendWithPromise("Terminate", null);
    return t.push(e), Promise.all(t).then(() => {
      var i, n;
      this.commonObjs.clear(), this.fontLoader.clear(), r(this, si).clear(), this.filterFactory.destroy(), no.cleanup(), (i = this._networkStream) == null || i.cancelAllRequests(new tn("Worker was terminated.")), (n = this.messageHandler) == null || n.destroy(), this.messageHandler = null, this.destroyCapability.resolve();
    }, this.destroyCapability.reject), this.destroyCapability.promise;
  }
  setupMessageHandler() {
    const {
      messageHandler: t,
      loadingTask: e
    } = this;
    t.on("GetReader", (s, i) => {
      Pt(this._networkStream, "GetReader - no `IPDFStream` instance available."), this._fullReader = this._networkStream.getFullReader(), this._fullReader.onProgress = (n) => {
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
          Pt(n instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer."), i.enqueue(new Uint8Array(n), 1, [n]);
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
      Pt(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
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
          Pt(a instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer."), i.enqueue(new Uint8Array(a), 1, [a]);
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
      this._numPages = s.numPages, this._htmlForXfa = s.htmlForXfa, delete s.htmlForXfa, e._capability.resolve(new Pg(s, this));
    }), t.on("DocException", (s) => {
      e._capability.reject(me(s));
    }), t.on("PasswordRequest", (s) => {
      f(this, ii, Promise.withResolvers());
      try {
        if (!e.onPassword)
          throw me(s);
        const i = (n) => {
          n instanceof Error ? r(this, ii).reject(n) : r(this, ii).resolve({
            password: n
          });
        };
        e.onPassword(i, s.code);
      } catch (i) {
        r(this, ii).reject(i);
      }
      return r(this, ii).promise;
    }), t.on("DataLoaded", (s) => {
      var i;
      (i = e.onProgress) == null || i.call(e, {
        loaded: s.length,
        total: s.length
      }), this.downloadInfoCapability.resolve(s);
    }), t.on("StartRenderPage", (s) => {
      if (this.destroyed)
        return;
      r(this, Ts).get(s.pageIndex)._startRenderPage(s.transparency, s.cacheKey);
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
          const c = h && ((a = globalThis.FontInspector) != null && a.enabled) ? (g, m) => globalThis.FontInspector.fontAdded(g, m) : null, u = new Rf(n, {
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
          Pt(p, "The imageRef must be defined.");
          for (const g of r(this, Ts).values())
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
      const o = r(this, Ts).get(i);
      if (!o.objs.has(s)) {
        if (o._intentStates.size === 0) {
          (l = a == null ? void 0 : a.bitmap) == null || l.close();
          return;
        }
        switch (n) {
          case "Image":
            o.objs.resolve(s, a), (a == null ? void 0 : a.dataLen) > of && (o._maybeCleanupAfterRender = !0);
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
    const e = t - 1, s = r(this, ia).get(e);
    if (s)
      return s;
    const i = this.messageHandler.sendWithPromise("GetPage", {
      pageIndex: e
    }).then((n) => {
      if (this.destroyed)
        throw new Error("Transport destroyed");
      n.refStr && r(this, na).set(n.refStr, t);
      const a = new Mg(e, n, this, this._params.pdfBug);
      return r(this, Ts).set(e, a), a;
    });
    return r(this, ia).set(e, i), i;
  }
  getPageIndex(t) {
    return eu(t) ? this.messageHandler.sendWithPromise("GetPageIndex", {
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
    return y(this, $n, qa).call(this, "GetFieldObjects");
  }
  hasJSActions() {
    return y(this, $n, qa).call(this, "HasJSActions");
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
    return y(this, $n, qa).call(this, "GetDocJSActions");
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
    return y(this, $n, qa).call(this, "GetOptionalContentConfig").then((e) => new tg(e, t));
  }
  getPermissions() {
    return this.messageHandler.sendWithPromise("GetPermissions", null);
  }
  getMetadata() {
    const t = "GetMetadata", e = r(this, si).get(t);
    if (e)
      return e;
    const s = this.messageHandler.sendWithPromise(t, null).then((i) => {
      var n, a;
      return {
        info: i[0],
        metadata: i[1] ? new Zf(i[1]) : null,
        contentDispositionFilename: ((n = this._fullReader) == null ? void 0 : n.filename) ?? null,
        contentLength: ((a = this._fullReader) == null ? void 0 : a.contentLength) ?? null
      };
    });
    return r(this, si).set(t, s), s;
  }
  getMarkInfo() {
    return this.messageHandler.sendWithPromise("GetMarkInfo", null);
  }
  async startCleanup(t = !1) {
    if (!this.destroyed) {
      await this.messageHandler.sendWithPromise("Cleanup", null);
      for (const e of r(this, Ts).values())
        if (!e.cleanup())
          throw new Error(`startCleanup: Page ${e.pageNumber} is currently rendering.`);
      this.commonObjs.clear(), t || this.fontLoader.clear(), r(this, si).clear(), this.filterFactory.destroy(!0), no.cleanup();
    }
  }
  cachedPageNumber(t) {
    if (!eu(t))
      return null;
    const e = t.gen === 0 ? `${t.num}R` : `${t.num}R${t.gen}`;
    return r(this, na).get(e) ?? null;
  }
}
si = new WeakMap(), Ts = new WeakMap(), ia = new WeakMap(), na = new WeakMap(), ii = new WeakMap(), $n = new WeakSet(), qa = function(t, e = null) {
  const s = r(this, si).get(t);
  if (s)
    return s;
  const i = this.messageHandler.sendWithPromise(t, e);
  return r(this, si).set(t, i), i;
};
const Oa = Symbol("INITIAL_DATA");
var xe, Ko, Hc;
class op {
  constructor() {
    b(this, Ko);
    b(this, xe, /* @__PURE__ */ Object.create(null));
  }
  get(t, e = null) {
    if (e) {
      const i = y(this, Ko, Hc).call(this, t);
      return i.promise.then(() => e(i.data)), null;
    }
    const s = r(this, xe)[t];
    if (!s || s.data === Oa)
      throw new Error(`Requesting object that isn't resolved yet ${t}.`);
    return s.data;
  }
  has(t) {
    const e = r(this, xe)[t];
    return !!e && e.data !== Oa;
  }
  delete(t) {
    const e = r(this, xe)[t];
    return !e || e.data === Oa ? !1 : (delete r(this, xe)[t], !0);
  }
  resolve(t, e = null) {
    const s = y(this, Ko, Hc).call(this, t);
    s.data = e, s.resolve();
  }
  clear() {
    var t;
    for (const e in r(this, xe)) {
      const {
        data: s
      } = r(this, xe)[e];
      (t = s == null ? void 0 : s.bitmap) == null || t.close();
    }
    f(this, xe, /* @__PURE__ */ Object.create(null));
  }
  *[Symbol.iterator]() {
    for (const t in r(this, xe)) {
      const {
        data: e
      } = r(this, xe)[t];
      e !== Oa && (yield [t, e]);
    }
  }
}
xe = new WeakMap(), Ko = new WeakSet(), Hc = function(t) {
  var e;
  return (e = r(this, xe))[t] || (e[t] = {
    ...Promise.withResolvers(),
    data: Oa
  });
};
var zi;
class Ig {
  constructor(t) {
    b(this, zi, null);
    f(this, zi, t), this.onContinue = null;
  }
  get promise() {
    return r(this, zi).capability.promise;
  }
  cancel(t = 0) {
    r(this, zi).cancel(null, t);
  }
  get separateAnnots() {
    const {
      separateAnnots: t
    } = r(this, zi).operatorList;
    if (!t)
      return !1;
    const {
      annotationCanvasMap: e
    } = r(this, zi);
    return t.form || t.canvas && (e == null ? void 0 : e.size) > 0;
  }
}
zi = new WeakMap();
var $i, Gn;
const hn = class hn {
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
    b(this, $i, null);
    this.callback = t, this.params = e, this.objs = s, this.commonObjs = i, this.annotationCanvasMap = n, this.operatorListIdx = null, this.operatorList = a, this._pageIndex = o, this.canvasFactory = l, this.filterFactory = h, this._pdfBug = u, this.pageColors = p, this.running = !1, this.graphicsReadyCallback = null, this.graphicsReady = !1, this._useRequestAnimationFrame = c === !0 && typeof window < "u", this.cancelled = !1, this.capability = Promise.withResolvers(), this.task = new Ig(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = e.canvasContext.canvas;
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
      if (r(hn, Gn).has(this._canvas))
        throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
      r(hn, Gn).add(this._canvas);
    }
    this._pdfBug && ((o = globalThis.StepperManager) != null && o.enabled) && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
    const {
      canvasContext: s,
      viewport: i,
      transform: n,
      background: a
    } = this.params;
    this.gfx = new Tr(s, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
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
    this.running = !1, this.cancelled = !0, (s = this.gfx) == null || s.endDrawing(), r(this, $i) && (window.cancelAnimationFrame(r(this, $i)), f(this, $i, null)), r(hn, Gn).delete(this._canvas), this.callback(t || new _d(`Rendering cancelled, page ${this._pageIndex + 1}`, e));
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
    this._useRequestAnimationFrame ? f(this, $i, window.requestAnimationFrame(() => {
      f(this, $i, null), this._nextBound().catch(this._cancelBound);
    })) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
  }
  async _next() {
    this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1, this.operatorList.lastChunk && (this.gfx.endDrawing(), r(hn, Gn).delete(this._canvas), this.callback())));
  }
};
$i = new WeakMap(), Gn = new WeakMap(), b(hn, Gn, /* @__PURE__ */ new WeakSet());
let zc = hn;
const Dg = "4.10.38", Fg = "f9bea397f";
function su(d) {
  return Math.floor(Math.max(0, Math.min(1, d)) * 255).toString(16).padStart(2, "0");
}
function Ba(d) {
  return Math.max(0, Math.min(255, 255 * d));
}
class iu {
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
    return t = Ba(t), [t, t, t];
  }
  static G_HTML([t]) {
    const e = su(t);
    return `#${e}${e}${e}`;
  }
  static RGB_G([t, e, s]) {
    return ["G", 0.3 * t + 0.59 * e + 0.11 * s];
  }
  static RGB_rgb(t) {
    return t.map(Ba);
  }
  static RGB_HTML(t) {
    return `#${t.map(su).join("")}`;
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
    return [Ba(1 - Math.min(1, t + i)), Ba(1 - Math.min(1, s + i)), Ba(1 - Math.min(1, e + i))];
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
class Ng {
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
class kd extends Ng {
  _createSVG(t) {
    return document.createElementNS(Hs, t);
  }
}
class lp {
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
        a.append(g), o && ro.shouldBuildText(i.name) && h.push(g);
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
      const S = (u = _ == null ? void 0 : _.attributes) != null && u.xmlns ? document.createElementNS(_.attributes.xmlns, v) : document.createElement(v);
      if (A.append(S), _.attributes && this.setAttributes({
        html: S,
        element: _,
        storage: e,
        intent: n,
        linkService: s
      }), ((p = _.children) == null ? void 0 : p.length) > 0)
        c.push([_, -1, S]);
      else if (_.value) {
        const E = document.createTextNode(_.value);
        o && ro.shouldBuildText(v) && h.push(E), S.append(E);
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
const Dl = 1e3, Og = 9, mr = /* @__PURE__ */ new WeakSet();
function Ji(d) {
  return {
    width: d[2] - d[0],
    height: d[3] - d[1]
  };
}
class Bg {
  static create(t) {
    switch (t.data.annotationType) {
      case Rt.LINK:
        return new hp(t);
      case Rt.TEXT:
        return new Hg(t);
      case Rt.WIDGET:
        switch (t.data.fieldType) {
          case "Tx":
            return new zg(t);
          case "Btn":
            return t.data.radioButton ? new up(t) : t.data.checkBox ? new Gg(t) : new Ug(t);
          case "Ch":
            return new jg(t);
          case "Sig":
            return new $g(t);
        }
        return new yr(t);
      case Rt.POPUP:
        return new Gc(t);
      case Rt.FREETEXT:
        return new bp(t);
      case Rt.LINE:
        return new Wg(t);
      case Rt.SQUARE:
        return new Xg(t);
      case Rt.CIRCLE:
        return new qg(t);
      case Rt.POLYLINE:
        return new yp(t);
      case Rt.CARET:
        return new Kg(t);
      case Rt.INK:
        return new Td(t);
      case Rt.POLYGON:
        return new Yg(t);
      case Rt.HIGHLIGHT:
        return new Ap(t);
      case Rt.UNDERLINE:
        return new Qg(t);
      case Rt.SQUIGGLY:
        return new Zg(t);
      case Rt.STRIKEOUT:
        return new Jg(t);
      case Rt.STAMP:
        return new vp(t);
      case Rt.FILEATTACHMENT:
        return new tm(t);
      default:
        return new kt(t);
    }
  }
}
var Un, ra, aa, Qo, $c;
const Id = class Id {
  constructor(t, {
    isRenderable: e = !1,
    ignoreBorder: s = !1,
    createQuadrilaterals: i = !1
  } = {}) {
    b(this, Qo);
    b(this, Un, null);
    b(this, ra, !1);
    b(this, aa, null);
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
    return Id._hasPopupData(this.data);
  }
  updateEdited(t) {
    var s;
    if (!this.container)
      return;
    r(this, Un) || f(this, Un, {
      rect: this.data.rect.slice(0)
    });
    const {
      rect: e
    } = t;
    e && y(this, Qo, $c).call(this, e), (s = r(this, aa)) == null || s.popup.updateEdited(t);
  }
  resetEdited() {
    var t;
    r(this, Un) && (y(this, Qo, $c).call(this, r(this, Un).rect), (t = r(this, aa)) == null || t.popup.resetEdited(), f(this, Un, null));
  }
  _createContainer(t) {
    const {
      data: e,
      parent: {
        page: s,
        viewport: i
      }
    } = this, n = document.createElement("section");
    n.setAttribute("data-annotation-id", e.id), this instanceof yr || (n.tabIndex = Dl);
    const {
      style: a
    } = n;
    if (a.zIndex = this.parent.zIndex++, e.alternativeText && (n.title = e.alternativeText), e.noRotate && n.classList.add("norotate"), !e.rect || this instanceof Gc) {
      const {
        rotation: A
      } = e;
      return !e.hasOwnCanvas && A !== 0 && this.setRotation(A, n), n;
    }
    const {
      width: o,
      height: l
    } = Ji(e.rect);
    if (!t && e.borderStyle.width > 0) {
      a.borderWidth = `${e.borderStyle.width}px`;
      const A = e.borderStyle.horizontalCornerRadius, _ = e.borderStyle.verticalCornerRadius;
      if (A > 0 || _ > 0) {
        const S = `calc(${A}px * var(--scale-factor)) / calc(${_}px * var(--scale-factor))`;
        a.borderRadius = S;
      } else if (this instanceof up) {
        const S = `calc(${o}px * var(--scale-factor)) / calc(${l}px * var(--scale-factor))`;
        a.borderRadius = S;
      }
      switch (e.borderStyle.style) {
        case Fa.SOLID:
          a.borderStyle = "solid";
          break;
        case Fa.DASHED:
          a.borderStyle = "dashed";
          break;
        case Fa.BEVELED:
          q("Unimplemented border style: beveled");
          break;
        case Fa.INSET:
          q("Unimplemented border style: inset");
          break;
        case Fa.UNDERLINE:
          a.borderBottomStyle = "solid";
          break;
      }
      const v = e.borderColor || null;
      v ? (f(this, ra, !0), a.borderColor = G.makeHexColor(v[0] | 0, v[1] | 0, v[2] | 0)) : a.borderWidth = 0;
    }
    const h = G.normalizeRect([e.rect[0], s.view[3] - e.rect[1] + s.view[1], e.rect[2], s.view[3] - e.rect[3] + s.view[1]]), {
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
    } = Ji(this.data.rect);
    let o, l;
    t % 180 === 0 ? (o = 100 * n / s, l = 100 * a / i) : (o = 100 * a / s, l = 100 * n / i), e.style.width = `${o}%`, e.style.height = `${l}%`, e.setAttribute("data-main-rotation", (360 - t) % 360);
  }
  get _commonActions() {
    const t = (e, s, i) => {
      const n = i.detail[e], a = n[0], o = n.slice(1);
      i.target.style[s] = iu[`${a}_HTML`](o), this.annotationStorage.setValue(this.data.id, {
        [s]: iu[`${a}_rgb`](o)
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
      const [A, _, v, S] = t.subarray(2, 6);
      if (i === A && n === _ && e === v && s === S)
        return;
    }
    const {
      style: a
    } = this.container;
    let o;
    if (r(this, ra)) {
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
      const v = t[A], S = t[A + 1], E = t[A + 2], w = t[A + 3], C = c.createElement("rect"), k = (E - e) / l, x = (n - S) / h, T = (v - E) / l, P = (S - w) / h;
      C.setAttribute("x", k), C.setAttribute("y", x), C.setAttribute("width", T), C.setAttribute("height", P), g.append(C), o == null || o.push(`<rect vector-effect="non-scaling-stroke" x="${k}" y="${x}" width="${T}" height="${P}"/>`);
    }
    r(this, ra) && (o.push("</g></svg>')"), a.backgroundImage = o.join("")), this.container.append(u), this.container.style.clipPath = `url(#${m})`;
  }
  _createPopup() {
    const {
      data: t
    } = this, e = f(this, aa, new Gc({
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
          if (h && !mr.has(h)) {
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
      a !== e && mr.has(i) && s.push({
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
Un = new WeakMap(), ra = new WeakMap(), aa = new WeakMap(), Qo = new WeakSet(), $c = function(t) {
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
  } = Ji(t);
  e.left = `${100 * (t[0] - o) / n}%`, e.top = `${100 * (a - t[3] + l) / a}%`, i === 0 ? (e.width = `${100 * h / n}%`, e.height = `${100 * c / a}%`) : this.setRotation(i);
};
let kt = Id;
var Ne, rn, cp, dp;
class hp extends kt {
  constructor(e, s = null) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !!(s != null && s.ignoreBorder),
      createQuadrilaterals: !0
    });
    b(this, Ne);
    this.isTooltipOnly = e.data.isTooltipOnly;
  }
  render() {
    const {
      data: e,
      linkService: s
    } = this, i = document.createElement("a");
    i.setAttribute("data-element-id", e.id);
    let n = !1;
    return e.url ? (s.addLinkAttributes(i, e.url, e.newWindow), n = !0) : e.action ? (this._bindNamedAction(i, e.action), n = !0) : e.attachment ? (y(this, Ne, cp).call(this, i, e.attachment, e.attachmentDest), n = !0) : e.setOCGState ? (y(this, Ne, dp).call(this, i, e.setOCGState), n = !0) : e.dest ? (this._bindLink(i, e.dest), n = !0) : (e.actions && (e.actions.Action || e.actions["Mouse Up"] || e.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions && (this._bindJSAction(i, e), n = !0), e.resetForm ? (this._bindResetFormAction(i, e.resetForm), n = !0) : this.isTooltipOnly && !n && (this._bindLink(i, ""), n = !0)), this.container.classList.add("linkAnnotation"), n && this.container.append(i), this.container;
  }
  _bindLink(e, s) {
    e.href = this.linkService.getDestinationHash(s), e.onclick = () => (s && this.linkService.goToDestination(s), !1), (s || s === "") && y(this, Ne, rn).call(this);
  }
  _bindNamedAction(e, s) {
    e.href = this.linkService.getAnchorUrl(""), e.onclick = () => (this.linkService.executeNamedAction(s), !1), y(this, Ne, rn).call(this);
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
    e.onclick || (e.onclick = () => !1), y(this, Ne, rn).call(this);
  }
  _bindResetFormAction(e, s) {
    const i = e.onclick;
    if (i || (e.href = this.linkService.getAnchorUrl("")), y(this, Ne, rn).call(this), !this._fieldObjects) {
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
          if (!mr.has(m)) {
            q(`_bindResetFormAction - element not allowed: ${g}`);
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
Ne = new WeakSet(), rn = function() {
  this.container.setAttribute("data-internal-link", "");
}, cp = function(e, s, i = null) {
  e.href = this.linkService.getAnchorUrl(""), s.description && (e.title = s.description), e.onclick = () => {
    var n;
    return (n = this.downloadManager) == null || n.openOrDownloadData(s.content, s.filename, i), !1;
  }, y(this, Ne, rn).call(this);
}, dp = function(e, s) {
  e.href = this.linkService.getAnchorUrl(""), e.onclick = () => (this.linkService.executeSetOCGState(s), !1), y(this, Ne, rn).call(this);
};
class Hg extends kt {
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
class yr extends kt {
  render() {
    return this.container;
  }
  showElementAndHideCanvas(t) {
    var e;
    this.data.hasOwnCanvas && (((e = t.previousSibling) == null ? void 0 : e.nodeName) === "CANVAS" && (t.previousSibling.hidden = !0), t.hidden = !1);
  }
  _getKeyModifier(t) {
    return de.platform.isMac ? t.metaKey : t.ctrlKey;
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
    t.style.backgroundColor = e === null ? "transparent" : G.makeHexColor(e[0], e[1], e[2]);
  }
  _setTextStyle(t) {
    const e = ["left", "center", "right"], {
      fontColor: s
    } = this.data.defaultAppearanceData, i = this.data.defaultAppearanceData.fontSize || Og, n = t.style;
    let a;
    const o = 2, l = (h) => Math.round(10 * h) / 10;
    if (this.data.multiLine) {
      const h = Math.abs(this.data.rect[3] - this.data.rect[1] - o), c = Math.round(h / (Qh * i)) || 1, u = h / c;
      a = Math.min(i, l(u / Qh));
    } else {
      const h = Math.abs(this.data.rect[3] - this.data.rect[1] - o);
      a = Math.min(i, l(h / Qh));
    }
    n.fontSize = `calc(${a}px * var(--scale-factor))`, n.color = G.makeHexColor(s[0], s[1], s[2]), this.data.textAlignment !== null && (n.textAlign = e[this.data.textAlignment]);
  }
  _setRequired(t, e) {
    e ? t.setAttribute("required", !0) : t.removeAttribute("required"), t.setAttribute("aria-required", e);
  }
}
class zg extends yr {
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
      this.data.multiLine ? (s = document.createElement("textarea"), s.textContent = h ?? o, this.data.doNotScroll && (s.style.overflowY = "hidden")) : (s = document.createElement("input"), s.type = "text", s.setAttribute("value", h ?? o), this.data.doNotScroll && (s.style.overflowX = "hidden")), this.data.hasOwnCanvas && (s.hidden = !0), mr.add(s), s.setAttribute("data-element-id", e), s.disabled = this.data.readOnly, s.name = this.data.fieldName, s.tabIndex = Dl, this._setRequired(s, this.data.required), l && (s.maxLength = l), s.addEventListener("input", (p) => {
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
              let S = c.userValue;
              !S || S.length <= _ || (S = S.slice(0, _), v.value = c.userValue = S, t.setValue(e, {
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
            selectionEnd: S
          } = A;
          let E = v, w = S;
          switch (g.inputType) {
            case "deleteWordBackward": {
              const k = _.substring(0, v).match(/\w*[^\w]*$/);
              k && (E -= k[0].length);
              break;
            }
            case "deleteWordForward": {
              const k = _.substring(v).match(/^[^\w]*\w*/);
              k && (w += k[0].length);
              break;
            }
            case "deleteContentBackward":
              v === S && (E -= 1);
              break;
            case "deleteContentForward":
              v === S && (w += 1);
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
              selEnd: w
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
class $g extends yr {
  constructor(t) {
    super(t, {
      isRenderable: !!t.data.hasOwnCanvas
    });
  }
}
class Gg extends yr {
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
    return mr.add(n), n.setAttribute("data-element-id", s), n.disabled = e.readOnly, this._setRequired(n, this.data.required), n.type = "checkbox", n.name = e.fieldName, i && n.setAttribute("checked", !0), n.setAttribute("exportValue", e.exportValue), n.tabIndex = Dl, n.addEventListener("change", (a) => {
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
class up extends yr {
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
    if (mr.add(n), n.setAttribute("data-element-id", s), n.disabled = e.readOnly, this._setRequired(n, this.data.required), n.type = "radio", n.name = e.fieldName, i && n.setAttribute("checked", !0), n.tabIndex = Dl, n.addEventListener("change", (a) => {
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
class Ug extends hp {
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
class jg extends yr {
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
    mr.add(i), i.setAttribute("data-element-id", e), i.disabled = this.data.readOnly, this._setRequired(i, this.data.required), i.name = this.data.fieldName, i.tabIndex = Dl;
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
class Gc extends kt {
  constructor(t) {
    const {
      data: e,
      elements: s
    } = t;
    super(t, {
      isRenderable: kt._hasPopupData(e)
    }), this.elements = s, this.popup = null;
  }
  render() {
    this.container.classList.add("popupAnnotation");
    const t = this.popup = new Vg({
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
    return this.container.setAttribute("aria-controls", e.map((s) => `${vd}${s}`).join(",")), this.container;
  }
}
var oa, Fh, Nh, la, jn, wt, ni, ha, Zo, Jo, ca, ri, ns, ai, tl, oi, el, Vn, Wn, ht, th, Uc, pp, fp, gp, mp, eh, sh, jc;
class Vg {
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
    b(this, oa, y(this, ht, gp).bind(this));
    b(this, Fh, y(this, ht, jc).bind(this));
    b(this, Nh, y(this, ht, sh).bind(this));
    b(this, la, y(this, ht, eh).bind(this));
    b(this, jn, null);
    b(this, wt, null);
    b(this, ni, null);
    b(this, ha, null);
    b(this, Zo, null);
    b(this, Jo, null);
    b(this, ca, null);
    b(this, ri, !1);
    b(this, ns, null);
    b(this, ai, null);
    b(this, tl, null);
    b(this, oi, null);
    b(this, el, null);
    b(this, Vn, null);
    b(this, Wn, !1);
    var p;
    f(this, wt, t), f(this, el, i), f(this, ni, a), f(this, oi, o), f(this, Jo, l), f(this, jn, e), f(this, tl, h), f(this, ca, c), f(this, Zo, s), f(this, ha, Sd.toDateObject(n)), this.trigger = s.flatMap((g) => g.getElementsToTriggerPopup());
    for (const g of this.trigger)
      g.addEventListener("click", r(this, la)), g.addEventListener("mouseenter", r(this, Nh)), g.addEventListener("mouseleave", r(this, Fh)), g.classList.add("popupTriggerArea");
    for (const g of s)
      (p = g.container) == null || p.addEventListener("keydown", r(this, oa));
    r(this, wt).hidden = !0, u && y(this, ht, eh).call(this);
  }
  render() {
    if (r(this, ns))
      return;
    const t = f(this, ns, document.createElement("div"));
    if (t.className = "popup", r(this, jn)) {
      const n = t.style.outlineColor = G.makeHexColor(...r(this, jn));
      CSS.supports("background-color", "color-mix(in srgb, red 30%, white)") ? t.style.backgroundColor = `color-mix(in srgb, ${n} 30%, white)` : t.style.backgroundColor = G.makeHexColor(...r(this, jn).map((o) => Math.floor(0.7 * (255 - o) + o)));
    }
    const e = document.createElement("span");
    e.className = "header";
    const s = document.createElement("h1");
    if (e.append(s), {
      dir: s.dir,
      str: s.textContent
    } = r(this, el), t.append(e), r(this, ha)) {
      const n = document.createElement("span");
      n.classList.add("popupDate"), n.setAttribute("data-l10n-id", "pdfjs-annotation-date-time-string"), n.setAttribute("data-l10n-args", JSON.stringify({
        dateObj: r(this, ha).valueOf()
      })), e.append(n);
    }
    const i = r(this, ht, th);
    if (i)
      lp.render({
        xfaHtml: i,
        intent: "richText",
        div: t
      }), t.lastChild.classList.add("richText", "popupContent");
    else {
      const n = this._formatContents(r(this, ni));
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
    r(this, Vn) || f(this, Vn, {
      contentsObj: r(this, ni),
      richText: r(this, oi)
    }), t && f(this, ai, null), e && (f(this, oi, y(this, ht, fp).call(this, e)), f(this, ni, null)), (s = r(this, ns)) == null || s.remove(), f(this, ns, null);
  }
  resetEdited() {
    var t;
    r(this, Vn) && ({
      contentsObj: re(this, ni)._,
      richText: re(this, oi)._
    } = r(this, Vn), f(this, Vn, null), (t = r(this, ns)) == null || t.remove(), f(this, ns, null), f(this, ai, null));
  }
  forceHide() {
    f(this, Wn, this.isVisible), r(this, Wn) && (r(this, wt).hidden = !0);
  }
  maybeShow() {
    r(this, Wn) && (r(this, ns) || y(this, ht, sh).call(this), f(this, Wn, !1), r(this, wt).hidden = !1);
  }
  get isVisible() {
    return r(this, wt).hidden === !1;
  }
}
oa = new WeakMap(), Fh = new WeakMap(), Nh = new WeakMap(), la = new WeakMap(), jn = new WeakMap(), wt = new WeakMap(), ni = new WeakMap(), ha = new WeakMap(), Zo = new WeakMap(), Jo = new WeakMap(), ca = new WeakMap(), ri = new WeakMap(), ns = new WeakMap(), ai = new WeakMap(), tl = new WeakMap(), oi = new WeakMap(), el = new WeakMap(), Vn = new WeakMap(), Wn = new WeakMap(), ht = new WeakSet(), th = function() {
  const t = r(this, oi), e = r(this, ni);
  return t != null && t.str && (!(e != null && e.str) || e.str === t.str) && r(this, oi).html || null;
}, Uc = function() {
  var t, e, s;
  return ((s = (e = (t = r(this, ht, th)) == null ? void 0 : t.attributes) == null ? void 0 : e.style) == null ? void 0 : s.fontSize) || 0;
}, pp = function() {
  var t, e, s;
  return ((s = (e = (t = r(this, ht, th)) == null ? void 0 : t.attributes) == null ? void 0 : e.style) == null ? void 0 : s.color) || null;
}, fp = function(t) {
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
      color: r(this, ht, pp),
      fontSize: r(this, ht, Uc) ? `calc(${r(this, ht, Uc)}px * var(--scale-factor))` : ""
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
}, gp = function(t) {
  t.altKey || t.shiftKey || t.ctrlKey || t.metaKey || (t.key === "Enter" || t.key === "Escape" && r(this, ri)) && y(this, ht, eh).call(this);
}, mp = function() {
  if (r(this, ai) !== null)
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
  } = r(this, Jo);
  let a = !!r(this, ca), o = a ? r(this, ca) : r(this, tl);
  for (const m of r(this, Zo))
    if (!o || G.intersect(m.data.rect, o) !== null) {
      o = m.data.rect, a = !0;
      break;
    }
  const l = G.normalizeRect([o[0], t[3] - o[1] + t[1], o[2], t[3] - o[3] + t[1]]), c = a ? o[2] - o[0] + 5 : 0, u = l[0] + c, p = l[1];
  f(this, ai, [100 * (u - i) / e, 100 * (p - n) / s]);
  const {
    style: g
  } = r(this, wt);
  g.left = `${r(this, ai)[0]}%`, g.top = `${r(this, ai)[1]}%`;
}, eh = function() {
  f(this, ri, !r(this, ri)), r(this, ri) ? (y(this, ht, sh).call(this), r(this, wt).addEventListener("click", r(this, la)), r(this, wt).addEventListener("keydown", r(this, oa))) : (y(this, ht, jc).call(this), r(this, wt).removeEventListener("click", r(this, la)), r(this, wt).removeEventListener("keydown", r(this, oa)));
}, sh = function() {
  r(this, ns) || this.render(), this.isVisible ? r(this, ri) && r(this, wt).classList.add("focused") : (y(this, ht, mp).call(this), r(this, wt).hidden = !1, r(this, wt).style.zIndex = parseInt(r(this, wt).style.zIndex) + 1e3);
}, jc = function() {
  r(this, wt).classList.remove("focused"), !(r(this, ri) || !this.isVisible) && (r(this, wt).hidden = !0, r(this, wt).style.zIndex = parseInt(r(this, wt).style.zIndex) - 1e3);
};
class bp extends kt {
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
var sl;
class Wg extends kt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    b(this, sl, null);
  }
  render() {
    this.container.classList.add("lineAnnotation");
    const e = this.data, {
      width: s,
      height: i
    } = Ji(e.rect), n = this.svgFactory.create(s, i, !0), a = f(this, sl, this.svgFactory.createElement("svg:line"));
    return a.setAttribute("x1", e.rect[2] - e.lineCoordinates[0]), a.setAttribute("y1", e.rect[3] - e.lineCoordinates[1]), a.setAttribute("x2", e.rect[2] - e.lineCoordinates[2]), a.setAttribute("y2", e.rect[3] - e.lineCoordinates[3]), a.setAttribute("stroke-width", e.borderStyle.width || 1), a.setAttribute("stroke", "transparent"), a.setAttribute("fill", "transparent"), n.append(a), this.container.append(n), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return r(this, sl);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
sl = new WeakMap();
var il;
class Xg extends kt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    b(this, il, null);
  }
  render() {
    this.container.classList.add("squareAnnotation");
    const e = this.data, {
      width: s,
      height: i
    } = Ji(e.rect), n = this.svgFactory.create(s, i, !0), a = e.borderStyle.width, o = f(this, il, this.svgFactory.createElement("svg:rect"));
    return o.setAttribute("x", a / 2), o.setAttribute("y", a / 2), o.setAttribute("width", s - a), o.setAttribute("height", i - a), o.setAttribute("stroke-width", a || 1), o.setAttribute("stroke", "transparent"), o.setAttribute("fill", "transparent"), n.append(o), this.container.append(n), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return r(this, il);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
il = new WeakMap();
var nl;
class qg extends kt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    b(this, nl, null);
  }
  render() {
    this.container.classList.add("circleAnnotation");
    const e = this.data, {
      width: s,
      height: i
    } = Ji(e.rect), n = this.svgFactory.create(s, i, !0), a = e.borderStyle.width, o = f(this, nl, this.svgFactory.createElement("svg:ellipse"));
    return o.setAttribute("cx", s / 2), o.setAttribute("cy", i / 2), o.setAttribute("rx", s / 2 - a / 2), o.setAttribute("ry", i / 2 - a / 2), o.setAttribute("stroke-width", a || 1), o.setAttribute("stroke", "transparent"), o.setAttribute("fill", "transparent"), n.append(o), this.container.append(n), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return r(this, nl);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
nl = new WeakMap();
var rl;
class yp extends kt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    b(this, rl, null);
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
    } = Ji(e), l = this.svgFactory.create(a, o, !0);
    let h = [];
    for (let u = 0, p = s.length; u < p; u += 2) {
      const g = s[u] - e[0], m = e[3] - s[u + 1];
      h.push(`${g},${m}`);
    }
    h = h.join(" ");
    const c = f(this, rl, this.svgFactory.createElement(this.svgElementName));
    return c.setAttribute("points", h), c.setAttribute("stroke-width", i.width || 1), c.setAttribute("stroke", "transparent"), c.setAttribute("fill", "transparent"), l.append(c), this.container.append(l), !n && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return r(this, rl);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
rl = new WeakMap();
class Yg extends yp {
  constructor(t) {
    super(t), this.containerClassName = "polygonAnnotation", this.svgElementName = "svg:polygon";
  }
}
class Kg extends kt {
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
var al, Xn, ol, Vc;
class Td extends kt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    b(this, ol);
    b(this, al, null);
    b(this, Xn, []);
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
    } = y(this, ol, Vc).call(this, s, e), c = this.svgFactory.create(l, h, !0), u = f(this, al, this.svgFactory.createElement("svg:g"));
    c.append(u), u.setAttribute("stroke-width", n.width || 1), u.setAttribute("stroke-linecap", "round"), u.setAttribute("stroke-linejoin", "round"), u.setAttribute("stroke-miterlimit", 10), u.setAttribute("stroke", "transparent"), u.setAttribute("fill", "transparent"), u.setAttribute("transform", o);
    for (let p = 0, g = i.length; p < g; p++) {
      const m = this.svgFactory.createElement(this.svgElementName);
      r(this, Xn).push(m), m.setAttribute("points", i[p].join(",")), u.append(m);
    }
    return !a && this.hasPopupData && this._createPopup(), this.container.append(c), this._editOnDoubleClick(), this.container;
  }
  updateEdited(e) {
    super.updateEdited(e);
    const {
      thickness: s,
      points: i,
      rect: n
    } = e, a = r(this, al);
    if (s >= 0 && a.setAttribute("stroke-width", s || 1), i)
      for (let o = 0, l = r(this, Xn).length; o < l; o++)
        r(this, Xn)[o].setAttribute("points", i[o].join(","));
    if (n) {
      const {
        transform: o,
        width: l,
        height: h
      } = y(this, ol, Vc).call(this, this.data.rotation, n);
      a.parentElement.setAttribute("viewBox", `0 0 ${l} ${h}`), a.setAttribute("transform", o);
    }
  }
  getElementsToTriggerPopup() {
    return r(this, Xn);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
al = new WeakMap(), Xn = new WeakMap(), ol = new WeakSet(), Vc = function(e, s) {
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
class Ap extends kt {
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
class Qg extends kt {
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
class Zg extends kt {
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
class Jg extends kt {
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
class vp extends kt {
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
var ll, hl, Wc;
class tm extends kt {
  constructor(e) {
    var i;
    super(e, {
      isRenderable: !0
    });
    b(this, hl);
    b(this, ll, null);
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
    s.hasAppearance || s.fillAlpha === 0 ? i = document.createElement("div") : (i = document.createElement("img"), i.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(s.name) ? "paperclip" : "pushpin"}.svg`, s.fillAlpha && s.fillAlpha < 1 && (i.style = `filter: opacity(${Math.round(s.fillAlpha * 100)}%);`)), i.addEventListener("dblclick", y(this, hl, Wc).bind(this)), f(this, ll, i);
    const {
      isMac: n
    } = de.platform;
    return e.addEventListener("keydown", (a) => {
      a.key === "Enter" && (n ? a.metaKey : a.ctrlKey) && y(this, hl, Wc).call(this);
    }), !s.popupRef && this.hasPopupData ? this._createPopup() : i.classList.add("popupTriggerArea"), e.append(i), e;
  }
  getElementsToTriggerPopup() {
    return r(this, ll);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
ll = new WeakMap(), hl = new WeakSet(), Wc = function() {
  var e;
  (e = this.downloadManager) == null || e.openOrDownloadData(this.content, this.filename);
};
var cl, qn, Yn, dl, br, _p, Xc;
class em {
  constructor({
    div: t,
    accessibilityManager: e,
    annotationCanvasMap: s,
    annotationEditorUIManager: i,
    page: n,
    viewport: a,
    structTreeLayer: o
  }) {
    b(this, br);
    b(this, cl, null);
    b(this, qn, null);
    b(this, Yn, /* @__PURE__ */ new Map());
    b(this, dl, null);
    this.div = t, f(this, cl, e), f(this, qn, s), f(this, dl, o || null), this.page = n, this.viewport = a, this.zIndex = 0, this._annotationEditorUIManager = i;
  }
  hasEditableAnnotations() {
    return r(this, Yn).size > 0;
  }
  async render(t) {
    var a;
    const {
      annotations: e
    } = t, s = this.div;
    fr(s, this.viewport);
    const i = /* @__PURE__ */ new Map(), n = {
      data: null,
      layer: s,
      linkService: t.linkService,
      downloadManager: t.downloadManager,
      imageResourcesPath: t.imageResourcesPath || "",
      renderForms: t.renderForms !== !1,
      svgFactory: new kd(),
      annotationStorage: t.annotationStorage || new Cd(),
      enableScripting: t.enableScripting === !0,
      hasJSActions: t.hasJSActions,
      fieldObjects: t.fieldObjects,
      parent: this,
      elements: null
    };
    for (const o of e) {
      if (o.noHTML)
        continue;
      const l = o.annotationType === Rt.POPUP;
      if (l) {
        const u = i.get(o.id);
        if (!u)
          continue;
        n.elements = u;
      } else {
        const {
          width: u,
          height: p
        } = Ji(o.rect);
        if (u <= 0 || p <= 0)
          continue;
      }
      n.data = o;
      const h = Bg.create(n);
      if (!h.isRenderable)
        continue;
      if (!l && o.popupRef) {
        const u = i.get(o.popupRef);
        u ? u.push(h) : i.set(o.popupRef, [h]);
      }
      const c = h.render();
      o.hidden && (c.style.visibility = "hidden"), await y(this, br, _p).call(this, c, o.id), h._isEditable && (r(this, Yn).set(h.data.id, h), (a = this._annotationEditorUIManager) == null || a.renderAnnotationElement(h));
    }
    y(this, br, Xc).call(this);
  }
  update({
    viewport: t
  }) {
    const e = this.div;
    this.viewport = t, fr(e, {
      rotation: t.rotation
    }), y(this, br, Xc).call(this), e.hidden = !1;
  }
  getEditableAnnotations() {
    return Array.from(r(this, Yn).values());
  }
  getEditableAnnotation(t) {
    return r(this, Yn).get(t);
  }
}
cl = new WeakMap(), qn = new WeakMap(), Yn = new WeakMap(), dl = new WeakMap(), br = new WeakSet(), _p = async function(t, e) {
  var a, o;
  const s = t.firstChild || t, i = s.id = `${vd}${e}`, n = await ((a = r(this, dl)) == null ? void 0 : a.getAriaAttributes(i));
  if (n)
    for (const [l, h] of n)
      s.setAttribute(l, h);
  this.div.append(t), (o = r(this, cl)) == null || o.moveElementInDOM(this.div, t, s, !1);
}, Xc = function() {
  if (!r(this, qn))
    return;
  const t = this.div;
  for (const [e, s] of r(this, qn)) {
    const i = t.querySelector(`[data-annotation-id="${e}"]`);
    if (!i)
      continue;
    s.className = "annotationContent";
    const {
      firstChild: n
    } = i;
    n ? n.nodeName === "CANVAS" ? n.replaceWith(s) : n.classList.contains("annotationContent") ? n.after(s) : n.before(s) : i.append(s);
  }
  r(this, qn).clear();
};
const Bl = /\r\n?|\n/g;
var rs, ke, ul, Kn, Te, Mt, wp, Sp, Ep, ih, bi, nh, rh, Cp, Yc, xp;
const dt = class dt extends vt {
  constructor(e) {
    super({
      ...e,
      name: "freeTextEditor"
    });
    b(this, Mt);
    b(this, rs);
    b(this, ke, "");
    b(this, ul, `${this.id}-editor`);
    b(this, Kn, null);
    b(this, Te);
    f(this, rs, e.color || dt._defaultColor || vt._defaultLineColor), f(this, Te, e.fontSize || dt._defaultFontSize);
  }
  static get _keyboardManager() {
    const e = dt.prototype, s = (a) => a.isEmpty(), i = gr.TRANSLATE_SMALL, n = gr.TRANSLATE_BIG;
    return J(this, "_keyboardManager", new Il([[["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], e.commitOrRemove, {
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
      case tt.FREETEXT_SIZE:
        dt._defaultFontSize = s;
        break;
      case tt.FREETEXT_COLOR:
        dt._defaultColor = s;
        break;
    }
  }
  updateParams(e, s) {
    switch (e) {
      case tt.FREETEXT_SIZE:
        y(this, Mt, wp).call(this, s);
        break;
      case tt.FREETEXT_COLOR:
        y(this, Mt, Sp).call(this, s);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[tt.FREETEXT_SIZE, dt._defaultFontSize], [tt.FREETEXT_COLOR, dt._defaultColor || vt._defaultLineColor]];
  }
  get propertiesToUpdate() {
    return [[tt.FREETEXT_SIZE, r(this, Te)], [tt.FREETEXT_COLOR, r(this, rs)]];
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
    this.parent.setEditingState(!1), this.parent.updateToolbar(X.FREETEXT), super.enableEditMode(), this.overlayDiv.classList.remove("enabled"), this.editorDiv.contentEditable = !0, this._isDraggable = !1, this.div.removeAttribute("aria-activedescendant"), f(this, Kn, new AbortController());
    const e = this._uiManager.combinedSignal(r(this, Kn));
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
    this.isInEditMode() && (this.parent.setEditingState(!0), super.disableEditMode(), this.overlayDiv.classList.add("enabled"), this.editorDiv.contentEditable = !1, this.div.setAttribute("aria-activedescendant", r(this, ul)), this._isDraggable = !0, (e = r(this, Kn)) == null || e.abort(), f(this, Kn, null), this.div.focus({
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
    const e = r(this, ke), s = f(this, ke, y(this, Mt, Ep).call(this).trimEnd());
    if (e === s)
      return;
    const i = (n) => {
      if (f(this, ke, n), !n) {
        this.remove();
        return;
      }
      y(this, Mt, rh).call(this), this._uiManager.rebuild(this), y(this, Mt, ih).call(this);
    };
    this.addCommands({
      cmd: () => {
        i(s);
      },
      undo: () => {
        i(e);
      },
      mustExec: !1
    }), y(this, Mt, ih).call(this);
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
    this.width && (e = this.x, s = this.y), super.render(), this.editorDiv = document.createElement("div"), this.editorDiv.className = "internal", this.editorDiv.setAttribute("id", r(this, ul)), this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text2"), this.editorDiv.setAttribute("data-l10n-attrs", "default-content"), this.enableEditing(), this.editorDiv.contentEditable = !0;
    const {
      style: i
    } = this.editorDiv;
    if (i.fontSize = `calc(${r(this, Te)}px * var(--scale-factor))`, i.color = r(this, rs), this.div.append(this.editorDiv), this.overlayDiv = document.createElement("div"), this.overlayDiv.classList.add("overlay", "enabled"), this.div.append(this.overlayDiv), mh(this, this.div, ["dblclick", "keydown"]), this.width) {
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
      y(this, Mt, rh).call(this), this._isDraggable = !0, this.editorDiv.contentEditable = !1;
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
    const n = y(m = dt, bi, Yc).call(m, s.getData("text") || "").replaceAll(Bl, `
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
      if (u.push(l.nodeValue.slice(h).replaceAll(Bl, "")), v !== this.editorDiv) {
        let S = c;
        for (const E of this.editorDiv.childNodes) {
          if (E === v) {
            S = u;
            continue;
          }
          S.push(y(A = dt, bi, nh).call(A, E));
        }
      }
      c.push(l.nodeValue.slice(0, h).replaceAll(Bl, ""));
    } else if (l === this.editorDiv) {
      let v = c, S = 0;
      for (const E of this.editorDiv.childNodes)
        S++ === h && (v = u), v.push(y(_ = dt, bi, nh).call(_, E));
    }
    f(this, ke, `${c.join(`
`)}${n}${u.join(`
`)}`), y(this, Mt, rh).call(this);
    const p = new Range();
    let g = c.reduce((v, S) => v + S.length, 0);
    for (const {
      firstChild: v
    } of this.editorDiv.childNodes)
      if (v.nodeType === Node.TEXT_NODE) {
        const S = v.nodeValue.length;
        if (g <= S) {
          p.setStart(v, g), p.setEnd(v, g);
          break;
        }
        g -= S;
      }
    a.removeAllRanges(), a.addRange(p);
  }
  get contentDiv() {
    return this.editorDiv;
  }
  static async deserialize(e, s, i) {
    var o;
    let n = null;
    if (e instanceof bp) {
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
        annotationType: X.FREETEXT,
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
    return f(a, Te, e.fontSize), f(a, rs, G.makeHexColor(...e.color)), f(a, ke, y(o = dt, bi, Yc).call(o, e.value)), a.annotationElementId = e.id || null, a._initialData = n, a;
  }
  serialize(e = !1) {
    if (this.isEmpty())
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const s = dt._internalPadding * this.parentScale, i = this.getRect(s, s), n = vt._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : r(this, rs)), a = {
      annotationType: X.FREETEXT,
      color: n,
      fontSize: r(this, Te),
      value: y(this, Mt, Cp).call(this),
      pageIndex: this.pageIndex,
      rect: i,
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId
    };
    return e ? a : this.annotationElementId && !y(this, Mt, xp).call(this, a) ? null : (a.id = this.annotationElementId, a);
  }
  renderAnnotationElement(e) {
    const s = super.renderAnnotationElement(e);
    if (this.deleted)
      return s;
    const {
      style: i
    } = s;
    i.fontSize = `calc(${r(this, Te)}px * var(--scale-factor))`, i.color = r(this, rs), s.replaceChildren();
    for (const a of r(this, ke).split(`
`)) {
      const o = document.createElement("div");
      o.append(a ? document.createTextNode(a) : document.createElement("br")), s.append(o);
    }
    const n = dt._internalPadding * this.parentScale;
    return e.updateEdited({
      rect: this.getRect(n, n),
      popupContent: r(this, ke)
    }), s;
  }
  resetAnnotationElement(e) {
    super.resetAnnotationElement(e), e.resetEdited();
  }
};
rs = new WeakMap(), ke = new WeakMap(), ul = new WeakMap(), Kn = new WeakMap(), Te = new WeakMap(), Mt = new WeakSet(), wp = function(e) {
  const s = (n) => {
    this.editorDiv.style.fontSize = `calc(${n}px * var(--scale-factor))`, this.translate(0, -(n - r(this, Te)) * this.parentScale), f(this, Te, n), y(this, Mt, ih).call(this);
  }, i = r(this, Te);
  this.addCommands({
    cmd: s.bind(this, e),
    undo: s.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: tt.FREETEXT_SIZE,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, Sp = function(e) {
  const s = (n) => {
    f(this, rs, this.editorDiv.style.color = n);
  }, i = r(this, rs);
  this.addCommands({
    cmd: s.bind(this, e),
    undo: s.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: tt.FREETEXT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, Ep = function() {
  var i;
  const e = [];
  this.editorDiv.normalize();
  let s = null;
  for (const n of this.editorDiv.childNodes)
    (s == null ? void 0 : s.nodeType) === Node.TEXT_NODE && n.nodeName === "BR" || (e.push(y(i = dt, bi, nh).call(i, n)), s = n);
  return e.join(`
`);
}, ih = function() {
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
}, bi = new WeakSet(), nh = function(e) {
  return (e.nodeType === Node.TEXT_NODE ? e.nodeValue : e.innerText).replaceAll(Bl, "");
}, rh = function() {
  if (this.editorDiv.replaceChildren(), !!r(this, ke))
    for (const e of r(this, ke).split(`
`)) {
      const s = document.createElement("div");
      s.append(e ? document.createTextNode(e) : document.createElement("br")), this.editorDiv.append(s);
    }
}, Cp = function() {
  return r(this, ke).replaceAll(" ", " ");
}, Yc = function(e) {
  return e.replaceAll(" ", " ");
}, xp = function(e) {
  const {
    value: s,
    fontSize: i,
    color: n,
    pageIndex: a
  } = this._initialData;
  return this._hasBeenMoved || e.value !== s || e.fontSize !== i || e.color.some((o, l) => o !== n[l]) || e.pageIndex !== a;
}, b(dt, bi), U(dt, "_freeTextDefaultContent", ""), U(dt, "_internalPadding", 0), U(dt, "_defaultColor", null), U(dt, "_defaultFontSize", 10), U(dt, "_type", "freetext"), U(dt, "_editorType", X.FREETEXT);
let qc = dt;
class N {
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
U(N, "PRECISION", 1e-4);
var Pe, as, da, ua, Ps, Z, Qn, Zn, pl, fl, pa, fa, Gi, gl, Oh, Bh, Nt, Ya, kp, Tp, Pp, Mp, Lp, Rp;
const Us = class Us {
  constructor({
    x: t,
    y: e
  }, s, i, n, a, o = 0) {
    b(this, Nt);
    b(this, Pe);
    b(this, as, []);
    b(this, da);
    b(this, ua);
    b(this, Ps, []);
    b(this, Z, new Float32Array(18));
    b(this, Qn);
    b(this, Zn);
    b(this, pl);
    b(this, fl);
    b(this, pa);
    b(this, fa);
    b(this, Gi, []);
    f(this, Pe, s), f(this, fa, n * i), f(this, ua, a), r(this, Z).set([NaN, NaN, NaN, NaN, t, e], 6), f(this, da, o), f(this, fl, r(Us, gl) * i), f(this, pl, r(Us, Bh) * i), f(this, pa, i), r(this, Gi).push(t, e);
  }
  isEmpty() {
    return isNaN(r(this, Z)[8]);
  }
  add({
    x: t,
    y: e
  }) {
    var P;
    f(this, Qn, t), f(this, Zn, e);
    const [s, i, n, a] = r(this, Pe);
    let [o, l, h, c] = r(this, Z).subarray(8, 12);
    const u = t - h, p = e - c, g = Math.hypot(u, p);
    if (g < r(this, pl))
      return !1;
    const m = g - r(this, fl), A = m / g, _ = A * u, v = A * p;
    let S = o, E = l;
    o = h, l = c, h += _, c += v, (P = r(this, Gi)) == null || P.push(t, e);
    const w = -v / m, C = _ / m, k = w * r(this, fa), x = C * r(this, fa);
    return r(this, Z).set(r(this, Z).subarray(2, 8), 0), r(this, Z).set([h + k, c + x], 4), r(this, Z).set(r(this, Z).subarray(14, 18), 12), r(this, Z).set([h - k, c - x], 16), isNaN(r(this, Z)[6]) ? (r(this, Ps).length === 0 && (r(this, Z).set([o + k, l + x], 2), r(this, Ps).push(NaN, NaN, NaN, NaN, (o + k - s) / n, (l + x - i) / a), r(this, Z).set([o - k, l - x], 14), r(this, as).push(NaN, NaN, NaN, NaN, (o - k - s) / n, (l - x - i) / a)), r(this, Z).set([S, E, o, l, h, c], 6), !this.isEmpty()) : (r(this, Z).set([S, E, o, l, h, c], 6), Math.abs(Math.atan2(E - l, S - o) - Math.atan2(v, _)) < Math.PI / 2 ? ([o, l, h, c] = r(this, Z).subarray(2, 6), r(this, Ps).push(NaN, NaN, NaN, NaN, ((o + h) / 2 - s) / n, ((l + c) / 2 - i) / a), [o, l, S, E] = r(this, Z).subarray(14, 18), r(this, as).push(NaN, NaN, NaN, NaN, ((S + o) / 2 - s) / n, ((E + l) / 2 - i) / a), !0) : ([S, E, o, l, h, c] = r(this, Z).subarray(0, 6), r(this, Ps).push(((S + 5 * o) / 6 - s) / n, ((E + 5 * l) / 6 - i) / a, ((5 * o + h) / 6 - s) / n, ((5 * l + c) / 6 - i) / a, ((o + h) / 2 - s) / n, ((l + c) / 2 - i) / a), [h, c, o, l, S, E] = r(this, Z).subarray(12, 18), r(this, as).push(((S + 5 * o) / 6 - s) / n, ((E + 5 * l) / 6 - i) / a, ((5 * o + h) / 6 - s) / n, ((5 * l + c) / 6 - i) / a, ((o + h) / 2 - s) / n, ((l + c) / 2 - i) / a), !0));
  }
  toSVGPath() {
    if (this.isEmpty())
      return "";
    const t = r(this, Ps), e = r(this, as);
    if (isNaN(r(this, Z)[6]) && !this.isEmpty())
      return y(this, Nt, kp).call(this);
    const s = [];
    s.push(`M${t[4]} ${t[5]}`);
    for (let i = 6; i < t.length; i += 6)
      isNaN(t[i]) ? s.push(`L${t[i + 4]} ${t[i + 5]}`) : s.push(`C${t[i]} ${t[i + 1]} ${t[i + 2]} ${t[i + 3]} ${t[i + 4]} ${t[i + 5]}`);
    y(this, Nt, Pp).call(this, s);
    for (let i = e.length - 6; i >= 6; i -= 6)
      isNaN(e[i]) ? s.push(`L${e[i + 4]} ${e[i + 5]}`) : s.push(`C${e[i]} ${e[i + 1]} ${e[i + 2]} ${e[i + 3]} ${e[i + 4]} ${e[i + 5]}`);
    return y(this, Nt, Tp).call(this, s), s.join(" ");
  }
  newFreeDrawOutline(t, e, s, i, n, a) {
    return new Ip(t, e, s, i, n, a);
  }
  getOutlines() {
    var u;
    const t = r(this, Ps), e = r(this, as), s = r(this, Z), [i, n, a, o] = r(this, Pe), l = new Float32Array((((u = r(this, Gi)) == null ? void 0 : u.length) ?? 0) + 2);
    for (let p = 0, g = l.length - 2; p < g; p += 2)
      l[p] = (r(this, Gi)[p] - i) / a, l[p + 1] = (r(this, Gi)[p + 1] - n) / o;
    if (l[l.length - 2] = (r(this, Qn) - i) / a, l[l.length - 1] = (r(this, Zn) - n) / o, isNaN(s[6]) && !this.isEmpty())
      return y(this, Nt, Mp).call(this, l);
    const h = new Float32Array(r(this, Ps).length + 24 + r(this, as).length);
    let c = t.length;
    for (let p = 0; p < c; p += 2) {
      if (isNaN(t[p])) {
        h[p] = h[p + 1] = NaN;
        continue;
      }
      h[p] = t[p], h[p + 1] = t[p + 1];
    }
    c = y(this, Nt, Rp).call(this, h, c);
    for (let p = e.length - 6; p >= 6; p -= 6)
      for (let g = 0; g < 6; g += 2) {
        if (isNaN(e[p + g])) {
          h[c] = h[c + 1] = NaN, c += 2;
          continue;
        }
        h[c] = e[p + g], h[c + 1] = e[p + g + 1], c += 2;
      }
    return y(this, Nt, Lp).call(this, h, c), this.newFreeDrawOutline(h, l, r(this, Pe), r(this, pa), r(this, da), r(this, ua));
  }
};
Pe = new WeakMap(), as = new WeakMap(), da = new WeakMap(), ua = new WeakMap(), Ps = new WeakMap(), Z = new WeakMap(), Qn = new WeakMap(), Zn = new WeakMap(), pl = new WeakMap(), fl = new WeakMap(), pa = new WeakMap(), fa = new WeakMap(), Gi = new WeakMap(), gl = new WeakMap(), Oh = new WeakMap(), Bh = new WeakMap(), Nt = new WeakSet(), Ya = function() {
  const t = r(this, Z).subarray(4, 6), e = r(this, Z).subarray(16, 18), [s, i, n, a] = r(this, Pe);
  return [(r(this, Qn) + (t[0] - e[0]) / 2 - s) / n, (r(this, Zn) + (t[1] - e[1]) / 2 - i) / a, (r(this, Qn) + (e[0] - t[0]) / 2 - s) / n, (r(this, Zn) + (e[1] - t[1]) / 2 - i) / a];
}, kp = function() {
  const [t, e, s, i] = r(this, Pe), [n, a, o, l] = y(this, Nt, Ya).call(this);
  return `M${(r(this, Z)[2] - t) / s} ${(r(this, Z)[3] - e) / i} L${(r(this, Z)[4] - t) / s} ${(r(this, Z)[5] - e) / i} L${n} ${a} L${o} ${l} L${(r(this, Z)[16] - t) / s} ${(r(this, Z)[17] - e) / i} L${(r(this, Z)[14] - t) / s} ${(r(this, Z)[15] - e) / i} Z`;
}, Tp = function(t) {
  const e = r(this, as);
  t.push(`L${e[4]} ${e[5]} Z`);
}, Pp = function(t) {
  const [e, s, i, n] = r(this, Pe), a = r(this, Z).subarray(4, 6), o = r(this, Z).subarray(16, 18), [l, h, c, u] = y(this, Nt, Ya).call(this);
  t.push(`L${(a[0] - e) / i} ${(a[1] - s) / n} L${l} ${h} L${c} ${u} L${(o[0] - e) / i} ${(o[1] - s) / n}`);
}, Mp = function(t) {
  const e = r(this, Z), [s, i, n, a] = r(this, Pe), [o, l, h, c] = y(this, Nt, Ya).call(this), u = new Float32Array(36);
  return u.set([NaN, NaN, NaN, NaN, (e[2] - s) / n, (e[3] - i) / a, NaN, NaN, NaN, NaN, (e[4] - s) / n, (e[5] - i) / a, NaN, NaN, NaN, NaN, o, l, NaN, NaN, NaN, NaN, h, c, NaN, NaN, NaN, NaN, (e[16] - s) / n, (e[17] - i) / a, NaN, NaN, NaN, NaN, (e[14] - s) / n, (e[15] - i) / a], 0), this.newFreeDrawOutline(u, t, r(this, Pe), r(this, pa), r(this, da), r(this, ua));
}, Lp = function(t, e) {
  const s = r(this, as);
  return t.set([NaN, NaN, NaN, NaN, s[4], s[5]], e), e += 6;
}, Rp = function(t, e) {
  const s = r(this, Z).subarray(4, 6), i = r(this, Z).subarray(16, 18), [n, a, o, l] = r(this, Pe), [h, c, u, p] = y(this, Nt, Ya).call(this);
  return t.set([NaN, NaN, NaN, NaN, (s[0] - n) / o, (s[1] - a) / l, NaN, NaN, NaN, NaN, h, c, NaN, NaN, NaN, NaN, u, p, NaN, NaN, NaN, NaN, (i[0] - n) / o, (i[1] - a) / l], e), e += 24;
}, b(Us, gl, 8), b(Us, Oh, 2), b(Us, Bh, r(Us, gl) + r(Us, Oh));
let Ah = Us;
var ga, Jn, li, ml, Me, bl, xt, Hh, Dp;
class Ip extends N {
  constructor(e, s, i, n, a, o) {
    super();
    b(this, Hh);
    b(this, ga);
    b(this, Jn, new Float32Array(4));
    b(this, li);
    b(this, ml);
    b(this, Me);
    b(this, bl);
    b(this, xt);
    f(this, xt, e), f(this, Me, s), f(this, ga, i), f(this, bl, n), f(this, li, a), f(this, ml, o), this.lastPoint = [NaN, NaN], y(this, Hh, Dp).call(this, o);
    const [l, h, c, u] = r(this, Jn);
    for (let p = 0, g = e.length; p < g; p += 2)
      e[p] = (e[p] - l) / c, e[p + 1] = (e[p + 1] - h) / u;
    for (let p = 0, g = s.length; p < g; p += 2)
      s[p] = (s[p] - l) / c, s[p + 1] = (s[p + 1] - h) / u;
  }
  toSVGPath() {
    const e = [`M${r(this, xt)[4]} ${r(this, xt)[5]}`];
    for (let s = 6, i = r(this, xt).length; s < i; s += 6) {
      if (isNaN(r(this, xt)[s])) {
        e.push(`L${r(this, xt)[s + 4]} ${r(this, xt)[s + 5]}`);
        continue;
      }
      e.push(`C${r(this, xt)[s]} ${r(this, xt)[s + 1]} ${r(this, xt)[s + 2]} ${r(this, xt)[s + 3]} ${r(this, xt)[s + 4]} ${r(this, xt)[s + 5]}`);
    }
    return e.push("Z"), e.join(" ");
  }
  serialize([e, s, i, n], a) {
    const o = i - e, l = n - s;
    let h, c;
    switch (a) {
      case 0:
        h = N._rescale(r(this, xt), e, n, o, -l), c = N._rescale(r(this, Me), e, n, o, -l);
        break;
      case 90:
        h = N._rescaleAndSwap(r(this, xt), e, s, o, l), c = N._rescaleAndSwap(r(this, Me), e, s, o, l);
        break;
      case 180:
        h = N._rescale(r(this, xt), i, s, -o, l), c = N._rescale(r(this, Me), i, s, -o, l);
        break;
      case 270:
        h = N._rescaleAndSwap(r(this, xt), i, n, -o, -l), c = N._rescaleAndSwap(r(this, Me), i, n, -o, -l);
        break;
    }
    return {
      outline: Array.from(h),
      points: [Array.from(c)]
    };
  }
  get box() {
    return r(this, Jn);
  }
  newOutliner(e, s, i, n, a, o = 0) {
    return new Ah(e, s, i, n, a, o);
  }
  getNewOutline(e, s) {
    const [i, n, a, o] = r(this, Jn), [l, h, c, u] = r(this, ga), p = a * c, g = o * u, m = i * c + l, A = n * u + h, _ = this.newOutliner({
      x: r(this, Me)[0] * p + m,
      y: r(this, Me)[1] * g + A
    }, r(this, ga), r(this, bl), e, r(this, ml), s ?? r(this, li));
    for (let v = 2; v < r(this, Me).length; v += 2)
      _.add({
        x: r(this, Me)[v] * p + m,
        y: r(this, Me)[v + 1] * g + A
      });
    return _.getOutlines();
  }
}
ga = new WeakMap(), Jn = new WeakMap(), li = new WeakMap(), ml = new WeakMap(), Me = new WeakMap(), bl = new WeakMap(), xt = new WeakMap(), Hh = new WeakSet(), Dp = function(e) {
  const s = r(this, xt);
  let i = s[4], n = s[5], a = i, o = n, l = i, h = n, c = i, u = n;
  const p = e ? Math.max : Math.min;
  for (let m = 6, A = s.length; m < A; m += 6) {
    if (isNaN(s[m]))
      a = Math.min(a, s[m + 4]), o = Math.min(o, s[m + 5]), l = Math.max(l, s[m + 4]), h = Math.max(h, s[m + 5]), u < s[m + 5] ? (c = s[m + 4], u = s[m + 5]) : u === s[m + 5] && (c = p(c, s[m + 4]));
    else {
      const _ = G.bezierBoundingBox(i, n, ...s.slice(m, m + 6));
      a = Math.min(a, _[0]), o = Math.min(o, _[1]), l = Math.max(l, _[2]), h = Math.max(h, _[3]), u < _[3] ? (c = _[2], u = _[3]) : u === _[3] && (c = p(c, _[2]));
    }
    i = s[m + 4], n = s[m + 5];
  }
  const g = r(this, Jn);
  g[0] = a - r(this, li), g[1] = o - r(this, li), g[2] = l - a + 2 * r(this, li), g[3] = h - o + 2 * r(this, li), this.lastPoint = [c, u];
};
var yl, Al, Ui, os, pe, Fp, ah, Np, Op, Qc;
class Kc {
  constructor(t, e = 0, s = 0, i = !0) {
    b(this, pe);
    b(this, yl);
    b(this, Al);
    b(this, Ui, []);
    b(this, os, []);
    let n = 1 / 0, a = -1 / 0, o = 1 / 0, l = -1 / 0;
    const h = 10 ** -4;
    for (const {
      x: _,
      y: v,
      width: S,
      height: E
    } of t) {
      const w = Math.floor((_ - e) / h) * h, C = Math.ceil((_ + S + e) / h) * h, k = Math.floor((v - e) / h) * h, x = Math.ceil((v + E + e) / h) * h, T = [w, k, x, !0], P = [C, k, x, !1];
      r(this, Ui).push(T, P), n = Math.min(n, w), a = Math.max(a, C), o = Math.min(o, k), l = Math.max(l, x);
    }
    const c = a - n + 2 * s, u = l - o + 2 * s, p = n - s, g = o - s, m = r(this, Ui).at(i ? -1 : -2), A = [m[0], m[2]];
    for (const _ of r(this, Ui)) {
      const [v, S, E] = _;
      _[0] = (v - p) / c, _[1] = (S - g) / u, _[2] = (E - g) / u;
    }
    f(this, yl, new Float32Array([p, g, c, u])), f(this, Al, A);
  }
  getOutlines() {
    r(this, Ui).sort((e, s) => e[0] - s[0] || e[1] - s[1] || e[2] - s[2]);
    const t = [];
    for (const e of r(this, Ui))
      e[3] ? (t.push(...y(this, pe, Qc).call(this, e)), y(this, pe, Np).call(this, e)) : (y(this, pe, Op).call(this, e), t.push(...y(this, pe, Qc).call(this, e)));
    return y(this, pe, Fp).call(this, t);
  }
}
yl = new WeakMap(), Al = new WeakMap(), Ui = new WeakMap(), os = new WeakMap(), pe = new WeakSet(), Fp = function(t) {
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
  return new sm(i, r(this, yl), r(this, Al));
}, ah = function(t) {
  const e = r(this, os);
  let s = 0, i = e.length - 1;
  for (; s <= i; ) {
    const n = s + i >> 1, a = e[n][0];
    if (a === t)
      return n;
    a < t ? s = n + 1 : i = n - 1;
  }
  return i + 1;
}, Np = function([, t, e]) {
  const s = y(this, pe, ah).call(this, t);
  r(this, os).splice(s, 0, [t, e]);
}, Op = function([, t, e]) {
  const s = y(this, pe, ah).call(this, t);
  for (let i = s; i < r(this, os).length; i++) {
    const [n, a] = r(this, os)[i];
    if (n !== t)
      break;
    if (n === t && a === e) {
      r(this, os).splice(i, 1);
      return;
    }
  }
  for (let i = s - 1; i >= 0; i--) {
    const [n, a] = r(this, os)[i];
    if (n !== t)
      break;
    if (n === t && a === e) {
      r(this, os).splice(i, 1);
      return;
    }
  }
}, Qc = function(t) {
  const [e, s, i] = t, n = [[e, s, i]], a = y(this, pe, ah).call(this, i);
  for (let o = 0; o < a; o++) {
    const [l, h] = r(this, os)[o];
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
var vl, ma;
class sm extends N {
  constructor(e, s, i) {
    super();
    b(this, vl);
    b(this, ma);
    f(this, ma, e), f(this, vl, s), this.lastPoint = i;
  }
  toSVGPath() {
    const e = [];
    for (const s of r(this, ma)) {
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
    for (const c of r(this, ma)) {
      const u = new Array(c.length);
      for (let p = 0; p < c.length; p += 2)
        u[p] = e + c[p] * l, u[p + 1] = n - c[p + 1] * h;
      o.push(u);
    }
    return o;
  }
  get box() {
    return r(this, vl);
  }
  get classNamesForOutlining() {
    return ["highlightOutline"];
  }
}
vl = new WeakMap(), ma = new WeakMap();
class Zc extends Ah {
  newFreeDrawOutline(t, e, s, i, n, a) {
    return new im(t, e, s, i, n, a);
  }
}
class im extends Ip {
  newOutliner(t, e, s, i, n, a = 0) {
    return new Zc(t, e, s, i, n, a);
  }
}
var ls, tr, ba, Ft, _l, ya, wl, Sl, ji, hs, Aa, El, lt, Jc, td, ed, an, Bp, _i;
const be = class be {
  constructor({
    editor: t = null,
    uiManager: e = null
  }) {
    b(this, lt);
    b(this, ls, null);
    b(this, tr, null);
    b(this, ba);
    b(this, Ft, null);
    b(this, _l, !1);
    b(this, ya, !1);
    b(this, wl, null);
    b(this, Sl);
    b(this, ji, null);
    b(this, hs, null);
    b(this, Aa);
    var s;
    t ? (f(this, ya, !1), f(this, Aa, tt.HIGHLIGHT_COLOR), f(this, wl, t)) : (f(this, ya, !0), f(this, Aa, tt.HIGHLIGHT_DEFAULT_COLOR)), f(this, hs, (t == null ? void 0 : t._uiManager) || e), f(this, Sl, r(this, hs)._eventBus), f(this, ba, (t == null ? void 0 : t.color) || ((s = r(this, hs)) == null ? void 0 : s.highlightColors.values().next().value) || "#FFFF98"), r(be, El) || f(be, El, Object.freeze({
      blue: "pdfjs-editor-colorpicker-blue",
      green: "pdfjs-editor-colorpicker-green",
      pink: "pdfjs-editor-colorpicker-pink",
      red: "pdfjs-editor-colorpicker-red",
      yellow: "pdfjs-editor-colorpicker-yellow"
    }));
  }
  static get _keyboardManager() {
    return J(this, "_keyboardManager", new Il([[["Escape", "mac+Escape"], be.prototype._hideDropdownFromKeyboard], [[" ", "mac+ "], be.prototype._colorSelectFromKeyboard], [["ArrowDown", "ArrowRight", "mac+ArrowDown", "mac+ArrowRight"], be.prototype._moveToNext], [["ArrowUp", "ArrowLeft", "mac+ArrowUp", "mac+ArrowLeft"], be.prototype._moveToPrevious], [["Home", "mac+Home"], be.prototype._moveToBeginning], [["End", "mac+End"], be.prototype._moveToEnd]]));
  }
  renderButton() {
    const t = f(this, ls, document.createElement("button"));
    t.className = "colorPicker", t.tabIndex = "0", t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button"), t.setAttribute("aria-haspopup", !0);
    const e = r(this, hs)._signal;
    t.addEventListener("click", y(this, lt, an).bind(this), {
      signal: e
    }), t.addEventListener("keydown", y(this, lt, ed).bind(this), {
      signal: e
    });
    const s = f(this, tr, document.createElement("span"));
    return s.className = "swatch", s.setAttribute("aria-hidden", !0), s.style.backgroundColor = r(this, ba), t.append(s), t;
  }
  renderMainDropdown() {
    const t = f(this, Ft, y(this, lt, Jc).call(this));
    return t.setAttribute("aria-orientation", "horizontal"), t.setAttribute("aria-labelledby", "highlightColorPickerLabel"), t;
  }
  _colorSelectFromKeyboard(t) {
    if (t.target === r(this, ls)) {
      y(this, lt, an).call(this, t);
      return;
    }
    const e = t.target.getAttribute("data-color");
    e && y(this, lt, td).call(this, e, t);
  }
  _moveToNext(t) {
    var e, s;
    if (!r(this, lt, _i)) {
      y(this, lt, an).call(this, t);
      return;
    }
    if (t.target === r(this, ls)) {
      (e = r(this, Ft).firstChild) == null || e.focus();
      return;
    }
    (s = t.target.nextSibling) == null || s.focus();
  }
  _moveToPrevious(t) {
    var e, s;
    if (t.target === ((e = r(this, Ft)) == null ? void 0 : e.firstChild) || t.target === r(this, ls)) {
      r(this, lt, _i) && this._hideDropdownFromKeyboard();
      return;
    }
    r(this, lt, _i) || y(this, lt, an).call(this, t), (s = t.target.previousSibling) == null || s.focus();
  }
  _moveToBeginning(t) {
    var e;
    if (!r(this, lt, _i)) {
      y(this, lt, an).call(this, t);
      return;
    }
    (e = r(this, Ft).firstChild) == null || e.focus();
  }
  _moveToEnd(t) {
    var e;
    if (!r(this, lt, _i)) {
      y(this, lt, an).call(this, t);
      return;
    }
    (e = r(this, Ft).lastChild) == null || e.focus();
  }
  hideDropdown() {
    var t, e;
    (t = r(this, Ft)) == null || t.classList.add("hidden"), (e = r(this, ji)) == null || e.abort(), f(this, ji, null);
  }
  _hideDropdownFromKeyboard() {
    var t;
    if (!r(this, ya)) {
      if (!r(this, lt, _i)) {
        (t = r(this, wl)) == null || t.unselect();
        return;
      }
      this.hideDropdown(), r(this, ls).focus({
        preventScroll: !0,
        focusVisible: r(this, _l)
      });
    }
  }
  updateColor(t) {
    if (r(this, tr) && (r(this, tr).style.backgroundColor = t), !r(this, Ft))
      return;
    const e = r(this, hs).highlightColors.values();
    for (const s of r(this, Ft).children)
      s.setAttribute("aria-selected", e.next().value === t);
  }
  destroy() {
    var t, e;
    (t = r(this, ls)) == null || t.remove(), f(this, ls, null), f(this, tr, null), (e = r(this, Ft)) == null || e.remove(), f(this, Ft, null);
  }
};
ls = new WeakMap(), tr = new WeakMap(), ba = new WeakMap(), Ft = new WeakMap(), _l = new WeakMap(), ya = new WeakMap(), wl = new WeakMap(), Sl = new WeakMap(), ji = new WeakMap(), hs = new WeakMap(), Aa = new WeakMap(), El = new WeakMap(), lt = new WeakSet(), Jc = function() {
  const t = document.createElement("div"), e = r(this, hs)._signal;
  t.addEventListener("contextmenu", ps, {
    signal: e
  }), t.className = "dropdown", t.role = "listbox", t.setAttribute("aria-multiselectable", !1), t.setAttribute("aria-orientation", "vertical"), t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown");
  for (const [s, i] of r(this, hs).highlightColors) {
    const n = document.createElement("button");
    n.tabIndex = "0", n.role = "option", n.setAttribute("data-color", i), n.title = s, n.setAttribute("data-l10n-id", r(be, El)[s]);
    const a = document.createElement("span");
    n.append(a), a.className = "swatch", a.style.backgroundColor = i, n.setAttribute("aria-selected", i === r(this, ba)), n.addEventListener("click", y(this, lt, td).bind(this, i), {
      signal: e
    }), t.append(n);
  }
  return t.addEventListener("keydown", y(this, lt, ed).bind(this), {
    signal: e
  }), t;
}, td = function(t, e) {
  e.stopPropagation(), r(this, Sl).dispatch("switchannotationeditorparams", {
    source: this,
    type: r(this, Aa),
    value: t
  });
}, ed = function(t) {
  be._keyboardManager.exec(this, t);
}, an = function(t) {
  if (r(this, lt, _i)) {
    this.hideDropdown();
    return;
  }
  if (f(this, _l, t.detail === 0), r(this, ji) || (f(this, ji, new AbortController()), window.addEventListener("pointerdown", y(this, lt, Bp).bind(this), {
    signal: r(this, hs).combinedSignal(r(this, ji))
  })), r(this, Ft)) {
    r(this, Ft).classList.remove("hidden");
    return;
  }
  const e = f(this, Ft, y(this, lt, Jc).call(this));
  r(this, ls).append(e);
}, Bp = function(t) {
  var e;
  (e = r(this, Ft)) != null && e.contains(t.target) || this.hideDropdown();
}, _i = function() {
  return r(this, Ft) && !r(this, Ft).classList.contains("hidden");
}, b(be, El, null);
let vh = be;
var va, Cl, hi, er, _a, ve, xl, kl, sr, je, Le, Wt, wa, ci, ee, Sa, Ve, Tl, W, sd, oh, Hp, zp, $p, id, on, Ye, Er, Gp, lh, Ka, Up, jp, Vp, Wp, Xp;
const rt = class rt extends vt {
  constructor(e) {
    super({
      ...e,
      name: "highlightEditor"
    });
    b(this, W);
    b(this, va, null);
    b(this, Cl, 0);
    b(this, hi);
    b(this, er, null);
    b(this, _a, null);
    b(this, ve, null);
    b(this, xl, null);
    b(this, kl, 0);
    b(this, sr, null);
    b(this, je, null);
    b(this, Le, null);
    b(this, Wt, !1);
    b(this, wa, null);
    b(this, ci);
    b(this, ee, null);
    b(this, Sa, "");
    b(this, Ve);
    b(this, Tl, "");
    this.color = e.color || rt._defaultColor, f(this, Ve, e.thickness || rt._defaultThickness), f(this, ci, e.opacity || rt._defaultOpacity), f(this, hi, e.boxes || null), f(this, Tl, e.methodOfCreation || ""), f(this, Sa, e.text || ""), this._isDraggable = !1, e.highlightId > -1 ? (f(this, Wt, !0), y(this, W, oh).call(this, e), y(this, W, on).call(this)) : r(this, hi) && (f(this, va, e.anchorNode), f(this, Cl, e.anchorOffset), f(this, xl, e.focusNode), f(this, kl, e.focusOffset), y(this, W, sd).call(this), y(this, W, on).call(this), this.rotate(this.rotation));
  }
  static get _keyboardManager() {
    const e = rt.prototype;
    return J(this, "_keyboardManager", new Il([[["ArrowLeft", "mac+ArrowLeft"], e._moveCaret, {
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
      type: r(this, Wt) ? "free_highlight" : "highlight",
      color: this._uiManager.highlightColorNames.get(this.color),
      thickness: r(this, Ve),
      methodOfCreation: r(this, Tl)
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
    vt.initialize(e, s), rt._defaultColor || (rt._defaultColor = ((i = s.highlightColors) == null ? void 0 : i.values().next().value) || "#fff066");
  }
  static updateDefaultParams(e, s) {
    switch (e) {
      case tt.HIGHLIGHT_DEFAULT_COLOR:
        rt._defaultColor = s;
        break;
      case tt.HIGHLIGHT_THICKNESS:
        rt._defaultThickness = s;
        break;
    }
  }
  translateInPage(e, s) {
  }
  get toolbarPosition() {
    return r(this, wa);
  }
  updateParams(e, s) {
    switch (e) {
      case tt.HIGHLIGHT_COLOR:
        y(this, W, Hp).call(this, s);
        break;
      case tt.HIGHLIGHT_THICKNESS:
        y(this, W, zp).call(this, s);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[tt.HIGHLIGHT_DEFAULT_COLOR, rt._defaultColor], [tt.HIGHLIGHT_THICKNESS, rt._defaultThickness]];
  }
  get propertiesToUpdate() {
    return [[tt.HIGHLIGHT_COLOR, this.color || rt._defaultColor], [tt.HIGHLIGHT_THICKNESS, r(this, Ve) || rt._defaultThickness], [tt.HIGHLIGHT_FREE, r(this, Wt)]];
  }
  async addEditToolbar() {
    const e = await super.addEditToolbar();
    return e ? (this._uiManager.highlightColors && (f(this, _a, new vh({
      editor: this
    })), e.addColorPicker(r(this, _a))), e) : null;
  }
  disableEditing() {
    super.disableEditing(), this.div.classList.toggle("disabled", !0);
  }
  enableEditing() {
    super.enableEditing(), this.div.classList.toggle("disabled", !1);
  }
  fixAndSetPosition() {
    return super.fixAndSetPosition(y(this, W, Ka).call(this));
  }
  getBaseTranslation() {
    return [0, 0];
  }
  getRect(e, s) {
    return super.getRect(e, s, y(this, W, Ka).call(this));
  }
  onceAdded(e) {
    this.annotationElementId || this.parent.addUndoableEditor(this), e && this.div.focus();
  }
  remove() {
    y(this, W, id).call(this), this._reportTelemetry({
      action: "deleted"
    }), super.remove();
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (y(this, W, on).call(this), this.isAttachedToDOM || this.parent.add(this)));
  }
  setParent(e) {
    var i;
    let s = !1;
    this.parent && !e ? y(this, W, id).call(this) : e && (y(this, W, on).call(this, e), s = !this.parent && ((i = this.div) == null ? void 0 : i.classList.contains("selectedEditor"))), super.setParent(e), this.show(this._isVisible), s && this.select();
  }
  rotate(e) {
    var n, a, o;
    const {
      drawLayer: s
    } = this.parent;
    let i;
    r(this, Wt) ? (e = (e - this.rotation + 360) % 360, i = y(n = rt, Ye, Er).call(n, r(this, je).box, e)) : i = y(a = rt, Ye, Er).call(a, [this.x, this.y, this.width, this.height], e), s.updateProperties(r(this, Le), {
      bbox: i,
      root: {
        "data-main-rotation": e
      }
    }), s.updateProperties(r(this, ee), {
      bbox: y(o = rt, Ye, Er).call(o, r(this, ve).box, e),
      root: {
        "data-main-rotation": e
      }
    });
  }
  render() {
    if (this.div)
      return this.div;
    const e = super.render();
    r(this, Sa) && (e.setAttribute("aria-label", r(this, Sa)), e.setAttribute("role", "mark")), r(this, Wt) ? e.classList.add("free") : this.div.addEventListener("keydown", y(this, W, Gp).bind(this), {
      signal: this._uiManager._signal
    });
    const s = f(this, sr, document.createElement("div"));
    e.append(s), s.setAttribute("aria-hidden", "true"), s.className = "internal", s.style.clipPath = r(this, er);
    const [i, n] = this.parentDimensions;
    return this.setDims(this.width * i, this.height * n), mh(this, r(this, sr), ["pointerover", "pointerleave"]), this.enableEditing(), e;
  }
  pointerover() {
    var e;
    this.isSelected || (e = this.parent) == null || e.drawLayer.updateProperties(r(this, ee), {
      rootClass: {
        hovered: !0
      }
    });
  }
  pointerleave() {
    var e;
    this.isSelected || (e = this.parent) == null || e.drawLayer.updateProperties(r(this, ee), {
      rootClass: {
        hovered: !1
      }
    });
  }
  _moveCaret(e) {
    switch (this.parent.unselect(this), e) {
      case 0:
      case 2:
        y(this, W, lh).call(this, !0);
        break;
      case 1:
      case 3:
        y(this, W, lh).call(this, !1);
        break;
    }
  }
  select() {
    var e;
    super.select(), r(this, ee) && ((e = this.parent) == null || e.drawLayer.updateProperties(r(this, ee), {
      rootClass: {
        hovered: !1,
        selected: !0
      }
    }));
  }
  unselect() {
    var e;
    super.unselect(), r(this, ee) && ((e = this.parent) == null || e.drawLayer.updateProperties(r(this, ee), {
      rootClass: {
        selected: !1
      }
    }), r(this, Wt) || y(this, W, lh).call(this, !1));
  }
  get _mustFixPosition() {
    return !r(this, Wt);
  }
  show(e = this._isVisible) {
    super.show(e), this.parent && (this.parent.drawLayer.updateProperties(r(this, Le), {
      rootClass: {
        hidden: !e
      }
    }), this.parent.drawLayer.updateProperties(r(this, ee), {
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
      u.abort(), y(this, Ye, Wp).call(this, e, m);
    };
    window.addEventListener("blur", g, {
      signal: p
    }), window.addEventListener("pointerup", g, {
      signal: p
    }), window.addEventListener("pointerdown", Oe, {
      capture: !0,
      passive: !1,
      signal: p
    }), window.addEventListener("contextmenu", ps, {
      signal: p
    }), i.addEventListener("pointermove", y(this, Ye, Vp).bind(this, e), {
      signal: p
    }), this._freeHighlight = new Zc({
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
    var A, _, v, S;
    let n = null;
    if (e instanceof Ap) {
      const {
        data: {
          quadPoints: E,
          rect: w,
          rotation: C,
          id: k,
          color: x,
          opacity: T,
          popupRef: P
        },
        parent: {
          page: {
            pageNumber: z
          }
        }
      } = e;
      n = e = {
        annotationType: X.HIGHLIGHT,
        color: Array.from(x),
        opacity: T,
        quadPoints: E,
        boxes: null,
        pageIndex: z - 1,
        rect: w.slice(0),
        rotation: C,
        id: k,
        deleted: !1,
        popupRef: P
      };
    } else if (e instanceof Td) {
      const {
        data: {
          inkLists: E,
          rect: w,
          rotation: C,
          id: k,
          color: x,
          borderStyle: {
            rawWidth: T
          },
          popupRef: P
        },
        parent: {
          page: {
            pageNumber: z
          }
        }
      } = e;
      n = e = {
        annotationType: X.HIGHLIGHT,
        color: Array.from(x),
        thickness: T,
        inkLists: E,
        boxes: null,
        pageIndex: z - 1,
        rect: w.slice(0),
        rotation: C,
        id: k,
        deleted: !1,
        popupRef: P
      };
    }
    const {
      color: a,
      quadPoints: o,
      inkLists: l,
      opacity: h
    } = e, c = await super.deserialize(e, s, i);
    c.color = G.makeHexColor(...a), f(c, ci, h || 1), l && f(c, Ve, e.thickness), c.annotationElementId = e.id || null, c._initialData = n;
    const [u, p] = c.pageDimensions, [g, m] = c.pageTranslation;
    if (o) {
      const E = f(c, hi, []);
      for (let w = 0; w < o.length; w += 8)
        E.push({
          x: (o[w] - g) / u,
          y: 1 - (o[w + 1] - m) / p,
          width: (o[w + 2] - o[w]) / u,
          height: (o[w + 1] - o[w + 5]) / p
        });
      y(A = c, W, sd).call(A), y(_ = c, W, on).call(_), c.rotate(c.rotation);
    } else if (l) {
      f(c, Wt, !0);
      const E = l[0], w = {
        x: E[0] - g,
        y: p - (E[1] - m)
      }, C = new Zc(w, [0, 0, u, p], 1, r(c, Ve) / 2, !0, 1e-3);
      for (let T = 0, P = E.length; T < P; T += 2)
        w.x = E[T] - g, w.y = p - (E[T + 1] - m), C.add(w);
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
      y(v = c, W, oh).call(v, {
        highlightOutlines: C.getOutlines(),
        highlightId: k,
        clipPathId: x
      }), y(S = c, W, on).call(S);
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
      opacity: r(this, ci),
      thickness: r(this, Ve),
      quadPoints: y(this, W, Up).call(this),
      outlines: y(this, W, jp).call(this, s),
      pageIndex: this.pageIndex,
      rect: s,
      rotation: y(this, W, Ka).call(this),
      structTreeParentId: this._structTreeParentId
    };
    return this.annotationElementId && !y(this, W, Xp).call(this, n) ? null : (n.id = this.annotationElementId, n);
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
va = new WeakMap(), Cl = new WeakMap(), hi = new WeakMap(), er = new WeakMap(), _a = new WeakMap(), ve = new WeakMap(), xl = new WeakMap(), kl = new WeakMap(), sr = new WeakMap(), je = new WeakMap(), Le = new WeakMap(), Wt = new WeakMap(), wa = new WeakMap(), ci = new WeakMap(), ee = new WeakMap(), Sa = new WeakMap(), Ve = new WeakMap(), Tl = new WeakMap(), W = new WeakSet(), sd = function() {
  const e = new Kc(r(this, hi), 1e-3);
  f(this, je, e.getOutlines()), [this.x, this.y, this.width, this.height] = r(this, je).box;
  const s = new Kc(r(this, hi), 25e-4, 1e-3, this._uiManager.direction === "ltr");
  f(this, ve, s.getOutlines());
  const {
    lastPoint: i
  } = r(this, ve);
  f(this, wa, [(i[0] - this.x) / this.width, (i[1] - this.y) / this.height]);
}, oh = function({
  highlightOutlines: e,
  highlightId: s,
  clipPathId: i
}) {
  var u, p;
  if (f(this, je, e), f(this, ve, e.getNewOutline(r(this, Ve) / 2 + 1.5, 25e-4)), s >= 0)
    f(this, Le, s), f(this, er, i), this.parent.drawLayer.finalizeDraw(s, {
      bbox: e.box,
      path: {
        d: e.toSVGPath()
      }
    }), f(this, ee, this.parent.drawLayer.drawOutline({
      rootClass: {
        highlightOutline: !0,
        free: !0
      },
      bbox: r(this, ve).box,
      path: {
        d: r(this, ve).toSVGPath()
      }
    }, !0));
  else if (this.parent) {
    const g = this.parent.viewport.rotation;
    this.parent.drawLayer.updateProperties(r(this, Le), {
      bbox: y(u = rt, Ye, Er).call(u, r(this, je).box, (g - this.rotation + 360) % 360),
      path: {
        d: e.toSVGPath()
      }
    }), this.parent.drawLayer.updateProperties(r(this, ee), {
      bbox: y(p = rt, Ye, Er).call(p, r(this, ve).box, g),
      path: {
        d: r(this, ve).toSVGPath()
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
  } = r(this, ve);
  f(this, wa, [(c[0] - a) / l, (c[1] - o) / h]);
}, Hp = function(e) {
  const s = (a, o) => {
    var l, h;
    this.color = a, f(this, ci, o), (l = this.parent) == null || l.drawLayer.updateProperties(r(this, Le), {
      root: {
        fill: a,
        "fill-opacity": o
      }
    }), (h = r(this, _a)) == null || h.updateColor(a);
  }, i = this.color, n = r(this, ci);
  this.addCommands({
    cmd: s.bind(this, e, rt._defaultOpacity),
    undo: s.bind(this, i, n),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: tt.HIGHLIGHT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  }), this._reportTelemetry({
    action: "color_changed",
    color: this._uiManager.highlightColorNames.get(e)
  }, !0);
}, zp = function(e) {
  const s = r(this, Ve), i = (n) => {
    f(this, Ve, n), y(this, W, $p).call(this, n);
  };
  this.addCommands({
    cmd: i.bind(this, e),
    undo: i.bind(this, s),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: tt.INK_THICKNESS,
    overwriteIfSameType: !0,
    keepUndo: !0
  }), this._reportTelemetry({
    action: "thickness_changed",
    thickness: e
  }, !0);
}, $p = function(e) {
  if (!r(this, Wt))
    return;
  y(this, W, oh).call(this, {
    highlightOutlines: r(this, je).getNewOutline(e / 2)
  }), this.fixAndSetPosition();
  const [s, i] = this.parentDimensions;
  this.setDims(this.width * s, this.height * i);
}, id = function() {
  r(this, Le) === null || !this.parent || (this.parent.drawLayer.remove(r(this, Le)), f(this, Le, null), this.parent.drawLayer.remove(r(this, ee)), f(this, ee, null));
}, on = function(e = this.parent) {
  r(this, Le) === null && ({
    id: re(this, Le)._,
    clipPathId: re(this, er)._
  } = e.drawLayer.draw({
    bbox: r(this, je).box,
    root: {
      viewBox: "0 0 1 1",
      fill: this.color,
      "fill-opacity": r(this, ci)
    },
    rootClass: {
      highlight: !0,
      free: r(this, Wt)
    },
    path: {
      d: r(this, je).toSVGPath()
    }
  }, !1, !0), f(this, ee, e.drawLayer.drawOutline({
    rootClass: {
      highlightOutline: !0,
      free: r(this, Wt)
    },
    bbox: r(this, ve).box,
    path: {
      d: r(this, ve).toSVGPath()
    }
  }, r(this, Wt))), r(this, sr) && (r(this, sr).style.clipPath = r(this, er)));
}, Ye = new WeakSet(), Er = function([e, s, i, n], a) {
  switch (a) {
    case 90:
      return [1 - s - n, e, n, i];
    case 180:
      return [1 - e - i, 1 - s - n, i, n];
    case 270:
      return [s, 1 - e - i, n, i];
  }
  return [e, s, i, n];
}, Gp = function(e) {
  rt._keyboardManager.exec(this, e);
}, lh = function(e) {
  if (!r(this, va))
    return;
  const s = window.getSelection();
  e ? s.setPosition(r(this, va), r(this, Cl)) : s.setPosition(r(this, xl), r(this, kl));
}, Ka = function() {
  return r(this, Wt) ? this.rotation : 0;
}, Up = function() {
  if (r(this, Wt))
    return null;
  const [e, s] = this.pageDimensions, [i, n] = this.pageTranslation, a = r(this, hi), o = new Float32Array(a.length * 8);
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
}, jp = function(e) {
  return r(this, je).serialize(e, y(this, W, Ka).call(this));
}, Vp = function(e, s) {
  this._freeHighlight.add(s) && e.drawLayer.updateProperties(this._freeHighlightId, {
    path: {
      d: this._freeHighlight.toSVGPath()
    }
  });
}, Wp = function(e, s) {
  this._freeHighlight.isEmpty() ? e.drawLayer.remove(this._freeHighlightId) : e.createAndAddNewEditor(s, !1, {
    highlightId: this._freeHighlightId,
    highlightOutlines: this._freeHighlight.getOutlines(),
    clipPathId: this._freeHighlightClipId,
    methodOfCreation: "main_toolbar"
  }), this._freeHighlightId = -1, this._freeHighlight = null, this._freeHighlightClipId = "";
}, Xp = function(e) {
  const {
    color: s
  } = this._initialData;
  return e.color.some((i, n) => i !== s[n]);
}, b(rt, Ye), U(rt, "_defaultColor", null), U(rt, "_defaultOpacity", 1), U(rt, "_defaultThickness", 12), U(rt, "_type", "highlight"), U(rt, "_editorType", X.HIGHLIGHT), U(rt, "_freeHighlightId", -1), U(rt, "_freeHighlight", null), U(rt, "_freeHighlightClipId", "");
let _h = rt;
var ir;
class nm {
  constructor() {
    b(this, ir, /* @__PURE__ */ Object.create(null));
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
    r(this, ir)[t] = e;
  }
  toSVGProperties() {
    const t = r(this, ir);
    return f(this, ir, /* @__PURE__ */ Object.create(null)), {
      root: t
    };
  }
  reset() {
    f(this, ir, /* @__PURE__ */ Object.create(null));
  }
  updateAll(t = this) {
    this.updateProperties(t);
  }
  clone() {
    ct("Not implemented");
  }
}
ir = new WeakMap();
var Re, Ea, zt, nr, rr, Vi, Wi, Xi, ar, st, rd, ad, od, Qa, qp, hh, Za, Cr;
const B = class B extends vt {
  constructor(e) {
    super(e);
    b(this, st);
    b(this, Re, null);
    b(this, Ea);
    U(this, "_drawId", null);
    f(this, Ea, e.mustBeCommitted || !1), e.drawOutlines && (y(this, st, rd).call(this, e), y(this, st, Qa).call(this));
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
    i && this._defaultDrawingOptions.updateProperty(i, s), this._currentParent && (r(B, zt).updateProperty(i, s), this._currentParent.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties()));
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
      h && y(this, st, Za).call(this, h), (c = this.parent) == null || c.drawLayer.updateProperties(this._drawId, n.toSVGProperties());
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
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, B._mergeSVGProperties(r(this, Re).getPathResizingSVGProperties(y(this, st, hh).call(this)), {
      bbox: y(this, st, Cr).call(this)
    }));
  }
  _onResized() {
    var e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, B._mergeSVGProperties(r(this, Re).getPathResizedSVGProperties(y(this, st, hh).call(this)), {
      bbox: y(this, st, Cr).call(this)
    }));
  }
  _onTranslating(e, s) {
    var i;
    (i = this.parent) == null || i.drawLayer.updateProperties(this._drawId, {
      bbox: y(this, st, Cr).call(this, e, s)
    });
  }
  _onTranslated() {
    var e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, B._mergeSVGProperties(r(this, Re).getPathTranslatedSVGProperties(y(this, st, hh).call(this), this.parentDimensions), {
      bbox: y(this, st, Cr).call(this)
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
    this.annotationElementId || this.parent.addUndoableEditor(this), this._isDraggable = !0, r(this, Ea) && (f(this, Ea, !1), this.commit(), this.parent.setSelected(this), e && this.isOnScreen && this.div.focus());
  }
  remove() {
    y(this, st, od).call(this), super.remove();
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (y(this, st, Qa).call(this), y(this, st, Za).call(this, r(this, Re).box), this.isAttachedToDOM || this.parent.add(this)));
  }
  setParent(e) {
    var i;
    let s = !1;
    this.parent && !e ? (this._uiManager.removeShouldRescale(this), y(this, st, od).call(this)) : e && (this._uiManager.addShouldRescale(this), y(this, st, Qa).call(this, e), s = !this.parent && ((i = this.div) == null ? void 0 : i.classList.contains("selectedEditor"))), super.setParent(e), s && this.select();
  }
  rotate() {
    this.parent && this.parent.drawLayer.updateProperties(this._drawId, B._mergeSVGProperties({
      bbox: y(this, st, Cr).call(this)
    }, r(this, Re).updateRotation((this.parentRotation - this.rotation + 360) % 360)));
  }
  onScaleChanging() {
    this.parent && y(this, st, Za).call(this, r(this, Re).updateParentDimensions(this.parentDimensions, this.parent.scale));
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
    if (r(B, Wi) && r(B, Wi) !== c)
      return;
    const {
      viewport: {
        rotation: u
      }
    } = e, {
      width: p,
      height: g
    } = a.getBoundingClientRect(), m = f(B, nr, new AbortController()), A = e.combinedSignal(m);
    if (r(B, Vi) || f(B, Vi, h), r(B, Wi) ?? f(B, Wi, c), window.addEventListener("pointerup", (v) => {
      var S;
      r(B, Vi) === v.pointerId ? this._endDraw(v) : (S = r(B, Xi)) == null || S.delete(v.pointerId);
    }, {
      signal: A
    }), window.addEventListener("pointercancel", (v) => {
      var S;
      r(B, Vi) === v.pointerId ? this._currentParent.endDrawingSession() : (S = r(B, Xi)) == null || S.delete(v.pointerId);
    }, {
      signal: A
    }), window.addEventListener("pointerdown", (v) => {
      r(B, Wi) === v.pointerType && ((r(B, Xi) || f(B, Xi, /* @__PURE__ */ new Set())).add(v.pointerId), r(B, zt).isCancellable() && (r(B, zt).removeLastElement(), r(B, zt).isEmpty() ? this._currentParent.endDrawingSession(!0) : this._endDraw(null)));
    }, {
      capture: !0,
      passive: !1,
      signal: A
    }), window.addEventListener("contextmenu", ps, {
      signal: A
    }), a.addEventListener("pointermove", this._drawMove.bind(this), {
      signal: A
    }), a.addEventListener("touchmove", (v) => {
      v.timeStamp === r(B, ar) && Oe(v);
    }, {
      signal: A
    }), e.toggleDrawing(), (_ = s._editorUndoBar) == null || _.hide(), r(B, zt)) {
      e.drawLayer.updateProperties(this._currentDrawId, r(B, zt).startNew(o, l, p, g, u));
      return;
    }
    s.updateUIForDefaultProperties(this), f(B, zt, this.createDrawerInstance(o, l, p, g, u)), f(B, rr, this.getDefaultDrawingOptions()), this._currentParent = e, {
      id: this._currentDrawId
    } = e.drawLayer.draw(this._mergeSVGProperties(r(B, rr).toSVGProperties(), r(B, zt).defaultSVGProperties), !0, !1);
  }
  static _drawMove(e) {
    var a;
    if (f(B, ar, -1), !r(B, zt))
      return;
    const {
      offsetX: s,
      offsetY: i,
      pointerId: n
    } = e;
    if (r(B, Vi) === n) {
      if (((a = r(B, Xi)) == null ? void 0 : a.size) >= 1) {
        this._endDraw(e);
        return;
      }
      this._currentParent.drawLayer.updateProperties(this._currentDrawId, r(B, zt).add(s, i)), f(B, ar, e.timeStamp), Oe(e);
    }
  }
  static _cleanup(e) {
    e && (this._currentDrawId = -1, this._currentParent = null, f(B, zt, null), f(B, rr, null), f(B, Wi, null), f(B, ar, NaN)), r(B, nr) && (r(B, nr).abort(), f(B, nr, null), f(B, Vi, NaN), f(B, Xi, null));
  }
  static _endDraw(e) {
    const s = this._currentParent;
    if (s) {
      if (s.toggleDrawing(!0), this._cleanup(!1), e && s.drawLayer.updateProperties(this._currentDrawId, r(B, zt).end(e.offsetX, e.offsetY)), this.supportMultipleDrawings) {
        const i = r(B, zt), n = this._currentDrawId, a = i.getLastElement();
        s.addCommands({
          cmd: () => {
            s.drawLayer.updateProperties(n, i.setLastElement(a));
          },
          undo: () => {
            s.drawLayer.updateProperties(n, i.removeLastElement());
          },
          mustExec: !1,
          type: tt.DRAW_STEP
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
    if (s.toggleDrawing(!0), s.cleanUndoStack(tt.DRAW_STEP), !r(B, zt).isEmpty()) {
      const {
        pageDimensions: [i, n],
        scale: a
      } = s, o = s.createAndAddNewEditor({
        offsetX: 0,
        offsetY: 0
      }, !1, {
        drawId: this._currentDrawId,
        drawOutlines: r(B, zt).getOutlines(i * a, n * a, a, this._INNER_MARGIN),
        drawingOptions: r(B, rr),
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
    return c.createDrawingOptions(e), y(u = c, st, rd).call(u, {
      drawOutlines: h
    }), y(p = c, st, Qa).call(p), c.onScaleChanging(), c.rotate(), c;
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
Re = new WeakMap(), Ea = new WeakMap(), zt = new WeakMap(), nr = new WeakMap(), rr = new WeakMap(), Vi = new WeakMap(), Wi = new WeakMap(), Xi = new WeakMap(), ar = new WeakMap(), st = new WeakSet(), rd = function({
  drawOutlines: e,
  drawId: s,
  drawingOptions: i
}) {
  f(this, Re, e), this._drawingOptions || (this._drawingOptions = i), s >= 0 ? (this._drawId = s, this.parent.drawLayer.finalizeDraw(s, e.defaultProperties)) : this._drawId = y(this, st, ad).call(this, e, this.parent), y(this, st, Za).call(this, e.box);
}, ad = function(e, s) {
  const {
    id: i
  } = s.drawLayer.draw(B._mergeSVGProperties(this._drawingOptions.toSVGProperties(), e.defaultSVGProperties), !1, !1);
  return i;
}, od = function() {
  this._drawId === null || !this.parent || (this.parent.drawLayer.remove(this._drawId), this._drawId = null, this._drawingOptions.reset());
}, Qa = function(e = this.parent) {
  if (!(this._drawId !== null && this.parent === e)) {
    if (this._drawId !== null) {
      this.parent.drawLayer.updateParent(this._drawId, e.drawLayer);
      return;
    }
    this._drawingOptions.updateAll(), this._drawId = y(this, st, ad).call(this, r(this, Re), e);
  }
}, qp = function([e, s, i, n]) {
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
}, hh = function() {
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
}, Za = function(e) {
  if ([this.x, this.y, this.width, this.height] = y(this, st, qp).call(this, e), this.div) {
    this.fixAndSetPosition();
    const [s, i] = this.parentDimensions;
    this.setDims(this.width * s, this.height * i);
  }
  this._onResized();
}, Cr = function() {
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
}, U(B, "_currentDrawId", -1), U(B, "_currentParent", null), b(B, zt, null), b(B, nr, null), b(B, rr, null), b(B, Vi, NaN), b(B, Wi, null), b(B, Xi, null), b(B, ar, NaN), U(B, "_INNER_MARGIN", 3);
let nd = B;
var Ms, $t, Gt, or, Ca, le, Xt, We, lr, hr, cr, xa, ch;
class rm {
  constructor(t, e, s, i, n, a) {
    b(this, xa);
    b(this, Ms, new Float64Array(6));
    b(this, $t);
    b(this, Gt);
    b(this, or);
    b(this, Ca);
    b(this, le);
    b(this, Xt, "");
    b(this, We, 0);
    b(this, lr, new wh());
    b(this, hr);
    b(this, cr);
    f(this, hr, s), f(this, cr, i), f(this, or, n), f(this, Ca, a), [t, e] = y(this, xa, ch).call(this, t, e);
    const o = f(this, $t, [NaN, NaN, NaN, NaN, t, e]);
    f(this, le, [t, e]), f(this, Gt, [{
      line: o,
      points: r(this, le)
    }]), r(this, Ms).set(o, 0);
  }
  updateProperty(t, e) {
    t === "stroke-width" && f(this, Ca, e);
  }
  isEmpty() {
    return !r(this, Gt) || r(this, Gt).length === 0;
  }
  isCancellable() {
    return r(this, le).length <= 10;
  }
  add(t, e) {
    [t, e] = y(this, xa, ch).call(this, t, e);
    const [s, i, n, a] = r(this, Ms).subarray(2, 6), o = t - n, l = e - a;
    return Math.hypot(r(this, hr) * o, r(this, cr) * l) <= 2 ? null : (r(this, le).push(t, e), isNaN(s) ? (r(this, Ms).set([n, a, t, e], 2), r(this, $t).push(NaN, NaN, NaN, NaN, t, e), {
      path: {
        d: this.toSVGPath()
      }
    }) : (isNaN(r(this, Ms)[0]) && r(this, $t).splice(6, 6), r(this, Ms).set([s, i, n, a, t, e], 0), r(this, $t).push(...N.createBezierPoints(s, i, n, a, t, e)), {
      path: {
        d: this.toSVGPath()
      }
    }));
  }
  end(t, e) {
    const s = this.add(t, e);
    return s || (r(this, le).length === 2 ? {
      path: {
        d: this.toSVGPath()
      }
    } : null);
  }
  startNew(t, e, s, i, n) {
    f(this, hr, s), f(this, cr, i), f(this, or, n), [t, e] = y(this, xa, ch).call(this, t, e);
    const a = f(this, $t, [NaN, NaN, NaN, NaN, t, e]);
    f(this, le, [t, e]);
    const o = r(this, Gt).at(-1);
    return o && (o.line = new Float32Array(o.line), o.points = new Float32Array(o.points)), r(this, Gt).push({
      line: a,
      points: r(this, le)
    }), r(this, Ms).set(a, 0), f(this, We, 0), this.toSVGPath(), null;
  }
  getLastElement() {
    return r(this, Gt).at(-1);
  }
  setLastElement(t) {
    return r(this, Gt) ? (r(this, Gt).push(t), f(this, $t, t.line), f(this, le, t.points), f(this, We, 0), {
      path: {
        d: this.toSVGPath()
      }
    }) : r(this, lr).setLastElement(t);
  }
  removeLastElement() {
    if (!r(this, Gt))
      return r(this, lr).removeLastElement();
    r(this, Gt).pop(), f(this, Xt, "");
    for (let t = 0, e = r(this, Gt).length; t < e; t++) {
      const {
        line: s,
        points: i
      } = r(this, Gt)[t];
      f(this, $t, s), f(this, le, i), f(this, We, 0), this.toSVGPath();
    }
    return {
      path: {
        d: r(this, Xt)
      }
    };
  }
  toSVGPath() {
    const t = N.svgRound(r(this, $t)[4]), e = N.svgRound(r(this, $t)[5]);
    if (r(this, le).length === 2)
      return f(this, Xt, `${r(this, Xt)} M ${t} ${e} Z`), r(this, Xt);
    if (r(this, le).length <= 6) {
      const i = r(this, Xt).lastIndexOf("M");
      f(this, Xt, `${r(this, Xt).slice(0, i)} M ${t} ${e}`), f(this, We, 6);
    }
    if (r(this, le).length === 4) {
      const i = N.svgRound(r(this, $t)[10]), n = N.svgRound(r(this, $t)[11]);
      return f(this, Xt, `${r(this, Xt)} L ${i} ${n}`), f(this, We, 12), r(this, Xt);
    }
    const s = [];
    r(this, We) === 0 && (s.push(`M ${t} ${e}`), f(this, We, 6));
    for (let i = r(this, We), n = r(this, $t).length; i < n; i += 6) {
      const [a, o, l, h, c, u] = r(this, $t).slice(i, i + 6).map(N.svgRound);
      s.push(`C${a} ${o} ${l} ${h} ${c} ${u}`);
    }
    return f(this, Xt, r(this, Xt) + s.join(" ")), f(this, We, r(this, $t).length), r(this, Xt);
  }
  getOutlines(t, e, s, i) {
    const n = r(this, Gt).at(-1);
    return n.line = new Float32Array(n.line), n.points = new Float32Array(n.points), r(this, lr).build(r(this, Gt), t, e, s, r(this, or), r(this, Ca), i), f(this, Ms, null), f(this, $t, null), f(this, Gt, null), f(this, Xt, null), r(this, lr);
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
Ms = new WeakMap(), $t = new WeakMap(), Gt = new WeakMap(), or = new WeakMap(), Ca = new WeakMap(), le = new WeakMap(), Xt = new WeakMap(), We = new WeakMap(), lr = new WeakMap(), hr = new WeakMap(), cr = new WeakMap(), xa = new WeakSet(), ch = function(t, e) {
  return N._normalizePoint(t, e, r(this, hr), r(this, cr), r(this, or));
};
var he, Pl, Ml, Ie, Ls, Rs, ka, Ta, Pa, Yt, $s, Yp, Kp, Qp;
const Dd = class Dd extends N {
  constructor() {
    super(...arguments);
    b(this, Yt);
    b(this, he);
    b(this, Pl, 0);
    b(this, Ml);
    b(this, Ie);
    b(this, Ls);
    b(this, Rs);
    b(this, ka);
    b(this, Ta);
    b(this, Pa);
  }
  build(e, s, i, n, a, o, l) {
    f(this, Ls, s), f(this, Rs, i), f(this, ka, n), f(this, Ta, a), f(this, Pa, o), f(this, Ml, l ?? 0), f(this, Ie, e), y(this, Yt, Kp).call(this);
  }
  setLastElement(e) {
    return r(this, Ie).push(e), {
      path: {
        d: this.toSVGPath()
      }
    };
  }
  removeLastElement() {
    return r(this, Ie).pop(), {
      path: {
        d: this.toSVGPath()
      }
    };
  }
  toSVGPath() {
    const e = [];
    for (const {
      line: s
    } of r(this, Ie)) {
      if (e.push(`M${N.svgRound(s[4])} ${N.svgRound(s[5])}`), s.length === 6) {
        e.push("Z");
        continue;
      }
      if (s.length === 12) {
        e.push(`L${N.svgRound(s[10])} ${N.svgRound(s[11])}`);
        continue;
      }
      for (let i = 6, n = s.length; i < n; i += 6) {
        const [a, o, l, h, c, u] = s.subarray(i, i + 6).map(N.svgRound);
        e.push(`C${a} ${o} ${l} ${h} ${c} ${u}`);
      }
    }
    return e.join("");
  }
  serialize([e, s, i, n], a) {
    const o = [], l = [], [h, c, u, p] = y(this, Yt, Yp).call(this);
    let g, m, A, _, v, S, E, w, C;
    switch (r(this, Ta)) {
      case 0:
        C = N._rescale, g = e, m = s + n, A = i, _ = -n, v = e + h * i, S = s + (1 - c - p) * n, E = e + (h + u) * i, w = s + (1 - c) * n;
        break;
      case 90:
        C = N._rescaleAndSwap, g = e, m = s, A = i, _ = n, v = e + c * i, S = s + h * n, E = e + (c + p) * i, w = s + (h + u) * n;
        break;
      case 180:
        C = N._rescale, g = e + i, m = s, A = -i, _ = n, v = e + (1 - h - u) * i, S = s + c * n, E = e + (1 - h) * i, w = s + (c + p) * n;
        break;
      case 270:
        C = N._rescaleAndSwap, g = e + i, m = s + n, A = -i, _ = -n, v = e + (1 - c - p) * i, S = s + (1 - h - u) * n, E = e + (1 - c) * i, w = s + (1 - h) * n;
        break;
    }
    for (const {
      line: k,
      points: x
    } of r(this, Ie))
      o.push(C(k, g, m, A, _, a ? new Array(k.length) : null)), l.push(C(x, g, m, A, _, a ? new Array(x.length) : null));
    return {
      lines: o,
      points: l,
      rect: [v, S, E, w]
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
        _ = N._rescale, p = -e / i, g = s / n + 1, m = 1 / i, A = -1 / n;
        break;
      case 90:
        _ = N._rescaleAndSwap, p = -s / n, g = -e / i, m = 1 / n, A = 1 / i;
        break;
      case 180:
        _ = N._rescale, p = e / i + 1, g = -s / n, m = -1 / i, A = 1 / n;
        break;
      case 270:
        _ = N._rescaleAndSwap, p = s / n + 1, g = e / i + 1, m = -1 / n, A = -1 / i;
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
        const w = new Float32Array(3 * (E - 2));
        o.push(w);
        let [C, k, x, T] = S.subarray(0, 4);
        w.set([NaN, NaN, NaN, NaN, C, k], 0);
        for (let P = 4; P < E; P += 2) {
          const z = S[P], D = S[P + 1];
          w.set(N.createBezierPoints(C, k, x, T, z, D), (P - 2) * 3), [C, k, x, T] = [x, T, z, D];
        }
      }
    }
    for (let S = 0, E = o.length; S < E; S++)
      u.push({
        line: _(o[S].map((w) => w ?? NaN), p, g, m, A),
        points: _(l[S].map((w) => w ?? NaN), p, g, m, A)
      });
    const v = new Dd();
    return v.build(u, i, n, 1, h, c, a), v;
  }
  get box() {
    return r(this, he);
  }
  updateProperty(e, s) {
    return e === "stroke-width" ? y(this, Yt, Qp).call(this, s) : null;
  }
  updateParentDimensions([e, s], i) {
    const [n, a] = y(this, Yt, $s).call(this);
    f(this, Ls, e), f(this, Rs, s), f(this, ka, i);
    const [o, l] = y(this, Yt, $s).call(this), h = o - n, c = l - a, u = r(this, he);
    return u[0] -= h, u[1] -= c, u[2] += 2 * h, u[3] += 2 * c, u;
  }
  updateRotation(e) {
    return f(this, Pl, e), {
      path: {
        transform: this.rotationTransform
      }
    };
  }
  get viewBox() {
    return r(this, he).map(N.svgRound).join(" ");
  }
  get defaultProperties() {
    const [e, s] = r(this, he);
    return {
      root: {
        viewBox: this.viewBox
      },
      path: {
        "transform-origin": `${N.svgRound(e)} ${N.svgRound(s)}`
      }
    };
  }
  get rotationTransform() {
    const [, , e, s] = r(this, he);
    let i = 0, n = 0, a = 0, o = 0, l = 0, h = 0;
    switch (r(this, Pl)) {
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
    return `matrix(${i} ${n} ${a} ${o} ${N.svgRound(l)} ${N.svgRound(h)})`;
  }
  getPathResizingSVGProperties([e, s, i, n]) {
    const [a, o] = y(this, Yt, $s).call(this), [l, h, c, u] = r(this, he);
    if (Math.abs(c - a) <= N.PRECISION || Math.abs(u - o) <= N.PRECISION) {
      const _ = e + i / 2 - (l + c / 2), v = s + n / 2 - (h + u / 2);
      return {
        path: {
          "transform-origin": `${N.svgRound(e)} ${N.svgRound(s)}`,
          transform: `${this.rotationTransform} translate(${_} ${v})`
        }
      };
    }
    const p = (i - 2 * a) / (c - 2 * a), g = (n - 2 * o) / (u - 2 * o), m = c / i, A = u / n;
    return {
      path: {
        "transform-origin": `${N.svgRound(l)} ${N.svgRound(h)}`,
        transform: `${this.rotationTransform} scale(${m} ${A}) translate(${N.svgRound(a)} ${N.svgRound(o)}) scale(${p} ${g}) translate(${N.svgRound(-a)} ${N.svgRound(-o)})`
      }
    };
  }
  getPathResizedSVGProperties([e, s, i, n]) {
    const [a, o] = y(this, Yt, $s).call(this), l = r(this, he), [h, c, u, p] = l;
    if (l[0] = e, l[1] = s, l[2] = i, l[3] = n, Math.abs(u - a) <= N.PRECISION || Math.abs(p - o) <= N.PRECISION) {
      const v = e + i / 2 - (h + u / 2), S = s + n / 2 - (c + p / 2);
      for (const {
        line: E,
        points: w
      } of r(this, Ie))
        N._translate(E, v, S, E), N._translate(w, v, S, w);
      return {
        root: {
          viewBox: this.viewBox
        },
        path: {
          "transform-origin": `${N.svgRound(e)} ${N.svgRound(s)}`,
          transform: this.rotationTransform || null,
          d: this.toSVGPath()
        }
      };
    }
    const g = (i - 2 * a) / (u - 2 * a), m = (n - 2 * o) / (p - 2 * o), A = -g * (h + a) + e + a, _ = -m * (c + o) + s + o;
    if (g !== 1 || m !== 1 || A !== 0 || _ !== 0)
      for (const {
        line: v,
        points: S
      } of r(this, Ie))
        N._rescale(v, A, _, g, m, v), N._rescale(S, A, _, g, m, S);
    return {
      root: {
        viewBox: this.viewBox
      },
      path: {
        "transform-origin": `${N.svgRound(e)} ${N.svgRound(s)}`,
        transform: this.rotationTransform || null,
        d: this.toSVGPath()
      }
    };
  }
  getPathTranslatedSVGProperties([e, s], i) {
    const [n, a] = i, o = r(this, he), l = e - o[0], h = s - o[1];
    if (r(this, Ls) === n && r(this, Rs) === a)
      for (const {
        line: c,
        points: u
      } of r(this, Ie))
        N._translate(c, l, h, c), N._translate(u, l, h, u);
    else {
      const c = r(this, Ls) / n, u = r(this, Rs) / a;
      f(this, Ls, n), f(this, Rs, a);
      for (const {
        line: p,
        points: g
      } of r(this, Ie))
        N._rescale(p, l, h, c, u, p), N._rescale(g, l, h, c, u, g);
      o[2] *= c, o[3] *= u;
    }
    return o[0] = e, o[1] = s, {
      root: {
        viewBox: this.viewBox
      },
      path: {
        d: this.toSVGPath(),
        "transform-origin": `${N.svgRound(e)} ${N.svgRound(s)}`
      }
    };
  }
  get defaultSVGProperties() {
    const e = r(this, he);
    return {
      root: {
        viewBox: this.viewBox
      },
      rootClass: {
        draw: !0
      },
      path: {
        d: this.toSVGPath(),
        "transform-origin": `${N.svgRound(e[0])} ${N.svgRound(e[1])}`,
        transform: this.rotationTransform || null
      },
      bbox: e
    };
  }
};
he = new WeakMap(), Pl = new WeakMap(), Ml = new WeakMap(), Ie = new WeakMap(), Ls = new WeakMap(), Rs = new WeakMap(), ka = new WeakMap(), Ta = new WeakMap(), Pa = new WeakMap(), Yt = new WeakSet(), $s = function(e = r(this, Pa)) {
  const s = r(this, Ml) + e / 2 * r(this, ka);
  return r(this, Ta) % 180 === 0 ? [s / r(this, Ls), s / r(this, Rs)] : [s / r(this, Rs), s / r(this, Ls)];
}, Yp = function() {
  const [e, s, i, n] = r(this, he), [a, o] = y(this, Yt, $s).call(this, 0);
  return [e + a, s + o, i - 2 * a, n - 2 * o];
}, Kp = function() {
  const e = f(this, he, new Float32Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]));
  for (const {
    line: n
  } of r(this, Ie)) {
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
      G.bezierBoundingBox(a, o, c, u, p, g, m, A, e), a = m, o = A;
    }
  }
  const [s, i] = y(this, Yt, $s).call(this);
  e[0] = Math.min(1, Math.max(0, e[0] - s)), e[1] = Math.min(1, Math.max(0, e[1] - i)), e[2] = Math.min(1, Math.max(0, e[2] + s)), e[3] = Math.min(1, Math.max(0, e[3] + i)), e[2] -= e[0], e[3] -= e[1];
}, Qp = function(e) {
  const [s, i] = y(this, Yt, $s).call(this);
  f(this, Pa, e);
  const [n, a] = y(this, Yt, $s).call(this), [o, l] = [n - s, a - i], h = r(this, he);
  return h[0] -= o, h[1] -= l, h[2] += 2 * o, h[3] += 2 * l, h;
};
let wh = Dd;
var Ma;
const Fd = class Fd extends nm {
  constructor(e) {
    super();
    b(this, Ma);
    f(this, Ma, e), super.updateProperties({
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
    e === "stroke-width" && (s ?? (s = this["stroke-width"]), s *= r(this, Ma).realScale), super.updateSVGProperty(e, s);
  }
  clone() {
    const e = new Fd(r(this, Ma));
    return e.updateAll(this), e;
  }
};
Ma = new WeakMap();
let ld = Fd;
var zh, Zp;
const kr = class kr extends nd {
  constructor(e) {
    super({
      ...e,
      name: "inkEditor"
    });
    b(this, zh);
    this._willKeepAspectRatio = !0;
  }
  static initialize(e, s) {
    vt.initialize(e, s), this._defaultDrawingOptions = new ld(s.viewParameters);
  }
  static getDefaultDrawingOptions(e) {
    const s = this._defaultDrawingOptions.clone();
    return s.updateProperties(e), s;
  }
  static get supportMultipleDrawings() {
    return !0;
  }
  static get typesMap() {
    return J(this, "typesMap", /* @__PURE__ */ new Map([[tt.INK_THICKNESS, "stroke-width"], [tt.INK_COLOR, "stroke"], [tt.INK_OPACITY, "stroke-opacity"]]));
  }
  static createDrawerInstance(e, s, i, n, a) {
    return new rm(e, s, i, n, a, this._defaultDrawingOptions["stroke-width"]);
  }
  static deserializeDraw(e, s, i, n, a, o) {
    return wh.deserialize(e, s, i, n, a, o);
  }
  static async deserialize(e, s, i) {
    let n = null;
    if (e instanceof Td) {
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
        annotationType: X.INK,
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
    this._drawingOptions = kr.getDefaultDrawingOptions({
      stroke: G.makeHexColor(...e),
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
    return e ? h : this.annotationElementId && !y(this, zh, Zp).call(this, h) ? null : (h.id = this.annotationElementId, h);
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
zh = new WeakSet(), Zp = function(e) {
  const {
    color: s,
    thickness: i,
    opacity: n,
    pageIndex: a
  } = this._initialData;
  return this._hasBeenMoved || this._hasBeenResized || e.color.some((o, l) => o !== s[l]) || e.thickness !== i || e.opacity !== n || e.pageIndex !== a;
}, U(kr, "_type", "ink"), U(kr, "_editorType", X.INK), U(kr, "_defaultDrawingOptions", null);
let hd = kr;
var At, qt, qi, di, Yi, La, Is, Ds, De, Ra, it, Ja, to, dh, dd, uh, ud, ph, Jp;
const so = class so extends vt {
  constructor(e) {
    super({
      ...e,
      name: "stampEditor"
    });
    b(this, it);
    b(this, At, null);
    b(this, qt, null);
    b(this, qi, null);
    b(this, di, null);
    b(this, Yi, null);
    b(this, La, "");
    b(this, Is, null);
    b(this, Ds, null);
    b(this, De, !1);
    b(this, Ra, !1);
    f(this, di, e.bitmapUrl), f(this, Yi, e.bitmapFile);
  }
  static initialize(e, s) {
    vt.initialize(e, s);
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
    r(this, qt) && (f(this, At, null), this._uiManager.imageManager.deleteId(r(this, qt)), (e = r(this, Is)) == null || e.remove(), f(this, Is, null), r(this, Ds) && (clearTimeout(r(this, Ds)), f(this, Ds, null))), super.remove();
  }
  rebuild() {
    if (!this.parent) {
      r(this, qt) && y(this, it, dh).call(this);
      return;
    }
    super.rebuild(), this.div !== null && (r(this, qt) && r(this, Is) === null && y(this, it, dh).call(this), this.isAttachedToDOM || this.parent.add(this));
  }
  onceAdded(e) {
    this._isDraggable = !0, e && this.div.focus();
  }
  isEmpty() {
    return !(r(this, qi) || r(this, At) || r(this, di) || r(this, Yi) || r(this, qt));
  }
  get isResizable() {
    return !0;
  }
  render() {
    if (this.div)
      return this.div;
    let e, s;
    if (this.width && (e = this.x, s = this.y), super.render(), this.div.hidden = !0, this.div.setAttribute("role", "figure"), this.addAltTextButton(), r(this, At) ? y(this, it, dd).call(this) : y(this, it, dh).call(this), this.width && !this.annotationElementId) {
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
    r(this, Ds) !== null && clearTimeout(r(this, Ds)), f(this, Ds, setTimeout(() => {
      f(this, Ds, null), y(this, it, ud).call(this);
    }, 200));
  }
  copyCanvas(e, s, i = !1) {
    var g;
    e || (e = 224);
    const {
      width: n,
      height: a
    } = r(this, At), o = new lc();
    let l = r(this, At), h = n, c = a, u = null;
    if (s) {
      if (n > s || a > s) {
        const T = Math.min(s / n, s / a);
        h = Math.floor(n * T), c = Math.floor(a * T);
      }
      u = document.createElement("canvas");
      const m = u.width = Math.ceil(h * o.sx), A = u.height = Math.ceil(c * o.sy);
      r(this, De) || (l = y(this, it, uh).call(this, m, A));
      const _ = u.getContext("2d");
      _.filter = this._uiManager.hcmFilter;
      let v = "white", S = "#cfcfd8";
      this._uiManager.hcmFilter !== "none" ? S = "black" : (g = window.matchMedia) != null && g.call(window, "(prefers-color-scheme: dark)").matches && (v = "#8f8f9d", S = "#42414d");
      const E = 15, w = E * o.sx, C = E * o.sy, k = new OffscreenCanvas(w * 2, C * 2), x = k.getContext("2d");
      x.fillStyle = v, x.fillRect(0, 0, w * 2, C * 2), x.fillStyle = S, x.fillRect(0, 0, w, C), x.fillRect(w, C, w, C), _.fillStyle = _.createPattern(k, "repeat"), _.fillRect(0, 0, m, A), _.drawImage(l, 0, 0, l.width, l.height, 0, 0, m, A);
    }
    let p = null;
    if (i) {
      let m, A;
      if (o.symmetric && l.width < e && l.height < e)
        m = l.width, A = l.height;
      else if (l = r(this, At), n > e || a > e) {
        const S = Math.min(e / n, e / a);
        m = Math.floor(n * S), A = Math.floor(a * S), r(this, De) || (l = y(this, it, uh).call(this, m, A));
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
    return r(this, Is);
  }
  static async deserialize(e, s, i) {
    var A;
    let n = null;
    if (e instanceof vp) {
      const {
        data: {
          rect: _,
          rotation: v,
          id: S,
          structParent: E,
          popupRef: w
        },
        container: C,
        parent: {
          page: {
            pageNumber: k
          }
        }
      } = e, x = C.querySelector("canvas"), T = i.imageManager.getFromCanvas(C.id, x);
      x.remove();
      const P = ((A = await s._structTree.getAriaAttributes(`${vd}${S}`)) == null ? void 0 : A.get("aria-label")) || "";
      n = e = {
        annotationType: X.STAMP,
        bitmapId: T.id,
        bitmap: T.bitmap,
        pageIndex: k - 1,
        rect: _.slice(0),
        rotation: v,
        id: S,
        deleted: !1,
        accessibilityData: {
          decorative: !1,
          altText: P
        },
        isSvg: !1,
        structParent: E,
        popupRef: w
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
    c && i.imageManager.isValidId(c) ? (f(a, qt, c), l && f(a, At, l)) : f(a, di, h), f(a, De, u);
    const [g, m] = a.pageDimensions;
    return a.width = (o[2] - o[0]) / g, a.height = (o[3] - o[1]) / m, a.annotationElementId = e.id || null, p && (a.altTextData = p), a._initialData = n, f(a, Ra, !!n), a;
  }
  serialize(e = !1, s = null) {
    if (this.isEmpty())
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const i = {
      annotationType: X.STAMP,
      bitmapId: r(this, qt),
      pageIndex: this.pageIndex,
      rect: this.getRect(0, 0),
      rotation: this.rotation,
      isSvg: r(this, De),
      structTreeParentId: this._structTreeParentId
    };
    if (e)
      return i.bitmapUrl = y(this, it, ph).call(this, !0), i.accessibilityData = this.serializeAltText(!0), i;
    const {
      decorative: n,
      altText: a
    } = this.serializeAltText(!1);
    if (!n && a && (i.accessibilityData = {
      type: "Figure",
      alt: a
    }), this.annotationElementId) {
      const l = y(this, it, Jp).call(this, i);
      if (l.isSame)
        return null;
      l.isSameAltText ? delete i.accessibilityData : i.accessibilityData.structParent = this._initialData.structParent ?? -1;
    }
    if (i.id = this.annotationElementId, s === null)
      return i;
    s.stamps || (s.stamps = /* @__PURE__ */ new Map());
    const o = r(this, De) ? (i.rect[2] - i.rect[0]) * (i.rect[3] - i.rect[1]) : null;
    if (!s.stamps.has(r(this, qt)))
      s.stamps.set(r(this, qt), {
        area: o,
        serialized: i
      }), i.bitmap = y(this, it, ph).call(this, !1);
    else if (r(this, De)) {
      const l = s.stamps.get(r(this, qt));
      o > l.area && (l.area = o, l.serialized.bitmap.close(), l.serialized.bitmap = y(this, it, ph).call(this, !1));
    }
    return i;
  }
  renderAnnotationElement(e) {
    return e.updateEdited({
      rect: this.getRect(0, 0)
    }), null;
  }
};
At = new WeakMap(), qt = new WeakMap(), qi = new WeakMap(), di = new WeakMap(), Yi = new WeakMap(), La = new WeakMap(), Is = new WeakMap(), Ds = new WeakMap(), De = new WeakMap(), Ra = new WeakMap(), it = new WeakSet(), Ja = function(e, s = !1) {
  if (!e) {
    this.remove();
    return;
  }
  f(this, At, e.bitmap), s || (f(this, qt, e.id), f(this, De, e.isSvg)), e.file && f(this, La, e.file.name), y(this, it, dd).call(this);
}, to = function() {
  if (f(this, qi, null), this._uiManager.enableWaiting(!1), !!r(this, Is)) {
    if (this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && r(this, At)) {
      this._editToolbar.hide(), this._uiManager.editAltText(this, !0);
      return;
    }
    if (!this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && r(this, At)) {
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
}, dh = function() {
  if (r(this, qt)) {
    this._uiManager.enableWaiting(!0), this._uiManager.imageManager.getFromId(r(this, qt)).then((i) => y(this, it, Ja).call(this, i, !0)).finally(() => y(this, it, to).call(this));
    return;
  }
  if (r(this, di)) {
    const i = r(this, di);
    f(this, di, null), this._uiManager.enableWaiting(!0), f(this, qi, this._uiManager.imageManager.getFromUrl(i).then((n) => y(this, it, Ja).call(this, n)).finally(() => y(this, it, to).call(this)));
    return;
  }
  if (r(this, Yi)) {
    const i = r(this, Yi);
    f(this, Yi, null), this._uiManager.enableWaiting(!0), f(this, qi, this._uiManager.imageManager.getFromFile(i).then((n) => y(this, it, Ja).call(this, n)).finally(() => y(this, it, to).call(this)));
    return;
  }
  const e = document.createElement("input");
  e.type = "file", e.accept = so.supportedTypesStr;
  const s = this._uiManager._signal;
  f(this, qi, new Promise((i) => {
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
        }), y(this, it, Ja).call(this, n);
      }
      i();
    }, {
      signal: s
    }), e.addEventListener("cancel", () => {
      this.remove(), i();
    }, {
      signal: s
    });
  }).finally(() => y(this, it, to).call(this))), e.click();
}, dd = function() {
  var u;
  const {
    div: e
  } = this;
  let {
    width: s,
    height: i
  } = r(this, At);
  const [n, a] = this.pageDimensions, o = 0.75;
  if (this.width)
    s = this.width * n, i = this.height * a;
  else if (s > o * n || i > o * a) {
    const p = Math.min(o * n / s, o * a / i);
    s *= p, i *= p;
  }
  const [l, h] = this.parentDimensions;
  this.setDims(s * l / n, i * h / a), this._uiManager.enableWaiting(!1);
  const c = f(this, Is, document.createElement("canvas"));
  c.setAttribute("role", "img"), this.addContainer(c), this.width = s / n, this.height = i / a, (u = this._initialOptions) != null && u.isCentered ? this.center() : this.fixAndSetPosition(), this._initialOptions = null, (!this._uiManager.useNewAltTextWhenAddingImage || !this._uiManager.useNewAltTextFlow || this.annotationElementId) && (e.hidden = !1), y(this, it, ud).call(this), r(this, Ra) || (this.parent.addUndoableEditor(this), f(this, Ra, !0)), this._reportTelemetry({
    action: "inserted_image"
  }), r(this, La) && c.setAttribute("aria-label", r(this, La));
}, uh = function(e, s) {
  const {
    width: i,
    height: n
  } = r(this, At);
  let a = i, o = n, l = r(this, At);
  for (; a > 2 * e || o > 2 * s; ) {
    const h = a, c = o;
    a > 2 * e && (a = a >= 16384 ? Math.floor(a / 2) - 1 : Math.ceil(a / 2)), o > 2 * s && (o = o >= 16384 ? Math.floor(o / 2) - 1 : Math.ceil(o / 2));
    const u = new OffscreenCanvas(a, o);
    u.getContext("2d").drawImage(l, 0, 0, h, c, 0, 0, a, o), l = u.transferToImageBitmap();
  }
  return l;
}, ud = function() {
  const [e, s] = this.parentDimensions, {
    width: i,
    height: n
  } = this, a = new lc(), o = Math.ceil(i * e * a.sx), l = Math.ceil(n * s * a.sy), h = r(this, Is);
  if (!h || h.width === o && h.height === l)
    return;
  h.width = o, h.height = l;
  const c = r(this, De) ? r(this, At) : y(this, it, uh).call(this, o, l), u = h.getContext("2d");
  u.filter = this._uiManager.hcmFilter, u.drawImage(c, 0, 0, c.width, c.height, 0, 0, o, l);
}, ph = function(e) {
  if (e) {
    if (r(this, De)) {
      const n = this._uiManager.imageManager.getSvgUrl(r(this, qt));
      if (n)
        return n;
    }
    const s = document.createElement("canvas");
    return {
      width: s.width,
      height: s.height
    } = r(this, At), s.getContext("2d").drawImage(r(this, At), 0, 0), s.toDataURL();
  }
  if (r(this, De)) {
    const [s, i] = this.pageDimensions, n = Math.round(this.width * s * en.PDF_TO_CSS_UNITS), a = Math.round(this.height * i * en.PDF_TO_CSS_UNITS), o = new OffscreenCanvas(n, a);
    return o.getContext("2d").drawImage(r(this, At), 0, 0, r(this, At).width, r(this, At).height, 0, 0, n, a), o.transferToImageBitmap();
  }
  return structuredClone(r(this, At));
}, Jp = function(e) {
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
}, U(so, "_type", "stamp"), U(so, "_editorType", X.STAMP);
let cd = so;
var dr, Ia, Fs, Ki, ui, Xe, Qi, Da, ur, cs, pi, se, fi, $, Zi, bt, tf, ys, fd, gd, fh;
const Ze = class Ze {
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
    b(this, bt);
    b(this, dr);
    b(this, Ia, !1);
    b(this, Fs, null);
    b(this, Ki, null);
    b(this, ui, null);
    b(this, Xe, /* @__PURE__ */ new Map());
    b(this, Qi, !1);
    b(this, Da, !1);
    b(this, ur, !1);
    b(this, cs, null);
    b(this, pi, null);
    b(this, se, null);
    b(this, fi, null);
    b(this, $);
    const u = [...r(Ze, Zi).values()];
    if (!Ze._initialized) {
      Ze._initialized = !0;
      for (const p of u)
        p.initialize(c, t);
    }
    t.registerEditorTypes(u), f(this, $, t), this.pageIndex = e, this.div = s, f(this, dr, n), f(this, Fs, a), this.viewport = h, f(this, se, l), this.drawLayer = o, this._structTree = i, r(this, $).addLayer(this);
  }
  get isEmpty() {
    return r(this, Xe).size === 0;
  }
  get isInvisible() {
    return this.isEmpty && r(this, $).getMode() === X.NONE;
  }
  updateToolbar(t) {
    r(this, $).updateToolbar(t);
  }
  updateMode(t = r(this, $).getMode()) {
    switch (y(this, bt, fh).call(this), t) {
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
    for (const s of r(Ze, Zi).values())
      e.toggle(`${s._type}Editing`, t === s._editorType);
    this.div.hidden = !1;
  }
  hasTextLayer(t) {
    var e;
    return t === ((e = r(this, se)) == null ? void 0 : e.div);
  }
  setEditingState(t) {
    r(this, $).setEditingState(t);
  }
  addCommands(t) {
    r(this, $).addCommands(t);
  }
  cleanUndoStack(t) {
    r(this, $).cleanUndoStack(t);
  }
  toggleDrawing(t = !1) {
    this.div.classList.toggle("drawing", !t);
  }
  togglePointerEvents(t = !1) {
    this.div.classList.toggle("disabled", !t);
  }
  toggleAnnotationLayerPointerEvents(t = !1) {
    var e;
    (e = r(this, Fs)) == null || e.div.classList.toggle("disabled", !t);
  }
  async enable() {
    f(this, ur, !0), this.div.tabIndex = 0, this.togglePointerEvents(!0);
    const t = /* @__PURE__ */ new Set();
    for (const s of r(this, Xe).values())
      s.enableEditing(), s.show(!0), s.annotationElementId && (r(this, $).removeChangedExistingAnnotation(s), t.add(s.annotationElementId));
    if (!r(this, Fs)) {
      f(this, ur, !1);
      return;
    }
    const e = r(this, Fs).getEditableAnnotations();
    for (const s of e) {
      if (s.hide(), r(this, $).isDeletedAnnotationElement(s.data.id) || t.has(s.data.id))
        continue;
      const i = await this.deserialize(s);
      i && (this.addOrRebuild(i), i.enableEditing());
    }
    f(this, ur, !1);
  }
  disable() {
    var i;
    f(this, Da, !0), this.div.tabIndex = -1, this.togglePointerEvents(!1);
    const t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map();
    for (const n of r(this, Xe).values())
      if (n.disableEditing(), !!n.annotationElementId) {
        if (n.serialize() !== null) {
          t.set(n.annotationElementId, n);
          continue;
        } else
          e.set(n.annotationElementId, n);
        (i = this.getEditableAnnotation(n.annotationElementId)) == null || i.show(), n.remove();
      }
    if (r(this, Fs)) {
      const n = r(this, Fs).getEditableAnnotations();
      for (const a of n) {
        const {
          id: o
        } = a.data;
        if (r(this, $).isDeletedAnnotationElement(o))
          continue;
        let l = e.get(o);
        if (l) {
          l.resetAnnotationElement(a), l.show(!1), a.show();
          continue;
        }
        l = t.get(o), l && (r(this, $).addChangedExistingAnnotation(l), l.renderAnnotationElement(a) && l.show(!1)), a.show();
      }
    }
    y(this, bt, fh).call(this), this.isEmpty && (this.div.hidden = !0);
    const {
      classList: s
    } = this.div;
    for (const n of r(Ze, Zi).values())
      s.remove(`${n._type}Editing`);
    this.disableTextSelection(), this.toggleAnnotationLayerPointerEvents(!0), f(this, Da, !1);
  }
  getEditableAnnotation(t) {
    var e;
    return ((e = r(this, Fs)) == null ? void 0 : e.getEditableAnnotation(t)) || null;
  }
  setActiveEditor(t) {
    r(this, $).getActive() !== t && r(this, $).setActiveEditor(t);
  }
  enableTextSelection() {
    var t;
    if (this.div.tabIndex = -1, (t = r(this, se)) != null && t.div && !r(this, fi)) {
      f(this, fi, new AbortController());
      const e = r(this, $).combinedSignal(r(this, fi));
      r(this, se).div.addEventListener("pointerdown", y(this, bt, tf).bind(this), {
        signal: e
      }), r(this, se).div.classList.add("highlighting");
    }
  }
  disableTextSelection() {
    var t;
    this.div.tabIndex = 0, (t = r(this, se)) != null && t.div && r(this, fi) && (r(this, fi).abort(), f(this, fi, null), r(this, se).div.classList.remove("highlighting"));
  }
  enableClick() {
    if (r(this, Ki))
      return;
    f(this, Ki, new AbortController());
    const t = r(this, $).combinedSignal(r(this, Ki));
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
    (t = r(this, Ki)) == null || t.abort(), f(this, Ki, null);
  }
  attach(t) {
    r(this, Xe).set(t.id, t);
    const {
      annotationElementId: e
    } = t;
    e && r(this, $).isDeletedAnnotationElement(e) && r(this, $).removeDeletedAnnotationElement(t);
  }
  detach(t) {
    var e;
    r(this, Xe).delete(t.id), (e = r(this, dr)) == null || e.removePointerInTextLayer(t.contentDiv), !r(this, Da) && t.annotationElementId && r(this, $).addDeletedAnnotationElement(t);
  }
  remove(t) {
    this.detach(t), r(this, $).removeEditor(t), t.div.remove(), t.isAttachedToDOM = !1;
  }
  changeParent(t) {
    var e;
    t.parent !== this && (t.parent && t.annotationElementId && (r(this, $).addDeletedAnnotationElement(t.annotationElementId), vt.deleteAnnotationElement(t), t.annotationElementId = null), this.attach(t), (e = t.parent) == null || e.detach(t), t.setParent(this), t.div && t.isAttachedToDOM && (t.div.remove(), this.div.append(t.div)));
  }
  add(t) {
    if (!(t.parent === this && t.isAttachedToDOM)) {
      if (this.changeParent(t), r(this, $).addEditor(t), this.attach(t), !t.isAttachedToDOM) {
        const e = t.render();
        this.div.append(e), t.isAttachedToDOM = !0;
      }
      t.fixAndSetPosition(), t.onceAdded(!r(this, ur)), r(this, $).addToAnnotationStorage(t), t._reportTelemetry(t.telemetryInitialData);
    }
  }
  moveEditorInDOM(t) {
    var s;
    if (!t.isAttachedToDOM)
      return;
    const {
      activeElement: e
    } = document;
    t.div.contains(e) && !r(this, ui) && (t._focusEventsAllowed = !1, f(this, ui, setTimeout(() => {
      f(this, ui, null), t.div.contains(document.activeElement) ? t._focusEventsAllowed = !0 : (t.div.addEventListener("focusin", () => {
        t._focusEventsAllowed = !0;
      }, {
        once: !0,
        signal: r(this, $)._signal
      }), e.focus());
    }, 0))), t._structTreeParentId = (s = r(this, dr)) == null ? void 0 : s.moveElementInDOM(this.div, t.div, t.contentDiv, !0);
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
    return r(this, $).getId();
  }
  combinedSignal(t) {
    return r(this, $).combinedSignal(t);
  }
  canCreateNewEmptyEditor() {
    var t;
    return (t = r(this, bt, ys)) == null ? void 0 : t.canCreateNewEmptyEditor();
  }
  pasteEditor(t, e) {
    r(this, $).updateToolbar(t), r(this, $).updateMode(t);
    const {
      offsetX: s,
      offsetY: i
    } = y(this, bt, gd).call(this), n = this.getNextId(), a = y(this, bt, fd).call(this, {
      parent: this,
      id: n,
      x: s,
      y: i,
      uiManager: r(this, $),
      isCentered: !0,
      ...e
    });
    a && this.add(a);
  }
  async deserialize(t) {
    var e;
    return await ((e = r(Ze, Zi).get(t.annotationType ?? t.annotationEditorType)) == null ? void 0 : e.deserialize(t, this, r(this, $))) || null;
  }
  createAndAddNewEditor(t, e, s = {}) {
    const i = this.getNextId(), n = y(this, bt, fd).call(this, {
      parent: this,
      id: i,
      x: t.offsetX,
      y: t.offsetY,
      uiManager: r(this, $),
      isCentered: e,
      ...s
    });
    return n && this.add(n), n;
  }
  addNewEditor() {
    this.createAndAddNewEditor(y(this, bt, gd).call(this), !0);
  }
  setSelected(t) {
    r(this, $).setSelected(t);
  }
  toggleSelected(t) {
    r(this, $).toggleSelected(t);
  }
  unselect(t) {
    r(this, $).unselect(t);
  }
  pointerup(t) {
    var s;
    const {
      isMac: e
    } = de.platform;
    if (!(t.button !== 0 || t.ctrlKey && e) && t.target === this.div && r(this, Qi) && (f(this, Qi, !1), !((s = r(this, bt, ys)) != null && s.isDrawer && r(this, bt, ys).supportMultipleDrawings))) {
      if (!r(this, Ia)) {
        f(this, Ia, !0);
        return;
      }
      if (r(this, $).getMode() === X.STAMP) {
        r(this, $).unselectAll();
        return;
      }
      this.createAndAddNewEditor(t, !1);
    }
  }
  pointerdown(t) {
    var i;
    if (r(this, $).getMode() === X.HIGHLIGHT && this.enableTextSelection(), r(this, Qi)) {
      f(this, Qi, !1);
      return;
    }
    const {
      isMac: e
    } = de.platform;
    if (t.button !== 0 || t.ctrlKey && e || t.target !== this.div)
      return;
    if (f(this, Qi, !0), (i = r(this, bt, ys)) != null && i.isDrawer) {
      this.startDrawingSession(t);
      return;
    }
    const s = r(this, $).getActive();
    f(this, Ia, !s || s.isEmpty());
  }
  startDrawingSession(t) {
    if (this.div.focus(), r(this, cs)) {
      r(this, bt, ys).startDrawing(this, r(this, $), !1, t);
      return;
    }
    r(this, $).setCurrentDrawingSession(this), f(this, cs, new AbortController());
    const e = r(this, $).combinedSignal(r(this, cs));
    this.div.addEventListener("blur", ({
      relatedTarget: s
    }) => {
      s && !this.div.contains(s) && (f(this, pi, null), this.commitOrRemove());
    }, {
      signal: e
    }), r(this, bt, ys).startDrawing(this, r(this, $), !1, t);
  }
  pause(t) {
    if (t) {
      const {
        activeElement: e
      } = document;
      this.div.contains(e) && f(this, pi, e);
      return;
    }
    r(this, pi) && setTimeout(() => {
      var e;
      (e = r(this, pi)) == null || e.focus(), f(this, pi, null);
    }, 0);
  }
  endDrawingSession(t = !1) {
    return r(this, cs) ? (r(this, $).setCurrentDrawingSession(null), r(this, cs).abort(), f(this, cs, null), f(this, pi, null), r(this, bt, ys).endDrawing(t)) : null;
  }
  findNewParent(t, e, s) {
    const i = r(this, $).findParent(e, s);
    return i === null || i === this ? !1 : (i.changeParent(t), !0);
  }
  commitOrRemove() {
    return r(this, cs) ? (this.endDrawingSession(), !0) : !1;
  }
  onScaleChanging() {
    r(this, cs) && r(this, bt, ys).onScaleChangingWhenDrawing(this);
  }
  destroy() {
    var t, e;
    this.commitOrRemove(), ((t = r(this, $).getActive()) == null ? void 0 : t.parent) === this && (r(this, $).commitOrRemove(), r(this, $).setActiveEditor(null)), r(this, ui) && (clearTimeout(r(this, ui)), f(this, ui, null));
    for (const s of r(this, Xe).values())
      (e = r(this, dr)) == null || e.removePointerInTextLayer(s.contentDiv), s.setParent(null), s.isAttachedToDOM = !1, s.div.remove();
    this.div = null, r(this, Xe).clear(), r(this, $).removeLayer(this);
  }
  render({
    viewport: t
  }) {
    this.viewport = t, fr(this.div, t);
    for (const e of r(this, $).getEditors(this.pageIndex))
      this.add(e), e.rebuild();
    this.updateMode();
  }
  update({
    viewport: t
  }) {
    r(this, $).commitOrRemove(), y(this, bt, fh).call(this);
    const e = this.viewport.rotation, s = t.rotation;
    if (this.viewport = t, fr(this.div, {
      rotation: s
    }), e !== s)
      for (const i of r(this, Xe).values())
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
    return r(this, $).viewParameters.realScale;
  }
};
dr = new WeakMap(), Ia = new WeakMap(), Fs = new WeakMap(), Ki = new WeakMap(), ui = new WeakMap(), Xe = new WeakMap(), Qi = new WeakMap(), Da = new WeakMap(), ur = new WeakMap(), cs = new WeakMap(), pi = new WeakMap(), se = new WeakMap(), fi = new WeakMap(), $ = new WeakMap(), Zi = new WeakMap(), bt = new WeakSet(), tf = function(t) {
  r(this, $).unselectAll();
  const {
    target: e
  } = t;
  if (e === r(this, se).div || (e.getAttribute("role") === "img" || e.classList.contains("endOfContent")) && r(this, se).div.contains(e)) {
    const {
      isMac: s
    } = de.platform;
    if (t.button !== 0 || t.ctrlKey && s)
      return;
    r(this, $).showAllEditors("highlight", !0, !0), r(this, se).div.classList.add("free"), this.toggleDrawing(), _h.startHighlighting(this, r(this, $).direction === "ltr", {
      target: r(this, se).div,
      x: t.x,
      y: t.y
    }), r(this, se).div.addEventListener("pointerup", () => {
      r(this, se).div.classList.remove("free"), this.toggleDrawing(!0);
    }, {
      once: !0,
      signal: r(this, $)._signal
    }), t.preventDefault();
  }
}, ys = function() {
  return r(Ze, Zi).get(r(this, $).getMode());
}, fd = function(t) {
  const e = r(this, bt, ys);
  return e ? new e.prototype.constructor(t) : null;
}, gd = function() {
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
}, fh = function() {
  for (const t of r(this, Xe).values())
    t.isEmpty() && t.remove();
}, U(Ze, "_initialized", !1), b(Ze, Zi, new Map([qc, hd, cd, _h].map((t) => [t._editorType, t])));
let pd = Ze;
var ds, Ll, ce, pr, $h, ef, Ns, bd, sf, yd;
const Zt = class Zt {
  constructor({
    pageIndex: t
  }) {
    b(this, Ns);
    b(this, ds, null);
    b(this, Ll, 0);
    b(this, ce, /* @__PURE__ */ new Map());
    b(this, pr, /* @__PURE__ */ new Map());
    this.pageIndex = t;
  }
  setParent(t) {
    if (!r(this, ds)) {
      f(this, ds, t);
      return;
    }
    if (r(this, ds) !== t) {
      if (r(this, ce).size > 0)
        for (const e of r(this, ce).values())
          e.remove(), t.append(e);
      f(this, ds, t);
    }
  }
  static get _svgFactory() {
    return J(this, "_svgFactory", new kd());
  }
  draw(t, e = !1, s = !1) {
    const i = re(this, Ll)._++, n = y(this, Ns, bd).call(this), a = Zt._svgFactory.createElement("defs");
    n.append(a);
    const o = Zt._svgFactory.createElement("path");
    a.append(o);
    const l = `path_p${this.pageIndex}_${i}`;
    o.setAttribute("id", l), o.setAttribute("vector-effect", "non-scaling-stroke"), e && r(this, pr).set(i, o);
    const h = s ? y(this, Ns, sf).call(this, a, l) : null, c = Zt._svgFactory.createElement("use");
    return n.append(c), c.setAttribute("href", `#${l}`), this.updateProperties(n, t), r(this, ce).set(i, n), {
      id: i,
      clipPathId: `url(#${h})`
    };
  }
  drawOutline(t, e) {
    const s = re(this, Ll)._++, i = y(this, Ns, bd).call(this), n = Zt._svgFactory.createElement("defs");
    i.append(n);
    const a = Zt._svgFactory.createElement("path");
    n.append(a);
    const o = `path_p${this.pageIndex}_${s}`;
    a.setAttribute("id", o), a.setAttribute("vector-effect", "non-scaling-stroke");
    let l;
    if (e) {
      const u = Zt._svgFactory.createElement("mask");
      n.append(u), l = `mask_p${this.pageIndex}_${s}`, u.setAttribute("id", l), u.setAttribute("maskUnits", "objectBoundingBox");
      const p = Zt._svgFactory.createElement("rect");
      u.append(p), p.setAttribute("width", "1"), p.setAttribute("height", "1"), p.setAttribute("fill", "white");
      const g = Zt._svgFactory.createElement("use");
      u.append(g), g.setAttribute("href", `#${o}`), g.setAttribute("stroke", "none"), g.setAttribute("fill", "black"), g.setAttribute("fill-rule", "nonzero"), g.classList.add("mask");
    }
    const h = Zt._svgFactory.createElement("use");
    i.append(h), h.setAttribute("href", `#${o}`), l && h.setAttribute("mask", `url(#${l})`);
    const c = h.cloneNode();
    return i.append(c), h.classList.add("mainOutline"), c.classList.add("secondaryOutline"), this.updateProperties(i, t), r(this, ce).set(s, i), s;
  }
  finalizeDraw(t, e) {
    r(this, pr).delete(t), this.updateProperties(t, e);
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
    } = e, o = typeof t == "number" ? r(this, ce).get(t) : t;
    if (o) {
      if (s && y(this, Ns, yd).call(this, o, s), i && y(l = Zt, $h, ef).call(l, o, i), n) {
        const {
          classList: h
        } = o;
        for (const [c, u] of Object.entries(n))
          h.toggle(c, u);
      }
      if (a) {
        const c = o.firstChild.firstChild;
        y(this, Ns, yd).call(this, c, a);
      }
    }
  }
  updateParent(t, e) {
    if (e === this)
      return;
    const s = r(this, ce).get(t);
    s && (r(e, ds).append(s), r(this, ce).delete(t), r(e, ce).set(t, s));
  }
  remove(t) {
    r(this, pr).delete(t), r(this, ds) !== null && (r(this, ce).get(t).remove(), r(this, ce).delete(t));
  }
  destroy() {
    f(this, ds, null);
    for (const t of r(this, ce).values())
      t.remove();
    r(this, ce).clear(), r(this, pr).clear();
  }
};
ds = new WeakMap(), Ll = new WeakMap(), ce = new WeakMap(), pr = new WeakMap(), $h = new WeakSet(), ef = function(t, [e, s, i, n]) {
  const {
    style: a
  } = t;
  a.top = `${100 * s}%`, a.left = `${100 * e}%`, a.width = `${100 * i}%`, a.height = `${100 * n}%`;
}, Ns = new WeakSet(), bd = function() {
  const t = Zt._svgFactory.create(1, 1, !0);
  return r(this, ds).append(t), t.setAttribute("aria-hidden", !0), t;
}, sf = function(t, e) {
  const s = Zt._svgFactory.createElement("clipPath");
  t.append(s);
  const i = `clip_${e}`;
  s.setAttribute("id", i), s.setAttribute("clipPathUnits", "objectBoundingBox");
  const n = Zt._svgFactory.createElement("use");
  return s.append(n), n.setAttribute("href", `#${e}`), n.classList.add("clip"), i;
}, yd = function(t, e) {
  for (const [s, i] of Object.entries(e))
    i === null ? t.removeAttribute(s) : t.setAttribute(s, i);
}, b(Zt, $h);
let md = Zt;
globalThis.pdfjsTestingUtils = {
  HighlightOutliner: Kc
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
var am = V.GlobalWorkerOptions;
V.ImageKind;
V.InvalidPDFException;
V.MissingPDFException;
V.OPS;
V.OutputScale;
V.PDFDataRangeTransport;
V.PDFDateString;
V.PDFWorker;
var nc = V.PasswordResponses;
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
var om = V.getDocument;
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
var lm = V.version;
am.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${lm}/pdf.worker.mjs`;
class hm {
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
    const s = om(
      typeof e == "string" ? { url: e } : { data: e }
    );
    s.onPassword = (n, a) => {
      this._isPasswordProtected = !0;
      const o = a === ((nc == null ? void 0 : nc.INCORRECT_PASSWORD) ?? 2);
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
class cm {
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
class dm {
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
const um = {
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
      customComponent: null,
      // string or HTMLElement
      logo: null,
      // HTML/SVG string or image URL
      brandText: null,
      // Custom string (or false/"" to hide)
      style: null
      // Key-value object for inline CSS overrides
    },
    sidebar: {
      thumbnails: !0
    },
    viewer: {
      zoom: !0
    }
  }
};
function Pd(d, t) {
  if (!t || typeof t != "object") return d;
  const e = Object.assign({}, d);
  for (const s of Object.keys(t))
    t[s] !== null && typeof t[s] == "object" && !Array.isArray(t[s]) ? e[s] = Pd(d[s] || {}, t[s]) : e[s] = t[s];
  return e;
}
function pm(d = {}) {
  return Pd(um, d);
}
function fm(d) {
  return d ? typeof d == "string" ? document.querySelector(d) : d instanceof HTMLElement ? d : null : null;
}
function O(d, t = [], e = {}) {
  const s = document.createElement(d);
  t.length && s.classList.add(...t);
  for (const [i, n] of Object.entries(e))
    s.setAttribute(i, n);
  return s;
}
function gm(d, t) {
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
  const u = mm();
  h.appendChild(u);
  const p = bm();
  p.style.display = "none", h.appendChild(p);
  const g = ym();
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
function mm() {
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
function bm() {
  const d = O("div", ["psdk-mode-banner"]);
  return d.id = "psdk-mode-banner", d.innerHTML = `
    <div class="psdk-mode-banner__dot"></div>
    <span>Signature Mode — Click anywhere to place</span>
  `, d;
}
function ym() {
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
function Am(d, t, e) {
  var Lt, _t, Os, vi, Ut;
  const s = ((Lt = t.ui) == null ? void 0 : Lt.topbar) || {}, i = O("div", ["psdk-topbar__brand"]), n = O("div", ["psdk-topbar__brand-icon"]), a = O("span", ["psdk-topbar__brand-text"]);
  i.appendChild(n), i.appendChild(a), d.appendChild(i);
  function o(M) {
    if (n.innerHTML = "", M)
      if (n.classList.add("psdk-topbar__brand-icon--custom"), typeof M == "string") {
        const I = M.trim();
        if (I.startsWith("<"))
          n.innerHTML = I;
        else {
          const nt = O("img", [], {
            src: I,
            alt: "Logo",
            style: "max-height: 28px; max-width: 120px; object-fit: contain; display: block;"
          });
          n.appendChild(nt);
        }
      } else M instanceof HTMLElement && n.appendChild(M);
    else
      n.classList.remove("psdk-topbar__brand-icon--custom"), n.innerHTML = `
        <svg viewBox="0 0 24 24" fill="white">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/>
          <path d="M14 2v6h6" opacity=".5"/>
        </svg>
      `;
  }
  function l(M) {
    M === !1 || M === "" ? a.style.display = "none" : (a.style.display = "", a.textContent = typeof M == "string" ? M : "PDF Viewer");
  }
  let h = [];
  function c(M) {
    for (const I of h)
      d.style[I] = "";
    if (h = [], M && typeof M == "object")
      for (const [I, nt] of Object.entries(M))
        d.style[I] = nt, h.push(I);
  }
  o(s.logo), l(s.brandText), c(s.style);
  const u = O("div", ["psdk-topbar__secure-badge", "psdk-tooltip"]);
  u.setAttribute("data-tooltip", "Password Protected (Encrypted)"), u.style.display = "none", u.style.marginLeft = "8px", u.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  `, i.appendChild(u);
  const p = (
    /** @type {HTMLInputElement} */
    O("input", ["psdk-file-input"], {
      type: "file",
      accept: ".pdf,application/pdf",
      id: "psdk-file-input",
      "aria-hidden": "true"
    })
  );
  document.body.appendChild(p);
  let g = null, m = null, A = null, _ = null, v = null, S = null, E = null, w = null, C = null, k = null, x = null, T = null, P = null, z = null, D = null, et = null, Q = t.scale || 1.5;
  s.upload !== !1 && (g = bs("psdk-btn-upload", we.upload, ((_t = t.labels) == null ? void 0 : _t.uploadBtn) || "Open PDF", ["psdk-btn", "psdk-tooltip"], "Open PDF file"), g.addEventListener("click", () => p.click()), p.addEventListener("change", (M) => {
    var nt;
    const I = (
      /** @type {HTMLInputElement} */
      (nt = M.target.files) == null ? void 0 : nt[0]
    );
    I && (e.loadDocument(I), p.value = "");
  }), d.appendChild(g)), m = O("div", ["psdk-topbar__divider"]), d.appendChild(m), s.signature !== !1 && (A = bs("psdk-btn-signature", we.signature, ((Os = t.labels) == null ? void 0 : Os.signatureBtn) || "Add Signature", ["psdk-btn", "psdk-btn--accent", "psdk-tooltip"], "Add a signature"), A.addEventListener("click", () => {
    e.openSignatureModal();
  }), d.appendChild(A)), s.eStamp !== !1 && (_ = bs("psdk-btn-estamp", we.estamp, ((vi = t.labels) == null ? void 0 : vi.estampBtn) || "E-Materai", ["psdk-btn", "psdk-btn--danger", "psdk-tooltip"], "Add E-Materai stamp"), _.addEventListener("click", () => {
    e.openEStampModal();
  }), d.appendChild(_));
  const Y = bs("psdk-btn-clear", we.clear, ((Ut = t.labels) == null ? void 0 : Ut.clearBtn) || "Clear All", ["psdk-btn", "psdk-btn--ghost", "psdk-tooltip"], "Clear all signatures");
  if (Y.style.display = "none", Y.addEventListener("click", () => {
    e.clearSignatures(), St(0);
  }), d.appendChild(Y), d.appendChild(O("div", ["psdk-topbar__spacer"])), D = O("div", ["psdk-topbar__custom"]), s.customComponent && (typeof s.customComponent == "string" ? D.innerHTML = s.customComponent : s.customComponent instanceof HTMLElement && D.appendChild(s.customComponent)), d.appendChild(D), et = O("div", ["psdk-topbar__divider"]), d.appendChild(et), s.themeToggle !== !1) {
    const M = t.theme === "light";
    P = bs("psdk-btn-theme", M ? we.moon : we.sun, "", ["psdk-btn", "psdk-btn--ghost", "psdk-btn--icon", "psdk-tooltip"], "Toggle Theme"), P.addEventListener("click", () => {
      const I = d.closest(".psdk-root");
      if (!I) return;
      I.classList.contains("psdk-light") ? (I.classList.remove("psdk-light"), P.innerHTML = we.sun, t.theme = "dark") : (I.classList.add("psdk-light"), P.innerHTML = we.moon, t.theme = "light");
    }), d.appendChild(P);
  }
  if (z = O("div", ["psdk-topbar__divider"]), d.appendChild(z), s.zoom !== !1) {
    v = O("div", ["psdk-pagination"]);
    const M = bs("psdk-btn-zoom-out", we.zoomOut, "", ["psdk-btn", "psdk-btn--ghost", "psdk-btn--icon", "psdk-tooltip"], "Zoom out");
    w = O("span", ["psdk-zoom-badge"]), w.id = "psdk-zoom-badge";
    const I = bs("psdk-btn-zoom-in", we.zoomIn, "", ["psdk-btn", "psdk-btn--ghost", "psdk-btn--icon", "psdk-tooltip"], "Zoom in"), nt = bs("psdk-btn-fit", we.fit, "", ["psdk-btn", "psdk-btn--ghost", "psdk-btn--icon", "psdk-tooltip"], "Fit to screen");
    H(Q), M.addEventListener("click", async () => {
      Q <= 0.25 || (Q = Math.max(0.25, +(Q - 0.25).toFixed(2)), H(Q), await e.setScale(Q));
    }), I.addEventListener("click", async () => {
      Q >= 4 || (Q = Math.min(4, +(Q + 0.25).toFixed(2)), H(Q), await e.setScale(Q));
    }), nt.addEventListener("click", async () => {
      Q = await e.fitToScreen(), H(Q);
    }), v.appendChild(M), v.appendChild(w), v.appendChild(I), v.appendChild(nt), d.appendChild(v), S = O("div", ["psdk-topbar__divider"]), d.appendChild(S);
  }
  if (s.pagination !== !1) {
    E = O("div", ["psdk-pagination"]), x = /** @type {HTMLButtonElement} */
    bs("psdk-btn-prev", we.prevPage, "", ["psdk-btn", "psdk-btn--ghost", "psdk-btn--icon", "psdk-tooltip"], "Previous page"), x.id = "psdk-btn-prev";
    const M = O("div", ["psdk-pagination__indicator"]);
    C = O("input", ["psdk-pagination__current-input"], {
      type: "number",
      min: "1",
      id: "psdk-page-current",
      "aria-label": "Current page"
    }), C.value = "1", C.addEventListener("change", (nt) => {
      const Bs = parseInt(nt.target.value, 10);
      isNaN(Bs) ? nt.target.value = e.currentPage : e.goToPage(Bs) || (nt.target.value = e.currentPage);
    });
    const I = O("span", ["psdk-pagination__sep"]);
    I.textContent = "/", k = O("span", []), k.id = "psdk-page-total", k.textContent = "—", M.appendChild(C), M.appendChild(I), M.appendChild(k), T = /** @type {HTMLButtonElement} */
    bs("psdk-btn-next", we.nextPage, "", ["psdk-btn", "psdk-btn--ghost", "psdk-btn--icon", "psdk-tooltip"], "Next page"), T.id = "psdk-btn-next", x.addEventListener("click", () => e.prevPage()), T.addEventListener("click", () => e.nextPage()), x.disabled = !0, T.disabled = !0, E.appendChild(x), E.appendChild(M), E.appendChild(T), d.appendChild(E);
  }
  e.on("signaturePlaced", () => St(e.getSignatures().length)), e.on("eStampPlaced", () => St(e.getSignatures().length)), e.on("signatureRemoved", () => St(e.getSignatures().length));
  function ut(M, I) {
    C && (C.tagName === "INPUT" ? C.value = M || "" : C.textContent = M || "—"), k && (k.textContent = I || "—"), x && (x.disabled = M <= 1 || e.isPaginationLocked), T && (T.disabled = M >= I || e.isPaginationLocked);
  }
  function R(M) {
    var nt, Bs;
    const I = ((Bs = (nt = t.ui) == null ? void 0 : nt.topbar) == null ? void 0 : Bs.paginationInput) === !1;
    C && (C.disabled = M || I), x && (x.disabled = M || e.currentPage <= 1), T && (T.disabled = M || e.currentPage >= e.totalPages);
  }
  function H(M) {
    const I = Math.round(M * 100) + "%";
    w && (w.textContent = I);
    const nt = document.getElementById("psdk-zoom-status");
    nt && (nt.textContent = I);
  }
  function St(M) {
    const I = document.getElementById("psdk-sig-count-wrap"), nt = document.getElementById("psdk-sig-count");
    I && (I.style.display = M > 0 ? "flex" : "none"), nt && (nt.textContent = `${M} signature${M !== 1 ? "s" : ""}`), Y.style.display = M > 0 ? "inline-flex" : "none";
  }
  function He(M) {
    var Od;
    const I = ((Od = M.ui) == null ? void 0 : Od.topbar) || {};
    if (o(I.logo), l(I.brandText), c(I.style), Et(g, I.upload !== !1), Et(A, I.signature !== !1), Et(_, I.eStamp !== !1), Et(v, I.zoom !== !1), Et(S, I.zoom !== !1), Et(E, I.pagination !== !1), Et(P, I.themeToggle !== !1), C && (C.disabled = I.paginationInput === !1 || e.isPaginationLocked), M.labels) {
      if (g) {
        const Qe = g.querySelector("span");
        Qe && (Qe.textContent = M.labels.uploadBtn || "Open PDF");
      }
      if (A) {
        const Qe = A.querySelector("span");
        Qe && (Qe.textContent = M.labels.signatureBtn || "Add Signature");
      }
      if (_) {
        const Qe = _.querySelector("span");
        Qe && (Qe.textContent = M.labels.estampBtn || "E-Materai");
      }
      if (Y) {
        const Qe = Y.querySelector("span");
        Qe && (Qe.textContent = M.labels.clearBtn || "Clear All");
      }
    }
    let nt = !1;
    I.customComponent !== void 0 ? (D.innerHTML = "", typeof I.customComponent == "string" && I.customComponent.trim() ? (D.innerHTML = I.customComponent, nt = !0) : I.customComponent instanceof HTMLElement && (D.appendChild(I.customComponent), nt = !0)) : nt = D.childNodes.length > 0, Et(et, nt && (I.themeToggle !== !1 || I.zoom !== !1 || I.pagination !== !1)), Et(z, I.themeToggle !== !1 && (I.zoom !== !1 || I.pagination !== !1)), Et(S, I.zoom !== !1 && I.pagination !== !1);
    const Bs = I.upload !== !1, Nd = I.signature !== !1 || I.eStamp !== !1;
    Et(m, Bs && Nd);
  }
  function Et(M, I) {
    M && (M.style.display = I ? "" : "none");
  }
  function fe(M) {
    u.style.display = M ? "inline-flex" : "none";
  }
  return { updatePageIndicator: ut, updateZoomBadge: H, applyConfig: He, setPaginationLocked: R, updateSecureStatus: fe };
}
function bs(d, t, e, s, i) {
  const n = O("button", s, { id: d, type: "button" });
  if (i && n.setAttribute("data-tooltip", i), n.innerHTML = t, e) {
    const a = document.createElement("span");
    a.textContent = e, n.appendChild(a);
  }
  return n;
}
function vm(d, t, e) {
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
      const v = O("div", ["psdk-thumb"]), S = O("div", ["psdk-thumb-skeleton"]);
      v.appendChild(S), a.appendChild(v);
    }
  }
  async function u(A, _) {
    h(), n.textContent = _, c(_), h();
    for (let v = 1; v <= _; v++) {
      const S = O("div", ["psdk-thumb"]);
      S.id = `psdk-thumb-${v}`, S.setAttribute("role", "button"), S.setAttribute("tabindex", "0"), S.setAttribute("aria-label", `Page ${v}`);
      const E = O("div", ["psdk-thumb__canvas-wrap"]), w = (
        /** @type {HTMLCanvasElement} */
        document.createElement("canvas")
      );
      w.setAttribute("aria-hidden", "true"), E.appendChild(w);
      const C = O("div", ["psdk-thumb__label"]);
      C.textContent = `Page ${v}`, S.appendChild(E), S.appendChild(C), a.appendChild(S), o.push(S);
      const k = v;
      S.addEventListener("click", () => e.goToPage(k)), S.addEventListener("keydown", (x) => {
        (x.key === "Enter" || x.key === " ") && (x.preventDefault(), e.goToPage(k));
      }), await A.renderThumbnail(v, w, 0.22).catch(() => {
      });
    }
    p(l);
  }
  function p(A) {
    l = A, o.forEach((v, S) => {
      const E = S + 1 === A;
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
function _m(d, t, e) {
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
      const v = O("button", ["psdk-modal__item"]), S = O("div", ["psdk-modal__item-icon"]);
      _.image ? (S.classList.add("psdk-modal__item-icon--image"), S.innerHTML = `<img src="${_.image}" alt="preview" />`) : S.innerHTML = p ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>' : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>';
      const E = O("div", ["psdk-modal__item-label"]);
      E.textContent = _.label || (p ? "Signature" : "E-Materai"), v.appendChild(S), v.appendChild(E), v.addEventListener("click", () => {
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
function wm(d, t, e) {
  var P, z, D, et, Q, Y;
  const s = O("div", ["psdk-modal-overlay", "psdk-password-overlay"]);
  s.style.display = "none";
  const i = O("div", ["psdk-modal", "psdk-password-modal"]), n = O("div", ["psdk-modal__header"]), a = O("h3", ["psdk-modal__title"]);
  a.textContent = ((P = t.labels) == null ? void 0 : P.passwordModalTitle) || "Password Protected";
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
  const v = O("div", ["psdk-modal__buttons"]), S = O("button", ["psdk-btn", "psdk-btn--ghost"], { type: "button" });
  S.textContent = ((Q = t.labels) == null ? void 0 : Q.cancelBtn) || "Cancel";
  const E = O("button", ["psdk-btn", "psdk-btn--accent"], { type: "submit" });
  E.textContent = ((Y = t.labels) == null ? void 0 : Y.unlockBtn) || "Unlock", v.appendChild(S), v.appendChild(E), p.appendChild(v), l.appendChild(p), i.appendChild(n), i.appendChild(l), s.appendChild(i), d.appendChild(s);
  let w = null, C = null;
  A.addEventListener("click", () => {
    m.type === "password" ? (m.type = "text", A.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>') : (m.type = "password", A.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>');
  });
  function k(ut, R, H) {
    var St;
    w = ut, C = H, m.disabled = !1, E.disabled = !1, S.disabled = !1, o.disabled = !1, E.textContent = ((St = t.labels) == null ? void 0 : St.unlockBtn) || "Unlock", R ? (_.style.display = "flex", m.value = "", m.focus()) : (_.style.display = "none", m.value = "", m.type = "password", A.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>', s.style.display = "flex", setTimeout(() => {
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
  return p.addEventListener("submit", (ut) => {
    var R;
    ut.preventDefault(), m.value && w && (m.disabled = !0, E.disabled = !0, S.disabled = !0, o.disabled = !0, E.textContent = ((R = t.labels) == null ? void 0 : R.unlockingBtn) || "Unlocking...", w(m.value));
  }), S.addEventListener("click", T), o.addEventListener("click", T), s.addEventListener("click", (ut) => {
    ut.target === s && T();
  }), e.on("passwordRequested", ({ updatePassword: ut, isIncorrect: R, cancel: H }) => {
    k(ut, R, H);
  }), e.on("documentLoaded", () => {
    x();
  }), { open: k, close: x };
}
function Em(d = {}) {
  const t = pm(d), e = fm(t.container);
  if (!e)
    throw new Error("[pdf-signature-sdk] createViewer: invalid container");
  const s = new af(), i = new hm(s), n = new cm(s), a = new dm(s), o = gm(e, t);
  let l = null, h = null, c = null, u = null, p = !1, g = null, m = null;
  const A = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map();
  async function S(w) {
    o.pagesContainer.innerHTML = "", _.clear(), v.clear(), u && u.disconnect(), A.clear(), u = new IntersectionObserver((x) => {
      if (x.forEach((T) => {
        const P = parseInt(T.target.dataset.page, 10);
        if (T.isIntersecting) {
          if (A.set(P, T), !T.target.dataset.rendered) {
            T.target.dataset.rendered = "true";
            const z = _.get(P);
            i.renderPage(P, z, t.scale).then(() => {
              a.syncSize(P, z.width, z.height);
              const D = document.getElementById(`psdk-page-${P}`);
              D && (D.style.minWidth = `${z.width}px`, D.style.minHeight = `${z.height}px`);
            });
          }
        } else
          A.delete(P);
      }), A.size > 0) {
        let T = n.currentPage, P = -1;
        for (const [z, D] of A.entries()) {
          const et = D.intersectionRect.height;
          et > P && (P = et, T = z);
        }
        T !== n.currentPage && (p || n.goToPage(T, "scroll"));
      }
    }, {
      root: o.canvasArea,
      rootMargin: "200px 0px",
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
    });
    const C = Math.floor(595 * t.scale), k = Math.floor(842 * t.scale);
    for (let x = 1; x <= w; x++) {
      const T = document.createElement("div");
      T.className = "psdk-canvas-wrap", T.dataset.page = x, T.id = `psdk-page-${x}`, T.style.minWidth = `${C}px`, T.style.minHeight = `${k}px`;
      const P = document.createElement("canvas");
      P.className = "psdk-main-canvas", T.appendChild(P);
      const z = document.createElement("canvas");
      z.className = "psdk-overlay", T.appendChild(z), o.pagesContainer.appendChild(T), _.set(x, P), v.set(x, z), a.attach(x, z), u.observe(T);
    }
  }
  s.on("pageChanged", ({ page: w, total: C, source: k }) => {
    if (k !== "scroll") {
      p = !0, m && o.canvasArea.removeEventListener("scroll", m);
      const x = document.getElementById(`psdk-page-${w}`);
      x && x.scrollIntoView({ behavior: "smooth", block: "start" }), m = () => {
        clearTimeout(g), g = setTimeout(() => {
          p = !1, m && (o.canvasArea.removeEventListener("scroll", m), m = null);
        }, 150);
      }, o.canvasArea.addEventListener("scroll", m), m();
    }
    l == null || l.updatePageIndicator(w, C), h == null || h.setActivePage(w), s.emit("_pageReady", { page: w });
  }), s.on("documentLoaded", async ({ totalPages: w }) => {
    o.emptyState.style.display = "none", o.pagesContainer.style.display = "flex", n.setTotal(w), a.clearAll(), await S(w), l == null || l.updatePageIndicator(1, w), l == null || l.updateSecureStatus(i.isPasswordProtected), await (h == null ? void 0 : h.rebuild(i, w)), s.emit("_documentReady", { totalPages: w });
  });
  const E = {
    /**
     * Load a new PDF document (File, Blob, URL, ArrayBuffer).
     * Resets page, signatures, sidebar.
     */
    async loadDocument(w) {
      e.classList.add("psdk-loading");
      try {
        await i.loadDocument(w);
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
    goToPage(w) {
      return n.goToPage(w);
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
    async setScale(w) {
      if (t.scale = Math.min(4, Math.max(0.25, w)), i.isLoaded) {
        o.pagesContainer.querySelectorAll(".psdk-canvas-wrap").forEach((x) => {
          x.dataset.rendered = "";
        });
        const C = n.currentPage;
        await S(n.totalPages);
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
      const C = (await i.getPage(n.currentPage)).getViewport({ scale: 1 }), k = 48, x = o.canvasArea.clientWidth - k, T = o.canvasArea.clientHeight - k, P = x / C.width, z = T / C.height;
      let D = Math.min(P, z);
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
    placeSignature(w = {}) {
      const C = w.page || n.currentPage;
      if (w.page = C, w.x === void 0 || w.y === void 0) {
        const k = _.get(C);
        k && (w.x = k.width / 2 - 75, w.y = k.height / 2 - 25);
      }
      return a.placeSignature(w);
    },
    /**
     * Programmatically place an e-materai stamp.
     * @param {{x?:number, y?:number, page?:number, image?:string}} opts
     */
    placeEStamp(w = {}) {
      const C = w.page || n.currentPage;
      if (w.page = C, w.x === void 0 || w.y === void 0) {
        const k = _.get(C);
        k && (w.x = k.width / 2 - 40, w.y = k.height / 2 - 40);
      }
      return a.placeEStamp(w);
    },
    /** Remove a specific signature/stamp by ID. */
    removeSignature(w) {
      a.removeItem(w);
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
    getSignaturesByPage(w) {
      return a.getByPage(w);
    },
    /**
     * Register an event listener.
     * Events: documentLoaded, pageChanged, signaturePlaced, eStampPlaced,
     *         signatureMoved, signatureModeChanged, coordinateCapture
     */
    on(w, C) {
      return s.on(w, C), E;
    },
    /** Remove an event listener. */
    off(w, C) {
      return s.off(w, C), E;
    },
    /** Update UI config dynamically — shows/hides toolbar and sidebar elements. */
    updateConfig(w) {
      var k, x;
      const C = Pd(t, w);
      Object.keys(C).forEach((T) => {
        t[T] = C[T];
      }), l == null || l.applyConfig(t), h == null || h.applyConfig(t), o.sidebar && (o.sidebar.style.display = ((x = (k = t.ui) == null ? void 0 : k.sidebar) == null ? void 0 : x.thumbnails) !== !1 ? "" : "none"), t.disabled ? o.root.classList.add("psdk-disabled") : o.root.classList.remove("psdk-disabled"), t.theme === "light" ? o.root.classList.add("psdk-light") : o.root.classList.remove("psdk-light");
    },
    /** Get the main PDF canvas element for current page. */
    getCanvas(w = n.currentPage) {
      return _.get(w);
    },
    /** Get the overlay canvas element for current page. */
    getOverlayCanvas(w = n.currentPage) {
      return v.get(w);
    },
    /** Disable/Enable page navigation */
    setPaginationLocked(w) {
      n.setLocked(w), l == null || l.setPaginationLocked(w), h == null || h.setPaginationLocked(w);
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
  return o.topbar && (l = Am(o.topbar, t, E)), o.sidebar && (h = vm(o.sidebar, t, E)), o.modalOverlay && (c = _m(o.modalOverlay, t, E)), o.root && wm(o.root, t, E), t.file && E.loadDocument(t.file).catch((w) => {
    console.error("[pdf-signature-sdk] Auto-load failed:", w);
  }), E;
}
const Cm = {
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
}, ft = {
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
}, xm = {
  [ft.bgBase]: "#0f1117",
  [ft.bgSurface]: "#1a1d27",
  [ft.bgElevated]: "#22263a",
  [ft.bgHover]: "#2a2f45",
  [ft.border]: "rgba(255,255,255,0.08)",
  [ft.borderStrong]: "rgba(255,255,255,0.14)",
  [ft.accent]: "#6366f1",
  [ft.accentHover]: "#4f52e0",
  [ft.accentGlow]: "rgba(99,102,241,0.35)",
  [ft.accentSubtle]: "rgba(99,102,241,0.12)",
  [ft.danger]: "#ef4444",
  [ft.dangerSubtle]: "rgba(239,68,68,0.12)",
  [ft.success]: "#22c55e",
  [ft.warning]: "#f59e0b",
  [ft.textPrimary]: "#f1f5f9",
  [ft.textSecondary]: "#8b92a5",
  [ft.textMuted]: "#5a6070",
  [ft.font]: '"Inter","Segoe UI",system-ui,-apple-system,sans-serif',
  [ft.topbarHeight]: "56px",
  [ft.sidebarWidth]: "190px",
  [ft.radiusSm]: "6px",
  [ft.radiusMd]: "10px",
  [ft.radiusLg]: "14px",
  [ft.transition]: "150ms cubic-bezier(0.4,0,0.2,1)"
};
export {
  um as DEFAULT_CONFIG,
  hm as DocumentManager,
  af as EventEmitter,
  cm as PaginationManager,
  Cm as SDK_CLASSES,
  ft as SDK_VARIABLES,
  xm as SDK_VARIABLE_DEFAULTS,
  dm as SignatureManager,
  Em as createViewer,
  pm as mergeConfig
};
