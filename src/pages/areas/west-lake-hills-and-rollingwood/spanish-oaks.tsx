import React from 'react';
import NeighborhoodPage from '../../../components/templates/NeighborhoodPage';
import { getNeighborhoodBySlug } from '../../../data/geoAreas';

const NeighborhoodWestLakeHillsAndRollingwoodSpanishOaks = () => {
  const data = getNeighborhoodBySlug('west-lake-hills-and-rollingwood', 'spanish-oaks');
  if (!data) return null;
  return <NeighborhoodPage hub={data.hub} neighborhood={data.neighborhood} />;
};

export default NeighborhoodWestLakeHillsAndRollingwoodSpanishOaks;
