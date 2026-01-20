import React from 'react';
import NeighborhoodPage from '../../../components/templates/NeighborhoodPage';
import { getNeighborhoodBySlug } from '../../../data/geoAreas';

const NeighborhoodWestLakeHillsAndRollingwoodRollingwood = () => {
  const data = getNeighborhoodBySlug('west-lake-hills-and-rollingwood', 'rollingwood');
  if (!data) return null;
  return <NeighborhoodPage hub={data.hub} neighborhood={data.neighborhood} />;
};

export default NeighborhoodWestLakeHillsAndRollingwoodRollingwood;
