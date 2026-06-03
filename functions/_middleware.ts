/**
 * Cloudflare Pages Middleware — Consolidated Routing
 *
 * Handles ALL routing logic in one place:
 *   1. Static asset pass-through (JS, CSS, images, fonts, etc.)
 *   2. Trailing-slash canonicalization (301)
 *   3. Legacy 301 redirects (old CMS paths → current canonical URLs)
 *   4. Static asset fallback for extensionless assets
 *   5. 404 fallback (/404.html with 404 status)
 *
 * This replaces the previous split between _middleware.ts (redirects only)
 * and _redirects (SPA rewrites). The split caused SPA routes to break
 * because Cloudflare Pages does not reliably apply _redirects rewrite
 * rules after a middleware calls next().
 */
import { generatedSitemapUrlCount, generatedSitemapXml } from './generatedSitemap';
import { generatedSpaRoutes } from './generatedRoutes';

// ---------------------------------------------------------------------------
// 1. STATIC ASSET DETECTION
// ---------------------------------------------------------------------------
const STATIC_EXT =
  /\.(js|mjs|css|html|json|xml|txt|ico|png|jpg|jpeg|gif|svg|webp|avif|woff|woff2|ttf|eot|map|webmanifest|php|pdf|zip|tar|gz|mp4|webm|ogg|mp3|wav)$/i;

function isStaticAsset(path: string): boolean {
  return STATIC_EXT.test(path);
}

