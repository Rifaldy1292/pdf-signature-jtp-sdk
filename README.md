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

## run repository

```bash
npm run dev
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
viewer.placeSignature({ x: 100, y: 200, page: 1 });
viewer.placeEStamp({ x: 300, y: 400 });
viewer.clearSignatures();
const sigs = viewer.getSignatures(); // array of all placed items
viewer.showSkeleton(true, { opacity: 0.85, blur: '4px' }); // Show loading state
viewer.showSkeleton(false); // Hide loading state
viewer.destroy();
```

### Vue 3 & React

Pustaka ini bersifat **framework-agnostic**. Untuk menggunakan SDK ini di Vue 3 atau React, Anda cukup membuat komponen wrapper lokal yang memanggil fungsi vanilla `createViewer`. Contoh kode boilerplate wrapper yang siap pakai (*copy-paste*) dapat dilihat langsung pada file [documentation.html](demo/documentation.html).

## Configuration Options

### Root Config Options

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `container` | string \| HTMLElement | `null` | Container element or CSS selector |
| `file` | string \| File \| Blob \| ArrayBuffer | `null` | PDF source file |
| `scale` | number | `1.5` | Initial zoom scale factor |
| `theme` | `'light' \| 'dark'` | `'light'` | Color theme |
| `disabled` | boolean | `false` | Disable all pointer interactions globally |
| `signatureOptions` | array | `[]` | Array of signature choices `[{ id, label, image, group? }]` |
| `estampOptions` | array | `[]` | Array of e-materai stamp choices `[{ id, label, image, group? }]` |
| `groupByCategory` | boolean | `false` | Group choices by category in selection modal (requires `group` in options) |

---

## UI Config Reference

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `ui.topbar.upload` | boolean | `true` | Upload / change document button |
| `ui.topbar.signature` | boolean | `true` | Add signature button |
| `ui.topbar.eStamp` | boolean | `true` | E-Materai stamp button |
| `ui.topbar.pagination` | boolean | `true` | Prev / Next / page indicator |
| `ui.topbar.zoom` | boolean | `true` | Zoom in / out controls |
| `ui.topbar.customComponent` | string \| HTMLElement | `null` | Custom element in topbar |
| `ui.topbar.logo` | string \| HTMLElement | `null` | Custom brand logo SVG/HTML or image URL |
| `ui.topbar.brandText` | string \| boolean | `null` | Custom brand text (or `false`/`""` to hide) |
| `ui.topbar.style` | object | `null` | Key-value inline CSS override object for topbar |
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

---

## API Reference

| Method | Description |
|--------|-------------|
| `loadDocument(source)` | Load PDF from File, Blob, URL, or ArrayBuffer |
| `nextPage()` | Go to next page |
| `prevPage()` | Go to previous page |
| `goToPage(n)` | Go to page n (1-indexed) |
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
| `showSkeleton(visible, options)` | Show or hide the full-view skeleton loader overlay |
| `destroy()` | Destroy viewer and clean up resources |

---

## Styling & Customization

All SDK styles are scoped to `.psdk-root` using the `psdk-*` BEM namespace. You can customise appearance via **CSS Variables** (recommended) or **direct class overrides**.

### CSS Variables (Recommended)

Override on `.psdk-root` or any ancestor. **No `!important` needed.**

```css
.psdk-root {
  --psdk-accent:        #ef4444;   /* Change accent to red */
  --psdk-sidebar-width: 240px;     /* Wider sidebar */
  --psdk-topbar-height: 64px;      /* Taller topbar */
  --psdk-font:          'Roboto', sans-serif;
}
```

| Variable | Default (dark) | Description |
|---|---|---|
| `--psdk-bg-base` | `#0f1117` | Outermost background |
| `--psdk-bg-surface` | `#1a1d27` | Topbar / sidebar background |
| `--psdk-bg-elevated` | `#22263a` | Button / badge background |
| `--psdk-bg-hover` | `#2a2f45` | Hover state background |
| `--psdk-accent` | `#6366f1` | Primary accent (buttons, active states) |
| `--psdk-accent-hover` | `#4f52e0` | Accent hover color |
| `--psdk-accent-glow` | `rgba(99,102,241,0.35)` | Accent shadow glow |
| `--psdk-danger` | `#ef4444` | Danger / destructive color |
| `--psdk-text-primary` | `#f1f5f9` | Main text color |
| `--psdk-text-secondary` | `#8b92a5` | Secondary text color |
| `--psdk-topbar-height` | `56px` | Topbar height |
| `--psdk-sidebar-width` | `190px` | Sidebar width |
| `--psdk-font` | `"Inter", system-ui` | Font family |
| `--psdk-radius-sm/md/lg` | `6px / 10px / 14px` | Border radius scale |

### Direct Class Override

For fine-grained control, override specific BEM classes. Use `!important` since SDK styles are injected via JS.

```css
/* Override accent buttons only */
.psdk-btn--accent {
  background: #ef4444 !important;
  border-color: #dc2626 !important;
}

/* Wider sidebar */
.psdk-sidebar {
  width: 260px !important;
}
```

| Class | Component | Description |
|---|---|---|
| `.psdk-root` | Root | Main wrapper, scope all overrides here |
| `.psdk-light` | Root | Light theme modifier |
| `.psdk-topbar` | Topbar | Top toolbar bar |
| `.psdk-topbar__brand-icon--custom` | Topbar | Custom logo container override style |
| `.psdk-btn` | Button | Base button class |
| `.psdk-btn--accent` | Button | Primary CTA button |
| `.psdk-btn--danger` | Button | Destructive action button |
| `.psdk-btn--ghost` | Button | Transparent ghost button |
| `.psdk-sidebar` | Sidebar | Left thumbnail sidebar |
| `.psdk-thumb` | Sidebar | Single thumbnail item |
| `.psdk-thumb--active` | Sidebar | Current page thumbnail |
| `.psdk-viewer` | Viewer | Main viewer area |
| `.psdk-canvas-wrap` | Viewer | Per-page canvas shadow wrapper |
| `.psdk-modal` | Modal | Signature/stamp selection modal |

### Programmatic Discovery (JS/TS)

Import `SDK_CLASSES` and `SDK_VARIABLES` to get all names with IDE autocomplete:

```js
import { SDK_CLASSES, SDK_VARIABLES, SDK_VARIABLE_DEFAULTS } from 'pdf-signature-jtp-sdk';

// Class names — no typos
SDK_CLASSES.button.accent      // → 'psdk-btn--accent'
SDK_CLASSES.sidebar.base       // → 'psdk-sidebar'

// Variable names
SDK_VARIABLES.accent           // → '--psdk-accent'
SDK_VARIABLES.sidebarWidth     // → '--psdk-sidebar-width'

// Default values
SDK_VARIABLE_DEFAULTS['--psdk-accent']  // → '#6366f1'

// Override via JS
document.querySelector('.psdk-root')
  .style.setProperty(SDK_VARIABLES.accent, '#ef4444');
```

---

## License

JTP © 2026
