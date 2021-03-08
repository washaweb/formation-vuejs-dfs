const app = new Vue({
  el: '#app',
  data: {
    count: 0,
    imageTemp: 'https://picsum.photos/200/300?image=3',
    product: {
      name: 'Socks',
      image: 'https://picsum.photos/200/300?image=3',
      inventory: 100,
      details: ['80% coton', '20% polyester', 'Genre mixte'],
      variants: [
        {
            variantId: 2234,
            variantColor: 'vert',
            variantImage: 'https://picsum.photos/200/300?image=1'
        },
        {
            variantId: 2235,
            variantColor: 'bleu',
            variantImage: 'https://picsum.photos/200/300?image=2'
        }
      ],
    }
  },
  methods: {
    // méthode déclenchée par l'événement @click
    onMinusCount: function(){
      if(this.count <= 0) {
        // appelle une autre méthode de l'application avec le mot clé `this.`
        this.alertMessage()
        return
      }
      this.count--
    },
    // deuxième méthode
    alertMessage: function(text) {
      console.log(text)
      if(!text) text = 'Le compteur est à 0'
      alert(text);
    },

    onUpdateVariant(image){
      console.log(image)
      this.product.image = image
    },

    verifField(){
      if(this.count < 0) this.count = 0
    }
  }
})