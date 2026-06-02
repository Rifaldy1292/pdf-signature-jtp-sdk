/**
 * styleRef.js — CSS Discoverability Reference
 *
 * Exposes all available CSS class names and CSS variable names
 * used internally by pdf-signature-jtp-sdk.
 *
 * Usage:
 *   import { SDK_CLASSES, SDK_VARIABLES } from 'pdf-signature-jtp-sdk';
 *
 *   // Use class names without typos
 *   element.classList.add(SDK_CLASSES.button.accent);   // 'psdk-btn--accent'
 *
 *   // Use variable names for inline overrides
 *   root.style.setProperty(SDK_VARIABLES.accent, '#ef4444');
 */

/**
 * All BEM class names used in the SDK, grouped by component.
 * Override these in your stylesheet to customise the appearance.
 *
 * @example
 * // Override accent button to red
 * .psdk-btn--accent { background: red !important; }
 *
 * @example
 * // Widen the sidebar
 * .psdk-root { --psdk-sidebar-width: 240px; }
 */
export const SDK_CLASSES = {
  /**
   * Root wrapper — added to the container element.
   * Theme modifiers are added here.
   */
  root: {
    /** Main root element. All SDK styles are scoped inside this. */
    base: 'psdk-root',
    /** Added when theme === 'light' */
    light: 'psdk-light',
    /** Added when config.disabled === true */
    disabled: 'psdk-disabled',
    /** Added while a document is being loaded */
    loading: 'psdk-loading',
  },

  /** Top toolbar bar */
  topbar: {
    base: 'psdk-topbar',
    brand: 'psdk-topbar__brand',
    brandIcon: 'psdk-topbar__brand-icon',
    /** Custom brand icon modifier when custom logo is active */
    brandIconCustom: 'psdk-topbar__brand-icon--custom',
    brandText: 'psdk-topbar__brand-text',
    divider: 'psdk-topbar__divider',
    spacer: 'psdk-topbar__spacer',
    /** Slot for customComponent HTML */
    custom: 'psdk-topbar__custom',
  },

  /** Buttons — combine base + modifier */
  button: {
    /** Base class — applies to all buttons */
    base: 'psdk-btn',
    /** Primary / CTA button (indigo by default) */
    accent: 'psdk-btn--accent',
    /** Destructive / remove button */
    danger: 'psdk-btn--danger',
    /** Transparent ghost button */
    ghost: 'psdk-btn--ghost',
    /** Square icon-only button */
    icon: 'psdk-btn--icon',
    /** Active / pressed state (e.g. signature mode active) */
    active: 'psdk-btn--active',
  },

  /** Pagination controls in the topbar */
  pagination: {
    base: 'psdk-pagination',
    indicator: 'psdk-pagination__indicator',
    current: 'psdk-pagination__current',
    currentInput: 'psdk-pagination__current-input',
    sep: 'psdk-pagination__sep',
  },

  /** Zoom badge in the topbar */
  zoom: {
    badge: 'psdk-zoom-badge',
  },

  /** Left sidebar (thumbnail strip) */
  sidebar: {
    base: 'psdk-sidebar',
    header: 'psdk-sidebar__header',
    title: 'psdk-sidebar__title',
    count: 'psdk-sidebar__count',
    scroll: 'psdk-sidebar__scroll',
    /** Individual thumbnail item */
    thumb: 'psdk-thumb',
    /** Active (current page) thumbnail */
    thumbActive: 'psdk-thumb--active',
    thumbCanvasWrap: 'psdk-thumb__canvas-wrap',
    thumbLabel: 'psdk-thumb__label',
    /** Loading skeleton shown before thumbnails render */
    thumbSkeleton: 'psdk-thumb-skeleton',
  },

  /** Main PDF viewer area */
  viewer: {
    base: 'psdk-viewer',
    /** Scrollable canvas area */
    canvasArea: 'psdk-viewer__canvas-area',
    /** Pages stacking container */
    pagesContainer: 'psdk-pages-container',
    /** Per-page canvas wrapper (shadow + background) */
    canvasWrap: 'psdk-canvas-wrap',
    /** SVG/canvas overlay for signature interaction */
    overlay: 'psdk-overlay',
    /** Overlay when placement mode is active */
    overlayActive: 'psdk-overlay--active',
  },

  /** Empty state shown before a document is loaded */
  empty: {
    base: 'psdk-empty',
    icon: 'psdk-empty__icon',
    title: 'psdk-empty__title',
    sub: 'psdk-empty__sub',
  },

  /** Floating banner shown during signature placement mode */
  modeBanner: {
    base: 'psdk-mode-banner',
    dot: 'psdk-mode-banner__dot',
  },

  /** Bottom status bar */
  statusbar: {
    base: 'psdk-statusbar',
    item: 'psdk-statusbar__item',
    dot: 'psdk-statusbar__dot',
    spacer: 'psdk-statusbar__spacer',
  },

  /** Signature / e-materai selection modal */
  modal: {
    overlay: 'psdk-modal-overlay',
    overlayActive: 'psdk-modal-overlay--active',
    base: 'psdk-modal',
    active: 'psdk-modal--active',
    header: 'psdk-modal__header',
    title: 'psdk-modal__title',
    close: 'psdk-modal__close',
    body: 'psdk-modal__body',
    list: 'psdk-modal__list',
    item: 'psdk-modal__item',
    itemIcon: 'psdk-modal__item-icon',
    itemLabel: 'psdk-modal__item-label',
  },

  /** Skeleton loading state overlay */
  skeleton: {
    overlay: 'psdk-skeleton-overlay',
    overlayActive: 'psdk-skeleton-overlay--active',
    spinner: 'psdk-skeleton-default-spinner',
  },

  /** Tooltip (via data-tooltip attribute) */
  tooltip: {
    base: 'psdk-tooltip',
  },
};

