import React from 'react';
import HubAreaPage from '../../../components/templates/HubAreaPage';
import { getHubBySlug } from '../../../data/geoAreas';

const HubWestLakeHillsAndRollingwood = () => {
  const hub = getHubBySlug('west-lake-hills-and-rollingwood');
  if (!hub) return null;
  return <HubAreaPage hub={hub} />;
};

export default HubWestLakeHillsAndRollingwood;
