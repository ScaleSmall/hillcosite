export const greaterAustinServiceAreas = [
  'Austin',
  'West Lake Hills',
  'Rollingwood',
  'Tarrytown',
  'Northwest Hills',
  'West Lake Highlands',
  'Lakeway',
  'Bee Cave',
  'Lake Travis',
  'Steiner Ranch',
  'Barton Creek',
  'Circle C Ranch',
  'Pemberton Heights',
  'Old West Austin',
  'Clarksville',
  'Allandale',
  'Crestview',
  'Leander',
  'Georgetown',
  'Round Rock',
  'Cedar Park',
  'North Austin'
] as const;

export const greaterAustinServiceCounties = [
  'Travis County',
  'Williamson County',
  'Hays County'
] as const;

export const priorityLocalSearchTopics = [
  'Austin house painters',
  'Austin exterior house painters',
  'Austin exterior painting',
  'Austin interior painters',
  'Austin interior painting',
  'Austin cabinet painting',
  'Austin cabinet refinishing',
  'Austin cabinet painters',
  'Austin commercial painters',
  'Austin commercial painting',
  'house painters Austin',
  'painting contractors Austin',
  'Austin painting contractors',
  'house painters near me Austin',
  'exterior painters near me Austin',
  'interior painters near me Austin',
  'cabinet painters near me Austin',
  'commercial painters near me Austin',
  'Greater Austin painting contractor',
  'West Lake Hills painters',
  'Tarrytown painters',
  'Lakeway painters',
  'Bee Cave painters',
  'Round Rock painters',
  'Cedar Park painters',
  'Georgetown painters',
  'Leander painters'
] as const;

export const coreAustinZipCodes = [
  '78701',
  '78703',
  '78704',
  '78731',
  '78732',
  '78733',
  '78734',
  '78735',
  '78746',
  '78750',
  '78759'
] as const;

export const coreAustinNearbyAreas = [
  'Tarrytown',
  'West Lake Hills',
  'Rollingwood',
  'Northwest Hills',
  'West Lake Highlands',
  'Lakeway',
  'Bee Cave',
  'Barton Creek',
  'Steiner Ranch',
  'Circle C Ranch',
  'North Austin',
  'Cedar Park',
  'Round Rock',
  'Georgetown',
  'Leander'
] as const;

export const coreServiceLocalSignalKeywords = {
  interior: [
    'Austin interior painting',
    'Austin interior painters',
    'interior painting Austin',
    'interior painters near me Austin',
    'Austin house painters',
    'house painters Austin',
    'painting contractors Austin'
  ],
  exterior: [
    'Austin exterior painting',
    'Austin exterior house painters',
    'exterior painting Austin',
    'exterior painters near me Austin',
    'Austin house painters',
    'house painters Austin',
    'painting contractors Austin'
  ],
  cabinet: [
    'Austin cabinet painting',
    'Austin cabinet refinishing',
    'Austin cabinet painters',
    'cabinet painting Austin',
    'cabinet painters near me Austin',
    'Austin house painters',
    'painting contractors Austin'
  ],
  commercial: [
    'Austin commercial painting',
    'Austin commercial painters',
    'commercial painting Austin',
    'commercial painting contractors Austin',
    'commercial painters near me Austin',
    'Austin house painters',
    'painting contractors Austin'
  ]
} as const;

