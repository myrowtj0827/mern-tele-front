import React, {Component} from 'react';
import Header from "./header";
import '../assets/css/featuresPage.css';
import Config from "../config";

import {reset, sendContact } from "../redux/actions/register/client-register";
import {connect} from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class RequestDemo extends Component {
    constructor(props) {
        super(props);
        this.tmr = null;
        this.state = {
            select_item: 'Counselor/Mental Health Provider/Therapist(LPC, NBCC, etc',
            first_name: '',
            last_name: '',
            email: '',
            phone_number: '',
            booking_date: new Date(),
        };
    }

    componentDidMount() {
        let microMinutes = 20 * (1000 * 60); // 40 mins
        let startDate;
        startDate = Math.floor(new Date().getTime()/microMinutes + 1) * microMinutes;
        this.setState({
            booking_date: startDate,
        });
        window.scrollTo(0, 0);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.msg_contact && this.props.msg_contact !== prevProps.msg_contact) {
            toast(this.props.msg_contact);
            const {
                reset
            } = this.props;
            clearTimeout(this.tmr);
            this.tmr = setTimeout(function () {
                reset();
                this.tmr = null;
            }, 2000);

            if(this.props.msg_contact === "You sent the contact information to Teletherapist Support Team") {
                this.setState({
                    select_item: 'Counselor/Mental Health Provider/Therapist(LPC, NBCC, etc',
                    first_name: '',
                    last_name: '',
                    email: '',
                    phone_number: '',
                    booking_date: new Date(),
                })
            }
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

    onSubmit = () => {
        const data = {
            role: 'booking',
            select_item: this.state.select_item,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            phone_number: this.state.phone_number,
            booking_date: this.state.booking_date,
        };

        const {
            sendContact
        } = this.props;

        if(sendContact) {
            sendContact(data);
        }
    };

    onFormSubmit(e) {
        e.preventDefault();
    };

    onChangeDate = (date) => {
        this.setState({
            booking_date: date,
        });
    };

    render() {
        let contact_list = [
            'Counselor/Mental Health Provider/Therapist(LPC, NBCC, etc',
            'Dietitian or Nutritionist',
            'Marriage & Family Therapist(MFT)',
            'Occupational Thrapist(OT)',
            'Physical Therapist(PT)',
            'Psychiatrist',
            'Psychologist',
            'Social Worker(LCSW)',
            'Speech Therapist(SLP)',
            'Substance Abuse Countselor'
        ];
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
                                <div className="line" />
                                Select a timeslot for your demo with us!
                            </div>
                        </div>
                    </div>
                </div>
                <div className="whole-body-mW features-header-pt col-darkBlue">
                    <div className="bg-bound3"></div>
                    <div className="pt-30 pb-20 txt-22 give-us">
                        We know you may want to see our application in action before you buy. We will gladly give you a tour of everything we have to offer, answer any questions you may have, and we won't pressure you to buy. Yes, really! You need to make the best decision for your practice and workflow and we get that.
                    </div>
                    <div className="contact-width">
                        <div className="pb-20 col-buttonAndLink">Meeting Duration</div>
                        <div className="meeting-duration">20 mins</div>
                        <form onSubmit={this.onFormSubmit}>
                            <label>
                                <div className="pt-30 pb-10 col-buttonAndLink">Request Time</div>
                            </label>
                            <DatePicker
                                selected={this.state.booking_date}
                                onChange={this.onChangeDate}
                                showTimeSelect
                                timeCaption="Time"
                                minDate={new Date().getTime()}
                                dateFormat="MMMM d, yyyy h:mm aa"
                                timeIntervals={20}
                                showPopperArrow={false}
                            />
                        </form>
                        <div className="pb-20 txt-22 col-blue">
                            Not quite ready to commit? We'll email you and you can pick a time later!
                        </div>
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
                        <input
                            id="email"
                            type="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.onChange}
                        />
                        <div>
                            <input
                                id="phone_number"
                                type="text"
                                placeholder="Phone Number"
                                value={this.state.phone_number}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="">
                            <select className="country-option" onChange={this.onMessageCategoryChange}>
                                {
                                    contact_list && contact_list.map((item, key) => (
                                        <option key={key + 1} value={item}>{item}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="pt-20" onClick={this.onSubmit}>
                            <div className="btn-contact contact mouse-cursor txt-16">Submit</div>
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
        sendContact,
        reset,
    }
)(RequestDemo);