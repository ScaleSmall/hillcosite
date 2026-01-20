import { trustMetrics } from '../config/trustMetrics';

function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

export function pickVariant(seed: string, variants: readonly string[]): number {
  const hash = simpleHash(seed);
  return hash % variants.length;
}

const usedIndicesPerPage = new Map<string, Set<number>>();

export function renderTrustMetric({ seed, pathname }: { seed: string; pathname: string }): string {
  const { jobCountMinimum, timeframeMonthsMinimum, serviceAreaLabel, variants } = trustMetrics;

  if (!usedIndicesPerPage.has(pathname)) {
    usedIndicesPerPage.set(pathname, new Set());
  }

  const usedIndices = usedIndicesPerPage.get(pathname)!;
  const combinedSeed = `${pathname}:${seed}`;
  let index = pickVariant(combinedSeed, variants);

  let attempts = 0;
  while (usedIndices.has(index) && attempts < variants.length) {
    index = (index + 1) % variants.length;
    attempts++;
  }

  usedIndices.add(index);

  const template = variants[index];
  return template
    .replace('{jobCount}', String(jobCountMinimum))
    .replace('{months}', String(timeframeMonthsMinimum))
    .replace('{area}', serviceAreaLabel);
}
