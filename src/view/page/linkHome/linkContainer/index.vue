<template>
  <div class="container friend-card flex-center">
    <person-card />
  </div>
</template>
<script>
import PersonCard from "@/components/PersonCard";
export default {
  name: "FriendChart",
  components: {
    PersonCard,
  },
};
</script>
<style lang="scss" scoped>
.friend-card {
  -webkit-app-region: drag;
  background-color: $color--3;
}
</style>