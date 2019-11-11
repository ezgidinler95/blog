import axios from 'axios';
import { API_URL } from '../config/config';

export const ADD_AGENDA_PENDING = "ADD_AGENDA_PENDING";
export const ADD_AGENDA_FULFILLED = "ADD_AGENDA_FULFILLED";
export const ADD_AGENDA_REJECTED = "ADD_AGENDA_REJECTED";

export const ALL_AGENDA_PENDING = "ALL_AGENDA_PENDING";
export const ALL_AGENDA_FULFILLED = "ALL_AGENDA_FULFILLED";
export const ALL_AGENDA_REJECTED = "ALL_AGENDA_REJECTED";

export const UPDATE_AGENDA_PENDING = "UPDATE_AGENDA_PENDING";
export const UPDATE_AGENDA_FULFILLED = "UPDATE_AGENDA_FULFILLED";
export const UPDATE_AGENDA_REJECTED = "UPDATE_AGENDA_REJECTED";


export function addAgenda(agenda) {
    return async dispatch => {
        await dispatch({
            type: "ADD_AGENDA",
            payload: axios.post(`${API_URL}/agenda`, agenda)
                .then(result => result.data)
        })
    }
}

export function updateAgenda(agenda) {
    return async dispatch => {
        await dispatch({
            type: "UPDATE_AGENDA",
            payload: axios.put(`${API_URL}/agenda`, agenda)
                .then(result => result.data)
        })
    }
}

export function getAllAgenda() {
    return async dispatch => {
        await dispatch({
            type: "ALL_AGENDA",
            payload: axios.get(`${API_URL}/agenda/all`)
                .then(result => result.data)
        });
    }
}