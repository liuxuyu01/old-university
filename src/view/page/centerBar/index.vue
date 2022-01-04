<template>
  <div class="container" ref="container">
    <div class="wrap-top"></div>
    <div class="wrap-search">
      <search-model />
    </div>
    <div class="wrap-container">
      <keep-alive>
        <component :centerBarWidth="centerBarWidth" :is="componentName"></component>
      </keep-alive>
    </div>
  </div>
</template>
<script>
import SearchModel from "@/components/SearchModel";
import CommonMan from "./components/CommonMan.vue";
import LinkMain from "./components/LinkMain.vue";
export default {
  name: "CenterBar",
  components: {
    SearchModel,
    CommonMan,
    LinkMain,
  },
  props: {
    activeIndex: {
      type: Number,
      default: 1,
    },
    centerBarWidth: {
      type: Number,
      dafault: () => 200,
    },
  },
  data() {
    return {};
  },
  computed: {
    componentName() {
      let name = "";
      switch (this.activeIndex) {
        case 0:
          name = "CommonMan";
          break;
        case 1:
          name = "LinkMain";
          break;
      }
      return name;
    },
  },

  methods: {},
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
    padding: 0 15px;
  }
  .wrap-container {
    width: 100%;
    height: calc(100% - 65px);
    overflow: hidden;
    // overflow-y: auto;
  }
}
</style>  