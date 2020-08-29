import axios from "axios";
import { Error } from "../const";
import { errorPopup } from "../utils/utils";


export const createAPI = () => {
  const api = axios.create({
    baseURL: `https://api.github.com/orgs`,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    if (err.response.status === Error.NOT_FOUND) {
      err.response.data.error = `У данной организации нет репозитория`;
      errorPopup(err);
    }
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};


