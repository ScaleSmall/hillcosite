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
- `ai.txt` now lists the four priority Austin service pages in its Priority Pages for Answers and Citations section.
- `ai.txt` now also prioritizes the canonical About, Gallery, Testimonials, FAQ, and Free Estimate trust/conversion pages for AI answers and citations.
- `citation-facts.json` now uses About and FAQ alongside Contact, Gallery, Testimonials, Free Estimate, service-area, guide, and priority Austin service URLs as canonical verification sources.
- entity-facts.json and citation-facts.json now expose canonical Austin-area geo coordinates, and citation-facts.json lists homepage, contact, sitemap, AI fact files, and the priority Austin service URLs as verification sources.
- Organization, LocalBusiness, entity-facts.json, and citation-facts.json now carry the canonical logo and primary Austin homepage image identity signals.
- Detailed Service schema providers now carry the canonical LocalBusiness, HousePainter, logo/image, Google Business Profile, and kgmid identity signals across Austin priority and service-location pages.
- Services and service-area hub ItemList Service entries now carry the same canonical LocalBusiness, HousePainter, logo/image, Google Business Profile, and kgmid identity signals.
- Gallery, free-estimate, pricing/cost, and AI fact offer schemas now reuse the same canonical LocalBusiness, HomeAndConstructionBusiness, HousePainter provider identity.
- Reused Service, Offer, ImageGallery, and QuoteAction provider objects now include richer local-business trust fields: legal name, alternate names, disambiguation, NAICS/industry, contact point, email, hours, payment/currency, language, aggregate rating, Google Business Profile, and kgmid.
- Testimonials review markup now ties each reviewed LocalBusiness back to the canonical website, Google Business Profile, and Google Knowledge Graph ID.
- Legacy West Lake Hills and cabinet-refinishing variants now resolve through direct, crawlable routing instead of leaking as sitemap or internal-link targets.
- Austin service-area Service schema includes house-painter and priority-service intent signals.
- The four priority Austin service pages now have enforced local FAQPage schema coverage in both local and live SEO verification.
- The four core service pages now have enforced Austin-local FAQPage schema coverage in both local and live SEO verification.
- Estimate QuoteAction schema now exposes both `/contact` and `/free-estimate` as canonical request-entry points, with local and live verification enforcing both.
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
- Cloudflare Pages deployment `https://f84784e2.hillcosite.pages.dev` deployed successfully on 2026-06-04 after adding geo coordinates and priority Austin verification URLs to the public entity/citation fact files.
- Live page-indexing and full SEO verifier runs on 2026-06-04 passed after that deployment with 183/183 sitemap pages, 32/32 Google crawler access checks, 183/183 Googlebot sitemap access checks, 182/182 trailing-slash redirect checks, 215/215 legacy redirect checks, 183/183 HTML sitemap discovery links, 172/172 LocalBusiness schema pages, 64/64 service-location Service schema pages, and 160/160 visible local trust sections.
- Cloudflare Pages deployment `https://b4c23baa.hillcosite.pages.dev` deployed successfully on 2026-06-04 after adding canonical logo and primary image identity to LocalBusiness schema and public entity/citation facts.
- Live page-indexing and full SEO verifier runs on 2026-06-04 passed after that deployment, including the new Organization/LocalBusiness canonical logo/image identity checks.
- Cloudflare Pages deployment `https://d655ffaa.hillcosite.pages.dev` deployed successfully on 2026-06-04 after adding canonical logo/image identity to detailed Service schema providers.
- Live page-indexing and full SEO verifier runs on 2026-06-04 passed after that deployment, including 4/4 Austin service schema pages, 64/64 service-location Service schema pages, and the strengthened canonical provider identity checks.
- Cloudflare Pages deployment `https://b79c4e90.hillcosite.pages.dev` deployed successfully on 2026-06-04 after adding canonical GBP/kgmid identity to testimonials review markup.
- Live page-indexing and full SEO verifier runs on 2026-06-04 passed after that deployment, including 12 marked-up testimonials with the Google review link and strengthened LocalBusiness review identity checks.
- Cloudflare Pages deployment `https://71055123.hillcosite.pages.dev` deployed successfully on 2026-06-04 after strengthening services and service-area hub ItemList Service provider identity.
- Live page-indexing and full SEO verifier runs on 2026-06-04 passed after that deployment, including the new hub ItemList canonical provider identity checks for `/services` and `/service-areas`.
- Cloudflare Pages deployment `https://72f14028.hillcosite.pages.dev` deployed successfully on 2026-06-04 after centralizing canonical provider identity for gallery, estimate, pricing/cost, and AI fact offer schemas.
- Live page-indexing and full SEO verifier runs on 2026-06-04 passed after that deployment, including canonical ImageGallery provider identity, canonical QuoteAction provider identity, 2/2 painting cost provider schema checks, and AI fact offer provider checks.
- Cloudflare Pages deployment `https://29bc861b.hillcosite.pages.dev` deployed successfully on 2026-06-04 after strengthening the Cloudflare middleware Austin service-schema fallback to use the canonical LocalBusiness/HomeAndConstructionBusiness/HousePainter provider identity for Service provider, QuoteAction provider, and QuoteAction object provider.
- Live page-indexing and full SEO verifier runs on 2026-06-04 passed after that deployment, including DNS/custom-domain active, 32/32 Google crawler access checks, 183/183 Googlebot sitemap access checks, no banned before/after-style hero images, current Supabase project validation, 4/4 Austin service schema pages, 64/64 service-location Service schema pages, 172/172 LocalBusiness schema pages, and canonical QuoteAction provider checks.
- Cloudflare Pages deployment `https://7914ced0.hillcosite.pages.dev` deployed successfully on 2026-06-04 after enriching the canonical provider objects reused by Service, Offer, ImageGallery, AI fact, and QuoteAction schema.
- Full live SEO verifier run on 2026-06-04 passed after that deployment with the stricter canonical provider checks, including DNS/custom-domain active, 183/183 sitemap pages, 183/183 Googlebot sitemap access checks, 4/4 Austin service schema pages, 64/64 service-location Service schema pages, 2/2 hub ItemList schema pages, 2/2 painting cost provider schemas, current Supabase project validation, and no banned before/after-style hero images.
- Full live SEO verifier run on 2026-06-04 passed after adding priority Austin service FAQ verification coverage, including `Live Austin service FAQ schema pages checked: 4/4`.
- Local generated SEO validation and static SEO verification passed after adding enforced `ai.txt` coverage for the four priority Austin service URLs.
- Local generated SEO validation now enforces `ai.txt` coverage for the canonical trust and conversion pages used by answer engines and citation systems.
- Local and live SEO verification now require About and FAQ in the canonical citation verification URL set.
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
