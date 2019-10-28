
import { combineReducers } from 'redux';

import userReducer from './user';
import generalInformationReducer from './generalInformation';
import hobbyReducer from './hobby';

export default combineReducers({
    userReducer,
    generalInformationReducer,
    hobbyReducer,
});