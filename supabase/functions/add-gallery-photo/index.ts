import { createClient } from 'npm:@supabase/supabase-js@2.57.4';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
};

interface GalleryPhotoRequest {
  image_url?: string;
  image_base64?: string;
  image_filename?: string;
  title: string;
  description?: string;
  alt_text?: string;
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

    const supabase = createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });

    const body: GalleryPhotoRequest = await req.json();

    if (!body.title) {
      return new Response(
        JSON.stringify({ error: 'Title is required' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    let imageUrl = body.image_url;

    // If base64 image is provided, upload to storage
    if (body.image_base64 && body.image_filename) {
      const base64Data = body.image_base64.split(',')[1] || body.image_base64;
      const buffer = Uint8Array.from(atob(base64Data), c => c.charCodeAt(0));
      
      const timestamp = Date.now();
      const filename = `${timestamp}-${body.image_filename}`;

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('gallery-images')
        .upload(filename, buffer, {
          contentType: body.image_filename.endsWith('.png') ? 'image/png' : 'image/jpeg',
          cacheControl: '31536000',
          upsert: false,
        });

      if (uploadError) {
        console.error('Storage upload error:', uploadError);
        return new Response(
          JSON.stringify({ error: 'Failed to upload image', details: uploadError.message }),
          {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          }
        );
      }

      const { data: publicUrlData } = supabase.storage
        .from('gallery-images')
        .getPublicUrl(filename);

      imageUrl = publicUrlData.publicUrl;
    }

    if (!imageUrl) {
      return new Response(
        JSON.stringify({ error: 'Either image_url or image_base64 with image_filename is required' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    // Get the current max display_order
    const { data: maxOrderData, error: maxOrderError } = await supabase
      .from('gallery_photos')
      .select('display_order')
      .order('display_order', { ascending: false })
      .limit(1)
      .maybeSingle();

    if (maxOrderError && maxOrderError.code !== 'PGRST116') {
      console.error('Error fetching max display_order:', maxOrderError);
    }

    const nextDisplayOrder = (maxOrderData?.display_order || 0) + 1;

    // Insert the gallery photo
    const { data: photoData, error: photoError } = await supabase
      .from('gallery_photos')
      .insert({
        image_url: imageUrl,
        title: body.title,
        description: body.description || '',
        alt_text: body.alt_text || body.title,
        display_order: nextDisplayOrder,
        is_visible: true,
      })
      .select()
      .single();

    if (photoError) {
      console.error('Database insert error:', photoError);
      return new Response(
        JSON.stringify({ error: 'Failed to save photo to database', details: photoError.message }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        data: photoData,
        message: 'Gallery photo added successfully',
      }),
      {
        status: 201,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Unexpected error:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Internal server error', 
        details: error instanceof Error ? error.message : 'Unknown error' 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});