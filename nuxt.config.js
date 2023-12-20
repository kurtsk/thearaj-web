import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - The Raj',
    title: process.env.APP_NAME || 'The Raj',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.APP_META_DESCRIPTION || 'The Raj Indian Restaurant promises to offer quality food, at best price with excellent service.',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: process.env.APP_META_KEYS || 'Restaurante Hindú, creamos variedad de auténtica comida del Norte y Sur de la India, Deleitamos su paladar con nuestras emocionantes recetas, comida, cocteles, restaurant, postres, excellent service, best price, quality food, gourmet, experience, satisfaction',
      },
      {
        hid: 'author',
        name: 'author',
        content: process.env.APP_META_AUTOR || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Laila:wght@300;400;500;700&display=swap',
      },
    ],
  },

  // loading: '~/components/loading.vue',

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/styles/app.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/aos.client',
    { src: '~/plugins/parallax.js', ssr: false },
    // { src: '~/plugins/vue-awesome-swiper.js', ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/gtm',
    '@nuxtjs/dotenv',
  ],

  gtm: {
    id: 'GTM-NVD6CQQ',
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    'nuxt-mail',
  ],

  mail: {
    message: {
      to: 'info@ekselence.com',
    },
    smtp: {
      host: 'smtp-relay.sendinblue.com',
      port: 587,
      auth: {
        user: 'bkingc@ekselence.com',
        pass: '1zO3C7a4dYqhpfxb',
      },
    },
  },

  axios: {
    // proxy: true
    baseURL: 'https://therajrestaurant.cl',
    // baseURL: 'https://theraj.cl',
    // baseURL: 'http://localhost:3000',
    https: true,
    // https: false,
    progress: true,
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  sitemap: {
    hostname: 'https://therajrestaurant.cl',
    gzip: true,
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date(),
      lastmodrealtime: true,
    },
    exclude: ['/secret', '/admin/**'],
  },

  pwa: {
    optionsPath: './pwa.options.js',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
