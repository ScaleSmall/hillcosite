#!/usr/bin/env node
/**
 * Sitemap Generator
 *
 * Generates sitemap.xml from the canonical route data in routeData.mjs.
 * Handles Supabase blog post fetching gracefully when unavailable.
 */

import { mkdirSync, writeFileSync, readFileSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import {
  BASE_URL,
  getSitemapRoutes,
  getPrerenderPaths
} from '../src/config/routeData.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const envVars = {};
try {
  const envPath = resolve(__dirname, '../.env');
  const envContent = readFileSync(envPath, 'utf-8');
  envContent.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split('=');
    if (key && valueParts.length) {
      envVars[key.trim()] = valueParts.join('=').trim();
    }
  });
} catch {
  console.log('  .env not found - using process.env');
}

function readPublicRuntimeEnv() {
  const envPath = resolve(__dirname, '../public/env.js');

  try {
    const source = readFileSync(envPath, 'utf-8');
    const urlMatch = source.match(/VITE_SUPABASE_URL:\s*["']([^"']+)["']/);
    const keyMatch = source.match(/VITE_SUPABASE_ANON_KEY:\s*["']([^"']+)["']/);

    return {
      VITE_SUPABASE_URL: urlMatch?.[1] || '',
      VITE_SUPABASE_ANON_KEY: keyMatch?.[1] || ''
    };
  } catch {
    return {};
  }
}

const runtimeEnvVars = readPublicRuntimeEnv();
const supabaseUrl = envVars.VITE_SUPABASE_URL || process.env.VITE_SUPABASE_URL || runtimeEnvVars.VITE_SUPABASE_URL;
const supabaseKey = envVars.VITE_SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY || runtimeEnvVars.VITE_SUPABASE_ANON_KEY;

const EXCLUDED_BLOG_SLUGS = new Set([
  'when-to-repaint-your-austin-home-hill-country-painting',
  'when-to-repaint-a-home-in-austin-hill-country-painting',
  'exterior-painting-in-austin-pros-hill-country-painting',
]);
const BLOG_POST_CORRECTIONS = new Map([
  [
    'what-should-i-know-before-hiring-an-interior-painter-in-austin-2',
    {
      title: 'Questions to Ask Before Hiring an Interior Painter in Austin'
    }
  ],
  [
    'how-to-deterimine-the-best-austin-exterior-house-painters',
    {
      title: 'How to Determine the Best Austin Exterior House Painters',
      slug: 'how-to-determine-the-best-austin-exterior-house-painters'
    }
  ]
]);
const REQUIRED_BLOG_POSTS = [
  {
    id: 'required-how-to-determine-the-best-austin-exterior-house-painters',
    title: 'How to Determine the Best Austin Exterior House Painters',
    slug: 'how-to-determine-the-best-austin-exterior-house-painters',
    excerpt: 'Use prep standards, coating system, proof of insurance, warranty terms, and a written scope to compare Austin exterior house painters.',
    content: `<section class="intro-section">
  <h2 id="choosing-exterior-painters">Choosing Exterior Painters in Austin</h2>
  <p>The best Austin exterior house painters are the ones who explain surface preparation, product selection, access planning, warranty coverage, and schedule expectations before work begins. A useful estimate should describe the full scope of work rather than leaning on hourly ranges or vague square-foot shortcuts.</p>
</section>
<section class="selection-criteria">
  <h2 id="selection-criteria">What to Compare</h2>
  <ul>
    <li><strong>Prep standards:</strong> washing, scraping, sanding, caulking, spot priming, and repairs should be spelled out clearly.</li>
    <li><strong>Coating system:</strong> primer, finish product, sheen, and number of coats should match the siding, trim, and exposure.</li>
    <li><strong>Local experience:</strong> Austin heat, sun exposure, masonry, stucco, and HOA requirements all affect exterior paint planning.</li>
    <li><strong>Proof and protection:</strong> insurance, warranty terms, jobsite cleanup, and communication expectations should be included in writing.</li>
  </ul>
</section>
<section class="pricing">
  <h2 id="pricing">How Pricing Should Be Framed</h2>
  <p>Professional exterior painting should be priced from a written project scope. The final range depends on surface condition, height, access, repairs, coating system, color changes, and scheduling requirements. That scope-first approach helps homeowners compare value, not just a thin estimate.</p>
</section>
<section class="next-steps">
  <h2 id="next-steps">Next Steps</h2>
  <p>Before hiring an exterior painter, ask for a clear walkthrough of prep, products, warranty, and project sequence. Hill Country Painting can review your Austin-area exterior and provide a written recommendation for the right scope.</p>
</section>`,
    tldr: 'Compare Austin exterior painters by written scope, prep standards, coating system, insurance, warranty, and local exterior experience.',
    featured_image: null,
    featured_image_alt: 'Austin exterior house painting preparation checklist',
    featured_image_title: 'How to Determine the Best Austin Exterior House Painters',
    featured_image_caption: 'Compare exterior painters by scope, prep, coating system, and warranty.',
    published_at: '2026-02-19T00:00:00.000Z',
    category: 'Painting Tips',
    author: 'Hill Country Painting',
    meta_description: 'Learn how to choose Austin exterior house painters by comparing prep standards, coating systems, warranty terms, and written project scope.',
    meta_keywords: 'Austin exterior house painters, exterior painting Austin, house painters Austin',
    updated_at: '2026-07-10T00:00:00.000Z'
  }
];

