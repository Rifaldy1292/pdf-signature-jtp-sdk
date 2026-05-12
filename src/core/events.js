/**
 * events.js — Lightweight EventEmitter for pdf-signature-sdk
 * No Node.js dependency. Works in any browser environment.
 */

export class EventEmitter {
  constructor() {
    /** @type {Map<string, Set<Function>>} */
    this._listeners = new Map();
  }

  /**
   * Register an event listener.
   * @param {string} event
   * @param {Function} fn
   * @returns {this}
   */
  on(event, fn) {
    if (!this._listeners.has(event)) {
      this._listeners.set(event, new Set());
    }
    this._listeners.get(event).add(fn);
    return this;
  }

  /**
   * Register a one-time event listener.
   * @param {string} event
   * @param {Function} fn
   * @returns {this}
   */
  once(event, fn) {
    const wrapper = (...args) => {
      fn(...args);
      this.off(event, wrapper);
    };
    return this.on(event, wrapper);
  }

  /**
   * Remove an event listener.
   * @param {string} event
   * @param {Function} fn
   * @returns {this}
   */
  off(event, fn) {
    const set = this._listeners.get(event);
    if (set) set.delete(fn);
    return this;
  }

  /**
   * Emit an event with optional arguments.
   * @param {string} event
   * @param {...any} args
   * @returns {this}
   */
  emit(event, ...args) {
    const set = this._listeners.get(event);
    if (set) {
      set.forEach((fn) => {
        try {
          fn(...args);
        } catch (e) {
          console.error(`[pdf-signature-sdk] Error in "${event}" listener:`, e);
        }
      });
    }
    return this;
  }

  /**
   * Remove all listeners for a given event, or all events if none specified.
   * @param {string} [event]
   */
  removeAllListeners(event) {
    if (event) {
      this._listeners.delete(event);
    } else {
      this._listeners.clear();
    }
  }
}
