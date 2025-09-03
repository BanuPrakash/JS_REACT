import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
    total: 0,
    quantity: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // look here we are not cloning, working on state which is already cloned and sent
            state.cartItems.push({ ...action.payload });
            state.quantity = state.quantity + 1;
            state.total = state.total + action.payload.amount
        },
        increment: (state, action) => {
            const item = state.cartItems.find(item => item.id === action.payload);
            item.quantity++;
            item.amount = item.price * item.quantity;
            state.total = state.cartItems.map(item => item.amount).reduce((v1, v2) => v1 + v2, 0.0);
        },
        clearCart: (state) => {
            state.cartItems = [];
            state.total = 0;
            state.quantity = 0;
        }
    }
});

export const { addToCart, increment, clearCart } = cartSlice.actions
export default cartSlice.reducer