import React from 'react';
import ServiceLocationPage, { ServiceLocationConfig } from '../../components/templates/ServiceLocationPage';
import { locations } from '../../config/locations';

const location = locations['georgetown'];

const config: ServiceLocationConfig = {
  service: {
    type: 'interior',
    name: 'Interior Painting',
    slug: 'interior-painting'
  },
  location: location,
  content: {
    heroSubtitle: 'Expert interior painting for Georgetown homes. From Sun City to the Historic Square, we bring precision and care to every Georgetown painting project.',
    introText: `Georgetown's diverse housing stock - from Victorian homes near the historic square to modern Sun City residences - requires painters who understand both heritage preservation and contemporary techniques. Our team has extensive experience throughout Georgetown, respecting the character of older homes while delivering modern durability and finish quality.`,
    benefits: [
      'Historic home interior expertise',
      'Sun City 55+ community experience',
      'Period-appropriate color guidance',
      'Premium low-VOC paint options',
      'Respectful service for all ages',
      'Detailed trim and millwork painting',
      'Texture matching for repairs',
      '2-year warranty included'
    ],
    processSteps: [
      { title: 'Free Home Assessment', description: 'We evaluate your Georgetown home\'s unique features and discuss your interior painting goals.' },
      { title: 'Customized Color Plan', description: 'Expert guidance on colors that complement Georgetown\'s architectural heritage and your personal style.' },
      { title: 'Careful Preparation', description: 'Thorough protection and prep work, with special care for historic details and millwork.' },
      { title: 'Skilled Application', description: 'Our experienced painters apply premium finishes with attention to Georgetown\'s varied interior styles.' },
      { title: 'Detailed Inspection', description: 'Comprehensive walkthrough ensuring every detail meets our high standards.' },
      { title: 'Complete Cleanup', description: 'Your Georgetown home left spotless and beautifully transformed.' }
    ],
    faqs: [
      { question: 'How much does interior painting cost in Georgetown?', answer: 'Georgetown interior painting typically ranges from $3,400-$7,800 depending on home size, age, and prep requirements. Historic homes may require additional preparation. We provide detailed quotes.' },
      { question: 'Do you have experience with Georgetown historic homes?', answer: 'Yes! We\'ve painted numerous homes in Georgetown\'s historic districts. We understand period-appropriate colors and techniques for preserving architectural character.' },
      { question: 'Are you experienced with Sun City Georgetown?', answer: 'Absolutely. We work extensively in Sun City and understand the community\'s standards and the preferences of active adult homeowners.' },
      { question: 'What about low-VOC paints for Georgetown seniors?', answer: 'We offer premium low-VOC and zero-VOC paint options that minimize odors and are safer for those with sensitivities - popular with our Sun City clients.' },
      { question: 'Can you match historic paint colors?', answer: 'Yes, we offer custom color matching services and can research period-appropriate palettes for Georgetown\'s Victorian and historic homes.' }
    ],
    testimonials: [
      { name: 'Robert Williams', location: 'Sun City Georgetown', rating: 5, text: 'Professional, courteous, and excellent work. They understood our needs and worked efficiently. Our Sun City home looks wonderful.', initials: 'RW' },
      { name: 'Susan Anderson', location: 'Georgetown Historic District', rating: 5, text: 'They were so careful with our 1920s home details. The colors are perfect and the craftsmanship is outstanding.', initials: 'SA' },
      { name: 'David Martinez', location: 'Wolf Ranch Georgetown', rating: 5, text: 'Great experience from start to finish. Fair pricing, quality work, and they cleaned up perfectly every day.', initials: 'DM' }
    ]
  },
  images: {
    hero: '/luxury-home-interior-painting-austin.jpg',
    heroAlt: 'Professional interior painting in Georgetown Texas',
    secondary: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800',
    secondaryAlt: 'Georgetown interior painting craftsmanship'
  }
};

const InteriorPaintingGeorgetown = () => <ServiceLocationPage config={config} />;

export default InteriorPaintingGeorgetown;
