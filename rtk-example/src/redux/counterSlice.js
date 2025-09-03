import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    count: 0
}
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        // no need to clone the state and work on clone
        increment: (state, action) => {
            state.count = state.count + action.payload;
        },
        decrement: (state) => {
            state.count--;
        },
        reset: (state) => {
            state.count = 0;
        }
    }
});

export const { increment, decrement, reset } = counterSlice.actions
export default counterSlice.reducer

