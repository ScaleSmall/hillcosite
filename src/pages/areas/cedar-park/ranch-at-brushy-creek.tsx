import React from 'react';
import NeighborhoodPage from '../../../components/templates/NeighborhoodPage';
import { getNeighborhoodBySlug } from '../../../data/geoAreas';

const NeighborhoodCedarParkRanchAtBrushyCreek = () => {
  const data = getNeighborhoodBySlug('cedar-park', 'ranch-at-brushy-creek');
  if (!data) return null;
  return <NeighborhoodPage hub={data.hub} neighborhood={data.neighborhood} />;
};

export default NeighborhoodCedarParkRanchAtBrushyCreek;
