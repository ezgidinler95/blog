import {
    ADD_GENERAL_INFORMATION_PENDING, ADD_GENERAL_INFORMATION_FULFILLED, ADD_GENERAL_INFORMATION_REJECTED,
    ALL_GENERAL_INFORMATION_PENDING, ALL_GENERAL_INFORMATION_FULFILLED, ALL_GENERAL_INFORMATION_REJECTED,
    UPDATE_GENERAL_INFORMATION_PENDING, UPDATE_GENERAL_INFORMATION_FULFILLED, UPDATE_GENERAL_INFORMATION_REJECTED,
    GET_GENERAL_INFORMATION_PENDING, GET_GENERAL_INFORMATION_FULFILLED, GET_GENERAL_INFORMATION_REJECTED
} from '../actions/generalInformation';
const initialState = {
    generalInformations: [],
    generalInformation: {},
    addGeneralInformationResult: {},
    updateGeneralInformationResult: {},
}
export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_GENERAL_INFORMATION_PENDING:
            return {
                ...state,
            }
        case ADD_GENERAL_INFORMATION_FULFILLED:
            return {
                ...state,
                addGeneralInformationResult: action.payload
            }
        case ADD_GENERAL_INFORMATION_REJECTED:
            return {
                ...state,
            }
        case UPDATE_GENERAL_INFORMATION_PENDING:
            return {
                ...state,
            }
        case UPDATE_GENERAL_INFORMATION_FULFILLED:
            return {
                ...state,
                updateGeneralInformationResult: action.payload
            }
        case UPDATE_GENERAL_INFORMATION_REJECTED:
            return {
                ...state,
            }
        case ALL_GENERAL_INFORMATION_PENDING:
            return {
                ...state,
            }
        case ALL_GENERAL_INFORMATION_FULFILLED:
            return {
                ...state,
                ...action.payload.data,
            }
        case ALL_GENERAL_INFORMATION_REJECTED:
            return {
                ...state,
            }
        case GET_GENERAL_INFORMATION_PENDING:
            return {
                ...state,
            }
        case GET_GENERAL_INFORMATION_FULFILLED:
            return {
                ...state,
                ...action.payload.data,
            }
        case GET_GENERAL_INFORMATION_REJECTED:
            return {
                ...state,
            }
        default:
            return state;
    }
}