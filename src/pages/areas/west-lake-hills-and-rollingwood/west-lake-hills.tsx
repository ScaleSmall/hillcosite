import React from 'react';
import NeighborhoodPage from '../../../components/templates/NeighborhoodPage';
import { getNeighborhoodBySlug } from '../../../data/geoAreas';

const NeighborhoodWestLakeHillsAndRollingwoodWestLakeHills = () => {
  const data = getNeighborhoodBySlug('west-lake-hills-and-rollingwood', 'west-lake-hills');
  if (!data) return null;
  return <NeighborhoodPage hub={data.hub} neighborhood={data.neighborhood} />;
};

export default NeighborhoodWestLakeHillsAndRollingwoodWestLakeHills;
