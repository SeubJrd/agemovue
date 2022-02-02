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
import store from '../store/index'
import NotFound from '../components/NotFound'


Vue.use(VueRouter)


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
    component: Compte,
    meta: {
      requireAuth: true
    }
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
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

// Ce hook va s'executé avant chaque demande de route dans le router, donc sur chaque route
router.beforeEach((to, from, next) => {
  // On check si la route nécessite une authentification
  if (to.matched.some(record => record.meta.requireAuth)) {

    // On check si l'user est connecté, on check simplement si il a un token dans le store
    // En vrai c'est pas très solide comme check, parce que il suffit de mettre manuellement
    // n'importe quoi dans le LocaleStorage pour que ca soit valide, mais bon c'est plus simple et ca fait le taf visuellement
    if (!store.state.user.authToken) {
      // Si ya pas de token, on continue sur la route qui a pour name "Login"
      next({ name: 'Login' })
    } else {
      // si ya un token on continue normalement sur la route initialement demandé
      next() // go to wherever I'm going
    }
  } else {
    // Si ya pas besoin d'être authentifier sur la route, on continue normalement
    next()
  }
})


