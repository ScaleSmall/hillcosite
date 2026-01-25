# Automated GBP Rating System - Setup Guide

## Overview

The automated Google Business Profile rating infrastructure is **fully deployed and ready**!

⚠️ **Current Status**: Website is using static placeholder values (4.9 stars, 150 reviews) because API credentials have not been provided yet.

Once the client provides Google Places API credentials and you configure the environment variables, the system will:
- ✅ Automatically fetch the GBP rating **every day at 9 AM UTC** (3 AM CST)
- ✅ Store the rating history in your Supabase database
- ✅ Display the rating on your website (only if 4.5+ stars)
- ✅ Send email alerts if rating drops below 4.5

## What's Already Done

✅ Database table created (`gbp_ratings`)
✅ Edge functions deployed (`fetch-gbp-rating`, `send-rating-alert`)
✅ Cron job scheduled (daily at 9 AM UTC)
✅ Frontend integration complete

**What you need:** Client must provide Google Cloud access or API credentials.

---

## Step-by-Step Setup

### Step 1: Get Google Places API Credentials

#### 1.1 Create/Access Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Sign in with a Google account that has access (or create new account)
3. Click "Select a project" → "New Project"
   - Name: "Hill Country Painting API"
   - Click "Create"

#### 1.2 Enable Places API

1. In the left sidebar, go to "APIs & Services" → "Library"
2. Search for "Places API"
3. Click on "Places API" in the results
4. Click "Enable"

#### 1.3 Create API Key

1. Go to "APIs & Services" → "Credentials"
2. Click "+ Create Credentials" → "API Key"
3. **Important**: Click "Restrict Key" to secure it
   - Under "API restrictions":
     - Select "Restrict key"
     - Choose "Places API" from the dropdown
   - Under "Application restrictions" (optional but recommended):
     - Select "IP addresses"
     - Add Supabase's IP range (or leave unrestricted for simplicity)
4. Copy your API key (looks like: `AIzaSyD...`)

#### 1.4 Find Your Place ID

**Method 1: Place ID Finder Tool**
1. Go to [Place ID Finder](https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder)
2. Search for "Hill Country Painting Austin TX"
3. Click on the result
4. Copy the Place ID (looks like: `ChIJ...`)

