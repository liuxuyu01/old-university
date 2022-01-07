<template>
  <div class="container">
    <div class="wrap-top drag">
      <div class="wrap-top-div flex-between">
        <div class="wrap-top-name no-drag">{{ userData.name }}</div>
        <div class="wrap-top-right">
          <span
            class="no-drag"
            v-for="(item, index) in functionList"
            :key="index"
          >
            <svg-icon :name="item.icon"></svg-icon>
          </span>
        </div>
      </div>
    </div>
    <div class="wrap-content">
      <base-bubble
        v-for="(item, index) in messageData"
        :key="index"
        :bubbleData="item"
      />
    </div>
  </div>
</template>
<script>
import BaseBubble from "@/components/BaseBubble";
export default {
  name: "FriendChart",
  components: {
    BaseBubble,
  },
  props: {
    userData: {
      type: Object,
      require: true,
      default: () => {},
    },
  },
  data() {
    return {
      functionList: [
        { icon: "icon-data-view" },
        { icon: "icon-film" },
        { icon: "icon-modular" },
      ],
      messageData: [
        {
          src: "boy",
          name:'猪',
          content: "我顶",
          createdTime: "13:11:15",
          isMe: 0,
        },
         {
          src: "boy",
          name:'猪',
          content: "我顶",
          createdTime: "13:11:15",
          isMe: 0,
        },
        {
          src: "girl",
          name:'猴',
          content: "真的吗？",
          createdTime: "13:11:59",
          isMe: 1,
        },
        {
          src: "boy",
          name:'猪',
          content: "我顶",
          createdTime: "13:11:15",
          isMe: 0,
        },
        {
          src: "girl",
          name:'猴',
          content: "真的吗？",
          createdTime: "13:11:59",
          isMe: 1,
        },
        {
          src: "boy",
          name:'猪',
          content: "我顶",
          createdTime: "13:11:15",
          isMe: 0,
        },
        {
          src: "girl",
          name:'猴',
          content: "真的吗？",
          createdTime: "13:11:59",
          isMe: 1,
        },
        {
          src: "boy",
          name:'猪',
          content: "我顶",
          createdTime: "13:11:15",
          isMe: 0,
        },
        {
          src: "girl",
          name:'猴',
          content: "真的吗？",
          createdTime: "13:11:59",
          isMe: 1,
        },
        {
          src: "boy",
          name:'猪',
          content: "我顶",
          createdTime: "13:11:15",
          isMe: 0,
        },
        {
          src: "girl",
          name:'猴',
          content: "真的吗？",
          createdTime: "13:11:59",
          isMe: 1,
        },
        {
          src: "boy",
          name:'猪',
          content: "我顶",
          createdTime: "13:11:15",
          isMe: 0,
        },
        {
          src: "girl",
          name:'猴',
          content: "真的2222222222222222222222吗？",
          createdTime: "13:11:59",
          isMe: 1,
        },
        {
          src: "boy",
          name:'猪',
          content: "我eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee顶",
          createdTime: "13:11:15",
          isMe: 0,
        },
        {
          src: "girl",
          name:'猴',
          content: "真的吗？",
          createdTime: "13:11:59",
          isMe: 1,
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.wrap-top {
  height: 65px;
  border-bottom: 1px #eaeaea solid;
  .wrap-top-div {
    padding: 35px 15px 0 15px;
    font-size: $font-18;
    .wrap-top-right {
      span {
        margin: 0 5px;
        :hover {
          color: $color--1;
        }
      }
    }
  }
}
.wrap-content {
  height: calc(100% - 66px);
  padding: 0 10px;
  user-select: auto;
  -webkit-user-select: auto;
  overflow: auto;
}
</style>