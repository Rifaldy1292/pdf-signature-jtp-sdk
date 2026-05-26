/**
 * react.js — React adapter for pdf-signature-sdk
 *
 * Usage:
 *   import { PdfViewer, usePdfViewer } from 'pdf-signature-sdk/react'
 *
 *   <PdfViewer
 *     file={pdfFile}
 *     scale={1.5}
 *     theme="dark"
 *     disabled={false}
 *     signatureOptions={[
 *       { id: 'dir', label: 'Direktur', image: '...' }
 *     ]}
 *     estampOptions={[
 *       { id: 'ematerai', label: 'E-Materai Resmi', image: '...' }
 *     ]}
 *     labels={{
 *       uploadBtn: 'Open PDF',
 *       signatureBtn: 'Add Signature',
 *       signatureModalTitle: 'Select Role',
 *       estampModalTitle: 'Select E-Materai',
 *     }}
 *     ui={{
 *       topbar: { upload: true, signature: true, eStamp: true, pagination: true, zoom: true, themeToggle: true },
 *       sidebar: { thumbnails: true },
 *     }}
 *     onDocumentLoaded={({ totalPages }) => console.log(totalPages)}
 *     onPageChanged={({ page, total }) => console.log(page, total)}
 *     onSignaturePlaced={(sig) => console.log(sig)}
 *     onEStampPlaced={(sig) => console.log(sig)}
 *     onSignatureMoved={(sig) => console.log(sig)}
 *     onSignatureModeChanged={({ active }) => console.log(active)}
 *     onCoordinateCapture={({ x, y, page }) => console.log(x, y, page)}
 *     onReady={(viewer) => console.log(viewer)}
 *     viewerRef={myRef}
 *     style={{ width: '100%', height: '600px' }}
 *   />
 */

import { useRef, useEffect, useCallback } from 'react';
import { createViewer } from '../core/viewer.js';

// ─── All events emitted by the core viewer ───────────────────────────────────
const VIEWER_EVENTS = [
  'documentLoaded',
  'pageChanged',
  'signaturePlaced',
  'eStampPlaced',
  'signatureMoved',
  'signatureModeChanged',
  'coordinateCapture',
];

// Map from prop name → event name (camelCase "on" prefix → event string)
const EVENT_PROP_MAP = {
  onDocumentLoaded:     'documentLoaded',
  onPageChanged:        'pageChanged',
  onSignaturePlaced:    'signaturePlaced',
  onEStampPlaced:       'eStampPlaced',
  onSignatureMoved:     'signatureMoved',
  onSignatureModeChanged: 'signatureModeChanged',
  onCoordinateCapture:  'coordinateCapture',
};

/**
 * PdfViewer — React component wrapping the pdf-signature-sdk viewer.
 *
 * @param {object} props
 * @param {File|string|Blob|ArrayBuffer|null} [props.file]            - PDF source
 * @param {number}                            [props.scale=1.5]       - Render scale
 * @param {'light'|'dark'}                   [props.theme='dark']    - Color theme
 * @param {boolean}                           [props.disabled=false]  - Disable all interactions
 * @param {Array<{id,label,image}>}           [props.signatureOptions] - Signature choices
 * @param {Array<{id,label,image}>}           [props.estampOptions]   - E-Materai choices
 * @param {object}                            [props.labels]          - Button / modal labels
 * @param {object}                            [props.ui]              - UI visibility config
 * @param {React.CSSProperties}               [props.style]           - Container inline style
 * @param {string}                            [props.className]       - Container class name
 * @param {function}                          [props.onDocumentLoaded]
 * @param {function}                          [props.onPageChanged]
 * @param {function}                          [props.onSignaturePlaced]
 * @param {function}                          [props.onEStampPlaced]
 * @param {function}                          [props.onSignatureMoved]
 * @param {function}                          [props.onSignatureModeChanged]
 * @param {function}                          [props.onCoordinateCapture]
 * @param {function}                          [props.onReady]         - Receives viewer instance
 * @param {React.MutableRefObject}            [props.viewerRef]       - External ref for viewer API
 */
