import React from 'react';
import {SelectInput,ReferenceField, maxLength,required, Create, Edit, SimpleForm, ReferenceInput, DisabledInput, TextInput, DateInput, LongTextInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton, NumberInput } from 'admin-on-rest';


export const CityGateStationCreate = (props) => (
    <Create {...props}>
        <SimpleForm validate={required}>
            <DisabledInput source="id"/>
            <ReferenceInput label="Station" source="cityGateStation.id" reference="citygatestations" allowEmpty >
                <SelectInput optionText="city" />
            </ReferenceInput>
            <ReferenceInput label="Condition" source="state.id" reference="states" allowEmpty >
                <SelectInput optionText="id" />
            </ReferenceInput>
            <ReferenceInput label="Natural Gas" source="gas.id" reference="gass" allowEmpty>
                <SelectInput source="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);

export default CityGateStationCreate;
