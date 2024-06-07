import { ADD_POST_LIKE, GET_USER } from "../actions/user.action";

const initialState = {};
export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            return action.payload;
        case ADD_POST_LIKE:
            return
        default:
            return state;
    }

}
