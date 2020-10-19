import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Component/Home/Home';
import AdminService from './Component/Dashboard/Admin/AdminService';
import AddService from './Component/Dashboard/Admin/AddService';
import MakeAdmin from './Component/Dashboard/Admin/MakeAdmin';
import UserOrder from './Component/Dashboard/User/UserOrder';
import UserServiceList from './Component/Dashboard/User/UserServiceList';
import UserReview from './Component/Dashboard/User/UserReview';
import Login from './Component/Dashboard/Login/Login';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import AdminLogin from './Component/Dashboard/Login/AdminLogin';
import PrivateRouteAdmin from './Component/PrivateRoute/PrivateRouteAdmin';


export const  ManageContext = createContext(); 

function App() {

  const [user, setUser] = useState([]); 
  const [orderService, setOrderService] =  useState([]);
  return (
    <ManageContext.Provider value={[user, setUser, orderService, setOrderService]}>
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/admin-login">
            <AdminLogin></AdminLogin>
          </Route>
          <PrivateRouteAdmin path="/admin-service">
            <AdminService></AdminService>
          </PrivateRouteAdmin>
          <PrivateRouteAdmin path="/admin-addservice">
            <AddService></AddService>
          </PrivateRouteAdmin>
          <PrivateRouteAdmin path="/admin-makeadmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRouteAdmin>
          <PrivateRoute path="/user-order">
            <UserOrder></UserOrder>
          </PrivateRoute>
          <PrivateRoute path="/user-servicelist">
            <UserServiceList></UserServiceList>
          </PrivateRoute>
          <PrivateRoute path="/user-review">
            <UserReview></UserReview>
          </PrivateRoute>
        </Switch>
    </Router>     
    </div>
    </ManageContext.Provider>
  );
}

export default App;
