import React from 'react';
import ServiceLocationPage, { ServiceLocationConfig } from '../../components/templates/ServiceLocationPage';
import { locations } from '../../config/locations';

const location = locations['west-lake-hills'];

const config: ServiceLocationConfig = {
  service: {
    type: 'interior',
    name: 'Interior Painting',
    slug: 'interior-painting'
  },
  location: location,
  content: {
    heroSubtitle: 'Luxury interior painting for West Lake Hills estates. Premium finishes, meticulous detail, and refined service for Austin\'s most distinguished homes.',
    introText: `West Lake Hills demands the highest standards in interior painting. Our team specializes in luxury residences, understanding the expectations of discerning homeowners. From grand living spaces with dramatic ceilings to detailed millwork and custom finishes, we deliver exceptional craftsmanship. Privacy, precision, and premium materials define our West Lake Hills service.`,
    benefits: [
      'Luxury home specialists',
      'Premium paint and finishes',
      'Meticulous attention to detail',
      'High ceiling expertise',
      'Custom millwork painting',
      'Privacy-conscious service',
      'Eanes area experience',
      '2-year premium warranty'
    ],
    processSteps: [
      { title: 'Private Consultation', description: 'Discreet in-home meeting to understand your vision and assess your West Lake Hills residence.' },
      { title: 'Curated Color Selection', description: 'Expert guidance on colors and finishes worthy of your home\'s caliber.' },
      { title: 'Premium Preparation', description: 'Meticulous prep work protecting fine furnishings and addressing every surface.' },
      { title: 'Master Craftsmanship', description: 'Our most experienced painters deliver flawless results throughout.' },
      { title: 'Detailed Inspection', description: 'Comprehensive review ensuring every element exceeds expectations.' },
      { title: 'Immaculate Completion', description: 'Your estate returned to perfect order, beautifully transformed.' }
    ],
    faqs: [
      { question: 'How much does interior painting cost in West Lake Hills?', answer: 'West Lake Hills interior painting typically ranges from $5,000-$15,000+ depending on home size and complexity. Large estates with custom features may exceed this range. We provide detailed quotes.' },
      { question: 'Do you use premium paints?', answer: 'Exclusively. We use the finest paints from Sherwin-Williams, Benjamin Moore, and specialty lines like Farrow & Ball when specified. Your home deserves the best.' },
      { question: 'How do you handle high ceilings?', answer: 'We\'re fully equipped for the dramatic ceiling heights common in West Lake Hills estates. Our team uses professional equipment for safe, pristine results at any height.' },
      { question: 'What about custom millwork and trim?', answer: 'Our painters are skilled in fine trim work, including detailed moldings, built-ins, and custom millwork. We take extra care with these architectural features.' },
      { question: 'Is your service discreet?', answer: 'Absolutely. We understand West Lake Hills residents value privacy. Our crews are professional, our vehicles unmarked if preferred, and we respect your property and privacy completely.' }
    ],
    testimonials: [
      { name: 'Victoria Ashworth', location: 'West Lake Hills', rating: 5, text: 'Exceptional work on our estate. They understood our expectations and exceeded them. The attention to detail on our trim work was remarkable.', initials: 'VA' },
      { name: 'William Chen', location: 'Rob Roy', rating: 5, text: 'We\'ve used many contractors over the years. Hill Country Painting stands apart - professional, meticulous, and trustworthy. Our home looks stunning.', initials: 'WC' },
      { name: 'Elizabeth Montgomery', location: 'Rollingwood', rating: 5, text: 'They treated our home with the care it deserves. Beautiful results, premium finishes, and impeccable cleanup. Highly recommend for Westlake homes.', initials: 'EM' }
    ]
  },
  images: {
    hero: '/west-lake-hills-luxury-home-painting.jpg',
    heroAlt: 'Luxury interior painting in West Lake Hills Texas',
    secondary: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800',
    secondaryAlt: 'West Lake Hills interior painting excellence'
  }
};

const InteriorPaintingWestLakeHills = () => <ServiceLocationPage config={config} />;

export default InteriorPaintingWestLakeHills;
