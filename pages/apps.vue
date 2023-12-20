<template>
  <v-row align="center" justify="center" class="k-py-6" :style="imageUrl">
    <v-container>
      <v-col cols="12" class="text-center">
        <img
          class="logo-home"
          :src="settings.logo_slider"
          style="width: 160px; height: 160px"
          alt="The Raj Logo"
        />
      </v-col>
      <v-col cols="12">
        <div class="apps k-elevation-10">
          <v-row align="center" justify="center">
            <v-col cols="12" class="text-center k-text-white">
              <h4>Descarga nuestra App</h4>
            </v-col>
            <v-col cols="12" class="text-center">
              <a
                href="https://apps.apple.com/us/app/the-raj/id1599973018"
                target="_blank"
                class="btn btn-md btn-border-animate btn-light btn-font-1 slider-text-third"
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-duration="1500"
              >
                <span class="btn-text">APPLE</span>
                <span class="top button-border"></span>
                <span class="left left-bottom button-border"></span>
                <span class="left left-top button-border"></span>
                <span class="bottom bottom-right button-border"></span>
                <span class="bottom bottom-left button-border"></span>
                <span class="right button-border"></span>
              </a>
            </v-col>
            <v-col cols="12" class="text-center">
              <a
                href="https://play.google.com/store/apps/details?id=com.ekselence.theraj"
                target="_blank"
                class="btn btn-md btn-border-animate btn-light btn-font-1 slider-text-third"
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-duration="1500"
              >
                <span class="btn-text">ANDROID</span>
                <span class="top button-border"></span>
                <span class="left left-bottom button-border"></span>
                <span class="left left-top button-border"></span>
                <span class="bottom bottom-right button-border"></span>
                <span class="bottom bottom-left button-border"></span>
                <span class="right button-border"></span>
              </a>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-col cols="12" class="text-center">
        <div class="apps k-elevation-10 k-py-4">
          <v-col cols="12" class="text-center k-text-white">
            <h4 class="gt-md">Acceso directo a nuestra carta</h4>
          </v-col>
          <a
            href="https://qr.bistrosuite.io/the-raj"
            target="_blank"
            class="btn btn-md btn-border-animate btn-light btn-font-1 slider-text-third"
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="1500"
          >
            <span class="btn-text">CARTA ONLINE</span>
            <span class="top button-border"></span>
            <span class="left left-bottom button-border"></span>
            <span class="left left-top button-border"></span>
            <span class="bottom bottom-right button-border"></span>
            <span class="bottom bottom-left button-border"></span>
            <span class="right button-border"></span>
          </a>
        </div>
      </v-col>
    </v-container>
  </v-row>
</template>

<script>
import DataMixin from '~/mixins/data_mixin'
import settings from '~/data/settings'
export default {
  name: 'Apps',

  components: {},

  mixins: [DataMixin],

  props: {},

  data() {
    return {
      settings: [],
      imageUrl: 'background-image: url(img/slider/the-raj-hero-03.jpg)',
    }
  },

  computed: {},

  created() {},

  mounted() {
    this.settings = settings[0]
  },

  methods: {},
  head() {
    return {
      title: 'Apps',
    }
  },
}
</script>

<style lang="scss" scoped></style>
