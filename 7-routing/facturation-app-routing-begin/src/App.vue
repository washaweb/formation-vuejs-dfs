<template>
  <div>
    <Navigation />
    <EditBill />
  </div>

</template>


<script>
import Navigation from '@/components/Navigation.vue'
import EditBill from '@/views/EditBill.vue'
// controleur du composant
export default {
  name: 'App',
  components: {
    EditBill,
    Navigation
  }
}
</script>

<style>

/* REMPLACÉ PAR BOOTSTRAP-VUE : import du framework (css) Boostrap */
/* @import url('https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css'); */

/* import du framework (css) Font-Awesome */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
