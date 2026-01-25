# Google Business Profile Rating System Setup

## Overview
This system displays your Google Business Profile rating on your website only if the rating is 4.5 or above. The rating is stored in Supabase and can be updated manually or automatically via API.

## Architecture

### Components
1. **Database Table**: `gbp_ratings` - Stores rating history
2. **Frontend Helper**: `src/lib/gbpRatings.ts` - Fetches latest rating for display
3. **Optional Edge Functions**: For automated API fetching (requires Google Cloud access)

### Data Flow
1. Rating is stored in Supabase `gbp_ratings` table (manually or via API)
2. Frontend fetches latest rating from Supabase for display
3. Rating displays only if >= 4.5 stars

## Setup Instructions (Manual Mode - No API Required)

### Step 1: Access Supabase Dashboard

1. Go to your Supabase project dashboard
2. Navigate to **Table Editor** > `gbp_ratings`

### Step 2: Add Your Rating Manually

Click "Insert row" and add:
- `rating_value`: Your current GBP rating (e.g., 4.9)
- `review_count`: Number of reviews (e.g., 150)
- `fetched_at`: Current timestamp (auto-fills)
- `place_id`: Your Google Place ID (optional, can be "manual")

Example:
```sql
INSERT INTO gbp_ratings (rating_value, review_count, place_id)
VALUES (4.9, 150, 'manual');
```

### Step 3: Update Rating Periodically

Whenever your GBP rating changes:
1. Check your rating on Google Business Profile
2. Go to Supabase > Table Editor > `gbp_ratings`
3. Click "Insert row" and add the new rating
4. The website will automatically display the latest rating

**Pro Tip**: Set a monthly reminder to check and update your rating.

---

## Advanced Setup (Automated Mode - Requires Google Cloud Access)

**Note**: Only use this if you have access to the client's Google Cloud account or can get API credentials from them.

### Required Environment Variables
- `GOOGLE_API_KEY` - Google Cloud API key with Places API enabled
- `GOOGLE_PLACE_ID` - Google Business Profile Place ID
- `RESEND_API_KEY` - (Optional) For email alerts when rating drops
- `SUPABASE_URL` - Auto-configured
- `SUPABASE_SERVICE_ROLE_KEY` - Auto-configured

### 1. Get Google Places API Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable the **Places API**
4. Create API credentials (API Key)
5. Find your Place ID:
   - Go to [Place ID Finder](https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder)
   - Search for "Hill Country Painting Austin TX"
   - Copy the Place ID

### 2. Configure Environment Variables in Supabase

Go to Supabase Dashboard > Project Settings > Edge Functions > Manage secrets:

- `GOOGLE_API_KEY`: [Your Google API Key]
- `GOOGLE_PLACE_ID`: [Your Place ID]
- `RESEND_API_KEY`: [Your Resend API Key] (optional)

### 3. Setup Cron Job

Go to Supabase Dashboard > Database > Cron Jobs and create:
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

## How Rating Displays on Your Website

The rating is automatically displayed in schema markup only if:
- Rating data exists in database
- Rating is >= 4.5
- Review count is > 0

If rating < 4.5, the AggregateRating schema is completely omitted from your website (good for SEO).

## Quick Reference: SQL Commands

### View all ratings:
```sql
SELECT * FROM gbp_ratings ORDER BY fetched_at DESC;
```

### Add a new rating manually:
```sql
INSERT INTO gbp_ratings (rating_value, review_count, place_id)
VALUES (4.9, 150, 'manual');
```

### Get current displayed rating:
```sql
SELECT rating_value, review_count, fetched_at
FROM gbp_ratings
ORDER BY fetched_at DESC
LIMIT 1;
```

### Delete old ratings (keep last 90 days):
```sql
DELETE FROM gbp_ratings
WHERE fetched_at < NOW() - INTERVAL '90 days';
```

## Troubleshooting

### Rating not displaying on site
1. Check if rating >= 4.5
2. Verify data exists in gbp_ratings table:
   ```sql
   SELECT * FROM gbp_ratings ORDER BY fetched_at DESC LIMIT 1;
   ```
3. Check browser console for errors
4. Clear browser cache and refresh

### Wrong rating showing
1. Check the most recent entry in `gbp_ratings` table
2. The website always displays the latest entry (by `fetched_at` timestamp)
3. Add a new entry to update the displayed rating

## Automated Mode Troubleshooting

### Rating not updating automatically
1. Check cron job is scheduled and running
2. Verify GOOGLE_API_KEY and GOOGLE_PLACE_ID are correct
3. Check Edge Function logs for errors

### Email alerts not sending
1. Verify RESEND_API_KEY is correct
2. Check domain is verified in Resend
3. Check Edge Function logs for send-rating-alert
