<template>
  <div class="wrapper">
    <div class="wrapper__hander">
      <div class="wrapper__hander__back iconfont">&#xe64c;</div>
      <div class="wrapper__hander__title">管理收货地址</div>
      <div class="wrapper__hander__add">新增</div>
    </div>
    <div class="wrapper__address">
      <div class="wrapper__address__title">我的收货地址</div>
      <Info />
    </div>
  </div>
</template>

<script>
import Info from "./infoList.vue";

export default {
  components: { Info },
  setup() {},
};
</script>

<style lang="scss" scoped>
@import "./style/mixins.scss";

.wrapper {
  @include wrapper;
  bottom: 0;
  padding: 0.76rem 0 .3rem;
  &__hander {
    @include hander;
    display: flex;
    justify-content: space-between;
    &__back{
        color: #B6B6B6;
        font-size: .2rem;
        position: relative;
        top: -.03rem;
    }
  }
  &__address {
    &__title {
      margin: 0 0.18rem 0.12rem;
      font-size: 14px;
      color: #333333;
      line-height: .2rem;
    }
  }
}
</style>