import React from 'react';
import ServiceLocationPage, { ServiceLocationConfig } from '../../components/templates/ServiceLocationPage';
import { locations } from '../../config/locations';

const location = locations['round-rock'];

const config: ServiceLocationConfig = {
  service: {
    type: 'exterior',
    name: 'Exterior Painting',
    slug: 'exterior-painting'
  },
  location: location,
  content: {
    heroSubtitle: 'Protect and beautify your Round Rock home with professional exterior painting. UV-resistant finishes engineered for Texas sun and HOA compliance expertise.',
    introText: `Round Rock's intense Texas sun demands exterior paint that performs. Our team understands the specific challenges facing Round Rock homes - from UV degradation to HOA color requirements in communities like Avery Ranch and Teravista. We use premium, UV-resistant paints and proven application techniques to protect your investment for years to come.`,
    benefits: [
      'UV-resistant premium paints',
      'HOA color compliance expertise',
      'Complete surface preparation',
      'Weather-monitoring scheduling',
      'Stucco and siding specialists',
      'Trim and detail painting',
      'Power washing included',
      '2-year exterior warranty'
    ],
    processSteps: [
      { title: 'Property Assessment', description: 'Thorough evaluation of your Round Rock home\'s exterior condition and needs.' },
      { title: 'HOA Coordination', description: 'Assistance with color selection and HOA approval if required in your community.' },
      { title: 'Surface Preparation', description: 'Power washing, scraping, caulking, and priming for optimal paint adhesion.' },
      { title: 'Weather-Smart Scheduling', description: 'We monitor Round Rock weather to paint during optimal conditions.' },
      { title: 'Professional Application', description: 'Expert application using premium exterior paints and proper techniques.' },
      { title: 'Final Inspection', description: 'Detailed walkthrough ensuring complete coverage and quality.' }
    ],
    faqs: [
      { question: 'How much does exterior painting cost in Round Rock?', answer: 'Round Rock exterior painting typically ranges from $4,500-$12,000 depending on home size, stories, and condition. HOA community homes often require specific colors which we help coordinate.' },
      { question: 'What paint holds up best in Round Rock\'s sun?', answer: 'We use Sherwin-Williams and Benjamin Moore exterior formulations with UV-blockers designed for Texas conditions. These premium paints resist fading and chalking.' },
      { question: 'Do you handle Round Rock HOA color approvals?', answer: 'Yes! We\'re familiar with HOA requirements in Avery Ranch, Teravista, Forest Creek, and other Round Rock communities. We help select compliant colors and can assist with the approval process.' },
      { question: 'How long does exterior painting last in Round Rock?', answer: 'With proper preparation and premium paint, Round Rock exterior painting typically lasts 7-10 years. We provide a 2-year warranty covering peeling and flaking.' },
      { question: 'When is the best time to paint exteriors in Round Rock?', answer: 'Spring and fall offer ideal conditions. We monitor weather carefully and avoid painting during extreme heat or before rain. Your project will be scheduled for optimal results.' }
    ],
    testimonials: [
      { name: 'Tom Bradley', location: 'Avery Ranch', rating: 5, text: 'Excellent exterior work on our two-story. They handled the HOA color approval and the paint has held up beautifully through two Texas summers.', initials: 'TB' },
      { name: 'Sandra Lee', location: 'Teravista Round Rock', rating: 5, text: 'Professional from start to finish. Great prep work and the finish quality is outstanding. Our home looks brand new!', initials: 'SL' },
      { name: 'Carlos Ruiz', location: 'Forest Creek', rating: 5, text: 'They navigated our HOA requirements perfectly and delivered a beautiful result. Fair pricing and excellent communication throughout.', initials: 'CR' }
    ]
  },
  images: {
    hero: '/exterior-house-painting-tarrytown-austin.jpg',
    heroAlt: 'Exterior painting in Round Rock Texas',
    secondary: '/classic-exterior-home-painting-austin.jpg',
    secondaryAlt: 'Round Rock exterior painting expertise'
  }
};

const ExteriorPaintingRoundRock = () => <ServiceLocationPage config={config} />;

export default ExteriorPaintingRoundRock;
