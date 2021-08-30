import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/home/Home'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/Home'),
  },
  {
    path: '/orderList',
    name: 'OrderList',
    component: () => import(/* webpackChunkName: "orderList" */ '../views/orderList/OrderList'),
  },
  {
    path: '/cartList',
    name: 'CartList',
    component: () => import(/* webpackChunkName: "cartList" */ '../views/cartList/CartList'),
  },
  {
    path: '/shop/:id',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "home" */ '../views/shop/Shop'),
  },
  {
    path: '/userAddress',
    name: 'UserAddress',
    component: () => import(/* webpackChunkName: "userAddress" */ '../views/userAddress/UserAddress'),
  },
  {
    path: '/settlement/:id',
    name: 'Settlement',
    component: () => import(/* webpackChunkName: "settlement" */ '../views/settlement/Settlement'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/register/Register'),
    beforeEnter: (to, from, next) => {
      console.log('beforeEnter', to, from)
      const { isLogin } = localStorage
      isLogin ? next({ name: 'Home' }) : next()
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/Login'),
    beforeEnter: (to, from, next) => {
      console.log('beforeEnter', to, from)
      const { isLogin } = localStorage
      isLogin ? next({ name: 'Home' }) : next()
    }
  }
]

const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  console.log('beforeEach', to, from)
  const { isLogin } = localStorage
  const isLoginRegister = (to.name === 'Login' || to.name === 'Register')
  isLogin || isLoginRegister ? next() : next({ name: 'Login' })
})

export default router
