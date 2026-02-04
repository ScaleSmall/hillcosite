import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search as SearchIcon, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { supabase } from '../lib/supabase';

interface SearchResult {
  type: 'service' | 'blog' | 'guide';
  title: string;
  description: string;
  url: string;
  category?: string;
}

const staticContent = [
  {
    type: 'service' as const,
    title: 'Interior Painting',
    description: 'Professional interior painting services for homes and businesses in Austin. Expert color consultation, clean preparation, and precise application.',
    url: '/services/interior-painting',
    category: 'Services'
  },
  {
    type: 'service' as const,
    title: 'Exterior Painting',
    description: 'Durable exterior painting services using premium paints designed for Texas heat. Thorough surface preparation and weather-resistant finishes.',
    url: '/services/exterior-painting',
    category: 'Services'
  },
  {
    type: 'service' as const,
    title: 'Cabinet Painting',
    description: 'Transform your kitchen with professional cabinet painting. Custom colors, durable finishes, and expert craftsmanship.',
    url: '/services/cabinet-refinishing',
    category: 'Services'
  },
  {
    type: 'service' as const,
    title: 'Commercial Painting',
    description: 'Professional commercial painting services for businesses in Austin. Minimal disruption, quality results, and competitive pricing.',
    url: '/services/commercial',
    category: 'Services'
  },
  {
    type: 'guide' as const,
    title: 'Painting Costs Round Rock',
    description: 'Complete guide to house painting costs in Round Rock, TX. Learn about pricing factors, cost-saving tips, and what to expect.',
    url: '/guides/painting-costs-round-rock',
    category: 'Guides'
  },
  {
    type: 'guide' as const,
    title: 'Best Paint for Texas Heat',
    description: 'Expert guide to choosing the best exterior paint for Texas heat and climate. Recommended products and application tips.',
    url: '/guides/best-paint-texas-heat',
    category: 'Guides'
  },
  {
    type: 'guide' as const,
    title: 'HOA Color Tips Round Rock',
    description: 'Navigate HOA color requirements in Round Rock with expert tips. Approval processes, popular colors, and compliance guidance.',
    url: '/guides/hoa-color-tips-round-rock',
    category: 'Guides'
  },
  {
    type: 'guide' as const,
    title: 'How Often to Paint in Central Texas',
    description: 'Learn how often to repaint your home in Central Texas climate. Maintenance schedules for interior and exterior painting.',
    url: '/guides/how-often-paint-central-texas',
    category: 'Guides'
  }
];

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const performSearch = async () => {
      if (!query || query.trim().length < 2) {
        setResults([]);
        return;
      }

      setLoading(true);

      const searchTerm = query.toLowerCase().trim();
      const matchedStatic = staticContent.filter(item =>
        item.title.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm)
      );

      try {
        const { data: blogPosts } = await supabase
          .from('blog_posts')
          .select('title, excerpt, slug, category')
          .eq('published', true)
          .or(`title.ilike.%${searchTerm}%,excerpt.ilike.%${searchTerm}%,content.ilike.%${searchTerm}%`)
          .limit(10);

        const blogResults: SearchResult[] = (blogPosts || []).map(post => ({
          type: 'blog' as const,
          title: post.title,
          description: post.excerpt,
          url: `/blog/${post.slug}`,
          category: post.category
        }));

        setResults([...matchedStatic, ...blogResults]);
      } catch (error) {
        console.error('Search error:', error);
        setResults(matchedStatic);
      } finally {
        setLoading(false);
      }
    };

    performSearch();
  }, [query]);

  return (
    <>
      <SEO
        title={query ? `Search Results for "${query}" — Hill Country Painting` : 'Search — Hill Country Painting'}
        description={query ? `Search results for "${query}" on Hill Country Painting. Find services, guides, and resources.` : 'Search Hill Country Painting services, guides, and resources.'}
        canonical="/search"
        robots="noindex, follow"
      />

      <section className="section-padding bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-gray-900 mb-4">
              Search Results
            </h1>
            {query && (
              <p className="text-xl text-slate-600">
                Results for: <span className="font-semibold text-brand-gray-900">"{query}"</span>
              </p>
            )}
          </div>

          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-brand-azureDark"></div>
              <p className="mt-4 text-slate-600">Searching...</p>
            </div>
          )}

          {!loading && !query && (
            <div className="text-center py-12">
              <SearchIcon className="w-16 h-16 mx-auto text-slate-400 mb-4" />
              <p className="text-lg text-slate-600">
                Enter a search term to find services, guides, and blog posts.
              </p>
            </div>
          )}

          {!loading && query && results.length === 0 && (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm p-8">
              <SearchIcon className="w-16 h-16 mx-auto text-slate-400 mb-4" />
              <h2 className="text-2xl font-bold text-brand-gray-900 mb-2">No Results Found</h2>
              <p className="text-lg text-slate-600 mb-8">
                We couldn't find any results for "{query}". Try a different search term or browse our services below.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/services" className="btn-primary">
                  View Services
                </Link>
                <Link to="/blog" className="btn-secondary">
                  Read Blog
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Contact Us
                </Link>
              </div>
            </div>
          )}

          {!loading && results.length > 0 && (
            <div className="space-y-4">
              <p className="text-slate-600 mb-6">
                Found {results.length} {results.length === 1 ? 'result' : 'results'}
              </p>

              {results.map((result, index) => (
                <Link
                  key={index}
                  to={result.url}
                  className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      {result.category && (
                        <span className="inline-block px-3 py-1 bg-brand-gray-100 text-brand-azureDark rounded-full text-xs font-medium mb-2">
                          {result.category}
                        </span>
                      )}
                      <h3 className="text-xl font-bold text-brand-gray-900 mb-2 group-hover:text-brand-azureDark transition-colors">
                        {result.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {result.description}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-brand-azureDark ml-4 mt-1 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Search;
