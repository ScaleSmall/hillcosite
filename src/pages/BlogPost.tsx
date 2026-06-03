import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SEO from '../components/SEO';
import CTABanner from '../components/sections/CTABanner';
import { Calendar, ArrowLeft, ArrowRight, Tag } from 'lucide-react';
import { supabase, supabaseConfigured } from '../lib/supabase';
import { generatedBlogPosts, type GeneratedBlogPost } from '../generated/blogPosts';
import { cleanBlogDisplayText } from '../lib/blogText';

interface BlogPostData {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  tldr: string | null;
  featured_image: string | null;
  featured_image_alt: string | null;
  featured_image_title: string | null;
  featured_image_caption: string | null;
  published_at: string;
  category: string;
  author: string;
  tags: string[];
  meta_description: string | null;
  meta_keywords: string | null;
}

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

const stripMarkdown = (value: string) =>
  value
    .replace(/^#+\s*/gm, '')
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\[(.*?)\]\((.*?)\)/g, '$1')
    .trim();

const normalizeArticleContent = (value: string) =>
  value
    .replace(/<h1(\s[^>]*)?>/gi, '<h2$1>')
    .replace(/<\/h1>/gi, '</h2>');

const blogPathSlug = (postSlug: string) =>
  postSlug
    .trim()
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
const blogPostPath = (postSlug: string) => `/blog/${blogPathSlug(postSlug)}`;

