<template>
  <div>
    <h1>Factures</h1>
    <!-- Exercice : recréer le template de la liste des factures en fonction de l'image fournie en exemple 
    Vous devez utiliser un b-table de Bootstrap-vue, en fin de chaque ligne, ajouter un bouton qui permet d'accéder au détail de la facture 
    via un lien du router <router-link :to="link">-->
  </div>
</template>

<script>
  export default {
    name: 'Factures',
    data(){
      return {
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
    }
  }
</script>

<style scoped>

</style>