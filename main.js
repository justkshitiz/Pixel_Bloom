/* ==========================================================
   1. DICTIONARY & LOCALIZATION ENGINE (EN, HI, HINGLISH)
   100% Key-Symmetric for Node Test Runner Quality Gate
   ========================================================== */
const i18n = {
  en: {
    stepBadge: "Step 01 • Utility",
    toolHeading: "Fast Compression",
    toolDesc: "Lightweight, privacy-friendly compression. Runs locally on your device with no server uploads.",
    modeImage: "Image",
    modePdf: "PDF",
    dropTitleImage: "Drop your image here, or browse",
    dropSubImage: "Supports JPG, PNG, and WebP (Max 25MB)",
    dropTitlePdf: "Drop your PDF here, or browse",
    dropSubPdf: "Standard PDF documents supported (Max 25MB)",
    browseBtn: "Select File",
    previewTag: "Preview",
    viewResult: "Result",
    viewOriginal: "Original",
    tabQuality: "Quality %",
    tabTarget: "Target Size",
    qualityLabel: "Compression Level",
    targetLabel: "Select Target Limit",
    formatLabel: "Output Format",
    pdfPresetLow: "Low (90%)",
    pdfPresetBalanced: "Balanced (75%)",
    pdfPresetHigh: "High (40%)",
    origSizeLabel: "Original",
    newSizeLabel: "Result",
    resetBtn: "Reset",
    downloadBtn: "Download File",
    applyBtn: "Set",
    statusEst: "Estimated",
    statusAct: "Actual",
    targetMet: "Target reached",
    targetClosest: "Closest achievable limit",
    pdfOptimized: "PDF compressed successfully",
    pdfNoReduction: "PDF already minimal (0% saved, original preserved)",
    pdfReady: "PDF Document Loaded",
    stagePreparing: "Preparing document...",
    stageLoading: "Loading WebAssembly engine...",
    stageCompressing: "Optimizing streams and pages...",
    stageFinalizing: "Verifying output structure...",
    stageCompleted: "Compression completed",
    errSizeLimit: "File exceeds 25MB limit. Please choose a smaller file.",
    errFileType: "Unsupported file type. Please upload a valid file.",
    errProcessing: "Processing failed. Please check the file and try again.",
    errPdfEngine: "PDF engine could not initialize. Check WebAssembly files.",
    errPdfPassword: "Encrypted or password-protected PDFs are not supported."
  },
  hi: {
    stepBadge: "स्टेप 01 • टूल",
    toolHeading: "फ़ास्ट कंप्रेशन",
    toolDesc: "तेज़ और सुरक्षित कंप्रेशन। बिना सर्वर पर अपलोड किए, पूरी तरह आपके डिवाइस में चलता है।",
    modeImage: "इमेज",
    modePdf: "पीडीएफ",
    dropTitleImage: "अपनी इमेज यहाँ ड्रॉप करें, या चुनें",
    dropSubImage: "JPG, PNG और WebP सपोर्ट (अधिकतम 25MB)",
    dropTitlePdf: "अपनी PDF फाइल यहाँ ड्रॉप करें, या चुनें",
    dropSubPdf: "स्टैंडर्ड PDF डाक्यूमेंट्स समर्थित (अधिकतम 25MB)",
    browseBtn: "फ़ाइल चुनें",
    previewTag: "प्रिव्यू",
    viewResult: "नतीजा",
    viewOriginal: "मूल",
    tabQuality: "क्वालिटी %",
    tabTarget: "टारगेट साइज़",
    qualityLabel: "कंप्रेशन स्तर",
    targetLabel: "टारगेट साइज़ चुनें",
    formatLabel: "आउटपुट फ़ॉर्मेट",
    pdfPresetLow: "कम (90%)",
    pdfPresetBalanced: "संतुलित (75%)",
    pdfPresetHigh: "अधिक (40%)",
    origSizeLabel: "मूल साइज़",
    newSizeLabel: "नया साइज़",
    resetBtn: "रीसेट",
    downloadBtn: "डाउनलोड करें",
    applyBtn: "लागू करें",
    statusEst: "अनुमानित",
    statusAct: "वास्तविक",
    targetMet: "टारगेट पूरा हुआ",
    targetClosest: "निकटतम प्राप्त साइज़",
    pdfOptimized: "PDF सफलतापूर्वक कंप्रेस हुआ",
    pdfNoReduction: "PDF पहले से अनुकूलित है (0% बचत, मूल सुरक्षित)",
    pdfReady: "PDF डाक्यूमेंट लोड हुआ",
    stagePreparing: "डाक्यूमेंट तैयार हो रहा है...",
    stageLoading: "WebAssembly इंजन लोड हो रहा है...",
    stageCompressing: "स्ट्रीम और पेज ऑप्टिमाइज़ हो रहे हैं...",
    stageFinalizing: "आउटपुट सत्यापित हो रहा है...",
    stageCompleted: "कंप्रेशन पूरा हुआ",
    errSizeLimit: "फ़ाइल 25MB से बड़ी है। कृपया छोटी फ़ाइल चुनें।",
    errFileType: "अमान्य फ़ाइल प्रकार। कृपया सही फ़ाइल चुनें।",
    errProcessing: "प्रोसेसिंग विफल हुई। कृपया पुनः प्रयास करें।",
    errPdfEngine: "PDF इंजन शुरू नहीं हो सका। WebAssembly फ़ाइलें जांचें।",
    errPdfPassword: "पासवर्ड सुरक्षित PDF समर्थित नहीं है।"
  },
  hinglish: {
    stepBadge: "Step 01 • Utility",
    toolHeading: "Fast Compression",
    toolDesc: "Super smooth compression. Sab kuch aapke device me bina kisi server upload ke direct chalega.",
    modeImage: "Image",
    modePdf: "PDF",
    dropTitleImage: "Apni image yahan drop karein, ya browse karein",
    dropSubImage: "JPG, PNG aur WebP supported (Max 25MB)",
    dropTitlePdf: "Apni PDF yahan drop karein, ya browse karein",
    dropSubPdf: "Standard PDF format supported (Max 25MB)",
    browseBtn: "File Choose Karein",
    previewTag: "Preview",
    viewResult: "Result",
    viewOriginal: "Original",
    tabQuality: "Quality %",
    tabTarget: "Target Size",
    qualityLabel: "Compression Level",
    targetLabel: "Target Size Chunein",
    formatLabel: "Output Format",
    pdfPresetLow: "Low (90%)",
    pdfPresetBalanced: "Balanced (75%)",
    pdfPresetHigh: "High (40%)",
    origSizeLabel: "Original",
    newSizeLabel: "Result",
    resetBtn: "Reset",
    downloadBtn: "Download Karein",
    applyBtn: "Set",
    statusEst: "Estimated",
    statusAct: "Actual",
    targetMet: "Target achieve hua",
    targetClosest: "Closest possible size",
    pdfOptimized: "PDF successfully compress ho gaya",
    pdfNoReduction: "PDF already minimal hai (0% saved, original file safe)",
    pdfReady: "PDF Document Loaded",
    stagePreparing: "Document prepare ho raha hai...",
    stageLoading: "WebAssembly engine load ho raha hai...",
    stageCompressing: "Streams aur pages optimize ho rahe hain...",
    stageFinalizing: "Output verify ho raha hai...",
    stageCompleted: "Compression complete ho gaya",
    errSizeLimit: "File 25MB se zyada badi hai. Chhoti file use karein.",
    errFileType: "File type support nahi hai. Valid file upload karein.",
    errProcessing: "Process fail hua. Please dusri file try karein.",
    errPdfEngine: "PDF engine start nahi ho saka. WASM assets check karein.",
    errPdfPassword: "Password-protected PDF support nahi hai."
  }
};

