import React, { useState } from 'react';
import './style.css'; 

const Footer = () => {
    const [mail, setMail] = useState(); 

    const onchangeFrom = (e)=> { setMail({...mail, from: e.target.value}) }
    const onchangeName = (e)=> {setMail({...mail, name: e.target.value})}
    const onchangeMsg = (e)=> {setMail({...mail, msg: e.target.value})}

    const mailHandeler= (e)=>{
        e.preventDefault();
    
          fetch('https://shrouded-eyrie-22901.herokuapp.com/sendMail', {
            method: 'POST', // or 'PUT'
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify(mail),
          })
          .then(res => res.json())
          .then(result => {
              if(result){
                  alert("Message send")
                }
            })
          .catch(err => console.log(err))
    }
    return (
        <div id="Contact" className="footer_wrap fwidth">
             <div class="container" >
            <div class="row">
               <div class="col-md-6 col-sm-12 mail_info">
                    <h2>Let us handle your project, professionally.</h2>
                    <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
               </div>
                <div class="col-md-6 col-sm-12 message_form_wrap">
                    <form onSubmit={mailHandeler} className="message_form">
                        <input onBlur={onchangeFrom} className="email_2" type="text" placeholder="Your email address"></input>
                        <input onBlur={onchangeName} className type="text" placeholder="Your name / company’s name"></input>
                        <textarea onBlur={onchangeMsg} placeholder="Your message"></textarea>
                        <button className="submitBtn" class="btn btn-dark">Send</button>
                    </form>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <p className="copyright fwidth">copyright Orange labs 2020</p>
                </div>
            </div>
            </div>
            </div>
    );
};

export default Footer;