import React from 'react';
import { Retrieve } from 'admin-on-rest';
import CityGateStationTitle from './CityGateStationTitle';

const CityGateStationRetrieve = props => <Retrieve {...props} title={<CityGateStationTitle />} />;

export default CityGateStationRetrieve;
