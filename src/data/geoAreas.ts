export interface Neighborhood {
  name: string;
  slug: string;
  description: string;
}

export interface HubArea {
  name: string;
  slug: string;
  zipCode?: string;
  description: string;
  specialization: string;
  heroImage: string;
  neighborhoods: Neighborhood[];
  serviceLocationSlug?: string;
}

export const geoAreas: HubArea[] = [
  {
    name: 'Steiner Ranch',
    slug: 'steiner-ranch-78732',
    zipCode: '78732',
    description: 'Expert painting services for Steiner Ranch\'s distinctive Hill Country homes. Clean prep. Crisp lines. Reliable schedules.',
    specialization: 'Steiner Ranch homes require specialized knowledge of Hill Country architecture, HOA color requirements, and quality finishes that complement the area\'s natural beauty and architectural standards.',
    heroImage: '/hill-country-painting-austin-homepage-hero.jpg',
    neighborhoods: [
      {
        name: 'Rob Roy',
        slug: 'rob-roy',
        description: 'Professional painting services for Rob Roy homes in the Steiner Ranch area.'
      },
      {
        name: 'Davenport Ranch',
        slug: 'davenport-ranch',
        description: 'Expert painting for Davenport Ranch homes in the 78732 Steiner Ranch corridor. Custom finishes for Hill Country architecture with HOA compliance expertise.'
      },
      {
        name: 'River Place',
        slug: 'river-place',
        description: 'Professional painting services for River Place community homes.'
      },
      {
        name: 'Barclay Place',
        slug: 'barclay-place',
        description: 'Trusted painting contractors serving Barclay Place neighborhoods.'
      },
      {
        name: 'Chaparral / Cliffside',
        slug: 'chaparral-cliffside',
        description: 'Specialized painting for Chaparral and Cliffside homes in Steiner Ranch.'
      }
    ]
  },
  {
    name: 'West Lake Hills & Rollingwood',
    slug: 'west-lake-hills-and-rollingwood',
    serviceLocationSlug: 'west-lake-highlands',
    description: 'Professional painting services for West Lake Hills and Rollingwood properties. Expert craftsmanship for quality homes.',
    specialization: 'West Lake Hills and Rollingwood homes require high standards in finish quality, quality materials, and meticulous attention to architectural details that define these established communities.',
    heroImage: '/kitchen-transformation-west-lake-hills.jpg',
    neighborhoods: [
      {
        name: 'Rollingwood',
        slug: 'rollingwood',
        description: 'Professional painting services for Rollingwood residences.'
      },
      {
        name: 'West Lake Hills',
        slug: 'west-lake-hills',
        description: 'Expert painting for West Lake Hills core area homes.'
      },
      {
        name: 'Spanish Oaks',
        slug: 'spanish-oaks',
        description: 'Professional painting services for Spanish Oaks estates.'
      },
      {
        name: 'Davenport Ranch',
        slug: 'davenport-ranch-west',
        description: 'Professional painting for Davenport Ranch West near 360 and Westlake. Quality finishes for established homes with mature landscaping and sophisticated architectural details.'
      },
      {
        name: 'Lake Austin Hills',
        slug: 'lake-austin-hills',
        description: 'Professional painting for Lake Austin Hills residences.'
      }
    ]
  },
  {
    name: 'Barton Creek',
    slug: 'barton-creek',
    description: 'Professional painting services for Barton Creek homes. Careful craftsmanship for quality properties.',
    specialization: 'Barton Creek homes require expert knowledge of quality finishes, professional materials, and the precision needed to maintain architectural standards.',
    heroImage: '/classic-home-exterior.jpg',
    neighborhoods: [
      {
        name: 'Barton Creek Country Club Estates',
        slug: 'barton-creek-country-club-estates',
        description: 'Professional painting for Barton Creek Country Club Estates homes.'
      },
      {
        name: 'Fazio Foothills / Cliffside',
        slug: 'fazio-foothills-cliffside',
        description: 'Professional painting services for Fazio Foothills and Cliffside properties.'
      },
      {
        name: 'Spyglass / Barton\'s Bluff',
        slug: 'spyglass-bartons-bluff',
        description: 'Expert painting for Spyglass and Barton\'s Bluff residences.'
      },
      {
        name: 'Lake Austin West Estates',
        slug: 'lake-austin-west-estates',
        description: 'Professional painting services for Lake Austin West Estates.'
      },
      {
        name: 'Barton Creek West',
        slug: 'barton-creek-west',
        description: 'Professional painting for Barton Creek West homes.'
      }
    ]
  },
  {
    name: 'Tarrytown',
    slug: 'tarrytown',
    serviceLocationSlug: 'tarrytown',
    description: 'Specialized painting for Tarrytown\'s historic homes. Honoring architectural heritage with careful techniques.',
    specialization: 'Tarrytown and surrounding historic neighborhoods require specialized techniques for preserving period details, meeting strict HOA standards, and honoring the architectural character that defines these areas.',
    heroImage: '/exterior-tarrytown.jpg',
    neighborhoods: [
      {
        name: 'Tarrytown',
        slug: 'tarrytown',
        description: 'Historic home painting in the heart of Tarrytown.'
      },
      {
        name: 'Old Enfield',
        slug: 'old-enfield',
        description: 'Preservation painting for Old Enfield\'s 1920s-1940s homes along Enfield Road. Expert in Tudor, Colonial Revival, and Mediterranean architecture with strict attention to historical accuracy.'
      },
      {
        name: 'Pemberton Heights',
        slug: 'pemberton-heights',
        description: 'Professional painting for Pemberton Heights homes north of 29th Street. Specialized in quality finishes for historic homes with extensive millwork, custom trim, and architectural details.'
      },
      {
        name: 'Bryker Woods',
        slug: 'bryker-woods',
        description: 'Professional painting for Bryker Woods family homes and bungalows. Expert in Ranch-style and mid-century modern architecture with focus on clean lines and period-appropriate color schemes.'
      },
      {
        name: 'Clarksville',
        slug: 'clarksville',
        description: 'Historic preservation painting for Clarksville\'s 1870s-era cottages and bungalows. Specialized in period-appropriate colors and maintaining architectural authenticity in Austin\'s oldest freedman town.'
      }
    ]
  },
  {
    name: 'Downtown Austin',
    slug: 'downtown-austin-luxury',
    zipCode: '78701',
    description: 'Professional painting services for downtown residences. Urban expertise with precision scheduling.',
    specialization: 'Downtown properties require coordinated scheduling, building compliance expertise, quality finishes for modern architecture, and minimal disruption to residents and neighbors in dense urban environments.',
    heroImage: '/living-room-update-central-austin.jpg',
    neighborhoods: [
      {
        name: 'Downtown Core / 78701',
        slug: 'downtown-core-78701',
        description: 'High-rise and condo painting in downtown Austin core.'
      },
      {
        name: 'Rainey Street District',
        slug: 'rainey-street-district',
        description: 'Modern painting services for Rainey Street residences.'
      },
      {
        name: 'Old West Austin',
        slug: 'old-west-austin-central',
        description: 'Historic painting for central Old West Austin between downtown and MoPac. Specialized in Victorian, Craftsman, and early 20th century homes with original architectural features and custom millwork.'
      },
      {
        name: 'Zilker',
        slug: 'zilker',
        description: 'Professional painting for Zilker area residences.'
      },
      {
        name: 'Clarksville West',
        slug: 'clarksville-west',
        description: 'Expert painting for western Clarksville homes bordering MoPac. Modern renovations and contemporary updates while respecting the neighborhood\'s historic character and strict preservation standards.'
      }
    ]
  },
  {
    name: 'Allandale / Northwest Hills',
    slug: 'allandale-and-northwest-hills',
    serviceLocationSlug: 'northwest-hills',
    description: 'Trusted painting services for Allandale and Northwest Hills\' distinctive homes. Quality work in established neighborhoods.',
    specialization: 'These established neighborhoods feature diverse architectural styles from mid-century modern to contemporary, requiring versatile expertise and respect for each home\'s unique character and community standards.',
    heroImage: '/hill-country-painting-austin-interior-hero.jpg',
    neighborhoods: [
      {
        name: 'Allandale',
        slug: 'allandale',
        description: 'Quality painting services for Allandale homes.'
      },
      {
        name: 'Northwest Hills',
        slug: 'northwest-hills',
        description: 'Professional painting for Northwest Hills residences.'
      },
      {
        name: 'Crestview',
        slug: 'crestview',
        description: 'Expert painting for Crestview neighborhood homes.'
      },
      {
        name: 'Quail Creek',
        slug: 'quail-creek',
        description: 'Professional painting for Quail Creek area properties.'
      },
      {
        name: 'Triangle / North Lamar',
        slug: 'triangle-north-lamar',
        description: 'Modern painting services for Triangle and North Lamar areas.'
      }
    ]
  },
  {
    name: 'Lakeway / Bee Cave / Lake Travis',
    slug: 'lakeway-bee-cave-and-lake-travis',
    serviceLocationSlug: 'lakeway',
    description: 'Professional painting for Lake Travis area homes. Specialized expertise for lakefront properties and Hill Country homes.',
    specialization: 'Lake Travis area homes face unique challenges including intense sun exposure, humidity from the lake, and architectural standards that require specialized knowledge and high-performance materials.',
    heroImage: '/traditional-home-exterior.jpg',
    neighborhoods: [
      {
        name: 'Lakeway',
        slug: 'lakeway',
        description: 'Lakefront painting services for Lakeway residences.'
      },
      {
        name: 'Rough Hollow',
        slug: 'rough-hollow',
        description: 'Professional painting for Rough Hollow community homes.'
      },
      {
        name: 'The Peninsula at Rough Hollow',
        slug: 'the-peninsula-at-rough-hollow',
        description: 'Expert painting for The Peninsula at Rough Hollow homes.'
      },
      {
        name: 'Serenity Hills',
        slug: 'serenity-hills',
        description: 'Professional painting for Serenity Hills properties.'
      },
      {
        name: 'Bee Cave',
        slug: 'bee-cave',
        description: 'Quality painting services for Bee Cave area homes.'
      }
    ]
  },
  {
    name: 'Circle C Ranch / Southwest Austin',
    slug: 'circle-c-ranch-and-southwest-austin',
    description: 'Professional painting services for Circle C Ranch and Southwest Austin communities. Quality craftsmanship you can trust.',
    specialization: 'Southwest Austin communities combine family-friendly neighborhoods with diverse architectural styles, requiring versatile expertise and understanding of HOA requirements across different subdivisions.',
    heroImage: '/custom-kitchen-painting.jpg',
    neighborhoods: [
      {
        name: 'Circle C Ranch',
        slug: 'circle-c-ranch',
        description: 'Professional painting for Circle C Ranch homes.'
      },
      {
        name: 'Grey Rock',
        slug: 'grey-rock',
        description: 'Quality painting services for Grey Rock neighborhood.'
      },
      {
        name: 'Lost Creek',
        slug: 'lost-creek',
        description: 'Expert painting for Lost Creek area residences.'
      },
      {
        name: 'Shady Hollow',
        slug: 'shady-hollow',
        description: 'Trusted painting contractors for Shady Hollow homes.'
      },
      {
        name: 'West Oak Hill',
        slug: 'west-oak-hill',
        description: 'Professional painting for West Oak Hill properties.'
      }
    ]
  },
  {
    name: 'Pemberton Heights / Old West Austin',
    slug: 'pemberton-heights-and-old-west-austin-historic-luxury',
    serviceLocationSlug: 'tarrytown',
    description: 'Specialized services for Pemberton Heights and Old West Austin\'s historic homes. Preserving architectural heritage with careful craftsmanship.',
    specialization: 'These historic neighborhoods require careful craftsmanship, period-appropriate techniques, strict adherence to preservation standards, and quality finishes that respect architectural heritage.',
    heroImage: '/hill-country-painting-austin-homepage-hero.jpg',
    neighborhoods: [
      {
        name: 'Pemberton Heights South',
        slug: 'pemberton-heights-south',
        description: 'Professional painting for southern Pemberton Heights properties near Westover. Quality finishes for established homes featuring Colonial Revival, Georgian, and Mediterranean architecture with meticulous preservation requirements.'
      },
      {
        name: 'Old Enfield West',
        slug: 'old-enfield-west',
        description: 'Historic preservation for western Old Enfield homes near Windsor Road. Expert in architectural styles including Spanish Colonial Revival, French Eclectic, and English Tudor with extensive custom detailing.'
      },
      {
        name: 'Bryker Woods West',
        slug: 'bryker-woods-west',
        description: 'Professional painting for western Bryker Woods homes near MoPac. Specialized in post-war architecture, updated mid-century homes, and modern renovations while maintaining neighborhood character.'
      },
      {
        name: 'Clarksville Historic District',
        slug: 'clarksville-historic',
        description: 'Preservation-certified painting for Clarksville Historic District properties. Expert in maintaining historic integrity for National Register homes with documentation requirements and period restoration techniques.'
      },
      {
        name: 'Old West Austin Historic',
        slug: 'old-west-austin-historic',
        description: 'Professional preservation painting for Old West Austin\'s most significant historic properties. Specialized in landmark homes requiring documented restoration work, historically accurate paint analysis, and certified preservation techniques.'
      }
    ]
  },
  {
    name: 'Leander',
    slug: 'leander',
    zipCode: '78641',
    description: 'Professional painting services for Leander\'s fast-growing master-planned communities and Hill Country neighborhoods. Quality craftsmanship for new construction and established homes.',
    specialization: 'Leander\'s rapid growth brings a mix of new construction and established neighborhoods, requiring expertise in both fresh builds and repaints. HOA color compliance, builder-grade upgrades, and durable finishes suited to the Central Texas climate are our specialty here.',
    heroImage: '/hill-country-painting-austin-homepage-hero.jpg',
    serviceLocationSlug: 'leander',
    neighborhoods: [
      {
        name: 'Crystal Falls',
        slug: 'crystal-falls',
        description: 'Professional painting for Crystal Falls homes in Leander. Expert finishes for Hill Country architecture with HOA color compliance and quality craftsmanship throughout this premier master-planned community.'
      },
      {
        name: 'Mason Hills',
        slug: 'mason-hills',
        description: 'Quality painting services for Mason Hills residents in Leander. Trusted exterior and interior painting for established homes with attention to detail and reliable scheduling.'
      },
      {
        name: 'Travisso',
        slug: 'travisso',
        description: 'Expert painting for Travisso\'s luxury Hill Country homes. Specialized in high-end finishes, custom color matching, and HOA-compliant palettes for Leander\'s premier hilltop community.'
      },
      {
        name: 'Devine Lake',
        slug: 'devine-lake',
        description: 'Professional painting services for Devine Lake neighborhood homes. Quality craftsmanship for newer construction with durable finishes designed for Central Texas conditions.'
      },
      {
        name: 'Bryson',
        slug: 'bryson',
        description: 'Trusted painting contractors for Bryson community homes in Leander. Expert interior and exterior painting for this growing master-planned neighborhood with flexible scheduling for busy families.'
      }
    ]
  },
  {
    name: 'Georgetown',
    slug: 'georgetown',
    zipCode: '78626',
    description: 'Expert painting services for Georgetown\'s diverse communities from the historic downtown square to Sun City\'s active adult neighborhoods. Quality finishes for every home style.',
    specialization: 'Georgetown\'s unique blend of historic Victorian architecture downtown, master-planned communities, and Hill Country estates demands versatile expertise. We bring knowledge of preservation painting, HOA requirements, and high-performance materials suited to Williamson County\'s climate.',
    heroImage: '/hill-country-painting-austin-homepage-hero.jpg',
    serviceLocationSlug: 'georgetown',
    neighborhoods: [
      {
        name: 'Sun City Georgetown',
        slug: 'sun-city',
        description: 'Specialized painting services for Sun City Georgetown\'s active adult community. Expert in Del Webb construction, HOA color guidelines, and quality finishes for the area\'s distinct home styles.'
      },
      {
        name: 'Berry Creek',
        slug: 'berry-creek',
        description: 'Professional painting for Berry Creek homes in Georgetown. Quality craftsmanship for golf community residences with attention to architectural details and HOA compliance.'
      },
      {
        name: 'Teravista',
        slug: 'teravista',
        description: 'Expert painting for Teravista\'s master-planned community homes. Trusted exterior and interior painting with HOA color compliance and durable finishes for Central Texas weather.'
      },
      {
        name: 'Wolf Ranch',
        slug: 'wolf-ranch',
        description: 'Professional painting services for Wolf Ranch neighborhood homes in Georgetown. Quality craftsmanship for newer construction with reliable scheduling and clean workmanship.'
      },
      {
        name: 'Georgetown Square Area',
        slug: 'georgetown-square',
        description: 'Historic preservation painting for homes near Georgetown\'s Victorian square. Expert in period-appropriate techniques, historic color palettes, and careful craftsmanship for this nationally recognized historic district.'
      }
    ]
  },
  {
    name: 'Round Rock',
    slug: 'round-rock',
    zipCode: '78664',
    description: 'Professional painting services throughout Round Rock\'s established neighborhoods and growing communities. Trusted craftsmanship for every home from starter to luxury.',
    specialization: 'Round Rock\'s diverse housing stock — from established 1980s neighborhoods to new master-planned communities — requires broad expertise. We bring flexible scheduling for busy Round Rock families, knowledge of the area\'s varied home styles, and high-performance coatings suited to the Central Texas sun.',
    heroImage: '/hill-country-painting-austin-homepage-hero.jpg',
    serviceLocationSlug: 'round-rock',
    neighborhoods: [
      {
        name: 'Forest Creek',
        slug: 'forest-creek',
        description: 'Quality painting services for Forest Creek homes in Round Rock. Professional interior and exterior painting for this established golf community with attention to detail and HOA color requirements.'
      },
      {
        name: 'Mayfield Ranch',
        slug: 'mayfield-ranch',
        description: 'Expert painting for Mayfield Ranch residences in Round Rock. Trusted contractors for newer construction homes with reliable scheduling and quality finishes throughout.'
      },
      {
        name: 'Brushy Creek',
        slug: 'brushy-creek',
        description: 'Professional painting services for Brushy Creek area homes. Quality craftsmanship for established neighborhoods with mature landscaping and diverse architectural styles.'
      },
      {
        name: 'Round Rock Ranch',
        slug: 'round-rock-ranch',
        description: 'Trusted painting contractors for Round Rock Ranch community homes. Expert exterior and interior painting with durable finishes designed for Texas climate conditions.'
      },
      {
        name: 'Vista Oaks',
        slug: 'vista-oaks',
        description: 'Professional painting for Vista Oaks homes in Round Rock. Quality craftsmanship for this well-established community with reliable schedules and clean, precise workmanship.'
      }
    ]
  },
  {
    name: 'Cedar Park',
    slug: 'cedar-park',
    zipCode: '78613',
    description: 'Trusted painting services for Cedar Park\'s thriving communities. Quality interior and exterior painting for the rapidly growing families and established homeowners of 78613.',
    specialization: 'Cedar Park\'s mix of master-planned subdivisions and established neighborhoods requires expertise in both new construction upgrades and full repaints. We understand HOA color requirements across Cedar Park\'s many communities and bring durable, heat-resistant coatings for the Central Texas climate.',
    heroImage: '/hill-country-painting-austin-homepage-hero.jpg',
    serviceLocationSlug: 'cedar-park',
    neighborhoods: [
      {
        name: 'Ranch at Brushy Creek',
        slug: 'ranch-at-brushy-creek',
        description: 'Professional painting for Ranch at Brushy Creek homes in Cedar Park. Expert craftsmanship for this popular master-planned community with HOA color compliance and quality finishes.'
      },
      {
        name: 'Buttercup Creek',
        slug: 'buttercup-creek',
        description: 'Quality painting services for Buttercup Creek neighborhood homes. Trusted interior and exterior painting for Cedar Park\'s established community with flexible scheduling for busy families.'
      },
      {
        name: 'Lakeline',
        slug: 'lakeline',
        description: 'Professional painting for Lakeline area homes in Cedar Park. Expert exterior and interior painting with durable finishes and reliable scheduling throughout this established neighborhood.'
      },
      {
        name: 'Avery Ranch',
        slug: 'avery-ranch',
        description: 'Expert painting services for Avery Ranch homes in Cedar Park and Austin. Quality craftsmanship for this large master-planned community with HOA compliance and precise color matching.'
      },
      {
        name: 'Twin Creeks',
        slug: 'twin-creeks',
        description: 'Trusted painting contractors for Twin Creeks community homes in Cedar Park. Professional interior and exterior painting with quality finishes for this golf community and surrounding neighborhoods.'
      }
    ]
  },
  {
    name: 'North Austin',
    slug: 'north-austin',
    zipCode: '78758',
    description: 'Professional painting services across North Austin\'s diverse neighborhoods from The Domain to Anderson Mill. Trusted craftsmanship for urban condos, mid-century homes, and everything in between.',
    specialization: 'North Austin covers a wide range of property types — tech-corridor condos near The Domain, mid-century ranch homes in Balcones, and newer construction in Milwood and Jollyville. We bring the scheduling flexibility needed for Austin\'s tech workers and quality finishes suited to every architectural style.',
    heroImage: '/hill-country-painting-austin-interior-hero.jpg',
    serviceLocationSlug: 'north-austin',
    neighborhoods: [
      {
        name: 'The Domain Area',
        slug: 'the-domain',
        description: 'Professional painting for condos and homes near The Domain in North Austin. Expert urban painting with flexible scheduling for residents near Austin\'s premier mixed-use tech and retail corridor.'
      },
      {
        name: 'Balcones',
        slug: 'balcones',
        description: 'Quality painting services for Balcones neighborhood homes in North Austin. Expert in mid-century and ranch-style architecture with durable finishes and precise trim work throughout.'
      },
      {
        name: 'Milwood',
        slug: 'milwood',
        description: 'Professional painting for Milwood area homes in North Austin. Trusted interior and exterior painting for this established neighborhood with quality craftsmanship and reliable scheduling.'
      },
      {
        name: 'Jollyville',
        slug: 'jollyville',
        description: 'Expert painting services for Jollyville homes near North Austin\'s tech corridor. Quality interior and exterior painting for established neighborhoods with flexible scheduling around busy work and family schedules.'
      },
      {
        name: 'Anderson Mill',
        slug: 'anderson-mill',
        description: 'Professional painting for Anderson Mill homes in Northwest Austin. Trusted craftsmanship for this established neighborhood with diverse home styles, quality finishes, and dependable scheduling.'
      }
    ]
  }
];

