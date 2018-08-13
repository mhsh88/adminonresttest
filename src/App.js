import 'babel-polyfill';
import React, { Component } from 'react';
import { Admin, Delete, Resource } from 'admin-on-rest';

import './App.css';

import authClient from './authClient';
import restClient from './restClient';
import sagas from './sagas';
import themeReducer from './themeReducer';
import Login from './Login';
import Layout from './Layout';
import Menu from './Menu';
import { Dashboard } from './dashboard';
import customRoutes from './routes';
import translations from './i18n';

import { VisitorList, VisitorEdit, VisitorDelete, VisitorIcon } from './visitors';
import { CommandList, CommandEdit, CommandIcon } from './commands';
import { ProductList, ProductCreate, ProductEdit, ProductIcon } from './products';
import { CategoryList, CategoryEdit, CategoryIcon } from './categories';
import { ReviewList, ReviewEdit, ReviewIcon } from './reviews';

import {
    CityGateStationList,
    CityGateStationCreate,
    CityGateStationEdit,
    CityGateStationDetails,
    CityGateStationDelete,
    CityGateStationRetrieve,
    CityGateStationIcon,
    GasList,
    GasCreate,
    GasEdit,
    CalculationList, CalculationCreate, CalculationEdit,
    ConditionList, ConditionCreate
} from './station';

class App extends Component {

    render() {
        return (
            <Admin
                title="CGS Admin"
                restClient={restClient}
                customReducers={{ theme: themeReducer }}
                customSagas={sagas}
                customRoutes={customRoutes}
                authClient={authClient}
                dashboard={Dashboard}
                loginPage={Login}
                appLayout={Layout}
                menu={Menu}
                messages={translations}
            >
                <Resource name="citygatestations" list={CityGateStationList} create={CityGateStationCreate} edit={CityGateStationEdit} show={CityGateStationDetails} remove={CityGateStationDelete} retrieve={CityGateStationRetrieve} icon={CityGateStationIcon} />
                <Resource name="calculations" list={CalculationList} create={CalculationCreate} edit={CalculationEdit}/>
                <Resource name="gass" list={GasList} create={GasCreate} edit={GasEdit}/>
                <Resource name="conditions" list={ConditionList} create={ConditionCreate}/>
                <Resource name="customers" list={VisitorList} edit={VisitorEdit} remove={VisitorDelete} icon={VisitorIcon} />
                <Resource name="commands" list={CommandList} edit={CommandEdit} remove={Delete} icon={CommandIcon} options={{ label: 'Orders' }}/>
                <Resource name="products" list={ProductList} create={ProductCreate} edit={ProductEdit} remove={Delete} icon={ProductIcon} />
                <Resource name="categories" list={CategoryList} edit={CategoryEdit} remove={Delete} icon={CategoryIcon} />
                <Resource name="reviews" list={ReviewList} edit={ReviewEdit} icon={ReviewIcon} />
                <Resource name="users" />



            </Admin>
        );
    }
}

export default App;
