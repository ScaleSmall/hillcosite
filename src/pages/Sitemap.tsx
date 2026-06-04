import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Wrench, MapPin, BookOpen, HelpCircle, Phone } from 'lucide-react';
import SEO from '../components/SEO';
import { locations } from '../config/locations';
import { serviceLocationPages } from '../config/routes';
import { geoAreas } from '../data/geoAreas';
import { generatedBlogPosts } from '../generated/blogPosts';

const serviceLocationGroups = [
  {
    heading: 'Interior Painting by Area',
    prefix: '/interior-painting-',
    label: 'Interior Painting'
  },
  {
    heading: 'Exterior Painting by Area',
    prefix: '/exterior-painting-',
    label: 'Exterior Painting'
  },
  {
    heading: 'Cabinet Painting by Area',
    prefix: '/cabinet-refinishing-',
    label: 'Cabinet Painting'
  },
  {
    heading: 'Commercial Painting by Area',
    prefix: '/commercial-painting-',
    label: 'Commercial Painting'
  }
].map((group) => {
  const locationNameBySlug = new Map(
    Object.values(locations).map((location) => [location.slug, location.name])
  );

  return {
    ...group,
    links: serviceLocationPages
      .filter((route) => route.path.startsWith(group.prefix))
      .map((route) => {
        const slug = route.path.slice(group.prefix.length);
        const locationName = locationNameBySlug.get(slug) || slug
          .split('-')
          .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
          .join(' ');

        return {
          name: `${group.label} ${locationName}`,
          href: route.path
        };
      })
  };
});

