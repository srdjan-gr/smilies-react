import axios from "axios";

export default axios.create({
    // baseURL: "http://localhost:8080/srdjan/sapi-old/category.php",
    baseURL: "http://localhost:8080/srdjan/sapi/api/category.php",
});