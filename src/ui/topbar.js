/**
 * topbar.js — Toolbar UI controller for pdf-signature-sdk
 */

import { el } from './layout.js';

// SVG icon library (inline — no external dependency)
const ICONS = {
  upload: `<svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`,
  signature: `<svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/><line x1="12" y1="14" x2="12" y2="21"/></svg>`,
  estamp: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>`,
  prevPage: `<svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>`,
  nextPage: `<svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>`,
  zoomIn: `<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`,
  zoomOut: `<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`,
  fit: `<svg viewBox="0 0 24 24"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>`,
  clear: `<svg viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg>`,
  sun: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
  moon: `<svg viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>`,
};

/**
 * Build and wire the topbar UI.
 * @param {HTMLElement} topbarEl
 * @param {import('../utils/config').SDKConfig} config
 * @param {import('../core/viewer').ViewerInstance} viewer
 * @returns {TopbarController}
 */
export function buildTopbar(topbarEl, config, viewer) {
  const uiCfg = config.ui?.topbar || {};

  // ── Brand
  const brand = el('div', ['psdk-topbar__brand']);
  const brandIcon = el('div', ['psdk-topbar__brand-icon']);
  const brandTextEl = el('span', ['psdk-topbar__brand-text']);
  brand.appendChild(brandIcon);
  brand.appendChild(brandTextEl);
  topbarEl.appendChild(brand);

  function updateLogo(logo) {
    brandIcon.innerHTML = '';
    if (logo) {
      brandIcon.classList.add('psdk-topbar__brand-icon--custom');
      if (typeof logo === 'string') {
        const trimmed = logo.trim();
        if (trimmed.startsWith('<')) {
          brandIcon.innerHTML = trimmed;
        } else {
          // Render as image URL
          const img = el('img', [], {
            src: trimmed,
            alt: 'Logo',
            style: 'max-height: 28px; max-width: 120px; object-fit: contain; display: block;'
          });
          brandIcon.appendChild(img);
        }
      } else if (logo instanceof HTMLElement) {
        brandIcon.appendChild(logo);
      }
    } else {
      brandIcon.classList.remove('psdk-topbar__brand-icon--custom');
      brandIcon.innerHTML = `
        <svg viewBox="0 0 24 24" fill="white">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/>
          <path d="M14 2v6h6" opacity=".5"/>
        </svg>
      `;
    }
  }

  function updateBrandText(text) {
    if (text === false || text === '') {
      brandTextEl.style.display = 'none';
    } else {
      brandTextEl.style.display = '';
      brandTextEl.textContent = typeof text === 'string' ? text : 'PDF Viewer';
    }
  }

  let appliedStyles = [];
  function applyTopbarStyle(styleObj) {
    for (const key of appliedStyles) {
      topbarEl.style[key] = '';
    }
    appliedStyles = [];

    if (styleObj && typeof styleObj === 'object') {
      for (const [key, value] of Object.entries(styleObj)) {
        topbarEl.style[key] = value;
        appliedStyles.push(key);
      }
    }
  }

  // Initialize brand elements
  updateLogo(uiCfg.logo);
  updateBrandText(uiCfg.brandText);
  applyTopbarStyle(uiCfg.style);

  // ── Secure document status badge
  const secureBadge = el('div', ['psdk-topbar__secure-badge', 'psdk-tooltip']);
  secureBadge.setAttribute('data-tooltip', 'Password Protected (Encrypted)');
  secureBadge.style.display = 'none';
  secureBadge.style.marginLeft = '8px';
  secureBadge.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  `;
  brand.appendChild(secureBadge);

  // ── Hidden file input — appended to topbarEl (NOT body) so it is cleaned up
  // automatically when viewer.destroy() clears the container DOM.
  const fileInput = /** @type {HTMLInputElement} */ (el('input', ['psdk-file-input'], {
    type: 'file',
    accept: '.pdf,application/pdf',
    id: 'psdk-file-input',
    'aria-hidden': 'true',
  }));
  topbarEl.appendChild(fileInput);

  // ── References to all optional elements (needed for applyConfig)
  /** @type {HTMLElement|null} */ let btnUpload = null;
  /** @type {HTMLElement|null} */ let dividerUpload = null;
  /** @type {HTMLElement|null} */ let btnSig = null;
  /** @type {HTMLElement|null} */ let btnEStamp = null;
  /** @type {HTMLElement|null} */ let zoomWrap = null;
  /** @type {HTMLElement|null} */ let dividerZoom = null;
  /** @type {HTMLElement|null} */ let pagWrap = null;
  /** @type {HTMLElement|null} */ let zoomBadge = null;
  /** @type {HTMLElement|null} */ let pageCurrentEl = null;
  /** @type {HTMLElement|null} */ let pageTotalEl = null;
  /** @type {HTMLButtonElement|null} */ let btnPrev = null;
  /** @type {HTMLButtonElement|null} */ let btnNext = null;
  /** @type {HTMLElement|null} */ let btnTheme = null;
  /** @type {HTMLElement|null} */ let dividerTheme = null;
  /** @type {HTMLElement|null} */ let customSlot = null;
  /** @type {HTMLElement|null} */ let dividerCustom = null;
  let currentScale = config.scale || 1.5;

  // ── Upload button
  if (uiCfg.upload !== false) {
    btnUpload = makeBtn('psdk-btn-upload', ICONS.upload, config.labels?.uploadBtn || 'Open PDF', ['psdk-btn', 'psdk-tooltip'], 'Open PDF file');
    btnUpload.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', async (e) => {
      const file = /** @type {HTMLInputElement} */(e.target).files?.[0];
      if (!file) return;
      try {
        if (typeof config.onUpload === 'function') {
          const result = await config.onUpload(file);
          if (result === false) return; // onUpload rejected — value reset via finally
          const fileToLoad = (result instanceof File || result instanceof Blob) ? result : file;
          await viewer.loadDocument(fileToLoad);
        } else {
          // BUG-15: warn developer if onUpload was set but is not a function
          if (config.onUpload != null) {
            console.warn('[pdf-signature-sdk] onUpload must be a function. Received:', typeof config.onUpload, '— ignored.');
          }
          await viewer.loadDocument(file);
        }
      } catch (err) {
        console.error('[pdf-signature-sdk] Upload error:', err);
      } finally {
        // Always reset so user can re-select the same file again
        fileInput.value = '';
      }
    });
    topbarEl.appendChild(btnUpload);
  }

  // Divider between upload and sig buttons (always present, toggled by applyConfig)
  dividerUpload = el('div', ['psdk-topbar__divider']);
  topbarEl.appendChild(dividerUpload);

  // ── Signature button
  if (uiCfg.signature !== false) {
    btnSig = makeBtn('psdk-btn-signature', ICONS.signature, config.labels?.signatureBtn || 'Add Signature', ['psdk-btn', 'psdk-btn--accent', 'psdk-tooltip'], 'Add a signature');
    btnSig.addEventListener('click', () => {
      viewer.openSignatureModal();
    });
    topbarEl.appendChild(btnSig);
  }

  // ── E-Materai button
  if (uiCfg.eStamp !== false) {
    btnEStamp = makeBtn('psdk-btn-estamp', ICONS.estamp, config.labels?.estampBtn || 'E-Materai', ['psdk-btn', 'psdk-btn--danger', 'psdk-tooltip'], 'Add E-Materai stamp');
    btnEStamp.addEventListener('click', () => {
      viewer.openEStampModal();
    });
    topbarEl.appendChild(btnEStamp);
  }

  // ── Clear signatures button (always in DOM, shown when there are sigs)
  const btnClear = makeBtn('psdk-btn-clear', ICONS.clear, config.labels?.clearBtn || 'Clear All', ['psdk-btn', 'psdk-btn--ghost', 'psdk-tooltip'], 'Clear all signatures');
  btnClear.style.display = 'none';
  btnClear.addEventListener('click', () => {
    viewer.clearSignatures();
    updateSigCount(0);
  });
  topbarEl.appendChild(btnClear);

  // Spacer
  topbarEl.appendChild(el('div', ['psdk-topbar__spacer']));

  // ── Custom Component Slot
  customSlot = el('div', ['psdk-topbar__custom']);
  if (uiCfg.customComponent) {
    if (typeof uiCfg.customComponent === 'string') {
      customSlot.innerHTML = uiCfg.customComponent;
    } else if (uiCfg.customComponent instanceof HTMLElement) {
      customSlot.appendChild(uiCfg.customComponent);
    }
  }
  topbarEl.appendChild(customSlot);

  dividerCustom = el('div', ['psdk-topbar__divider']);
  topbarEl.appendChild(dividerCustom);

  // ── Theme Toggle
  if (uiCfg.themeToggle !== false) {
    const isLight = config.theme === 'light';
    btnTheme = makeBtn('psdk-btn-theme', isLight ? ICONS.moon : ICONS.sun, '', ['psdk-btn', 'psdk-btn--ghost', 'psdk-btn--icon', 'psdk-tooltip'], 'Toggle Theme');
    btnTheme.addEventListener('click', () => {
      const root = topbarEl.closest('.psdk-root');
      if (!root) return;
      const isNowLight = root.classList.contains('psdk-light');
      if (isNowLight) {
        root.classList.remove('psdk-light');
        btnTheme.innerHTML = ICONS.sun;
        config.theme = 'dark';
      } else {
        root.classList.add('psdk-light');
        btnTheme.innerHTML = ICONS.moon;
        config.theme = 'light';
      }
    });
    topbarEl.appendChild(btnTheme);
  }

  dividerTheme = el('div', ['psdk-topbar__divider']);
  topbarEl.appendChild(dividerTheme);

  // ── Zoom controls
  if (uiCfg.zoom !== false) {
    zoomWrap = el('div', ['psdk-pagination']);

    const btnZoomOut = makeBtn('psdk-btn-zoom-out', ICONS.zoomOut, '', ['psdk-btn', 'psdk-btn--ghost', 'psdk-btn--icon', 'psdk-tooltip'], 'Zoom out');
    zoomBadge = el('span', ['psdk-zoom-badge']);
    zoomBadge.id = 'psdk-zoom-badge';
    const btnZoomIn = makeBtn('psdk-btn-zoom-in', ICONS.zoomIn, '', ['psdk-btn', 'psdk-btn--ghost', 'psdk-btn--icon', 'psdk-tooltip'], 'Zoom in');
    const btnFit = makeBtn('psdk-btn-fit', ICONS.fit, '', ['psdk-btn', 'psdk-btn--ghost', 'psdk-btn--icon', 'psdk-tooltip'], 'Fit to screen');

    updateZoomBadge(currentScale);

    btnZoomOut.addEventListener('click', async () => {
      if (currentScale <= 0.25) return;
      currentScale = Math.max(0.25, +(currentScale - 0.25).toFixed(2));
      updateZoomBadge(currentScale);
      await viewer.setScale(currentScale);
    });

    btnZoomIn.addEventListener('click', async () => {
      if (currentScale >= 4) return;
      currentScale = Math.min(4, +(currentScale + 0.25).toFixed(2));
      updateZoomBadge(currentScale);
      await viewer.setScale(currentScale);
    });

    btnFit.addEventListener('click', async () => {
      currentScale = await viewer.fitToScreen();
      updateZoomBadge(currentScale);
    });

    zoomWrap.appendChild(btnZoomOut);
    zoomWrap.appendChild(zoomBadge);
    zoomWrap.appendChild(btnZoomIn);
    zoomWrap.appendChild(btnFit);
    topbarEl.appendChild(zoomWrap);

    dividerZoom = el('div', ['psdk-topbar__divider']);
    topbarEl.appendChild(dividerZoom);
  }

  // ── Pagination
  if (uiCfg.pagination !== false) {
    pagWrap = el('div', ['psdk-pagination']);

    btnPrev = /** @type {HTMLButtonElement} */ (makeBtn('psdk-btn-prev', ICONS.prevPage, '', ['psdk-btn', 'psdk-btn--ghost', 'psdk-btn--icon', 'psdk-tooltip'], 'Previous page'));
    btnPrev.id = 'psdk-btn-prev';

    const indicator = el('div', ['psdk-pagination__indicator']);
    pageCurrentEl = el('input', ['psdk-pagination__current-input'], {
      type: 'number',
      min: '1',
      id: 'psdk-page-current',
      'aria-label': 'Current page'
    });
    pageCurrentEl.value = '1';

    pageCurrentEl.addEventListener('change', (e) => {
      const n = parseInt(e.target.value, 10);
      if (!isNaN(n)) {
        const success = viewer.goToPage(n);
        if (!success) {
          e.target.value = viewer.currentPage;
        }
      } else {
        e.target.value = viewer.currentPage;
      }
    });

    const sep = el('span', ['psdk-pagination__sep']);
    sep.textContent = '/';
    pageTotalEl = el('span', []);
    pageTotalEl.id = 'psdk-page-total';
    pageTotalEl.textContent = '—';
    indicator.appendChild(pageCurrentEl);
    indicator.appendChild(sep);
    indicator.appendChild(pageTotalEl);

    btnNext = /** @type {HTMLButtonElement} */ (makeBtn('psdk-btn-next', ICONS.nextPage, '', ['psdk-btn', 'psdk-btn--ghost', 'psdk-btn--icon', 'psdk-tooltip'], 'Next page'));
    btnNext.id = 'psdk-btn-next';

    btnPrev.addEventListener('click', () => viewer.prevPage());
    btnNext.addEventListener('click', () => viewer.nextPage());

    btnPrev.disabled = true;
    btnNext.disabled = true;

    pagWrap.appendChild(btnPrev);
    pagWrap.appendChild(indicator);
    pagWrap.appendChild(btnNext);
    topbarEl.appendChild(pagWrap);
  }

  // ── Signature events → update clear button & sig count badge
  viewer.on('signaturePlaced', () => updateSigCount(viewer.getSignatures().length));
  viewer.on('eStampPlaced', () => updateSigCount(viewer.getSignatures().length));
  viewer.on('signatureRemoved', () => updateSigCount(viewer.getSignatures().length));
  // BUG-14: also handle programmatic clearSignatures() calls from outside the UI
  viewer.on('signaturesCleared', () => updateSigCount(0));

  // ─── Helpers ───────────────────────────────────────────────────────────────

  function updatePageIndicator(current, total) {
    if (pageCurrentEl) {
      if (pageCurrentEl.tagName === 'INPUT') {
        pageCurrentEl.value = current || '';
      } else {
        pageCurrentEl.textContent = current || '—';
      }
    }
    if (pageTotalEl) pageTotalEl.textContent = total || '—';
    if (btnPrev) btnPrev.disabled = current <= 1 || viewer.isPaginationLocked;
    if (btnNext) btnNext.disabled = current >= total || viewer.isPaginationLocked;
  }

  function setPaginationLocked(locked) {
    const isInputDisabled = config.ui?.topbar?.paginationInput === false;
    if (pageCurrentEl) pageCurrentEl.disabled = locked || isInputDisabled;
    if (btnPrev) btnPrev.disabled = locked || viewer.currentPage <= 1;
    if (btnNext) btnNext.disabled = locked || viewer.currentPage >= viewer.totalPages;
  }

  function updateZoomBadge(scale) {
    const pct = Math.round(scale * 100) + '%';
    if (zoomBadge) zoomBadge.textContent = pct;
    const zs = document.getElementById('psdk-zoom-status');
    if (zs) zs.textContent = pct;
  }

  function updateSigCount(count) {
    const wrap = document.getElementById('psdk-sig-count-wrap');
    const countEl = document.getElementById('psdk-sig-count');
    if (wrap) wrap.style.display = count > 0 ? 'flex' : 'none';
    if (countEl) countEl.textContent = `${count} signature${count !== 1 ? 's' : ''}`;
    btnClear.style.display = count > 0 ? 'inline-flex' : 'none';
  }

  /**
   * Apply updated config — shows/hides ALL conditional toolbar elements.
   * Called by viewer.updateConfig().
   * @param {import('../utils/config').SDKConfig} cfg
   */
  function applyConfig(cfg) {
    const tb = cfg.ui?.topbar || {};

    updateLogo(tb.logo);
    updateBrandText(tb.brandText);
    applyTopbarStyle(tb.style);

    setVisible(btnUpload, tb.upload !== false);
    setVisible(btnSig, tb.signature !== false);
    setVisible(btnEStamp, tb.eStamp !== false);
    setVisible(zoomWrap, tb.zoom !== false);
    setVisible(dividerZoom, tb.zoom !== false);
    setVisible(pagWrap, tb.pagination !== false);
    setVisible(btnTheme, tb.themeToggle !== false);

    if (pageCurrentEl) {
      pageCurrentEl.disabled = tb.paginationInput === false || viewer.isPaginationLocked;
    }

    // Update labels dynamically
    if (cfg.labels) {
      if (btnUpload) { const span = btnUpload.querySelector('span'); if (span) span.textContent = cfg.labels.uploadBtn || 'Open PDF'; }
      if (btnSig) { const span = btnSig.querySelector('span'); if (span) span.textContent = cfg.labels.signatureBtn || 'Add Signature'; }
      if (btnEStamp) { const span = btnEStamp.querySelector('span'); if (span) span.textContent = cfg.labels.estampBtn || 'E-Materai'; }
      if (btnClear) { const span = btnClear.querySelector('span'); if (span) span.textContent = cfg.labels.clearBtn || 'Clear All'; }
    }

    // Update custom component if changed
    let hasCustom = false;
    if (tb.customComponent !== undefined) {
      customSlot.innerHTML = '';
      if (typeof tb.customComponent === 'string' && tb.customComponent.trim()) {
        customSlot.innerHTML = tb.customComponent;
        hasCustom = true;
      } else if (tb.customComponent instanceof HTMLElement) {
        customSlot.appendChild(tb.customComponent);
        hasCustom = true;
      }
    } else {
      hasCustom = customSlot.childNodes.length > 0;
    }

    // Dividers logic for right side
    setVisible(dividerCustom, hasCustom && (tb.themeToggle !== false || tb.zoom !== false || tb.pagination !== false));
    setVisible(dividerTheme, tb.themeToggle !== false && (tb.zoom !== false || tb.pagination !== false));
    setVisible(dividerZoom, tb.zoom !== false && tb.pagination !== false);

    // Divider between upload and action buttons: visible only if both sides have items
    const hasUpload = tb.upload !== false;
    const hasActions = tb.signature !== false || tb.eStamp !== false;
    setVisible(dividerUpload, hasUpload && hasActions);
  }

  /** @param {HTMLElement|null} elem @param {boolean} visible */
  function setVisible(elem, visible) {
    if (!elem) return;
    elem.style.display = visible ? '' : 'none';
  }

  function updateSecureStatus(isSecure) {
    secureBadge.style.display = isSecure ? 'inline-flex' : 'none';
  }

  return { updatePageIndicator, updateZoomBadge, applyConfig, setPaginationLocked, updateSecureStatus };
}

/** @private */
function makeBtn(id, iconHtml, label, classes, tooltip) {
  const btn = el('button', classes, { id, type: 'button' });
  if (tooltip) btn.setAttribute('data-tooltip', tooltip);
  btn.innerHTML = iconHtml;
  if (label) {
    const span = document.createElement('span');
    span.textContent = label;
    btn.appendChild(span);
  }
  return btn;
}