// ---------------------------------------------------------------------------
// 2. LEGACY 301 REDIRECTS
// ---------------------------------------------------------------------------
const REDIRECTS: Record<string, string> = {
  // -- City / legacy city pages --
  '/pflugerville':         '/service-areas',
  '/hutto':                '/service-areas',
  '/round-rock':           '/service-areas/round-rock',
  '/round-rock-2':         '/service-areas/round-rock',
  '/leander':              '/service-areas/leander',
  '/cedar-park':           '/service-areas/cedar-park',
  '/north-austin':         '/service-areas/north-austin',
  '/austin':               '/service-areas/austin',
  '/georgetown':           '/service-areas/georgetown',

  // -- Old /service-area/* and merged paths --
  '/service-area':                            '/service-areas',
  '/service-areas/round-rock-georgetown':     '/service-areas/round-rock',
  '/service-areas/taylor-hutto':              '/service-areas',
  '/service-areas/wells-branch':              '/service-areas',
  '/service-areas/pflugerville':              '/service-areas',
  '/service-areas/pflugerville-wells-branch': '/service-areas',

  // -- Old /service/* singular CMS paths --
  '/service/living-room-painting':                        '/services/interior-painting',
  '/service/living-room-painting-round-rock':             '/services/interior-painting',
  '/service/office-painting-round-rock':                  '/services/commercial',
  '/service/commercial-kitchen-painting-round-rock':      '/services/commercial',
  '/service/industrial-facility-painting-round-rock':     '/services/commercial',
  '/service/hotel-painting-round-rock':                   '/services/commercial',
  '/service/house-painting-round-rock':                   '/services',
  '/service/residential-deck-painting-round-rock':        '/services/exterior-painting',
  '/service/residential-deck-painting':                   '/services/exterior-painting',
  '/service/residential-concrete-painting-round-rock':    '/services/exterior-painting',
  '/service/residential-concrete-painting':               '/services/exterior-painting',
  '/service/residential-fence-painting-round-rock':       '/services/exterior-painting',
  '/service/residential-fence-painting':                  '/services/exterior-painting',
  '/service/residential-fence-staining-round-rock':       '/services/exterior-painting',
  '/service/residential-fence-staining':                  '/services/exterior-painting',
  '/service/residential-porch-painting-round-rock':       '/services/exterior-painting',
  '/service/residential-garage-door-painting-round-rock': '/services',
  '/service/garage-painting':                            '/services',
  '/service/residential-stucco-painting':                 '/services/exterior-painting',
  '/service/garage-painting-round-rock':                  '/services',
  '/service/mobile-home-painting':                        '/services',
  '/service/mobile-home-painting-round-rock':             '/services',
  '/service/townhouse-painting-round-rock':               '/services',
  '/service/custom-home-painting':                        '/services',
  '/service/custom-home-painting-round-rock':             '/services',
  '/service/residential-foyer-painting-round-rock':       '/services/interior-painting',
  '/service/residential-hallway-painting-round-rock':     '/services/interior-painting',

  // -- Old gallery/project URLs --
  '/project':                                             '/gallery',
  '/projects':                                            '/gallery',

  // -- Old service page patterns (no /services/ prefix) --
  '/interior-painting':                          '/services/interior-painting',
  '/exterior-painting':                          '/services/exterior-painting',
  '/cabinet-refinishing':                        '/services/cabinet-refinishing',
  '/cabinet-refinishing-pflugerville':           '/services/cabinet-refinishing',
  '/cabinet-painting':                           '/services/cabinet-refinishing',
  '/commercial-painting':                        '/services/commercial',
  '/commercial-interior-painting':               '/services/commercial',
  '/residential-interior-painting':              '/services/interior-painting',
  '/residential-exterior-painting':              '/services/exterior-painting',
  '/residential-interior-painting-round-rock':   '/services/interior-painting',
  '/residential-exterior-painting-round-rock':   '/services/exterior-painting',
  '/residential-concrete-painting-round-rock':   '/services/exterior-painting',
  '/residential-concrete-painting':              '/services/exterior-painting',
  '/residential-painting':                       '/services',
  '/residential-painting-round-rock':            '/services',
  '/residential-building-painting':              '/services',
  '/residential-building-painting-round-rock':   '/services',
  '/commercial-building-painting':               '/services/commercial',
  '/commercial-building-painting-round-rock':    '/services/commercial',
  '/commercial-interior-painting-round-rock':    '/services/commercial',
  '/commercial-exterior-painting-round-rock':    '/services/commercial',
  '/commercial-concrete-painting-round-rock':    '/services/commercial',
  '/house-painting-austin':                      '/services',
  '/house-painting-round-rock':                  '/services',
  '/painting-contractor-austin':                 '/services',
  '/painting-contractor-round-rock':             '/services',
  '/painting-company-austin':                    '/services',
  '/services/wood-staining':                     '/services/exterior-painting',
  '/services/masonry-priming':                   '/services/exterior-painting',
  '/services/priming-and-prep':                  '/services/exterior-painting',
  '/services/masonry-restoration':               '/services/exterior-painting',
  '/services/masonry-painting':                  '/services/exterior-painting',
  '/services/caulking-and-repair':               '/services/exterior-painting',
  '/services/masonry-coatings':                  '/services/exterior-painting',
  '/services/pressure-washing':                  '/services/exterior-painting',
  '/services/lead-safe-painting':                '/services/exterior-painting',

  // -- Guide variant redirects --
  '/guides/painting-costs-round-rock': '/guides/painting-costs-austin',
  '/guides/hoa-color-tips-round-rock':  '/guides/hoa-color-tips-austin',

  // -- Utility page redirects --
  '/privacy-policy':        '/privacy',
  '/free-estimate':         '/contact',
  '/get-a-free-estimate':   '/contact',

  // -- Broken area URL fix --
  '/areas/downtown-austin-luxury/old-west-austin': '/areas/downtown-austin-luxury/old-west-austin-central',

  // -- GSC 404 fixes: old blog slugs that no longer exist --
  '/blog/when-to-repaint-a-home-in-austin-hill-country-painting':            '/blog',

  // -- GSC 404 fixes: old service-location URLs that don't match current pattern --
  '/exterior-painting-taylor':            '/services/exterior-painting',
  '/commercial-tarrytown':                '/commercial-painting-tarrytown',

  // -- Explicit canonical slash-variants for live 301 coverage --
  '/services/':                   '/services',
  '/service-areas/':              '/service-areas',
  '/blog/':                       '/blog',
  '/contact/':                    '/contact',
  '/about/':                      '/about',
  '/faq/':                        '/faq',
  '/gallery/':                    '/gallery',
  '/testimonials/':               '/testimonials',
  '/privacy/':                    '/privacy',
  '/terms/':                      '/terms',
  '/eula/':                       '/eula',
  '/do-not-sell/':                '/do-not-sell',
  '/financing/':                  '/financing',
  '/pre-approval/':               '/pre-approval',
  '/search/':                     '/search',
};

