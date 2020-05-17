import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Sjofn from '../views/Sjofn/Sjofn.vue'
import Homework1 from '../views/Sjofn/Homework1'
import Homework3 from '../views/Sjofn/Homework3'
import Homework4 from '../views/Sjofn/Homework4'
import Practice41 from '../views/Sjofn/Practice41'
import Practice42 from '../views/Sjofn/Practice42'
import Practice43 from '../views/Sjofn/Practice43'

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
    path: '/sjofn',
    name: 'sjofn',
    component: Sjofn
  },
  {
    path: '/sjofn/hw1',
    name: 'sjofn-hw1',
    component: Homework1
  },
  {
    path: '/sjofn/hw3',
    name: 'sjofn-hw3',
    component: Homework3
  },
  {
    path: '/sjofn/hw4',
    name: 'sjofn-hw4',
    component: Homework4
  },
  {
    path: '/sjofn/pr41',
    name: 'sjofn-pr41',
    component: Practice41
  },
  {
    path: '/sjofn/pr42',
    name: 'sjofn-pr42',
    component: Practice42
  },
  {
    path: '/sjofn/pr43',
    name: 'sjofn-pr43',
    component: Practice43
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
