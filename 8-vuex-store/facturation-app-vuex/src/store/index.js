import Vue from 'vue'
import Vuex from 'vuex'

import * as bill from './modules/bill'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    bill
  },
  
  // state est l'état "vivant" en frontend de l'application
  //à chaque action, on met à jour le backend AVANT de muter l'état local state
  state: {
    counter: 1
  },
  
  // les mutation  sont chargées de mettre à jour (SETTER) la donnée (state) du store
  // on appelle les mutations avec commit('NOM_DE_LA_MUTATION', datas)
  mutations: {
    UPDATE_COUNTER(state, payload) {
      state.counter = payload
    }
  },
  
  // les actions sont asynchrones et peuvent faire des requêtes AJAX (HTTPRequest)
  // on appelle les action à partir des composants avec this.$store.dispatch(nomAction, datas)
  actions: {

    // this.$store.dispatch('updateCounter')
    updateCounter({ state, commit }, payload){

      let newCounter = state.counter + payload
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