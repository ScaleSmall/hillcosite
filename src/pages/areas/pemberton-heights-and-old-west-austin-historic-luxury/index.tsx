import React from 'react';
import HubAreaPage from '../../../components/templates/HubAreaPage';
import { getHubBySlug } from '../../../data/geoAreas';

const HubPembertonHeightsAndOldWestAustinHistoricLuxury = () => {
  const hub = getHubBySlug('pemberton-heights-and-old-west-austin-historic-luxury');
  if (!hub) return null;
  return <HubAreaPage hub={hub} />;
};

export default HubPembertonHeightsAndOldWestAustinHistoricLuxury;