const MAX_FILE_SIZE = 25 * 1024 * 1024; // 25 MB

let currentLang = localStorage.getItem("mono_lang") || "en";
let currentMode = "image";
let currentTab = "slider";
let targetSizeKB = 100;
let currentPreviewMode = "result";

function applyLanguage(lang) {
  if (!i18n[lang]) return;
  currentLang = lang;
  localStorage.setItem("mono_lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (i18n[lang][key]) {
      el.textContent = i18n[lang][key];
    }
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const isActive = btn.getAttribute("data-lang") === lang;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  updateDropzoneCopy();
}

function updateDropzoneCopy() {
  const titleKey = currentMode === "image" ? "dropTitleImage" : "dropTitlePdf";
  const subKey = currentMode === "image" ? "dropSubImage" : "dropSubPdf";
  document.getElementById("dropTitle").textContent = i18n[currentLang][titleKey];
  document.getElementById("dropSub").textContent = i18n[currentLang][subKey];
}

/* ==========================================================
   2. SYSTEM-AWARE THEME ENGINE
   ========================================================== */
const themeToggleBtn = document.getElementById("themeToggleBtn");
const themeIcon = document.getElementById("themeIcon");
const themeLabel = document.getElementById("themeLabel");

const themeCycle = ["system", "dark", "light"];
let currentThemeMode = localStorage.getItem("mono_theme") || "system";

