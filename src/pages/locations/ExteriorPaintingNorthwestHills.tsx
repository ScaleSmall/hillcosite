import React from 'react';
import ServiceLocationPage, { ServiceLocationConfig } from '../../components/templates/ServiceLocationPage';
import { locations } from '../../config/locations';

const location = locations['northwest-hills'];

const config: ServiceLocationConfig = {
  service: {
    type: 'exterior',
    name: 'Exterior Painting',
    slug: 'exterior-painting'
  },
  location: location,
  content: {
    heroSubtitle: 'Northwest Hills\' trusted exterior painting professionals. Expert service for North Austin\'s established neighborhoods.',
    introText: `Northwest Hills\' mature homes demand painters who understand both mid-century modern architecture and contemporary updates. From Allandale to Crestview, we bring expertise appropriate for these established neighborhoods. Our team specializes in preserving and updating Northwest Hills homes with quality finishes that last.`,
    benefits: [
      'Established neighborhood expertise',
      'Mid-century modern specialists',
      'Austin ISD scheduling',
      'Quality materials',
      'Complete preparation',
      'Tech industry flexibility',
      'North Austin coverage',
      '2-year warranty coverage'
    ],
    processSteps: [
      { title: 'Property Assessment', description: 'Thorough evaluation of your Northwest Hills home\'s exterior and specific needs.' },
      { title: 'Color Consultation', description: 'Expert guidance considering your home\'s style and neighborhood character.' },
      { title: 'Expert Preparation', description: 'Proper prep work suited to your home\'s age, style, and materials.' },
      { title: 'Weather Planning', description: 'Scheduling for optimal Austin painting conditions.' },
      { title: 'Professional Application', description: 'Quality painting providing lasting protection and beauty.' },
      { title: 'Quality Inspection', description: 'Comprehensive review ensuring exceptional results.' }
    ],
    faqs: [
      { question: 'How much does exterior painting cost in Northwest Hills?', answer: 'Northwest Hills exterior painting typically ranges from $5,000-$15,000 depending on home size, style, and condition. Mid-century modern homes may require specialized attention.' },
      { question: 'Do you understand mid-century modern architecture?', answer: 'Yes! Northwest Hills has wonderful mid-century homes. We understand clean lines, wood accents, and period-appropriate finishes.' },
      { question: 'Can you work around Austin ISD schedules?', answer: 'Absolutely. Many Northwest Hills families have school-age children. We offer flexible scheduling to minimize disruption.' },
      { question: 'How do you handle mature landscaping?', answer: 'Northwest Hills homes often have established landscaping. We use protective measures and work carefully around plantings.' },
      { question: 'What warranty do you provide?', answer: 'We offer a 2-year warranty on exterior painting covering peeling, flaking, and blistering.' }
    ],
    testimonials: [
      { name: 'Brian Thompson', location: 'Allandale', rating: 5, text: 'Great work on our mid-century home! They understood the architecture and delivered quality results.', initials: 'BT' },
      { name: 'Rachel Martinez', location: 'Northwest Hills', rating: 5, text: 'Professional crew, excellent communication, and our home looks fantastic!', initials: 'RM' },
      { name: 'David Kim', location: 'Crestview', rating: 5, text: 'They worked around our schedule and respected our property. Highly recommend!', initials: 'DK' }
    ]
  },
  images: {
    hero: '/hill-country-home-exterior-painting.jpg',
    heroAlt: 'Exterior painting in Northwest Hills Austin Texas',
    processImage: '/austin-professional-house-painting-hero.jpg'
  }
};

export default function ExteriorPaintingNorthwestHills() {
  return <ServiceLocationPage config={config} />;
}
