/**
 * pagination.js — Page navigation state for pdf-signature-sdk
 */

export class PaginationManager {
  /**
   * @param {import('./events').EventEmitter} eventBus
   */
  constructor(eventBus) {
    this._bus = eventBus;
    this._currentPage = 1;
    this._totalPages = 0;
    this._locked = false;
  }

  /** Kunci/buka navigasi halaman. */
  setLocked(locked) {
    this._locked = locked;
  }

  get isLocked() {
    return this._locked;
  }

  /** @param {number} total */
  setTotal(total) {
    this._totalPages = total;
    this._currentPage = 1;
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
  goToPage(n, source = 'api') {
    if (this._locked) return false;
    if (n < 1 || n > this._totalPages || n === this._currentPage) return false;
    this._currentPage = n;
    this._bus.emit('pageChanged', { page: n, total: this._totalPages, source });
    return true;
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
    this._currentPage = 1;
    this._totalPages = 0;
  }
}
