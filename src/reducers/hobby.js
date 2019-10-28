import {
    ADD_HOBBY_PENDING, ADD_HOBBY_FULFILLED, ADD_HOBBY_REJECTED,
    ALL_HOBBİES_PENDING, ALL_HOBBİES_FULFILLED, ALL_HOBBİES_REJECTED

} from '../actions/hobby';
const initialState = {
    hobbies: [],
    addHobbyResult: {},
}
export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_HOBBY_PENDING:
            return {
                ...state,
            }
        case ADD_HOBBY_FULFILLED:
            return {
                ...state,
                addHobbyResult: action.payload
            }
        case ADD_HOBBY_REJECTED:
            return {
                ...state,
            }
        case ALL_HOBBİES_PENDING:
            return {
                ...state,
            }
        case ALL_HOBBİES_FULFILLED:
            return {
                ...state,
                ...action.payload.data,
            }
        case ALL_HOBBİES_REJECTED:
            return {
                ...state,
            }
        default:
            return state;
    }
}