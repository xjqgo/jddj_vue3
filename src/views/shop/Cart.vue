<template>
  <div class="cart">
    <div>
      <img src="http://www.dell-lee.com/imgs/vue3/basket.png" />
      <div class="cart__icon">1</div>
      <!-- <span class="cart__text">购物车是空的</span> -->
      <span class="cart__text">合计：</span>
      <span class="cart__price">￥128</span>
    </div>
    <div class="cart__jiesuan">去结算</div>
  </div>
</template>

<script>
export default {};
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
  img{
      width: 0.28rem;
      height: 0.26rem;
      margin: 0 0.32rem 0 0.24rem;
  }
  &__icon{
      position: absolute;
      width: .2rem;
      height: .2rem;
      border-radius: 50%;
      background: $textColor-lightRed;
      top: .02rem;
      left: .4rem;
      color: $textColor-white;
      font-size: .16rem;
      text-align: center;
      transform: scale(.5);
  }
  &__text{
      position: relative;
      top: -0.07rem;
  }
  &__price{
      font-size: .18rem;
      color: $textColor-lightRed;
      position: relative;
      top: -0.05rem;
  }
  &__jiesuan{
      width: 0.98rem;
      line-height: 0.49rem;
      background: #4FB0F9;
      color: $textColor-white;
      text-align: center;
      font-size: 0.14rem;
  }
}
</style>