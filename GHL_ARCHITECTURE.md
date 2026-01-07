# Go High Level Integration - System Architecture

## Complete System Overview

```
┌────────────────────────────────────────────────────────────────────────┐
│                         USER DASHBOARD (React)                         │
│                                                                        │
│  ┌──────────────────┐              ┌─────────────────────────────┐  │
│  │ Manual Controls  │              │  Realtime Subscription      │  │
│  │                  │              │                             │  │
│  │ [Pull Latest] ───┼──────────┐   │  Topic: ghl:{source_id}    │  │
│  │ [Refresh Data]   │          │   │  Events: INSERT/UPDATE/DEL  │  │
│  └──────────────────┘          │   └─────────────────────────────┘  │
│                                 │                ▲                    │
│  ┌──────────────────────────────┼────────────────┼─────────────────┐ │
│  │  Dashboard Data Display      │                │                 │ │
│  │  • Contacts List             │                │ (Auto-update)   │ │
│  │  • Opportunities Pipeline    │                │                 │ │
│  │  • Revenue Summary          │                │                 │ │
│  │  • Reviews & Ratings        │                │                 │ │
│  │  • Sync Status              │                │                 │ │
│  └──────────────────────────────┼────────────────┼─────────────────┘ │
└─────────────────────────────────┼────────────────┼───────────────────┘
                                  │                │
                                  │ HTTP POST      │ WebSocket
                                  ↓                │
┌──────────────────────────────────────────────────┼──────────────────────┐
│                      SUPABASE PLATFORM           │                      │
│                                                  │                      │
│  ┌─────────────────────────────────────────────────────────────────┐  │
│  │              EDGE FUNCTIONS (Deno Runtime)                      │  │
│  │                                                                 │  │
│  │  ┌─────────────────────────────────────────────────────────┐  │  │
│  │  │  run-ghl-all (Orchestrator)                             │  │  │
│  │  │  • Creates sync jobs in database                        │  │  │
│  │  │  • Calls individual poll functions sequentially         │  │  │
│  │  │  • Updates job status & progress                        │  │  │
│  │  │  • Returns aggregated results                           │  │  │
│  │  └────────────────┬────────────────────────────────────────┘  │  │
│  │                   │ Calls                                      │  │
│  │                   ↓                                            │  │
│  │  ┌────────────────────────────────────────────────────────┐  │  │
│  │  │  Individual Poll Functions                             │  │  │
│  │  │                                                         │  │  │
│  │  │  • poll-ghl-contacts      → Fetch contacts            │  │  │
│  │  │  • poll-ghl-opportunities → Fetch opportunities       │  │  │
│  │  │  • poll-ghl-pipelines     → Fetch pipeline configs    │  │  │
│  │  │  • poll-ghl-orders        → Fetch orders              │  │  │
│  │  │  • poll-ghl-payments      → Fetch payment records     │  │  │
│  │  │  • poll-ghl-reviews       → Fetch reviews/ratings     │  │  │
│  │  │                                                         │  │  │
│  │  │  Each function:                                        │  │  │
│  │  │  1. Fetches data from GHL API (paginated)            │  │  │
│  │  │  2. Transforms to database schema                     │  │  │
│  │  │  3. Upserts into Supabase table                       │  │  │
│  │  │  4. Returns count & status                            │  │  │
│  │  └────────────────┬───────────────────────────────────────┘  │  │
│  └───────────────────┼────────────────────────────────────────────┘  │
│                      │ Upsert                                        │
│                      ↓                                               │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │              POSTGRES DATABASE                                 │ │
│  │                                                                │ │
│  │  Core Tables:                                                 │ │
│  │  ┌──────────────────────────────────────────────────────┐    │ │
│  │  │  • ghl_sources      (Location configs)               │    │ │
│  │  │  • user_sources     (User access mapping)            │    │ │
│  │  │  • ghl_contacts     (Contact records)                │    │ │
│  │  │  • ghl_opportunities (Deals/Opportunities)           │    │ │
│  │  │  • ghl_pipelines    (Pipeline definitions)           │    │ │
│  │  │  • ghl_orders       (Order records)                  │    │ │
│  │  │  • ghl_payments     (Payment transactions)           │    │ │
│  │  │  • ghl_reviews      (Review data)                    │    │ │
│  │  │  • ghl_sync_jobs    (Sync job tracking)              │    │ │
│  │  └──────────────────────────────────────────────────────┘    │ │
│  │                                                                │ │
│  │  Reporting Views (Optimized for Dashboard):                   │ │
│  │  ┌──────────────────────────────────────────────────────┐    │ │
│  │  │  • v_ghl_contacts_recent                             │    │ │
│  │  │  • v_ghl_opportunities_report                        │    │ │
│  │  │  • v_ghl_pipeline_stage_summary                      │    │ │
│  │  │  • v_ghl_revenue_summary                             │    │ │
│  │  │  • v_ghl_reviews_summary                             │    │ │
│  │  │  • v_ghl_sync_status                                 │    │ │
│  │  │  • v_ghl_dashboard_summary                           │    │ │
│  │  └──────────────────────────────────────────────────────┘    │ │
│  │                                                                │ │
│  │  Security (Row Level Security):                               │ │
│  │  • Users only see data for source_ids in user_sources        │ │
│  │  • Service role bypasses RLS for Edge Functions              │ │
│  │  • Public cannot access any GHL data                          │ │
│  │                                                                │ │
│  │  Triggers (After INSERT/UPDATE/DELETE):                       │ │
│  │  ┌──────────────────────────────────────────────────────┐    │ │
│  │  │  rt_broadcast_ghl_changes()                          │    │ │
│  │  │  • Fires on all GHL table changes                    │    │ │
│  │  │  • Extracts source_id from record                    │    │ │
│  │  │  • Builds topic: ghl:{source_id}                     │    │ │
│  │  │  • Broadcasts to Realtime                            │    │ │
│  │  └──────────────────┬───────────────────────────────────┘    │ │
│  └─────────────────────┼────────────────────────────────────────┘ │
│                        │ Broadcast                                 │
│                        ↓                                           │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │              REALTIME (WebSocket Server)                       │ │
│  │                                                                │ │
│  │  • Maintains WebSocket connections to clients                 │ │
│  │  • Filters messages by topic & RLS policies                   │ │
│  │  • Pushes changes to subscribed dashboards                    │ │
│  │                                                                │ │
│  │  RLS on realtime.messages:                                    │ │
│  │  • Users can only receive messages for topics where           │ │
│  │    they have access via user_sources mapping                  │ │
│  └────────────────────────────────────────────────────────────────┘ │
│                        │                                           │
└────────────────────────┼───────────────────────────────────────────┘
                         │ Push
                         ↓ (WebSocket)
                    [Dashboard UI Updates]
                         ▲
                         │
                    External Trigger
                         │
┌────────────────────────┼──────────────────────────────────────────┐
│                  GO HIGH LEVEL API                                 │
│                                                                    │
│  • Contacts API      → /contacts                                  │
│  • Opportunities API → /opportunities                             │
│  • Pipelines API     → /pipelines                                 │
│  • Orders API        → /orders (if available)                     │
│  • Payments API      → /payments (if available)                   │
│  • Reviews API       → /reviews (if available)                    │
│                                                                    │
│  Authentication: Bearer token (GHL_API_KEY)                       │
│  Rate limits: Per GHL tier                                        │
└────────────────────────────────────────────────────────────────────┘
```

