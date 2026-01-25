import React from 'react';
import NeighborhoodPage from '../../../components/templates/NeighborhoodPage';
import { getNeighborhoodBySlug } from '../../../data/geoAreas';

const NeighborhoodPembertonHeightsAndOldWestAustinHistoricLuxuryClarksville = () => {
  const data = getNeighborhoodBySlug('pemberton-heights-and-old-west-austin-historic-luxury', 'clarksville');
  if (!data) return null;
  return <NeighborhoodPage hub={data.hub} neighborhood={data.neighborhood} />;
};

export default NeighborhoodPembertonHeightsAndOldWestAustinHistoricLuxuryClarksville;
