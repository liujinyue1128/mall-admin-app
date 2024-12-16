import Vue from 'vue'
import Vuex from 'vuex'
import { setUserCookie, getUserCookie,removeUserCookie } from '@/utils/userCookie.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    collapsed: false,
    // 用户信息
    userInfo: getUserCookie(),
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
    }
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

  },
  modules: {
  }
})