---

## Request Flow: Manual "Pull Latest"

### Step-by-Step Execution

```
1. User clicks "Pull Latest" button
   │
   ↓
2. Dashboard calls Edge Function
   POST /functions/v1/run-ghl-all
   Body: { source_id, locationId, mode, pageSize }
   │
   ↓
3. run-ghl-all creates sync job records
   INSERT INTO ghl_sync_jobs (status='running', job_type='contacts')
   INSERT INTO ghl_sync_jobs (status='running', job_type='opportunities')
   ... (for each entity type)
   │
   ↓
4. run-ghl-all calls poll-ghl-contacts
   POST /functions/v1/poll-ghl-contacts
   │
   ↓
5. poll-ghl-contacts fetches from GHL API
   GET https://services.leadconnectorhq.com/contacts/?locationId=...
   │
   ↓
6. poll-ghl-contacts processes each page
   For each contact:
     UPSERT INTO ghl_contacts (source_id, ghl_contact_id, ...)
   │
   ↓  (Trigger fires)
7. rt_broadcast_ghl_changes() broadcasts
   Topic: ghl:{source_id}
   Payload: { table: 'ghl_contacts', operation: 'INSERT', new: {...} }
   │
   ↓
8. Realtime pushes to subscribed dashboards
   WebSocket message sent to connected clients
   │
   ↓
9. Dashboard receives broadcast event
   Event handler updates UI immediately
   │
   ↓
10. poll-ghl-contacts returns result
    { ok: true, count: 150, pages: 2 }
    │
    ↓
11. run-ghl-all updates sync job
    UPDATE ghl_sync_jobs SET status='completed', completed_at=now()
    │
    ↓
12. run-ghl-all repeats for next entity
    POST /functions/v1/poll-ghl-opportunities
    ... (steps 5-11 repeat)
    │
    ↓
13. All entities synced
    run-ghl-all returns aggregated results
    { ok: true, results: [...], counts: {...} }
    │
    ↓
14. Dashboard shows success message
    "Sync completed: 6 succeeded, 0 failed"
    │
    ↓
15. Dashboard refetches reporting views
    SELECT * FROM v_ghl_dashboard_summary WHERE source_id=...
    SELECT * FROM v_ghl_contacts_recent WHERE source_id=...
    ... (refresh all widgets)
    │
    ↓
16. UI displays updated data
    All charts, tables, and stats reflect latest GHL data
```

