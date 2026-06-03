export const cleanBlogDisplayText = (value: string) =>
  value
    .replace(/\bDeterimine\b/g, 'Determine')
    .replace(/\bdeterimine\b/g, 'determine');

