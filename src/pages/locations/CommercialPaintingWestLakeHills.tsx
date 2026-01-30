import React from 'react';
import ServiceLocationPage, { ServiceLocationConfig } from '../../components/templates/ServiceLocationPage';
import { locations } from '../../config/locations';

const location = locations['west-lake-hills'];

const config: ServiceLocationConfig = {
  service: {
    type: 'commercial',
    name: 'Commercial Painting',
    slug: 'commercial-painting'
  },
  location: location,
  content: {
    heroSubtitle: 'Premium commercial painting for West Lake Hills businesses. Professional service for upscale retail, professional offices, and private clubs.',
    introText: `West Lake Hills and the Westlake corridor feature some of Austin's most upscale commercial spaces. From exclusive retail at the Hill Country Galleria to professional offices serving Westlake's affluent community, our commercial painting team delivers the premium results these businesses require. We understand the standards expected in Westlake's business environment.`,
    benefits: [
      'Upscale commercial expertise',
      'Hill Country Galleria experience',
      'Professional office specialists',
      'Private club experience',
      'Premium finishes',
      'Discreet service',
      'Licensed and insured',
      'Premium commercial standards'
    ],
    processSteps: [
      { title: 'Professional Consultation', description: 'Assess your Westlake commercial space with attention to premium standards.' },
      { title: 'Quality-First Planning', description: 'Develop approach meeting Westlake\'s elevated business expectations.' },
      { title: 'Premium Preparation', description: 'Thorough prep ensuring quality results worthy of your business.' },
      { title: 'Expert Application', description: 'Premium commercial painting meeting the highest standards.' },
      { title: 'Quality Assurance', description: 'Detailed inspection ensuring exceptional results.' },
      { title: 'Professional Completion', description: 'Your Westlake business looking its best.' }
    ],
    faqs: [
      { question: 'How much does commercial painting cost in West Lake Hills?', answer: 'Westlake commercial painting reflects premium standards, typically $2.50-$6.00+ per square foot depending on scope and finish requirements.' },
      { question: 'Do you work at Hill Country Galleria?', answer: 'Yes! We have experience with retail and restaurant spaces in and around the Galleria area.' },
      { question: 'What about private clubs and professional offices?', answer: 'We paint professional offices, private clubs, and exclusive business spaces throughout the Westlake corridor.' },
      { question: 'Can you maintain confidentiality for high-profile clients?', answer: 'Absolutely. We provide discreet, professional service and maintain client privacy for all Westlake commercial projects.' },
      { question: 'What finish quality can we expect?', answer: 'We deliver premium commercial finishes using the finest products. Our standards match Westlake business expectations.' }
    ],
    testimonials: [
      { name: 'Galleria Boutique Owner', location: 'Hill Country Galleria', rating: 5, text: 'Premium work for our premium location. They understood our standards and delivered exceptional results.', initials: 'GB' },
      { name: 'Private Office Manager', location: 'Westlake', rating: 5, text: 'Professional, discreet, and quality results. They painted our professional offices to the highest standards.', initials: 'PO' },
      { name: 'Club Manager', location: 'West Lake Hills', rating: 5, text: 'Excellent work on our facilities. They worked around our member schedules and delivered premium quality.', initials: 'CM' }
    ]
  },
  images: {
    hero: '/commercial-painting-services-austin.jpg',
    heroAlt: 'Commercial painting in West Lake Hills Texas',
    secondary: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800',
    secondaryAlt: 'West Lake Hills commercial painting excellence'
  }
};

const CommercialPaintingWestLakeHills = () => <ServiceLocationPage config={config} />;

export default CommercialPaintingWestLakeHills;
