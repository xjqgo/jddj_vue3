<template>
  <div class="wrapper">
    <div class="search">
      <div @click="toBack" class="search__back iconfont">&#xe64c;</div>

      <div class="search__content">
        <div class="search__content__icon iconfont">&#xe60c;</div>
        <input placeholder="请输入商品名称搜索" />
      </div>
    </div>
    <Shopinfo :item="item" :hidegap="true" />
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import Shopinfo from "../../components/Shopinfo.vue";
export default {
  name: "Shop",
  components: { Shopinfo },
  setup() {
    const route = useRouter();
    const item = {
      expressLimit: 0,
      expressPrice: 5,
      imgUrl: "http://www.dell-lee.com/imgs/vue3/near.png",
      name: "沃尔玛",
      sales: 10000,
      slogan: "VIP尊享满89元减4元运费券",
      _id: "1",
    };
    const toBack = () => {
      route.back();
    };
    return { item, toBack };
  },
};
</script>

<style lang="scss" scoped>
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
      color: #333333;
    }
    ::placeholder {
      font-size: 14px;
      color: #333333;
    }
  }
}
</style>