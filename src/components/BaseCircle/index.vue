
<template>
  <div class="circle" :class="{ over99: over99 }" :style="themeType">
    {{ sum > 99 ? "99+" : sum }}
  </div>
</template>
<script>
export default {
  props: {
    sum: {
      type: Number,
      require: true,
      default: () => 0,
    },
    theme: {
      type: String,
      default: () => "alarm",
    },
  },
  data() {
    return {
      // 以后可以再添加各种类型
      alarmTheme: {
        color: "#fff",
        "background-color": "#f74c31",
      },
      infoTheme: {
        color: "#fff",
        "background-color": "#d0cfd1",
      },
    };
  },
  computed: {
    themeType() {
      let type = {};
      switch (this.theme) {
        case "alarm":
          type = this.alarmTheme;
          break;
        case "info":
          type = this.infoTheme;
      }
      return type;
    },
    over99() {
      if (this.sum > 99) {
        return true;
      }
      return false;
    },
  },
};
</script>
<style lang="scss" scoped>
.circle {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  font-size: $font-12;
  line-height: 18px;
  text-align: center;
}
.over99 {
  width: 28px !important;
  border-radius: 8px !important;
}
</style>