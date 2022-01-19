import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      displayName: localStorage.getItem('username') ? localStorage.getItem('username') :null,
      email: localStorage.getItem('email') ? localStorage.getItem('email') :null,
      authToken: localStorage.getItem('authToken') ? localStorage.getItem('authToken') :null,
    }
  },
  mutations: {
    setUser (state, data) {
      console.log('data :', data)
      state.user.displayName = data.username
      state.user.email = data.email
      state.user.authToken = data.authToken

      localStorage.setItem('username', data.username)
      localStorage.setItem('email', data.email)
      localStorage.setItem('authToken', data.authToken)
    },
    removeUser (state) {
      state.user.displayName = null
      state.user.email = null
      state.user.authToken = null

      localStorage.removeItem('username')
      localStorage.removeItem('email')
      localStorage.removeItem('authToken')
    }
  },
  actions: {
  },
  modules: {
  }
})
