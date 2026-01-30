import React from 'react';
import ServiceLocationPage, { ServiceLocationConfig } from '../../components/templates/ServiceLocationPage';
import { locations } from '../../config/locations';

const location = locations['west-lake-hills'];

const config: ServiceLocationConfig = {
  service: {
    type: 'exterior',
    name: 'Exterior Painting',
    slug: 'exterior-painting'
  },
  location: location,
  content: {
    heroSubtitle: 'Luxury exterior painting for West Lake Hills estates. Premium finishes, meticulous preparation, and refined service for Austin\'s finest homes.',
    introText: `West Lake Hills represents Austin's premier residential areas, and exterior painting here demands the highest standards. Our team specializes in luxury homes, understanding that Westlake estates require premium materials, meticulous preparation, and sophisticated color selections. From dramatic Hill Country elevations to lakeside estates, we deliver exceptional results.`,
    benefits: [
      'Luxury estate specialists',
      'Premium paint systems',
      'Complex architecture expertise',
      'Hill Country terrain experience',
      'Privacy-conscious service',
      'Detailed preparation',
      'Custom color matching',
      '2-year premium warranty'
    ],
    processSteps: [
      { title: 'Estate Consultation', description: 'Comprehensive assessment of your West Lake Hills property\'s unique requirements.' },
      { title: 'Premium Color Selection', description: 'Expert guidance on sophisticated colors that enhance your estate\'s presence.' },
      { title: 'Meticulous Preparation', description: 'Thorough prep work addressing every surface and detail of your home.' },
      { title: 'Terrain Management', description: 'Safe, professional work on challenging Hill Country elevations.' },
      { title: 'Expert Application', description: 'Our finest painters using premium products for flawless results.' },
      { title: 'Detailed Inspection', description: 'Comprehensive review ensuring every element exceeds expectations.' }
    ],
    faqs: [
      { question: 'How much does exterior painting cost in West Lake Hills?', answer: 'West Lake Hills exterior painting typically ranges from $8,000-$25,000+ depending on home size and complexity. Large estates with custom features may exceed this range.' },
      { question: 'What premium products do you use?', answer: 'We use the finest exterior paints from Sherwin-Williams Duration, Benjamin Moore Regal Select, and specialty lines. These products provide superior UV protection and longevity.' },
      { question: 'How do you handle steep Hill Country terrain?', answer: 'We\'re experienced with West Lake Hills\' dramatic elevations. Our team uses professional equipment for safe access while protecting your landscaping.' },
      { question: 'What about complex architectural details?', answer: 'West Lake Hills homes often feature sophisticated architecture. Our painters are skilled with stone accents, dramatic rooflines, and custom trim details.' },
      { question: 'Is your service discreet?', answer: 'Completely. We understand West Lake Hills residents value privacy. Professional crews, unmarked vehicles if preferred, and complete respect for your property and privacy.' }
    ],
    testimonials: [
      { name: 'Richard Ashworth', location: 'West Lake Hills', rating: 5, text: 'Exceptional work on our estate. They navigated the challenging terrain professionally and the finish quality is remarkable. Premium service throughout.', initials: 'RA' },
      { name: 'Catherine Chen', location: 'Rob Roy', rating: 5, text: 'They understood our home\'s architectural complexity and delivered flawless results. Professional, discreet, and excellent craftsmanship.', initials: 'CC' },
      { name: 'Thomas Wright', location: 'Rollingwood', rating: 5, text: 'Worth every penny for this level of quality. Our Rollingwood home has never looked better. They\'re the only painters I\'ll use going forward.', initials: 'TW' }
    ]
  },
  images: {
    hero: '/west-lake-hills-luxury-home-painting.jpg',
    heroAlt: 'Luxury exterior painting in West Lake Hills Texas',
    secondary: '/barton-creek-estate-painting-austin.jpg',
    secondaryAlt: 'West Lake Hills exterior painting excellence'
  }
};

const ExteriorPaintingWestLakeHills = () => <ServiceLocationPage config={config} />;

export default ExteriorPaintingWestLakeHills;
