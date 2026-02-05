export interface LocationData {
  name: string;
  slug: string;
  zipCodes: string[];
  coordinates: { lat: number; lng: number };
  neighborhoods: string[];
  highlights: string[];
  serviceAreaSlug: string;
  localInfo: {
    climate: string;
    homeStyles: string[];
    paintChallenges: string[];
  };
}

export const locations: Record<string, LocationData> = {
  'austin': {
    name: 'Austin',
    slug: 'austin',
    zipCodes: ['78701', '78702', '78703', '78704', '78705', '78721', '78722', '78723', '78724', '78725', '78726', '78727', '78728', '78729', '78730', '78731', '78732', '78733', '78734', '78735', '78736', '78737', '78738', '78739', '78741', '78742', '78744', '78745', '78746', '78747', '78748', '78749', '78750', '78751', '78752', '78753', '78754', '78756', '78757', '78758', '78759'],
    coordinates: { lat: 30.2672, lng: -97.7431 },
    neighborhoods: ['Allandale', 'Crestview', 'Tarrytown', 'Clarksville', 'Northwest Hills', 'Circle C Ranch'],
    highlights: [
      'Capital city expertise across all neighborhoods',
      'Historic district preservation specialists',
      'Modern condo and high-rise experience',
      'Austin aesthetic understanding',
      'Tech industry flexible scheduling',
      'Central Austin traffic navigation'
    ],
    serviceAreaSlug: 'austin',
    localInfo: {
      climate: 'Variable microclimate zones from elevated limestone terrain to Blackland prairie',
      homeStyles: ['Historic', 'Modern', 'Eclectic Austin', 'High-rise condo', 'Bungalow'],
      paintChallenges: ['Historic preservation', 'Varied architectural styles', 'Urban environment']
    }
  },
  'tarrytown': {
    name: 'Tarrytown',
    slug: 'tarrytown',
    zipCodes: ['78703', '78731'],
    coordinates: { lat: 30.2969, lng: -97.7717 },
    neighborhoods: ['Tarrytown', 'Old Enfield', 'Bryker Woods', 'Pemberton Heights', 'Clarksville'],
    highlights: [
      'Historic district preservation experts',
      'Luxury home specialists',
      'Architectural detail craftmanship',
      'Old Austin charm preservation',
      'High-end finishes and materials',
      'Eanes ISD area expertise'
    ],
    serviceAreaSlug: 'tarrytown',
    localInfo: {
      climate: 'Central Austin microclimate with mature tree canopy',
      homeStyles: ['Historic mansion', 'Old Austin traditional', 'Mediterranean revival', 'Contemporary estate'],
      paintChallenges: ['Historic preservation requirements', 'Architectural complexity', 'Mature landscaping protection']
    }
  },
  'northwest-hills': {
    name: 'Northwest Hills',
    slug: 'northwest-hills',
    zipCodes: ['78731', '78759'],
    coordinates: { lat: 30.3647, lng: -97.7614 },
    neighborhoods: ['Northwest Hills', 'Allandale', 'Crestview', 'Quail Creek', 'Triangle North Lamar'],
    highlights: [
      'Established neighborhood expertise',
      'Mid-century modern specialists',
      'Austin ISD school coordination',
      'Quality finishes for mature homes',
      'Tech district scheduling flexibility',
      'North Central Austin coverage'
    ],
    serviceAreaSlug: 'northwest-hills',
    localInfo: {
      climate: 'North Austin elevation with moderate terrain',
      homeStyles: ['Mid-century modern', 'Ranch style', 'Contemporary', 'Traditional'],
      paintChallenges: ['Mid-century architectural details', 'Mature neighborhoods', 'Varied home styles']
    }
  },
  'west-lake-hills': {
    name: 'West Lake Hills',
    slug: 'west-lake-hills',
    zipCodes: ['78746'],
    coordinates: { lat: 30.2977, lng: -97.8017 },
    neighborhoods: ['Westlake', 'Rob Roy', 'Davenport Ranch', 'Eanes', 'Lost Creek', 'Barton Creek', 'Spanish Oaks', 'Rollingwood', 'Lake Austin', 'Bee Cave Road'],
    highlights: [
      'Luxury home specialists',
      'Eanes ISD community expertise',
      'Elevated terrain estate experience',
      'Premium finish and materials',
      'Privacy-conscious service',
      'High-end HOA compliance'
    ],
    serviceAreaSlug: 'west-lake-hills',
    localInfo: {
      climate: 'Elevated limestone terrain with dramatic elevation changes',
      homeStyles: ['Luxury estate', 'Texas limestone modern', 'Mediterranean', 'Contemporary'],
      paintChallenges: ['Complex architecture', 'Premium material requirements', 'Steep terrain access']
    }
  },
  'west-lake-highlands': {
    name: 'West Lake Highlands',
    slug: 'west-lake-highlands',
    zipCodes: ['78746', '78733'],
    coordinates: { lat: 30.3278, lng: -97.8283 },
    neighborhoods: ['West Lake Highlands', 'Lake Pointe', 'Hill Country', 'Westlake Drive', 'Scenic Brook'],
    highlights: [
      'Elevated Hill Country homes',
      'Lake Travis proximity expertise',
      'Quality construction finishes',
      'Scenic property specialists',
      'Eanes and Lake Travis ISD areas',
      'West Austin corridor coverage'
    ],
    serviceAreaSlug: 'west-lake-highlands',
    localInfo: {
      climate: 'Hill Country elevation with Lake Travis influence',
      homeStyles: ['Hill Country estate', 'Contemporary', 'Texas modern', 'Lakefront'],
      paintChallenges: ['Elevation changes', 'Lake climate exposure', 'Quality finish requirements']
    }
  },
  'lakeway': {
    name: 'Lakeway',
    slug: 'lakeway',
    zipCodes: ['78734', '78738'],
    coordinates: { lat: 30.3630, lng: -97.9781 },
    neighborhoods: ['Lakeway', 'Rough Hollow', 'The Hills', 'Serene Hills', 'Falconhead', 'Bee Cave'],
    highlights: [
      'Lake Travis area specialists',
      'Resort community expertise',
      'Waterfront property experience',
      'HOA compliance knowledge',
      'Hill Country aesthetic mastery',
      'Quality finishes for upscale homes'
    ],
    serviceAreaSlug: 'lakeway',
    localInfo: {
      climate: 'Lake Travis microclimate with increased humidity and wind exposure',
      homeStyles: ['Lakefront estate', 'Hill Country contemporary', 'Mediterranean', 'Texas modern'],
      paintChallenges: ['Lake moisture exposure', 'Wind and weather', 'Quality material requirements']
    }
  },
  'cedar-park': {
    name: 'Cedar Park',
    slug: 'cedar-park',
    zipCodes: ['78613', '78641'],
    coordinates: { lat: 30.5052, lng: -97.8203 },
    neighborhoods: ['Avery Ranch', 'Brushy Creek', 'Twin Creeks', 'Anderson Mill', 'Cypress Canyon', 'Vista Ridge'],
    highlights: [
      'Fast-growing community expertise',
      'New construction specialists',
      'Family-friendly scheduling',
      'HOA compliance knowledge',
      'Northwest Austin corridor',
      'Cedar Park community expertise'
    ],
    serviceAreaSlug: 'cedar-park',
    localInfo: {
      climate: 'North Austin climate with variable terrain',
      homeStyles: ['Modern suburban', 'Contemporary', 'Texas ranch', 'New construction'],
      paintChallenges: ['New development standards', 'HOA requirements', 'Growing community needs']
    }
  },
  'hutto': {
    name: 'Hutto',
    slug: 'hutto',
    zipCodes: ['78634'],
    coordinates: { lat: 30.5427, lng: -97.5467 },
    neighborhoods: ['Star Ranch', 'Brushy Creek', 'Hutto Meadows', 'Emory Farms', 'Cottonwood Creek'],
    highlights: [
      'Rapid growth area specialists',
      'New construction expertise',
      'Family community scheduling',
      'Tech corridor coverage',
      'Modern home finishes',
      'Northeast metro access'
    ],
    serviceAreaSlug: 'hutto',
    localInfo: {
      climate: 'Northeast Austin climate with prairie influence',
      homeStyles: ['Modern suburban', 'New construction', 'Contemporary', 'Texas ranch'],
      paintChallenges: ['New development quality', 'Rapid growth coordination', 'Modern finish standards']
    }
  }
};

export const getLocation = (slug: string): LocationData | undefined => {
  return locations[slug];
};

export const getAllLocationSlugs = (): string[] => {
  return Object.keys(locations);
};
