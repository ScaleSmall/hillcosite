# Auth DB Connection Strategy Fix

## Issue
Your project's Auth server is configured to use at most 10 connections. This fixed connection limit prevents the Auth server from scaling when you increase your database instance size.

## Solution
Switch to a percentage-based connection allocation strategy instead of a fixed number.

## Steps to Fix

### Important: This Setting May Require Supabase Support

The Auth DB connection strategy is typically managed internally by Supabase and may not be directly user-configurable through the dashboard. Here are your options:

### Option 1: Contact Supabase Support (Recommended)
1. Go to your [Supabase Dashboard](https://supabase.com/dashboard)
2. Click on the support icon or go to https://supabase.com/dashboard/support
3. Create a support ticket with:
   - **Subject**: "Change Auth DB Connection Strategy from Fixed to Percentage"
   - **Description**: "My project's Auth server is currently configured with a fixed 10 connections. I need to change this to a percentage-based allocation (e.g., 10%) to improve scalability. Project ref: [your-project-ref]"

### Option 2: Check Project Settings
Some Supabase plans have access to advanced database settings:

1. Go to **Settings** → **Database**
2. Look for:
   - **Connection Pooling** section
   - **Pool Mode** configuration
   - **Transaction Pooler** or **Session Pooler** settings
3. If you see Auth-specific pooling options, change from "Fixed" to "Percentage"

Note: If you don't see these options, your plan may not have direct access to this configuration.

### Option 3: Upgrade Plan (If Applicable)
Some advanced database configuration options are only available on Pro or Enterprise plans. Check if upgrading your plan provides access to connection pooling configuration.

### Option 4: Environment Configuration (Advanced)
For self-hosted or advanced configurations, you may be able to set this via environment variables, but this is typically not available for managed Supabase projects.

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
