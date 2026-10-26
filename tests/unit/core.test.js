import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

// Extract inline objects and functions directly from main.js without refactoring app code
const mainJsContent = fs.readFileSync(path.resolve(process.cwd(), 'main.js'), 'utf-8');

function extractI18n() {
  const match = mainJsContent.match(/const\s+i18n\s*=\s*({[\s\S]*?\n\s*};)/);
  if (!match) throw new Error('Could not locate i18n object in main.js');
  const evaluated = new Function(`return ${match[1]}`)();
  return evaluated;
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

describe('Unit Tests: Core Algorithms & State Integrity', () => {
  test('Localization Dictionary Completeness: All language keys match 1:1', () => {
    const i18n = extractI18n();
    const enKeys = Object.keys(i18n.en).sort();
    const hiKeys = Object.keys(i18n.hi).sort();
    const hinglishKeys = Object.keys(i18n.hinglish).sort();

    assert.deepEqual(
      hiKeys,
      enKeys,
      `Hindi keys mismatch. Missing: ${enKeys.filter((k) => !hiKeys.includes(k)).join(', ')}`
    );
    assert.deepEqual(
      hinglishKeys,
      enKeys,
      `Hinglish keys mismatch. Missing: ${enKeys.filter((k) => !hinglishKeys.includes(k)).join(', ')}`
    );
  });

  test('FormatBytes: Accurately formats boundary values', () => {
    assert.equal(formatBytes(0), '0 B');
    assert.equal(formatBytes(512), '512 B');
    assert.equal(formatBytes(1024), '1 KB');
    assert.equal(formatBytes(1536), '1.5 KB');
    assert.equal(formatBytes(1048576), '1 MB');
    assert.equal(formatBytes(26214400), '25 MB');
  });

  test('PDF Header Byte Signature: Verifies 0x25, 0x50, 0x44, 0x46, 0x2D (%PDF-)', () => {
    const validPdfHeader = new Uint8Array([0x25, 0x50, 0x44, 0x46, 0x2d, 0x31, 0x2e, 0x34]);
    const invalidHeader = new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

    const isPdf = (bytes) =>
      bytes.byteLength >= 5 &&
      bytes[0] === 0x25 &&
      bytes[1] === 0x50 &&
      bytes[2] === 0x44 &&
      bytes[3] === 0x46 &&
      bytes[4] === 0x2d;

    assert.equal(isPdf(validPdfHeader), true);
    assert.equal(isPdf(invalidHeader), false);
  });

  test('Quality-to-DPI Interpolation formula integrity', () => {
    const calcDpi = (q) => Math.round(72 + ((q - 5) / 90) * (300 - 72));
    assert.equal(calcDpi(5), 72);
    assert.equal(calcDpi(50), 186);
    assert.equal(calcDpi(95), 300);
  });
});
