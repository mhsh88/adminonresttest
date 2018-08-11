import React from 'react';
import {
    Filter, SimpleForm,
    TextInput, NumberInput
} from 'admin-on-rest';

const CityGateStationFilters = props => (
    <Filter {...props}>
        <TextInput source="id" />
        <TextInput source="city" />
        <TextInput source="region" />
        <TextInput source="address" />
        <NumberInput source="nominalCapacity" />
    </Filter>
);

export default CityGateStationFilters;
