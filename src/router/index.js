import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Search.vue'),
    meta: {
      searchInHeader: true
    }
  },
  {
    // Catch 404
    path: '*',
    component: () =>
      import(/* webpackChunkName: "404" */ '../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
