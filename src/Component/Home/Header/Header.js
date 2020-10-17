import React from 'react';
import "./style.css"; 
import {
    Link
  } from "react-router-dom";
  
const Header = () => {
    return (
        <div id="Home" className="header">
            <div class="container">
            <div className="header_top_wrap fwidth">
             <div class="row">
                <div class="col-md-4 col-sm-12">
                    <div className="logo"><img className="fwidth" src={require('../img/logos/logo.png')} /></div>
                </div>
                <div class="col-md-8 col-sm-12">
                    <div  className="menuWrap">
                    <ul className="menu">
                        <li><a href="#Home">Home</a></li>
                        <li><a href="#ServiceId">Services</a></li>
                        <li><a href="#Work">Our Work</a></li>
                        <li><a href="#Contact">Contact Us</a></li>
                    </ul>
                    <Link to="/admin-service" className="adminBtn">Admin</Link>
                    </div>
                </div>
               </div>
               </div>
               <div className="header_btm_wrap fwidth">
               <div class="row">
                    <div class="col-md-4 col-sm-12">
                        <div className="header_btm_info">
                            <h1>Let’s Grow Your Brand To The Next Level</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                            <button>Hire us</button>
                        </div>
                    </div>
                    <div class="col-md-8 col-sm-12">
                        <div className="hd_btm_img">
                          <img src={require('../img/logos/Frame.png')}/>
                        </div>
                    </div>
                </div>
                </div>
             </div>
        </div>
    );
};

export default Header;