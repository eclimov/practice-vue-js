import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Homework1 from '../views/sanda/Homework1'
import Homeworks from '../views/sanda/Homeworks'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/sanda',
    name: 'sanda-homeworks',
    meta: {
      title: 'Homeworks'
    },
    component: Homeworks
  },
  {
    path: '/sanda/homework1',
    name: 'sanda-homework1',
    meta: {
      title: 'Homework1'
    },
    component: Homework1
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
