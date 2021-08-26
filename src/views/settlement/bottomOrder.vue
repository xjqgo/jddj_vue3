<template>
    <div class="settlement">
      <div class="settlement__total">
        <span class="settlement__total__title">付款金额</span>
        <span class="settlement__total__price"> ￥{{ total }}</span>
      </div>
      <div class="settlement__btn">提交订单</div>
    </div>
</template>

<script>
import { useCartEffect } from "../shop/useCartEffect";
import { useRoute } from "vue-router";
import { computed } from "@vue/runtime-core";
export default {
    setup(){
    let { cartList } = useCartEffect();
    const route = useRoute();
    cartList = { info: cartList[route.params.id] };
    const total = computed(() => {
      let price = 0;
      for (const key in cartList.info.productList) {
        const element = cartList.info.productList[key];
        price += element.count * element.price;
      }
      return price.toFixed(2);
    });

    return { cartList, total };
    }
}
</script>

<style lang="scss" scoped>
@import "./style/vrirables.scss";
.settlement {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  line-height: 0.5rem;
  background: $textColor-white;
  &__total {
    margin-left: 0.24rem;
    font-size: 0.14rem;
    color: $content-fontcolor;
    &__price {
      font-size: 0.16rem;
      font-weight: 600;
    }
  }
  &__btn {
    width: 0.98rem;
    text-align: center;
    color: $textColor-white;
    font-size: 0.14rem;
    background: rgba($color: $bgColor-lightBlue, $alpha: 0.7);
  }
}

</style>