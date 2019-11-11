import {
    ADD_AGENDA_PENDING, ADD_AGENDA_FULFILLED, ADD_AGENDA_REJECTED,
    UPDATE_AGENDA_PENDING, UPDATE_AGENDA_FULFILLED, UPDATE_AGENDA_REJECTED,
    ALL_AGENDA_PENDING, ALL_AGENDA_FULFILLED, ALL_AGENDA_REJECTED

} from '../actions/agenda';
const initialState = {
    agendas: [],
    addAgendaResult: {},
    updateAgendaResult: {},
}
export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_AGENDA_PENDING:
            return {
                ...state,
            }
        case ADD_AGENDA_FULFILLED:
            return {
                ...state,
                addAgendaResult: action.payload
            }
        case ADD_AGENDA_REJECTED:
            return {
                ...state,
            }
        case UPDATE_AGENDA_PENDING:
            return {
                ...state,
            }
        case UPDATE_AGENDA_FULFILLED:
            return {
                ...state,
                updateAgendaResult: action.payload
            }
        case UPDATE_AGENDA_REJECTED:
            return {
                ...state,
            }
        case ALL_AGENDA_PENDING:
            return {
                ...state,
            }
        case ALL_AGENDA_FULFILLED:
            return {
                ...state,
                ...action.payload.data,
            }
        case ALL_AGENDA_REJECTED:
            return {
                ...state,
            }
        default:
            return state;
    }
}