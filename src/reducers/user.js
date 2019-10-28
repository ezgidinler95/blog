import {
    LOGIN_USER_PENDING, LOGIN_USER_FULFILLED, LOGIN_USER_REJECTED
} from '../actions/user';
const initialState = {
    user: {},
    loginUserResult: {},
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER_PENDING:
            return {
                ...state,
            }
        case LOGIN_USER_FULFILLED:
            return {
                ...state,
                loginUserResult: action.payload
            }
        case LOGIN_USER_REJECTED:
            return {
                ...state,
            }
        default:
            return state;
    }
}