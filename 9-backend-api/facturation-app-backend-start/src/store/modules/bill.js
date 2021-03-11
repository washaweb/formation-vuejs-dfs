import _ from 'lodash'

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
  ]
}

const mutations = {
  // met à jour l'état de bill
  UPDATE_BILL(state, payload){
    state.bill = payload
  },
  UPDATE_BILLS(state, payload){
    state.bills = payload
  },
}

const actions = {
  
  //permet de récupérer les données d'une facture en fonction d'un id
  getBill({state, commit}, id) {

    //appel à la BDD (promise)

    // en attendant on fait semblant d'avoir une BDD...
    // on cherche la facture dans la BDD (ici pour l'instant le state local)
    //_.cloneDeep => permet de faire une copie profonde de l'objet trouvé dans le tableau
    //pour ne pas faire référence à l'objet original du tableau, mais bien un nouvel objet en mémoire
    const data = _.cloneDeep( state.bills.find(bill => bill.id == id) || {} )

    // console.log(state.bills.find(bill => bill.id == id ))
    // on déclenche la mutation des données une fois le résultat récupéré
    commit('UPDATE_BILL', data)
  },

  //permet de récupérer les données d'une facture en fonction d'un id
  saveBill({state, commit}, payload) {
    
    //l'id de la bill qu'on veut enregistrer
    const id = payload.id
    
    //faire un appel à la BDD pour mettre à jour côté server la bill correspondante
    //ici on fait semblant...
    // on doit enregistrer les données en BDD (ici pour l'instant le state local)
    for (let i = 0; i < state.bills.length; i++){
      const item = state.bills[i]
      if (item.id == id) {
        state.bills[i] = _.cloneDeep( payload )
      }
    }
    // on déclenche la mutation des données une fois le résultat récupéré
    commit('UPDATE_BILLS', _.cloneDeep(state.bills) )
  },


  deleteBill({state, commit}, id){
    //appel à la BDD (promise)

    // en attendant on fait semblant d'avoir une BDD...
    // on cherche la facture dans la BDD (ici pour l'instant le state local)
    //_.cloneDeep => permet de faire une copie profonde de l'objet trouvé dans le tableau
    //pour ne pas faire référence à l'objet original du tableau, mais bien un nouvel objet en mémoire
    const data = _.cloneDeep( state.bills.filter(bill => bill.id != id) || {} )

    console.log(data)
    // on déclenche la mutation des données une fois le résultat récupéré
    commit('UPDATE_BILLS', data)
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