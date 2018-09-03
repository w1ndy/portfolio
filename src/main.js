import Vue from 'vue'
import App from './App.vue'
import VueScrollSpy, { Easing } from 'vue2-scrollspy'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFilePdf, faVideo, faDesktop } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter, faInstagram, faLinkedin, faBlogger } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFilePdf)
library.add(faVideo)
library.add(faDesktop)
library.add(faGithub)
library.add(faTwitter)
library.add(faInstagram)
library.add(faLinkedin)
library.add(faBlogger)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueScrollSpy, {
  easing: Easing.Cubic.In
})

new Vue({
  el: '#app',
  render: h => h(App)
})