export const serviceAreaLocalIntent = {
  'tarrytown': {
    alternateName: [
      'Tarrytown house painters',
      'house painters Tarrytown',
      'painting contractors Tarrytown',
      'Tarrytown exterior painters',
      'Tarrytown interior painters',
      'Tarrytown cabinet painting',
      'Tarrytown commercial painters'
    ],
    keywords: [
      'Tarrytown painting services',
      'Tarrytown house painters',
      'house painters Tarrytown',
      'painting contractors Tarrytown',
      'Tarrytown exterior painting',
      'Tarrytown interior painting',
      'Tarrytown cabinet painting',
      'Greater Austin painting contractor'
    ],
    serviceOutput: 'Tarrytown house painters service for exterior painting, interior painting, cabinet painting, cabinet refinishing, and commercial painting projects in Tarrytown and nearby Central Austin neighborhoods'
  },
  'northwest-hills': {
    alternateName: [
      'Northwest Hills house painters',
      'house painters Northwest Hills',
      'painting contractors Northwest Hills',
      'Northwest Hills exterior painters',
      'Northwest Hills interior painters',
      'Northwest Hills cabinet painting',
      'Northwest Hills commercial painters'
    ],
    keywords: [
      'Northwest Hills painting services',
      'Northwest Hills house painters',
      'house painters Northwest Hills',
      'painting contractors Northwest Hills',
      'Northwest Hills exterior painting',
      'Northwest Hills interior painting',
      'Northwest Hills cabinet painting',
      'Greater Austin painting contractor'
    ],
    serviceOutput: 'Northwest Hills house painters service for exterior painting, interior painting, cabinet painting, cabinet refinishing, and commercial painting projects in Northwest Hills and nearby North Austin neighborhoods'
  },
  'west-lake-hills': {
    alternateName: [
      'West Lake Hills house painters',
      'house painters West Lake Hills',
      'painting contractors West Lake Hills',
      'West Lake Hills exterior painters',
      'West Lake Hills interior painters',
      'West Lake Hills cabinet painting',
      'West Lake Hills commercial painters'
    ],
    keywords: [
      'West Lake Hills painting services',
      'West Lake Hills house painters',
      'house painters West Lake Hills',
      'painting contractors West Lake Hills',
      'West Lake Hills exterior painting',
      'West Lake Hills interior painting',
      'West Lake Hills cabinet painting',
      'Greater Austin painting contractor'
    ],
    serviceOutput: 'West Lake Hills house painters service for exterior painting, interior painting, cabinet painting, cabinet refinishing, and commercial painting projects in West Lake Hills and nearby Eanes corridor neighborhoods'
  },
  'west-lake-highlands': {
    alternateName: [
      'West Lake Highlands house painters',
      'house painters West Lake Highlands',
      'painting contractors West Lake Highlands',
      'West Lake Highlands exterior painters',
      'West Lake Highlands interior painters',
      'West Lake Highlands cabinet painting',
      'West Lake Highlands commercial painters'
    ],
    keywords: [
      'West Lake Highlands painting services',
      'West Lake Highlands house painters',
      'house painters West Lake Highlands',
      'painting contractors West Lake Highlands',
      'West Lake Highlands exterior painting',
      'West Lake Highlands interior painting',
      'West Lake Highlands cabinet painting',
      'Greater Austin painting contractor'
    ],
    serviceOutput: 'West Lake Highlands house painters service for exterior painting, interior painting, cabinet painting, cabinet refinishing, and commercial painting projects in West Lake Highlands and nearby Hill Country neighborhoods'
  },
  'lakeway': {
    alternateName: [
      'Lakeway house painters',
      'house painters Lakeway',
      'painting contractors Lakeway',
      'Lakeway exterior painters',
      'Lakeway interior painters',
      'Lakeway cabinet painting',
      'Lakeway commercial painters'
    ],
    keywords: [
      'Lakeway painting services',
      'Lakeway house painters',
      'house painters Lakeway',
      'painting contractors Lakeway',
      'Lakeway exterior painting',
      'Lakeway interior painting',
      'Lakeway cabinet painting',
      'Greater Austin painting contractor'
    ],
    serviceOutput: 'Lakeway house painters service for exterior painting, interior painting, cabinet painting, cabinet refinishing, and commercial painting projects in Lakeway and nearby Lake Travis communities'
  },
  'leander': {
    alternateName: [
      'Leander house painters',
      'house painters Leander',
      'painting contractors Leander',
      'Leander exterior painters',
      'Leander interior painters',
      'Leander cabinet painting',
      'Leander commercial painters'
    ],
    keywords: [
      'Leander painting services',
      'Leander house painters',
      'house painters Leander',
      'painting contractors Leander',
      'Leander exterior painting',
      'Leander interior painting',
      'Leander cabinet painting',
      'Greater Austin painting contractor'
    ],
    serviceOutput: 'Leander house painters service for exterior painting, interior painting, cabinet painting, cabinet refinishing, and commercial painting projects in Leander and nearby master-planned communities'
  },
  'georgetown': {
    alternateName: [
      'Georgetown house painters',
      'house painters Georgetown',
      'painting contractors Georgetown',
      'Georgetown exterior painters',
      'Georgetown interior painters',
      'Georgetown cabinet painting',
      'Georgetown commercial painters'
    ],
    keywords: [
      'Georgetown painting services',
      'Georgetown house painters',
      'house painters Georgetown',
      'painting contractors Georgetown',
      'Georgetown exterior painting',
      'Georgetown interior painting',
      'Georgetown cabinet painting',
      'Greater Austin painting contractor'
    ],
    serviceOutput: 'Georgetown house painters service for exterior painting, interior painting, cabinet painting, cabinet refinishing, and commercial painting projects in Georgetown, Sun City, and nearby communities'
  },
  'round-rock': {
    alternateName: [
      'Round Rock house painters',
      'house painters Round Rock',
      'painting contractors Round Rock',
      'Round Rock exterior painters',
      'Round Rock interior painters',
      'Round Rock cabinet painting',
      'Round Rock commercial painters'
    ],
    keywords: [
      'Round Rock painting services',
      'Round Rock house painters',
      'house painters Round Rock',
      'painting contractors Round Rock',
      'Round Rock exterior painting',
      'Round Rock interior painting',
      'Round Rock cabinet painting',
      'Greater Austin painting contractor'
    ],
    serviceOutput: 'Round Rock house painters service for exterior painting, interior painting, cabinet painting, cabinet refinishing, and commercial painting projects in Round Rock and nearby Williamson County neighborhoods'
  },
  'cedar-park': {
    alternateName: [
      'Cedar Park house painters',
      'house painters Cedar Park',
      'painting contractors Cedar Park',
      'Cedar Park exterior painters',
      'Cedar Park interior painters',
      'Cedar Park cabinet painting',
      'Cedar Park commercial painters'
    ],
    keywords: [
      'Cedar Park painting services',
      'Cedar Park house painters',
      'house painters Cedar Park',
      'painting contractors Cedar Park',
      'Cedar Park exterior painting',
      'Cedar Park interior painting',
      'Cedar Park cabinet painting',
      'Greater Austin painting contractor'
    ],
    serviceOutput: 'Cedar Park house painters service for exterior painting, interior painting, cabinet painting, cabinet refinishing, and commercial painting projects in Cedar Park and nearby northwest Austin communities'
  },
  'north-austin': {
    alternateName: [
      'North Austin house painters',
      'house painters North Austin',
      'painting contractors North Austin',
      'North Austin exterior painters',
      'North Austin interior painters',
      'North Austin cabinet painting',
      'North Austin commercial painters'
    ],
    keywords: [
      'North Austin painting services',
      'North Austin house painters',
      'house painters North Austin',
      'painting contractors North Austin',
      'North Austin exterior painting',
      'North Austin interior painting',
      'North Austin cabinet painting',
      'Greater Austin painting contractor'
    ],
    serviceOutput: 'North Austin house painters service for exterior painting, interior painting, cabinet painting, cabinet refinishing, and commercial painting projects in North Austin and the Domain-area corridor'
  }
} as const;

