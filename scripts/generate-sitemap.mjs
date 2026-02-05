import { writeFileSync, readFileSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createClient } from '@supabase/supabase-js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const envPath = resolve(__dirname, '../.env');
const envContent = readFileSync(envPath, 'utf-8');
const envVars = {};
envContent.split('\n').forEach(line => {
  const [key, ...valueParts] = line.split('=');
  if (key && valueParts.length) {
    envVars[key.trim()] = valueParts.join('=').trim();
  }
});

const supabaseUrl = envVars.VITE_SUPABASE_URL;
const supabaseKey = envVars.VITE_SUPABASE_ANON_KEY;

const baseUrl = 'https://www.hillcopaint.com';

const geoAreas = [
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

const serviceLocationPages = [
  { path: '/interior-painting-tarrytown', changefreq: 'monthly', priority: '0.8' },
  { path: '/interior-painting-northwest-hills', changefreq: 'monthly', priority: '0.8' },
  { path: '/interior-painting-west-lake-highlands', changefreq: 'monthly', priority: '0.8' },
  { path: '/interior-painting-lakeway', changefreq: 'monthly', priority: '0.8' },
  { path: '/interior-painting-hutto', changefreq: 'monthly', priority: '0.8' },
  { path: '/exterior-painting-tarrytown', changefreq: 'monthly', priority: '0.8' },
  { path: '/exterior-painting-northwest-hills', changefreq: 'monthly', priority: '0.8' },
  { path: '/exterior-painting-west-lake-highlands', changefreq: 'monthly', priority: '0.8' },
  { path: '/exterior-painting-lakeway', changefreq: 'monthly', priority: '0.8' },
  { path: '/exterior-painting-hutto', changefreq: 'monthly', priority: '0.8' },
  { path: '/cabinet-refinishing-tarrytown', changefreq: 'monthly', priority: '0.8' },
  { path: '/cabinet-refinishing-northwest-hills', changefreq: 'monthly', priority: '0.8' },
  { path: '/cabinet-refinishing-west-lake-highlands', changefreq: 'monthly', priority: '0.8' },
  { path: '/cabinet-refinishing-lakeway', changefreq: 'monthly', priority: '0.8' },
  { path: '/cabinet-refinishing-hutto', changefreq: 'monthly', priority: '0.8' },
  { path: '/commercial-painting-tarrytown', changefreq: 'monthly', priority: '0.8' },
  { path: '/commercial-painting-northwest-hills', changefreq: 'monthly', priority: '0.8' },
  { path: '/commercial-painting-west-lake-highlands', changefreq: 'monthly', priority: '0.8' },
  { path: '/commercial-painting-lakeway', changefreq: 'monthly', priority: '0.8' },
  { path: '/commercial-painting-hutto', changefreq: 'monthly', priority: '0.8' },
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
  { path: '/service-areas/tarrytown', changefreq: 'monthly', priority: '0.8' },
  { path: '/service-areas/west-lake-hills', changefreq: 'monthly', priority: '0.8' },
  { path: '/service-areas/northwest-hills', changefreq: 'monthly', priority: '0.8' },
  { path: '/service-areas/west-lake-highlands', changefreq: 'monthly', priority: '0.8' },
  { path: '/service-areas/lakeway', changefreq: 'monthly', priority: '0.8' },
  { path: '/service-areas/cedar-park', changefreq: 'monthly', priority: '0.8' },
  { path: '/service-areas/hutto', changefreq: 'monthly', priority: '0.8' },
  { path: '/color-consultation', changefreq: 'monthly', priority: '0.7' },
  { path: '/contact', changefreq: 'monthly', priority: '0.9' },
  { path: '/blog', changefreq: 'weekly', priority: '0.8' },
  { path: '/guides/painting-costs-austin', changefreq: 'monthly', priority: '0.7' },
  { path: '/guides/best-paint-texas-heat', changefreq: 'monthly', priority: '0.7' },
  { path: '/guides/hoa-color-tips-austin', changefreq: 'monthly', priority: '0.7' },
  { path: '/guides/how-often-paint-central-texas', changefreq: 'monthly', priority: '0.7' },
  { path: '/financing', changefreq: 'monthly', priority: '0.7' },
  { path: '/pre-approval', changefreq: 'monthly', priority: '0.7' },
  { path: '/privacy', changefreq: 'yearly', priority: '0.3' },
  { path: '/terms', changefreq: 'yearly', priority: '0.3' },
  { path: '/do-not-sell', changefreq: 'yearly', priority: '0.3' },
  ...serviceLocationPages,
];

geoAreas.forEach(area => {
  routes.push({ path: `/areas/${area.hub}`, changefreq: 'monthly', priority: '0.8' });
  area.neighborhoods.forEach(neighborhood => {
    routes.push({ path: `/areas/${area.hub}/${neighborhood}`, changefreq: 'monthly', priority: '0.7' });
  });
});

async function fetchBlogPosts() {
  if (!supabaseUrl || !supabaseKey) {
    console.log('  Supabase credentials not found, skipping blog posts');
    return [];
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseKey);
    const { data, error } = await supabase
      .from('blog_posts')
      .select('slug, updated_at')
      .eq('published', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.log('  Could not fetch blog posts:', error.message);
      return [];
    }

    return (data || []).map(post => ({
      path: `/blog/${post.slug}`,
      changefreq: 'weekly',
      priority: '0.6',
      lastmod: post.updated_at ? new Date(post.updated_at).toISOString().split('T')[0] : null
    }));
  } catch (err) {
    console.log('  Error fetching blog posts:', err.message);
    return [];
  }
}

const generateSitemap = async () => {
  const lastmod = new Date().toISOString().split('T')[0];

  const blogPosts = await fetchBlogPosts();
  const allRoutes = [...routes, ...blogPosts];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${allRoutes.map(route => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${route.lastmod || lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  const outputPath = resolve(__dirname, '../public/sitemap.xml');
  writeFileSync(outputPath, sitemapXml, 'utf-8');

  console.log(`✓ Sitemap generated successfully at ${outputPath}`);
  console.log(`  Static pages: ${routes.length}`);
  console.log(`  Blog posts: ${blogPosts.length}`);
  console.log(`  Total URLs: ${allRoutes.length}`);
};

generateSitemap();
