import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Individual from '../views/Individual.vue'
import News from '../views/News.vue'
// import { component } from 'vue/types/umd'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/individual',
    name: 'Indivdual',
    component: Individual
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
