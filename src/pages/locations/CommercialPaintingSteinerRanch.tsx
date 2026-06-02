import React from 'react';
import ServiceLocationPage from '../../components/templates/ServiceLocationPage';
import { createServiceLocationConfig } from '../../config/serviceLocationFactory';

const config = createServiceLocationConfig('commercial', 'steiner-ranch');

const CommercialPaintingSteinerRanch = () => <ServiceLocationPage config={config} />;

export default CommercialPaintingSteinerRanch;
