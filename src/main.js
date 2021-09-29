import Vue from 'vue' ;
import App from './App.vue'
import './components/plugins/vue-axios'
import './components/plugins/vue-moment'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
