import React from 'react';
import HubAreaPage from '../../../components/templates/HubAreaPage';
import { getHubBySlug } from '../../../data/geoAreas';

const HubNorthAustin = () => {
  const hub = getHubBySlug('north-austin');
  if (!hub) return null;
  return <HubAreaPage hub={hub} />;
};

export default HubNorthAustin;
