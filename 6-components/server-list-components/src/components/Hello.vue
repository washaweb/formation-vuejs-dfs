<template>
  <div>
    <i class="fas fa-3x ml-2" :class="computedClass" />{{ message }}
  </div>
</template>

<script>
  export default {
    name: 'Hello',
    props: {
      message: {
        type: String,
        default: 'Hello'
      },
      icon: {
        type: String,
        default: 'fa-smile-wink'
      },
      color: {
        type: String,
        default: 'text-warning'
      }
    },
    computed: {
      computedClass(){
        return `${this.icon} ${this.color}`
      }
    }
  }
</script>
