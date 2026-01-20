import React, { useState, useEffect } from 'react';
import { Phone, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ImageWithGeo from '../components/ImageWithGeo';
import ServicesGrid from '../components/sections/ServicesGrid';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import StatsAndTrust from '../components/sections/StatsAndTrust';
import CTABanner from '../components/sections/CTABanner';
import { supabase } from '../lib/supabaseClient';

interface GalleryPhoto {
  id: string;
  image_url: string;
  title: string;
  description: string;
  alt_text: string;
  display_order: number;
  created_at: string;
}

const Gallery = () => {
  const [photos, setPhotos] = useState<GalleryPhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [showOlderPhotos, setShowOlderPhotos] = useState(false);

  useEffect(() => {
    fetchGalleryPhotos();
  }, []);

  const fetchGalleryPhotos = async () => {
    try {
      const { data, error } = await supabase
        .from('gallery_photos')
        .select('*')
        .eq('is_visible', true)
        .order('display_order', { ascending: false });

      if (error) {
        console.error('Error fetching gallery photos:', error);
      } else {
        setPhotos(data || []);
      }
    } catch (err) {
      console.error('Unexpected error fetching gallery photos:', err);
    } finally {
      setLoading(false);
    }
  };

  const recentPhotos = photos.slice(0, 12);
  const olderPhotos = photos.slice(12);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Gallery' }
  ];

  const featuredProjects = [
    {
      image: '/IMG_3676_result_result.jpg',
      title: 'Kitchen Transformation',
      location: 'West Lake Hills'
    },
    {
      image: '/IMG_0146_result_result.jpg',
      title: 'Exterior Refresh',
      location: 'Tarrytown'
    },
    {
      image: '/IMG_5925_result_result.jpg',
      title: 'Living Room Update',
      location: 'Central Austin'
    },
    {
      image: 'https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Professional Office',
      location: 'Downtown'
    }
  ];

  const portfolioProjects = [
    {
      title: 'Custom Kitchen Painting',
      description: 'Complete cabinet painting with custom color matching for a fresh modern look.',
      image: '/IMG_4861_result_result.jpg',
      link: '/contact'
    },
    {
      title: 'Classic Home Exterior',
      description: 'Professional exterior painting with weather-resistant finishes and detailed trim work for lasting protection.',
      image: '/IMG_6770_result_result.jpg',
      link: '/contact'
    },
    {
      title: 'Modern Interior Design',
      description: 'Complete interior painting with custom accent walls and professional color consultation throughout.',
      image: '/IMG_7896_result_result.jpg',
      link: '/contact'
    },
    {
      title: 'Corporate Office Painting',
      description: 'Professional office painting with flexible scheduling and minimal business disruption during completion.',
      image: 'https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/contact'
    },
    {
      title: 'Bright Kids Room Transformation',
      description: 'Vibrant turquoise kids bedroom with playful accent walls and durable finishes perfect for active children.',
      image: '/IMG_9824_result_result.jpg',
      link: '/contact'
    },
    {
      title: 'Traditional Home Exterior',
      description: 'Complete exterior painting with premium weather-resistant finishes designed for Texas climate conditions.',
      image: '/IMG_9524_result_result.jpg',
      link: '/contact'
    },
    {
      title: 'Modern Condo Interior',
      description: 'Stylish interior update with contemporary color palette and precision cutting for clean lines.',
      image: 'https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/contact'
    }
  ];

  const clientTestimonials = [
    {
      name: 'Steven Smallfield',
      location: 'Austin',
      rating: 5,
      text: 'The guys know their way around some paint. We picked chantilly lace which is the worst for coverage. Most companies wont even entertain the thought of that paint color. The house was dark and depressing now its bright and we love it. They managed to get great coverage after a solid coat of primer.',
      initials: 'SS'
    },
    {
      name: 'paul budreau',
      location: 'Austin',
      rating: 5,
      text: 'Hill Country Painting made my whole house beautiful, first I had them paint the outside house, they did such a excellent job at a good price that I had them also paint inside the house, which wasn\'t planed but I wanted to take advantage of their quality work, they are artist, I love the results.',
      initials: 'PB'
    },
    {
      name: 'Janet Martin',
      location: 'Austin',
      rating: 5,
      text: 'We selected Hill Country Painting after a bid process and we are so happy with our choice! Melissa consulted with us on our colors and was instrumental in helping us choose the perfect color palate for our new home. Justin, our project manager, and his great team of painters completed our job in 2 days instead of the anticipated 3 days. Excellence from beginning to the end!',
      initials: 'JM'
    }
  ];

  // Generate ImageGallery schema markup
  const imageGallerySchema = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'Hill Country Painting Gallery',
    description: 'Gallery of professional painting projects by Hill Country Painting in Austin, TX',
    url: 'https://hillcopaint.com/gallery',
    image: photos.length > 0 ? photos.map(photo => ({
      '@type': 'ImageObject',
      contentUrl: photo.image_url,
      name: photo.title,
      description: photo.description || photo.alt_text,
      datePublished: photo.created_at
    })) : []
  };

  return (
    <>
      <SEO
        title="Gallery — Hill Country Painting"
        description="See Hill Country Painting's gallery of Austin interior, exterior, and cabinet painting projects. Quality workmanship, professional results. Free estimates."
        canonical="/gallery"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Gallery', url: '/gallery' }
        ]}
      />

      {/* ImageGallery Schema */}
      <script type="application/ld+json">
        {JSON.stringify(imageGallerySchema)}
      </script>

      {/* Unique Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-deep-900 leading-heading">
                  Our Work Gallery
                </h1>
                <p className="text-xl text-slate-600 leading-body">
                  Explore our recent painting projects across Austin. From interior transformations to exterior makeovers and cabinet painting, see the quality that comes with clean prep, crisp lines, and professional execution.
                </p>
                <div className="text-deep-700 font-medium">
                  Clean prep. Crisp lines. Reliable schedules.
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary">
                  Start Your Project
                </Link>
                <a href="tel:(512)240-2246" className="btn-outline">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (512) 240-2246
                </a>
              </div>
            </div>

            {/* Right Featured Projects Grid */}
            <div className="grid grid-cols-2 gap-4">
              {featuredProjects.map((project, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <ImageWithGeo
                    src={project.image}
                    alt={project.title}
                    width="300"
                    height="200"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 50vw, 300px"
                    location={{
                      name: `${project.location}, Austin, TX`,
                      latitude: project.location === 'West Lake Hills' ? 30.2711 : 30.2672,
                      longitude: project.location === 'West Lake Hills' ? -97.8081 : -97.7431,
                      region: 'Texas'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-semibold text-sm mb-1">{project.title}</h3>
                    <p className="text-xs text-white/90">{project.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest Projects from Zapier */}
      {photos.length > 0 && (
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-deep-900 mb-4">
                Latest Projects
              </h2>
              <p className="text-xl text-slate-600">
                Fresh from our recent work across Austin
              </p>
            </div>

            {/* Recent Photos Grid (First 12) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {recentPhotos.map((photo) => (
                <div key={photo.id} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <img
                    src={photo.image_url}
                    alt={photo.alt_text}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-semibold text-base mb-1">{photo.title}</h3>
                    {photo.description && (
                      <p className="text-sm text-white/90 line-clamp-2">{photo.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Dropdown for Older Photos (After 12) */}
            {olderPhotos.length > 0 && (
              <div className="border-t border-slate-200 pt-8">
                <button
                  onClick={() => setShowOlderPhotos(!showOlderPhotos)}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-deep-700 font-semibold rounded-lg transition-colors duration-200"
                  aria-expanded={showOlderPhotos}
                >
                  {showOlderPhotos ? 'Hide' : 'Show'} Older Projects ({olderPhotos.length})
                  {showOlderPhotos ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>

                {showOlderPhotos && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {olderPhotos.map((photo) => (
                      <div key={photo.id} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                        <img
                          src={photo.image_url}
                          alt={photo.alt_text}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <h3 className="font-semibold text-base mb-1">{photo.title}</h3>
                          {photo.description && (
                            <p className="text-sm text-white/90 line-clamp-2">{photo.description}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Featured Project */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-900 mb-4">
              Portfolio Highlights
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore our portfolio of painting projects across Austin. From interior transformations to exterior makeovers and cabinet painting.
            </p>
          </div>

          {/* Featured Project */}
          <div className="mb-16">
            <div className="card overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="aspect-w-16 aspect-h-10 lg:aspect-none">
                  <ImageWithGeo
                    src="/IMG_4861_result_result.jpg"
                    alt="Kitchen cabinet painting West Lake Hills - Hill Country Painting Austin featured project"
                    width="600"
                    height="400"
                    className="w-full h-full object-cover"
                    location={{
                      name: 'West Lake Hills, Austin, TX',
                      latitude: 30.2711,
                      longitude: -97.8081,
                      region: 'Texas'
                    }}
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-deep-900 mb-4">
                    Featured: Custom Kitchen Painting
                  </h3>
                  <p className="text-slate-600 mb-6 leading-body">
                    Complete cabinet painting with custom color matching. This project saved the homeowners significantly compared to full replacement while achieving a completely fresh, modern look that transforms the entire kitchen space.
                  </p>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <span className="px-3 py-1 bg-deep-100 text-deep-700 rounded-full text-sm font-medium">
                      Cabinet Painting
                    </span>
                    <span className="px-3 py-1 bg-deep-100 text-deep-700 rounded-full text-sm font-medium">
                      West Lake Hills
                    </span>
                    <span className="px-3 py-1 bg-deep-100 text-deep-700 rounded-full text-sm font-medium">
                      Custom Finish
                    </span>
                  </div>
                  <a href="/contact" className="btn-primary inline-flex items-center">
                    Start Your Project
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioProjects.slice(1, 7).map((project, index) => (
              <div key={index} className="card overflow-hidden group">
                <div className="aspect-w-16 aspect-h-10 overflow-hidden">
                  <ImageWithGeo
                    src={project.image}
                    alt={project.title}
                    width="400"
                    height="250"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    location={{
                      name: 'Round Rock, TX',
                      latitude: 30.5083,
                      longitude: -97.6789,
                      region: 'Texas'
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-deep-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-body">
                    {project.description}
                  </p>
                  <Link to="/contact" className="text-deep-700 hover:text-deep-800 font-medium transition-colors">
                    Get Similar Results →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <TestimonialsSection
        title="What Our Clients Say"
        subtitle="Real feedback from satisfied Austin homeowners"
        testimonials={clientTestimonials}
      />

      {/* Pattern A: Stats */}
      <StatsAndTrust
        stats={[
          {
            icon: <div className="w-8 h-8 bg-deep-600 rounded-full flex items-center justify-center text-white font-bold">9</div>,
            value: "100+",
            label: "Projects Complete"
          },
          {
            icon: <div className="w-8 h-8 bg-deep-600 rounded-full flex items-center justify-center text-white font-bold">★</div>,
            value: "5-Star",
            label: "Reviews"
          },
          {
            icon: <div className="w-8 h-8 bg-deep-600 rounded-full flex items-center justify-center text-white font-bold">2</div>,
            value: "2-Year",
            label: "Warranty"
          },
          {
            icon: <div className="w-8 h-8 bg-deep-600 rounded-full flex items-center justify-center text-white font-bold">✓</div>,
            value: "Insured",
            label: "Professional"
          }
        ]}
      />

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Add Your Project to Our Gallery?"
        subtitle="Get a free estimate and see why Austin trusts Hill Country Painting"
        primaryCTA={{
          text: 'Get Free Estimate',
          href: '/contact'
        }}
        secondaryCTA={{
          text: 'View Services',
          href: '/services'
        }}
      />
    </>
  );
};

export default Gallery;
