<template>
  <div class="wrapper">
    orderlist2222222222
    <Docker :currentIndex="2" />
  </div>
</template>

<script>
import Docker from "../../components/Docker.vue";
export default {
  components: { Docker },
};
</script>

<style lang="scss" scoped>
@import "./style/mixins.scss";

.wrapper{
  @include wrapper;
}
</style>