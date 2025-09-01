const  cartReducer = (state, action) => {
    switch(action.type) {
        case "ADD_TO_CART":
            const item = action.payload;
            return {
                cartItems: [...state.cartItems, item],
                total: state.total + item.price,
                quantity: state.quantity + 1
            }
        case "INCREMENT":
          const items = state.cartItems;
          items.forEach(item => {
            if(item.id === action.payload) { // will be the item id
                item.qty ++;
                item.amount = item.price * item.qty; // tax, discount
            }
          });
            return {    
                cartItems: items,
                total: state.cartItems.map(item => item.amount).reduce((a,b) => a+b, 0),    
                quantity: state.quantity
            }
        case "CLEAR_CART":
            return {
                cartItems: [],
                total: 0,
                quantity: 0
            }
        default:
            return state;
    }
}

export default cartReducer;