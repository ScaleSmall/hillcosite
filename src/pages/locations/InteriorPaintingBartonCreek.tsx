import React from 'react';
import ServiceLocationPage from '../../components/templates/ServiceLocationPage';
import { createServiceLocationConfig } from '../../config/serviceLocationFactory';

const config = createServiceLocationConfig('interior', 'barton-creek');

const InteriorPaintingBartonCreek = () => <ServiceLocationPage config={config} />;

export default InteriorPaintingBartonCreek;
