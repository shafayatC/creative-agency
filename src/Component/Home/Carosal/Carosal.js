import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css'; 

const Carosal = () => {
    const settings = {
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };

    return (
        <div id="Work" className="work_wrap">
            <div class="container">
                   <div class="row">
                    <div class="col-md-12">
                        <h1 className="work_title">Here are some of <span>our works</span></h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 work_carosal_wrap">
                    <Slider {...settings}>
                        <div className="work_crs">
                            <img className="fwidth" src={require('../img/carousel-1.png')}/>
                        </div>

                        <div className="work_crs">
                            <img src={require('../img/carousel-2.png')}/>
                        </div>
                        <div className="work_crs">
                            <img src={require('../img/carousel-3.png')}/>
                        </div>
                        <div className="work_crs">
                            <img src={require('../img/carousel-4.png')}/>
                        </div>
                        <div className="work_crs">
                            <img src={require('../img/carousel-5.png')}/>
                        </div>
                    </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carosal;