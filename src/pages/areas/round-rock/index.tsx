import React from 'react';
import HubAreaPage from '../../../components/templates/HubAreaPage';
import { getHubBySlug } from '../../../data/geoAreas';

const HubRoundRock = () => {
  const hub = getHubBySlug('round-rock');
  if (!hub) return null;
  return <HubAreaPage hub={hub} />;
};

export default HubRoundRock;
