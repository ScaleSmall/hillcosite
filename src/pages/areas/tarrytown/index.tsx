import React from 'react';
import HubAreaPage from '../../../components/templates/HubAreaPage';
import { getHubBySlug } from '../../../data/geoAreas';

const HubTarrytown = () => {
  const hub = getHubBySlug('tarrytown');
  if (!hub) return null;
  return <HubAreaPage hub={hub} />;
};

export default HubTarrytown;
