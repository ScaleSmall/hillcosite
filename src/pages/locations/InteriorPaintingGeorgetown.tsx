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
    heroSubtitle: "Georgetown's trusted interior painting professionals. Precise, clean, and delivered on time for homes throughout Georgetown.",
    introText: "Georgetown homeowners trust Hill Country Painting for interior projects that go beyond a fresh coat — careful prep, clean lines on trim and ceilings, and color guidance that takes the guesswork out of the process. We serve every neighborhood in Georgetown including Sun City Georgetown, Berry Creek, Teravista.",
    benefits: [
    "All Georgetown neighborhoods served",
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
        "description": "We visit your Georgetown property, assess the scope, and provide a detailed written estimate."
    },
    {
        "title": "Color Consultation",
        "description": "Expert guidance on product and color selection appropriate for your Georgetown home."
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
        "question": "How much does interior painting cost in Georgetown?",
        "answer": "Interior painting in Georgetown typically ranges from $3,000 to $8,000+ depending on home size, number of rooms, and scope. We provide detailed written estimates after an in-home visit."
    },
    {
        "question": "Do you paint ceilings and trim in Georgetown?",
        "answer": "Yes — we offer full interior scope including walls, ceilings, trim, doors, and built-ins. Many Georgetown homeowners choose us for complete interior repaints to ensure consistent color and finish quality throughout."
    },
    {
        "question": "How long does an interior repaint take in Georgetown?",
        "answer": "A full interior repaint for a typical Georgetown home takes 3–5 days depending on size and scope. We work systematically room by room so your family always has usable space during the project."
    },
    {
        "question": "Do you help with paint color selection in Georgetown?",
        "answer": "Yes — color consultation is included with every estimate. We bring sample boards and can help narrow down choices based on your home's lighting, flooring, and furnishings. We eliminate the guesswork."
    },
    {
        "question": "What paint brands do you use for interior projects in Georgetown?",
        "answer": "We use Sherwin-Williams and Benjamin Moore as our primary interior brands — Sherwin-Williams Emerald Interior and Benjamin Moore Aura for high-traffic and premium applications. We do not use builder-grade or off-brand products."
    }
],
    testimonials: [
    {
        "name": "A. Customer",
        "location": "Sun City Georgetown, Georgetown",
        "rating": 5,
        "text": "Hill Country Painting did an excellent job with our interior painting project in Georgetown. Professional, reliable, and the results exceeded our expectations.",
        "initials": "AC"
    },
    {
        "name": "B. Homeowner",
        "location": "Berry Creek, Georgetown",
        "rating": 5,
        "text": "We have used Hill Country Painting twice now and they consistently deliver great results in Georgetown. Highly recommended.",
        "initials": "BH"
    }
]
  },
  images: {
    hero: '/austin-professional-house-painting-hero.jpg',
    heroAlt: 'Interior Painting in Georgetown Texas',
    secondary: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    secondaryAlt: 'Georgetown interior painting excellence'
  }
};

const InteriorPaintingGeorgetown = () => <ServiceLocationPage config={config} />;

export default InteriorPaintingGeorgetown;
