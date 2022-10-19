import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";
import viteCompression from "vite-plugin-compression";
import generateModifyVars from "./build/themeStyle.js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteCompression(),
  ],
  resolve: {
    alias: {
      // 配置别名
      "@": path.resolve(__dirname, "./src"),
      "#": path.resolve(__dirname, "./static"),
    },
  },
  server: {
    hostname: "0.0.0.0",
    open: true,
    port: 8080,
    https: false,
    ssr: false,
    base: "./",
    /**
     * 在生产中服务时的基本公共路径。
     * @default './'
     */
    // 代理配置
    proxy: {
      /** 路由地址 */
      // "/v1/api": {
      //   target: "http://172.24.15.10:9798/",
      //   // target: "http://172.24.15.10:9798/dataserver/v1/api/",
      //   changeOrigin: true,
      //   rewrite: (url) => url.replace(/^\/v1\/api/, ""),
      // },
    },
    // 打包后目录,默认dist
    outDir: "dist",
    // 引入第三方的配置
    optimizeDeps: {
      include: [],
    },
  },
  // 生产环境路径，类似webpack的assetsPath
  base: "./",
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          // 更改主题在这里
          ...generateModifyVars(),
        },
        // 引入 var.scss 这样就可以在全局中使用 var.scss中预定义的变量了
        // 给导入的路径最后加上 ;
        additionalData: "@import './src/style/var.less';",
        javascriptEnabled: true,
      },
    },
  },
});
