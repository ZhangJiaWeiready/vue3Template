import { createRouter, createWebHashHistory } from "vue-router";
import App from "../App.vue";

const routes = [
  {
    path: "/",
    component: App,
    redirect: "/transfer",
    children: [
      {
        // 概览
        path: "home",
        name: "home",
        // redirect: '',
        component: () => import("@/views/home/index.vue"),
        meta: {
          title: "首页",
        },
      },
    ],
  },
  {
    path: "/transfer",
    name: "transfer",
    component: () => import("../views/transfer/index.vue"),
  },
  {
    path: "/refresh",
    name: "refresh",
    component: () => import("../views/transfer/refresh.vue"),
  },

];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
