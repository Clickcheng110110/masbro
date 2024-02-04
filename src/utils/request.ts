import axios from "axios";

export const isDev = false;

export const API_BASE_PATH = "http://109.106.244.142:8000";
export const API_TEST_PATH = "http://109.106.244.142:8000";
export const API_BASE_PATH2 = "http://43.198.233.40:8088/api";

export const instance = axios.create({
  baseURL: isDev ? API_TEST_PATH : API_BASE_PATH,
  timeout: 100000,
  //   headers: { 'X-Custom-Header': 'foobar' },
});

instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response?.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
