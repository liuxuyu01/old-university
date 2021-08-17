<template>
  <div class="slidemenu" @click="logbase">
    <logo></logo>
    <el-scrollbar class="scrollbar-wrapper">
      <el-menu :unique-opened="true" mode="vertical">
        <el-submenu  v-for="(item,index) in baseRouter" :key="index" :index="index.toString()">
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{item.name}}</span>
          </template>
                 <el-menu-item v-for="(childItem,childIndex) in item.children" :key="childIndex" :index="'1-'+childIndex.toString()">{{childItem.name}}</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
import Logo from "./logo";
import baseRouter from "@/router/base-router";
export default {
  components: { Logo },
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