const themeIcons = {
  system: '<rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />',
  dark: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />',
  light: '<circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />'
};

function applyTheme(mode) {
  currentThemeMode = mode;
  localStorage.setItem("mono_theme", mode);

  let activeTheme = mode;
  if (mode === "system") {
    activeTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  document.documentElement.setAttribute("data-theme", activeTheme);
  themeIcon.innerHTML = themeIcons[mode];
  const capitalized = mode.charAt(0).toUpperCase() + mode.slice(1);
  themeLabel.textContent = capitalized;
  themeToggleBtn.setAttribute("aria-label", `Toggle Theme: ${capitalized}`);
}

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
  if (currentThemeMode === "system") applyTheme("system");
});

themeToggleBtn.addEventListener("click", () => {
  const nextIndex = (themeCycle.indexOf(currentThemeMode) + 1) % themeCycle.length;
  applyTheme(themeCycle[nextIndex]);
});

/* ==========================================================
   3. MEMORY LIFECYCLE & ERROR MANAGEMENT
   ========================================================== */
const errorBanner = document.getElementById("errorBanner");
const errorMessage = document.getElementById("errorMessage");
const closeErrorBtn = document.getElementById("closeErrorBtn");

function showError(msgKey) {
  errorMessage.textContent = i18n[currentLang][msgKey] || msgKey;
  errorBanner.classList.remove("hidden");
}

function clearError() {
  errorBanner.classList.add("hidden");
  errorMessage.textContent = "";
}

closeErrorBtn.addEventListener("click", clearError);

const managedBlobUrls = new Set();

function createTrackedUrl(blob) {
  const url = URL.createObjectURL(blob);
  managedBlobUrls.add(url);
  return url;
}

function revokeAllTrackedUrls() {
  managedBlobUrls.forEach((url) => URL.revokeObjectURL(url));
  managedBlobUrls.clear();
}

/* ==========================================================
   4. UI CONTROLS & WORKBENCH ENGINE
   ========================================================== */
const modeTabs = document.querySelectorAll(".mode-tab");
const dropzone = document.getElementById("dropzone");
const fileInput = document.getElementById("fileInput");
const browseBtn = document.getElementById("browseBtn");
const workbench = document.getElementById("workbench");

const previewImage = document.getElementById("previewImage");
const pdfDocPreview = document.getElementById("pdfDocPreview");
const fileNameDisplay = document.getElementById("fileNameDisplay");
const previewToggleWrap = document.getElementById("previewToggleWrap");
const toggleResultBtn = document.getElementById("toggleResultBtn");
const toggleOrigBtn = document.getElementById("toggleOrigBtn");

const subTabs = document.querySelectorAll(".sub-tab");
const sliderModeSection = document.getElementById("sliderModeSection");
const targetModeSection = document.getElementById("targetModeSection");
const presetBtns = document.querySelectorAll(".preset-btn:not(.pdf-preset-btn)");
const pdfPresetBtns = document.querySelectorAll(".pdf-preset-btn");
const pdfQuickPresets = document.getElementById("pdfQuickPresets");
const customTargetInput = document.getElementById("customTargetInput");
const customTargetUnit = document.getElementById("customTargetUnit");
const applyCustomTargetBtn = document.getElementById("applyCustomTargetBtn");
const targetStatusText = document.getElementById("targetStatusText");

const progressContainer = document.getElementById("progressContainer");
const progressBarTrack = document.getElementById("progressBarTrack");
const progressBarFill = document.getElementById("progressBarFill");
const progressStatusText = document.getElementById("progressStatusText");
const progressPercentText = document.getElementById("progressPercentText");

const formatGroup = document.getElementById("formatGroup");
const formatChips = document.querySelectorAll(".chip");

const qualityRange = document.getElementById("qualityRange");
const qualityVal = document.getElementById("qualityVal");

const origSizeVal = document.getElementById("origSizeVal");
const newSizeVal = document.getElementById("newSizeVal");
const calcStatusBadge = document.getElementById("calcStatusBadge");
const reductionBadge = document.getElementById("reductionBadge");

const resetBtn = document.getElementById("resetBtn");
const downloadBtn = document.getElementById("downloadBtn");

let activeImage = null;
let originalDataUrl = "";
let compressedDataUrl = "";
let activePdfBytes = null;
let originalFileSize = 0;
let originalFileName = "";
let selectedFormat = "image/webp";
let compressedBlob = null;
let isProcessing = false;
let currentSessionId = 0;

let pdfWorker = null;

