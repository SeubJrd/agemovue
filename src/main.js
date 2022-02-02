import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/scss/styles.scss'
import '@/js/script.js'
//import { svgSpritePlugin } from 'vue-svg-sprite'

Vue.config.productionTip = false

//Vue.use(svgSpritePlugin, {})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')



