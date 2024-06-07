import { ADD_POST, ADD_POST_LIKE, EDIT_POST, GET_POST } from "../actions/post.action";

const initialState = {};
export default function postReducer(state = initialState, action) {

    switch (action.type) {
        case GET_POST:
            return action.payload;
        case ADD_POST:
            return [action.payload, ...state];
        case ADD_POST_LIKE:
            return state.map((post) => {
                if (post.id == action.payload.id) {
                    return {
                        ...post,
                        like: action.payload.like,
                    }
                }
            })
        case EDIT_POST:
            return state.map((post) => {

                if (post.id == action.payload.id) {
                    return {
                        ...post,
                        content: action.payload.content,
                    }
                }
            })

        default:
            return state;
    }

}