const PATTERN_REDIRECTS: Array<{ pattern: RegExp; target: string }> = [
  { pattern: /^\/residential-interior-/i, target: '/services/interior-painting' },
  { pattern: /^\/residential-exterior-/i, target: '/services/exterior-painting' },
  { pattern: /^\/residential-cabinet-/i, target: '/services/cabinet-refinishing' },
  { pattern: /^\/commercial-.*painting/i, target: '/services/commercial' },
  { pattern: /^\/commercial-interior-/i, target: '/services/commercial' },
  { pattern: /^\/commercial-exterior-/i, target: '/services/commercial' },
  { pattern: /^\/industrial-/i, target: '/services/commercial' },
  { pattern: /^\/hotel-/i, target: '/services/commercial' },
  { pattern: /^\/service\/.*(interior|living-room|bedroom|nursery|kitchen|foyer|hallway|dining-room|bathroom|ceiling|trim|door).*painting/i, target: '/services/interior-painting' },
  { pattern: /^\/service\/.*(exterior|deck|fence|porch|stucco).*painting/i, target: '/services/exterior-painting' },
  { pattern: /^\/service\/.*cabinet/i, target: '/services/cabinet-refinishing' },
  { pattern: /^\/service\/.*commercial/i, target: '/services/commercial' },
];

function redirect(location: string, origin: string): Response {
  return Response.redirect(new URL(location, origin).toString(), 301);
}

// ---------------------------------------------------------------------------
// 3. ROUTE TABLE
//    Exact-match set generated from the same source as sitemap.xml.
//    These routes are allowed to resolve to static prerendered HTML.
// ---------------------------------------------------------------------------
const SPA_ROUTES: Set<string> = new Set(generatedSpaRoutes);
const CURRENT_SUPABASE_URL = 'https://ndggkorglcaznukkhapz.supabase.co';
const RETIRED_SUPABASE_URLS = ['https://oyyfpkpzalhxztpcdjgq.supabase.co'];
const AUSTIN_SERVICE_SCHEMA_SIGNALS: Record<string, string> = {
  '/exterior-painting-austin': 'Austin exterior house painters',
  '/interior-painting-austin': 'Austin interior painters',
  '/cabinet-refinishing-austin': 'Austin cabinet painting',
  '/commercial-painting-austin': 'Austin commercial painters',
};
const GUIDE_FAQ_SCHEMA_FALLBACKS: Record<string, Array<{ question: string; answer: string }>> = {
  '/guides/best-paint-texas-heat': [
    {
      question: 'What is the best exterior paint for Texas heat?',
      answer: '100% acrylic latex paint is the best choice for Texas heat. It offers superior UV resistance, flexibility with temperature changes, and excellent color retention even in extreme temperatures.',
    },
    {
      question: 'Should I choose light or dark colors for my Central Texas home?',
      answer: 'Light colors are generally better for Texas heat as they reflect sunlight and stay cooler. However, high-quality paints allow for medium and even some dark colors if properly applied.',
    },
    {
      question: 'How often should I repaint my house exterior in Texas?',
      answer: "With quality paint and proper preparation, exterior paint should last 7-12 years in Texas. Signs it's time to repaint include fading, chalking, or peeling paint.",
    },
    {
      question: 'Does paint brand matter in Texas heat?',
      answer: 'Yes, brand quality matters significantly in Texas. Premium brands like Sherwin Williams, Benjamin Moore, and PPG offer superior heat and UV resistance compared to budget options.',
    },
    {
      question: 'Can I paint my house in summer in Central Texas?',
      answer: 'Yes, but timing matters. Early morning or late afternoon painting is best. Professional painters know how to work safely and effectively in Texas heat with proper techniques.',
    },
  ],
  '/guides/hoa-color-tips-austin': [
    {
      question: 'Do I need HOA approval to paint my Austin home?',
      answer: 'Most Austin neighborhoods with HOAs require approval for exterior paint colors. Check your HOA covenants or contact your HOA management company to confirm requirements and get the approval process started.',
    },
    {
      question: 'How long does HOA paint approval take in Austin?',
      answer: 'Typical approval time is 2-4 weeks, but can vary by HOA. Submit your paint color request early in your planning process to avoid delays. Some HOAs meet monthly, which can extend the timeline.',
    },
    {
      question: 'What happens if I paint without HOA approval?',
      answer: "Painting without approval can result in fines, forced repainting at your expense, or legal action. It's always better to get approval first, even if it delays your project slightly.",
    },
    {
      question: 'Can Hill Country Painting help with HOA approval?',
      answer: "Yes! We're familiar with Austin HOA requirements and can help you choose pre-approved colors, prepare submission materials, and work within HOA guidelines for your painting project.",
    },
    {
      question: "What if my desired color isn't on the HOA approved list?",
      answer: "You can sometimes request approval for non-listed colors by submitting a detailed proposal. We can help prepare color samples and justification for your HOA's consideration.",
    },
  ],
  '/guides/how-often-paint-central-texas': [
    {
      question: 'How often should I paint my house exterior in Austin?',
      answer: "In Austin's hot climate, most homes need exterior painting every 7-10 years with quality paint, or 5-7 years with standard paint. South and west-facing sides may need attention sooner due to intense sun exposure.",
    },
    {
      question: "What are the signs it's time to repaint my Austin home?",
      answer: 'Look for fading colors, chalking (powdery residue), peeling or cracking paint, bare wood showing through, or paint that feels brittle. In Texas, these signs often appear first on sun-exposed surfaces.',
    },
    {
      question: "Do I need to paint more often because of Austin's climate?",
      answer: 'Yes, Texas heat, intense UV rays, and humidity can accelerate paint deterioration. Quality paint and proper preparation help extend the time between repaints, but expect slightly more frequent maintenance than cooler climates.',
    },
    {
      question: "What's the best time of year to paint in Austin?",
      answer: 'Spring (March-May) and fall (October-November) offer the best conditions. Summer can work for interior projects or early morning exterior work, but avoid painting in direct sunlight or temperatures above 85°F.',
    },
    {
      question: 'How can I make paint last longer in Texas heat?',
      answer: 'Use high-quality 100% acrylic paint, ensure proper surface preparation, choose lighter colors that reflect heat, and maintain your home (clean gutters, trim vegetation) to reduce moisture and damage.',
    },
    {
      question: 'Should I paint all sides of my house at the same time?',
      answer: 'Ideally yes, for color consistency and efficiency. However, you can prioritize the most sun-damaged sides (usually south and west) first if budget requires staged painting.',
    },
  ],
  '/guides/painting-costs-austin': [
    {
      question: 'How much does it cost to paint a 2,000 sq ft house in Austin?',
      answer: 'For a typical 2,000 sq ft Austin home, interior painting ranges from $4,000-$8,000, exterior painting from $6,000-$12,000. Final cost depends on paint quality, prep work needed, and number of stories.',
    },
    {
      question: 'What factors affect painting costs in Austin?',
      answer: "Key factors include home size, paint quality, surface preparation needs, number of colors, accessibility, and timeline. Austin's climate also affects exterior prep requirements.",
    },
    {
      question: 'Is it cheaper to paint in winter in Austin?',
      answer: "Interior painting rates are consistent year-round. Exterior painting may have slight seasonal pricing, but weather windows are more important than minor savings in Austin's variable climate.",
    },
    {
      question: 'Do Austin painting contractors charge more for two-story homes?',
      answer: 'Yes, two-story homes typically cost 20-40% more due to additional equipment, safety requirements, and time needed for scaffolding and ladder work.',
    },
    {
      question: "What's included in a professional painting estimate?",
      answer: 'Quality estimates include materials, labor, surface prep, priming, cleanup, and warranty. At Hill Country Painting, we provide clear written estimates with no hidden fees.',
    },
  ],
};

