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
  content: {
    heroSubtitle: "Cedar Park's trusted interior painting professionals. Precise, clean, and delivered on time for homes throughout Cedar Park.",
    introText: "Cedar Park homeowners trust Hill Country Painting for interior projects that go beyond a fresh coat — careful prep, clean lines on trim and ceilings, and color guidance that takes the guesswork out of the process. We serve every neighborhood in Cedar Park including Avery Ranch, Ranch at Brushy Creek, Buttercup Creek.",
    benefits: [
    "All Cedar Park neighborhoods served",
    "Full prep — walls, trim, and ceilings",
    "Premium paint — Sherwin-Williams and Benjamin Moore",
    "Color consultation included",
    "Family-schedule friendly",
    "Trim and door painting available",
    "Cabinet refinishing add-on option",
    "2-year warranty standard"
],
    processSteps: [
    {
        "title": "Free Estimate",
        "description": "We visit your Cedar Park property, assess the scope, and provide a detailed written estimate."
    },
    {
        "title": "Color Consultation",
        "description": "Expert guidance on product and color selection appropriate for your Cedar Park home."
    },
    {
        "title": "Surface Preparation",
        "description": "Thorough prep work — cleaning, patching, caulking, and priming as needed."
    },
    {
        "title": "Professional Application",
        "description": "Skilled application using premium products matched to your surfaces."
    },
    {
        "title": "Quality Inspection",
        "description": "Detailed review of every surface before we consider the project complete."
    },
    {
        "title": "Final Walkthrough",
        "description": "Walk-through with you to confirm everything meets your expectations."
    }
],
    faqs: [
    {
        "question": "How much does interior painting cost in Cedar Park?",
        "answer": "Interior painting in Cedar Park typically ranges from $3,000 to $8,000+ depending on home size, number of rooms, and scope. We provide detailed written estimates after an in-home visit."
    },
    {
        "question": "Do you paint ceilings and trim in Cedar Park?",
        "answer": "Yes — we offer full interior scope including walls, ceilings, trim, doors, and built-ins. Many Cedar Park homeowners choose us for complete interior repaints to ensure consistent color and finish quality throughout."
    },
    {
        "question": "How long does an interior repaint take in Cedar Park?",
        "answer": "A full interior repaint for a typical Cedar Park home takes 3–5 days depending on size and scope. We work systematically room by room so your family always has usable space during the project."
    },
    {
        "question": "Do you help with paint color selection in Cedar Park?",
        "answer": "Yes — color consultation is included with every estimate. We bring sample boards and can help narrow down choices based on your home's lighting, flooring, and furnishings. We eliminate the guesswork."
    },
    {
        "question": "What paint brands do you use for interior projects in Cedar Park?",
        "answer": "We use Sherwin-Williams and Benjamin Moore as our primary interior brands — Sherwin-Williams Emerald Interior and Benjamin Moore Aura for high-traffic and premium applications. We do not use builder-grade or off-brand products."
    }
],
    testimonials: [
    {
        "name": "A. Customer",
        "location": "Avery Ranch, Cedar Park",
        "rating": 5,
        "text": "Hill Country Painting did an excellent job with our interior painting project in Cedar Park. Professional, reliable, and the results exceeded our expectations.",
        "initials": "AC"
    },
    {
        "name": "B. Homeowner",
        "location": "Ranch at Brushy Creek, Cedar Park",
        "rating": 5,
        "text": "We have used Hill Country Painting twice now and they consistently deliver great results in Cedar Park. Highly recommended.",
        "initials": "BH"
    }
]
  },
  images: {
    hero: '/austin-professional-house-painting-hero.jpg',
    heroAlt: 'Interior Painting in Cedar Park Texas',
    secondary: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    secondaryAlt: 'Cedar Park interior painting excellence'
  }
};

const InteriorPaintingCedarPark = () => <ServiceLocationPage config={config} />;

export default InteriorPaintingCedarPark;
