#!/usr/bin/env node
import { resolve4, resolveCname, resolveNs } from 'dns/promises';

const baseUrl = 'https://www.hillcopaint.com';
const pagesProjectName = 'hillcosite';
const pagesTarget = 'hillcosite.pages.dev';
const accountId = '7b68f149b6054718ad2c6ff0634ae145';
const currentSupabaseUrl = 'https://ndggkorglcaznukkhapz.supabase.co';
const retiredSupabaseUrl = 'https://oyyfpkpzalhxztpcdjgq.supabase.co';
const googleBusinessProfileUrl = 'https://www.google.com/search?q=Hill+Country+Painting&kgmid=/g/11frssbq6p';
const googleKnowledgeGraphId = '/g/11frssbq6p';
const austinServiceSignals = new Map([
  ['/exterior-painting-austin', 'Austin exterior house painters'],
  ['/interior-painting-austin', 'Austin interior painters'],
  ['/cabinet-refinishing-austin', 'Austin cabinet painting'],
  ['/commercial-painting-austin', 'Austin commercial painters'],
]);
const priorityLocalBusinessRoutes = [
  '/',
  '/about',
  '/services',
  '/services/interior-painting',
  '/services/exterior-painting',
  '/services/cabinet-refinishing',
  '/services/commercial',
  '/gallery',
  '/testimonials',
  '/faq',
  '/color-consultation',
  '/contact',
  '/exterior-painting-austin',
  '/interior-painting-austin',
  '/cabinet-refinishing-austin',
  '/commercial-painting-austin',
];

const failures = [];

function fail(message) {
  failures.push(message);
}

