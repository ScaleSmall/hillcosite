import React from 'react';
import NeighborhoodPage from '../../../components/templates/NeighborhoodPage';
import { getNeighborhoodBySlug } from '../../../data/geoAreas';

const NeighborhoodAllandaleAndNorthwestHillsQuailCreek = () => {
  const data = getNeighborhoodBySlug('allandale-and-northwest-hills', 'quail-creek');
  if (!data) return null;
  return <NeighborhoodPage hub={data.hub} neighborhood={data.neighborhood} />;
};

export default NeighborhoodAllandaleAndNorthwestHillsQuailCreek;
