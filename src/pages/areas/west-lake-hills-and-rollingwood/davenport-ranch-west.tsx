import React from 'react';
import NeighborhoodPage from '../../../components/templates/NeighborhoodPage';
import { getNeighborhoodBySlug } from '../../../data/geoAreas';

const NeighborhoodWestLakeHillsAndRollingwoodDavenportRanch = () => {
  const data = getNeighborhoodBySlug('west-lake-hills-and-rollingwood', 'davenport-ranch');
  if (!data) return null;
  return <NeighborhoodPage hub={data.hub} neighborhood={data.neighborhood} />;
};

export default NeighborhoodWestLakeHillsAndRollingwoodDavenportRanch;
