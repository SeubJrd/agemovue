import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Collaborations from '../views/Collaborations.vue'
import Registration from '../views/Registration.vue'

Vue.use(VueRouter)

//Installe Pi Seb

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/test',
    name: 'Test',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/collaborations',
    name: 'Collaborations',
    component: Collaborations
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
