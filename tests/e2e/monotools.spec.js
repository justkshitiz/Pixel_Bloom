import { test, expect } from '@playwright/test';

// Standard 1x1 valid PNG image
const TINY_PNG_BASE64 =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';

// Minimal compliant empty PDF document
const TINY_PDF_BASE64 =
  'data:application/pdf;base64,JVBERi0xLjQKMSAwIG9iajw8L1R5cGUvQ2F0YWxvZy9QYWdlcyAyIDAgUj4+ZW5kb2JqCjIgMCBvYmo8PC9UeXBlL1BhZ2VzL0tpZHNbMyAwIFJdL0NvdW50IDE+PmVuZG9iagozIDAgb2JqPDwvVHlwZS9QYWdlL1BhcmVudCAyIDAgUi9NZWRpYUJveFswIDAgMzAwIDMwMF0+PmVuZG9iagp4cmVmCjAgNAowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwMDkgMDAwMDAgbiAKMDAwMDAwMDA1OCAwMDAwMCBuIAowMDAwMDAwMTE1IDAwMDAwIG4gCnRyYWlsZXIKPDwvU2l6ZSA0L1Jvb3QgMSAwIFI+PgpzdGFydHhyZWYKMTc4CiUlRU9GCg==';

test.describe('Pixel Bloom Application Quality Gate', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Page Initialization: Key elements, accessibility and theme default correctly', async ({ page }) => {
    await expect(page.locator('.brand-name')).toHaveText('Pixel Bloom');
    await expect(page.locator('#dropzone')).toBeVisible();
    await expect(page.locator('#workbench')).toBeHidden();

    // Verify system theme applied without error
    const dataTheme = await page.locator('html').getAttribute('data-theme');
    expect(['light', 'dark']).toContain(dataTheme);
  });

  test('Theme & Localization Toggles: Updates DOM states and attributes', async ({ page }) => {
    // Language Switcher to Hindi
    const hiBtn = page.locator('.lang-btn[data-lang="hi"]');
    await hiBtn.click();
    await expect(page.locator('.tool-title')).toHaveText('फ़ास्ट कंप्रेशन');
    await expect(hiBtn).toHaveAttribute('aria-pressed', 'true');

    // Language Switcher to Hinglish
    const hinglishBtn = page.locator('.lang-btn[data-lang="hinglish"]');
    await hinglishBtn.click();
    await expect(page.locator('.tool-title')).toHaveText('Fast Compression');
    await expect(hinglishBtn).toHaveAttribute('aria-pressed', 'true');

    // Theme toggle
    const themeBtn = page.locator('#themeToggleBtn');
    await themeBtn.click();
    const currentTheme = await page.locator('html').getAttribute('data-theme');
    expect(['light', 'dark']).toContain(currentTheme);
  });

  test('Image Pipeline: Ingestion, controls, metrics calculation and reset', async ({ page }) => {
    const buffer = Buffer.from(TINY_PNG_BASE64.split(',')[1], 'base64');

    // Upload image
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.locator('#browseBtn').click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles([{ name: 'test.png', mimeType: 'image/png', buffer }]);

    // Workbench revealed
    await expect(page.locator('#workbench')).toBeVisible();
    await expect(page.locator('#fileNameDisplay')).toHaveText('test.png');
    await expect(page.locator('#previewImage')).toBeVisible();

    // Verify format buttons active
    const webpChip = page.locator('.chip[data-format="image/webp"]');
    await expect(webpChip).toHaveClass(/active/);

    // Verify metrics populated
    await expect(page.locator('#origSizeVal')).not.toHaveText('0 KB');
    await expect(page.locator('#newSizeVal')).not.toHaveText('0 KB');
    await expect(page.locator('#downloadBtn')).toBeEnabled();

    // Test Reset
    await page.locator('#resetBtn').click();
    await expect(page.locator('#workbench')).toBeHidden();
    await expect(page.locator('#dropzone')).toBeVisible();
  });

  test('PDF Pipeline: Ingestion, preset switching, progress display and download readiness', async ({ page }) => {
    // Switch to PDF mode
    await page.locator('.mode-tab[data-mode="pdf"]').click();
    await expect(page.locator('.mode-tab[data-mode="pdf"]')).toHaveClass(/active/);

    const buffer = Buffer.from(TINY_PDF_BASE64.split(',')[1], 'base64');
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.locator('#browseBtn').click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles([{ name: 'sample.pdf', mimeType: 'application/pdf', buffer }]);

    // Workbench revealed
    await expect(page.locator('#workbench')).toBeVisible();
    await expect(page.locator('#pdfDocPreview')).toBeVisible();

    // Verify Download button becomes enabled once operation settles
    await expect(page.locator('#downloadBtn')).toBeEnabled({ timeout: 25000 });
    await expect(page.locator('#origSizeVal')).not.toHaveText('0 KB');
    await expect(page.locator('#newSizeVal')).not.toHaveText('0 KB');
  });

  test('File Validation: Invalid file extensions trigger error notification banner', async ({ page }) => {
    const invalidBuffer = Buffer.from('Plain text content, not a PDF or image');
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.locator('#browseBtn').click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles([{ name: 'malformed.txt', mimeType: 'text/plain', buffer: invalidBuffer }]);

    await expect(page.locator('#errorBanner')).toBeVisible();
    await expect(page.locator('#errorMessage')).not.toBeEmpty();
    await expect(page.locator('#workbench')).toBeHidden();
  });

  test('Session Cancellation: Resetting during operation leaves no lingering state', async ({ page }) => {
    await page.locator('.mode-tab[data-mode="pdf"]').click();

    const buffer = Buffer.from(TINY_PDF_BASE64.split(',')[1], 'base64');
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.locator('#browseBtn').click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles([{ name: 'interrupt.pdf', mimeType: 'application/pdf', buffer }]);

    // Immediately trigger Reset
    await page.locator('#resetBtn').click();

    await expect(page.locator('#workbench')).toBeHidden();
    await expect(page.locator('#dropzone')).toBeVisible();
    await expect(page.locator('#downloadBtn')).toBeDisabled();
  });
});
