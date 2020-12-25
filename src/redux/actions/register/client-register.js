import axios from "axios";
import config from "../../../config/index";

import {
    PROVIDER_ADDRESS,
    PROVIDER_INFO,
    CLIENT_REQUEST,
    SEND_CONTACT,
    SHOW_SPINNING,
} from "../types/types";

/**
 * Input: provider ID
 * @param data
 * @returns {function(...[*]=)}
 */
export const reset = () => dispatch => {
    dispatch({
        type: SEND_CONTACT,
        payload: '',
    });
};

export const getProviderByIdRole = (data) => dispatch => {
    axios
        .post(config.SIM_API_URL + "api/users/get-info-user", data)
        .then(res => {
            dispatch({
                type: PROVIDER_INFO,
                payload: res.data.results,
            });
        })
        .catch(err => {
            console.log("Failed !", err.toString());
        })
};

export const requestRegister = (data) => dispatch => {
    axios
        .post(config.SIM_API_URL + "api/users/request-client", data)
        .then(res => {
            if (res.status === 200) {
                dispatch({
                    type: CLIENT_REQUEST,
                    payload: res.data.msg,
                });
            }
        })
        .catch(err => {
            dispatch({
                type: CLIENT_REQUEST,
                payload: err.response.data.msg,
            });
            console.log("Request Failed.", err.response.data.msg);
        })
};

/**
 * Getting provider_id, name, address 1, address 2, bgPhoto, city, phone, state_province
 * @returns {function(...[*]=)}
 */
export const getProvidersList = (data) => dispatch => {
    dispatch({type: SHOW_SPINNING, payload: true});
    axios
        .post(config.SIM_API_URL + "api/users/get-middle-information", data)
        .then(res => {
            dispatch({type: SHOW_SPINNING, payload: false});
            dispatch({
                type: PROVIDER_ADDRESS,
                payload: res.data.results,
            });
        })
        .catch(err => {
            dispatch({type: SHOW_SPINNING, payload: false});
            console.log("Failed !", err.toString());
        })
};

/**
 * Send Contact
 */
export const sendContact = (data) => dispatch => {
    dispatch({type: SHOW_SPINNING, payload: true});
    axios
        .post(config.SIM_API_URL + "api/users/send-contact", data)
        .then(res => {
            dispatch({type: SHOW_SPINNING, payload: false});
            dispatch({
                type: SEND_CONTACT,
                payload: res.data.msg,
            });
        })
        .catch(err => {
            dispatch({type: SHOW_SPINNING, payload: false});
            dispatch({
                type: SEND_CONTACT,
                payload: err.response.data.msg,
            });
        })
};
