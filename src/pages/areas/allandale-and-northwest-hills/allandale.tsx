import React from 'react';
import NeighborhoodPage from '../../../components/templates/NeighborhoodPage';
import { getNeighborhoodBySlug } from '../../../data/geoAreas';

const NeighborhoodAllandaleAndNorthwestHillsAllandale = () => {
  const data = getNeighborhoodBySlug('allandale-and-northwest-hills', 'allandale');
  if (!data) return null;
  return <NeighborhoodPage hub={data.hub} neighborhood={data.neighborhood} />;
};

export default NeighborhoodAllandaleAndNorthwestHillsAllandale;
