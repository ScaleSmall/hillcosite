# Server Error (5xx) - Diagnosis & Fix

## Current Problem

Google URL Inspection shows:
- **Error**: Page cannot be indexed: Server error (5xx)
- **Page fetch**: Failed: Server error (5xx)
- **Time**: Jan 31, 2026, 5:43 PM
- **URL**: https://www.hillcopaint.com/

This means your web server is returning 5xx errors, preventing Google from crawling your site.

## Root Cause Analysis

Based on your project files, you appear to be hosting on **SiteGround** (not Netlify). The 5xx error could be caused by:

### 1. Missing or Corrupt Files on SiteGround
- The `dist` folder may not be properly uploaded
- Critical files (index.html, JS bundles) may be missing
- The `.htaccess` file may have errors

### 2. PHP/Server Configuration Issues
- SiteGround may be trying to parse HTML files as PHP
- Server resource limits may be exceeded
- File permissions may be incorrect

### 3. .htaccess Redirect Loop
- Your .htaccess file may have conflicting redirect rules
- HTTPS enforcement may be misconfigured

## Immediate Actions to Take

### Step 1: Check if Site is Actually Down

Open your site in a browser (not Google's tool):
- Visit: https://www.hillcopaint.com/
- Visit: https://hillcopaint.com/

If the site loads for you but not for Google, the issue is with bot access. If it doesn't load at all, the site is completely down.

### Step 2: Check SiteGround Error Logs

1. Log into SiteGround: https://my.siteground.com
2. Click "Site Tools" for hillcopaint.com
3. Go to **Statistics** → **Error Log**
4. Look for recent 500/503 errors
5. Note the specific error message

Common errors you might see:
- `Internal Server Error` (generic)
- `Too Many Redirects` (redirect loop)
- `Resource Limit Exceeded` (hosting limits)
- `File not found` (missing files)

### Step 3: Verify .htaccess Configuration

Your .htaccess file should look like this for SiteGround:

```apache
# Enable rewrite engine
RewriteEngine On

# Force HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Force WWW
RewriteCond %{HTTP_HOST} !^www\. [NC]
RewriteRule ^(.*)$ https://www.%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# SPA routing - serve index.html for all requests
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^.*$ /index.html [L]
```

**Critical**: If your .htaccess has conflicting rules or is missing, you'll get 5xx errors.

### Step 4: Verify File Upload

Check that these critical files exist on SiteGround:

**In `public_html/` (or your web root):**
- ✅ `index.html` (main HTML file)
- ✅ `.htaccess` (server config)
- ✅ `env.js` (environment variables)
- ✅ `assets/` folder (JS, CSS bundles)
- ✅ `favicon.ico`, `logo.png`, etc.

**File permissions should be:**
- Files: 644 (rw-r--r--)
- Directories: 755 (rwxr-xr-x)

### Step 5: Check Supabase Connection

If the error is happening when the page tries to load data from Supabase:

1. Open SiteGround File Manager
2. Navigate to `public_html/env.js`
3. Verify it contains valid credentials:

```javascript
window.__ENV = {
  SUPABASE_URL: "https://jsliktxrbzwhxrtcyoxv.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpzbGlrdHhyYnp3aHhydGN5b3h2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk2NDExODUsImV4cCI6MjA3NTIxNzE4NX0.ET0IHF0bkMtWx8v4ui5-GznnXzIY8WBvWiw7YhRdTMk"
};
```

If this file has empty values or is missing, the site will fail to load.

## Quick Fixes

### Fix 1: Re-upload the Site (Nuclear Option)

If you can't identify the issue, re-upload everything:

1. Run `npm run build` locally
2. The `dist/` folder contains your compiled site
3. Upload ALL contents of `dist/` to SiteGround's `public_html/` folder
4. Make sure `.htaccess` is uploaded
5. Verify `env.js` has the correct Supabase credentials

### Fix 2: Simplify .htaccess (If Redirect Loop)

If error logs show redirect issues, use this minimal .htaccess:

```apache
RewriteEngine On

# SPA routing only - let SiteGround handle HTTPS in their panel
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^.*$ /index.html [L]
```

Then enable HTTPS and WWW redirect in SiteGround's control panel instead.

### Fix 3: Increase PHP Limits (If Resource Error)

If error logs show memory/execution errors:

1. SiteGround → Site Tools → **Devs** → **PHP Manager**
2. Increase:
   - `memory_limit` to 256M
   - `max_execution_time` to 300
   - `post_max_size` to 64M

### Fix 4: Check Robot Access

Some security settings block bots including Googlebot:

1. SiteGround → Site Tools → **Security** → **Security**
2. Check "Bot Traffic Control"
3. Make sure Googlebot is NOT blocked
4. Whitelist Google's user agents

## Why This Happened After Code Changes

The code changes I made (LocalBusiness vs PaintingContractor) are **client-side only** and cannot cause 5xx errors. Server errors mean:

1. **The files weren't deployed yet** - Old code is still live and has an issue
2. **Deployment failed** - New code was uploaded but with errors
3. **Unrelated server issue** - Hosting platform is having problems

## Testing After Fix

Once you've made changes:

1. **Clear browser cache** and test in incognito
2. **Wait 5 minutes** for SiteGround's cache to clear
3. **Test with Google URL Inspection** again
4. **Check multiple URLs**:
   - Homepage: https://www.hillcopaint.com/
   - About: https://www.hillcopaint.com/about
   - Service: https://www.hillcopaint.com/services/interior-painting

## If Still Broken - Contact Support

If none of these work:

1. **Contact SiteGround Support**:
   - Live chat: https://my.siteground.com
   - Tell them: "My site returns 5xx errors, check error logs"
   - Ask them to verify file permissions and .htaccess

2. **Provide them**:
   - Domain: hillcopaint.com
   - Error time: Jan 31, 2026, 5:43 PM
   - Affected URLs: Homepage and all pages

## Next Steps for Code Deployment

Once the server issue is fixed:

1. Build the latest code: `npm run build`
2. Upload the `dist/` folder to SiteGround
3. Verify `env.js` has correct Supabase credentials
4. Test in browser first
5. Then re-test with Google URL Inspection
6. Request re-indexing in Google Search Console

## Important Notes

- The structured data fixes I made are correct and won't cause 5xx errors
- The build completed successfully locally (no code errors)
- The issue is hosting/deployment-related, not code-related
- Fix the server issue first, then deploy the updated code

## Summary

**Problem**: Server returning 5xx errors to Google
**Cause**: Hosting configuration or file upload issue on SiteGround
**Fix**: Check error logs, verify .htaccess, ensure files are uploaded
**Not caused by**: The code changes (those are correct and tested)
