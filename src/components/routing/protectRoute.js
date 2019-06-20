import React from 'react';
import {Route,Redirect} from "react-router-dom";



const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => {
        return rest.hasAccess ?
            <Component {...props} {...rest} /> :
            <Redirect to={{pathname: '/signIn', state: {from: props.location}}}/>
    }} />
);

export default ProtectedRoute;
