import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SEO from '../components/SEO';
import CTABanner from '../components/sections/CTABanner';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import { supabase, supabaseConfigured } from '../lib/supabase';

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

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;

      if (!supabaseConfigured || !supabase) {
        console.warn('Supabase not configured');
        setNotFound(true);
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('slug', slug)
          .eq('published', true)
          .single();

        if (error || !data) {
          console.error('Error fetching blog post:', error);
          setNotFound(true);
        } else {
          setPost(data);
        }
      } catch (err) {
        console.error('Error:', err);
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
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-deep-600"></div>
          <p className="mt-4 text-slate-600">Loading post...</p>
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
        />
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
          <div className="text-center max-w-md mx-auto px-4">
            <h1 className="text-4xl font-bold text-deep-900 mb-4">Post Not Found</h1>
            <p className="text-slate-600 mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
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
    const plainText = post.content.replace(/<[^>]*>/g, '').trim();
    const wordCount = plainText.split(/\s+/).length;

    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BlogPosting',
          '@id': `${baseUrl}/blog/${post.slug}#article`,
          headline: post.title,
          description: post.meta_description || post.excerpt,
          abstract: post.tldr || post.excerpt,
          articleBody: plainText.substring(0, 500) + '...',
          wordCount: wordCount,
          image: post.featured_image ? {
            '@type': 'ImageObject',
            url: post.featured_image,
            caption: post.featured_image_caption || post.title,
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
              url: `${baseUrl}/logo.png`,
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
              url: `${baseUrl}/logo.png`,
              width: 180,
              height: 180
            }
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${baseUrl}/blog/${post.slug}`
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
          '@id': `${baseUrl}/blog/${post.slug}#breadcrumb`,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: baseUrl
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
              name: post.title
            }
          ]
        },
        {
          '@type': 'WebPage',
          '@id': `${baseUrl}/blog/${post.slug}#webpage`,
          url: `${baseUrl}/blog/${post.slug}`,
          name: `${post.title} | Hill Country Painting Blog`,
          description: post.meta_description || post.excerpt,
          breadcrumb: {
            '@id': `${baseUrl}/blog/${post.slug}#breadcrumb`
          },
          inLanguage: 'en-US',
          potentialAction: {
            '@type': 'ReadAction',
            target: [`${baseUrl}/blog/${post.slug}`]
          }
        }
      ]
    };
  };

  return (
    <>
      <SEO
        title={`${post.title} — Hill Country Painting`}
        description={post.meta_description || post.excerpt}
        canonical={`/blog/${post.slug}`}
        pageType="article"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: post.title, url: `/blog/${post.slug}` }
        ]}
      />

      <Helmet>
        <meta property="og:type" content="article" />
        <meta property="og:image" content={post.featured_image || 'https://www.hillcopaint.com/logo.png'} />
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
        <meta name="twitter:image" content={post.featured_image || 'https://www.hillcopaint.com/logo.png'} />
        <script type="application/ld+json">
          {JSON.stringify(generateStructuredData())}
        </script>
      </Helmet>

      {/* Hero Section with Featured Image */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-deep-50 to-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-deep-700 hover:text-deep-800 font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.published_at}>{formatDate(post.published_at)}</time>
              </div>
              <span className="px-3 py-1 bg-deep-100 text-deep-700 rounded-full text-xs font-medium">
                {post.category}
              </span>
              <span className="text-slate-500">By {post.author}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-deep-900 leading-heading">
              {post.title}
            </h1>

            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap items-center gap-2">
                <Tag className="w-4 h-4 text-slate-500" />
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-slate-200 text-slate-700 rounded text-xs"
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
      <article className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {post.tldr && (
            <section
              className="mb-12 p-6 bg-deep-50 border-l-4 border-deep-600 rounded-r-lg"
              role="complementary"
              aria-label="Article summary"
              itemProp="abstract"
            >
              <h2 className="text-xl font-bold text-deep-900 mb-3">TL;DR</h2>
              <p className="text-slate-700 text-lg leading-relaxed">{post.tldr}</p>
            </section>
          )}
          <div
            className="prose prose-lg prose-slate max-w-none
              prose-headings:font-bold prose-headings:text-deep-900
              prose-h1:text-4xl prose-h1:mt-20 prose-h1:mb-12 prose-h1:leading-tight
              prose-h2:text-3xl prose-h2:mt-20 prose-h2:mb-10 prose-h2:leading-snug
              prose-h3:text-2xl prose-h3:mt-16 prose-h3:mb-8 prose-h3:leading-snug
              prose-p:text-slate-700 prose-p:text-lg prose-p:leading-relaxed prose-p:mb-10
              prose-a:text-deep-600 prose-a:font-medium prose-a:underline prose-a:underline-offset-2 hover:prose-a:text-deep-700
              prose-strong:text-deep-900 prose-strong:font-bold
              prose-ul:my-10 prose-ul:space-y-4 prose-li:text-slate-700 prose-li:leading-relaxed prose-li:mb-3
              prose-ol:my-10 prose-ol:space-y-4
              prose-blockquote:border-l-4 prose-blockquote:border-deep-500 prose-blockquote:pl-6 prose-blockquote:py-4 prose-blockquote:my-12 prose-blockquote:italic prose-blockquote:text-slate-600 prose-blockquote:bg-slate-50 prose-blockquote:rounded-r
              prose-img:rounded-xl prose-img:shadow-lg prose-img:my-12
              prose-code:text-deep-600 prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
              first:prose-p:text-xl first:prose-p:font-medium first:prose-p:text-slate-900"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Transform Your Space?"
        subtitle="Get expert painting services from Austin's trusted professionals"
        primaryCTA={{
          text: 'Get Free Estimate',
          href: '/contact'
        }}
        secondaryCTA={{
          text: 'Call (512) 240-2246',
          href: 'tel:(512) 240-2246'
        }}
      />
    </>
  );
};

export default BlogPost;
