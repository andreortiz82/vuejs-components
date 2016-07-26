import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

// For Http Requests
Vue.use(VueResource);

new Vue({
  el: 'body',
  components: { App }
})
