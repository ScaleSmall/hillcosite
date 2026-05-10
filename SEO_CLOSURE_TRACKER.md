# Hill Country Painting SEO Closure Tracker

Last updated: 2026-05-10

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
- Homepage
- /services
- /service-areas
- /blog
- /contact
- robots.txt
- sitemap.xml
- 404 cleanup
- Some canonical pages and old redirect variants

### Retired / removed entirely
- /interior-painting-west-lake-hills
- /exterior-painting-west-lake-hills
- /cabinet-refinishing-west-lake-hills

### Still open
#### Redirects not live yet
- /exterior-painting-west-lake-hills
- /interior-painting-west-lake-hills
- /cabinet-refinishing-west-lake-hills
- trailing-slash canonical variants on core pages

#### Sitemap leakage / duplicate exposure
- Non-canonical pages in sitemap
- Redirects in sitemap
- Pages in multiple sitemaps
- Trailing-slash variants in sitemap
- Non-canonical service-area / blog / utility variants still surfaced

#### Internal linking / orphans
- Orphan pages
- Redirected pages with no incoming internal links
- Canonical URL with no incoming internal links

#### Thin content / duplication
- Low-word-count page family
- Not-indexable low-word-count family
- Title/SERP mismatch on at least one page
- Shared template/title pattern across many service and area pages

#### URL families seen in the audit that need review
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

#### Removed from sitemap / retired as legacy duplicates
- /interior-painting-west-lake-hills
- /exterior-painting-west-lake-hills
- /cabinet-refinishing-west-lake-hills

## Evidence
- Live redirects are still failing for the 3 West Lake Hills legacy URLs.
- Sitemap audit showed large non-canonical/redirect leakage.
- Sitewide route families exist for service-area and neighborhood pages.
- Audit also shows many trailing-slash variants and utility URLs still surfacing.

## Next steps
1. Internal-link audit for legacy/redirecting URLs.
2. Thin-content triage: expand vs noindex vs keep.
3. Fix title/meta mismatch if still present.
4. Watch Ahrefs/GSC for stale residue only.

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
