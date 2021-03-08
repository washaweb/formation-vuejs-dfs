

// bootstrap de notre application VueJS
const app = new Vue({
  el: '#toto',   //élément du DOM visé qui contient notre app
  data: {
    title: 'Hello World', //des données de l'application
    title2: 'Coucou',
    year: new Date().getFullYear(),
    image: 'https://picsum.photos/id/18/200/300',
    image2: 'https://picsum.photos/id/132/200/300',
    active: true,
    product: {
      name: 'Chaussette',
      image: 'https://picsum.photos/id/1/200/300',
      stock: 100,
      rating: 2,
      details: ['80% coton', '20% polyester', 'Genre mixte', 'rouge']
    }
  }
})




