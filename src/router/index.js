import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SmartphonePriceQuantityExample from '../views/eclimov/SmartphonePriceQuantityExample'
import Example1 from '../views/sanda/Example1'
import Phantom from '@/views/sjofn/Phantom'
import LinksMenuEventsExample from '../views/eclimov/LinksMenuEventsExample'
import WatchersExample from '../views/eclimov/WatchersExample'
import EclimovCommonView from '../views/eclimov/EclimovCommonView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: 'Home page'
    },
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      title: 'About'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/sjofn/phantom',
    name: 'phantom',
    meta: {
      title: 'Phantom'
    },
    component: Phantom
  },
  {
    path: '/eclimov',
    component: EclimovCommonView,
    children: [ // Nested route/view mapping
      {
        path: 'eventHandlingExample', // /eclimov/eventHandlingExample
        name: 'event-handling-example',
        meta: {
          title: 'Event Handling'
        },
        component: LinksMenuEventsExample
      },
      {
        path: 'watchersExample', // /eclimov/watchersExample
        name: 'watchers-example',
        meta: {
          title: 'Watchers'
        },
        component: WatchersExample
      },
      {
        path: 'example1', // /eclimov/example1
        name: 'smartphone-price-quantity-example',
        meta: {
          title: 'Computed Properties'
        },
        component: SmartphonePriceQuantityExample
      }
    ]
  },
  {
    path: '/sanda/example1',
    name: 'sanda-example1',
    meta: {
      title: 'Sanda Example'
    },
    component: Example1
  }
]

const router = new VueRouter({
  mode: 'history', // or 'hash' (deprecated & bad practice)
  base: process.env.BASE_URL,
  routes
})

export default router
