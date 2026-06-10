export interface GeneratedBlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  tldr: string | null;
  featured_image: string | null;
  featured_image_alt: string | null;
  featured_image_title: string | null;
  featured_image_caption: string | null;
  published_at: string;
  category: string;
  author: string;
  meta_description: string | null;
  meta_keywords: string | null;
  updated_at: string | null;
}

export const generatedBlogPosts: GeneratedBlogPost[] = [];
