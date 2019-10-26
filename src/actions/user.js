import axios from 'axios';
import { API_URL } from '../config/config';

export const LOGIN_USER_PENDING = "LOGIN_USER_PENDING";
export const LOGIN_USER_FULFILLED = "LOGIN_USER_FULFILLED";
export const LOGIN_USER_REJECTED = "LOGIN_USER_REJECTED";

export function login(user) {
    return async dispatch => {
        await dispatch({
            type: "LOGIN_USER",
            payload: axios.post(`${API_URL}/user`, user)
                .then(result => result.data)

        })
    }
}