const Sitemap = () => {
  const services = [
    { name: 'Interior Painting', href: '/services/interior-painting' },
    { name: 'Exterior Painting', href: '/services/exterior-painting' },
    { name: 'Cabinet Painting', href: '/services/cabinet-refinishing' },
    { name: 'Commercial Painting', href: '/services/commercial' },
  ];

  const mainServiceAreas = [
    { name: 'Austin', href: '/service-areas/austin' },
    { name: 'Tarrytown', href: '/service-areas/tarrytown' },
    { name: 'West Lake Hills', href: '/service-areas/west-lake-hills' },
    { name: 'Northwest Hills', href: '/service-areas/northwest-hills' },
    { name: 'Westlake Highlands', href: '/service-areas/west-lake-highlands' },
    { name: 'Lakeway', href: '/service-areas/lakeway' },
    { name: 'Leander', href: '/service-areas/leander' },
    { name: 'Georgetown', href: '/service-areas/georgetown' },
    { name: 'Round Rock', href: '/service-areas/round-rock' },
    { name: 'Cedar Park', href: '/service-areas/cedar-park' },
    { name: 'North Austin', href: '/service-areas/north-austin' },
  ];

  const guides = [
    { name: 'Painting Costs Guide', href: '/guides/painting-costs-austin' },
    { name: 'Best Paint for Texas Heat', href: '/guides/best-paint-texas-heat' },
    { name: 'HOA Color Tips', href: '/guides/hoa-color-tips-austin' },
    { name: 'How Often to Paint', href: '/guides/how-often-paint-central-texas' },
  ];
  const blogPostPath = (slug: string) => `/blog/${slug
    .trim()
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')}`;
  const blogPosts = generatedBlogPosts.map((post) => ({
    name: post.title,
    href: blogPostPath(post.slug)
  }));

  const companyPages = [
    { name: 'About Us', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
    { name: 'Free Estimate', href: '/free-estimate' },
    { name: 'Color Consultation', href: '/color-consultation' },
    { name: 'Financing', href: '/financing' },
    { name: 'Blog', href: '/blog' },
  ];

  const legalPages = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'EULA', href: '/eula' },
  ];

  return (
    <>
      <SEO
        title="Site Map — Hill Country Painting"
        description="Complete site map of Hill Country Painting. Find all our services, service areas, guides, and resources in one place."
        canonical="/sitemap"
        robots="noindex, follow"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Sitemap', url: '/sitemap' }
        ]}
      />

      <div className="min-h-screen bg-white">
        <section className="section-padding bg-brand-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-brand-gray-900 mb-4">Site Map</h1>
            <p className="text-lg text-brand-gray-600">
              Navigate our complete site structure. Find all our services, service areas, guides, and resources.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Home className="w-5 h-5 text-brand-azure" />
                  <h2 className="text-2xl font-bold text-brand-gray-900">Company</h2>
                </div>
                <ul className="space-y-2">
                  <li>
                    <Link to="/" className="text-brand-azure hover:text-brand-azureDark transition-colors">
                      Home
                    </Link>
                  </li>
                  {companyPages.map((page) => (
                    <li key={page.href}>
                      <Link to={page.href} className="text-brand-azure hover:text-brand-azureDark transition-colors">
                        {page.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Wrench className="w-5 h-5 text-brand-azure" />
                  <h2 className="text-2xl font-bold text-brand-gray-900">Services</h2>
                </div>
                <ul className="space-y-2">
                  <li>
                    <Link to="/services" className="text-brand-azure hover:text-brand-azureDark transition-colors">
                      All Services
                    </Link>
                  </li>
                  {services.map((service) => (
                    <li key={service.href}>
                      <Link to={service.href} className="text-brand-azure hover:text-brand-azureDark transition-colors">
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-5 h-5 text-brand-azure" />
                  <h2 className="text-2xl font-bold text-brand-gray-900">Guides & Resources</h2>
                </div>
                <ul className="space-y-2">
                  {guides.map((guide) => (
                    <li key={guide.href}>
                      <Link to={guide.href} className="text-brand-azure hover:text-brand-azureDark transition-colors">
                        {guide.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link to="/blog" className="text-brand-azure hover:text-brand-azureDark transition-colors">
                      All Blog Articles
                    </Link>
                  </li>
                  {blogPosts.map((post) => (
                    <li key={post.href}>
                      <Link to={post.href} className="text-brand-azure hover:text-brand-azureDark transition-colors">
                        {post.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-brand-azure" />
                  <h2 className="text-2xl font-bold text-brand-gray-900">Main Service Areas</h2>
                </div>
                <ul className="space-y-2">
                  <li>
                    <Link to="/service-areas" className="text-brand-azure hover:text-brand-azureDark transition-colors">
                      All Service Areas
                    </Link>
                  </li>
                  {mainServiceAreas.map((area) => (
                    <li key={area.href}>
                      <Link to={area.href} className="text-brand-azure hover:text-brand-azureDark transition-colors">
                        {area.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {serviceLocationGroups.map((group) => (
                <div key={group.heading}>
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-5 h-5 text-brand-azure" />
                    <h2 className="text-2xl font-bold text-brand-gray-900">{group.heading}</h2>
                  </div>
                  <ul className="space-y-2">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link to={link.href} className="text-brand-azure hover:text-brand-azureDark transition-colors">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <HelpCircle className="w-5 h-5 text-brand-azure" />
                  <h2 className="text-2xl font-bold text-brand-gray-900">Legal & Policies</h2>
                </div>
                <ul className="space-y-2">
                  {legalPages.map((page) => (
                    <li key={page.href}>
                      <Link to={page.href} className="text-brand-azure hover:text-brand-azureDark transition-colors">
                        {page.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-brand-gray-200">
              <div className="flex items-center gap-2 mb-6">
                <MapPin className="w-6 h-6 text-brand-azure" />
                <h2 className="text-3xl font-bold text-brand-gray-900">Austin Neighborhoods</h2>
              </div>
              <p className="text-brand-gray-600 mb-6">
                We serve neighborhoods throughout Greater Austin. Browse by area below:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {geoAreas.map((hub) => (
                  <div key={hub.slug} className="bg-brand-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-brand-gray-900 mb-3">
                      <Link to={`/areas/${hub.slug}`} className="text-brand-azure hover:text-brand-azureDark transition-colors">
                        {hub.name}
                      </Link>
                    </h3>
                    <ul className="space-y-2">
                      {hub.neighborhoods.map((neighborhood) => (
                        <li key={neighborhood.slug}>
                          <Link
                            to={`/areas/${hub.slug}/${neighborhood.slug}`}
                            className="text-brand-gray-700 hover:text-brand-azure transition-colors text-sm"
                          >
                            {neighborhood.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 p-6 bg-brand-gray-50 rounded-lg border-l-4 border-brand-azure">
              <div className="flex items-center gap-2 mb-3">
                <Phone className="w-6 h-6 text-brand-azure" />
                <h3 className="text-2xl font-bold text-brand-gray-900">Need Help Finding Something?</h3>
              </div>
              <p className="text-brand-gray-700 mb-4">
                Can't find what you're looking for? Contact us directly and we'll be happy to help.
              </p>
              <Link
                to="/free-estimate"
                className="inline-flex items-center px-6 py-3 bg-brand-azure hover:bg-brand-azureDark text-white font-semibold rounded-lg transition-colors"
              >
                Request a Free Estimate
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Sitemap;
