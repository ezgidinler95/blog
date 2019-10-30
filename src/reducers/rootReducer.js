
import { combineReducers } from 'redux';

import userReducer from './user';
import generalInformationReducer from './generalInformation';
import hobbyReducer from './hobby';
import opinionReducer from './opinion';

export default combineReducers({
    userReducer,
    generalInformationReducer,
    hobbyReducer,
    opinionReducer,
});