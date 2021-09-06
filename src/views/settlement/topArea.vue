<template>
  <div class="top">
    <div class="top__hander">
      <div @click="toBack" class="iconfont top__hander__back">&#xe64c;</div>
      确认订单
    </div>
    <div class="top__receiver">
      <div class="top__receiver__title">收货地址</div>
      <div class="top__receiver__address">{{addressInfo.address}}</div>
      <div class="top__receiver__info">
        <span class="top__receiver__info__name">{{addressInfo.name}}</span>
        <span class="top__receiver__info__phone">{{addressInfo.phone}}</span>
      </div>
      <div class="iconfont top__receiver__icon"><router-link :to="{path:`/userAddress`,query:{orderid:$route.params.id}}">&#xe64c;</router-link></div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { publicEffect } from "../../effects/publicEffect";
import { useRoute } from 'vue-router';
export default {
  setup() {
    const { toBack } = publicEffect();
    const route = useRoute();
    const addressInfo = ref({
          name: '瑶妹',
          phone: '18911024266',
          address: '北京理工大学国防科技园2号楼10层北京理工大学国防科技园2号楼10层北京理工大学国防科技园2号楼10层',
        });
    if(route.params.address)addressInfo.value=route.params    
    return { toBack,addressInfo };
  },
};
</script>

<style lang="scss" scoped>
@import "./style/mixins.scss";
.top {
  height: 1.7rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 11;
  background: $bgColor;
  @include bgGradientDown;
  padding: 0.26rem 0.18rem 0 0.18rem;
  &__hander {
    font-size: 0.16rem;
    text-align: center;
    color: $textColor-white;
    line-height: 0.22rem;
    &__back {
      position: absolute;
      font-weight: 1000;
    }
  }
  &__receiver {
    position: relative;
    margin-top: 0.22rem;
    padding: 0.16rem;
    background: $bgColor-white;
    &__title {
      font-size: 0.16rem;
      font-weight: 700;
      line-height: 0.22rem;
    }
    &__address {
      margin: 0.14rem 0 0.06rem;
      font-size: 0.14rem;
      line-height: 0.2rem;
      color: $content-fontcolor;
      padding-right: .2rem;
      @include lines(2)
    }
    &__info {
      line-height: 0.17rem;
      color: $mediun-fontcolor;
      &__phone{
        margin-left: .06rem;
      }
    }
    &__icon {
      position: absolute;
      right: 0.16rem;
      top: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      transform: rotate(180deg);
      font-size: 0.16rem;
      a{
      text-decoration: none;
      }
    }
  }
}
</style>