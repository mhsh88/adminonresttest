import React from 'react';
import {SelectInput, maxLength,required, Create, Edit, SimpleForm,ReferenceInput, DisabledInput, TextInput, DateInput, LongTextInput, ReferenceManyField, Datagrid, DateField, EditButton, NumberInput, BooleanInput } from 'admin-on-rest';


export const GasCreate = (props) => (
    <Create {...props}>
        <SimpleForm>

            <TextInput source="name"/>
            <NumberInput source="nitrogen"/>
            <NumberInput source="carbonDioxide"/>
            <NumberInput source="methan"/>
            <NumberInput source="ethane"/>
            <NumberInput source="propane"/>
            <NumberInput source="nButane"/>
            <NumberInput source="isoButane"/>
            <NumberInput source="nPentane"/>
            <NumberInput source="isoPentane"/>
            <NumberInput source="hexane"/>
            <NumberInput source="heptane"/>
            <NumberInput source="octane"/>
            <NumberInput source="nonane"/>
            <NumberInput source="decane"/>
            <NumberInput source="hydrogen"/>
            <NumberInput source="oxygen"/>
            <NumberInput source="carbonMonoxide"/>
            <NumberInput source="water"/>
            <NumberInput source="hydrogenSulfide"/>
            <NumberInput source="helium"/>
            <NumberInput source="argon"/>
            <BooleanInput source="moleWightPersent" />
        </SimpleForm>
    </Create>
);

export default GasCreate;
