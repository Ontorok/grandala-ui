import axios from "axios";

export const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
});

export const publicRequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
});
export const userRequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
});
