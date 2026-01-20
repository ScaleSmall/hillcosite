import React from 'react';
import NeighborhoodPage from '../../../components/templates/NeighborhoodPage';
import { getNeighborhoodBySlug } from '../../../data/geoAreas';

const NeighborhoodAllandaleAndNorthwestHillsTriangleNorthLamar = () => {
  const data = getNeighborhoodBySlug('allandale-and-northwest-hills', 'triangle-north-lamar');
  if (!data) return null;
  return <NeighborhoodPage hub={data.hub} neighborhood={data.neighborhood} />;
};

export default NeighborhoodAllandaleAndNorthwestHillsTriangleNorthLamar;
