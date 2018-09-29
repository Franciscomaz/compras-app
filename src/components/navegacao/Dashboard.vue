<template>
  <v-layout wrap>
    <v-navigation-drawer
        :clipped="$vuetify.breakpoint.lgAndUp"
        v-model="drawer"
        fixed
        app
    >
      <v-list dense>
        <v-list-tile
            v-for="item in items"
            :key="item.title"
            @click=""
        >
          <v-list-tile-action>
            <v-icon v-if="item.icon">{{item.icon}}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>

        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        color="blue darken-3"
        dark
        app
        fixed
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">Lista de compras</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>shopping_cart</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <router-view/>
        </v-layout>
      </v-container>
    </v-content>
  </v-layout>

  </template>

<script>
export default {
  data: () => ({
    name: 'Dashboard',
    drawer: false,
    mini: false,
    items: [
      { title: 'Dashboard', icon: 'dashboard', path: 'home' },
      { title: 'Lista de compras', icon: 'view_list', path: 'home' },
      { title: 'Carrinho de compras', icon: 'shopping_cart', path: 'home' },
      { title: 'Sair', icon: 'exit_to_app', path: 'login' }
    ]
  }),
  props: {
    source: String
  },
  methods: {
    goTo (name) {
      this.$router.push({ name: name })
    },
    changeSize () {
      this.mini = !this.mini
    }
  }
}
</script>

  <style scoped>

  </style>
