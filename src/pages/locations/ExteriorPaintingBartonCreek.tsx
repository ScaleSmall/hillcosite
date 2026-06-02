import React from 'react';
import ServiceLocationPage from '../../components/templates/ServiceLocationPage';
import { createServiceLocationConfig } from '../../config/serviceLocationFactory';

const config = createServiceLocationConfig('exterior', 'barton-creek');

const ExteriorPaintingBartonCreek = () => <ServiceLocationPage config={config} />;

export default ExteriorPaintingBartonCreek;
