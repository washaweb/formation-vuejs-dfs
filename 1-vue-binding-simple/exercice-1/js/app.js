

// bootstrap de notre application VueJS
const app = new Vue({
  el: '#app',   //élément du DOM visé qui contient notre app
  data: {
    debug: true,
    users: [
      {
        name: 'John',
        lastname: 'Doe',
        age: 21,
        gender: 'male',
        online: true,
        hobbies: ['guitare', 'Dance', 'Coding']
      },
      {
        name: 'Maria',
        lastname: 'Doe',
        age: 20,
        gender: 'female',
        online: false,
        hobbies: ['guitare', 'Piano', 'Cooking']
      },
      {
        name: 'Bob',
        lastname: 'Doe',
        age: 12,
        gender: 'male',
        online: false,
        hobbies: ['Legos', 'Cinema', 'Youtube']
      }
    ]
  }
})

