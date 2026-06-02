import React from 'react';
import ServiceLocationPage from '../../components/templates/ServiceLocationPage';
import { createServiceLocationConfig } from '../../config/serviceLocationFactory';

const config = createServiceLocationConfig('interior', 'rollingwood');

const InteriorPaintingRollingwood = () => <ServiceLocationPage config={config} />;

export default InteriorPaintingRollingwood;
