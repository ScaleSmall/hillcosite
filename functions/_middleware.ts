/**
 * Cloudflare Pages Middleware — Consolidated Routing
 *
 * Handles ALL routing logic in one place:
 *   1. Static asset pass-through (JS, CSS, images, fonts, etc.)
 *   2. Trailing-slash canonicalization (301)
 *   3. Legacy 301 redirects (old CMS paths → current canonical URLs)
 *   4. SPA rewrite (known React routes → /index.html with 200)
 *   5. 404 fallback (/404.html with 404 status)
 *
 * This replaces the previous split between _middleware.ts (redirects only)
 * and _redirects (SPA rewrites). The split caused SPA routes to break
 * because Cloudflare Pages does not reliably apply _redirects rewrite
 * rules after a middleware calls next().
 */

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
  '/service/office-painting-round-rock':                  '/services/commercial',
  '/service/commercial-kitchen-painting-round-rock':      '/services/commercial',
  '/service/industrial-facility-painting-round-rock':     '/services/commercial',
  '/service/hotel-painting-round-rock':                   '/services/commercial',
  '/service/house-painting-round-rock':                   '/services',
  '/service/residential-deck-painting-round-rock':        '/services/exterior-painting',
  '/service/residential-deck-painting':                   '/services/exterior-painting',
  '/service/residential-fence-painting-round-rock':       '/services/exterior-painting',
  '/service/residential-fence-painting':                  '/services/exterior-painting',
  '/service/residential-fence-staining-round-rock':       '/services/exterior-painting',
  '/service/residential-fence-staining':                  '/services/exterior-painting',
  '/service/residential-porch-painting-round-rock':       '/services/exterior-painting',
  '/service/residential-garage-door-painting-round-rock': '/services',
  '/service/residential-stucco-painting':                 '/services/exterior-painting',
  '/service/garage-painting-round-rock':                  '/services',
  '/service/mobile-home-painting-round-rock':             '/services',
  '/service/custom-home-painting':                        '/services',

  // -- Old service page patterns (no /services/ prefix) --
  '/interior-painting':                          '/services/interior-painting',
  '/exterior-painting':                          '/services/exterior-painting',
  '/cabinet-painting':                           '/services/cabinet-refinishing',
  '/commercial-painting':                        '/services/commercial',
  '/commercial-interior-painting':               '/services/commercial',
  '/residential-interior-painting':              '/services/interior-painting',
  '/residential-exterior-painting':              '/services/exterior-painting',
  '/residential-interior-painting-round-rock':   '/services/interior-painting',
  '/residential-exterior-painting-round-rock':   '/services/exterior-painting',
  '/residential-painting':                       '/services',
  '/residential-painting-round-rock':            '/services',
  '/residential-building-painting':              '/services',
  '/residential-building-painting-round-rock':   '/services',
  '/commercial-building-painting':               '/services/commercial',
  '/commercial-building-painting-round-rock':    '/services/commercial',
  '/commercial-painting-round-rock':             '/services/commercial',
  '/commercial-interior-painting-round-rock':    '/services/commercial',
  '/house-painting-austin':                      '/services',
  '/house-painting-round-rock':                  '/services',
  '/painting-contractor-austin':                 '/services',
  '/painting-contractor-round-rock':             '/services',
  '/painting-company-austin':                    '/services',

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
  '/blog/exterior-repaint-schedule-in-austin-hill-country-painting':         '/blog',
  '/blog/austin-interior-exterior-painting-hill-country-painting':           '/blog',
  '/blog/austin-exterior-painting-guide-hill-country-painting':              '/blog',
  '/blog/when-to-repaint-a-home-in-austin-hill-country-painting':            '/blog',
  '/blog/house-painting-services-austin-hill-country-painting':              '/blog',
  '/blog/austin-home-exterior-painting-guide-hill-country-painting':         '/blog',
  '/blog/exterior-painting-timeline-in-austin-hill-country-painting':        '/blog',

  // -- GSC 404 fixes: old service-location URLs that don't match current pattern --
  '/exterior-painting-west-lake-hills':  '/exterior-painting-west-lake-highlands',
  '/exterior-painting-taylor':           '/services/exterior-painting',
  '/commercial-tarrytown':               '/commercial-painting-tarrytown',
};