function attrs(tag) {
  const result = {};

  for (const match of tag.matchAll(/([\w:-]+)\s*=\s*(["'])(.*?)\2/g)) {
    result[match[1].toLowerCase()] = match[3];
  }

  return result;
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

function schemaTypeIncludes(item, typeName) {
  const schemaType = item?.['@type'];
  return Array.isArray(schemaType) ? schemaType.includes(typeName) : schemaType === typeName;
}

function parseJsonLd(html, route) {
  const scripts = [];

  for (const match of html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      const parsed = JSON.parse(match[1]);
      const roots = Array.isArray(parsed) ? parsed : [parsed];

      for (const root of roots) {
        if (Array.isArray(root?.['@graph'])) {
          scripts.push(...root['@graph']);
        } else {
          scripts.push(root);
        }
      }
    } catch {
      fail(`${route}: invalid JSON-LD script`);
    }
  }

  return scripts;
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
      const canonicalTags = [...html.matchAll(/<link\b[^>]*>/gi)]
        .map(match => match[0])
        .filter(tag => (attrs(tag).rel || '').toLowerCase() === 'canonical');
      const canonicalHrefs = canonicalTags.map(tag => attrs(tag).href || '');
      const canonicalCount = canonicalTags.length;
      const canonicalMatchesSelf = canonicalHrefs.length === 1 && canonicalHrefs[0] === url;
      const robotsTags = [...html.matchAll(/<meta\b[^>]*>/gi)]
        .map(match => match[0])
        .filter(tag => (attrs(tag).name || '').toLowerCase() === 'robots');
      const robotsContents = robotsTags.map(tag => attrs(tag).content || '');
      const robotsContent = robotsContents.join(' ');
      const robotsCount = robotsTags.length;
      const robotsIndexable =
        robotsCount === 1 &&
        /index,\s*follow/i.test(robotsContent) &&
        /max-image-preview:large/i.test(robotsContent) &&
        !/noindex/i.test(robotsContent);
      const h1Count = [...html.matchAll(/<h1\b[^>]*>[\s\S]*?<\/h1>/gi)].length;
      const xRobotsTag = page.headers.get('x-robots-tag') || '';
      const noindex = /noindex/i.test(robotsContent) || /noindex/i.test(xRobotsTag);
      const hasError = /Something went wrong|Post Not Found|404 Not Found/i.test(html);

      if (page.status !== 200 || canonicalCount !== 1 || !canonicalMatchesSelf || robotsCount !== 1 || !robotsIndexable || h1Count !== 1 || noindex || hasError) {
        problems.push({
          url,
          status: page.status,
          canonicalCount,
          canonicalHrefs,
          canonicalMatchesSelf,
          robotsCount,
          robotsContents,
          h1Count,
          noindex,
          hasError,
        });
      }
    }
  }

  await Promise.all(Array.from({ length: 8 }, worker));

  console.log(`Live sitemap pages checked: ${urls.length}`);

  for (const problem of problems.slice(0, 10)) {
    fail(`${problem.url}: status ${problem.status}, canonicals ${problem.canonicalCount}, canonicalSelf ${problem.canonicalMatchesSelf}, robots ${problem.robotsCount}, H1s ${problem.h1Count}, noindex ${problem.noindex}, error ${problem.hasError}`);
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

  if (response.status === 200 && html.includes(currentSupabaseUrl) && !html.includes(retiredSupabaseUrl)) {
    console.log('Live Supabase gallery feed: current project present, retired project absent');
  }
}

async function checkAustinSchema() {
  let passed = 0;

  for (const [route, phrase] of austinServiceSignals) {
    const { response, text: html } = await fetchText(`${baseUrl}${route}?v=${Date.now()}`);
    const scripts = parseJsonLd(html, route);

    const serviceId = `${baseUrl}${route}#service`;
    const serviceSchemas = scripts.filter(item => schemaTypeIncludes(item, 'Service') && item?.['@id'] === serviceId);

    const hasSignal = serviceSchemas.some(schema =>
      Array.isArray(schema.alternateName) &&
      schema.alternateName.includes(phrase) &&
      Array.isArray(schema.keywords) &&
      schema.keywords.includes(phrase) &&
      String(schema.serviceOutput || '').includes(phrase)
    );

    if (response.status !== 200 || !hasSignal) {
      fail(`${route}: live Service schema is missing the ${phrase} alternateName, keywords, or serviceOutput signal.`);
    } else {
      passed += 1;
    }
  }

  console.log(`Live Austin service schema pages checked: ${passed}/${austinServiceSignals.size}`);
}

async function checkPriorityLocalBusinessSchema() {
  let passed = 0;

  for (const route of priorityLocalBusinessRoutes) {
    const path = route === '/' ? '/' : route;
    const { response, text: html } = await fetchText(`${baseUrl}${path}?v=${Date.now()}`);
    const scripts = parseJsonLd(html, route);
    const localBusinessSchema = scripts.find(item =>
      schemaTypeIncludes(item, 'LocalBusiness') &&
      schemaTypeIncludes(item, 'PaintingContractor') &&
      item?.['@id'] === `${baseUrl}/#localbusiness`
    );

    if (response.status !== 200 || !localBusinessSchema) {
      fail(`${route}: live LocalBusiness/PaintingContractor schema is missing.`);
      continue;
    }

    const sameAs = Array.isArray(localBusinessSchema.sameAs) ? localBusinessSchema.sameAs : [];
    const identifier = localBusinessSchema.identifier;
    const hasCanonicalGbp =
      localBusinessSchema.hasMap === googleBusinessProfileUrl &&
      sameAs.includes(googleBusinessProfileUrl);
    const hasKgIdentifier =
      identifier?.propertyID === 'kgmid' &&
      identifier?.value === googleKnowledgeGraphId &&
      identifier?.url === googleBusinessProfileUrl;
    const hasCanonicalPhone = String(localBusinessSchema.telephone || '').includes('(512) 240-2246');

    if (!hasCanonicalGbp || !hasKgIdentifier || !hasCanonicalPhone) {
      fail(`${route}: live LocalBusiness schema is missing canonical GBP URL, kgmid, or phone.`);
      continue;
    }

    passed += 1;
  }

  console.log(`Live priority LocalBusiness schema pages checked: ${passed}/${priorityLocalBusinessRoutes.length}`);
}

async function checkGoogleEntityIdentifier() {
  const { response, text: html } = await fetchText(`${baseUrl}/?v=${Date.now()}`);
  const scripts = parseJsonLd(html, '/');
  const entitySchemas = scripts.filter(item => item?.['@id'] === `${baseUrl}/#organization` || item?.['@id'] === `${baseUrl}/#localbusiness`);
  const schemasWithIdentifier = entitySchemas.filter(schema =>
    schema.identifier?.propertyID === 'kgmid' &&
    schema.identifier?.value === googleKnowledgeGraphId &&
    schema.identifier?.url === googleBusinessProfileUrl
  );

  if (response.status !== 200 || schemasWithIdentifier.length < 2) {
    fail('/: live Organization and LocalBusiness schema should both include the Google Knowledge Graph ID identifier.');
    return;
  }

  console.log('Live Google entity identifier: Organization and LocalBusiness both include kgmid');
}

await checkDns();
await checkPagesDomain();
await checkSitemapPages();
await checkSupabaseFeed();
await checkAustinSchema();
await checkPriorityLocalBusinessSchema();
await checkGoogleEntityIdentifier();

if (failures.length) {
  console.error('\nLive SEO verification FAILED:');
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log('\nLive SEO verification PASSED.');
