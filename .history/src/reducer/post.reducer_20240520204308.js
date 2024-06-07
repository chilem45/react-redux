import { GET_POST } from "../actions/post.action";

const initialState = {};
export default function postReducer(state = initialState, action) {

    switch (action.type) {
        case GET_POST:
            return action.payload;
        case ADD_POST:
            return [action.payload, ...state];
        default:
            return state;
    }

}
