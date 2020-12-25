import React, {Component} from 'react';
import Header from "./header";
import '../assets/css/featuresPage.css';
import Config from "../config";


class WhyUs extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <div className="Why-us-bg justify-center why-us">
                    <Header />
                    <div className="title-shadow why-us">
                        <div className="title-bg why-us justify-center">
                            <div className="left-header-text btn-landing-bg justify-center txt-30">How Does TeleTherapist Work?</div>
                        </div>
                        <div className="left-header-text btn-header-common-desc therapy-desc why-us txt-18">TeleTherapist can enable your practice in many ways.</div>
                        {/*<div className="btn-header-common txt-30">*/}
                        {/*    How Does TeleTherapist Work?*/}
                        {/*</div>*/}

                        {/*<div className="btn-header-common-desc txt-18">*/}
                        {/*    TeleTherapist can enable your practice in many ways.*/}
                        {/*</div>*/}
                    </div>
                </div>

                <div className="help-bg">
                    <div className="whole-body-mW features-header-pt align-l">
                        <div className="txt-30 col-txt-title align-c">
                            Some Mental Health Stats
                        </div>
                        <div className="stats-txt-p flex-grid4 why-us-gaps txt-14 col-darkBlue align-c">
                            <div className="img-pt">
                                <div className="bg-bound1">
                                    <img style={{marginTop: 20}} src={require('../assets/img/why-us-img-1.svg')} alt="" />
                                </div>
                                <div className="stats-30 col-desc">
                                    % of Adults with a mental disorder that did not receive mental health services in 2018
                                </div>
                            </div>
                            <div className="img-pt">
                                <div className="bg-bound1">
                                    <img style={{marginTop: 20}} src={require('../assets/img/why-us-img-2.svg')} alt="" />
                                </div>
                                <div className="stats-30">
                                    % of youth (8-15) with a mental disorder that did not receive mental health services in 2018
                                </div>
                            </div>
                            <div className="img-pt">
                                <div className="bg-bound1">
                                    <img style={{marginTop: 20}} src={require('../assets/img/why-us-img-3.svg')} alt="" />
                                </div>
                                <div className="stats-30">
                                    % of youth (8-15) with a mental disorder that did not receive mental health services in 2018
                                </div>
                            </div>
                            <div className="img-pt">
                                <div className="bg-bound1">
                                    <img style={{marginTop: 20}} src={require('../assets/img/why-us-img-4.svg')} alt="" />
                                </div>
                                <div className="stats-30">
                                    % of youth (8-15) with a mental disorder that did not receive mental health services in 2018
                                </div>
                            </div>
                        </div>
                        <div className="online-grid2-l">
                            <div className="empty-img-inversion"></div>
                            <div className="txt-18 col-heavyDark">
                                <div className="bg-bound3"></div>
                                <div className="pt-10 txt-26 col-title26 features-payment-pb1">
                                    Extend your Reach
                                </div>
                                <div className="lineGreen-left"></div>

                                <div className="txt-16 col-desc">
                                    Whether going global, across town, or across state, telehealth allows you and your practice to reach clients that you wouldn’t otherwise be able to meet with. Online therapy can be done from nearly any device with a camera, microphone, and a stable internet connection.
                                </div>
                            </div>
                        </div>
                        <div className="online-grid2-r">
                            <div className="txt-18 col-heavyDark">
                                <div className="bg-bound3"></div>
                                <div className="pt-10 txt-26 col-title26 features-payment-pb1">
                                    Couples, Families, Group Counseling
                                </div>
                                <div className="lineGreen-left"></div>

                                <div className="txt-16 col-desc">
                                    Our waiting room is amazing. Plain and simple. You choose the imagery and the music.
                                </div>
                                <div className="pt-10 txt-16 col-desc">
                                    Clients are directed to your custom waiting room until you let them into the session – just like they are in your office!
                                </div>
                            </div>
                            <div className="empty-img-inversion"></div>
                        </div>
                        <div className="online-grid2-l">
                            <div className="empty-img-inversion"></div>
                            <div className="txt-18 col-heavyDark">
                                <div className="bg-bound3"></div>
                                <div className="pt-10 txt-26 col-title26 features-payment-pb1">
                                    "See" more than you might in-office
                                </div>
                                <div className="lineGreen-left"></div>

                                <div className="txt-16 col-desc">
                                    Easily take notes after a session or even just a quick note about the client.
                                </div>
                                <div className="pt-10 txt-16 col-desc">
                                    Our notes are beautiful, easy to use, and you get to make them the way you want!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sign-up-for justify-center">
                    <div className="whole-body-mW justify-rl">
                        <div className="btn-txt">
                            <div className="txt-26 justify-center">Ready to get started now?</div>
                            <a href={Config.PROVIDER_URL + '/register-provider'}>
                                <div className="btn-common btn-request-b txt-12 mouse-cursor">SIGN UP FOR FREE TRIAL</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default WhyUs;