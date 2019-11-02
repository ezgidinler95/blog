
import { combineReducers } from 'redux';

import userReducer from './user';
import generalInformationReducer from './generalInformation';
import hobbyReducer from './hobby';
import opinionReducer from './opinion';
import recommendReducer from './recommend';

export default combineReducers({
    userReducer,
    generalInformationReducer,
    hobbyReducer,
    opinionReducer,
    recommendReducer,
});