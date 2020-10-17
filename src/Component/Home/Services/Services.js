import React from 'react';
import './style.css';
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]

const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


const Services = () => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

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
                    <animated.div
                        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                        onMouseLeave={() => set({ xys: [0, 0, 1] })}
                        style={{ transform: props.xys.interpolate(trans) }}
                        className="srv_details">
                            <img src={require('../img/icons/service1.png')}/>
                            <h3>Web & Mobile design</h3>
                            <p>We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
                    </animated.div>
                    
                    
                    <animated.div
                        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                        onMouseLeave={() => set({ xys: [0, 0, 1] })}
                        style={{ transform: props.xys.interpolate(trans) }}
                        className="srv_details">
                            <img src={require('../img/icons/service1.png')}/>
                            <h3>Web & Mobile design</h3>
                            <p>We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
                    </animated.div>
                    
                    <animated.div
                        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                        onMouseLeave={() => set({ xys: [0, 0, 1] })}
                        style={{ transform: props.xys.interpolate(trans) }}
                        className="srv_details">
                            <img src={require('../img/icons/service1.png')}/>
                            <h3>Web & Mobile design</h3>
                            <p>We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
                    </animated.div>
                </div>
                </div>
            </div>

        </div>
    );
};

export default Services;