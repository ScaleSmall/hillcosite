import React from 'react';
import HubAreaPage from '../../../components/templates/HubAreaPage';
import { getHubBySlug } from '../../../data/geoAreas';

const HubLakewayBeeCaveAndLakeTravis = () => {
  const hub = getHubBySlug('lakeway-bee-cave-and-lake-travis');
  if (!hub) return null;
  return <HubAreaPage hub={hub} />;
};

export default HubLakewayBeeCaveAndLakeTravis;
