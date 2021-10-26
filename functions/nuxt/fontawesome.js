import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
  FontAwesomeLayers,
  FontAwesomeLayersText,
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

import {
  faPhoneAlt as freeFasFaPhoneAlt,
  faMapMarkerAlt as freeFasFaMapMarkerAlt,
  faEnvelope as freeFasFaEnvelope,
  faPlay as freeFasFaPlay,
  faTimes as freeFasFaTimes
} from '@fortawesome/free-solid-svg-icons'

import {
  faFacebookF as freeFabFaFacebookF,
  faInstagram as freeFabFaInstagram,
  faYoutube as freeFabFaYoutube
} from '@fortawesome/free-brands-svg-icons'

import {
  faClock as freeFarFaClock
} from '@fortawesome/free-regular-svg-icons'

library.add(
  freeFasFaPhoneAlt,
  freeFasFaMapMarkerAlt,
  freeFasFaEnvelope,
  freeFasFaPlay,
  freeFasFaTimes,
  freeFabFaFacebookF,
  freeFabFaInstagram,
  freeFabFaYoutube,
  freeFarFaClock
)

config.autoAddCss = false

Vue.component('fa', FontAwesomeIcon)
Vue.component('faLayers', FontAwesomeLayers)
Vue.component('faLayersText', FontAwesomeLayersText)
