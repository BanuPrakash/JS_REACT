import {combineReducers} from 'redux';
import contactReducer from './contactReducer';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
    "contacts": contactReducer,
    "profile": profileReducer
});

export default rootReducer;