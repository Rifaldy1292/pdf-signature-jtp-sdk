/**
 * config.js — Configuration utilities for pdf-signature-sdk
 * Provides deep merge of default config + user config.
 */

/** @type {import('../types').SDKConfig} */
export const DEFAULT_CONFIG = {
  container: null,
  file: null,
  scale: 1.5,
  theme: 'light', // 'light' or 'dark'
  disabled: false, // global interactive disable
  signatureOptions: [],
  estampOptions: [],
  groupByCategory: false,
  labels: {
    uploadBtn: 'Open PDF',
    signatureBtn: 'Add Signature',
    estampBtn: 'E-Materai',
    clearBtn: 'Clear All',
    signatureModalTitle: 'Select Signature Role',
    estampModalTitle: 'Select E-Materai'
  },
  ui: {
    topbar: {
      upload: true,
      signature: true,
      eStamp: true,
      pagination: true,
      paginationInput: true,
      zoom: true,
      themeToggle: true,
      customComponent: null, // string or HTMLElement
      logo: null,            // HTML/SVG string or image URL
      brandText: null,       // Custom string (or false/"" to hide)
      style: null,           // Key-value object for inline CSS overrides
    },
    sidebar: {
      thumbnails: true,
    },
    viewer: {
      zoom: true,
    },
  },
};

/**
 * Deep merge two objects. Arrays from source overwrite target arrays.
 * @param {object} target
 * @param {object} source
 * @returns {object}
 */
export function deepMerge(target, source) {
  if (!source || typeof source !== 'object') return target;
  const result = Object.assign({}, target);
  for (const key of Object.keys(source)) {
    if (
      source[key] !== null &&
      typeof source[key] === 'object' &&
      !Array.isArray(source[key])
    ) {
      result[key] = deepMerge(target[key] || {}, source[key]);
    } else {
      result[key] = source[key];
    }
  }
  return result;
}

/**
 * Merge user config with defaults.
 * @param {Partial<import('../types').SDKConfig>} userConfig
 * @returns {import('../types').SDKConfig}
 */
export function mergeConfig(userConfig = {}) {
  return deepMerge(DEFAULT_CONFIG, userConfig);
}
