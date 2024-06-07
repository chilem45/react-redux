import { ADD_POST, ADD_POST_LIKE, GET_POST } from "../actions/post.action";

const initialState = {};
export default function postReducer(state = initialState, action) {

    switch (action.type) {
        case GET_POST:
            return action.payload;
        case ADD_POST:
            return [action.payload, ...state];
        case ADD_POST_LIKE:
            return state.map((post) => {
                return {
                    ...post,
                    like: action.payload.like,
                }
            })
        default:
            return state;
    }

}
