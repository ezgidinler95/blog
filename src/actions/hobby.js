import axios from 'axios';
import { API_URL } from '../config/config';

export const ADD_HOBBY_PENDING = "ADD_HOBBY_PENDING";
export const ADD_HOBBY_FULFILLED = "ADD_HOBBY_FULFILLED";
export const ADD_HOBBY_REJECTED = "ADD_HOBBY_REJECTED";

export const ALL_HOBBİES_PENDING = "ALL_HOBBİES_PENDING";
export const ALL_HOBBİES_FULFILLED = "ALL_HOBBİES_FULFILLED";
export const ALL_HOBBİES_REJECTED = "ALL_HOBBİES_REJECTED";

export const UPDATE_HOBBİES_PENDING = "UPDATE_HOBBİES_PENDING";
export const UPDATE_HOBBİES_FULFILLED = "UPDATE_HOBBİES_FULFILLED";
export const UPDATE_HOBBİES_REJECTED = "UPDATE_HOBBİES_REJECTED";


export function addHobby(hobby) {
    return async dispatch => {
        await dispatch({
            type: "ADD_HOBBY",
            payload: axios.post(`${API_URL}/hobby`, hobby, { headers: { 'content-type': 'multipart/form-data' } })
                .then(result => result.data)
        })
    }
}

export function getAllHobby() {
    return async dispatch => {
        await dispatch({
            type: "ALL_HOBBİES",
            payload: axios.get(`${API_URL}/hobby/all`)
                .then(result => result.data)
        });
    }
}


export function updateHobby(hobby) {
    return async dispatch => {
        await dispatch({
            type: "UPDATE_HOBBİES",
            payload: axios.put(`${API_URL}/hobby`, hobby)
                .then(result => result.data)
        })
    }
}
