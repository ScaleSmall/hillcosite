import { locations } from './locations';
import type { ServiceLocationConfig } from '../components/templates/ServiceLocationPage';

const serviceDefinitions = {
  interior: {
    type: 'interior',
    name: 'Interior Painting',
    slug: 'interior-painting',
    verb: 'refreshing interiors',
    surfaceFocus: 'walls, ceilings, trim, doors, and detailed millwork',
    proof: 'clean prep, crisp cut lines, low-odor products, and careful room-by-room sequencing',
    heroImage: '/hill-country-painting-austin-interior-hero.jpg',
    secondaryImage: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  exterior: {
    type: 'exterior',
    name: 'Exterior Painting',
    slug: 'exterior-painting',
    verb: 'protecting exteriors',
    surfaceFocus: 'stucco, siding, trim, doors, masonry transitions, and exposed architectural details',
    proof: 'washing, scraping, sanding, caulking, priming, and coatings matched to Central Texas sun',
    heroImage: '/hill-country-home-exterior-painting.png',
    secondaryImage: '/traditional-home-exterior.jpg'
  },
  cabinet: {
    type: 'cabinet',
    name: 'Cabinet Refinishing',
    slug: 'cabinet-refinishing',
    verb: 'upgrading kitchens and built-ins',
    surfaceFocus: 'cabinet doors, drawer fronts, frames, islands, vanities, and built-ins',
    proof: 'degreasing, sanding, bonding primer, controlled spray application, and durable enamel systems',
    heroImage: '/hill-country-painting-austin-interior-hero.jpg',
    secondaryImage: '/kitchen-transformation-west-lake-hills.jpg'
  },
  commercial: {
    type: 'commercial',
    name: 'Commercial Painting',
    slug: 'commercial-painting',
    verb: 'maintaining professional spaces',
    surfaceFocus: 'offices, retail suites, restaurants, medical spaces, multi-family areas, and tenant improvements',
    proof: 'phased scheduling, after-hours options, clean job sites, and clear communication with managers',
    heroImage: '/hill-country-painting-austin-interior-hero.jpg',
    secondaryImage: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
} as const;

const serviceSpecificBenefits = {
  interior: ['Room-by-room sequencing for occupied homes', 'Clean wall, ceiling, trim, and door finishes', 'Color guidance for natural and artificial light', 'Furniture and flooring protection', 'Premium Sherwin-Williams and Benjamin Moore options'],
  exterior: ['Exterior prep matched to Texas heat and UV', 'Stucco, masonry, siding, and trim expertise', 'Caulking and primer recommendations before paint', 'Landscape and hardscape protection', 'HOA-friendly color documentation when needed'],
  cabinet: ['Durable cabinet enamel systems', 'Door and drawer labeling for clean reassembly', 'Smooth spray finish options', 'Kitchen, bath, island, and built-in refinishing', 'Lower disruption than full cabinet replacement'],
  commercial: ['After-hours and phased scheduling options', 'Office, retail, medical, and restaurant experience', 'Clean job sites for active businesses', 'Clear communication with owners and managers', 'Interior and exterior commercial maintenance planning']
} as const;

export function createServiceLocationConfig(
  serviceKey: keyof typeof serviceDefinitions,
  locationSlug: string
): ServiceLocationConfig {
  const service = serviceDefinitions[serviceKey];
  const location = locations[locationSlug];

  if (!location) {
    throw new Error(`Unknown service-location slug: ${locationSlug}`);
  }

  const primaryNeighborhood = location.neighborhoods[0] || location.name;
  const secondaryNeighborhood = location.neighborhoods[1] || location.name;
  const challenge = location.localInfo.paintChallenges[0] || 'Central Texas climate exposure';
  const homeStyle = location.localInfo.homeStyles[0] || 'Austin-area homes';

  return {
    service: {
      type: service.type,
      name: service.name,
      slug: service.slug
    },
    location,
    content: {
      heroSubtitle: `Premium ${service.name.toLowerCase()} for ${location.name} properties, planned around ${challenge.toLowerCase()} and the expectations of high-value Austin-area homes.`,
      introText: `Hill Country Painting provides ${service.name.toLowerCase()} in ${location.name} for homeowners and property managers who expect careful prep, orderly scheduling, and finishes that fit ${homeStyle.toLowerCase()}. We serve ${location.neighborhoods.slice(0, 4).join(', ')} and nearby communities with ${service.proof}.`,
      benefits: [
        `Dedicated ${location.name} and ${primaryNeighborhood} service coverage`,
        ...serviceSpecificBenefits[serviceKey],
        `Experience with ${location.localInfo.homeStyles.slice(0, 3).join(', ').toLowerCase()} properties`,
        `Planning for ${location.localInfo.climate.toLowerCase()}`,
        'Insured crew and 2-year workmanship warranty'
      ],
      processSteps: [
        { title: 'Local Consultation', description: `We review the ${location.name} property, access needs, surfaces, schedule, and neighborhood or HOA expectations before pricing the work.` },
        { title: 'Scope and Color Planning', description: `You receive a clear written scope with product recommendations and color guidance suited to ${location.name} homes.` },
        { title: 'Protection and Preparation', description: `We protect floors, landscaping, fixtures, and adjacent surfaces before preparing ${service.surfaceFocus}.` },
        { title: 'Professional Application', description: `Our crew applies premium materials with the method and finish standard appropriate for the surface and setting.` },
        { title: 'Detail Review', description: `Edges, coverage, sheen consistency, cleanup, and touchups are checked before the final walkthrough.` },
        { title: 'Final Walkthrough', description: `We walk the project with you, confirm completion details, and document warranty expectations.` }
      ],
      faqs: [
        { question: `Do you provide ${service.name.toLowerCase()} in ${location.name}?`, answer: `Yes. Hill Country Painting serves ${location.name}, including ${location.neighborhoods.slice(0, 5).join(', ')} and nearby Greater Austin communities.` },
        { question: `What makes ${location.name} painting projects different?`, answer: `${location.name} properties often involve ${location.localInfo.paintChallenges.join(', ').toLowerCase()}. We plan prep, products, and scheduling around those conditions before work begins.` },
        { question: `Can you help with HOA or neighborhood color expectations in ${location.name}?`, answer: `Yes. When a neighborhood requires color review, we can help document colors, sheens, and scope so the project is easier to submit and approve.` },
        { question: `How do you protect high-value ${location.name} properties during painting?`, answer: `We plan access, masking, floor and landscape protection, dust control, cleanup, and daily communication before production starts.` },
        { question: `How do I get an estimate for ${service.name.toLowerCase()} in ${location.name}?`, answer: 'Call (512) 240-2246 or request a consultation online. We will review the property, answer scope questions, and provide a detailed written estimate.' }
      ],
      testimonials: [
        { name: 'A. Homeowner', location: `${primaryNeighborhood}, ${location.name}`, rating: 5, text: `Hill Country Painting handled our ${service.name.toLowerCase()} project in ${location.name} with careful prep, clean communication, and excellent results.`, initials: 'AH' },
        { name: 'M. Resident', location: `${secondaryNeighborhood}, ${location.name}`, rating: 5, text: `Professional crew, tidy work areas, and a finish that fits the quality of homes in ${location.name}. We would hire them again.`, initials: 'MR' }
      ]
    },
    images: {
      hero: service.heroImage,
      heroAlt: `${service.name} in ${location.name}, Texas`,
      secondary: service.secondaryImage,
      secondaryAlt: `${location.name} ${service.name.toLowerCase()} project planning`
    }
  };
}
