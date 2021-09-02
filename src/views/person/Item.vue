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
.urlbox {
  margin: 0.16rem 0.18rem 0;
  padding: .04rem .16rem;
  background: #ffffff;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  &__item {
    position: relative;
    display: block;
    padding: .12rem 0;
    &__icon {
        background: chocolate;
        color: #fff;
        border-radius: 8px;
        display: inline-block;
        line-height: .22rem;
        text-align: center;
        height: .22rem;
        width: .22rem;
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
      font-size: 14px;
      color: #262626;
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