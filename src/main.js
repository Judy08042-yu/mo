import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Mint from 'mint-ui'
import router from './assets/js/router.js'
import store from './assets/js/data.js'
import './assets/css/cssreset.css'
import './assets/font/iconfont.css'
import axios from 'axios'
import "../node_modules/mint-ui/lib/style.css"
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(Mint)
Vue.prototype.$http=axios

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
