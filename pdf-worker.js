/* ==========================================================
   HYPER COMPRESS - ES MODULE WEB WORKER (pdf-worker.js)
   Handles Granular Quality Slider and Target Size Execution
   ========================================================== */

import HyperCompressModule from './hyper-compress/engine/hyper-compress.js';
import { createEngine, HYPER_PRESETS, normalizeHyperOptions } from './hyper-compress/lib/wasm/sdk.js';

let engine = null;

async function getEngineInstance() {
  if (!engine) {
    engine = createEngine(() =>
      HyperCompressModule({
        locateFile: (path) => {
          if (path.endsWith('.wasm')) {
            return new URL('./hyper-compress/engine/hyper-compress.wasm', import.meta.url).href;
          }
          return path;
        }
      })
    );
    if (engine.init) {
      await engine.init();
    }
  }
  return engine;
}

/**
 * Builds continuous compression settings from a 5% to 95% quality value
 */
function buildPdfOptionsFromQuality(qualityPercent) {
  const q = Math.max(5, Math.min(95, qualityPercent || 80));

  let base = {};
  if (HYPER_PRESETS && typeof HYPER_PRESETS === 'object') {
    if (q <= 40) {
      base = HYPER_PRESETS.aggressive || Object.values(HYPER_PRESETS)[0] || {};
    } else if (q <= 75) {
      base = HYPER_PRESETS.balanced || Object.values(HYPER_PRESETS)[1] || {};
    } else {
      base = HYPER_PRESETS.conservative || Object.values(HYPER_PRESETS)[2] || {};
    }
  }

  // Smooth DPI interpolation: 72 DPI at 5%, 150 DPI at 50%, 300 DPI at 95%
  const dpi = Math.round(72 + ((q - 5) / 90) * (300 - 72));

  let options = {
    ...base,
    quality: q,
    jpegQuality: q,
    imageQuality: q,
    maxDpi: dpi,
    dpi: dpi
  };

  try {
    if (typeof normalizeHyperOptions === 'function') {
      options = normalizeHyperOptions(options);
    }
  } catch (err) {
    // If strict validator rejects dynamic keys, fall back cleanly to base preset
    options = base;
  }

  return options;
}

self.onmessage = async (e) => {
  const { action, sessionId, pdfBuffer, mode, quality, targetSizeBytes } = e.data;
  if (action !== 'compress') return;

  try {
    // Stage 1: Engine Initialization
    self.postMessage({
      type: 'progress',
      sessionId,
      stage: 'stageLoading',
      percent: 25
    });

    const hyperEngine = await getEngineInstance();
    const inputBytes = new Uint8Array(pdfBuffer);

    // Stage 2: Page & Stream Optimization
    self.postMessage({
      type: 'progress',
      sessionId,
      stage: 'stageCompressing',
      percent: 65
    });

    let compressPayload = {
      password: null
    };

    if (mode === 'target' && typeof targetSizeBytes === 'number' && targetSizeBytes > 0) {
      compressPayload.targetSizeBytes = targetSizeBytes;
      compressPayload.options = (HYPER_PRESETS && HYPER_PRESETS.balanced) || {};
    } else {
      compressPayload.options = buildPdfOptionsFromQuality(quality);
    }

    const result = await hyperEngine.compress(inputBytes, compressPayload);

    if (!result) {
      throw new Error('Engine returned null or undefined output.');
    }

    // Stage 3: Verification & Memory Packaging
    self.postMessage({
      type: 'progress',
      sessionId,
      stage: 'stageFinalizing',
      percent: 90
    });

    let rawBytes = null;
    if (result instanceof Uint8Array) {
      rawBytes = result;
    } else if (result.bytes instanceof Uint8Array) {
      rawBytes = result.bytes;
    } else if (result.output instanceof Uint8Array) {
      rawBytes = result.output;
    } else if (result.data instanceof Uint8Array) {
      rawBytes = result.data;
    } else if (result.buffer instanceof ArrayBuffer) {
      rawBytes = new Uint8Array(result.buffer);
    }

    if (!rawBytes || rawBytes.byteLength === 0) {
      throw new Error('Compression produced an empty file.');
    }

    const outputBuffer = rawBytes.buffer.slice(
      rawBytes.byteOffset,
      rawBytes.byteOffset + rawBytes.byteLength
    );

    self.postMessage(
      {
        type: 'done',
        sessionId,
        success: true,
        outputBuffer
      },
      [outputBuffer]
    );
  } catch (err) {
    const message = (err && err.message) || (err && err.toString()) || String(err);
    console.error('PDF Worker Error:', message);

    self.postMessage({
      type: 'done',
      sessionId,
      success: false,
      code: /password|encrypted/i.test(message) ? 'PASSWORD_PROTECTED' : 'EXECUTION_FAILED',
      error: message
    });
  }
};
