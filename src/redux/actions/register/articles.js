import axios from "axios";
import config from "../../../config/index";

import {
    ARTICLES_ALL,
    CATEGORY_LIST,
    ARTICLE_DETAILS_DISPLAY,
    POST_COMMENT,
    GET_COMMENT_BYID,
    GET_RECENT_ARTICLES,
    BLOG_LIKE,
} from "../types/types";

export const getPageArticles = (data) => dispatch => {
    console.log("pageNation = ", data);
    axios
        .post(config.SIM_API_URL + "api/articles/get-all-articles", data)
        .then(res => {
            console.log("Article List By Category = ", "\n", res.data.results);
            dispatch({
                type: ARTICLES_ALL,
                payload: res.data.results,
            });
        })
        .catch(err => {
            console.log("Failed.", err.response.data.msg);
        })
};

export const getArticleDetailsById = (data) => dispatch =>{
    axios
        .post(config.SIM_API_URL + "api/articles/get-article", data)
        .then(res => {
            console.log("=============", res.data.results);
            dispatch({
                type: ARTICLE_DETAILS_DISPLAY,
                payload: res.data.results,
            });
        })
        .catch(err => {
            console.log("Getting of the article's details by Id failed.", err.response.data.msg);
        })
};

/**
 * Getting the list of the registered categories
 **/
export const getListCategory = () => dispatch => {
    axios
        .post(config.SIM_API_URL + "api/articles/get-category-list",)
        .then(res => {
            console.log(res.data.msg);
            dispatch({
                type: CATEGORY_LIST,
                payload: res.data.results,
            });
        })
        .catch(err => {
            console.log("Getting of the category list failed.", err.response.data.msg);
        })
};

export const postComment = (data) => dispatch => {
    console.log("data = ", data);

    axios
        .post(config.SIM_API_URL + "api/articles/post-comment", data)
        .then(res => {
            console.log(res.data.msg);
            dispatch({
                type: POST_COMMENT,
                payload: res.data.msg,
            });
        })
        .catch(err => {
            console.log("Posting of the comment failed.", err.response.data.msg);
            dispatch({
                type: POST_COMMENT,
                payload: err.response.data.msg,
            });
        })
};

/**
 * Getting the comments by article ID
 * @type {Router}
 */
export const getArticleCommentById = (data) => dispatch => {
   console.log(data);
    axios
        .post(config.SIM_API_URL + "api/articles/get-comment", data)
        .then(res => {
            console.log(res.data.msg);
            dispatch({
                type: GET_COMMENT_BYID,
                payload: res.data.results,
            });
        })
        .catch(err => {
            console.log("Posting of the comment failed.", err.response.data.msg);
        })
};

/**
 * Getting 10 recent posted article list
 * @returns {function(...[*]=)}
 */
export const recentPostedArticles = () => dispatch => {
    axios
        .post(config.SIM_API_URL + "api/articles/get-recent-list",)
        .then(res => {
            console.log(res.data.results);
            dispatch({
                type: GET_RECENT_ARTICLES,
                payload: res.data.results,
            });
        })
        .catch(err => {
            console.log("The getting of the posted recent article list failed.", err.response.data.msg);
        })
};

/**
 * Like && Dislike
 */
export const likeDislike = (data) => dispatch => {
    axios
        .post(config.SIM_API_URL + "api/articles/post-like", data)
        .then(res => {
            console.log(res.data.msg, " <- Posting of like or dislike succeed -> ", res.data.results);
            dispatch({
                type: BLOG_LIKE,
                payload: res.data.msg,
            });
            window.location.reload();
        })
        .catch(err => {
            console.log("Posting of like or dislike failed -> ", err.response.data.msg);
        })
};