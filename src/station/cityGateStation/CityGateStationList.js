import React from 'react';
import {
    ColumnActions,
    List,
    Datagrid,
    TextField, EditButton,
} from 'admin-on-rest';
import CityGateStationFilters from './CityGateStationFilters';

export const CityGateStationList = props => (
    <List {...props} filters={<CityGateStationFilters />} >
        <Datagrid bodyOptions={{ stripedRows: true, showRowHover: true }} >
            <TextField source="user.id"/>
            <TextField source="province" />
            <TextField source="city" />
            <TextField source="state" />
            <TextField source="region" />
            <TextField source="address" />
            <TextField source="nominalCapacity" />
            <EditButton />
        </Datagrid>
    </List>
);

export default CityGateStationList;