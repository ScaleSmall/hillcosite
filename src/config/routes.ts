export const BASE_URL = 'https://www.hillcopaint.com';

export const geoAreas = [
  { hub: 'steiner-ranch-78732', neighborhoods: ['rob-roy', 'davenport-ranch', 'river-place', 'barclay-place', 'chaparral-cliffside'] },
  { hub: 'west-lake-hills-and-rollingwood', neighborhoods: ['rollingwood', 'west-lake-hills', 'spanish-oaks', 'davenport-ranch-west', 'lake-austin-hills'] },
  { hub: 'barton-creek', neighborhoods: ['barton-creek-country-club-estates', 'fazio-foothills-cliffside', 'spyglass-bartons-bluff', 'lake-austin-west-estates', 'barton-creek-west'] },
  { hub: 'tarrytown', neighborhoods: ['tarrytown', 'old-enfield', 'pemberton-heights', 'bryker-woods', 'clarksville'] },
  { hub: 'downtown-austin-luxury', neighborhoods: ['downtown-core-78701', 'rainey-street-district', 'old-west-austin-central', 'zilker', 'clarksville-west'] },
  { hub: 'allandale-and-northwest-hills', neighborhoods: ['allandale', 'northwest-hills', 'crestview', 'quail-creek', 'triangle-north-lamar'] },
  { hub: 'lakeway-bee-cave-and-lake-travis', neighborhoods: ['lakeway', 'rough-hollow', 'the-peninsula-at-rough-hollow', 'serenity-hills', 'bee-cave'] },
  { hub: 'circle-c-ranch-and-southwest-austin', neighborhoods: ['circle-c-ranch', 'grey-rock', 'lost-creek', 'shady-hollow', 'west-oak-hill'] },
  { hub: 'pemberton-heights-and-old-west-austin-historic-luxury', neighborhoods: ['pemberton-heights-south', 'old-enfield-west', 'bryker-woods-west', 'clarksville-historic', 'old-west-austin-historic'] }
];