/**
 * All CSS custom property (variable) names used in the SDK.
 * Set these on `.psdk-root` or any ancestor element to override defaults.
 *
 * @example
 * // Via CSS
 * .psdk-root { --psdk-accent: #ef4444; }
 *
 * @example
 * // Via JS
 * document.querySelector('.psdk-root')
 *   .style.setProperty(SDK_VARIABLES.accent, '#ef4444');
 */
export const SDK_VARIABLES = {
  // ── Background layers ──────────────────────────────
  /** Page / outermost background */
  bgBase: '--psdk-bg-base',
  /** Card / panel surface background */
  bgSurface: '--psdk-bg-surface',
  /** Elevated element background (buttons, badges) */
  bgElevated: '--psdk-bg-elevated',
  /** Hover state background */
  bgHover: '--psdk-bg-hover',

  // ── Borders ────────────────────────────────────────
  /** Default subtle border */
  border: '--psdk-border',
  /** Stronger border (hover, active) */
  borderStrong: '--psdk-border-strong',

  // ── Accent (primary brand color) ───────────────────
  /** Primary accent color — affects buttons, active states, etc. */
  accent: '--psdk-accent',
  /** Accent on hover */
  accentHover: '--psdk-accent-hover',
  /** Accent glow / shadow color */
  accentGlow: '--psdk-accent-glow',
  /** Subtle accent background tint */
  accentSubtle: '--psdk-accent-subtle',

  // ── Semantic colors ────────────────────────────────
  /** Danger / destructive color */
  danger: '--psdk-danger',
  /** Subtle danger background tint */
  dangerSubtle: '--psdk-danger-subtle',
  /** Success indicator color */
  success: '--psdk-success',
  /** Warning color */
  warning: '--psdk-warning',

  // ── Typography ─────────────────────────────────────
  /** Primary text color */
  textPrimary: '--psdk-text-primary',
  /** Secondary / label text color */
  textSecondary: '--psdk-text-secondary',
  /** Muted / placeholder text color */
  textMuted: '--psdk-text-muted',
  /** Font family stack */
  font: '--psdk-font',

  // ── Layout dimensions ──────────────────────────────
  /** Height of the top toolbar */
  topbarHeight: '--psdk-topbar-height',
  /** Width of the left sidebar */
  sidebarWidth: '--psdk-sidebar-width',

  // ── Border radius ──────────────────────────────────
  radiusSm: '--psdk-radius-sm',
  radiusMd: '--psdk-radius-md',
  radiusLg: '--psdk-radius-lg',

  // ── Shadows ────────────────────────────────────────
  shadowSm: '--psdk-shadow-sm',
  shadowMd: '--psdk-shadow-md',
  shadowGlow: '--psdk-shadow-glow',

  // ── Skeleton Loader ────────────────────────────────
  /** Opacity of the skeleton overlay (0.0 to 1.0) */
  skeletonBgOpacity: '--psdk-skeleton-bg-opacity',
  /** Backdrop blur filter value for skeleton overlay */
  skeletonBlur: '--psdk-skeleton-blur',

  // ── Animation ──────────────────────────────────────
  /** Default transition timing */
  transition: '--psdk-transition',
};

/**
 * Default values for all CSS variables (dark theme).
 * Useful for documentation and theme builder tools.
 */
export const SDK_VARIABLE_DEFAULTS = {
  [SDK_VARIABLES.bgBase]:        '#0f1117',
  [SDK_VARIABLES.bgSurface]:     '#1a1d27',
  [SDK_VARIABLES.bgElevated]:    '#22263a',
  [SDK_VARIABLES.bgHover]:       '#2a2f45',
  [SDK_VARIABLES.border]:        'rgba(255,255,255,0.08)',
  [SDK_VARIABLES.borderStrong]:  'rgba(255,255,255,0.14)',
  [SDK_VARIABLES.accent]:        '#6366f1',
  [SDK_VARIABLES.accentHover]:   '#4f52e0',
  [SDK_VARIABLES.accentGlow]:    'rgba(99,102,241,0.35)',
  [SDK_VARIABLES.accentSubtle]:  'rgba(99,102,241,0.12)',
  [SDK_VARIABLES.danger]:        '#ef4444',
  [SDK_VARIABLES.dangerSubtle]:  'rgba(239,68,68,0.12)',
  [SDK_VARIABLES.success]:       '#22c55e',
  [SDK_VARIABLES.warning]:       '#f59e0b',
  [SDK_VARIABLES.textPrimary]:   '#f1f5f9',
  [SDK_VARIABLES.textSecondary]: '#8b92a5',
  [SDK_VARIABLES.textMuted]:     '#5a6070',
  [SDK_VARIABLES.font]:          '"Inter","Segoe UI",system-ui,-apple-system,sans-serif',
  [SDK_VARIABLES.topbarHeight]:  '56px',
  [SDK_VARIABLES.sidebarWidth]:  '190px',
  [SDK_VARIABLES.radiusSm]:      '6px',
  [SDK_VARIABLES.radiusMd]:      '10px',
  [SDK_VARIABLES.radiusLg]:      '14px',
  [SDK_VARIABLES.skeletonBgOpacity]: '0.85',
  [SDK_VARIABLES.skeletonBlur]:      '4px',
  [SDK_VARIABLES.transition]:    '150ms cubic-bezier(0.4,0,0.2,1)',
};
