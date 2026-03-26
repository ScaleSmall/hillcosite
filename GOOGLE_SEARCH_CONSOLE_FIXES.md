# Google Search Console - Route Inventory Fixes

**Last Updated:** March 2026

---

## Overview

This document describes the route inventory structure and validation.

---

## Route Data Architecture

**Single Source of Truth:** `src/config/routeData.mjs`

All route data is defined in this file. Other files import from it:

- `src/config/routes.ts` - Pure re-export layer for TypeScript
- `scripts/generate-sitemap.mjs` - Sitemap generation
- `scripts/validate-route-inventory.mjs` - Validation
- `scripts/validate-redirects.mjs` - Redirect validation

---

## Actually Verified

The `npm run validate:routes` script checks:

1. **Route Mounting:** All `routeData.mjs` paths exist in `App.tsx`
2. **File Existence:** All service-location routes have backing `.tsx` files
3. **Redirect Targets:** `_redirects` targets point to valid routes
4. **Htaccess Targets:** `.htaccess` targets point to valid routes
5. **Sitemap Consistency:** Non-blog sitemap URLs match mounted routes
6. **Canonical State:** `canonicalMappings.ts` arrays are empty
7. **No Duplication:** `routes.ts` has no hardcoded route arrays

---

## Not Verified by This Script

The script does NOT check:

- Documentation accuracy (must be manually reviewed)
- Whether files were modified in a specific branch
- Blog post validity in sitemap
- External redirect targets

---

## Redirect Configuration

**Status:** Redirect targets were verified valid. No changes made.

Files checked:
- `public/_redirects` - All internal targets valid
- `public/.htaccess` - All internal targets valid

---

## Canonical Configuration

**Status:** No active mappings.

- `serviceAreaCanonicals` array is empty
- `serviceLocationCanonicals` array is empty
- All pages use self-referencing canonical URLs

---

## Route Counts

| Category | Count |
|----------|-------|
| routeData.mjs paths | 141 |
| App.tsx mounted routes | 146 |
| Service-location pages | 24 |
| Location page files | 24 |

---

## Not Implemented

The following do NOT exist in the codebase:

- Service-location pages for Leander, Georgetown, Round Rock, Cedar Park, North Austin
- Cedar Park to Leander canonical mapping
- Hutto to Taylor canonical mapping
