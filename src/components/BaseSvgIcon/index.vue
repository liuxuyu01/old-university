<template>
  <svg :style="{ color: color || '' }" class="icon" aria-hidden="true">
    <use :xlink:href="svgName"></use>
  </svg>
</template>
<script>
export default {
  name: "SvgIcon",
  props: {
    name: {
      type: String,
      default: () => "",
    },
    color: {
      type: String,
      default: () => "",
    },
  },
  data() {
    return {};
  },
  computed: {
    svgName() {
      return `#${this.name}`;
    },
  },
};
</script>
<style lang="scss" scoped>
/* 阿里云svg多色图标定义 */
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  margin:0 5px;
}
</style>