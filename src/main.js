import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { svgSpritePlugin } from 'vue-svg-sprite'

Vue.config.productionTip = false

Vue.use(svgSpritePlugin, {})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')



