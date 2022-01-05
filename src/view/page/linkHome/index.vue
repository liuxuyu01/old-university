<template>
  <div class="link-home flex">
    <link-man
      class="link-man border-ea"
    />
    <link-container
      class="link-container"
    />
  </div>
</template>
<script>
import LinkContainer from "./linkContainer"
import LinkMan from "./linkMan"

export default {
  name: "LinkHome",
  components: {
    LinkContainer,
    LinkMan,
  },
  props:{
  },
  data() {
    return {
     
    };
  },
  computed: {
   
  },
  mounted() {
    
  },

  methods: {
  },
};
</script>
<style  scoped lang="scss">
.link-home {
  height: 100%;
  .link-man {
    width: 280px;
    height: 100%;
  }
  .chart-container {
    height: 100%;
    width: calc(100% - 332px);
  }
}
</style>