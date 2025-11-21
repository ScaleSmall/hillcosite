# Upload to SiteGround - Quick Guide

## What's Wrong Right Now

Your live site shows this error:
```
⚠️ Configuration Issue Detected
Supabase environment variables are not configured.
```

This happened because the JavaScript files currently on SiteGround were built **without** the environment variables. The missing credentials are permanently baked into those old files.

## The Solution

Upload the freshly built `dist` folder (which has the correct Supabase credentials baked in).

---

## Step-by-Step Instructions

### Option 1: File Manager (Easiest)

1. **Log into SiteGround Site Tools**
   - Go to https://my.siteground.com
   - Click "Site Tools" for hillcopaint.com

2. **Open File Manager**
   - In Site Tools, go to: **Site** → **File Manager**

3. **Navigate to your website directory**
   - Usually `public_html` or `public_html/hillcopaint.com`
   - This is where your website files are

4. **Upload the dist folder contents**
   - In your local computer, open the `dist` folder
   - Select **ALL files and folders inside dist**:
     - `index.html`
     - `assets` folder
     - All `.txt`, `.xml`, `.webmanifest` files
     - All image files
     - `_headers` and `_redirects` files
   - Drag and drop them into File Manager
   - Or use the "Upload" button

5. **Overwrite existing files**
   - When prompted, choose **"Overwrite"** or **"Replace"**
   - This is important - you need to replace the old files

6. **Wait for upload to complete**
   - Depending on file sizes, this may take 1-5 minutes

7. **Clear your browser cache**
   - Press `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
   - Or open in incognito/private window

8. **Visit hillcopaint.com/blog**
   - Your blog posts should now appear!
   - No more error message

---

### Option 2: FTP (If you prefer FTP)

1. **Get your FTP credentials from SiteGround**
   - Site Tools → **Devs** → **FTP Accounts Manager**
   - Or use existing FTP account

2. **Connect with an FTP client**
   - Use FileZilla, Cyberduck, or any FTP client
   - Host: `ftp.hillcopaint.com` (or as shown in SiteGround)
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21

3. **Navigate to your website directory**
   - Usually `public_html` or `www/public_html`

4. **Upload dist folder contents**
   - On your local computer, open the `dist` folder
   - Select all files and folders inside
   - Upload to the website directory
   - Choose "Overwrite" when prompted

5. **Clear cache and test**
   - Clear browser cache: `Ctrl + Shift + R`
   - Visit hillcopaint.com/blog

---

### Option 3: SSH/SFTP (Advanced)

If you have SSH access:

```bash
# From your local project directory
scp -r dist/* username@hillcopaint.com:/home/username/public_html/

# Or with rsync (recommended - only uploads changed files)
rsync -avz --delete dist/ username@hillcopaint.com:/home/username/public_html/
```

Replace `username` with your SiteGround username and adjust the path as needed.

---

## Important Notes

### ✅ What to Upload
- **ALL contents of the `dist` folder**
- Not the `dist` folder itself - just what's inside it

### ❌ What NOT to Upload
- Don't upload `src/`, `node_modules/`, `package.json`, etc.
- Only upload the `dist` folder contents
- These are the pre-built, production-ready files

### Why This Works
- The new `dist` folder was built with the `.env` file present
- Supabase credentials are now baked into the JavaScript files
- When users visit your site, their browser loads the correct JavaScript
- The blog will connect to Supabase and show your 13 posts

### Why the Old Files Don't Work
- The old files on SiteGround were built without environment variables
- `import.meta.env.VITE_SUPABASE_URL` was replaced with empty string
- This got compiled into the JavaScript permanently
- No way to fix them without rebuilding and re-uploading

---

## Verification Checklist

After uploading, verify everything works:

- [ ] Visit https://hillcopaint.com (homepage loads)
- [ ] Visit https://hillcopaint.com/blog (blog page loads)
- [ ] Blog posts appear (should see 13 posts)
- [ ] No error message about "Configuration Issue"
- [ ] Click on a blog post (individual posts load)
- [ ] Open browser console (F12) - no Supabase errors

---

## Troubleshooting

### Still seeing the error after uploading?

**1. Did you overwrite all files?**
   - Make sure you chose "Replace/Overwrite" not "Skip"
   - Old files need to be replaced

**2. Clear your browser cache**
   - Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
   - Try incognito/private browsing window
   - Try a different browser

**3. Check you uploaded to the correct directory**
   - Files should be in `public_html`, not `public_html/dist`
   - `index.html` should be at the root level with your other pages

**4. Check file permissions**
   - Files should be readable: 644 permissions
   - Folders should be: 755 permissions
   - SiteGround usually sets these automatically

**5. Wait a few minutes**
   - SiteGround may cache files
   - CDN (if enabled) might take time to update
   - Try again in 5-10 minutes

### Browser console shows different errors?

Open DevTools (F12) → Console tab and check for:
- **CORS errors**: Contact SiteGround support about CORS headers
- **404 errors**: Files didn't upload correctly, try again
- **Mixed content warnings**: Ignore these, they won't affect the blog
- **Supabase errors**: This means the old files are still there

---

## File Sizes Reference

Your dist folder should contain approximately:
- Total size: ~2-5 MB
- `index.html`: ~7 KB
- `assets/index-*.css`: ~81 KB
- `assets/js/` folder: Multiple JS files (largest ~197 KB)
- Images and other assets: Varies

If your upload shows very different sizes, something went wrong.

---

## What Changed That Broke It?

Since you said it was working before, here's what likely happened:

1. **Someone rebuilt the site without .env file**
   - Maybe on a different computer
   - Maybe after a fresh git clone (`.env` is gitignored)
   - Maybe the `.env` file got deleted

2. **Build process created files with empty credentials**
   - Vite couldn't find `VITE_SUPABASE_URL`
   - Replaced it with empty string in the JavaScript
   - This got compiled and uploaded to SiteGround

3. **Website broke**
   - Browser loads JavaScript with empty credentials
   - Supabase client can't initialize
   - Blog shows error message

4. **Now we're fixing it**
   - Rebuilt with `.env` file present
   - Credentials properly baked into new JavaScript files
   - Uploading these new files will fix everything

---

## Prevention for Future

To prevent this from happening again:

1. **Always build locally before uploading to SiteGround**
   ```bash
   npm run build
   ```

2. **Make sure .env file exists before building**
   ```bash
   cat .env  # Check it exists and has content
   npm run build
   ```

3. **Keep a backup of your .env file**
   - Store in password manager
   - Save in secure notes
   - Don't commit to git (it's gitignored for security)

4. **Use a deploy script** (optional)
   - Create a script that checks for `.env` before building
   - See `SITEGROUND_DEPLOYMENT.md` for full details

---

## Summary

1. ✅ Build completed successfully (just now)
2. ✅ Supabase credentials verified in built files
3. 👉 **Your task**: Upload `dist` folder contents to SiteGround
4. ✅ Blog will work immediately after upload

The fix takes 5 minutes. Upload the files and your blog will be working again!

---

## Need Help?

If you're stuck:
1. Double-check you're uploading the right files (contents of `dist` folder)
2. Make sure you're overwriting the old files
3. Clear browser cache aggressively
4. Try a different browser to rule out caching issues
5. If still broken, let me know what error you see in browser console (F12)
