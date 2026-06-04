/**
 * vue.js — Vue 3 adapter for pdf-signature-jtp-sdk
 *
 * Usage:
 *   import { PdfViewer } from 'pdf-signature-jtp-sdk/vue'
 *
 *   <PdfViewer
 *     :file="pdfFile"
 *     :scale="1.5"
 *     theme="dark"
 *     :disabled="false"
 *     :signature-options="[{ id: 'dir', label: 'Direktur', image: '...' }]"
 *     :estamp-options="[{ id: 'ematerai', label: 'E-Materai Resmi', image: '...' }]"
 *     :labels="{ uploadBtn: 'Open PDF', signatureBtn: 'Add Signature' }"
 *     :ui="{
 *       topbar: { upload: true, signature: true, eStamp: true,
 *                 pagination: true, zoom: true, themeToggle: true },
 *       sidebar: { thumbnails: true },
 *     }"
 *     @document-loaded="onLoad"
 *     @page-changed="onPageChange"
 *     @signature-placed="onSig"
 *     @e-stamp-placed="onEStamp"
 *     @signature-moved="onMoved"
 *     @signature-removed="onRemoved"
 *     @signatures-cleared="onCleared"
 *     @signature-mode-changed="onModeChange"
 *     @coordinate-capture="onCapture"
 *     @ready="onReady"
 *   />
 *
 * Exposed API (via template ref):
 *   const viewer = ref()
 *   viewer.value.loadDocument(file)
 *   viewer.value.nextPage()
 *   viewer.value.prevPage()
 *   viewer.value.goToPage(3)
 *   viewer.value.setScale(2)
 *   viewer.value.fitToScreen()
 *   viewer.value.enableSignatureMode()
 *   viewer.value.disableSignatureMode()
 *   viewer.value.openSignatureModal()
 *   viewer.value.openEStampModal()
 *   viewer.value.placeSignature({ x, y, page })
 *   viewer.value.placeEStamp({ x, y, page })
 *   viewer.value.removeSignature(id)
 *   viewer.value.clearSignatures()
 *   viewer.value.getSignatures()
 *   viewer.value.getSignaturesByPage(page)
 *   viewer.value.getCanvas(page)
 *   viewer.value.getOverlayCanvas(page)
 *   viewer.value.setPaginationLocked(true)
 *   viewer.value.updateConfig({ ... })
 *   viewer.value.currentPage       // reactive getter
 *   viewer.value.totalPages        // reactive getter
 *   viewer.value.currentScale      // reactive getter
 *   viewer.value.isSignatureModeActive // reactive getter
 *   viewer.value.isPaginationLocked   // reactive getter
 */

import { defineComponent, ref, onMounted, onUnmounted, watch, h } from 'vue';
import { createViewer } from '../core/viewer.js';

