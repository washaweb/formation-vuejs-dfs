import Vue from 'vue'

const namespaced = true

const state = {
  bill: {},
  bills: [
    {
      id: 1,
      billNumber: 1,
      date: '',
      description: '',
      client: {
        idclient: 1,
        firstname: 'John',
        lastname: 'Doe'
      },
      prestations: [{
        description: 'Test description',
        qty: 2,
        price: 450.00
      },
      {
        description: 'TOTO',
        qty: 2,
        price: 950.00
      }],
      discount: 0.00,
      paid: 0.00,
      tva: true,
      tvaRate: 20
    },
    {
      id: 2,
      billNumber: 2,
      date: '',
      description: '',
      client: {
        idclient: 2,
        firstname: 'Maria',
        lastname: 'Doe'
      },
      prestations: [{
        description: 'Test description',
        qty: 1,
        price: 450.00
      },
      {
        description: 'TOTO',
        qty: 2,
        price: 950.00
      }],
      discount: 0.00,
      paid: 1450.00,
      tva: true,
      tvaRate: 20
    },
    {
      id: 3,
      billNumber: 3,
      date: '',
      description: '',
      client: {
        idclient: 3,
        firstname: 'Jim',
        lastname: 'Smith'
      },
      prestations: [{
        description: 'Test description',
        qty: 1,
        price: 450.00
      },
      {
        description: 'TOTO',
        qty: 2,
        price: 950.00
      }],
      discount: 500.00,
      paid: 0.00,
      tva: true,
      tvaRate: 20
    }
  ],
  loading: false
}

const mutations = {
  // met à jour l'état de bill
  UPDATE_BILL(state, payload){
    state.bill = payload
  },
  UPDATE_BILLS(state, payload){
    state.bills = payload
  },
  UPDATE_LOADING(state, payload){
    state.loading = payload
  }
}

const actions = {
  //permet de récupérer la liste des factures
  getBills({commit}) {
    commit('UPDATE_LOADING', true)
    //appel à la BDD (promise) 
    // on utilise return pour utiliser la promesse dans le composant
    return Vue.axios.get('/bills').then((response) => {
      // console.log(response.data)

      // on déclenche la mutation des données une fois le résultat récupéré
      commit('UPDATE_BILLS', response.data)
      commit('UPDATE_LOADING', false)
    })
    
  },
  //permet de récupérer les données d'une facture en fonction d'un id
  getBill({commit}, id) {
    commit('UPDATE_LOADING', true)
    //appel à la BDD (promise)
    return Vue.axios.get('/bills/'+ id).then((response) => {
      // console.log(response.data)
      // on déclenche la mutation des données une fois le résultat récupéré
      commit('UPDATE_BILL', response.data)
      commit('UPDATE_LOADING', false)
    })
  },

  //permet de récupérer les données d'une facture en fonction d'un id
  saveBill({commit}, payload) {

    commit('UPDATE_LOADING', true)
    //s'il y a un id, on modifie une facture existante
    if (payload._id) {
      //l'id de la bill qu'on veut enregistrer
      const id = payload._id
      
      return Vue.axios.patch(`/bills/${id}`, payload).then((response) => {
        // on déclenche la mutation des données une fois le résultat récupéré
        commit('UPDATE_BILL', response.data)
        commit('UPDATE_LOADING', false)
      })

    //sinon, création d'une nouvelle facture
    } else {
      return Vue.axios.post(`/bills`, payload).then((response) => {
        // on déclenche la mutation des données une fois le résultat récupéré
        commit('UPDATE_BILL', response.data)
        commit('UPDATE_LOADING', false)
      })
    }
  },

  deleteBill({commit}, id){
    commit('UPDATE_LOADING', true)
    //appel à la BDD (promise)
    
    return Vue.axios.delete('/bill/'+ id).then((response) => {
      
      console.log(response.data)
      commit('UPDATE_LOADING', false)
    })
  }
}

// les getters sont comme des computed values pour le store.state
const getters = {
  getTwoLatestBills: (state) => {
    return state.bills.slice(0, 1)
  }
}


export {
  namespaced,
  state,
  mutations,
  actions,
  getters
}