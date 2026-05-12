/**
 * vue.js — Vue 3 adapter for pdf-signature-sdk
 *
 * Usage:
 *   import { PdfViewer } from 'pdf-signature-sdk/vue'
 *
 *   <PdfViewer
 *     :file="pdfFile"
 *     :ui="{ sidebar: { thumbnails: false } }"
 *     @signature-placed="onSignature"
 *     @page-changed="onPageChange"
 *     @document-loaded="onLoad"
 *   />
 */

import { defineComponent, ref, onMounted, onUnmounted, watch, h } from 'vue';
import { createViewer } from '../core/viewer.js';

export const PdfViewer = defineComponent({
  name: 'PdfViewer',

  props: {
    /** PDF source: File, Blob, URL string, or ArrayBuffer */
    file: {
      type: [File, String, Object], // Object covers Blob/ArrayBuffer
      default: null,
    },
    /** Scale factor for rendering (default: 1.5) */
    scale: {
      type: Number,
      default: 1.5,
    },
    /** UI configuration object */
    ui: {
      type: Object,
      default: () => ({}),
    },
    /** Additional container style */
    style: {
      type: Object,
      default: () => ({ width: '100%', height: '600px' }),
    },
    /** Additional class names */
    class: {
      type: String,
      default: '',
    },
  },

  emits: [
    'documentLoaded',
    'pageChanged',
    'signaturePlaced',
    'eStampPlaced',
    'signatureMoved',
    'signatureModeChanged',
    'coordinateCapture',
    'ready',
  ],

  setup(props, { emit, expose }) {
    const containerRef = ref(null);
    /** @type {import('../core/viewer').ViewerInstance|null} */
    let viewer = null;

    onMounted(() => {
      viewer = createViewer({
        container: containerRef.value,
        file: props.file,
        scale: props.scale,
        ui: props.ui,
      });

      // Wire events → emits
      viewer.on('documentLoaded', (payload) => emit('documentLoaded', payload));
      viewer.on('pageChanged', (payload) => emit('pageChanged', payload));
      viewer.on('signaturePlaced', (payload) => emit('signaturePlaced', payload));
      viewer.on('eStampPlaced', (payload) => emit('eStampPlaced', payload));
      viewer.on('signatureMoved', (payload) => emit('signatureMoved', payload));
      viewer.on('signatureModeChanged', (payload) => emit('signatureModeChanged', payload));
      viewer.on('coordinateCapture', (payload) => emit('coordinateCapture', payload));

      emit('ready', viewer);
    });

    // Watch for file changes → reload document
    watch(
      () => props.file,
      (newFile) => {
        if (newFile && viewer) {
          viewer.loadDocument(newFile);
        }
      }
    );

    // Watch for UI config changes → update config
    watch(
      () => props.ui,
      (newUi) => {
        if (viewer) viewer.updateConfig({ ui: newUi });
      },
      { deep: true }
    );

    onUnmounted(() => {
      if (viewer) {
        viewer.destroy();
        viewer = null;
      }
    });

    // Expose viewer API to parent via template ref
    expose({
      loadDocument: (file) => viewer?.loadDocument(file),
      nextPage: () => viewer?.nextPage(),
      prevPage: () => viewer?.prevPage(),
      goToPage: (n) => viewer?.goToPage(n),
      enableSignatureMode: () => viewer?.enableSignatureMode(),
      disableSignatureMode: () => viewer?.disableSignatureMode(),
      placeSignature: (opts) => viewer?.placeSignature(opts),
      placeEStamp: (opts) => viewer?.placeEStamp(opts),
      clearSignatures: () => viewer?.clearSignatures(),
      getSignatures: () => viewer?.getSignatures(),
      get currentPage() { return viewer?.currentPage; },
      get totalPages() { return viewer?.totalPages; },
    });

    return () =>
      h('div', {
        ref: containerRef,
        class: props.class,
        style: props.style,
      });
  },
});
