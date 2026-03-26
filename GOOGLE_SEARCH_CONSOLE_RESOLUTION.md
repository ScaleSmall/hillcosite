# Google Search Console Issue Resolution

**Last Updated:** March 2026

---

## Current Status

This document tracks the current state of Google Search Console issues and route inventory.

---

## Route Inventory (Verified)

Computed from `src/config/routeData.mjs`:

| Category | Count |
|----------|-------|
| Core static routes | 33 |
| Service-location pages | 24 |
| Geo hub pages | 14 |
| Geo neighborhood pages | 70 |
| **Total (before blog)** | **141** |

---

## Canonical Configuration

**Status:** No cross-page canonical consolidation is active.

- `serviceAreaCanonicals` array is empty
- `serviceLocationCanonicals` array is empty
- All pages use self-referencing canonical URLs

---

## Redirect Configuration

**Status:** All redirect targets verified valid.

Files checked:
- `public/_redirects` - All targets point to valid mounted routes
- `public/.htaccess` - All targets point to valid mounted routes

No redirect changes were required.

---

## Route Data Source of Truth

Route data is now centralized in:
```
src/config/routeData.mjs
```

This file is consumed by:
- `src/config/routes.ts` (re-exports for TypeScript)
- `scripts/generate-sitemap.mjs` (sitemap generation)
- `scripts/validate-route-inventory.mjs` (validation)

---

## Validation

Route inventory validation runs automatically during build:

```bash
npm run validate:routes
```

Checks performed:
1. All routeData.mjs paths are mounted in App.tsx
2. All service-location routes have backing page files
3. Redirect targets point to valid routes
4. canonicalMappings.ts state is documented

---

## Not Implemented

The following are intentionally NOT implemented:
- Service-location pages for Leander, Georgetown, Round Rock, Cedar Park, North Austin
- Cedar Park to Leander canonical consolidation
- Hutto to Taylor canonical consolidation

These pages/mappings do not exist in the codebase.

---

## Monitoring

For Google Search Console:
1. Coverage report - verify pages are indexed
2. Page indexing issues - monitor for redirect errors
3. URL inspection - test specific URLs

Server errors (5xx) require Supabase edge function configuration, which is separate from route inventory.