function getPdfWorker() {
  if (!pdfWorker) {
    pdfWorker = new Worker("pdf-worker.js", { type: "module" });
    pdfWorker.onmessage = handlePdfWorkerMessage;
    pdfWorker.onerror = handlePdfWorkerError;
  }
  return pdfWorker;
}

function terminatePdfWorker() {
  if (pdfWorker) {
    pdfWorker.terminate();
    pdfWorker = null;
  }
}

function showProgressBar(percent, text) {
  if (!progressContainer) return;
  progressContainer.classList.remove("hidden");
  progressBarFill.style.width = `${percent}%`;
  progressBarTrack.setAttribute("aria-valuenow", String(percent));
  progressStatusText.textContent = text;
  progressPercentText.textContent = `${percent}%`;
}

function hideProgressBar() {
  if (!progressContainer) return;
  progressContainer.classList.add("hidden");
  progressBarFill.style.width = "0%";
  progressBarTrack.setAttribute("aria-valuenow", "0");
}

function setControlsDisabled(disabled) {
  pdfPresetBtns.forEach((btn) => (btn.disabled = disabled));
  presetBtns.forEach((btn) => (btn.disabled = disabled));
  formatChips.forEach((chip) => (chip.disabled = disabled));
  subTabs.forEach((tab) => (tab.disabled = disabled));
  modeTabs.forEach((tab) => (tab.disabled = disabled));
  qualityRange.disabled = disabled;
  customTargetInput.disabled = disabled;
  applyCustomTargetBtn.disabled = disabled;
  browseBtn.disabled = disabled;
}

function formatBytes(bytes) {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
}

function triggerMetricSettling() {
  newSizeVal.classList.remove("metric-settle");
  reductionBadge.classList.remove("metric-settle");
  void newSizeVal.offsetWidth;
  void reductionBadge.offsetWidth;
  newSizeVal.classList.add("metric-settle");
  reductionBadge.classList.add("metric-settle");
}

function updateMetricsUI(newSize, isEstimated = false) {
  newSizeVal.textContent = (isEstimated ? "~" : "") + formatBytes(newSize);

  calcStatusBadge.textContent = isEstimated
    ? i18n[currentLang].statusEst
    : i18n[currentLang].statusAct;
  calcStatusBadge.classList.toggle("estimated", isEstimated);

  if (originalFileSize === 0) {
    reductionBadge.textContent = "0%";
    reductionBadge.classList.remove("larger");
    reductionBadge.style.opacity = "0.7";
    downloadBtn.disabled = true;
    downloadBtn.classList.remove("ready-aura");
    return;
  }

  const diff = originalFileSize - newSize;
  const percentage = Math.round((Math.abs(diff) / originalFileSize) * 100);

  if (newSize < originalFileSize) {
    reductionBadge.textContent = `-${percentage}%`;
    reductionBadge.classList.remove("larger");
    reductionBadge.style.opacity = "1";
  } else if (newSize > originalFileSize) {
    reductionBadge.textContent = `+${percentage}%`;
    reductionBadge.classList.add("larger");
    reductionBadge.style.opacity = "1";
  } else {
    reductionBadge.textContent = "0%";
    reductionBadge.classList.remove("larger");
    reductionBadge.style.opacity = "0.7";
  }

  if (!isEstimated && compressedBlob && !isProcessing) {
    triggerMetricSettling();
    downloadBtn.disabled = false;
    downloadBtn.classList.add("ready-aura");
  } else {
    downloadBtn.disabled = isEstimated || !compressedBlob || isProcessing;
    if (downloadBtn.disabled) {
      downloadBtn.classList.remove("ready-aura");
    }
  }
}

/* ==========================================================
   5. REAL-TIME ESTIMATORS & IMAGE PIPELINE
   ========================================================== */
