import React from 'react';
import NeighborhoodPage from '../../../components/templates/NeighborhoodPage';
import { getNeighborhoodBySlug } from '../../../data/geoAreas';

const NeighborhoodRoundRockMayfieldRanch = () => {
  const data = getNeighborhoodBySlug('round-rock', 'mayfield-ranch');
  if (!data) return null;
  return <NeighborhoodPage hub={data.hub} neighborhood={data.neighborhood} />;
};

export default NeighborhoodRoundRockMayfieldRanch;