**Method 2: Google Business Profile**
1. Go to [Google Business Profile](https://business.google.com/)
2. Select your business
3. Click "Info" → "Profile short name" or look at the URL
4. Use the Place ID finder above with your business name

**Service Area Businesses**: Even if you don't have a physical storefront, you still have a Place ID if you have a Google Business Profile!

### Step 2: Get Resend API Key (For Email Alerts)

#### 2.1 Sign Up for Resend

1. Go to [Resend.com](https://resend.com)
2. Sign up for a free account (allows 100 emails/day)
3. Verify your email

#### 2.2 Add Domain

1. In Resend dashboard, go to "Domains"
2. Click "Add Domain"
3. Enter `hillcopaint.com`
4. Add the DNS records shown to your domain provider:
   - **SPF Record**: Add TXT record
   - **DKIM Record**: Add TXT record
   - **DMARC Record**: Add TXT record (optional but recommended)
5. Wait for verification (can take a few minutes to 24 hours)

**Note**: If you don't have access to DNS, you can use Resend's test domain initially, but emails may go to spam.

#### 2.3 Create API Key

1. Go to "API Keys" in Resend dashboard
2. Click "Create API Key"
3. Name: "Hill Country Painting - GBP Alerts"
4. Permission: "Sending access"
5. Copy your API key (starts with `re_...`)

### Step 3: Configure Supabase Environment Variables

1. Go to your [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Go to "Project Settings" (gear icon) → "Edge Functions"
4. Scroll down to "Secrets" section
5. Add these secrets:

```bash
GOOGLE_API_KEY=AIzaSyD...  (your Google API key)
GOOGLE_PLACE_ID=ChIJ...    (your Google Place ID)
RESEND_API_KEY=re_...      (your Resend API key)
```

**Important**:
- Click "Save" after adding each secret
- Don't include quotes around the values
- Make sure there are no extra spaces

### Step 4: Configure Supabase URL for Cron Job

The cron job needs to know your Supabase URL to call the edge function.

#### Option A: Using Supabase Dashboard (Recommended)

1. Stay in Supabase Dashboard
2. Go to "Database" → "Database Settings" → "Connection string"
3. Copy your project URL (looks like: `https://xxxxx.supabase.co`)
4. Go to "SQL Editor"
5. Run this query (replace with your actual URL):

```sql
-- Set the Supabase URL for the cron job
ALTER DATABASE postgres SET app.settings.supabase_url = 'https://your-project-ref.supabase.co';

-- Also set service role key setting (the function will read from env)
-- This just ensures the function can find it
ALTER DATABASE postgres SET app.settings.service_role_key = '';
```

#### Option B: Manual Test (Verify It Works)

Test the edge function manually before waiting for the cron:

```bash
curl -X POST 'https://your-project-ref.supabase.co/functions/v1/fetch-gbp-rating' \
  -H 'Authorization: Bearer YOUR_SERVICE_ROLE_KEY' \
  -H 'Content-Type: application/json'
```

You can find your Service Role Key in: Project Settings → API → service_role key (secret)

**Expected Response:**
```json
{
  "success": true,
  "rating": 4.9,
  "reviewCount": 150,
  "alertSent": false
}
```

### Step 5: Verify Everything Works

#### Check 1: Verify Cron Job is Scheduled

Run this in Supabase SQL Editor:

```sql
SELECT * FROM cron.job WHERE jobname = 'fetch-gbp-rating-daily';
```

You should see one row with:
- `jobname`: fetch-gbp-rating-daily
- `schedule`: 0 9 * * *
- `active`: true

#### Check 2: Manually Trigger the Function

Either run the curl command from Step 4, or run this SQL:

```sql
SELECT trigger_gbp_rating_fetch();
```

#### Check 3: Verify Data in Database

```sql
SELECT * FROM gbp_ratings ORDER BY fetched_at DESC LIMIT 5;
```

You should see your rating stored!

#### Check 4: Verify Website Display

1. Open your website: https://hillcopaint.com
2. Right-click → "View Page Source"
3. Search for "aggregateRating" (Ctrl+F / Cmd+F)
4. You should see your rating in the schema markup

---

## How It Works

### Daily Automation Flow

1. **9:00 AM UTC** (3:00 AM CST) - Cron job triggers
2. **Cron calls** `trigger_gbp_rating_fetch()` function
3. **Function calls** `fetch-gbp-rating` edge function
4. **Edge function:**
   - Fetches rating from Google Places API
   - Stores in `gbp_ratings` table
   - If rating < 4.5, calls `send-rating-alert` edge function
5. **Alert function** (if needed):
   - Sends email to kris@hillcopaint.com and admin@scalesmall.ai
   - Updates `alert_sent_at` timestamp
   - Won't send another alert for 7 days

### Email Alert Example

If your rating drops below 4.5, you'll receive an email:

```
Subject: ALERT: GBP Rating Below 4.5

Current Rating: 4.3/5.0
Review Count: 152
Timestamp: 2025-01-25T09:00:00Z

Action Required:
1. Check recent reviews on Google Business Profile
2. Respond to any negative reviews professionally
3. Address any service quality issues mentioned
4. Consider reaching out to unhappy customers
```

### Website Display Logic

Your rating displays on the website ONLY if:
- Rating >= 4.5 stars
- Review count > 0
- Data exists in the database

This protects your SEO - low ratings won't show to users or search engines!

---

## Monitoring & Maintenance

### Check Rating History

```sql
-- View all ratings
SELECT rating_value, review_count, fetched_at, alert_sent_at
FROM gbp_ratings
ORDER BY fetched_at DESC;

-- View rating trend over last 30 days
SELECT
  DATE(fetched_at) as date,
  AVG(rating_value) as avg_rating,
  MAX(review_count) as reviews
FROM gbp_ratings
WHERE fetched_at > NOW() - INTERVAL '30 days'
GROUP BY DATE(fetched_at)
ORDER BY date DESC;
```

### Check Cron Job Execution

```sql
-- View cron job history (if pg_cron logging is enabled)
SELECT * FROM cron.job_run_details
WHERE jobid = (SELECT jobid FROM cron.job WHERE jobname = 'fetch-gbp-rating-daily')
ORDER BY start_time DESC
LIMIT 10;
```

### Manually Trigger Update (Anytime)

```sql
SELECT trigger_gbp_rating_fetch();
```

Or use curl to test the edge function directly.

### Cleanup Old Data (Optional)

Keep only last 90 days of data:

```sql
DELETE FROM gbp_ratings
WHERE fetched_at < NOW() - INTERVAL '90 days';
```

---

## Troubleshooting

### Edge Function Not Running

1. Check edge function logs:
   - Go to Supabase Dashboard → Edge Functions → fetch-gbp-rating → Logs

2. Verify environment variables are set:
   - Project Settings → Edge Functions → Secrets
   - Make sure GOOGLE_API_KEY, GOOGLE_PLACE_ID, RESEND_API_KEY are there

### Google API Error

**Error**: "ZERO_RESULTS" or "INVALID_REQUEST"
- **Solution**: Double-check your Place ID is correct

**Error**: "REQUEST_DENIED"
- **Solution**: Make sure Places API is enabled in Google Cloud Console
- **Solution**: Check API key restrictions aren't too strict

**Error**: Quota exceeded
- **Solution**: You've exceeded free tier (shouldn't happen with 1 request/day)

### No Data in Database

1. Check if cron job is running:
   ```sql
   SELECT * FROM cron.job WHERE jobname = 'fetch-gbp-rating-daily';
   ```

2. Check if Supabase URL is configured:
   ```sql
   SHOW app.settings.supabase_url;
   ```

3. Manually trigger to test:
   ```sql
   SELECT trigger_gbp_rating_fetch();
   ```

### Email Alerts Not Sending

1. Check Resend API key is correct
2. Verify domain is verified in Resend (go to Resend dashboard)
3. Check edge function logs for `send-rating-alert`
4. Test manually:
   ```bash
   curl -X POST 'https://your-project.supabase.co/functions/v1/send-rating-alert' \
     -H 'Authorization: Bearer YOUR_SERVICE_ROLE_KEY' \
     -H 'Content-Type: application/json' \
     -d '{"rating":4.2,"reviewCount":100,"timestamp":"2025-01-25T10:00:00Z"}'
   ```

### Rating Not Showing on Website

1. Check if rating >= 4.5:
   ```sql
   SELECT rating_value FROM gbp_ratings ORDER BY fetched_at DESC LIMIT 1;
   ```

2. Clear browser cache and check in incognito mode

3. Check browser console for JavaScript errors

---

## Configuration Reference

### Environment Variables (Supabase Secrets)

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `GOOGLE_API_KEY` | Yes | Google Cloud API key with Places API enabled | `AIzaSyD...` |
| `GOOGLE_PLACE_ID` | Yes | Your Google Business Profile Place ID | `ChIJ...` |
| `RESEND_API_KEY` | Yes* | Resend API key for sending emails | `re_...` |
| `SUPABASE_URL` | Auto | Your Supabase project URL (auto-configured) | `https://xxx.supabase.co` |
| `SUPABASE_SERVICE_ROLE_KEY` | Auto | Service role key (auto-configured) | `eyJ...` |

\* Required for email alerts. System will work without it, but no alerts will be sent.

### Cron Schedule

| Schedule | Description | When It Runs |
|----------|-------------|--------------|
| `0 9 * * *` | Daily at 9 AM UTC | 3 AM CST / 4 AM CDT |

To change the schedule:

```sql
-- Update to run at different time (e.g., 6 AM UTC = midnight CST)
SELECT cron.schedule(
  'fetch-gbp-rating-daily',
  '0 6 * * *',
  $$SELECT trigger_gbp_rating_fetch()$$
);
```

### Email Recipients

Alerts are sent to:
- kris@hillcopaint.com
- admin@scalesmall.ai

To change recipients, edit `/supabase/functions/send-rating-alert/index.ts` line 60:

```typescript
to: ['kris@hillcopaint.com', 'admin@scalesmall.ai'],
```

---

## Cost Breakdown

### Google Places API
- **Free Tier**: 1 request per day = FREE forever
- **Pricing**: Even if charged, $0.017 per request = $0.50/month

### Resend Email Service
- **Free Tier**: 100 emails/month = FREE
- **Paid**: $20/month for 50,000 emails (only if you exceed free tier)

### Supabase
- Already included in your existing plan

**Total Monthly Cost**: $0 (all within free tiers)

---

## Next Steps

1. ✅ Set up Google Cloud API and get credentials
2. ✅ Set up Resend account and verify domain
3. ✅ Add secrets to Supabase
4. ✅ Configure Supabase URL for cron job
5. ✅ Test manually with curl or SQL
6. ✅ Wait for first automated run (9 AM UTC tomorrow)
7. ✅ Monitor logs and database to confirm it's working

---

## Support

If you run into any issues:

1. Check Supabase Edge Function logs
2. Review this troubleshooting guide
3. Test manually using the SQL and curl commands provided
4. Check that all environment variables are set correctly

The system is robust and will retry automatically every day, so if there's a temporary issue (like API downtime), it will self-correct on the next run.
