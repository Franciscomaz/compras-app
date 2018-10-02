<template>
  <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="mostrarMenu"
      fixed
      app
  >
    <v-list dense>
      <v-list-tile
          v-for="item in items"
          :key="item.title"
          @click="goTo(item.path)"
      >
        <v-list-tile-action>
          <v-icon >{{item.icon}}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title v-text="item.title"></v-list-tile-title>
        </v-list-tile-content>

      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
    descricao: 'Menu',
    items: [
      { title: 'Produtos', icon: 'view_list', path: '/produtos' },
      { title: 'Compras', icon: 'view_list', path: '/compras' }
    ]
  }),
  methods: {
    goTo (name) {
      this.$router.push({ path: name })
    }
  },
  computed: {
    ...mapState('Navegacao', ['mostrarMenu'])
  }
}
</script>

<style scoped>

</style>
