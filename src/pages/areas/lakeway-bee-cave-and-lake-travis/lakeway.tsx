import React from 'react';
import NeighborhoodPage from '../../../components/templates/NeighborhoodPage';
import { getNeighborhoodBySlug } from '../../../data/geoAreas';

const NeighborhoodLakewayBeeCaveAndLakeTravisLakeway = () => {
  const data = getNeighborhoodBySlug('lakeway-bee-cave-and-lake-travis', 'lakeway');
  if (!data) return null;
  return <NeighborhoodPage hub={data.hub} neighborhood={data.neighborhood} />;
};

export default NeighborhoodLakewayBeeCaveAndLakeTravisLakeway;
