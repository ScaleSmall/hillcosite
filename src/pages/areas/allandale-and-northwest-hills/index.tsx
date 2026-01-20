import React from 'react';
import HubAreaPage from '../../../components/templates/HubAreaPage';
import { getHubBySlug } from '../../../data/geoAreas';

const HubAllandaleAndNorthwestHills = () => {
  const hub = getHubBySlug('allandale-and-northwest-hills');
  if (!hub) return null;
  return <HubAreaPage hub={hub} />;
};

export default HubAllandaleAndNorthwestHills;
