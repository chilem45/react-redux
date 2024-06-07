import { ADD_POST, GET_POST, addPostLike } from "../actions/post.action";

const initialState = {};
export default function postReducer(state = initialState, action) {

    switch (action.type) {
        case GET_POST:
            return action.payload;
        case ADD_POST:
            return [action.payload, ...state];
        case addPostLike:
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
