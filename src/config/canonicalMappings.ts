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
export const serviceAreaCanonicals: CanonicalMapping[] = [
  {
    legacyPath: '/service-areas/cedar-park',
    canonicalTarget: '/service-areas/leander',
    reason: 'Cedar Park content consolidated into Leander service area'
  }
];

/**
 * Service location page canonical mappings
 */
export const serviceLocationCanonicals: CanonicalMapping[] = [
  // Cedar Park → Leander
  {
    legacyPath: '/interior-painting-cedar-park',
    canonicalTarget: '/interior-painting-leander',
    reason: 'Cedar Park interior painting consolidated into Leander'
  },
  {
    legacyPath: '/exterior-painting-cedar-park',
    canonicalTarget: '/exterior-painting-leander',
    reason: 'Cedar Park exterior painting consolidated into Leander'
  },
  {
    legacyPath: '/cabinet-refinishing-cedar-park',
    canonicalTarget: '/cabinet-refinishing-leander',
    reason: 'Cedar Park cabinet refinishing consolidated into Leander'
  },
  {
    legacyPath: '/commercial-painting-cedar-park',
    canonicalTarget: '/commercial-painting-leander',
    reason: 'Cedar Park commercial painting consolidated into Leander'
  },
  // Hutto → Taylor
  {
    legacyPath: '/interior-painting-hutto',
    canonicalTarget: '/interior-painting-taylor',
    reason: 'Hutto interior painting consolidated into Taylor'
  },
  {
    legacyPath: '/exterior-painting-hutto',
    canonicalTarget: '/exterior-painting-taylor',
    reason: 'Hutto exterior painting consolidated into Taylor'
  },
  {
    legacyPath: '/cabinet-refinishing-hutto',
    canonicalTarget: '/cabinet-refinishing-taylor',
    reason: 'Hutto cabinet refinishing consolidated into Taylor'
  },
  {
    legacyPath: '/commercial-painting-hutto',
    canonicalTarget: '/commercial-painting-taylor',
    reason: 'Hutto commercial painting consolidated into Taylor'
  }
];

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
