import React from 'react';
import ServiceLocationPage from '../../components/templates/ServiceLocationPage';
import { createServiceLocationConfig } from '../../config/serviceLocationFactory';

const config = createServiceLocationConfig('commercial', 'bee-cave');

const CommercialPaintingBeeCave = () => <ServiceLocationPage config={config} />;

export default CommercialPaintingBeeCave;
