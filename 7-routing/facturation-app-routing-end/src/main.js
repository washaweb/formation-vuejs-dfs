import Vue from 'vue'
import App from './App.vue'

// bootstrap-vue imports
import './plugins/bootstrap-vue'
import './globalComponent'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
