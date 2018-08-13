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
    TextField,
    ReferenceArrayInput,
    SelectArrayInput
} from 'admin-on-rest';


export const HeaterCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <DisabledInput source="id"/>
            <NumberInput source="efficiency" validate={[required, maxValue(100),minValue(0)]} />
            <ReferenceArrayInput source="burners" reference="burners" allowEmpty validate={required}>
                <SelectArrayInput optionText="oxygenPercent" />
            </ReferenceArrayInput>
        </SimpleForm>
    </Create>
);

export default HeaterCreate;
