<template>
  <div class="wrapper">
    orderlist
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
</style>