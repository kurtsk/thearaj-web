<template>
  <div>
    <div class="first jarallax">
      <img :src="imageUrl" class="jarallax-img" alt="" />
      <v-row class="" justify="center" align="center" style="height: 600px">
        <v-col
          cols="12"
          class="text-center k-py-12"
          style="z-index: 11; background-color: rgba(0, 0, 0, 0.64)"
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
        </v-col>
      </v-row>
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
    //
  },

  mounted() {
    //
  },

  methods: {},
}
</script>

<style scoped></style>
