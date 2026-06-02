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
  getAllRoutes,
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

const supabaseUrl = envVars.VITE_SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const supabaseKey = envVars.VITE_SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY;

const EXCLUDED_BLOG_SLUGS = new Set([
  'when-to-repaint-your-austin-home-hill-country-painting',
  'when-to-repaint-a-home-in-austin-hill-country-painting',
  'exterior-painting-in-austin-pros-hill-country-painting',
]);

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
  return {
    id: post.id || post.slug,
    title: post.title || post.slug,
    slug: post.slug,
    excerpt: post.excerpt || '',
    featured_image: post.featured_image || null,
    published_at: post.published_at || post.created_at || new Date().toISOString(),
    category: post.category || 'Painting Tips',
    author: post.author || 'Hill Country Painting',
    updated_at: post.updated_at || null
  };
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
  featured_image: string | null;
  published_at: string;
  category: string;
  author: string;
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
    return fallbackPosts;
  }

  try {
    const { createClient } = await import('@supabase/supabase-js').catch(() => ({ createClient: null }));
    if (!createClient) {
      const fallbackPosts = readGeneratedBlogPostsFallback();
      console.log(`  @supabase/supabase-js not available - using ${fallbackPosts.length} generated blog post fallback(s)`);
      return fallbackPosts;
    }
    const supabase = createClient(supabaseUrl, supabaseKey);
    const { data, error } = await supabase
      .from('blog_posts')
      .select('id, title, slug, excerpt, featured_image, published_at, category, author, updated_at, created_at')
      .eq('published', true)
      .order('published_at', { ascending: false });

    if (error) {
      const fallbackPosts = readGeneratedBlogPostsFallback();
      console.log(`  Warning: Could not fetch blog posts: ${error.message}`);
      console.log(`  Using ${fallbackPosts.length} generated blog post fallback(s)`);
      return fallbackPosts;
    }

    return (data || [])
      .filter(post => post.slug && !EXCLUDED_BLOG_SLUGS.has(post.slug))
      .map(sanitizeBlogPost);
  } catch (err) {
    const fallbackPosts = readGeneratedBlogPostsFallback();
    console.log(`  Warning: Error fetching blog posts: ${err.message}`);
    console.log(`  Using ${fallbackPosts.length} generated blog post fallback(s)`);
    return fallbackPosts;
  }
}

const generateSitemap = async () => {
  console.log('Generating sitemap...');

  const lastmod = new Date().toISOString().split('T')[0];
  const staticRoutes = getAllRoutes();

  let blogPosts = [];
  try {
    blogPosts = await fetchBlogPosts();
  } catch (err) {
    console.log(`  Warning: Blog fetch failed, continuing with static routes only`);
  }

  writeGeneratedBlogPosts(blogPosts);

  const blogRoutes = blogPosts.map(post => ({
    path: `/blog/${post.slug}`,
    changefreq: 'weekly',
    priority: '0.6',
    lastmod: post.updated_at ? new Date(post.updated_at).toISOString().split('T')[0] : null
  }));

  const allRoutes = [...staticRoutes, ...blogRoutes];
  const spaRoutes = [
    ...getPrerenderPaths(),
    ...blogRoutes.map(route => route.path),
  ];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
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
