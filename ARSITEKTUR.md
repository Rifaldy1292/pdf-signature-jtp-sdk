# Arsitektur PDF Signature SDK

Dokumen ini menjelaskan struktur, pola desain, dan alur kerja utama dari `pdf-signature-sdk`. SDK ini dirancang untuk menjadi **framework-agnostic** (tidak bergantung pada framework tertentu), memiliki performa tinggi, dan mudah diintegrasikan baik menggunakan Vanilla JavaScript, React, maupun Vue.

## Prinsip Desain Utama

1. **Vanilla Core (Framework Agnostic)**: Logika inti (menampilkan PDF, mengelola tanda tangan, *event bus*) ditulis sepenuhnya menggunakan Vanilla JavaScript murni. Hal ini mencegah ketergantungan pada *framework* tertentu dan membuat SDK sangat ringan.
2. **Arsitektur Berbasis Event (Event-Driven)**: Komponen internal tidak memanggil satu sama lain secara langsung. Mereka berkomunikasi melalui **Event Bus** terpusat (`EventEmitter`), menciptakan *loose coupling* (keterikatan yang rendah) antar komponen.
3. **Pemisahan Canvas (Layering)**: Setiap halaman PDF memiliki dua lapisan *canvas*:
   - **Main Canvas**: Dikelola oleh `PDF.js` untuk menggambar isi/teks dokumen PDF statis.
   - **Overlay Canvas**: Diletakkan tepat di atas *main canvas*, dikelola menggunakan **Canvas API murni (Vanilla JS)** untuk mengontrol objek interaktif (tanda tangan & e-materai).
4. **Lazy Rendering**: Menggunakan `IntersectionObserver` untuk hanya me-render halaman PDF ketika halaman tersebut masuk ke dalam jangkauan layar (*viewport*). Ini sangat menghemat memori untuk dokumen dengan ratusan halaman.

---

## Struktur Direktori

Kode sumber dipecah menjadi beberapa modul dengan tanggung jawab tunggal (*single responsibility*):

```text
src/
├── core/             # Logika inti (State, Renderer, Event)
│   ├── document.js   # Wrapper untuk PDF.js (Load PDF & Render halaman)
│   ├── events.js     # Sistem Event Bus kustom (EventEmitter)(komunikasi antar komponent)
│   ├── pagination.js # Manajemen status halaman (Current, Total, Locked)
│   ├── signature.js  # Manajemen objek interaktif dengan Fabric.js
│   └── viewer.js     # Orkestrator utama (Facade) yang menghubungkan Core & UI
│
├── ui/               # Komponen antarmuka pengguna (Vanilla JS)
│   ├── layout.js     # Membangun struktur dasar DOM (kerangka aplikasi)
│   ├── modal.js      # Sistem Pop-up (Pemilihan tipe tanda tangan)
│   ├── renderer.js   # Memperbarui UI banner mode & status (Status bar)
│   ├── sidebar.js    # Panel kiri (Thumbnail dokumen)
│   ├── topbar.js     # Navigasi atas (Zoom, Paging, Tombol Aksi)
│   └── styles.css    # Gaya tampilan terisolasi (namespace .psdk-*)
│
├── adapters/         # Wrapper untuk framework modern
│   ├── react.js      # Komponen & Hooks untuk React
│   └── vue.js        # Komponen untuk Vue 3
│
└── utils/
    └── config.js     # Konfigurasi default & fungsi deep merge
```

---

## Penjelasan Komponen Inti

### 1. Viewer Orchestrator (`src/core/viewer.js`)
Berperan sebagai pengontrol utama (*Facade/Controller*). File ini menghubungkan sistem UI dengan logika inti (`document`, `pagination`, `signature`) menggunakan *event bus*.
- **Tugas Utama:**
  - Membuat instance dari modul-modul *Core*.
  - Menjalankan `IntersectionObserver` untuk melacak halaman mana yang sedang terlihat (*visible*).
  - Menyediakan *Public API* (`api`) yang diekspos ke *developer* (seperti `loadDocument`, `goToPage`, `placeSignature`).
  - Mengelola *scroll debouncing* untuk mencegah bentrok antara animasi *scroll* manual dengan sistem deteksi otomatis halaman.

### 2. Document Manager (`src/core/document.js`)
Modul ini adalah *wrapper* untuk pustaka pihak ketiga `pdfjs-dist`.
- **Tugas Utama:**
  - Mengunduh dan mem-parsing *file* PDF (baik dari URL, Blob, File, atau ArrayBuffer).
  - Mengubah halaman dokumen PDF menjadi *canvas* menggunakan fungsi *render* bawaan PDF.js.

