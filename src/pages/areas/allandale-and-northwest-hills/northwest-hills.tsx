import React from 'react';
import NeighborhoodPage from '../../../components/templates/NeighborhoodPage';
import { getNeighborhoodBySlug } from '../../../data/geoAreas';

const NeighborhoodAllandaleAndNorthwestHillsNorthwestHills = () => {
  const data = getNeighborhoodBySlug('allandale-and-northwest-hills', 'northwest-hills');
  if (!data) return null;
  return <NeighborhoodPage hub={data.hub} neighborhood={data.neighborhood} />;
};

export default NeighborhoodAllandaleAndNorthwestHillsNorthwestHills;
