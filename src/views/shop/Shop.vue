<template>
  <div class="wrapper">
    <div class="search">
      <div @click="toBack" class="search__back iconfont">&#xe64c;</div>

      <div class="search__content">
        <div class="search__content__icon iconfont">&#xe60c;</div>
        <input placeholder="请输入商品名称搜索" />
      </div>
    </div>
    <Shopinfo :item="item" :hidegap="true" v-show="item.imgUrl" />
    <Content />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRoute, useRouter } from "vue-router";
import Shopinfo from "../../components/Shopinfo.vue";
import { get } from "../../util/request";
import Content from './Content.vue';

// 取店铺信息
const useShopInfoEffect = () => {
  const route = useRoute();
  let item = ref({});
  const getShop = async () => {
    const result = await get(`/api/shop/${route.params.id}`);
    console.log("返回结果", result);
    if (result?.errno === 0 && result?.data) {
      console.log(21);
      item.value = result.data;
    }
  };

  return { getShop, item };
};

// 路由返回
const toBackEffect = () => {
  const router = useRouter();
  const toBack = () => {
    router.back();
  };

  return toBack;
};
export default {
  name: "Shop",
  components: { Shopinfo, Content },
  setup() {
    const { getShop, item } = useShopInfoEffect();
    const toBack = toBackEffect();
    getShop();
    return { item, toBack };
  },
};
</script>

<style lang="scss" scoped>
$content-inputcolor: #333;
.wrapper {
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
    color: #b6b6b6;
    margin: 0 0.1rem 0 -0.16rem;
  }
  &__content {
    display: flex;
    background: #f5f5f5;
    border-radius: 16px;
    border-radius: 16px;
    width: 100%;
    &__icon {
      color: #b7b7b7;
      margin: 0 0.08rem;
    }
    input {
      border: none;
      outline: none;
      background: none;
      line-height: 0.32rem;
      width: 100%;
      padding-right: 0.2rem;
      color: $content-inputcolor;
    }
    ::placeholder {
      font-size: 14px;
      color: $content-inputcolor;
    }
  }
}
</style>