import React, {Component} from 'react';
import Header from "./header";
import '../assets/css/blog.css';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {
    getPageArticles,
    getListCategory,
} from "../redux/actions/register/articles";

import bgImage from "../assets/img/blog-img-2.svg";
class Blog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            category_id: this.props.match.params.slug ? this.props.match.params.slug.slice(0, 1) : '0',
            category: '',
            categoriesList: '',
            list: '',
            selectedKey: '',

            page_num: '',
            current_page: 1,
            page_neighbours: 4,
            pagination: 12,
        };
        this.categoryChange = this.categoryChange.bind(this);
    }

    componentDidMount() {
        const {
            getListCategory,
            getPageArticles,
        } = this.props;

        if(getListCategory) {
            getListCategory();
        }

        const data = {
            category_id: this.state.category_id,
            sLen: 50,
            current_page: this.state.current_page,
            page_neighbours: this.state.page_neighbours,
            pagination: this.state.pagination,
        };

        if(getPageArticles) {
            getPageArticles(data);
        }
        window.scrollTo(0, 0);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.category_id !== this.state.category_id) {
            if(this.state.category_id === '0') {
                window.location.href = "/blog";
            } else {
                window.location.href = "/blog/" + this.state.category_id + "-" + this.state.categoriesList[this.state.category_id].toLowerCase();
            }
        }

        if(this.props.articlesList && prevProps.articlesList !== this.props.articlesList) {
            this.setState({
                list: this.props.articlesList.list,
                page_num: this.props.articlesList.page_num,
            })
        }

        if(this.props.categoryList && prevProps.categoryList !== this.props.categoryList) {
            this.setState({
                categoriesList: this.props.categoryList[0].cate,
            })
        }
    }

    categoryChange = (e) => {
        this.setState({
            category_id: e.target.value,
        });
    };

    onPageClick = (item) => {
        this.setState({
            current_page: item,
        });

        const {
            getPageArticles
        } = this.props;

        const data = {
            category_id: this.state.category_id,
            sLen: 50,
            current_page: item,
            page_neighbours: this.state.page_neighbours,
            pagination: this.state.pagination,
        };

        if(getPageArticles) {
            getPageArticles(data)
        }
        window.scrollTo(0, 0);
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
                <div className="blog-cover-bg">
                    <Header />

                    <div className="whole-body-mW">
                        <div className="select-topic">
                            <select className="country-option" onChange={this.categoryChange}>
                                <option value={'0'} style={{color: '#999'}}>All articles</option>
                                {
                                    this.state.categoriesList && Object.keys(this.state.categoriesList).map((item, key) => (
                                        item === this.state.category_id ?
                                            <option key={key} value={item} selected>{this.state.categoriesList[item]}</option>
                                            :
                                            <option key={key} value={item}>{this.state.categoriesList[item]}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                </div>

                <div className="blog-header-body whole-body-mW">
                    <div className="pb-20 col-heavyDark txt-16 txt-bold align-l">
                        {
                            this.state.list && this.state.list.length + " articles found"
                        }
                    </div>

                    <div className="blog-flex-gaps flex-grid3">

                        {
                            this.state.list && this.state.list.map((item, key) => {
                                return (
                                    <div className="blog-grid-mt txt-16" key={key}>
                                        <Link to={item._id && '/blog-article/' + item._id}>
                                            <div
                                                className="blog-img-size mouse-cursor"
                                                style={{backgroundImage: item.src ? 'url(' + item.src + ')' : 'url(' + bgImage + ')'}}
                                            />
                                        </Link>
                                        <div className="align-l txt-break">
                                            <div className="blog-grid-p1 col-blue">{this.state.categoriesList[item.category_id]}</div>
                                            <Link to={item._id && '/blog-article/' + item._id} >
                                                <div className="txt-22 col-txt-title title-height"> {item.title}</div>
                                            </Link>
                                            <div className="blog-grid-p2 col-desc">
                                                {item.content}
                                            </div>
                                            <div className="col-blue">{item['users'][0]['name']} - <span className="col-lightColor">{item.writtenDate}</span> </div>

                                            <div className="justify-icon" style={{paddingTop: 20, paddingRight: 20}}>
                                                <div className="col-heavyDark txt-bold justify-center" style={{color: "#0004"}}>
                                                    <img className="comment-icon" style={{paddingRight: 10}} src={require('../assets/img/comment.svg')} alt="" />
                                                    {item.nComment ? item.nComment : 0}
                                                </div>

                                                <div className="justify-center txt-bold details-view" style={{color: "#0004"}}>
                                                    <img style={{paddingRight: 10}} src={require('../assets/img/likes.svg')} alt="" />
                                                    {item.likes ? item.likes : 0}
                                                </div>
                                            </div>
                                            <Link to={item._id && '/blog-article/' + item._id} className="btn-continue txt-14 col-buttonAndLink justify-center">CONTINUE READING</Link>
                                        </div>
                                    </div>
                                )
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
        articlesList: state.registers.articlesList,
        categoryList: state.registers.categoryList,
    }
};

export default connect(
    mapStateToProps,
    {
        getPageArticles,
        getListCategory,
    }
)(Blog);