export const PdfViewer = defineComponent({
  name: 'PdfViewer',

  props: {
    /** PDF source: File, Blob, URL string, or ArrayBuffer */
    file: {
      type: [File, String, Object], // Object covers Blob / ArrayBuffer
      default: null,
    },

    /** Render scale factor (default: 1.5) */
    scale: {
      type: Number,
      default: 1.5,
    },

    /** Color theme: 'light' | 'dark' */
    theme: {
      type: String,
      default: 'dark',
      validator: (v) => ['light', 'dark'].includes(v),
    },

    /** Globally disable all interactive elements */
    disabled: {
      type: Boolean,
      default: false,
    },

    /** Lock signatures and stamps in place */
    disableDragging: {
      type: Boolean,
      default: false,
    },

    /** Lock signature position only */
    disableDrag: {
      type: Boolean,
      default: false,
    },

    /** Lock signature size only */
    disableResize: {
      type: Boolean,
      default: false,
    },

    /** Array of signature options shown in the modal */
    signatureOptions: {
      type: Array,
      default: () => [],
    },

    /** Array of e-materai stamp options shown in the modal */
    estampOptions: {
      type: Array,
      default: () => [],
    },

    /** Group signature / e-materai options by category */
    groupByCategory: {
      type: Boolean,
      default: false,
    },

    /**
     * Override button / modal labels.
     * @example { uploadBtn: 'Open PDF', signatureBtn: 'Add Signature', signatureModalTitle: '...', estampModalTitle: '...' }
     */
    labels: {
      type: Object,
      default: () => ({}),
    },

    /**
     * UI visibility config.
     * @example { topbar: { upload, signature, eStamp, pagination, paginationInput, zoom, themeToggle, customComponent }, sidebar: { thumbnails } }
     */
    ui: {
      type: Object,
      default: () => ({}),
    },

    /** Inline style applied to the container div */
    containerStyle: {
      type: Object,
      default: () => ({ width: '100%', height: '600px' }),
    },

    /** CSS class applied to the container div */
    class: {
      type: String,
      default: '',
    },

    /** Callback before upload. Receives File, returns boolean/Promise<boolean> or File/Blob */
    onUpload: {
      type: Function,
      default: null,
    },
  },

  emits: [
    /** Fired when a document finishes loading. Payload: { totalPages } */
    'documentLoaded',
    /** Fired when the visible page changes. Payload: { page, total, source } */
    'pageChanged',
    /** Fired when a signature is placed. Payload: signature object */
    'signaturePlaced',
    /** Fired when an e-materai stamp is placed. Payload: stamp object */
    'eStampPlaced',
    /** Fired when a signature/stamp is moved or resized. Payload: item object */
    'signatureMoved',
    /** Fired when signature placement mode is toggled. Payload: { active } */
    'signatureModeChanged',
    /** Fired on coordinate-capture click in signature mode. Payload: { x, y, page } */
    'coordinateCapture',
    /** Fired when a signature is removed. Payload: { id } */
    'signatureRemoved',
    /** Fired when all signatures are cleared. Payload: none */
    'signaturesCleared',
    /** Fired after the viewer is fully initialized. Payload: viewer instance */
    'ready',
  ],

  setup(props, { emit, expose }) {
    const containerRef = ref(null);

    /** @type {import('../core/viewer').ViewerInstance|null} */
    let _viewer = null;

    // ── Mount ─────────────────────────────────────────────────────────────────
    onMounted(() => {
      _viewer = createViewer({
        container: containerRef.value,
        // BUG-13: do NOT pass file here — load explicitly after wiring events
        // to prevent the file watcher from double-loading on mount
        scale: props.scale,
        theme: props.theme,
        disabled: props.disabled,
        disableDragging: props.disableDragging,
        disableDrag: props.disableDrag,
        disableResize: props.disableResize,
        signatureOptions: props.signatureOptions,
        estampOptions: props.estampOptions,
        labels: props.labels,
        ui: props.ui,
        groupByCategory: props.groupByCategory,
        onUpload: props.onUpload,
      });

      // Wire all SDK events → Vue emits
      _viewer.on('documentLoaded',      (p) => emit('documentLoaded', p));
      _viewer.on('pageChanged',         (p) => emit('pageChanged', p));
      _viewer.on('signaturePlaced',     (p) => emit('signaturePlaced', p));
      _viewer.on('eStampPlaced',        (p) => emit('eStampPlaced', p));
      _viewer.on('signatureMoved',      (p) => emit('signatureMoved', p));
      _viewer.on('signatureModeChanged',(p) => emit('signatureModeChanged', p));
      _viewer.on('coordinateCapture',   (p) => emit('coordinateCapture', p));
      _viewer.on('signatureRemoved',    (p) => emit('signatureRemoved', p));
      _viewer.on('signaturesCleared',   () => emit('signaturesCleared'));

      emit('ready', _viewer);

      // BUG-13: load initial file explicitly so the watcher below cannot double-load it
      if (props.file) {
        _viewer.loadDocument(props.file).catch((e) => {
          console.error('[PdfViewer] Initial load error:', e);
        });
      }
    });

    // ── Watchers ──────────────────────────────────────────────────────────────

    // File source change → reload document
    watch(() => props.file, (newFile, oldFile) => {
      // BUG-13: only load when file genuinely changes (prevents edge-case double-load)
      if (newFile && newFile !== oldFile && _viewer) _viewer.loadDocument(newFile);
    });

    // Scale change → re-render
    watch(() => props.scale, (newScale) => {
      if (_viewer) _viewer.setScale(newScale);
    });

    // Full config changes (ui, theme, disabled, disableDragging, labels, signatureOptions, estampOptions)
    // Use deep watch on each; batch into one updateConfig call
    watch(
      () => ({
        ui:               props.ui,
        theme:            props.theme,
        disabled:         props.disabled,
        disableDragging:  props.disableDragging,
        disableDrag:      props.disableDrag,
        disableResize:    props.disableResize,
        labels:           props.labels,
        signatureOptions: props.signatureOptions,
        estampOptions:    props.estampOptions,
        groupByCategory:  props.groupByCategory,
        onUpload:         props.onUpload,
      }),
      (newCfg) => {
        if (_viewer) _viewer.updateConfig(newCfg);
      },
      { deep: true }
    );

    // ── Unmount ───────────────────────────────────────────────────────────────
    onUnmounted(() => {
      if (_viewer) {
        _viewer.destroy();
        _viewer = null;
      }
    });

    // ── Exposed imperative API ────────────────────────────────────────────────
    expose({
      // ── Document ────────────────────────────────────────────────────────────
      /** Load a new PDF (File, Blob, URL, ArrayBuffer). */
      loadDocument: (src) => _viewer?.loadDocument(src),

      // ── Navigation ──────────────────────────────────────────────────────────
      /** Navigate to the next page. */
      nextPage: () => _viewer?.nextPage(),
      /** Navigate to the previous page. */
      prevPage: () => _viewer?.prevPage(),
      /** Navigate to a specific page (1-indexed). */
      goToPage: (n) => _viewer?.goToPage(n),

      // ── Zoom ────────────────────────────────────────────────────────────────
      /** Set the render scale (e.g. 1.0 = 100%, 1.5 = 150%). */
      setScale: (s) => _viewer?.setScale(s),
      /** Fit the current page to the available container width/height. */
      fitToScreen: () => _viewer?.fitToScreen(),

      // ── Modals ────────────────────────────────────────────────────────────────────────
      /** Programmatically open the signature selection modal. */
      openSignatureModal: () => _viewer?.openSignatureModal(),
      /** Programmatically open the e-materai selection modal. */
      openEStampModal: () => _viewer?.openEStampModal(),

      // ── Placement ───────────────────────────────────────────────────────────
      /**
       * Place a signature at given coordinates.
       * @param {{ x?: number, y?: number, page?: number, label?: string, image?: string }} opts
       */
      placeSignature: (opts) => _viewer?.placeSignature(opts),
      /**
       * Place an e-materai stamp at given coordinates.
       * @param {{ x?: number, y?: number, page?: number, image?: string }} opts
       */
      placeEStamp: (opts) => _viewer?.placeEStamp(opts),
      /** Remove a specific signature/stamp by ID. */
      removeSignature: (id) => _viewer?.removeSignature(id),
      /** Clear all placed signatures and stamps. */
      clearSignatures: () => _viewer?.clearSignatures(),

      // ── Getters ─────────────────────────────────────────────────────────────
      /** Get all placed signatures/stamps across all pages. */
      getSignatures: () => _viewer?.getSignatures(),
      /** Get placed signatures/stamps for a specific page. */
      getSignaturesByPage: (page) => _viewer?.getSignaturesByPage(page),
      /** Get the main PDF canvas element for a given page. */
      getCanvas: (page) => _viewer?.getCanvas(page),
      /** Get the overlay canvas element for a given page. */
      getOverlayCanvas: (page) => _viewer?.getOverlayCanvas(page),

      // ── Pagination lock ──────────────────────────────────────────────────────
      /** Lock or unlock page navigation. */
      setPaginationLocked: (locked) => _viewer?.setPaginationLocked(locked),

      // ── Config ───────────────────────────────────────────────────────────────
      /** Dynamically update any config options. */
      updateConfig: (cfg) => _viewer?.updateConfig(cfg),

      // ── Loader Skeleton ──────────────────────────────────────────────────────
      /** Show or hide the full-view skeleton loader overlay. */
      showSkeleton: (visible, options) => _viewer?.showSkeleton(visible, options),

      // ── Destroy ──────────────────────────────────────────────────────────────
      /** Destroy the viewer and clean up resources. */
      destroy: () => _viewer?.destroy(),

      // ── Signature mode stubs ──────────────────────────────────────────────────
      /** Enable signature placement mode (backwards-compatibility stub). */
      enableSignatureMode: () => _viewer?.enableSignatureMode(),
      /** Disable signature placement mode (backwards-compatibility stub). */
      disableSignatureMode: () => _viewer?.disableSignatureMode(),

      // ── Reactive state getters ───────────────────────────────────────────────
      get currentPage()          { return _viewer?.currentPage; },
      get totalPages()           { return _viewer?.totalPages; },
      get currentScale()         { return _viewer?.currentScale; },
      get isPaginationLocked()   { return _viewer?.isPaginationLocked; },
      get isPasswordProtected()  { return _viewer?.isPasswordProtected; },
      get isSignatureModeActive() { return _viewer?.isSignatureModeActive; },
    });

    // ── Render ────────────────────────────────────────────────────────────────
    return () =>
      h('div', {
        ref: containerRef,
        class: props.class,
        style: props.containerStyle,
      });
  },
});
