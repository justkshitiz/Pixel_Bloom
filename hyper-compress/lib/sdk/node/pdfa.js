const LATIN1 = new TextDecoder('latin1');
export function formatPdfaLevel(level) {
    return `PDF/A-${level.part}${level.conformance}`;
}
export function parsePdfaFromXmp(xmp) {
    const part = xmp.match(/pdfaid:part\s*(?:=\s*["']|>)\s*([0-9])/);
    if (!part || part[1] === undefined)
        return null;
    const conf = xmp.match(/pdfaid:conformance\s*(?:=\s*["']|>)\s*([A-Za-z])/);
    return {
        part: Number(part[1]),
        conformance: conf?.[1] ? conf[1].toLowerCase() : '',
    };
}
export function stripPdfaFromXmp(xmp) {
    return xmp
        .replace(/\s*<pdfaid:(part|conformance|rev)>[^<]*<\/pdfaid:\1>/g, '')
        .replace(/\s*pdfaid:(part|conformance|rev)\s*=\s*["'][^"']*["']/g, '')
        .replace(/\s*xmlns:pdfaid\s*=\s*["'][^"']*["']/g, '');
}
export function conformanceSafeOptions(requested, level) {
    const safe = { ...requested };
    safe.removeStandardFonts = false;
    safe.unembedAliasedFonts = false;
    safe.removeOutputIntents = false;
    safe.flattenIcc = false;
    safe.rasterizePages = false;
    if (level.part === 1) {
        safe.preferJpx = false;
        safe.subsetFonts = false;
    }
    if (level.conformance === 'a') {
        safe.removeStructTree = false;
    }
    return safe;
}
export function packAllowedWhilePreserving() {
    return false;
}
const MAX_XMP_BYTES = 1024 * 1024;
const NodeBuffer = globalThis.Buffer;
function byteIndexOf(hay, needle, from) {
    if (NodeBuffer) {
        return NodeBuffer.from(hay.buffer, hay.byteOffset, hay.byteLength).indexOf(needle, from, 'latin1');
    }
    const n = needle.length;
    if (n === 0)
        return Math.min(from, hay.length);
    const first = needle.charCodeAt(0);
    const last = hay.length - n;
    for (let i = Math.max(0, from); i <= last; i++) {
        if (hay[i] !== first)
            continue;
        let j = 1;
        while (j < n && hay[i + j] === needle.charCodeAt(j))
            j++;
        if (j === n)
            return i;
    }
    return -1;
}
export function detectPdfaInBytes(bytes) {
    const start = byteIndexOf(bytes, '<?xpacket', 0);
    if (start < 0)
        return null;
    const found = byteIndexOf(bytes, '<?xpacket end', start);
    const end = found < 0 ? bytes.length : found;
    const stop = Math.min(end, start + MAX_XMP_BYTES);
    return parsePdfaFromXmp(LATIN1.decode(bytes.subarray(start, stop)));
}
export function restoreHeaderVersion(source, output) {
    const readHeader = (b) => {
        if (b.length < 8)
            return '';
        let s = '';
        for (let i = 0; i < 8; i++)
            s += String.fromCharCode(b[i] ?? 0);
        return s;
    };
    const from = readHeader(source);
    const to = readHeader(output);
    if (!/^%PDF-\d\.\d$/.test(from) || !/^%PDF-\d\.\d$/.test(to) || from === to) {
        return output;
    }
    const patched = output.slice();
    for (let i = 0; i < 8; i++)
        patched[i] = from.charCodeAt(i);
    return patched;
}
