import axios from "axios";

const baseURL = process.env.REACT_APP_BACKEND_URL;
let headers: {};

const api = axios.create({
    baseURL: baseURL,
    // headers,
});

export default api