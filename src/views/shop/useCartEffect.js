import { toRefs } from "@vue/reactivity";
import { useStore } from "vuex";


// 购物车相关操作
export const useCartEffect = () => {
    const store = useStore();
    const { cartList } = toRefs(store.state);
    const changeCartItem = (shopId, goodsObj, num) => {
        store.commit("setCartList", { shopId, goodsObj, num });
    };
    return { cartList, changeCartItem };
};