import Vue from 'vue'
import App from './App.vue'
import VueScrollSpy, { Easing } from 'vue2-scrollspy'

Vue.use(VueScrollSpy, {
  easing: Easing.Cubic.In
})

new Vue({
  el: '#app',
  render: h => h(App)
})
