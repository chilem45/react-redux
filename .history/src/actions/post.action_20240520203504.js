import axios from "axios";

export const GET_POST = "GET_POST";
export const ADD_POST = "ADD_POST";
export const getPosts = () => {

    return (dispatch) => {
        axios.get("http://localhost:3000/posts").then(res => {
            dispatch({ type: GET_POST, payload: res.data })
        });
    };
};

export const addPosts = (data) => {

    return (dispatch) => {
        axios.post("http://localhost:3000/posts", data).then(res => {
            dispatch({ type: ADD_POST, payload: res.data })
        });
    };
};