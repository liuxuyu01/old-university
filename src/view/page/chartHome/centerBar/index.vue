<template>
  <div class="container" ref="container">
    <div class="wrap-top"></div>
    <div class="wrap-search">
      <search-model :centerBarWidth="centerBarWidth" />
    </div>
    <div class="wrap-container">
      <div class="wrap-container-top">
        <svg-icon name="icon-complete"></svg-icon>
        <span>待办：{{ toDoNum }}</span>
      </div>
      <div class="wrap-content" ref="content">
        <person-item
          v-for="(item, index) in dataList"
          :key="index"
          :data="item"
          :centerBarWidth="centerBarWidth"
          @click.native="clickItem(item,index)"
          :active="selected===index"
        />
      </div>
    </div>
  </div>
</template>
<script>
import SearchModel from "@/components/SearchModel";
import headImg from "@/assets/images/head_boy.png";
import PersonItem from "./components/personItem.vue";
export default {
  name: "CenterBar",
  components: {
    SearchModel,
    PersonItem,
  },
  props: {
    centerBarWidth: {
      type: Number,
      dafault: () => 280,
    },
  },
  data() {
    return {
      toDoNum: 0,
      selected: 0,
      dataList: [
        {
          name: "植物大战僵尸学习群",//名字
          src: headImg, // 头像
          message: "今天天气真好啊！",//最新的消息
          time: "13:32",//最后一条消息时间
          isAlarm: true, //是否消息免打扰
          sum: 666, //未读消息数
          isGroup:1,//是否为群组
        },
        {
          name: "植物大战僵尸学习群",
          src: headImg,
          message: "今天天气真好啊！",
          time: "13:32",
          isGroup:0,
        },
        {
          name: "植物大战僵尸学习群",
          src: headImg,
          message: "今天天气真好啊！",
          time: "13:32",
          isGroup:1,
        },
        {
          name: "植物大战僵尸学习群",
          src: headImg,
          message: "今天天气真好啊！",
          time: "13:32",
          isGroup:0,
        },
        {
          name: "植物大战僵尸学习群",
          src: headImg,
          message: "今天天气真好啊！",
          time: "13:32",
          isAlarm: true,
          sum: 99,
          theme: "info",//未读标签主题
          isGroup:1,
        },
        {
          name: "植物大战僵尸学习群",
          src: headImg,
          message: "今天天气真好啊！",
          time: "13:32",
          isAlarm: true,
          sum: 5,
          isGroup:1,
        },
        {
          name: "植物大战僵尸学习群",
          src: headImg,
          message: "今天天气真好啊！",
          time: "13:32",
          isAlarm: true,
          sum: 1,
          isGroup:0,
        },
        {
          name: "植物大战僵尸学习群",
          src: headImg,
          message: "今天天气真好啊！",
          time: "13:32",
          isAlarm: true,
          sum: 8,
          isGroup:1,
        },
        {
          name: "植物大战僵尸学习群",
          src: headImg,
          message: "今天天气真好啊！",
          time: "13:32",
          isGroup:1,
        },
        {
          name: "植物大战僵尸学习群",
          src: headImg,
          message: "今天天气真好啊！",
          time: "13:32",
          isGroup:1,
        },
        {
          name: "植物大战僵尸学习群",
          src: headImg,
          message: "今天天气真好啊！",
          time: "13:32",
          isAlarm: true,
          sum: 12,
          theme: "info",
          isGroup:0,
        },
        {
          name: "植物大战僵尸学习群",
          src: headImg,
          message: "今天天气真好啊！",
          time: "13:32",
          isGroup:1,
        },
      ],
    };
  },
  computed: {},

  methods: {
    clickItem(item,index) {
      this.selected = index;
      this.$emit('clickItem',item)
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  background-color: $themeColor--1;
  .wrap-top {
    height: 30px;
    -webkit-app-region: drag;
  }
  .wrap-search {
    height: 35px;
    padding: 0 10px;
  }
  .wrap-container {
    width: 100%;
    height: calc(100% - 65px);
    overflow: hidden;
    .wrap-container-top {
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
    .wrap-container-top:hover {
      background-color: $color--3;
    }
    .wrap-content {
      overflow: hidden;
      height: calc(100% - 39px);
    }
    .wrap-content:hover {
      overflow-x: hidden;
      overflow-y: auto;
    }
  }
}
</style>  