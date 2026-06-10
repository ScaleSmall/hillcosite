const canonicalBlogSlugCorrections = new Map<string, string>();

export const blogPathSlug = (slug: string) => {
  const normalized = slug
    .trim()
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  return canonicalBlogSlugCorrections.get(normalized) || normalized;
};

export const blogPostPath = (slug: string) => `/blog/${blogPathSlug(slug)}`;
