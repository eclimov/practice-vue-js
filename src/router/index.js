import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Homeworks from '../views/sanda/Homeworks'
import Homework1 from '../views/sanda/Homework1'
import Homework3 from '../views/sanda/Homework3'
import Homework4 from '../views/sanda/Homework4'

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
  },
  {
    path: '/sanda/homework3',
    name: 'sanda-homework3',
    meta: {
      title: 'Homework3'
    },
    component: Homework3
  },
  {
    path: '/sanda/homework4',
    name: 'sanda-homework4',
    meta: {
      title: 'Homework4'
    },
    component: Homework4
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
