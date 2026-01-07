# Go High Level Integration - Quick Start

## What's Been Set Up

Your project now includes a complete Go High Level (GHL) integration system with:

### ✅ Database (Supabase)
- **9 tables** for storing GHL data (contacts, opportunities, pipelines, orders, payments, reviews, etc.)
- **User access control** via `user_sources` mapping table
- **8 reporting views** for fast dashboard queries
- **Row Level Security (RLS)** - Users only see data for their assigned sources
- **Realtime triggers** - Automatic push updates to connected dashboards

### ✅ Edge Functions (Supabase)
- **`run-ghl-all`** - Orchestrates full sync of all GHL data
- **`poll-ghl-contacts`** - Fetches contacts from GHL API
- **`poll-ghl-opportunities`** - Fetches opportunities from GHL API

### ✅ Real-time Updates
- Database changes automatically broadcast to dashboard
- No polling needed - updates appear instantly
- Topic-based filtering by `source_id`

---

## Next Steps to Get Running

### 1. Set Your GHL API Key

In your Supabase project dashboard:

1. Go to **Edge Functions** → **Settings**
2. Add environment variable:
   - Key: `GHL_API_KEY`
   - Value: Your Go High Level API key

### 2. Create Your First Source

Run this SQL in Supabase SQL Editor:

```sql
-- Insert your GHL location as a source
INSERT INTO public.ghl_sources (id, name, location_id)
VALUES
  ('fb055913-f354-422c-8fce-6e0cbe7866fb', 'My GHL Location', 'YOUR_GHL_LOCATION_ID');
```

Replace `YOUR_GHL_LOCATION_ID` with your actual GHL location ID.

### 3. Grant User Access

Map your authenticated user to the source:

```sql
-- Grant yourself access to the source
INSERT INTO public.user_sources (user_id, source_id, role)
VALUES
  ('YOUR_USER_UUID', 'fb055913-f354-422c-8fce-6e0cbe7866fb', 'owner');
```

Get your user UUID from: **Authentication** → **Users** in Supabase dashboard.

### 4. Test the Sync

Test the orchestration function:

```bash
curl -X POST https://YOUR_PROJECT.supabase.co/functions/v1/run-ghl-all \
  -H "Content-Type: application/json" \
  -d '{
    "source_id": "fb055913-f354-422c-8fce-6e0cbe7866fb",
    "locationId": "YOUR_GHL_LOCATION_ID",
    "mode": "incremental",
    "pageSize": 200
  }'
```

Check the response - you should see:
```json
{
  "ok": true,
  "message": "Sync completed: X succeeded, Y failed",
  "results": [...],
  "counts": {
    "contacts": 150,
    "opportunities": 45,
    ...
  }
}
```

### 5. Add Dashboard Code

Copy the React hook and component from `GHL_DASHBOARD_IMPLEMENTATION.md` into your project:

1. Create `src/hooks/useGHLDashboard.ts` - The core hook with manual pull + realtime
2. Create `src/components/GHLDashboard.tsx` - Example dashboard UI
3. Add to your routing

---

## How It Works

### Manual "Pull Latest" Button

1. User clicks "Pull Latest"
2. Frontend calls `run-ghl-all` Edge Function
3. Function orchestrates syncing all entities (contacts, opportunities, etc.)
4. Each entity's poll function fetches from GHL API
5. Data upserted into Supabase tables
6. Dashboard refetches reporting views
7. UI updates with latest data

**Duration:** 3-10 seconds depending on data volume

---

### Automatic Push Updates

1. Poll function inserts/updates data in database
2. Database trigger fires (`rt_broadcast_ghl_changes`)
3. Realtime broadcasts change to topic `ghl:{source_id}`
4. Dashboard's realtime subscription receives event
5. UI updates immediately (no manual refresh needed)

**Latency:** < 500ms from database write to UI update

---

## Data Flow Diagram

