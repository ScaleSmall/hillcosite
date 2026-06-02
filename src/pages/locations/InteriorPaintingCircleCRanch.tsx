import React from 'react';
import ServiceLocationPage from '../../components/templates/ServiceLocationPage';
import { createServiceLocationConfig } from '../../config/serviceLocationFactory';

const config = createServiceLocationConfig('interior', 'circle-c-ranch');

const InteriorPaintingCircleCRanch = () => <ServiceLocationPage config={config} />;

export default InteriorPaintingCircleCRanch;
