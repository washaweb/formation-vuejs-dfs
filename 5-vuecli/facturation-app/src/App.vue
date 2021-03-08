<template>
  <!-- template du composant (HTML) -->
  <section id="app">

    <div class="container">
      
      <h1 class="text-center">
        Editer une facture
      </h1>

      <div>
        Exemple d'utilisation des icônes font-awesome : <i class="fas fa-plus-circle text-primary" /> <i class="fas fa-trash text-danger" />
      </div>
      <pre>
        Donnée d'une facture {{ bill }}
      </pre>
    </div>

  </section>
  
</template>


<script>
// controleur du composant
export default {
  name: 'App',
  //data dans un composant Vue doit être une fonction qui retourne un objet
  data() {
    return {
      bill: {
        id: 1,
        date: '',
        description: '',
        client: {
          idclient: 1,
          firstname: 'toto',
          lastname: 'tata'
        },
        prestations: [{
          description: '',
          qty: 1,
          price: 450.00
        }],
        discount: 0.00,
        paid: 0.00
      }
    }
  },
  methods: {},
  computed: {}
}
</script>

<style>

/* import du framework (css) Boostrap */
@import url('https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css');
/* import du framework (css) Font-Awesome */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css');

</style>
