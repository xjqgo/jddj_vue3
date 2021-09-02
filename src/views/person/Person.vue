<template>
    <div class="wrapper">
        <Top-user-info />
        <Item />
        <Docker :currentIndex="3" />
    </div>
</template>

<script>
import Docker from '../../components/Docker.vue'
import TopUserInfo from './TopUserInfo.vue'
import Item from './Item.vue'
export default {
    components:{Docker,TopUserInfo,Item},
    setup() {
        
    }
}
</script>

<style lang="scss" scoped>
@import "./style/mixins.scss";
.wrapper{
    @include wrapper(0);
}
</style>