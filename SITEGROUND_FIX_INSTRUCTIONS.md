# Fix Blog Posts Not Showing on SiteGround - Step by Step

## Problem Diagnosed ✅

Your Supabase database and RLS policies are working perfectly! The issue is that the `env.js` file on SiteGround has empty credentials.

**What's Working:**
- ✅ Database has 5+ published blog posts
- ✅ RLS policies correctly allow public read access
- ✅ All blog posts are marked as published
- ✅ Supabase API is accessible

**What's Broken:**
- ❌ The `env.js` file on SiteGround has empty strings for Supabase credentials
- ❌ Your production website can't connect to Supabase
- ❌ Blog pages show 404 errors because no data loads

---

## Quick Fix (5 Minutes)

### Option 1: Update env.js File on SiteGround (Recommended - No Rebuild Needed)

**Step 1: Log into SiteGround**
1. Go to https://my.siteground.com
2. Click "Site Tools" for hillcopaint.com

**Step 2: Open File Manager**
1. In Site Tools, go to: **Site** → **File Manager**
2. Navigate to your website directory (usually `public_html`)

**Step 3: Find and Edit env.js**
1. Look for the file: `env.js` (it should be at the root level with `index.html`)
2. Right-click on `env.js` and choose "Edit" or "Code Editor"

**Step 4: Replace the Content**

Replace the ENTIRE content of the file with this:

```javascript
// public/env.js
// Populated at deploy-time on SiteGround (can be edited without rebuild).
window.__ENV = {
  SUPABASE_URL: "https://jsliktxrbzwhxrtcyoxv.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpzbGlrdHhyYnp3aHhydGN5b3h2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk2NDExODUsImV4cCI6MjA3NTIxNzE4NX0.ET0IHF0bkMtWx8v4ui5-GznnXzIY8WBvWiw7YhRdTMk"
};
```

**Step 5: Save and Test**
1. Click "Save" or "Save Changes"
2. Clear SiteGround cache: **Site Tools** → **Speed** → **Caching** → **Flush Cache**
3. Open a new browser window (incognito/private mode)
4. Visit: https://hillcopaint.com/blog
5. **Your blog posts should now appear!** 🎉

---

### Option 2: Upload the Fixed env.js File

If you prefer to upload the file instead of editing it directly:

**Step 1: Download the Fixed File**
- The corrected `env.js` file is in your project at: `public/env.js`
- It now has the actual Supabase credentials

**Step 2: Upload to SiteGround**
1. Log into SiteGround Site Tools
2. Go to **Site** → **File Manager**
3. Navigate to `public_html` (your website root)
4. Click "Upload" button
5. Select the `env.js` file from your computer
6. Choose "Overwrite" when prompted

**Step 3: Clear Cache and Test**
1. Flush SiteGround cache
2. Visit https://hillcopaint.com/blog in incognito mode

---

## Alternative: Complete Rebuild and Upload (If env.js Fix Doesn't Work)

If updating `env.js` doesn't work, it means the JavaScript files themselves were built without credentials. In that case:

**Step 1: Rebuild the Site Locally**
```bash
npm run build
```

**Step 2: Upload ALL Contents of dist Folder**
1. After build completes, open the `dist` folder
2. Select **ALL files and folders inside dist**
3. Upload them to SiteGround `public_html` directory
4. Choose "Overwrite" for all files

---

## Verification Steps

After making changes, verify everything works:

### 1. Check env.js is Loaded
1. Visit https://hillcopaint.com
2. Open browser DevTools (F12)
3. Go to Console tab
4. Type: `window.__ENV`
5. Press Enter
6. **You should see:**
   ```javascript
   {
     SUPABASE_URL: "https://jsliktxrbzwhxrtcyoxv.supabase.co",
     SUPABASE_ANON_KEY: "eyJhbGci..."
   }
   ```
7. **NOT this:**
   ```javascript
   {
     SUPABASE_URL: "",
     SUPABASE_ANON_KEY: ""
   }
   ```

