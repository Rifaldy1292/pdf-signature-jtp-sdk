# PDF Signature SDK AI Skill Reference

This skill file provides the exact specifications, API signatures, options, and methods of the `pdf-signature-jtp-sdk` library. When interacting with this library, use this reference to guide programmatic integration, configuration updates, and event handling. Do not define HTML buttons or trigger UI elements manually; interact with the SDK purely through properties, config parameters, methods, and callbacks on the instantiated viewer object.

---

## 1. Initializing the Viewer

To initialize the viewer, use `createViewer(config)`:

```javascript
import { createViewer } from 'pdf-signature-jtp-sdk';

const viewer = createViewer({
  container: '#viewer-container', // CSS selector or HTMLElement
  scale: 1.5,                      // Initial zoom level (0.25 - 4.0)
  theme: 'dark',                   // 'light' or 'dark'
  
  // Array of signature templates for the selection modal
  signatureOptions: [
    {
      id: "dir",
      label: "Direktur Utama",
      group: "Internal",
      image: "https://placehold.co/400x400/png?text=Signature+Director",
    },
    {
      id: "hrd",
      label: "Manager HRD",
      group: "Internal",
      image: "https://placehold.co/400x120/png?text=Signature+HRD",
    }
  ],
  
  // Array of stamp templates for the selection modal
  estampOptions: [
    {
      id: "ematerai",
      label: "E-Materai Resmi",
      group: "Dokumen Resmi",
      image: "https://placehold.co/200x400/png?text=E-Materai",
    }
  ],

  // Hook triggered when a file is uploaded
  onUpload: async (file, viewerInstance) => {
    // Perform custom validation or processing
    return true; // Return true to load file, false to reject
  },

  // Configuration for UI and features
  ui: {
    topbar: {
      upload: true,            // Toggle upload button
      signature: true,         // Toggle signature button
      eStamp: true,            // Toggle e-stamp button
      pagination: true,        // Toggle page navigation
      paginationInput: true,   // Toggle direct page input
      zoom: true,              // Toggle zoom controls
      themeToggle: true,       // Toggle dark/light theme switch
      customComponent: null,   // HTML string or HTMLElement inserted on right
      logo: null,              // SVG/HTML string or image URL
      brandText: "PDF SDK",    // Branding text
      style: null              // Inline CSS styles override for topbar container
    },
    sidebar: {
      thumbnails: true         // Toggle sidebar page list
    }
  },

  // Custom text for buttons/modals
  labels: {
    uploadBtn: "Open PDF",
    signatureBtn: "Add Signature",
    signatureModalTitle: "Select Signature Role",
    estampModalTitle: "Select E-Materai"
  }
});
```

---

## 2. Dynamic Configuration Updates

Use `viewer.updateConfig(partialConfig)` to update the config dynamically at runtime without reinstantiating:

```javascript
viewer.updateConfig({
  disabled: false,           // Lock/unlock entire viewer interactivity
  disableDragging: false,    // Lock/unlock dragging and resizing for all elements
  disableDrag: false,        // Lock/unlock dragging only
  disableResize: false,      // Lock/unlock resizing only
  groupByCategory: true,     // Group signature/stamp options by category
  ui: {
    topbar: { upload: false }
  },
  labels: {
    uploadBtn: "New Label"
  }
});
```

---

## 3. Instance Methods (Programmatic Actions)

Control the viewer programmatically through these instance methods:

- **`loadDocument(source)`**: Loads a new PDF. Resets pages/signatures. Returns a Promise.
  ```javascript
  viewer.loadDocument('path/to/doc.pdf');
  ```
- **`showSkeleton(visible, options)`**: Shows or hides the loading skeleton screen.
  ```javascript
  viewer.showSkeleton(true, {
    opacity: 0.9,  // Decimals from 0 to 1
    blur: '8px',   // CSS filter value, e.g., '4px', '8px', 'none'
    customHTML: `<div>Loading...</div>` // Custom spinner markup
  });
  ```
- **`nextPage()` / `prevPage()`**: Go to next/previous page.
  ```javascript
  viewer.nextPage();
  ```
- **`goToPage(pageIndex)`**: Go to specific page (1-based index).
  ```javascript
  viewer.goToPage(3); // returns true if successful, false if out of range
  ```
- **`setScale(scale)`**: Set specific zoom scale (0.25 to 4.0).
  ```javascript
  viewer.setScale(1.2);
  ```
- **`fitToScreen()`**: Fits the document to the container width/height. Returns the new scale.
- **`setPaginationLocked(isLocked)`**: Locks or unlocks page switching.
  ```javascript
  viewer.setPaginationLocked(true);
  ```
- **`enableSignatureMode()` / `disableSignatureMode()`**: Toggles manual signature insertion mode.
- **`openSignatureModal()` / `openEStampModal()`**: Opens selection modals programmatically.
- **`placeSignature(opts)` / `placeEStamp(opts)`**: Programmatically add signatures or stamps.
  ```javascript
  viewer.placeSignature({
    x: 100,             // Pixel coordinates
    y: 150, 
    page: 1,            // Page index (1-based)
    label: "CEO Approved",
    image: "url_to_sig_image",
    disableDrag: false,
    disableResize: false,
    locked: false       // Lock both dragging and resizing
  });
  ```
- **`clearSignatures()`**: Clears all signatures/stamps from all pages.
- **`getSignatures()`**: Returns all placed elements.
  ```javascript
  const list = viewer.getSignatures();
  // Returns: Array<{ id, type, x, y, page, label, width, height }>
  ```
- **`removeSignature(id)`**: Remove a specific signature/stamp by ID.
- **`destroy()`**: Destroys the viewer, cleans up DOM, events, and observers.

---

## 4. Event Subscriptions

Subscribe to events using the built-in event bus:

- **`documentLoaded`**: Fired when a document finishes loading.
  ```javascript
  viewer.on('documentLoaded', ({ totalPages }) => { ... });
  ```
- **`pageChanged`**: Fired when the active page changes.
  ```javascript
  viewer.on('pageChanged', ({ page, total }) => { ... });
  ```
- **`signaturePlaced` / `eStampPlaced`**: Fired when a signature/stamp is placed.
  ```javascript
  viewer.on('signaturePlaced', (sig) => { ... });
  ```
- **`signatureMoved`**: Fired when a signature/stamp is dragged or resized.
  ```javascript
  viewer.on('signatureMoved', (sig) => {
    console.log(`id: ${sig.id}, coordinates: x=${sig.x}, y=${sig.y}, size: w=${sig.width}, h=${sig.height}`);
  });
  ```
- **`coordinateCapture`**: Fired when click/tap coordinates are captured on the page.
  ```javascript
  viewer.on('coordinateCapture', ({ x, y, page }) => { ... });
  ```
- **`signatureModeChanged`**: Fired when signature mode is toggled.
  ```javascript
  viewer.on('signatureModeChanged', ({ active }) => { ... });
  ```
