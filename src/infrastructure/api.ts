import axios, { AxiosRequestConfig } from "axios";

const baseURL = "https://jsonplaceholder.typicode.com";

const instance = axios.create({
  timeout: 1000,
  baseURL
});

const get = (path: string, opt?: AxiosRequestConfig) => {
  return instance
    .get(path, opt)
    .then(res => res.data)
    .catch(e => e);
};

const post = (path: string, payload: any, opt?: AxiosRequestConfig) => {
  return instance
    .post(path, payload, opt)
    .then(res => res.data)
    .catch(e => e);
};

const put = (path: string, payload: any, opt?: AxiosRequestConfig) => {
  return instance
    .put(path, payload, opt)
    .then(res => res.data)
    .catch(e => e);
};

const remove = (path: string, opt?: AxiosRequestConfig) => {
  return instance
    .delete(path, opt)
    .then(res => res.data)
    .catch(e => e);
};

const api = {
  get,
  post,
  put,
  remove
};

export { api, baseURL, instance };
