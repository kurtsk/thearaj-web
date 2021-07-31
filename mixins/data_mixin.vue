<template>
  <span></span>
</template>

<script>
export default {
  name: 'DataMixin',

  components: {},

  props: {},

  data() {
    return {
      appName: 'The Raj',
      appEnv: 'local',
      appDebug: true,
      appUrl: 'https://theraj.cl',

      // # =============================================
      // # ----- IMAGES & ALT ---->
      // # =============================================
      appLogo: '/img/logo.png',
      appBg: '/img/bg.jpg',
      appBgResponsive: '/img/bg_responsive.jpg',
      appLogoAlt: 'the-raj-logo',
      appBgAtl: 'the-raj-bg-img',
      appIcon: 'icon_64.png',

      // # =============================================
      // # ----- METAS ---->
      // # =============================================
      appMetaDescription:
        'The Raj Indian Restaurant promises to offer quality food, at best price with excellent service.',
      appMetaKeys:
        'comida, cocteles, restaurant, postres, excellent service, best price, quality food, gourmet, experience, satisfaction',
      appMetaAutor: 'Kurts Kisis G. - Ekselence SPA',

      // # =============================================
      // # ----- ESTABLISHMENT DATA ---->
      // # =============================================
      appAboutText:
        'Deleitamos su paladar con nuestras emocionantes recetas. Nosotros, en el Restaurante Hindú The Raj, creamos variedad de auténtica comida del Norte y Sur de la India que a todo el mundo le encantaría probar. Ofrecemos cocinas con un notable gusto por la variedad y una mezcla perfecta de sabor oriental. Platos sabrosos que están a su alcance.',

      // # =============================================
      // # ----- BOOK LINK ---->
      // # =============================================
      appUrlBook1: 'https://app.bookingconfirmed.net/book/50/source/2',
      appUrlBookText: 'Reserva aqui',
      appUrlBook2: null,

      // # =============================================
      // # ----- INTERNAL LINKS ---->
      // # =============================================
      appLinkHome: '/',
      appLinkAbout: '/about',
      appLinkBook: '/book',
      appLinkMenu: '/menu',
      appLinkContact: '/contact',

      // # =============================================
      // # ----- MENU PDF LINK ---->
      // # =============================================
      appUrlMenu1: 'https://web.bistroqr.cl/the-raj/',
      appUrlMenu2: '/pdf/the-raj-menu-english.pdf',
      appUrlMenu3: null,

      // # =============================================
      // # ----- DELIVERY ---->
      // # =============================================
      appDelivery: 'https://therajprovidencia.cl',

      // # =============================================
      // # ----- LINK SOCIAL ---->
      // # =============================================
      appUrlFacebook: null,
      appUrlInstagram: 'https://www.instagram.com/theraj.cl/?hl=es',
      appUrlTripAdvisor:
        'https://www.tripadvisor.com/Restaurant_Review-g294305-d8362682-Reviews-The_Raj-Santiago_Santiago_Metropolitan_Region.html',

      // # =============================================
      // # ----- ESTABLISHMENT DATA ---->
      // # =============================================
      appAddress:
        'The Raj. Av. Manuel Montt 1855, Providencia, Santiago, Chile',
      appPhone: '+56 227160077 / 227161177',
      appEmail: 'therajsantiago@gmail.com',
      appSlogan1: 'Ubicado en Av. Manuel Montt 1855,',
      appSlogan2:
        'sirve a sus invaluables clientes la mejor experiencia de comida al estilo hindú',

      // # =============================================
      // # ----- GRAPHICS CONFIGURATIONS ---->
      // # =============================================
      appGraphicsOverlay: 'rgba(0, 0, 0, 0.8)',
      appGraphicsDrawerBg: 'rgba(0, 0, 0, 0.9)',
      appImgUrl: 'statics/img/',
    }
  },

  computed: {
    //
  },

  created() {
    //
  },

  mounted() {
    //
  },

  methods: {
    //
  },
}
</script>
