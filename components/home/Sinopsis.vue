<template>
  <v-container>
    <v-row align="center">
      <v-col cols="12" md="6">
        <div class="" data-aos="fade-up" data-aos-duration="1500">
          <h3 class="k-text-grey-60">Nosotros</h3>
        </div>
        <div
          class="k-px-3 k-mt-4"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1500"
          data-aos-easing="ease-out-cubic"
          data-aos-anchor-placement="bottom-bottom"
        >
          <p class="text-justify k-text-grey-50">
            Perteneciente a una cadena de restaurants con presencia en Canada,
            Dubái e India, The Raj es un espacio ideado para marcar la
            diferencia en la oferta gastronómica chilena partir de la más amplia
            variedad de platos y gracias a preparaciones fieles a la tradición
            culinaria del sur de India..
          </p>
        </div>
      </v-col>
      <v-col cols="12" md="6" class="">
        <v-img
          max-width="580"
          :src="img"
          alt="the raj foto"
          data-aos="fade-down"
          data-aos-delay="600"
          data-aos-duration="2500"
          data-aos-easing="ease-out-cubic"
          data-aos-anchor-placement="bottom-bottom"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Sinopsis',

  components: {},

  props: [],

  data: () => ({
    img: 'img/home/the-raj-historia.jpg',
  }),

  computed: {},

  created() {
    // eslint-disable-next-line
    console.log('2 - created')
  },

  mounted() {
    // eslint-disable-next-line
    console.log('4 - mounted')
  },

  methods: {},
}
</script>

<style scoped></style>
