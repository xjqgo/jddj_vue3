<template>
    <div class="wrapper">
        <Docker :currentIndex="3" />
    </div>
</template>

<script>
import Docker from '../../components/Docker.vue'

export default {
    components:{Docker},
    setup() {
        
    }
}
</script>

<style lang="scss" scoped>
@import "./style/mixins.scss";
.wrapper{
    @include wrapper;
}
</style>