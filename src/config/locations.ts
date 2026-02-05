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
  'round-rock': {
    name: 'Round Rock',
    slug: 'round-rock',
    zipCodes: ['78664', '78665', '78681'],
    coordinates: { lat: 30.5083, lng: -97.6789 },
    neighborhoods: ['Avery Ranch', 'Teravista', 'Paloma Lake', 'Stone Canyon', 'Forest Creek', 'Cat Hollow', 'Brushy Creek', 'Sendero Springs', 'Walsh Ranch', 'Vista Oaks'],
    highlights: [
      'Dell Technologies workforce scheduling flexibility',
      'Dell Diamond event-day logistics management',
      'HOA compliance expertise for Round Rock communities',
      'Experience with newer construction and established homes',
      'Timely communication with Round Rock residents',
      'Knowledge of local Round Rock building codes'
    ],
    serviceAreaSlug: 'round-rock-georgetown',
    localInfo: {
      climate: 'Hot summers with intense UV exposure requiring durable exterior coatings',
      homeStyles: ['Modern suburban', 'Texas ranch', 'Mediterranean', 'Contemporary'],
      paintChallenges: ['Sun damage', 'Limestone dust', 'HOA color restrictions']
    }
  },
  'georgetown': {
    name: 'Georgetown',
    slug: 'georgetown',
    zipCodes: ['78626', '78628', '78633'],
    coordinates: { lat: 30.6333, lng: -97.6778 },
    neighborhoods: ['Sun City', 'Wolf Ranch', 'Cimarron Hills', 'Berry Creek', 'Teravista', 'Serenada', 'Georgetown Village', 'The Oaks at San Gabriel', 'Westlake Woods', 'Fountainwood'],
    highlights: [
      'Historic Georgetown Square preservation expertise',
      'Sun City 55+ community experience',
      'Victorian and heritage home specialists',
      'Southwestern University area familiarity',
      'Georgetown HOA compliance knowledge',
      'Local landmark color matching'
    ],
    serviceAreaSlug: 'round-rock-georgetown',
    localInfo: {
      climate: 'Similar to Round Rock with limestone terrain affecting exterior surfaces',
      homeStyles: ['Victorian', 'Historic', 'Texas Hill Country', 'Modern suburban'],
      paintChallenges: ['Historic preservation requirements', 'Limestone-based soil affecting foundations']
    }
  },
  'cedar-park': {
    name: 'Cedar Park',
    slug: 'cedar-park',
    zipCodes: ['78613', '78641'],
    coordinates: { lat: 30.5052, lng: -97.8203 },
    neighborhoods: ['Buttercup Creek', 'Twin Creeks', 'Anderson Mill', 'Ranch at Brushy Creek', 'Whitestone Oaks', 'Cypress Canyon', 'Silverado West', 'Carriage Hills', 'Cedar Park Town Center', 'Lakeline'],
    highlights: [
      'Cedar Park Center event coordination',
      'Family-friendly neighborhood experience',
      'Modern subdivision specialists',
      'Quick turnaround for busy families',
      'Anderson Mill Road corridor coverage',
      'Lakeline area expertise'
    ],
    serviceAreaSlug: 'cedar-park',
    localInfo: {
      climate: 'Hill Country terrain with variable elevations affecting sun exposure',
      homeStyles: ['Modern suburban', 'Texas contemporary', 'Traditional'],
      paintChallenges: ['Diverse sun exposure due to terrain', 'Cedar pollen considerations']
    }
  },
  'pflugerville': {
    name: 'Pflugerville',
    slug: 'pflugerville',
    zipCodes: ['78660', '78691'],
    coordinates: { lat: 30.4393, lng: -97.62 },
    neighborhoods: ['Blackhawk', 'Falcon Pointe', 'Highland Park', 'Meadows of Blackhawk', 'Avalon', 'Cambridge Estates', 'Bohls Place', 'Commons at Rowe Lane', 'Spring Trails', 'Sorento'],
    highlights: [
      'Pflugerville ISD school schedule coordination',
      'Samsung corridor workforce flexibility',
      'Growing community specialist',
      'New construction and established homes',
      'Wells Branch extension coverage',
      'SH-130 corridor access'
    ],
    serviceAreaSlug: 'pflugerville-wells-branch',
    localInfo: {
      climate: 'Blackland prairie with clay soil affecting exterior stability',
      homeStyles: ['Modern suburban', 'Texas ranch', 'Contemporary'],
      paintChallenges: ['Clay soil movement', 'Rapid development area considerations']
    }
  },
  'leander': {
    name: 'Leander',
    slug: 'leander',
    zipCodes: ['78641', '78645', '78646'],
    coordinates: { lat: 30.5788, lng: -97.853 },
    neighborhoods: ['Crystal Falls', 'Mason Hills', 'Sarita Valley', 'Travisso', 'Summerlyn', 'Cold Springs', 'Benbrook Ranch', 'Block House Creek', 'North Creek', 'Reagan\'s Overlook'],
    highlights: [
      'Fastest growing city expertise',
      'New construction painting specialists',
      'Crystal Falls community experience',
      'Austin commuter scheduling flexibility',
      'Hill Country views preservation',
      'MetroRail corridor coverage'
    ],
    serviceAreaSlug: 'leander',
    localInfo: {
      climate: 'Higher elevation Hill Country with increased wind exposure',
      homeStyles: ['Hill Country modern', 'Texas contemporary', 'New construction'],
      paintChallenges: ['Wind exposure', 'Limestone terrain', 'Rapid sun intensity changes']
    }
  },
  'taylor': {
    name: 'Taylor',
    slug: 'taylor',
    zipCodes: ['76574'],
    coordinates: { lat: 30.5709, lng: -97.4092 },
    neighborhoods: ['Downtown Taylor', 'Murphy Park', 'Blackland Prairie', 'Taylor Heights', 'Heritage Square', 'Bull Branch', 'Mustang Creek', 'North Taylor', 'South Taylor', 'Taylor Industrial District'],
    highlights: [
      'Samsung mega-factory workforce support',
      'Historic downtown preservation',
      'Small-town values with big-city quality',
      'Agricultural community understanding',
      'Growing tech corridor coverage',
      'East Williamson County specialist'
    ],
    serviceAreaSlug: 'taylor-hutto',
    localInfo: {
      climate: 'Blackland prairie with extreme temperature variations',
      homeStyles: ['Historic Texas', 'Farmhouse', 'Modern developments'],
      paintChallenges: ['Historic preservation', 'Agricultural dust', 'Temperature extremes']
    }
  },
  'hutto': {
    name: 'Hutto',
    slug: 'hutto',
    zipCodes: ['78634'],
    coordinates: { lat: 30.5427, lng: -97.5467 },
    neighborhoods: ['Star Ranch', 'Hutto Parke', 'Legends of Hutto', 'Creek Bend', 'Enclave at Brushy Creek', 'Emory Farms', 'Riverwalk', 'Huttoparke', 'Lakeside Estates', 'Heritage on San Gabriel'],
    highlights: [
      'Hippo pride community connection',
      'Rapidly growing community specialist',
      'New construction expertise',
      'Family-oriented scheduling',
      'Hutto ISD coordination',
      'SH-130 corridor access'
    ],
    serviceAreaSlug: 'taylor-hutto',
    localInfo: {
      climate: 'Similar to Taylor with Blackland prairie conditions',
      homeStyles: ['Modern suburban', 'New construction', 'Texas traditional'],
      paintChallenges: ['New construction settling', 'Rapid growth area considerations']
    }
  },
  'austin': {
    name: 'Austin',
    slug: 'austin',
    zipCodes: ['78701', '78702', '78703', '78704', '78705', '78721', '78722', '78723', '78724', '78725', '78726', '78727', '78728', '78729', '78730', '78731', '78732', '78733', '78734', '78735', '78736', '78737', '78738', '78739', '78741', '78742', '78744', '78745', '78746', '78747', '78748', '78749', '78750', '78751', '78752', '78753', '78754', '78756', '78757', '78758', '78759'],
    coordinates: { lat: 30.2672, lng: -97.7431 },
    neighborhoods: ['Downtown Austin', 'Hyde Park', 'Mueller', 'East Austin', 'South Austin', 'North Austin', 'Zilker', 'Barton Hills', 'Allandale', 'Crestview', 'Tarrytown', 'Clarksville', 'Travis Heights', 'Bouldin Creek'],
    highlights: [
      'Capital city expertise across all neighborhoods',
      'Historic district preservation specialists',
      'Modern condo and high-rise experience',
      'Austin weird aesthetic understanding',
      'Tech industry flexible scheduling',
      'Central Austin traffic navigation'
    ],
    serviceAreaSlug: 'austin',
    localInfo: {
      climate: 'Variable microclimate zones from Hill Country to Blackland prairie',
      homeStyles: ['Historic', 'Modern', 'Eclectic Austin', 'High-rise condo', 'Bungalow'],
      paintChallenges: ['Historic preservation', 'Varied architectural styles', 'Urban environment']
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
      'Hill Country estate experience',
      'Premium finish and materials',
      'Privacy-conscious service',
      'High-end HOA compliance'
    ],
    serviceAreaSlug: 'west-lake-hills',
    localInfo: {
      climate: 'Hill Country terrain with dramatic elevation changes',
      homeStyles: ['Luxury estate', 'Hill Country modern', 'Mediterranean', 'Contemporary'],
      paintChallenges: ['Complex architecture', 'Premium material requirements', 'Steep terrain access']
    }
  }
};

export const getLocation = (slug: string): LocationData | undefined => {
  return locations[slug];
};

export const getAllLocationSlugs = (): string[] => {
  return Object.keys(locations);
};
