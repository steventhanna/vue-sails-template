import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const getCookie = name => {
  let a = `; ${document.cookie}`.match(`;\\s*${name}=([^;]+)`)
  return a ? a[1] : ''
}

export default new Vuex.Store({
  modules: {
  },

  state: {
    locale: 'en',
    isUserAuthenticated: !!(getCookie('user'))
  },

  mutations: {
  }
})
