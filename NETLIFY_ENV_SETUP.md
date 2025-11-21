# Netlify Environment Variables Setup

## Problem

Your blog page shows "No posts yet" because the Supabase environment variables are not configured in your Netlify deployment.

The `.env` file in your project only works locally. For production deployments on Netlify, you must configure environment variables through the Netlify dashboard.

## Solution: Add Environment Variables to Netlify

### Step 1: Access Netlify Dashboard

1. Go to [https://app.netlify.com](https://app.netlify.com)
2. Log in to your account
3. Select your **Hill Country Painting** site

### Step 2: Navigate to Environment Variables

1. Click on **Site settings** (or **Site configuration**)
2. In the left sidebar, click **Environment variables** (under "Build & deploy" section)
3. Click **Add a variable** or **Add environment variables**

### Step 3: Add Your Supabase Variables

Add these two environment variables:

#### Variable 1: VITE_SUPABASE_URL
- **Key**: `VITE_SUPABASE_URL`
- **Value**: `https://jsliktxrbzwhxrtcyoxv.supabase.co`
- **Scopes**: All deploys (Production, Deploy Previews, Branch deploys)

#### Variable 2: VITE_SUPABASE_ANON_KEY
- **Key**: `VITE_SUPABASE_ANON_KEY`
- **Value**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpzbGlrdHhyYnp3aHhydGN5b3h2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk2NDExODUsImV4cCI6MjA3NTIxNzE4NX0.ET0IHF0bkMtWx8v4ui5-GznnXzIY8WBvWiw7YhRdTMk`
- **Scopes**: All deploys (Production, Deploy Previews, Branch deploys)

### Step 4: Trigger a Redeploy

After adding the environment variables:

1. Go to **Deploys** tab
2. Click **Trigger deploy** → **Deploy site**
3. Wait for the deployment to complete (usually 1-2 minutes)

### Step 5: Verify It Works

Once deployed:

1. Visit `https://hillcopaint.com/blog`
2. You should now see your blog posts instead of "No posts yet"
3. Check the browser console (F12) - you should NOT see "Supabase environment variables not configured"

## Why This Happens

**Local Development:**
- Vite loads environment variables from `.env` file
- The `.env` file is in your project
- Everything works locally

**Production Deployment:**
- The `.env` file is NOT deployed to Netlify (it's gitignored for security)
- Netlify doesn't know about your Supabase credentials
- The app can't connect to Supabase
- Blog shows "No posts yet"

**After Configuration:**
- Netlify injects environment variables during build
- Vite bundles them into your JavaScript
- The app can connect to Supabase
- Blog posts load correctly

## Security Notes

✅ **SAFE TO EXPOSE**: The `VITE_SUPABASE_ANON_KEY` is designed to be public
- It's called the "anon" (anonymous) key for a reason
- It's meant to be included in your client-side JavaScript
- Row Level Security (RLS) policies protect your data
- Users can only read published blog posts (as configured in RLS)

❌ **NEVER EXPOSE**: The service role key (different from anon key)
- We're NOT using the service role key in the frontend
- Service role bypasses RLS and should only be used server-side

## Current RLS Configuration

Your `blog_posts` table has RLS enabled with this policy:

```sql
CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts
  FOR SELECT
  TO public
  USING (published = true);
```

This means:
- ✅ Anyone can read posts where `published = true`
- ❌ No one can read unpublished posts
- ❌ No one can insert/update/delete posts (requires service role or authenticated user)

## Troubleshooting

### After adding variables, still seeing "No posts yet"?

1. **Check if you triggered a new deployment**
   - Environment variables only take effect on NEW deploys
   - Just saving them isn't enough - you must redeploy

2. **Check browser console (F12)**
   - Look for error messages
   - Should NOT see "Supabase environment variables not configured"

3. **Verify variable names are EXACT**
   - Must be `VITE_SUPABASE_URL` (not `SUPABASE_URL`)
   - Must be `VITE_SUPABASE_ANON_KEY` (not `SUPABASE_ANON_KEY`)
   - Vite only exposes variables starting with `VITE_`

4. **Check scopes**
   - Variables should apply to "All deploys" or at least "Production"

5. **Clear browser cache**
   - Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
   - Or open in incognito/private window

### Still not working?

Check the deployment logs:
1. Go to Deploys → Click on the latest deploy
2. Look for build errors
3. The build should complete without errors

If you see the warning during build:
```
Supabase environment variables not configured
```

This means the variables weren't available during build. Verify they're added correctly in Netlify dashboard.

## Quick Reference

**Your Supabase Credentials:**
- **URL**: `https://jsliktxrbzwhxrtcyoxv.supabase.co`
- **Anon Key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpzbGlrdHhyYnp3aHhydGN5b3h2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk2NDExODUsImV4cCI6MjA3NTIxNzE4NX0.ET0IHF0bkMtWx8v4ui5-GznnXzIY8WBvWiw7YhRdTMk`

**Netlify Environment Variable Setup:**
```
VITE_SUPABASE_URL=https://jsliktxrbzwhxrtcyoxv.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpzbGlrdHhyYnp3aHhydGN5b3h2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk2NDExODUsImV4cCI6MjA3NTIxNzE4NX0.ET0IHF0bkMtWx8v4ui5-GznnXzIY8WBvWiw7YhRdTMk
```

Copy and paste these exact values into Netlify's environment variable settings.

## Summary

1. ✅ Your blog posts exist in Supabase (13 posts)
2. ✅ RLS policies are configured correctly
3. ❌ Netlify doesn't have the environment variables to connect
4. 👉 **Action Required**: Add the two environment variables to Netlify dashboard
5. 👉 **Then**: Trigger a new deployment
6. ✅ **Result**: Blog posts will appear on your site

This is a one-time setup. Once configured, all future deployments will automatically use these credentials.
