import axios from "axios";

export const GET_USER = "GET_USER";
export const ADD_LIKE = "ADD_LIKE";
export const getUser = () => {
    return (dispatch) => {
        axios.get("http://localhost:3000/user").then(res => {
            dispatch({ type: GET_USER, payload: res.data[0] })
        });
    };
};

export const addLike = (data) => {

    return (dispatch) => {
        axios.put("http://localhost:3000/user", data).then(res => {
            dispatch({ type: ADD_LIKE, payload: res.data[0] })
        });
    };
};