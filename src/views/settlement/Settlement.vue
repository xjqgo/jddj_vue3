<template>
  <div class="wrapper">
    <div class="top">
      <div class="top__hander">
        <div @click="toBack" class="iconfont top__hander__back">&#xe64c;</div>
        确认订单
      </div>
      <div class="top__receiver">
        <div class="top__receiver__title">收货地址</div>
        <div class="top__receiver__address">
          北京理工大学国防科技园2号楼10层
        </div>
        <div class="top__receiver__info">
          <span class="top__receiver__info__name">瑶妹（女士）</span>
          <span class="top__receiver__info__name">18911024266</span>
        </div>
        <div class="iconfont top__receiver__icon">&#xe64c;</div>
      </div>
    </div>
    <Shop v-for="item in cartList" :key="item" :item="item" />
    <div class="settlement">
      <div class="settlement__total">
        <span class="settlement__total__title">付款金额</span>
        <span class="settlement__total__price"> ￥{{ total }}</span>
      </div>
      <div class="settlement__btn">提交订单</div>
    </div>
  </div>
</template>

<script>
import Shop from "../cartList/Shop.vue";
import { useCartEffect } from "../shop/useCartEffect";
import { useRoute } from "vue-router";
import { computed } from "@vue/runtime-core";
import {publicEffect} from '../../util/publicEffect'

export default {
  components: { Shop },
  setup() {
    const {toBack} = publicEffect();
    let { cartList } = useCartEffect();
    const route = useRoute();
    cartList = {info:cartList[route.params.id]};
    const total = computed(() => {
      let price=0
      for (const key in cartList.info.productList) {
          const element = cartList.info.productList[key];
          price+=element.count * element.price
      }
      return price.toFixed(2);
    });

    return { cartList, toBack, total };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  background: #f8f8f8;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0.5rem;
  padding-top:1.9rem ;
  padding-bottom: .3rem;
  overflow-y: auto;
}
.top {
  height: 1.7rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 11;
  background: #f8f8f8;
  background-size: 100% 1.59rem;
  background-image: linear-gradient(0deg, rgba(0, 145, 255, 0) 4%, #0091ff 50%);
  background-repeat: no-repeat;
  padding: 0.26rem 0.18rem 0 0.18rem;
  &__hander {
    font-size: 0.16rem;
    text-align: center;
    color: #ffffff;
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
    background: #ffffff;
    &__title {
      font-size: 0.16rem;
      font-weight: 700;
      line-height: 0.22rem;
    }
    &__address {
      margin: 0.14rem 0 0.06rem;
      font-size: 0.14rem;
      line-height: 0.2rem;
      color: #333;
    }
    &__info {
      line-height: 0.17rem;
      color: #666;
    }
    &__icon {
      transform: rotate(180deg);
      position: absolute;
      right: 0.16rem;
      top: 0.5rem;
      font-size: 0.16rem;
    }
  }
}

.settlement {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  line-height: 0.5rem;
  background: #ffffff;
  &__total {
    margin-left: 0.24rem;
    font-size: 0.14rem;
    color: #333;
    &__price {
      font-size: 0.16rem;
      color: #151515;
      font-weight: 600;
    }
  }
  &__btn {
    width: 0.98rem;
    text-align: center;
    color: #fff;
    font-size: 0.14rem;
    background: #4fb0f9;
  }
}
</style>