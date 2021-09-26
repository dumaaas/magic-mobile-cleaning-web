export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'magic-mobile-cleaning',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // SCSS file in the project
    '@/assets/sass/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/scroll-lock.js', '~/plugins/vue-swal.js', '~/plugins/click-outside.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/strapi', '@nuxtjs/axios', '@nuxtjs/fontawesome'],

  strapi: {
    entities: ['mains', 'header-links', 'contacts', 'galleries'],
    url: 'https://cleaning-cms.herokuapp.com/'
  },

  fontawesome: {
    component: 'fa',
    icons: {
      solid: ['faPhoneAlt', 'faMapMarkerAlt', 'faEnvelope', 'faPlay'],
      brands: ['faFacebookF', 'faInstagram', 'faYoutube'],
      regular: ['faClock'],
    }
  },

  axios: {
    // proxy: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ['vue-swal']
  },

  loading: { color: '#3B8070' },
}
