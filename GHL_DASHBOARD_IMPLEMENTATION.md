# Go High Level Dashboard Implementation Guide

## Overview

Complete implementation for a GHL dashboard with:
- **Manual "Pull Latest" button** - Triggers full sync on demand
- **Automatic Push Updates** - Real-time updates via Supabase Realtime
- **Secure access control** - RLS ensures users only see their source data

---

## Architecture Components

### 1. Database Layer
- **Tables:** `ghl_contacts`, `ghl_opportunities`, `ghl_pipelines`, `ghl_orders`, `ghl_payments`, `ghl_reviews`, `ghl_sync_jobs`
- **Mapping:** `user_sources` (maps users to accessible source_ids)
- **Views:** Optimized reporting views for dashboard queries

### 2. Edge Functions
- **`run-ghl-all`** - Orchestrates full sync across all entities
- **`poll-ghl-contacts`** - Fetches contacts from GHL API
- **`poll-ghl-opportunities`** - Fetches opportunities from GHL API
- **Additional poll functions** - For pipelines, orders, payments, reviews (follow same pattern)

### 3. Realtime Triggers
- Database triggers broadcast changes to topic `ghl:{source_id}`
- RLS on `realtime.messages` filters by user access

---

## Dashboard Client Implementation

### Full React/TypeScript Example

