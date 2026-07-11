const canonicalBlogSlugCorrections = new Map<string, string>([
  [
    'how-to-deterimine-the-best-austin-exterior-house-painters',
    'how-to-determine-the-best-austin-exterior-house-painters'
  ]
]);

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
