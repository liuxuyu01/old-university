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
export default {
  name: "ChartContainer",
  components: {
    FriendChart,
    GroupChrat,
  },
  props: {
  },
  data() {
    return {
      activeIndex:0,
    };
  },
  computed: {
    componentName() {
      let name = "";
      switch (this.activeIndex) {
        case 0:
          name = "FriendChart";
          break;
        case 1:
          name = "GroupChrat";
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
  background-color: $color--3;
  
}
</style>
