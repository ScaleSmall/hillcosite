import React from 'react';
import NeighborhoodPage from '../../../components/templates/NeighborhoodPage';
import { getNeighborhoodBySlug } from '../../../data/geoAreas';

const NeighborhoodSteinerRanch78732DavenportRanch = () => {
  const data = getNeighborhoodBySlug('steiner-ranch-78732', 'davenport-ranch');
  if (!data) return null;
  return <NeighborhoodPage hub={data.hub} neighborhood={data.neighborhood} />;
};

export default NeighborhoodSteinerRanch78732DavenportRanch;
