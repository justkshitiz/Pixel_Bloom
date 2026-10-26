export interface HyperCompressOptions {
    imageQuality: number;
    maxDpi: number;
    lossless: boolean;
    grayscale: boolean;
    forceDownsample: boolean;
    reduceColor: boolean;
    clipImages: boolean;
    removeAlternates: boolean;
    flattenIcc: boolean;
    preferJpx: boolean;
    subsetFonts: boolean;
    removeStandardFonts: boolean;
    unembedAliasedFonts: boolean;
    rasterizePages: boolean;
    rasterizeDpi: number;
    rasterizeQuality: number;
    rasterizeText: boolean;
    mergeFonts: boolean;
    removeAnnots: boolean;
    flattenForms: boolean;
    flattenLinks: boolean;
    removeSignatures: boolean;
    removeThumbnails: boolean;
    removeAppData: boolean;
    removeStructTree: boolean;
    removeThreads: boolean;
    removeSpiderInfo: boolean;
    removeOutputIntents: boolean;
    preserveConformance: boolean;
    brotli: boolean;
}
export declare function normalizeHyperOptions(raw: unknown): HyperCompressOptions;
export declare function buildHyperTokens(o: HyperCompressOptions): string[];
export type HyperOptionGroup = 'Images' | 'Rasterization' | 'Fonts' | 'Structure and interactivity' | 'Metadata and cleanup' | 'Output format';
export interface HyperOptionDoc {
    group: HyperOptionGroup;
    type: 'boolean' | 'number';
    min?: number;
    max?: number;
    default: boolean | number;
    description: string;
}
export declare const HYPER_OPTION_DOCS: Record<keyof HyperCompressOptions, HyperOptionDoc>;
