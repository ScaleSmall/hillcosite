import React from 'react';
import ServiceLocationPage, { ServiceLocationConfig } from '../../components/templates/ServiceLocationPage';
import { locations } from '../../config/locations';

const location = locations['cedar-park'];

const config: ServiceLocationConfig = {
  service: {
    type: 'interior',
    name: 'Interior Painting',
    slug: 'interior-painting'
  },
  location: location,
  canonicalOverride: '/interior-painting-cedar-park',
  content: {
    heroSubtitle: 'Transform your Cedar Park home with expert interior painting. From Avery Ranch to Twin Creeks, we deliver quality results on your family\'s schedule.',
    introText: `Cedar Park families trust Hill Country Painting for interior transformations that last. Our team understands the demands of busy Cedar Park households - we work efficiently, keep spaces clean, and coordinate around school and activity schedules. From open-concept great rooms to kids' bedrooms, we bring expertise and care to every project.`,
    benefits: [
      'Family-friendly scheduling',
      'Quick turnaround times',
      'Complete furniture protection',
      'Low-odor paint options available',
      'Accent walls and feature painting',
      'Clean workspace every day',
      'Kid and pet-safe practices',
      '2-year warranty on all work'
    ],
    processSteps: [
      { title: 'Free In-Home Quote', description: 'We visit your Cedar Park home, measure spaces, and discuss your interior painting vision.' },
      { title: 'Color Coordination', description: 'Expert help selecting colors that flow throughout your Cedar Park home\'s open floor plan.' },
      { title: 'Efficient Preparation', description: 'Quick but thorough prep work to minimize disruption to your family\'s routine.' },
      { title: 'Quality Application', description: 'Professional painting with premium materials for beautiful, durable results.' },
      { title: 'Walkthrough Review', description: 'Detailed inspection with you to ensure complete satisfaction.' },
      { title: 'Spotless Completion', description: 'Full cleanup with your furniture back in place and spaces ready to enjoy.' }
    ],
    faqs: [
      { question: 'How much does interior painting cost in Cedar Park?', answer: 'Cedar Park interior painting typically ranges from $3,000-$6,800 depending on home size and scope. Most Cedar Park homes fall in the $4,000-$5,500 range for full interior painting.' },
      { question: 'How quickly can you paint our Cedar Park home?', answer: 'Most Cedar Park interior projects take 2-4 days. We work efficiently to minimize disruption while maintaining quality. We can also work in phases if needed.' },
      { question: 'Do you offer low-odor paints for families?', answer: 'Yes! We offer low-VOC and zero-VOC premium paints that are safer for children and pets, with minimal odor during and after application.' },
      { question: 'Can you work around our kids\' school schedules?', answer: 'Absolutely. Many Cedar Park families prefer we work while kids are at school. We coordinate scheduling to minimize family disruption.' },
      { question: 'What about Cedar Park HOA requirements?', answer: 'While interior painting rarely requires HOA approval, we understand Cedar Park community standards and can advise on colors that complement neighborhood aesthetics.' }
    ],
    testimonials: [
      { name: 'Jennifer Chen', location: 'Buttercup Creek', rating: 5, text: 'They painted our entire main floor in just 3 days! The crew was professional, clean, and the results are gorgeous. So happy we chose Hill Country Painting.', initials: 'JC' },
      { name: 'Mark Stevens', location: 'Twin Creeks Cedar Park', rating: 5, text: 'Great experience. They worked around our work schedules and the kids\' activities. Quality work at a fair price.', initials: 'MS' },
      { name: 'Amanda Rodriguez', location: 'Anderson Mill', rating: 5, text: 'Professional from quote to completion. They helped us choose colors that made our home feel so much more updated. Highly recommend!', initials: 'AR' }
    ]
  },
  images: {
    hero: '/bedroom-interior-painting-austin.jpg',
    heroAlt: 'Interior painting in Cedar Park Texas home',
    secondary: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=800',
    secondaryAlt: 'Cedar Park interior painting excellence'
  }
};

const InteriorPaintingCedarPark = () => <ServiceLocationPage config={config} />;

export default InteriorPaintingCedarPark;
