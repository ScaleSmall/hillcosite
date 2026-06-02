import React from 'react';
import ServiceLocationPage from '../../components/templates/ServiceLocationPage';
import { createServiceLocationConfig } from '../../config/serviceLocationFactory';

const config = createServiceLocationConfig('cabinet', 'barton-creek');

const CabinetRefinishingBartonCreek = () => <ServiceLocationPage config={config} />;

export default CabinetRefinishingBartonCreek;
