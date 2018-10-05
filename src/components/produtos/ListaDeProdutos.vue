<template>
  <div>
    <cadastro-de-produto></cadastro-de-produto>
    <v-toolbar color="white">
      <v-layout>
        <v-toolbar-title class="text--secondary">
          Produtos
        </v-toolbar-title>
      </v-layout>
      <v-toolbar-title>
        <v-btn @click="toggleModal(true)" slot="activator" small fab dark color="indigo">
          <v-icon dark>add</v-icon>
        </v-btn>
      </v-toolbar-title>
    </v-toolbar>
    <v-data-table
        :headers="headers"
        :items="this.listaDeProdutos"
        hide-actions
        class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.id }}</td>
        <td class="text-xs-right">{{ props.item.nome }}</td>
        <td class="text-xs-right">{{ props.item.descricao }}</td>
        <td class="text-xs-right">{{ props.item.valor | converterParaReais }}</td>
        <td class="justify-center layout px-0">
          <v-icon
              small
              class="mr-2"
              @click="editarProduto(props.item)"
          >
            edit
          </v-icon>
          <v-icon
              small
              @click="adicionarNoCarrinho(props.item)"
          >
            shopping_cart
          </v-icon>
        </td>
      </template>
      <v-layout slot="no-data" class="d-flex">
        <div class="text-md-center red--text">Nenhum produto encontrado.</div>
      </v-layout>
    </v-data-table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import CadastroDeProduto from './CadastroDeProduto'

export default {
  components: { CadastroDeProduto },
  data: () => ({
    descricao: 'ListaDeProdutos',
    dialog: false,
    headers: [
      {
        text: 'Id',
        align: 'left',
        value: 'id'
      },
      { text: 'Nome', value: 'nome', align: 'center' },
      { text: 'Descrição', value: 'descricao', align: 'center', limit: 30 },
      { text: 'Valor', value: 'valor', align: 'center' },
      { text: 'Ações', value: 'actions', sortable: false }
    ]
  }),
  mounted () {
    this.listarProdutos()
  },
  computed: {
    ...mapState('Produtos', ['listaDeProdutos', 'categorias', 'marcas'])
  },
  watch: {
    dialog (val) {
      val || this.fechar()
    }
  },
  methods: {
    ...mapActions('Produtos', [
      'listarProdutos',
      'removerProduto',
      'assign',
      'toggleModal'
    ]),
    ...mapActions('CarrinhoDeCompras', ['adicionarNoCarrinho']),

    editarProduto (produto) {
      this.assign(produto)
      this.toggleModal(true)
    }
  }
}
</script>

<style scoped>

</style>
