# 5xx Error Quick Diagnosis Checklist

**Use this checklist to quickly identify and fix the most likely causes of your Feb 8-10, 2026 GSC 5xx errors.**

---

## Step 1: Identify Your Hosting Platform (CRITICAL)

```bash
curl -I https://www.hillcopaint.com/ 2>&1 | grep -i "server:"
```

**If output shows:**
- `server: Netlify` → You're on Netlify → Go to Section A
- `server: Apache` or `server: LiteSpeed` → You're on SiteGround/Apache → Go to Section B
- No server header or unclear → Run full URL test below

**Full URL Test:**
```bash
curl -v https://www.hillcopaint.com/ 2>&1 | head -30
```
Look for server identification in headers.

---

## Section A: If You're on Netlify

### Quick Fixes for Netlify:

**1. Remove Apache Files (They're Causing Conflicts)**
```bash
rm public/.htaccess
git add public/.htaccess
git commit -m "Remove .htaccess (not needed on Netlify)"
git push
```

**2. Verify Netlify Redirects are Working**
```bash
curl -I http://hillcopaint.com/
# Should show: 301 redirect to https://www.hillcopaint.com/
```

**3. Check Edge Functions (Supabase)**
- Go to your Supabase Dashboard → Edge Functions
- Verify only these exist: `get-pricing-data`, `create-blog-post`, `add-gallery-photo`, `generate-sitemap`
- Delete any others OR add missing environment variables

**4. Verify Environment Variables**
- Netlify Dashboard → Site Settings → Environment Variables
- Ensure: `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are set

**5. Deploy**
```bash
npm run build
netlify deploy --prod
```

---

## Section B: If You're on SiteGround/Apache

### Quick Fixes for SiteGround:

**1. Fix sitemap.xml Redirect (HIGH PRIORITY)**

Edit `public/.htaccess` and REMOVE or COMMENT OUT line 14:
```apache
# RewriteRule ^sitemap\.xml$ sitemap.php [L]
```

Reason: This tries to execute a PHP file that either doesn't exist or fails, causing 500 errors.

**2. Remove Netlify Files (They're Ignored But Create Confusion)**
```bash
rm netlify.toml
rm public/_redirects
rm public/_headers
git add netlify.toml public/_redirects public/_headers
git commit -m "Remove Netlify files (using Apache .htaccess)"
git push
```

**3. Verify env.js Has Real Credentials**

On SiteGround File Manager:
1. Navigate to `public_html/env.js`
2. Open the file
3. Ensure it looks like this:

```javascript
window.__ENV = {
  SUPABASE_URL: "https://jsliktxrbzwhxrtcyoxv.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpzbGlrdHhyYnp3aHhydGN5b3h2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk2NDExODUsImV4cCI6MjA3NTIxNzE4NX0.ET0IHF0bkMtWx8v4ui5-GznnXzIY8WBvWiw7YhRdTMk"
};
```

If it has empty strings (`""`), replace with the above.

**4. Check SiteGround Security Settings**
1. Log into SiteGround → Site Tools
2. Go to **Security** → **Security**
3. Check "Bot Traffic Control"
4. Ensure "Googlebot" is NOT blocked
5. If there's a whitelist, add Googlebot user-agents

**5. Clear All Caches**
1. SiteGround → Site Tools → Speed → Caching
2. Click "Flush Cache" for all cache types
3. Clear browser cache (Ctrl+Shift+R)

**6. Upload Fresh Build**
```bash
npm run build
# Upload ENTIRE contents of dist/ folder to public_html/
# Use FTP or SiteGround File Manager
```

---

## Step 2: Test All Critical URLs

Run this script to test status of affected URLs:

```bash
#!/bin/bash
urls=(
  "https://www.hillcopaint.com/"
  "https://www.hillcopaint.com/gallery"
  "https://www.hillcopaint.com/pre-approval"
  "https://www.hillcopaint.com/testimonials"
  "https://www.hillcopaint.com/faq"
  "https://www.hillcopaint.com/services"
  "https://www.hillcopaint.com/services/commercial"
)

echo "Testing URLs..."
for url in "${urls[@]}"; do
  status=$(curl -I -s "$url" 2>&1 | grep "HTTP" | awk '{print $2}')
  echo "$url : $status"
done
```

**Expected Results:**
- All should return: `200` (OK)
- None should return: `500`, `502`, `503`, `504` (Server Errors)
- Redirects `301` are OK if they lead to 200

**If you see 5xx errors:**
- Check error logs (Step 3)
- Verify fixes were applied correctly
- Contact hosting support with specific error URLs

---

## Step 3: Check Error Logs

### On SiteGround:
1. Log into SiteGround → Site Tools
2. Go to **Statistics** → **Error Log**
3. Look for errors from Feb 8-10, 2026
4. Note specific error messages

### Common Errors and Fixes:

| Error Message | Cause | Fix |
|---------------|-------|-----|
| `RewriteRule: bad flag delimiters` | `.htaccess` syntax error | Review .htaccess for typos |
| `File does not exist: sitemap.php` | Missing PHP file | Remove sitemap.php rewrite rule |
| `PHP Fatal error: Allowed memory size` | PHP memory limit | Increase to 512M in PHP Manager |
| `Too many redirects` | Redirect loop | Check redirect rules for conflicts |
| `Connection timeout` | Slow server response | Check resource usage, optimize queries |
| `ModSecurity: Access denied` | WAF blocking requests | Whitelist Googlebot in Security settings |

---

## Step 4: Test with Googlebot User-Agent

Google may see different results than you. Test with Googlebot user-agent:

```bash
curl -I -A "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" \
  https://www.hillcopaint.com/gallery
```

**Compare to regular curl:**
```bash
curl -I https://www.hillcopaint.com/gallery
```

**If Googlebot gets 403/503 but regular curl gets 200:**
- Issue: Bot blocking or WAF rules
- Fix: Whitelist Googlebot in security settings

**If both get 5xx:**
- Issue: Actual server error
- Fix: Check error logs, apply fixes from this checklist

---

## Step 5: Verify Protocol & Host Redirects

Test all combinations redirect correctly:

```bash
# Test 1: http → https
curl -I http://hillcopaint.com/ 2>&1 | grep "HTTP\|Location"
# Should show: 301 and Location: https://www.hillcopaint.com/

# Test 2: non-www → www
curl -I https://hillcopaint.com/ 2>&1 | grep "HTTP\|Location"
# Should show: 301 and Location: https://www.hillcopaint.com/

# Test 3: Canonical (should NOT redirect)
curl -I https://www.hillcopaint.com/ 2>&1 | grep "HTTP"
# Should show: 200 OK
```

**If any test fails:**
- Check redirect rules in .htaccess (Apache) or _redirects (Netlify)
- Ensure no conflicts between files
- Verify force=true settings

---

## Step 6: Request Google Re-Crawl (After 48 Hours)

Only do this AFTER fixes are deployed and verified:

1. Wait 48 hours for fixes to stabilize
2. Go to [Google Search Console](https://search.google.com/search-console)
3. Use **URL Inspection** tool
4. Test 5-10 affected URLs
5. For each URL showing "Server error (5xx)":
   - Click "Request Indexing"
   - Wait for confirmation

**Important:**
- Don't request all URLs at once (seen as spam)
- Request 10-15 per day maximum
- Prioritize high-value pages (homepage, services, gallery)

---

## Success Criteria

After fixes, you should see:

**Immediate (Within 1 Hour):**
- [ ] All URLs return 200 OK (not 5xx)
- [ ] Protocol/host redirects work correctly
- [ ] Sitemap.xml loads successfully
- [ ] No errors in browser console

**Within 7 Days:**
- [ ] Google Search Console shows reduced 5xx count
- [ ] URL Inspection shows "URL is available to Google"
- [ ] No new 5xx errors appearing

**Within 30 Days:**
- [ ] GSC "Server error (5xx)" count = 0-5 (down from dozens)
- [ ] Affected URLs move from "Server error" to "Indexed"
- [ ] Validation status shows "Passed"

---

## Still Having Issues?

### If 5xx Errors Persist:

**1. Get Exact Error Message**
```bash
curl -v https://www.hillcopaint.com/gallery 2>&1
# Provide FULL output to support team
```

**2. Check Supabase Status**
```bash
curl -I https://jsliktxrbzwhxrtcyoxv.supabase.co/rest/v1/
# Should return 200 OK
# If not: Supabase may be down or misconfigured
```

**3. Test from Multiple Locations**
- Use tools like https://www.webpagetest.org/
- Test from different countries/networks
- Isolate if issue is regional or global

**4. Contact Hosting Support**
Provide them:
- Domain: hillcopaint.com
- Error time: Feb 8-10, 2026
- Specific URLs returning 5xx
- Error log excerpts
- Steps you've already tried

**5. Review Full Analysis**
Read the complete root-cause analysis document:
`5XX_ERROR_ROOT_CAUSE_ANALYSIS.md`

---

## Quick Reference: Common Fixes

| Problem | Quick Fix | Time |
|---------|-----------|------|
| Wrong hosting config | Remove .htaccess (Netlify) OR Remove netlify.toml (Apache) | 5 min |
| sitemap.xml errors | Remove `RewriteRule ^sitemap\.xml$ sitemap.php [L]` from .htaccess | 2 min |
| Empty env.js | Edit env.js with real Supabase credentials | 5 min |
| Bot blocking | Whitelist Googlebot in security settings | 10 min |
| Redirect loops | Consolidate redirect rules to single file | 15 min |
| Edge function 500s | Delete broken functions OR add API keys | 30 min |
| PHP memory limit | Increase to 512M in hosting panel | 5 min |

---

**Last Updated:** February 12, 2026
**Priority:** CRITICAL
**Expected Resolution Time:** 1-3 hours for fixes + 7-30 days for Google re-indexing
