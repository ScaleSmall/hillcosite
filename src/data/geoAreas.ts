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
}

export const geoAreas: HubArea[] = [
  {
    name: 'Steiner Ranch',
    slug: 'steiner-ranch-78732',
    zipCode: '78732',
    description: 'Expert painting services for Steiner Ranch\'s distinctive Hill Country homes. Clean prep. Crisp lines. Reliable schedules.',
    specialization: 'Steiner Ranch homes require specialized knowledge of Hill Country architecture, HOA color requirements, and quality finishes that complement the area\'s natural beauty and architectural standards.',
    heroImage: '/austin-professional-house-painting-hero.jpg',
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
    description: 'Professional painting services for West Lake Hills and Rollingwood properties. Expert craftsmanship for quality homes.',
    specialization: 'West Lake Hills and Rollingwood homes require high standards in finish quality, quality materials, and meticulous attention to architectural details that define these established communities.',
    heroImage: '/west-lake-hills-luxury-home-painting.jpg',
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
    description: 'Professional painting services for Barton Creek estates. Exceptional craftsmanship for quality homes.',
    specialization: 'Barton Creek estates require expert knowledge of quality finishes, professional materials, and the precision needed to maintain the area\'s reputation for architectural excellence.',
    heroImage: '/barton-creek-estate-painting-austin.jpg',
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
    description: 'Specialized painting for Tarrytown\'s historic homes. Honoring architectural heritage with modern excellence.',
    specialization: 'Tarrytown and surrounding historic neighborhoods require specialized techniques for preserving period details, meeting strict HOA standards, and honoring the architectural character that makes these areas treasured.',
    heroImage: '/tarrytown-historic-home-painting-austin.jpg',
    neighborhoods: [
      {
        name: 'Tarrytown',
        slug: 'tarrytown',
        description: 'Historic home painting in the heart of Tarrytown.'
      },
      {
        name: 'Old Enfield',
        slug: 'old-enfield',
        description: 'Preservation painting for Old Enfield\'s 1920s-1940s estates along Enfield Road. Expert in Tudor, Colonial Revival, and Mediterranean architecture with strict attention to historical accuracy.'
      },
      {
        name: 'Pemberton Heights',
        slug: 'pemberton-heights',
        description: 'Professional painting for Pemberton Heights estates north of 29th Street. Specialized in quality finishes for grand historic homes with extensive millwork, custom trim, and architectural details.'
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
    heroImage: '/downtown-austin-luxury-residence-painting.jpg',
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
    description: 'Trusted painting services for Allandale and Northwest Hills\' distinctive homes. Quality work in established neighborhoods.',
    specialization: 'These established neighborhoods feature diverse architectural styles from mid-century modern to contemporary, requiring versatile expertise and respect for each home\'s unique character and community standards.',
    heroImage: '/allandale-northwest-hills-home-painting-austin.jpg',
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
    description: 'Professional painting for Lake Travis area homes. Specialized expertise for lakefront properties and Hill Country estates.',
    specialization: 'Lake Travis area homes face unique challenges including intense sun exposure, humidity from the lake, and architectural standards that require specialized knowledge and high-performance materials.',
    heroImage: '/lakeway-lake-travis-home-painting.jpg',
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
        description: 'Expert painting for The Peninsula at Rough Hollow estates.'
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
    heroImage: '/circle-c-ranch-kitchen-painting-austin.jpg',
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
    description: 'Specialized services for Pemberton Heights and Old West Austin\'s historic homes. Preserving architectural heritage with excellence.',
    specialization: 'These historic neighborhoods demand the highest level of craftsmanship, period-appropriate techniques, strict adherence to preservation standards, and quality finishes for Austin\'s established addresses.',
    heroImage: '/pemberton-heights-historic-luxury-painting-austin.jpg',
    neighborhoods: [
      {
        name: 'Pemberton Heights South',
        slug: 'pemberton-heights-south',
        description: 'Professional painting for southern Pemberton Heights properties near Westover. Quality finishes for established estates featuring Colonial Revival, Georgian, and Mediterranean architecture with meticulous preservation requirements.'
      },
      {
        name: 'Old Enfield West',
        slug: 'old-enfield-west',
        description: 'Historic preservation for western Old Enfield estates near Windsor Road. Expert in grand architectural styles including Spanish Colonial Revival, French Eclectic, and English Tudor with extensive custom detailing.'
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
  'allandale-and-northwest-hills': ['downtown-austin-luxury', 'steiner-ranch-78732', 'tarrytown'],
  'lakeway-bee-cave-and-lake-travis': ['steiner-ranch-78732', 'west-lake-hills-and-rollingwood', 'circle-c-ranch-and-southwest-austin'],
  'circle-c-ranch-and-southwest-austin': ['barton-creek', 'lakeway-bee-cave-and-lake-travis', 'west-lake-hills-and-rollingwood'],
  'pemberton-heights-and-old-west-austin-historic-luxury': ['tarrytown', 'west-lake-hills-and-rollingwood', 'downtown-austin-luxury']
};

export const getNearbyAreas = (hubSlug: string): HubArea[] => {
  const nearbySlugArray = nearbyAreasMap[hubSlug] || [];
  return nearbySlugArray
    .map(slug => getHubBySlug(slug))
    .filter((hub): hub is HubArea => hub !== undefined);
};
