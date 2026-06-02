import React from 'react';
import ServiceLocationPage from '../../components/templates/ServiceLocationPage';
import { createServiceLocationConfig } from '../../config/serviceLocationFactory';

const config = createServiceLocationConfig('cabinet', 'rollingwood');

const CabinetRefinishingRollingwood = () => <ServiceLocationPage config={config} />;

export default CabinetRefinishingRollingwood;
