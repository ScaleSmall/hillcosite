import React from 'react';
import NeighborhoodPage from '../../../components/templates/NeighborhoodPage';
import { getNeighborhoodBySlug } from '../../../data/geoAreas';

const NeighborhoodBartonCreekLakeAustinWestEstates = () => {
  const data = getNeighborhoodBySlug('barton-creek', 'lake-austin-west-estates');
  if (!data) return null;
  return <NeighborhoodPage hub={data.hub} neighborhood={data.neighborhood} />;
};

export default NeighborhoodBartonCreekLakeAustinWestEstates;
