import React from 'react';

type LocalSignalsProps = {
  city?: string;
  state?: string;
  areaName: string;
  pageType?: 'service' | 'area' | 'neighborhood';
  zipCodes?: string[];
  nearbyAreas?: string[];
  serviceKeywords?: string[];
};

const LocalSignals: React.FC<LocalSignalsProps> = ({
  city = 'Austin',
  state = 'TX',
  areaName,
  pageType = 'area',
  zipCodes,
  nearbyAreas,
  serviceKeywords
}) => {
  const hasAnyData = (zipCodes && zipCodes.length > 0) ||
                     (nearbyAreas && nearbyAreas.length > 0) ||
                     (serviceKeywords && serviceKeywords.length > 0);

  const heading = pageType === 'service'
    ? `${areaName} Painting Service Area Details`
    : 'Local Service Area Details';
  const areaLabel = `${city}, ${state}`;

  if (!hasAnyData) {
    return (
      <section className="py-12 bg-brand-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-gray-900 mb-4">{heading}</h2>
            <p className="text-lg text-brand-gray-700">
              Hill Country Painting serves {areaName} as part of our Greater Austin service area, with painting crews available for homes, cabinets, interiors, exteriors, and commercial properties throughout {areaLabel} and nearby communities.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-brand-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-gray-900 mb-6">{heading}</h2>
          <p className="text-lg text-brand-gray-700 mb-6">
            Hill Country Painting serves {areaName} within the Greater Austin painting service area, helping homeowners and property managers compare local crews, service availability, nearby neighborhoods, and common project types.
          </p>

          <div className="space-y-6">
            {zipCodes && zipCodes.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-brand-gray-900 mb-3">ZIP Codes We Serve</h3>
                <div className="flex flex-wrap gap-2">
                  {zipCodes.map((zip, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white text-brand-gray-700 rounded-lg border border-brand-gray-200 font-medium"
                    >
                      {zip}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {nearbyAreas && nearbyAreas.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-brand-gray-900 mb-3">Nearby Areas</h3>
                <div className="flex flex-wrap gap-2">
                  {nearbyAreas.map((area, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white text-brand-gray-700 rounded-lg border border-brand-gray-200"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {serviceKeywords && serviceKeywords.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-brand-gray-900 mb-3">Services Commonly Requested Here</h3>
                <ul className="list-disc list-inside space-y-1 text-brand-gray-700">
                  {serviceKeywords.map((keyword, index) => (
                    <li key={index}>{keyword}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalSignals;
