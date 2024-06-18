import axios from "axios";

const baseURL = process.env.VUE_APP_BASE_URL;

export function findAllBrandsApi() {
  return axios.get(`${baseURL}/brand`);
}
