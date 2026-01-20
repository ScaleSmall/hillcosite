import React from 'react';
import NeighborhoodPage from '../../../components/templates/NeighborhoodPage';
import { getNeighborhoodBySlug } from '../../../data/geoAreas';

const NeighborhoodCircleCRanchAndSouthwestAustinGreyRock = () => {
  const data = getNeighborhoodBySlug('circle-c-ranch-and-southwest-austin', 'grey-rock');
  if (!data) return null;
  return <NeighborhoodPage hub={data.hub} neighborhood={data.neighborhood} />;
};

export default NeighborhoodCircleCRanchAndSouthwestAustinGreyRock;
