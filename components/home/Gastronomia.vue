<template>
  <v-container>
    <v-row align="center">
      <v-col cols="12" md="6" class="k-m-0 k-p-0">
        <v-row justify="center">
          <v-col cols="12" class="k-p-2">
            <v-img :src="imageUrl" alt="the raj" data-aos="fade-down">
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
      </v-col>

      <v-col cols="12" md="6">
        <div class="k-text-grey-60" data-aos="fade-up" data-aos-duration="1500">
          <h3>Gastronomía de gran complejidad</h3>
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
            lograda gracias al trabajo de nueve chefs indios, todos con mas de
            10 años de experiencia en el extranjero. Alguno de ellos se han
            especializado en técnicas tan complejas como el uso del horno
            tandoor.
          </p>
        </div>
        <div
          class="k-mt-6 k-mb-4 k-mb-md-3"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="1500"
        >
          <a
            :href="appUrlMenu1"
            target="_blank"
            class="
              btn btn-md btn-border-animate btn-dark btn-font-2
              slider-text-third
            "
          >
            <span class="btn-text">Ver Menú</span>
            <span class="top button-border"></span>
            <span class="left left-bottom button-border"></span>
            <span class="left left-top button-border"></span>
            <span class="bottom bottom-right button-border"></span>
            <span class="bottom bottom-left button-border"></span>
            <span class="right button-border"></span>
          </a>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DataMixin from '~/mixins/data_mixin'
export default {
  name: 'Gastronomia',

  components: {},

  mixins: [DataMixin],

  props: {},

  data() {
    return {
      imageUrl: 'img/home/gastronomia.jpg',
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

<style lang="scss" scoped></style>
