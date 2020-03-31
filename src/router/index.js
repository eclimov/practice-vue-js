import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SmartphonePriceQuantityExample from '../views/eclimov/SmartphonePriceQuantityExample'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/eclimov/example1',
    name: 'smartphone-price-quantity-example',
    component: SmartphonePriceQuantityExample
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
