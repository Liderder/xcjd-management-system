import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: "",
    topNavItem: '0',
   },
  mutations: {
    setTopPage(state, value) {
      state.topNavItem = value
    },
    setToken(state,value){
      state.token = value
    }
  },
  getters: {
    getTopPage: (state) => state.topNavItem
  },
  actions: {
  },
  modules: {
  }
})
