<template>
  <div class="chart-home flex" :class="{ resize: inRemove }">
    <center-bar
      class="center-bar"
      ref="centerBar"
      :style="{ width: `${centerBarWidth}px` }"
      :centerBarWidth="centerBarWidth"
    />
    <div class="pull-box" ref="pullBox"></div>
    <chart-container
      class="chart-container"
      ref="chartContainer"
      :style="{ width: `${chartContainerWidth}px` }"
    />
  </div>
</template>
<script>
import ChartContainer from "./chartContainer";
import CenterBar from "./centerBar";

export default {
  name: "ChartHome",
  components: {
    ChartContainer,
    CenterBar,
  },
  props: {},
  data() {
    return {
      windowWidth: 0, //窗口宽度
      centerBarWidth: 280, //中间初始宽度
      slideMenuWidth: 51,
      inRemove: false, //是否正在移动
    };
  },
  computed: {
    //右侧自适应宽度
    chartContainerWidth() {
      return this.windowWidth - this.centerBarWidth - this.slideMenuWidth - 1;
    },
  },
  mounted() {
    this.windowWidth = document.body.clientWidth;
    this.onChangeLayout();
    //避免出现松开依旧拉伸的情况
    window.onmouseup = () => {
      window.onmousemove = null;
      this.inRemove = false;
    };
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
      //监控窗口变化
      window.onresize = () => {
        this.windowWidth = document.body.clientWidth;
      };
    },
  },
};
</script>
<style  scoped lang="scss">
.chart-home {
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