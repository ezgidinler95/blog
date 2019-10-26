import axios from 'axios';
import { API_URL } from '../config/config';

export const ADD_GENERAL_INFORMATION_PENDING = "ADD_GENERAL_INFORMATION_PENDING";
export const ADD_GENERAL_INFORMATION_FULFILLED = "ADD_GENERAL_INFORMATION_FULFILLED";
export const ADD_GENERAL_INFORMATION_REJECTED = "ADD_GENERAL_INFORMATION_REJECTED";


export function addGeneralInformation(generalInformation) {
    return async dispatch => {
        await dispatch({
            type: "ADD_GENERAL_INFORMATION",
            payload: axios.post(`${API_URL}/general-information`, generalInformation)
                .then(result => result.data)
        })
    }
}