function localIsoDate(date = new Date()) {
  const localTime = date.getTime() - date.getTimezoneOffset() * 60_000;

  return new Date(localTime).toISOString().split('T')[0];
}

function readGeneratedBlogPostsFallback() {
  const fallbackPath = resolve(__dirname, '../src/generated/blogPosts.ts');

  try {
    const source = readFileSync(fallbackPath, 'utf-8');
    const match = source.match(/export const generatedBlogPosts: GeneratedBlogPost\[\] = (\[[\s\S]*?\]);/);

    if (!match) {
      return [];
    }

    return JSON.parse(match[1]).map(sanitizeBlogPost);
  } catch (error) {
    console.log(`  Blog post fallback unavailable: ${error.message}`);
    return [];
  }
}

function sanitizeBlogPost(post) {
  const correctedSlug = blogPathSlug(post.slug || '');
  const correction = BLOG_POST_CORRECTIONS.get(correctedSlug);
  const title = correction?.title || post.title || post.slug;
  const normalizePremiumPositioning = value => String(value || '')
    .replace(/lowest\s+bid/g, 'thinnest scope')
    .replace(/Low[-\s]+bid/g, 'Thin-scope')
    .replace(/low[-\s]+bid/g, 'thin-scope')
    .replace(/cheapest\s+bid/g, 'thinnest estimate')
    .replace(/chea[p]er\s+estimate/g, 'thin estimate');
  const replaceSubMinimumCostRanges = value => value
    .replace(
      /ranges?\s+from\s+\$([0-9][0-9,]*)(?:\s*(?:-|to|\u2013|\u2014)\s*\$?([0-9][0-9,]*))\s+per\s+gallon/gi,
      (match, lowText, highText) => {
        const low = Number(String(lowText).replace(/,/g, ''));
        const high = Number(String(highText).replace(/,/g, ''));

        if (Number.isFinite(low) && Number.isFinite(high) && (low < 6000 || high < 6000)) {
          return 'varies by product line, substrate, color, and warranty requirements';
        }

        return match;
      }
    )
    .replace(
      /\$([0-9][0-9,]*)(?:\s*(?:-|to|\u2013|\u2014)\s*\$?([0-9][0-9,]*))/gi,
      (match, lowText, highText) => {
        const low = Number(String(lowText).replace(/,/g, ''));
        const high = Number(String(highText).replace(/,/g, ''));

        if (Number.isFinite(low) && Number.isFinite(high) && (low < 6000 || high < 6000)) {
          return 'a written, scope-based professional project range';
        }

        return match;
      }
    )
    .replace(
      /\$([0-9][0-9,]*)(?=\s*(?:per\s*(?:hour|hr)|\/\s*(?:hour|hr)|an\s*hour|hourly))/gi,
      'scope-based professional pricing'
    );
  const normalizeCostCopy = value => replaceSubMinimumCostRanges(normalizePremiumPositioning(value))
    .replace(
      /interior painting costs range from \$6,000 to \$16,000, with an average cost of \$8,000/g,
      'full-scope interior painting often ranges from $6,500 to $16,000 once preparation, room count, ceiling height, and finish expectations are reviewed'
    )
    .replace(
      /the cost typically ranges from \$6,000 to \$12,000, with an average cost of \$9,000/g,
      'full-scope interior projects often range from $6,500 to $12,500 after room count, preparation, finish level, and schedule are reviewed'
    )
    .replace(
      /ranges from \$6,000 to \$12,000 for a 2,500 square foot home, with an average cost of around \$9,000/g,
      'often starts above the professional project floor for a 2,500 square foot home, with the final range shaped by preparation, room count, finish level, and schedule'
    );
  const normalizeImageText = value => {
    if (!value) return null;
    const text = normalizeCostCopy(value);
    return post.title ? text.replace(post.title, title) : text;
  };

  return {
    id: post.id || post.slug,
    title,
    slug: correction?.slug || post.slug,
    excerpt: normalizeCostCopy(post.excerpt),
    content: normalizeCostCopy(post.content),
    tldr: post.tldr ? normalizeCostCopy(post.tldr) : null,
    featured_image: post.featured_image || null,
    featured_image_alt: normalizeImageText(post.featured_image_alt),
    featured_image_title: normalizeImageText(post.featured_image_title),
    featured_image_caption: normalizeImageText(post.featured_image_caption),
    published_at: post.published_at || post.created_at || new Date().toISOString(),
    category: post.category || 'Painting Tips',
    author: post.author || 'Hill Country Painting',
    meta_description: post.meta_description ? normalizeCostCopy(post.meta_description) : null,
    meta_keywords: post.meta_keywords || null,
    updated_at: post.updated_at || null
  };
}

