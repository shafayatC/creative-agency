import React, { useEffect, useState } from 'react';
import {
    Link
  } from "react-router-dom";
  import './style.css'; 
  import CircularProgress from '@material-ui/core/CircularProgress';

const AdminService = () => {
    const [eventList, setEventList] =  useState([]); 

    const deletEvent = val => {
        console.log(val);
        fetch(`https://radiant-coast-19512.herokuapp.com/userEventDelete/${val}`, {
          method: 'DELETE',
        })
        .then(res => res.text()) // or res.json()
        .then(res => {
          if(res){
            fetch("https://radiant-coast-19512.herokuapp.com/allRegEvent")
            .then(res => res.json())
            .then(data =>setEventList(data))
          }
        })
      }

    useEffect(()=>{
        fetch("https://radiant-coast-19512.herokuapp.com/allRegEvent")
        .then(res => res.json())
        .then(data =>setEventList(data))
    },[])

    return (
        <div>
            <div className="addEventWrap fwidth">
                <div className="leftWidget left">
                    <Link  to="/" className="logo_3 fwidth"><img className="fwidth" src={require('../../Home/img/logos/logo.png')} /></Link>
                <div className="dashMenu fwidth">
                    <Link to="/admin-service" className="fwidth  active lnk_1"><img className="icon_2" src="" />Service list</Link>
                    <Link to="/admin-addservice" className="fwidth  lnk_1"><img className="icon_2" src="" /> Add Service</Link>
                    <Link to="/admin-makeadmin" className="fwidth  lnk_1"><img className="icon_2" src="" /> Make Admin</Link>
                </div>
                </div>
                <div className="rightWidget right">
                <h2 class="dashHeading">Volunteer register list</h2>
                <div className="eventForm">
                    <div className="userListWrap">

                    <table className="table_1">
                        <tr>
                            <th>Name</th>
                            <th>Email ID</th>
                            <th>Service</th>
                            <th>Project Details</th>
                            <th>Status</th>
                        </tr>
                        {eventList.map(data=>
                                <tr>
                                <td>{data.eventname}</td>
                                <td>{data.email}</td>
                                <td>{data.date}</td>
                                <td>{data.description}</td>
                                <td><select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select></td>
                            </tr>
                            )}
                    
                        </table>
                        {eventList.length === 0 && <div style={{margin: "auto", width: "44px", paddingTop: "20px"}}><CircularProgress /></div>}

                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default AdminService;