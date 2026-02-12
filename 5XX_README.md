# 5xx Server Error Investigation - Quick Guide

**Issue:** Google Search Console reporting "Server error (5xx)" validation failures (Feb 8-10, 2026)
**Status:** Investigation complete, ready for fixes
**Urgency:** HIGH - Preventing Google indexing

---

## 🚀 Quick Start (30 Seconds)

```bash
# Step 1: Run diagnostic (2 minutes)
./5XX_CURL_TEST_COMMANDS.sh

# Step 2: Read checklist (5 minutes)
# Open: 5XX_QUICK_DIAGNOSIS_CHECKLIST.md

# Step 3: Apply fixes (30 minutes)
# Follow instructions in checklist for your platform

# Step 4: Verify (2 minutes)
./5XX_CURL_TEST_COMMANDS.sh
```

---

## 📚 All Documents (Choose Your Path)

### For Immediate Action
→ **Start here:** `5XX_QUICK_DIAGNOSIS_CHECKLIST.md`
- Step-by-step fixes
- Platform-specific instructions
- Quick reference tables

### For Testing & Verification
→ **Run this:** `./5XX_CURL_TEST_COMMANDS.sh`
- Automated diagnostics
- Before/after comparison
- Color-coded results

### For Deep Understanding
→ **Read this:** `5XX_ERROR_ROOT_CAUSE_ANALYSIS.md`
- Complete technical analysis
- Request lifecycle breakdown
- Monitoring setup guide

### For Overview & Planning
→ **Share this:** `5XX_INVESTIGATION_SUMMARY.md`
- Executive summary
- Timeline expectations
- Team communication templates

---

## 📊 Document Comparison

| Document | Length | Audience | Purpose | When to Use |
|----------|--------|----------|---------|-------------|
| **Quick Checklist** | 3,000 words | Fixers | Immediate action | First response |
| **Curl Script** | Executable | DevOps | Testing | Before & after fixes |
| **Root Cause Analysis** | 25,000 words | Technical | Deep dive | Architecture decisions |
| **Investigation Summary** | 5,000 words | Everyone | Overview | Planning & updates |

---

## ✅ Expected Fix Timeline

```
Day 1 (Today)     → Apply fixes, verify with script
Day 2-3           → Monitor for stability
Day 3             → Request Google re-crawl
Week 1-2          → GSC shows improving 5xx count
Week 2-4          → 5xx errors drop 80%+
Week 4-8          → Full indexing recovery
```

---

## 🔍 Most Common Fixes (Based on Investigation)

### Fix #1: Remove sitemap.php Rewrite (If on Apache)
```apache
# In public/.htaccess, REMOVE line 14:
# RewriteRule ^sitemap\.xml$ sitemap.php [L]
```
**Impact:** High (likely causing 500s on sitemap requests)

### Fix #2: Populate env.js Credentials
```javascript
// public/env.js should have REAL values, not empty strings:
window.__ENV = {
  SUPABASE_URL: "https://jsliktxrbzwhxrtcyoxv.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbG..."
};
```
**Impact:** High (breaks Supabase data loading)

### Fix #3: Remove Platform Conflicts
```bash
# If on Apache: Remove Netlify files
rm netlify.toml public/_redirects

# If on Netlify: Remove Apache files
rm public/.htaccess
```
**Impact:** Medium (reduces confusion, prevents conflicts)

### Fix #4: Whitelist Googlebot
```
# In hosting security settings:
# - Allow "Googlebot" user-agent
# - Whitelist Google IP ranges
# - Disable aggressive bot blocking
```
**Impact:** High (if Googlebot is currently blocked)

---

## 🎯 Success Criteria

**Pass:** All tests show ✓ (green) when running `./5XX_CURL_TEST_COMMANDS.sh`

Specifically:
- [ ] All URLs return 200 OK (not 5xx)
- [ ] Sitemap.xml loads successfully
- [ ] Protocol/host redirects work correctly
- [ ] Googlebot can access site
- [ ] No redirect loops detected
- [ ] Response time < 2 seconds

---

## 🆘 If You're Stuck

1. **Re-run diagnostic script** and save output
2. **Check error logs** on hosting platform
3. **Read relevant checklist section** for your platform
4. **Contact hosting support** with diagnostic output
5. **Share documents with developer** if code changes needed

---

## 📞 Support Resources

**Hosting-Specific:**
- SiteGround: https://my.siteground.com (Live Chat)
- Netlify: https://support.netlify.com

**Google:**
- Search Console: https://search.google.com/search-console
- URL Inspection: Use for testing after fixes

**Supabase:**
- Status: https://status.supabase.com/
- Dashboard: https://supabase.com/dashboard/project/jsliktxrbzwhxrtcyoxv

---

## 🔄 After Fixes Applied

1. **Verify Immediately:**
   ```bash
   ./5XX_CURL_TEST_COMMANDS.sh
   # All tests should pass
   ```

2. **Wait 48 Hours:**
   - Let changes propagate
   - Monitor access logs
   - Check for new errors

3. **Request Google Re-Crawl:**
   - Google Search Console → URL Inspection
   - Test 10-15 priority URLs
   - Request indexing

4. **Monitor Weekly:**
   - GSC → Index → Pages
   - Watch 5xx count decrease
   - Track indexing recovery

---

## 📁 File Organization

```
project/
├── 5XX_README.md (← You are here)
├── 5XX_INVESTIGATION_SUMMARY.md (Overview)
├── 5XX_QUICK_DIAGNOSIS_CHECKLIST.md (Action guide)
├── 5XX_ERROR_ROOT_CAUSE_ANALYSIS.md (Technical deep dive)
├── 5XX_CURL_TEST_COMMANDS.sh (Diagnostic script)
└── [your existing project files]
```

---

## ⚡ One-Liner Commands

```bash
# View summary
cat 5XX_INVESTIGATION_SUMMARY.md

# Run diagnostics
./5XX_CURL_TEST_COMMANDS.sh

# Save diagnostic output
./5XX_CURL_TEST_COMMANDS.sh > diagnostics_$(date +%Y%m%d_%H%M%S).txt

# Test specific URL
curl -I https://www.hillcopaint.com/gallery

# Test with Googlebot UA
curl -I -A "Googlebot/2.1" https://www.hillcopaint.com/

# Check sitemap
curl https://www.hillcopaint.com/sitemap.xml | head -20

# Verify env.js (in browser console)
console.log(window.__ENV)
```

---

## 🏁 Final Checklist

Before closing this investigation, ensure:

- [ ] Diagnostic script run and saved
- [ ] Platform identified (Netlify vs Apache)
- [ ] Platform-specific fixes applied
- [ ] Diagnostic script re-run (all green)
- [ ] Changes deployed to production
- [ ] Error logs checked (no new errors)
- [ ] Monitoring set up for ongoing checks
- [ ] Google re-crawl requested (after 48hr)
- [ ] Team notified of status
- [ ] Documents saved for future reference

---

**Created:** February 12, 2026
**Last Updated:** February 12, 2026
**Status:** Ready for remediation
**Next Action:** Run `./5XX_CURL_TEST_COMMANDS.sh`

---

**Need help?** Start with `5XX_QUICK_DIAGNOSIS_CHECKLIST.md` → Apply fixes → Re-run script → Verify all ✓
