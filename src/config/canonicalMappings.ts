/**
 * SEO Canonical Consolidation Mappings
 *
 * This file defines legacy URL patterns and their approved canonical targets.
 * Used to consolidate SEO authority from deprecated location pages to primary pages.
 *
 * Legacy pages remain accessible for users and backlinks, but canonicals point
 * search engines to the approved primary page to prevent duplicate indexation.
 */

export interface CanonicalMapping {
  legacyPath: string;
  canonicalTarget: string;
  reason: string;
}

/**
 * Service-area page canonical mappings
 */
export const serviceAreaCanonicals: CanonicalMapping[] = [];

/**
 * Service location page canonical mappings
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
