import React from 'react';
import { Create, Edit, SimpleForm, DisabledInput, TextInput, DateInput, LongTextInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton } from 'admin-on-rest';
import RichTextInput from 'aor-rich-text-input';

export const CityGateStationCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="province" />
            <TextInput source="city" options={{ multiLine: true }} />
            <RichTextInput source="region" />
        </SimpleForm>
    </Create>
);

export default CityGateStationCreate;
