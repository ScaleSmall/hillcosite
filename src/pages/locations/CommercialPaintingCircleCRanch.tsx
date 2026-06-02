import React from 'react';
import ServiceLocationPage from '../../components/templates/ServiceLocationPage';
import { createServiceLocationConfig } from '../../config/serviceLocationFactory';

const config = createServiceLocationConfig('commercial', 'circle-c-ranch');

const CommercialPaintingCircleCRanch = () => <ServiceLocationPage config={config} />;

export default CommercialPaintingCircleCRanch;
