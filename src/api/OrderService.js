import axios from "axios";

const baseURL = process.env.VUE_APP_BASE_URL;

export function createOrderApi(data) {
  return axios.post(`${baseURL}/orders/`, data);
}

export function createOrderItemApi(data) {
  return axios.post(`${baseURL}/order-item-create/`, data);
}

export function createProductOrderApi(data) {
  return axios.post(`${baseURL}/productsorder/`, data);
}

export function createOrdersItemApi(data) {
  return axios.post(`${baseURL}/orderitem/`, data);
}

export function findAllOrdersApi() {
  return axios.get(`${baseURL}/order-items/`);
}
