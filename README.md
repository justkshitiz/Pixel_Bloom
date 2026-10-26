<div align="center">

<h1>Pixel Bloom</h1>

<p><strong>Compress images and PDFs in your browser.</strong></p>

<p>Pick a quality level or a target file size. Files are processed on your device<br>with the Canvas API and a WebAssembly engine running in a Web Worker.</p>

<p>
  <a href="https://justkshitiz.github.io/Pixel_Bloom/"><strong>Open the app</strong></a>
  &nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="#getting-started">Run locally</a>
  &nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="#architecture">Architecture</a>
</p>

</div>

---

## Overview

Pixel Bloom is a static web app for reducing the size of JPEG, PNG and WebP images and PDF documents. There is no backend and no build step: the interface is plain HTML, CSS and JavaScript, and the PDF engine ships as WebAssembly in the repository.

It is aimed at anyone who needs a file under a size limit, such as a form upload cap, and would rather not send the file to a third-party service to get there.

## Features

| Area | What it does |
| :--- | :--- |
| Image input | JPEG, PNG and WebP |
| Image output | WebP (default), JPEG or PNG, chosen per file |
| PDF input | Standard, unencrypted PDF documents |
| Quality mode | Slider from 5% to 95%, default 80% |
| Target-size mode | Presets of 50, 100, 200 and 500 KB, or a custom value in KB or MB |
| Live feedback | Original size, result size and percentage saved; sizes shown while dragging the slider are labelled as estimates |
| Image preview | Switch between the original and the compressed result |
| PDF progress | Staged progress bar: engine load, stream optimization, output verification |
| Languages | English, Hindi and Hinglish |
| Themes | System, dark and light |

A few behaviors worth knowing:

- Image target-size mode runs a bounded search (at most six encodes) and keeps the largest result that fits the target. If none fits, it keeps the smallest and reports the closest achievable size.
- PNG is lossless in the browser's canvas encoder, so the quality setting has no effect on PNG output. Use WebP or JPEG when you need quality control.
- If the PDF engine cannot make a file smaller, the original bytes are kept and the result is shown as 0% saved.
- Downloads are named `<original-name>-min.<ext>`.

## Architecture

Images and PDFs take separate paths. Images are re-encoded on the main thread through a canvas. PDFs are sent to a module Web Worker that loads the WebAssembly engine from `hyper-compress/`.

```text
 Input file
     |
     +-- JPEG / PNG / WebP
     |     Canvas re-encode (main.js)
     |     --> Blob
     |
     +-- PDF
           Web Worker (pdf-worker.js)
           WebAssembly engine
             (hyper-compress/)
           --> ArrayBuffer --> Blob
```

For PDFs, the quality slider selects an engine preset (up to 40% aggressive, up to 75% balanced, above that conservative) and scales the target DPI from 72 at 5% to 300 at 95%. Target-size mode passes the byte limit to the engine together with the balanced preset.

## Technology

| Layer | Choice |
| :--- | :--- |
| Interface | Vanilla HTML, CSS and JavaScript, no framework or bundler |
| Image pipeline | Canvas API and `canvas.toBlob` |
| PDF pipeline | WebAssembly engine in `hyper-compress/`, run in an ES module Web Worker |
| Preferences | `localStorage` keys for language and theme only |
| Unit tests | Node.js built-in test runner |
| End-to-end tests | Playwright |
| Hosting | GitHub Pages |

## Getting started

The app must be served over HTTP. Opening `index.html` directly from disk will not work, because the PDF worker is an ES module that loads a `.wasm` file.

```bash
git clone https://github.com/justkshitiz/Pixel_Bloom.git
cd Pixel_Bloom
python3 -m http.server 8080
```

Then open `http://localhost:8080`. Any static file server works in place of the Python one.

Limits enforced by the app:

| Rule | Behavior |
| :--- | :--- |
| Maximum file size | 25 MB |
| Empty files | Rejected |
| File type | Checked by MIME type or extension for the selected mode |
| PDF header | The file must begin with the `%PDF-` signature |
| Encrypted PDFs | Not supported; a specific error is shown |
| Engine failure | A separate error is shown if the PDF engine cannot start |

## Testing

The scripts below are defined in `package.json`.

```bash
npm install
npx playwright install
npm run test:unit
npm run test:e2e
npm test
```

| Script | Command it runs |
| :--- | :--- |
| `npm run test:unit` | `node --test tests/unit/*.test.js` |
| `npm run test:e2e` | `playwright test` |
| `npm test` | Unit tests, then end-to-end tests |

## Privacy

Pixel Bloom has no upload endpoint. The application code makes no network requests of its own: images are read with `FileReader` and re-encoded in a canvas, and PDFs are read into memory and passed to a Web Worker. The WebAssembly engine is loaded from the same origin as the page.

The only data the app stores is your language and theme choice, kept in your browser's `localStorage`. Temporary object URLs created for previews and downloads are revoked when you reset the tool.

This describes the application code in this repository. It does not cover what your browser, extensions or the hosting provider may log when you load the page.

## License and attributions

No license file is currently present in the repository root, so no open-source license is granted for the Pixel Bloom code at this time.

The WebAssembly engine in `hyper-compress/` is third-party software and remains subject to its own license terms. Refer to the files in that directory.

---

<div align="center">

<sub>Pixel Bloom &nbsp;·&nbsp; <a href="https://justkshitiz.github.io/Pixel_Bloom/">Live app</a> &nbsp;·&nbsp; <a href="https://github.com/justkshitiz/Pixel_Bloom">Source</a> &nbsp;·&nbsp; <a href="https://github.com/justkshitiz/Pixel_Bloom/issues">Issues</a></sub>

</div>
