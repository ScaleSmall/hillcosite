# Auth DB Connection Strategy Fix

## Issue
Your project's Auth server is configured to use at most 10 connections. This fixed connection limit prevents the Auth server from scaling when you increase your database instance size.

## Solution
Switch to a percentage-based connection allocation strategy instead of a fixed number.

## Steps to Fix (Supabase Dashboard)

### Method 1: Via Supabase Dashboard
1. Go to your [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Navigate to **Settings** → **Database** → **Connection Pooling**
4. Find the **Auth Pool** configuration
5. Change from:
   - Current: `Fixed: 10 connections`
   - To: `Percentage: 10%` (or appropriate percentage for your needs)
6. Click **Save**

### Method 2: Via Supabase CLI (if available)
```bash
# Update the connection pooler configuration
supabase projects update --db-pooler-mode percentage --auth-pooler-size 10
```

### Method 3: Via Management API
```bash
# Using the Supabase Management API
curl -X PATCH 'https://api.supabase.com/v1/projects/{project-ref}/config/database' \
  -H "Authorization: Bearer {your-access-token}" \
  -H "Content-Type: application/json" \
  -d '{
    "auth_pooler": {
      "mode": "percentage",
      "size": 10
    }
  }'
```

## Recommended Configuration

| Instance Size | Auth Pool % | Approximate Connections |
|--------------|-------------|------------------------|
| Free/Small   | 10%         | ~1-5 connections       |
| Medium       | 10%         | ~5-15 connections      |
| Large        | 10%         | ~15-50 connections     |
| Enterprise   | 5-10%       | 50+ connections        |

## Why Percentage-Based is Better

1. **Scalability**: Automatically scales with instance upgrades
2. **Performance**: Matches connection pool to available resources
3. **Efficiency**: Prevents over/under-provisioning
4. **Best Practice**: Recommended by Supabase and PostgreSQL experts

## Verification

After making the change:
1. Go to **Settings** → **Database** → **Connection Pooling**
2. Verify Auth Pool shows: `Percentage: X%`
3. Monitor your Auth server performance in the **Reports** section

## Status

- ✅ Function Search Path Security Issue: **FIXED** (via migration)
- ⚠️ Auth DB Connection Strategy: **REQUIRES MANUAL ACTION** (see steps above)

The search_path security issue has been fixed via the database migration. The Auth connection strategy requires a configuration change through the Supabase dashboard or API, as it cannot be modified via SQL migrations.
