<template>
  <div class="wrapper">
    <Position />
    <Nearby />
  </div>
    <Docker :currentIndex="0" />
</template>

<script>
import Position from './Position'
import Nearby from './Nearby'
import Docker from "../../components/Docker.vue";
export default {
  name: 'Home',
  components: { Position, Docker, Nearby }
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  overflow-y: auto; //解决底部选项卡错误
  left: 0;
  top: 0;
  right: 0;
  bottom: 0.5rem;
  padding: 0 .18rem .15rem  .18rem;
}
</style>
