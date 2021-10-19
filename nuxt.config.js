module.exports = {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',
  debug: true,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Magic Mobile Cleaning –  Proffesional car detailing services',
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
        content: "If you love your car, we will make it shine! Proffesional detailing keeps the vehicle in it's best possible condition."
      },
      {
        hid: 'robots',
        name: 'robots',
        content: 'index, follow'
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website"
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://magic-mobile-cleaning-8df5a.web.app",
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: "If you love your car, we will make it shine! Proffesional detailing keeps the vehicle in it's best possible condition."
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Magic Mobile Cleaning –  Proffesional car detailing services'
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: '/cover.png'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      },
      {
        hid: "twitter:url",
        name: "twitter:url",
        content: "https://magic-mobile-cleaning-8df5a.web.app",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "Magic Mobile Cleaning –  Proffesional car detailing services",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: "If you love your car, we will make it shine! Proffesional detailing keeps the vehicle in it's best possible condition.",
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "/cover.png",
      },
    ],
    link: [{
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/logo.svg'
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
      solid: ['faPhoneAlt', 'faMapMarkerAlt', 'faEnvelope', 'faPlay', 'faTimes'],
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
