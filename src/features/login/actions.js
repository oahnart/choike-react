import api from "../../utils/helpers/api";

export const postLogin = (headers, data) => {
  return api({
    method: "post",
    url: "/api/v1/auth/signin",
    noAuth: true,
    data,
    headers,
  });
};

export const postRegister = (data) => {
  return api({
    method: "post",
    url: "/api/v1/auth/signup",
    noAuth: true,
    data,
  });
};

export const verifyEmail = (headers, data) => {
  return api({
    method: "put",
    url: "/api/v1/auth/verify-email",
    noAuth: true,
    data,
    headers,
  });
};
