import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import CTABanner from '../components/sections/CTABanner';
import SplitSection from '../components/sections/SplitSection';
import { Calendar, ArrowRight, ChevronDown } from 'lucide-react';
import { supabase, supabaseConfigured } from '../lib/supabase';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featured_image: string | null;
  published_at: string;
  category: string;
  author: string;
}

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [showPastArticles, setShowPastArticles] = useState(false);

  const recentPosts = blogPosts.slice(0, 6);
  const pastPosts = blogPosts.slice(6);

  useEffect(() => {
    const fetchPosts = async () => {
      if (!supabaseConfigured || !supabase) {
        console.warn('Supabase not configured, skipping blog post fetch');
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('id, title, slug, excerpt, featured_image, published_at, category, author')
          .eq('published', true)
          .order('published_at', { ascending: false });

        if (error) {
          console.error('Error fetching blog posts:', error);
        } else {
          setBlogPosts(data || []);
        }
      } catch (err) {
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const generateBlogSchema = () => {
    const baseUrl = 'https://www.hillcopaint.com';

    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Blog',
          '@id': `${baseUrl}/blog#blog`,
          url: `${baseUrl}/blog`,
          name: 'Hill Country Painting Blog',
          description: 'Expert painting tips, color guides, and home improvement advice from Austin\'s trusted painting professionals.',
          publisher: {
            '@type': 'Organization',
            '@id': `${baseUrl}#organization`,
            name: 'Hill Country Painting',
            url: baseUrl,
            logo: {
              '@type': 'ImageObject',
              url: `${baseUrl}/logo.png`
            },
            telephone: '(512) 240-2246',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Austin',
              addressRegion: 'TX',
              addressCountry: 'US'
            }
          },
          blogPost: blogPosts.map(post => ({
            '@type': 'BlogPosting',
            '@id': `${baseUrl}/blog/${post.slug}#article`,
            headline: post.title,
            description: post.excerpt,
            url: `${baseUrl}/blog/${post.slug}`,
            datePublished: post.published_at,
            author: {
              '@type': 'Organization',
              name: 'Hill Country Painting'
            },
            image: post.featured_image || undefined
          }))
        },
        {
          '@type': 'WebPage',
          '@id': `${baseUrl}/blog#webpage`,
          url: `${baseUrl}/blog`,
          name: 'Painting Blog | Austin Home Improvement Tips',
          description: 'Expert painting tips, color guides, and home improvement advice from Austin\'s trusted painting professionals.',
          breadcrumb: {
            '@type': 'BreadcrumbList',
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
              }
            ]
          }
        }
      ]
    };
  };

  return (
    <>
      <SEO
        title="Blog — Hill Country Painting"
        description="Expert painting tips, color guides, and home improvement advice from Austin's trusted painting professionals. Interior, exterior, and cabinet painting insights."
        canonical="/blog"
        pageType="collection"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' }
        ]}
      />

      {!loading && blogPosts.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(generateBlogSchema())}
        </script>
      )}

      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-deep-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-deep-900 leading-heading">
              Industry Insights
            </h1>
            <p className="text-xl text-slate-600 leading-body">
              Professional insights from Austin's painting experts. Industry trends, expert advice, and insider knowledge to help you make informed decisions about your painting projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Get Free Estimate
              </Link>
              <Link to="/services" className="btn-outline">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-deep-600"></div>
              <p className="mt-4 text-slate-600">Loading posts...</p>
            </div>
          ) : blogPosts.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-deep-900 mb-4">No posts yet</h2>
              <p className="text-slate-600 mb-4">Check back soon for industry insights and painting tips from our experts.</p>
              {!supabaseConfigured && (
                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg max-w-2xl mx-auto text-left">
                  <p className="text-sm text-yellow-800 font-semibold mb-2">⚠️ Configuration Issue Detected</p>
                  <p className="text-sm text-yellow-700">
                    Supabase environment variables are not configured. Check the browser console for details, or contact your site administrator.
                  </p>
                </div>
              )}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recentPosts.map((post) => (
                  <article key={post.id} className="card overflow-hidden group">
                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-slate-500 mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <time dateTime={post.published_at}>{formatDate(post.published_at)}</time>
                        </div>
                        <span className="px-2 py-1 bg-deep-100 text-deep-700 rounded text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-deep-900 mb-3 group-hover:text-deep-700 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-slate-600 mb-4 leading-body">
                        {post.excerpt}
                      </p>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center text-deep-700 hover:text-deep-800 font-medium transition-colors group"
                      >
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {pastPosts.length > 0 && (
                <div className="mt-12 max-w-3xl mx-auto">
                  <button
                    onClick={() => setShowPastArticles(!showPastArticles)}
                    className="w-full flex items-center justify-between p-4 bg-deep-50 hover:bg-deep-100 rounded-lg transition-colors"
                    aria-expanded={showPastArticles}
                  >
                    <span className="text-lg font-semibold text-deep-900">
                      Past Articles ({pastPosts.length})
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-deep-700 transition-transform ${
                        showPastArticles ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {showPastArticles && (
                    <div className="mt-4 bg-white rounded-lg border border-slate-200 divide-y divide-slate-200">
                      {pastPosts.map((post) => (
                        <Link
                          key={post.id}
                          to={`/blog/${post.slug}`}
                          className="block p-4 hover:bg-slate-50 transition-colors group"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-deep-900 group-hover:text-deep-700 transition-colors mb-1">
                                {post.title}
                              </h3>
                              <div className="flex items-center space-x-4 text-sm text-slate-500">
                                <div className="flex items-center space-x-1">
                                  <Calendar className="w-3 h-3" />
                                  <time dateTime={post.published_at}>{formatDate(post.published_at)}</time>
                                </div>
                                <span className="px-2 py-0.5 bg-deep-100 text-deep-700 rounded text-xs font-medium">
                                  {post.category}
                                </span>
                              </div>
                            </div>
                            <ArrowRight className="w-5 h-5 text-deep-600 group-hover:translate-x-1 transition-transform flex-shrink-0 mt-1" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Pattern C: Split Section */}
      <SplitSection
        title="Expert Advice from Austin Painting Professionals"
        description="Our blog combines 15+ years of hands-on painting experience in Austin with insights about local climate, architectural styles, and homeowner preferences. Get the inside knowledge that helps your project succeed."
        benefits={[
          { text: 'Local expertise specific to Austin homes and climate' },
          { text: 'Professional tips from experienced painting contractors' },
          { text: 'Color and design advice for Austin aesthetics' },
          { text: 'Project planning guidance for Austin homeowners' },
          { text: 'Seasonal considerations for Texas weather' },
          { text: 'Cost-effective solutions and maintenance tips' }
        ]}
        image="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
        imageAlt="Austin painting blog - Hill Country Painting expert tips and advice"
        imageLeft={true}
      />

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Start Your Painting Project?"
        subtitle="Get professional advice and a free estimate for your Austin home"
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

export default Blog;