# sdk-signing-web



## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://code.esign.id/esign-go-to-market/sdk-signing-web.git
git branch -M main
git push -uf origin main
```

## Integrate with your tools

- [ ] [Set up project integrations](https://code.esign.id/esign-go-to-market/sdk-signing-web/-/settings/integrations)

## Collaborate with your team

- [ ] [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
- [ ] [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
- [ ] [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
- [ ] [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
- [ ] [Automatically merge when pipeline succeeds](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html)

## Test and Deploy

Use the built-in continuous integration in GitLab.

- [ ] [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/index.html)
- [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing(SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
- [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
- [ ] [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
- [ ] [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

***

# Editing this README

When you're ready to make this README your own, just edit this file and use the handy template below (or feel free to structure it however you want - this is just a starting point!). Thank you to [makeareadme.com](https://www.makeareadme.com/) for this template.

## Suggestions for a good README
Every project is different, so consider which of these sections apply to yours. The sections used in the template are suggestions for most open source projects. Also keep in mind that while a README can be too long and detailed, too long is better than too short. If you think your README is too long, consider utilizing another form of documentation rather than cutting out information.

## Name
Choose a self-explaining name for your project.

## Description
Let people know what your project can do specifically. Provide context and add a link to any reference visitors might be unfamiliar with. A list of Features or a Background subsection can also be added here. If there are alternatives to your project, this is a good place to list differentiating factors.

## Badges
On some READMEs, you may see small images that convey metadata, such as whether or not all the tests are passing for the project. You can use Shields to add some to your README. Many services also have instructions for adding a badge.

## Visuals
Depending on what you are making, it can be a good idea to include screenshots or even a video (you'll frequently see GIFs rather than actual videos). Tools like ttygif can help, but check out Asciinema for a more sophisticated method.

## Installation
Within a particular ecosystem, there may be a common way of installing things, such as using Yarn, NuGet, or Homebrew. However, consider the possibility that whoever is reading your README is a novice and would like more guidance. Listing specific steps helps remove ambiguity and gets people to using your project as quickly as possible. If it only runs in a specific context like a particular programming language version or operating system or has dependencies that have to be installed manually, also add a Requirements subsection.

## Usage
Use examples liberally, and show the expected output if you can. It's helpful to have inline the smallest example of usage that you can demonstrate, while providing links to more sophisticated examples if they are too long to reasonably include in the README.

## Support
Tell people where they can go to for help. It can be any combination of an issue tracker, a chat room, an email address, etc.

## Roadmap
If you have ideas for releases in the future, it is a good idea to list them in the README.

## Contributing
State if you are open to contributions and what your requirements are for accepting them.

For people who want to make changes to your project, it's helpful to have some documentation on how to get started. Perhaps there is a script that they should run or some environment variables that they need to set. Make these steps explicit. These instructions could also be useful to your future self.

You can also document commands to lint the code or run tests. These steps help to ensure high code quality and reduce the likelihood that the changes inadvertently break something. Having instructions for running tests is especially helpful if it requires external setup, such as starting a Selenium server for testing in a browser.

## Authors and acknowledgment
Show your appreciation to those who have contributed to the project.

## License
For open source projects, say how it is licensed.

## Project status
If you have run out of energy or time for your project, put a note at the top of the README saying that development has slowed down or stopped completely. Someone may choose to fork your project or volunteer to step in as a maintainer or owner, allowing your project to keep going. You can also make an explicit request for maintainers.

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
