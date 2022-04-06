import React from 'react';
import {Redirect, Route} from "react-router-dom";

const PrivateRoute = ({component: Component, auth, path, exact}) => {
    return (
        <Route exact={exact} path={path} render={props =>
            auth ? <Component/>
                : <Redirect to={{pathname: "/create-user"}}/>
        }/>)
};

export default PrivateRoute;