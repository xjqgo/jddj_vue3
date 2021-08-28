<template>
    <div @click.self="showMask=false" class="mask" v-show="showMask">
      <div class="msgbox">
        <div class="msgbox__title">确认要离开收银台？</div>
        <div class="msgbox__text">请尽快完成支付，否则将被取消</div>
        <div class="msgbox__button">
          <span @click="btnRquest(false)" class="msgbox__button__no">取消订单</span>
          <span @click="btnRquest(true)" class="msgbox__button__yes">确认支付</span>
        </div>
      </div>
    </div>
  <div class="settlement">
    <div class="settlement__total">
      <span class="settlement__total__title">付款金额</span>
      <span class="settlement__total__price"> ￥{{ total }}</span>
    </div>
    <div @click="showMask=true" class="settlement__btn">提交订单</div>
  </div>
    <Toast v-show="toastData.showToast" :msg="toastData.msg" />
</template>

<script>
import { cartEffect } from "../../effects/cartEffect";
import { useRoute,useRouter } from "vue-router";
import { computed, ref } from "@vue/runtime-core";
import Toast, { showToastEffect } from "../../components/Toast.vue";
import { post } from "../../util/request";

// 订单相关
const orderEffect = () => {
   
    let { cartList } = cartEffect();
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

// 
const maskEffect = (showMask) => {
    const { cartShop, shopId,changeCartItem } = cartEffect();
    const { toastData, showToast } = showToastEffect();
    const router = useRouter();

    //提交订单
    const btnRquest = async (isCanceled) => {
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
          isCanceled,
          products,
        });
        console.log("返回结果", result);
        if (result.errno === 0) {
          if (isCanceled) {
            showToast("订单提交成功");
            setTimeout(() => {
            changeCartItem(shopId, { _id: 'clear' }, -1)
            router.push({ name: "Home" });
            }, 2000);
          }else{
            showToast("已取消");
          }
          showMask.value=false
        } else {
          showToast("登陆失败");
        }
      } catch (e) {
        showToast("请求失败");
      }
    };
    return { toastData,cartShop,btnRquest };
}

export default {
  components:{Toast},
  setup() {
    const showMask = ref(false);
    const {  cartList, total  } = orderEffect();
    console.log(1);
    const { toastData,cartShop,btnRquest } = maskEffect(showMask);

    return { cartList, total,showMask,toastData,cartShop,btnRquest};
  },
};
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