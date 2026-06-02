import React from 'react';
import ServiceLocationPage from '../../components/templates/ServiceLocationPage';
import { createServiceLocationConfig } from '../../config/serviceLocationFactory';

const config = createServiceLocationConfig('exterior', 'rollingwood');

const ExteriorPaintingRollingwood = () => <ServiceLocationPage config={config} />;

export default ExteriorPaintingRollingwood;
