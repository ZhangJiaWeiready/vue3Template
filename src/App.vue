<template>
  <a-config-provider :locale="zhCN">
    <router-view></router-view>
  </a-config-provider>
</template>

<script>
import { defineComponent } from "vue";
import zhCN from "ant-design-vue/es/locale/zh_CN.js";
import "moment/dist/locale/zh-cn.js";
import moment from "moment";

moment.locale("zh-cn");

export default defineComponent({
  setup() {
    return {
      zhCN,
    };
  },
});

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