const NOINDEX_ROUTES: Record<string, string> = {
  '/privacy': 'noindex, follow',
  '/terms': 'noindex, follow',
  '/do-not-sell': 'noindex, follow',
  '/eula': 'noindex, follow',
  '/sitemap': 'noindex, follow',
  '/pre-approval': 'noindex, nofollow',
  '/search': 'noindex, follow',
  '/thank-you': 'noindex, follow',
};

/**
 * Check if a path is a valid app route that should be handled by the
 * prerendered static HTML output in dist/.
 * Uses exact match only to prevent unknown URLs from receiving a 200-status
 * SPA fallback that search engines can classify as a soft 404.
 */
function isSpaRoute(path: string): boolean {
  return SPA_ROUTES.has(path);
}

function assetPathForPrerenderedRoute(path: string): string {
  if (path === '/') {
    return '/index.html';
  }

  return `${path.replace(/%/g, '%25')}/index.html`;
}

function blogPathSlug(slug: string): string {
  return slug
    .trim()
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function cleanBlogPath(path: string): string {
  const prefix = '/blog/';

  if (!path.startsWith(prefix)) {
    return path;
  }

  return `${prefix}${blogPathSlug(decodeURIComponent(path.slice(prefix.length)))}`;
}

function headersForRoute(sourceHeaders: Headers, path: string): Headers {
  const headers = new Headers(sourceHeaders);
  const robots = NOINDEX_ROUTES[path];

  if (robots) {
    headers.set('X-Robots-Tag', robots);
  }

  return headers;
}

function schemaTypeIncludes(item: Record<string, any>, typeName: string): boolean {
  const schemaType = item?.['@type'];
  return Array.isArray(schemaType) ? schemaType.includes(typeName) : schemaType === typeName;
}

function withUniqueValues(existing: unknown, additions: string[]): string[] {
  const values = Array.isArray(existing) ? existing.filter(value => typeof value === 'string') : [];
  return [...new Set([...values, ...additions])];
}

function withAustinServiceSchemaSignals(html: string, path: string): string {
  const exactPhrase = AUSTIN_SERVICE_SCHEMA_SIGNALS[path];

  if (!exactPhrase) {
    return html;
  }

  const serviceId = `https://www.hillcopaint.com${path}#service`;
  const additions = [exactPhrase, 'painting contractors Austin', 'house painters Austin'];
  let updatedHtml = html;

  updatedHtml = updatedHtml.replace(
    /<script\b([^>]*)type=["']application\/ld\+json["']([^>]*)>([\s\S]*?)<\/script>/gi,
    (tag, beforeType, afterType, json) => {
      try {
        const schema = JSON.parse(json);

        if (!schemaTypeIncludes(schema, 'Service') || schema?.['@id'] !== serviceId) {
          return tag;
        }

        schema.alternateName = withUniqueValues(schema.alternateName, additions);
        schema.keywords = withUniqueValues(schema.keywords, additions);
        schema.serviceOutput = String(schema.serviceOutput || `${exactPhrase} service for homes, businesses, and property managers in Austin, TX`);

        if (!schema.serviceOutput.includes(exactPhrase)) {
          schema.serviceOutput = `${schema.serviceOutput} ${exactPhrase}`;
        }

        return `<script${beforeType}type="application/ld+json"${afterType}>${JSON.stringify(schema)}</script>`;
      } catch {
        return tag;
      }
    }
  );

  if (updatedHtml.includes(`"alternateName":`) && updatedHtml.includes(exactPhrase)) {
    return updatedHtml;
  }

  const supplementalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': serviceId,
    name: exactPhrase,
    alternateName: additions,
    keywords: additions,
    serviceOutput: `${exactPhrase} service for homes, businesses, and property managers in Austin, TX`,
    provider: {
      '@id': 'https://www.hillcopaint.com/#localbusiness',
    },
    areaServed: [
      {
        '@type': 'Place',
        name: 'Austin',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Greater Austin Area',
      },
    ],
  };
  const supplementalScript = `<script type="application/ld+json">${JSON.stringify(supplementalServiceSchema)}</script>`;

  return updatedHtml.includes('</head>')
    ? updatedHtml.replace('</head>', `${supplementalScript}</head>`)
    : `${updatedHtml}${supplementalScript}`;
}

function withGuideFaqSchemaFallback(html: string, path: string): string {
  const faqs = GUIDE_FAQ_SCHEMA_FALLBACKS[path];

  if (!faqs || /"@type"\s*:\s*"FAQPage"/.test(html)) {
    return html;
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
  const supplementalScript = `<script type="application/ld+json">${JSON.stringify(faqSchema)}</script>`;

  return html.includes('</head>')
    ? html.replace('</head>', `${supplementalScript}</head>`)
    : `${html}${supplementalScript}`;
}

async function htmlResponseForRoute(response: Response, path: string): Promise<Response> {
  let html = await response.text();

  for (const retiredUrl of RETIRED_SUPABASE_URLS) {
    html = html.replaceAll(retiredUrl, CURRENT_SUPABASE_URL);
  }

  html = withAustinServiceSchemaSignals(html, path);
  html = withGuideFaqSchemaFallback(html, path);

  return new Response(html, {
    status: 200,
    headers: headersForRoute(response.headers, path),
  });
}

const AI_MANIFEST_HEADERS: Record<string, string> = {
  '/llms.txt': 'text/plain; charset=utf-8',
  '/llms-full.txt': 'text/plain; charset=utf-8',
  '/ai.txt': 'text/plain; charset=utf-8',
  '/entity-facts.json': 'application/json; charset=utf-8',
  '/citation-facts.json': 'application/json; charset=utf-8',
};

async function aiManifestResponse(next: () => Promise<Response>, path: string): Promise<Response> {
  const assetResponse = await next();
  const headers = new Headers(assetResponse.headers);

  headers.set('Content-Type', AI_MANIFEST_HEADERS[path]);
  headers.set('Cache-Control', 'public, max-age=60, must-revalidate');

  return new Response(assetResponse.body, {
    status: assetResponse.status,
    headers,
  });
}

// ---------------------------------------------------------------------------
// 4. MIDDLEWARE ENTRY POINT
// ---------------------------------------------------------------------------
interface Env {
  ASSETS: {
    fetch: (request: Request | string) => Promise<Response>;
  };
}

async function notFoundResponse(env: Env, request: Request, origin: string): Promise<Response> {
  const notFoundUrl = new URL('/404.html', origin);
  const notFoundRequest = new Request(notFoundUrl.toString(), {
    method: 'GET',
    headers: request.headers,
  });
  const notFoundResponse = await env.ASSETS.fetch(notFoundRequest);
  return new Response(notFoundResponse.body, {
    status: 404,
    headers: new Headers({
      ...Object.fromEntries(notFoundResponse.headers.entries()),
      'X-Robots-Tag': 'noindex, nofollow',
    }),
  });
}

export async function onRequest(context: {
  request: Request;
  next: () => Promise<Response>;
  env: Env;
}) {
  const { request, next, env } = context;
  const url = new URL(request.url);
  const pathname = url.pathname;
  const forwardedProto = request.headers.get('x-forwarded-proto') || url.protocol.replace(':', '');

  // ── A. Host / protocol canonicalization ──────────────────────────────
  if (url.hostname.toLowerCase() !== 'www.hillcopaint.com' || forwardedProto !== 'https') {
    url.protocol = 'https';
    url.hostname = 'www.hillcopaint.com';
    return new Response(null, {
      status: 301,
      headers: { Location: url.toString() },
    });
  }

  if (pathname === '/sitemap.xml' && generatedSitemapUrlCount > 0) {
    return new Response(generatedSitemapXml, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=60, must-revalidate',
      },
    });
  }

  if (AI_MANIFEST_HEADERS[pathname]) {
    return aiManifestResponse(next, pathname);
  }

  // ── B. Static assets → pass through immediately ──────────────────────
  if (isStaticAsset(pathname)) {
    return next();
  }

  const cleanPath = pathname.endsWith('/') && pathname !== '/'
    ? pathname.replace(/\/+$/, '')
    : pathname;

  // ── C. Legacy 301 redirects ──────────────────────────────────────────
  const destination = REDIRECTS[cleanPath] || REDIRECTS[pathname];
  if (destination) return redirect(destination, url.origin);

  const cleanBlogRoute = cleanBlogPath(cleanPath);
  if (cleanBlogRoute !== cleanPath && isSpaRoute(cleanBlogRoute)) {
    return redirect(cleanBlogRoute, url.origin);
  }

  if (!isSpaRoute(cleanPath)) {
    for (const rule of PATTERN_REDIRECTS) {
      if (rule.pattern.test(cleanPath)) return redirect(rule.target, url.origin);
    }
  }

  // ── D. Trailing-slash canonicalization ────────────────────────────────
  if (cleanPath !== pathname) {
    url.pathname = cleanPath;
    return new Response(null, {
      status: 301,
      headers: { Location: url.toString() },
    });
  }

  const path = cleanPath;

  // /service/* catch-all — any unmatched /service/ path → /services
  if (path.startsWith('/service/')) {
    return redirect('/services', url.origin);
  }

  // ── E. Known app routes → prefer exact prerendered HTML ──────────────
  // Cloudflare's generic SPA fallback can return /index.html with 200 for
  // deep routes. Fetch exact prerendered route files first so crawlers see
  // route-specific content, canonicals, headings, and internal links.
  if (isSpaRoute(path)) {
    const prerenderedPath = assetPathForPrerenderedRoute(path);
    const prerenderedUrl = new URL(prerenderedPath, url.origin);
    const prerenderedRequest = new Request(prerenderedUrl.toString(), {
      method: 'GET',
      headers: request.headers,
    });
    const prerenderedResponse = await env.ASSETS.fetch(prerenderedRequest);

    if (prerenderedResponse.status >= 200 && prerenderedResponse.status < 300) {
      return htmlResponseForRoute(prerenderedResponse, path);
    }

    // A generated route without matching prerendered HTML is safer as a hard
    // 404 than a 200-status homepage shell. The build validator prevents this.
    return notFoundResponse(env, request, url.origin);
  }

  // ── F. Try any remaining non-HTML static file fallback ───────────────
  const response = await next();
  const contentType = response.headers.get('content-type') || '';
  if (response.status >= 200 && response.status < 300 && contentType && !contentType.includes('text/html')) {
    return response;
  }

  // ── G. 404 fallback ──────────────────────────────────────────────────
  return notFoundResponse(env, request, url.origin);
}
