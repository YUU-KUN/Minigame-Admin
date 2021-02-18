import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAxios from 'vue-axios'
import axios from 'axios'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import VueCurrency from 'vue-currency-filter'
import moment from 'moment'
import Multiselect from 'vue-multiselect'

import 'bootstrap-vue/dist/bootstrap-vue.css' //import bootstrap-vue doang, gak perlu bootstrap biasa,or have fun with that 'beautiful' layout

// Vue.use(Multiselect)
Vue.component('multiselect', Multiselect)

Vue.use(VueAxios, axios); //HARUS VueAxios dulu, or enjoy your protocol ERROR
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('D MMM YYYY hh:mm')
  }
})

Vue.use(VueCurrency, {
  name: 'rupiah',
  symbol : 'Rp',
  thousandsSeparator: '.',
  fractionCount: 2,
  fractionSeparator: ',',
  symbolPosition: 'front',
  symbolSpacing: true,
  avoidEmptyDecimals: undefined,
})
Vue.config.productionTip = false

const token = localStorage.getItem('Authorization')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

require('dotenv').config();

axios.defaults.baseURL = process.env.VUE_APP_API_URL
// axios.defaults.headers.common['Authorization'] = process.env.VUE_APP_API_AUTHORIZATION;
axios.defaults.headers.common['x-access-token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhMDQyMzE0My04NWEwLTRhMWItYjhiZS0xNmZlYTZkY2VhNDYiLCJuYW1hIjoiU3VwZXIgQWRtaWVuIiwicm9sZSI6MSwibGV2ZWwiOjEsImlhdCI6MTYxMzYwMjUxOSwiZXhwIjoxNjEzNjg4OTE5fQ.RBu9-1_jR88YPkyYCJl1G6UgTU8TaaB81nR2Ocptcvg';
axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
