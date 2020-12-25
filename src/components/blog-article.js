import React, {Component} from 'react';
import Header from "./header";
import '../assets/css/blogArticle.css';
import Config from "../config";
import {connect} from "react-redux";
import {
    getArticleDetailsById,
    getArticleCommentById,
    postComment,
    recentPostedArticles,
    likeDislike,
} from "../redux/actions/register/articles";
import bgImage from "../assets/img/blog-img-2.svg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from "react-router-dom";
import SocialShare from './social-share';

class BlogArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            articleInfo: '',
            commentsInfo: '',
            article_id: '',
            recentList: [],
            contentState: '',
            email: '',
        };
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
            getArticleDetailsById,
            getArticleCommentById,
            recentPostedArticles,
        } = this.props;

        const data = {
            _id: this.props.match.params.id,
            uid: uid,
        };

        if(getArticleDetailsById) {
            getArticleDetailsById(data);
        }

        const temp = {
            _id: this.props.match.params.id,
        };

        if(getArticleCommentById) {
            getArticleCommentById(temp);
        }

        if(recentPostedArticles) {
            recentPostedArticles();
        }
        window.scrollTo(0, 0);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.articleDetailById && prevProps.articleDetailById !== this.props.articleDetailById) {
            this.setState({
                articleInfo: this.props.articleDetailById,
            });
            window.scrollTo(0, 0);
        }

        if(this.props.articleCommentById && prevProps.articleCommentById !== this.props.articleCommentById) {
            this.setState({
                commentsInfo: this.props.articleCommentById,
            })
        }

        if(this.props.recentArticlesList && prevProps.recentArticlesList !== this.props.recentArticlesList) {
            this.setState({
                recentList: this.props.recentArticlesList,
            })
        }

        if(this.props.msg_comment && prevProps.msg_comment !== this.props.msg_comment) {
            toast(this.props.msg_comment);
            if(this.props.msg_comment === 'An comment registration succeeded.') {
                window.location.reload();
            }
        }
    }

    convertArticle = (id) => {
        let navigator_info = window.navigator;
        let screen_info = window.screen;
        let uid = navigator_info.mimeTypes.length;
        uid += navigator_info.userAgent.replace(/\D+/g, '');
        uid += navigator_info.plugins.length;
        uid += screen_info.height || '';
        uid += screen_info.width || '';
        uid += screen_info.pixelDepth || '';

        const {
            getArticleDetailsById,
            getArticleCommentById,
        } = this.props;

        const datas = {
            _id: id,
            uid: uid,
        };

        const data = {
            _id: id,
        };

        this.setState({
            article_id: id,
        });

        if(getArticleDetailsById) {
            getArticleDetailsById(datas);
        }

        if(getArticleCommentById) {
            getArticleCommentById(data);
        }

        window.location.href = '/blog-article/' + id;
    };

    onPostComment = () => {
        const {
            postComment,
        } = this.props;

        const data = {
            article_id: this.props.match.params.id,
            content: this.state.contentState,
        };

        this.setState({
            msg_toast: '',
        });

        if (postComment) {
            postComment(data);
        }
    };

    onContentStateChange = (e) => {
        this.setState({[e.target.id]: e.target.value || ''});
    };

    toggleChange = () => {
        this.setState({
            visible: !this.state.visible,
        })
    };

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
        const shareLink = Config.FRONT_URL + '/blog-article/' + this.props.match.params.id;
        return (
            <div>
                <ToastContainer />
                <div className="blog-article-bg">
                    <Header />
                </div>

                <div className="whole-body-mW online-therapy">
                    <div className="blog-flex-grid2 align-l txt-16 pt-20">
                        <div>
                            <Link to="/blog"><div className="col-buttonAndLink blog-home">Blog Home</div></Link>
                            <div className="pt-40 txt-32 col-txt-title align-l pb-20 txt-break">
                                {
                                    this.state.articleInfo[0] && this.state.articleInfo[0].title
                                }
                            </div>

                            <div className="pt-20 pb-20 flex-space details">
                                <div className="txt-16 col-buttonAndLink general-nataly">
                                    <div>
                                        <img className="photo-article"
                                             src={
                                                 this.state.articleInfo[0] && this.state.articleInfo[0]['users'][0]['photo']
                                                     ?
                                                     this.state.articleInfo[0]['users'][0]['photo']
                                                     :
                                                     require('../assets/img/account.svg')}
                                             alt=""
                                        />
                                    </div>

                                    <div>
                                        <span>
                                        {
                                            this.state.articleInfo[0] && this.state.articleInfo[0].writtenDate + ' by'
                                        }
                                        </span>
                                            <span className="col-blue date-rl">
                                        {
                                            this.state.articleInfo[0] && this.state.list && this.state.list[this.state.articleInfo[0].category_id]
                                        }
                                        </span>
                                            <span className="col-blue date-rl">
                                        {
                                            this.state.articleInfo[0] && this.state.articleInfo[0]['users'][0]['name']
                                        }
                                        </span>
                                    </div>
                                </div>
                                <div className="col-light-gray txt-bold justify-center details-view">
                                    <img style={{marginRight: 10}} src={require('../assets/img/view.svg')} alt="" />
                                    {this.state.articleInfo[0] && this.state.articleInfo[0].readers}
                                </div>
                            </div>

                            <div
                                className="blog-bg"
                                style={{backgroundImage: this.state.articleInfo[0] && this.state.articleInfo[0].src ? 'url(' + this.state.articleInfo[0].src + ')' : 'url(' + bgImage + ')'}}
                            />

                            <div className="txt-lorem-pt txt-line col-desc txt-break">
                                {
                                    this.state.articleInfo[0] && this.state.articleInfo[0].content
                                }
                            </div>

                            <div className="col-blue justify-left details align-match" style={{paddingTop: 80, paddingBottom: 0}}>
                                <div className="txt-26 col-txt-title" style={{paddingRight: 30}}>Was this helpful?</div>
                                <div className="justify-center helpful">
                                    <div onClick={this.onLike} className="mouse-cursor yes-no txt-bold justify-center">
                                        <img className="" src={require('../assets/img/yes-icon.svg')} alt="" />
                                        <span style={{paddingLeft: 10, paddingRight: 20, color: "#0004"}}>{this.state.articleInfo[0] && this.state.articleInfo[0].likes > 0? this.state.articleInfo[0].likes : 0}</span>
                                    </div>
                                    <div onClick={this.onDislike} className="mouse-cursor yes-no txt-bold justify-center" style={{marginTop: 5}}>
                                        <img className="icon-l mouse-cursor" src={require('../assets/img/no-icon.svg')} alt="" />
                                        <span style={{paddingLeft: 10, color: "#0004"}}>{this.state.articleInfo[0] && this.state.articleInfo[0].dislikes > 0? this.state.articleInfo[0].dislikes : 0}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="comments-b justify-left-details mouse-cursor" onClick={this.toggleChange}>
                                <div className="txt-26 col-txt-title">{this.state.commentsInfo.length} {this.state.commentsInfo.length > 1? ' Comments': ' Comment'}</div>
                                {
                                    this.state.visible ?
                                        <div className="add-icon"><img src={require('../assets/img/up-arrow.svg')} alt="" /> </div>
                                        :
                                        <div className="add-icon"><img src={require('../assets/img/down-arrow.svg')} alt="" /> </div>
                                }
                            </div>
                            {
                                this.state.visible && (
                                    <>
                                        <div className="pt-30 align-l col-heavyDark comment-l">Comment</div>
                                        <div className="comment-box flex-space justify-center">
                                            <textarea
                                                id={'contentState'}
                                                value={this.state.contentState}
                                                className="border-box comment-border"
                                                spellCheck="true"
                                                placeholder="Please input the content."
                                                onChange={this.onContentStateChange}
                                                required
                                            />
                                            <div className="btn-comment-edit col-white align-r mouse-cursor" onClick={this.onPostComment}>Post</div>
                                        </div>
                                    </>
                                )
                            }
                            {
                                this.state.visible && (
                                    this.state.commentsInfo && this.state.commentsInfo.map((item, key) => {
                                        return (
                                            <div className="pb-30" style={{wordBreak: 'break-all'}} key={key}>
                                                <div className="general-nataly">
                                                    <div className="txt-16" style={{color: "#0004"}}>
                                                        {
                                                            item.writtenDate && item.writtenDate
                                                        }
                                                    </div>
                                                </div>
                                                <div className="general-nataly comment col-black txt-line txt-break">{item.content}</div>
                                            </div>
                                        )
                                    })
                                )
                            }


                            <div className="blog-social-share align-l">
                                <div className="blog-article-p1 txt-26 col-txt-title">Share This Article</div>
                                <div className="lineGreen-left"></div>

                                <div className="">
                                    <SocialShare
                                        title={this.state.articleInfo[0] && this.state.articleInfo[0].title}
                                        shareLink={shareLink}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="popular-posts">
                            <div className="bg-bound3"></div>
                            <div className="pt-10 txt-26 col-blue">
                                Popular Posts
                            </div>
                            <hr />
                            {
                                this.state.recentList && this.state.recentList.map((item, key) => {
                                    return (
                                        <div key={key} className="mouse-cursor" onClick={() => this.convertArticle(item._id)}>
                                            <div className="pt-10 col-lightBlue recent-post">{item.title}</div>
                                            <hr />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className="link-arrow justify-rl">
                        <div>
                            <div className="col-blue justify-center mouse-cursor" onClick={() => this.convertArticle(this.state.articleInfo[0] && this.state.articleInfo[0].prev_id)}>
                                <img className="pair-arrow-r" src={require('../assets/img/pair-arrow-left.svg')} alt="" />
                                <span className="pair-arrow-txt">The Essential Guide to Online Therapy</span>
                            </div>

                            <div className="col-blue justify-center mouse-cursor" onClick={() => this.convertArticle(this.state.articleInfo[0] && this.state.articleInfo[0].next_id)}>
                                <span className="pair-arrow-txt">The Essential Guide to Online Therapy</span>
                                <img className="pair-arrow-l" src={require('../assets/img/pair-arrow-right.svg')} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="client-login-bg justify-center">
                    <div className="whole-body-mW justify-rl ">
                        <div className="btn-txt">
                            <div className="txt-26">Existing Client? Please login.</div>

                            <a href={Config.CLIENT_URL + '/client-login'}>
                                <div className="btn-blog-login txt-14 mouse-cursor">LOGIN</div>
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
        articleDetailById: state.registers.articleDetailById,
        articleCommentById: state.registers.articleCommentById,
        msg_comment: state.registers.msg_comment,
        recentArticlesList: state.registers.recentArticlesList,
        msg_blog_like: state.registers.msg_blog_like,
    }
};

export default connect(
    mapStateToProps,
    {
        getArticleDetailsById,
        postComment,
        getArticleCommentById,
        recentPostedArticles,
        likeDislike,
    }
)(BlogArticle);