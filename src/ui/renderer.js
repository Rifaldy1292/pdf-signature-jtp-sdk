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
 */
export function setStatus(text, sigMode = false) {
  const statusEl = document.getElementById('psdk-status-text');
  const dotEl = document.getElementById('psdk-status-dot');
  if (statusEl) statusEl.textContent = text;
  if (dotEl) {
    dotEl.style.background = sigMode
      ? 'var(--psdk-accent)'
      : 'var(--psdk-success)';
    dotEl.style.animation = sigMode ? 'psdk-blink 1s infinite' : 'none';
  }
}
