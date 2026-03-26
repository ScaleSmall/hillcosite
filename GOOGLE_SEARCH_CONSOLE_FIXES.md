# Google Search Console Indexing Issues - Status

**Last Updated:** March 2026

---

## Overview

This document tracks the resolution of Google Search Console indexing issues related to redirects, canonicals, and route inventory.

---

## Recent Fixes (March 2026)

### 1. Route Inventory Consistency

**Problem:** routes.ts advertised 44 service-location pages, but only 16 were mounted in App.tsx and had backing files. The remaining 28 were phantom routes.

**Solution:**
- Mounted 8 existing but unmounted pages (Austin and WestLakeHills)
- Removed 20 phantom routes (Leander, Georgetown, Round Rock, Cedar Park, North Austin)
- Updated sitemap generator to match
- Added validation script to prevent drift

### 2. Redirect Target Fixes

**Problem:** Some redirect targets were pointing to removed or consolidated pages.

**Solution:**
- Updated redirect rules in `_redirects` and `.htaccess`
- All redirect targets now point to valid mounted routes
- City slug redirects now point to new service-area pages

### 3. Parameter Handling

**Problem:** URLs with `?ref=` tracking parameters being indexed.

**Solution:**
- Added comprehensive `?ref=` stripping rules in `_redirects`
- robots.txt blocks `/*?ref=` pattern

---

## Current Page Inventory

### Mounted Service-Location Pages (24 total)

**Locations with service pages:**
- Austin (4 pages)
- Tarrytown (4 pages)
- Northwest Hills (4 pages)
- West Lake Hills (4 pages)
- West Lake Highlands (4 pages)
- Lakeway (4 pages)

**Services per location:**
- Interior Painting
- Exterior Painting
- Cabinet Refinishing
- Commercial Painting

### NOT Mounted (No Files Exist)
- Leander service-location pages
- Georgetown service-location pages
- Round Rock service-location pages
- Cedar Park service-location pages
- North Austin service-location pages

---

## Canonical Configuration

**Current state:** No cross-page canonical consolidation

All pages self-canonical. The `canonicalMappings.ts` arrays are intentionally empty.

---

## Validation

The build now includes route inventory validation:

```bash
npm run validate:routes
```

This runs automatically during `prebuild` and `verify`.

---

## Expected GSC Behavior

After deployment:
1. "Page with redirect" - normal for intentional 301s
2. "Alternate page with proper canonical tag" - should decrease as trailing slash issues resolve
3. Valid pages should be indexed within 2-4 weeks

---

## Files Modified

1. `src/App.tsx` - Added 8 new route entries
2. `src/config/routes.ts` - Removed 20 phantom routes
3. `scripts/generate-sitemap.mjs` - Updated service-location list
4. `scripts/validate-route-inventory.mjs` - New validation script
5. `package.json` - Added validate:routes command
6. `public/_redirects` - Fixed redirect targets
7. `public/.htaccess` - Fixed redirect targets
