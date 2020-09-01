import '~/assets/css/main.css'
import '~/assets/scss/main.scss'
import '~/assets/scss/vendors-and-helpers.scss'

import '~/js'

// Vue
import Vue from 'vue'
import store from '~/store'

Vue.component('example-component', require('~/components/Example.vue').default)

const app = new Vue({
  data () {
    return {
      counter: 1,
      component: false
    }
  },
  store,
  el: '#app'
})
