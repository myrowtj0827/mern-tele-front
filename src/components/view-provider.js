import React, {Component} from 'react';
import Header from "./header";
import { getProviderByIdRole, requestRegister } from "../redux/actions/register/client-register";

import '../assets/css/viewProvider.css';
import {connect} from "react-redux";
import Config from "../config/index";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ViewProvider extends Component {
    state = {
        providerId: '',
        providerInfo: '',
        accountInfo: [],

        filterList: {
            acceptance_commitment: 'Acceptance and Commitment ...',
            adolescents: 'Adolescents',
            assessment: 'Assessment',
            chronic_illness_isability: 'Chronic Illness & Disability',
            cognitive_behavioral_therapy: 'Cognitive Behavioral Therapy',
            couples_marriage: 'Couples/Marriage',
            eating_disorders: 'Eating Disorders',
            forensic_psychology: 'Forensic Psychology',
            indigenous_first_nations: 'Indigenous & First Nations & Na...',
            life_transitions: 'Life Transitions',
            mindfulness: 'Mindfulness',
            obsessive: 'Obsessive Compulsive Disorder...',
            post: 'Post-Traumatic Stress Disorder',
            self_esteam: 'Self-Esteem',
            spirituality_faith: 'Spirituality/Faith',
            wellness: 'Wellness of Musculoskeletal Sys...',

            acute: 'Acute and Chronic Medical Cond...',
            african: 'African American',
            autism: 'Autism Spectrum Disorder',
            clinical: 'Clinical Hypnosis',
            college_students: 'College Students',
            depression: 'Depression',
            emdr: 'EMDR',
            gender: 'Gender and sexual diversity',
            infertility: 'Infertility',
            health_men: 'Men\'s Issues & Health',
            motivation: 'Motivation & Goal Achievement',
            parenting: 'Parenting',
            postpartum: 'Postpartum Depression',
            sexual: 'Sexual Abuse',
            sport: 'Sport Performance and Biofeed...',
            health_women: 'Women\'s Issues & Health',

            recovery: 'Addictions/Recovery',
            management: 'Anger Management',
            disorder: 'Bipolar Disorder',
            clinical_supervision: 'Clinical Supervision',
            compassion: 'Compassion Fatigue & Burnout',
            diabetees: 'Diabetes',
            erectile: 'Erectile Dysfunction',
            grief: 'Grief',
            health_sexual: 'Intimacy & Sexual Health',
            metabolic: 'Metabolic Syndrome',
            narcissism: 'Narcissism',
            pastors: 'Pastors',
            relationships: 'Relationships',
            addiction: 'Sexual Addiction',
            stress: 'Stress',
            performance_work: 'Work Issues/Performance',

            adhd: 'ADHD/ADD',
            anxiety: 'Anxiety',
            borderline: 'Borderline Personality Disorder',
            codependecy: 'Codependecy',
            coping_skills: 'Coping Skills',
            divorce: 'Divorce',
            family: 'Family',
            immigrant: 'Immigrant and Refugee Mental ...',
            lgbtoia: 'LGBTQIA',
            issues: 'Military Related Issues',
            obesity: 'Obesity',
            phobias: 'Phobias',
            schizophrenia: 'Schizophrenia',
            social_search: 'Social Justice/Search for Meaning',
            trauma_abuse: 'Trauma/Abuse',
        },

        client_name: '',
        client_email: '',
        msgTxt: '',

        warning_name: '',
        warning_email: '',
        warning_msgTxt: '',
        path: '',
        nFlag: false,
        message: '',
    };

    componentDidMount() {
        this.getProviderID();
        this.setState({
            path: Config.CLIENT_URL + "/client-login/",
        });

        const {
            getProviderByIdRole
        } = this.props;

        if(getProviderByIdRole) {
            const data = {
                id: this.props.match.params.id,
                role: 'provider',
            };
            getProviderByIdRole(data);
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.getAccount && prevProps.getAccount !== this.props.getAccount) {
            this.setState({
                accountInfo: this.props.getAccount,
            });
        }

        if(this.props.msg_res && prevProps.msg_res !== this.props.msg_res) {
            toast(this.props.msg_res);
            console.log(this.props.msg_res);
        }
    }

    getProviderID = () => {
        let path = window.location.href;
        let arrayLink = path.split('/');

        this.setState({
            providerId: arrayLink[arrayLink.length - 1],
        });

    };

    onChange = (e) => {
        this.setState({[e.target.id]: e.target.value || ''});
    };

    send = () => {
        const {
            requestRegister,
        } = this.props;
            const data = {
                name: this.state.client_name,
                email: this.state.client_email,
                provider_id: this.state.accountInfo._id,
                provider_name: this.state.accountInfo.name,
                provider_email: this.state.accountInfo.email,
                msg: this.state.msgTxt,
            };
            requestRegister(data);
            this.setState({
                nFlag: !this.state.nFlag,
            });
             window.scrollTo(0, 0);
    };

    onAutoFocus = (code) => {
        if (code.keyCode === 13) {
            if(code.target.id === "client_name") {

            } else if(code.target.id === "client_email") {

            } else if(code.target.id === "message") {

            }
        }
    };

    render() {
        return (
            <div>
                <div className="view-header-bgColor justify-center">
                    <Header />
                </div>
                <ToastContainer />
                <div
                    className={ this.state.accountInfo.bgPhoto? "llc-cover-bg": "llc-cover-bg initial-bg"}
                    style={{ backgroundImage: this.state.accountInfo.bgPhoto ? 'url(' + this.state.accountInfo.bgPhoto + ')': ''}}
                >
                    <div className="psychologist-posi">
                        <div><img className="profile-photo" src={this.state.accountInfo.photo} alt="" /></div>

                        <div className="img-pl profile-name">
                            <div className="newYork-pt">
                                <div className="txt-30">{this.state.accountInfo.name}</div>
                                <div className="llc-icon-pl"><img src={require('../assets/img/llc-check-icon.svg')} alt="" /> </div>
                            </div>
                            <div className="txt-18 city-pt">
                                <div className="llc-city-pr">{this.state.accountInfo.practice_name}</div>
                                <div>
                                    {
                                        this.state.accountInfo.city && this.state.accountInfo.city + ', '
                                    }

                                    {
                                        this.state.accountInfo.state_province && this.state.accountInfo.state_province
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="whole-body-mW view-header-pt align-l">
                    <div className="view-grid3 col-darkBlue">
                        <div className="contact-grid2">
                            <div className="view-ptl about-height" style={{padding: 0}}>
                                <div className="bg-bound3 pt-20"></div>
                                <div className="txt-26">About provider</div>
                                <hr />

                                <div className="view-icon1-pt">
                                    <div className="txt-18 align-l">
                                        {this.state.accountInfo.about}
                                    </div>
                                </div>
                            </div>

                            <div className="bg-bound3"></div>
                            <div className="view-ptl bg-grey">
                                <div className="col-darkBlue">
                                    <div className="txt-26">Contact Me</div>
                                    <hr className="input-pb"/>

                                    <div className="mobile-flex">
                                        <input
                                            id="client_name"
                                            type="text"
                                            className="input-maxW"
                                            placeholder="Name"
                                            value={this.state.client_name}
                                            onChange={this.onChange}
                                            onKeyUp={event => this.onAutoFocus(event)}
                                            required
                                            autoFocus
                                        />
                                        <img className="asteristic-pl" src={require('../assets/img/icon-asteristic.svg')} alt="" />
                                    </div>

                                    <div className="mobile-flex">
                                        <input
                                            id="client_email"
                                            type="email"
                                            className="input-maxW"
                                            placeholder="Your Email Address"
                                            value={this.state.client_email}
                                            onChange={this.onChange}
                                            onKeyUp={event => this.onAutoFocus(event)}
                                            required
                                        />
                                        <img className="asteristic-pl" src={require('../assets/img/icon-asteristic.svg')} alt="" />
                                    </div>

                                    <div className="general-flex">
                                        <input
                                            id="message"
                                            type="text"
                                            className="input-message"
                                            placeholder="Message"
                                            onChange={(event) => this.setState({msgTxt: event.target.value})}
                                            onKeyUp={event => this.onAutoFocus(event)}
                                        />
                                        <img className="asteristic-pl" src={require('../assets/img/icon-asteristic.svg')} alt="" />
                                    </div>

                                    <div className="justify-rl un-between">
                                        <div className="justify-center">
                                            <div className="btn-bttonAndLink mouse-cursor" onClick={this.send}>Send</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="view-grid22 txt-16">
                            <div className="bg-bound3"></div>
                            <div className="address-container view-ptl bg-blue col-white">
                                <div className={"map-container"}>
                                    <img className="auto-matching map-img" src={require('../assets/img/view-map.svg')} alt="" />
                                </div>

                                <div className="">{this.state.accountInfo.city} {this.state.accountInfo.state_province}</div>
                                <div className="general-flex view-icon1-pt">
                                    <img src={require('../assets/img/view-icon-2.svg')} alt="" />
                                    <div className="view-icon-desc">+ {this.state.accountInfo.phone}</div>
                                </div>

                                <div className="general-flex view-icon1-pt">
                                    <img src={require('../assets/img/view-icon-3.svg')} alt="" />
                                    <div className="view-icon-desc">{this.state.accountInfo.email}</div>
                                </div>
                            </div>

                            <div className="bg-bound3"></div>
                            <div className="view-ptl bg-grey">
                                <div className="txt-26">Licensure Info</div>
                                <hr />

                                <div className="txt-16 align-l view-desc-pt">
                                    {this.state.accountInfo.license_info}
                                </div>
                            </div>

                            <div className="bg-bound3"></div>
                            <div className="view-ptl bg-blue col-white">
                                <div className="txt-26">Areas of expertise</div>
                                <hr />
                                {
                                    this.state.accountInfo.expertise && this.state.accountInfo.expertise.map((item, key) => {
                                        return (
                                            <div className="general-flex view-icon1-pt" key={key}>
                                                <img src={require('../assets/img/view-icon-1.svg')} alt="" />
                                                <div className="view-icon-desc txt-20 align-l">{this.state.filterList[item]}</div>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            <div className="bg-bound3"></div>
                            <div className="view-ptl bg-grey">
                                <div className="txt-26">Cost of Service</div>
                                <hr />

                                <div className="view-icon1-pt">
                                    <div className="txt-20 align-l">
                                        {this.state.accountInfo.cost}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="login-for justify-center">
                    <div className="whole-body-mW justify-rl">
                        <div className="btn-txt">
                            <div className="txt-26 justify-center">Existing Client? Please login.</div>
                            <a href={this.state.path}>
                                <div className="btn-common btn-request-b btn-view-login txt-14 mouse-cursor">LOGIN</div>
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
        getAccount: state.registers.getAccount,
        msg_res: state.registers.msg_res,
    }
};

export default connect(
    mapStateToProps,
    { getProviderByIdRole, requestRegister }
)(ViewProvider);