### 3. Signature Manager (`src/core/signature.js`)
Modul yang menangani segala hal terkait objek manipulasi. Modul ini ditulis menggunakan **Vanilla JS (Canvas API murni)** tanpa pustaka pihak ketiga tambahan.
- **Tugas Utama:**
  - Mengelola `Overlay Canvas` dan *event listener* (*pointer events*) pada setiap halaman.
  - Mengelola penempatan tanda tangan baru, *e-materai*, pengubahan ukuran (*scaling*), serta pergerakan (*drag-and-drop*).
  - Memancarkan *event* spesifik seperti `signaturePlaced` atau `signatureMoved` beserta titik koordinatnya (`x`, `y`).

### 4. Pagination Manager (`src/core/pagination.js`)
- **Tugas Utama:**
  - Menyimpan *state* nomor halaman aktif dan total halaman.
  - Memancarkan `pageChanged` ke *Event Bus* setiap kali *user* berganti halaman.
  - Mengelola status penguncian (`locked`) untuk mencegah perpindahan halaman saat diaktifkan.

### 5. Modal Pemilihan (`src/ui/modal.js`)
- **Tugas Utama:**
  - Membuka modal dialog interaktif untuk memilih peran tanda tangan (*Signature*) atau jenis *E-Materai*.
  - **Tampilan Luas & Kotak**: Modal diperbesar dengan lebar maksimal 550px dan menyusun pilihan dalam bentuk grid kartu kotak (`aspect-ratio: 1/1`) dengan gambar/icon besar untuk visibilitas optimal.
  - **Pengelompokan (Grouping)**: Mengelompokkan pilihan secara visual ke dalam beberapa kategori jika properti `groupByCategory` diatur bernilai `true` pada konfigurasi (dikelompokkan berdasarkan field `group` pada tiap item opsi).

---

## Alur Kerja (Workflow)

### 1. Inisialisasi & Render Dokumen
1. Developer memanggil `createViewer(config)` di aplikasi mereka.
2. `viewer.js` membangun kerangka DOM (UI) dan menempelkannya ke wadah (*container*).
3. Ketika PDF dimuat, `DocumentManager` mem-parsing data dan menghitung jumlah total halaman.
4. `viewer.js` secara dinamis membuat *wrapper* `<div>` sejumlah halaman PDF dengan ukuran minimum (*fallback*) yang diatur oleh JS.
5. Saat pengguna menggulir (*scroll*), `IntersectionObserver` memicu render pada *wrapper* yang masuk ke layar. `DocumentManager` menggambar *Main Canvas*, sementara `SignatureManager` bersiap pada *Overlay Canvas*.
6. Ukuran *wrapper* langsung disesuaikan 100% dengan ukuran render asli PDF (untuk mencegah sisa ruang kosong).

### 2. Navigasi Halaman
1. *User* mengklik tombol `Next` atau mengetik angka halaman.
2. `Topbar` memanggil metode `api.goToPage(n)`.
3. `viewer.js` memanggil `pagination.goToPage(n)`.
4. Jika valid, `PaginationManager` memancarkan *event* `pageChanged`.
5. `viewer.js` menangkap `pageChanged`:
   - Menonaktifkan sementara `IntersectionObserver` (*scroll lock*).
   - Melakukan `scrollIntoView` ke halaman tujuan dengan efek *smooth*.
   - Saat animasi berhenti, *scroll lock* dibuka kembali.
6. Komponen `Topbar` & `Sidebar` (yang juga mendengar *event* ini) memperbarui tampilan indikator halaman aktifnya.

### 3. Penempatan Tanda Tangan
1. *User* mengklik tombol "Add Signature", membuka `Modal`.
2. *User* memilih tanda tangan. Modal memanggil `api.placeSignature()`.
3. `Viewer` meneruskan instruksi ke `SignatureManager`.
4. `SignatureManager` menggambar objek tanda tangan berformat gambar/bawaan menggunakan Canvas 2D API di *Overlay Canvas* halaman yang saat ini sedang aktif (*currentPage*).
5. Memancarkan *event* `signaturePlaced`. Data koordinat dapat dibaca oleh *developer* melalui *event listener*.

---

## Keamanan Tampilan & Kustomisasi (CSS Scoping)
Untuk memastikan SDK tidak merusak CSS milik *website* pengguna, seluruh aturan CSS dibungkus ke dalam awalan `.psdk-` (contoh: `.psdk-btn`, `.psdk-root`, `.psdk-sidebar`). Variabel *theme* (`--psdk-accent`, `--psdk-bg-base`, dll) memungkinkan kustomisasi mudah tanpa benturan (*conflict*).

Selain variabel CSS, SDK ini juga menyediakan kustomisasi brand dan topbar secara deklaratif lewat properti konfigurasi seperti `ui.topbar.logo`, `ui.topbar.brandText`, dan `ui.topbar.style` yang dapat diperbarui secara dinamis via `updateConfig()`.
