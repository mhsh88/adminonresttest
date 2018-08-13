import React from 'react';
import {
    ColumnActions,
    List,
    Datagrid,
    TextField, EditButton, ReferenceField,BooleanField, DeleteButton
} from 'admin-on-rest';


export const HeaterList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="efficiency"/>
        </Datagrid>
    </List>
);

export default HeaterList;