<template>
  <div style="height: 100vh">
    <vue-flux
      ref="slider"
      :options="fluxOptions"
      :images="fluxImages"
      :transitions="fluxTransitions"
    >
      <v-row class="fill-height" align="center" justify="center">
        <div class="display-3">Slide</div>
      </v-row>
    </vue-flux>
  </div>
</template>

<script>
import { VueFlux, Transitions } from 'vue-flux'

export default {
  name: 'HomeSlider',
  components: {
    VueFlux,
    // FluxPagination,
  },
  data: () => ({
    fluxOptions: {
      autoplay: true,
    },
    fluxImages: [
      '~/img/slider/castillo-forestal-slider-bg-01.jpg',
      '~/img/slider/castillo-forestal-slider-bg-02.jpg',
      '~/img/slider/castillo-forestal-slider-bg-03.jpg',
      '~/img/slider/castillo-forestal-slider-bg-04.jpg',
    ],
    fluxTransitions: {
      transitionFade: Transitions.transitionFade,
    },
    bgImg: './svg/castillo-forestal-logo-icon.svg',
  }),
}
</script>

<style scoped></style>
