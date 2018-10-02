<template>
  <v-dialog v-model="mostrarCarrinhoDeCompras" max-width="800px">
    <v-card>
      <v-card-text>
        <v-icon color="indigo">shopping_cart</v-icon>
        <span>{{quantidade()}}</span>
        <span v-if="quantidade() === 1">item</span>
        <span v-else> itens</span>
        <span> em seu carrinho</span>
      </v-card-text>
      <v-divider></v-divider>
      <v-list v-for="produto in carrinhoDeCompras" :key="produto.id">
        <v-list-tile>
          <v-list-tile-avatar >
            <img :src="produto.imagem">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-text="produto.nome"></v-list-tile-title>
            <v-list-tile-title class="text--secondary" v-text="produto.descricao"></v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-content>
            <v-btn @click="produto.decrementarQuantidade()" flat color="red">-</v-btn>
            <v-text-field v-text="produto.quantidade"></v-text-field>
            <v-btn @click="produto.incrementarQuantidade()" flat color="success">+</v-btn>
          </v-list-tile-content>
          <v-list-tile-content>
            <v-list-tile-title v-text="produto.valor"></v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-content>
            <v-list-tile-title v-text="produto.valorTotal()"></v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn @click="removerDoCarrinho(produto)" flat color="red" v-text="'X'"></v-btn>
          </v-list-tile-action>
        </v-list-tile>
        <v-divider></v-divider>
      </v-list>
      <v-card-actions>
        <v-layout>
          <v-flex>
            <v-btn flat color="indigo">Checkout</v-btn>
          </v-flex>
          <v-flex xs5>
            <v-card-text class="right"><b>Total: </b> {{valorTotal()}}</v-card-text>
          </v-flex>
        </v-layout>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  name: 'CarrinhoDeCompras',
  data: () => ({
    headers: [
      {
        text: 'Produto',
        align: 'left',
        value: 'name'
      },
      { text: 'Quantidade', value: 'quantidade' },
      { text: 'Valor', value: 'valor' },
      { text: 'Total', value: 'name', sortable: false }
    ]
  }),
  computed: {
    ...mapState('CarrinhoDeCompras', ['carrinhoDeCompras']),
    mostrarCarrinhoDeCompras: {
      get () {
        return this.$store.state.CarrinhoDeCompras.mostrarCarrinhoDeCompras
      },
      set (value) {
        this.$store.commit('CarrinhoDeCompras/TOGGLE', value)
      }
    }
  },
  methods: {
    ...mapActions('CarrinhoDeCompras', ['removerDoCarrinho']),
    ...mapGetters('CarrinhoDeCompras', ['valorTotal', 'quantidade'])
  }
}
</script>

<style scoped>

</style>
