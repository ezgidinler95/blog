
import { combineReducers } from 'redux';

import userReducer from './user';
import generalInformationReducer from './generalInformation';

export default combineReducers({
    userReducer,
    generalInformationReducer
});