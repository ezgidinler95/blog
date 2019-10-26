import {
    ADD_GENERAL_INFORMATION_PENDING, ADD_GENERAL_INFORMATION_FULFILLED, ADD_GENERAL_INFORMATION_REJECTED

} from '../actions/generalInformation';
const initialState = {
    generalInformations: [],
    addGeneralInformationResult: {},
}
export default (state = initialState, action) => {
    console.log(action);
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
        default:
            return state;
    }
}