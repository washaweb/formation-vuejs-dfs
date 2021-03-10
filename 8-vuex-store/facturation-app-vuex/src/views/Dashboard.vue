<template>
  <div>
    <h1>Dashboard</h1>

    <p class="h1 text-center">{{ counter }}</p>
    <b-button @click="onAddCounter()">Ajouter 1 au compteur</b-button>
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
      onAddCounter(){
        // on doit déclencher une action dans le store
        // pour mettre à jour la donnée
        this.$store.dispatch('updateCounter')
      }
    }
  }
</script>

<style scoped>

</style>