export const staticRoutes = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/about', changefreq: 'monthly', priority: '0.8' },
  { path: '/services', changefreq: 'weekly', priority: '0.9' },
  { path: '/services/interior-painting', changefreq: 'monthly', priority: '0.8' },
  { path: '/services/exterior-painting', changefreq: 'monthly', priority: '0.8' },
  { path: '/services/cabinet-refinishing', changefreq: 'monthly', priority: '0.8' },
  { path: '/services/commercial', changefreq: 'monthly', priority: '0.7' },
  { path: '/gallery', changefreq: 'weekly', priority: '0.7' },
  { path: '/testimonials', changefreq: 'weekly', priority: '0.7' },
  { path: '/faq', changefreq: 'monthly', priority: '0.7' },
  { path: '/service-areas', changefreq: 'monthly', priority: '0.9' },
  { path: '/service-areas/austin', changefreq: 'monthly', priority: '0.9' },
  { path: '/service-areas/round-rock-georgetown', changefreq: 'monthly', priority: '0.8' },
  { path: '/service-areas/pflugerville-wells-branch', changefreq: 'monthly', priority: '0.8' },
  { path: '/service-areas/cedar-park', changefreq: 'monthly', priority: '0.8' },
  { path: '/service-areas/taylor-hutto', changefreq: 'monthly', priority: '0.8' },
  { path: '/service-areas/leander', changefreq: 'monthly', priority: '0.8' },
  { path: '/service-areas/west-lake-hills', changefreq: 'monthly', priority: '0.8' },
  { path: '/color-consultation', changefreq: 'monthly', priority: '0.7' },
  { path: '/contact', changefreq: 'monthly', priority: '0.9' },
  { path: '/blog', changefreq: 'weekly', priority: '0.8' },
  { path: '/guides/painting-costs-round-rock', changefreq: 'monthly', priority: '0.7' },
  { path: '/guides/best-paint-texas-heat', changefreq: 'monthly', priority: '0.7' },
  { path: '/guides/hoa-color-tips-round-rock', changefreq: 'monthly', priority: '0.7' },
  { path: '/guides/how-often-paint-central-texas', changefreq: 'monthly', priority: '0.7' },
  { path: '/privacy', changefreq: 'yearly', priority: '0.3' },
  { path: '/terms', changefreq: 'yearly', priority: '0.3' },
  { path: '/do-not-sell', changefreq: 'yearly', priority: '0.3' },
  { path: '/interior-painting-round-rock', changefreq: 'monthly', priority: '0.8' },
  { path: '/interior-painting-georgetown', changefreq: 'monthly', priority: '0.8' },
  { path: '/interior-painting-cedar-park', changefreq: 'monthly', priority: '0.8' },
  { path: '/interior-painting-pflugerville', changefreq: 'monthly', priority: '0.8' },
  { path: '/interior-painting-leander', changefreq: 'monthly', priority: '0.8' },
  { path: '/interior-painting-taylor', changefreq: 'monthly', priority: '0.8' },
  { path: '/interior-painting-hutto', changefreq: 'monthly', priority: '0.8' },
  { path: '/interior-painting-austin', changefreq: 'monthly', priority: '0.8' },
  { path: '/interior-painting-west-lake-hills', changefreq: 'monthly', priority: '0.8' },
  { path: '/exterior-painting-round-rock', changefreq: 'monthly', priority: '0.8' },
  { path: '/exterior-painting-georgetown', changefreq: 'monthly', priority: '0.8' },
  { path: '/exterior-painting-cedar-park', changefreq: 'monthly', priority: '0.8' },
  { path: '/exterior-painting-pflugerville', changefreq: 'monthly', priority: '0.8' },
  { path: '/exterior-painting-leander', changefreq: 'monthly', priority: '0.8' },
  { path: '/exterior-painting-taylor', changefreq: 'monthly', priority: '0.8' },
  { path: '/exterior-painting-hutto', changefreq: 'monthly', priority: '0.8' },
  { path: '/exterior-painting-austin', changefreq: 'monthly', priority: '0.8' },
  { path: '/exterior-painting-west-lake-hills', changefreq: 'monthly', priority: '0.8' },
  { path: '/cabinet-refinishing-round-rock', changefreq: 'monthly', priority: '0.8' },
  { path: '/cabinet-refinishing-georgetown', changefreq: 'monthly', priority: '0.8' },
  { path: '/cabinet-refinishing-cedar-park', changefreq: 'monthly', priority: '0.8' },
  { path: '/cabinet-refinishing-pflugerville', changefreq: 'monthly', priority: '0.8' },
  { path: '/cabinet-refinishing-leander', changefreq: 'monthly', priority: '0.8' },
  { path: '/cabinet-refinishing-taylor', changefreq: 'monthly', priority: '0.8' },
  { path: '/cabinet-refinishing-hutto', changefreq: 'monthly', priority: '0.8' },
  { path: '/cabinet-refinishing-austin', changefreq: 'monthly', priority: '0.8' },
  { path: '/cabinet-refinishing-west-lake-hills', changefreq: 'monthly', priority: '0.8' },
  { path: '/commercial-painting-round-rock', changefreq: 'monthly', priority: '0.8' },
  { path: '/commercial-painting-georgetown', changefreq: 'monthly', priority: '0.8' },
  { path: '/commercial-painting-cedar-park', changefreq: 'monthly', priority: '0.8' },
  { path: '/commercial-painting-pflugerville', changefreq: 'monthly', priority: '0.8' },
  { path: '/commercial-painting-leander', changefreq: 'monthly', priority: '0.8' },
  { path: '/commercial-painting-taylor', changefreq: 'monthly', priority: '0.8' },
  { path: '/commercial-painting-hutto', changefreq: 'monthly', priority: '0.8' },
  { path: '/commercial-painting-austin', changefreq: 'monthly', priority: '0.8' },
  { path: '/commercial-painting-west-lake-hills', changefreq: 'monthly', priority: '0.8' },
];

export function getAllRoutes() {
  const routes = [...staticRoutes];

  geoAreas.forEach(area => {
    routes.push({ path: `/areas/${area.hub}`, changefreq: 'monthly', priority: '0.8' });
    area.neighborhoods.forEach(neighborhood => {
      routes.push({ path: `/areas/${area.hub}/${neighborhood}`, changefreq: 'monthly', priority: '0.7' });
    });
  });

  return routes;
}

export function getAllRoutePaths(): string[] {
  return getAllRoutes().map(r => r.path);
}

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
  { pattern: /round-rock/i, target: '/service-areas/round-rock-georgetown' },
  { pattern: /georgetown/i, target: '/service-areas/round-rock-georgetown' },
  { pattern: /pflugerville/i, target: '/service-areas/pflugerville-wells-branch' },
  { pattern: /wells-branch/i, target: '/service-areas/pflugerville-wells-branch' },
  { pattern: /cedar-park/i, target: '/service-areas/cedar-park' },
  { pattern: /leander/i, target: '/service-areas/leander' },
  { pattern: /taylor/i, target: '/service-areas/taylor-hutto' },
  { pattern: /hutto/i, target: '/service-areas/taylor-hutto' },
];
