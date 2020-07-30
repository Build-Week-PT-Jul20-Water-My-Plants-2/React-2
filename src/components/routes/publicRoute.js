import React from "react";
import { Route, Redirect } from "react-router-dom";

import {isAuthenticated} from "../../utilites/services";

const PublicRoute = ({ component: Component, restricted, ...rest }) => (
    <Route
        {...rest}
        render={
            (props) => {
                return (!isAuthenticated() && restricted ? <Component {...props} /> : <Redirect to="/" />);
            }
        }
    />
);

export default PublicRoute;
