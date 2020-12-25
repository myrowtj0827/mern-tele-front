import React from 'react';
import Config from "../config/index";

import Header from "./header";
import "../assets/css/landing.css";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Link} from "react-router-dom";

class Landing extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            signUpPath: '',
            images: [
                '7.jpg',
                '10.jpg',
                '11.jpg',
            ],

            angle: 2 * Math.PI/9,
            diff: 6.8 * Math.PI/9,
            radius: 350,
        }
    }
    componentDidMount() {
        this.setState({
            signUpPath: Config.PROVIDER_URL + '/register-provider',
        });
        window.scrollTo(0, 0);
    }

    componentWillMount() {
        window.addEventListener('resize', this.handleResize.bind(this));
        this.handleResize();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize.bind(this));
    }

    handleResize = () => {
        if (window.innerWidth >= 992) {
            this.setState({
                radius: 350,
            })
        } else if (window.innerWidth < 992 && window.innerWidth >= 768) {
            this.setState({
                radius: 235,
            })
        } else if (window.innerWidth < 768 && window.innerWidth >= 600) {
            this.setState({
                radius: 212,
            })
        } else if (window.innerWidth < 600 && window.innerWidth >= 480) {
            this.setState({
                radius: 170,
            })
        } else if (window.innerWidth < 480) {
            this.setState({
                radius: 140,
            })
        }
    };

    render() {
        const {
            diff, angle, radius
        } = this.state;

        const btn_txt1 = "Virtual Background";
        const btn_txt2 = "Therapuetic Games";
        const btn_txt3 = "Instant Session-No Login Required";
        const btn_txt4 = "Surveys";
        const btn_txt5 = "Session Notes";
        const btn_txt6 = "Seemless Payments";
        const btn_txt7 = "Mobile Friendly/Android and Iphone Apps";
        const btn_txt8 = "Text Appointment Reminders";
        const btn_txt9 = "Virtual Waiting Room";
        return (
            <div>
                <div>
                    <Header> </Header>

                    <div className="header">
                        <OwlCarousel items={1}
                                     className="owl-theme animate-fading"
                                     loop
                                     nav
                                     autoplayTimeout={12000}
                                     autoplay={true}
                        >
                            {
                                this.state.images && this.state.images.map((item, key) => {
                                    return(
                                        <div className="header-bg justify-left title-left" style={{backgroundImage: `url(/images/${item})`}} key={key}>
                                            <div>
                                                <div className="title-bg justify-center">
                                                    <div className="left-header-text btn-landing-bg justify-center txt-42">Client Care Anywhere ...</div>
                                                </div>

                                                <div className="left-header-text therapy-desc txt-24">Online Therapy Service for Everybody</div>

                                                <a href={Config.PROVIDER_URL + '/register-provider'}>
                                                    <div className="join-pt left-header-text btn-trial justify-center mouse-cursor">JOIN US FOR 3-DAY FREE TRIAL</div>
                                                </a>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </OwlCarousel>
                    </div>
                </div>

                <div className="flex-grid4 landing">
                    <Link className="bg-bound1 grid4-bg1" to={'/features-page'}>
                        <div className="video-communication mouse-cursor">
                            <div className="take-practice-tp txt-22">
                                Meet your clients online anytime
                            </div>

                            <div className="meet-online-bg1">
                            </div>
                        </div>
                    </Link>

                    <Link className="bg-bound2 grid4-bg2" to={'/features-payment'}>
                        <div className="video-communication mouse-cursor">
                            <div className="take-practice-tp txt-22">
                                Online client payments
                            </div>

                            <div className="meet-online-bg2">
                            </div>
                        </div>
                    </Link>

                    <Link className="bg-bound3 grid4-bg3" to={'/features-notes'}>
                        <div className="video-communication mouse-cursor">
                            <div className="take-practice-tp justify-center txt-22">
                                Clinical Documentation
                            </div>

                            <div className="meet-online-bg3">
                            </div>
                        </div>
                    </Link>

                    <Link className="bg-bound4 grid4-bg4" to={'/help-center'}>
                        <div className="video-communication mouse-cursor">
                            <div className="take-practice-tp justify-center txt-22">
                                HIPAA Compliant
                            </div>

                            <div className="meet-online-bg4">
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="online-practice-pm justify-center">
                    <a href={Config.PROVIDER_URL + '/register-provider'}><div className="try-pricing mouse-cursor txt-16">TRY FREE</div></a>
                    <a href="/pricing"><div className="try-pricing mouse-cursor txt-16">OUR PRICING</div></a>
                </div>


                <div className="bg-buttonAndLink">
                    <div className="features-needs whole-body-mW">
                        <div className="txt-30 col-txt-title">Features a glance
                        </div>
                        <div className="lineGreen"></div>

                        <div className="features-pd col-desc txt-18">
                            We have the online tools for your online and in office practice.
                        </div>
                    </div>

                    <div className="justify-center mobile-margin">
                        {/*<div className="large-item justify-center txt-18" style={{transform: 'translate(' + Math.sin(0) + 'px,' + Math.cos(0) + 'px)'}} />*/}
                        {/*<div className="medium-item justify-center txt-18" style={{transform: 'translate(' + Math.sin(0) + 'px,' + Math.cos(0) + 'px)'}} />*/}
                        <div className="menu-circle">
                            <Link to="/request-demo" className="center-item justify-center txt-18 color-0" style={{transform: 'translate(' + Math.sin(0) + 'px,' + Math.cos(0) + 'px)'}}>
                                <div className="circle-btn txt-22">Teletherapist</div>
                            </Link>
                            <Link to="/features-page" className="menu-item color-1 justify-center" style={{transform: 'translate(' + radius * Math.sin(angle + diff) + 'px,' + radius * Math.cos(angle + diff) + 'px)'}}>
                                <div className="circle-item">
                                    {btn_txt1}
                                </div>
                            </Link>
                            <Link to="" className="menu-item color-2 justify-center" style={{transform: 'translate(' + radius * Math.sin(2 * angle + diff) + 'px,' + radius * Math.cos(2 * angle + diff) + 'px)'}}>
                                <div className="circle-item">
                                    {btn_txt2}
                                </div>
                            </Link>
                            <Link to="/features-online-session" className="menu-item color-3 justify-center" style={{transform: 'translate(' + radius * Math.sin(3 * angle + diff) + 'px,' + radius * Math.cos(3 * angle + diff) + 'px)'}}>
                                <div className="circle-item">
                                    {btn_txt3}
                                </div>
                            </Link>
                            <Link to="" className="menu-item color-4 justify-center" style={{transform: 'translate(' + radius * Math.sin(4 * angle + diff) + 'px,' + radius * Math.cos(4 * angle + diff) + 'px)'}}>
                                <div className="circle-item">{btn_txt4}</div>
                            </Link>
                            <Link to="/features-notes" className="menu-item color-5 justify-center" style={{transform: 'translate(' + radius * Math.sin(5 * angle + diff) + 'px,' + radius * Math.cos(5 * angle + diff) + 'px)'}}>
                                <div className="circle-item">
                                    {btn_txt5}
                                </div>
                            </Link>
                            <Link to="/features-payment" className="menu-item color-6 justify-center" style={{transform: 'translate(' + radius * Math.sin(6 * angle + diff) + 'px,' + radius * Math.cos(6 * angle + diff) + 'px)'}}>
                                <div className="circle-item">
                                    {btn_txt6}
                                </div>
                            </Link>
                            <Link to="/features-online-devices" className="menu-item color-7 justify-center" style={{transform: 'translate(' + radius * Math.sin(7 * angle + diff) + 'px,' + radius * Math.cos(7 * angle + diff) + 'px)'}}>
                                <div className="circle-item">
                                    {btn_txt7}
                                </div>
                            </Link>
                            <Link to="" className="menu-item color-8 justify-center" style={{transform: 'translate(' + radius * Math.sin(8 * angle + diff) + 'px,' + radius * Math.cos(8 * angle + diff) + 'px)'}}>
                                <div className="circle-item">
                                    {btn_txt8}
                                </div>
                            </Link>
                            <Link to="/features-scheduling" className="menu-item color-9 justify-center" style={{transform: 'translate(' + radius * Math.sin(9 * angle + diff) + 'px,' + radius * Math.cos(9 * angle + diff) + 'px)'}}>
                                <div className="circle-item">
                                    {btn_txt9}
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="why-us-landing-bg bg-cover">
                    <div className="why-us-pd">
                        <div className="line"></div>
                        <div className="txt-30 why-align">WHY US?</div>
                        <div className="txt-18 why-us-desc">
                            We are therapist just like you. We struggled with client engagement during online therapy and we have created a solution to address everyday issues.
                        </div>

                        <div className="justify-left">
                            <a href="/why-us"><div className="btn-learn-more txt-16 mouse-cursor">Learn More</div></a>
                        </div>
                    </div>
                </div>

                <div className="connect-clients justify-center">
                    <div className="connect-contents">
                        <div className="connect-txt-pb txt-30 col-txt-title col-responsive">Request a Free Demo</div>
                        <div className="lineGreen"></div>
                        <div className="pt-40 txt-18 col-desc line-36 col-responsive">
                            TeleTherapist is packed with rich features that focuses on client engagement. Click the button below to schedule a demonstration.
                        </div>

                        <div className="justify-center">
                            <a href='/request-demo'><div className="btn-learn-features learn about-btn txt-14 mouse-cursor">Demo Request</div></a>
                        </div>
                    </div>
                </div>

                <div className="check-trial-bg">
                    <div className="whole-body-mW">
                        <div className="txt-30 col-txt-title">
                            Review our pricing and sign up for our free 3-day trial.
                        </div>
                        <div className="lineGreen"></div>

                        <div className="justify-center free-trial">
                            <a className="btn-learn-features btn-start mouse-cursor" href={this.state.signUpPath} >
                                <div className="txt-14">
                                    Start FREE Trial
                                </div>
                            </a>

                           <a href="/pricing">
                               <div className="btn-learn-features btn-start txt-14 mouse-cursor">
                                   Our Pricing
                               </div>
                           </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Landing;