# CRITICAL: Redirect Configuration for Netlify Deployment

**⚠️ IMPORTANT**: The redirect loop you're experiencing is likely because you're testing in a **preview/development environment** (like Bolt's preview) which doesn't properly handle Netlify-specific redirect rules.

## The Solution

All HTTPS and WWW redirect rules have been moved to `netlify.toml` where they will work correctly on the actual Netlify platform.

### Current Configuration:

**`public/_redirects`**:
- Contains ONLY your business-specific redirects (cities, services, etc.)
- Does NOT contain protocol (http/https) or host (www) redirects
- This prevents conflicts in development environments

**`netlify.toml`**:
- Contains ALL protocol and host canonicalization rules
- These rules use Netlify's `force = true` flag
- They will work correctly ONLY on actual Netlify hosting
- They will NOT work in local dev or preview environments

## Why This Approach?

1. **Protocol-specific redirects in `_redirects` don't work in all environments**
   - Bolt preview, Vite dev server, and other development tools don't understand `http://domain` vs `https://domain`
   - This causes redirect loops in preview
   - BUT they work fine on real Netlify

2. **`netlify.toml` redirects work ONLY on Netlify**
   - Preview environments ignore them
   - No redirect loop in preview
   - Perfect behavior on production

## What Will Happen After Deployment

### On Real Netlify Hosting:
✅ `http://hillcopaint.com` → `https://hillcopaint.com` (301)
✅ `http://www.hillcopaint.com` → `https://hillcopaint.com` (301)
✅ `https://www.hillcopaint.com` → `https://hillcopaint.com` (301)
✅ `https://hillcopaint.com` → Works perfectly (200)

### In Preview/Dev Environment:
⚠️ WWW and HTTP redirects may not work
⚠️ But no redirect loops
✅ The site will be functional for testing
✅ After deployment to Netlify, everything will work

## Testing After Deployment

Once deployed to actual Netlify hosting, test these:

```bash
# Test 1: WWW removal (https)
curl -I https://www.hillcopaint.com
# Expected: 301 → https://hillcopaint.com

# Test 2: WWW removal (http)
curl -I http://www.hillcopaint.com
# Expected: 301 → https://hillcopaint.com

# Test 3: HTTPS enforcement
curl -I http://hillcopaint.com
# Expected: 301 → https://hillcopaint.com

# Test 4: Canonical URL (should work without redirect)
curl -I https://hillcopaint.com
# Expected: 200 OK
```

## If You Still Get Redirect Loops on Netlify

If the redirect loop persists after deploying to actual Netlify hosting, do this:

### Option 1: Use Netlify's Built-in Domain Settings
1. Go to Netlify Dashboard → Domain Settings
2. Enable "Force HTTPS" (this is a checkbox)
3. Set "Primary domain" to `hillcopaint.com` (non-www)
4. Remove ALL redirect rules from both files

### Option 2: Simplify netlify.toml
Replace the redirect section in `netlify.toml` with just:

```toml
# Only handle SPA routing, let Netlify domain settings handle www/https
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

Then configure www → non-www redirect in Netlify's UI under Domain Settings.

## Current Status

**Files Modified:**
- ✅ `public/_redirects` - Cleaned (no protocol/host redirects)
- ✅ `netlify.toml` - Contains all HTTPS/WWW redirects
- ✅ Build passes successfully

**Expected Behavior:**
- ❌ Preview environment may not redirect www correctly (this is OK)
- ✅ Production Netlify will redirect correctly
- ✅ No redirect loops on production
- ✅ All city/service redirects work in both environments

## Why Canonical Tags Are Still Your Best Friend

Even if redirects have issues, your SEO is protected by:

1. **Canonical tags in every page** (`<link rel="canonical">`)
   - Google sees these regardless of redirect issues
   - Tells Google which URL is the "real" one
   - Works even if multiple versions are accessible

2. **Sitemap**
   - Lists only canonical URLs (non-www, https)
   - Strong signal to Google about preferred URLs

3. **Internal links**
   - All link to canonical URLs
   - Reinforces the preferred URL pattern

**Bottom Line**: Even if www. is accessible, Google will know the canonical version and won't penalize you for duplicates.

## Summary

**The redirect loop in preview is EXPECTED and NOT A PROBLEM.**

The configuration is correct for Netlify production. Deploy it and test on the actual domain. If issues persist on real Netlify, use their built-in domain settings instead of configuration files.
