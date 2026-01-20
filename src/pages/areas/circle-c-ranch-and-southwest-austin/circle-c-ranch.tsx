import React from 'react';
import NeighborhoodPage from '../../../components/templates/NeighborhoodPage';
import { getNeighborhoodBySlug } from '../../../data/geoAreas';

const NeighborhoodCircleCRanchAndSouthwestAustinCircleCRanch = () => {
  const data = getNeighborhoodBySlug('circle-c-ranch-and-southwest-austin', 'circle-c-ranch');
  if (!data) return null;
  return <NeighborhoodPage hub={data.hub} neighborhood={data.neighborhood} />;
};

export default NeighborhoodCircleCRanchAndSouthwestAustinCircleCRanch;
