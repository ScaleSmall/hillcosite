import { createClient } from 'npm:@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
};

interface BlogPostInput {
  title: string;
  content: string;
  excerpt?: string;
  author?: string;
  category?: string;
  tags?: string[];
  featured_image?: string;
  published?: boolean;
  meta_description?: string;
  meta_keywords?: string;
}

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function cleanTitle(title: string): string {
  return title
    .replace(/\r\n|\r|\n/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function generateImageMetadata(title: string, category: string) {
  const cleanedTitle = cleanTitle(title);

  return {
    alt: `Featured image for ${cleanedTitle} - ${category}`,
    title: `${cleanedTitle} | Hill Country Painting`,
    caption: `Illustration for: ${cleanedTitle}`
  };
}

function stripHtmlTags(html: string): string {
  return html
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

async function downloadAndUploadImage(
  imageUrl: string,
  slug: string,
  supabase: any
): Promise<string> {
  const response = await fetch(imageUrl);
  if (!response.ok) {
    throw new Error(`Failed to download image: ${response.statusText}`);
  }

  const blob = await response.blob();
  const arrayBuffer = await blob.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);

  const ext = imageUrl.includes('.png') ? 'png' :
              imageUrl.includes('.webp') ? 'webp' :
              imageUrl.includes('.gif') ? 'gif' : 'jpg';

  const filename = `${slug}-${Date.now()}.${ext}`;
  const filepath = `blog/${filename}`;

  const { error: uploadError } = await supabase.storage
    .from('blog-images')
    .upload(filepath, buffer, {
      contentType: `image/${ext === 'jpg' ? 'jpeg' : ext}`,
      upsert: false
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

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    if (req.method === 'POST') {
      let body: BlogPostInput;

      try {
        body = await req.json();
      } catch (parseError) {
        console.error('JSON parse error:', parseError);
        return new Response(
          JSON.stringify({ error: 'Invalid JSON payload', details: parseError.message }),
          {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          }
        );
      }

      if (!body.title || !body.content) {
        console.error('Missing required fields:', { hasTitle: !!body.title, hasContent: !!body.content });
        return new Response(
          JSON.stringify({
            error: 'Title and content are required',
            received: {
              title: body.title ? 'present' : 'missing',
              content: body.content ? 'present' : 'missing'
            }
          }),
          {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          }
        );
      }

      if (typeof body.title !== 'string' || typeof body.content !== 'string') {
        return new Response(
          JSON.stringify({ error: 'Title and content must be strings' }),
          {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          }
        );
      }

      const cleanedTitle = cleanTitle(body.title);
      const slug = generateSlug(cleanedTitle);

      if (!slug || slug.length === 0) {
        return new Response(
          JSON.stringify({ error: 'Failed to generate valid slug from title' }),
          {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          }
        );
      }

      const category = body.category || 'Industry Insights';

      const { tldr, cleanedContent } = extractTLDR(body.content);
      const plainTextContent = stripHtmlTags(cleanedContent);
      const autoExcerpt = plainTextContent.substring(0, 200).trim() + '...';

      console.log('Processing post:', {
        title: cleanedTitle,
        slug: slug,
        contentLength: body.content.length,
        hasTLDR: !!tldr,
        hasImage: !!body.featured_image
      });

      let permanentImageUrl = body.featured_image || null;

      if (body.featured_image) {
        try {
          permanentImageUrl = await downloadAndUploadImage(
            body.featured_image,
            slug,
            supabase
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
        slug: slug,
        content: cleanedContent,
        excerpt: body.excerpt || autoExcerpt,
        tldr: tldr,
        author: body.author || 'Hill Country Painting',
        category: category,
        tags: body.tags || [],
        featured_image: permanentImageUrl,
        featured_image_alt: imageMetadata.alt,
        featured_image_title: imageMetadata.title,
        featured_image_caption: imageMetadata.caption,
        published: body.published !== undefined ? body.published : true,
        published_at: new Date().toISOString(),
        meta_description: body.meta_description || body.excerpt || plainTextContent.substring(0, 160),
        meta_keywords: body.meta_keywords || '',
      };

      const { data, error } = await supabase
        .from('blog_posts')
        .insert([postData])
        .select()
        .single();

      if (error) {
        console.error('Database error:', error);
        return new Response(
          JSON.stringify({ error: 'Failed to create blog post', details: error.message }),
          {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          }
        );
      }

      return new Response(
        JSON.stringify({ success: true, post: data }),
        {
          status: 201,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
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
          JSON.stringify({ error: 'Failed to fetch blog posts' }),
          {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          }
        );
      }

      return new Response(
        JSON.stringify({ posts: data }),
        {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      {
        status: 405,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error', details: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
