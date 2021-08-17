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
 <style scoped>
 .app-wrapper{
    position: relative;
    display: flex;
     width: 100%;
     height: 100vh; 
 }
 .sidebar-container{
     width: 250px;
     height: 100%;
     background-color: #ccc;
 }
 .main-container{
     width: 100%;
     height: 100%;
     background-color: #ffa;
 }
</style>