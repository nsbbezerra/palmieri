import axios from "axios";

var production = "http://palmieriuniformes.com:21489";
var local = "http://localhost:21489";

const api = axios.create({
  baseURL: production,
});

export default api;
