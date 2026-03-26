/**
 * Route Configuration
 *
 * Pure re-export layer for TypeScript consumers.
 * The canonical source of truth is routeData.mjs.
 *
 * DO NOT define route arrays here. All route data must be in routeData.mjs.
 */

export {
  BASE_URL,
  geoAreas,
  serviceLocationPages,
  coreStaticRoutes,
  getStaticRoutes,
  getGeoRoutes,
  getAllRoutes,
  getAllRoutePaths,
  getServiceLocationPaths
} from './routeData.mjs';

export const serviceRedirectPatterns = [
  { pattern: /^\/residential-interior-/, target: '/services/interior-painting' },
  { pattern: /^\/residential-exterior-/, target: '/services/exterior-painting' },
  { pattern: /^\/residential-cabinet-/, target: '/services/cabinet-refinishing' },
  { pattern: /^\/commercial-.*-painting/, target: '/services/commercial' },
  { pattern: /^\/commercial-interior-/, target: '/services/commercial' },
  { pattern: /^\/industrial-/, target: '/services/commercial' },
  { pattern: /^\/hotel-/, target: '/services/commercial' },
  { pattern: /^\/residential-(fence|deck|porch|garage|stucco)-/, target: '/services' },
  { pattern: /^\/service\//, target: '/services' },
];

export const locationRedirectPatterns = [
  { pattern: /tarrytown/i, target: '/service-areas/tarrytown' },
  { pattern: /northwest-hills/i, target: '/service-areas/northwest-hills' },
  { pattern: /west-lake-hills/i, target: '/service-areas/west-lake-hills' },
  { pattern: /west-lake-highlands/i, target: '/service-areas/west-lake-highlands' },
  { pattern: /lakeway/i, target: '/service-areas/lakeway' },
  { pattern: /leander/i, target: '/service-areas/leander' },
  { pattern: /georgetown/i, target: '/service-areas/georgetown' },
  { pattern: /round-rock/i, target: '/service-areas/round-rock' },
  { pattern: /cedar-park/i, target: '/service-areas/cedar-park' },
  { pattern: /north-austin/i, target: '/service-areas/north-austin' },
];
