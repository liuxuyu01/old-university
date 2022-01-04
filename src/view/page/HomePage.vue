<!--
    整体基础布局
-->
<template>
  <div class="app-wrapper flex" :class="{ resize: inRemove }">
    <slide-menu ref="slideMenu" :activeIndex.sync="activeIndex" />
    <center-bar
      class="center-bar"
      ref="centerBar"
      :style="{ width: `${centerBarWidth}px` }"
      :activeIndex="activeIndex"
      :centerBarWidth="centerBarWidth"
    />
    <div class="pull-box" ref="pullBox"></div>
    <chart-container
      class="chart-container"
      ref="chartContainer"
      :style="{ width: `${chartContainerWidth}px` }"
      :activeIndex="activeIndex"
    />
  </div>
</template>
<script>
import { ChartContainer, CenterBar, SlideMenu } from "./index";
export default {
  name: "layout",
  components: {
    ChartContainer,
    CenterBar,
    SlideMenu,
  },
  data() {
    return {
      activeIndex: 0,
      centerBarWidth: 200, //中间初始宽度
      inRemove: false, //是否正在移动
    };
  },
  computed: {
    //窗口宽度
    windowWidth() {
      return document.body.clientWidth;
    },
    //左侧菜单宽度
    slideMenuWidth() {
      // console.log(this.$refs.slideMenu.$refs.container.offsetWidth);
      // return this.$refs.slideMenu.$refs.container.offsetWidth;
      return 51;
    },
    //右侧自适应宽度
    chartContainerWidth() {
      return this.windowWidth - this.centerBarWidth - this.slideMenuWidth - 1;
    },
  },
  mounted() {
    this.onChangeLayout();
  },

  methods: {
    //布局拉伸事件
    onChangeLayout() {
      this.$refs.pullBox.onmousedown = () => {
        window.onmousemove = (en) => {
          this.inRemove = true;
          if (en.clientX < 531 && en.clientX > 121) {
            this.centerBarWidth = en.clientX - this.slideMenuWidth;
          }
        };
        window.onmouseup = () => {
          window.onmousemove = null;
          this.inRemove = false;
        };
      };
    },
  },
};
</script>
<style  scoped lang="scss">
.app-wrapper {
  width: 100%;
  height: 100%;
  .center-bar {
    height: 100%;
  }
  .pull-box {
    width: 1px;
    background-color: #eaeaea;
    cursor: e-resize;
  }
  .chart-container {
    height: 100%;
  }
}
.resize {
  cursor: e-resize;
}
</style>