import { createClient } from 'npm:@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey, apikey, x-zapier-secret',
};

interface BlogPostInput {
  title: string;
  content: string;
  excerpt?: string;
  author?: string;
  category?: string;
  target_service?: string;
  tags?: string[] | string;
  featured_image?: string;
  published?: boolean;
  meta_description?: string;
  meta_keywords?: string;
  tldr?: string;
}

function cleanTitle(title: string): string {
  return title
    .replace(/\r\n|\r|\n/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 90) || 'post';
}

function stripHtmlTags(html: string): string {
  return html
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function truncateAtWord(text: string, maxLength: number): string {
  const cleaned = text.replace(/\s+/g, ' ').trim();

  if (cleaned.length <= maxLength) {
    return cleaned;
  }

  const clipped = cleaned.slice(0, maxLength).replace(/\s+\S*$/, '').trim();
  return `${clipped}...`;
}

function normalizeTags(tags: string[] | string | undefined, category: string): string[] {
  const baseTags = [category, 'Austin TX', 'Hill Country Painting'];

  if (Array.isArray(tags)) {
    return Array.from(new Set([...tags, ...baseTags].map((tag) => String(tag).trim()).filter(Boolean)));
  }

  if (typeof tags === 'string' && tags.trim()) {
    const parsedTags = tags
      .split(',')
      .map((tag) => tag.trim())
      .filter(Boolean);

    return Array.from(new Set([...parsedTags, ...baseTags]));
  }

  return Array.from(new Set(baseTags));
}

function extractTLDR(content: string): { tldr: string | null; cleanedContent: string } {
  const tldrRegex = /<p>\s*<strong>\s*TL;DR:?\s*<\/strong>\s*(.*?)<\/p>\s*/is;
  const match = content.match(tldrRegex);

  if (match) {
    const tldr = stripHtmlTags(match[1]).trim();
    const cleanedContent = content.replace(tldrRegex, '').trim();
    return { tldr, cleanedContent };
  }

  return { tldr: null, cleanedContent: content };
}

function generateImageMetadata(title: string, category: string) {
  const cleanedTitle = cleanTitle(title);

  return {
    alt: `Featured image for ${cleanedTitle} - ${category}`,
    title: `${cleanedTitle} | Hill Country Painting`,
    caption: `Illustration for: ${cleanedTitle}`,
  };
}

async function generateUniqueSlug(supabase: any, title: string): Promise<string> {
  const baseSlug = generateSlug(title);
  let candidate = baseSlug;
  let suffix = 2;

  while (suffix <= 25) {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('id')
      .eq('slug', candidate)
      .maybeSingle();

    if (error) {
      throw new Error(`Failed checking slug uniqueness: ${error.message}`);
    }

    if (!data) {
      return candidate;
    }

    candidate = `${baseSlug}-${suffix}`;
    suffix += 1;
  }

  return `${baseSlug}-${Date.now()}`;
}

async function downloadAndUploadImage(
  imageUrl: string,
  slug: string,
  supabase: any,
): Promise<string> {
  const response = await fetch(imageUrl);

  if (!response.ok) {
    throw new Error(`Failed to download image: ${response.statusText}`);
  }

  const blob = await response.blob();
  const arrayBuffer = await blob.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);

  const ext = imageUrl.includes('.png')
    ? 'png'
    : imageUrl.includes('.webp')
      ? 'webp'
      : imageUrl.includes('.gif')
        ? 'gif'
        : 'jpg';

  const filename = `${slug}-${Date.now()}.${ext}`;
  const filepath = `blog/${filename}`;

  const { error: uploadError } = await supabase.storage
    .from('blog-images')
    .upload(filepath, buffer, {
      contentType: `image/${ext === 'jpg' ? 'jpeg' : ext}`,
      upsert: false,
    });

  if (uploadError) {
    throw new Error(`Failed to upload image: ${uploadError.message}`);
  }

  const { data } = supabase.storage
    .from('blog-images')
    .getPublicUrl(filepath);

  return data.publicUrl;
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const zapierPublishSecret = Deno.env.get('ZAPIER_PUBLISH_SECRET');

    if (!supabaseUrl || !supabaseServiceKey) {
      return new Response(
        JSON.stringify({ error: 'Missing Supabase environment configuration' }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        },
      );
    }

    if (zapierPublishSecret) {
      const incomingSecret = req.headers.get('x-zapier-secret');

      if (incomingSecret !== zapierPublishSecret) {
        return new Response(
          JSON.stringify({ error: 'Unauthorized' }),
          {
            status: 401,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          },
        );
      }
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    if (req.method === 'POST') {
      let body: BlogPostInput;

      try {
        body = await req.json();
      } catch (parseError) {
        return new Response(
          JSON.stringify({ error: 'Invalid JSON payload', details: parseError.message }),
          {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          },
        );
      }

      if (!body.title || !body.content) {
        return new Response(
          JSON.stringify({
            error: 'Title and content are required',
            received: {
              title: body.title ? 'present' : 'missing',
              content: body.content ? 'present' : 'missing',
            },
          }),
          {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          },
        );
      }

      if (typeof body.title !== 'string' || typeof body.content !== 'string') {
        return new Response(
          JSON.stringify({ error: 'Title and content must be strings' }),
          {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          },
        );
      }

      const cleanedTitle = cleanTitle(body.title);

      if (!cleanedTitle) {
        return new Response(
          JSON.stringify({ error: 'Title cannot be empty after cleanup' }),
          {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          },
        );
      }

      const slug = await generateUniqueSlug(supabase, cleanedTitle);
      const category = cleanTitle(body.category || body.target_service || 'Industry Insights');
      const { tldr: extractedTldr, cleanedContent } = extractTLDR(body.content.trim());
      const plainTextContent = stripHtmlTags(cleanedContent);
      const autoExcerpt = truncateAtWord(plainTextContent, 200);
      const autoMetaDescription = truncateAtWord(plainTextContent, 155);
      const published = body.published !== undefined ? Boolean(body.published) : true;

      let permanentImageUrl = body.featured_image || null;

      if (body.featured_image) {
        try {
          permanentImageUrl = await downloadAndUploadImage(
            body.featured_image,
            slug,
            supabase,
          );
        } catch (imageError) {
          console.error('Image upload failed:', imageError);
          permanentImageUrl = null;
        }
      }

      const imageMetadata = permanentImageUrl
        ? generateImageMetadata(cleanedTitle, category)
        : { alt: null, title: null, caption: null };

      const postData = {
        title: cleanedTitle,
        slug,
        content: cleanedContent,
        excerpt: body.excerpt || autoExcerpt,
        tldr: body.tldr || extractedTldr,
        author: body.author || 'Hill Country Painting',
        category,
        tags: normalizeTags(body.tags, category),
        featured_image: permanentImageUrl,
        featured_image_alt: imageMetadata.alt,
        featured_image_title: imageMetadata.title,
        featured_image_caption: imageMetadata.caption,
        published,
        published_at: published ? new Date().toISOString() : null,
        meta_description: body.meta_description || body.excerpt || autoMetaDescription,
        meta_keywords: body.meta_keywords || '',
      };

      const { data, error } = await supabase
        .from('blog_posts')
        .insert([postData])
        .select()
        .single();

      if (error) {
        return new Response(
          JSON.stringify({ error: 'Failed to create blog post', details: error.message }),
          {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          },
        );
      }

      return new Response(
        JSON.stringify({ success: true, post: data }),
        {
          status: 201,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        },
      );
    }

    if (req.method === 'GET') {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('published_at', { ascending: false });

      if (error) {
        return new Response(
          JSON.stringify({ error: 'Failed to fetch blog posts', details: error.message }),
          {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          },
        );
      }

      return new Response(
        JSON.stringify({ posts: data }),
        {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        },
      );
    }

    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      {
        status: 405,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      },
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Internal server error', details: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      },
    );
  }
});
