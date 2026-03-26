/**
 * SEO Canonical Consolidation Mappings
 *
 * This file provides utility functions for canonical URL management.
 *
 * CURRENT STATE (March 2026):
 * ----------------------------
 * Both mapping arrays are INTENTIONALLY EMPTY in this codebase.
 * All pages currently use self-referencing canonical URLs.
 *
 * No Cedar Park → Leander or Hutto → Taylor mappings are implemented.
 * If such consolidation is needed in the future, add entries to the arrays below.
 *
 * The utility functions remain available for future canonical consolidation needs.
 */

export interface CanonicalMapping {
  legacyPath: string;
  canonicalTarget: string;
  reason: string;
}

/**
 * Service-area page canonical mappings
 * Currently empty - all service-area pages are self-canonical
 */
export const serviceAreaCanonicals: CanonicalMapping[] = [];

/**
 * Service location page canonical mappings
 * Currently empty - all service-location pages are self-canonical
 */
export const serviceLocationCanonicals: CanonicalMapping[] = [];

/**
 * Get canonical target for a given path, or null if no mapping exists
 */
export const getCanonicalTarget = (path: string): string | null => {
  const serviceAreaMapping = serviceAreaCanonicals.find(m => m.legacyPath === path);
  if (serviceAreaMapping) return serviceAreaMapping.canonicalTarget;

  const serviceLocationMapping = serviceLocationCanonicals.find(m => m.legacyPath === path);
  if (serviceLocationMapping) return serviceLocationMapping.canonicalTarget;

  return null;
};

/**
 * Get all mappings for reporting
 */
export const getAllMappings = (): CanonicalMapping[] => {
  return [...serviceAreaCanonicals, ...serviceLocationCanonicals];
};
