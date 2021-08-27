<template>
  <div class="wrapper">
    <div class="mask" v-show="1">
      <div class="msgbox">
        <div class="msgbox__title">确认要离开收银台？</div>
        <div class="msgbox__text">请尽快完成支付，否则将被取消</div>
        <div class="msgbox__button">
          <span @click="btnNo" class="msgbox__button__no">取消订单</span>
          <span @click="btnYes" class="msgbox__button__yes">确认支付</span>
        </div>
      </div>
    </div>
    <Top />
    <Shop v-for="item in { cartShop }" :key="item" :item="item" />
    <Bottom-order />
  </div>
</template>

<script>
import Shop from "../cartList/Shop.vue";
import { cartEffect } from "../../effects/cartEffect";
import { useRoute } from "vue-router";
import Top from "./topArea.vue";
import BottomOrder from "./bottomOrder.vue";
import { post } from "../../util/request";

// 按钮事件
// const buttonEffect = () => {
//    //
//    const btnYes = () => {
//       console.log('yes');
//    }
//    //
//    const btnNo = () => {
//       console.log('no');
//    }

//    return {btnNo,btnYes}
// }

export default {
  components: { Shop, Top, BottomOrder },
  setup() {
    // const {btnNo,btnYes} = buttonEffect();
    const route = useRoute();
    const shopId = parseInt(route.params.id);
    const { cartShop } = cartEffect(shopId);

    //确认提交订单
    const btnYes = async () => {
      console.log("yes");
      const products = [];
      for (const i in cartShop.productList) {
        if (Object.hasOwnProperty.call(cartShop.productList, i)) {
          const element = cartShop.productList[i];
          products.push({id:parseInt(element._id),num:element.count})
        }
      }
      try {
        const result = await post("/api/order", {
          addressId: 1,
          shopId,
          shopName: cartShop.shopName,
          isCanceled: false,
          products,
        });
        console.log("返回结果", result);
        if (result.errno === 0) {
          console.log("登陆成功");
        } else {
          console.log("登陆失败");
        }
      } catch (e) {
        console.log("请求失败");
      }
    };
    //
    const btnNo = () => {
      console.log("no");
    };
    return { cartShop, btnNo, btnYes };
  },
};
</script>

<style lang="scss" scoped>
@import "./style/vrirables.scss";
.wrapper {
  background: $bgColor;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0.5rem;
  padding-top: 1.9rem;
  padding-bottom: 0.3rem;
  overflow-y: auto;
}
.mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba($color: #000000, $alpha: 0.5);
  z-index: 111;
}
.msgbox {
  width: 3rem;
  height: 1.57rem;
  // padding: .24rem 0;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &__title {
    line-height: 0.25rem;
    font-weight: 600;
    font-size: 18px;
    color: #333333;
  }
  &__text {
    font-size: 0.14rem;
    color: #666;
    line-height: 0.2rem;
    margin: 0.08rem 0 0.3rem;
  }
  &__button {
    span {
      border: 1px solid #4fb0f9;
      border-radius: 16px;
      font-size: 0.14rem;
      text-align: center;
      width: 0.78rem;
      line-height: 0.3rem;
      display: inline-block;
    }
    &__no {
      margin-right: 0.24rem;
      color: #0091ff;
    }
    &__yes {
      background: #4fb0f9;
      color: #fff;
    }
  }
}
</style>