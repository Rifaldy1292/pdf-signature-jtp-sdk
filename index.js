/**
 * pdf-signature-sdk — Main Entry Point
 * Re-exports the full public API.
 */

// Styles — auto-injected into the DOM at runtime via vite-plugin-css-injected-by-js
import './src/ui/styles.css';

// Core factory
export { createViewer } from './src/core/viewer.js';

// Individual core modules (for advanced usage)
export { EventEmitter } from './src/core/events.js';
export { DocumentManager } from './src/core/document.js';
export { PaginationManager } from './src/core/pagination.js';
export { SignatureManager } from './src/core/signature.js';

// Config utility
export { mergeConfig, DEFAULT_CONFIG } from './src/utils/config.js';

// Style discoverability — class names & CSS variable names
export { SDK_CLASSES, SDK_VARIABLES, SDK_VARIABLE_DEFAULTS } from './src/utils/styleRef.js';
