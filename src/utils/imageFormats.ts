export interface ResponsiveImageOptions {
  src: string;
  widths?: number[];
  formats?: ('avif' | 'webp' | 'jpg' | 'png')[];
}

export function generateResponsiveSources(src: string, widths: number[] = [640, 1024, 1536]): {
  avif: string;
  webp: string;
  jpg: string;
} {
  const extension = src.split('.').pop()?.toLowerCase() || 'jpg';
  const basePath = src.replace(`.${extension}`, '');

  return {
    avif: `${basePath}.avif`,
    webp: `${basePath}.webp`,
    jpg: src
  };
}

export function generateSrcSet(basePath: string, format: string, widths: number[]): string {
  return widths
    .map(width => `${basePath.replace(/\.[^.]+$/, '')}-${width}w.${format} ${width}w`)
    .join(', ');
}

export function getImageSizes(breakpoints: { mobile?: string; tablet?: string; desktop?: string }): string {
  const sizes = [];

  if (breakpoints.mobile) {
    sizes.push(`(max-width: 768px) ${breakpoints.mobile}`);
  }
  if (breakpoints.tablet) {
    sizes.push(`(max-width: 1024px) ${breakpoints.tablet}`);
  }
  if (breakpoints.desktop) {
    sizes.push(breakpoints.desktop);
  }

  return sizes.length > 0 ? sizes.join(', ') : '100vw';
}
