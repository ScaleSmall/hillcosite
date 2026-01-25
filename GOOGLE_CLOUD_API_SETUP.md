# Google Cloud Platform API Setup Guide

## What You Need

You need a **Google Cloud Platform (GCP) API Key** - this is different from:
- ❌ Google Analytics API key
- ❌ Google Ads API key
- ❌ Google Maps JavaScript API key (though similar)
- ✅ **Google Cloud Console API Key** (what you need)

---

## Step-by-Step Setup

### 1. Access Google Cloud Console

Go to: **https://console.cloud.google.com/**

- Sign in with your Google account
- If this is your first time, you may need to accept terms

### 2. Create or Select a Project

**Option A - Create New Project:**
1. Click the project dropdown at the top
2. Click "New Project"
3. Name it (e.g., "Hill Country Painting Website")
4. Click "Create"
5. Wait 10-30 seconds for project creation

**Option B - Use Existing Project:**
1. Click the project dropdown at the top
2. Select your existing project

### 3. Enable Places API

1. In the left sidebar, click "APIs & Services" → "Library"
2. In the search bar, type: **Places API**
3. Click on "Places API (New)" in the results
4. Click the blue **"Enable"** button
5. Wait for it to enable (takes a few seconds)

### 4. Create API Key

1. In the left sidebar, go to "APIs & Services" → "Credentials"
2. Click the "+ CREATE CREDENTIALS" button at the top
3. Select **"API Key"** from the dropdown
4. A popup will appear with your new API key
5. **Copy this key immediately** - you'll need it later

### 5. Restrict the API Key (Important for Security)

1. In the popup, click "Edit API key" (or click the pencil icon next to your key)
2. Under "API restrictions":
   - Select **"Restrict key"**
   - Check the box for **"Places API"**
3. Under "Application restrictions" (optional but recommended):
   - Select "HTTP referrers (web sites)"
   - Add your domains:
     - `https://yourdomain.com/*`
     - `https://www.yourdomain.com/*`
4. Click **"Save"** at the bottom

### 6. Get Your Google Place ID

**Important:** Place ID ≠ Business Profile ID
- ✅ **Place ID**: Alphanumeric (ChIJ...) - what we need
- ❌ **Business Profile ID**: Numeric only - NOT what we need

**How to find your Place ID:**

1. Go to: **https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder**
2. In the search box, type your business name: "Hill Country Painting Austin TX"
3. Click on your business when it appears in the dropdown
4. The Place ID will be displayed in the info panel
5. Copy the Place ID (it starts with "ChIJ...")

Example Place ID: `ChIJAQAAAAAAAAAA12345678`

**Alternative Method:**
- Search your business on Google Maps
- Click on your business listing
- Look at the URL - the Place ID is embedded in it
- Or use the "Share" button and look for the Place ID in the link

---

## Common Confusion: Place ID vs Business Profile ID

Many users confuse these two identifiers. Here's the difference:

| Feature | Place ID ✅ | Business Profile ID ❌ |
|---------|------------|----------------------|
| **Format** | `ChIJXXXXXXXXXXXX` (alphanumeric) | `12345678901234567890` (numeric only) |
| **Used By** | Google Places API | Google Business Profile dashboard |
| **Where Found** | Place ID Finder tool, Maps URLs | GBP dashboard URL |
| **Purpose** | API calls for reviews, ratings, data | Managing your business listing |
| **What We Need** | ✅ YES - this one! | ❌ NO - wrong ID |

**If you're looking at your Google Business Profile dashboard and see a long number in the URL, that's NOT what we need.**

**Example URLs:**
- ❌ GBP Dashboard: `https://business.google.com/dashboard/l/12345678901234567890`
  - The `12345678901234567890` is your Business Profile ID (not what we need)

- ✅ Place ID Finder: Shows `ChIJN1t_tDeuEmsRUsoyG83frY4`
  - This alphanumeric string is your Place ID (what we need!)

---

## Add to Supabase

Now that you have both keys:

### Go to Supabase Dashboard

https://supabase.com/dashboard/project/jsliktxrbzwhxrtcyoxv/settings/functions

### Add Secrets

1. Click **"Edge Functions"** in the left sidebar
2. Click **"Secrets"** tab
3. Click **"+ New Secret"** button

**Add Secret #1:**
- Name: `GOOGLE_API_KEY`
- Value: [paste your GCP API key from step 4/5]
- Click "Save"

**Add Secret #2:**
- Name: `GOOGLE_PLACE_ID`
- Value: [paste your Place ID from step 6]
- Click "Save"

---

## Test It Works

### In Supabase Dashboard:

1. Go to **"Edge Functions"** tab
2. Click on **"fetch-gbp-rating"** function
3. Click **"Invoke"** button
4. You should see a **200 success response** (not 500 error)

### Example Success Response:
```json
{
  "rating": 4.9,
  "total_reviews": 127,
  "fetched_at": "2026-01-25T10:30:00Z"
}
```

---

## Cost & Quotas

### Free Tier:
- **Places API:** 500 free requests per month
- Your site makes ~1-2 requests per hour = ~1,500/month
- **You'll need to enable billing** but won't be charged unless you exceed free tier

### Enable Billing (Required):

1. In Google Cloud Console, go to "Billing"
2. Click "Link a billing account"
3. Add a credit card
4. Set up budget alerts (recommended: alert at $10/month)

**Typical cost for this site:** $0-5/month (well within free tier)

---

## Troubleshooting

### Error: "API key not valid"
- Make sure you copied the entire key (usually starts with `AIza`)
- Check that Places API is enabled
- Wait 2-3 minutes for API key activation

### Error: "This API project is not authorized"
- Enable Places API (see step 3)
- Make sure you're using the correct project
- Wait 1-2 minutes after enabling

### Error: "You must enable Billing"
- Add a credit card in Google Cloud Console
- Enable billing for your project
- Wait 5 minutes and try again

### Still getting 5xx errors after setup?
- Check Supabase Edge Function logs
- Verify both secrets are set correctly (no extra spaces)
- Try re-creating the API key with fewer restrictions

---

## Quick Reference

| What | Where to Find It | Supabase Secret Name |
|------|------------------|---------------------|
| GCP API Key | console.cloud.google.com → Credentials | `GOOGLE_API_KEY` |
| Place ID | developers.google.com/maps/...place-id | `GOOGLE_PLACE_ID` |
| BLS Key (optional) | bls.gov/developers | `BLS_API_KEY` |
| FRED Key (optional) | fred.stlouisfed.org/docs/api | `FRED_API_KEY` |

---

## Security Notes

✅ **DO:**
- Restrict API key to only Places API
- Set HTTP referrer restrictions
- Monitor usage in Google Cloud Console
- Set up billing alerts

❌ **DON'T:**
- Share your API key publicly
- Commit API keys to GitHub
- Use the same key for multiple unrelated projects
- Skip API restrictions (leaves you vulnerable to theft)

---

**Once complete, proceed to deploy your site and the 5xx errors will be resolved! ✅**
