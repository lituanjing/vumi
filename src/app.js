import Vue from 'vue'
import Button from './button'
import Icon from './icon'

Vue.component('ym-button', Button)
Vue.component('ym-icon', Icon)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: false,
    loading3: false,
  },
  methods: {
    toggleStatus (attr) {
      this[attr] = !this[attr]
    }
  }
})
