<template>
  <div class="shop">
    <h3>附近店铺</h3>
    <div class="items">
      <div class="item" v-for="item in list" :key="item._id">
        <img :src="item.imgUrl" />
        <div class="item__info">
          <div class="item__title">{{ item.name }}</div>
          <div class="tab">
            <span>月销:{{ item.sales }}</span>
            <span>起送:{{ item.expressLimit }}</span>
            <span>基础运费:{{ item.expressPrice }}</span>
          </div>
          <p>{{ item.slogan }}</p>
          <div class="item__gap"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { get } from "../../util/request";

const shopListEffect = () => {
  const list = ref([]);
  const getShop = async () => {
    const result = await get("/api/shop/hot-list");
    console.log("返回结果", result);
    if (result?.errno === 0 && result?.data?.length) {
      list.value = result.data;
    }
  };
  return { list, getShop };
};

export default {
  name: "Shop",
  setup() {
    const { list, getShop } = shopListEffect();
    getShop();
    return {
      list,
    };
  },
};
</script>

<style lang="scss" scoped>
.shop {
  h3 {
    font-size: 0.18rem;
    margin-bottom: 0.14rem;
    color: #333333;
  }
  .item {
    display: flex;
    font-size: 0.13rem;
    img {
      height: 0.56rem;
      width: 0.56rem;
      margin: 0 0.16rem 0 0;
    }
    .item__info {
      width: 100%;
    }
    .item__title {
      font-size: 0.2rem;
      color: #333333;
    }
    .tab {
      margin: 0.08rem 0;
      span {
        margin-right: 0.16rem;
      }
    }
    p {
      margin: 0;
      color: #e93b3b;
    }
    .item__gap {
      height: 0.01rem;
      background: #f1f1f1;
      margin: 0.12rem 0;
    }
  }
}
</style>
