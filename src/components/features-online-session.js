import React, {Component} from 'react';
import Header from "./header";
import '../assets/css/featuresPage.css';
import Config from "../config";

class FeaturesOnlineSession extends Component {
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
                                Virtual Session
                            </div>

                            <div className="btn-header-common-desc txt-18">
                                This is what we were created for!
                            </div>
                        </div>
                    </div>
                </div>

                <div className="whole-body-mW features-header-pt align-l">
                    <div className="online-grid2-l">
                        <div className="empty-img-inversion"></div>
                        <div className="txt-18">
                            <div className="bg-bound3"></div>
                            <div className="pt-10 txt-26 col-title26 features-payment-pb1">
                                Scheduling
                            </div>
                            <div className="lineGreen-left"></div>

                            <div className="features-payment-pb3 col-desc">
                                The calendar is clean and easy to use. We’ve got you covered on recurring appointments, appointment reminders, and your client’s ability to request appointments from your website or ours!
                            </div>
                        </div>
                    </div>

                    <div className="online-grid2-r">
                        <div className="txt-18">
                            <div className="bg-bound3"></div>
                            <div className="pt-10 txt-26 col-title26 features-payment-pb1">
                                Custom Waiting Room
                            </div>
                            <div className="lineGreen-left"></div>

                            <div className="features-payment-pb2 txt-24 txt-bold col-blue">
                                Our waiting room is amazing. Plain and simple. You choose the imagery and the music.
                            </div>
                            <div className="features-payment-pb3 col-desc">
                                Clients are directed to your custom waiting room until you let them into the session – just like they are in your office!
                            </div>
                        </div>
                        <div className="empty-img-inversion"></div>
                    </div>

                    <div className="online-grid2-l">
                        <div className="empty-img-inversion"></div>
                        <div className="txt-18">
                            <div className="bg-bound3"></div>
                            <div className="pt-10 txt-26 col-title26 features-payment-pb1">
                                Client & Session Notes
                            </div>
                            <div className="lineGreen-left"></div>

                            <div className="features-payment-pb2 txt-24 txt-bold col-blue desc-features">
                                Easily take notes after a session or even just a quick note about the client.
                            </div>
                            <div className="features-payment-pb3 col-desc">
                                Our notes are beautiful, easy to use, and you get to make them the way you want!
                            </div>
                        </div>
                    </div>

                    <div className="online-grid2-r">
                        <div className="txt-18">
                            <div className="bg-bound3"></div>
                            <div className="pt-10 txt-26 col-title26 features-payment-pb1">
                                Client Payment
                            </div>
                            <div className="lineGreen-left"></div>

                            <div className="features-payment-pb3 col-desc">
                                Your clients can pay you prior to joining a session or you can request a payment from them at any time. Clients simply login and click the “Pay Now” button.
                            </div>
                        </div>
                        <div className="empty-img-inversion"></div>
                    </div>

                    <div className="online-grid2-l">
                        <div className="empty-img-inversion"></div>
                        <div className="txt-18">
                            <div className="bg-bound3"></div>
                            <div className="pt-10 txt-26 col-title26 features-payment-pb1">
                                Secure Messaging
                            </div>
                            <div className="lineGreen-left"></div>

                            <div className="features-payment-pb3 col-desc">
                                Message with your clients, colleagues, and staff members! Messages are securely stored on thera-LINK servers. If someone isn’t logged in when they receive a message, they’ll get a notification email to let them know to login and retrieve the message.
                            </div>
                        </div>
                    </div>

                    <div className="online-grid2-r">
                        <div className="txt-18">
                            <div className="bg-bound3"></div>
                            <div className="pt-10 txt-26 col-title26 features-payment-pb1">
                                File Sharing
                            </div>
                            <div className="lineGreen-left"></div>

                            <div className="features-payment-pb3 col-desc">
                                File sharing is super easy and painless – even for the non-tech savvy folks! Just upload the file, select the client(s) to share with and that’s it! Notifications happen seamlessly to let everyone know.
                            </div>
                        </div>
                        <div className="empty-img-inversion"></div>
                    </div>

                    <div className="online-grid2-l">
                        <div className="empty-img-inversion"></div>
                        <div className="txt-18">
                            <div className="bg-bound3"></div>
                            <div className="pt-10 txt-26 col-title26 features-payment-pb1">
                                Client Profile
                            </div>
                            <div className="lineGreen-left"></div>

                            <div className="features-payment-pb3 col-desc">
                                Client profiles give you information about your client right at your fingertips. See all notes related to that client, a report of past appointments, how long sessions lasted, payment, and personal information.
                            </div>
                        </div>
                    </div>

                    <div className="online-grid2-r">
                        <div className="txt-18">
                            <div className="bg-bound3"></div>
                            <div className="pt-10 txt-26 col-title26 features-payment-pb1">
                                Secure Video
                            </div>
                            <div className="lineGreen-left"></div>

                            <div className="desc-features features-payment-pb2 txt-24 txt-bold col-blue">
                                The video is beautiful and secure with all streams encrypted end to end.
                            </div>
                            <div className="features-payment-pb3 col-desc">
                                You can have multiple people in one session and all be seen at the same time.
                            </div>
                        </div>
                        <div className="empty-img-inversion"></div>
                    </div>

                    <div className="online-grid2-l">
                        <div className="empty-img-inversion"></div>
                        <div className="txt-18">
                            <div className="bg-bound3"></div>
                            <div className="pt-10 txt-26 col-title26 features-payment-pb1">
                                Directory Listing
                            </div>
                            <div className="lineGreen-left"></div>

                            <div className="desc-features features-payment-pb2 txt-24 txt-bold col-blue">
                                Our Directory showcases only thera-LINK providers who choose to be listed.
                            </div>
                            <div className="features-payment-pb3 col-desc">
                                We handle the behind the scenes work to help clients find you and connect.
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
export default FeaturesOnlineSession;