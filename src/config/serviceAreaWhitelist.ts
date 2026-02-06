/**
 * SERVICE AREA WHITELIST
 *
 * This is the SINGLE SOURCE OF TRUTH for all allowed service areas.
 * Any location not listed here MUST NOT appear anywhere on the site.
 */

export interface ServiceArea {
  displayName: string;
  slug: string;
  fullAddress: string;
  zipCode?: string;
}

/**
 * Allowed service areas - ONLY these locations should appear on the site
 */
export const ALLOWED_SERVICE_AREAS: ServiceArea[] = [
  {
    displayName: 'Austin',
    slug: 'austin',
    fullAddress: 'Austin, TX, USA',
  },
  {
    displayName: 'Lakeway',
    slug: 'lakeway',
    fullAddress: 'Lakeway, TX, USA',
  },
  {
    displayName: 'Bee Cave',
    slug: 'bee-cave',
    fullAddress: 'Bee Cave, TX, USA',
  },
  {
    displayName: 'Barton Creek',
    slug: 'barton-creek',
    fullAddress: 'Barton Creek, TX, USA',
  },
  {
    displayName: 'Allandale',
    slug: 'allandale',
    fullAddress: 'Allandale, Austin, TX, USA',
  },
  {
    displayName: 'Crestview',
    slug: 'crestview',
    fullAddress: 'Crestview, Austin, TX, USA',
  },
  {
    displayName: 'Rollingwood',
    slug: 'rollingwood',
    fullAddress: 'Rollingwood, TX 78746, USA',
    zipCode: '78746',
  },
  {
    displayName: 'West Lake Hills',
    slug: 'west-lake-hills',
    fullAddress: 'West Lake Hills, TX 78746, USA',
    zipCode: '78746',
  },
  {
    displayName: 'Circle C Ranch',
    slug: 'circle-c-ranch',
    fullAddress: 'Circle C Ranch, Austin, TX, USA',
  },
  {
    displayName: 'Northwest Hills',
    slug: 'northwest-hills',
    fullAddress: 'Northwest Hills, Austin, TX, USA',
  },
  {
    displayName: 'Tarrytown',
    slug: 'tarrytown',
    fullAddress: 'Tarrytown, Austin, TX 78703, USA',
    zipCode: '78703',
  },
  {
    displayName: 'Clarksville',
    slug: 'clarksville',
    fullAddress: 'Clarksville, Austin, TX 78703, USA',
    zipCode: '78703',
  },
  {
    displayName: 'Lake Travis',
    slug: 'lake-travis',
    fullAddress: 'Lake Travis, Volente, TX 78641, USA',
    zipCode: '78641',
  },
  {
    displayName: 'Steiner Ranch',
    slug: 'steiner-ranch',
    fullAddress: 'Steiner Ranch, Austin, TX 78732, USA',
    zipCode: '78732',
  },
  {
    displayName: 'Pemberton Heights',
    slug: 'pemberton-heights',
    fullAddress: 'Pemberton Heights, Austin, TX 78703, USA',
    zipCode: '78703',
  },
  {
    displayName: 'Westlake Highlands',
    slug: 'westlake-highlands',
    fullAddress: 'Westlake Highlands, Austin, TX 78746, USA',
    zipCode: '78746',
  },
];

/**
 * Get service area links for navigation
 */
export function getServiceAreaLinks() {
  return ALLOWED_SERVICE_AREAS.map(area => ({
    name: area.displayName,
    href: `/service-areas/${area.slug}`,
  }));
}

/**
 * Get area names for schema markup
 */
export function getAreaServedList(): string[] {
  return ALLOWED_SERVICE_AREAS.map(area => area.fullAddress);
}

/**
 * Get all allowed slugs
 */
export function getAllowedSlugs(): string[] {
  return ALLOWED_SERVICE_AREAS.map(area => area.slug);
}

/**
 * DISALLOWED locations - these MUST NOT appear anywhere
 */
export const DISALLOWED_LOCATIONS = [
  'Cedar Park',
  'Hutto',
  'Round Rock',
  'Georgetown',
  'Leander',
  'Pflugerville',
  'Taylor',
  'Wells Branch',
];
