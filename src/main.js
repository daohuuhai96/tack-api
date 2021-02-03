import Vue from 'vue'
import App from './App.vue'
import routes from './router'
import api from "./plugins/axios";

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import './styles/app.css'

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false
Vue.use(api);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
