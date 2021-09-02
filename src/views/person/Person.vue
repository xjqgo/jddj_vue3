<template>
    <div class="wrapper">
        <Top-user-info />
        <Item />
        <div class="wrapper__logout" @click="handlerLogout">退出登陆</div>
        <Docker :currentIndex="3" />
    </div>
</template>

<script>
import Docker from '../../components/Docker.vue'
import TopUserInfo from './TopUserInfo.vue'
import Item from './Item'
import { useRouter } from 'vue-router'
export default {
    components:{Docker,TopUserInfo,Item},
    setup() {
        const router = useRouter();
        const handlerLogout = () => {
            delete localStorage.isLogin
            router.push({name:'Login'})
        };
        
        return {handlerLogout}
    }
}
</script>

<style lang="scss" scoped>
@import "./style/mixins.scss";
.wrapper{
    @include wrapper(0);
    &__logout{
        margin: .18rem;
        color: $textColor-white;
        text-align: center;
        line-height: .32rem;
        border-radius: .04rem;
        background: $bgColor-lightBlue;
    }
}
</style>