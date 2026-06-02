# Repository Skills & Context Map — `pdf-signature-jtp-sdk`

This file provides a comprehensive overview of the `pdf-signature-jtp-sdk` repository. It is designed to help AI agents and developers understand the repository's context, architecture, API surface, events, and customization options instantly without needing to scan the entire codebase.

---

## 🚀 Overview

`pdf-signature-jtp-sdk` is a **framework-agnostic PDF Viewer + Digital Signature/E-Materai Placement SDK**. 

- **Core Technology**: 100% Vanilla JavaScript (ES Modules), rendering PDFs using `pdfjs-dist`.
- **Canvas API Overlay**: Interactive elements (signatures and e-materai stamps) are managed using pure HTML5 2D Canvas APIs (written from scratch, avoiding heavy third-party canvas libraries like Fabric.js).
- **Framework Support**: Ships with wrapper adapters for **Vue 3** and **React** out of the box.
- **Key Design Philosophy**: Event-driven architecture, high performance (lazy rendering pages with `IntersectionObserver`), robust BEM-scoped styling (`psdk-`), and password-protected PDF support.

---

## 📂 Project Directory Structure

```text
pdf-viewer-test/
├── dist/                     # Production build artifacts (UMD and ES formats)
├── demo/                     # Local test/demo files
├── src/                      # Source code
│   ├── core/                 # Logika Inti / Core Engine
│   │   ├── document.js       # Wrapper around PDF.js (handles loading & page rendering)
│   │   ├── events.js         # Centralized pub/sub Event Bus (EventEmitter class)
│   │   ├── pagination.js     # Manages active page index, total page bounds, navigation locks
│   │   ├── signature.js      # Handles drawing, resizing, dragging interactive items on the overlay canvas
│   │   └── viewer.js         # The main facade & controller connecting Core with the UI layer
│   │
│   ├── ui/                   # Vanilla DOM User Interface components
│   │   ├── layout.js         # Generates the base HTML wrapper structural frames (.psdk-root)
│   │   ├── modal.js          # Interactive selection dialogs (Signatures list, E-Materai list, Password prompt)
│   │   ├── sidebar.js        # Thumbnails panel on the left (lazy loaded & interactive)
│   │   ├── topbar.js         # Toolbar containing zoom, navigation, action buttons, logo, and brand options
│   │   ├── renderer.js       # Minor DOM update helpers
│   │   └── styles.css        # Scoped CSS styling using .psdk-* BEM namespace
│   │
│   ├── adapters/             # Framework integration layer
│   │   ├── react.js          # React Component wrapper and custom hooks
│   │   └── vue.js            # Vue 3 Component wrapper
│   │
│   └── utils/                # Utility helpers
│       ├── config.js         # SDK config schema and deep merge functions
│       └── styleRef.js       # Mapping of class names and CSS variables for JS autocomplete
│
├── package.json              # Manifest of scripts, dependencies, build targets
├── vite.config.js            # Bundle config using Vite & css-injected-by-js plugin
├── index.js                  # Main library entrypoint re-exporting modules
├── ARSITEKTUR.md             # Detailed breakdown of architecture principles (Indonesian)
└── REPO_SKILLS.md            # [THIS FILE] AI Agent cheat sheet & context map
```

---

## ⚙️ Configuration Schema

When initializing the viewer using `createViewer(config)` or using the framework components, you can pass a configuration object.

### 1. Root SDK Configurations
| Key | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `container` | `string \| HTMLElement` | `null` | Parent DOM node or query selector |
| `file` | `string \| File \| Blob \| ArrayBuffer` | `null` | Path or raw binary of the PDF |
| `scale` | `number` | `1.5` | Zoom multiplier factor (0.25 to 4.0) |
| `theme` | `'light' \| 'dark'` | `'light'` | Theme styling modifier class |
| `disabled` | `boolean` | `false` | Disables all interactions on the overlay canvas |
| `signatureOptions` | `Array<object>` | `[]` | List of items for the signature modal: `[{ id, label, image, group? }]` |
| `estampOptions` | `Array<object>` | `[]` | List of items for e-materai: `[{ id, label, image, group? }]` |
| `groupByCategory` | `boolean` | `false` | Categorizes selection modals using `group` |
| `labels` | `object` | *See below* | Localizable text overrides for UI labels |
| `ui` | `object` | *See below* | Toggles and configuration for UI elements |