**Total Duration:** 3-10 seconds depending on data volume

---

## Realtime Update Flow: Automatic Push

### When GHL Data Changes

```
1. External event occurs
   (e.g., New contact added in GHL, opportunity updated, etc.)
   │
   │ (User manually syncs OR scheduled job runs)
   ↓
2. poll-ghl-* function runs
   Fetches latest data from GHL API
   │
   ↓
3. New/updated record upserted
   UPSERT INTO ghl_contacts (...)
   ON CONFLICT (source_id, ghl_contact_id) DO UPDATE
   │
   ↓ (AFTER INSERT/UPDATE trigger)
4. rt_broadcast_ghl_changes() fires
   BEGIN
     v_source_id := NEW.source_id;
     v_topic := 'ghl:' || v_source_id::text;
     v_payload := {
       table: 'ghl_contacts',
       operation: 'UPDATE',
       old: {...},
       new: {...},
       timestamp: now()
     };
     PERFORM realtime.broadcast_changes(...);
   END
   │
   ↓
5. Realtime receives broadcast
   Message queued for topic 'ghl:{source_id}'
   │
   ↓
6. RLS policy checks message recipients
   Policy: ghl_source_broadcast_receivers
   WHERE EXISTS (
     SELECT 1 FROM user_sources
     WHERE user_id = auth.uid()
       AND source_id::text = split_part(topic, ':', 2)
   )
   │
   ↓
7. Message sent to authorized subscribers
   WebSocket push to connected dashboard clients
   │
   ↓
8. Dashboard subscription receives event
   channel.on('broadcast', { event: 'UPDATE' }, handleChange)
   │
   ↓
9. handleChange() processes update
   if (table === 'ghl_contacts') {
     // Option A: Patch local state
     setContacts(prev => prev.map(c =>
       c.id === newRow.id ? newRow : c
     ));

     // Option B: Refetch affected view
     refetchContacts();
   }
   │
   ↓
10. UI updates immediately
    Contact card shows new email/phone
    Updated timestamp reflects change
    No page refresh needed
```

**Latency:** < 500ms from database write to UI update

---

## Security Architecture

### Access Control Flow

```
┌────────────────────────────────────────────────────────────────┐
│                    AUTHENTICATION LAYER                        │
│                                                                │
│  User authenticates with Supabase Auth                        │
│  Receives JWT with user_id claim                              │
│  JWT included in all requests                                 │
└────────────────────┬───────────────────────────────────────────┘
                     │
                     ↓
┌────────────────────────────────────────────────────────────────┐
│                    AUTHORIZATION LAYER                         │
│                                                                │
│  user_sources mapping table:                                  │
│  ┌──────────┬────────────┬──────┐                            │
│  │ user_id  │ source_id  │ role │                            │
│  ├──────────┼────────────┼──────┤                            │
│  │ alice-id │ source-1   │ owner│                            │
│  │ bob-id   │ source-1   │ viewer│                           │
│  │ alice-id │ source-2   │ editor│                           │
│  └──────────┴────────────┴──────┘                            │
│                                                                │
│  This table defines which users can access which sources      │
└────────────────────┬───────────────────────────────────────────┘
                     │
                     ↓
┌────────────────────────────────────────────────────────────────┐
│                  ROW LEVEL SECURITY (RLS)                      │
│                                                                │
│  Every GHL table has policies:                                │
│                                                                │
│  SELECT Policy:                                               │
│  USING (                                                      │
│    EXISTS (                                                   │
│      SELECT 1 FROM user_sources                              │
│      WHERE user_sources.user_id = auth.uid()                 │
│        AND user_sources.source_id = [table].source_id        │
│    )                                                          │
│  )                                                            │
│                                                                │
│  Effect: Users only see records for sources they're mapped to │
└────────────────────┬───────────────────────────────────────────┘
                     │
                     ↓
┌────────────────────────────────────────────────────────────────┐
│                  REALTIME MESSAGE FILTERING                    │
│                                                                │
│  Policy on realtime.messages:                                 │
│                                                                │
│  USING (                                                      │
│    topic NOT LIKE 'ghl:%' OR                                 │
│    EXISTS (                                                   │
│      SELECT 1 FROM user_sources                              │
│      WHERE user_id = auth.uid()                              │
│        AND source_id::text = split_part(topic, ':', 2)      │
│    )                                                          │
│  )                                                            │
│                                                                │
│  Effect: Users only receive realtime updates for their sources│
└────────────────────────────────────────────────────────────────┘
```

