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
  'leander': {
    name: 'Leander',
    slug: 'leander',
    zipCodes: ['78641', '78646'],
    coordinates: { lat: 30.5787, lng: -97.8531 },
    neighborhoods: ['Crystal Falls', 'Mason Hills', 'Travisso', 'Devine Lake', 'Bryson'],
    highlights: [
      'Master-planned community specialists',
      'New construction upgrade experts',
      'HOA color compliance knowledge',
      'Fast-growing suburb expertise',
      'Central Texas climate coatings',
      'Flexible scheduling for families'
    ],
    serviceAreaSlug: 'leander',
    localInfo: {
      climate: 'Central Texas limestone terrain with intense summer heat and seasonal temperature swings',
      homeStyles: ['Master-planned new construction', 'Hill Country contemporary', 'Traditional family home', 'Craftsman'],
      paintChallenges: ['Intense UV and heat exposure', 'New construction builder-grade upgrades', 'HOA color requirements']
    }
  },
  'georgetown': {
    name: 'Georgetown',
    slug: 'georgetown',
    zipCodes: ['78626', '78628', '78633'],
    coordinates: { lat: 30.6328, lng: -97.6774 },
    neighborhoods: ['Sun City Georgetown', 'Berry Creek', 'Teravista', 'Wolf Ranch', 'Georgetown Square'],
    highlights: [
      'Historic downtown preservation experts',
      'Sun City Del Webb specialists',
      'Williamson County coverage',
      'Victorian-era color expertise',
      'Active adult community experience',
      'Master-planned HOA compliance'
    ],
    serviceAreaSlug: 'georgetown',
    localInfo: {
      climate: 'North of Austin with hot summers, limestone terrain, and open prairie wind exposure',
      homeStyles: ['Victorian historic', 'Del Webb active adult', 'Hill Country contemporary', 'Master-planned traditional'],
      paintChallenges: ['Historic preservation requirements', 'Wind exposure from open terrain', 'High UV in North Texas']
    }
  },
  'round-rock': {
    name: 'Round Rock',
    slug: 'round-rock',
    zipCodes: ['78664', '78665', '78681'],
    coordinates: { lat: 30.5083, lng: -97.6789 },
    neighborhoods: ['Forest Creek', 'Mayfield Ranch', 'Brushy Creek', 'Round Rock Ranch', 'Vista Oaks'],
    highlights: [
      'Established neighborhood expertise',
      'New construction specialists',
      'Dell/tech campus scheduling',
      'Diverse home style knowledge',
      'Quality finishes for all budgets',
      'Reliable Round Rock scheduling'
    ],
    serviceAreaSlug: 'round-rock',
    localInfo: {
      climate: 'Central Texas with hot summers, Blackland prairie soils, and limestone outcrops',
      homeStyles: ['Established ranch', 'Golf community home', 'Master-planned contemporary', 'Traditional family home'],
      paintChallenges: ['Varied age of housing stock', 'Intense heat and UV exposure', 'Busy suburban family scheduling']
    }
  },
  'cedar-park': {
    name: 'Cedar Park',
    slug: 'cedar-park',
    zipCodes: ['78613'],
    coordinates: { lat: 30.5052, lng: -97.8203 },
    neighborhoods: ['Ranch at Brushy Creek', 'Buttercup Creek', 'Lakeline', 'Avery Ranch', 'Twin Creeks'],
    highlights: [
      'Cedar Park community specialists',
      'Master-planned HOA expertise',
      'Growing suburb coverage',
      'Quality new construction upgrades',
      'Heat-resistant exterior coatings',
      'Family-flexible scheduling'
    ],
    serviceAreaSlug: 'cedar-park',
    localInfo: {
      climate: 'Northwest of Austin with intense Central Texas heat and limestone terrain',
      homeStyles: ['Master-planned subdivision', 'Golf community', 'Contemporary family home', 'Craftsman'],
      paintChallenges: ['HOA color compliance across many communities', 'Intense UV exposure', 'New construction upgrades']
    }
  },
  'north-austin': {
    name: 'North Austin',
    slug: 'north-austin',
    zipCodes: ['78750', '78758', '78727', '78729'],
    coordinates: { lat: 30.4070, lng: -97.7200 },
    neighborhoods: ['The Domain Area', 'Balcones', 'Milwood', 'Jollyville', 'Anderson Mill'],
    highlights: [
      'Tech corridor scheduling experts',
      'Mid-century modern specialists',
      'Urban condo experience',
      'North Austin coverage',
      'Quality finishes for every style',
      'Flexible tech-worker scheduling'
    ],
    serviceAreaSlug: 'north-austin',
    localInfo: {
      climate: 'North Austin urban heat island with mixed terrain from limestone to Blackland prairie',
      homeStyles: ['Mid-century modern', 'Ranch style', 'Urban condo', 'Contemporary townhome'],
      paintChallenges: ['Varied architectural eras', 'Urban heat retention', 'Scheduling around tech work schedules']
    }
  }
};

export const getLocation = (slug: string): LocationData | undefined => {
  return locations[slug];
};

export const getAllLocationSlugs = (): string[] => {
  return Object.keys(locations);
};
