<template>
  <div class="row mb-2">
    <div class="col">
      <input class="form-check-input" v-model="server.online" type="checkbox"><label class="form-check-label">online</label>
      <i class="fas fa-check text-info ml-2" v-if="server.online" /> 
    </div>
    <div class="col">
      <input class="form-control" type="text" v-model="server.name" />
    </div>
    <div class="col">
      <input class="form-control" type="number" v-model.number="server.capacity" /> 
    </div>
    <div class="col">
      <input class="form-control" type="number" v-model.number="server.speed" /> 
    </div>
    <div class="col">
      <button class="btn btn-light" @click="onDelete(index)"><i class="fas fa-trash text-danger ml-2" /></button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ServerRow',
    props: {
      server: {
        type: Object,
        required: true
      },
      index: {
        type: Number,
        default: 0
      }
    },
    methods: {
      onDelete(index){
        // console.log(index)
        // avec this.$emit() on déclenche l'émission d'un événement personnalisé
        this.$emit('onDelete', index)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>