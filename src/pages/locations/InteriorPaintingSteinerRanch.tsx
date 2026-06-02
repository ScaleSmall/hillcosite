import React from 'react';
import ServiceLocationPage from '../../components/templates/ServiceLocationPage';
import { createServiceLocationConfig } from '../../config/serviceLocationFactory';

const config = createServiceLocationConfig('interior', 'steiner-ranch');

const InteriorPaintingSteinerRanch = () => <ServiceLocationPage config={config} />;

export default InteriorPaintingSteinerRanch;
