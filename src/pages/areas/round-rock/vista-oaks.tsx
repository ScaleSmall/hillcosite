import React from 'react';
import NeighborhoodPage from '../../../components/templates/NeighborhoodPage';
import { getNeighborhoodBySlug } from '../../../data/geoAreas';

const NeighborhoodRoundRockVistaOaks = () => {
  const data = getNeighborhoodBySlug('round-rock', 'vista-oaks');
  if (!data) return null;
  return <NeighborhoodPage hub={data.hub} neighborhood={data.neighborhood} />;
};

export default NeighborhoodRoundRockVistaOaks;
