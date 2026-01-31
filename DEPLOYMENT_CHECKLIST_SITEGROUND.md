# SiteGround Deployment Checklist - Fix 5xx Errors

## Pre-Deployment: Build Locally

Run these commands in your project directory:

```bash
# 1. Build the project
npm run build

# 2. Verify build succeeded - you should see "✓ built in X.XXs"
# 3. Check that dist/ folder was created
ls -la dist/
```

**Expected output**: You should see these files/folders in `dist/`:
- `index.html` (main HTML file)
- `assets/` (folder with JS and CSS bundles)
- `.htaccess` (server configuration)
- `env.js` (environment variables)
- `sitemap.xml` (generated sitemap)
- All image files (logo.png, og-image.jpg, etc.)

## Deployment Steps

### Step 1: Access SiteGround File Manager

1. Log in to SiteGround: https://my.siteground.com
2. Click **Site Tools** for hillcopaint.com
3. Go to **Site** → **File Manager**
4. Navigate to `public_html/` (or your web root)

### Step 2: Backup Current Files (Important!)

Before making changes:

1. In File Manager, select all files in `public_html/`
2. Click **Compress** → Create ZIP backup
3. Download the backup to your computer
4. Name it something like `hillcopaint-backup-2026-01-31.zip`

### Step 3: Clear Old Files

**Option A: Delete all files (recommended if site is broken)**
1. Select all files in `public_html/`
2. Click **Delete**
3. Confirm deletion

**Option B: Selective replacement (if site partially works)**
1. Delete only `index.html` and `assets/` folder
2. Keep other files (.htaccess, env.js, images)

### Step 4: Upload New Files

**Method 1: ZIP Upload (Fastest)**
1. On your computer, go to `dist/` folder
2. Select ALL files and folders in `dist/`
3. Create a ZIP file of the contents (not the dist folder itself!)
4. In SiteGround File Manager, click **Upload**
5. Upload the ZIP file
6. Click **Extract** → Extract Here
7. Delete the ZIP file after extraction

**Method 2: FTP Upload**
1. Use an FTP client (FileZilla, etc.)
2. Connect to SiteGround FTP:
   - Host: hillcopaint.com (or FTP host from SiteGround)
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21 (or 22 for SFTP)
3. Navigate to `public_html/`
4. Upload ALL contents of your local `dist/` folder

### Step 5: Verify Critical Files

After upload, check that these files exist in `public_html/`:

**Must-Have Files:**
- ✅ `index.html` - Main HTML file
- ✅ `.htaccess` - Server configuration (may be hidden, enable "Show hidden files")
- ✅ `env.js` - Supabase credentials
- ✅ `sitemap.xml` - Sitemap for SEO

**Must-Have Folders:**
- ✅ `assets/` - Contains all JS and CSS bundles
- ✅ `assets/js/` - JavaScript bundles
- ✅ (Other asset folders)

### Step 6: Verify env.js Has Credentials

1. Open `public_html/env.js` in File Manager
2. Verify it contains:

```javascript
window.__ENV = {
  SUPABASE_URL: "https://jsliktxrbzwhxrtcyoxv.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpzbGlrdHhyYnp3aHhydGN5b3h2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk2NDExODUsImV4cCI6MjA3NTIxNzE4NX0.ET0IHF0bkMtWx8v4ui5-GznnXzIY8WBvWiw7YhRdTMk"
};
```

**If the file has empty values**, the site will fail to load blog posts and gallery images.

### Step 7: Check File Permissions

In SiteGround File Manager:

1. Select all files in `public_html/`
2. Right-click → **Change Permissions**
3. Set permissions:
   - **Files**: 644 (rw-r--r--)
   - **Folders**: 755 (rwxr-xr-x)

**Special files:**
- `.htaccess` → 644
- `index.html` → 644
- `env.js` → 644

### Step 8: Clear Caches

SiteGround has multiple caching layers:

1. **Server Cache**:
   - Go to Site Tools → **Speed** → **Caching**
   - Click **Flush Cache** for "Dynamic Cache"
   - Click **Flush Cache** for "NGINX Direct Delivery"

2. **Cloudflare Cache** (if enabled):
   - Go to Cloudflare dashboard
   - Click **Caching** → **Purge Everything**

3. **Browser Cache**:
   - Open site in incognito/private window
   - Or hard refresh: Ctrl+Shift+R (Windows) / Cmd+Shift+R (Mac)

