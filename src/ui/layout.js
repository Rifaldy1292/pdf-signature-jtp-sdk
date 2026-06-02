/**
 * layout.js — DOM structure builder for pdf-signature-sdk
 * Dynamically builds the viewer layout based on the config.
 */

/**
 * Resolve a container from a string selector or Element.
 * @param {string|HTMLElement} container
 * @returns {HTMLElement|null}
 */
export function resolveContainer(container) {
  if (!container) return null;
  if (typeof container === 'string') {
    return document.querySelector(container);
  }
  if (container instanceof HTMLElement) return container;
  return null;
}

/**
 * Create an element with optional class names and attributes.
 * @param {string} tag
 * @param {string[]} classes
 * @param {object} attrs
 * @returns {HTMLElement}
 */
export function el(tag, classes = [], attrs = {}) {
  const elem = document.createElement(tag);
  if (classes.length) elem.classList.add(...classes);
  for (const [k, v] of Object.entries(attrs)) {
    elem.setAttribute(k, v);
  }
  return elem;
}

/**
 * Build the full viewer DOM layout inside the container.
 *
 * @param {HTMLElement} container
 * @param {import('../utils/config').SDKConfig} config
 * @returns {{
 *   root: HTMLElement,
 *   topbar: HTMLElement|null,
 *   sidebar: HTMLElement|null,
 *   viewer: HTMLElement,
 *   canvasArea: HTMLElement,
 *   emptyState: HTMLElement,
 *   modeBanner: HTMLElement,
 *   statusbar: HTMLElement,
 * }}
 */
export function buildLayout(container, config) {
  container.innerHTML = '';

  // ── Root
  const root = el('div', ['psdk-root']);
  if (config.theme === 'light') {
    root.classList.add('psdk-light');
  }
  if (config.disabled) {
    root.classList.add('psdk-disabled');
  }
  container.appendChild(root);

  // ── Topbar (conditional)
  let topbar = null;
  const topbarRaw = config.ui?.topbar;
  const topbarConfig = (topbarRaw && typeof topbarRaw === 'object') ? topbarRaw : {};
  // BUG-08: show topbar unless explicitly set to false, or all interactive features are off.
  // null/undefined → treat as "show with defaults" (!topbarRaw short-circuits to true).
  const showTopbar = topbarRaw !== false && (!topbarRaw || Object.values(topbarConfig).some(Boolean));
  if (showTopbar) {
    topbar = el('div', ['psdk-topbar'], { role: 'toolbar', 'aria-label': 'PDF Viewer Toolbar' });
    root.appendChild(topbar);
  }

  // ── Body
  const body = el('div', ['psdk-body']);
  root.appendChild(body);

  // ── Sidebar (conditional)
  let sidebar = null;
  if (config.ui?.sidebar?.thumbnails !== false) {
    sidebar = el('div', ['psdk-sidebar'], { role: 'navigation', 'aria-label': 'Page Thumbnails' });
    body.appendChild(sidebar);
  }

  // ── Viewer
  const viewer = el('div', ['psdk-viewer'], { role: 'main' });
  body.appendChild(viewer);

  // Canvas area (scrollable)
  const canvasArea = el('div', ['psdk-viewer__canvas-area']);
  viewer.appendChild(canvasArea);

  // Pages container
  const pagesContainer = el('div', ['psdk-pages-container']);
  pagesContainer.style.display = 'none';
  canvasArea.appendChild(pagesContainer);

  // Empty state
  const emptyState = buildEmptyState();
  canvasArea.appendChild(emptyState);

  // Mode banner (shown when signature mode is active)
  const modeBanner = buildModeBanner();
  modeBanner.style.display = 'none';
  canvasArea.appendChild(modeBanner);

  // Status bar
  const statusbar = buildStatusbar();
  viewer.appendChild(statusbar);

  // Modal Overlay
  const modalOverlay = el('div', ['psdk-modal-overlay']);
  modalOverlay.style.display = 'none';
  root.appendChild(modalOverlay);

  // Skeleton Overlay
  const skeletonOverlay = el('div', ['psdk-skeleton-overlay']);
  skeletonOverlay.style.display = 'none';
  root.appendChild(skeletonOverlay);

  return {
    root,
    topbar,
    sidebar,
    viewer,
    canvasArea,
    pagesContainer,
    emptyState,
    modeBanner,
    statusbar,
    modalOverlay,
    skeletonOverlay,
  };
}

/**
 * Populate skeleton overlay content with either the custom HTML/element or a default spinner.
 * @param {HTMLElement} overlay
 * @param {string|HTMLElement} [customHTML]
 */
export function buildSkeletonContent(overlay, customHTML = null) {
  overlay.innerHTML = '';
  if (customHTML) {
    if (typeof customHTML === 'string') {
      overlay.innerHTML = customHTML;
    } else if (customHTML instanceof HTMLElement) {
      overlay.appendChild(customHTML);
    }
  } else {
    const spinner = el('div', ['psdk-skeleton-default-spinner']);
    overlay.appendChild(spinner);
  }
}

/** @private */
function buildEmptyState() {
  const wrap = el('div', ['psdk-empty']);
  wrap.innerHTML = `
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
  `;
  return wrap;
}

/** @private */
function buildModeBanner() {
  const banner = el('div', ['psdk-mode-banner']);
  banner.id = 'psdk-mode-banner';
  banner.innerHTML = `
    <div class="psdk-mode-banner__dot"></div>
    <span>Signature Mode — Click anywhere to place</span>
  `;
  return banner;
}

/** @private */
function buildStatusbar() {
  const bar = el('div', ['psdk-statusbar']);
  bar.innerHTML = `
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
  `;
  return bar;
}
