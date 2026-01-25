# Production Environment Setup

## Critical Environment Variables for Edge Functions

Your edge functions require these environment variables to be set in **Supabase Dashboard** (not in your hosting platform):

### Required for GBP Rating Function (`fetch-gbp-rating`)
```
GOOGLE_API_KEY=your_google_api_key_here
GOOGLE_PLACE_ID=your_google_business_place_id
SUPABASE_URL=https://jsliktxrbzwhxrtcyoxv.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### Required for CPI/Pricing Functions (`fetch-cpi-data`)
```
BLS_API_KEY=your_bls_api_key (optional, has fallback)
FRED_API_KEY=your_fred_api_key (optional fallback)
SUPABASE_URL=https://jsliktxrbzwhxrtcyoxv.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### Auto-Available in Supabase
These are automatically set in Supabase edge functions:
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `SUPABASE_ANON_KEY`

## How to Fix 5xx Server Errors

### Step 1: Set Supabase Edge Function Secrets
Go to **Supabase Dashboard → Project Settings → Edge Functions → Secrets**

Add these secrets:
1. **GOOGLE_API_KEY** - Get from [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
   - Enable "Places API" for your project

2. **GOOGLE_PLACE_ID** - Your Google Business Profile Place ID
   - Find it at: https://developers.google.com/maps/documentation/places/web-service/place-id

3. **BLS_API_KEY** (Optional) - Get from [BLS.gov Registration](https://www.bls.gov/developers/api_signature_v2.htm)
   - Free registration required

4. **FRED_API_KEY** (Optional) - Get from [FRED API Key Request](https://fred.stlouisfed.org/docs/api/api_key.html)
   - Free API key for economic data

### Step 2: Verify Edge Functions Are Deployed
Check that all edge functions are deployed in Supabase:
```bash
# These should all show as deployed in Supabase Dashboard
- fetch-gbp-rating
- get-pricing-data
- fetch-cpi-data
- annual-pricing-automation
- send-pricing-notification
- send-rating-alert
```

### Step 3: Test Each Function
Test each function individually from Supabase Dashboard:
1. Go to **Edge Functions** tab
2. Select function
3. Click **Invoke Function**
4. Check response for errors

## Frontend Environment Variables

Your hosting platform (Netlify, Vercel, etc.) needs these:

```
VITE_SUPABASE_URL=https://jsliktxrbzwhxrtcyoxv.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

## Diagnosing 5xx Errors

### Common Causes:
1. **Missing API Keys** - Edge functions fail when required API keys are not set
2. **Database Connection** - RLS policies or missing tables
3. **External API Failures** - Google Places API, BLS API might be down or rate limited
4. **CORS Issues** - Frontend calling edge functions from wrong domain

### How to Debug:
1. Check Supabase **Logs → Edge Functions** for error messages
2. Look for "Missing environment variable" errors
3. Verify API keys are valid and not expired
4. Check API usage limits (Google Places API has quotas)

## Google Search Console Issues Summary

### Fixed Issues:
✅ **Duplicate Content (18 pages)** - Fixed by:
- Making neighborhood slugs unique across hubs
- Adding detailed, unique descriptions for each area
- Changed slugs like:
  - `clarksville` → `clarksville`, `clarksville-west`, `clarksville-historic`
  - `davenport-ranch` → `davenport-ranch`, `davenport-ranch-west`
  - etc.

### To Fix (Action Required):
🔴 **Server Errors (42 pages)** - Set edge function environment variables in Supabase
🟡 **Crawled but Not Indexed (53 pages)** - Will improve once 5xx errors are fixed
⚪ **Page with Redirect (50 pages)** - This is normal and expected (not an issue)

### After Fixing Environment Variables:
1. **Request re-indexing** in Google Search Console for affected URLs
2. **Monitor server errors** - should drop to 0 within 7-14 days
3. **Submit updated sitemap** - Already generated at `/sitemap.xml`

## Next Steps

1. Set all required environment variables in Supabase Dashboard
2. Test each edge function to ensure they return 200 responses
3. Monitor Google Search Console for reduction in 5xx errors over next 2 weeks
4. Request re-crawl of affected pages once errors are resolved
