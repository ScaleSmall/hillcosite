# Environment Variables Setup for Production Hosting

## Problem

Your blog page shows "No posts yet" because the Supabase environment variables are not configured in your production hosting environment.

The `.env` file in your project only works locally. For production deployments, you must configure environment variables through your hosting platform's dashboard or control panel.

## Solution: Add Environment Variables

### Required Environment Variables

You need to add these two environment variables to your hosting platform:

```
VITE_SUPABASE_URL=https://jsliktxrbzwhxrtcyoxv.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpzbGlrdHhyYnp3aHhydGN5b3h2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk2NDExODUsImV4cCI6MjA3NTIxNzE4NX0.ET0IHF0bkMtWx8v4ui5-GznnXzIY8WBvWiw7YhRdTMk
```

### For Different Hosting Platforms

#### Netlify
1. Go to Site settings → Environment variables
2. Add both variables
3. Trigger a new deploy

#### Vercel
1. Go to Project Settings → Environment Variables
2. Add both variables
3. Select all environments (Production, Preview, Development)
4. Redeploy

#### AWS Amplify
1. Go to App settings → Environment variables
2. Add both variables
3. Redeploy the app

#### Cloudflare Pages
1. Go to Settings → Environment variables
2. Add variables for Production (and Preview if needed)
3. Create a new deployment

#### GitHub Pages (with Actions)
1. Go to Repository Settings → Secrets and variables → Actions
2. Add both as repository secrets
3. Update your workflow to pass these as environment variables
4. Re-run the workflow

#### Heroku
```bash
heroku config:set VITE_SUPABASE_URL=https://jsliktxrbzwhxrtcyoxv.supabase.co
heroku config:set VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpzbGlrdHhyYnp3aHhydGN5b3h2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk2NDExODUsImV4cCI6MjA3NTIxNzE4NX0.ET0IHF0bkMtWx8v4ui5-GznnXzIY8WBvWiw7YhRdTMk
```

#### Digital Ocean App Platform
1. Go to Settings → App-Level Environment Variables
2. Add both variables
3. Redeploy

#### Railway
1. Go to Variables tab
2. Add both variables
3. Redeploy

#### Render
1. Go to Environment → Environment Variables
2. Add both variables
3. Deploy will trigger automatically

#### Custom Server / VPS
Add to your environment file or systemd service:
```bash
export VITE_SUPABASE_URL=https://jsliktxrbzwhxrtcyoxv.supabase.co
export VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpzbGlrdHhyYnp3aHhydGN5b3h2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk2NDExODUsImV4cCI6MjA3NTIxNzE4NX0.ET0IHF0bkMtWx8v4ui5-GznnXzIY8WBvWiw7YhRdTMk
```

Then rebuild and restart your application.

## Why This Happens

**Local Development:**
- Vite loads environment variables from `.env` file
- The `.env` file is in your project
- Everything works locally ✅

**Production Deployment:**
- The `.env` file is NOT deployed (gitignored for security)
- Your hosting platform doesn't know about Supabase credentials
- The app can't connect to Supabase ❌
- Blog shows "No posts yet" ❌

**After Configuration:**
- Hosting platform injects environment variables during build
- Vite bundles them into your JavaScript
- The app can connect to Supabase ✅
- Blog posts load correctly ✅

## Security Notes

✅ **SAFE TO EXPOSE**: The `VITE_SUPABASE_ANON_KEY` is designed to be public
- It's called the "anon" (anonymous) key for a reason
- It's meant to be included in your client-side JavaScript
- Row Level Security (RLS) policies protect your data
- Users can only read published blog posts (as configured in RLS)

❌ **NEVER EXPOSE**: The service role key (different from anon key)
- We're NOT using the service role key in the frontend
- Service role bypasses RLS and should only be used server-side

## Verification

After adding the environment variables and redeploying:

1. **Visit your blog page**: `https://yourdomain.com/blog`
2. **Check browser console** (F12):
   - ✅ Should see: "✅ Supabase client initialized successfully"
   - ❌ Should NOT see: "❌ Supabase environment variables not configured"
3. **Blog posts should appear** instead of "No posts yet"

## Troubleshooting

### Still seeing "No posts yet" after adding variables?

1. **Did you redeploy?**
   - Environment variables only take effect on NEW builds
   - Saving them isn't enough - you must trigger a new deployment

2. **Check variable names are EXACT:**
   - Must be `VITE_SUPABASE_URL` (not `SUPABASE_URL`)
   - Must be `VITE_SUPABASE_ANON_KEY` (not `SUPABASE_ANON_KEY`)
   - Vite only exposes variables starting with `VITE_`
   - Variable names are case-sensitive

3. **Check browser console:**
   - Open DevTools (F12)
   - Look at the Console tab
   - Look for Supabase-related error messages

4. **Clear browser cache:**
   - Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
   - Or open in incognito/private window

5. **Check deployment logs:**
   - Look for build errors
   - Look for the warning: "Supabase environment variables not configured"
   - If you see this warning, the variables weren't available during build

### How to verify variables are set correctly

Most hosting platforms let you view environment variables after setting them. Check that:
- Both variables are present
- Names are spelled exactly as shown (case-sensitive)
- Values are complete (no truncation)
- Variables apply to the correct environment (Production)

## Current Database Status

Your Supabase database has:
- ✅ 13 published blog posts ready to display
- ✅ RLS (Row Level Security) properly configured
- ✅ Public read access for published posts
- ✅ All posts have titles, slugs, excerpts, and content

Once environment variables are configured, these posts will appear immediately.

## Summary

1. ✅ Your blog posts exist in Supabase (13 posts)
2. ✅ RLS policies are configured correctly
3. ✅ Code is working properly
4. ❌ Production hosting doesn't have environment variables
5. 👉 **Action Required**: Add the two environment variables to your hosting platform
6. 👉 **Then**: Redeploy/rebuild your site
7. ✅ **Result**: Blog posts will appear on your site

This is a one-time setup that takes 2-5 minutes depending on your hosting platform.

## Need Help?

If you're unsure which hosting platform you're using or how to add environment variables:

1. Check your deployment logs for the platform name
2. Look for a dashboard or control panel URL in your deployment emails
3. Contact your hosting provider's support with this question:
   *"How do I add environment variables for a Vite/React application?"*

All major hosting platforms support environment variables - it's a standard feature.
