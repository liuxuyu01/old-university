<template>
  <div>
    <div class="wrap-top"></div>
    <div class="wrap-content">
        群组聊天
    </div>
    
  </div>
</template>
<script>
export default {
  name: "GroupChrat",
};
</script>
<style lang="scss" scoped>
.wrap-top {
  height: 65px;
  -webkit-app-region: drag;
  background-color: $themeColor--2;
}
.wrap-content{
    height: calc(100% - 65px);
    background-color: $themeColor--1;
}
</style>