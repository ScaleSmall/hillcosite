import React from 'react';
import NeighborhoodPage from '../../../components/templates/NeighborhoodPage';
import { getNeighborhoodBySlug } from '../../../data/geoAreas';

const NeighborhoodDowntownAustinLuxuryOldWestAustin = () => {
  const data = getNeighborhoodBySlug('downtown-austin-luxury', 'old-west-austin');
  if (!data) return null;
  return <NeighborhoodPage hub={data.hub} neighborhood={data.neighborhood} />;
};

export default NeighborhoodDowntownAustinLuxuryOldWestAustin;
