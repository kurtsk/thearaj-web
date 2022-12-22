<template>
  <div>loading</div>
</template>

<script>
export default {
  name: 'Loading',

  components: {},

  mixins: [],

  props: {},

  data() {
    return {
      isLoaded: false,
    }
  },

  computed: {},

  created() {},

  mounted() {},

  methods: {
    loading() {
      document.onreadystatechange = () => {
        if (document.readyState === 'complete') {
          this.isLoaded = true
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
