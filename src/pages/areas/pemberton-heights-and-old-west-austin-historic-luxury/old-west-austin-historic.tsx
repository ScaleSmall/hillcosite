import React from 'react';
import NeighborhoodPage from '../../../components/templates/NeighborhoodPage';
import { getNeighborhoodBySlug } from '../../../data/geoAreas';

const NeighborhoodPembertonHeightsAndOldWestAustinHistoricLuxuryOldWestAustin = () => {
  const data = getNeighborhoodBySlug('pemberton-heights-and-old-west-austin-historic-luxury', 'old-west-austin');
  if (!data) return null;
  return <NeighborhoodPage hub={data.hub} neighborhood={data.neighborhood} />;
};

export default NeighborhoodPembertonHeightsAndOldWestAustinHistoricLuxuryOldWestAustin;
