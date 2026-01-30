import React from 'react';
import ServiceLocationPage, { ServiceLocationConfig } from '../../components/templates/ServiceLocationPage';
import { locations } from '../../config/locations';

const location = locations['round-rock'];

const config: ServiceLocationConfig = {
  service: {
    type: 'interior',
    name: 'Interior Painting',
    slug: 'interior-painting'
  },
  location: location,
  content: {
    heroSubtitle: 'Transform your Round Rock home with professional interior painting. Dell Diamond district to Avery Ranch, we deliver flawless results with minimal disruption to your busy schedule.',
    introText: `Round Rock homeowners deserve interior painting that matches the quality of their thriving community. Whether you're in a modern Teravista home or an established Forest Creek residence, our experienced painters deliver beautiful, long-lasting results. We understand the unique needs of Round Rock families - from coordinating around Dell Technologies work-from-home schedules to working efficiently around children's activities.`,
    benefits: [
      'Complete furniture and floor protection',
      'Premium Sherwin-Williams and Benjamin Moore paints',
      'Clean, precise cutting and rolling techniques',
      'Dell workforce schedule flexibility',
      'Minimal disruption to your daily routine',
      'Full cleanup after each work day',
      'Color consultation included',
      '2-year warranty on all interior work'
    ],
    processSteps: [
      { title: 'Free Consultation', description: 'We visit your Round Rock home, discuss your vision, and provide a detailed quote with no hidden fees.' },
      { title: 'Color Selection', description: 'Our color experts help you choose the perfect palette for your Round Rock home\'s style and lighting.' },
      { title: 'Thorough Preparation', description: 'Furniture protection, wall patching, sanding, and priming for optimal paint adhesion.' },
      { title: 'Expert Application', description: 'Professional painters apply premium paints with attention to every detail and corner.' },
      { title: 'Quality Inspection', description: 'Detailed walkthrough to ensure every surface meets our high standards.' },
      { title: 'Final Cleanup', description: 'Complete cleanup and furniture replacement - your home better than we found it.' }
    ],
    faqs: [
      { question: 'How much does interior painting cost in Round Rock?', answer: 'Interior painting in Round Rock typically ranges from $3,200-$7,200 for a standard home, depending on square footage, number of rooms, paint quality, and prep work needed. We provide detailed, transparent quotes.' },
      { question: 'How long does interior painting take in Round Rock?', answer: 'Most Round Rock interior painting projects take 2-5 days depending on home size and scope. We work efficiently to minimize disruption to your family\'s routine.' },
      { question: 'Do you work around Dell work-from-home schedules?', answer: 'Absolutely! Many Round Rock clients work for Dell Technologies. We coordinate quiet times for important calls and can work around your home office schedule.' },
      { question: 'What paint brands do you recommend for Round Rock homes?', answer: 'We recommend Sherwin-Williams and Benjamin Moore for their durability and coverage. These premium paints handle Round Rock\'s temperature variations and provide long-lasting beauty.' },
      { question: 'Do you handle HOA color approvals in Round Rock?', answer: 'Yes, we\'re familiar with HOA requirements in Avery Ranch, Teravista, and other Round Rock communities. We can help with color selection that meets your HOA guidelines.' }
    ],
    testimonials: [
      { name: 'Jason Hartley', location: 'Round Rock', rating: 5, text: 'Hill Country Painting did an outstanding job on our Round Rock home. They painted 7 rooms including one with a two-story ceiling. Everything looks clean and professional. They showed up on time and worked hard.', initials: 'JH' },
      { name: 'Patricia Perez', location: 'Avery Ranch', rating: 5, text: 'Second time hiring Hill Country Painting for our Avery Ranch home. They are thorough with great follow-up. Neat, clean, and excellent communication throughout the project.', initials: 'PP' },
      { name: 'Michael Thompson', location: 'Teravista', rating: 5, text: 'Transformed our Teravista home completely. The crew was respectful of our space and schedule. Colors look amazing and the finish quality is exceptional.', initials: 'MT' }
    ]
  },
  images: {
    hero: '/interior-living-room-painting-central-austin.jpg',
    heroAlt: 'Professional interior painting in Round Rock Texas home',
    secondary: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    secondaryAlt: 'Round Rock interior painting expertise'
  }
};

const InteriorPaintingRoundRock = () => <ServiceLocationPage config={config} />;

export default InteriorPaintingRoundRock;
