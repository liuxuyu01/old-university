<!--
    整体基础布局
-->
<template>
  <div class="app-wrapper">
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