function renderImageToCanvas(quality, format, callback) {
  if (!activeImage) return;

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = activeImage.naturalWidth;
  canvas.height = activeImage.naturalHeight;

  if (format === "image/jpeg") {
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  } else {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  ctx.drawImage(activeImage, 0, 0);
  canvas.toBlob((blob) => {
    callback(blob);
  }, format, quality);
}

function estimateSizeInRealTime(qualityPercent) {
  if (originalFileSize === 0) return;

  const q = qualityPercent / 100;

  if (currentMode === "image") {
    let ratio = 1;
    if (selectedFormat === "image/webp") {
      ratio = 0.12 + 0.78 * Math.pow(q, 1.4);
    } else if (selectedFormat === "image/jpeg") {
      ratio = 0.18 + 0.82 * Math.pow(q, 1.5);
    } else if (selectedFormat === "image/png") {
      ratio = Math.max(0.65, 0.95 - (1 - q) * 0.2);
    }
    const estimatedBytes = Math.max(1024, Math.round(originalFileSize * ratio));
    updateMetricsUI(estimatedBytes, true);
  } else if (currentMode === "pdf") {
    const ratio = 0.25 + 0.70 * Math.pow(q, 1.35);
    const estimatedBytes = Math.max(1024, Math.round(originalFileSize * Math.min(1, ratio)));
    updateMetricsUI(estimatedBytes, true);
  }
}

function compressImage(quality) {
  const sessionId = currentSessionId;
  isProcessing = true;
  downloadBtn.disabled = true;
  downloadBtn.classList.remove("ready-aura");

  renderImageToCanvas(quality, selectedFormat, (blob) => {
    if (sessionId !== currentSessionId) return;
    isProcessing = false;

    if (!blob) {
      showError("errProcessing");
      return;
    }

    compressedBlob = blob;
    revokeAllTrackedUrls();
    compressedDataUrl = createTrackedUrl(blob);

    if (currentPreviewMode === "result") {
      previewImage.src = compressedDataUrl;
    }
    updateMetricsUI(blob.size, false);
  });
}

function runImageTargetSizeCompression(targetKB) {
  if (!activeImage) return;

  const sessionId = currentSessionId;
  const targetBytes = targetKB * 1024;
  isProcessing = true;
  downloadBtn.disabled = true;
  downloadBtn.classList.remove("ready-aura");

  let minQ = 0.05;
  let maxQ = 0.95;
  let iterations = 0;
  const maxIterations = 6;

  let bestBlobUnderTarget = null;
  let smallestBlobOverall = null;

  function evaluateQuality() {
    if (sessionId !== currentSessionId) return;
    iterations++;
    const currentQ = (minQ + maxQ) / 2;

    renderImageToCanvas(currentQ, selectedFormat, (blob) => {
      if (sessionId !== currentSessionId) return;
      if (!blob) {
        isProcessing = false;
        showError("errProcessing");
        return;
      }

      if (!smallestBlobOverall || blob.size < smallestBlobOverall.size) {
        smallestBlobOverall = blob;
      }

      if (blob.size <= targetBytes) {
        if (!bestBlobUnderTarget || blob.size > bestBlobUnderTarget.size) {
          bestBlobUnderTarget = blob;
        }
        minQ = currentQ;
      } else {
        maxQ = currentQ;
      }

      if (iterations < maxIterations && maxQ - minQ > 0.04) {
        evaluateQuality();
      } else {
        isProcessing = false;
        const finalBlob = bestBlobUnderTarget || smallestBlobOverall;
        compressedBlob = finalBlob;
        revokeAllTrackedUrls();
        compressedDataUrl = createTrackedUrl(finalBlob);

        if (currentPreviewMode === "result") {
          previewImage.src = compressedDataUrl;
        }

        updateMetricsUI(finalBlob.size, false);

        if (finalBlob.size <= targetBytes) {
          targetStatusText.textContent = `${i18n[currentLang].targetMet} (≤ ${formatBytes(targetBytes)})`;
        } else {
          targetStatusText.textContent = `${i18n[currentLang].targetClosest}`;
        }
      }
    });
  }

  evaluateQuality();
}

/* ==========================================================
   6. PDF GRANULAR COMPRESSION ENGINE (QUALITY + TARGET SIZE)
   ========================================================== */
function compressPdf(customParams = {}) {
  if (!activePdfBytes) return;

  const sessionId = currentSessionId;
  isProcessing = true;
  downloadBtn.disabled = true;
  downloadBtn.classList.remove("ready-aura");
  setControlsDisabled(true);
  calcStatusBadge.textContent = "...";
  targetStatusText.textContent = "";

  showProgressBar(10, i18n[currentLang].stagePreparing);

  const worker = getPdfWorker();
  const bufferCopy = activePdfBytes.slice().buffer;

  const mode = customParams.mode || currentTab;
  const quality = customParams.quality !== undefined ? customParams.quality : parseInt(qualityRange.value, 10);
  const targetBytes = customParams.targetBytes !== undefined ? customParams.targetBytes : targetSizeKB * 1024;

  worker.postMessage(
    {
      action: "compress",
      sessionId: sessionId,
      pdfBuffer: bufferCopy,
      mode: mode,
      quality: quality,
      targetSizeBytes: mode === "target" ? targetBytes : null
    },
    [bufferCopy]
  );
}

function handlePdfWorkerMessage(e) {
  const data = e.data;
  if (!data || data.sessionId !== currentSessionId) return;

  if (data.type === "progress") {
    const stageKey = data.stage;
    const stageText = i18n[currentLang][stageKey] || i18n[currentLang].stageCompressing;
    showProgressBar(data.percent, stageText);
    return;
  }

  isProcessing = false;
  setControlsDisabled(false);

  if (!data.success) {
    hideProgressBar();
    if (data.code === "PASSWORD_PROTECTED") {
      showError("errPdfPassword");
    } else {
      showError(data.error || "errProcessing");
    }
    targetStatusText.textContent = "";
    updateMetricsUI(originalFileSize, false);
    return;
  }

  showProgressBar(100, i18n[currentLang].stageCompleted);

  const compressedBytes = new Uint8Array(data.outputBuffer);
  const compressedSize = compressedBytes.byteLength;

  if (compressedSize < originalFileSize) {
    compressedBlob = new Blob([compressedBytes], { type: "application/pdf" });
    updateMetricsUI(compressedSize, false);

    if (currentTab === "target") {
      const targetBytes = targetSizeKB * 1024;
      if (compressedSize <= targetBytes) {
        targetStatusText.textContent = `${i18n[currentLang].targetMet} (≤ ${formatBytes(targetBytes)})`;
      } else {
        targetStatusText.textContent = `${i18n[currentLang].targetClosest}`;
      }
    } else {
      targetStatusText.textContent = i18n[currentLang].pdfOptimized;
    }
  } else {
    compressedBlob = new Blob([activePdfBytes], { type: "application/pdf" });
    updateMetricsUI(originalFileSize, false);
    targetStatusText.textContent = i18n[currentLang].pdfNoReduction;
  }

  setTimeout(() => {
    if (currentSessionId === data.sessionId && !isProcessing) {
      hideProgressBar();
    }
  }, 950);
}

function handlePdfWorkerError(err) {
  isProcessing = false;
  setControlsDisabled(false);
  hideProgressBar();
  downloadBtn.disabled = true;
  downloadBtn.classList.remove("ready-aura");
  terminatePdfWorker();
  showError("errPdfEngine");
}

/* ==========================================================
   7. UNIFIED DISPATCHERS
   ========================================================== */
function runCompression() {
  if (currentMode === "image") {
    compressImage(parseFloat(qualityRange.value) / 100);
  } else if (currentMode === "pdf") {
    compressPdf({ mode: "slider", quality: parseInt(qualityRange.value, 10) });
  }
}

function runTargetSizeCompression(targetKB) {
  if (currentMode === "image") {
    runImageTargetSizeCompression(targetKB);
  } else if (currentMode === "pdf") {
    compressPdf({ mode: "target", targetBytes: targetKB * 1024 });
  }
}

/* ==========================================================
   8. FILE INGESTION & VALIDATION
   ========================================================== */
function loadFile(file) {
  clearError();
  if (!file) return;

  if (file.size === 0) {
    resetTool();
    showError("errFileType");
    return;
  }

  if (file.size > MAX_FILE_SIZE) {
    resetTool();
    showError("errSizeLimit");
    return;
  }

  if (currentMode === "image") {
    const validImageTypes = ["image/jpeg", "image/png", "image/webp"];
    if (!validImageTypes.includes(file.type) && !/\.(jpe?g|png|webp)$/i.test(file.name)) {
      resetTool();
      showError("errFileType");
      return;
    }
  } else if (currentMode === "pdf") {
    if (file.type !== "application/pdf" && !/\.pdf$/i.test(file.name)) {
      resetTool();
      showError("errFileType");
      return;
    }
  }

  currentSessionId++;
  const sessionId = currentSessionId;

  if (currentMode === "image") {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (sessionId !== currentSessionId) return;
      const dataUrl = e.target.result;
      const img = new Image();

      img.onload = () => {
        if (sessionId !== currentSessionId) return;
        if (img.naturalWidth === 0 || img.naturalHeight === 0) {
          resetTool();
          showError("errFileType");
          return;
        }

        activeImage = img;
        originalDataUrl = dataUrl;
        originalFileSize = file.size;
        originalFileName = file.name;
        fileNameDisplay.textContent = file.name;
        origSizeVal.textContent = formatBytes(file.size);

        previewImage.src = originalDataUrl;
        previewImage.classList.remove("hidden");
        pdfDocPreview.classList.add("hidden");
        previewToggleWrap.classList.remove("hidden");

        dropzone.classList.add("hidden");
        workbench.classList.remove("hidden");
        setPreviewMode("result");

        if (currentTab === "slider") {
          runCompression();
        } else {
          runTargetSizeCompression(targetSizeKB);
        }
      };

      img.onerror = () => {
        if (sessionId !== currentSessionId) return;
        resetTool();
        showError("errFileType");
      };
      img.src = dataUrl;
    };

    reader.onerror = () => {
      if (sessionId !== currentSessionId) return;
      resetTool();
      showError("errFileType");
    };
    reader.readAsDataURL(file);

  } else {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (sessionId !== currentSessionId) return;
      const candidateBytes = new Uint8Array(e.target.result);

      if (
        candidateBytes.byteLength < 5 ||
        candidateBytes[0] !== 0x25 ||
        candidateBytes[1] !== 0x50 ||
        candidateBytes[2] !== 0x44 ||
        candidateBytes[3] !== 0x46 ||
        candidateBytes[4] !== 0x2d
      ) {
        resetTool();
        showError("errFileType");
        return;
      }

      activePdfBytes = candidateBytes;
      originalFileSize = file.size;
      originalFileName = file.name;
      fileNameDisplay.textContent = file.name;
      origSizeVal.textContent = formatBytes(file.size);

      previewImage.classList.add("hidden");
      pdfDocPreview.classList.remove("hidden");
      previewToggleWrap.classList.add("hidden");

      dropzone.classList.add("hidden");
      workbench.classList.remove("hidden");

      if (currentTab === "slider") {
        runCompression();
      } else {
        runTargetSizeCompression(targetSizeKB);
      }
    };

    reader.onerror = () => {
      if (sessionId !== currentSessionId) return;
      resetTool();
      showError("errFileType");
    };
    reader.readAsArrayBuffer(file);
  }
}

