import Vue from 'vue'
import App from './App.vue'
import a from './router'
import axios from 'axios'



Vue.config.productionTip = false
Vue.prototype.$axio = axios
new Vue({
  router:a,
  render: h => h(App),
  
}).$mount('#app')