export const getAllHubSlugs = () => geoAreas.map(area => area.slug);

export const getAllNeighborhoodSlugs = () => {
  const slugs: Array<{ hubSlug: string; neighborhoodSlug: string }> = [];
  geoAreas.forEach(hub => {
    hub.neighborhoods.forEach(neighborhood => {
      slugs.push({
        hubSlug: hub.slug,
        neighborhoodSlug: neighborhood.slug
      });
    });
  });
  return slugs;
};

export const getHubBySlug = (slug: string) => geoAreas.find(area => area.slug === slug);

export const getNeighborhoodBySlug = (hubSlug: string, neighborhoodSlug: string) => {
  const hub = getHubBySlug(hubSlug);
  if (!hub) return null;
  const neighborhood = hub.neighborhoods.find(n => n.slug === neighborhoodSlug);
  return neighborhood ? { hub, neighborhood } : null;
};

export const nearbyAreasMap: Record<string, string[]> = {
  'steiner-ranch-78732': ['west-lake-hills-and-rollingwood', 'lakeway-bee-cave-and-lake-travis', 'allandale-and-northwest-hills'],
  'west-lake-hills-and-rollingwood': ['steiner-ranch-78732', 'barton-creek', 'tarrytown'],
  'barton-creek': ['west-lake-hills-and-rollingwood', 'tarrytown', 'circle-c-ranch-and-southwest-austin'],
  'tarrytown': ['barton-creek', 'downtown-austin-luxury', 'pemberton-heights-and-old-west-austin-historic-luxury'],
  'downtown-austin-luxury': ['tarrytown', 'allandale-and-northwest-hills', 'pemberton-heights-and-old-west-austin-historic-luxury'],
  'allandale-and-northwest-hills': ['downtown-austin-luxury', 'steiner-ranch-78732', 'north-austin'],
  'lakeway-bee-cave-and-lake-travis': ['steiner-ranch-78732', 'west-lake-hills-and-rollingwood', 'circle-c-ranch-and-southwest-austin'],
  'circle-c-ranch-and-southwest-austin': ['barton-creek', 'lakeway-bee-cave-and-lake-travis', 'west-lake-hills-and-rollingwood'],
  'pemberton-heights-and-old-west-austin-historic-luxury': ['tarrytown', 'west-lake-hills-and-rollingwood', 'downtown-austin-luxury'],
  'leander': ['cedar-park', 'north-austin', 'round-rock'],
  'georgetown': ['round-rock', 'cedar-park', 'north-austin'],
  'round-rock': ['georgetown', 'cedar-park', 'north-austin'],
  'cedar-park': ['leander', 'round-rock', 'north-austin'],
  'north-austin': ['allandale-and-northwest-hills', 'cedar-park', 'round-rock']
};

export const getNearbyAreas = (hubSlug: string): HubArea[] => {
  const nearbySlugArray = nearbyAreasMap[hubSlug] || [];
  return nearbySlugArray
    .map(slug => getHubBySlug(slug))
    .filter((hub): hub is HubArea => hub !== undefined);
};
