import React from 'react';
import NeighborhoodPage from '../../../components/templates/NeighborhoodPage';
import { getNeighborhoodBySlug } from '../../../data/geoAreas';

const NeighborhoodCedarParkButtercupCreek = () => {
  const data = getNeighborhoodBySlug('cedar-park', 'buttercup-creek');
  if (!data) return null;
  return <NeighborhoodPage hub={data.hub} neighborhood={data.neighborhood} />;
};

export default NeighborhoodCedarParkButtercupCreek;
