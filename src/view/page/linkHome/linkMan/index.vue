<template>
  <div class="container">
    <div class="wrap-top"></div>
    <div class="wrap-search">
      <search-model/>
    </div>
    
  </div>
</template>
<script>
import SearchModel from "@/components/SearchModel";

export default {
  name: "LinkHome",
  components: {
    SearchModel,
  },
};
</script>
<style lang="scss" scoped>
.container {
  background-color: $themeColor--1;
  .wrap-top {
    height: 30px;
    -webkit-app-region: drag;
  }
  .wrap-search {
    height: 35px;
    padding: 0 10px;
  }
  .wrap-container {
    width: 100%;
    height: calc(100% - 65px);
    overflow: hidden;
  }
}
</style>