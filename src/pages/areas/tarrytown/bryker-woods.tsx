import React from 'react';
import NeighborhoodPage from '../../../components/templates/NeighborhoodPage';
import { getNeighborhoodBySlug } from '../../../data/geoAreas';

const NeighborhoodTarrytownBrykerWoods = () => {
  const data = getNeighborhoodBySlug('tarrytown', 'bryker-woods');
  if (!data) return null;
  return <NeighborhoodPage hub={data.hub} neighborhood={data.neighborhood} />;
};

export default NeighborhoodTarrytownBrykerWoods;
