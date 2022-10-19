<template>
  <a-empty description="Not Found" class="not-found" />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Empty } from "ant-design-vue";

export default defineComponent({
  setup() {
    return {
      simpleImage: Empty.PRESENTED_IMAGE_SIMPLE,
    };
  },
});
</script>
<style lang="less">
.not-found {
  margin-top: 25vh;
  p {
    font-weight: 500;
    font-size: 30px;
    margin-top: 20px;
  }
}
</style>
