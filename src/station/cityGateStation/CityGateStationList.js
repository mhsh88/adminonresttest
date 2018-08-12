import React from 'react';
import {
    ColumnActions,
    List,
    Datagrid,
    TextField, EditButton, ReferenceField,
} from 'admin-on-rest';
import CityGateStationFilters from './CityGateStationFilters';
import UserReferenceField from '../user/UserReferenceField';

export const CityGateStationList = props => (
    <List {...props} filters={<CityGateStationFilters />} >
        <Datagrid bodyOptions={{ stripedRows: true, showRowHover: true }} >

            <TextField source="id"/>
            <TextField source="province" />
            <TextField source="city" />
            <TextField source="state" />
            <TextField source="region" />
            <TextField source="address" />
            <TextField source="nominalCapacity" />
            <TextField source="user.fullName"/>
            <UserReferenceField />
            <EditButton />
        </Datagrid>
    </List>
);

export default CityGateStationList;