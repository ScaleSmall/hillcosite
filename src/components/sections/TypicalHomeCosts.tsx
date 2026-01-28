import React from 'react';
import { Home } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { usePricingData } from '../../hooks/usePricingData';

const TypicalHomeCosts = () => {
  const { data: pricingData } = usePricingData('painting-costs');

  const getCostFactor = (key: string, fallback: string) => {
    if (pricingData && pricingData[key]) {
      return pricingData[key].formatted;
    }
    return fallback;
  };

  const extractPrice = (priceString: string): { min: number; max: number } | null => {
    const match = priceString.match(/\$?([\d,]+)\s*-\s*\$?([\d,]+)/);
    if (match) {
      return {
        min: parseInt(match[1].replace(/,/g, '')),
        max: parseInt(match[2].replace(/,/g, ''))
      };
    }
    return null;
  };

  const house1500Interior = getCostFactor('house_1500_interior', '$3,200 - $5,800');
  const house1500Exterior = getCostFactor('house_1500_exterior', '$5,200 - $8,500');
  const house2200Interior = getCostFactor('house_2200_interior', '$4,400 - $7,200');
  const house2200Exterior = getCostFactor('house_2200_exterior', '$6,800 - $11,000');
  const house3000Interior = getCostFactor('house_3000_interior', '$6,000 - $10,500');
  const house3000Exterior = getCostFactor('house_3000_exterior', '$9,500 - $16,000');

  const price1500Int = extractPrice(house1500Interior);
  const price1500Ext = extractPrice(house1500Exterior);
  const price2200Int = extractPrice(house2200Interior);
  const price2200Ext = extractPrice(house2200Exterior);
  const price3000Int = extractPrice(house3000Interior);
  const price3000Ext = extractPrice(house3000Exterior);

  const priceValidUntil = new Date();
  priceValidUntil.setFullYear(priceValidUntil.getFullYear() + 1);
  const priceValidDate = priceValidUntil.toISOString().split('T')[0];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Austin House Painting Costs by Size",
    "description": "Professional house painting costs for different home sizes in Austin, TX",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Service",
          "serviceType": "Interior Painting",
          "name": "Interior Painting - 1,500 sq ft Home Austin",
          "description": "Professional interior painting service for 1,500 sq ft homes in Austin",
          "image": "https://www.hillcopaint.com/interior-living-room-painting-central-austin.jpg",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Hill Country Painting",
            "telephone": "(512) 240-2246",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Austin",
              "addressRegion": "TX",
              "addressCountry": "US"
            }
          },
          "areaServed": {
            "@type": "City",
            "name": "Austin",
            "state": "Texas"
          },
          "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "price": String(price1500Int?.min || 3200),
            "priceRange": house1500Interior,
            "priceValidUntil": priceValidDate,
            "availability": "https://schema.org/InStock"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Service",
          "serviceType": "Exterior Painting",
          "name": "Exterior Painting - 1,500 sq ft Home Austin",
          "description": "Professional exterior painting service for 1,500 sq ft homes in Austin",
          "image": "https://www.hillcopaint.com/exterior-house-painting-tarrytown-austin.jpg",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Hill Country Painting",
            "telephone": "(512) 240-2246",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Austin",
              "addressRegion": "TX",
              "addressCountry": "US"
            }
          },
          "areaServed": {
            "@type": "City",
            "name": "Austin",
            "state": "Texas"
          },
          "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "price": String(price1500Ext?.min || 5200),
            "priceRange": house1500Exterior,
            "priceValidUntil": priceValidDate,
            "availability": "https://schema.org/InStock"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Service",
          "serviceType": "Interior Painting",
          "name": "Interior Painting - 2,200 sq ft Home Austin",
          "description": "Professional interior painting service for 2,200 sq ft homes in Austin",
          "image": "https://www.hillcopaint.com/interior-living-room-painting-central-austin.jpg",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Hill Country Painting",
            "telephone": "(512) 240-2246",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Austin",
              "addressRegion": "TX",
              "addressCountry": "US"
            }
          },
          "areaServed": {
            "@type": "City",
            "name": "Austin",
            "state": "Texas"
          },
          "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "price": String(price2200Int?.min || 4400),
            "priceRange": house2200Interior,
            "priceValidUntil": priceValidDate,
            "availability": "https://schema.org/InStock"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Service",
          "serviceType": "Exterior Painting",
          "name": "Exterior Painting - 2,200 sq ft Home Austin",
          "description": "Professional exterior painting service for 2,200 sq ft homes in Austin",
          "image": "https://www.hillcopaint.com/exterior-house-painting-tarrytown-austin.jpg",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Hill Country Painting",
            "telephone": "(512) 240-2246",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Austin",
              "addressRegion": "TX",
              "addressCountry": "US"
            }
          },
          "areaServed": {
            "@type": "City",
            "name": "Austin",
            "state": "Texas"
          },
          "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "price": String(price2200Ext?.min || 6800),
            "priceRange": house2200Exterior,
            "priceValidUntil": priceValidDate,
            "availability": "https://schema.org/InStock"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "Service",
          "serviceType": "Interior Painting",
          "name": "Interior Painting - 3,000+ sq ft Home Austin",
          "description": "Professional interior painting service for 3,000+ sq ft homes in Austin",
          "image": "https://www.hillcopaint.com/interior-living-room-painting-central-austin.jpg",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Hill Country Painting",
            "telephone": "(512) 240-2246",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Austin",
              "addressRegion": "TX",
              "addressCountry": "US"
            }
          },
          "areaServed": {
            "@type": "City",
            "name": "Austin",
            "state": "Texas"
          },
          "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "price": String(price3000Int?.min || 6000),
            "priceRange": house3000Interior,
            "priceValidUntil": priceValidDate,
            "availability": "https://schema.org/InStock"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 6,
        "item": {
          "@type": "Service",
          "serviceType": "Exterior Painting",
          "name": "Exterior Painting - 3,000+ sq ft Home Austin",
          "description": "Professional exterior painting service for 3,000+ sq ft homes in Austin",
          "image": "https://www.hillcopaint.com/exterior-house-painting-tarrytown-austin.jpg",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Hill Country Painting",
            "telephone": "(512) 240-2246",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Austin",
              "addressRegion": "TX",
              "addressCountry": "US"
            }
          },
          "areaServed": {
            "@type": "City",
            "name": "Austin",
            "state": "Texas"
          },
          "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "price": String(price3000Ext?.min || 9500),
            "priceRange": house3000Exterior,
            "priceValidUntil": priceValidDate,
            "availability": "https://schema.org/InStock"
          }
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      </Helmet>
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-900 mb-4">
            Typical Austin Home Painting Costs
          </h2>
          <p className="text-xl text-slate-600">
            Real examples from Austin neighborhoods
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card p-8 text-center">
            <Home className="w-12 h-12 text-deep-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-deep-900 mb-2">1,500 sq ft</h3>
            <p className="text-slate-600 mb-4">Typical Austin Ranch</p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Interior:</span>
                <span className="font-semibold text-green-600">{getCostFactor('house_1500_interior', '$3,200 - $5,800')}</span>
              </div>
              <div className="flex justify-between">
                <span>Exterior:</span>
                <span className="font-semibold text-blue-600">{getCostFactor('house_1500_exterior', '$5,200 - $8,500')}</span>
              </div>
            </div>
          </div>

          <div className="card p-8 text-center border-2 border-deep-600">
            <Home className="w-12 h-12 text-deep-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-deep-900 mb-2">2,200 sq ft</h3>
            <p className="text-slate-600 mb-4">Average Austin Home</p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Interior:</span>
                <span className="font-semibold text-green-600">{getCostFactor('house_2200_interior', '$4,400 - $7,200')}</span>
              </div>
              <div className="flex justify-between">
                <span>Exterior:</span>
                <span className="font-semibold text-blue-600">{getCostFactor('house_2200_exterior', '$6,800 - $11,000')}</span>
              </div>
            </div>
            <div className="mt-4">
              <span className="bg-deep-600 text-white px-3 py-1 rounded-full text-sm font-medium">Most Popular</span>
            </div>
          </div>

          <div className="card p-8 text-center">
            <Home className="w-12 h-12 text-deep-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-deep-900 mb-2">3,000+ sq ft</h3>
            <p className="text-slate-600 mb-4">Larger Austin Homes</p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Interior:</span>
                <span className="font-semibold text-green-600">{getCostFactor('house_3000_interior', '$6,000 - $10,500')}</span>
              </div>
              <div className="flex justify-between">
                <span>Exterior:</span>
                <span className="font-semibold text-blue-600">{getCostFactor('house_3000_exterior', '$9,500 - $16,000')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default TypicalHomeCosts;