export function PdfViewer({
  // PDF source
  file = null,

  // Render options
  scale = 1.5,
  theme = 'dark',
  disabled = false,

  // Signature & e-materai options
  signatureOptions = [],
  estampOptions = [],
  groupByCategory = false,

  // Labels
  labels = {},

  // UI visibility
  ui = {},

  // Container
  style = { width: '100%', height: '600px' },
  className = '',

  // Events
  onDocumentLoaded,
  onPageChanged,
  onSignaturePlaced,
  onEStampPlaced,
  onSignatureMoved,
  onSignatureModeChanged,
  onCoordinateCapture,
  onReady,

  // External ref to access viewer API imperatively
  viewerRef: externalRef,
}) {
  const containerRef = useRef(null);
  const viewerRef    = useRef(null);

  // Store latest callbacks in refs so the stable event listeners always call
  // the current version without triggering re-subscription.
  const cbRefs = useRef({});
  cbRefs.current = {
    onDocumentLoaded,
    onPageChanged,
    onSignaturePlaced,
    onEStampPlaced,
    onSignatureMoved,
    onSignatureModeChanged,
    onCoordinateCapture,
  };

  // ── Mount: create viewer once ──────────────────────────────────────────────
  useEffect(() => {
    if (!containerRef.current) return;

    const viewer = createViewer({
      container: containerRef.current,
      file,
      scale,
      theme,
      disabled,
      signatureOptions,
      estampOptions,
      labels,
      ui,
      groupByCategory,
    });

    viewerRef.current = viewer;
    if (externalRef) externalRef.current = viewer;

    // Wire all events via stable closures that delegate to the latest callback refs
    VIEWER_EVENTS.forEach((event) => {
      const propKey = `on${event.charAt(0).toUpperCase()}${event.slice(1)}`;
      viewer.on(event, (payload) => {
        cbRefs.current[propKey]?.(payload);
      });
    });

    if (onReady) onReady(viewer);

    return () => {
      viewer.destroy();
      viewerRef.current = null;
      if (externalRef) externalRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only run on mount / unmount

  // ── File change ────────────────────────────────────────────────────────────
  useEffect(() => {
    if (file && viewerRef.current) {
      viewerRef.current.loadDocument(file);
    }
  }, [file]);

  // ── Scale change ───────────────────────────────────────────────────────────
  useEffect(() => {
    if (viewerRef.current) {
      viewerRef.current.setScale(scale);
    }
  }, [scale]);

  // ── Config change (ui, theme, disabled, labels, options) ──────────────────
  // Stringify the combined config to detect deep changes
  const configKey = JSON.stringify({ ui, theme, disabled, labels, signatureOptions, estampOptions, groupByCategory });
  useEffect(() => {
    if (viewerRef.current) {
      viewerRef.current.updateConfig({ ui, theme, disabled, labels, signatureOptions, estampOptions, groupByCategory });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [configKey]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={style}
    />
  );
}

// ─── Imperative API helpers ────────────────────────────────────────────────

/**
 * usePdfViewer — React hook for fully imperative access to the viewer API.
 *
 * Returns a `containerRef` to attach to a div, a stable `viewer` ref,
 * and convenience wrappers for every viewer method.
 *
 * Usage:
 *   const pdf = usePdfViewer({
 *     scale: 1.5,
 *     theme: 'dark',
 *     signatureOptions: [...],
 *     estampOptions: [...],
 *     onSignaturePlaced: (sig) => console.log(sig),
 *   });
 *
 *   return <div ref={pdf.containerRef} style={{ height: '600px' }} />;
 *
 * @param {object} options  All PdfViewer props except `style`/`className`
 * @returns {{
 *   containerRef: React.RefObject<HTMLDivElement>,
 *   viewer: React.MutableRefObject<import('../core/viewer').ViewerInstance|null>,
 *   loadDocument: function,
 *   nextPage: function,
 *   prevPage: function,
 *   goToPage: function,
 *   setScale: function,
 *   fitToScreen: function,
 *   enableSignatureMode: function,
 *   disableSignatureMode: function,
 *   openSignatureModal: function,
 *   openEStampModal: function,
 *   placeSignature: function,
 *   placeEStamp: function,
 *   removeSignature: function,
 *   clearSignatures: function,
 *   getSignatures: function,
 *   getSignaturesByPage: function,
 *   getCanvas: function,
 *   getOverlayCanvas: function,
 *   setPaginationLocked: function,
 *   updateConfig: function,
 * }}
 */
export function usePdfViewer(options = {}) {
  const containerRef = useRef(null);
  const viewerRef    = useRef(null);

  // Separate callbacks from static config
  const {
    onDocumentLoaded,
    onPageChanged,
    onSignaturePlaced,
    onEStampPlaced,
    onSignatureMoved,
    onSignatureModeChanged,
    onCoordinateCapture,
    onReady,
    ...staticOptions
  } = options;

  const cbRefs = useRef({});
  cbRefs.current = {
    onDocumentLoaded,
    onPageChanged,
    onSignaturePlaced,
    onEStampPlaced,
    onSignatureMoved,
    onSignatureModeChanged,
    onCoordinateCapture,
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const viewer = createViewer({
      container: containerRef.current,
      ...staticOptions,
    });

    viewerRef.current = viewer;

    // Wire events
    VIEWER_EVENTS.forEach((event) => {
      const propKey = `on${event.charAt(0).toUpperCase()}${event.slice(1)}`;
      viewer.on(event, (payload) => {
        cbRefs.current[propKey]?.(payload);
      });
    });

    if (onReady) onReady(viewer);

    return () => {
      viewer.destroy();
      viewerRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Stable imperative wrappers ─────────────────────────────────────────────
  const call = useCallback((method, ...args) => viewerRef.current?.[method]?.(...args), []);

  return {
    containerRef,
    viewer: viewerRef,

    // Document
    loadDocument:     useCallback((src) => call('loadDocument', src), [call]),

    // Navigation
    nextPage:         useCallback(() => call('nextPage'), [call]),
    prevPage:         useCallback(() => call('prevPage'), [call]),
    goToPage:         useCallback((n) => call('goToPage', n), [call]),

    // Zoom
    setScale:         useCallback((s) => call('setScale', s), [call]),
    fitToScreen:      useCallback(() => call('fitToScreen'), [call]),

    // Signature mode
    enableSignatureMode:  useCallback(() => call('enableSignatureMode'), [call]),
    disableSignatureMode: useCallback(() => call('disableSignatureMode'), [call]),

    // Modals
    openSignatureModal:   useCallback(() => call('openSignatureModal'), [call]),
    openEStampModal:      useCallback(() => call('openEStampModal'), [call]),

    // Placement
    placeSignature:   useCallback((opts) => call('placeSignature', opts), [call]),
    placeEStamp:      useCallback((opts) => call('placeEStamp', opts), [call]),
    removeSignature:  useCallback((id) => call('removeSignature', id), [call]),
    clearSignatures:  useCallback(() => call('clearSignatures'), [call]),

    // Getters
    getSignatures:      useCallback(() => call('getSignatures'), [call]),
    getSignaturesByPage: useCallback((pg) => call('getSignaturesByPage', pg), [call]),
    getCanvas:          useCallback((pg) => call('getCanvas', pg), [call]),
    getOverlayCanvas:   useCallback((pg) => call('getOverlayCanvas', pg), [call]),

    // Pagination lock
    setPaginationLocked: useCallback((locked) => call('setPaginationLocked', locked), [call]),

    // Config
    updateConfig:     useCallback((cfg) => call('updateConfig', cfg), [call]),
  };
}
