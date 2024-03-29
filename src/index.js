import React from 'react';
import ReactDOM from 'react-dom';
import "../node_modules/ag-grid-community/dist/styles/ag-grid.css";
import "../node_modules/ag-grid-community/dist/styles/ag-theme-blue.css";
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {LicenseManager} from "ag-grid-enterprise";
LicenseManager.setLicenseKey("IRDEVELOPERS_COM_NDEwMjM0NTgwMDAwMA==f08aae16269f416fe8d65bbf9396be5f");


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
