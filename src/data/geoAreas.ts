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
    specialization: 'Steiner Ranch homes require specialized knowledge of Hill Country architecture, HOA color requirements, and premium finishes that complement the area\'s natural beauty and luxury standards.',
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
        description: 'Expert interior and exterior painting for Davenport Ranch residences.'
      },
      {
        name: 'River Place',
        slug: 'river-place',
        description: 'Premium painting services for River Place community homes.'
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
    description: 'Premium painting services for West Lake Hills and Rollingwood\'s most distinguished properties. Expert craftsmanship for luxury homes.',
    specialization: 'West Lake Hills and Rollingwood demand the highest standards in finish quality, premium materials, and meticulous attention to architectural details that define these prestigious communities.',
    heroImage: '/west-lake-hills-luxury-home-painting.jpg',
    neighborhoods: [
      {
        name: 'Rollingwood',
        slug: 'rollingwood',
        description: 'Premier painting services for Rollingwood luxury residences.'
      },
      {
        name: 'West Lake Hills',
        slug: 'west-lake-hills',
        description: 'Expert painting for West Lake Hills core area homes.'
      },
      {
        name: 'Spanish Oaks',
        slug: 'spanish-oaks',
        description: 'High-end painting services for Spanish Oaks estates.'
      },
      {
        name: 'Davenport Ranch',
        slug: 'davenport-ranch',
        description: 'Professional painting for Davenport Ranch properties in the West Lake area.'
      },
      {
        name: 'Lake Austin Hills',
        slug: 'lake-austin-hills',
        description: 'Premium painting for Lake Austin Hills residences.'
      }
    ]
  },
  {
    name: 'Barton Creek',
    slug: 'barton-creek',
    description: 'Elite painting services for Barton Creek\'s finest estates. Exceptional craftsmanship for discerning homeowners.',
    specialization: 'Barton Creek estates require expert knowledge of luxury finishes, premium materials, and the precision needed to maintain the area\'s reputation for architectural excellence.',
    heroImage: '/barton-creek-estate-painting-austin.jpg',
    neighborhoods: [
      {
        name: 'Barton Creek Country Club Estates',
        slug: 'barton-creek-country-club-estates',
        description: 'Elite painting for Barton Creek Country Club Estates homes.'
      },
      {
        name: 'Fazio Foothills / Cliffside',
        slug: 'fazio-foothills-cliffside',
        description: 'Premium painting services for Fazio Foothills and Cliffside properties.'
      },
      {
        name: 'Spyglass / Barton\'s Bluff',
        slug: 'spyglass-bartons-bluff',
        description: 'Expert painting for Spyglass and Barton\'s Bluff residences.'
      },
      {
        name: 'Lake Austin West Estates',
        slug: 'lake-austin-west-estates',
        description: 'Luxury painting services for Lake Austin West Estates.'
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
    description: 'Specialized painting for Tarrytown\'s historic and luxury homes. Honoring architectural heritage with modern excellence.',
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
        description: 'Preservation-focused painting for Old Enfield historic homes.'
      },
      {
        name: 'Pemberton Heights',
        slug: 'pemberton-heights',
        description: 'Expert painting for Pemberton Heights luxury residences.'
      },
      {
        name: 'Bryker Woods',
        slug: 'bryker-woods',
        description: 'Professional painting services for Bryker Woods homes.'
      },
      {
        name: 'Clarksville',
        slug: 'clarksville',
        description: 'Historic preservation painting for Clarksville neighborhood.'
      }
    ]
  },
  {
    name: 'Downtown Austin',
    slug: 'downtown-austin-luxury',
    zipCode: '78701',
    description: 'Sophisticated painting services for downtown\'s luxury residences. Urban expertise with precision scheduling.',
    specialization: 'Downtown properties require coordinated scheduling, building compliance expertise, premium finishes for modern architecture, and minimal disruption to residents and neighbors in dense urban environments.',
    heroImage: '/downtown-austin-luxury-residence-painting.jpg',
    neighborhoods: [
      {
        name: 'Downtown Core / 78701',
        slug: 'downtown-core-78701',
        description: 'High-rise and luxury condo painting in downtown Austin core.'
      },
      {
        name: 'Rainey Street District',
        slug: 'rainey-street-district',
        description: 'Modern painting services for Rainey Street residences.'
      },
      {
        name: 'Old West Austin',
        slug: 'old-west-austin',
        description: 'Historic and luxury painting for Old West Austin homes.'
      },
      {
        name: 'Zilker',
        slug: 'zilker',
        description: 'Professional painting for Zilker area residences.'
      },
      {
        name: 'Clarksville',
        slug: 'clarksville',
        description: 'Expert painting for Clarksville neighborhood near downtown.'
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
        description: 'Premium painting for Quail Creek area properties.'
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
    description: 'Premium painting for Lake Travis area homes. Specialized expertise for lakefront properties and Hill Country estates.',
    specialization: 'Lake Travis area homes face unique challenges including intense sun exposure, humidity from the lake, and premium architectural standards that require specialized knowledge and high-performance materials.',
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
        description: 'Premium painting for Rough Hollow community homes.'
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
    description: 'Specialized services for Pemberton Heights and Old West Austin\'s historic luxury homes. Preserving architectural heritage with excellence.',
    specialization: 'These prestigious historic neighborhoods demand the highest level of craftsmanship, period-appropriate techniques, strict adherence to preservation standards, and premium finishes worthy of Austin\'s most distinguished addresses.',
    heroImage: '/pemberton-heights-historic-luxury-painting-austin.jpg',
    neighborhoods: [
      {
        name: 'Pemberton Heights',
        slug: 'pemberton-heights',
        description: 'Historic luxury painting for Pemberton Heights estates.'
      },
      {
        name: 'Old Enfield',
        slug: 'old-enfield',
        description: 'Preservation painting for Old Enfield historic homes.'
      },
      {
        name: 'Bryker Woods',
        slug: 'bryker-woods',
        description: 'Expert painting for Bryker Woods neighborhood.'
      },
      {
        name: 'Clarksville',
        slug: 'clarksville',
        description: 'Historic home painting in Clarksville.'
      },
      {
        name: 'Old West Austin',
        slug: 'old-west-austin',
        description: 'Premium painting for Old West Austin historic properties.'
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
