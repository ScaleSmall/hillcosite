import React from 'react';
import NeighborhoodPage from '../../../components/templates/NeighborhoodPage';
import { getNeighborhoodBySlug } from '../../../data/geoAreas';

const NeighborhoodCircleCRanchAndSouthwestAustinLostCreek = () => {
  const data = getNeighborhoodBySlug('circle-c-ranch-and-southwest-austin', 'lost-creek');
  if (!data) return null;
  return <NeighborhoodPage hub={data.hub} neighborhood={data.neighborhood} />;
};

export default NeighborhoodCircleCRanchAndSouthwestAustinLostCreek;
