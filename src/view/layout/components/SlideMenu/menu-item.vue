<template>
  <div class="menu-item" v-if="!item.meta.slideHidden">
      <el-submenu :index="itemIndex.toString()">
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{ item.meta.title }}</span>
        </template>
        <el-menu-item
          v-for="(childItem, childIndex) in item.children"
          :key="childIndex"
          :index="'1-' + childIndex.toString()">
          <router-link :to="childItem.path">
            {{ childItem.meta.title }}
          </router-link>
        </el-menu-item>
      </el-submenu>
  </div>
</template>
<script>
export default {
  name: "MenuItem",
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    },
    itemIndex: {
      type: Number
    }
  },
  created() {
  },
};
</script>