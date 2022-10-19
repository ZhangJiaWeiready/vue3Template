import axios from "axios";
import { message } from "ant-design-vue";
import { encode } from "js-base64";
// import router from "../router/index.js";
// // 创建实例时设置配置的默认值
let baseURL = "";
if (import.meta.env.DEV) {
  baseURL = "/v1/api";
} else {
  // baseURL = "http://172.24.15.10:9798/";
}
//   baseURL,
const request = axios.create({
  baseURL,
  timeout: 15000, // request timeout
});

// 添加请求拦截器
request.interceptors.request.use(
  (config) => {
    // 管理中心传来user信息
    const { loginName } = localStorage.getItem("dnt_mc_userInfo") ? JSON.parse(localStorage.getItem("dnt_mc_userInfo")) : {};
    if (loginName) config.headers.userCode = loginName;
    const accessToken = localStorage.getItem("dnt_mc_access_token") ? JSON.parse(localStorage.getItem("dnt_mc_access_token")) : "";
    const token = accessToken || "";
    if (token) config.headers.token = token;
    const projectId = localStorage.getItem("projectId") || "";
    if (projectId) config.headers.projectId = projectId;
    if (!config.headers["Content-Type"]) {
      config.headers["Content-Type"] = "application/json";
      // config.headers.token = "602c39d3-7363-45fd-b2c4-7bcaa712424a";
      // config.headers['Content-Type'] = 'multipart/form-data'
    }
    config.headers.modelType = import.meta.env.VITE_API_MODEL_TYPE;
    return config;
  },
  (error) => Promise.reject(error), // 对请求错误做些什么
);
// 添加响应拦截器
request.interceptors.response.use(
  // 请求成功则直接拿data
  (res) => {
    const code = res.status || 0;
    if (code == 200 || res.headers["content-type"] === "application/octet-stream;charset=utf-8") {
      console.log();
    }
    return res.data || res;
  },
  (err) => {
    if (err.toJSON().message.indexOf("timeout") !== -1) {
      message.error("连接超时，请联系管理员");
      Promise.reject(err);
      return;
    }
    const { status, data } = err.response;
    if (status == 401) {
      // router.push({ path: "/login" });
      message.error(data.message);
      const url = localStorage.getItem("dnt_mc_login_url") ? JSON.parse(localStorage.getItem("dnt_mc_login_url")) : "";
      const toUrl = url
        ? `${url}?sourceUrl=${encode(window.location.href)}`
        : `${window.location.origin}/manageCenter/management-center/#/login?sourceUrl=${encode(window.location.href)}`;
      if (!import.meta.env.DEV) window.open(toUrl, "_self");
    } else if (status == 500) {
      message.error(`${data}` || `请求错误，请联系管理员！（${status}）`);
    } else {
      message.error(
        `${status || ""}` || `请求错误，请联系管理员！（${data}）`,
      );
    }
    Promise.reject(err);
  },
);

// 对转入的数据进行统一处理
export default (url, method, data) => {
  const config = {};
  if (method === "get" || method === "delete") {
    config.params = data;
  } else if (method === "post" || method === "put" || method === "patch") {
    config.data = data;
  }
  return request({
    url,
    method,
    ...config,
  });
};