### 2. Labels Overrides (`labels`)
```json
{
  "uploadBtn": "Open PDF",
  "signatureBtn": "Add Signature",
  "estampBtn": "E-Materai",
  "clearBtn": "Clear All",
  "signatureModalTitle": "Select Signature Role",
  "estampModalTitle": "Select E-Materai"
}
```

### 3. UI Toggle Properties (`ui`)
- **`ui.topbar.upload`** (`boolean`): Show/hide upload button.
- **`ui.topbar.signature`** (`boolean`): Show/hide signature button.
- **`ui.topbar.eStamp`** (`boolean`): Show/hide electronic stamp button.
- **`ui.topbar.pagination`** (`boolean`): Show/hide pages buttons.
- **`ui.topbar.paginationInput`** (`boolean`): Show/hide numeric page jump input field.
- **`ui.topbar.zoom`** (`boolean`): Show/hide zoom controls.
- **`ui.topbar.themeToggle`** (`boolean`): Show/hide light/dark switch.
- **`ui.topbar.logo`** (`string | HTMLElement`): HTML structure or SVG logo overlay.
- **`ui.topbar.brandText`** (`string | boolean`): Custom company name text.
- **`ui.topbar.style`** (`object`): Direct inline CSS styles for topbar overrides.
- **`ui.topbar.customComponent`** (`string | HTMLElement`): Insert custom elements.
- **`ui.sidebar.thumbnails`** (`boolean`): Toggle the sidebar.
- **`ui.viewer.zoom`** (`boolean`): Enable scrolling zooming.

---

## 🛠️ Public API (`ViewerInstance`)

The function `createViewer(config)` returns a `ViewerInstance` containing the following control methods and properties:

```js
const viewer = createViewer({ container: '#pdf-container' });
```

### Document & Navigation Methods
* **`loadDocument(source)`**: Fetches/renders a new PDF document. Clears existing signatures and sidebar states. Returns `Promise<void>`.
* **`nextPage()`**: Navigates to the next page.
* **`prevPage()`**: Navigates to the previous page.
* **`goToPage(n)`**: Jumps directly to a specific 1-indexed page. Returns `boolean` (success status).
* **`currentPage`** (getter): Returns `number` (current page index).
* **`totalPages`** (getter): Returns `number` (total document pages).
* **`isPasswordProtected`** (getter): Returns `boolean`.
* **`setScale(scale)`**: Resets page render dimension. `scale` clamped between `0.25` and `4.0`.
* **`currentScale`** (getter): Returns the current scale factor `number`.
* **`fitToScreen()`**: Automatically sets scale to fit the current page in the viewport.

### Signature & E-Materai Controls
* **`openSignatureModal()`**: Displays selection modal for signature roles.
* **`openEStampModal()`**: Displays selection modal for e-materai.
* **`placeSignature(options)`**: Spawns signature programmatically. `options: { id?, x?, y?, page?, label?, image? }`.
* **`placeEStamp(options)`**: Spawns e-materai programmatically. `options: { id?, x?, y?, page?, image? }`.
* **`removeSignature(id)`**: Deletes an item by its unique ID.
* **`clearSignatures()`**: Clears all signatures and stamps from all pages.
* **`getSignatures()`**: Returns an `Array` containing all placed items across the document.
* **`getSignaturesByPage(page)`**: Returns items placed on the specific page.

### Configuration & State Lock
* **`updateConfig(partialConfig)`**: Merges partial config overrides dynamically (theme toggle, layout visibility, logo swap, disabled status) in-place.
* **`setPaginationLocked(locked)`**: Locks/unlocks page switching actions (useful when sign operations are in progress).
* **`isPaginationLocked`** (getter): Returns `boolean`.
* **`getCanvas(page)`**: Retrieves the raw HTML5 render `<canvas>` of a page (main canvas).
* **`getOverlayCanvas(page)`**: Retrieves the interactive overlay `<canvas>` of a page.
* **`showSkeleton(visible, options)`**: Shows/hides the full-view skeleton loading state overlay. `options: { opacity?, blur?, customHTML? }`.
* **`destroy()`**: Unbinds events, clears cache/timers, and destroys PDF documents/workers.

---

## 📡 Event Bus System

The core communicates internally and externally using an `EventEmitter` instance. Register listener callbacks via `viewer.on(event, payload)` and unregister using `viewer.off(event, payload)`.

