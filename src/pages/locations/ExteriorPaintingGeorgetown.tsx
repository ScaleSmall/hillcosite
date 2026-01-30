import React from 'react';
import ServiceLocationPage, { ServiceLocationConfig } from '../../components/templates/ServiceLocationPage';
import { locations } from '../../config/locations';

const location = locations['georgetown'];

const config: ServiceLocationConfig = {
  service: {
    type: 'exterior',
    name: 'Exterior Painting',
    slug: 'exterior-painting'
  },
  location: location,
  content: {
    heroSubtitle: 'Expert exterior painting for Georgetown homes. Historic preservation specialists and modern home experts. Protect your investment with quality craftsmanship.',
    introText: `Georgetown's unique blend of historic Victorian homes and modern developments requires specialized exterior painting expertise. From preserving the character of homes near the historic square to protecting Sun City residences from Texas sun, our team delivers appropriate solutions for every Georgetown property. We understand both heritage preservation and modern protection needs.`,
    benefits: [
      'Historic preservation expertise',
      'Period-appropriate colors',
      'Sun City community experience',
      'Limestone-safe preparation',
      'UV-resistant premium paints',
      'Victorian detail specialists',
      'Complete surface preparation',
      '2-year warranty coverage'
    ],
    processSteps: [
      { title: 'Historic Assessment', description: 'Careful evaluation respecting Georgetown\'s architectural heritage and your home\'s specific needs.' },
      { title: 'Appropriate Color Selection', description: 'Guidance on colors suitable for your home\'s era and any preservation requirements.' },
      { title: 'Gentle Preparation', description: 'Surface prep that protects original materials while ensuring paint adhesion.' },
      { title: 'Weather Coordination', description: 'Scheduling around Georgetown weather for optimal painting conditions.' },
      { title: 'Expert Application', description: 'Careful painting preserving details and providing complete protection.' },
      { title: 'Quality Review', description: 'Thorough inspection ensuring heritage and quality standards are met.' }
    ],
    faqs: [
      { question: 'How much does exterior painting cost in Georgetown?', answer: 'Georgetown exterior painting typically ranges from $4,800-$14,000 depending on home size, age, and preservation requirements. Historic homes may require additional care and investment.' },
      { question: 'Do you understand Georgetown historic district requirements?', answer: 'Yes! We\'ve worked extensively in Georgetown\'s historic areas. We understand period-appropriate colors and techniques that respect architectural heritage.' },
      { question: 'What about limestone and mortar around Georgetown homes?', answer: 'Georgetown\'s limestone construction requires careful preparation. We use techniques and products that won\'t damage stone while ensuring proper paint adhesion.' },
      { question: 'How do you serve Sun City Georgetown?', answer: 'We have extensive Sun City experience. We understand the community\'s standards, work respectfully, and offer scheduling that accommodates active adult lifestyles.' },
      { question: 'What paint lasts longest on Georgetown exteriors?', answer: 'We recommend premium acrylic latex paints with UV protection. For historic homes, we may suggest specific formulations that allow proper moisture management.' }
    ],
    testimonials: [
      { name: 'Margaret Collins', location: 'Georgetown Historic District', rating: 5, text: 'They understood our 1890s home needed special care. The colors are period-perfect and the craftsmanship is outstanding. True preservation professionals.', initials: 'MC' },
      { name: 'Frank Watson', location: 'Sun City Georgetown', rating: 5, text: 'Excellent work on our Sun City home. Professional, courteous, and the results exceeded our expectations. Highly recommend!', initials: 'FW' },
      { name: 'Helen Park', location: 'Wolf Ranch', rating: 5, text: 'Great experience from quote to completion. Quality work, fair price, and our Wolf Ranch home looks fantastic.', initials: 'HP' }
    ]
  },
  images: {
    hero: '/traditional-exterior-painting-austin-tx.jpg',
    heroAlt: 'Exterior painting in Georgetown Texas',
    secondary: '/hill-country-home-exterior-painting.jpg',
    secondaryAlt: 'Georgetown exterior painting craftsmanship'
  }
};

const ExteriorPaintingGeorgetown = () => <ServiceLocationPage config={config} />;

export default ExteriorPaintingGeorgetown;
