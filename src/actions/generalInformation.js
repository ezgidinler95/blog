import axios from 'axios';
import { API_URL } from '../config/config';

export const ADD_GENERAL_INFORMATION_PENDING = "ADD_GENERAL_INFORMATION_PENDING";
export const ADD_GENERAL_INFORMATION_FULFILLED = "ADD_GENERAL_INFORMATION_FULFILLED";
export const ADD_GENERAL_INFORMATION_REJECTED = "ADD_GENERAL_INFORMATION_REJECTED";

export const ALL_GENERAL_INFORMATION_PENDING = "ALL_GENERAL_INFORMATION_PENDING";
export const ALL_GENERAL_INFORMATION_FULFILLED = "ALL_GENERAL_INFORMATION_FULFILLED";
export const ALL_GENERAL_INFORMATION_REJECTED = "ALL_GENERAL_INFORMATION_REJECTED";

export const UPDATE_GENERAL_INFORMATION_PENDING = "UPDATE_GENERAL_INFORMATION_PENDING";
export const UPDATE_GENERAL_INFORMATION_FULFILLED = "UPDATE_GENERAL_INFORMATION_FULFILLED";
export const UPDATE_GENERAL_INFORMATION_REJECTED = "UPDATE_GENERAL_INFORMATION_REJECTED";


export function addGeneralInformation(generalInformation) {
    return async dispatch => {
        await dispatch({
            type: "ADD_GENERAL_INFORMATION",
            payload: axios.post(`${API_URL}/general-information`, generalInformation)
                .then(result => result.data)
        })
    }
}

export function updateGeneralInformation(generalInformation) {
    return async dispatch => {
        await dispatch({
            type: "UPDATE_GENERAL_INFORMATION",
            payload: axios.put(`${API_URL}/general-information`, generalInformation)
                .then(result => result.data)
        })
    }
}

export function getAllGeneralInformation() {
    return async dispatch => {
        await dispatch({
            type: "ALL_GENERAL_INFORMATION",
            payload: axios.get(`${API_URL}/general-information/all`)
                .then(result => result.data)
        });
    }
}