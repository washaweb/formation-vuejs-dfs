const app = new Vue({
  el: '#app',
  data: {
    dateAff: '',
    user: {
      firstname: 'John',
      lastname: 'Doe'
    }
  },
  computed: {
    fullname() {
      return this.user.firstname + ' ' + this.user.lastname
    },
    reverseFullname(){
      return this.fullname.split('').reverse().join('')
    },
    now() {
      // cette date ne sera calculée qu'une seule fois
      return new Date().toISOString()
    }
  },
  methods: {
    getDate(){
      //à chaque fois que j'appelle getDate, je raffraichis la date
      this.dateAff =  new Date().toISOString()
    }
  }
})