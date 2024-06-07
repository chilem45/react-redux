import axios from "axios";

export const ADD_LIKE = "ADD_LIKE";


export const addLike = (data) => {

    return (dispatch) => {
        axios.put("http://localhost:3000/user", data).then(res => {
            dispatch({ type: ADD_LIKE, payload: res.data })
        });
    };
};