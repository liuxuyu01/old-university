<template>
  <div id="app">
    <div id="window-top"><span>来不及命名的一个项目</span> </div>
    <div id="window-content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    data() {
      return {};
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
#window-top {
  width: 100%;
  height: 30px;
  background-color: #f0f0f0;
  -webkit-app-region: drag;
  span{
    padding-left: 20px;
    line-height: 30px;
    font-size: 14px;
  }
}
#window-content {
  position: relative;
  height: calc(100% - 30px);
  width: 100%;
  -webkit-app-region: no-drag;
  overflow: hidden;
}
</style>
