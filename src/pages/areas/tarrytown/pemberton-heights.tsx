import React from 'react';
import NeighborhoodPage from '../../../components/templates/NeighborhoodPage';
import { getNeighborhoodBySlug } from '../../../data/geoAreas';

const NeighborhoodTarrytownPembertonHeights = () => {
  const data = getNeighborhoodBySlug('tarrytown', 'pemberton-heights');
  if (!data) return null;
  return <NeighborhoodPage hub={data.hub} neighborhood={data.neighborhood} />;
};

export default NeighborhoodTarrytownPembertonHeights;
