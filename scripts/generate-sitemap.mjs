import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const baseUrl = 'https://www.hillcopaint.com';

const geoAreas = [
  { hub: 'steiner-ranch-78732', neighborhoods: ['rob-roy', 'davenport-ranch', 'river-place', 'barclay-place', 'chaparral-cliffside'] },
  { hub: 'west-lake-hills-and-rollingwood', neighborhoods: ['rollingwood', 'west-lake-hills', 'spanish-oaks', 'davenport-ranch', 'lake-austin-hills'] },
  { hub: 'barton-creek', neighborhoods: ['barton-creek-country-club-estates', 'fazio-foothills-cliffside', 'spyglass-bartons-bluff', 'lake-austin-west-estates', 'barton-creek-west'] },
  { hub: 'tarrytown', neighborhoods: ['tarrytown', 'old-enfield', 'pemberton-heights', 'bryker-woods', 'clarksville'] },
  { hub: 'downtown-austin-luxury', neighborhoods: ['downtown-core-78701', 'rainey-street-district', 'old-west-austin', 'zilker', 'clarksville'] },
  { hub: 'allandale-and-northwest-hills', neighborhoods: ['allandale', 'northwest-hills', 'crestview', 'quail-creek', 'triangle-north-lamar'] },
  { hub: 'lakeway-bee-cave-and-lake-travis', neighborhoods: ['lakeway', 'rough-hollow', 'the-peninsula-at-rough-hollow', 'serenity-hills', 'bee-cave'] },
  { hub: 'circle-c-ranch-and-southwest-austin', neighborhoods: ['circle-c-ranch', 'grey-rock', 'lost-creek', 'shady-hollow', 'west-oak-hill'] },
  { hub: 'pemberton-heights-and-old-west-austin-historic-luxury', neighborhoods: ['pemberton-heights', 'old-enfield', 'bryker-woods', 'clarksville', 'old-west-austin'] }
];

const routes = [
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
];

geoAreas.forEach(area => {
  routes.push({ path: `/areas/${area.hub}`, changefreq: 'monthly', priority: '0.8' });
  area.neighborhoods.forEach(neighborhood => {
    routes.push({ path: `/areas/${area.hub}/${neighborhood}`, changefreq: 'monthly', priority: '0.7' });
  });
});

const generateSitemap = () => {
  const lastmod = new Date().toISOString().split('T')[0];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  const outputPath = resolve(__dirname, '../public/sitemap.xml');
  writeFileSync(outputPath, sitemapXml, 'utf-8');

  console.log(`✓ Sitemap generated successfully at ${outputPath}`);
  console.log(`  Total URLs: ${routes.length}`);
};

generateSitemap();
