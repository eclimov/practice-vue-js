import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Sjofn from '../views/Sjofn/Sjofn.vue'
import SjHomework1 from '../views/Sjofn/Homework1'
import SjHomework3 from '../views/Sjofn/Homework3'
import SjHomework4 from '../views/Sjofn/Homework4'
import SjPractice41 from '../views/Sjofn/Practice41'
import SjPractice42 from '../views/Sjofn/Practice42'
import SjPractice43 from '../views/Sjofn/Practice43'
import SanHomeworks from '../views/sanda/Homeworks'
import SanHomework1 from '../views/sanda/Homework1'
import SanHomework3 from '../views/sanda/Homework3'
import SanHomework4 from '../views/sanda/Homework4'
import SanHomework6 from '../components/Homework6'
import SanPractice41 from '../views/sanda/Practice41'
import SanPractice42 from '../views/sanda/Practice42'
import SanPractice43 from '../views/sanda/Practice43'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/sjofn',
    name: 'sjofn',
    component: Sjofn
  },
  {
    path: '/sjofn/hw1',
    name: 'sjofn-hw1',
    component: SjHomework1
  },
  {
    path: '/sjofn/hw3',
    name: 'sjofn-hw3',
    component: SjHomework3
  },
  {
    path: '/sjofn/hw4',
    name: 'sjofn-hw4',
    component: SjHomework4
  },
  {
    path: '/sjofn/pr41',
    name: 'sjofn-pr41',
    component: SjPractice41
  },
  {
    path: '/sjofn/pr42',
    name: 'sjofn-pr42',
    component: SjPractice42
  },
  {
    path: '/sjofn/pr43',
    name: 'sjofn-pr43',
    component: SjPractice43
  },
  {
    path: '/sanda',
    name: 'sanda-homeworks',
    meta: {
      title: 'Homeworks'
    },
    component: SanHomeworks
  },
  {
    path: '/sanda/homework1',
    name: 'sanda-homework1',
    meta: {
      title: 'Homework1'
    },
    component: SanHomework1
  },
  {
    path: '/sanda/homework3',
    name: 'sanda-homework3',
    meta: {
      title: 'Homework3'
    },
    component: SanHomework3
  },
  {
    path: '/sanda/homework4',
    name: 'sanda-homework4',
    meta: {
      title: 'Homework4'
    },
    component: SanHomework4
  },
  {
    path: '/sanda/homework6',
    name: 'sanda-homework6',
    meta: {
      title: 'Homework6'
    },
    component: SanHomework6
  },
  {
    path: '/sanda/practice41',
    name: 'sanda-practice41',
    meta: {
      title: 'Practice41'
    },
    component: SanPractice41
  },
  {
    path: '/sanda/practice42',
    name: 'sanda-practice42',
    meta: {
      title: 'Practice42'
    },
    component: SanPractice42
  },
  {
    path: '/sanda/practice43',
    name: 'sanda-practice43',
    meta: {
      title: 'Practice43'
    },
    component: SanPractice43
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
