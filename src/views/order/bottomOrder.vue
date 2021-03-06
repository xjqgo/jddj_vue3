<template>
  <div @click.self="showMask = false" class="mask" v-show="showMask">
    <div class="msgbox" v-show="msgboxNum == 1">
      <div class="msgbox__title">确认要离开收银台？</div>
      <div class="msgbox__text">请尽快完成支付，否则将被取消</div>
      <div class="msgbox__button">
        <span @click="btnRquest(false)" class="msgbox__button__no"
          >取消订单</span
        >
        <span @click="btnRquest(true)" class="msgbox__button__yes"
          >确认支付</span
        >
      </div>
    </div>
    <div class="success" v-show="msgboxNum == 2">
      <div class="success__icon-cancel iconfont">&#xe65f;</div>
      <div class="success__icon-yes iconfont">&#xe80f;</div>
      <div class="success__title">支付成功，等待配送</div>
    </div>
  </div>
  <div class="order">
    <div class="order__total">
      <span class="order__total__title">付款金额</span>
      <span class="order__total__price"> ￥{{ orderPrice }}</span>
    </div>
    <div @click="showMask = true" class="order__btn">提交订单</div>
  </div>
  <Toast v-show="toastData.showToast" :msg="toastData.msg" />
</template>

<script>
import { cartEffect } from "../../effects/cartEffect";
import { useRoute, useRouter } from "vue-router";
import { computed, ref } from "@vue/runtime-core";
import Toast, { showToastEffect } from "../../components/Toast.vue";
import { post } from "../../util/request";

// 订单相关
const orderEffect = () => {
  let { cartList } = cartEffect();
  const route = useRoute();
  cartList = { info: cartList[route.params.id] };
  const orderPrice = computed(() => {
    let price = 0;
    for (const key in cartList.info.productList) {
      const element = cartList.info.productList[key];
      if (element.check) price += element.count * element.price;
    }
    return price.toFixed(2);
  });

  return { cartList, orderPrice };
};

// 蒙层
const maskEffect = (showMask, msgboxNum) => {
  const { cartShop, shopId, changeCartItem } = cartEffect();
  const { toastData, showToast } = showToastEffect();
  const router = useRouter();

  //提交订单
  const btnRquest = async (isCanceled) => {
    const products = [];
    for (const i in cartShop.productList) {
      if (Object.hasOwnProperty.call(cartShop.productList, i)) {
        const element = cartShop.productList[i];
        products.push({ id: parseInt(element._id), num: element.count });
      }
    }

    try {
      const result = await post("/api/order", {
        addressId: 1,
        shopId,
        shopName: cartShop.shopName,
        isCanceled,
        products,
      });
      console.log("返回结果", result);
      if (result.errno === 0) {
        if (isCanceled) {
          msgboxNum.value = 2;
          setTimeout(() => {
            changeCartItem(shopId, { _id: "clearOrder" });
            router.push({ name: "OrderList" });
          }, 2000);
        } else {
          showMask.value = false;
          showToast("已取消");
        }
      } else {
        showToast("登陆失败");
      }
    } catch (e) {
      showToast("请求失败");
    }
  };
  return { toastData, cartShop, btnRquest };
};

export default {
  components: { Toast },
  setup() {
    const showMask = ref(false);
    const msgboxNum = ref(1);
    const { cartList, orderPrice } = orderEffect();
    const { toastData, cartShop, btnRquest } = maskEffect(showMask, msgboxNum);

    return {
      cartList,
      orderPrice,
      showMask,
      msgboxNum,
      toastData,
      cartShop,
      btnRquest,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./style/mixins.scss";
.order {
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
.mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba($color: $blank-fontcolor, $alpha: 0.5);
  z-index: 111;
  display: flex;
  flex-flow: column;
  justify-content: center;
}
.msgbox {
  margin: 0 0.37rem;
  height: 1.57rem;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background: $bgColor-white;
  &__title {
    line-height: 0.25rem;
    font-weight: 600;
    font-size: 0.18rem;
    color: $content-fontcolor;
  }
  &__text {
    font-size: 0.14rem;
    color: $mediun-fontcolor;
    line-height: 0.2rem;
    margin: .08rem 0 .3rem;
  }
  &__button {
    span {
      border: 0.01rem solid $dorder-button;
      border-radius: 0.16rem;
      font-size: 0.14rem;
      text-align: center;
      width: 0.78rem;
      line-height: 0.3rem;
      display: inline-block;
    }
    &__no {
      margin-right: 0.24rem;
      color: $bgColor-lightBlue;
    }
    &__yes {
      background: $dorder-button;
      color: $textColor-white;
    }
  }
}
.success {
  background: $bgColor-white;
  margin: 0 0.37rem;
  padding: 0.12rem;
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
    color: $content-fontcolor;
  &__icon-cancel {
    font-size: 0.13rem;
    text-align: right;
    align-self: flex-end;
    color: $mediun-fontcolor;
  }
  &__icon-yes {
    font-size: 0.28rem;
    transform: scaleX(1.5);
    font-weight: 1000;
    margin-top: 0.16rem;
  }
  &__title {
    font-size: 0.18rem;
    font-weight: 600;
    line-height: 0.25rem;
    margin: 0.24rem 0 0.2rem;
  }
}
</style>