import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import localCache from '@/utils/cache'


//懒加载
const Login = () => import('../views/login/Login.vue')
const Main = () => import('../views/main/Main.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/main',
    name: 'Main',
    component: Main
  }

  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//导航守卫
//登陆之后就不能访问登录页面
router.beforeEach((to)=>{
  if (to.path==='/login' && localCache.getCache('token')){
    router.push('/main')
  }
})

export default router
