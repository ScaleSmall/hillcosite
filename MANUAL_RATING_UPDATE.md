# Manual Rating Update Guide

## Quick Start (No API Required)

This guide shows you how to manually update your Google Business Profile rating on your website without needing access to Google Cloud APIs.

## What You Need

1. Access to your Supabase dashboard
2. Your current GBP rating and review count (from Google Business Profile)

## How to Update Your Rating

### Step 1: Check Your Current GBP Rating

1. Go to [Google Business Profile](https://business.google.com/)
2. Sign in with the client's account (or have them check)
3. Note down:
   - **Rating**: e.g., 4.9
   - **Review Count**: e.g., 150

### Step 2: Add Rating to Supabase

1. Go to your Supabase project dashboard
2. Click on **Table Editor** in the left sidebar
3. Find and click on the `gbp_ratings` table
4. Click the **"Insert row"** button (top right)
5. Fill in the fields:
   - `rating_value`: Enter the rating (e.g., 4.9)
   - `review_count`: Enter the number of reviews (e.g., 150)
   - `place_id`: Enter "manual" or leave blank
   - `fetched_at`: Leave blank (auto-fills with current time)
6. Click **"Save"**

### Step 3: Verify It's Working

1. Open your website in a new private/incognito window
2. View the page source (Right-click > View Page Source)
3. Search for "aggregateRating" (Ctrl+F / Cmd+F)
4. You should see your rating displayed in the schema markup like this:

```json
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "4.9",
  "reviewCount": "150",
  "bestRating": "5",
  "worstRating": "1"
}
```

## Important Notes

### Rating Display Rules

Your rating will ONLY display if:
- Rating is **4.5 stars or higher**
- Review count is **greater than 0**

If your rating is below 4.5, it will NOT appear on your website (this is intentional - it protects your SEO).

### When to Update

Update your rating whenever:
- You notice the rating has changed significantly
- You've received several new reviews
- Monthly (recommended to keep it fresh)

**Pro Tip**: Set a monthly calendar reminder to update the rating.

### Multiple Entries Are OK

Don't worry about having multiple entries in the `gbp_ratings` table. The website always displays the **most recent** entry (by timestamp).

You can keep historical data for tracking purposes.

## Quick SQL Method (Alternative)

If you prefer using SQL, you can run this query in Supabase SQL Editor:

```sql
-- Insert a new rating
INSERT INTO gbp_ratings (rating_value, review_count, place_id)
VALUES (4.9, 150, 'manual');

-- View current displayed rating
SELECT rating_value, review_count, fetched_at
FROM gbp_ratings
ORDER BY fetched_at DESC
LIMIT 1;
```

## Troubleshooting

### Rating not showing on website

1. **Check if rating is high enough**: Must be 4.5 or higher
2. **Verify database entry**: Go to Table Editor > gbp_ratings and confirm your entry exists
3. **Clear cache**: Try opening the website in a private/incognito window
4. **Check for errors**: Open browser console (F12) and look for errors

### Wrong rating showing

The website displays the **latest** entry by timestamp. If an old rating is showing:
1. Go to Table Editor > gbp_ratings
2. Sort by `fetched_at` (descending)
3. Check the most recent entry
4. Add a new entry with the correct rating

### Need to hide rating temporarily

If you want to temporarily remove the rating from your website:
1. Go to Table Editor > gbp_ratings
2. Find the current entry
3. Click the row and delete it

OR insert a rating below 4.5 (it won't display):
```sql
INSERT INTO gbp_ratings (rating_value, review_count, place_id)
VALUES (4.4, 150, 'manual-hidden');
```

## Monthly Update Checklist

- [ ] Check current GBP rating and review count
- [ ] Open Supabase dashboard
- [ ] Go to Table Editor > gbp_ratings
- [ ] Insert new row with current rating
- [ ] Verify on website (view page source, search for "aggregateRating")
- [ ] Document rating in your records (optional)

## Need Help?

If you run into issues:
1. Check that the `gbp_ratings` table exists in Supabase
2. Verify you have permission to insert rows
3. Make sure rating_value is a number (not text)
4. Check browser console for JavaScript errors
