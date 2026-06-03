# Hill Country Painting SEO Closure Tracker

Last updated: 2026-06-03

## Goal
Eliminate Ahrefs/GSC SEO noise by cleaning redirects, canonical exposure, sitemap leakage, internal-link gaps, and thin/duplicate page issues.

## Status

### Fixed in code
- Canonical tag plumbing exists
- Robots handling exists
- Sitemap generation exists
- Route structure exists
- Redirect table in middleware exists
- Legacy URL normalization logic exists
- SEO validation scripts exist
- Thin page / geo page scaffolding exists

### Fixed live
- Production deployment `0712181` is canonical on Cloudflare Pages.
- All 218 sitemap URLs return 200, expose exactly one canonical tag, and are indexable.
- Live H1/title/meta audit across all 218 sitemap URLs reports 0 issues.
- Live internal-link crawl found 417 unique internal links/assets and 0 redirect or broken-link targets.
- robots.txt, sitemap.xml, ai.txt, llms.txt, llms-full.txt, entity-facts.json, citation-facts.json, humans.txt, security.txt, and site.webmanifest are live with expected content types.
- Legacy West Lake Hills and cabinet-refinishing variants now resolve through direct, crawlable routing instead of leaking as sitemap or internal-link targets.

### Still open
#### External validation
- Submit or re-submit `https://www.hillcopaint.com/sitemap.xml` in Google Search Console.
- Run URL Inspection on representative repaired URLs and request indexing where available.
- Wait for GSC validation states to clear after Google recrawls. Live site checks are clean, but GSC status cannot be marked 100% resolved until Google reports it.
- Verify Google Business Profile ranking and Maps-pack position from neutral/localized searches. A #1 Maps outcome cannot be proven from repo or Cloudflare evidence alone.

#### Citation and local SEO follow-through
- Clean stale third-party NAP/citation listings identified in `citation-facts.json`.
- Confirm Google Business Profile name, phone, website, address/service-area settings, categories, services, photos, posts, and review response cadence.

#### Historical URL families reviewed during repair
- /services/
- /service-areas/
- /blog/
- /contact/
- /about/
- /faq/
- /gallery/
- /testimonials/
- /privacy/
- /terms/
- /eula/
- /do-not-sell/
- /financing/
- /pre-approval/
- /search
- /search?q={search_term_string}
- /service-area/
- /commercial-painting/
- /interior-painting/
- /exterior-painting/
- /cabinet-refinishing/
- /round-rock-2/
- /pflugerville/
- /hutto/
- /austin/
- /georgetown/
- /service/mobile-home-painting/
- /service/mobile-home-painting-round-rock/
- /service/garage-painting/
- /service/house-painting-round-rock/
- /service/townhouse-painting-round-rock/
- /service/residential-stucco-painting/
- /service/residential-stucco-painting-round-rock/
- /service/residential-fence-staining-round-rock/
- /service/commercial-concrete-painting-round-rock/
- /residential-painting/
- /residential-building-painting-round-rock/
- /residential-interior-painting-round-rock/
- /residential-exterior-painting-round-rock/
- /cabinet-refinishing-pflugerville/
- /cabinet-refinishing-lakeway/
- /cabinet-refinishing-west-lake-highlands/
- /interior-painting-lakeway/
- /interior-painting-west-lake-highlands/
- /interior-painting-west-lake-hills/
- /exterior-painting-lakeway/
- /exterior-painting-west-lake-highlands/
- /exterior-painting-west-lake-hills/
- /commercial-painting-lakeway/
- /commercial-painting-west-lake-highlands/
- /commercial-painting-west-lake-hills/
- /commercial-painting-round-rock/
- /services/commercial/
- /services/interior-painting/
- /services/exterior-painting/
- /services/cabinet-refinishing/
- /areas/*
- /service-areas/*
- /guides/*

#### Removed from sitemap / handled as legacy duplicates
- /interior-painting-west-lake-hills
- /exterior-painting-west-lake-hills
- /cabinet-refinishing-west-lake-hills

## Evidence
- Commit `0712181` deployed successfully to Cloudflare production deployment `d79bab62-e192-479d-ba28-404aebce53ee`.
- Safe Cloudflare project check confirmed canonical production commit `0712181` with status `success`.
- Live sitemap crawl: 218 sitemap URLs, 218 clean indexable 200 responses, 0 problems.
- Live H1/meta crawl: 218 pages checked, 0 issues for duplicate/missing H1, hard-cut ellipses, overlong titles, or overlong descriptions.
- Live internal-link crawl: 218 pages crawled, 417 unique internal links/assets checked, 0 broken or redirecting internal targets.
- Live file checks confirmed expected public discovery files are available.

## Next steps
1. Submit sitemap and run representative URL Inspection checks in GSC.
2. Watch Ahrefs/GSC for stale residue only, separating old sampled URLs from current live behavior.
3. Clean third-party citation/NAP inconsistencies that are outside the repo.
4. Continue content expansion through additive service, neighborhood, project, and case-study content.

## Keep / Expand / Noindex triage
### Keep
- Homepage
- /about
- /services
- /service-areas
- Core service pages
- Core geo hub pages
- Legal/public utility pages that must remain public

### Expand
- Thin service pages
- Thin geo pages
- Any blog posts too close to guide templates

### Noindex
- /search
- /thank-you

### Delete/Retire
- Legacy URLs already pruned from sitemap and canonical routing
- Any leftover URLs with no inbound value and no business use

## Notes
- Treat Ahrefs/GSC as symptom reports, not truth.
- Verify changes live before marking them done.
- Update this file as each item is resolved.
