import {
    PROVIDER_ADDRESS,
    PROVIDER_INFO,
    CLIENT_REQUEST,

    ARTICLES_ALL,
    CATEGORY_LIST,
    ARTICLE_DETAILS_DISPLAY,
    POST_COMMENT,
    FILE_UPLOAD_ERROR,
    FILE_UPLOAD,
    GET_COMMENT_BYID,
    GET_RECENT_ARTICLES,

    HELP_COUNT_ARTICLE,
    HELP_COUNT_ARTICLE_CATEGORY,
    HELP_ARTICLES_CATEGORY,
    HELP_ARTICLE_ID,
    HELP_LIKE,
    BLOG_LIKE,
    ARTICLE_BY_SEARCH,
    SEND_CONTACT,
    SHOW_SPINNING,
} from "../actions/types/types"

const initialState = {
    providerAddressList: {},
    getAccount: {},
    msg_res: '',

    articlesList: '',

    categoryList: '',
    articleDetailById: '',

    msg_comment: '',
    msg_fileUpload: '',
    fileUpload: '',
    articleCommentById: '',
    recentArticlesList: '',
    countArticleList: '',
    countArticleByCategory: '',
    helpArticlesByCategory: '',
    helpArticleById: '',
    msg_likeDislike: '',
    msg_blog_like: '',
    articleBySearch: '',
    msg_contact: '',
    spinning: '',
};

export default function (state = initialState, action) {
    switch(action.type){
        case SHOW_SPINNING:
            return {
                ...state,
                spinning: action.payload,
            };
        case PROVIDER_ADDRESS:
            return {
                ...state,
                providerAddressList: action.payload
            };

        case PROVIDER_INFO:
            return {
                ...state,
                getAccount: action.payload
            };

        case CLIENT_REQUEST:
            return {
                ...state,
                msg_res: action.payload
            };

        case ARTICLES_ALL:
            return {
                ...state,
                articlesList: action.payload,
            };

        case CATEGORY_LIST:
            return {
                ...state,
                categoryList: action.payload,
            };

        case ARTICLE_DETAILS_DISPLAY:
            return {
                ...state,
                articleDetailById: action.payload,
            };

        case POST_COMMENT:
            return {
                ...state,
                msg_comment: action.payload,
            };

        case FILE_UPLOAD_ERROR:
            return {
                ...state,
                msg_fileUpload: action.payload,
            };
        case FILE_UPLOAD:
            return {
                ...state,
                fileUpload: action.payload,
            };
        case GET_COMMENT_BYID:
            return {
                ...state,
                articleCommentById: action.payload,
            };
        case GET_RECENT_ARTICLES:
            return {
                ...state,
                recentArticlesList: action.payload,
            };

        case HELP_COUNT_ARTICLE:
            return {
                ...state,
                countArticleList: action.payload,
            };

        case HELP_COUNT_ARTICLE_CATEGORY:
            return {
                ...state,
                countArticleByCategory: action.payload,
            };

        case HELP_ARTICLES_CATEGORY:
            return {
                ...state,
                helpArticlesByCategory: action.payload,
            };
        case HELP_ARTICLE_ID:
            return {
                ...state,
                helpArticleById: action.payload,
            };

        case HELP_LIKE:
            return {
                ...state,
                msg_likeDislike: action.payload
            };

        case BLOG_LIKE:
            return {
                ...state,
                msg_blog_like: action.payload,
            };

        case ARTICLE_BY_SEARCH:
            return {
                ...state,
                articleBySearch: action.payload,
            };

        case SEND_CONTACT:
            return {
                ...state,
                msg_contact: action.payload,
            };

        default:
            return state;
    }
}