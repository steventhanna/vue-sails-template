import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/message',
      name: 'Message',
      component: resolve => {
        require(['./../components/Message.desktop.vue'], resolve)
      }
    }
  ]
})
