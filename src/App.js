import React from 'react';
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

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/admin-service">
            <AdminService></AdminService>
          </Route>
          <Route path="/admin-addservice">
            <AddService></AddService>
          </Route>
          <Route path="/admin-makeadmin">
            <MakeAdmin></MakeAdmin>
          </Route>
        </Switch>
    </Router>     
    </div>
  );
}

export default App;
