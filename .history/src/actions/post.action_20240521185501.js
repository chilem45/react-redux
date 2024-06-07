import axios from "axios";

export const GET_POST = "GET_POST";
export const ADD_POST = "ADD_POST";
export const ADD_POST_LIKE = "ADD_POST_LIKE";
export const EDIT_POST = "EDIT_POST";
export const getPosts = () => {

    return (dispatch) => {
        axios.get("http://localhost:3000/posts").then(res => {
            dispatch({ type: GET_POST, payload: res.data })
        });
    };
};

export const addPost = (data) => {

    return (dispatch) => {
        axios.post("http://localhost:3000/posts", data).then(res => {
            dispatch({ type: ADD_POST, payload: res.data })
        });
    };
};

export const addPostLike = (data) => {
    return (dispatch) => {
        axios.put(`http://localhost:3000/posts${data.id}`, data).then(res => {
            dispatch({ type: ADD_POST_LIKE, payload: res.data[0] })
        });
    };
};
export const editPost = (data) => {
    return (dispatch) => {
        axios.put(`http://localhost:3000/posts/${data.id}`, data).then(res => {
            dispatch({ type: EDIT_POST, payload: res.data });
        });
    };
};