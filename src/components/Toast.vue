<template>
    <div class="toast">{{msg}}</div>
</template>

<script>
export default {
    props:['msg']
}
</script>

<style lang="scss" scoped>
.toast{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 0.1rem;
    background: rgba(0, 0, 0, .35);
    color: #FFF;
}
</style>