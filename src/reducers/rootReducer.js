
import { combineReducers } from 'redux';

import userReducer from './user';
import generalInformationReducer from './generalInformation';
import hobbyReducer from './hobby';
import opinionReducer from './opinion';

import agendaReducer from './agenda';

export default combineReducers({
    userReducer,
    generalInformationReducer,
    hobbyReducer,
    opinionReducer,
    agendaReducer,
});