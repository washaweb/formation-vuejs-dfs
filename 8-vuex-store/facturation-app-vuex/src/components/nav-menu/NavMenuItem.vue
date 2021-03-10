<template>
  <li class="lead">
    <span class="fa-li">
      <i class="fas fa-angle-right"></i>
    </span>
    <router-link :to="link.path" class="text-secondary">
      {{ link.name }}
    </router-link>
  </li>
</template>

<script>
  export default {
    name: 'NavMenuItem',
    props: {
      link: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>

.router-link-exact-active {
  color: #007bff !important;
}

</style>