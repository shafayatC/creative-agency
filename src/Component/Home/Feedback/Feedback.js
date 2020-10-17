import React from 'react';
import './style.css'; 

const Feedback = () => {
    return (
        <div className="feedback_wrap">
            <div class="container">
                   <div class="row">
                    <div class="col-md-12">
                        <h1 className="fdback_title">Clients  <span>Feedback</span></h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 fdback_client_wrap">
                        <div className="single_fdback">
                            <div className="info_wrap">
                                <img src={require('../img/customer-2.png')}/>
                                <div className="info">
                                    <h4>Miriam Barron</h4>
                                    <h5>CEO, Manpol</h5>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                        </div>
                        
                        <div className="single_fdback">
                            <div className="info_wrap">
                                <img src={require('../img/customer-2.png')}/>
                                <div className="info">
                                    <h4>Miriam Barron</h4>
                                    <h5>CEO, Manpol</h5>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                        </div>
                        
                        <div className="single_fdback">
                            <div className="info_wrap">
                                <img src={require('../img/customer-2.png')}/>
                                <div className="info">
                                    <h4>Miriam Barron</h4>
                                    <h5>CEO, Manpol</h5>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;