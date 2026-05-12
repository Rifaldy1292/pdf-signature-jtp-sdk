# pdf-signature-sdk

A **framework-agnostic** PDF Viewer + Signature SDK. Works with Vanilla JS, Vue 3, React, and Nuxt out of the box.

[![npm](https://img.shields.io/npm/v/pdf-signature-sdk)](https://npmjs.com/package/pdf-signature-sdk)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

---

## Features

- 📄 **PDF.js rendering** — High-fidelity canvas rendering
- 🖊️ **Signatures** — Click-to-place, draggable signature placeholders
- 🔴 **E-Materai** — Electronic stamp placement
- 📑 **Sidebar** — Page thumbnails with click navigation
- 🧰 **Toolbar** — Upload, pagination, zoom, signature controls
- ⚙️ **UI Config** — Show/hide any UI element via config
- 🔄 **Dynamic switching** — Change document without page reload
- 🎯 **Framework-free core** — No Vue/React in the core engine

---

## Installation

```bash
npm install pdf-signature-sdk
```

---

## Usage

### Vanilla JS / HTML

```js
import { createViewer } from 'pdf-signature-sdk';

const viewer = createViewer({
  container: '#app',         // CSS selector or HTMLElement
  file: 'path/to/doc.pdf',  // URL, File, Blob, or ArrayBuffer
  scale: 1.5,               // zoom level
  ui: {
    topbar: {
      upload: true,
      signature: true,
      eStamp: true,
      pagination: true,
      zoom: true,
    },
    sidebar: {
      thumbnails: true,
    },
  },
});

// Listen to events
viewer.on('signaturePlaced', ({ x, y, page, id }) => {
  console.log('Signature at', x, y, 'on page', page);
});

viewer.on('pageChanged', ({ page, total }) => {
  console.log(`Page ${page} of ${total}`);
});

// API
viewer.loadDocument(newFile);   // Switch documents
viewer.nextPage();
viewer.prevPage();
viewer.goToPage(3);
viewer.enableSignatureMode();
viewer.disableSignatureMode();
viewer.placeSignature({ x: 100, y: 200, page: 1 });
viewer.placeEStamp({ x: 300, y: 400 });
viewer.clearSignatures();
const sigs = viewer.getSignatures(); // array of all placed items
viewer.destroy();
```

### Vue 3 / Nuxt

```vue
<script setup>
import { PdfViewer } from 'pdf-signature-sdk/vue';
import 'pdf-signature-sdk/style.css';

const file = ref(null);
const ui = { sidebar: { thumbnails: true }, topbar: { signature: true } };

function onSignature(sig) {
  console.log('Signature placed:', sig);
}
</script>

<template>
  <PdfViewer
    :file="file"
    :ui="ui"
    style="height: 700px"
    @signature-placed="onSignature"
    @page-changed="({ page }) => console.log(page)"
  />
</template>
```

### React

```jsx
import { PdfViewer } from 'pdf-signature-sdk/react';
import 'pdf-signature-sdk/style.css';

function App() {
  const [file, setFile] = useState(null);

  return (
    <PdfViewer
      file={file}
      ui={{ sidebar: { thumbnails: true } }}
      style={{ width: '100%', height: '700px' }}
      onSignaturePlaced={(sig) => console.log(sig)}
      onPageChanged={({ page, total }) => console.log(page, total)}
    />
  );
}
```

---

## UI Config Reference

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `ui.topbar.upload` | boolean | `true` | Upload / change document button |
| `ui.topbar.signature` | boolean | `true` | Add signature button |
| `ui.topbar.eStamp` | boolean | `true` | E-Materai stamp button |
| `ui.topbar.pagination` | boolean | `true` | Prev / Next / page indicator |
| `ui.topbar.zoom` | boolean | `true` | Zoom in / out controls |
| `ui.sidebar.thumbnails` | boolean | `true` | Page thumbnail sidebar |

---

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `documentLoaded` | `{ totalPages }` | New document loaded |
| `pageChanged` | `{ page, total }` | User navigated to a page |
| `signaturePlaced` | `{ id, x, y, page, type }` | Signature placed on canvas |
| `eStampPlaced` | `{ id, x, y, page, type }` | E-Materai placed |
| `signatureMoved` | `{ id, x, y, page }` | Signature dragged to new position |
| `signatureModeChanged` | `{ active }` | Signature mode toggled |
| `coordinateCapture` | `{ x, y, page, canvasWidth, canvasHeight }` | Raw click coordinate captured |

---

## API Reference

| Method | Description |
|--------|-------------|
| `loadDocument(source)` | Load PDF from File, Blob, URL, or ArrayBuffer |
| `nextPage()` | Go to next page |
| `prevPage()` | Go to previous page |
| `goToPage(n)` | Go to page n (1-indexed) |
| `enableSignatureMode()` | Enable click-to-place mode |
| `disableSignatureMode()` | Disable placement mode |
| `placeSignature({ x, y, page?, label? })` | Programmatic signature placement |
| `placeEStamp({ x, y, page? })` | Programmatic e-materai placement |
| `removeSignature(id)` | Remove specific item by ID |
| `clearSignatures()` | Remove all signatures/stamps |
| `getSignatures()` | Get all placed items (all pages) |
| `getSignaturesByPage(page)` | Get items for a specific page |
| `on(event, fn)` | Subscribe to an event |
| `off(event, fn)` | Unsubscribe from an event |
| `updateConfig(partialConfig)` | Update UI config dynamically |
| `getCanvas()` | Get the main PDF canvas element |
| `getOverlayCanvas()` | Get the overlay canvas element |
| `destroy()` | Destroy viewer and clean up resources |

---

## License

JTP © 2026
