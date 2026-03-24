import React from 'react';
import HubAreaPage from '../../../components/templates/HubAreaPage';
import { getHubBySlug } from '../../../data/geoAreas';

const HubCedarPark = () => {
  const hub = getHubBySlug('cedar-park');
  if (!hub) return null;
  return <HubAreaPage hub={hub} />;
};

export default HubCedarPark;
