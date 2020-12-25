import React, {Component} from 'react';
import Header from "./header";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {
    getProvidersList
} from "../redux/actions/register/client-register";

import urlOrigin from "../assets/img/landing/1.jpg"
import '../assets/css/directory.css';
import {
    FILTER_LIST,
    SPECIAL_CATEGORIES,
} from "../config/therapist-config";
import iconCarrotDown from '../assets/img/down-icon.svg';
import iconCarrotUp from '../assets/img/drop-up-filter.svg';
import {
    getListCategory,
} from "../redux/actions/register/articles"
import { Multiselect } from 'multiselect-react-dropdown';

import CountriesList from "./country-list";
import StateProvince from "./state-province";

class DirectorySearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            category_id: '',
            category: '',
            list: '',

            menuVisible: true,
            arrayProviders: '',

            country: 'US',
            state_province: 'Alabama',
            looking_value: '',
            gender: 'Gender',
            price: '',
            age: '',
            sort: '',
            checked: [],
            selectedSpecial: [],

            reset_flag: false,

            options: [],
            page_num: '',
            current_page: 1,
            page_neighbours: 4,
            pagination: 12,

            priceOne: false,
            priceTwo: false,
            priceThree: false,
            priceAll: true,
            flag: false,

            ageOne: false,
            ageTwo: false,
            ageThree: false,
            ageFour: false,
            ageFive: false,
            ageSix: false,
        };

        this.categoryChange = this.categoryChange.bind(this);
        this.initialFilter = this.initialFilter.bind(this);
    }

    componentDidMount() {
        const {
            getListCategory,
        } = this.props;

        if(getListCategory) {
            getListCategory();
        }

        let arrayIds = [];
        let sData = {name: 'None', id: 0};
        arrayIds.push(sData);

        this.setState({
            country: 'US',
            state_province: 'Alabama',
            reset_flag: true,
        });

        Object.keys(SPECIAL_CATEGORIES).sort().map((item, key) => {
            sData = {id: item, name: SPECIAL_CATEGORIES[item]};
            arrayIds.push(sData);
            return null;
        });

        this.setState({
            options: arrayIds,
        });

        this.onFilter(this.state.current_page, this.state.sort);
        window.scrollTo(0, 0);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.providerAddressList !== this.props.providerAddressList) {
            this.setState({
                arrayProviders: this.props.providerAddressList.list,
                page_num: this.props.providerAddressList.page_num,
            })
        }

        if(this.props.categoryList && prevProps.categoryList !== this.props.categoryList) {
            this.setState({
                list: this.props.categoryList[0].cate,
            })
        }

        if ((this.state.country !== 'US') && (prevState.country !== this.state.country)) {
            this.setState({
                state_province: '',
            });
        }

        if (this.state.flag !== prevState.flag) {
            if(this.state.priceOne === false && this.state.priceTwo === false && this.state.priceThree === false && this.state.priceAll === false) {
                this.setState({
                    priceAll: true,
                })
            }
        }
    }

    handleProvinceChange = (e) => {
        this.setState({
            state_province: e.target.value,
            flag_focus: true,
        });
    };

    initialFilter = () => {
        this.setState({
            category_id: '',
            category: '',
            list: '',

            menuVisible: true,
            arrayProviders: '',

            country: 'US',
            state_province: 'Alabama',
            looking_value: '',
            gender: 'Gender',
            price: '',
            age: '',
            sort: '',
            reset_flag: false,
            checked: [],
            selectedSpecial: [],
            moreBtnVisible: true,

            priceOne: false,
            priceTwo: false,
            priceThree: false,
            priceAll: true,
            flag: false,

            ageOne: false,
            ageTwo: false,
            ageThree: false,
            ageFour: false,
            ageFive: false,
            ageSix: false,
        });

        this.onFilter(1, '');
        const {
            getProvidersList,
        } = this.props;
        this.onReplaceContentAsID();
        const temp = {
            looking_value: '',
            country: 'US',
            state_province: 'Alabama',
            special_category: this.state.selectedSpecial,
            expertise_category: this.state.checked,

            gender: 'Gender',
            price: '',
            age: '',
            sort: '',

            current_page: 1,
            page_neighbours: this.state.page_neighbours,
            pagination: this.state.pagination,
        };

        if (getProvidersList) {
            getProvidersList(temp);
        }


    };

    onEnter = (code) => {
        if (code.keyCode === 13) {
            this.onFilter(this.state.current_page, this.state.sort);
        }
    };

    categoryChange = (e) => {
        this.setState({
            category_id: e.target.value,
        });
    };

    onChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value || '',
        })
    };

    onCheck = (e) => {
        const {checked} = this.state;
        const temp = JSON.parse(JSON.stringify(checked));
        if(e.target.checked === true){
            temp.push(e.target.id);
        }
        else{
            temp.splice(temp.indexOf(e.target.id), 1);
        }
        this.setState({checked: temp});
    };

    onCheckFilter = (e) => {
        this.setState({
            flag: !this.state.flag,
        });
        if((e.target.id === "priceOne" || e.target.id === "priceTwo" || e.target.id === "priceThree") && e.target.checked === true) {
            this.setState({
                priceAll: false,
            });
        }
        if(e.target.id === "priceAll" && e.target.checked === true) {
            this.setState({
                priceOne: false,
                priceTwo: false,
                priceThree: false,
            });
        }
        this.setState({
            [e.target.id]: e.target.checked,
        })
    };

    onCheckAge = (e) => {
        this.setState({
            [e.target.id]: e.target.checked,
        })
    };
    toggleMenu = () => {
        this.setState({
            menuVisible: !this.state.menuVisible,
        })
    };

    handleCountryChange = (e) => {
        this.setState({
            country: e.target.value,
        });
    };

    onPageClick = (item) => {
        this.setState({
            current_page: item,
        });

        this.onFilter(item, this.state.sort);

        window.scrollTo(0, 0);
    };

    searchUpdate = () => {
       this.onFilter(this.state.current_page, this.state.sort);
    };

    onReplaceContentAsID = () => {
        let temp = this.state.looking_value;
        Object.keys(FILTER_LIST).map((item, key) => {
            if(temp.includes(FILTER_LIST[item]) === true) {
                temp = temp.replace(FILTER_LIST[item], item);
            }
            return null;
        });

        Object.keys(SPECIAL_CATEGORIES).map((item, key) => {
            if(temp.includes(SPECIAL_CATEGORIES[item]) === true) {
                temp = temp.replace(SPECIAL_CATEGORIES[item], item);
            }
            return null;
        });

        return temp;
    };

    onFilter = (currentPage, sort) => {
        let priceArray = [];
        let ageArray = [];
        if(this.state.priceAll === true) {
            priceArray.push(0);
        }
        if(this.state.priceOne === true) {
            priceArray.push(1);
        }
        if(this.state.priceTwo === true) {
            priceArray.push(2);
        }
        if(this.state.priceThree === true) {
            priceArray.push(3);
        }

        if(this.state.ageOne === true) {
            ageArray.push(1);
        }
        if(this.state.ageTwo === true) {
            ageArray.push(2);
        }
        if(this.state.ageThree === true) {
            ageArray.push(3);
        }
        if(this.state.ageFour === true) {
            ageArray.push(4);
        }
        if(this.state.ageFive === true) {
            ageArray.push(5);
        }
        if(this.state.ageSix === true) {
            ageArray.push(6);
        }
        if(ageArray.length === 0) {
            ageArray.push(0);
        }

        const {
            getProvidersList,
        } = this.props;
        this.onReplaceContentAsID();
        const temp = {
            looking_value: this.onReplaceContentAsID(),
            country: this.state.country,
            state_province: this.state.state_province,
            special_category: this.state.selectedSpecial,
            expertise_category: this.state.checked,

            gender: this.state.gender,
            price: priceArray,
            age: ageArray,
            sort: sort,

            current_page: currentPage,
            page_neighbours: this.state.page_neighbours,
            pagination: this.state.pagination,
        };

        if (getProvidersList) {
            getProvidersList(temp);
        }
        console.log(temp);
    };

    onSelect = (selectedList, selectedItem) => {
        console.log(selectedList);
        this.setState({
            selectedSpecial: selectedList,
        });

        for (let k = 0; k < selectedList.length; k ++) {
            if(selectedList[k].name === "None") {
                selectedList.splice (selectedList.indexOf({name: "None", id: 0}), 1);
                //selectedList.splice(0, selectedList.length);
            }
        }
    };

    onRemove = (selectedList, removedItem) => {
        this.setState({
            selectedSpecial: selectedList,
        });
    };

    onGender = (e) => {
        this.setState({
            gender: e.target.value,
        });
    };

    onSort = (e) => {
        if(e.target.value !== "none") {
            this.setState({
                sort: e.target.value,
            });
            this.onFilter(this.state.current_page, e.target.value);
        }
    };
    render() {
        const pageArray = [];
        if(this.state.page_num) {
            for (let k = this.state.page_num.start_page; k <= this.state.page_num.end_page; k ++) {
                pageArray.push(k);
            }
        }

        return (
            <div>
                <div className={"spinning-curtain"} style={{display: this.props.spinning ? "flex" : "none"}}>
                    <div className="lds-dual-ring"/>
                </div>

                <div className=" directory-header-bg justify-center">
                    <Header/>

                    <div className="directory-header-position col-directory-txt">
                        <div className="txt-32">Connect with a Provider Today</div>
                        <div className="txt-18 connect-today-pb">All providers use the thera-LINK platform for secure
                            online sessions.
                        </div>
                    </div>
                </div>
                <div className="whole-body-mW directory-header-pt">
                    <div className="flex-space">
                        <div className="category">
                            <Multiselect
                                options={this.state.options && this.state.options} // Options to display in the dropdown
                                selectedValues={this.state.selectedSpecial} // Preselected value to persist in dropdown
                                onSelect={this.onSelect} // Function will trigger on select event
                                onRemove={this.onRemove} // Function will trigger on remove event
                                displayValue="name" // Property name to display in the dropdown options
                                placeholder="Choose a category ..."
                                className="pt-20 multi-select"
                                style={{color: '#000 !important'}}
                            />

                            <div className="flex-grid4 gender">
                                <input
                                    id="looking_value"
                                    className="looking-for filter"
                                    type="text"
                                    value={this.state.looking_value}
                                    placeholder="City"
                                    onKeyUp={event => this.onEnter(event)}
                                    onChange={this.onChange}
                                    autoFocus
                                />
                                {/*<input*/}
                                {/*    id="price"*/}
                                {/*    className="looking-for filter"*/}
                                {/*    type="text"*/}
                                {/*    value={this.state.price}*/}
                                {/*    placeholder="Price"*/}
                                {/*    onKeyUp={event => this.onEnter(event)}*/}
                                {/*    onChange={this.onChange}*/}
                                {/*/>*/}

                                <div className="btn-filter mouse-cursor dropdown price-drop">
                                    <div className="flex-filter">
                                        <div className="col-txt-title">Price</div>
                                        <img className="drop-icon" src={require("../assets/img/drop-down-black.svg")} alt="drop down" />
                                    </div>
                                    <div className="dropdown-filter col-txt-title">
                                        <div className="filter-item">
                                            <label className="container-event align-l">
                                                <div className="txt-14 text-filter"> $ (Less than $90)</div>
                                                <input
                                                    id="priceOne"
                                                    type="checkbox"
                                                    checked={this.state.priceOne}
                                                    onChange={(e) => this.onCheckFilter(e)}
                                                />
                                                <span className="checkMark"/>
                                            </label>
                                        </div>
                                        <div className="filter-item">
                                            <label className="container-event align-l">
                                                <div className="txt-14 text-filter"> $$ ($90 - $130)</div>
                                                <input
                                                    id="priceTwo"
                                                    type="checkbox"
                                                    checked={this.state.priceTwo}
                                                    onChange={(e) => this.onCheckFilter(e)}
                                                />
                                                <span className="checkMark"/>
                                            </label>
                                        </div>
                                        <div className="filter-item">
                                            <label className="container-event align-l">
                                                <div className="txt-14 text-filter"> $$$ (More than $130)</div>
                                                <input
                                                    id="priceThree"
                                                    type="checkbox"
                                                    checked={this.state.priceThree}
                                                    onChange={(e) => this.onCheckFilter(e)}
                                                />
                                                <span className="checkMark"/>
                                            </label>
                                        </div>
                                        <hr/>
                                        <div className="filter-item">
                                            <label className="container-event align-l">
                                                <div className="txt-14 text-filter">Sliding Scale</div>
                                                <input
                                                    id="priceAll"
                                                    type="checkbox"
                                                    checked={this.state.priceAll}
                                                    onChange={(e) => this.onCheckFilter(e)}
                                                />
                                                <span className="checkMark"/>
                                            </label>
                                        </div>

                                    </div>
                                </div>
                                {/*<input*/}
                                {/*    id="age"*/}
                                {/*    className="looking-for filter"*/}
                                {/*    type="number"*/}
                                {/*    value={this.state.age}*/}
                                {/*    placeholder="Age"*/}
                                {/*    min={0}*/}
                                {/*    max={120}*/}
                                {/*    onKeyUp={event => this.onEnter(event)}*/}
                                {/*    onChange={this.onChange}*/}
                                {/*/>*/}
                                <div className="btn-filter mouse-cursor dropdown price-drop">
                                    <div className="flex-filter">
                                        <div className="col-txt-title">Age</div>
                                        <img className="drop-icon" src={require("../assets/img/drop-down-black.svg")} alt="drop down" />
                                    </div>
                                    <div className="dropdown-filter col-txt-title">
                                        <div className="filter-item">
                                            <label className="container-event align-l">
                                                <div className="txt-14 text-filter"> Toddlers / Preschoolers(0 to 6)</div>
                                                <input
                                                    id="ageOne"
                                                    type="checkbox"
                                                    checked={this.state.ageOne}
                                                    onChange={(e) => this.onCheckAge(e)}
                                                />
                                                <span className="checkMark"/>
                                            </label>
                                        </div>
                                        <div className="filter-item">
                                            <label className="container-event align-l">
                                                <div className="txt-14 text-filter"> Children (7 to 10)</div>
                                                <input
                                                    id="ageTwo"
                                                    type="checkbox"
                                                    checked={this.state.ageTwo}
                                                    onChange={(e) => this.onCheckAge(e)}
                                                />
                                                <span className="checkMark"/>
                                            </label>
                                        </div>

                                        <div className="filter-item">
                                            <label className="container-event align-l">
                                                <div className="txt-14 text-filter"> Preteens / Tweens (11 to 13)</div>
                                                <input
                                                    id="ageThree"
                                                    type="checkbox"
                                                    checked={this.state.ageThree}
                                                    onChange={(e) => this.onCheckAge(e)}
                                                />
                                                <span className="checkMark"/>
                                            </label>
                                        </div>
                                        <div className="filter-item">
                                            <label className="container-event align-l">
                                                <div className="txt-14 text-filter"> Adolescents / Teenagers (14 to 19)</div>
                                                <input
                                                    id="ageFour"
                                                    type="checkbox"
                                                    checked={this.state.ageFour}
                                                    onChange={(e) => this.onCheckAge(e)}
                                                />
                                                <span className="checkMark"/>
                                            </label>
                                        </div>
                                        <div className="filter-item">
                                            <label className="container-event align-l">
                                                <div className="txt-14 text-filter"> Adults</div>
                                                <input
                                                    id="ageFive"
                                                    type="checkbox"
                                                    checked={this.state.ageFive}
                                                    onChange={(e) => this.onCheckAge(e)}
                                                />
                                                <span className="checkMark"/>
                                            </label>
                                        </div>

                                        <div className="filter-item">
                                            <label className="container-event align-l">
                                                <div className="txt-14 text-filter"> Elders (+65)</div>
                                                <input
                                                    id="ageSix"
                                                    type="checkbox"
                                                    checked={this.state.ageSix}
                                                    onChange={(e) => this.onCheckAge(e)}
                                                />
                                                <span className="checkMark"/>
                                            </label>
                                        </div>

                                    </div>
                                </div>


                                <select
                                    className="looking-for gender col-black"
                                    value={this.state.gender && this.state.gender}
                                    onChange={this.onGender}
                                >
                                    <option value="Gender" style={{backgroundColor: '#eee', color: '#ccc'}} selected={this.state.gender && this.state.gender === "Gender" && true}>Gender</option>
                                    <option value="Male" selected={this.state.gender && this.state.gender === "Male" && true}>Male</option>
                                    <option value="Female" selected={this.state.gender && this.state.gender === "Female" && true}>Female</option>
                                </select>
                            </div>

                            <div className="flex-grid3 flex-select-space filter pt-20">
                                <select className="looking-for filter text-nowrap" value={this.state.country} onChange={this.handleCountryChange}>
                                    <CountriesList/>
                                </select>
                                {
                                    this.state.country === "US" ?
                                        <select className="looking-for filter text-nowrap" value={this.state.state_province} onChange={this.handleProvinceChange}>
                                            <StateProvince/>
                                        </select>
                                        :
                                        <input
                                            id={'state_province'}
                                            type="text"
                                            className="looking-for"
                                            placeholder={this.state.state_province ? this.state.state_province : 'State / Province / Region'}
                                            value={this.state.state_province}
                                            onChange={this.onChange}
                                            required
                                        />
                                }
                                <div
                                    className="btn-bttonAndLink update-btn-pt filter mouse-cursor"
                                    onClick={this.searchUpdate}
                                >
                                    Search
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="general-flex filter-label mouse-cursor" onClick={this.toggleMenu}>
                        <div className="txt-16 col-paragraphBg">Filter by expertise</div>
                        <img className="down-up-pl" src={this.state.menuVisible ? iconCarrotUp : iconCarrotDown} alt=""/>
                    </div>

                    {
                        this.state.menuVisible && (
                            <div className="content">
                                <div className="flex-grid4" style={{gridColumnGap: 20}}>
                                    {
                                        Object.keys(FILTER_LIST).sort().map((item, key) => {
                                            return (
                                                <label className="container-event align-l" key={`filter-${key}`}>
                                                    <div className="txt-14 text-nowrap">{FILTER_LIST[item]}</div>

                                                        <input
                                                            id={item}
                                                            type="checkbox"
                                                            checked={this.state.checked.includes(item)}
                                                            onChange={this.onCheck}
                                                        />
                                                    <span className="checkMark"/>
                                                </label>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    }

                    <div className="justify-rl">
                        <div className="justify-center flex-select-space">
                            <div className="txt-16 col-paragraphBg filter-init mouse-cursor" onClick={this.initialFilter}>&times; Reset</div>
                            <select
                                className="looking-for sort-by-width"
                                defaultValue={this.state.sort && this.state.sort}
                                onChange={(e) => this.onSort(e)}
                            >
                                <option value={"none"} style={{backgroundColor: '#eee', color: '#ccc'}} selected={this.state.reset_flag === false && true}>Sort by</option>
                                <option value="newest_first">Newest First</option>
                                <option value="oldest_first">Oldest First</option>
                                <option value="random">Random</option>
                                <option value="highest_rating">Highest Rating</option>
                                <option value="lowest_rating">Lowest Rating</option>
                                <option value="most_views">Most Views</option>
                            </select>
                        </div>
                    </div>

                    <div className="txt-14 col-darkBlue align-l pb-20">{this.state.arrayProviders.length} providers found
                    </div>

                    <div className="flex-grid3 directory-grid-gaps">
                        {
                            this.state.arrayProviders && this.state.arrayProviders.map((item, key) => {
                                const path = '/view-provider/' + item._id;
                                let urlLink = '';
                                let city = '';
                                let province = '';
                                let phone = '';
                                let address = '';

                                if (item.bgPhoto && (item.bgPhoto !== '')) {
                                    urlLink = item.bgPhoto;
                                }

                                if (item.city && (item.city !== '')) {
                                    city = item.city;
                                }

                                if (item.state_province && (item.state_province !== '')) {
                                    province = item.state_province;
                                }

                                if (item.phone && (item.phone !== '')) {
                                    phone = '+' + item.phone;
                                }

                                if (city || province) {
                                    if (city) {
                                        if (province) {
                                            address = city + ', ' + province;
                                        } else {
                                            address = city;
                                        }
                                    } else {
                                        address = province;
                                    }
                                } else {
                                    address = '';
                                }

                                return item.name ? (
                                    <div className={"provider-thumbnail"} key={key}>
                                        <Link to={path}>
                                            {/*<img className="auto-matching" src={urlLink !== ''? urlLink: urlOrigin} alt="" />*/}
                                            <div
                                                className="auto-matching-view"
                                                style={{backgroundImage: urlLink ? 'url(' + urlLink + ')' : 'linear-gradient(0, #0002, #0002), url(' + urlOrigin + ')'}}
                                            />

                                        </Link>

                                        <div className="michael-pl align-l">
                                            <div className="txt-24 col-darkBlue">{item.name}</div>

                                            <div className="txt-16 col-txt-title new-york-ptb">{address}</div>

                                            <div className="general-flex txt-16 col-buttonAndLink">
                                                {
                                                    phone && (
                                                        <img className="ring-pr"
                                                             src={require('../assets/img/ring-icon.svg')} alt=""/>
                                                    )
                                                }
                                                <div>{phone}</div>
                                            </div>
                                        </div>
                                    </div>
                                ) : null;
                            })
                        }
                    </div>

                    <div className="help-center-align">
                        <div className="product-btn justify-center" onClick={() => this.onPageClick(1)}>
                            <svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.60496 14.6383C9.42024 14.6383 9.23359 14.5779 9.07773 14.457L0.923018 8.02084C0.724826 7.86414 0.609375 7.62814 0.609375 7.37704C0.609375 7.12782 0.724826 6.88993 0.923018 6.73512L9.0431 0.332906C9.40485 0.047818 9.934 0.104458 10.2246 0.459402C10.5151 0.814346 10.4574 1.33355 10.0956 1.61863L2.79141 7.37704L10.1322 13.1713C10.4939 13.4564 10.5517 13.9756 10.2611 14.3305C10.0937 14.5326 9.85126 14.6383 9.60496 14.6383Z" fill="black" fillOpacity="0.65"/>
                            </svg>
                        </div>

                        {
                            this.state.page_num && pageArray && pageArray.map((item, key) => {
                                return (
                                    <div
                                        className={this.state.current_page && this.state.current_page === item? "product-btn justify-center btn-search": "product-btn justify-center col-darkBlue"}
                                        key={key}
                                        onClick={() => this.onPageClick(item)}
                                    >
                                        {item}
                                    </div>
                                )
                            })
                        }

                        <div className="product-btn justify-center" onClick={() => this.onPageClick(this.state.page_num.total_page)}>
                            <svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.39506 14.6383C1.57978 14.6383 1.76643 14.5779 1.92229 14.457L10.077 8.02084C10.2752 7.86414 10.3906 7.62814 10.3906 7.37704C10.3906 7.12782 10.2752 6.88993 10.077 6.73512L1.95692 0.332906C1.59518 0.047818 1.06603 0.104458 0.775474 0.459402C0.484922 0.814346 0.542647 1.33355 0.904394 1.61863L8.2086 7.37704L0.867834 13.1713C0.506087 13.4564 0.448362 13.9756 0.738914 14.3305C0.906319 14.5326 1.14877 14.6383 1.39506 14.6383Z" fill="black" fillOpacity="0.65"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        providerAddressList: state.registers.providerAddressList,
        categoryList: state.registers.categoryList,
        spinning: state.registers.spinning,
    }
};

export default connect(
    mapStateToProps,
    {
        getProvidersList,
        getListCategory,
    }
)(DirectorySearch);
