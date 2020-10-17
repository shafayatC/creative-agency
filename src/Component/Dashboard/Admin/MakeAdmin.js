import React, { useEffect, useState } from 'react';
import {
  Link
} from "react-router-dom";
import './style.css'; 
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));


  const MakeAdmin = () => {

    const [vlEvent, setVlEvent] = useState({
      name: '',
      description: '',
      date: '', 
      image: '' 
    });
    const classes = useStyles();

    const onchangeEventName =(event)=> {
        setVlEvent({
          ...vlEvent,
          name: event.target.value,
        })
    }
    const onchangeDes =(event)=>{
      setVlEvent({
        ...vlEvent,
        description: event.target.value,
      })
    }
    const onchangeDate =(event)=>{
      setVlEvent({
        ...vlEvent,
        date: event.target.value,
      })
    }
    
    const onchangeImage =(event)=>{
      setVlEvent({
        ...vlEvent,
        image: event.target.value,
      })
    }
    const submitEvent = (e) =>{
        e.preventDefault();
        
      const ValidityMsg= []; 
      const imgValid = /\.(jpeg|jpg|gif|png)$/.test(vlEvent.image); 

      !vlEvent.name  && ValidityMsg.push("Event Title Empty");
      !vlEvent.description  && ValidityMsg.push("Description Empty");
      !vlEvent.date  && ValidityMsg.push("Date Empty");
      !imgValid && ValidityMsg.push("Add valide image")

        
      if(vlEvent.name && vlEvent.date && vlEvent.description && imgValid){

          fetch('https://radiant-coast-19512.herokuapp.com/addEvent', {
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(vlEvent),
          })
          .then(response => response.json())
          .then(data => {
            if(data){
              alert("New Event Created Successfully");
              console.log('Success:', data.insertedCount);
            }
          })
          .catch((error) => {
            console.error('Error:', error);
          });
          
         console.log( "bangladesh : " +  ValidityMsg === []); 
        }else {
               const mapping =  ValidityMsg.map(res=> '<li>' + res + '</li>' ); 
               document.getElementById("warningMsg").innerHTML = mapping;  
          }
    }
    //upload btn function 
    const uploadImbBtn = () => {
      document.getElementById("uploadBtn").style.display= "none"; 
      document.getElementById("inputimg").style.display= "block"; 
    }
    
    const handleClick =(e) => {
      e.preventDefault();
    }

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
                        <h2 class="dashHeading">Add Service</h2>
                        <div className="eventForm">
                          <form onSubmit={handleClick} className="creatForm">
                          <div className="formWrap">
                            <div className="createAdmin">
                                <p className="p_1">Email</p>
                                <input onBlur={onchangeEventName} type="text" placeholder="example@gmail.com"></input>
                                <button className="eventSubmitBtn" onClick={submitEvent}>Submit</button>
                           </div>
                           
                            </div>

                          </form>
                      </div>
                      </div>
                    </div>
        </div>
    );
};

export default MakeAdmin;