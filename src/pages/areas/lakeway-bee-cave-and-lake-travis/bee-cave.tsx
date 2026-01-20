import React from 'react';
import NeighborhoodPage from '../../../components/templates/NeighborhoodPage';
import { getNeighborhoodBySlug } from '../../../data/geoAreas';

const NeighborhoodLakewayBeeCaveAndLakeTravisBeeCave = () => {
  const data = getNeighborhoodBySlug('lakeway-bee-cave-and-lake-travis', 'bee-cave');
  if (!data) return null;
  return <NeighborhoodPage hub={data.hub} neighborhood={data.neighborhood} />;
};

export default NeighborhoodLakewayBeeCaveAndLakeTravisBeeCave;
