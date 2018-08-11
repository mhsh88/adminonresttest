import React from 'react';
import { Delete } from 'admin-on-rest';
import CityGateStationTitle from './CityGateStationTitle';

const CityGateStationDelete = props => <Delete {...props} title={<CityGateStationTitle />} />;

export default CityGateStationDelete;
