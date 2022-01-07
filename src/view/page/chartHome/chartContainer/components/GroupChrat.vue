<template>
  <div class="container">
    <div class="wrap-top drag">
      <div class="wrap-top-div flex-between">
        <div class="wrap-top-name no-drag">喜好</div>
        <div class="wrap-top-right">
          <span
            class="no-drag"
            v-for="(item, index) in functionList"
            :key="index"
          >
            <svg-icon :name="item.icon"></svg-icon>
          </span>
        </div>
      </div>
    </div>
    <div class="wrap-content">群组聊天</div>
  </div>
</template>
<script>
export default {
  name: "GroupChart",
  props: {
    userData: {
      type: Object,
      require: true,
      default: () => {},
    },
  },
  data() {
    return {
      functionList: [
        {icon:'icon-file-open'},
        {icon:'icon-file'},
        {icon:'icon-work'},
        {icon:'icon-picture'},
        { icon: "icon-data-view" },
        { icon: "icon-film" },
        { icon: "icon-modular" },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.wrap-top {
  height: 65px;
  background-color: $color--3;
  .wrap-top-div {
    padding: 35px 15px 0 15px;
    font-size: $font-18;
    .wrap-top-right {
      span{
        margin: 0 5px;
        :hover{
          color: $color--1;
        }
      }
    }
  }
}
.wrap-content {
  height: calc(100% - 65px);
  background-color: $themeColor--1;
}
</style>