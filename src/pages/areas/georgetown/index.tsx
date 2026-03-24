import React from 'react';
import HubAreaPage from '../../../components/templates/HubAreaPage';
import { getHubBySlug } from '../../../data/geoAreas';

const HubGeorgetown = () => {
  const hub = getHubBySlug('georgetown');
  if (!hub) return null;
  return <HubAreaPage hub={hub} />;
};

export default HubGeorgetown;
