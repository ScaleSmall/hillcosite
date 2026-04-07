import React from 'react';
import ServiceLocationPage, { ServiceLocationConfig } from '../../components/templates/ServiceLocationPage';
import { locations } from '../../config/locations';

const location = locations['georgetown'];

const config: ServiceLocationConfig = {
  service: {
    type: 'commercial',
    name: 'Commercial Painting',
    slug: 'commercial-painting'
  },
  location: location,
  content: {
    heroSubtitle: "Commercial painting services in Georgetown. Professional results with scheduling that works around your business operations.",
    introText: "Hill Country Painting provides commercial interior and exterior painting for Georgetown businesses — offices, retail spaces, medical and dental offices, restaurants, and multi-family properties. We work after hours, on weekends, and in phases to minimize operational disruption. Serving Sun City Georgetown, Berry Creek, Teravista, and all Georgetown commercial corridors.",
    benefits: [
    "After-hours and weekend scheduling available",
    "Low-VOC and zero-VOC products available",
    "Commercial interiors and exteriors",
    "All Georgetown commercial areas served",
    "Multi-unit and property management experience",
    "Clean, professional crew on every job",
    "Detailed scope and timeline before start",
    "Commercial warranty on all work"
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
        "question": "Do you do commercial painting in Georgetown?",
        "answer": "Yes — we serve Georgetown businesses including offices, retail, medical and dental offices, restaurants, and light industrial spaces. We are experienced with commercial-scale interior and exterior projects and can work around your operational schedule."
    },
    {
        "question": "Can you paint after hours or on weekends in Georgetown?",
        "answer": "Yes — after-hours and weekend scheduling is standard for our commercial work in Georgetown. We build your project schedule around your business hours so customers and employees are not disrupted."
    },
    {
        "question": "Do you handle multi-unit or property management painting in Georgetown?",
        "answer": "Yes — we work with property managers and HOAs for multi-unit residential and commercial properties in Georgetown. We can coordinate multiple units sequentially, handle common areas and building exteriors, and work within turn schedules."
    },
    {
        "question": "What commercial paint products do you use in Georgetown?",
        "answer": "For commercial interiors, we use scrubbable, washable products appropriate for high-traffic environments — Sherwin-Williams ProMar 200, Duration, and Emerald being the most common. For commercial exteriors, we use the same premium UV-resistant products we use on residential work."
    },
    {
        "question": "How do you estimate commercial painting projects in Georgetown?",
        "answer": "We provide a written estimate that covers area-by-area scope, product specifications, project timeline, and total cost. For larger commercial projects, we can phase the work to stay within budget while meeting your timeline."
    }
],
    testimonials: [
    {
        "name": "A. Customer",
        "location": "Sun City Georgetown, Georgetown",
        "rating": 5,
        "text": "Hill Country Painting did an excellent job with our commercial painting project in Georgetown. Professional, reliable, and the results exceeded our expectations.",
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
    heroAlt: 'Commercial Painting in Georgetown Texas',
    secondary: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    secondaryAlt: 'Georgetown commercial painting excellence'
  }
};

const CommercialPaintingGeorgetown = () => <ServiceLocationPage config={config} />;

export default CommercialPaintingGeorgetown;
