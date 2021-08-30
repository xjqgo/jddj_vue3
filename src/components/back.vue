<template>
    <div @click="router.back()" class="back iconfont">&#xe64c;</div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
    setup() {
        return {router:useRouter()}
    }    
}
</script>

<style lang="scss" scoped>
.back {
      color: #b6b6b6;
      font-size: 0.2rem;
      position: relative;
      top: -0.03rem;
    }
</style>