import { reactive } from "@vue/reactivity";
import { useStore } from "vuex";


// 购物车相关操作
export const cartEffect = () => {
    const store = useStore();
    const { cartList } = reactive(store.state);
    const changeCartItem = (shopId, goodsObj, num) => {
        store.commit("setCartList", { shopId, goodsObj, num });
    };
    const getCartProductCount = (shopId, productId) => {
        return cartList[shopId]?.productList[productId]?.count || 0
    };
    return { cartList, changeCartItem, getCartProductCount };
};