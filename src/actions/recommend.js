import axios from 'axios';
import { API_URL } from '../config/config';

export const ADD_RECOMMEND_PENDING = "ADD_RECOMMEND_PENDING";
export const ADD_RECOMMEND_FULFILLED = "ADD_RECOMMEND_FULFILLED";
export const ADD_RECOMMEND_REJECTED = "ADD_RECOMMEND_REJECTED";

export const ALL_RECOMMENDS_PENDING = "ALL_HOBBİES_PENDING";
export const ALL_RECOMMENDS_FULFILLED = "ALL_HOBBİES_FULFILLED";
export const ALL_RECOMMENDS_REJECTED = "ALL_HOBBİES_REJECTED";

export const UPDATE_RECOMMEND_PENDING = "UPDATE_RECOMMEND_PENDING";
export const UPDATE_RECOMMEND_FULFILLED = "UPDATE_RECOMMEND_FULFILLED";
export const UPDATE_RECOMMEND_REJECTED = "UPDATE_RECOMMEND_REJECTED";


export function addRecommend(recommend) {
    return async dispatch => {
        await dispatch({
            type: "ADD_RECOMMEND",
            payload: axios.post(`${API_URL}/recommend`, recommend)
                .then(result => result.data)
        })
    }
}

export function getAllRecommends() {
    return async dispatch => {
        await dispatch({
            type: "ALL_RECOMMENDS",
            payload: axios.get(`${API_URL}/recommend/all`)
                .then(result => result.data)
        });
    }
}

export function updateRecommand(recommend) {
    return async dispatch => {
        await dispatch({
            type: "UPDATE_RECOMMEND",
            payload: axios.put(`${API_URL}/recommend`, recommend)
                .then(result => result.data)
        })
    }
}
