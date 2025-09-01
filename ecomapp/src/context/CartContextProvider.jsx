import React from "react";
import { useReducer } from "react";
import cartReducer from "../reducers/cartReducer";
import axios from "axios";

import { useNavigate } from 'react-router-dom';

// centralized store
const CartContext = React.createContext();

const initialState = {
    cartItems: [],
    total: 0,
    quantity: 0
}

export default function CartContextProvider(props) {
    let [state, dispatch] = useReducer(cartReducer, initialState)
    let navigate = useNavigate();
    function addToCart(item) {
        dispatch({ type: 'ADD_TO_CART', payload: item })
    }

    function increment(id) {
        dispatch({ type: 'INCREMENT', payload: id })
    }

    function clearCart() {
        // place order
        let order = {
            items: state.cartItems,
            total: state.total,
            orderDate: new Date().toLocaleDateString(),
            //assumption, on login success user data is stored in session
            customer: window.sessionStorage.getItem("username")
        }

        axios.post("http://localhost:1234/orders", order).then(response => {
            console.log("order placed!!!");
            dispatch({ type: 'CLEAR_CART' });
            navigate("/");
        })


    }

    return <CartContext.Provider value={{ ...state, addToCart, increment, clearCart }}>
        {props.children}
    </CartContext.Provider>
}

export { CartContext }