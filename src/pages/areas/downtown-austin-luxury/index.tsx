import React from 'react';
import HubAreaPage from '../../../components/templates/HubAreaPage';
import { getHubBySlug } from '../../../data/geoAreas';

const HubDowntownAustinLuxury = () => {
  const hub = getHubBySlug('downtown-austin-luxury');
  if (!hub) return null;
  return <HubAreaPage hub={hub} />;
};

export default HubDowntownAustinLuxury;
