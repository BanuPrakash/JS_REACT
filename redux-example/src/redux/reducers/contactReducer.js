export default function contactReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_CONTACT':
            return [...state, action.payload];
        case 'CLEAR_CONTACTS':
            return [];
        case 'REMOVE_CONTACT':
            return state.filter(contact => contact.email !== action.payload);
        default:
            return state;
    }
}   