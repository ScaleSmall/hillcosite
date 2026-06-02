import React from 'react';
import ServiceLocationPage from '../../components/templates/ServiceLocationPage';
import { createServiceLocationConfig } from '../../config/serviceLocationFactory';

const config = createServiceLocationConfig('commercial', 'rollingwood');

const CommercialPaintingRollingwood = () => <ServiceLocationPage config={config} />;

export default CommercialPaintingRollingwood;
