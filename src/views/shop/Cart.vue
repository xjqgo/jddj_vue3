<template>
  <div class="cart">
    <div>
      <img src="http://www.dell-lee.com/imgs/vue3/basket.png" />
      <div class="cart__icon">{{ total }}</div>
      <!-- <span class="cart__text">购物车是空的</span> -->
      <span class="cart__text">合计：</span>
      <span class="cart__price">￥{{ price }}</span>
    </div>
    <div class="cart__jiesuan">去结算</div>
  </div>
</template>

<script>
import { toRefs } from "@vue/reactivity";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { computed } from "@vue/runtime-core";

const useCartEffect = () => {
  const route = useRoute();
  const store = useStore();
  const shopId = route.params.id;
  const { cartList } = toRefs(store.state);

  const total = computed(() => {
    let count = 0;
    const productList = cartList.value[shopId];
    for (const key in productList) {
      if (Object.hasOwnProperty.call(productList, key)) {
        count += productList[key].count;
      }
    }
    return count;
  });
  
  const price = computed(() => {
    let count = 0;
    const productList = cartList.value[shopId];
    for (const key in productList) {
      if (Object.hasOwnProperty.call(productList, key)) {
        count += productList[key].count * productList[key].price;
      }
    }
    return count.toFixed(2);
  });

  return { total, price };
};

export default {
  name: "Cart",
  setup() {
    const { total, price } = useCartEffect();
    return { total, price };
  },
};
</script>

<style lang="scss" scoped>
@import "./style/vrirables.scss";
.cart {
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0.49rem;
  border-top: 0.01rem solid #f1f1f1;
  img {
    width: 0.28rem;
    height: 0.26rem;
    margin: 0 0.32rem 0 0.24rem;
  }
  &__icon {
    position: absolute;
    min-width: 0.2rem;
    height: 0.2rem;
    padding: 0 0.04rem;
    border-radius: 50%;
    background: $textColor-lightRed;
    top: 0.02rem;
    left: 0.45rem;
    color: $textColor-white;
    font-size: 0.16rem;
    text-align: center;
    transform: scale(0.5);
    transform-origin: left center;
  }
  &__text {
    position: relative;
    top: -0.07rem;
  }
  &__price {
    font-size: 0.18rem;
    color: $textColor-lightRed;
    position: relative;
    top: -0.05rem;
  }
  &__jiesuan {
    width: 0.98rem;
    line-height: 0.49rem;
    background: #4fb0f9;
    color: $textColor-white;
    text-align: center;
    font-size: 0.14rem;
  }
}
</style>