### Step 9: Test the Site

**Test 1: Homepage**
- Visit: https://www.hillcopaint.com/
- Expected: Site loads without errors

**Test 2: Service Pages**
- Visit: https://www.hillcopaint.com/services/interior-painting
- Expected: Page loads correctly

**Test 3: Blog**
- Visit: https://www.hillcopaint.com/blog
- Expected: Blog posts display

**Test 4: 404 Handling**
- Visit: https://www.hillcopaint.com/fake-page-that-does-not-exist
- Expected: 404 page or redirects to homepage

### Step 10: Test with Google URL Inspection

1. Go to Google Search Console: https://search.google.com/search-console
2. Select your property (hillcopaint.com)
3. Go to **URL Inspection** tool
4. Enter: `https://www.hillcopaint.com/`
5. Click **Test Live URL**

**Expected result**:
- ✅ "URL is available to Google"
- ✅ Page fetch: Successful
- ✅ Indexing allowed: Yes

## Troubleshooting Common Issues

### Issue 1: Site Still Shows Old Content

**Cause**: Browser or server cache
**Fix**:
1. Clear SiteGround cache (see Step 8)
2. Test in incognito window
3. Wait 5 minutes and try again

### Issue 2: 404 Errors on All Pages Except Homepage

**Cause**: .htaccess not uploaded or not working
**Fix**:
1. Verify `.htaccess` exists in `public_html/`
2. Check file permissions (should be 644)
3. Verify `RewriteEngine On` is in the file
4. Contact SiteGround support to enable mod_rewrite

### Issue 3: Blank White Page

**Cause**: JavaScript files not loading
**Fix**:
1. Open browser DevTools (F12)
2. Check Console for errors
3. Check Network tab for failed requests
4. Verify `assets/` folder uploaded correctly
5. Check file permissions on assets folder (755)

### Issue 4: Blog Posts Don't Show

**Cause**: Missing or incorrect Supabase credentials
**Fix**:
1. Verify `env.js` has correct credentials (see Step 6)
2. Test Supabase connection from browser console:
   ```javascript
   console.log(window.__ENV);
   // Should show SUPABASE_URL and SUPABASE_ANON_KEY
   ```

### Issue 5: Still Getting 5xx Errors

**Cause**: Server configuration issue
**Fix**:
1. Check error logs in SiteGround:
   - Site Tools → **Statistics** → **Error Log**
2. Look for specific error messages
3. Contact SiteGround support with:
   - Error log entries
   - Time of error
   - URLs affected

## After Successful Deployment

### 1. Request Google Re-Crawl

1. Google Search Console → URL Inspection
2. Enter each important URL:
   - https://www.hillcopaint.com/
   - https://www.hillcopaint.com/services/interior-painting
   - https://www.hillcopaint.com/services/exterior-painting
   - (And other key pages)
3. Click **Request Indexing** for each

### 2. Verify Structured Data

1. Go to: https://search.google.com/test/rich-results
2. Enter: https://www.hillcopaint.com/
3. Verify:
   - ✅ All 4 review/rating items are valid
   - ✅ Business type is "LocalBusiness"
   - ✅ No "Invalid object type" errors

### 3. Monitor for 24-48 Hours

- Check Google Search Console for crawl errors
- Monitor SiteGround error logs
- Test site functionality regularly

## Quick Reference: File Checklist

After deployment, verify these files exist:

```
public_html/
├── index.html ✅
├── .htaccess ✅
├── env.js ✅
├── sitemap.xml ✅
├── robots.txt ✅
├── favicon.ico ✅
├── logo.png ✅
├── og-image.jpg ✅
├── assets/
│   ├── js/ ✅
│   │   ├── index-[hash].js
│   │   ├── react-vendor-[hash].js
│   │   └── (other JS bundles)
│   └── index-[hash].css ✅
└── (other image files)
```

## Need Help?

If you're still experiencing issues after following this guide:

**Contact SiteGround Support:**
- Live Chat: https://my.siteground.com
- Phone: Check your SiteGround dashboard for phone number
- Tell them: "My React SPA is returning 5xx errors. I've uploaded all files. Please check mod_rewrite is enabled and review error logs."

**Provide them:**
- Domain: hillcopaint.com
- Issue: 5xx server errors
- Time: When you last uploaded files
- Error logs: Copy from Statistics → Error Log
