<template>
    <div class="wrapper">
        key:{{$route.query.key}}
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
@import "./style/mixins.scss";
.wrapper{
    @include wrapper;
}
</style>