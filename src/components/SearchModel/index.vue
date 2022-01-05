<template>
  <div class="flex flex-align-center" ref="search">
    <el-input
      v-show="!ifMinWidth"
      placeholder="搜索"
      prefix-icon="el-icon-search"
      size="mini"
    ></el-input>
    <svg-icon
      class="search-icon"
      v-show="ifMinWidth"
      name="icon-search"
    ></svg-icon>
    <div class="add-icon pointer"><svg-icon name="icon-add"></svg-icon></div>
  </div>
</template>
<script>
export default {
  name: " SearchModel",
  props: {
    centerBarWidth: {
      type: Number,
      dafault: () => null,
    },
  },
  data() {
    return {};
  },
  computed: {
    ifMinWidth() {
      if (!this.centerBarWidth) return;
      if (this.centerBarWidth <= 80) {
        return true;
      }
      return false;
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.add-icon {
  font-size: $font-16;
}
.add-icon:hover,
.search-icon:hover {
  background-color: #eaeaea;
}
</style>