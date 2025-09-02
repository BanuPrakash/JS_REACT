import { compose, createStore } from "redux";
import rootReducer from "./reducers"; //index.js

// REDUX DEVTOOLS will be middleware, he intercepts actions, logs them and delegates it to store.
// REDUX DEVTOOLS for Time Travel Debugging
const store = createStore(rootReducer, compose(window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;   