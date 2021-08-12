<template>
  <div class="wrapper">
    <Position />
    <Shop />
  </div>
    <Docker />
</template>

<script>
import Position from './Position'
import Shop from './Shop'
import Docker from './Docker'
export default {
  name: 'Home',
  components: { Position, Docker, Shop }
}
</script>

<style lang="scss">
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
