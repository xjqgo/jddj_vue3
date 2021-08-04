<template>
<!-- 提交测试 -->
  <div class="wrapper">
    <div class="position">
      <span class="iconfont position__icon">&#xe60e;</span>
      北京理工大学国防科技园2号楼10层北京理工大学国防科技园2号楼10层
      <span class="iconfont position__notive">&#xe628;</span>
    </div>
    <div class="search">
      <span class="iconfont search__icon">&#xe60c;</span>
      山姆会员商店优惠商品
    </div>
    <div class="banner">
      <img class="banner__img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg" />
    </div>
  </div>
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
@import "./style/vrirables.scss";
@import "./style/mixins.scss";
.wrapper {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0.5rem;
  padding: 0 0.18rem;
}
// 顶部内容
.position {
  position: relative;
  padding: 0.16rem 0.24rem 0.16rem 0;
  line-height: 0.22rem;
  font-size: 0.16rem;
  color: $content-fontcolor;
  @include ellipsis;
  .position__icon {
    position: relative;
    top: 0.02rem;
    font-size: 0.2rem;
  }
  .position__notive {
    position: absolute;
    top: 0.17rem;
    right: 0;
    font-size: 0.2rem;
  }
}

.search {
  line-height: 0.32rem;
  background: #f5f5f5;
  border-radius: 16px;
  color: #b7b7b7;
  font-size: 0.14rem;
  &__icon {
    padding: 0 0.05rem 0 0.16rem;
  }
}
.banner{
  // 图片防抖动
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;
  &__img{
    width: 100%;
  }
}
// 底部选项卡
.docker {
  display: flex;
  box-sizing: border-box;
  position: absolute;
  padding: 0 0.18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  color: $content-fontcolor;
  background: #ffffff;
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
    font-size: 0.2rem;
    // transform: scale(.5,.5);
    // transform-origin: center top;
    transform: scale(0.5);
    transform-origin: top;
  }
  &--active {
    color: #1fa4fc;
  }
}
</style>
