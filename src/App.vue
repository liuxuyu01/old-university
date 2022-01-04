<template>
  <div id="app">
      <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
   title(){
     return this.$store.state.app.title
   }
  },
   data() {
      return {};
    },
};
</script>

<style lang="scss" scoped>
#app {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
