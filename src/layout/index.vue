<!--
    整体基础布局
-->
<template>
  <div class="app-wrapper flex">
    <slide-menu class="sidebar-container"></slide-menu>
    <div class="main-container">
      <navbar></navbar>
      <tags-view></tags-view>
      <app-main></app-main>
    </div>
  </div>
</template>
<script>
import { AppMain, Navbar, SlideMenu, TagsView } from "./components";
export default {
  name: "layout",
  components: {
    AppMain,
    Navbar,
    SlideMenu,
    TagsView,
  },
  data(){
      return{

      }
  },
  methods:{

  }
};
</script>
<style  scoped lang="scss">
.app-wrapper{
    width: 100%;
    height: 100%; 
    .sidebar-container{
        width: 150px;
        height: 100%;
        background-color: $themeColor--1;
    }
    .main-container{
        width: calc(100% - 150px);
        height: 100%;
    }
 }
 
</style>