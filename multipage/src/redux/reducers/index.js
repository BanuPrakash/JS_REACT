import formDataReducer from "./formDataReducer";
import pageReducer from "./pageReducer";
import { combineReducers } from 'redux';

// root reducer
export default combineReducers({
    "page": pageReducer,
    "formData": formDataReducer
});