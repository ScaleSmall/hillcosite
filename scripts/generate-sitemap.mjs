#!/usr/bin/env node
/**
 * Sitemap Generator
 *
 * Generates sitemap.xml from the canonical route data in routeData.mjs.
 * Handles Supabase blog post fetching gracefully when unavailable.
 */

import { writeFileSync, readFileSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import {
  BASE_URL,
  getAllRoutes
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

async function fetchBlogPosts() {
  if (!supabaseUrl || !supabaseKey) {
    console.log('  Supabase credentials not found - skipping blog posts');
    return [];
  }

  try {
    const { createClient } = await import('@supabase/supabase-js').catch(() => ({ createClient: null }));
    if (!createClient) {
      console.log('  @supabase/supabase-js not available - skipping blog posts');
      return [];
    }
    const supabase = createClient(supabaseUrl, supabaseKey);
    const { data, error } = await supabase
      .from('blog_posts')
      .select('slug, updated_at')
      .eq('published', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.log(`  Warning: Could not fetch blog posts: ${error.message}`);
      return [];
    }

    return (data || [])
      .filter(post => !EXCLUDED_BLOG_SLUGS.has(post.slug))
      .map(post => ({
        path: `/blog/${post.slug}`,
        changefreq: 'weekly',
        priority: '0.6',
        lastmod: post.updated_at ? new Date(post.updated_at).toISOString().split('T')[0] : null
      }));
  } catch (err) {
    console.log(`  Warning: Error fetching blog posts: ${err.message}`);
    return [];
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

  const allRoutes = [...staticRoutes, ...blogPosts];

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

  console.log(`Sitemap generated: ${outputPath}`);
  console.log(`  Static pages: ${staticRoutes.length}`);
  console.log(`  Blog posts: ${blogPosts.length}`);
  console.log(`  Total URLs: ${allRoutes.length}`);
};

generateSitemap().catch(err => {
  console.error('Sitemap generation failed:', err.message);
  process.exit(1);
});
