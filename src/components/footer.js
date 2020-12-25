import React from 'react';
import {Link} from "react-router-dom";

function Footer() {
    return (
        <div className="footer-bg">
            <div className="whole-body-mW footer-pd">
                <div className="footer-menu flex-grid3 footer txt-12 col-txt-title ">
                    <div className="txt-align">
                        <div className="txt-14 col-blue col-title mouse-cursor">Legal</div>
                        <div className="mouse-cursor">Privacy Policy</div>
                        <div className="mouse-cursor">Terms and Conditions</div>
                    </div>

                    <Link className="txt-align" to="/contact">
                        <div className="contact-align">
                            <div className="btn-contact-us col-blue mouse-cursor">Contact Us</div>
                        </div>
                    </Link>

                    <div className="txt-align">
                        <div className="social-icon6 txt-14 col-blue col-title mouse-cursor">Connect with Us</div>

                        <div className="social-icon6 pt-10">
                            <a href="https://twitter.com/">
                                <img className="icon-mr mouse-cursor" src={require('../assets/img/landing/icon-1.svg')} alt="" />
                            </a>
                            <a href="http://facebook.com/">
                                <img className="icon-mr mouse-cursor" src={require('../assets/img/landing/icon-2.svg')} alt="" />
                            </a>
                            <a href="http://linkedin.com/">
                                <img className="icon-mr mouse-cursor" src={require('../assets/img/landing/icon-3.svg')} alt="" />
                            </a>
                            <a href="/">
                                <img className="icon-mr mouse-cursor" src={require('../assets/img/landing/icon-4.svg')} alt="" />
                            </a>
                            <a href="/">
                                <img className="icon-mr mouse-cursor" src={require('../assets/img/landing/icon-5.svg')} alt="" />
                            </a>
                            <a href="https://www.pinterest.com/">
                                <img className="mouse-cursor" src={require('../assets/img/landing/icon-6.svg')} alt="" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="stripe-pt justify-footer">
                    <div>
                        <div>
                            <img className="tele-img mouse-cursor" src={require('../assets/img/landing/app-logo.svg')} alt="" />
                            <div className="txt-12 col-blue">
                                &copy;{new Date().getFullYear()} Tele Therapist LLC. All Rights Reserved.
                            </div>
                        </div>

                        <div className="justify-footer">
                            <img className="hipaa-stripe mouse-cursor" src={require('../assets/img/landing/hipaa-compliance.svg')} alt="" />
                            <img className="mouse-cursor" src={require('../assets/img/landing/powered-by-stripe.svg')} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Footer;