// ---------------------------------------------------------------------------
// 3. SPA ROUTE TABLE
//    Exact-match set for all known React Router paths, plus prefix patterns.
// ---------------------------------------------------------------------------
const SPA_ROUTES: Set<string> = new Set([
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
  '/service-areas',
  '/service-areas/austin',
  '/service-areas/tarrytown',
  '/service-areas/northwest-hills',
  '/service-areas/west-lake-hills',
  '/service-areas/west-lake-highlands',
  '/service-areas/lakeway',
  '/service-areas/leander',
  '/service-areas/georgetown',
  '/service-areas/round-rock',
  '/service-areas/cedar-park',
  '/service-areas/north-austin',
  '/color-consultation',
  '/contact',
  '/financing',
  '/pre-approval',
  '/blog',
  '/guides/painting-costs-austin',
  '/guides/best-paint-texas-heat',
  '/guides/hoa-color-tips-austin',
  '/guides/how-often-paint-central-texas',
  '/search',
  '/privacy',
  '/terms',
  '/eula',
  '/sitemap',
  '/do-not-sell',
  '/thank-you',

  // Service-location pages — 11 cities × 4 services = 44
  '/interior-painting-austin',
  '/interior-painting-tarrytown',
  '/interior-painting-northwest-hills',
  '/interior-painting-west-lake-hills',
  '/interior-painting-west-lake-highlands',
  '/interior-painting-lakeway',
  '/interior-painting-leander',
  '/interior-painting-georgetown',
  '/interior-painting-round-rock',
  '/interior-painting-cedar-park',
  '/interior-painting-north-austin',
  '/exterior-painting-austin',
  '/exterior-painting-tarrytown',
  '/exterior-painting-northwest-hills',
  '/exterior-painting-west-lake-hills',
  '/exterior-painting-west-lake-highlands',
  '/exterior-painting-lakeway',
  '/exterior-painting-leander',
  '/exterior-painting-georgetown',
  '/exterior-painting-round-rock',
  '/exterior-painting-cedar-park',
  '/exterior-painting-north-austin',
  '/cabinet-refinishing-austin',
  '/cabinet-refinishing-tarrytown',
  '/cabinet-refinishing-northwest-hills',
  '/cabinet-refinishing-west-lake-hills',
  '/cabinet-refinishing-west-lake-highlands',
  '/cabinet-refinishing-lakeway',
  '/cabinet-refinishing-leander',
  '/cabinet-refinishing-georgetown',
  '/cabinet-refinishing-round-rock',
  '/cabinet-refinishing-cedar-park',
  '/cabinet-refinishing-north-austin',
  '/commercial-painting-austin',
  '/commercial-painting-tarrytown',
  '/commercial-painting-northwest-hills',
  '/commercial-painting-west-lake-hills',
  '/commercial-painting-west-lake-highlands',
  '/commercial-painting-lakeway',
  '/commercial-painting-leander',
  '/commercial-painting-georgetown',
  '/commercial-painting-round-rock',
  '/commercial-painting-cedar-park',
  '/commercial-painting-north-austin',
]);

/**
 * Check if a path is a valid SPA route that should serve index.html.
 * Uses exact match for most routes, prefix match for /areas/* and /blog/*.
 */
function isSpaRoute(path: string): boolean {
  if (SPA_ROUTES.has(path)) return true;

  // /areas/* — all geo hub and neighborhood pages
  if (path.startsWith('/areas/')) return true;

  // /blog/:slug — dynamic blog post routes
  if (path.startsWith('/blog/')) return true;

  return false;
}

// ---------------------------------------------------------------------------
// 4. MIDDLEWARE ENTRY POINT
// ---------------------------------------------------------------------------
interface Env {
  ASSETS: {
    fetch: (request: Request | string) => Promise<Response>;
  };
}

export async function onRequest(context: {
  request: Request;
  next: () => Promise<Response>;
  env: Env;
}) {
  const { request, next, env } = context;
  const url = new URL(request.url);
  const pathname = url.pathname;

  // ── A. Static assets → pass through immediately ──────────────────────
  if (isStaticAsset(pathname)) {
    return next();
  }

  // ── B. Trailing-slash canonicalization ────────────────────────────────
  //    /about/ → 301 → /about   (but not / itself)
  if (pathname.endsWith('/') && pathname !== '/') {
    const clean = pathname.slice(0, -1);
    url.pathname = clean;
    return new Response(null, {
      status: 301,
      headers: { Location: url.toString() },
    });
  }

  // From here on, pathname has no trailing slash (except '/').
  const path = pathname;

  // ── C. Legacy 301 redirects ──────────────────────────────────────────
  const destination = REDIRECTS[path];
  if (destination) {
    const destUrl = new URL(destination, url.origin);
    return Response.redirect(destUrl.toString(), 301);
  }

  // /service/* catch-all — any unmatched /service/ path → /services
  if (path.startsWith('/service/')) {
    return Response.redirect(new URL('/services', url.origin).toString(), 301);
  }

  // ── D. SPA routes → serve /index.html with 200 ──────────────────────
  if (isSpaRoute(path)) {
    const assetUrl = new URL('/index.html', url.origin);
    const assetRequest = new Request(assetUrl.toString(), {
      method: 'GET',
      headers: request.headers,
    });
    return env.ASSETS.fetch(assetRequest);
  }

  // ── E. Try static asset (for paths without file extensions that might
  //       still be real files, e.g. extensionless assets) ───────────────
  const response = await next();
  if (response.status < 400) {
    return response;
  }

  // ── F. 404 fallback ──────────────────────────────────────────────────
  const notFoundUrl = new URL('/404.html', url.origin);
  const notFoundRequest = new Request(notFoundUrl.toString(), {
    method: 'GET',
    headers: request.headers,
  });
  const notFoundResponse = await env.ASSETS.fetch(notFoundRequest);
  return new Response(notFoundResponse.body, {
    status: 404,
    headers: notFoundResponse.headers,
  });
}
