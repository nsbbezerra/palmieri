import axios from "axios";

var url = "https://palmieri-api.herokuapp.com";

const api = axios.create({
  baseURL: url,
});

export default api;
