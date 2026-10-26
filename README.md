<div align="center">

# Pixel Bloom

**Pure client-side image and PDF compression engine.**  
Zero server uploads. Zero telemetry. Runs entirely in browser memory via WebAssembly.

[**Launch Application →**](https://justkshitiz.github.io/Pixel_Bloom/)

---

</div>

## Architecture & Guarantees

Pixel Bloom processes every byte locally. Your files never touch a remote backend, API proxy, or cloud storage bucket.

```text
[Input File] 
     │
     ├── Image (.jpg, .png, .webp) ──► HTML5 Canvas Pipeline ──► Output Blob
     │
     └── Document (.pdf) ────────────► Web Worker Thread 
                                            │
                                            ▼
                                  Hyper Compress Engine
                              (PDFium + QPDF + Jpegli WASM)
                                            │
                                            ▼
                                  [Zero-Copy ArrayBuffer] ──► Output Blob
