<template>
  <div class="docker">
    <div
      v-for="(item, index) in list"
      :key="item.icon"
      :class="{
        docker__item: true,
        'docker__item docker__item--active': index === currentIndex,
      }"
    >
      <router-link :to="item.to">
        <span class="iconfont" v-html="item.icon"></span
        ><span class="docker__item__title">{{ item.title }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Docker",
  props:['currentIndex'],
  setup() {
    const list = [
      { title: "首页", icon: "&#xe6e2;", to: { name: "Home" } },
      { title: "购物车", icon: "&#xe6e6;", to: { name: "CartList" } },
      { title: "订单", icon: "&#xe643;", to: { name: "OrderList" } },
      { title: "我的", icon: "&#xe782;", to: { name: "UserAddress" } },
    ];

    return { list };
  },
};
</script>

<style lang="scss" scoped>
@import "./style/mixins.scss";

// 底部选项卡
.docker {
  display: flex;
  box-sizing: border-box;
  position: fixed;
  padding: 0 0.18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 0.01rem solid $content-bgColor;
  background: $bgColor-white;
}
.docker__item {
  flex: 1;
  text-align: center;
  .iconfont {
    display: block;
    margin: 0.07rem 0 0.02rem 0;
    font-size: 0.18rem;
  }
  &__title {
    @include scale05;
  }
  a {
    text-decoration: none;
    color: $content-fontcolor;
    .iconfont{
      color: $blank-fontcolor;
    }
  }
  &--active {
    a {
      color: #1fa4fc;
    .iconfont{
      color: #1fa4fc;
    }
    }
  }
}
</style>
