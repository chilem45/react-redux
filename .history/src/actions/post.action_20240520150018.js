import axios from "axios";

export const GET_POST = "GET_POST";
export const getPost = () => {

    return axios.get("http://localhost:3000/posts").then(res => {
        console.log(res);
    });
} 