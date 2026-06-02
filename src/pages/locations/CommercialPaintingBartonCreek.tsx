import React from 'react';
import ServiceLocationPage from '../../components/templates/ServiceLocationPage';
import { createServiceLocationConfig } from '../../config/serviceLocationFactory';

const config = createServiceLocationConfig('commercial', 'barton-creek');

const CommercialPaintingBartonCreek = () => <ServiceLocationPage config={config} />;

export default CommercialPaintingBartonCreek;
