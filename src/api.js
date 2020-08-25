import axios from "axios";
// import {Error} from "./const";

export const createAPI = () => {
  const api = axios.create({
    baseURL: `https://api.github.com/orgs`,
    timeout: 1000 * 5,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    // if (err.response.status === Error.UNAUTHORIZED) {
    //
    // }
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};


