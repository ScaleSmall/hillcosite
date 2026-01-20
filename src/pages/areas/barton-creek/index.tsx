import React from 'react';
import HubAreaPage from '../../../components/templates/HubAreaPage';
import { getHubBySlug } from '../../../data/geoAreas';

const HubBartonCreek = () => {
  const hub = getHubBySlug('barton-creek');
  if (!hub) return null;
  return <HubAreaPage hub={hub} />;
};

export default HubBartonCreek;
