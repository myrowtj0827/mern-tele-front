import axios from "axios";
import config from "../../../config/index";

import {
    HELP_COUNT_ARTICLE,
    HELP_COUNT_ARTICLE_CATEGORY,
    HELP_ARTICLES_CATEGORY,
    HELP_ARTICLE_ID,
    HELP_LIKE,
    ARTICLE_BY_SEARCH,
} from "../types/types";

/**
 * Searching by title or contents
 * @param data
 * @returns {function(...[*]=)}
 */
export const findSearchFilter = (data) => dispatch => {
    axios
        .post(config.SIM_API_URL + "api/help-articles/help-center-search", data)
        .then(res => {
            console.log("The filtering of the articles Success -> ", res.data.results);
            dispatch({
                type: ARTICLE_BY_SEARCH,
                payload: res.data.results,
            });
        })
        .catch(err => {
            console.log("The filtering of articles Failed -> ", err.response.data.msg);
        })
};

export const countHelpArticle = () => dispatch => {
    axios
        .post(config.SIM_API_URL + "api/help-articles/help-center",)
        .then(res => {
            console.log("Getting of count article Success -> ", res.data.results);
            dispatch({
                type: HELP_COUNT_ARTICLE,
                payload: res.data.results,
            });
        })
        .catch(err => {
            console.log("Getting of count article Failed -> ", err.response.data.msg);
        })
};

export const countHelpArticleByCategory = (data) => dispatch => {
    axios
        .post(config.SIM_API_URL + "api/help-articles/help-count-category", data)
        .then(res => {
            console.log("Getting of count article by category Success -> ", res.data.results);
            dispatch({
                type: HELP_COUNT_ARTICLE_CATEGORY,
                payload: res.data.results,
            });
        })
        .catch(err => {
            console.log("Getting of count article by category Failed -> ", err.response.data.msg);
        })
};

export const helpArticlesListByCategory = (data) => dispatch => {
    axios
        .post(config.SIM_API_URL + "api/help-articles/help-articles-category", data)
        .then(res => {
            console.log("Getting of articles by category Success -> ", res.data.results);
            dispatch({
                type: HELP_ARTICLES_CATEGORY,
                payload: res.data.results,
            });
        })
        .catch(err => {
            //console.log("Getting of articles by category Failed -> ", err.response.data.msg);
        })
};

export const HelpArticleById = (data) => dispatch => {
    axios
        .post(config.SIM_API_URL + "api/help-articles/get-help-article", data)
        .then(res => {
            console.log("Getting of article by id Success -> ", res.data.results);
            dispatch({
                type: HELP_ARTICLE_ID,
                payload: res.data.results,
            });
        })
        .catch(err => {
            console.log("Getting of article by id Failed -> ", err.response.data.msg);
        })
};

/**
 * Like && Dislike
 */
export const likeDislike = (data) => dispatch => {
    axios
        .post(config.SIM_API_URL + "api/help-articles/post-like", data)
        .then(res => {
            console.log(res.data.msg, " <- Posting of like or dislike succeed -> ", res.data.results);
            dispatch({
                type: HELP_LIKE,
                payload: res.data.msg,
            });
            window.location.reload();
        })
        .catch(err => {
            console.log("Posting of like or dislike failed -> ", err.response.data.msg);
        })
};
