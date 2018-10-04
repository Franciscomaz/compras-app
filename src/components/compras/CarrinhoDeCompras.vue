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
        <template slot="headerCell" slot-scope="props">
          <v-tooltip bottom>
          <span slot="activator">
           {{ props.header.text }}
          </span>
          <span>
            {{ props.header.text }}
          </span>
          </v-tooltip>
        </template>
        <template slot="items" slot-scope="props">
          <td class="text-xs-right">{{ props.item.nome }}</td>
          <td class="text-xs-right">
            <v-btn @click="props.item.decrementarQuantidade()" flat color="red">
              <v-icon>remove</v-icon>
            </v-btn>
            {{ props.item.quantidade }}
            <v-btn @click="props.item.incrementarQuantidade()" flat color="success">
              <v-icon>add</v-icon>
            </v-btn>
          </td>
          <td class="text-xs-right">{{ props.item.valor }}</td>
          <td class="text-xs-right">{{ props.item.valorTotal() }}</td>
          <td class="justify-center layout px-0">
            <v-btn @click="removerDoCarrinho(produto)" flat color="red">
              <v-icon small>delete</v-icon>
            </v-btn>
          </td>
        </template>
        <v-layout slot="no-data" class="d-flex">
          <div class="text-md-center red--text">Nenhum produto encontrado.</div>
        </v-layout>
      </v-data-table>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn :disabled="!possuiProduto()" flat color="indigo">Checkout</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
    import {mapState, mapActions, mapGetters} from 'vuex'

    export default {
        name: 'CarrinhoDeCompras',
        data: () => ({
            headers: [
                {
                    text: 'Produto',
                    align: 'left',
                    value: 'name'
                },
                {text: 'Quantidade', value: 'quantidade'},
                {text: 'Subtotal', value: 'subtotal'},
                {text: 'Total', value: 'total', sortable: false},
                {text: 'Ações', value: 'acoes', sortable: false}
            ]
        }),
        computed: {
            ...mapState('CarrinhoDeCompras', ['carrinhoDeCompras']),
            mostrarCarrinhoDeCompras: {
                get() {
                    return this.$store.state.CarrinhoDeCompras.mostrarCarrinhoDeCompras
                },
                set(value) {
                    this.$store.commit('CarrinhoDeCompras/TOGGLE', value)
                }
            }
        },
        methods: {
            ...mapActions('CarrinhoDeCompras', ['removerDoCarrinho']),
            ...mapGetters('CarrinhoDeCompras', ['valorTotal', 'quantidade', 'possuiProduto'])
        }
    }
</script>

<style scoped>
  .align-buttons {
    display: flex;
    flex-direction: row;
    align-items: initial;
  }
</style>