### Security Guarantees

✅ **Users cannot see other users' data**
- RLS enforces access at database level
- Even with direct SQL, queries are filtered

✅ **Users cannot receive unauthorized updates**
- Realtime messages filtered by RLS
- WebSocket subscriptions honor policies

✅ **Edge Functions have full access**
- Use SERVICE_ROLE_KEY to bypass RLS
- Necessary for syncing data from GHL

✅ **API keys never exposed**
- GHL_API_KEY stored in Edge Function env vars
- Never sent to client
- Only server-side code has access

---

## Scaling Considerations

### Database Performance

**Indexes Created:**
- All `source_id` columns (for filtering)
- All `ghl_*_id` columns (for lookups)
- `user_sources(user_id, source_id)` composite (for auth checks)
- Timestamp columns on tables with `ORDER BY updated_at DESC`

**Query Optimization:**
- Reporting views pre-join related tables
- Aggregations computed once in views
- Dashboard queries avoid complex joins

### Edge Function Concurrency

**Current Implementation:**
- Sequential processing (one entity at a time)
- Single location sync at a time

**Future Optimization:**
- Parallel polling of entities
- Queue-based job system
- Multiple workers processing jobs

### Realtime Scaling

**Message Volume:**
- One message per database write
- Filtered at server before sending to clients
- Clients only receive relevant updates

**Connection Limits:**
- Supabase Realtime supports thousands of concurrent connections
- Consider batching updates if very high frequency

---

## Monitoring & Observability

### Key Metrics to Track

**Sync Performance:**
```sql
-- Average sync duration by job type
SELECT
  job_type,
  AVG(EXTRACT(EPOCH FROM (completed_at - started_at))) AS avg_duration_seconds,
  COUNT(*) AS total_runs,
  SUM(CASE WHEN status = 'failed' THEN 1 ELSE 0 END) AS failure_count
FROM ghl_sync_jobs
WHERE created_at > now() - interval '7 days'
GROUP BY job_type;
```

**Data Freshness:**
```sql
-- Time since last update per entity
SELECT
  'contacts' AS entity,
  MAX(updated_at) AS last_updated,
  AGE(now(), MAX(updated_at)) AS staleness
FROM ghl_contacts
WHERE source_id = 'your-source-id'
UNION ALL
SELECT
  'opportunities',
  MAX(updated_at),
  AGE(now(), MAX(updated_at))
FROM ghl_opportunities
WHERE source_id = 'your-source-id';
```

**User Activity:**
```sql
-- Most active sources
SELECT
  s.name,
  COUNT(DISTINCT j.id) AS sync_count,
  MAX(j.created_at) AS last_sync
FROM ghl_sources s
LEFT JOIN ghl_sync_jobs j ON j.source_id = s.id
WHERE j.created_at > now() - interval '30 days'
GROUP BY s.id, s.name
ORDER BY sync_count DESC;
```

---

## Future Enhancements

### Webhooks from GHL
Replace polling with webhooks for real-time updates:
1. GHL sends webhook when data changes
2. Edge Function receives webhook
3. Updates database directly
4. Realtime pushes to dashboard
5. No need for manual "Pull Latest"

### Scheduled Syncs
Run automatic syncs on a schedule:
```sql
-- Using pg_cron extension
SELECT cron.schedule(
  'ghl-hourly-sync',
  '0 * * * *',  -- Every hour
  $$
  SELECT net.http_post(
    url := 'https://PROJECT.supabase.co/functions/v1/run-ghl-all',
    body := '{"source_id": "...", "locationId": "...", "mode": "incremental"}'
  )
  $$
);
```

### Advanced Filtering
Add user preferences for which data to sync:
- Only certain pipelines
- Specific date ranges
- Custom field filtering

### Multi-tenant Dashboard
One dashboard showing data from multiple GHL locations:
- User has access to multiple source_ids
- Switch between sources with dropdown
- Aggregate metrics across all sources

---

## Summary

This architecture provides:

✅ **Secure multi-tenant system** - RLS isolates user data
✅ **Real-time updates** - < 500ms latency from DB to UI
✅ **On-demand sync** - Manual pull button for immediate refresh
✅ **Scalable design** - Indexed tables, optimized views
✅ **Maintainable code** - Clear separation of concerns
✅ **Observable system** - Sync jobs tracked in database

All components work together to deliver a responsive, secure dashboard for Go High Level data!
