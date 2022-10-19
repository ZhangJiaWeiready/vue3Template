import createAPI from "./request.js";

const gatewayPath = "/managementAuth";
/* 获取当前用户的信息 */
export const queryUserInfo = () => createAPI(`${gatewayPath}/sys/user/get`, "get");

/* 退出登录 */
export const logout = () => createAPI(`${gatewayPath}/sys/oauth/logout`, "get");
