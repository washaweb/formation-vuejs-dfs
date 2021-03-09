<template>
  <div id="app" class="mt-5">

    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-10">
          <h1>Server list</h1>

          <!-- {{ serverList }} -->
          <p>
            Nombre de serveurs : <span class="h3">{{ totalServers }}</span>
          </p>
          <section class="my-5">
            <div class="row">
              <div class="col">Online</div>
              <div class="col">Nom</div>
              <div class="col">Capacité: </div>
              <div class="col">Vitesse: </div>
              <div class="col">Actions</div>
            </div>

            <server-row 
              v-for="(server, index) in serverList"
              :key="index"
              :server="server"
              :index="index"
              @onDelete="onDeleteServer($event)"
            />

          </section>

          <p><button @click="onAddServer()" class="btn btn-info">Ajouter un serveur</button></p>
          
          <pre>{{ serverList }}</pre>

          <p class="mb-5">
            <strong>capacité totale : {{totalCapacity}}</strong> | <strong>vitesse moyenne {{ speedAverage }}</strong>
          </p>
          
          <h3>Exemple de composant simple (hello)</h3>
          <div class="my-3">
            <Hello message="toto" icon="fa-smile" color="text-danger" />
            <Hello message="tata" icon="fa-poop" />
            <Hello color="text-info" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import ServerRow from '@/components/ServerRow'
import Hello from '@/components/Hello'

export default {
  name: 'App',
  components: {
    ServerRow,
    Hello
  },
  data(){
    return {
      serverList: [
      {
        name: 'Pluton',
        capacity: 500,
        speed: 5,
        online: true
      },
      {
        name: 'Mars',
        capacity: 1000,
        speed: 3,
        online: false
      },
      {
        name: 'Saturne',
        capacity: 2000,
        speed: 4,
        online: true
      }
      ]
    }
  },
  computed: {
    totalServers() {
      return this.serverList.length
    },

    totalCapacity(){
      let totalCapacity = 0
      if (this.serverList.length > 0) {
        for (const server of this.serverList) {
          totalCapacity += server.capacity
        }
      }
      return totalCapacity
    },

    speedAverage(){
      if (this.serverList.length === 0) return 0

      let totalSpeed = 0
      for (const server of this.serverList) {
        totalSpeed += server.speed
      }

      return totalSpeed / this.serverList.length
    }
  },
  methods: {
    onDeleteServer(index) {
      this.serverList.splice(index, 1)
    },

    onAddServer() {
      this.serverList.push({
        name: '',
        capacity: 0,
        speed: 0,
        online: true
      })
    }
  }
}
</script>

<style>

@import url('https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
