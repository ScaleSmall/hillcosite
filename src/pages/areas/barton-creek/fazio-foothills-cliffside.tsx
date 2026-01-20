import React from 'react';
import NeighborhoodPage from '../../../components/templates/NeighborhoodPage';
import { getNeighborhoodBySlug } from '../../../data/geoAreas';

const NeighborhoodBartonCreekFazioFoothillsCliffside = () => {
  const data = getNeighborhoodBySlug('barton-creek', 'fazio-foothills-cliffside');
  if (!data) return null;
  return <NeighborhoodPage hub={data.hub} neighborhood={data.neighborhood} />;
};

export default NeighborhoodBartonCreekFazioFoothillsCliffside;
