<template>
  <v-app class="k-bg-white">
    <app-bar></app-bar>
    <v-main>
      <nuxt />
    </v-main>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import AppBar from '~/components/partials/AppBar.vue'
import AppFooter from '~/components/partials/AppFooter.vue'
export default {
  components: { AppBar, AppFooter },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>
