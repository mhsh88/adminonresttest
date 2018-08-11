import React from 'react';
import {
    ColumnActions,
    List,
    Datagrid,
    TextField,
} from 'admin-on-rest';

export const CityGateStationList = props => (
    <List {...props}>
        <Datagrid >
            <TextField source="user.id"/>
            <TextField source="province" />
            <TextField source="city" />
            <TextField source="state" />
            <TextField source="region" />
            <TextField source="address" />
            <TextField source="nominalCapacity" />
        </Datagrid>
    </List>
);
