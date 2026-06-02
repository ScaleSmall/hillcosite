# Hill Country Painting GSC Repair and SEO Optimization Plan

Generated for the June 2, 2026 Google Search Console coverage export.

## Objective

Reach and maintain a clean Google Search Console Page indexing report while improving technical SEO, traditional organic visibility, Google Maps/local rankings, and AI/LLM citation readiness for Hill Country Painting in Austin, TX and high-value surrounding communities.

## Backup and Rollback

- Pre-change backup branch: `backup/pre-gsc-repair-2026-06-02`
- Source commit backed up: `1b7e6626e3c15652af554dbee06c1bede99eaf61`
- Repair branch: `repair/gsc-page-indexing-2026-06-02`
- Rollback method: redeploy or reset from the backup branch if the repair branch causes production regressions.

## GSC Export Summary

| GSC issue | Source | Validation | Pages | Primary repair path |
|---|---|---:|---:|---|
| Page with redirect | Website | Failed | 94 | Remove redirected URLs from sitemap/internal links, direct-map legacy URLs, reduce redirect chains |
| Not found (404) | Website | Failed | 72 | Prerender/serve valid routes, redirect valuable retired URLs, preserve real 404s with noindex |
| Soft 404 | Website | Failed | 11 | Prevent app-shell 200 responses for retired content, noindex true 404s, redirect retired blog slugs |
| Alternate page with proper canonical tag | Website | Failed | 6 | Enforce host/trailing-slash canonicalization and keep one canonical URL per page |
| Duplicate without user-selected canonical | Website | Failed | 2 | Ensure unique titles/canonicals and no duplicate sitemap exposure |
| Crawled - currently not indexed | Google systems | Failed | 29 | Improve raw HTML/prerendered content, internal links, unique value, and structured data |
| Server error (5xx) | Website | Started | 33 | Remove broken client calls and prevent missing functions from surfacing to crawlers |
| Blocked by robots.txt | Website | Started | 3 | Let Google crawl noindex utility pages so it can see noindex rather than robots-blocked |
| Redirect error | Website | Passed | 0 | Preserve redirect validation |
| Discovered - currently not indexed | Google systems | Passed | 23 | Preserve progress and improve crawl confidence |

## Root Causes

1. Cloudflare Pages Functions were not invoked for most application paths because `_routes.json` only included a narrow set of paths. That left valid sitemap URLs to be served directly by static hosting and return 404 when no static `index.html` existed.
2. The build pipeline generated the sitemap but did not run the existing prerender step, so many valid React routes had no deployed static HTML.
3. Middleware allowed known SPA routes to keep a 404 response instead of falling back to the app shell when a prerendered file was missing.
4. Host/protocol normalization existed in `_redirects`, but live behavior showed `hillcopaint.com` could return 200 instead of a forced `www` canonical redirect.
5. Public 404 HTML canonicalized to the homepage, creating canonical ambiguity and soft-404 risk.
6. Broken image and pricing-function requests created crawler-visible quality and server/function-noise issues.
7. Robots directives blocked some utility/search variants instead of allowing crawlable noindex handling.
8. The site has strong rendered content and schema, but needs stable prerendered output for GSC, non-Google crawlers, social previews, and AI retrieval.

## Technical Repair Plan

### Phase 1: Deployment and crawl integrity

- Create backup branch before edits.
- Expand `_routes.json` so Cloudflare middleware runs for application routes.
- Add middleware host/protocol canonicalization to force `https://www.hillcopaint.com`.
- Make legacy redirects direct and chain-resistant, including trailing-slash variants.
- Add pattern redirects for old service URL families such as `/commercial-exterior-painting-round-rock` and `/service/residential-nursery-painting-round-rock`.
- Serve the SPA shell for known valid routes if a prerendered file is missing.
- Redirect unmatched dynamic blog slugs to `/blog` unless a static/prerendered post exists.
- Return real 404 status for unknown URLs with `X-Robots-Tag: noindex, nofollow`.

### Phase 2: Build and sitemap parity

- Generate sitemap from canonical route data.
- Run Vite build.
- Enhance base HTML metadata.
- Prerender all sitemap-backed static routes.
- Fail the build if any route fails to prerender.
- Validate canonicals and redirect targets after prerendering.
- After deployment, verify all sitemap URLs return 200 or valid intended 301 targets.

### Phase 3: Asset and function hygiene

- Replace broken `/IMG_4398_result_result.jpg`, `/og-image.jpg`, and `/austin-professional-house-painting-hero.jpg` references with existing production assets.
- Replace schema image references to missing old gallery filenames with existing image assets.
- Disable remote pricing fetches unless explicitly enabled by `VITE_ENABLE_PRICING_API=true` and valid Supabase credentials exist.
- Continue using static pricing fallbacks for crawl-critical pricing tables.

### Phase 4: Robots, noindex, and AI access

- Stop blocking utility/search pages in `robots.txt`; allow Google to crawl them and see noindex headers.
- Keep `/search` and `/thank-you` noindexed through headers/meta rather than robots blocking.
- Allow major AI/search crawlers including GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-User, PerplexityBot, Perplexity-User, Applebot, Applebot-Extended, and CCBot.
- Add `/llms.txt` with canonical business facts and important citation URLs.