function withRequiredBlogPosts(posts) {
  const postsBySlug = new Map();

  for (const post of [...posts, ...REQUIRED_BLOG_POSTS]) {
    const sanitizedPost = sanitizeBlogPost(post);
    const slug = blogPathSlug(sanitizedPost.slug);

    if (!slug || EXCLUDED_BLOG_SLUGS.has(slug) || postsBySlug.has(slug)) {
      continue;
    }

    postsBySlug.set(slug, {
      ...sanitizedPost,
      slug
    });
  }

  return [...postsBySlug.values()].sort((a, b) =>
    new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
  );
}

function blogPathSlug(slug) {
  return slug
    .trim()
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function writeGeneratedBlogPosts(posts) {
  const outputDir = resolve(__dirname, '../src/generated');
  const outputPath = resolve(outputDir, 'blogPosts.ts');
  const serializablePosts = posts.map(sanitizeBlogPost);

  mkdirSync(outputDir, { recursive: true });
  writeFileSync(outputPath, `export interface GeneratedBlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  tldr: string | null;
  featured_image: string | null;
  featured_image_alt: string | null;
  featured_image_title: string | null;
  featured_image_caption: string | null;
  published_at: string;
  category: string;
  author: string;
  meta_description: string | null;
  meta_keywords: string | null;
  updated_at: string | null;
}

export const generatedBlogPosts: GeneratedBlogPost[] = ${JSON.stringify(serializablePosts, null, 2)};
`, 'utf-8');

  console.log(`Generated blog post module: ${outputPath}`);
  console.log(`  Blog posts in module: ${serializablePosts.length}`);
}

function writeGeneratedSitemapFunction(sitemapXml, urlCount) {
  const outputDir = resolve(__dirname, '../functions');
  const outputPath = resolve(outputDir, 'generatedSitemap.ts');

  mkdirSync(outputDir, { recursive: true });
  writeFileSync(outputPath, `export const generatedSitemapUrlCount = ${urlCount};

export const generatedSitemapXml = ${JSON.stringify(sitemapXml)};
`, 'utf-8');

  console.log(`Generated sitemap function module: ${outputPath}`);
  console.log(`  Sitemap URLs in function module: ${urlCount}`);
}

function writeGeneratedSpaRoutes(routes) {
  const outputDir = resolve(__dirname, '../functions');
  const outputPath = resolve(outputDir, 'generatedRoutes.ts');
  const uniqueRoutes = [...new Set(routes)].sort((a, b) => a.localeCompare(b));

  mkdirSync(outputDir, { recursive: true });
  writeFileSync(outputPath, `export const generatedSpaRouteCount = ${uniqueRoutes.length};

export const generatedSpaRoutes = ${JSON.stringify(uniqueRoutes, null, 2)} as const;
`, 'utf-8');

  console.log(`Generated Cloudflare route module: ${outputPath}`);
  console.log(`  SPA routes in function module: ${uniqueRoutes.length}`);
}

async function fetchBlogPosts() {
  if (!supabaseUrl || !supabaseKey) {
    const fallbackPosts = readGeneratedBlogPostsFallback();
    console.log(`  Supabase credentials not found - using ${fallbackPosts.length} generated blog post fallback(s)`);
    return withRequiredBlogPosts(fallbackPosts);
  }

  try {
    const { createClient } = await import('@supabase/supabase-js').catch(() => ({ createClient: null }));
    if (!createClient) {
      const fallbackPosts = readGeneratedBlogPostsFallback();
      console.log(`  @supabase/supabase-js not available - using ${fallbackPosts.length} generated blog post fallback(s)`);
      return withRequiredBlogPosts(fallbackPosts);
    }
    const supabase = createClient(supabaseUrl, supabaseKey);
    const { data, error } = await supabase
      .from('blog_posts')
      .select('id, title, slug, excerpt, content, tldr, featured_image, featured_image_alt, featured_image_title, featured_image_caption, published_at, category, author, meta_description, meta_keywords, updated_at, created_at')
      .eq('published', true)
      .order('published_at', { ascending: false });

    if (error) {
      const fallbackPosts = readGeneratedBlogPostsFallback();
      console.log(`  Warning: Could not fetch blog posts: ${error.message}`);
      console.log(`  Using ${fallbackPosts.length} generated blog post fallback(s)`);
      return withRequiredBlogPosts(fallbackPosts);
    }

    return withRequiredBlogPosts(
      (data || [])
        .filter(post => post.slug && !EXCLUDED_BLOG_SLUGS.has(blogPathSlug(post.slug)))
        .map(sanitizeBlogPost)
    );
  } catch (err) {
    const fallbackPosts = readGeneratedBlogPostsFallback();
    console.log(`  Warning: Error fetching blog posts: ${err.message}`);
    console.log(`  Using ${fallbackPosts.length} generated blog post fallback(s)`);
    return withRequiredBlogPosts(fallbackPosts);
  }
}

const generateSitemap = async () => {
  console.log('Generating sitemap...');

  const lastmod = localIsoDate();
  const staticRoutes = getSitemapRoutes();

  let blogPosts = [];
  try {
    blogPosts = await fetchBlogPosts();
  } catch (err) {
    console.log(`  Warning: Blog fetch failed, continuing with static routes only`);
  }

  writeGeneratedBlogPosts(blogPosts);

  const blogRoutes = blogPosts.map(post => ({
    path: `/blog/${blogPathSlug(post.slug)}`,
    changefreq: 'weekly',
    priority: '0.6',
    lastmod: post.updated_at ? new Date(post.updated_at).toISOString().split('T')[0] : null
  }));

  const allRoutes = [...staticRoutes, ...blogRoutes];
  const spaRoutes = [
    ...getPrerenderPaths(),
    ...blogRoutes.map(route => route.path),
  ];

  let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${allRoutes.map(route => `  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${route.lastmod || lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
  sitemapXml = sitemapXml.replace(/\r\n/g, '\n');

  const outputPath = resolve(__dirname, '../public/sitemap.xml');
  writeFileSync(outputPath, sitemapXml, 'utf-8');
  writeGeneratedSitemapFunction(sitemapXml, allRoutes.length);
  writeGeneratedSpaRoutes(spaRoutes);

  console.log(`Sitemap generated: ${outputPath}`);
  console.log(`  Static pages: ${staticRoutes.length}`);
  console.log(`  Blog posts: ${blogPosts.length}`);
  console.log(`  Total URLs: ${allRoutes.length}`);
};

generateSitemap().catch(err => {
  console.error('Sitemap generation failed:', err.message);
  process.exit(1);
});
