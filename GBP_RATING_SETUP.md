# Google Business Profile Rating System Setup

## Overview
This system automatically fetches your Google Business Profile rating daily, stores it in Supabase, and displays it on your website only if the rating is 4.5 or above. If the rating drops below 4.5, an email alert is sent.

## Architecture

### Components
1. **Database Table**: `gbp_ratings` - Stores rating history
2. **Edge Function**: `fetch-gbp-rating` - Fetches rating from Google Places API
3. **Edge Function**: `send-rating-alert` - Sends email alerts for low ratings
4. **Frontend Helper**: `src/lib/gbpRatings.ts` - Fetches latest rating for display

### Data Flow
1. Cron job triggers `fetch-gbp-rating` daily at 9 AM UTC
2. Function fetches rating from Google Places API
3. Rating is stored in Supabase `gbp_ratings` table
4. If rating < 4.5, `send-rating-alert` is called
5. Frontend fetches latest rating from Supabase for display

## Required Environment Variables

### For Edge Functions (Auto-configured in Supabase)
- `GOOGLE_API_KEY` - Your Google Cloud API key with Places API enabled
- `GOOGLE_PLACE_ID` - Your Google Business Profile Place ID
- `RESEND_API_KEY` - Your Resend API key for sending emails
- `SUPABASE_URL` - Auto-configured
- `SUPABASE_SERVICE_ROLE_KEY` - Auto-configured

## Setup Instructions

### 1. Get Google Places API Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable the **Places API**
4. Create API credentials (API Key)
5. Find your Place ID:
   - **Note**: Service-area businesses (SABs) have Place IDs just like businesses with physical locations
   - Go to [Place ID Finder](https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder)
   - Search for "Hill Country Painting Austin TX"
   - Copy the Place ID
   - **Alternative**: Search your business on Google, if you see a Knowledge Panel (business card) on the right, you have a valid GBP with a Place ID

### 2. Get Resend API Key

1. Sign up at [Resend.com](https://resend.com)
2. Verify your domain `hillcopaint.com` in Resend
3. Create an API key in the Resend dashboard
4. Add DNS records as instructed by Resend

### 3. Configure Environment Variables in Supabase

The secrets are automatically configured. You just need to provide the values:

- `GOOGLE_API_KEY`: [Your Google API Key]
- `GOOGLE_PLACE_ID`: [Your Place ID]
- `RESEND_API_KEY`: [Your Resend API Key]

### 4. Setup Cron Job

**Option A: Supabase Dashboard (Recommended)**
1. Go to Supabase Dashboard > Database > Cron Jobs
2. Create new cron job:
   - Name: `fetch-gbp-rating-daily`
   - Schedule: `0 9 * * *` (Daily at 9 AM UTC)
   - SQL:
   ```sql
   SELECT net.http_post(
     url := '[YOUR_SUPABASE_URL]/functions/v1/fetch-gbp-rating',
     headers := jsonb_build_object(
       'Content-Type', 'application/json',
       'Authorization', 'Bearer [YOUR_SERVICE_ROLE_KEY]'
     ),
     body := '{}'::jsonb
   ) as request_id;
   ```

**Option B: Manual Testing**
You can manually trigger the function anytime:
```bash
curl -X POST '[YOUR_SUPABASE_URL]/functions/v1/fetch-gbp-rating' \
  -H 'Authorization: Bearer [YOUR_SERVICE_ROLE_KEY]' \
  -H 'Content-Type: application/json'
```

## Email Alert Configuration

### Alert Rules
- Alert is sent when rating < 4.5
- Debounce: Only one alert per 7 days
- Recipients: kris@hillcopaint.com, admin@scalesmall.ai

### Alert Email Format
```
Subject: ALERT: GBP Rating Below 4.5

Current Rating: X.X/5.0
Review Count: XXX
Timestamp: [ISO timestamp]

Action Required:
1. Check recent reviews on Google Business Profile
2. Respond to any negative reviews professionally
3. Address any service quality issues mentioned
4. Consider reaching out to unhappy customers
```

## Frontend Display

The rating is automatically displayed in schema markup only if:
- Rating data exists in database
- Rating is >= 4.5
- Review count is > 0

If rating < 4.5, the AggregateRating schema is completely omitted.

## Testing

### Test the fetch function manually:
```bash
curl -X POST '[YOUR_SUPABASE_URL]/functions/v1/fetch-gbp-rating' \
  -H 'Authorization: Bearer [SERVICE_ROLE_KEY]' \
  -H 'Content-Type: application/json'
```

### Check stored ratings:
```sql
SELECT * FROM gbp_ratings ORDER BY fetched_at DESC LIMIT 5;
```

### Test email alert manually:
```bash
curl -X POST '[YOUR_SUPABASE_URL]/functions/v1/send-rating-alert' \
  -H 'Authorization: Bearer [SERVICE_ROLE_KEY]' \
  -H 'Content-Type: application/json' \
  -d '{"rating":4.2,"reviewCount":100,"timestamp":"2024-01-20T10:00:00Z"}'
```

## Monitoring

- Check Supabase Edge Function logs for errors
- Query `gbp_ratings` table to see fetch history
- Verify cron job is running in Supabase dashboard

## Troubleshooting

### Rating not updating
1. Check cron job is scheduled and running
2. Verify GOOGLE_API_KEY and GOOGLE_PLACE_ID are correct
3. Check Edge Function logs for errors

### Email alerts not sending
1. Verify RESEND_API_KEY is correct
2. Check domain is verified in Resend
3. Check Edge Function logs for send-rating-alert

### Rating not displaying on site
1. Check if rating >= 4.5
2. Verify data exists in gbp_ratings table
3. Check browser console for errors
