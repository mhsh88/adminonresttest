import React from 'react';
import {maxLength, Create, Edit, SimpleForm, DisabledInput, TextInput, DateInput, LongTextInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton, NumberInput } from 'admin-on-rest';


export const CityGateStationCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="province" validate={maxLength(255)} options={{ fullWidth: true }} />
            <TextInput source="city" validate={maxLength(255)} options={{ fullWidth: true }} />
            <TextInput source="region" validate={maxLength(255)} options={{ fullWidth: true }} />
            <TextInput source="address" validate={maxLength(1000)} options={{ fullWidth: true }} />
            <NumberInput source="nominalCapacity" validate={maxLength(1000)} options={{ fullWidth: true }} />
        </SimpleForm>
    </Create>
);

export default CityGateStationCreate;
