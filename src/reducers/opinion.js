import {
    ADD_OPINION_PENDING, ADD_OPINION_FULFILLED, ADD_OPINION_REJECTED,
    ALL_OPINIONS_PENDING, ALL_OPINIONS_FULFILLED, ALL_OPINIONS_REJECTED,

} from '../actions/opinion';
const initialState = {
    opinions: [],
    addOpinionResult: {},
}
export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_OPINION_PENDING:
            return {
                ...state,
            }
        case ADD_OPINION_FULFILLED:
            return {
                ...state,
                addOpinionResult: action.payload
            }
        case ADD_OPINION_REJECTED:
            return {
                ...state,
            }
        case ALL_OPINIONS_PENDING:
            return {
                ...state,
            }
        case ALL_OPINIONS_FULFILLED:
            return {
                ...state,
                ...action.payload.data,
            }
        case ALL_OPINIONS_REJECTED:
            return {
                ...state,
            }
        default:
            return state;
    }
}