<template>
  <div class="wrapper">
    <div class="handed">
      <div class="search">
        <div @click="toBack" class="search__back iconfont">&#xe64c;</div>

        <div class="search__content">
          <div class="search__content__icon iconfont">&#xe60c;</div>
          <input placeholder="请输入商品名称搜索" @click="$router.push('/search')"/>
        </div>
      </div>
      <Shopinfo :item="item" :hidegap="true" v-show="item.imgUrl" />
    </div>
    <Content />
    <Cart />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { get } from "../../util/request";
import Shopinfo from "../../components/Shopinfo.vue";
import Content from "./Content.vue";
import Cart from "./Cart.vue";
import { useStore } from 'vuex';
import {publicEffect} from '../../effects/publicEffect'

// 取店铺信息
const useShopInfoEffect = () => {
  const route = useRoute();
  const state = useStore();
  let item = ref({});
  const getShop = async () => {
    const result = await get(`/api/shop/${route.params.id}`);
    console.log("返回结果", result);
    if (result?.errno === 0 && result?.data) {
      item.value = result.data;
      state.commit('setShopName',{shopId:route.params.id,shopName:result.data.name})
    }
  };

  return { getShop, item };
};
 
export default {
  name: "Shop",
  components: { Shopinfo, Content, Cart },
  setup() {
    const { getShop, item } = useShopInfoEffect();
    const {toBack} = publicEffect();
    getShop();
    return { item, toBack };
  },
};
</script>

<style lang="scss" scoped>
@import "./style/mixins.scss";
.handed {
  margin-left: 0.18rem;
}
.search {
  margin: 0.16rem 0.18rem 0.16rem 0;
  height: 0.32rem;
  display: flex;
  font-size: 0.16rem;
  line-height: 0.32rem;
  &__back {
    font-size: 0.24rem;
    color: $light-backColor;
    margin: 0 0.1rem 0 -0.16rem;
  }
  &__content {
    display: flex;
    background: $content-bgColor5;
    border-radius: .16rem;
    border-radius: .16rem;
    width: 100%;
    &__icon {
      color: $search-iconColor;
      margin: 0 0.08rem;
    }
    input {
      border: none;
      outline: none;
      background: none;
      line-height: 0.32rem;
      width: 100%;
      padding-right: 0.2rem;
      color: $content-fontcolor;
    }
    ::placeholder {
      font-size: .14rem;
      color: $content-fontcolor;
    }
  }
}
</style>