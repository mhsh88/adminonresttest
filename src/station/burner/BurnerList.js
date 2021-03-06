import React from 'react';
import {
    ColumnActions,
    List,
    Datagrid,
    TextField, EditButton, ReferenceField,BooleanField, DeleteButton
} from 'admin-on-rest';


export const BurnerList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="oxygenPercent"/>
            <TextField source="flueGasTemprature"/>
        </Datagrid>
    </List>
);

export default BurnerList;