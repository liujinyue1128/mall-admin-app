import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/layout/HomeView.vue'
import Login from '../views/layout/Login.vue'
import store from '@/store/index'
import getMenuRoutes from '@/utils/permission.js'
Vue.use(VueRouter)
const aysncRouterMap = [
  {
    path: '/product',
    name: 'Product',
    component: HomeView,
    meta: {
      title: '商品',
      hidden: false,
      icon: 'inbox'
    },
    children: [
      {
        path: 'list',
        name: 'ProductList',
        meta: {
          title: '商品列表',
          hidden: false,
          icon: 'unordered-list'
        },
        component: () => import(/* webpackChunkName: "product" */ '../views/page/ProductList.vue')
      },
      {
        path: 'add',
        name: 'ProductAdd',
        meta: {
          title: '添加商品',
          hidden: false,
          icon: 'file-add'
        },
        component: () => import(/* webpackChunkName: "product" */ '../views/page/ProductAdd.vue')
      },
      {
        path: 'edit/:id',
        name: 'ProductEdit',
        meta: {
          title: '编辑商品',
          hidden: true,
          icon: 'file-add'
        },
        component: () => import(/* webpackChunkName: "product" */ '../views/page/ProductAdd.vue')
      },
      {
        path: 'category',
        name: 'Category',
        meta: {
          title: '类目管理',
          hidden: false,
          icon:'project'
        },
        component: () => import(/* webpackChunkName: "product" */ '../views/page/category.vue')
      }
    ]
  }
]
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      title: '首页',
      hidden: false,
      icon: 'home'
    },
    redirect:'/index',
    children: [
      {
        path: 'index',
        name: 'Index',
        meta: {
          title: '统计',
          hidden: false,
          icon:'number'
        },
        // 这种引入方法就是"路由懒加载"
        component: () => import(/* webpackChunkName: "home" */ '../views/page/index.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: '登录',
      hidden: true,
    }
  },
]

const router = new VueRouter({
  routes
})
let isAddRoutes = false; // 是否已经添加了路由
/**
 * 路由前置守卫
 */
// router.beforeEach((to,from,next)=>{
//   if(to.path !=='/login' ) {
//     // 判断用户去的不是login
//     if (store.state.userInfo.username && store.state.userInfo.role && store.state.userInfo.appkey) {
//       // 添加路由
//       if(!isAddRoutes) {
//         const menuRoutes = getMenuRoutes(store.state.userInfo.role,aysncRouterMap);
//         store.dispatch('changeMenuList',routes.concat(menuRoutes))
//         router.addRoutes(menuRoutes);
//       }
//       // 判断用户是否符合用户条件 是否含有appkey
//       return next();
//     } 
//     return next('/login');
//   }
//   return next();
// })
/**
 * 路由前置守卫
 */
router.beforeEach((to, from, next) => {
  // 如果目标路由是登录页，直接放行，防止循环重定向
  if (to.path === '/login') {
    return next();
  }

  // 如果用户未登录
  if (!store.state.userInfo.username || !store.state.userInfo.role || !store.state.userInfo.appkey) {
    // 如果当前路由不是登录页，跳转到登录页
    if (to.path !== '/login') {
      return next('/login');
    }
  }

  // 如果没有添加动态路由，进行添加
  if (!isAddRoutes) {
    const menuRoutes = getMenuRoutes(store.state.userInfo.role, aysncRouterMap);
    store.dispatch('changeMenuList', routes.concat(menuRoutes)).then(()=>{
      next()
      router.addRoutes(menuRoutes); // 动态添加路由
    }); // 更新路由
    isAddRoutes = true; // 标记已经添加过路由
  }

  next(); // 放行
});



export default router
