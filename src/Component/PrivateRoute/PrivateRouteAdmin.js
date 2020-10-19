import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";
import { ManageContext } from '../../App';

const PrivateRouteAdmin=({ children, ...rest })=> {

    const [user] = useContext(ManageContext); 

    return (
      <Route
        {...rest}
        render={({ location }) =>
            user.admin ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/admin-login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
export default PrivateRouteAdmin;