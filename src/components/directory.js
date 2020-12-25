import React, {Component} from 'react';
import {Link} from "react-router-dom";

import Header from "./header";
import '../assets/css/directory.css';
import {DEPARTMENTS, SPECIAL_CATEGORIES, FILTER_LIST} from "../config/therapist-config";

import {
    getListCategory,
} from "../redux/actions/register/articles"
import {connect} from "react-redux";
import CountriesList from "./country-list";

class Directory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            category_id: '',
            category: '',
            list: '',
            country: '',
            looking_value: '',
            filterByImg: '',
        };
        this.categoryChange = this.categoryChange.bind(this);
    }

    componentDidMount() {
        const {
            getListCategory
        } = this.props;

        if(getListCategory) {
            getListCategory();
        }
        window.scrollTo(0, 0);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.categoryList && prevProps.categoryList !== this.props.categoryList) {
            this.setState({
                list: this.props.categoryList[0].cate,
            })
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value || '',
        })
    };

    categoryChange = (e) => {
        this.setState({
            category_id: e.target.value,
        });
    };

    handleCountryChange = (e) => {
        this.setState({
            country: e.target.value,
        });
    };

    onSearchByCategory = (e) => {
        console.log(e);
        this.setState({
            filterByImg: e,
        });

        let s;
        Object.keys(FILTER_LIST).map((item, key) => {
            if(FILTER_LIST[item] === e) {
                s = item;
            }
            return null;
        });

        localStorage.removeItem('data');
        localStorage.setItem('category', s);
        this.props.history.push('/directory-search/');
    };
    onSearchByInput = () => {
        const data = {
            looking_value: this.state.looking_value? this.state.looking_value: '',
            country: this.state.country? this.state.country: '',
            category: this.state.category_id? {id: this.state.category_id, name: SPECIAL_CATEGORIES[this.state.category_id]}: '',
        };

        localStorage.removeItem('category');
        localStorage.setItem('data', JSON.stringify(data));
        this.props.history.push('/directory-search');
    };
    onEnter = (code) => {
        if (code.keyCode === 13) {
            this.onSearchByInput();
        }
    };
    render() {
        const imgLinkSecond = [
            {picture: 'search-img30-1.svg', title: 'Addiction Specialist'},
            {picture: 'search-img30-2.svg', title: 'Art Therapist'},
            {picture: 'search-img31-1.svg', title: 'Board Certified Pastoral Counselor'},
            {picture: 'search-img31-2.svg', title: 'Certified Clinical Anxiety Treatment Professional'},
            {picture: 'search-img31-3.svg', title: 'Certified Sex Therapist'},
            {picture: 'search-img32-1.svg', title: 'Certified Trauma Specialist'},
            {picture: 'search-img32-2.svg', title: 'Clinical Hypnotherapist'},
            {picture: 'search-img32-3.svg', title: 'Coach'},
            {picture: 'search-img33-1.svg', title: 'Consultant'},
            {picture: 'search-img33-2.svg', title: 'Counselor'},
            {picture: 'search-img33-3.svg', title: 'Dietitian'},
            {picture: 'search-img34-1.svg', title: 'Distance Credentialed Counselor'},
            {picture: 'search-img34-2.svg', title: 'Marriage & Family Therapist'},
            {picture: 'search-img34-3.svg', title: 'Maternal Mental Health Specialist'},
            {picture: 'search-img35-1.svg', title: 'Mental Health Specialist'},
            {picture: 'search-img35-2.svg', title: 'Mental Health Therapist'},
            {picture: 'search-img35-3.svg', title: 'Nurse Practitioner'},
            {picture: 'search-img36-1.svg', title: 'Occupational Therapist'},
            {picture: 'search-img36-2.svg', title: 'Physical Therapist'},
            {picture: 'search-img36-3.svg', title: 'Play Therapist'}
        ];

        return (
            <div>
                <div className="directory-header-bg">
                    <Header/>

                    <div className="directory-header-position">
                        <div className="txt-32">Connect with a Provider Today</div>
                        <div className="txt-18 connect-today-pb">All providers use the thera-LINK platform for secure
                            online sessions.
                        </div>

                        <div className="align-l directory">
                            <select className="text-nowrap looking-for directory" onChange={this.categoryChange}>
                                <option style={{color: '#ccc'}}>Choose a category ...</option>
                                {
                                    Object.keys(SPECIAL_CATEGORIES).map((item, key) => (
                                        <option key={key} className="" value={item}>{SPECIAL_CATEGORIES[item]}</option>
                                    ))
                                }

                            </select>

                            <select defaultValue={"Alabama"} className="looking-for directory" onChange={this.handleCountryChange}>
                                <CountriesList/>
                            </select>

                            <div className="justify-rl txt-12">
                                <div>
                                    <input
                                        id="looking_value"
                                        className="looking-for"
                                        type="text"
                                        value={this.state.looking_value}
                                        placeholder="What are you looking for?"
                                        onChange={this.onChange}
                                        onKeyUp={event => this.onEnter(event)}
                                        autoFocus
                                    />
                                    <div
                                        className="btn-search-h mouse-cursor justify-center txt-16"
                                        onClick={this.onSearchByInput}
                                    >Search</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-specialty">
                    <div className="whole-body-mW">
                        <div className="txt-30 align-c search-specialty">Search by Specialty</div>
                        <div className="lineGreen"></div>
                        <div className="txt-18 seeking-needs">
                            Seeking help for a specific reason? Click to locate an Online Provider that fits your needs!
                        </div>
                    </div>
                </div>

                <div className="whole-body-mW full-width">
                    <div className="flex-grid4 search-grid3-gaps" style={{gridColumnGap: 0, backgroundColor: '#333'}}>
                        {
                            Object.keys(DEPARTMENTS).map((item, key) => {
                                return (
                                    <div className="acute-chronic" key={key}
                                          style={{backgroundImage: `url(/images/${DEPARTMENTS[item].picture})`}}
                                          onClick={() => this.onSearchByCategory(DEPARTMENTS[item].title)}
                                    >
                                        <div className="search-img-txt txt-18">{DEPARTMENTS[item].title}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                {/*  Search by Provider Type */}
                <div className="bg-specialty">
                    <div className="whole-body-mW full-width">
                        <div className="txt-30 align-c search-specialty">Search by Provider Type</div>
                        <div className="lineGreen"></div>
                        <div className="txt-18 seeking-needs">
                            Seeking a specific provider? Click to find your match now!
                        </div>
                    </div>
                </div>

                <div className="whole-body-mW full-width img-top-p">
                    <div className="flex-grid4 search-grid3-gaps" style={{gridColumnGap: 0}}>
                        {
                            imgLinkSecond && imgLinkSecond.map((item, key) => {
                                return (
                                    <Link to='/directory-search' className="acute-chronic mouse-cursor" key={key}
                                          style={{backgroundImage: `url(/images/${item.picture})`}}>
                                        <div className="search-img-txt txt-18">{item.title}</div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="sign-up-for justify-center">
                    <div className="whole-body-mW justify-rl">
                        <div className="btn-txt">
                            <div className="txt-26 justify-center">PLease look for your therapy service provider.</div>
                            <div className="btn-common btn-request-b txt-14 mouse-cursor">FIND A PROVIDER</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        categoryList: state.registers.categoryList,
    }
};

export default connect(
    mapStateToProps,
    {
        getListCategory,
    }
)(Directory);