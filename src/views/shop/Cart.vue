<template>
  <div class="cart">
    <div>
      <img src="	http://www.dell-lee.com/imgs/vue3/basket.png" />
      <span>购物车是空的</span>
    </div>
    <div class="cart__jiesuan">去结算</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.cart {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0.49rem;
  border-top: 0.01rem solid #f1f1f1;
  img{
      width: 0.28rem;
      height: 0.26rem;
      margin: 0 0.32rem 0 0.24rem;
  }
  span{
      position: relative;
      top: -0.07rem;
  }
  .cart__jiesuan{
      width: 0.98rem;
      line-height: 0.49rem;
      background: #4FB0F9;
      color: white;
      text-align: center;
      font-size: 0.14rem;
  }
}
</style>