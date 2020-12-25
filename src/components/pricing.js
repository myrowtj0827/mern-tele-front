import React, {Component} from 'react';
import Header from "./header";
import '../assets/css/pricing.css';
import Config from "../config";
import {Link} from "react-router-dom";

class Pricing extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <div className="pricing-header-bg justify-center">
                    <Header/>

                    <div className="whole-body-mW simple-pricing pricing-header-p justify-center">
                        <div className="pt-30 extra-pt">
                            <div className="simple-header phone-t txt-30">
                                Upfront Pricing
                            </div>
                            <div className="pt-80 pb-30 flex-space">
                                <a href={Config.PROVIDER_URL + '/register-provider'} className="mr-200">
                                    <div className="btn-watch-demo mouse-cursor txt-16">TRY FREE</div>
                                </a>
                                <a href='/request-demo' className="ml-200">
                                    <div className="btn-watch-demo mouse-cursor txt-16">Demo Request</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-20 whole-body-mW">
                    <div className="txt-26 col-txt-title align-c after-select">
                        AFTER YOUR FREE TRIAL, <br/>SELECT THE PLAN THAT WORKS BEST FOR YOUR PRACTICE.
                    </div>
                    <div className="lineBlue"></div>

                    <div className="pb-20 txt-18 col-blue">
                        <div className="justify-individual">
                            <span className="individual-team mouse-cursor justify-center">Private Practice Plans</span>
                        </div>
                    </div>
                </div>

                <div className="whole-body-mW basic-plus-pt">
                    <div className="flex-grid3 shape">
                        <div className="shape-payment1 col-shape-payment1 txt-16 col-white">
                            <div className="rectangle-trans col-shape-payment1"></div>
                            <div className="txt-22 txt-bold">TeleALL</div>
                            <div>$55/month/per provider</div>
                            <div>Unlimited Sessions</div>
                            <div>Instant Session - No login required</div>
                            <div>Client Notes</div>
                            <div>Client payments</div>
                            <div>Client scheduler/portal</div>
                            <div>Virtual Background</div>
                            <div>Virtual waiting room</div>
                            <div>Directory Listing</div>
                            <div>Text Appointment reminders</div>
                            <div>File Transfer</div>
                            <div>Templates</div>
                            <div>Therapeutic Games</div>
                            <div>Screen sharing</div>
                            <div>Session Bookmarks</div>
                            <div>Surveys</div>
                            <div className="txt-index">Web page/Blog</div>
                            <a href={Config.PROVIDER_URL + "/dashboard"}>
                                <div className="btn-card col-shape-payment1 border-btn-1 txt-14 mouse-cursor">START FREE TRIAL</div>
                            </a>
                        </div>

                        <div className="shape-payment2 col-shape-payment2 txt-16 col-white">
                            <div className="rectangle-trans col-shape-payment2"></div>
                            <div className="txt-22 txt-bold">TeleLOT</div>
                            <div>$40/month/per provider</div>
                            <div>Unlimited Sessions</div>
                            <div>Instant Session - No login required</div>
                            <div>Client Notes</div>
                            <div>Client payments</div>
                            <div>Client scheduler/portal</div>
                            <div>Virtual Background</div>
                            <div>Virtual waiting room</div>
                            <div>Directory Listing</div>
                            <div>Text Appointment reminders</div>
                            <div>File Transfer</div>
                            <div className="col-gray"><del>Templates</del></div>
                            <div className="col-gray"><del>Therapeutic Games</del></div>
                            <div className="col-gray"><del>Screen sharing</del></div>
                            <div className="col-gray"><del>Session Bookmarks</del></div>
                            <div className="col-gray"><del>Surveys</del></div>
                            <div className="col-gray"><del>Web page/Blog</del></div>
                            <a href={Config.PROVIDER_URL + "/dashboard"}>
                                <div className="btn-card col-shape-payment2 border-btn-2 txt-14 mouse-cursor">START FREE TRIAL</div>
                            </a>
                        </div>

                        <div className="mobile-shape shape-payment3 col-shape-payment3 txt-16 col-white">
                            <div className="rectangle-trans col-shape-payment3"></div>
                            <div className="txt-22 txt-bold">TeleFEW</div>
                            <div>FREE</div>
                            <div>4 Sessions a month</div>
                            <div>Instant Session - No login required</div>
                            <div className="col-gray"><del>Client Notes</del></div>
                            <div className="col-gray"><del>Client payments</del></div>
                            <div className="col-gray"><del>Client scheduler/portal</del></div>
                            <div className="col-gray"><del>Virtual Background</del></div>
                            <div className="col-gray"><del>Virtual waiting room</del></div>
                            <div className="col-gray"><del>Directory Listing</del></div>
                            <div className="col-gray"><del>Text Appointment reminders</del></div>
                            <div className="col-gray"><del>File Transfer</del></div>
                            <div className="col-gray"><del>Templates</del></div>
                            <div className="col-gray"><del>Therapeutic Games</del></div>
                            <div className="col-gray"><del>Screen sharing</del></div>
                            <div className="col-gray"><del>Session Bookmarks</del></div>
                            <div className="col-gray"><del>Surveys</del></div>
                            <div className="col-gray"><del>Web page/Blog</del></div>
                            <a href={Config.PROVIDER_URL + "/dashboard"}>
                                <div className="btn-card col-shape-payment3 border-btn-3 txt-14 mouse-cursor">START FREE TRIAL</div>
                            </a>
                        </div>
                    </div>

                    <div className="pt-80 pb-20 txt-18 col-blue">
                        <div className="justify-individual">
                            <span className="individual-team mouse-cursor justify-center">
                                Organizational Plans<br />
                                5 Provider Minimum
                            </span>
                        </div>
                    </div>

                    <div className="flex-grid2">
                        <div className="shape-payment2 col-shape-payment2 txt-16 col-white">
                            <div className="rectangle-trans col-shape-payment2"></div>
                            <div className="txt-22 txt-bold">Team TeleALL</div>
                            <div>$50/month/per provider</div>
                            <div>Unlimited Sessions</div>
                            <div>Instant Session - No login required</div>
                            <div>Client Notes</div>
                            <div>Client payments</div>
                            <div>Client scheduler/portal</div>
                            <div>Virtual Background</div>
                            <div>Virtual waiting room</div>
                            <div>Directory Listing</div>
                            <div>Text Appointment reminders</div>
                            <div>File Transfer</div>
                            <div>Templates</div>
                            <div>Therapeutic Games</div>
                            <div>Screen sharing</div>
                            <div>Session Bookmarks</div>
                            <div>Surveys</div>
                            <div>Web page/Blog</div>
                            <a href={Config.PROVIDER_URL + "/dashboard"}>
                                <div className="btn-card col-shape-payment2 border-btn-2 txt-14 mouse-cursor">START FREE TRIAL</div>
                            </a>
                        </div>

                        <div className="shape-payment1 col-shape-payment1 txt-16 col-white">
                            <div className="rectangle-trans col-shape-payment1"></div>
                            <div className="txt-22 txt-bold">Team TeleLOT</div>
                            <div>$35/month/per provider</div>
                            <div>Unlimited Sessions</div>
                            <div>Instant Session - No login required</div>
                            <div>Client Notes</div>
                            <div>Client payments</div>
                            <div>Client scheduler/portal</div>
                            <div>Virtual Background</div>
                            <div>Virtual waiting room</div>
                            <div>Directory Listing</div>
                            <div>Text Appointment reminders</div>
                            <div>File Transfer</div>
                            <div className="col-gray"><del>Templates</del></div>
                            <div className="col-gray"><del>Therapeutic Games</del></div>
                            <div className="col-gray"><del>Screen sharing</del></div>
                            <div className="col-gray"><del>Session Bookmarks</del></div>
                            <div className="col-gray"><del>Surveys</del></div>
                            <div className="col-gray"><del>Web page/Blog</del></div>
                            <a href={Config.PROVIDER_URL + "/dashboard"}>
                                <div className="btn-card col-shape-payment1 border-btn-1 txt-14 mouse-cursor">START FREE TRIAL</div>
                            </a>
                        </div>
                    </div>

                    <div className="pt-80 align-r col-title ptb-50-80">
                        <div className="txt-14 col-blue">Annual Discount Available!</div>
                    </div>
                    <div className="txt-26 col-txt-title align-c after-select">More than 15 providers? Contact us or a custom quote?</div>

                    <div className="txt-26 col-txt-title align-c after-select">ALL PLANS INCLUDE:</div>
                    <div className="lineBlue"></div>
                    <Link className="txt-align" to="/contact">
                        <div className="justify-center">
                            <div className="btn-contact-us col-blue mouse-cursor">CONTACT US</div>
                        </div>
                    </Link>

                    <div className="flex-grid3 reFixing-grid3-basic txt-18 ptb--46-70">
                        <div className="card-icon">
                            <div className="">
                                <img className="mouse-cursor" src={require('../assets/img/plan-icon4.svg')} alt=""/>
                            </div>
                            <div className="txt-hipaa-title txt-bold">Group Sessions</div>
                        </div>

                        <div className="card-icon">
                            <div className="">
                                <img className="mouse-cursor icon-shadow" src={require('../assets/img/plan-icon2.svg')}
                                     alt=""/>
                            </div>
                            <div className="txt-hipaa-title txt-bold">HD Video</div>
                        </div>

                        <div className="card-icon">
                            <div className="">
                                <img className="mouse-cursor" src={require('../assets/img/plan-icon3.svg')} alt=""/>
                            </div>
                            <div className="txt-hipaa-title txt-bold">Business Associate Agreement</div>
                        </div>

                        <div className="card-icon">
                            <div className="">
                                <img className="mouse-cursor" src={require('../assets/img/plan-icon6.svg')} alt=""/>
                            </div>
                            <div className="txt-hipaa-title txt-bold">Meeting History</div>
                        </div>

                        <div className="card-icon">
                            <div className="">
                                <img className="mouse-cursor" src={require('../assets/img/plan-icon1.svg')} alt=""/>
                            </div>
                            <div className="txt-hipaa-title txt-bold">HIPAA Compliance</div>
                        </div>

                        <div className="card-icon">
                            <div className="">
                                <img className="mouse-cursor" src={require('../assets/img/plan-icon5.svg')} alt=""/>
                            </div>
                            <div className="txt-hipaa-title txt-bold">Secure Messaging</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Pricing;