function setPreviewMode(mode) {
  currentPreviewMode = mode;
  toggleResultBtn.classList.toggle("active", mode === "result");
  toggleOrigBtn.classList.toggle("active", mode === "original");
  toggleResultBtn.setAttribute("aria-pressed", mode === "result" ? "true" : "false");
  toggleOrigBtn.setAttribute("aria-pressed", mode === "original" ? "true" : "false");

  previewImage.classList.add("fading");
  setTimeout(() => {
    if (mode === "original") {
      previewImage.src = originalDataUrl;
    } else {
      previewImage.src = compressedDataUrl || originalDataUrl;
    }
    previewImage.classList.remove("fading");
  }, 70);
}

toggleResultBtn.addEventListener("click", () => setPreviewMode("result"));
toggleOrigBtn.addEventListener("click", () => setPreviewMode("original"));

/* ==========================================================
   9. EVENT LISTENERS
   ========================================================== */
modeTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    if (isProcessing) return;
    modeTabs.forEach((t) => {
      t.classList.remove("active");
      t.setAttribute("aria-selected", "false");
    });
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");
    currentMode = tab.getAttribute("data-mode");

    fileInput.accept = currentMode === "image" ? "image/jpeg,image/png,image/webp" : "application/pdf";
    updateDropzoneCopy();

    if (currentMode === "image") {
      formatGroup.classList.remove("hidden");
      pdfQuickPresets.classList.add("hidden");
      previewToggleWrap.classList.remove("hidden");
    } else {
      formatGroup.classList.add("hidden");
      pdfQuickPresets.classList.remove("hidden");
      previewToggleWrap.classList.add("hidden");
    }

    resetTool();
  });
});

pdfPresetBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (isProcessing) return;
    pdfPresetBtns.forEach((b) => {
      b.classList.remove("active");
      b.setAttribute("aria-pressed", "false");
    });
    btn.classList.add("active");
    btn.setAttribute("aria-pressed", "true");

    const targetQ = parseInt(btn.getAttribute("data-pdf-quality"), 10);
    qualityRange.value = targetQ;
    qualityVal.textContent = `${targetQ}%`;

    if (activePdfBytes) {
      runCompression();
    }
  });
});

subTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    if (isProcessing) return;
    subTabs.forEach((t) => {
      t.classList.remove("active");
      t.setAttribute("aria-selected", "false");
    });
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");
    currentTab = tab.getAttribute("data-tab");

    if (currentTab === "slider") {
      sliderModeSection.classList.remove("hidden");
      targetModeSection.classList.add("hidden");
      runCompression();
    } else {
      sliderModeSection.classList.add("hidden");
      targetModeSection.classList.remove("hidden");
      runTargetSizeCompression(targetSizeKB);
    }
  });
});

presetBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (isProcessing) return;
    presetBtns.forEach((b) => {
      b.classList.remove("active");
      b.setAttribute("aria-pressed", "false");
    });
    btn.classList.add("active");
    btn.setAttribute("aria-pressed", "true");
    customTargetInput.value = "";
    targetSizeKB = parseInt(btn.getAttribute("data-target"), 10);
    runTargetSizeCompression(targetSizeKB);
  });
});

