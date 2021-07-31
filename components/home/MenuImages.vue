<template>
  <v-row justify="center" align="center" class="k-bg-white">
    <v-col cols="12" md="3" class="k-px-3 k-p-0">
      <div class="mosaic-item mosaic-loaded mosaic-530">
        <a class="mosaic-link" :href="image01Link">
          <div
            class="mosaic-img"
            data-aos="fade-up"
            data-aos-duration="1500"
            :style="image01"
          ></div>
          <div class="mosaic-info" style="color: #ffffff">
            <div
              class="mosaic-text"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              Eventos
            </div>
          </div>
          <div
            class="mosaic-item-overlay"
            data-aos="fade-down"
            data-aos-duration="1500"
          ></div>
        </a>
      </div>
    </v-col>

    <v-col cols="12" md="3" class="k-px-3 k-p-0">
      <div class="mosaic-item mosaic-loaded mosaic-300">
        <a class="mosaic-link" :href="image02Link">
          <div
            class="mosaic-img"
            data-aos="fade-up"
            data-aos-duration="1500"
            :style="image02"
          ></div>
          <div class="mosaic-info" style="color: #ffffff">
            <div
              class="mosaic-text"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              Giftcard
            </div>
          </div>
          <div
            class="mosaic-item-overlay"
            data-aos="fade-down"
            data-aos-duration="1500"
          ></div>
        </a>
      </div>
      <div class="mosaic-item mosaic-loaded" style="height: 200px">
        <a class="mosaic-link" :href="appUrlBook1">
          <div
            class="mosaic-img"
            data-aos="fade-up"
            data-aos-duration="1500"
            :style="image03"
          ></div>
          <div class="mosaic-info" style="color: #ffffff">
            <div
              class="mosaic-text"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              Reservas
            </div>
          </div>
          <div
            class="mosaic-item-overlay"
            data-aos="fade-down"
            data-aos-duration="1500"
          ></div>
        </a>
      </div>
    </v-col>

    <v-col cols="12" md="3" class="k-px-3 k-p-0">
      <div class="mosaic-item mosaic-loaded" style="height: 200px">
        <a class="mosaic-link" :href="appUrlMenu1">
          <div
            class="mosaic-img"
            data-aos="fade-up"
            data-aos-duration="1500"
            :style="image04"
          ></div>
          <div class="mosaic-info" style="color: #ffffff">
            <div
              class="mosaic-text"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              Menú
            </div>
          </div>
          <div
            class="mosaic-item-overlay"
            data-aos="fade-down"
            data-aos-duration="1500"
          ></div>
        </a>
      </div>
      <div class="mosaic-item mosaic-loaded mosaic-300">
        <a class="mosaic-link" :href="image05Link">
          <div
            class="mosaic-img"
            data-aos="fade-up"
            data-aos-duration="1500"
            :style="image05"
          ></div>
          <div class="mosaic-info" style="color: #ffffff">
            <div
              class="mosaic-text"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              Prensa
            </div>
          </div>
          <div
            class="mosaic-item-overlay"
            data-aos="fade-down"
            data-aos-duration="1500"
          ></div>
        </a>
      </div>
    </v-col>

    <v-col cols="12" md="3" class="k-px-3 k-p-0">
      <div class="mosaic-item mosaic-loaded mosaic-530">
        <a class="mosaic-link" :href="image06Link">
          <div
            class="mosaic-img"
            data-aos="fade-up"
            data-aos-duration="1500"
            :style="image06"
          ></div>
          <div class="mosaic-info" style="color: #ffffff">
            <div
              class="mosaic-text"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              Contacto
            </div>
          </div>
          <div
            class="mosaic-item-overlay"
            data-aos="fade-down"
            data-aos-duration="1500"
          ></div>
        </a>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import imageList from '~/data/menu-img-list'
import DataMixin from '~/mixins/data_mixin'

export default {
  name: 'MenuImages',

  components: {},

  mixins: [DataMixin],

  props: [],

  data: () => ({
    image01: 'background-image: url(img/menu-img/01.jpg)',
    image01Link: '#',
    image02: 'background-image: url(img/menu-img/02.jpg)',
    image02Link: '#',
    image03: 'background-image: url(img/menu-img/03.jpg)',
    image03Link: '/reservas',
    image04: 'background-image: url(img/menu-img/04.jpg)',
    image04Link: 'https://web.bistroqr.cl/the-raj/',
    image05: 'background-image: url(img/menu-img/05.jpg)',
    image05Link: '#',
    image06: 'background-image: url(img/menu-img/06.jpg)',
    image06Link: '/contacto',
    imageList: [],
  }),

  computed: {},

  created() {
    // eslint-disable-next-line
    console.log('2 - created')
  },

  mounted() {
    this.imageList = imageList
  },

  methods: {},
}
</script>

<style scoped></style>
