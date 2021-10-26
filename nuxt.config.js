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
        content: '/og-image.jpg'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      },
      {
        name: 'twitter:card',
        hid: 'twitter:card',
        content: 'Magic Mobile Cleaning'
      },
      {
        name: 'twitter:site',
        hid: 'twitter:side',
        content: '@app'
      },
      {
        property: 'twitter:domain',
        hid: 'twitter:domain',
        content: 'magic-mobile-cleaning.netlify.app/'
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
        content: "/og-image.jpg",
      },
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  loading: {
    color: '#19A3A6',
    height: '3px',
    duration: 3000,
    throttle: 0,
    continuous: true,
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
    '@nuxtjs/sitemap',

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

  sitemap: {
    hostname: 'http://localhost:3000',
    gzip: true,
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    },
    i18n: true,
    filter({
      routes
    }) {
      return routes.map(route => {
        const routeName = route.name.replace(/___.{0,}/, '') // remove i18n locale suffix
        // object containing [routeName]: [priority] pairs
        const priorities = {
          index: 1,
          beforeafter: 0.6,
          contact: 0.8,
          services: 0.8
        }

        // assign priority by route name without locale suffix or default (.5)
        return {
          ...route,
          priority: priorities[routeName] || 0.5
        }
      })
    },
  },

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

}
