import React from 'react';
import NeighborhoodPage from '../../../components/templates/NeighborhoodPage';
import { getNeighborhoodBySlug } from '../../../data/geoAreas';

const NeighborhoodDowntownAustinLuxuryClarksville = () => {
  const data = getNeighborhoodBySlug('downtown-austin-luxury', 'clarksville-west');
  if (!data) return null;
  return <NeighborhoodPage hub={data.hub} neighborhood={data.neighborhood} />;
};

export default NeighborhoodDowntownAustinLuxuryClarksville;
