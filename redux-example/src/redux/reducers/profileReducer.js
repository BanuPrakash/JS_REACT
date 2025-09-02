export default function profileReducer(state = {"avatar": "banu.png",
         "displayName": "Banu Prakash"}, action) {
    switch(action.type) {
    case "CHANGE_PROFILE_PIC":
        // update the avatar...
        return state;
    default:
        return state;
    }
}