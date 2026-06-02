import React from 'react';
import ServiceLocationPage from '../../components/templates/ServiceLocationPage';
import { createServiceLocationConfig } from '../../config/serviceLocationFactory';

const config = createServiceLocationConfig('interior', 'bee-cave');

const InteriorPaintingBeeCave = () => <ServiceLocationPage config={config} />;

export default InteriorPaintingBeeCave;
