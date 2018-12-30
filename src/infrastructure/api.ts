const BASE_URL = "https://jsonplaceholder.typicode.com";

const APIFactory = (fetch: GlobalFetch["fetch"]) => ({
  get: async (path: string, option?: RequestInit) =>
    fetch(`${BASE_URL}${path}`, option).then(res => res.json()),
  post: async (path: string, option?: RequestInit) =>
    fetch(`${BASE_URL}${path}`, {
      method: "POST"
    }).then(res => res.json()),
  put: async (path: string, option?: RequestInit) =>
    fetch(`${BASE_URL}${path}`, {
      method: "PUT"
    }).then(res => res.json()),
  delete: async (path: string, option?: RequestInit) =>
    fetch(`${BASE_URL}${path}`, {
      method: "DELETE"
    }).then(res => res.json())
});

export default APIFactory;
