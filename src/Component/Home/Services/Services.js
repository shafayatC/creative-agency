import React from 'react';
import './style.css'

const Services = () => {
    return (
        <div  id="ServiceId" >
            <div class="container">
                <div className="services_wrap fwidth">
                <div class="row">
                    <div class="col-md-12">
                        <h1 className="srv_title">Provide awesome <span>services</span></h1>
                    </div>
                </div>
                <div class="row services">
                    <div className="srv_details">
                        <img src={require('../img/icons/service1.png')}/>
                        <h3>Web & Mobile design</h3>
                        <p>We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
                    </div>
                    
                    <div className="srv_details active">
                        <img src={require('../img/icons/service2.png')}/>
                        <h3>Web & Mobile design</h3>
                        <p>We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
                    </div>
                    
                    <div className="srv_details">
                        <img src={require('../img/icons/service3.png')}/>
                        <h3>Web & Mobile design</h3>
                        <p>We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
                    </div>
                </div>
                </div>
            </div>

        </div>
    );
};

export default Services;