import axios from "axios";

export const GET_POST = "GET_POST";
export const getPosts = () => {

    return (dispatch) => {
        axios.get("http://localhost:3000/posts").then(res => {
            dispatch({ type: GET_POST, payload: res.data })
        });
    };
};