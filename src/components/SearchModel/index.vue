<template>
  <div class="flex flex-align-center">
    <el-input
      placeholder="搜索"
      prefix-icon="el-icon-search"
      size="mini"
    ></el-input>
    <div class="input-icon pointer"><svg-icon name="icon-add"></svg-icon></div>
  </div>
</template>
<script>
export default {
  name: " SearchModel"
};
</script>
<style lang="scss" scoped>
.input-icon {
  margin-left: 5px;
  font-size: $font-16;
}
</style>