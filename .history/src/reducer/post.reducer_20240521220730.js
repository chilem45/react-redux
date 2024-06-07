import { ADD_POST, ADD_POST_LIKE, DELETE_POST, EDIT_POST, GET_POST } from "../actions/post.action";

const initialState = {};
export default function postReducer(state = initialState, action) {

    switch (action.type) {
        case GET_POST:
            return action.payload;
        case ADD_POST:
            return [action.payload, ...state];
        case ADD_POST_LIKE:
            return state.map((post) => {
                if (post.id === action.payload.id) {
                    return {
                        ...post,
                        like: action.payload.like,
                    }
                }
                else {
                    return post;
                }
            })
        case EDIT_POST:
            return state.map((post) => {
                if (post.id === action.payload.id) {
                    return {
                        ...post,
                        content: action.payload.content,
                    }
                } else {
                    return post;
                }
            })
        case DELETE_POST:
            return state.filter(post => post.id !== action.payload);

        default:
            return state;
    }

}
