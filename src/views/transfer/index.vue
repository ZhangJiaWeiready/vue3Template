<template>
  <div class="transfer">
    <a-spin/>
  </div>
</template>

<script>
import { nextTick } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "default",
  setup() {
    const router = useRouter();
    // const route = useRoute();

    nextTick(() => {
      // 处理重定向页面
      // route.query.token
      router.push({ path: "/" });
    });
    return {
    };
  },
};
</script>

<style lang="less" scoped>
.transfer {
  position: relative;
  height: 100%;
  background-color: #fbfcff;
  text-align: center;
  :deep(.ant-spin-dot) {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
}
</style>
