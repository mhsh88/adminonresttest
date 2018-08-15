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
    SelectArrayInput,
    TabbedForm,
    FormTab
} from 'admin-on-rest';



export const HeaterCreate = (props) => (
    <Create {...props}>
        <TabbedForm>
            <FormTab label="resources.organizationassessments.tabs.step1">
                <DisabledInput source="id"/>
                <NumberInput source="efficiency" validate={[required, maxValue(100),minValue(0)]} />
                <ReferenceArrayInput source="id" reference="burners"
                                     filterToQuery={searchText => ({ oxygenPercent: searchText })}
                                     validate={required} allowEmpty>
                    <SelectArrayInput optionText="oxygenPercent" />
                </ReferenceArrayInput>
                <ReferenceInput source="id" reference="burners" validate={required} allowEmpty >
                    <SelectInput optionText="oxygenPercent"  />
                </ReferenceInput>
            </FormTab>
            <FormTab label="resources.organizationassessments.tabs.step1"/>
        </TabbedForm>


    </Create>
);

export default HeaterCreate;
