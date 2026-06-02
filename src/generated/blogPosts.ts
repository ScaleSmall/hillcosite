export interface GeneratedBlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featured_image: string | null;
  published_at: string;
  category: string;
  author: string;
  updated_at: string | null;
}

export const generatedBlogPosts: GeneratedBlogPost[] = [];
