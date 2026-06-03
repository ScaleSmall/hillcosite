#!/usr/bin/env node
import { resolve4, resolveCname, resolveNs } from 'dns/promises';

const baseUrl = 'https://www.hillcopaint.com';
const pagesProjectName = 'hillcosite';
const pagesTarget = 'hillcosite.pages.dev';
const accountId = '7b68f149b6054718ad2c6ff0634ae145';
const currentSupabaseUrl = 'https://ndggkorglcaznukkhapz.supabase.co';
const retiredSupabaseUrl = 'https://oyyfpkpzalhxztpcdjgq.supabase.co';
const austinServiceSignals = new Map([
  ['/exterior-painting-austin', 'Austin exterior house painters'],
  ['/interior-painting-austin', 'Austin interior painters'],
  ['/cabinet-refinishing-austin', 'Austin cabinet painting'],
  ['/commercial-painting-austin', 'Austin commercial painters'],
]);

const failures = [];

function fail(message) {
  failures.push(message);
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      'Cache-Control': 'no-cache',
      Pragma: 'no-cache',
    },
  });
  return {
    response,
    text: await response.text(),
  };
}

async function checkDns() {
  const nsRecords = await resolveNs('hillcopaint.com');
  console.log(`DNS authority: ${nsRecords.join(', ')}`);

  let cnameRecords = [];
  try {
    cnameRecords = await resolveCname('www.hillcopaint.com');
  } catch {
    cnameRecords = [];
  }

  if (!cnameRecords.includes(pagesTarget)) {
    const aRecords = await resolve4('www.hillcopaint.com').catch(() => []);
    fail(`www.hillcopaint.com should CNAME to ${pagesTarget}; current CNAME records: ${cnameRecords.join(', ') || 'none'}; A records: ${aRecords.join(', ') || 'none'}`);
  }
}

async function checkPagesDomain() {
  const token = process.env.CLOUDFLARE_API_TOKEN;

  if (!token) {
    console.log('Cloudflare Pages domain check skipped: CLOUDFLARE_API_TOKEN is not set.');
    return;
  }

  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${accountId}/pages/projects/${pagesProjectName}/domains`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const payload = await response.json();

  if (!payload.success) {
    fail(`Cloudflare Pages domain check failed: ${JSON.stringify(payload.errors || [])}`);
    return;
  }

  const domain = payload.result?.find(item => item.name === 'www.hillcopaint.com');

  if (!domain) {
    fail('www.hillcopaint.com is not attached to the hillcosite Cloudflare Pages project.');
    return;
  }

  console.log(`Pages custom domain: ${domain.name} is ${domain.status}`);

  if (domain.status !== 'active') {
    const message = domain.verification_data?.error_message || domain.validation_data?.status || 'pending validation';
    fail(`www.hillcopaint.com Pages custom domain is ${domain.status}: ${message}`);
  }
}

async function checkSitemapPages() {
  const { response, text: sitemapXml } = await fetchText(`${baseUrl}/sitemap.xml`);

  if (response.status !== 200) {
    fail(`sitemap.xml returned ${response.status}`);
    return;
  }

  const urls = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
  let nextIndex = 0;
  const problems = [];

  async function worker() {
    while (nextIndex < urls.length) {
      const url = urls[nextIndex++];
      const page = await fetch(url, {
        redirect: 'manual',
        headers: {
          'Cache-Control': 'no-cache',
          Pragma: 'no-cache',
        },
      });
      const html = await page.text();
      const canonicalCount = [...html.matchAll(/<link\s+[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/gi)].length;
      const h1Count = [...html.matchAll(/<h1\b[^>]*>[\s\S]*?<\/h1>/gi)].length;
      const noindex =
        /<meta\s+[^>]*name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(html) ||
        /noindex/i.test(page.headers.get('x-robots-tag') || '');
      const hasError = /Something went wrong|Post Not Found|404 Not Found/i.test(html);

      if (page.status !== 200 || canonicalCount !== 1 || h1Count !== 1 || noindex || hasError) {
        problems.push({ url, status: page.status, canonicalCount, h1Count, noindex, hasError });
      }
    }
  }

  await Promise.all(Array.from({ length: 8 }, worker));

  console.log(`Live sitemap pages checked: ${urls.length}`);

  for (const problem of problems.slice(0, 10)) {
    fail(`${problem.url}: status ${problem.status}, canonicals ${problem.canonicalCount}, H1s ${problem.h1Count}, noindex ${problem.noindex}, error ${problem.hasError}`);
  }

  if (problems.length > 10) {
    fail(`${problems.length - 10} additional sitemap page problems not shown.`);
  }
}

async function checkSupabaseFeed() {
  const { response, text: html } = await fetchText(`${baseUrl}/gallery?v=${Date.now()}`);

  if (response.status !== 200) {
    fail(`/gallery returned ${response.status}`);
  }

  if (!html.includes(currentSupabaseUrl)) {
    fail(`/gallery does not include current Supabase project ${currentSupabaseUrl}`);
  }

  if (html.includes(retiredSupabaseUrl)) {
    fail(`/gallery still includes retired Supabase project ${retiredSupabaseUrl}`);
  }
}

async function checkAustinSchema() {
  for (const [route, phrase] of austinServiceSignals) {
    const { response, text: html } = await fetchText(`${baseUrl}${route}?v=${Date.now()}`);
    const scripts = [];

    for (const match of html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
      try {
        scripts.push(JSON.parse(match[1]));
      } catch {
        fail(`${route}: invalid JSON-LD script`);
      }
    }

    const serviceId = `${baseUrl}${route}#service`;
    const serviceSchemas = scripts.filter(item => {
      const schemaType = item?.['@type'];
      return (Array.isArray(schemaType) ? schemaType.includes('Service') : schemaType === 'Service') && item?.['@id'] === serviceId;
    });

    const hasSignal = serviceSchemas.some(schema =>
      Array.isArray(schema.alternateName) &&
      schema.alternateName.includes(phrase) &&
      Array.isArray(schema.keywords) &&
      schema.keywords.includes(phrase) &&
      String(schema.serviceOutput || '').includes(phrase)
    );

    if (response.status !== 200 || !hasSignal) {
      fail(`${route}: live Service schema is missing the ${phrase} alternateName, keywords, or serviceOutput signal.`);
    }
  }
}

await checkDns();
await checkPagesDomain();
await checkSitemapPages();
await checkSupabaseFeed();
await checkAustinSchema();

if (failures.length) {
  console.error('\nLive SEO verification FAILED:');
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log('\nLive SEO verification PASSED.');
