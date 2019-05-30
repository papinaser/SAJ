import React, { Component } from 'react';
import {Route,Redirect} from "react-router-dom";



const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        props.hasAccess ?
            <Component {...props} /> :
            <Redirect to={{ pathname: '/signIn', state: { from: props.location }}} />
    )} />
);

export default ProtectedRoute;
