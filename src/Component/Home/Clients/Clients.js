import React from 'react';
import './style.css'; 

const Clients = () => {
    return (
        <div>
            <div class="container">
                <div className="clients_wrap fwidth">
                    <div class="row">
                        <div className="clients">
                            <img src={require('../img/logos/slack.png')}/>
                            <img src={require('../img/logos/google.png')}/>
                            <img src={require('../img/logos/uber.png')}/>
                            <img src={require('../img/logos/netflix.png')}/>
                            <img src={require('../img/logos/airbnb.png')}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clients;