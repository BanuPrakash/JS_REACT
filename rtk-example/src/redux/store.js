import { configureStore } from "@reduxjs/toolkit";
import profileReducer from './profileSlice'
import counterReducer from './counterSlice'
// instead of createStore(rootReducer)

// by default __REDUX_DEVTOOLS_EXTENSION__() is configured
const store = configureStore({
    // root reducer
    reducer: {
            profile: profileReducer,
            counter: counterReducer
    },
    devTools: true // not required, default is true
});

export default store;