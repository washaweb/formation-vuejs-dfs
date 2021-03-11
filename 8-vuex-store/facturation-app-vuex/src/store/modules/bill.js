const namespaced = true

const state = {
  bills: [
    {
      id: 1,
      date: '',
      description: '',
      client: {
        idclient: 2,
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
      date: '',
      description: '',
      client: {
        idclient: 2,
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

const mutations = {}
const actions = {}
const getters = {}


export {
  namespaced,
  state,
  mutations,
  actions,
  getters
}