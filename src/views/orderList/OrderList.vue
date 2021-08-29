<template>
  <div class="wrapper">
    <div class="wrapper__hander">我的订单</div>
    <Order v-for="item in data.orderArr" :key="item" :item="item" />
    <Docker :currentIndex="2" />
  </div>
</template>

<script>
import Docker from "../../components/Docker.vue";
import Order from "./OrderShop.vue";
import { reactive } from "@vue/reactivity";
import { get } from "../../util/request";

//
const orderEffect = () => {
  const data = reactive({});
  const getOeder = async () => {
    const result = await get(`/api/order`);
    console.log("返回结果order", result);
    if (result?.errno === 0 && result?.data) {
      // promise forEach item也是索引
      result.data.forEach((order) => {
        let totalNumber = 0;
        let totalPrice = 0;
        order.products.forEach((products) => {
          totalNumber += products.orderSales;
          totalPrice += products.orderSales * products.product.price;
        });
        order.totalPrice = totalPrice.toFixed(2);
        order.totalNumber = totalNumber;
      });
    }
    data.orderArr= result.data;
  };
  getOeder()
  return { data };
};

export default {
  components: { Docker, Order },
  setup() {
    const { data } = orderEffect();
    return { data };
  },
};
</script>

<style lang="scss" scoped>
@import "./style/mixins.scss";

.wrapper {
  @include wrapper;
  &__hander {
    @include hander;
  }
}
</style>