```typescript
// src/hooks/useGHLDashboard.ts
import { createClient } from '@supabase/supabase-js';
import { useEffect, useState, useCallback } from 'react';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface DashboardData {
  contacts: any[];
  opportunities: any[];
  pipelineStages: any[];
  revenue: any;
  reviews: any;
  syncStatus: any[];
}

interface SyncProgress {
  isSyncing: boolean;
  progress: string;
  error: string | null;
}

export function useGHLDashboard(sourceId: string) {
  const [data, setData] = useState<DashboardData>({
    contacts: [],
    opportunities: [],
    pipelineStages: [],
    revenue: null,
    reviews: null,
    syncStatus: [],
  });

  const [syncProgress, setSyncProgress] = useState<SyncProgress>({
    isSyncing: false,
    progress: '',
    error: null,
  });

  // Fetch all dashboard data
  const fetchDashboardData = useCallback(async () => {
    console.log('Fetching dashboard data for source:', sourceId);

    try {
      // Fetch recent contacts
      const { data: contacts } = await supabase
        .from('v_ghl_contacts_recent')
        .select('*')
        .eq('source_id', sourceId)
        .limit(100);

      // Fetch opportunities with details
      const { data: opportunities } = await supabase
        .from('v_ghl_opportunities_report')
        .select('*')
        .eq('source_id', sourceId)
        .order('updated_at', { ascending: false })
        .limit(100);

      // Fetch pipeline stage summary
      const { data: pipelineStages } = await supabase
        .from('v_ghl_pipeline_stage_summary')
        .select('*')
        .eq('source_id', sourceId);

      // Fetch revenue summary
      const { data: revenue } = await supabase
        .from('v_ghl_revenue_summary')
        .select('*')
        .eq('source_id', sourceId)
        .maybeSingle();

      // Fetch reviews summary
      const { data: reviews } = await supabase
        .from('v_ghl_reviews_summary')
        .select('*')
        .eq('source_id', sourceId)
        .maybeSingle();

      // Fetch sync status
      const { data: syncStatus } = await supabase
        .from('v_ghl_sync_status')
        .select('*')
        .eq('source_id', sourceId);

      setData({
        contacts: contacts || [],
        opportunities: opportunities || [],
        pipelineStages: pipelineStages || [],
        revenue: revenue || null,
        reviews: reviews || null,
        syncStatus: syncStatus || [],
      });
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    }
  }, [sourceId]);

  // Manual "Pull Latest" function
  const pullLatest = useCallback(async (locationId: string) => {
    setSyncProgress({
      isSyncing: true,
      progress: 'Starting sync...',
      error: null,
    });

    try {
      // Call orchestration function
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/run-ghl-all`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({
            source_id: sourceId,
            locationId: locationId,
            mode: 'incremental',
            pageSize: 200,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Sync failed: ${response.statusText}`);
      }

      const result = await response.json();
      console.log('Sync completed:', result);

      setSyncProgress({
        isSyncing: false,
        progress: result.message || 'Sync completed!',
        error: null,
      });

      // Refresh dashboard data after sync
      await fetchDashboardData();
    } catch (error) {
      console.error('Sync error:', error);
      setSyncProgress({
        isSyncing: false,
        progress: '',
        error: error instanceof Error ? error.message : 'Sync failed',
      });
    }
  }, [sourceId, fetchDashboardData]);

  // Setup realtime subscription for automatic push updates
  useEffect(() => {
    console.log('Setting up realtime subscription for source:', sourceId);

    const channel = supabase.channel(`ghl:${sourceId}`, {
      config: { broadcast: { self: true } },
    });

    // Handler for broadcast events
    const handleChange = (payload: any) => {
      console.log('Realtime update received:', payload);

      const { table, operation, new: newRow, old: oldRow } = payload.payload || {};

      // Update local state based on table and operation
      if (table === 'ghl_contacts') {
        if (operation === 'INSERT' || operation === 'UPDATE') {
          // Refresh contacts or patch in the new/updated contact
          fetchDashboardData();
        } else if (operation === 'DELETE') {
          setData(prev => ({
            ...prev,
            contacts: prev.contacts.filter(c => c.id !== oldRow.id),
          }));
        }
      } else if (table === 'ghl_opportunities') {
        // Similar logic for opportunities
        fetchDashboardData();
      } else if (table === 'ghl_sync_jobs') {
        // Update sync status display
        fetchDashboardData();
      } else {
        // For other tables, just refresh everything
        fetchDashboardData();
      }
    };

    channel
      .on('broadcast', { event: 'INSERT' }, handleChange)
      .on('broadcast', { event: 'UPDATE' }, handleChange)
      .on('broadcast', { event: 'DELETE' }, handleChange)
      .subscribe(async (status) => {
        if (status === 'SUBSCRIBED') {
          console.log('Realtime subscribed for', sourceId);
        } else if (status === 'CHANNEL_ERROR') {
          console.error('Realtime subscription error');
        }
      });

    // Initial data fetch
    fetchDashboardData();

    // Cleanup on unmount
    return () => {
      console.log('Cleaning up realtime subscription');
      supabase.removeChannel(channel);
    };
  }, [sourceId, fetchDashboardData]);

  return {
    data,
    syncProgress,
    pullLatest,
    refresh: fetchDashboardData,
  };
}
```

### Dashboard Component Example

```typescript
// src/components/GHLDashboard.tsx
import { useState } from 'react';
import { useGHLDashboard } from '../hooks/useGHLDashboard';

export function GHLDashboard() {
  const sourceId = 'fb055913-f354-422c-8fce-6e0cbe7866fb'; // Your source ID
  const locationId = 'YOUR_GHL_LOCATION_ID'; // Your GHL location ID

  const { data, syncProgress, pullLatest, refresh } = useGHLDashboard(sourceId);

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Go High Level Dashboard</h1>

        {/* Manual Pull Latest Button */}
        <button
          onClick={() => pullLatest(locationId)}
          disabled={syncProgress.isSyncing}
          className="btn-primary"
        >
          {syncProgress.isSyncing ? 'Syncing...' : 'Pull Latest'}
        </button>

        {/* Manual Refresh Button */}
        <button onClick={refresh} className="btn-secondary">
          Refresh Data
        </button>
      </header>

      {/* Sync Progress Indicator */}
      {syncProgress.isSyncing && (
        <div className="sync-progress">
          <div className="spinner" />
          <span>{syncProgress.progress}</span>
        </div>
      )}

      {syncProgress.error && (
        <div className="error-banner">
          Error: {syncProgress.error}
        </div>
      )}

      {/* Dashboard Summary Cards */}
      <div className="dashboard-grid">
        <div className="card">
          <h3>Contacts</h3>
          <p className="stat">{data.contacts.length}</p>
          <small>Total contacts in system</small>
        </div>

        <div className="card">
          <h3>Opportunities</h3>
          <p className="stat">{data.opportunities.length}</p>
          <small>Active opportunities</small>
        </div>

        <div className="card">
          <h3>Revenue</h3>
          <p className="stat">
            ${data.revenue?.total_order_amount?.toLocaleString() || 0}
          </p>
          <small>Total order value</small>
        </div>

        <div className="card">
          <h3>Reviews</h3>
          <p className="stat">
            {data.reviews?.average_rating?.toFixed(1) || 'N/A'} ⭐
          </p>
          <small>Average rating ({data.reviews?.total_reviews || 0} reviews)</small>
        </div>
      </div>

      {/* Recent Contacts Table */}
      <section className="data-section">
        <h2>Recent Contacts</h2>
        <div className="realtime-indicator">
          <span className="pulse-dot" /> Updates in real-time
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {data.contacts.slice(0, 10).map((contact) => (
              <tr key={contact.id}>
                <td>{contact.first_name} {contact.last_name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>{new Date(contact.updated_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Pipeline Summary */}
      <section className="data-section">
        <h2>Pipeline Overview</h2>
        <div className="pipeline-stages">
          {data.pipelineStages.map((stage) => (
            <div key={stage.stage_id} className="pipeline-card">
              <h4>{stage.pipeline_name}</h4>
              <p className="stage-name">Stage: {stage.stage_id}</p>
              <p className="stat">{stage.opportunity_count} opportunities</p>
              <p className="amount">${stage.total_amount?.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sync Status */}
      <section className="data-section">
        <h2>Sync Status</h2>
        <table>
          <thead>
            <tr>
              <th>Job Type</th>
              <th>Status</th>
              <th>Last Run</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {data.syncStatus.map((job) => (
              <tr key={job.id}>
                <td>{job.job_type}</td>
                <td>
                  <span className={`status-badge status-${job.status}`}>
                    {job.status}
                  </span>
                </td>
                <td>{new Date(job.created_at).toLocaleString()}</td>
                <td>{job.duration_seconds?.toFixed(1)}s</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
```

---

## Backend Proxy (Recommended for Production)

To avoid exposing service role keys, create a backend proxy:

```typescript
// src/pages/api/sync-ghl.ts (Next.js API route example)
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Verify user authentication
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // Verify user has access to source_id
  const { source_id, locationId } = req.body;

  // TODO: Check user has access to this source via user_sources table

  // Call Edge Function with service role key (server-side only)
  const response = await fetch(
    `${process.env.SUPABASE_URL}/functions/v1/run-ghl-all`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
      },
      body: JSON.stringify({
        source_id,
        locationId,
        mode: 'incremental',
        pageSize: 200,
      }),
    }
  );

  const result = await response.json();
  res.status(response.status).json(result);
}
```

Then call your proxy from the frontend:

```typescript
// Updated pullLatest function
const pullLatest = async (locationId: string) => {
  const response = await fetch('/api/sync-ghl', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${userToken}`,
    },
    body: JSON.stringify({ source_id: sourceId, locationId }),
  });
  // ... handle response
};
```

---

## Setup Checklist

### 1. Database Setup ✅
- [x] Tables created (`ghl_sources`, `ghl_contacts`, etc.)
- [x] User sources mapping (`user_sources`)
- [x] Reporting views created
- [x] RLS policies enabled
- [x] Realtime triggers attached

### 2. Edge Functions ✅
- [x] `run-ghl-all` orchestration function
- [x] `poll-ghl-contacts` data ingestion
- [x] `poll-ghl-opportunities` data ingestion
- [ ] Create remaining poll functions (pipelines, orders, payments, reviews)

### 3. Environment Variables
Set in Supabase Edge Functions dashboard:
- `GHL_API_KEY` - Your Go High Level API key

### 4. User Setup
Insert user access mappings:

```sql
INSERT INTO public.user_sources (user_id, source_id, role)
VALUES
  ('user-uuid-here', 'fb055913-f354-422c-8fce-6e0cbe7866fb', 'owner');
