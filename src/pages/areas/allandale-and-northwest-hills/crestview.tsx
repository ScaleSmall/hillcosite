import React from 'react';
import NeighborhoodPage from '../../../components/templates/NeighborhoodPage';
import { getNeighborhoodBySlug } from '../../../data/geoAreas';

const NeighborhoodAllandaleAndNorthwestHillsCrestview = () => {
  const data = getNeighborhoodBySlug('allandale-and-northwest-hills', 'crestview');
  if (!data) return null;
  return <NeighborhoodPage hub={data.hub} neighborhood={data.neighborhood} />;
};

export default NeighborhoodAllandaleAndNorthwestHillsCrestview;
