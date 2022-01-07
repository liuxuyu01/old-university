<template>
  <div class="container">
    <keep-alive>
      <component :userData="activeItem" :is="componentName"></component>
    </keep-alive>
  </div>
</template>
<script>
import FriendChart from "./components/FriendChart.vue";
import GroupChrat from "./components/GroupChrat.vue";
import Empty from "@/components/emptyBox";
export default {
  name: "ChartContainer",
  components: {
    FriendChart,
    GroupChrat,
    Empty,
  },
  props: {
    activeItem: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      activeIndex: 0,
    };
  },
  computed: {
    componentName() {
      console.log("点击人员数据：", this.activeItem);
      if (!this.activeItem) return "Empty";
      let name = "";
      switch (this.activeItem.isGroup) {
        case 0:
          name = "FriendChart";
          break;
        case 1:
          name = "GroupChrat";
          break;

        default:
          name = "Empty";
      }
      return name;
    },
  },

  methods: {},
};
</script>
<style lang="scss" scoped>
.container {
  background-color: $color--3;
}
</style>
