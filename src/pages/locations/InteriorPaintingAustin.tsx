import React from 'react';
import ServiceLocationPage, { ServiceLocationConfig } from '../../components/templates/ServiceLocationPage';
import { locations } from '../../config/locations';

const location = locations['austin'];

const config: ServiceLocationConfig = {
  service: {
    type: 'interior',
    name: 'Interior Painting',
    slug: 'interior-painting'
  },
  location: location,
  content: {
    heroSubtitle: 'Austin\'s trusted interior painting professionals. From downtown condos to South Austin bungalows, we deliver excellence across the capital city.',
    introText: `Austin's diverse architecture - from historic Clarksville homes to modern Barton Creek developments, downtown high-rises to South Austin cottages - requires painters who understand the city's unique character. Our team has painted interiors across every Austin neighborhood, adapting our approach to each home's style, age, and your personal vision. Keep Austin painted beautifully.`,
    benefits: [
      'All Austin neighborhoods served',
      'Historic home specialists',
      'Modern condo experience',
      'Tech industry schedule flexibility',
      'Eclectic Austin aesthetic understanding',
      'Premium paint selection',
      'Traffic-conscious scheduling',
      '2-year warranty standard'
    ],
    processSteps: [
      { title: 'Free Consultation', description: 'We visit your Austin home to understand your vision and provide detailed pricing.' },
      { title: 'Austin-Inspired Colors', description: 'Color guidance considering Austin\'s unique light and your home\'s character.' },
      { title: 'Expert Preparation', description: 'Thorough prep work appropriate for your Austin home\'s age and style.' },
      { title: 'Professional Application', description: 'Skilled painters deliver flawless finishes throughout.' },
      { title: 'Quality Inspection', description: 'Comprehensive review ensuring every detail is perfect.' },
      { title: 'Clean Completion', description: 'Your Austin home beautifully transformed and spotlessly clean.' }
    ],
    faqs: [
      { question: 'How much does interior painting cost in Austin?', answer: 'Austin interior painting ranges from $3,200-$8,500+ depending on home size, location, and complexity. Downtown condos and historic homes may vary. We provide detailed quotes.' },
      { question: 'Do you work in downtown Austin condos?', answer: 'Yes! We have extensive experience with downtown Austin high-rises and condos, including coordinating with building management and working within HOA guidelines.' },
      { question: 'What about Austin\'s historic homes?', answer: 'We specialize in historic Austin neighborhoods like Clarksville, Travis Heights, and Tarrytown. We respect original details while providing modern protection.' },
      { question: 'Can you match Austin\'s eclectic style?', answer: 'Absolutely. We embrace Austin\'s creative spirit and help clients choose colors that express their personality while complementing their home\'s architecture.' },
      { question: 'How do you handle Austin traffic for appointments?', answer: 'We\'re Austin locals who understand the traffic. We schedule appointments and deliveries to avoid peak times and arrive when promised.' }
    ],
    testimonials: [
      { name: 'leslie lyon-house', location: 'Austin', rating: 5, text: 'So happy with the beautiful paint job. Their service went above and beyond our expectations. Fantastic value - the price point is beyond fair.', initials: 'LL' },
      { name: 'Richard Miller', location: 'Austin', rating: 5, text: 'Just moved to Austin and needed to paint our new home. The lead painter was very helpful and his team did a fantastic job! 100% satisfied.', initials: 'RM' },
      { name: 'Kara Steenhoek', location: 'Austin', rating: 5, text: 'Fantastic folks to work with! They made the process so easy. Would recommend to anybody. Great price and quality workmanship.', initials: 'KS' }
    ]
  },
  images: {
    hero: '/austin-professional-house-painting-hero.jpg',
    heroAlt: 'Professional interior painting in Austin Texas',
    secondary: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    secondaryAlt: 'Austin interior painting excellence'
  }
};

const InteriorPaintingAustin = () => <ServiceLocationPage config={config} />;

export default InteriorPaintingAustin;
