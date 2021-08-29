<template>
  <div class="wrapper">
    <div class="wrapper__hander">
      我的订单
    </div>
    <Shop />
    <Docker :currentIndex="2" />
  </div>
</template>

<script>
import Docker from "../../components/Docker.vue";
import Shop from './OrderShop.vue'
export default {
  components: { Docker,Shop },
};
</script>

<style lang="scss" scoped>
@import "./style/mixins.scss";

.wrapper{
  @include wrapper;
  &__hander {
  @include hander;
  }
}
</style>