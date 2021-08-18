<template>
  <div class="slidemenu" @click="logbase">
    <logo></logo>
    
    <el-scrollbar class="scrollbar-wrapper">
      <el-menu :unique-opened="true" mode="vertical">
        <menu-item 
        v-for="(route,index) in baseRouter"
        :key="index"
        :item="route"
        :itemIndex="index"></menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
import Logo from "./logo";
import MenuItem from './menu-item'
import baseRouter from "@/router/base-router";
export default {
  components: { Logo,MenuItem },
  created() {
    console.log(baseRouter);
  },
  methods: {
    logbase() {},
  },
  computed: {
    baseRouter() {
      return baseRouter;
    },
  },
};
</script>
