<template>
  <div class="container" ref="container">
    <div class="wrap-top"></div>
    <div class="wrap-search">
      <search-model :centerBarWidth="centerBarWidth" />
    </div>
    <div class="wrap-container">
      <common-man :centerBarWidth="centerBarWidth"/>
    </div>
  </div>
</template>
<script>
import SearchModel from "@/components/SearchModel";
import CommonMan from "./components/CommonMan.vue";
export default {
  name: "CenterBar",
  components: {
    SearchModel,
    CommonMan,
  },
  props: {
    centerBarWidth: {
      type: Number,
      dafault: () => 200,
    },
  },
  data() {
    return {};
  },
  computed: {
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
    padding: 0 10px;
  }
  .wrap-container {
    width: 100%;
    height: calc(100% - 65px);
    overflow: hidden;
  }
}
</style>  