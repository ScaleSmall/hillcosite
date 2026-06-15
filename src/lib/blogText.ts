const normalizeBlogSlug = (slug: string) =>
  slug
    .trim()
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export const cleanBlogDisplayText = (value: string) =>
  value
    .replace(/\bDeterimine\b/g, 'Determine')
    .replace(/\bdeterimine\b/g, 'determine');

export const blogDisplayTitle = (title: string, slug = '') => {
  const normalizedSlug = normalizeBlogSlug(slug);

  if (normalizedSlug === 'what-should-i-know-before-hiring-an-interior-painter-in-austin-2') {
    return 'Questions to Ask Before Hiring an Interior Painter in Austin';
  }

  return cleanBlogDisplayText(title);
};

export const normalizeBlogCostCopy = (value: string) =>
  cleanBlogDisplayText(value)
    .replace(
      /interior painting costs range from \$6,000 to \$16,000, with an average cost of \$8,000/g,
      'full-scope interior painting often ranges from $6,500 to $16,000 once preparation, room count, ceiling height, and finish expectations are reviewed'
    )
    .replace(
      /the cost typically ranges from \$6,000 to \$12,000, with an average cost of \$9,000/g,
      'full-scope interior projects often range from $6,500 to $12,500 after room count, preparation, finish level, and schedule are reviewed'
    )
    .replace(
      /ranges from \$6,000 to \$12,000 for a 2,500 square foot home, with an average cost of around \$9,000/g,
      'often starts above the professional project floor for a 2,500 square foot home, with the final range shaped by preparation, room count, finish level, and schedule'
    );

