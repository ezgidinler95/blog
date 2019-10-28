import {
    ADD_GENERAL_INFORMATION_PENDING, ADD_GENERAL_INFORMATION_FULFILLED, ADD_GENERAL_INFORMATION_REJECTED,
    ALL_GENERAL_INFORMATION_PENDING, ALL_GENERAL_INFORMATION_FULFILLED, ALL_GENERAL_INFORMATION_REJECTED

} from '../actions/generalInformation';
const initialState = {
    generalInformations: [],
    addGeneralInformationResult: {},
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
        default:
            return state;
    }
}