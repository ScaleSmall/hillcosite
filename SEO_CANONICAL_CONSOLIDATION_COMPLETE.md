# SEO Canonical Consolidation Status

**Last Updated:** March 2026

---

## Current State

**Active Canonical Mappings: 0**

The `src/config/canonicalMappings.ts` file contains empty arrays. No cross-page canonical consolidation is active. All pages use self-referencing canonical URLs.

---

## Route Inventory

**Source of Truth:** `src/config/routeData.mjs`

| Category | Count |
|----------|-------|
| Core static routes | 33 |
| Service-location pages | 24 |
| Geo hub pages | 14 |
| Geo neighborhood pages | 70 |
| **Total** | **141** |

---

## Actually Verified

The `npm run validate:routes` script verifies:

1. All paths in `routeData.mjs` are mounted in `App.tsx`
2. All service-location routes have backing page files in `src/pages/locations/`
3. All internal redirect targets in `_redirects` point to valid routes
4. All internal redirect targets in `.htaccess` point to valid routes
5. All non-blog sitemap URLs match mounted routes
6. `canonicalMappings.ts` arrays are empty (no active mappings)
7. `routes.ts` does not duplicate route arrays (is pure re-export layer)

---

## Not Verified by This Script

The script does NOT check:

- Whether documentation claims match code (manual review required)
- Whether redirect files were actually modified in a given branch
- Whether blog posts in sitemap are valid (blog URLs are skipped)
- External redirect targets (absolute URLs are skipped)

---

## Not Implemented

The following are NOT implemented in this codebase:

- Cedar Park to Leander canonical consolidation
- Hutto to Taylor canonical consolidation
- Any cross-page canonical mappings
- Service-location pages for Leander, Georgetown, Round Rock, Cedar Park, North Austin

These do not exist in the code.
