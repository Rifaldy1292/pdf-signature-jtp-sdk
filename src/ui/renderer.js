/**
 * renderer.js — Ties the document module to the canvas elements.
 * Handles scale-aware rendering and mode banner updates.
 */

/**
 * Update the mode banner visibility.
 * @param {HTMLElement} banner
 * @param {boolean} visible
 */
export function setModeBannerVisible(banner, visible) {
  if (!banner) return;
  banner.style.display = visible ? 'flex' : 'none';
}

/**
 * Update the status bar text.
 * @param {string} text
 * @param {boolean} [sigMode]
 * @param {ParentNode} [root] the viewer's root element — pass it so multiple viewers don't collide
 */
export function setStatus(text, sigMode = false, root = document) {
  const statusEl = root.querySelector('#psdk-status-text');
  const dotEl = root.querySelector('#psdk-status-dot');
  if (statusEl) statusEl.textContent = text;
  if (dotEl) {
    dotEl.style.background = sigMode
      ? 'var(--psdk-accent)'
      : 'var(--psdk-success)';
    dotEl.style.animation = sigMode ? 'psdk-blink 1s infinite' : 'none';
  }
}
