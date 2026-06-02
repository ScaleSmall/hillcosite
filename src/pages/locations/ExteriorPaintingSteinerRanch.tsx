import React from 'react';
import ServiceLocationPage from '../../components/templates/ServiceLocationPage';
import { createServiceLocationConfig } from '../../config/serviceLocationFactory';

const config = createServiceLocationConfig('exterior', 'steiner-ranch');

const ExteriorPaintingSteinerRanch = () => <ServiceLocationPage config={config} />;

export default ExteriorPaintingSteinerRanch;
