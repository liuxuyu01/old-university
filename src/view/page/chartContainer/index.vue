<template>
  <div class="chart-container">
      <keep-alive>
        <component :is="componentName"></component>
      </keep-alive>
  </div>
</template>
<script>
import FriendChart from "./components/FriendChart.vue";
import GroupChrat from "./components/GroupChrat.vue";
import FriendCard from "./components/FriendCard.vue"
export default {
  name: "ChartContainer",
  components: {
    FriendChart,
    GroupChrat,
    FriendCard
  },
  props: {
    activeIndex: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {};
  },
  computed: {
    componentName() {
      let name = "";
      switch (this.activeIndex) {
        case 0:
          name = "FriendChart";
          break;
        case 1:
          name = "FriendCard";
          break;
      }
      return name;
    },
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.container {
  background-color: $themeColor--2;
  
}
</style>
