import React, {Component} from 'react';
import Header from "./header";
import '../assets/css/helpCenter.css';
import {Link} from "react-router-dom";
import {
    countHelpArticle,
} from "../redux/actions/register/help";
import {connect} from "react-redux";

class HelpCenter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nCountList: '',
            filter_name: '',
            flag_click: false,
        }
    }

    componentDidMount() {
        const {
            countHelpArticle,
        } = this.props;

        if(countHelpArticle) {
            countHelpArticle();
        }
        window.scrollTo(0, 0);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.countArticleList && prevProps.countArticleList !== this.props.countArticleList) {
            this.setState({
                nCountList: this.props.countArticleList,
            })
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value || ''
        })
    };

    searchFilter = () => {
        if(this.state.filter_name)
            window.location.href = "/help-search-results/" + this.state.filter_name.toLowerCase();
    };

    navigatePage = (code) => {
        if (code.keyCode === 13) {
            this.searchFilter();
        }
    };

    render() {
         return (
            <div className="help-article-bgColor">
                <div className="help-article-bg refix-pb">
                    <Header></Header>

                    <div className="header-mt">

                        <div className="txt-32 col-txt-title help-need">Need help?</div>
                        <div className="txt-26 col-txt-title right-place">You are in the right place.</div>

                        <div className="help-flex-grid2">
                            <div>
                                <input
                                    id={"filter_name"}
                                    type="text"
                                    placeholder="I need help with ..."
                                    onChange={this.onChange}
                                    value={this.state.filter_name}
                                    maxLength={'65536'}
                                    onKeyUp={event => this.navigatePage(event)}
                                    required
                                />
                            </div>
                            <div className="justify-center btn-find-help txt-16 mouse-cursor" onClick={this.searchFilter}>Find Help</div>
                        </div>
                    </div>
                </div>

                <div className="help-bg">
                    <div className="whole-body-mW help-center-p1 align-l">
                        <div className="flex-grid3 help-center-gaps">
                            {
                                this.state.nCountList && this.state.nCountList.map((item, key) => {
                                    const path = '/help-center-detail/' + item.category.toLocaleLowerCase();
                                    return (
                                        <div className="help-center-p2 mouse-cursor" key={key}>
                                            <Link to={path}>
                                                <div className="bg-bound1"></div>
                                                <div className="pt-20">
                                                    <img src={require('../assets/img/help-center-icon-' + item.key + '.svg')} alt="" />
                                                </div>
                                                <div className="txt-18 col-txt-title general-t">{item.category}</div>

                                                <div className="txt-14 col-desc general-t content-height txt-break">
                                                    {item.description}
                                                </div>
                                                <div className="txt-16 col-blue general-t">{item.nCount} articles</div>
                                            </Link>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        countArticleList: state.registers.countArticleList,
    }
};

export default connect(
    mapStateToProps,
    {
        countHelpArticle,
    }
)(HelpCenter);
