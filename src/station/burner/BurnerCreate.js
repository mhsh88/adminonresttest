import React from 'react';
import {
    SelectInput,
    minValue,
    maxValue,
    maxLength,
    required,
    Create,
    Edit,
    SimpleForm,
    ReferenceInput,
    DisabledInput,
    TextInput,
    DateInput,
    LongTextInput,
    ReferenceManyField,
    Datagrid,
    DateField,
    EditButton,
    NumberInput,
    BooleanInput,
    TextField
} from 'admin-on-rest';


export const BurnerCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <DisabledInput source="id"/>
            <NumberInput source="oxygenPercent" validate={[required, maxValue(20.5),minValue(0)]}/>
            <NumberInput source="flueGasTemprature" validate={ [required, maxValue(500),minValue(-20)]} />
        </SimpleForm>
    </Create>
);

export default BurnerCreate;
