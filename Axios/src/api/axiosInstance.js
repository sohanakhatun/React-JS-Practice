import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000, // If the server does not respond within 5 seconds, abort the request and throw an error.
});

api.interceptors.request.use((config) => {
  console.log("request sent:", config.url);
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Error:", error.response?.status);
    return Promise.reject(error);
  }
);

export default api;
