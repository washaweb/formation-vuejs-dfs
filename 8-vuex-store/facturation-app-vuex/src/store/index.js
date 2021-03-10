import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {},
  
  // state est l'état "vivant" en frontend de l'application
  //à chaque action, on met à jour le backend AVANT de muter l'état local state
  state: {
    counter: 1
  },
  
  // les mutation  sont chargées de mettre à jour (SETTER) la donnée (state) du store
  mutations: {
    UPDATE_COUNTER(state, payload) {
      state.counter = payload
    }
  },
  
  // les actions sont asynchrones et peuvent faire des requêtes AJAX (HTTPRequest)
  actions: {
    updateCounter({ state, commit }){

      let newCounter = state.counter + 1
      //faire un appel à l'api pour mettre à jour la donnée sur le serveur
      //lorsque le serveur répond...
      //on déclenche la mutation locale de l'état de l'application (state)
      commit('UPDATE_COUNTER', newCounter)
    }
  },
  
  //les getters sont comme des computed values du store, elle renvoie l'état state mais avec des logiques calculées d'affichage
  getters: {}
})

export default store