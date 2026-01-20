import React from 'react';
import NeighborhoodPage from '../../../components/templates/NeighborhoodPage';
import { getNeighborhoodBySlug } from '../../../data/geoAreas';

const NeighborhoodBartonCreekSpyglassBartonsBluff = () => {
  const data = getNeighborhoodBySlug('barton-creek', 'spyglass-bartons-bluff');
  if (!data) return null;
  return <NeighborhoodPage hub={data.hub} neighborhood={data.neighborhood} />;
};

export default NeighborhoodBartonCreekSpyglassBartonsBluff;
