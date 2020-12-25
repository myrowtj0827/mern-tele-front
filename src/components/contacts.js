import React, {Component} from 'react';
import Header from "./header";
import '../assets/css/featuresPage.css';
import Config from "../config";

import {reset, sendContact } from "../redux/actions/register/client-register";
import {connect} from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Contacts extends Component {
    constructor(props) {
        super(props);
        this.tmr = null;
        this.state = {
            select_item: 'General Question',
            first_name: '',
            last_name: '',
            email: '',
            job_title: '',
            company_name: '',
            msg: '',
            flag: 0,
            flag_btn: false,
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.msg_contact && ((this.state.flag_btn !== prevState.flag_btn) || (this.state.flag === 0))) {
            toast(this.props.msg_contact);
            const {
                reset
            } = this.props;
            clearTimeout(this.tmr);
            this.tmr = setTimeout(function () {
                reset();
                this.tmr = null;
            }, 4000);

            this.setState({
                flag: 1,
            })
        }
    }
    onMessageCategoryChange = (e) => {
        this.setState({
            select_item: e.target.value,
        });
    };
    onChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value || '',
        })
    };
    onContact = () => {
        const data = {
            select_item: this.state.select_item,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            job_title: this.state.job_title,
            company_name: this.state.company_name,
            msg: this.state.msg,
        };

        this.setState({
            flag_btn: !this.state.flag_btn,
        });
        const {
            sendContact
        } = this.props;

        if(sendContact) {
            sendContact(data);
        }
    };
    render() {
        let contact_list = ['General Question', 'Tech Support', 'Feature Request', 'Suggestion', 'Other'];
        return (
            <div>
                <div className="features-payment-bgColor justify-center">
                    <Header />
                    <ToastContainer />
                    <div className={"spinning-curtain"} style={{display: this.props.spinning ? "flex" : "none"}}>
                        <div className="lds-dual-ring"/>
                    </div>
                    <div className="whole-body-mW">
                        <div className="title-shadow">
                            <div className="btn-header-common txt-32">
                                <div className="line"></div>
                                Contact Us
                            </div>
                        </div>
                    </div>
                </div>
                <div className="whole-body-mW features-header-pt col-darkBlue">
                    <div className="bg-bound3"></div>
                    <div className="pt-80 pb-30 align-c txt-42">GIVE US A SHOUT.</div>
                    <div className="pb-20 txt-22 give-us">
                        Feel free to contact us to get more information, get answers to your questions, or just to give us feedback. We would love to hear from you!
                    </div>
                    <div className="contact-width">
                        <div className="select-contact">
                            <select className="country-option" onChange={this.onMessageCategoryChange}>
                                {
                                    contact_list && contact_list.map((item, key) => (
                                        <option key={key + 1} value={item}>{item}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="contact-flex-grid2">
                            <div>
                                <input
                                    id="first_name"
                                    type="text"
                                    placeholder="First Name"
                                    value={this.state.first_name}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div>
                                <input
                                    id="last_name"
                                    type="text"
                                    placeholder="Last Name"
                                    value={this.state.last_name}
                                    onChange={this.onChange}
                                />
                            </div>
                        </div>
                        <div>
                            <input
                                id="email"
                                type="email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="contact-flex-grid2">
                            <div>
                                <input
                                    id="job_title"
                                    type="text"
                                    placeholder="Job Title"
                                    value={this.state.job_title}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div>
                                <input
                                    id="company_name"
                                    type="text"
                                    placeholder="Company Name"
                                    value={this.state.company_name}
                                    onChange={this.onChange}
                                />
                            </div>
                        </div>
                        <div>
                            <input
                                id="msg"
                                type="text"
                                placeholder="Message"
                                value={this.state.msg}
                                onChange={this.onChange}
                            />
                        </div>

                        <div className="pt-20" onClick={this.onContact}>
                            <div className="btn-contact contact mouse-cursor txt-16">Contact Us</div>
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
const mapStateToProps = (state) => {
    return {
        spinning: state.registers.spinning,
        msg_contact: state.registers.msg_contact,
    }
};

export default connect(
    mapStateToProps,
    {
        reset,
        sendContact,
    }
)(Contacts);