<template>
  <div>
    <!--    <span class="dim"></span>-->
    <div class="first jarallax">
      <!--    <v-parallax :src="imageUrl" height="850">-->
      <img :src="imageUrl" class="jarallax-img" alt="" />
      <!--      <h1>Hello Jarallax</h1>-->

      <!--    <img :src="imageUrl" class="jarallax-img" alt="" />-->
      <v-row class="" justify="center" align="center" style="height: 600px">
        <v-col
          cols="12"
          class="text-center"
          style="z-index: 11; background-color: rgba(0, 0, 0, 0.44)"
        >
          <h1
            class="k-text-white k-mb-6"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Gastronomia propia del sur de India.
          </h1>
          <h5 class="k-text-white k-px-12 k-mb-6 d-none d-sm-flex">
            Una rica cultura gastronómica en la que destaca el gusto por las
            preparaciones condimentadas, producto de un clima y agricultura
            propicios para el desarrollo de diferentes tipos de especias,
            lentejas y arroz.
          </h5>

          <!--          <a
            href=""
            class="
              btn btn-md btn-border-animate btn-dark btn-font-2
              slider-text-third
            "
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <span class="btn-text">Reserva aqui</span>
            <span class="top button-border"></span>
            <span class="left left-bottom button-border"></span>
            <span class="left left-top button-border"></span>
            <span class="bottom bottom-right button-border"></span>
            <span class="bottom bottom-left button-border"></span>
            <span class="right button-border"></span>
          </a>-->
        </v-col>
      </v-row>
      <!--    </v-parallax>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Reservas',

  components: {},

  props: [],

  data: () => ({
    imageUrl: 'img/home/the-raj-reservas.jpg',
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
