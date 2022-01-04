<template>
  <div class="container">
    <div class="wrap-top">
      <svg-icon name="icon-complete"></svg-icon>
      <span>待办：{{ toDoNum }}</span>
    </div>
    <div class="wrap-content" ref="content">
      <person-item
        v-for="(item, index) in dataList"
        :key="index"
        :data="item"
        :width="contentWidth"
        @click.native="selected = index"
        :active="selected === index"
      />
    </div>
  </div>
</template>
<script>
import headImg from "@/assets/images/head.png";
import PersonItem from "./personItem";
export default {
  name: "TheCommonMan",
  components: {
    PersonItem,
  },
  props: {
    centerBarWidth: {
      type: Number,
      dafault: () => 200,
    },
  },
  data() {
    return {
      toDoNum: 0,
      selected: 0,
      dataList: [
        {
          name: "植物大战僵尸学习群",
          src: headImg,
          message: "今天天气真好啊！",
          time: "13:32",
          isAlarm: true,
          sum: 666,
        },
        {
          name: "植物大战僵尸学习群",
          src: headImg,
          message: "今天天气真好啊！",
          time: "13:32",
        },
        {
          name: "植物大战僵尸学习群",
          src: headImg,
          message: "今天天气真好啊！",
          time: "13:32",
        },
        {
          name: "植物大战僵尸学习群",
          src: headImg,
          message: "今天天气真好啊！",
          time: "13:32",
        },
        {
          name: "植物大战僵尸学习群",
          src: headImg,
          message: "今天天气真好啊！",
          time: "13:32",
          isAlarm: true,
          sum: 99,
          theme: "info",
        },
        {
          name: "植物大战僵尸学习群",
          src: headImg,
          message: "今天天气真好啊！",
          time: "13:32",
          isAlarm: true,
          sum: 5,
        },
        {
          name: "植物大战僵尸学习群",
          src: headImg,
          message: "今天天气真好啊！",
          time: "13:32",
          isAlarm: true,
          sum: 1,
        },
        {
          name: "植物大战僵尸学习群",
          src: headImg,
          message: "今天天气真好啊！",
          time: "13:32",
          isAlarm: true,
          sum: 8,
        },
        {
          name: "植物大战僵尸学习群",
          src: headImg,
          message: "今天天气真好啊！",
          time: "13:32",
        },
        {
          name: "植物大战僵尸学习群",
          src: headImg,
          message: "今天天气真好啊！",
          time: "13:32",
        },
        {
          name: "植物大战僵尸学习群",
          src: headImg,
          message: "今天天气真好啊！",
          time: "13:32",
          isAlarm: true,
          sum: 12,
          theme: "info",
        },
        {
          name: "植物大战僵尸学习群",
          src: headImg,
          message: "今天天气真好啊！",
          time: "13:32",
        },
      ],
      contentWidth: 0,
    };
  },
  computed: {},
  watch: {
    centerBarWidth: {
      immediate: true,
      handler(val) {
        this.contentWidth = val;
      },
    },
  },
  mounted() {
    //监控窗口变化
    window.onresize = () => {
      this.contentWidth = this.$refs.content.offsetWidth;
    };
  },
};
</script>
<style lang="scss" scoped>
.wrap-top {
  height: 40px;
  padding: 0 10px;
  line-height: 40px;
  border-bottom: 1px #eaeaea solid;
  cursor: pointer;
  white-space: nowrap;
  svg {
    margin: 0 10px 0 0;
  }
}
.wrap-top:hover {
  background-color: $themeColor--2;
}
.wrap-content {
  overflow: hidden;
  height: calc(100% - 39px);
}
.wrap-content:hover {
  overflow-x: hidden;
  overflow-y: auto;
}
</style>