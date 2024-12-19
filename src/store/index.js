import Vue from 'vue'
import Vuex from 'vuex'
import { setUserCookie, getUserCookie,removeUserCookie } from '@/utils/userCookie.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    collapsed: false,
    // 用户信息
    userInfo: getUserCookie(),
    menuList: [],// 菜单列表
  },
  
  getters: {
  },
  mutations: {
    changeCollapsed(state) {
      state.collapsed = !state.collapsed;
    },
    setUserInfo(state,user) {
      // 设置用户状态
      state.userInfo = user
    },
    setLayoutUserInfo(state,user) {
      // 设置用户状态
      state.userInfo = {
        username:'',
        appkey: '',
        role:'' ,
        email:''
      };
    },
    changeMenuList(state,list) {
      state.menuList = list;
    },
  },
  actions: {
    changeCollapsed ({ commit }) {
      commit('changeCollapsed');
    },
    setUserInfo ({ commit }, user) {
      commit('setUserInfo', user);
      setUserCookie(user);
    },
    setLayoutUserInfo ({ commit }, user) {
      commit('setLayoutUserInfo', user);
      removeUserCookie();
    },
    changeMenuList({ commit }, list) {
      commit('changeMenuList', list);
    },

  },
  modules: {
  }
})
