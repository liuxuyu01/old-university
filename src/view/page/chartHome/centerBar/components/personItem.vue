<template>
  <div
    class="person-item flex select"
    :class="{ active: active }"
    :style="{ width: contentWidth }"
  >
    <div class="wrap-left">
      <img :src="data.src" width="40px" height="40px" />
      <base-circle
        class="head-icon"
        v-show="centerBarWidth < 80 && data.sum > 0"
        :sum="data.sum"
        :theme="data.theme"
      />
    </div>
    <div class="wrap-right">
      <div class="wrap-r-top flex-between">
        <div class="wrap-name">
          {{ data.name }}
        </div>
        <div class="wrap-time">
          <data class="time">
            {{ data.time }}
          </data>
        </div>
      </div>
      <div class="wrap-r-bottom flex-between">
        <div class="wrap-message">
          {{ data.message }}
        </div>
        <div v-if="data.isAlarm" class="wrap-alarm">
          <base-circle
            v-show="centerBarWidth >= 80 && data.sum > 0"
            :sum="data.sum"
            :theme="data.theme"
          />
        </div>
        <div v-else class="wrap-alarm">
          <svg-icon name="icon-stop"></svg-icon>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BaseCircle from "@/components/BaseCircle";
export default {
  name: "PersonItem",
  components: {
    BaseCircle,
  },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    centerBarWidth: {
      type: Number,
      default: () => 0,
    },
    active: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {};
  },
  computed: {
    //这个属性是防止滚动条排挤布局
    contentWidth() {
      return `${this.centerBarWidth - 20}px`;
    },
  },
  //   mounted() {
  //   },
};
</script>
<style lang="scss" scoped>
.person-item {
  font-size: $font-13;
  height: 45px;
  padding: 10px;
  .wrap-left {
    position: relative;
    img {
      border-radius: 5px;
    }
    .head-icon {
      position: absolute;
      right: 0;
      top: 0;
    }
  }

  .wrap-right {
    padding-left: 10px;
    width: calc(100% - 60px);
    white-space: nowrap;
    .wrap-r-top {
      margin-bottom: 5px;
      position: relative;
      .wrap-name {
        width: calc(100% - 65px);
        font-weight: 600;
        overflow: hidden;
      }
      .wrap-time {
        padding-left: 20px;
        font-size: $font-12;
        color: $color--2;
      }
    }
    .wrap-r-bottom {
      color: $color--2;
      .wrap-message {
        width: calc(100% - 45px);
        font-size: $font-12;
        overflow: hidden;
      }
      .wrap-alarm {
        padding-left: 20px;
        // opacity: 0.1;
      }
    }
  }
}
.person-item:hover {
  background-color: $color--3;
}
.active {
  background-color: $color--3;
}
</style>