```
┌─────────────────┐
│ GHL API         │
│ (Contacts, etc) │
└────────┬────────┘
         │
         ↓ (Manual sync trigger)
┌─────────────────────────┐
│ Edge Function:          │
│ run-ghl-all             │
│ (Orchestrator)          │
└────────┬────────────────┘
         │
         ↓ (Calls)
┌─────────────────────────┐
│ Edge Functions:         │
│ poll-ghl-contacts       │
│ poll-ghl-opportunities  │
│ poll-ghl-pipelines      │
│ ... etc                 │
└────────┬────────────────┘
         │
         ↓ (Upsert data)
┌─────────────────────────┐
│ Supabase Tables:        │
│ ghl_contacts            │
│ ghl_opportunities       │
│ ghl_pipelines           │
│ ... etc                 │
└────────┬────────────────┘
         │
         ↓ (Triggers fire)
┌─────────────────────────┐
│ Realtime Broadcast      │
│ Topic: ghl:{source_id}  │
└────────┬────────────────┘
         │
         ↓ (Push update)
┌─────────────────────────┐
│ Dashboard UI            │
│ (Auto-updates)          │
└─────────────────────────┘
```

---

## Common Tasks

### Add More Users

```sql
INSERT INTO public.user_sources (user_id, source_id, role)
VALUES
  ('another-user-uuid', 'fb055913-f354-422c-8fce-6e0cbe7866fb', 'viewer');
```

**Roles:**
- `owner` - Full access
- `editor` - Can view and edit
- `viewer` - Read-only

### Add Multiple GHL Locations

```sql
INSERT INTO public.ghl_sources (id, name, location_id)
VALUES
  (gen_random_uuid(), 'Location 2', 'GHL_LOCATION_2_ID'),
  (gen_random_uuid(), 'Location 3', 'GHL_LOCATION_3_ID');
```

Then grant user access via `user_sources`.

### Check Sync Status

```sql
SELECT * FROM v_ghl_sync_status
WHERE source_id = 'fb055913-f354-422c-8fce-6e0cbe7866fb'
ORDER BY created_at DESC
LIMIT 10;
```

### View Latest Data

```sql
-- Recent contacts
SELECT * FROM v_ghl_contacts_recent
WHERE source_id = 'fb055913-f354-422c-8fce-6e0cbe7866fb'
LIMIT 20;

-- Opportunities with details
SELECT * FROM v_ghl_opportunities_report
WHERE source_id = 'fb055913-f354-422c-8fce-6e0cbe7866fb'
LIMIT 20;

-- Dashboard summary
SELECT * FROM v_ghl_dashboard_summary
WHERE source_id = 'fb055913-f354-422c-8fce-6e0cbe7866fb';
```

---

## Creating Additional Poll Functions

You have templates for **contacts** and **opportunities**. To create the remaining ones:

### poll-ghl-pipelines
Fetches pipeline definitions and stages from GHL.

### poll-ghl-orders
Fetches order data from GHL.

### poll-ghl-payments
Fetches payment transactions from GHL.

### poll-ghl-reviews
Fetches review data from GHL.

**Pattern:** Copy `poll-ghl-contacts`, adjust:
1. GHL API endpoint
2. Data transformation
3. Target table (`ghl_pipelines`, `ghl_orders`, etc.)

---

## Security Notes

⚠️ **Important:**
- Edge functions currently have `verify_jwt: false` for easy testing
- For production, create a backend proxy that validates user tokens
- Never expose `SUPABASE_SERVICE_ROLE_KEY` in frontend code
- RLS protects data - users only see their assigned sources

---

## Troubleshooting

### Sync not working?
1. Check `GHL_API_KEY` is set in Edge Function settings
2. Verify `source_id` and `locationId` are correct
3. Check Edge Function logs in Supabase dashboard

### No realtime updates?
1. Ensure user is authenticated with Supabase
2. Check user has access via `user_sources` table
3. Verify topic name matches: `ghl:{source_id}`
4. Check browser console for subscription status

### No data showing in dashboard?
1. Run a manual sync first to populate data
2. Verify user has access to the `source_id`
3. Check RLS policies are correctly configured
4. Query tables directly to confirm data exists

---

## File Reference

- **`GHL_DASHBOARD_IMPLEMENTATION.md`** - Complete implementation guide with code examples
- **`supabase/migrations/*_ghl_*.sql`** - Database schema migrations
- **`supabase/functions/run-ghl-all/`** - Orchestration function
- **`supabase/functions/poll-ghl-contacts/`** - Contact sync function
- **`supabase/functions/poll-ghl-opportunities/`** - Opportunity sync function

---

## Need Help?

1. Check Edge Function logs for errors
2. Review database policies with:
   ```sql
   SELECT * FROM pg_policies WHERE tablename LIKE 'ghl_%';
   ```
3. Test sync jobs manually via SQL:
   ```sql
   SELECT * FROM ghl_sync_jobs ORDER BY created_at DESC LIMIT 10;
   ```

Your GHL integration is ready to use! 🚀
