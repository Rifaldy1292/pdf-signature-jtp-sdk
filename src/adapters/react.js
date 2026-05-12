/**
 * react.js — React adapter for pdf-signature-sdk
 *
 * Usage:
 *   import { PdfViewer } from 'pdf-signature-sdk/react'
 *
 *   <PdfViewer
 *     file={pdfFile}
 *     ui={{ sidebar: { thumbnails: false } }}
 *     onSignaturePlaced={(sig) => console.log(sig)}
 *     onPageChanged={({ page, total }) => console.log(page, total)}
 *     style={{ width: '100%', height: '600px' }}
 *   />
 */

import { useRef, useEffect, useCallback } from 'react';
import { createViewer } from '../core/viewer.js';

/**
 * @param {{
 *   file?: File|string|Blob|ArrayBuffer,
 *   ui?: object,
 *   scale?: number,
 *   style?: React.CSSProperties,
 *   className?: string,
 *   onDocumentLoaded?: function,
 *   onPageChanged?: function,
 *   onSignaturePlaced?: function,
 *   onEStampPlaced?: function,
 *   onSignatureMoved?: function,
 *   onSignatureModeChanged?: function,
 *   onCoordinateCapture?: function,
 *   onReady?: function,
 *   viewerRef?: React.MutableRefObject<any>,
 * }} props
 */
export function PdfViewer({
  file = null,
  ui = {},
  scale = 1.5,
  style = { width: '100%', height: '600px' },
  className = '',
  onDocumentLoaded,
  onPageChanged,
  onSignaturePlaced,
  onEStampPlaced,
  onSignatureMoved,
  onSignatureModeChanged,
  onCoordinateCapture,
  onReady,
  viewerRef: externalRef,
}) {
  const containerRef = useRef(null);
  const viewerRef = useRef(null);

  // ── Mount: create viewer
  useEffect(() => {
    if (!containerRef.current) return;

    const viewer = createViewer({
      container: containerRef.current,
      file,
      scale,
      ui,
    });

    viewerRef.current = viewer;
    if (externalRef) externalRef.current = viewer;

    // Wire events
    if (onDocumentLoaded) viewer.on('documentLoaded', onDocumentLoaded);
    if (onPageChanged) viewer.on('pageChanged', onPageChanged);
    if (onSignaturePlaced) viewer.on('signaturePlaced', onSignaturePlaced);
    if (onEStampPlaced) viewer.on('eStampPlaced', onEStampPlaced);
    if (onSignatureMoved) viewer.on('signatureMoved', onSignatureMoved);
    if (onSignatureModeChanged) viewer.on('signatureModeChanged', onSignatureModeChanged);
    if (onCoordinateCapture) viewer.on('coordinateCapture', onCoordinateCapture);
    if (onReady) onReady(viewer);

    return () => {
      viewer.destroy();
      viewerRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only run on mount/unmount

  // ── File change
  useEffect(() => {
    if (file && viewerRef.current) {
      viewerRef.current.loadDocument(file);
    }
  }, [file]);

  // ── UI config change
  useEffect(() => {
    if (viewerRef.current) {
      viewerRef.current.updateConfig({ ui });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(ui)]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={style}
    />
  );
}

/**
 * Custom hook for accessing the viewer API imperatively.
 *
 * Usage:
 *   const { containerRef, viewer } = usePdfViewer({ file, ui });
 *   return <div ref={containerRef} style={{ height: '600px' }} />;
 */
export function usePdfViewer(options = {}) {
  const containerRef = useRef(null);
  const viewerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const viewer = createViewer({ container: containerRef.current, ...options });
    viewerRef.current = viewer;
    return () => viewer.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { containerRef, viewer: viewerRef };
}
