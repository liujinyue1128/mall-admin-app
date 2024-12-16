import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/layout/HomeView.vue'
import Login from '../views/layout/Login.vue'
import store from '@/store/index'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '',
        name: 'home-default',
        // component: () => import('../views/HomeView.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})
/**
 * 路由前置守卫
 */
router.beforeEach((to,from,next)=>{
  if(to.path !=='/login') {
    const { userInfo } = store.state;
    if (!userInfo.username && !userInfo.role && !userInfo.appkey) {
      return next('/login');
    } else {
      return next();
    }
  } else {
    return next();
  }
})

export default router
