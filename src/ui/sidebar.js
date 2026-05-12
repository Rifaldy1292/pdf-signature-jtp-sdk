/**
 * sidebar.js — Page thumbnail strip for pdf-signature-sdk
 */

import { el } from './layout.js';

/**
 * Build and return a sidebar controller.
 * @param {HTMLElement} sidebarEl
 * @param {import('../utils/config').SDKConfig} config
 * @param {import('../core/viewer').ViewerInstance} viewer
 * @returns {SidebarController}
 */
export function buildSidebar(sidebarEl, config, viewer) {
  // ── Header
  const header = el('div', ['psdk-sidebar__header']);
  const title = el('div', ['psdk-sidebar__title']);
  title.textContent = 'Pages';
  const countBadge = el('div', ['psdk-sidebar__count']);
  countBadge.id = 'psdk-page-count-badge';
  countBadge.textContent = '0';
  header.appendChild(title);
  header.appendChild(countBadge);
  sidebarEl.appendChild(header);

  // ── Scroll container
  const scroll = el('div', ['psdk-sidebar__scroll']);
  scroll.id = 'psdk-sidebar-scroll';
  sidebarEl.appendChild(scroll);

  /** @type {HTMLElement[]} — list of thumb elements for active tracking */
  let thumbEls = [];
  /** @type {number} */
  let activePageEl = 1;

  // ── Helpers

  function clearThumbnails() {
    scroll.innerHTML = '';
    thumbEls = [];
  }

  function addSkeletons(count) {
    for (let i = 0; i < Math.min(count, 20); i++) {
      const wrap = el('div', ['psdk-thumb']);
      const skel = el('div', ['psdk-thumb-skeleton']);
      wrap.appendChild(skel);
      scroll.appendChild(wrap);
    }
  }

  /**
   * Rebuild all thumbnails for a new document.
   * @param {import('../core/document').DocumentManager} docManager
   * @param {number} totalPages
   */
  async function rebuild(docManager, totalPages) {
    clearThumbnails();
    countBadge.textContent = totalPages;

    // Show skeletons while rendering
    addSkeletons(totalPages);

    // Clear skeletons and render real thumbs
    clearThumbnails();

    for (let i = 1; i <= totalPages; i++) {
      const thumbWrap = el('div', ['psdk-thumb']);
      thumbWrap.id = `psdk-thumb-${i}`;
      thumbWrap.setAttribute('role', 'button');
      thumbWrap.setAttribute('tabindex', '0');
      thumbWrap.setAttribute('aria-label', `Page ${i}`);

      const canvasWrap = el('div', ['psdk-thumb__canvas-wrap']);
      const canvas = /** @type {HTMLCanvasElement} */ (document.createElement('canvas'));
      canvas.setAttribute('aria-hidden', 'true');
      canvasWrap.appendChild(canvas);

      const label = el('div', ['psdk-thumb__label']);
      label.textContent = `Page ${i}`;

      thumbWrap.appendChild(canvasWrap);
      thumbWrap.appendChild(label);
      scroll.appendChild(thumbWrap);
      thumbEls.push(thumbWrap);

      // Click handler
      const pageNum = i;
      thumbWrap.addEventListener('click', () => viewer.goToPage(pageNum));
      thumbWrap.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          viewer.goToPage(pageNum);
        }
      });

      // Render thumbnail async (don't await — render one at a time in sequence)
      await docManager.renderThumbnail(i, canvas, 0.22).catch(() => {});
    }

    // Set active page
    setActivePage(activePageEl);
  }

  /**
   * Update the active thumbnail highlight.
   * @param {number} page
   */
  function setActivePage(page) {
    activePageEl = page;

    thumbEls.forEach((t, idx) => {
      const isActive = idx + 1 === page;
      t.classList.toggle('psdk-thumb--active', isActive);
    });

    // Scroll active thumb into view
    const activeEl = document.getElementById(`psdk-thumb-${page}`);
    if (activeEl) {
      activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  function applyConfig(cfg) {
    sidebarEl.style.display = cfg.ui?.sidebar?.thumbnails !== false ? '' : 'none';
  }

  function setPaginationLocked(locked) {
    scroll.style.pointerEvents = locked ? 'none' : 'auto';
    scroll.style.opacity = locked ? '0.5' : '1';
  }

  return { rebuild, setActivePage, clearThumbnails, applyConfig, setPaginationLocked };
}
