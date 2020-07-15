import axios from "axios";

var url = "https://palmieri-api.herokuapp.com";
var local = "http://localhost:21108";
var production = "http://palmieriuniformes.com:21108";

const api = axios.create({
  baseURL: production,
});

export default api;
