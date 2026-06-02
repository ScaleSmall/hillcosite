import React from 'react';
import ServiceLocationPage from '../../components/templates/ServiceLocationPage';
import { createServiceLocationConfig } from '../../config/serviceLocationFactory';

const config = createServiceLocationConfig('cabinet', 'bee-cave');

const CabinetRefinishingBeeCave = () => <ServiceLocationPage config={config} />;

export default CabinetRefinishingBeeCave;
