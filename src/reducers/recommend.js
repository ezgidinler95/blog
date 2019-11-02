import {
    ADD_RECOMMEND_PENDING, ADD_RECOMMEND_FULFILLED, ADD_RECOMMEND_REJECTED,
    ALL_RECOMMENDS_PENDING, ALL_RECOMMENDS_FULFILLED, ALL_RECOMMENDS_REJECTED,
    UPDATE_RECOMMEND_PENDING, UPDATE_RECOMMEND_FULFILLED, UPDATE_RECOMMEND_REJECTED

} from '../actions/recommend';
const initialState = {
    recommends: [],
    addRecommendResult: {},
    updaterecommendResult: {},
}
export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_RECOMMEND_PENDING:
            return {
                ...state,
            }
        case ADD_RECOMMEND_FULFILLED:
            return {
                ...state,
                addRecommendResult: action.payload
            }
        case ADD_RECOMMEND_REJECTED:
            return {
                ...state,
            }
        case UPDATE_RECOMMEND_PENDING:
            return {
                ...state,
            }
        case UPDATE_RECOMMEND_FULFILLED:
            return {
                ...state,
                updaterecommendResult: action.payload
            }
        case UPDATE_RECOMMEND_REJECTED:
            return {
                ...state,
            }
        case ALL_RECOMMENDS_PENDING:
            return {
                ...state,
            }
        case ALL_RECOMMENDS_FULFILLED:
            return {
                ...state,
                ...action.payload.data,
            }
        case ALL_RECOMMENDS_REJECTED:
            return {
                ...state,
            }
        default:
            return state;
    }
}