<template>
  <div class="nearby">
    <h3>附近店铺</h3>
    <div class="items">
      <router-link :to="`/shop/${item._id}`" v-for="item in list" :key="item._id" >
      <Shopinfo :item="item" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { get } from "../../util/request";
import Shopinfo from '../../components/Shopinfo.vue'

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
  name: "Nearby",
  components:{Shopinfo},
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
@import "./style/vrirables.scss";
.nearby {
  h3 {
    font-size: 0.18rem;
    margin-bottom: 0.14rem;
    color: $content-fontcolor;
  }
  a{
    text-decoration: none;
  }
}
</style>
