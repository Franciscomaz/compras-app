<template>
  <v-layout wrap>
    <carrinho-de-compras></carrinho-de-compras>
    <Menu></Menu>
    <v-toolbar
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        color="white darken-3"
        dark
        app
        fixed
        dense
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3 text--secondary">
        <v-toolbar-side-icon color="text--secondary" @click.stop="abrirOuFecharMenu()"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">Lista de compras</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>

        <v-badge bottom left color="blue" v-show="quantidade() !== 0">
          <span slot="badge" v-text="quantidade()"></span>
        </v-badge>
        <v-icon @click="toggleCarrinhoDeCompras(true)" class="text--secondary">shopping_cart</v-icon>
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
import { mapActions, mapGetters } from 'vuex'
import Menu from './Menu'
import CarrinhoDeCompras from '../carrinho-de-compras/CarrinhoDeCompras'

export default {
  components: { CarrinhoDeCompras, Menu },
  data: () => ({
    descricao: 'Dashboard'
  }),
  methods: {
    ...mapActions('Navegacao', ['abrirOuFecharMenu']),
    ...mapGetters('CarrinhoDeCompras', ['quantidade']),
    ...mapActions('CarrinhoDeCompras', ['toggleCarrinhoDeCompras'])
  }
}
</script>

<style scoped>

</style>
