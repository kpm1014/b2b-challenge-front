import axios from "axios";

const API_URL = process.env.API_URL;

const httpClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const get = (url, config) => httpClient.get(url, config);
const post = (url, data, config) => httpClient.post(url, data, config);
const put = (url, data, config) => httpClient.put(url, data, config);
const remove = (url, config) => httpClient.delete(url, config);

module.exports = {
  get,
  post,
  put,
  remove,
};
