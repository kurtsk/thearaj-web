<template>
  <swiper :options="swiperOption" style="height: 100vh">
    <swiper-slide
      v-for="screen in screens"
      :key="screen.id"
      :style="{ 'background-image': 'url(' + screen.url + ')' }"
      class="slider-img"
    >
      <!--            <img :src="screen.url" :alt="screen.name"/>-->
      <div
        class="home-contact-info show-for-large home-top home-left k-text-white"
        data-aos="fade-right"
        data-aos-easing="ease-out-cubic"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-duration="1500"
      >
        <p style="text-align: left">
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
        </p>
      </div>

      <div
        class="
          home-contact-info
          show-for-large
          home-top home-right
          k-text-white
        "
        data-aos="fade-left"
        data-aos-easing="ease-out-cubic"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-duration="1500"
      >
        <p style="text-align: right">
          <a style="color: white" href="mailto:therajsantiago@gmail.com">
            therajsantiago@gmail.com
          </a>
          <br />
          (+562) 2716 0077 <br />
        </p>
      </div>
      <span class="dim"></span>

      <div class="slider-content">
        <div>
          <h1
            class="title"
            data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="1500"
          >
            <img
              class="logo-home"
              :src="settings.logo_slider"
              alt="Castillo Forestal Logo"
            />
          </h1>
          <p
            class="slider-text-second k-mt-4 k-mb-6"
            data-aos="fade"
            data-aos-delay="600"
            data-aos-easing="ease-out-cubic"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="1500"
          >
            El verdadero sabor <br />
            de la india en Chile
          </p>
          <v-row>
            <v-col>
              <a
                :href="appUrlBook1"
                target="_blank"
                class="
                  btn btn-md btn-border-animate btn-light btn-font-1
                  slider-text-third
                "
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-duration="1500"
              >
                <span class="btn-text">RESERVAS</span>
                <span class="top button-border"></span>
                <span class="left left-bottom button-border"></span>
                <span class="left left-top button-border"></span>
                <span class="bottom bottom-right button-border"></span>
                <span class="bottom bottom-left button-border"></span>
                <span class="right button-border"></span>
              </a>
            </v-col>
            <v-col>
              <a
                :href="appUrlMenu1"
                target="_blank"
                class="
                  btn btn-md btn-border-animate btn-light btn-font-1
                  slider-text-third
                "
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-duration="1500"
              >
                <span class="btn-text">CARTA</span>
                <span class="top button-border"></span>
                <span class="left left-bottom button-border"></span>
                <span class="left left-top button-border"></span>
                <span class="bottom bottom-right button-border"></span>
                <span class="bottom bottom-left button-border"></span>
                <span class="right button-border"></span>
              </a>
            </v-col>
            <v-col>
              <a
                :href="appDelivery"
                target="_blank"
                class="
                  btn btn-md btn-border-animate btn-light btn-font-1
                  slider-text-third
                "
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-duration="1500"
              >
                <span class="btn-text">DELIVERY</span>
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
      </div>
    </swiper-slide>
    <swiper-slide v-if="!screens">
      <img :src="bgUrl" alt="Background" />
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper.min.css'
import DataMixin from '~/mixins/data_mixin'
import settings from '~/data/settings'
import sliders from '~/data/sliders'
import redes from '~/data/redes'

export default {
  name: 'HomeSlider2',
  components: {
    Swiper,
    SwiperSlide,
  },
  mixins: [DataMixin],
  data: () => ({
    swiperOption: {
      spaceBetween: 0,
      effect: 'fade',
      speed: 3000,
      fadeEffect: {
        crossFade: false,
      },
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },
    screens: [],
    settings: [],
    redes: [],
    bgUrl: '~/img/bg/castillo-forestal-contacto-bg.jpg',
  }),
  computed: {},
  mounted() {
    this.settings = settings[0]
    this.screens = sliders
    this.redes = redes
  },
}
</script>

<style lang="scss" scoped></style>
