import React from 'react';
import {
    NumberInput,
    Create,
    Edit,
    SimpleForm,
    DisabledInput,
    TextInput,
    DateInput,
    LongTextInput,
    ReferenceManyField,
    Datagrid,
    TextField,
    DateField,
    EditButton,
    ReferenceInput, SelectInput
} from 'admin-on-rest';

export const CalculationEdit = (props) => (
    <Edit {...props} >
        <SimpleForm>
            <DisabledInput source="id"/>
            <ReferenceInput label="Station" source="cityGateStation.id" reference="citygatestations" allowEmpty >
                <SelectInput optionText="city" />
            </ReferenceInput>
            <ReferenceInput label="Condition" source="state.id" reference="states" allowEmpty >
                <SelectInput optionText="id" />
            </ReferenceInput>
            <ReferenceInput label="Natural Gas" source="gas.id" reference="gass">
                <SelectInput source="name" />
            </ReferenceInput>

        </SimpleForm>
    </Edit>
);

export default CalculationEdit;
