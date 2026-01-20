import React from 'react';
import NeighborhoodPage from '../../../components/templates/NeighborhoodPage';
import { getNeighborhoodBySlug } from '../../../data/geoAreas';

const NeighborhoodCircleCRanchAndSouthwestAustinShadyHollow = () => {
  const data = getNeighborhoodBySlug('circle-c-ranch-and-southwest-austin', 'shady-hollow');
  if (!data) return null;
  return <NeighborhoodPage hub={data.hub} neighborhood={data.neighborhood} />;
};

export default NeighborhoodCircleCRanchAndSouthwestAustinShadyHollow;
