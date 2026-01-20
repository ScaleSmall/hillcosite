import React from 'react';
import NeighborhoodPage from '../../../components/templates/NeighborhoodPage';
import { getNeighborhoodBySlug } from '../../../data/geoAreas';

const NeighborhoodDowntownAustinLuxuryRaineyStreetDistrict = () => {
  const data = getNeighborhoodBySlug('downtown-austin-luxury', 'rainey-street-district');
  if (!data) return null;
  return <NeighborhoodPage hub={data.hub} neighborhood={data.neighborhood} />;
};

export default NeighborhoodDowntownAustinLuxuryRaineyStreetDistrict;
