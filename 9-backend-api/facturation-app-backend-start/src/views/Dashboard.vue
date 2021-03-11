<template>
  <b-container>
    <b-row>
      <b-col>
        <h3><i class="fas fa-angle-down text-muted mr-2"></i>Dashboard</h3>
      </b-col>        
    </b-row>
    <hr>

    <b-row class="mb-4">
      <b-col lg="5">
        <b-card class="shadow p-3 h-100">
          Graph Stats here
        </b-card>
      </b-col>

      <b-col lg="7">
        <b-card class="shadow p-3 h-100" title="Dernières Factures">
          <!-- Exercice :

              Afficher ici le json des factures qui proviennent du store.
            -->
            {{ bills }}
            <hr>

            {{ twoLatestBills }}
        </b-card>
      </b-col>
    </b-row>

    <b-row>
      <b-col lg="5">
        <b-card class="shadow p-3 mb-4">
          <h3>Exemple counter:</h3>
          
          <p class="h1 text-center">{{ counter }}</p>
          <div class="d-flex justify-content-center mt-4">
            <b-button @click="onAddCounter(-1)">- 1 au compteur</b-button>
            <b-button class="ml-2" @click="onAddCounter(1)">+ 1 au compteur</b-button>
          </div>
        </b-card>

      </b-col>
      <b-col lg="7">
        <b-card class="shadow p-3 mb-4" title="Derniers clients">
          clients here
        </b-card>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>

import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    // mapState récupère la donnée bills du store dans le module bill
    // map `this.bills` avec `this.$store.bill.bills`
    ...mapState({
      bills: state => state.bill.bills
    }),

    ...mapGetters({
      //on utilise bill/ comme namespace car notre getters se trouve dans le module bill
      // map `this.twoLatestBills` avec `this.$store.getters.bill/getTwoLatestBills`
      twoLatestBills: 'bill/getTwoLatestBills'
    }),

    // utilisation du store principal (sans utiliser de module)
    // map `this.counter` avec this.$store.state.counter`
    counter() {
      return this.$store.state.counter
    }
  },
  methods: {
    onAddCounter(num){
      // on doit déclencher une action dans le store
      // pour mettre à jour la donnée
      this.$store.dispatch('updateCounter', num)
    }
  }
}
</script>

<style scoped>

</style>