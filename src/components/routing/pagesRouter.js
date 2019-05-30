import React from "react";
import {Switch,Route,Redirect} from "react-router-dom";
import ProtectedRoute from "./protectRoute"
import Dashboard from "../../pages/home/dashboard";
import RequestKalaList from "../../pages/requestKala/requestKalaList";
import About from "../../pages/about/about";
import SignIn from "../../pages/login/signIn";
import ManbaKharidList from "../../pages/manbaKharids/manbaKharidList";
import {checkUserPermit} from "../../services/accessManager";
import {REQUEST_KALA_AC,MANBA_KHARID_LIST_AC} from "../../services/enums";
const PagesRouter=(props)=>{
    return(
        <Switch>
            <Redirect exact from={"/"} to={"/dashboard"}/>
            <Route path={"/dashboard"} component={Dashboard} />
            <ProtectedRoute path={"/rqsKala"}
                            hasAccess={checkUserPermit(props.actionNames,props.userPermits,REQUEST_KALA_AC)}
                            component={RequestKalaList} />
            <ProtectedRoute path={"/manbaKharid"}
                            hasAccess={checkUserPermit(props.actionNames,props.userPermits,MANBA_KHARID_LIST_AC)} component={ManbaKharidList} />
            <Route path={"/about"} component={About}/>
            <Route path={"/signIn"} component={SignIn}/>
        </Switch>

    )
};
export default PagesRouter;
