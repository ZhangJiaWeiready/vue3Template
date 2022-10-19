<template>
  <div>
  </div>
</template>

<script>
import { ref, reactive, toRefs, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

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

<style lang='less' scoped>

</style>
