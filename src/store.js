import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      form: {}
    }
  },
  mutations: {
    SET_USER_DATA (state, user) {
      state.user.form = user
    },

  },
  actions: {
    registerUser({ commit }, user) {
      commit('SET_USER_DATA', user)
    },
    loginUser() {
      axios.get('http://www.google.ca')
      .then((response) => {
          // handle response
      }).catch(error => {
        // handle error
      })
    },
  }
})
