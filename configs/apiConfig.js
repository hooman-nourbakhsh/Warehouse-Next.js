import axios from "axios";
import { getCookie } from "utils/cookie";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});

api.interceptors.request.use(
  (request) => {
    const token = getCookie("token");

    if (token) request.headers.Authorization = `Bearer ${token}`;

    return request;
  },

  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => {
    return response;
  },

  (error) => {
    if (error.response.statusText === "Unauthorized") {
      window.location.reload();
    }
    return Promise.reject(error);
  }
);

export default api;
