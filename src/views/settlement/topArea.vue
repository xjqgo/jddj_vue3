<template>
  <div class="top">
    <div class="top__hander">
      <div @click="toBack" class="iconfont top__hander__back">&#xe64c;</div>
      确认订单
    </div>
    <div class="top__receiver">
      <div class="top__receiver__title">收货地址</div>
      <div class="top__receiver__address">北京理工大学国防科技园2号楼10层</div>
      <div class="top__receiver__info">
        <span class="top__receiver__info__name">瑶妹（女士）</span>
        <span class="top__receiver__info__name">18911024266</span>
      </div>
      <div class="iconfont top__receiver__icon"><router-link to="/userAddress">&#xe64c;</router-link></div>
    </div>
  </div>
</template>

<script>
import { publicEffect } from "../../effects/publicEffect";
export default {
  setup() {
    const { toBack } = publicEffect();

    return { toBack };
  },
};
</script>

<style lang="scss" scoped>
@import "./style/vrirables.scss";
.top {
  height: 1.7rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 11;
  background: $bgColor;
  background-size: 100% 1.59rem;
  background-image: linear-gradient(0deg, rgba(0, 145, 255, 0) 4%, $bgColor-lightBlue 50%);
  background-repeat: no-repeat;
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
    }
    &__info {
      line-height: 0.17rem;
      color: $mediun-fontcolor;
    }
    &__icon {
      transform: rotate(180deg);
      position: absolute;
      right: 0.16rem;
      top: 0.5rem;
      font-size: 0.16rem;
      a{
      text-decoration: none;
      }
    }
  }
}
</style>