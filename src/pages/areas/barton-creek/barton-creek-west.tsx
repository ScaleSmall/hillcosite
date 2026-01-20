import React from 'react';
import NeighborhoodPage from '../../../components/templates/NeighborhoodPage';
import { getNeighborhoodBySlug } from '../../../data/geoAreas';

const NeighborhoodBartonCreekBartonCreekWest = () => {
  const data = getNeighborhoodBySlug('barton-creek', 'barton-creek-west');
  if (!data) return null;
  return <NeighborhoodPage hub={data.hub} neighborhood={data.neighborhood} />;
};

export default NeighborhoodBartonCreekBartonCreekWest;
