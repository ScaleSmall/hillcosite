import React from 'react';
import ServiceLocationPage, { ServiceLocationConfig } from '../../components/templates/ServiceLocationPage';
import { locations } from '../../config/locations';

const location = locations['tarrytown'];

const config: ServiceLocationConfig = {
  service: {
    type: 'interior',
    name: 'Interior Painting',
    slug: 'interior-painting'
  },
  location: location,
  content: {
    heroSubtitle: 'Tarrytown\'s premier interior painting specialists. Elegant finishes for Old Austin\'s distinguished homes.',
    introText: `Tarrytown interiors deserve painters who understand luxury finishes and historic details. From period millwork to modern updates, we bring expertise appropriate for these refined homes. Our team specializes in creating beautiful, lasting interiors that honor Tarrytown\'s architectural heritage while meeting modern expectations.`,
    benefits: [
      'Historic detail expertise',
      'Luxury finish specialists',
      'Period-appropriate colors',
      'Millwork specialists',
      'Zero-VOC options',
      'Furniture protection',
      'Flexible scheduling',
      '2-year warranty coverage'
    ],
    processSteps: [
      { title: 'Interior Assessment', description: 'Evaluation of your Tarrytown home\'s interior features and requirements.' },
      { title: 'Color Design Consultation', description: 'Expert guidance on colors that complement your home\'s architecture and style.' },
      { title: 'Careful Preparation', description: 'Thorough prep protecting architectural details and ensuring smooth finishes.' },
      { title: 'Premium Application', description: 'Quality painting with attention to historic details and modern standards.' },
      { title: 'Detail Finishing', description: 'Meticulous work on trim, millwork, and architectural elements.' },
      { title: 'Final Walkthrough', description: 'Comprehensive review ensuring your complete satisfaction.' }
    ],
    faqs: [
      { question: 'How much does interior painting cost in Tarrytown?', answer: 'Tarrytown interior painting typically ranges from $5,000-$20,000+ depending on home size, detail work, and finish requirements. Historic homes may require additional care.' },
      { question: 'Can you work around our schedule?', answer: 'Yes! We understand Tarrytown homeowners\' busy schedules. We offer flexible timing and work efficiently to minimize disruption.' },
      { question: 'Do you handle intricate millwork and trim?', answer: 'Absolutely. Tarrytown homes often feature beautiful millwork. We specialize in painting detailed trim, crown molding, and architectural elements.' },
      { question: 'What about lead paint in older homes?', answer: 'We follow EPA lead-safe practices for pre-1978 homes. Safety is our priority when working with historic properties.' },
      { question: 'What warranty do you provide?', answer: 'We offer a 2-year warranty on interior painting covering application quality and finish durability.' }
    ],
    testimonials: [
      { name: 'Margaret Thornton', location: 'Tarrytown', rating: 5, text: 'Beautiful work on our historic home\'s interior. They understood the millwork and architectural details perfectly!', initials: 'MT' },
      { name: 'James Patterson', location: 'Bryker Woods', rating: 5, text: 'Professional, clean, and excellent results. Our Tarrytown home looks magnificent!', initials: 'JP' },
      { name: 'Linda Hartwell', location: 'Old Enfield', rating: 5, text: 'They respected our home and delivered exceptional quality. Highly recommend for historic Austin homes!', initials: 'LH' }
    ]
  },
  images: {
    hero: '/austin-professional-house-painting-hero.jpg',
    heroAlt: 'Interior painting in Tarrytown Austin Texas',
    processImage: '/hill-country-home-exterior-painting.jpg'
  }
};

export default function InteriorPaintingTarrytown() {
  return <ServiceLocationPage config={config} />;
}