const generatedToBlogPost = (post: GeneratedBlogPost): BlogPostData => {
  const excerpt = stripMarkdown(post.excerpt || post.title);

  return {
    id: post.id,
    title: post.title,
    slug: post.slug,
    content: post.content || `<p>${escapeHtml(excerpt)}</p>`,
    excerpt,
    tldr: post.tldr || excerpt,
    featured_image: post.featured_image,
    featured_image_alt: post.featured_image_alt || post.title,
    featured_image_title: post.featured_image_title || post.title,
    featured_image_caption: post.featured_image_caption || null,
    published_at: post.published_at,
    category: post.category,
    author: post.author,
    tags: [post.category, 'Austin painting', 'Hill Country Painting'],
    meta_description: post.meta_description || excerpt.slice(0, 155),
    meta_keywords: post.meta_keywords || null
  };
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      const requestedSlug = decodeURIComponent(slug);
      const generatedPostForRoute = generatedBlogPosts.find(item =>
        item.slug === requestedSlug || blogPathSlug(item.slug) === requestedSlug
      );
      const supabaseSlug = generatedPostForRoute?.slug || requestedSlug;

      if (generatedPostForRoute && ['127.0.0.1', 'localhost'].includes(window.location.hostname)) {
        setPost(generatedToBlogPost(generatedPostForRoute));
        setLoading(false);
        return;
      }

      if (!supabaseConfigured || !supabase) {
        console.warn('Supabase not configured');
        if (generatedPostForRoute) {
          setPost(generatedToBlogPost(generatedPostForRoute));
        } else {
          setNotFound(true);
        }
        setLoading(false);
        return;
      }

      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 8000);

      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('slug', supabaseSlug)
          .eq('published', true)
          .abortSignal(controller.signal)
          .maybeSingle();
        clearTimeout(timeout);

        if (error || !data) {
          if (generatedPostForRoute) {
            setPost(generatedToBlogPost(generatedPostForRoute));
            return;
          }
          setNotFound(true);
        } else {
          setPost(data);
        }
      } catch {
        clearTimeout(timeout);
        if (generatedPostForRoute) {
          setPost(generatedToBlogPost(generatedPostForRoute));
          setLoading(false);
          return;
        }
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-brand-azureDark"></div>
          <p className="mt-4 text-brand-gray-600">Loading post...</p>
        </div>
      </div>
    );
  }

  if (notFound || !post) {
    return (
      <>
        <SEO
          title="Post Not Found | Hill Country Painting"
          description="The blog post you're looking for could not be found."
          canonical="/blog"
          robots="noindex, nofollow"
        />
        <div className="min-h-screen flex items-center justify-center bg-brand-gray-50">
          <div className="text-center max-w-md mx-auto px-4">
            <h1 className="text-4xl font-bold text-brand-gray-900 mb-4">Post Not Found</h1>
            <p className="text-brand-gray-600 mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
            <Link to="/blog" className="btn-primary">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </div>
        </div>
      </>
    );
  }

  const generateStructuredData = () => {
    const baseUrl = 'https://www.hillcopaint.com';
    const postPath = blogPostPath(post.slug);
    const plainText = normalizeArticleContent(post.content).replace(/<[^>]*>/g, '').trim();
    const wordCount = plainText.split(/\s+/).length;
    const displayTitle = cleanBlogDisplayText(post.title);
    const displayDescription = cleanBlogDisplayText(post.meta_description || post.excerpt);

    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BlogPosting',
          '@id': `${baseUrl}${postPath}#article`,
          headline: displayTitle,
          description: displayDescription,
          abstract: cleanBlogDisplayText(post.tldr || post.excerpt),
          articleBody: plainText.substring(0, 500) + '...',
          wordCount: wordCount,
          image: post.featured_image ? {
            '@type': 'ImageObject',
            url: post.featured_image,
            caption: cleanBlogDisplayText(post.featured_image_caption || post.title),
            width: 1200,
            height: 630
          } : undefined,
          datePublished: post.published_at,
          dateModified: post.published_at,
          author: {
            '@type': 'Organization',
            name: 'Hill Country Painting',
            url: baseUrl,
            logo: {
              '@type': 'ImageObject',
              url: `${baseUrl}/brand/hill-country-painting-logo-primary.png`,
              width: 180,
              height: 180
            }
          },
          publisher: {
            '@type': 'Organization',
            name: 'Hill Country Painting',
            url: baseUrl,
            logo: {
              '@type': 'ImageObject',
              url: `${baseUrl}/brand/hill-country-painting-logo-primary.png`,
              width: 180,
              height: 180
            }
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${baseUrl}${postPath}`
          },
          articleSection: post.category,
          keywords: post.tags.join(', '),
          inLanguage: 'en-US',
          isAccessibleForFree: true,
          isPartOf: {
            '@type': 'Blog',
            '@id': `${baseUrl}/blog#blog`,
            name: 'Hill Country Painting Blog',
            publisher: {
              '@id': `${baseUrl}/#organization`
            }
          }
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${baseUrl}${postPath}#breadcrumb`,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: `${baseUrl}/`
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Blog',
              item: `${baseUrl}/blog`
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: displayTitle
            }
          ]
        },
        {
          '@type': 'WebPage',
          '@id': `${baseUrl}${postPath}#webpage`,
          url: `${baseUrl}${postPath}`,
          name: `${displayTitle} | Hill Country Painting Blog`,
          description: displayDescription,
          breadcrumb: {
            '@id': `${baseUrl}${postPath}#breadcrumb`
          },
          inLanguage: 'en-US',
          potentialAction: {
            '@type': 'ReadAction',
            target: [`${baseUrl}${postPath}`]
          }
        }
      ]
    };
  };

  const currentIndex = generatedBlogPosts.findIndex(item => item.slug === post.slug);
  const relatedPosts = currentIndex >= 0
    ? [1, 2, -1]
        .map(offset => generatedBlogPosts[(currentIndex + offset + generatedBlogPosts.length) % generatedBlogPosts.length])
        .filter((item, index, items) => item.slug !== post.slug && items.findIndex(other => other.slug === item.slug) === index)
    : generatedBlogPosts.filter(item => item.slug !== post.slug).slice(0, 3);

  const serviceLinks = [
    {
      title: 'Exterior Painting in Austin',
      href: '/exterior-painting-austin',
      description: 'Prep, coatings, and weather-aware exterior painting for Central Texas homes.'
    },
    {
      title: 'Interior Painting in Austin',
      href: '/interior-painting-austin',
      description: 'Clean, careful interior painting for living spaces, trim, walls, and ceilings.'
    },
    {
      title: 'Cabinet Refinishing',
      href: '/services/cabinet-refinishing',
      description: 'Durable cabinet painting and refinishing for kitchens, baths, and built-ins.'
    },
    {
      title: 'Commercial Painting',
      href: '/services/commercial',
      description: 'Professional painting for offices, retail spaces, and commercial properties.'
    }
  ];
  const articleContent = normalizeArticleContent(post.content);
  const displayTitle = cleanBlogDisplayText(post.title);
  const displayDescription = cleanBlogDisplayText(post.meta_description || post.excerpt);

  return (
    <>
      <SEO
        title={`${displayTitle} — Hill Country Painting`}
        description={displayDescription}
        canonical={blogPostPath(post.slug)}
        pageType="article"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: displayTitle, url: blogPostPath(post.slug) }
        ]}
      />

      <Helmet>
        <meta property="og:type" content="article" />
        <meta property="og:image" content={post.featured_image || 'https://www.hillcopaint.com/brand/hill-country-painting-logo-primary.png'} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="article:published_time" content={post.published_at} />
        <meta property="article:modified_time" content={post.published_at} />
        <meta property="article:author" content={post.author} />
        <meta property="article:section" content={post.category} />
        {post.tags.map((tag, index) => (
          <meta key={index} property="article:tag" content={tag} />
        ))}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={post.featured_image || 'https://www.hillcopaint.com/brand/hill-country-painting-logo-primary.png'} />
        <script type="application/ld+json">
          {JSON.stringify(generateStructuredData())}
        </script>
      </Helmet>

      {/* Article Header */}
      <section className="relative py-10 md:py-14 bg-brand-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-brand-azureDark hover:text-brand-gray-800 font-medium mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-4 text-sm text-brand-gray-600">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.published_at}>{formatDate(post.published_at)}</time>
              </div>
              <span className="px-3 py-1 bg-brand-gray-100 text-brand-azureDark rounded-full text-xs font-medium">
                {post.category}
              </span>
              <span className="text-brand-gray-500">By {post.author}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-brand-gray-900 leading-heading">
              {displayTitle}
            </h1>

            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap items-center gap-2">
                <Tag className="w-4 h-4 text-brand-gray-500" />
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-brand-gray-200 text-brand-gray-700 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="pt-6 pb-16 md:pt-8 md:pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {post.tldr && (
            <section
              className="mb-8 p-5 bg-brand-gray-50 border-l-4 border-brand-azureDark rounded-r-lg"
              role="complementary"
              aria-label="Article summary"
              itemProp="abstract"
            >
              <h2 className="text-xl font-bold text-brand-gray-900 mb-3">TL;DR</h2>
              <p className="text-brand-gray-700 text-lg leading-relaxed">{cleanBlogDisplayText(post.tldr)}</p>
            </section>
          )}
          <div
            className="prose prose-lg prose-slate max-w-none
              prose-headings:font-bold prose-headings:text-brand-gray-900
              prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:leading-snug
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:leading-snug
              prose-p:text-brand-gray-700 prose-p:text-lg prose-p:leading-relaxed prose-p:mb-5
              prose-a:text-brand-azureDark prose-a:font-medium prose-a:underline prose-a:underline-offset-2 hover:prose-a:text-brand-azureDark
              prose-strong:text-brand-gray-900 prose-strong:font-bold
              prose-ul:my-5 prose-ul:space-y-2 prose-li:text-brand-gray-700 prose-li:leading-relaxed prose-li:mb-2
              prose-ol:my-5 prose-ol:space-y-2
              prose-table:my-8 prose-th:bg-brand-gray-50 prose-th:text-brand-gray-900 prose-td:align-top
              prose-blockquote:border-l-4 prose-blockquote:border-brand-azure prose-blockquote:pl-6 prose-blockquote:py-3 prose-blockquote:my-8 prose-blockquote:italic prose-blockquote:text-brand-gray-600 prose-blockquote:bg-brand-gray-50 prose-blockquote:rounded-r
              prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8
              first:prose-p:text-xl first:prose-p:font-medium first:prose-p:text-brand-gray-900 first:prose-p:mb-6"
            dangerouslySetInnerHTML={{ __html: articleContent }}
          />
        </div>
      </article>

      {(relatedPosts.length > 0 || serviceLinks.length > 0) && (
        <section className="section-padding bg-brand-gray-50" aria-labelledby="related-painting-resources">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 id="related-painting-resources" className="text-3xl font-bold text-brand-gray-900 mb-4">
                Related Austin Painting Resources
              </h2>
              <p className="text-brand-gray-600 leading-body">
                Continue researching Austin painting costs, timing, coatings, and service options with Hill Country Painting.
              </p>
            </div>

            {relatedPosts.length > 0 && (
              <div className="mb-10">
                <h3 className="text-xl font-bold text-brand-gray-900 mb-4">More Painting Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map(related => (
                    <Link
                      key={related.slug}
                      to={blogPostPath(related.slug)}
                      className="card p-6 hover:shadow-lg transition-shadow duration-200 group"
                    >
                      <p className="text-sm text-brand-gray-500 mb-2">{related.category}</p>
                      <h4 className="text-lg font-semibold text-brand-gray-900 group-hover:text-brand-azureDark transition-colors mb-3">
                        {cleanBlogDisplayText(related.title)}
                      </h4>
                      <span className="inline-flex items-center text-brand-azureDark font-medium">
                        Read article
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h3 className="text-xl font-bold text-brand-gray-900 mb-4">Painting Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {serviceLinks.map(service => (
                  <Link
                    key={service.href}
                    to={service.href}
                    className="card p-6 hover:shadow-lg transition-shadow duration-200 group"
                  >
                    <h4 className="text-lg font-semibold text-brand-gray-900 group-hover:text-brand-azureDark transition-colors mb-2">
                      {service.title}
                    </h4>
                    <p className="text-sm text-brand-gray-600 leading-body">{service.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Banner */}
      <CTABanner
        title="Let's Talk About Your Project"
        subtitle="No pressure, no sales pitch. Just a conversation about what you'd like to accomplish."
        primaryCTA={{
          text: 'Request a Consultation',
          href: '/contact'
        }}
        secondaryCTA={{
          text: 'Call (512) 240-2246',
          href: 'tel:+15122402246'
        }}
        backgroundColor="coral"
      />
    </>
  );
};

export default BlogPost;
