<template>
  <div class="wrapper">
    基于Vue3 + vite + antdegisnVue + axios 搭建的基础框架
  </div>
</template>

<script>
import { onMounted } from "vue";

export default {
  mounted() {
    console.log("mounted");
  },
  methods: {

  },
  setup() {
    onMounted(() => {
      console.log("onMounted");
    });

    return {
    };
  },
};
</script>
<style lang="less" scoped>
  .wrapper {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  }
</style>
