import React from 'react';
import ServiceLocationPage from '../../components/templates/ServiceLocationPage';
import { createServiceLocationConfig } from '../../config/serviceLocationFactory';

const config = createServiceLocationConfig('cabinet', 'steiner-ranch');

const CabinetRefinishingSteinerRanch = () => <ServiceLocationPage config={config} />;

export default CabinetRefinishingSteinerRanch;