| Event Name | Callback Payload | Description |
| :--- | :--- | :--- |
| `documentLoaded` | `{ totalPages }` | Emitted when PDF has been loaded, parsed, and total page count is ready. |
| `pageChanged` | `{ page, total, source }` | Emitted when page index changes (via pagination controls or viewport scrolling). |
| `signaturePlaced`| `{ id, x, y, page, type, label, width, height }` | Emitted when a signature is successfully added. |
| `eStampPlaced` | `{ id, x, y, page, type, label, width, height }` | Emitted when e-materai is added. |
| `signatureMoved` | `{ id, x, y, page, width, height }` | Emitted after drag or resize completion. |
| `signatureModeChanged` | `{ active }` | Toggled when canvas entering/exiting placement mode. |
| `coordinateCapture` | `{ x, y, page, canvasWidth, canvasHeight }` | Emitted when user clicks any raw point on overlay canvas. |

---

## 🎨 Styling & Theme Token Overrides

The UI styles are fully scoped within the CSS class `.psdk-root`. Styles are injected dynamically at runtime via Vite configuration.

### CSS Variables Customization
Place these values inside `.psdk-root` or root HTML elements to retheme the entire SDK seamlessly:

```css
.psdk-root {
  --psdk-accent:        #10b981;   /* Emerald accent theme */
  --psdk-bg-base:       #040711;   /* Background base */
  --psdk-bg-surface:    #0e1526;   /* Sidebar & Topbar panels */
  --psdk-bg-elevated:   #1d2433;   /* Custom button background */
  --psdk-text-primary:  #ffffff;   /* Pure white text */
}
```

### BEM CSS Class Names
For detailed overrides, the principal class components are:
* `.psdk-root` — The outer mounting shell
* `.psdk-light` — Light mode helper class
* `.psdk-topbar` — Navigation header toolbar
* `.psdk-sidebar` — Navigation thumbnail drawer
* `.psdk-viewer` — PDF viewport scroll container
* `.psdk-canvas-wrap` — Canvas container (Main Canvas + Overlay Canvas layer)
* `.psdk-modal` — Central action overlay container

---

## 🧱 Framework Integrations

### React Wrapper (`pdf-signature-sdk/react`)
Provides the `<PdfViewer>` component.
```jsx
import { PdfViewer } from 'pdf-signature-sdk/react';
import 'pdf-signature-sdk/dist/style.css'; // if stylesheets are not injected

function PdfSignatureApp() {
  return (
    <PdfViewer
      file="http://localhost/invoice.pdf"
      ui={{ sidebar: { thumbnails: true } }}
      onSignaturePlaced={(sig) => console.log('Placed signature:', sig)}
    />
  );
}
```

### Vue 3 Component (`pdf-signature-sdk/vue`)
```vue
<script setup>
import { PdfViewer } from 'pdf-signature-sdk/vue';
</script>

<template>
  <PdfViewer
    file="/contract.pdf"
    @signature-placed="(sig) => console.log(sig)"
  />
</template>
```

---

## 💡 Important Gotchas & Architectural Decisions for AI Agents

1. **Lazy Loading Mechanics**:
   The wrapper DOM nodes are instantiated instantly matching `totalPages` using default calculated aspect sizes. The actual heavy content rendering only launches when `IntersectionObserver` reports the page container is entering viewport boundaries.
2. **Coordinate System Consistency**:
   The coordinates emitted by events (`x`, `y`) are calculated relative to the *underlying canvas width and height* (`canvas.width` / `canvas.height`), NOT the layout style pixel dimension. This guarantees coordinate persistence across high-dpi screens, zoom adjustments (`scale`), or screen resizing actions.
3. **Double Canvas Overlay**:
   PDF rendering takes place inside the bottom `.psdk-main-canvas`. Drag/drop items operate entirely within `.psdk-overlay` canvas (rendered directly above the PDF canvas inside `.psdk-canvas-wrap`). Clicking the sidebar or topbar triggers page shifts, which are auto-debounced using `scrollDebounce` parameters to keep scrolling alignments synced.
4. **Style Auto-injection**:
   The `vite-plugin-css-injected-by-js` automatically injects the compiled styles into the client side header when `index.js` or `createViewer()` is called. No separate style import is strictly required unless loading specific build files.
5. **Drag-and-Drop Latency Optimization**:
   During active drag or resize operations, drawing-heavy properties like `shadowBlur` are dynamically bypassed to avoid DOM or Canvas pipeline stutter, ensuring smooth 60fps positioning feedback.
