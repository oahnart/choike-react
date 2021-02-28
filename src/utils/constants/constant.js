export const JWT = "JWT";
// export const BASE_URL = "https://api.tiki.vn";
export const BASE_URL = "http://103.237.145.125:8090/";
export const EXPIRED = "EXPIRED";
export const EXPIRED_TIME = 30 * 60 * 1000;
export const TOKEN = "token";
export const REFRESH_TOKEN = "refresh_token";
export const EXPIRED_REFRESH_TOKEN = 30 * 24 * 60 * 60 * 1000;
export const LAST_LOGIN = "lastLogin";
export const USER_ROLES = "USER_ROLES";
export const Roles = {
  ROLE_USER: "ROLE_USER",
  ROLE_ADMIN: "ROLE_ADMIN",
  ROLE_MANAGER: "ROLE_MANAGER",
};

// routes
export const routes = {
  ERROR: "/error",
  LOGIN: "/login",
  LOGOUT: "/logout",
  DEVICE_MANAGEMENT: "/device-management",
  ENROLL_DEVICE: "/enroll-device",
  ENROLL_DEVICE_ID: "/enroll-device/:deviceId?",
  EDIT_DEVICE: "/edit-device",
  EDIT_DEVICE_ID: "/edit-device/:deviceId",
  PROFILE: "/profile",
  CHANGE_PASSWORD: "/change-password",
  FORGOT_PASSWORD: "/forgot-password",
  //////////////
  HOME: "/market",
  ARENA: "/arena",
  DETAIL_MARKET: "/market/detail-market/:market_id",
};

export const DEVICE_STATUS = {
  ACTIVATED: "ACTIVATED",
  LOCKED: "LOCKED",
  NONE: "NONE",
  OPEN: "OPEN",
};

export const ROLES = {
  ADMIN: "ADMIN",
  SUPER_ADMIN: "SUPER_ADMIN",
  VENDOR: [
    "ROLE_VENDOR_EVN",
    "ROLE_VENDOR_VIETNAMMOBILE",
    "ROLE_VENDOR_VIETTEL",
    "ROLE_VENDOR_BEELINEVN",
    "ROLE_VENDOR_SPHONE",
    "ROLE_VENDOR_VINAPHONE",
    "ROLE_VENDOR_MOBILEPHONE",
    "ROLE_VENDOR_EMOBILE",
  ],
};
