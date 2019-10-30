import axios from 'axios';
import { API_URL } from '../config/config';

export const ADD_OPINION_PENDING = "ADD_OPINION_PENDING";
export const ADD_OPINION_FULFILLED = "ADD_OPINION_FULFILLED";
export const ADD_OPINION_REJECTED = "ADD_OPINION_REJECTED";

export const ALL_OPINIONS_PENDING = "ALL_OPINIONS_PENDING";
export const ALL_OPINIONS_FULFILLED = "ALL_OPINIONS_FULFILLED";
export const ALL_OPINIONS_REJECTED = "ALL_OPINIONS_REJECTED";


export function addOpinion(opinion) {
    return async dispatch => {
        await dispatch({
            type: "ADD_OPINION",
            payload: axios.post(`${API_URL}/opinion`, opinion)
                .then(result => result.data)
        })
    }
}

export function getAllOpinions() {
    return async dispatch => {
        await dispatch({
            type: "ALL_OPINIONS",
            payload: axios.get(`${API_URL}/opinion/all`)
                .then(result => result.data)
        });
    }
}