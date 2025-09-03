
export default function pageReducer(state = { page: 0 }, action) {
    switch (action.type) {
        case "NEXT_PAGE":
            return { page: state.page + 1 };
        case "PREV_PAGE":
            return { page: state.page - 1 };
        default:
            return state;
    }
}