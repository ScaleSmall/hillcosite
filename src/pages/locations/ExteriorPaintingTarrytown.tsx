import React from 'react';
import ServiceLocationPage, { ServiceLocationConfig } from '../../components/templates/ServiceLocationPage';
import { locations } from '../../config/locations';

const location = locations['tarrytown'];

const config: ServiceLocationConfig = {
  service: {
    type: 'exterior',
    name: 'Exterior Painting',
    slug: 'exterior-painting'
  },
  location: location,
  content: {
    heroSubtitle: 'Tarrytown\'s trusted exterior painting professionals. Historic preservation meets modern expertise for Old Austin\'s finest homes.',
    introText: `Tarrytown's distinguished architecture demands painters who understand historic preservation and luxury finishes. From Old Enfield estates to Pemberton Heights mansions, we bring the expertise and care these homes deserve. Our team specializes in protecting and beautifying Tarrytown's architectural treasures while respecting their historic character.`,
    benefits: [
      'Historic district expertise',
      'Luxury home specialists',
      'Architectural preservation',
      'Premium materials',
      'Detail-oriented craftsmanship',
      'Old Austin character respect',
      'Eanes ISD scheduling',
      '2-year warranty coverage'
    ],
    processSteps: [
      { title: 'Property Assessment', description: 'Thorough evaluation of your Tarrytown home\'s historic features and needs.' },
      { title: 'Historic Color Consultation', description: 'Period-appropriate colors that honor your home\'s architectural heritage.' },
      { title: 'Expert Preparation', description: 'Careful prep work protecting original details and ensuring lasting results.' },
      { title: 'Premium Application', description: 'Quality painting respecting architectural integrity and providing protection.' },
      { title: 'Detail Work', description: 'Meticulous attention to trim, millwork, and architectural elements.' },
      { title: 'Final Inspection', description: 'Comprehensive review ensuring exceptional results.' }
    ],
    faqs: [
      { question: 'How much does exterior painting cost in Tarrytown?', answer: 'Tarrytown exterior painting typically ranges from $8,000-$25,000+ depending on home size, architectural complexity, and historic preservation requirements.' },
      { question: 'Do you specialize in historic homes?', answer: 'Yes! Tarrytown\'s historic homes require specialized knowledge. We understand period architecture and use appropriate techniques and materials.' },
      { question: 'Can you match historic paint colors?', answer: 'Absolutely. We work with historic color palettes and can match original colors while using modern, durable paint formulations.' },
      { question: 'How do you protect landscaping and mature trees?', answer: 'Tarrytown\'s mature landscaping requires careful protection. We use protective measures and work carefully around established plantings.' },
      { question: 'What warranty do you provide?', answer: 'We offer a 2-year warranty on exterior painting covering peeling, flaking, and blistering. Premium materials ensure lasting results.' }
    ],
    testimonials: [
      { name: 'Elizabeth Morrison', location: 'Tarrytown', rating: 5, text: 'Our 1930s home needed experts who understood historic architecture. The results are stunning - period-appropriate and beautiful!', initials: 'EM' },
      { name: 'David Winchester', location: 'Pemberton Heights', rating: 5, text: 'Exceptional attention to detail on our estate. Professional crew, premium finish, and respect for our home\'s character.', initials: 'DW' },
      { name: 'Sarah Chen', location: 'Old Enfield', rating: 5, text: 'They understood our Old Austin home needed special care. The craftsmanship is outstanding!', initials: 'SC' }
    ]
  },
  images: {
    hero: '/hill-country-home-exterior-painting.jpg',
    heroAlt: 'Exterior painting in Tarrytown Austin Texas',
    processImage: '/austin-professional-house-painting-hero.jpg'
  }
};

export default function ExteriorPaintingTarrytown() {
  return <ServiceLocationPage config={config} />;
}
