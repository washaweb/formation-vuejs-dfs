const app = new Vue({
  el: '#app',
  data: {
    servers: [
      {
        id: 1,
        name: 'Prometheus',
        color: 'white',
        background: 'black',
        online: true
      },
      {
        id: 2,
        name: 'Pluton',
        color: '#00ff66',
        background: 'gray',
        online: true
      },
      {
        id: 3,
        name: 'Mars',
        color: 'tomato',
        background: 'yellow',
        online: false
      }
    ]
  }
})