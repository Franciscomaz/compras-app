<template>
  <v-layout wrap>
    <Menu></Menu>
    <v-toolbar
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        color="blue darken-3"
        dark
        app
        fixed
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="abrirOuFecharMenu()"></v-toolbar-side-icon>
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
import { mapActions } from 'vuex'
import Menu from './Menu'

export default {
  components: { Menu },
  data: () => ({
    descricao: 'Dashboard'
  }),
  methods: {
    ...mapActions('Navegacao', ['abrirOuFecharMenu'])
  }
}
</script>

<style scoped>

</style>
