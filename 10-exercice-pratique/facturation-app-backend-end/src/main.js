import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = 'http://localhost:3000';

// bootstrap-vue imports
import './plugins/bootstrap-vue'
import './globalComponent'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)



new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
