import { canonicalBusinessProvider, siteBaseUrl } from './businessSchema';
import { priorityAustinServiceSchema } from './priorityAustinServices';

interface GuideArticleSchemaInput {
  path: string;
  headline: string;
  description: string;
  keywords: string[];
}

export const createGuideArticleSchema = ({
  path,
  headline,
  description,
  keywords
}: GuideArticleSchemaInput) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${siteBaseUrl}${path}#article`,
  headline,
  description,
  url: `${siteBaseUrl}${path}`,
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  keywords,
  author: canonicalBusinessProvider,
  publisher: canonicalBusinessProvider,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${siteBaseUrl}${path}#webpage`
  },
  about: priorityAustinServiceSchema,
  mentions: priorityAustinServiceSchema
});
