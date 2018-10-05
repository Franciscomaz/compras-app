<template>
  <v-dialog v-model="mostrarCarrinhoDeCompras" max-width="800px">
    <v-card>
      <v-card-text>
        <v-icon color="indigo">shopping_cart</v-icon>
        <span class="ml-1">{{quantidade()}} </span>
        <span v-if="quantidade() === 1">item</span>
        <span v-else> itens</span>
        <span> em seu carrinho</span>
      </v-card-text>
      <v-divider></v-divider>
      <v-data-table
          :headers="headers"
          :items="carrinhoDeCompras"
          hide-actions
      >
        <template slot="items" slot-scope="props">
          <td class="text-xs-right">{{ props.item.nome }}</td>
          <td class="text-xs-right">
            <v-btn :disabled="props.item.apenasUm()" @click="props.item.decrementarQuantidade()" flat color="red">
              <v-icon>remove</v-icon>
            </v-btn>
            {{ props.item.quantidade }}
            <v-btn @click="props.item.incrementarQuantidade()" flat color="success">
              <v-icon>add</v-icon>
            </v-btn>
          </td>
          <td class="text-xs-right">{{props.item.valor | converterParaReais}}</td>
          <td class="text-xs-right">{{ props.item.valorTotal() | converterParaReais }}</td>
          <td class="justify-center layout px-0">
            <v-btn @click="removerDoCarrinho(props.item)" flat color="red">
              <v-icon small>delete</v-icon>
            </v-btn>
          </td>
        </template>
        <v-layout slot="no-data" class="d-flex">
          <div class="text-md-center red--text">Nenhum produto encontrado.</div>
        </v-layout>
      </v-data-table>
      <v-divider></v-divider>
      <v-card-text>
      </v-card-text>
      <v-card-actions>
        <v-layout>
          <div v-if="confimacaoDeCompra">
            <span>Deseja realizar o checkout ?</span>
            <v-btn color="success" @click="checkout(carrinhoDeCompras)" flat>Sim</v-btn>
            <v-btn color="red" flat @click="confimacaoDeCompra = false">Não</v-btn>
          </div>
          <div v-else>
            <v-btn :disabled="!possuiProduto()" @click="confimacaoDeCompra = true" flat color="indigo">Checkout</v-btn>
          </div>
        </v-layout>
        <span class="pa-2">
          <span class="text--secondary font-16 mr-2">Total: </span>
          <span>{{valorTotal() | converterParaReais}}</span>
        </span>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import axios from 'axios'

export default {
  name: 'CarrinhoDeCompras',
  data: () => ({
    headers: [
      {
        text: 'Produto',
        align: 'center',
        value: 'name'
      },
      {
        text: 'Quantidade',
        value: 'quantidade',
        align: 'center'
      },
      { text: 'Unitário', value: 'subtotal', align: 'center' },
      { text: 'Total', value: 'total', align: 'center', sortable: false },
      { text: 'Ações', value: 'acoes', align: 'center', sortable: false }
    ],
    confimacaoDeCompra: false
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
    ...mapActions('CarrinhoDeCompras', ['removerDoCarrinho', 'limparCarrinho']),
    ...mapGetters('CarrinhoDeCompras', ['valorTotal', 'quantidade', 'possuiProduto']),

    checkout (produtos) {
      this.confimacaoDeCompra = false

      const json = {
        produtos: produtos.map(produto => produto.toJson())
      }

      axios.post(process.env.VUE_APP_URL_API + 'pedidos', json).then(() => {
        this.limparCarrinho()
        this.$notify({ title: '', text: 'Pedido realizado com sucesso.', type: 'success' })
      }).catch(() => {
        this.$notify({ title: 'Erro', text: 'Ocorreu um erro.', type: 'error' })
      })
    }
  }
}
</script>

<style scoped>
  .font-16 {
    font-size: 16px;
  }
</style>
