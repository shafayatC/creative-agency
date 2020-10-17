import React from 'react';
import './style.css'; 

const Footer = () => {
    return (
        <div id="Contact" className="footer_wrap fwidth">
             <div class="container" >
            <div class="row">
               <div class="col-md-6 col-sm-12 mail_info">
                    <h2>Let us handle your project, professionally.</h2>
                    <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
               </div>
                <div class="col-md-6 col-sm-12 message_form_wrap">
                    <form className="message_form">
                        <input className="email_2" type="text" placeholder="Your email address"></input>
                        <input className type="text" placeholder="Your name / company’s name"></input>
                        <textarea placeholder="Your message"></textarea>
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