import axios from "axios";

export const GET_USER = "GET_USER";
export const getUsers = () => {

    return (dispatch) => {
        axios.get("http://localhost:3000/user").then(res => {
            dispatch({ type: GET_USER, payload: res.data })
        });
    };
};