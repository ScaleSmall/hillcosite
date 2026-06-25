import { canonicalBusinessProvider } from './businessSchema';

type PricingDataMap = Record<string, { formatted: string }> | null | undefined;

const fallbackSchemaPrices = {
  costFactorInterior: 6500,
  costFactorExterior: 7000,
  house1500Interior: 6250,
  house1500Exterior: 6750,
  house2200Interior: 6500,
  house2200Exterior: 8500,
  house3000Interior: 9000,
  house3000Exterior: 12000
};

function getCostFactor(pricingData: PricingDataMap, key: string, fallback: string) {
  return pricingData?.[key]?.formatted || fallback;
}

function extractPrice(priceString: string): { min: number; max: number } | null {
  const match = priceString.match(/\$?([\d,]+)\s*-\s*\$?([\d,]+)/);
  if (!match) {
    return null;
  }

  return {
    min: parseInt(match[1].replace(/,/g, '')),
    max: parseInt(match[2].replace(/,/g, ''))
  };
}

function priceValidDate() {
  const priceValidUntil = new Date();
  priceValidUntil.setFullYear(priceValidUntil.getFullYear() + 1);
  return priceValidUntil.toISOString().split('T')[0];
}

export function createPaintingCostServiceSchema(pricingData?: PricingDataMap) {
  const interiorHomeSize = getCostFactor(pricingData, 'cost_factor_home_size_interior', '$6,500 - $10,000');
  const exteriorHomeSize = getCostFactor(pricingData, 'cost_factor_home_size_exterior', '$7,000 - $14,000');
  const interiorPrice = extractPrice(interiorHomeSize);
  const exteriorPrice = extractPrice(exteriorHomeSize);
  const validUntil = priceValidDate();

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'House Painting Services',
    provider: canonicalBusinessProvider,
    areaServed: {
      '@type': 'City',
      name: 'Austin, Texas'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Painting Services',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Interior Painting',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Interior House Painting - Austin TX',
                description: 'Professional interior painting services for Austin homes',
                image: 'https://www.hillcopaint.com/hill-country-painting-austin-interior-hero.jpg',
                provider: canonicalBusinessProvider
              },
              seller: canonicalBusinessProvider,
              price: String(interiorPrice?.min || fallbackSchemaPrices.costFactorInterior),
              priceCurrency: 'USD',
              priceValidUntil: validUntil,
              availability: 'https://schema.org/InStock'
            }
          ]
        },
        {
          '@type': 'OfferCatalog',
          name: 'Exterior Painting',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Exterior House Painting - Austin TX',
                description: 'Professional exterior painting services for Austin homes',
                image: 'https://www.hillcopaint.com/classic-home-exterior.jpg',
                provider: canonicalBusinessProvider
              },
              seller: canonicalBusinessProvider,
              price: String(exteriorPrice?.min || fallbackSchemaPrices.costFactorExterior),
              priceCurrency: 'USD',
              priceValidUntil: validUntil,
              availability: 'https://schema.org/InStock'
            }
          ]
        }
      ]
    }
  };
}

export function createTypicalHomeCostSchema(pricingData?: PricingDataMap) {
  const house1500Interior = getCostFactor(pricingData, 'house_1500_interior', '$6,250 - $8,500');
  const house1500Exterior = getCostFactor(pricingData, 'house_1500_exterior', '$6,750 - $10,500');
  const house2200Interior = getCostFactor(pricingData, 'house_2200_interior', '$6,500 - $10,500');
  const house2200Exterior = getCostFactor(pricingData, 'house_2200_exterior', '$8,500 - $14,000');
  const house3000Interior = getCostFactor(pricingData, 'house_3000_interior', '$9,000 - $15,000');
  const house3000Exterior = getCostFactor(pricingData, 'house_3000_exterior', '$12,000 - $20,000');
  const price1500Int = extractPrice(house1500Interior);
  const price1500Ext = extractPrice(house1500Exterior);
  const price2200Int = extractPrice(house2200Interior);
  const price2200Ext = extractPrice(house2200Exterior);
  const price3000Int = extractPrice(house3000Interior);
  const price3000Ext = extractPrice(house3000Exterior);
  const validUntil = priceValidDate();

  const costItems = [
    {
      serviceType: 'Interior Painting',
      name: 'Interior Painting - 1,500 sq ft Home Austin',
      description: 'Professional interior painting service for 1,500 sq ft homes in Austin',
      image: 'https://www.hillcopaint.com/hill-country-painting-austin-interior-hero.jpg',
      price: price1500Int?.min || fallbackSchemaPrices.house1500Interior
    },
    {
      serviceType: 'Exterior Painting',
      name: 'Exterior Painting - 1,500 sq ft Home Austin',
      description: 'Professional exterior painting service for 1,500 sq ft homes in Austin',
      image: 'https://www.hillcopaint.com/classic-home-exterior.jpg',
      price: price1500Ext?.min || fallbackSchemaPrices.house1500Exterior
    },
    {
      serviceType: 'Interior Painting',
      name: 'Interior Painting - 2,200 sq ft Home Austin',
      description: 'Professional interior painting service for 2,200 sq ft homes in Austin',
      image: 'https://www.hillcopaint.com/hill-country-painting-austin-interior-hero.jpg',
      price: price2200Int?.min || fallbackSchemaPrices.house2200Interior
    },
    {
      serviceType: 'Exterior Painting',
      name: 'Exterior Painting - 2,200 sq ft Home Austin',
      description: 'Professional exterior painting service for 2,200 sq ft homes in Austin',
      image: 'https://www.hillcopaint.com/classic-home-exterior.jpg',
      price: price2200Ext?.min || fallbackSchemaPrices.house2200Exterior
    },
    {
      serviceType: 'Interior Painting',
      name: 'Interior Painting - 3,000+ sq ft Home Austin',
      description: 'Professional interior painting service for 3,000+ sq ft homes in Austin',
      image: 'https://www.hillcopaint.com/hill-country-painting-austin-interior-hero.jpg',
      price: price3000Int?.min || fallbackSchemaPrices.house3000Interior
    },
    {
      serviceType: 'Exterior Painting',
      name: 'Exterior Painting - 3,000+ sq ft Home Austin',
      description: 'Professional exterior painting service for 3,000+ sq ft homes in Austin',
      image: 'https://www.hillcopaint.com/classic-home-exterior.jpg',
      price: price3000Ext?.min || fallbackSchemaPrices.house3000Exterior
    }
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Austin House Painting Costs by Size',
    description: 'Professional house painting costs for different home sizes in Austin, TX',
    itemListElement: costItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        serviceType: item.serviceType,
        name: item.name,
        description: item.description,
        image: item.image,
        provider: canonicalBusinessProvider,
        areaServed: {
          '@type': 'City',
          name: 'Austin, Texas'
        },
        offers: {
          '@type': 'Offer',
          seller: canonicalBusinessProvider,
          priceCurrency: 'USD',
          price: String(item.price),
          priceValidUntil: validUntil,
          availability: 'https://schema.org/InStock'
        }
      }
    }))
  };
}
