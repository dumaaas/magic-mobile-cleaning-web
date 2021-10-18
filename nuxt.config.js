module.exports = {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',
  debug: true,
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

  serverMiddleware: [{
    path: 'api',
    handler: '~/serverMiddleware/api'
  }],

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
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/fontawesome',
    ['nuxt-mail', {
      message: {
        to: 'markodumnic8@gmail.com',
      },
      smtp: {
        host: 'smtp-relay.sendinblue.com',
        port: 587,
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD
        },
      },
    }],
  ],

  fontawesome: {
    component: 'fa',
    icons: {
      solid: ['faPhoneAlt', 'faMapMarkerAlt', 'faEnvelope', 'faPlay'],
      brands: ['faFacebookF', 'faInstagram', 'faYoutube'],
      regular: ['faClock'],
    }
  },

  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ['vue-swal']
  },

  loading: {
    color: '#3B8070'
  },
}
