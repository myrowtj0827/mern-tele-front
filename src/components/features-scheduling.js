import React, {Component} from 'react';
import Header from "./header";
import '../assets/css/featuresPage.css';
import Config from "../config";

class FeaturesScheduling extends Component {
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
                            <div className="btn-header-common txt-32">
                                <div className="line"></div>
                                Scheduling
                            </div>

                            <div className="btn-header-common-desc txt-18">
                                Manage Your Calendar With Ease
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
                                Client Scheduler enables your clients to schedule appointments but still gives you complete control over your calendar!
                            </div>
                            <div className="lineGreen-left"></div>

                            <div className="features-payment-pb2 txt-24 txt-bold col-blue">
                                That's what we call a WIN-WIN.
                            </div>

                            <div className="features-payment-pb3 col-desc">
                                Set Your Availability – Online, In Office, or Both</div>
                            <div className="features-payment-pb3 col-desc">Link to your Client Scheduler from your website (if you’d like)
                            </div>
                            <div className="features-payment-pb3 col-desc">
                                New clients are automatically added to your practice and sent a welcome email
                            </div>
                            <div className="features-payment-pb3 col-desc">
                                Approve the appointment request from your dashboard
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
                                Automatic appointment reminders sent via email to reduce no-shows.
                            </div>
                            <div className="lineGreen-left"></div>

                            <div className="features-payment-pb2 txt-24 txt-bold col-blue">
                                You have more important things to worry about!
                            </div>
                            <div className="features-payment-pb3 col-desc">
                                Turn reminders on/off the Practice level
                            </div>
                            <div className="features-payment-pb3 col-desc">
                                Set 24/48/72 hours based on your cancellation policy
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
                                Create Appointment Types to match your services
                            </div>
                            <div className="lineGreen-left"></div>

                            <div className="features-payment-pb2 txt-24 txt-bold col-blue">
                                You have more important things to worry about!
                            </div>

                            <div className="features-payment-pb3 col-desc">
                                Create Appointment Types to match your services (i.e. Intake, Couple, Individual)
                            </div>
                            <div className="features-payment-pb3 col-desc">
                                Approve/Edit/Decline appointment requests from clients
                            </div>
                            <div className="features-payment-pb3 col-desc">
                                Add payment to your appointments
                            </div>
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
export default FeaturesScheduling;