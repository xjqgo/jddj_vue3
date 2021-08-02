<template>
  <div class="docker">
    <div class="docker__item docker__item--active">
      <span class="iconfont">&#xe6e2;</span
      ><span class="docker__item__title">首页</span>
    </div>
    <div class="docker__item">
      <span class="iconfont">&#xe6e6;</span
      ><span class="docker__item__title">购物车</span>
    </div>
    <div class="docker__item">
      <span class="iconfont">&#xe643;</span
      ><span class="docker__item__title">订单</span>
    </div>
    <div class="docker__item">
      <span class="iconfont">&#xe782;</span
      ><span class="docker__item__title">我的</span>
    </div>
  </div>
</template>

<style lang="scss">
.docker {
  display: flex;
  box-sizing: border-box;
  position: absolute;
  padding: 0 0.18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  background: yellow;
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
    display: block;
    // font-size: 20px;
    // transform: scale(.5,.5);
    // transform-origin: center top;
    font-size: 0.2rem;
    transform: scale(0.5);
    transform-origin: top;
  }
  &--active {
    color: #1fa4fc;
  }
}
</style>