```

### 5. Source Configuration
Insert GHL source:

```sql
INSERT INTO public.ghl_sources (id, name, location_id)
VALUES
  ('fb055913-f354-422c-8fce-6e0cbe7866fb', 'Main Location', 'YOUR_GHL_LOCATION_ID');
```

---

## Testing

### 1. Test Manual Sync
```bash
curl -X POST https://YOUR_PROJECT.supabase.co/functions/v1/run-ghl-all \
  -H "Content-Type: application/json" \
  -d '{
    "source_id": "fb055913-f354-422c-8fce-6e0cbe7866fb",
    "locationId": "YOUR_GHL_LOCATION_ID",
    "mode": "incremental"
  }'
```

### 2. Test Realtime
1. Open browser console in dashboard
2. Make a change in GHL (add/update contact)
3. Watch for console log: "Realtime update received"
4. Verify UI updates automatically

### 3. Verify RLS
Login as different users and ensure they only see data for their mapped `source_id`s.

---

## Performance Optimization

### Caching Strategy
```typescript
// Cache data locally to minimize refetches
const [cache, setCache] = useState<Map<string, any>>(new Map());

const handleRealtimeUpdate = (payload) => {
  const { table, new: newRow, operation } = payload;

  // Patch cache instead of full refetch
  if (operation === 'UPDATE' && table === 'ghl_contacts') {
    setCache(prev => {
      const updated = new Map(prev);
      updated.set(newRow.id, newRow);
      return updated;
    });
  }
};
```

### Selective Refetching
Only refetch affected views:

```typescript
if (table === 'ghl_contacts') {
  // Only refetch contacts view
  refetchContacts();
} else if (table === 'ghl_opportunities') {
  // Only refetch opportunities and pipeline summary
  refetchOpportunities();
  refetchPipelineStages();
}
```

---

## Monitoring & Debugging

### Check Sync Job Status
```sql
SELECT * FROM v_ghl_sync_status
WHERE source_id = 'fb055913-f354-422c-8fce-6e0cbe7866fb'
ORDER BY created_at DESC;
```

### View Recent Realtime Messages
Check Supabase Dashboard > Database > Realtime for message delivery logs.

### Edge Function Logs
View in Supabase Dashboard > Edge Functions > Logs to see:
- API call results
- Error details
- Processing times

---

## Security Best Practices

1. **Never expose service role key** - Use backend proxy for sync operations
2. **Validate user access** - Always check `user_sources` before operations
3. **Use RLS everywhere** - All tables have RLS enabled
4. **Encrypt sensitive data** - Store API keys encrypted in `ghl_sources.api_key_encrypted`
5. **Audit logs** - Track who triggered syncs via `ghl_sync_jobs`

---

## Additional Poll Functions Template

Create remaining functions following this pattern:

**poll-ghl-pipelines**, **poll-ghl-orders**, **poll-ghl-payments**, **poll-ghl-reviews**

Each follows the same structure as `poll-ghl-contacts`:
1. Fetch from GHL API with pagination
2. Transform data to match database schema
3. Upsert into corresponding table
4. Return count and status

Adjust API endpoints and data mappings per GHL documentation.

---

## Summary

You now have:

✅ **Complete database schema** with tables, views, RLS, and realtime triggers
✅ **Orchestration function** to sync all entities on demand
✅ **Polling functions** to fetch data from GHL API
✅ **Dashboard hook** with manual pull and automatic push updates
✅ **Security** via RLS and user source mappings
✅ **Real-time updates** via Supabase Realtime broadcasts

Your dashboard automatically updates when data changes, and users can manually trigger full syncs with the "Pull Latest" button!
