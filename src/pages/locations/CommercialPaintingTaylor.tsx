import React from 'react';
import ServiceLocationPage, { ServiceLocationConfig } from '../../components/templates/ServiceLocationPage';
import { locations } from '../../config/locations';

const location = locations['taylor'];

const config: ServiceLocationConfig = {
  service: {
    type: 'commercial',
    name: 'Commercial Painting',
    slug: 'commercial-painting'
  },
  location: location,
  content: {
    heroSubtitle: 'Professional commercial painting for Taylor businesses. Supporting Taylor\'s Samsung-driven growth with quality commercial painting services.',
    introText: `Taylor's transformation as a Samsung mega-site neighbor brings exciting commercial growth. From downtown Main Street businesses to new developments and expanding industrial needs, we provide professional commercial painting with the honest service Taylor businesses deserve. We understand both Taylor's heritage and its dynamic future.`,
    benefits: [
      'Downtown Taylor expertise',
      'Industrial capabilities',
      'Growth-area experience',
      'Honest pricing',
      'Quality workmanship',
      'Flexible scheduling',
      'Licensed and insured',
      'Local understanding'
    ],
    processSteps: [
      { title: 'Business Assessment', description: 'Evaluate your Taylor commercial space and understand your needs.' },
      { title: 'Honest Planning', description: 'Straightforward timeline and pricing for your Taylor project.' },
      { title: 'Professional Preparation', description: 'Thorough prep respecting your business and customers.' },
      { title: 'Quality Painting', description: 'Professional commercial painting meeting durability standards.' },
      { title: 'Standards Review', description: 'Ensure work meets our quality commitment.' },
      { title: 'Business-Ready Completion', description: 'Your Taylor business looking its best.' }
    ],
    faqs: [
      { question: 'How much does commercial painting cost in Taylor?', answer: 'Taylor commercial painting is competitively priced, typically $1.25-$3.25 per square foot depending on scope. We provide honest, detailed quotes.' },
      { question: 'Do you serve Taylor\'s downtown businesses?', answer: 'Yes! We understand downtown Taylor\'s character and provide appropriate commercial painting for Main Street businesses.' },
      { question: 'What about industrial painting near Samsung?', answer: 'We paint industrial spaces, warehouses, and manufacturing facilities throughout Taylor\'s growing industrial areas.' },
      { question: 'Can you work around my business hours?', answer: 'Absolutely. We schedule to minimize disruption whether you\'re a retail shop, restaurant, or industrial operation.' },
      { question: 'Do you serve all of Taylor\'s business areas?', answer: 'Yes! From downtown to the industrial parks and everywhere in between, we provide commercial painting throughout Taylor.' }
    ],
    testimonials: [
      { name: 'Main Street Shop Owner', location: 'Downtown Taylor', rating: 5, text: 'They respected our downtown heritage while giving us a fresh look. Fair pricing and quality work.', initials: 'MS' },
      { name: 'Industrial Facility Manager', location: 'Taylor', rating: 5, text: 'Professional industrial painting completed on schedule. They understand manufacturing environments.', initials: 'IF' },
      { name: 'Restaurant Owner', location: 'Taylor', rating: 5, text: 'Painted our restaurant efficiently without disrupting service. Quality work at an honest price.', initials: 'RO' }
    ]
  },
  images: {
    hero: '/commercial-painting-services-austin.jpg',
    heroAlt: 'Commercial painting in Taylor Texas',
    secondary: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800',
    secondaryAlt: 'Taylor commercial painting services'
  }
};

const CommercialPaintingTaylor = () => <ServiceLocationPage config={config} />;

export default CommercialPaintingTaylor;
