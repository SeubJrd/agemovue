import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Collaborations from '../views/Collaborations.vue'
import Registration from '../views/Registration.vue'
import Login from '../views/Login.vue'
import Compte from '../views/Compte.vue'
import Galerie from '../views/Galerie.vue'
import Modeles from '../views/Modeles.vue'
import Personalisation from '../views/Personalisation.vue'
import Engagement from '../views/Engagement.vue'
import Crea from '../views/Crea.vue'

Vue.use(VueRouter)

//Installe Pi Seb

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/collaborations',
    name: 'Collaborations',
    component: Collaborations
  },
  {
    path: '/compte',
    name: 'Compte',
    component: Compte
  },
  {
    path: '/crea',
    name: 'Crea',
    component: Crea
  },
  {
    path: '/galerie',
    name: 'Galerie',
    component: Galerie
  },
  {
    path: '/modeles',
    name: 'Modeles',
    component: Modeles
  },
  {
    path: '/personalisation',
    name: 'Personalisation',
    component: Personalisation
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/engagement',
    name: 'Engagement',
    component: Engagement
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
