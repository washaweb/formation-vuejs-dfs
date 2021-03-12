<template>
  <button class="btn">
    <i class="fas mr-2" :class="icon" />
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name:'CustomBtn',
    props: {
      icon: {
        type: String,
        default: 'fa-angle-right'
      }
    }
  }
</script>

<style scoped>

</style>