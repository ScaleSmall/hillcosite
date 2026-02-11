import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ImageWithGeo from '../components/ImageWithGeo';
import ServicesGrid from '../components/sections/ServicesGrid';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import StatsAndTrust from '../components/sections/StatsAndTrust';
import CTABanner from '../components/sections/CTABanner';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import ImageLightbox, { LightboxImage } from '../components/ImageLightbox';
import { supabase } from '../lib/supabaseClient';

interface GalleryPhoto {
  id: string;
  image_url: string;
  title: string;
  description: string;
  alt_text: string;
  display_order: number;
  created_at: string;
  is_before_after: boolean;
  category: string | null;
  featured: boolean;
}

const Gallery = () => {
  const [featuredPhotos, setFeaturedPhotos] = useState<GalleryPhoto[]>([]);
  const [beforeAfterPhotos, setBeforeAfterPhotos] = useState<GalleryPhoto[]>([]);
  const [regularPhotos, setRegularPhotos] = useState<GalleryPhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [showMoreBeforeAfter, setShowMoreBeforeAfter] = useState(false);
  const [showOlderPhotos, setShowOlderPhotos] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<LightboxImage[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

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
        const allPhotos = data || [];

        setFeaturedPhotos(allPhotos.filter(p => p.featured && !p.is_before_after));
        setBeforeAfterPhotos(allPhotos.filter(p => p.is_before_after));
        setRegularPhotos(allPhotos.filter(p => !p.is_before_after && !p.featured));
      }
    } catch (err) {
      console.error('Unexpected error fetching gallery photos:', err);
    } finally {
      setLoading(false);
    }
  };

  const recentBeforeAfter = beforeAfterPhotos.slice(0, 6);
  const olderBeforeAfter = beforeAfterPhotos.slice(6);
  const recentRegularPhotos = regularPhotos.slice(0, 12);
  const olderRegularPhotos = regularPhotos.slice(12);

  const openLightbox = (images: LightboxImage[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Gallery' }
  ];

  const featuredProjects = [
    {
      image: '/exterior-tarrytown.jpg',
      title: 'Exterior Refresh',
      location: 'Tarrytown'
    },
    {
      image: '/living-room-update-central-austin.jpg',
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
      image: '/custom-kitchen-painting.jpg',
      link: '/contact'
    },
    {
      title: 'Classic Home Exterior',
      description: 'Professional exterior painting with weather-resistant finishes and detailed trim work for lasting protection.',
      image: '/classic-home-exterior.jpg',
      link: '/contact'
    },
    {
      title: 'Modern Interior Design',
      description: 'Complete interior painting with custom accent walls and professional color consultation throughout.',
      image: '/modern-interior-design.jpg',
      link: '/contact'
    },
    {
      title: 'Corporate Office Painting',
      description: 'Professional office painting with flexible scheduling and minimal business disruption during completion.',
      image: 'https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/contact'
    },
    {
      title: 'Dramatic Before & After Transformation',
      description: 'Complete interior transformation showcasing the dramatic difference professional painting makes in refreshing your space.',
      image: '/before_and_after-1-sep_16_2025_10_14am-u7me.jpg',
      link: '/contact'
    },
    {
      title: 'Traditional Home Exterior',
      description: 'Complete exterior painting with premium weather-resistant finishes designed for Texas climate conditions.',
      image: '/traditional-home-exterior.jpg',
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
  const allPhotos = [...featuredPhotos, ...beforeAfterPhotos, ...regularPhotos];
  const imageGallerySchema = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'Hill Country Painting Gallery',
    description: 'Gallery of professional painting projects by Hill Country Painting in Austin, TX including before and after transformations',
    url: 'https://www.hillcopaint.com/gallery',
    image: allPhotos.length > 0 ? allPhotos.map(photo => ({
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
        description="View Hill Country Painting's gallery of before & after transformations and Austin interior, exterior, and cabinet painting projects. Interactive comparisons show our quality workmanship and professional results."
        canonical="/gallery"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Gallery', url: '/gallery' }
        ]}
      />

      {/* ImageGallery Schema */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(imageGallerySchema)}
        </script>
      </Helmet>

      {/* Unique Hero Section */}
      <section className="section-padding bg-gradient-to-br from-brand-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-4 space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-brand-gray-900 leading-heading">
                Our Work Gallery
              </h1>
              <p className="text-xl text-brand-gray-600 leading-body">
                Explore our recent painting projects across Austin. From interior transformations to exterior makeovers and cabinet painting, see the quality that comes with clean prep, crisp lines, and professional execution.
              </p>
              <div className="text-brand-azureDark font-medium">
                Clean prep. Crisp lines. Reliable schedules.
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
            <div className="lg:col-span-8 grid grid-cols-2 lg:grid-cols-3 gap-4">
              {loading ? (
                Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="bg-brand-gray-200 animate-pulse rounded-xl h-56 lg:h-64"></div>
                ))
              ) : featuredPhotos.length > 0 ? (
                featuredPhotos.slice(0, 6).map((photo, index) => (
                  <div
                    key={photo.id}
                    onClick={() => {
                      const images: LightboxImage[] = featuredPhotos.map(p => ({
                        src: p.image_url,
                        alt: p.alt_text,
                        title: p.title,
                        description: p.description
                      }));
                      openLightbox(images, index);
                    }}
                    className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                  >
                    <img
                      src={photo.image_url}
                      alt={photo.alt_text}
                      className="w-full h-56 lg:h-64 object-cover transition-transform duration-300 group-hover:opacity-95"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-semibold text-sm mb-1">{photo.title}</h3>
                      {photo.category && (
                        <p className="text-xs text-white capitalize">{photo.category}</p>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                featuredProjects.map((project, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <ImageWithGeo
                      src={project.image}
                      alt={project.title}
                      width="400"
                      height="300"
                      className="w-full h-56 lg:h-64 object-cover transition-transform duration-300"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 400px"
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
                      <p className="text-xs text-white">{project.location}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Transformations Section */}
      {beforeAfterPhotos.length > 0 && (
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-4">
                Before & After Transformations
              </h2>
              <p className="text-xl text-brand-gray-600">
                See the dramatic difference professional painting makes
              </p>
            </div>

            {/* Recent Before/After Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {recentBeforeAfter.map((photo, index) => (
                <div
                  key={photo.id}
                  onClick={() => {
                    const images: LightboxImage[] = beforeAfterPhotos.map(p => ({
                      src: p.image_url,
                      alt: p.alt_text,
                      title: p.title,
                      description: p.description,
                      isBeforeAfter: true,
                      beforeImage: p.image_url,
                      afterImage: p.image_url
                    }));
                    openLightbox(images, index);
                  }}
                  className="card overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow duration-300"
                >
                  <BeforeAfterSlider
                    beforeImage={photo.image_url}
                    afterImage={photo.image_url}
                    alt={photo.alt_text}
                    className="aspect-video"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-brand-gray-900 mb-2">
                      {photo.title}
                    </h3>
                    {photo.description && (
                      <p className="text-brand-gray-600 leading-body">
                        {photo.description}
                      </p>
                    )}
                    {photo.category && (
                      <div className="mt-3">
                        <span className="px-3 py-1 bg-brand-gray-100 text-brand-azureDark rounded-full text-sm font-medium capitalize">
                          {photo.category}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Show More Button for Additional Before/After */}
            {olderBeforeAfter.length > 0 && (
              <div className="border-t border-brand-gray-200 pt-8">
                <button
                  onClick={() => setShowMoreBeforeAfter(!showMoreBeforeAfter)}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-brand-gray-100 hover:bg-brand-gray-200 text-brand-azureDark font-semibold rounded-lg transition-colors duration-200"
                  aria-expanded={showMoreBeforeAfter}
                  aria-controls="more-before-after"
                >
                  {showMoreBeforeAfter ? 'Hide' : 'Show'} More Transformations ({olderBeforeAfter.length})
                  {showMoreBeforeAfter ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>

                {showMoreBeforeAfter && (
                  <div id="more-before-after" className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    {olderBeforeAfter.map((photo, index) => (
                      <div
                        key={photo.id}
                        onClick={() => {
                          const images: LightboxImage[] = beforeAfterPhotos.map(p => ({
                            src: p.image_url,
                            alt: p.alt_text,
                            title: p.title,
                            description: p.description,
                            isBeforeAfter: true,
                            beforeImage: p.image_url,
                            afterImage: p.image_url
                          }));
                          openLightbox(images, recentBeforeAfter.length + index);
                        }}
                        className="card overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow duration-300"
                      >
                        <BeforeAfterSlider
                          beforeImage={photo.image_url}
                          afterImage={photo.image_url}
                          alt={photo.alt_text}
                          className="aspect-video"
                        />
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-brand-gray-900 mb-2">
                            {photo.title}
                          </h3>
                          {photo.description && (
                            <p className="text-brand-gray-600 leading-body">
                              {photo.description}
                            </p>
                          )}
                          {photo.category && (
                            <div className="mt-3">
                              <span className="px-3 py-1 bg-brand-gray-100 text-brand-azureDark rounded-full text-sm font-medium capitalize">
                                {photo.category}
                              </span>
                            </div>
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

      {/* Latest Projects from Zapier */}
      {regularPhotos.length > 0 && (
        <section className="section-padding bg-brand-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-4">
                More Recent Projects
              </h2>
              <p className="text-xl text-brand-gray-600">
                Fresh from our recent work across Austin
              </p>
            </div>

            {/* Recent Photos Grid (First 12) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {recentRegularPhotos.map((photo, index) => (
                <div
                  key={photo.id}
                  onClick={() => {
                    const images: LightboxImage[] = regularPhotos.map(p => ({
                      src: p.image_url,
                      alt: p.alt_text,
                      title: p.title,
                      description: p.description
                    }));
                    openLightbox(images, index);
                  }}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                >
                  <img
                    src={photo.image_url}
                    alt={photo.alt_text}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:opacity-95"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-semibold text-base mb-1">{photo.title}</h3>
                    {photo.description && (
                      <p className="text-sm text-white line-clamp-2">{photo.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Dropdown for Older Photos (After 12) */}
            {olderRegularPhotos.length > 0 && (
              <div className="border-t border-brand-gray-200 pt-8">
                <button
                  onClick={() => setShowOlderPhotos(!showOlderPhotos)}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-brand-gray-100 hover:bg-brand-gray-200 text-brand-azureDark font-semibold rounded-lg transition-colors duration-200"
                  aria-expanded={showOlderPhotos}
                  aria-controls="older-photos"
                >
                  {showOlderPhotos ? 'Hide' : 'Show'} Older Projects ({olderRegularPhotos.length})
                  {showOlderPhotos ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>

                {showOlderPhotos && (
                  <div id="older-photos" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {olderRegularPhotos.map((photo, index) => (
                      <div
                        key={photo.id}
                        onClick={() => {
                          const images: LightboxImage[] = regularPhotos.map(p => ({
                            src: p.image_url,
                            alt: p.alt_text,
                            title: p.title,
                            description: p.description
                          }));
                          openLightbox(images, recentRegularPhotos.length + index);
                        }}
                        className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                      >
                        <img
                          src={photo.image_url}
                          alt={photo.alt_text}
                          className="w-full h-64 object-cover transition-transform duration-300 group-hover:opacity-95"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <h3 className="font-semibold text-base mb-1">{photo.title}</h3>
                          {photo.description && (
                            <p className="text-sm text-white line-clamp-2">{photo.description}</p>
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
      <section className="section-padding bg-brand-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-4">
              Portfolio Highlights
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of painting projects across Austin. From interior transformations to exterior makeovers and cabinet painting.
            </p>
          </div>

          {/* Featured Project */}
          <div className="mb-16">
            <div className="card overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="aspect-w-16 aspect-h-10 lg:aspect-none">
                  <ImageWithGeo
                    src="/custom-kitchen-painting.jpg"
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
                  <h3 className="text-2xl font-bold text-brand-gray-900 mb-4">
                    Featured: Custom Kitchen Painting
                  </h3>
                  <p className="text-brand-gray-600 mb-6 leading-body">
                    Complete cabinet painting with custom color matching. This project saved the homeowners significantly compared to full replacement while achieving a completely fresh, modern look that transforms the entire kitchen space.
                  </p>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <span className="px-3 py-1 bg-brand-gray-100 text-brand-azureDark rounded-full text-sm font-medium">
                      Cabinet Painting
                    </span>
                    <span className="px-3 py-1 bg-brand-gray-100 text-brand-azureDark rounded-full text-sm font-medium">
                      West Lake Hills
                    </span>
                    <span className="px-3 py-1 bg-brand-gray-100 text-brand-azureDark rounded-full text-sm font-medium">
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
                    className="w-full h-64 object-cover transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    location={{
                      name: 'Austin, TX',
                      latitude: 30.2672,
                      longitude: -97.7431,
                      region: 'Texas'
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-brand-gray-600 mb-4 leading-body">
                    {project.description}
                  </p>
                  <Link to="/contact" className="text-brand-azureDark hover:text-brand-gray-800 font-medium transition-colors">
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
            icon: <CheckCircle className="w-8 h-8 text-brand-azureDark" />,
            value: "3000+",
            label: "Projects Complete"
          },
          {
            icon: <div className="w-8 h-8 bg-brand-azureDark rounded-full flex items-center justify-center text-white font-bold">★</div>,
            value: "5-Star",
            label: "Reviews"
          },
          {
            icon: <div className="w-8 h-8 bg-brand-azureDark rounded-full flex items-center justify-center text-white font-bold">2</div>,
            value: "2-Year",
            label: "Warranty"
          },
          {
            icon: <div className="w-8 h-8 bg-brand-azureDark rounded-full flex items-center justify-center text-white font-bold">✓</div>,
            value: "Insured",
            label: "Professional"
          }
        ]}
      />

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Add Your Project to Our Gallery?"
        subtitle="Request a consultation and see why Austin trusts Hill Country Painting"
        primaryCTA={{
          text: 'Request a Consultation',
          href: '/contact'
        }}
        secondaryCTA={{
          text: 'View Services',
          href: '/services'
        }}
      />

      {/* Image Lightbox */}
      <ImageLightbox
        images={lightboxImages}
        open={lightboxOpen}
        currentIndex={lightboxIndex}
        onClose={closeLightbox}
      />
    </>
  );
};

export default Gallery;
