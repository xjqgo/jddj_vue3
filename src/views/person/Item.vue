<template>
  <div class="urlbox">
    <router-link to="/userAddress" class="urlbox__item">
      <span class="urlbox__item__icon iconfont i1">&#xe90d;</span>
      <span class="urlbox__item__title">我的钱包</span>
      <span class="urlbox__item__toicon iconfont">&#xe64c;</span>
    </router-link>
    <router-link to="/userAddress"  class="urlbox__item">
      <span class="urlbox__item__icon iconfont i2">&#xe619;</span>
      <span class="urlbox__item__title">我的地址</span>
      <span class="urlbox__item__toicon iconfont">&#xe64c;</span>
    </router-link>
    <router-link to="/userAddress" class="urlbox__item">
      <span class="urlbox__item__icon iconfont i3">&#xe642;</span>
      <span class="urlbox__item__title">客服与帮助</span>
      <span class="urlbox__item__toicon iconfont">&#xe64c;</span>
    </router-link>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style lang="scss" scoped>
@import "./style/mixins.scss";
.urlbox {
  margin: 0.16rem 0.18rem 0;
  padding: .04rem .16rem;
  background: $bgColor-white;
  border-radius: .08rem;
  @include shadow;
  &__item {
    position: relative;
    display: block;
    padding: .12rem 0;
    &__icon {
      @include iconD
    }
    &__icon.i1{
      background: #ED4A47;
    }
    &__icon.i2{
      background: #32C5FF;
    }
    &__icon.i3{
      background: rgba($color: #9013FE, $alpha: .92);
    }
    &__title {
      margin-left: 0.12rem;
      font-size: .14rem;
      color: $blanks-fontcolor;
      line-height: 0.2rem;
    }
    &__toicon {
      position: absolute;
      right: 0;
      transform: rotate(180deg);
    }
  }
}
</style>