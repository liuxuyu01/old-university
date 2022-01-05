<!--
    整体基础布局
-->
<template>
  <div class="app-wrapper flex">
    <slide-menu :activeIndex.sync="activeIndex" />
    <div class="right-container">
      <keep-alive>
        <component :is="componentName"></component>
      </keep-alive>
    </div>
  </div>
</template>
<script>
import ChartHome from "./chartHome";
import LinkHome from "./linkHome";
import SlideMenu from "./slideMenu";

export default {
  name: "layout",
  components: {
    ChartHome,
    SlideMenu,
    LinkHome,
  },
  data() {
    return {
      activeIndex: 0,
    };
  },
  computed: {
    componentName() {
      let name;
      switch (this.activeIndex) {
        case 0:
          name = "ChartHome";
          break;
        case 1:
          name = "LinkHome";
          break;
      }
      return name;
    },
  },
  mounted() {},

  methods: {},
};
</script>
<style  scoped lang="scss">
.app-wrapper {
  width: 100%;
  height: 100%;
  .right-container {
    width: calc(100% - 51px);
  }
}
</style>