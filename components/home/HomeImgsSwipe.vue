<template>
  <vue-picture-swipe :items="items"></vue-picture-swipe>
</template>

<script>
import VuePictureSwipe from 'vue-picture-swipe'
export default {
  name: 'VuePureLightbox',
  components: {
    VuePictureSwipe,
  },
  data() {
    return {
      items: [
        {
          src: './img/home-gallery/castillo-forestal-elhuerto.jpg',
          thumbnail: './img/home-gallery/castillo-forestal-elhuerto-thumb.jpg',
          w: 1500,
          h: 1000,
          title: 'El Huerto',
        },
        {
          src: './img/home-gallery/castillo-forestal-saloncasanova.jpg',
          thumbnail:
            './img/home-gallery/castillo-forestal-saloncasanova-thumb.jpg',
          w: 1500,
          h: 1000,
        },
        {
          src: './img/home-gallery/castillo-forestal-salonjequier.jpg',
          thumbnail:
            './img/home-gallery/castillo-forestal-salonjequier-thumb.jpg',
          w: 1500,
          h: 1000,
        },
        {
          src: './img/home-gallery/castillo-forestal-salonprincipal.jpg',
          thumbnail:
            './img/home-gallery/castillo-forestal-salonprincipal-thumb.jpg',
          w: 1500,
          h: 1000,
        },
        {
          src: './img/home-gallery/castillo-forestal-terraza_inicioc.jpg',
          thumbnail:
            './img/home-gallery/castillo-forestal-terraza_inicioc-thumb.jpg',
          w: 1500,
          h: 1000,
        },
        {
          src: './img/home-gallery/castillo-forestal-torre-centenaria.jpg',
          thumbnail:
            './img/home-gallery/castillo-forestal-torre-centenaria-thumb.jpg',
          w: 1500,
          h: 1000,
        },
      ],
    }
  },
}
</script>

<style scoped></style>
