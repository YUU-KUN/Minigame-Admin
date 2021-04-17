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
import numeral from 'numeral'
import 'bootstrap-vue/dist/bootstrap-vue.css' //import bootstrap-vue doang, gak perlu bootstrap biasa, or have fun with that 'beautiful' layout

// Vue.use(Multiselect)
Vue.component('multiselect', Multiselect)

Vue.use(VueAxios, axios); //HARUS VueAxios dulu, or enjoy your protocol ERROR
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).locale('id').format('D MMM YYYY HH:mm')
  }
})

Vue.filter("formatNumber", function (value) {
  return numeral(value).format("0,0"); // displaying other groupings/separators is possible, look at the docs
});


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

require('dotenv').config();
axios.defaults.baseURL = process.env.VUE_APP_API_URL
axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'

const token = localStorage.getItem('Authorization')
if (token) {
  console.log('Token Exist');
  Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer '+ token
  axios.defaults.headers.common['Authorization'] = 'Bearer '+ token
} else {
  console.log('Token Not Found');
  store.dispatch('logout')
}


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
