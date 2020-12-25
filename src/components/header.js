import React from 'react';
import {Link} from "react-router-dom";
import Config from "../config/index";

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menuVisible: false,
            scrolling: false,
            therapistVisible: false,
            featureVisible: false,
            resourceVisible: false,
            moreBtnVisible: false,
            loginPath: '',
            signUpPath: '',
        };
    }

    therapistMenu = () => {
        this.setState({therapistVisible: !this.state.therapistVisible});
        if(this.state.therapistVisible === false) {
            this.setState({
                resourceVisible: false,
                featureVisible: false,
            });
        }
    };

    featuresMenu = () => {
        this.setState({featureVisible: !this.state.featureVisible});
        if(this.state.featureVisible === false) {
            this.setState({
                resourceVisible: false,
                therapistVisible: false,
            });
        }
    };

    resourceMenu = () => {
        this.setState({resourceVisible: !this.state.resourceVisible});
        if(this.state.resourceVisible === false) {
            this.setState({
                featureVisible: false,
                therapistVisible: false,
            });
        }
    };

    toggleMore = () => {
        this.setState({
            moreBtnVisible: !this.state.moreBtnVisible,
        })
    };
    toggleMenu = () => {
        this.setState({menuVisible: !this.state.menuVisible});
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);

        this.setState({
            loginPath: Config.PROVIDER_URL + '/login',
            signUpPath: Config.PROVIDER_URL + '/register-provider',
        })
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (window.scrollY > 50) {
            this.setState({scrolling: true});
        }
        else {
            this.setState({scrolling: false});
        }
    };

    render() {
        return (
            <div className={`header-body ${this.state.scrolling ? 'white' : ''}`}>
                <div className="header-height">
                    <div className="logo-mw justify-rl">
                        <div>
                            <div className={"header-logo"}>
                                <Link className="btn-underLine" to="/home">
                                    <img className="mouse-cursor tablet-shown"
                                         src={require('../assets/img/landing/app-logo.svg')}
                                         alt="Logo"/>
                                </Link>
                                <Link className="btn-underLine" to="/home">
                                    <img className="mouse-cursor phone-shown"
                                         src={require('../assets/img/landing/app-logo-mobile.svg')}
                                         alt="Logo"/>
                                </Link>
                            </div>

                            <div className="justify-rl justify-center">
                                <div>
                                    <div className="btn-navbar mouse-cursor dropdown">
                                        <span>About Us</span>
                                        {
                                            this.state.scrolling?
                                                <img className="drop-icon" src={require("../assets/img/drop-down-black.svg")} alt="drop down" />
                                                :
                                                <img className="drop-icon" src={require("../assets/img/drop-down.svg")} alt="drop down" />
                                        }

                                        <div className="dropdown-content">
                                            <Link to='/why-us'>
                                                <div className="menu-txt">Why Teletherapist</div>
                                            </Link>
                                            <Link to='/features-online-devices'>
                                                <div className="menu-txt">FAQS</div>
                                            </Link>
                                            <Link to='/help-center'>
                                                <div className="menu-txt">Help</div>
                                            </Link>
                                        </div>
                                    </div>

                                    <Link className="btn-underLine" to="/pricing">
                                        <div className="btn-navbar mouse-cursor">Pricing</div>
                                    </Link>

                                    <div className="btn-navbar mouse-cursor dropdown">
                                        <span>Features</span>
                                        {
                                            this.state.scrolling?
                                                <img className="drop-icon" src={require("../assets/img/drop-down-black.svg")} alt="drop down" />
                                                :
                                                <img className="drop-icon" src={require("../assets/img/drop-down.svg")} alt="drop down" />
                                        }

                                        <div className="dropdown-content">
                                            <Link to='/features-page'>
                                                <div className="menu-txt">Online Services</div>
                                            </Link>
                                            <Link to='/features-scheduling'>
                                                <div className="menu-txt">Scheduling</div>
                                            </Link>
                                            <Link to='/features-payment'>
                                                <div className="menu-txt">Payments</div>
                                            </Link>
                                            <Link to='/features-notes'>
                                                <div className="menu-txt">Notes</div>
                                            </Link>
                                            <Link to='/features-online-session'>
                                                <div className="menu-txt">Online Session</div>
                                            </Link>
                                            <Link to='/features-online-devices'>
                                                <div className="menu-txt">Devices</div>
                                            </Link>
                                            <div className="flex-more menu-txt" onClick={this.toggleMore}>
                                                <div className="">Much More</div>
                                                <div>
                                                    {
                                                        this.state.moreBtnVisible?
                                                            <div className="dropdown-icon justify-center"><img className="down-up-size" src={require("../assets/img/up.svg")} alt='' /> </div>
                                                            :
                                                            <div className="dropdown-icon"><img className="down-up-size" src={require("../assets/img/down.svg")} alt='' /> </div>
                                                    }
                                                </div>
                                            </div>

                                            {
                                                this.state.moreBtnVisible && (
                                                    <div>
                                                        <Link to='/features-notes'>
                                                            <div className="menu-txt pl">Notes</div>
                                                        </Link>
                                                        <Link to='/features-online-session'>
                                                            <div className="menu-txt pl">Online Session</div>
                                                        </Link>
                                                        <Link to='/features-online-devices'>
                                                            <div className="menu-txt pl">Devices</div>
                                                        </Link>
                                                    </div>
                                                )
                                            }

                                        </div>
                                    </div>

                                    <div className="btn-navbar mouse-cursor dropdown">
                                        <span>Therapists</span>
                                        {
                                            this.state.scrolling?
                                                <img className="drop-icon" src={require("../assets/img/drop-down-black.svg")} alt="drop down" />
                                                :
                                                <img className="drop-icon" src={require("../assets/img/drop-down.svg")} alt="drop down" />
                                        }

                                        <div className="dropdown-content">
                                            <Link to="/blog">
                                                <div className="menu-txt mouse-cursor">Blog</div>
                                            </Link>
                                            <Link to="/directory-search">
                                                <div className="menu-txt mouse-cursor">Find a Therapist</div>
                                            </Link>
                                        </div>
                                    </div>

                                    <a className="btn-underLine" href={this.state.loginPath}>
                                        <div className="btn-navbar mouse-cursor sign-border">Sign In</div>
                                    </a>
                                    <a className="btn-underLine" href={this.state.signUpPath}>
                                        <div className="btn-navbar mouse-cursor btn-sign">Sign up for free</div>
                                    </a>
                                </div>
                                <div id="menu" className="justify-center" onClick={this.toggleMenu}>
                                    <img className="mobile-menu mouse-cursor"
                                         src={require('../assets/img/landing/mobile-menu.svg')} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {
                    this.state.menuVisible && (
                        <div className="menu-container trans-menu" style={{overflowY: 'auto;', maxHeight: '70vh'}}>
                            <a className="btn-underLine" href={this.state.signUpPath}>
                                <div className="navbar-menu justify-center txt-24 mouse-cursor btn-navbar-bb">Sign up for free
                                </div>
                            </a>

                            <a className="btn-underLine" href={this.state.loginPath}>
                                <div className="navbar-menu justify-center txt-24 mouse-cursor btn-navbar-bb">Sign In
                                </div>
                            </a>

                            <div className={this.state.resourceVisible ? "navbar-menu justify-center txt-24 mouse-cursor btn-navbar-bb menu-selectedBg" : "navbar-menu justify-center txt-24 mouse-cursor btn-navbar-bb"} onClick={this.resourceMenu}>
                                About Us
                                {
                                    this.state.resourceVisible ?
                                        <div className="dropdown-icon justify-center"><img className="down-up-size" src={require("../assets/img/up.svg")} alt='' /> </div>
                                        :
                                        <div className="dropdown-icon"><img className="down-up-size" src={require("../assets/img/down.svg")} alt='' /> </div>
                                }
                            </div>
                            {
                                this.state.resourceVisible && (
                                    <div>
                                        <Link to='/why-us' className="secondMenu justify-center menu-txt btn-navbar-bb mouse-cursor">
                                            <div>Why Teletherapist</div>
                                        </Link>
                                        <Link to='/' className="secondMenu justify-center menu-txt btn-navbar-bb mouse-cursor">
                                            <div>FAQS</div>
                                        </Link>
                                        <Link to='/help-center' className="secondMenu justify-center menu-txt btn-navbar-bb mouse-cursor">
                                            <div>Help</div>
                                        </Link>
                                    </div>
                                )
                            }

                            <Link className="btn-underLine" to="/pricing">
                                <div className="navbar-menu justify-center txt-24 mouse-cursor btn-navbar-bb">Pricing
                                </div>
                            </Link>

                            <div className={this.state.featureVisible ? "navbar-menu justify-center txt-24 mouse-cursor btn-navbar-bb menu-selectedBg" : "navbar-menu justify-center txt-24 mouse-cursor btn-navbar-bb"} onClick={this.featuresMenu}>
                                Features
                                {
                                    this.state.featureVisible ?
                                        <div className="dropdown-icon justify-center"><img className="down-up-size" src={require("../assets/img/up.svg")} alt='' /> </div>
                                        :
                                        <div className="dropdown-icon"><img className="down-up-size" src={require("../assets/img/down.svg")} alt='' /> </div>
                                }
                            </div>

                            {
                                this.state.featureVisible && (
                                    <div>
                                        <Link to='/features-page' className="secondMenu justify-center menu-txt btn-navbar-bb mouse-cursor">
                                            <div>Online Services</div>
                                        </Link>
                                        <Link to='/features-scheduling' className="secondMenu justify-center menu-txt btn-navbar-bb mouse-cursor">
                                            <div>Scheduling</div>
                                        </Link>
                                        <Link to='/features-payment' className="secondMenu justify-center menu-txt btn-navbar-bb mouse-cursor">
                                            <div>Payments</div>
                                        </Link>
                                        <Link to='/features-notes' className="secondMenu justify-center menu-txt btn-navbar-bb mouse-cursor">
                                            <div>Notes</div>
                                        </Link>
                                        <Link to='/features-online-session' className="secondMenu justify-center menu-txt btn-navbar-bb mouse-cursor">
                                            <div>Online Session</div>
                                        </Link>
                                        <Link to='/features-online-devices' className="secondMenu justify-center menu-txt btn-navbar-bb mouse-cursor">
                                            <div>Devices</div>
                                        </Link>
                                        <div className="secondMenu justify-center menu-txt btn-navbar-bb mouse-cursor" onClick={this.toggleMore}>
                                            <div className="">Much More</div>
                                            <div>
                                                {
                                                    this.state.moreBtnVisible?
                                                        <div className="dropdown-icon justify-center"><img className="down-up-size" src={require("../assets/img/up.svg")} alt='' /> </div>
                                                        :
                                                        <div className="dropdown-icon"><img className="down-up-size" src={require("../assets/img/down.svg")} alt='' /> </div>
                                                }
                                            </div>
                                        </div>

                                        {
                                            this.state.moreBtnVisible && (
                                                <div>
                                                    <Link to='/features-notes' className="secondMenu justify-center menu-txt btn-navbar-bb mouse-cursor">
                                                        <div>Notes</div>
                                                    </Link>
                                                    <Link to='/features-online-session' className="secondMenu justify-center menu-txt btn-navbar-bb mouse-cursor">
                                                        <div>Online Session</div>
                                                    </Link>
                                                    <Link to='/features-online-devices' className="secondMenu justify-center menu-txt btn-navbar-bb mouse-cursor">
                                                        <div>Devices</div>
                                                    </Link>
                                                </div>
                                            )
                                        }
                                    </div>
                                )
                            }

                            <div className={this.state.therapistVisible ? "navbar-menu justify-center txt-24 mouse-cursor btn-navbar-bb menu-selectedBg" : "navbar-menu justify-center txt-24 mouse-cursor btn-navbar-bb"} onClick={this.therapistMenu}>
                                Therapists
                                {
                                    this.state.therapistVisible ?
                                        <div className="dropdown-icon justify-center"><img className="down-up-size" src={require("../assets/img/up.svg")} alt='' /> </div>
                                        :
                                        <div className="dropdown-icon"><img className="down-up-size" src={require("../assets/img/down.svg")} alt='' /> </div>
                                }
                            </div>

                            {
                                this.state.therapistVisible && (
                                    <div>
                                        <Link to='/blog' className="secondMenu justify-center menu-txt btn-navbar-bb mouse-cursor">
                                            <div>Blog</div>
                                        </Link>
                                        <Link to='/directory-search' className="secondMenu justify-center menu-txt btn-navbar-bb mouse-cursor">
                                            <div>Find a Therapist</div>
                                        </Link>
                                    </div>
                                )
                            }
                        </div>
                    )
                }

            </div>
        );
    }
}

export default Header;