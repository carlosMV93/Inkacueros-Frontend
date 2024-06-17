import axios from "axios";

const baseURL = process.env.VUE_APP_BASE_URL;

export function createUserApi(data) {
  return axios.post(`${baseURL}/create_user`, data);
}

export function loginApi(data) {
  return axios.post(`${baseURL}/validate_user`, data);
}
