import axios from "axios";
import cookie from "js-cookie";
import * as constants from "../constants/constant";
import Qs from "qs";
// import { getRefreshToken, requestLogout } from '../../view/system/systemAction';

const request = axios.create();

let isAlreadyFetchingAccessToken = false;
let subscribers = [];

// function onAccessTokenFetched(access_token) {
//   subscribers = subscribers.map((callback) => callback(access_token));
//   subscribers = [];
// }

function addSubscriber(callback) {
  subscribers.push(callback);
}

request.interceptors.request.use(
  (config) => {
    if (
      config.url.indexOf("/oauth/access_token") !== -1 ||
      config.url.indexOf("/oauth/refresh_token") !== -1 ||
      config.noAuth
    ) {
      delete config.headers.Authorization;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const originalRequest = error.config;
    if (error.response && error.response.status === 401) {
      const refreshToken = cookie.get(constants.REFRESH_TOKEN);

      if (
        refreshToken &&
        !originalRequest._retry &&
        error.config.url.indexOf("/oauth/access_token") === -1
      ) {
        originalRequest._retry = true;
        if (!isAlreadyFetchingAccessToken) {
          isAlreadyFetchingAccessToken = true;
          // getRefreshToken(refreshToken)
          //   .then(({ data }) => {
          //     isAlreadyFetchingAccessToken = false;
          //     cookie.set(constants.TOKEN, data.access_token, {
          //       expires: new Date(data.expires_in * 1000 + Date.now()),
          //     });
          //     cookie.set(constants.REFRESH_TOKEN, data.refresh_token, {
          //       expires: new Date(constants.EXPIRED_REFRESH_TOKEN + Date.now()),
          //     });
          //     onAccessTokenFetched(data.access_token);
          //   })
          //   .catch(() => {
          //     message.error('Your session has expired.');
          //     subscribers = [];
          //     requestLogout();
          //   });
        }
        const retryOriginalRequest = new Promise((resolve) => {
          addSubscriber((access_token) => {
            originalRequest.headers.Authorization = "Bearer " + access_token;
            resolve(axios(originalRequest));
          });
        });
        return retryOriginalRequest;
      } else {
        subscribers = [];
        // requestLogout();
      }
    }
    return Promise.reject(error.response || { data: {} });
  }
);

const api = (options = {}) => {
  return request({
    baseURL: constants.BASE_URL,
    ...options,
    paramsSerializer: (params) =>
      Qs.stringify(params, { arrayFormat: "repeat" }),
    headers: {
      Authorization:
        cookie.get(constants.TOKEN) && `Bearer ${cookie.get(constants.TOKEN)}`,
      ...options.headers,
    },
  });
};

export default api;
