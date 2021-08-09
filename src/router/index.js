import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/Home'
import Login from '../views/login/Login'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: (to, from, next) => {
      console.log('beforeEnter', to, from)
      const { isLogin } = localStorage
      isLogin ? next({ name: 'Home' }) : next()
    }
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  console.log('beforeEach', to, from)
  const { isLogin } = localStorage
  isLogin || to.name === 'Login' ? next() : next({ name: 'Login' })
})

export default router
