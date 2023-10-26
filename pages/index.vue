<template>
  <div>
    <banner class="k-elevation-light-4"></banner>
    <section class="k-py-6 k-py-md-10 text-center k-border-bottom">
      <sinopsis></sinopsis>
    </section>
    <section class="k-py-4 k-py-md-12">
      <menu-images></menu-images>
    </section>
    <section class="k-py-6 k-py-md-10 text-center k-border-bottom">
      <gastronomia></gastronomia>
    </section>
    <section class="k-py-6 k-py-md-1">
      <reservas></reservas>
    </section>
    <section
      class="k-py-10 border-bottom border-grey-30 elevation-light-4"
      style="background-color: #f7f7f7"
    >
      <ubicacion></ubicacion>
    </section>
  </div>
</template>

<script>
// import HomeSlider from '~/components/home/HomeSlider'
import Banner from '~/components/home/Banner.vue'
import Sinopsis from '~/components/home/Sinopsis'
import MenuImages from '~/components/home/MenuImages'
import Gastronomia from '~/components/home/Gastronomia'
import Reservas from '~/components/home/reservas'
import Ubicacion from '~/components/home/Ubicacion'
export default {
  name: 'Home',
  components: {
    // HomeSlider,
    Banner,
    Sinopsis,
    MenuImages,
    Gastronomia,
    Reservas,
    Ubicacion,
  },
}
</script>
