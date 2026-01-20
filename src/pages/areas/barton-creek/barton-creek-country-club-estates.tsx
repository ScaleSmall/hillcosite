import React from 'react';
import NeighborhoodPage from '../../../components/templates/NeighborhoodPage';
import { getNeighborhoodBySlug } from '../../../data/geoAreas';

const NeighborhoodBartonCreekBartonCreekCountryClubEstates = () => {
  const data = getNeighborhoodBySlug('barton-creek', 'barton-creek-country-club-estates');
  if (!data) return null;
  return <NeighborhoodPage hub={data.hub} neighborhood={data.neighborhood} />;
};

export default NeighborhoodBartonCreekBartonCreekCountryClubEstates;
