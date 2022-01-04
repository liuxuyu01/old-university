<template>
  <div class="slide-wrap flex-between flex-column border-ea" ref="container">
    <div class="slide-wrap-top">
      <div class="wrap-top-top"></div>
      <div class="flex flex-column flex-align-center">
        <router-link to="/">
          <img :src="headSrc" class="sidebar-logo" height="32px" width="32px" />
        </router-link>
        <div
          class="slide-wrap-icons pointer"
          v-for="(item, index) in menuList"
          :key="index"
        >
          <svg-icon
            :name="activeIndex === item.index ? item.icon2 : item.icon1"
            :color="activeIndex === item.index?'#3d87fe':''"
            @click.native="clickItem(item)"
          ></svg-icon>
        </div>
      </div>
    </div>
    <div class="slide-wrap-bottom flex flex-column flex-align-center">
      <svg-icon name="icon-setting"></svg-icon>
      <svg-icon name="icon-menu"></svg-icon>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    activeIndex:{
      type:Number,
      default:1
    }
  },
  data() {
    return {
      headSrc:require('@/assets/images/head.png'),
      menuList: [
        { icon1: "icon-comment", icon2: "icon-comment-filling", index: 0 },
        { icon1: "icon-user", icon2: "icon-user-filling", index: 1 },
        { icon1: "icon-favorite", icon2: "icon-favorite-filling", index: 2 },
      ],
    };
  },
  computed: {
  },

  methods: {
    clickItem(item) {
      if (item.index === this.activeIndex) return;
      this.$emit('update:activeIndex',item.index)
    },
  },
};
</script>
<style lang="scss" scoped>
.slide-wrap {
  -webkit-app-region: drag;
  width: 50px;
  height: 100%;
  background-color: $themeColor--1;
  font-size: $font-22;
  .slide-wrap-top {
    .wrap-top-top {
      height: 30px;
    }
    img {
      border-radius: 5px;
      -webkit-app-region: no-drag;
    }
    .slide-wrap-icons {
      -webkit-app-region: no-drag;
      margin-top: 25px;
      :hover {
        color: #3d87fe;
      }
    }
  }
  .slide-wrap-bottom {
    svg {
      -webkit-app-region: no-drag;
      margin-bottom: 25px;
      cursor: pointer;
    }
  }
}
</style>
