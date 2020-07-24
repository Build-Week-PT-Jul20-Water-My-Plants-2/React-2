import axios from 'axios';
import {axiosWithAuth} from "./axiosAuth";

const BASE_URL = "https://cors-anywhere.herokuapp.com/https://watermyplants1.herokuapp.com/api/auth/"

export const LOGIN = "login/";
export const PLANTS = "plants/";


export function call_AUTH(payload) {
    return axios.post(`${BASE_URL}${LOGIN}`, payload)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
}

export function call_post(endpoint, payload) {
    return axiosWithAuth()
        .post(`${BASE_URL}${endpoint}`, payload)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
}

export function call_get(endpoint) {
    return axiosWithAuth()
        .get(`${BASE_URL}${endpoint}`)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
}
