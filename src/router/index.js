import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Service from '../views/Service.vue'
import Blog from '../views/Blog.vue'
import Community from '../views/Community.vue'
import Podcast from '../views/Podcast.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/services',
    name: 'services',
    component: Service
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  },
  {
    path: '/community',
    name: 'community',
    component: Community
  },
  {
    path: '/podcast',
    name: 'podcast',
    component: Podcast
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
]

export default router
