import Vue from 'vue'
import App from './App.vue'
import VueScrollSpy, { Easing } from 'vue2-scrollspy'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFilePdf, faVideo, faDesktop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFilePdf)
library.add(faVideo)
library.add(faDesktop)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueScrollSpy, {
  easing: Easing.Cubic.In
})

new Vue({
  el: '#app',
  render: h => h(App)
})
