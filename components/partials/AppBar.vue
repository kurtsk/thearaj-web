<template>
  <div>
    <v-app-bar
      :color="settings.drawerBg"
      flat
      fixed
      dark
      class="hide-for-large"
    >
      <v-app-bar-nav-icon
        class="d-flex d-md-none"
        @click.stop="drawer = !drawer"
      >
      </v-app-bar-nav-icon>

      <div class="flex-grow-1"></div>
      <v-btn
        text
        dark
        :href="'tel:' + settings.local_phone"
        icon
        class="d-sm-flex d-md-none"
      >
        <v-icon>mdi-phone</v-icon>
      </v-btn>
    </v-app-bar>
    <v-app-bar
      color="white"
      fixed
      inverted-scroll
      elevate-on-scroll
      height="80px"
      class="show-for-large"
    >
      <v-toolbar-title>
        <img style="width: 80px" :src="settings.logo_black_menu" alt="logo" />
      </v-toolbar-title>
      <div class="flex-grow-1"></div>
      <v-btn
        v-for="item in itemsMenu"
        :key="item.id"
        :href="item.url"
        text
        light
        class="d-none d-md-flex"
      >
        <span class="app-bar-item">{{ item.name }}</span>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      dark
      :color="settings.drawerBg"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            {{ settings.local_name }}
          </v-list-item-title>
          <v-list-item-subtitle> Menu </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item v-for="item in itemsMenu" :key="item.id" :href="item.url">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-uppercase">{{
              item.name
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import redesHome from '~/data/redes'
import settings from '~/data/settings'
import appLinks from '~/data/toolbar'
export default {
  name: 'AppBar',

  data: () => ({
    appName: 'The Raj',
    drawer: false,
    itemsMenu: [],
    settings: [],
    redesHome: [],
    group: null,
    right: null,
  }),

  watch: {
    group() {
      this.drawer = false
    },
  },

  mounted() {
    this.assignValue()
  },

  methods: {
    assignValue() {
      // this.drawerBg = 'rgba(0, 0, 0, 0.6)';
      this.itemsMenu = appLinks
      this.settings = settings[0]
      this.redesHome = redesHome
      // console.log(this.redes);
    },
  },
}
</script>

<style scoped></style>
