import React from 'react';
import ServiceLocationPage, { ServiceLocationConfig } from '../../components/templates/ServiceLocationPage';
import { locations } from '../../config/locations';

const location = locations['taylor'];

const config: ServiceLocationConfig = {
  service: {
    type: 'interior',
    name: 'Interior Painting',
    slug: 'interior-painting'
  },
  location: location,
  content: {
    heroSubtitle: 'Quality interior painting for Taylor, Texas. From historic downtown homes to new developments, we bring big-city quality with small-town values.',
    introText: `Taylor's exciting growth - anchored by the Samsung mega-facility - means more families discovering this charming community. Whether you're in a historic downtown Taylor home or a new development, our team delivers professional interior painting with the personal service Taylor residents deserve. We understand both preservation of character and modern updates.`,
    benefits: [
      'Historic home interior expertise',
      'New construction finishing',
      'Samsung workforce flexibility',
      'Small-town customer service',
      'Honest, fair pricing',
      'Quality materials throughout',
      'Detail-oriented craftsmen',
      '2-year warranty standard'
    ],
    processSteps: [
      { title: 'Personal Consultation', description: 'We visit your Taylor home for a thorough assessment and detailed quote.' },
      { title: 'Color Guidance', description: 'Help selecting colors appropriate for your Taylor home\'s style and era.' },
      { title: 'Careful Preparation', description: 'Thorough prep with special attention to older home details and newer construction needs.' },
      { title: 'Quality Painting', description: 'Expert application using premium paints for lasting beauty.' },
      { title: 'Final Inspection', description: 'Detailed walkthrough to ensure your complete satisfaction.' },
      { title: 'Clean Completion', description: 'Your Taylor home left spotless and beautifully refreshed.' }
    ],
    faqs: [
      { question: 'How much does interior painting cost in Taylor?', answer: 'Taylor interior painting typically costs $2,500-$6,000 depending on home size and condition. Historic homes may require additional prep work.' },
      { question: 'Do you work with Taylor\'s older homes?', answer: 'Yes! We have experience with Taylor\'s historic housing stock. We respect original details while delivering modern durability.' },
      { question: 'Can you work around Samsung shift schedules?', answer: 'Absolutely. With Samsung bringing many new residents to Taylor, we\'re flexible with various work schedules.' },
      { question: 'What paint works best for Taylor homes?', answer: 'We recommend premium paints that handle Texas temperature swings well. We\'ll suggest the right products for your specific situation.' },
      { question: 'Do you serve all of Taylor?', answer: 'Yes, we serve all Taylor neighborhoods from downtown to the newest developments. We\'re committed to Taylor\'s growing community.' }
    ],
    testimonials: [
      { name: 'Jim Patterson', location: 'Downtown Taylor', rating: 5, text: 'They did a beautiful job on our 1930s home. Careful with the original trim and details. True craftsmen.', initials: 'JP' },
      { name: 'Maria Santos', location: 'Taylor', rating: 5, text: 'Fair pricing and quality work. They treated us like neighbors, not just customers. Love our refreshed interior!', initials: 'MS' },
      { name: 'Chris Lee', location: 'North Taylor', rating: 5, text: 'New to Taylor and they were recommended by our realtor. Excellent work transforming our new home. Highly recommend!', initials: 'CL' }
    ]
  },
  images: {
    hero: '/interior-painting-detail-austin.jpg',
    heroAlt: 'Interior painting services in Taylor Texas',
    secondary: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
    secondaryAlt: 'Taylor interior painting craftsmanship'
  }
};

const InteriorPaintingTaylor = () => <ServiceLocationPage config={config} />;

export default InteriorPaintingTaylor;
