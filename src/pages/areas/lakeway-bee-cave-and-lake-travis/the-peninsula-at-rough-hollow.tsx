import React from 'react';
import NeighborhoodPage from '../../../components/templates/NeighborhoodPage';
import { getNeighborhoodBySlug } from '../../../data/geoAreas';

const NeighborhoodLakewayBeeCaveAndLakeTravisThePeninsulaAtRoughHollow = () => {
  const data = getNeighborhoodBySlug('lakeway-bee-cave-and-lake-travis', 'the-peninsula-at-rough-hollow');
  if (!data) return null;
  return <NeighborhoodPage hub={data.hub} neighborhood={data.neighborhood} />;
};

export default NeighborhoodLakewayBeeCaveAndLakeTravisThePeninsulaAtRoughHollow;
