import React, {Component} from 'react';
import Header from "./header";
import '../assets/css/helpCenter.css';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {
    findSearchFilter,
} from "../redux/actions/register/help";

class HelpSearchResults extends Component{
    constructor(props) {
        super(props);

        this.state = {
            filter_name: '',
            searchResults: '',
            slugStr: '',

            page_num: '',
            current_page: 1,
            page_neighbours: 4,
            pagination: 9,
        }
    }

    componentDidMount() {
        const {
            findSearchFilter,
        } = this.props;

        const data = {
            key: this.props.match.params.slug,
            current_page: this.state.current_page,
            page_neighbours: this.state.page_neighbours,
            pagination: this.state.pagination,
        };

        if(findSearchFilter) {
            findSearchFilter(data);
        }

        let str = this.props.match.params.slug;
        if(str.length > 90) {
            str = str.slice(0, 89) + '...';
        }
        this.setState({
            slugStr: str,
        });

        window.scrollTo(0, 0);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
         if(this.props.articleBySearch && this.props.articleBySearch !== prevProps.articleBySearch) {
            this.setState({
                searchResults: this.props.articleBySearch.list,
                page_num: this.props.articleBySearch.page_num,
            });
             window.scrollTo(0, 0);
         }
    }

    onChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value || ''
        })
    };

    findHelp = () => {
        if(this.state.filter_name)
            window.location.href = "/help-search-results/" + this.state.filter_name.toLowerCase();
    };

    navigatePage = (code) => {
        if (code.keyCode === 13) {
            this.findHelp();
        }
    };

    onPageClick = (item) => {
        this.setState({
            current_page: item,
        });

        const {
            findSearchFilter
        } = this.props;

        const data = {
            key: this.props.match.params.slug,
            current_page: item,
            page_neighbours: this.state.page_neighbours,
            pagination: this.state.pagination,
        };

        console.log(data);

        if(findSearchFilter) {
            findSearchFilter(data)
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
            <div className="help-article-bgColor">
                <Header></Header>

                <div className="help-article-bg">
                    <div className="header-mt">
                        <div className="help-flex-grid2">
                            <div>
                                <input
                                    id="filter_name"
                                    type="text"
                                    placeholder="I need help with ..."
                                    onChange={this.onChange}
                                    value={this.state.filter_name}
                                    onKeyUp={e => this.navigatePage(e)}
                                    required
                                />
                            </div>

                            <div className="justify-center btn-find-help txt-16 mouse-cursor" onClick={this.findHelp}>Find Help</div>
                        </div>
                    </div>
                </div>

                <div className="whole-body-mW help-article-pt align-l">
                    <div>
                        <Link to="/help-center">
                            <span className="txt-16 col-buttonAndLink mouse-cursor">Help</span>
                        </Link>
                        <img className="arrow-rl" src={require('../assets/img/right-arrow.svg')} alt="" />
                        <span className="txt-16 col-heavyDark mouse-cursor">{this.state.slugStr && this.state.slugStr}</span>
                    </div>

                    {
                        this.state.searchResults && (
                            <div className="pt-40 txt-16 col-blue mouse-cursor">
                                {this.state.searchResults.length > 0? this.state.searchResults.length: 0}
                                {this.state.searchResults.length > 1? ' articles': ' article'}
                            </div>
                        )
                    }

                    {
                        this.state.searchResults && this.state.searchResults.map((item, key) => {
                            return (
                                <div className="help-article-desc card-box txt-16 col-heavyDark help-article-p5" key={key}>
                                    <Link to={'/help-article/' + item._id}>
                                        <div className="txt-24 col-txt-title pb-10 flex-space txt-break">
                                            <div>{item.title}</div>
                                        </div>
                                        <div className="help-article-p1 col-desc">These are general principles that work well to remember - for both clients and providers!</div>
                                        <div className="txt-16 help-article-p2 flex-space-detail">
                                            <div>
                                                <span className="col-blue">{item['users'][0].name} - </span>
                                                <span className="col-lightColor">{item.writtenDate}</span>
                                            </div>

                                            <div className="txt-16 flex-space-icon col-light-gray txt-bold">
                                                <div className="justify-center icon-p"><img className="like-view" src={require('../assets/img/view.svg')} alt="" /> {item.readers}</div>
                                                <div className="justify-center">
                                                    <img className="like-view" src={require('../assets/img/likes.svg')} alt="" />
                                                    <span>{item.likes > 0? item.likes : 0}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }

                    <div className="help-center-align">
                        <div className="product-btn justify-center" onClick={() => this.onPageClick(1)}>
                            <svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.60496 14.6383C9.42024 14.6383 9.23359 14.5779 9.07773 14.457L0.923018 8.02084C0.724826 7.86414 0.609375 7.62814 0.609375 7.37704C0.609375 7.12782 0.724826 6.88993 0.923018 6.73512L9.0431 0.332906C9.40485 0.047818 9.934 0.104458 10.2246 0.459402C10.5151 0.814346 10.4574 1.33355 10.0956 1.61863L2.79141 7.37704L10.1322 13.1713C10.4939 13.4564 10.5517 13.9756 10.2611 14.3305C10.0937 14.5326 9.85126 14.6383 9.60496 14.6383Z" fill="black" fill-opacity="0.65"/>
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
                                <path d="M1.39506 14.6383C1.57978 14.6383 1.76643 14.5779 1.92229 14.457L10.077 8.02084C10.2752 7.86414 10.3906 7.62814 10.3906 7.37704C10.3906 7.12782 10.2752 6.88993 10.077 6.73512L1.95692 0.332906C1.59518 0.047818 1.06603 0.104458 0.775474 0.459402C0.484922 0.814346 0.542647 1.33355 0.904394 1.61863L8.2086 7.37704L0.867834 13.1713C0.506087 13.4564 0.448362 13.9756 0.738914 14.3305C0.906319 14.5326 1.14877 14.6383 1.39506 14.6383Z" fill="black" fill-opacity="0.65"/>
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
        articleBySearch: state.registers.articleBySearch,
    }
};

export default connect(
    mapStateToProps,
    {
        findSearchFilter,
    }
)(HelpSearchResults);