import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SmartphonePriceQuantityExample from '../views/eclimov/SmartphonePriceQuantityExample'
import Example1 from '../views/sanda/Example1'
import Phantom from '@/views/sjofn/Phantom'
import LinksMenuEventsExample from '../views/eclimov/LinksMenuEventsExample'

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
    path: '/sjofn/phantom',
    name: 'phantom',
    component: Phantom
  },
  {
    path: '/eclimov/eventHandlingExample',
    name: 'event-handling-example',
    component: LinksMenuEventsExample
  },
  {
    path: '/eclimov/example1',
    name: 'smartphone-price-quantity-example',
    component: SmartphonePriceQuantityExample
  },
  {
    path: '/sanda/example1',
    name: 'sanda-example1',
    component: Example1
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
