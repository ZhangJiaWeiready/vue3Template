<template>
  <div class="menu-wrapper">
    <div class="menu-wrapper-inner">
      <div class="inner">
        <div class="inner-head">
          <slot name="header"></slot>
        </div>
        <div class="inner-body" v-if="organizationList.length > 0">
          <a-tree :tree-data="organizationList"  show-icon v-model:selectedKeys="selectedKey"
          @select="changeKeys">
            <template #switcherIcon>
              <CaretDownFilled />
            </template>
            <template #icon="{ expanded }">
              <FolderOpenFilled class="icon-color" v-if="expanded" />
              <FolderFilled class="icon-color" v-else />
            </template>
          </a-tree>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent, watch, onMounted } from "vue";
import { CaretDownFilled, FolderOpenFilled, FolderFilled } from "@ant-design/icons-vue";

import { selectOrganizationOption } from "@/api/developManage/userManage.js";

export default defineComponent({
  components: { CaretDownFilled, FolderOpenFilled, FolderFilled },
  props: {
    selectedKeys: {
      type: Array,
    },
  },
  setup(props, { emit }) {
    console.log(props);
    const selectedKey = ref([]);
    const organizationList = ref([]);
    watch(() => props.selectedKeys, (val) => {
      selectedKey.value = val;
    }, { immediate: true });
    const changeKeys = (val) => {
      emit("changeKeys", ...val);
    };
    onMounted(() => {
      selectOrganizationOption().then((res) => {
        if (res.code == 200) {
          organizationList.value = res.data.map((item) => ({
            title: item.name,
            key: item.id,
            slots: {
              icon: "icon",
            },
          }));
          emit("changeKeys", res.data[0].id);
        }
      });
    });
    return {
      selectedKey, changeKeys, organizationList,
    };
  },
});
</script>

<style lang="less" scoped>
  .menu-wrapper {
    .icon-color {
      color: @primary-color;
    }
  }
</style>
