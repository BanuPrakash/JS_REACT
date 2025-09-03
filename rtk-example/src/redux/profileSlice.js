import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   avatar: 'banu.png',
   name: 'Banu Prakash'
}
const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {}
});

export default profileSlice.reducer