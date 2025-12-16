import axios from "axios";
import { API_CONFIG } from "../constants/api";

const axiosinstance = axios.create({
  baseURL: API_CONFIG.base_url,
  timeout: API_CONFIG.timeoout
});

axiosinstance.interceptors.request.use((req) => {
  const token = localStorage.getItem(API_CONFIG.TOKEN);
  if (token) {
    req.headers[API_CONFIG.AUTHORIZATION] = `${API_CONFIG.BEARER} ${token}`;
  }
  return req;
});


axiosinstance.interceptors.response.use((res) => {

 if (res.headers[API_CONFIG.AUTHORIZATION] !== undefined) {
  localStorage.setItem(API_CONFIG.TOKEN, res.headers[API_CONFIG.AUTHORIZATION]);

 }

  return res;
}, (error) => {
  if (error.response) {
  }
  return Promise.reject(error);
});

export default axiosinstance;