function applyCustomSize() {
  if (isProcessing) return;
  const val = parseFloat(customTargetInput.value);
  if (!val || val <= 0) return;

  presetBtns.forEach((b) => {
    b.classList.remove("active");
    b.setAttribute("aria-pressed", "false");
  });
  const unit = customTargetUnit.value;
  targetSizeKB = unit === "MB" ? val * 1024 : val;

  runTargetSizeCompression(targetSizeKB);
}

applyCustomTargetBtn.addEventListener("click", applyCustomSize);
customTargetInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") applyCustomSize();
});

qualityRange.addEventListener("input", (e) => {
  const val = e.target.value;
  qualityVal.textContent = `${val}%`;
  estimateSizeInRealTime(val);

  pdfPresetBtns.forEach((btn) => {
    const btnQ = parseInt(btn.getAttribute("data-pdf-quality"), 10);
    const matches = Math.abs(btnQ - val) <= 5;
    btn.classList.toggle("active", matches);
    btn.setAttribute("aria-pressed", matches ? "true" : "false");
  });
});

qualityRange.addEventListener("change", () => {
  if (!isProcessing) runCompression();
});

formatChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    if (isProcessing) return;
    formatChips.forEach((c) => {
      c.classList.remove("active");
      c.setAttribute("aria-pressed", "false");
    });
    chip.classList.add("active");
    chip.setAttribute("aria-pressed", "true");
    selectedFormat = chip.getAttribute("data-format");

    if (currentTab === "slider") {
      runCompression();
    } else {
      runTargetSizeCompression(targetSizeKB);
    }
  });
});

dropzone.addEventListener("click", () => fileInput.click());
browseBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  fileInput.click();
});

fileInput.addEventListener("change", (e) => {
  if (e.target.files && e.target.files[0]) {
    loadFile(e.target.files[0]);
  }
});

["dragenter", "dragover"].forEach((event) => {
  dropzone.addEventListener(event, (e) => {
    e.preventDefault();
    dropzone.classList.add("drag-over");
  });
});

["dragleave", "drop"].forEach((event) => {
  dropzone.addEventListener(event, (e) => {
    e.preventDefault();
    dropzone.classList.remove("drag-over");
  });
});

dropzone.addEventListener("drop", (e) => {
  e.preventDefault();
  dropzone.classList.remove("drag-over");
  if (e.dataTransfer.files && e.dataTransfer.files[0]) {
    loadFile(e.dataTransfer.files[0]);
  }
});

dropzone.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    fileInput.click();
  }
});

function resetTool() {
  currentSessionId++;
  terminatePdfWorker();

  clearError();
  hideProgressBar();
  setControlsDisabled(false);

  activeImage = null;
  activePdfBytes = null;
  compressedBlob = null;
  originalDataUrl = "";
  compressedDataUrl = "";
  originalFileSize = 0;
  originalFileName = "";
  isProcessing = false;

  revokeAllTrackedUrls();

  fileInput.value = "";
  previewImage.src = "";
  previewImage.classList.add("hidden");
  previewImage.classList.remove("fading");
  pdfDocPreview.classList.add("hidden");
  targetStatusText.textContent = "";

  workbench.classList.add("hidden");
  dropzone.classList.remove("hidden");
  downloadBtn.disabled = true;
  downloadBtn.classList.remove("ready-aura");

  origSizeVal.textContent = "0 KB";
  newSizeVal.textContent = "0 KB";
  reductionBadge.textContent = "-0%";
  reductionBadge.classList.remove("larger");
  newSizeVal.classList.remove("metric-settle");
  reductionBadge.classList.remove("metric-settle");
}

resetBtn.addEventListener("click", resetTool);

downloadBtn.addEventListener("click", () => {
  if (!compressedBlob) return;

  const link = document.createElement("a");
  const blobUrl = createTrackedUrl(compressedBlob);
  link.href = blobUrl;

  const originalBase = originalFileName.substring(0, originalFileName.lastIndexOf(".")) || "compressed";

  if (currentMode === "image") {
    let ext = "webp";
    if (compressedBlob.type === "image/jpeg") ext = "jpg";
    else if (compressedBlob.type === "image/png") ext = "png";

    link.download = `${originalBase}-min.${ext}`;
  } else {
    link.download = `${originalBase}-min.pdf`;
  }

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    applyLanguage(btn.getAttribute("data-lang"));
  });
});

/* ==========================================================
   10. INITIALIZATION
   ========================================================== */
applyLanguage(currentLang);
applyTheme(currentThemeMode);
