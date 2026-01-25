import React from 'react';
import NeighborhoodPage from '../../../components/templates/NeighborhoodPage';
import { getNeighborhoodBySlug } from '../../../data/geoAreas';

const NeighborhoodPembertonHeightsAndOldWestAustinHistoricLuxuryBrykerWoods = () => {
  const data = getNeighborhoodBySlug('pemberton-heights-and-old-west-austin-historic-luxury', 'bryker-woods');
  if (!data) return null;
  return <NeighborhoodPage hub={data.hub} neighborhood={data.neighborhood} />;
};

export default NeighborhoodPembertonHeightsAndOldWestAustinHistoricLuxuryBrykerWoods;
