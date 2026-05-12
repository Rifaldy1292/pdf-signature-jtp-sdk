/**
 * pdf-signature-sdk — Main Entry Point
 * Re-exports the full public API.
 */

// Core factory
export { createViewer } from './src/core/viewer.js';

// Individual core modules (for advanced usage)
export { EventEmitter } from './src/core/events.js';
export { DocumentManager } from './src/core/document.js';
export { PaginationManager } from './src/core/pagination.js';
export { SignatureManager } from './src/core/signature.js';

// Config utility
export { mergeConfig, DEFAULT_CONFIG } from './src/utils/config.js';
