import React, {Component} from 'react';
import Header from "./header";
import '../assets/css/featuresPage.css';
import Config from "../config";

class FeaturesOnlineDevices extends Component{
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <div className="pricing-header-bg justify-center">
                    <Header></Header>

                    <div className="whole-body-mW simple-pricing">
                        <div className="device-title">
                            <div className="btn-header-common txt-30">
                                <div className="line"></div>
                                Devices
                            </div>

                            <div className="btn-header-common-desc txt-18">
                                From Android to Apple, we've got you covered.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="whole-body-mW features-header-pt align-c">
                    <div className="device-img-space">
                        <img className="device-img mouse-cursor" src={require("../assets/img/device-img-1.svg")} alt="" />
                        <img className="device-img mouse-cursor" src={require("../assets/img/device-img-2.svg")} alt="" />
                        <img className="device-img mouse-cursor" src={require("../assets/img/device-img-3.svg")} alt="" />
                        <img className="device-img mouse-cursor" src={require("../assets/img/device-img-4.svg")} alt="" />
                    </div>

                    <div className="apple-txt-pt60 txt-26 col-txt-title">
                        PC (Windows) or Apple (Mac)
                    </div>
                    <div className="lineGreen"></div>

                    <div className="apple-txt-pt60 txt-18 col-desc">
                        We support Chrome, Edge, and Firefox browser on both your PC or your Mac computer. We also support Safari version 11+ on your Mac!
                        For best results and security, make sure you keep your browser up to date. Check here to see what browser you are using and if you have the latest version.
                    </div>

                    <div className="apple-txt-pt90 device-img-text-space">
                        <div className="flex-grid2 device-grid2-gaps align-c txt-20 col-heavyDark">
                            <div className="bg-bound3">
                                <div className="pt-20 mouse-cursor">
                                    <img className="device-img" src={require('../assets/img/device-img-5.svg')} alt="" />
                                </div>
                                <div className="pt-40 pb-50 txt-18 col-desc">
                                    We support iPhones and iPads!  On all devices using iOS 11 or newer, there’s no app needed.
                                    Just open the Safari browser on your device and login to thera-LINK and start your video session.
                                    If you’ve got an older operating system, install our app and you’ll be good to go!
                                </div>
                            </div>

                            <div className="bg-bound3">
                                <div className="pt-20 mouse-cursor">
                                    <img className="device-img" src={require('../assets/img/device-img-6.svg')} alt="" />
                                </div>
                                <div className="pt-40 txt-18 col-desc">
                                    We support the Android operating system – pretty much all newer devices in the last few years will work.
                                    It’s super simple too. No app needed – just Chrome or Firefox browser.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-grid2 device-grid2-gaps pb-50">
                        <div className="align-r app-store mouse-cursor">
                            <img className="social-img" src={require("../assets/img/app-store.svg")} alt="" />
                        </div>
                        <div className="align-l app-store mouse-cursor">
                            <img className="social-img" src={require("../assets/img/g-play.svg")} alt="" />
                        </div>
                    </div>
                </div>

                <div className="sign-up-for justify-center">
                    <div className="whole-body-mW justify-rl">
                        <div className="btn-txt">
                            <div className="txt-26 justify-center">Ready to get started now?</div>
                            <a href={Config.PROVIDER_URL + '/register-provider'}>
                                <div className="btn-common btn-request-b txt-14 mouse-cursor">SIGN UP FOR FREE TRIAL</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default FeaturesOnlineDevices;