import React from 'react';
import ServiceLocationPage from '../../components/templates/ServiceLocationPage';
import { createServiceLocationConfig } from '../../config/serviceLocationFactory';

const config = createServiceLocationConfig('exterior', 'circle-c-ranch');

const ExteriorPaintingCircleCRanch = () => <ServiceLocationPage config={config} />;

export default ExteriorPaintingCircleCRanch;
