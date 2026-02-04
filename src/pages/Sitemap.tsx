import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Wrench, MapPin, BookOpen, HelpCircle, Phone } from 'lucide-react';
import SEO from '../components/SEO';
import { geoAreas } from '../data/geoAreas';

const Sitemap = () => {
  const services = [
    { name: 'Interior Painting', href: '/services/interior-painting' },
    { name: 'Exterior Painting', href: '/services/exterior-painting' },
    { name: 'Cabinet Painting', href: '/services/cabinet-refinishing' },
    { name: 'Commercial Painting', href: '/services/commercial' },
  ];

  const mainServiceAreas = [
    { name: 'Austin', href: '/service-areas/austin' },
    { name: 'Round Rock & Georgetown', href: '/service-areas/round-rock-georgetown' },
    { name: 'Pflugerville & Wells Branch', href: '/service-areas/pflugerville-wells-branch' },
    { name: 'Cedar Park', href: '/service-areas/cedar-park' },
    { name: 'Taylor & Hutto', href: '/service-areas/taylor-hutto' },
    { name: 'Leander', href: '/service-areas/leander' },
    { name: 'West Lake Hills', href: '/service-areas/west-lake-hills' },
  ];

  const guides = [
    { name: 'Painting Costs Guide', href: '/guides/painting-costs-round-rock' },
    { name: 'Best Paint for Texas Heat', href: '/guides/best-paint-texas-heat' },
    { name: 'HOA Color Tips', href: '/guides/hoa-color-tips-round-rock' },
    { name: 'How Often to Paint', href: '/guides/how-often-paint-central-texas' },
  ];

  const companyPages = [
    { name: 'About Us', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
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
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Sitemap', url: '/sitemap' }
        ]}
      />

      <div className="min-h-screen bg-white">
        <section className="section-padding bg-gradient-to-br from-brand-gray-50 to-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-brand-gray-900 mb-4">Site Map</h1>
            <p className="text-lg text-slate-600">
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

            <div className="mt-12 pt-8 border-t border-slate-200">
              <div className="flex items-center gap-2 mb-6">
                <MapPin className="w-6 h-6 text-brand-azure" />
                <h2 className="text-3xl font-bold text-brand-gray-900">Austin Neighborhoods</h2>
              </div>
              <p className="text-slate-600 mb-6">
                We serve neighborhoods throughout Greater Austin. Browse by area below:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {geoAreas.map((hub) => (
                  <div key={hub.slug} className="bg-slate-50 p-6 rounded-lg">
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
                            className="text-slate-700 hover:text-brand-azure transition-colors text-sm"
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
              <p className="text-slate-700 mb-4">
                Can't find what you're looking for? Contact us directly and we'll be happy to help.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-brand-azure hover:bg-brand-azureDark text-white font-semibold rounded-lg transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Sitemap;
