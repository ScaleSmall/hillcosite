import { createClient } from 'npm:@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
};

const staticUrls = [
  { loc: 'https://hillcopaint.com/', changefreq: 'weekly', priority: '1.0' },
  { loc: 'https://hillcopaint.com/about', changefreq: 'monthly', priority: '0.8' },
  { loc: 'https://hillcopaint.com/services', changefreq: 'monthly', priority: '0.9' },
  { loc: 'https://hillcopaint.com/services/interior-painting', changefreq: 'monthly', priority: '0.9' },
  { loc: 'https://hillcopaint.com/services/exterior-painting', changefreq: 'monthly', priority: '0.9' },
  { loc: 'https://hillcopaint.com/services/cabinet-refinishing', changefreq: 'monthly', priority: '0.9' },
  { loc: 'https://hillcopaint.com/services/commercial', changefreq: 'monthly', priority: '0.8' },
  { loc: 'https://hillcopaint.com/gallery', changefreq: 'weekly', priority: '0.7' },
  { loc: 'https://hillcopaint.com/testimonials', changefreq: 'monthly', priority: '0.6' },
  { loc: 'https://hillcopaint.com/faq', changefreq: 'monthly', priority: '0.6' },
  { loc: 'https://hillcopaint.com/service-areas', changefreq: 'monthly', priority: '0.7' },
  { loc: 'https://hillcopaint.com/service-areas/pflugerville-wells-branch', changefreq: 'monthly', priority: '0.8' },
  { loc: 'https://hillcopaint.com/service-areas/taylor-hutto', changefreq: 'monthly', priority: '0.8' },
  { loc: 'https://hillcopaint.com/service-areas/cedar-park', changefreq: 'monthly', priority: '0.8' },
  { loc: 'https://hillcopaint.com/service-areas/leander', changefreq: 'monthly', priority: '0.8' },
  { loc: 'https://hillcopaint.com/service-areas/round-rock-georgetown', changefreq: 'monthly', priority: '0.9' },
  { loc: 'https://hillcopaint.com/service-areas/west-lake-hills', changefreq: 'monthly', priority: '0.7' },
  { loc: 'https://hillcopaint.com/contact', changefreq: 'monthly', priority: '0.8' },
  { loc: 'https://hillcopaint.com/color-consultation', changefreq: 'monthly', priority: '0.7' },
  { loc: 'https://hillcopaint.com/guides/painting-costs-round-rock', changefreq: 'monthly', priority: '0.8' },
  { loc: 'https://hillcopaint.com/guides/best-paint-texas-heat', changefreq: 'monthly', priority: '0.8' },
  { loc: 'https://hillcopaint.com/guides/hoa-color-tips-round-rock', changefreq: 'monthly', priority: '0.8' },
  { loc: 'https://hillcopaint.com/guides/how-often-paint-central-texas', changefreq: 'monthly', priority: '0.8' },
  { loc: 'https://hillcopaint.com/privacy', changefreq: 'yearly', priority: '0.3' },
  { loc: 'https://hillcopaint.com/terms', changefreq: 'yearly', priority: '0.3' },
  { loc: 'https://hillcopaint.com/do-not-sell', changefreq: 'yearly', priority: '0.3' },
  { loc: 'https://hillcopaint.com/blog', changefreq: 'weekly', priority: '0.7' },
];

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
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
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

    if (error) {
      console.error('Error fetching blog posts:', error);
      return new Response(
        generateSitemapXML(staticUrls),
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

    const allUrls = [...staticUrls];

    if (blogPosts && blogPosts.length > 0) {
      blogPosts.forEach(post => {
        const lastmod = post.updated_at || post.published_at;
        allUrls.push({
          loc: `https://hillcopaint.com/blog/${post.slug}`,
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

    return new Response(
      generateSitemapXML(staticUrls),
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