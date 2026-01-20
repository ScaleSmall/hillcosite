import React from 'react';
import HubAreaPage from '../../../components/templates/HubAreaPage';
import { getHubBySlug } from '../../../data/geoAreas';

const HubSteinerRanch78732 = () => {
  const hub = getHubBySlug('steiner-ranch-78732');
  if (!hub) return null;
  return <HubAreaPage hub={hub} />;
};

export default HubSteinerRanch78732;