### 2. Check Blog Page
1. Visit https://hillcopaint.com/blog
2. You should see blog posts (no "No posts yet" message)
3. No error messages in the console
4. Blog posts should be clickable

### 3. Check Individual Blog Post
1. Click on any blog post
2. Should load the full article (not 404 page)
3. Content should display properly

---

## What Was the Problem?

**Root Cause:** The `env.js` file on SiteGround had empty strings:
```javascript
SUPABASE_URL: "",
SUPABASE_ANON_KEY: ""
```

**Why It Broke:**
- Your React app reads Supabase credentials from either build-time variables OR runtime `window.__ENV`
- Build-time variables come from `.env` file during `npm run build`
- Runtime variables come from `public/env.js` file loaded in the browser
- When both are empty, the app can't connect to Supabase
- Without Supabase connection, no blog posts load
- Without data, the app shows 404 for blog URLs

**Why It Works in Bolt:**
- Bolt environment has the `.env` file with correct credentials
- Vite loads these at build time
- Everything works locally

**The Fix:**
- Updated `env.js` with actual Supabase credentials
- Now the production site can connect to Supabase
- Blog posts load correctly

---

## Security Note

✅ **Safe to Expose:** The `SUPABASE_ANON_KEY` in this file is designed to be public:
- It's called the "anonymous key" for a reason
- It's meant to be in your client-side JavaScript
- Row Level Security (RLS) policies protect your data
- Users can only read published blog posts (by design)

❌ **Never Expose:** The service role key (which we're NOT using here)
- That key bypasses all security
- Only used server-side in Edge Functions
- Never included in frontend code

---

## Troubleshooting

### Still seeing 404 errors?

**1. Did you clear ALL caches?**
- Clear SiteGround cache
- Clear browser cache (Ctrl+Shift+R)
- Try incognito/private browsing

**2. Is env.js in the right location?**
- Should be at: `public_html/env.js`
- Same directory as `index.html`
- Not in a subdirectory

**3. Check the file content**
- Open env.js in File Manager
- Verify it has the actual Supabase URLs (not empty strings)
- Check for typos or missing quotes

**4. Check browser console**
- Visit your blog page
- Press F12 to open DevTools
- Look in Console tab for errors
- Look for messages about Supabase initialization

### Still seeing "No posts yet"?

**1. Check window.__ENV in console**
- Type `window.__ENV` in browser console
- Should show actual URLs, not empty strings

**2. Check Supabase connection**
- In console, type: `window.__ENV.SUPABASE_URL`
- Should return: `"https://jsliktxrbzwhxrtcyoxv.supabase.co"`
- If it returns `""`, the file wasn't loaded correctly

**3. Check if JavaScript files were built incorrectly**
- If env.js is correct but still broken
- You need to rebuild and upload the entire dist folder
- The JavaScript files may have empty strings baked in

---

## Expected Results After Fix

✅ **Blog Listing Page** (`/blog`):
- Shows 5+ blog posts
- Each post has title, excerpt, date, category
- Posts are clickable
- No error messages

✅ **Individual Blog Posts** (`/blog/[slug]`):
- Full article content displays
- No 404 errors
- Images load (if present)
- Proper formatting and styles

✅ **Browser Console**:
- No Supabase errors
- No configuration warnings
- Clean console output

---

## Summary

**What to Do Right Now:**

1. Log into SiteGround File Manager
2. Edit the `env.js` file (or upload the corrected version)
3. Paste in the content with actual Supabase credentials
4. Save the file
5. Clear SiteGround cache
6. Test in incognito browser: https://hillcopaint.com/blog

**Time Required:** 5 minutes

**Difficulty:** Easy - just copy/paste one file

**Result:** Blog posts will appear immediately! 🎉

---

## Need More Help?

If you've followed these steps and it's still not working:

1. Check browser console (F12) and note any error messages
2. Verify `window.__ENV` shows actual URLs (not empty strings)
3. Try the complete rebuild option (Option 2)
4. Clear all caches aggressively
5. Contact me with specific error messages from the console

The database and RLS policies are working perfectly - this is purely a configuration file issue that's easy to fix!
