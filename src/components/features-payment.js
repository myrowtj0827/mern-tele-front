import React, {Component} from 'react';
import Header from "./header";
import '../assets/css/featuresPage.css';
import Config from "../config";

class FeaturesPayments extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <div className="features-payment-bgColor justify-center">
                    <Header></Header>

                    <div className="whole-body-mW">
                        <div className="title-shadow">
                            <div className="btn-header-common txt-30">
                                <div className="line"></div>
                                Client Payment
                            </div>

                            <div className="btn-header-common-desc txt-18">
                                You need to get paid for your hard work!
                            </div>
                        </div>
                    </div>
                </div>

                <div className="whole-body-mW features-header-pt align-l">
                    <div className="features-flex-grid2">
                        <div className="empty-img"></div>
                        <div className="txt-18">
                            <div className="bg-bound3"></div>
                            <div className="pt-10 txt-26 col-title26 features-payment-pb1">
                                Request payment from your clients
                            </div>
                            <div className="lineGreen-left"></div>

                            <div className="features-payment-pb2 col-lightColor">
                                Freedom to set your fee per appointment per client.
                            </div>
                            <div className="features-payment-pb3 col-desc">
                                Set your client’s payment amount when scheduling
                            </div>
                            <div className="features-payment-pb3 col-desc">
                                Request payment from clients at any time
                            </div>
                            <div className="features-payment-pb3 col-desc">
                                Client easily pays via credit card
                            </div>
                            <div className="features-payment-pb3 col-desc">
                                Stripe processes your charges for a flat 2.9% + $.30 (charge $100, get $96.80)
                            </div>
                            <div className="features-payment-pb3 col-desc">
                                Money is deposited into your account in 2 business days (on average)
                            </div>
                        </div>
                    </div>
                </div>

                <div className="whole-body-mW align-l">
                    <div className="features-flex-grid2">
                        <div className="empty-img"></div>
                        <div className="txt-18">
                            <div className="bg-bound3"></div>
                            <div className="pt-10 txt-26 col-title26 features-payment-pb1">
                                It's so easy for clients to login and pay you at their convenience!
                            </div>
                            <div className="lineGreen-left"></div>

                            <div className="features-payment-pb2 col-lightColor">
                                Clients just login and click 'Pay Now' button - doesn't get much easier!
                            </div>
                            <div className="features-payment-pb3 col-desc">
                                You decide if client is required to pay prior to joining the session
                            </div>
                            <div className="features-payment-pb3 col-desc">
                                Automatic notifications to the client for all payment requests
                            </div>
                            <div className="features-payment-pb3 col-desc">
                                Receive an email notification for every payment made to you by clients
                            </div>
                        </div>
                    </div>
                </div>

                <div className="whole-body-mW align-l">
                    <div className="features-flex-grid2">
                        <div className="empty-img"></div>
                        <div className="txt-18">
                            <div className="bg-bound3"></div>
                            <div className="pt-10 txt-26 col-title26 features-payment-pb1">
                                Visibility into all your payment requests
                            </div>
                            <div className="lineGreen-left"></div>

                            <div className="features-payment-pb2 col-lightColor">
                                You have more important things to worry about!
                            </div>
                            <div className="features-payment-pb3 col-desc">
                                You can view current outstanding payment requests and edit them if needed
                            </div>
                            <div className="features-payment-pb3 col-desc">
                                Take a look at past history of payments
                            </div>
                            <div className="features-payment-pb3 col-desc">
                                Clients can also view their history and outstanding payment requests
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sign-up-for justify-center">
                    <div className="whole-body-mW justify-rl">
                        <div className="btn-txt">
                            <div className="txt-30 justify-center">Ready to get started now?</div>
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
export default FeaturesPayments;