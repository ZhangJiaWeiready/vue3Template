import { createApp } from "vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.less";
import * as echarts from "echarts";
import JsonViewer from "vue3-json-viewer";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store/index.js";
import "./style/index.less";
import "./assets/font_3381051_kx3ggnvenl/iconfont.css";

const app = createApp(App);
app.use(router);
app.use(store);
app.use(Antd);
app.use(JsonViewer);
app.config.globalProperties.$echarts = echarts;
app.mount("#app");
