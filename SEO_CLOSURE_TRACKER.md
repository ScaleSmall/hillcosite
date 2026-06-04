# Hill Country Painting SEO Closure Tracker

Last updated: 2026-06-04

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
- Latest checked production deployment is canonical and successful on Cloudflare Pages.
- Cloudflare Pages custom domain `www.hillcopaint.com` is active.
- All 183 sitemap URLs return 200, expose exactly one canonical tag, and are indexable.
- Live H1/title/meta audit across all 183 sitemap URLs reports 0 duplicate or missing title, description, or H1 issues.
- Live internal discovery confirms every sitemap page has at least 2 inbound source pages.
- Live internal-link target validation reports 0 unexpected non-sitemap links.
- Live HTML sitemap discovery confirms all 183 XML sitemap URLs are linked from `/sitemap`, including blog posts, service pages, service-area hubs, service-location pages, and neighborhood pages.
- The misspelled exterior-painters blog URL now redirects to the corrected canonical URL, and generated sitemap/LLM/static sitemap outputs use `https://www.hillcopaint.com/blog/how-to-determine-the-best-austin-exterior-house-painters`.
- Live Googlebot sitemap access confirms 183/183 sitemap URLs are accessible.
- Live hero image guard reports no banned before/after-style hero images.
- Live gallery feed validation confirms current Supabase project `https://ndggkorglcaznukkhapz.supabase.co` is present and retired project `https://oyyfpkpzalhxztpcdjgq.supabase.co` is absent.
- robots.txt, sitemap.xml, ai.txt, llms.txt, llms-full.txt, entity-facts.json, citation-facts.json, humans.txt, security.txt, and site.webmanifest are live with expected content types.
- Legacy West Lake Hills and cabinet-refinishing variants now resolve through direct, crawlable routing instead of leaking as sitemap or internal-link targets.
- Austin service-area Service schema includes house-painter and priority-service intent signals.
- `/free-estimate` is now a canonical, indexable estimate page in the sitemap with estimate intent copy, service links, breadcrumb schema, QuoteAction, and LocalBusiness schema.
- LocalBusiness schema, service-location Service schema, FAQ schema, breadcrumbs, contact schema, and testimonial trust signals pass the live SEO verifier.
- All 64 service-location pages now include matching local Place schema with canonical area name, coordinates, neighborhoods, ZIP codes, and service intent.
- Sitemap and AI-manifest generators use Austin-local dates, preventing future-dated generated SEO files during UTC rollover.

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
- Commit `465120a` deployed successfully to Cloudflare Pages preview `https://720d89f1.hillcosite.pages.dev`.
- Current live page-indexing verifier run on 2026-06-04 passed with 183 sitemap pages, 32/32 Google crawler access checks, 183/183 Googlebot sitemap access checks, 182/182 trailing-slash redirect checks, 215/215 legacy redirect checks, 183/183 HTML sitemap discovery links, 172/172 LocalBusiness schema pages, 64/64 service-location Service schema pages, 11/11 service-area FAQ schema pages, 4/4 guide FAQ schema pages, and 160/160 visible local trust sections.
- The same live verifier now enforces matching local Place schema on all 64 service-location pages, including area coordinates, neighborhoods, ZIP codes, and primary local service intent.
- The same live verifier confirms the current Supabase gallery feed is present, the retired Supabase feed is absent, and no before/after-style images are used as hero backgrounds.
- The same live verifier confirms `/free-estimate` is live with estimate intent, service links, QuoteAction, and LocalBusiness schema.
- The local production build now enforces the corrected blog URL in sitemap, LLM, Cloudflare route, and HTML sitemap outputs and prevents the `deterimine` typo from re-entering generated SEO assets.
- Commit `0b67f9f` deployed successfully to Cloudflare Pages preview `https://bec8fd7e.hillcosite.pages.dev`.
- Live verification on 2026-06-04 confirmed the misspelled blog URL returns a 301 to the corrected canonical URL, while `/sitemap.xml`, `/llms-full.txt`, and `/sitemap` include the corrected URL and exclude the typo.
- Live page-indexing and full SEO verifier runs on 2026-06-04 passed with 183/183 sitemap pages, 183/183 Googlebot sitemap access checks, 215/215 legacy redirects, 183/183 HTML sitemap discovery links, and current Supabase project validation.
- Commit `0712181` deployed successfully to Cloudflare production deployment `d79bab62-e192-479d-ba28-404aebce53ee`.
- Follow-up documentation commit `4667c83` deployed successfully to Cloudflare production deployment `629c2244-7c3a-4954-a1ef-26de551c2250`.
- Safe Cloudflare project check confirmed the latest production deployment had status `success`.
- Live sitemap crawl: 183 sitemap URLs, 183 clean indexable 200 responses, 0 problems.
- Live H1/meta crawl: 183 pages checked, 0 issues for duplicate/missing H1, hard-cut ellipses, overlong titles, or overlong descriptions.
- Live internal discovery and internal-link target checks: 183 sitemap pages checked, every sitemap page has 2+ inbound source pages, and 0 unexpected non-sitemap link targets were found.
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
