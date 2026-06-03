# Deployment Checklist - Fix Google Search Console Issues

## ✅ Completed Steps

### 1. Fixed Duplicate Content Issue (18 Pages)
- ✅ Updated neighborhood slugs to be unique across hubs
- ✅ Added detailed, location-specific descriptions
- ✅ Updated all route definitions in App.tsx
- ✅ Renamed component files to match new slugs
- ✅ Build completed successfully
- ✅ Canonical tag validation passed

**Changed URLs:**
- Clarksville variations: `clarksville`, `clarksville-west`, `clarksville-historic`
- Davenport Ranch: `davenport-ranch`, `davenport-ranch-west`
- Pemberton Heights: `pemberton-heights`, `pemberton-heights-south`
- Old Enfield: `old-enfield`, `old-enfield-west`
- Bryker Woods: `bryker-woods`, `bryker-woods-west`
- Old West Austin: `old-west-austin-central`, `old-west-austin-historic`

### 2. Identified Server Error Root Cause
- ✅ Reviewed all edge functions
- ✅ Found missing environment variables causing 5xx errors
- ✅ Documented required API keys

---

## 🔧 Required Actions (Must Complete)

### Step 1: Set Supabase Edge Function Secrets

**Go to:** [Supabase Dashboard](https://supabase.com/dashboard/project/ndggkorglcaznukkhapz/settings/functions)

Navigate to: **Project Settings → Edge Functions → Secrets**

Add these secrets (case-sensitive):

#### For GBP Rating Function
```
GOOGLE_API_KEY=<your-key-here>
GOOGLE_PLACE_ID=<your-place-id-here>
```

**How to get these:**
1. **GOOGLE_API_KEY** (Google Cloud Platform API Key):
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one
   - In the left sidebar, go to "APIs & Services" → "Library"
   - Search for and enable "Places API (New)"
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "API Key"
   - Copy the API key
   - Click "Edit API key" to restrict it:
     - Under "API restrictions", select "Restrict key"
     - Check "Places API"
     - Save

   **Important:** This is your Google Cloud Platform (GCP) API key, not a Google Analytics or Google Ads key

2. **GOOGLE_PLACE_ID:**

   **Important:** This is NOT your Business Profile ID (numeric). You need your Place ID (alphanumeric starting with "ChIJ").

   - Go to [Place ID Finder](https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder)
   - Search for your business: "Hill Country Painting Austin TX"
   - Click on your business in the results
   - Copy the Place ID (format: `ChIJXXXXXXXXXXXX...`)

#### For Pricing Automation (Optional but Recommended)
```
BLS_API_KEY=<your-key-here>
FRED_API_KEY=<your-key-here>
```

**How to get these:**
1. **BLS_API_KEY:** Register at [BLS.gov](https://www.bls.gov/developers/api_signature_v2.htm)
2. **FRED_API_KEY:** Request at [FRED](https://fred.stlouisfed.org/docs/api/api_key.html)

### Step 2: Test Edge Functions

After setting secrets, test each function in Supabase Dashboard:

1. Go to **Edge Functions** tab
2. Select `fetch-gbp-rating`
3. Click **Invoke Function**
4. Verify you get a 200 response (not 500)

Repeat for:
- ✅ `get-pricing-data` (should work without secrets)
- ✅ `fetch-cpi-data` (needs BLS/FRED keys)
- ✅ `fetch-gbp-rating` (needs Google keys)

### Step 3: Deploy to Production

**Option A: If using Netlify:**
```bash
# Build is already done, just deploy
netlify deploy --prod --dir=dist
```

**Option B: If using another platform:**
1. Upload the `dist` folder to your hosting
2. Ensure environment variables are set:
   - `VITE_SUPABASE_URL=https://ndggkorglcaznukkhapz.supabase.co`
   - `VITE_SUPABASE_ANON_KEY=eyJhbGc...` (from .env file)

### Step 4: Verify Production Site

1. Visit your production site
2. Open browser console (F12)
3. Check for any 5xx errors in Network tab
4. Navigate to a few neighborhood pages to verify they load

### Step 5: Request Google Re-Indexing

**Wait 24 hours after deployment, then:**

1. Go to [Google Search Console](https://search.google.com/search-console)
2. For each affected URL (from the 42 server error pages):
   - Click "URL Inspection" tool
   - Paste the URL
   - Click "Request Indexing"

**Bulk approach (faster):**
1. Export list of affected URLs from Search Console
2. Submit updated sitemap: `https://yoursite.com/sitemap.xml`
3. Google will re-crawl automatically within 7-14 days

---

## 📊 Expected Timeline

| Action | Timeline |
|--------|----------|
| Set environment variables | 15 minutes |
| Deploy to production | 30 minutes |
| Google re-crawl | 7-14 days |
| Server errors resolved | 14-21 days |
| Full indexing of new pages | 30-45 days |

---

## 🎯 Success Metrics

Check Google Search Console after 2 weeks:

- **Server Errors (5xx):** Should drop from 42 to 0
- **Duplicate Content:** Should drop from 18 to 0
- **Crawled but Not Indexed:** Should improve as errors resolve
- **Total Indexed Pages:** Should increase over 30 days

---

## 🆘 Troubleshooting

### If server errors persist:

1. **Check Supabase Logs:**
   - Dashboard → Logs → Edge Functions
   - Look for specific error messages

2. **Verify API Keys:**
   - Test Google API key in [API Explorer](https://developers.google.com/maps/documentation/places/web-service/details)
   - Ensure Places API is enabled

3. **Check API Quotas:**
   - Google Places API: 500 free requests/month
   - May need billing enabled for production use

### If pages aren't getting indexed:

1. Verify sitemap is accessible: `https://yoursite.com/sitemap.xml`
2. Check robots.txt allows crawling
3. Ensure canonical tags are correct (use URL Inspection tool)
4. Wait longer - Google can take 4-6 weeks for new content

---

## 📝 Notes

- All code changes are already committed
- Build completed successfully with no errors
- Canonical validation passed
- 82 URLs in sitemap
- All environment variables documented in `.env.production.example`

**Current Status:** Ready to deploy once Supabase secrets are set ✅
