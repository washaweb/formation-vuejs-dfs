<template>
  <div>
    <h1>Dashboard</h1>


    <!-- Exercice :

      Afficher ici le json des factures qui proviennent du store.
    
    
    -->



    <p class="h1 text-center">{{ counter }}</p>
    <div class="d-flex justify-content-center mt-4">
      <b-button @click="onAddCounter(-1)">- 1 au compteur</b-button>
      <b-button class="ml-2" @click="onAddCounter(1)">+ 1 au compteur</b-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Dashboard',
    computed: {
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