## Post-Deployment GSC Verification

1. Submit updated sitemap in GSC.
2. Run URL Inspection on representative URLs:
   - `/`
   - `/service-areas/austin`
   - `/service-areas/leander`
   - `/interior-painting-austin`
   - `/areas/west-lake-hills-and-rollingwood/west-lake-hills`
   - `/free-estimate`
   - `/service/residential-nursery-painting-round-rock`
   - `/commercial-exterior-painting-round-rock`
   - `/search?q=test`
   - a truly unknown URL
3. Validate fixes for each failed GSC bucket.
4. Monitor daily until "Started" and "Failed" validation states clear.
5. Remove or update any newly surfaced sample URLs from GSC that were not included in this export.

## Traditional SEO Roadmap

### Highest-value keyword clusters

- Austin house painters
- Austin painting company
- interior painters Austin
- exterior house painters Austin
- cabinet painting Austin
- cabinet refinishing Austin
- commercial painters Austin
- West Lake Hills painters
- Rollingwood painters
- Tarrytown painters
- Pemberton Heights painters
- Barton Creek painters
- Lakeway painters
- Bee Cave painters
- Steiner Ranch painters
- Spanish Oaks painters
- Rough Hollow painters

### Content expansion priorities

- Luxury exterior painting in West Austin.
- Historic-home painting in Tarrytown, Old Enfield, Clarksville, and Pemberton Heights.
- Lakeway and Bee Cave exterior paint durability for Hill Country heat and lake exposure.
- Cabinet refinishing process, durability, timeline, and maintenance.
- Neighborhood case studies with before/after photos, project scope, products, prep steps, and customer outcomes.
- 2026 Austin painting cost guide with clear home-size, prep, and finish scenarios.
- HOA color approval guides for Westlake, Lakeway, Steiner Ranch, Circle C, and master-planned communities.

## Local SEO and Google Maps Plan

### NAP cleanup

Define one canonical NAP identity and enforce it across all citations:

- Business name: Hill Country Painting
- Legal name: Hill Country Painting LLC
- Phone: (512) 240-2246
- Email: info@hillcopaint.com
- Website: https://www.hillcopaint.com
- Address/service area: match the Google Business Profile exactly

Known inconsistent public listings to audit and clean:

- BBB / Round Rock identity
- Chamber / Hutto identity
- MapQuest / Hutto identity
- StartUs / Hutto identity
- Storeboard / Hutto identity
- YellowPages / Pflugerville identity
- Manta / Pflugerville identity
- WhereOrg / old Austin address and old phone
- ProvenExpert incomplete Austin address
- Yahoo-style stale address data
- BuildZoom, Birdeye, LocalPainting, ConnectPainters, and any other aggregator entries

### GBP optimization

- Confirm primary category and secondary categories.
- Add all services with concise descriptions.
- Add service areas for Austin, West Lake Hills, Rollingwood, Tarrytown, Pemberton Heights, Barton Creek, Lakeway, Bee Cave, Steiner Ranch, Circle C, Northwest Hills, Cedar Park, Round Rock, Georgetown, and Leander if actually served.
- Upload weekly project photos with neighborhood and service context.
- Create GBP posts for seasonal exterior painting, cabinet refinishing, HOA color approvals, and warranty/insurance proof.
- Build a review request system that encourages natural mentions of service and neighborhood.
- Respond to every review with helpful, non-spammy service/location context.

## Backlink and Citation Plan

- Austin Chamber and local business directories.
- Westlake Chamber, Lake Travis Chamber, Cedar Park Chamber, and local HOA/vendor directories where legitimate.
- Realtor, designer, builder, remodeler, and stager partner pages.
- Manufacturer/store ecosystem links from paint suppliers where available.
- Local sponsorships in high-value neighborhoods and schools/community groups.
- Case-study partnerships with designers, builders, realtors, and home-service partners.
- Local PR around real projects, community participation, awards, or Austin home-maintenance data.

## AI and LLM Search Plan

- Keep `/ai.txt` and `/llms.txt` current.
- Ensure core business facts appear in raw/prerendered HTML, not only JavaScript.
- Keep LocalBusiness, Organization, Service, FAQPage, BreadcrumbList, WebPage, and article schema valid.
- Use consistent sameAs links across site schema and citation profiles.
- Add concise factual sections on service and area pages so AI systems can quote accurate facts.
- Avoid unsupported claims such as "licensed" unless publicly verified and intentionally stated.

## Success Criteria

- All sitemap URLs return 200 with one canonical tag and indexable robots directives.
- Retired valuable URLs return direct 301s to the closest relevant current page.
- Unknown URLs return 404 with noindex and no homepage canonical.
- GSC validation clears for 404, soft 404, server error, blocked by robots, duplicate canonical, and redirect error classes.
- "Crawled - currently not indexed" steadily declines as pages gain unique prerendered content and stronger internal links.
- Google Maps NAP/citation consistency improves across major directories.
- AI retrieval endpoints and crawler access remain open and accurate.
