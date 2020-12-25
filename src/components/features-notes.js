import React, {Component} from 'react';
import Header from "./header";
import '../assets/css/featuresPage.css';
import Config from "../config";

class FeaturesNotes extends Component{
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
                                Session & Client Notes
                            </div>

                            <div className="btn-header-common-desc txt-18">
                                Keep notes at your fingertips!
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
                                Using our editor is just like using Word or any other editing program you already know.
                            </div>
                            <div className="lineGreen-left"></div>

                            <div className="features-payment-pb2 txt-24 txt-bold col-blue">
                                That's what we call a WIN-WIN.
                            </div>

                            <div className="features-payment-pb3 col-desc">
                                Notes can be associated with a session or written as a general client note
                            </div>
                            <div className="features-payment-pb3 col-desc">
                                Create any styling you’d like – headings, bold, italics, etc…
                            </div>
                            <div className="features-payment-pb3 col-desc">
                                Make your note match your needs – you have a blank canvas to work with
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
                                Save Your Notes Securely
                            </div>
                            <div className="lineGreen-left"></div>

                            <div className="features-payment-pb2 txt-24 txt-bold col-blue">
                                We do the heavy lifting of making sure it's secure and saved. You just type away!
                            </div>

                            <div className="features-payment-pb3 col-desc">
                                Every note is auto-saved so you don’t have to start over
                            </div>
                            <div className="features-payment-pb3 col-desc">
                                Sign and lock your note so it can’t be edited in the future
                            </div>
                            <div className="features-payment-pb3 col-desc">
                                Notes are time and date stamped
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
                                Review past notes with ease
                            </div>
                            <div className="lineGreen-left"></div>

                            <div className="features-payment-pb2 txt-24 txt-bold col-blue">
                                Look back at your past client and session notes while on the same page as you write your new note.
                            </div>

                            <div className="features-payment-pb3 col-desc">
                                Notes at your fingertips so you can look back at historical records
                            </div>
                            <div className="features-payment-pb3 col-desc">
                                No need to go back and forth in the app to find past notes
                            </div>
                            <div className="features-payment-pb3 col-desc">
                                Copy and paste from previous notes
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
export default FeaturesNotes;