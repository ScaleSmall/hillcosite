# Blog System with Zapier Integration

## Overview
Your website now has a complete blog system integrated with Supabase database. You can post blog articles from Zapier using a webhook.

---

## Zapier Webhook URL

**POST to:** `https://jsliktxrbzwhxrtcyoxv.supabase.co/functions/v1/create-blog-post`

**Headers:**
- `Content-Type: application/json`

---

## Required Fields

When posting from Zapier, send a JSON payload with these fields:

### Required:
- `title` (string) - The blog post title
- `content` (string) - Full blog post content (HTML or plain text)

### Optional:
- `excerpt` (string) - Short summary (defaults to first 200 chars of content)
- `author` (string) - Author name (defaults to "Hill Country Painting")
- `category` (string) - Post category (defaults to "Industry Insights")
- `tags` (array of strings) - Tags for categorization (defaults to empty array)
- `featured_image` (string) - URL to featured image
- `published` (boolean) - Whether to publish immediately (defaults to true)
- `meta_description` (string) - SEO meta description
- `meta_keywords` (string) - SEO keywords

---

## Example Zapier Payload

```json
{
  "title": "Top 5 Painting Trends for 2025",
  "content": "<h2>Introduction</h2><p>The painting industry is evolving...</p><h2>Trend 1: Sustainable Paints</h2><p>Eco-friendly options are gaining popularity...</p>",
  "excerpt": "Discover the top painting trends that are shaping the industry in 2025.",
  "author": "Hill Country Painting",
  "category": "Industry Insights",
  "tags": ["trends", "2025", "painting"],
  "featured_image": "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
  "published": true,
  "meta_description": "Explore the top 5 painting trends for 2025 from industry experts.",
  "meta_keywords": "painting trends 2025, painting industry, home painting"
}
```

**✨ Auto-Generated Image Metadata:** When you include a `featured_image` URL, the system automatically generates:
- **Alt text:** "Featured image for [Post Title] - [Category]"
- **Title attribute:** "[Post Title] | Hill Country Painting"
- **Caption:** "Illustration for: [Post Title]"

These are optimized for SEO and accessibility compliance!

---

## Minimal Example

The simplest payload you can send:

```json
{
  "title": "My Blog Post Title",
  "content": "This is the full content of my blog post. It can be HTML or plain text."
}
```

The system will automatically:
- Generate a URL-friendly slug from the title
- Create an excerpt from the first 200 characters
- Set default values for author, category, etc.
- Publish the post immediately

---

## How It Works

1. **Zapier sends data** → Webhook receives POST request
2. **Edge function processes** → Creates slug, applies defaults
3. **Saves to database** → Supabase stores the blog post
4. **Instantly available** → Appears on your blog page at `/blog`
5. **Individual page created** → Accessible at `/blog/your-post-slug`

---

## Blog URLs

- **Blog listing:** `https://hillcopaint.com/blog`
- **Individual posts:** `https://hillcopaint.com/blog/[slug]`
  - Example: `https://hillcopaint.com/blog/top-5-painting-trends-for-2025`

---

## Testing the Integration

### Option 1: Test with Zapier
1. Set up a Zap with the webhook URL above
2. Send a test post with title and content
3. Check `https://hillcopaint.com/blog` to see your post

### Option 2: Test with Postman/cURL

```bash
curl -X POST https://jsliktxrbzwhxrtcyoxv.supabase.co/functions/v1/create-blog-post \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Test Post",
    "content": "This is a test blog post."
  }'
```

---

## Database Schema

The blog posts are stored in the `blog_posts` table with these fields:

- `id` (uuid) - Unique identifier
- `title` (text) - Post title
- `slug` (text) - URL-friendly slug
- `content` (text) - Full content
- `excerpt` (text) - Short summary
- `author` (text) - Author name
- `category` (text) - Category
- `tags` (text[]) - Array of tags
- `featured_image` (text) - Image URL
- `published` (boolean) - Published status
- `published_at` (timestamp) - Publication date
- `created_at` (timestamp) - Created date
- `updated_at` (timestamp) - Last updated
- `meta_description` (text) - SEO description
- `meta_keywords` (text) - SEO keywords

---

## Security

- The webhook uses **no authentication** (verify_jwt: false) so Zapier can post directly
- Only **published posts** are visible on the website
- Row Level Security (RLS) is enabled to protect the data
- The service role key is used by the edge function (automatically configured)

---

## Common Zapier Triggers

This blog system works great with:
- **RSS feeds** - Auto-post when new RSS items appear
- **Google Sheets** - Post from a content calendar
- **Email** - Send an email to publish
- **Scheduled posts** - Post on a schedule
- **AI content** - Use ChatGPT/Claude to generate posts
- **Social media** - Cross-post from LinkedIn, Twitter, etc.

---

## Troubleshooting

### Post not appearing?
- Check the `published` field is `true`
- Verify the POST request succeeded (status 201)
- Check browser console for any errors

### Duplicate posts?
- Each title creates a unique slug
- Sending the same title twice will fail (unique constraint)
- Change the title slightly to repost

### Images not showing?
- Use full URLs (not relative paths)
- Ensure images are publicly accessible
- Consider using Pexels or Unsplash URLs

---

## Support

If you need to manage posts manually:
- Access Supabase dashboard at: https://jsliktxrbzwhxrtcyoxv.supabase.co
- Navigate to Table Editor → blog_posts
- You can view, edit, or delete posts directly

---

## Next Steps

1. Set up your Zapier webhook with the URL above
2. Create a test post to verify everything works
3. Set up your actual Zap with your content source
4. Start publishing! Posts appear instantly on your site.
