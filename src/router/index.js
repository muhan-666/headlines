import Vue from 'vue'

import VueRouter from 'vue-router'

import login from '@/views/Login.vue'
// import pro from '@/views/pro.vue'

Vue.use(VueRouter)

let router = new VueRouter({
  routes: [{
    name: 'login',
    path: '/login',
    component: login
  }
  ]
})

export default router
