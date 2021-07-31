<template>
  <v-row justify="center" align="center">
    <v-col
      cols="12"
      md="4"
      data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
      data-aos-anchor-placement="bottom-bottom"
      data-aos-duration="1500"
    >
      <v-card flat tile color="#f7f7f7" class="text-center">
        <v-card-text>
          <v-icon>mdi-phone</v-icon>
          <h5 class="my-4">Teléfono</h5>
          <p>(+562) 2716 0077 <br /></p>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col
      cols="12"
      md="4"
      data-aos="fade-down"
      data-aos-easing="ease-out-cubic"
      data-aos-anchor-placement="bottom-bottom"
      data-aos-delay="500"
      data-aos-duration="1500"
    >
      <v-card flat tile color="#f7f7f7" class="text-center">
        <v-card-text>
          <v-icon>mdi-map-marker-check</v-icon>
          <h5 class="my-4">Dirección</h5>
          <p>Avenida Manuel Montt 1855, Providencia región Metropolitana.</p>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col
      cols="12"
      md="4"
      data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
      data-aos-anchor-placement="bottom-bottom"
      data-aos-delay="1000"
      data-aos-duration="1500"
    >
      <v-card flat tile color="#f7f7f7" class="text-center">
        <v-card-text>
          <v-icon>mdi-av-timer</v-icon>
          <h5 class="my-4">Horarios</h5>
          <p>
            Lun - Sab: 12:30 hrs - 22:00 hrs <br />
            Dom: 12:30 hrs - 17:30 hrs
          </p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Ubicacion',

  components: {},

  mixins: [],

  props: {},

  data() {
    return {
      //
    }
  },

  computed: {},

  created() {},

  mounted() {},

  methods: {},
}
</script>

<style lang="scss" scoped></style>
