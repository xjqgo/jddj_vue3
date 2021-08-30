<template>
    <div @click="router.back()" :class="`iconfont ${cla??'back'}`">&#xe64c;</div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
    props:['cla'],
    setup() {
        return {router:useRouter()}
    }    
}
</script>

<style lang="scss" scoped>
</style>