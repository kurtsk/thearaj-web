<template>
  <transition-group name="thumbnailfade" tag="div">
    <img
      v-for="thumb in filteredImages"
      :key="thumb.id"
      :src="thumbnailDir + thumb.name"
      :alt="thumb.alt"
      :title="thumb.alt"
      @click="showLightbox(thumb.name)"
    />
  </transition-group>

  <!--  <lightbox
    id="mylightbox"
    ref="lightbox"
    :images="images"
    :directory="thumbnailDir"
    :filter="galleryFilter"
    :timeout-duration="5000"
  />-->
</template>
<script>
const photoDir = './img/home-gallery/'

const imageList = [
  {
    name: 'castillo-forestal-elhuerto.jpg',
    alt: 'The Dolomites',
    filter: 'nature',
    id: 'image1',
  },

  {
    name: 'castillo-forestal-saloncasanova.jpg',
    alt: 'It is a bird on a tree!',
    filter: 'animals',
    id: 'image2',
  },

  {
    name: 'castillo-forestal-salonjequier.jpg',
    alt: 'I will live here someday',
    filter: 'nature',
    id: 'image3',
  },

  {
    name: 'castillo-forestal-salonprincipal.jpg',
    alt: 'Friendly bear',
    filter: 'animals',
    id: 'image4',
  },

  {
    name: 'castillo-forestal-terraza_inicioc.jpg',
    alt: 'A worthy hike',
    filter: 'nature',
    id: 'image5',
  },

  {
    name: 'castillo-forestal-torre-centenaria.jpg',
    alt: 'Monument Valley',
    filter: 'nature',
    id: 'image6',
  },
]

export default {
  name: 'HomeImgsLightbox',
  components: {},
  data() {
    return {
      thumbnailDir: photoDir,
      images: imageList,
      galleryFilter: 'all',
    }
  },
  computed: {
    filteredImages() {
      if (this.galleryFilter === 'all') {
        return this.images
      } else {
        return this.images.filter(
          (image) => image.filter === this.galleryFilter
        )
      }
    },
  },
  methods: {
    showLightbox(imageName) {
      this.$refs.lightbox.show(imageName)
    },
    updateFilter(filterName) {
      this.galleryFilter = filterName
    },
  },
}
</script>

<style scoped>
#filters {
  width: 500px;
  margin: 0px auto;
}

#filters span {
  margin: 15px;
}

img {
  width: 270px;
  height: 180px;
  margin: 20px;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.4s ease;
}

.thumbnailfade-leave-active,
.thumbnailfade-enter-active {
  transition: all 0.4s ease;
}

.thumbnailfade-enter-active {
  transition-delay: 0.4s;
}

.thumbnailfade-enter,
.thumbnailfade-leave-to {
  opacity: 0;
}
</style>
