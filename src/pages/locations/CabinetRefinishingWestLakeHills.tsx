import React from 'react';
import ServiceLocationPage, { ServiceLocationConfig } from '../../components/templates/ServiceLocationPage';
import { locations } from '../../config/locations';

const location = locations['west-lake-hills'];

const config: ServiceLocationConfig = {
  service: {
    type: 'cabinet',
    name: 'Cabinet Refinishing',
    slug: 'cabinet-refinishing'
  },
  location: location,
  content: {
    heroSubtitle: 'Luxury cabinet refinishing for West Lake Hills estates. Premium finishes, meticulous craftsmanship, and sophisticated results for Austin\'s finest kitchens.',
    introText: `West Lake Hills kitchens deserve finishes worthy of their surroundings. Our cabinet refinishing service delivers premium results using the finest products and techniques. From elegant kitchen islands to custom butler's pantries, we transform cabinetry throughout your estate with the attention to detail discerning Westlake homeowners expect.`,
    benefits: [
      'Luxury kitchen specialists',
      'Premium finish products',
      'Meticulous craftsmanship',
      'Custom color matching',
      'Island and specialty cabinets',
      'Butler\'s pantry expertise',
      'Privacy-conscious service',
      '2-year premium warranty'
    ],
    processSteps: [
      { title: 'Estate Consultation', description: 'Comprehensive assessment of your West Lake Hills kitchen cabinetry.' },
      { title: 'Premium Color Selection', description: 'Expert guidance on sophisticated finishes that enhance your estate.' },
      { title: 'Meticulous Preparation', description: 'Thorough prep protecting your kitchen while preparing surfaces.' },
      { title: 'Expert Application', description: 'Our finest craftsmen applying premium finishes with precision.' },
      { title: 'Hardware Coordination', description: 'Installation of designer hardware or preservation of existing pieces.' },
      { title: 'Detailed Inspection', description: 'Comprehensive review ensuring every surface exceeds expectations.' }
    ],
    faqs: [
      { question: 'How much does cabinet refinishing cost in West Lake Hills?', answer: 'West Lake Hills cabinet refinishing typically ranges from $6,000-$18,000+ depending on kitchen size, complexity, and finish selections. Large estates may exceed this range.' },
      { question: 'What premium products do you use?', answer: 'We use the finest cabinet coatings available including high-performance lacquers and conversion varnishes for maximum durability and beauty.' },
      { question: 'Can you match existing finishes?', answer: 'Yes, we offer custom color matching to coordinate with other cabinetry or millwork throughout your estate.' },
      { question: 'What about kitchen islands and specialty cabinetry?', answer: 'We refinish all cabinetry including islands, butler\'s pantries, wet bars, and custom built-ins throughout your home.' },
      { question: 'How do you protect our kitchen during the process?', answer: 'We implement comprehensive protection for all surfaces, appliances, and adjacent spaces. Your estate is treated with utmost care.' }
    ],
    testimonials: [
      { name: 'Elizabeth Morrison', location: 'West Lake Hills', rating: 5, text: 'They transformed our entire kitchen cabinetry including the island and butler\'s pantry. Flawless finish and impeccable service throughout.', initials: 'EM' },
      { name: 'William Chen', location: 'Rob Roy', rating: 5, text: 'Exceptional craftsmanship on our estate kitchen. The attention to detail matches the quality we expect. Highly recommend.', initials: 'WC' },
      { name: 'Catherine Brooks', location: 'Rollingwood', rating: 5, text: 'Premium results worthy of our Rollingwood home. Professional, discreet, and the finish quality is remarkable.', initials: 'CB' }
    ]
  },
  images: {
    hero: '/kitchen-cabinet-painting-west-lake-hills.jpg',
    heroAlt: 'Luxury cabinet refinishing in West Lake Hills Texas',
    secondary: '/kitchen-cabinet-refinishing-austin.jpg',
    secondaryAlt: 'West Lake Hills cabinet painting excellence'
  }
};

const CabinetRefinishingWestLakeHills = () => <ServiceLocationPage config={config} />;

export default CabinetRefinishingWestLakeHills;
