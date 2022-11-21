import axios from "axios";


const baseURL = process.env.BACKEND_URL;
//let headers: {};

// const api = axios.create({
//     baseURL: baseURL,
//     // headers,
// });
const api = axios.create({
    baseURL: 'http://localhost:8080/srdjan/smilies/sapi/api/',
    // headers,
});

export default api