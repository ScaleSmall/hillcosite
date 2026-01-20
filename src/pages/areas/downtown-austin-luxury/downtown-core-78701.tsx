import React from 'react';
import NeighborhoodPage from '../../../components/templates/NeighborhoodPage';
import { getNeighborhoodBySlug } from '../../../data/geoAreas';

const NeighborhoodDowntownAustinLuxuryDowntownCore78701 = () => {
  const data = getNeighborhoodBySlug('downtown-austin-luxury', 'downtown-core-78701');
  if (!data) return null;
  return <NeighborhoodPage hub={data.hub} neighborhood={data.neighborhood} />;
};

export default NeighborhoodDowntownAustinLuxuryDowntownCore78701;
