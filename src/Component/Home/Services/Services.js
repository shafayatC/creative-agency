import React, {useState, useEffect, useContext } from 'react';
import './style.css';
import {
    Link
  } from "react-router-dom";
import { useSpring, animated } from 'react-spring'
import CircularProgress from '@material-ui/core/CircularProgress';
import { ManageContext } from '../../../App';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


const Services = () => {
    const [serviceValu, setServiceValu] = useState([]); 
    const [user, setUser, orderService, setOrderService] = useContext(ManageContext); 

    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

    const orderSubmit = () => {
        setOrderService()
    }
    useEffect(()=>{
        fetch('https://shrouded-eyrie-22901.herokuapp.com/serviceList')
        .then(res => res.json())
        .then(data => setServiceValu(data))
    },[])

    return (
        <div  id="ServiceId" className="fwidth">
            <div class="container">
                <div className="services_wrap fwidth">
                <div class="row">
                    <div class="col-md-12">
                        <h1 className="srv_title">Provide awesome <span>services</span></h1>
                    </div>
                </div>
                <div class="row services">

                    {serviceValu.map(result => 

                        <animated.div
                        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                        onMouseLeave={() => set({ xys: [0, 0, 1] })}
                        style={{ transform: props.xys.interpolate(trans) }}
                        className="srv_details">
                            <Link onClick={()=> setOrderService({service: result.name, icon: result.image.img})} to="/user-order">
                            <img src={`data:image/png;base64,${result.image.img}`}/>
                            <h3>{result.name}</h3>
                            <p>{result.description}</p>
                            </Link>
                        </animated.div>      
                    )}

                {/* loading... */}    
                {serviceValu.length === 0 && <div style={{margin: "auto", width: "44px", paddingTop: "20px"}}><CircularProgress /></div>}

                </div>
                </div>
            </div>

        </div>
    );
};

export default Services;