import axios from "axios";

export const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
});

export const publicRequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
});
export const userRequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    token:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWE3NzViMTFmMzc1YzNhYjEzN2E5OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzkzOTc5NCwiZXhwIjoxNjM3OTQxNTk0fQ.yWV4QtXb0uP1BRZ6y0MLrdmeiRHERGt3OGNvtl-ExiI"
  }
});
