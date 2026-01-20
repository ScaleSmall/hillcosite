import React from 'react';
import HubAreaPage from '../../../components/templates/HubAreaPage';
import { getHubBySlug } from '../../../data/geoAreas';

const HubCircleCRanchAndSouthwestAustin = () => {
  const hub = getHubBySlug('circle-c-ranch-and-southwest-austin');
  if (!hub) return null;
  return <HubAreaPage hub={hub} />;
};

export default HubCircleCRanchAndSouthwestAustin;
