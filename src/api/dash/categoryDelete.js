import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8080/srdjan/sapi/api/categoryDashDelete.php",
});