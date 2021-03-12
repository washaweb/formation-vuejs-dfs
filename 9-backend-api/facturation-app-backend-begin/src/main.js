import Vue from 'vue'
import App from './App.vue'

// bootstrap-vue imports
import './plugins/bootstrap-vue'
import './globalComponent'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
