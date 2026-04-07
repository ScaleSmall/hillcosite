/**
 * Cloudflare Pages Middleware — Legacy 301 Redirects
 *
 * Handles all legacy redirect rules without being subject to the
 * 100-rule limit of the _redirects file. Runs before static file
 * serving and _redirects processing.
 */

const REDIRECTS: Record<string, string> = {
  // -----------------------------------------------------------------------
  // CITY / LEGACY CITY PAGE REDIRECTS
  // -----------------------------------------------------------------------
  '/pflugerville':         '/service-areas',
  '/hutto':                '/service-areas',
  '/round-rock':           '/service-areas/round-rock',
  '/round-rock-2':         '/service-areas/round-rock',
  '/leander':              '/service-areas/leander',
  '/cedar-park':           '/service-areas/cedar-park',
  '/north-austin':         '/service-areas/north-austin',
  '/austin':               '/service-areas/austin',
  '/georgetown':           '/service-areas/georgetown',

  // -----------------------------------------------------------------------
  // OLD /service-area/* AND MERGED CITY AREA PATHS
  // -----------------------------------------------------------------------
  '/service-area':                            '/service-areas',
  '/service-areas/round-rock-georgetown':     '/service-areas/round-rock',
  '/service-areas/taylor-hutto':              '/service-areas',
  '/service-areas/wells-branch':              '/service-areas',
  '/service-areas/pflugerville':              '/service-areas',
  '/service-areas/pflugerville-wells-branch': '/service-areas',

  // -----------------------------------------------------------------------
  // OLD /service/* PATTERNS (singular legacy CMS paths)
  // -----------------------------------------------------------------------
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

  // -----------------------------------------------------------------------
  // OLD SERVICE PAGE PATTERNS (no /services/ prefix)
  // -----------------------------------------------------------------------
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

  // -----------------------------------------------------------------------
  // GUIDE VARIANT REDIRECTS → Austin canonical guides
  // -----------------------------------------------------------------------
  '/guides/painting-costs-round-rock': '/guides/painting-costs-austin',
  '/guides/hoa-color-tips-round-rock':  '/guides/hoa-color-tips-austin',

  // -----------------------------------------------------------------------
  // UTILITY PAGE REDIRECTS
  // -----------------------------------------------------------------------
  '/privacy-policy':        '/privacy',
  '/free-estimate':         '/contact',
  '/get-a-free-estimate':   '/contact',

  // -----------------------------------------------------------------------
  // BROKEN AREA URL FIX
  // -----------------------------------------------------------------------
  '/areas/downtown-austin-luxury/old-west-austin': '/areas/downtown-austin-luxury/old-west-austin-central',
};

export async function onRequest(context: { request: Request; next: () => Promise<Response> }) {
  const { request, next } = context;
  const url = new URL(request.url);

  // Strip trailing slash for lookup (the _redirects trailing-slash rule handles the actual 308)
  const path = url.pathname.endsWith('/') && url.pathname !== '/'
    ? url.pathname.slice(0, -1)
    : url.pathname;

  const destination = REDIRECTS[path];
  if (destination) {
    const destUrl = new URL(destination, url.origin);
    return Response.redirect(destUrl.toString(), 301);
  }

  // /service/* catch-all — any unmatched /service/ path → /services
  if (path.startsWith('/service/')) {
    return Response.redirect(new URL('/services', url.origin).toString(), 301);
  }

  return next();
}
