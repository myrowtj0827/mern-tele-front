import React, {Component} from 'react';
import "../assets/css/helpCenter.css";
import Header from "./header";
import {
    HelpArticleById,
    likeDislike,
} from "../redux/actions/register/help";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class HelpArticle extends Component{
    constructor(props) {
        super(props);

        this.state = {
            article_id: this.props.match.params.id,
            articleInfo: '',
            msg_status: '',
        }
    }

    componentDidMount() {
        let navigator_info = window.navigator;
        let screen_info = window.screen;
        let uid = navigator_info.mimeTypes.length;
        uid += navigator_info.userAgent.replace(/\D+/g, '');
        uid += navigator_info.plugins.length;
        uid += screen_info.height || '';
        uid += screen_info.width || '';
        uid += screen_info.pixelDepth || '';

        const {
            HelpArticleById
        } = this.props;

        const data = {
            category_id: this.state.article_id,
            uid: uid,
        };

        if(HelpArticleById) {
            HelpArticleById(data);
        }
        window.scrollTo(0, 0);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.helpArticleById && prevProps.helpArticleById !== this.props.helpArticleById) {
            this.setState({
                articleInfo: this.props.helpArticleById,
            });

        }

        if(this.props.msg_likeDislike && prevProps.msg_likeDislike !== this.props.msg_likeDislike) {
            this.setState({
                msg_status: this.props.msg_likeDislike,
            });
        }
    }

    onLike = () => {
        let navigator_info = window.navigator;
        let screen_info = window.screen;
        let uid = navigator_info.mimeTypes.length;
        uid += navigator_info.userAgent.replace(/\D+/g, '');
        uid += navigator_info.plugins.length;
        uid += screen_info.height || '';
        uid += screen_info.width || '';
        uid += screen_info.pixelDepth || '';

        const {
            likeDislike,
        } = this.props;

        const data = {
            article_id: this.props.match.params.id,
            status: 'like',
            uid: uid,
        };
        if(likeDislike) {
            likeDislike(data);
        }
    };

    onDislike = () => {
        let navigator_info = window.navigator;
        let screen_info = window.screen;
        let uid = navigator_info.mimeTypes.length;
        uid += navigator_info.userAgent.replace(/\D+/g, '');
        uid += navigator_info.plugins.length;
        uid += screen_info.height || '';
        uid += screen_info.width || '';
        uid += screen_info.pixelDepth || '';

        const {
            likeDislike,
        } = this.props;

        const data = {
            article_id: this.props.match.params.id,
            status: 'disLike',
            uid: uid,
        };

        if(likeDislike) {
            likeDislike(data);
        }
    };

    render() {
        let path = '';
        let category = '';

        if(this.state.articleInfo[0]) {
            category = this.state.articleInfo[0].category_name
        }
        path = '/help-center-detail/' + category.toLowerCase();

        return (
            <div className="help-article-bgColor">
                <div className="help-article-bg">
                    <Header></Header>

                    <div className="header-mt" />
                </div>

                <div className="whole-body-mW help-article-pt align-l">
                    <div>
                        <Link to="/help-center">
                            <span className="txt-16 col-buttonAndLink mouse-cursor">Help</span>
                        </Link>
                        <img className="arrow-rl" src={require('../assets/img/right-arrow.svg')} alt="" />
                        <Link to={path}>
                            <span className="txt-16 col-blue mouse-cursor">{category}</span>
                        </Link>
                        <img className="arrow-rl" src={require('../assets/img/right-arrow.svg')} alt="" />

                        <span className="txt-16 col-blue">
                            {
                                this.state.articleInfo[0] && this.state.articleInfo[0].title
                            }
                        </span>
                    </div>

                    {
                        this.state.articleInfo[0] && (
                            <>
                                <div className="help-article-desc txt-16 col-heavyDark" style={{lineHeight: 2}}>
                                    <div className="txt-30 col-txt-title pb-20 txt-break">
                                        {
                                            this.state.articleInfo[0].title
                                        }
                                    </div>

                                    <div className="help-article-p1 col-blue">These are general principles that work well to remember - for both clients and providers!</div>
                                    <div className="txt-16 help-article-p2 flex-space-detail">
                                        <div className="">
                                            <span className="col-blue">{ this.state.articleInfo[0]['users'][0]['name'] } - </span>
                                            <span className="col-lightColor"> { this.state.articleInfo[0].writtenDate}</span>
                                        </div>

                                        <div className="flex-space-icon readers col-light-gray txt-bold">
                                            <img className="like-view" src={require('../assets/img/view.svg')} alt="" /> {this.state.articleInfo[0].readers}
                                        </div>
                                    </div>

                                    <div className="help-article-p2 readers col-desc txt-16 txt-break">
                                        { this.state.articleInfo[0].content }
                                    </div>

                                    <div className="help-article-p4 col-blue justify-left icon col-light-gray txt-bold">
                                        <div className="col-buttonAndLink icon-p">Was this helpful?</div>
                                        <div onClick={this.onLike} className="mouse-cursor icon-p">
                                            <img className="like-view" src={require('../assets/img/yes-icon.svg')} alt="" />
                                            <span>{this.state.articleInfo[0] && this.state.articleInfo[0].likes > 0? this.state.articleInfo[0].likes : 0}</span>
                                        </div>

                                        <div onClick={this.onDislike} className="mouse-cursor">
                                            <img className="like-view mouse-cursor" src={require('../assets/img/no-icon.svg')} alt="" />
                                            <span>{this.state.articleInfo[0] && this.state.articleInfo[0].dislikes > 0? this.state.articleInfo[0].dislikes : 0}</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        helpArticleById: state.registers.helpArticleById,
        msg_likeDislike: state.registers.msg_likeDislike,
    }
};
export default connect(
    mapStateToProps,
    {
        HelpArticleById,
        likeDislike,
    }
)(HelpArticle);