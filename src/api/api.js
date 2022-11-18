import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080/srdjan/sapi/api/categoryDashDelete.php",
});

export default api