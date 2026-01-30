import { createClient } from 'npm:@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
};

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

const staticUrls = [
  { loc: `${baseUrl}/`, changefreq: 'weekly', priority: '1.0' },
  { loc: `${baseUrl}/about`, changefreq: 'monthly', priority: '0.8' },
  { loc: `${baseUrl}/services`, changefreq: 'weekly', priority: '0.9' },
  { loc: `${baseUrl}/services/interior-painting`, changefreq: 'monthly', priority: '0.8' },
  { loc: `${baseUrl}/services/exterior-painting`, changefreq: 'monthly', priority: '0.8' },
  { loc: `${baseUrl}/services/cabinet-refinishing`, changefreq: 'monthly', priority: '0.8' },
  { loc: `${baseUrl}/services/commercial`, changefreq: 'monthly', priority: '0.7' },
  { loc: `${baseUrl}/gallery`, changefreq: 'weekly', priority: '0.7' },
  { loc: `${baseUrl}/testimonials`, changefreq: 'weekly', priority: '0.7' },
  { loc: `${baseUrl}/faq`, changefreq: 'monthly', priority: '0.7' },
  { loc: `${baseUrl}/service-areas`, changefreq: 'monthly', priority: '0.9' },
  { loc: `${baseUrl}/service-areas/austin`, changefreq: 'monthly', priority: '0.9' },
  { loc: `${baseUrl}/service-areas/round-rock-georgetown`, changefreq: 'monthly', priority: '0.8' },
  { loc: `${baseUrl}/service-areas/pflugerville-wells-branch`, changefreq: 'monthly', priority: '0.8' },
  { loc: `${baseUrl}/service-areas/cedar-park`, changefreq: 'monthly', priority: '0.8' },
  { loc: `${baseUrl}/service-areas/taylor-hutto`, changefreq: 'monthly', priority: '0.8' },
  { loc: `${baseUrl}/service-areas/leander`, changefreq: 'monthly', priority: '0.8' },
  { loc: `${baseUrl}/service-areas/west-lake-hills`, changefreq: 'monthly', priority: '0.8' },
  { loc: `${baseUrl}/color-consultation`, changefreq: 'monthly', priority: '0.7' },
  { loc: `${baseUrl}/contact`, changefreq: 'monthly', priority: '0.9' },
  { loc: `${baseUrl}/blog`, changefreq: 'weekly', priority: '0.8' },
  { loc: `${baseUrl}/guides/painting-costs-round-rock`, changefreq: 'monthly', priority: '0.7' },
  { loc: `${baseUrl}/guides/best-paint-texas-heat`, changefreq: 'monthly', priority: '0.7' },
  { loc: `${baseUrl}/guides/hoa-color-tips-round-rock`, changefreq: 'monthly', priority: '0.7' },
  { loc: `${baseUrl}/guides/how-often-paint-central-texas`, changefreq: 'monthly', priority: '0.7' },
  { loc: `${baseUrl}/privacy`, changefreq: 'yearly', priority: '0.3' },
  { loc: `${baseUrl}/terms`, changefreq: 'yearly', priority: '0.3' },
  { loc: `${baseUrl}/do-not-sell`, changefreq: 'yearly', priority: '0.3' },
];

const geoUrls: Array<{ loc: string; changefreq: string; priority: string }> = [];
geoAreas.forEach(area => {
  geoUrls.push({ loc: `${baseUrl}/areas/${area.hub}`, changefreq: 'monthly', priority: '0.8' });
  area.neighborhoods.forEach(neighborhood => {
    geoUrls.push({ loc: `${baseUrl}/areas/${area.hub}/${neighborhood}`, changefreq: 'monthly', priority: '0.7' });
  });
});

function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

function generateSitemapXML(urls: Array<{ loc: string; lastmod?: string; changefreq: string; priority: string }>): string {
  const urlEntries = urls.map(url => {
    const lastmodTag = url.lastmod ? `    <lastmod>${url.lastmod}</lastmod>` : '';
    return `  <url>
    <loc>${url.loc}</loc>${lastmodTag ? '\n' + lastmodTag : ''}
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urlEntries}
</urlset>`;
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { data: blogPosts, error } = await supabase
      .from('blog_posts')
      .select('slug, published_at, updated_at')
      .eq('published', true)
      .order('published_at', { ascending: false });

    const allUrls = [...staticUrls, ...geoUrls];

    if (error) {
      console.error('Error fetching blog posts:', error);
      return new Response(
        generateSitemapXML(allUrls),
        {
          status: 200,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=3600',
          },
        }
      );
    }

    if (blogPosts && blogPosts.length > 0) {
      blogPosts.forEach(post => {
        const lastmod = post.updated_at || post.published_at;
        allUrls.push({
          loc: `${baseUrl}/blog/${post.slug}`,
          lastmod: formatDate(new Date(lastmod)),
          changefreq: 'monthly',
          priority: '0.7'
        });
      });
    }

    const sitemapXML = generateSitemapXML(allUrls);

    return new Response(sitemapXML, {
      status: 200,
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    console.error('Sitemap generation error:', error);

    const fallbackUrls = [...staticUrls, ...geoUrls];
    return new Response(
      generateSitemapXML(fallbackUrls),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/xml',
          'Cache-Control': 'public, max-age=3600',
        },
      }
    );
  }
});