export const serviceAreaLocalSignals = {
  'austin': {
    zipCodes: ['78701', '78703', '78704', '78731', '78746', '78750', '78759'],
    nearbyAreas: ['Downtown Austin', 'Tarrytown', 'West Lake Hills', 'Northwest Hills', 'Zilker', 'Allandale', 'Circle C Ranch'],
    serviceKeywords: ['Austin house painters', 'Austin exterior house painters', 'Austin interior painters', 'Austin cabinet painting', 'Austin commercial painters']
  },
  'tarrytown': {
    zipCodes: ['78703'],
    nearbyAreas: ['Old Enfield', 'Pemberton Heights', 'Bryker Woods', 'Clarksville', 'West Austin'],
    serviceKeywords: ['Tarrytown house painters', 'Tarrytown exterior painting', 'Tarrytown interior painting', 'Tarrytown cabinet painting', 'historic home painting']
  },
  'northwest-hills': {
    zipCodes: ['78731', '78759'],
    nearbyAreas: ['Allandale', 'Crestview', 'Quail Creek', 'Balcones', 'North Austin'],
    serviceKeywords: ['Northwest Hills house painters', 'Northwest Hills exterior painting', 'Northwest Hills interior painting', 'Northwest Hills cabinet painting', 'mid-century home painting']
  },
  'west-lake-hills': {
    zipCodes: ['78746'],
    nearbyAreas: ['Rollingwood', 'Rob Roy', 'Lost Creek', 'Davenport Ranch', 'Barton Creek'],
    serviceKeywords: ['West Lake Hills house painters', 'West Lake Hills exterior painting', 'West Lake Hills interior painting', 'West Lake Hills cabinet painting', 'luxury home painting']
  },
  'west-lake-highlands': {
    zipCodes: ['78738', '78746'],
    nearbyAreas: ['Lake Pointe', 'Bee Cave', 'Spanish Oaks', 'Barton Creek', 'West Lake Hills'],
    serviceKeywords: ['West Lake Highlands house painters', 'West Lake Highlands exterior painting', 'West Lake Highlands interior painting', 'West Lake Highlands cabinet painting', 'Hill Country home painting']
  },
  'lakeway': {
    zipCodes: ['78734', '78738'],
    nearbyAreas: ['Rough Hollow', 'The Hills', 'Serene Hills', 'Bee Cave', 'Lake Travis'],
    serviceKeywords: ['Lakeway house painters', 'Lakeway exterior painting', 'Lakeway interior painting', 'Lakeway cabinet painting', 'Lake Travis home painting']
  },
  'leander': {
    zipCodes: ['78641', '78646'],
    nearbyAreas: ['Crystal Falls', 'Travisso', 'Mason Hills', 'Devine Lake', 'Bryson'],
    serviceKeywords: ['Leander house painters', 'Leander exterior painting', 'Leander interior painting', 'Leander cabinet painting', 'HOA color approval painting']
  },
  'georgetown': {
    zipCodes: ['78626', '78628', '78633'],
    nearbyAreas: ['Sun City Georgetown', 'Berry Creek', 'Teravista', 'Wolf Ranch', 'Georgetown Square'],
    serviceKeywords: ['Georgetown house painters', 'Georgetown exterior painting', 'Georgetown interior painting', 'Georgetown cabinet painting', 'historic Georgetown painting']
  },
  'round-rock': {
    zipCodes: ['78664', '78665', '78681'],
    nearbyAreas: ['Forest Creek', 'Mayfield Ranch', 'Brushy Creek', 'Round Rock Ranch', 'Vista Oaks'],
    serviceKeywords: ['Round Rock house painters', 'Round Rock exterior painting', 'Round Rock interior painting', 'Round Rock cabinet painting', 'Round Rock HOA painting']
  },
  'cedar-park': {
    zipCodes: ['78613'],
    nearbyAreas: ['Avery Ranch', 'Ranch at Brushy Creek', 'Buttercup Creek', 'Lakeline', 'Twin Creeks'],
    serviceKeywords: ['Cedar Park house painters', 'Cedar Park exterior painting', 'Cedar Park interior painting', 'Cedar Park cabinet painting', 'Cedar Park HOA painting']
  },
  'north-austin': {
    zipCodes: ['78727', '78729', '78750', '78758'],
    nearbyAreas: ['The Domain', 'Balcones', 'Milwood', 'Jollyville', 'Anderson Mill'],
    serviceKeywords: ['North Austin house painters', 'North Austin exterior painting', 'North Austin interior painting', 'North Austin cabinet painting', 'Domain area commercial painting']
  }
} as const;
