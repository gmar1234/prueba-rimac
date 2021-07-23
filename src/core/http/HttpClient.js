import axios from "axios";

const HttpClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export default HttpClient;
