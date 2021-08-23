<template>
  <div class="wrapper">
    <div class="wrapper__hander">我的全部购物车（2）</div>
    <Shop />
  </div>
</template>

<script>
import Shop from "./Shop.vue";

export default {
  components: { Shop },
  setup() {},
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f8f8f8;
  &__hander {
    font-size: 0.16rem;
    text-align: center;
    padding: 0.11rem;
    padding-top: 0.31rem;
    background: #fff;
  }
}
</style>