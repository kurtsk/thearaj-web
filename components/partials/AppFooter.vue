<template>
  <v-footer :absolute="!fixed" app padless dark>
    <v-card class="flex white--text text-center" flat tile>
      <v-card-text>
        <v-btn
          v-for="red in redes"
          :key="red.id"
          class="mx-4"
          :href="red.url"
          target="_blank"
          dark
          icon
        >
          <img style="width: 24px" :src="red.icon" :alt="red.name" />
        </v-btn>
        <div class="my-3">
          © {{ new Date().getFullYear() }}, {{ settings.local_name }}
        </div>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="text-center">
        <div>
          <img
            style="width: 150px"
            src="/img/svg/ekselence-logo-2019-white.svg"
            alt="Ekselence-logo"
          />
        </div>
        <!-- <div>
             Powered & Designed by
         </div>-->
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import settings from '~/data/settings'
import redes from '~/data/redes'

export default {
  name: 'AppFooter',

  components: {},

  props: [],

  data: () => ({
    redes: [],
    settings: [],
    fixed: false,
  }),

  computed: {},

  created() {
    // console.log('2 - created')
  },

  mounted() {
    this.settings = settings[0]
    this.redes = redes
    // console.log(this.setting)
  },

  methods: {},
}
</script>
