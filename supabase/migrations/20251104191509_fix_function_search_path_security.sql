/*
  # Fix Function Search Path Security Issues

  This migration addresses security vulnerabilities where functions have a role-mutable search_path.
  Setting an explicit search_path prevents potential security issues from schema injection attacks.

  ## Functions Being Fixed
  
  1. `update_updated_at_column` - Sets updated_at timestamp
  2. `update_gallery_photos_updated_at` - Sets updated_at for gallery_photos
  3. `update_blog_posts_updated_at` - Sets updated_at for blog_posts

  ## Security Impact
  
  - Prevents schema injection attacks
  - Ensures functions operate on intended schema only
  - Follows PostgreSQL security best practices

  ## Changes
  
  - All functions set to use explicit `search_path = ''` to prevent mutable paths
  - Functions marked as SECURITY DEFINER where appropriate
*/

-- Fix update_updated_at_column function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

-- Fix update_gallery_photos_updated_at function
CREATE OR REPLACE FUNCTION public.update_gallery_photos_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

-- Fix update_blog_posts_updated_at function
CREATE OR REPLACE FUNCTION public.update_blog_posts_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;