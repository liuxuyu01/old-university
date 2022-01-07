<template>
  <div v-if="!bubbleData.isMe" class="wrap-left flex-start">
    <img
      class="img-radius"
      :src="bubbleData.src === 'boy' ? boyImg : girlImg"
      width="30px"
      height="30px"
    />
    <div>
      <div class="wrap-left-name">{{ bubbleData.name }}</div>
      <div class="content-left" :style="defaultTheme[0]">
        {{ bubbleData.content }}
      </div>
    </div>
  </div>
  <div v-else class="wrap-right flex-end">
    <div>
      <div class="wrap-right-name flex-end">{{ bubbleData.name }}</div>
      <div class="content-right" :style="defaultTheme[1]">
        {{ bubbleData.content }}
      </div>
    </div>

    <img
      class="img-radius"
      :src="bubbleData.src === 'boy' ? boyImg : girlImg"
      width="30px"
      height="30px"
    />
  </div>
</template>
<script>
export default {
  name: "BaseBubble",
  components: {},
  props: {
    bubbleData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      boyImg: require("@/assets/images/head_boy.png"),
      girlImg: require("@/assets/images/head_girl.png"),
      defaultTheme: [
        {
          "background-color": "#fff",
          color: "#000",
        },
        {
          "background-color": "#1e6eff",
          color: "#fff",
        },
      ],
    };
  },
  computed: {},
};
</script>
<style lang="scss" scoped>
.wrap-left,
.wrap-right {
  margin: 10px 0;
}

.content-left,
.content-right {
  display: inline-block;
  max-width: 715px;
  padding: 10px;
  font-size: $font-16;
  border-radius: 10px;
  word-break: break-all;
}
.content-left {
  margin-left: 15px;
}
.wrap-left-name {
  color: $color--2;
  margin-bottom: 5px;
  margin-left: 20px;
}
.wrap-right-name {
  color: $color--2;
   margin-bottom: 5px;
  margin-right: 20px;
}
.content-right {
  margin-right: 15px;
}
</style>