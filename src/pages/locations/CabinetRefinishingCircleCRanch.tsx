import React from 'react';
import ServiceLocationPage from '../../components/templates/ServiceLocationPage';
import { createServiceLocationConfig } from '../../config/serviceLocationFactory';

const config = createServiceLocationConfig('cabinet', 'circle-c-ranch');

const CabinetRefinishingCircleCRanch = () => <ServiceLocationPage config={config} />;

export default CabinetRefinishingCircleCRanch;
