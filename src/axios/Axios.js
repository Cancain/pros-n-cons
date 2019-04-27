import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost/pros-n-cons-web/WordPress/wp-json/wp/"
});

export default instance;
