<template>
  <div>
    <router-link :to="item.path">
      <el-submenu :index="itemIndex.toString()">
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{ item.name }}</span>
        </template>
        <el-menu-item
          v-for="(childItem, childIndex) in item.children"
          :key="childIndex"
          :index="'1-' + childIndex.toString()"
        >
          <router-link :to="childItem.path">
            {{ childItem.name }}
          </router-link>
        </el-menu-item>
      </el-submenu>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "MenuItem",
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
    itemIndex: {
      type: Number,
    },
  },
  created() {},
};
</script>