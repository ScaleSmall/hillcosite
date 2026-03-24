import React from 'react';
import HubAreaPage from '../../../components/templates/HubAreaPage';
import { getHubBySlug } from '../../../data/geoAreas';

const HubLeander = () => {
  const hub = getHubBySlug('leander');
  if (!hub) return null;
  return <HubAreaPage hub={hub} />;
};

export default HubLeander;
